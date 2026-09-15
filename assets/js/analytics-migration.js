import { applyAnalyticsEvents } from "./analytics-engine.js?gsi2";
import { createAnalyticsAttemptEvent } from "./analytics-events.js?gsi2";
import { getConfiguredPersistenceAdapter } from "./persistence-v2.js?gsi2";
import { getStoredResponses } from "./storage.js?gsi2";
import { loadReinforcementStore } from "./reinforcement-storage.js?gsi2";
import { loadAnalyticsStore, saveAnalyticsStore } from "./analytics-storage.js?gsi2";

function questionFromData(data, record) {
  return data.questions.find((question) => question.id === record.questionId
    && question.isDemo === Boolean(record.isDemo)
    && question.origin === record.origin
    && question.block_id === record.blockId
    && question.topic_id === record.topicId) || null;
}

function recordKey(record) {
  return `${record.collection || record.origin}:${record.questionId}`;
}

function validHistoryEvent(event) {
  return event && event.type === "response"
    && typeof event.eventId === "string"
    && event.eventId.startsWith("reinforcement:")
    && ["correct", "incorrect"].includes(event.result)
    && typeof event.occurredAt === "string"
    && Number.isFinite(Date.parse(event.occurredAt));
}

function isHistoricDate(value) {
  if (typeof value !== "string" || !Number.isFinite(Date.parse(value))) return false;
  const todayEnd = new Date();
  todayEnd.setUTCHours(23, 59, 59, 999);
  return Date.parse(value) <= todayEnd.getTime();
}

function hasValidReinforcementReference(record, isDemo) {
  return record && record.isDemo === Boolean(isDemo)
    && ["questionId", "collection", "origin", "blockId", "topicId"].every((key) => typeof record[key] === "string" && record[key]);
}

function reportTemplate() {
  return {
    imported: 0,
    ignored: 0,
    duplicates: 0,
    sessionsReconstructed: 0,
    unavailable: [
      "Las versiones antiguas no conservaban todos los exámenes finalizados.",
      "Las sesiones de entrenamiento y refuerzo históricas no se reconstruyen sin un resumen verificable.",
    ],
    temporalPrecision: "Los intentos importados conservan la fecha disponible; el historial de refuerzo puede estar truncado a 25 eventos por pregunta.",
    corrupt: 0,
  };
}

function addResults(report, results) {
  for (const result of results) {
    if (result.duplicate) report.duplicates += 1;
    else if (result.changed) report.imported += 1;
    else report.ignored += 1;
  }
}

function migratePhase3(store, data, isDemo, report, storage) {
  const records = getStoredResponses(storage).filter((record) => Boolean(record.isDemo) === Boolean(isDemo));
  const state = store.migrations.phase3Training;
  let startIndex = 0;
  if (state.lastResponseId) {
    const previous = records.findIndex((record) => record.responseId === state.lastResponseId);
    if (previous >= 0) startIndex = previous + 1;
    else if (Number(state.scannedRecords || 0) > records.length) {
      state.lastResponseId = records.at(-1)?.responseId || null;
      state.scannedRecords = records.length;
      state.completedAt = new Date().toISOString();
      return [];
    } else {
      report.corrupt += 1;
      return [];
    }
  }
  const events = [];
  for (const record of records.slice(startIndex)) {
    const question = questionFromData(data, record);
    const optionExists = question?.options?.some((option) => option.id === record.selectedOption);
    if (!question || typeof record.responseId !== "string" || typeof record.correct !== "boolean" || !optionExists || !isHistoricDate(record.answeredAt)) {
      report.ignored += 1;
      continue;
    }
    events.push(createAnalyticsAttemptEvent(`training:${record.responseId}:analytics`, question, {
      sessionId: null,
      sessionType: "training",
      selectedOption: record.selectedOption,
      correct: record.correct === true,
      blank: false,
      answeredAt: record.answeredAt,
      durationSeconds: null,
    }));
  }
  state.lastResponseId = records.at(-1)?.responseId || state.lastResponseId || null;
  state.scannedRecords = records.length;
  state.completedAt = new Date().toISOString();
  return events;
}

function migratePhase5(store, data, isDemo, report, storage) {
  const reinforcement = loadReinforcementStore(isDemo, storage).store;
  const state = store.migrations.phase5Reinforcement;
  const events = [];
  for (const record of Object.values(reinforcement.records || {})) {
    if (!hasValidReinforcementReference(record, isDemo)) {
      report.corrupt += 1;
      continue;
    }
    const key = recordKey(record);
    const history = Array.isArray(record.history) ? record.history : [];
    const cursor = state.cursorsByQuestion[key];
    let startIndex = 0;
    if (cursor?.eventId) {
      const position = history.findIndex((event) => event.eventId === cursor.eventId);
      if (position >= 0) startIndex = position + 1;
      else if (history.length > 0) {
        state.gaps = Number(state.gaps || 0) + 1;
        report.ignored += history.length;
        continue;
      }
    }
    const question = data.questions.find((candidate) => candidate.id === record.questionId
      && candidate.collection === record.collection
      && candidate.isDemo === Boolean(isDemo)) || {
      id: record.questionId,
      collection: record.collection,
      origin: record.origin,
      block_id: record.blockId,
      topic_id: record.topicId,
      isDemo: Boolean(isDemo),
    };
    for (const event of history.slice(startIndex)) {
      if (!validHistoryEvent(event) || !isHistoricDate(event.occurredAt)) {
        report.ignored += 1;
        continue;
      }
      const doubtId = event.eventId.replace(/:response$/, ":assessment:doubt");
      const doubted = history.some((candidate) => candidate.eventId === doubtId && candidate.type === "assessment" && candidate.assessment === "doubt");
      const parts = event.eventId.split(":");
      events.push(createAnalyticsAttemptEvent(`${event.eventId}:analytics`, question, {
        sessionId: parts.length > 2 ? parts[1] : null,
        sessionType: "reinforcement",
        selectedOption: null,
        correct: event.result === "correct",
        blank: false,
        doubted,
        answeredAt: event.occurredAt,
        durationSeconds: null,
      }));
    }
    if (history.at(-1)?.eventId) state.cursorsByQuestion[key] = { eventId: history.at(-1).eventId, occurredAt: history.at(-1).occurredAt };
  }
  state.completedAt = new Date().toISOString();
  return events;
}

export function migrateAnalytics(data, isDemo, storage = getConfiguredPersistenceAdapter()) {
  const loaded = loadAnalyticsStore(isDemo, storage);
  const report = reportTemplate();
  const store = loaded.store;
  try {
    const events = [
      ...migratePhase3(store, data, isDemo, report, storage),
      ...migratePhase5(store, data, isDemo, report, storage),
    ];
    const applied = applyAnalyticsEvents(store, events);
    addResults(report, applied.results);
    applied.store.migrations.phase3Training.imported = Number(applied.store.migrations.phase3Training.imported || 0) + report.imported;
    applied.store.migrations.phase3Training.ignored = Number(applied.store.migrations.phase3Training.ignored || 0) + report.ignored;
    applied.store.diagnostics = {
      ...applied.store.diagnostics,
      migration: {
        imported: report.imported,
        ignored: report.ignored,
        duplicates: report.duplicates,
        corrupt: report.corrupt,
        unavailable: report.unavailable,
        temporalPrecision: report.temporalPrecision,
      },
    };
    const saved = saveAnalyticsStore(isDemo, applied.store, storage);
    return { ...saved, report, results: applied.results };
  } catch (error) {
    return {
      saved: false,
      report,
      results: [],
      error: error instanceof Error ? error.message : "No se pudo migrar el historial analítico.",
    };
  }
}

export function rebuildAnalytics(data, isDemo, storage = getConfiguredPersistenceAdapter()) {
  const key = isDemo ? "gsi.analytics.demo.v1" : "gsi.analytics.real.v1";
  const isolatedStorage = {
    getItem(candidate) { return candidate === key ? null : storage.getItem(candidate); },
    setItem(candidate, value) { return storage.setItem(candidate, value); },
    removeItem(candidate) { return storage.removeItem(candidate); },
  };
  return migrateAnalytics(data, isDemo, isolatedStorage);
}
