import { describeQuestionSource } from "./data-service.js";
import {
  createQuestionReference,
  getTemporalState,
  selectReinforcementQuestions,
} from "./reinforcement-engine.js";
import {
  applyStoredReinforcementEvents,
  clearAllReinforcement,
  clearDemoReinforcement,
  clearReinforcementSession,
  createReinforcementEvent,
  createReinforcementSession,
  getReinforcementSummary,
  loadReinforcementStore,
  saveReinforcementSession,
} from "./reinforcement-storage.js?m3";
import {
  createAnalyticsAnnotationEvent,
  createAnalyticsAttemptEvent,
  createAnalyticsSession,
  createAnalyticsSessionEvent,
} from "./analytics-events.js";
import { applyStoredAnalyticsEvents } from "./analytics-storage.js?m3";
import { createElement, setStatus } from "./ui.js";

function originLabel(origin) {
  return { official: "Oficial", ai: "IA", manual: "Manual", adapted: "Adaptada" }[origin] || origin;
}

function recordKey(reference) {
  return `${reference.collection}:${reference.questionId}`;
}

function formatDate(value) {
  if (!value || !Number.isFinite(Date.parse(value))) return "Sin fecha programada";
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(new Date(value));
}

function feedbackFor(question, selectedOption, correct) {
  if (correct) return question.feedback?.correct || "Respuesta correcta.";
  return question.feedback?.incorrect_options?.[selectedOption] || question.feedback?.correct || "Consulta la respuesta correcta y su fuente.";
}

function sourceCard(question, indexes) {
  const source = describeQuestionSource(question, indexes);
  const card = createElement("section", "source-card");
  card.append(createElement("h3", "", "Fuente"));
  const title = source.url ? document.createElement("a") : createElement("span");
  title.textContent = source.title;
  if (source.url) {
    title.href = source.url;
    title.target = "_blank";
    title.rel = "noreferrer";
  }
  const details = createElement("p", "");
  details.append(title, document.createTextNode(` · ${source.publisher} · ${source.locator}`));
  card.append(details);
  return card;
}

function questionForReference(data, reference) {
  return data.questions.find((question) => question.id === reference.questionId
    && question.collection === reference.collection
    && question.isDemo === reference.isDemo
    && question.origin === reference.origin
    && question.block_id === reference.blockId
    && question.topic_id === reference.topicId);
}

function eventFromRecord(id, type, record, extra = {}) {
  return {
    id,
    type,
    reference: {
      questionId: record.questionId,
      collection: record.collection,
      origin: record.origin,
      blockId: record.blockId,
      topicId: record.topicId,
      isDemo: record.isDemo,
    },
    occurredAt: new Date().toISOString(),
    ...extra,
  };
}

export function initReinforcement(data) {
  const storeSelect = document.querySelector("#reinforcement-store");
  const filterForm = document.querySelector("#reinforcement-filters");
  const filterBlock = document.querySelector("#reinforcement-block");
  const filterTopic = document.querySelector("#reinforcement-topic");
  const filterOrigin = document.querySelector("#reinforcement-origin");
  const filterPriority = document.querySelector("#reinforcement-priority");
  const filterStatus = document.querySelector("#reinforcement-status");
  const filterOnlyDue = document.querySelector("#reinforcement-only-due");
  const filterOnlyDefective = document.querySelector("#reinforcement-only-defective");
  const listNode = document.querySelector("#reinforcement-list");
  const summaryNode = document.querySelector("#reinforcement-summary");
  const demoSummaryNode = document.querySelector("#reinforcement-demo-summary");
  const sessionForm = document.querySelector("#reinforcement-session-form");
  const sessionBlock = document.querySelector("#reinforcement-session-block");
  const sessionTopic = document.querySelector("#reinforcement-session-topic");
  const sessionOrigin = document.querySelector("#reinforcement-session-origin");
  const quantity = document.querySelector("#reinforcement-quantity");
  const order = document.querySelector("#reinforcement-order");
  const onlyDue = document.querySelector("#reinforcement-session-only-due");
  const includeFuture = document.querySelector("#reinforcement-include-future");
  const availabilityNode = document.querySelector("#reinforcement-availability");
  const recovery = document.querySelector("#reinforcement-recovery");
  const resume = document.querySelector("#reinforcement-resume");
  const discard = document.querySelector("#reinforcement-discard");
  const activeNode = document.querySelector("#reinforcement-active");
  const questionNode = document.querySelector("#reinforcement-question");
  const incidentsNode = document.querySelector("#reinforcement-incidents-list");
  const clearDemo = document.querySelector("#clear-demo-reinforcement");
  const clearAll = document.querySelector("#clear-all-reinforcement");
  let activeSession = null;
  let pendingRecovery = null;

  if (data.demoEnabled) storeSelect.add(new Option("Refuerzo demo (ficticio)", "demo"));
  else demoSummaryNode.textContent = "El refuerzo demo está aislado. Ábrelo con ?demo=1 para consultarlo o eliminarlo.";

  function isDemoStore() {
    return storeSelect.value === "demo" && data.demoEnabled;
  }

  function currentStore() {
    return loadReinforcementStore(isDemoStore());
  }

  function analyticsAttemptId(session, question) {
    return `reinforcement:${session.sessionId}:${question.collection}:${question.id}:analytics`;
  }

  function analyticsEventsForSession(session) {
    const attempts = [];
    for (const reference of session.questionRefs) {
      const question = questionForReference(data, reference);
      const response = session.responsesByQuestionId[recordKey(reference)];
      if (!question || !response) continue;
      attempts.push(createAnalyticsAttemptEvent(analyticsAttemptId(session, question), question, {
        sessionId: session.sessionId,
        sessionType: "reinforcement",
        selectedOption: response.selectedOption,
        correct: response.correct,
        answeredAt: response.answeredAt,
        durationSeconds: response.durationSeconds,
        doubted: response.assessment === "doubt",
      }));
    }
    const summary = createAnalyticsSession({
      sessionId: session.sessionId,
      sessionType: "reinforcement",
      isDemo: session.isDemo,
      startedAt: session.startedAt,
      finishedAt: new Date().toISOString(),
      configuredQuestions: session.questionRefs.length,
      attempts: attempts.map((event) => event.attempt),
    });
    return [...attempts, createAnalyticsSessionEvent(`reinforcement:${session.sessionId}:summary`, summary)];
  }

  function populateTopics(blockId, topicSelect) {
    topicSelect.replaceChildren(new Option("Todos los temas", ""));
    const block = data.indexes.blocksById.get(blockId);
    topicSelect.disabled = !block;
    if (!block) return;
    for (const topic of block.topics) topicSelect.add(new Option(`Tema ${topic.number}. ${topic.title}`, topic.id));
  }

  function addBlocks(select) {
    for (const block of data.syllabus.blocks) select.add(new Option(`${block.id} · ${block.title}`, block.id));
  }

  function renderSummary() {
    const real = getReinforcementSummary(false);
    const selected = getReinforcementSummary(isDemoStore());
    const demo = getReinforcementSummary(true);
    const cards = [
      ["Pendientes", selected.due],
      ["Atrasadas", selected.overdue],
      ["Futuras", selected.future],
      ["Completadas", selected.completed],
      ["Incidencias", selected.defective],
    ];
    summaryNode.replaceChildren();
    for (const [label, value] of cards) {
      const card = createElement("article", "summary-card");
      card.append(createElement("p", "summary-card__value", String(value)), createElement("p", "summary-card__label", label));
      summaryNode.append(card);
    }
    demoSummaryNode.textContent = data.demoEnabled
      ? `Registros reales: ${real.total}. Registros demo: ${demo.total}. Los dos almacenes se mantienen separados.`
      : `Registros reales: ${real.total}. Registros demo aislados: ${demo.total}; sus preguntas solo se consultan con ?demo=1.`;
  }

  function filterRecords(records) {
    return Object.values(records).filter((record) => {
      const temporal = getTemporalState(record);
      if (filterBlock.value && record.blockId !== filterBlock.value) return false;
      if (filterTopic.value && record.topicId !== filterTopic.value) return false;
      if (filterOrigin.value && record.origin !== filterOrigin.value) return false;
      if (filterPriority.value && record.priority !== filterPriority.value) return false;
      if (filterStatus.value && record.status !== filterStatus.value) return false;
      if (filterOnlyDue.checked && !temporal.isDue) return false;
      if (filterOnlyDefective.checked && record.status !== "defective") return false;
      return true;
    });
  }

  function renderIncidents(records) {
    incidentsNode.replaceChildren();
    const byKey = new Map(data.questions.map((question) => [recordKey(createQuestionReference(question)), question]));
    const incidentRecords = Object.values(records).filter((record) => record.status === "defective" || !byKey.get(recordKey(record)) || !byKey.get(recordKey(record)).is_active);
    if (incidentRecords.length === 0) {
      incidentsNode.append(createElement("p", "muted", "No hay incidencias registradas."));
      return;
    }
    for (const record of incidentRecords) {
      const card = createElement("article", "reinforcement-card");
      const question = byKey.get(recordKey(record));
      const reason = record.status === "defective" ? "Marcada como potencialmente defectuosa" : !question ? "La pregunta ya no existe en los bancos cargados" : "La pregunta está inactiva";
      card.append(createElement("h3", "", record.questionId), createElement("p", "", reason));
      if (record.status === "defective") {
        const restore = createElement("button", "button button--secondary", "Restaurar pregunta");
        restore.type = "button";
        restore.addEventListener("click", () => {
          const event = eventFromRecord(`reinforcement:restore:${recordKey(record)}:${record.updatedAt}`, "restore", record);
          const saved = applyStoredReinforcementEvents(isDemoStore(), [event]);
          setStatus(saved.saved ? "Pregunta restaurada para refuerzo." : saved.error, saved.saved ? "success" : "error");
          renderAll();
        });
        card.append(restore);
      }
      incidentsNode.append(card);
    }
  }

  function renderList() {
    const loaded = currentStore();
    const records = filterRecords(loaded.store.records);
    listNode.replaceChildren();
    if (records.length === 0) {
      listNode.append(createElement("p", "muted", "No hay registros que coincidan con los filtros."));
      renderIncidents(loaded.store.records);
      return;
    }
    const topics = data.indexes.topicsById;
    for (const record of records.sort((left, right) => String(left.nextReviewAt || "").localeCompare(String(right.nextReviewAt || "")))) {
      const temporal = getTemporalState(record);
      const card = createElement("article", "reinforcement-card");
      card.append(createElement("h3", "", record.questionId));
      card.append(createElement("p", "", `${record.blockId} · ${topics.get(record.topicId)?.title || record.topicId}`));
      card.append(createElement("p", "", `${originLabel(record.origin)} · Prioridad ${record.priority} · ${record.status}`));
      card.append(createElement("p", "", `${temporal.timeState || "sin fecha"} · Próxima revisión: ${formatDate(record.nextReviewAt)}`));
      const actions = createElement("div", "action-row");
      if (record.status === "scheduled") {
        const retire = createElement("button", "button button--secondary", "Retirar de refuerzo");
        retire.type = "button";
        retire.addEventListener("click", () => {
          const event = eventFromRecord(`reinforcement:retire:${recordKey(record)}:${record.updatedAt}`, "retire", record);
          const saved = applyStoredReinforcementEvents(isDemoStore(), [event]);
          setStatus(saved.saved ? "Pregunta retirada del refuerzo." : saved.error, saved.saved ? "success" : "error");
          renderAll();
        });
        actions.append(retire);
      }
      card.append(actions);
      listNode.append(card);
    }
    renderIncidents(loaded.store.records);
  }

  function sessionConfig() {
    return {
      blockId: sessionBlock.value,
      topicId: sessionTopic.value,
      origin: sessionOrigin.value,
      onlyDue: onlyDue.checked,
      includeFuture: includeFuture.checked,
      order: order.value,
    };
  }

  function updateAvailability() {
    const loaded = currentStore();
    const selection = selectReinforcementQuestions(loaded.store.records, data.questions, sessionConfig());
    quantity.max = Math.max(selection.selected.length, 1);
    availabilityNode.textContent = selection.selected.length === 0
      ? "No hay preguntas resolubles y pendientes para esta configuración."
      : `${selection.selected.length} pregunta${selection.selected.length === 1 ? "" : "s"} disponible${selection.selected.length === 1 ? "" : "s"} para esta sesión.`;
  }

  function resolveSession(session) {
    if (!session || session.isDemo !== isDemoStore() || !Array.isArray(session.questionRefs)) return { error: "La sesión pendiente no pertenece a los datos seleccionados." };
    const questions = [];
    for (const reference of session.questionRefs) {
      const question = questionForReference(data, reference);
      if (!question || !question.is_active) return { error: `No se puede recuperar ${reference.questionId}: ya no está disponible.` };
      questions.push(question);
    }
    return { questions };
  }

  function persistActive() {
    activeSession.updatedAt = new Date().toISOString();
    const saved = saveReinforcementSession(activeSession.isDemo, activeSession);
    if (!saved.saved) setStatus(saved.error || "No se pudo guardar la sesión de refuerzo.", "error");
    return saved.saved;
  }

  function finishActive() {
    const analytics = applyStoredAnalyticsEvents(activeSession.isDemo, analyticsEventsForSession(activeSession));
    clearReinforcementSession(activeSession.isDemo);
    activeSession = null;
    activeNode.hidden = true;
    sessionForm.hidden = false;
    setStatus(
      analytics.saved ? "Sesión de refuerzo finalizada." : analytics.error || "La sesión finalizó, pero no se pudo guardar su resumen estadístico.",
      analytics.saved ? "success" : "error",
    );
    renderAll();
  }

  function renderActive() {
    if (!activeSession) return;
    const resolved = resolveSession(activeSession);
    if (resolved.error) {
      setStatus(resolved.error, "error");
      return;
    }
    const question = resolved.questions[activeSession.currentIndex];
    if (!question) {
      finishActive();
      return;
    }
    const reference = createQuestionReference(question);
    const responseKey = recordKey(reference);
    const response = activeSession.responsesByQuestionId[responseKey];
    activeNode.hidden = false;
    sessionForm.hidden = true;
    recovery.hidden = true;
    questionNode.replaceChildren();
    questionNode.append(createElement("p", "question-progress", `Pregunta ${activeSession.currentIndex + 1} de ${resolved.questions.length}`));
    questionNode.append(createElement("p", "pill", `${originLabel(question.origin)} · ${question.block_id} · ${question.topic_id}`));
    questionNode.append(createElement("p", "question-statement", question.statement));
    if (!response) {
      activeSession.questionStartedAtByQuestionId ||= {};
      if (!activeSession.questionStartedAtByQuestionId[responseKey]) {
        activeSession.questionStartedAtByQuestionId[responseKey] = new Date().toISOString();
        persistActive();
      }
      const options = createElement("div", "question-options");
      options.setAttribute("role", "group");
      options.setAttribute("aria-label", "Opciones de respuesta");
      for (const option of question.options) {
        const button = createElement("button", "option-button");
        button.type = "button";
        button.append(createElement("span", "option-letter", option.id), createElement("span", "", option.text));
        button.addEventListener("click", () => answerReinforcement(question, option.id));
        options.append(button);
      }
      questionNode.append(options);
      return;
    }
    const correctOption = question.options.find((option) => option.id === question.correct_option);
    const panel = createElement("section", `answer-panel${response.correct ? "" : " answer-panel--incorrect"}`);
    panel.append(createElement("h3", "", response.correct ? "Respuesta correcta" : "Respuesta incorrecta"));
    panel.append(createElement("p", "", `La opción correcta es ${correctOption.id}: ${correctOption.text}`));
    panel.append(createElement("p", "", feedbackFor(question, response.selectedOption, response.correct)));
    panel.append(sourceCard(question, data.indexes));
    if (!response.assessment) {
      panel.append(createElement("p", "", "Registra una valoración para continuar."));
      const actions = createElement("div", "action-row");
      const known = createElement("button", "button", "La sabía");
      known.type = "button";
      known.disabled = !response.correct;
      known.addEventListener("click", () => assessReinforcement(question, response, "known"));
      const doubt = createElement("button", "button button--secondary", "Dudé");
      doubt.type = "button";
      doubt.addEventListener("click", () => assessReinforcement(question, response, "doubt"));
      const unknown = createElement("button", "button button--secondary", "No la sabía");
      unknown.type = "button";
      unknown.addEventListener("click", () => assessReinforcement(question, response, "unknown"));
      const defective = createElement("button", "button button--danger", "Pregunta potencialmente defectuosa");
      defective.type = "button";
      defective.addEventListener("click", () => assessReinforcement(question, response, "defective"));
      actions.append(known, doubt, unknown, defective);
      panel.append(actions);
    } else {
      const record = loadReinforcementStore(activeSession.isDemo).store.records[responseKey];
      panel.append(createElement("p", "", response.assessment === "defective"
        ? "La pregunta se ha aislado como incidencia."
        : `Próxima revisión: ${formatDate(record?.nextReviewAt)}.`));
      const next = createElement("button", "button", activeSession.currentIndex + 1 === resolved.questions.length ? "Finalizar refuerzo" : "Siguiente pregunta");
      next.type = "button";
      next.addEventListener("click", () => {
        activeSession.currentIndex += 1;
        if (activeSession.currentIndex >= resolved.questions.length) finishActive();
        else {
          persistActive();
          renderActive();
        }
      });
      panel.append(next);
    }
    questionNode.append(panel);
  }

  function answerReinforcement(question, selectedOption) {
    const reference = createQuestionReference(question);
    const key = recordKey(reference);
    const correct = selectedOption === question.correct_option;
    const attemptId = `reinforcement:${activeSession.sessionId}:${key}:response`;
    const event = createReinforcementEvent(attemptId, "response", question, { result: correct ? "correct" : "incorrect" });
    const saved = applyStoredReinforcementEvents(activeSession.isDemo, [event]);
    if (!saved.saved) setStatus(saved.error || "No se pudo guardar la respuesta de refuerzo.", "error");
    const startedAt = activeSession.questionStartedAtByQuestionId?.[key];
    const durationSeconds = Number.isFinite(Date.parse(startedAt))
      ? Math.max(0, (Date.now() - Date.parse(startedAt)) / 1000)
      : null;
    activeSession.responsesByQuestionId[key] = { attemptId, selectedOption, correct, answeredAt: event.occurredAt, durationSeconds, assessment: null, assessedAt: null };
    const analyticsEvent = createAnalyticsAttemptEvent(analyticsAttemptId(activeSession, question), question, {
      sessionId: activeSession.sessionId,
      sessionType: "reinforcement",
      selectedOption,
      correct,
      answeredAt: event.occurredAt,
      durationSeconds,
    });
    const analyticsSaved = applyStoredAnalyticsEvents(activeSession.isDemo, [analyticsEvent]);
    if (!analyticsSaved.saved) setStatus(analyticsSaved.error || "La respuesta se corrigió, pero no se pudo actualizar la estadística.", "error");
    persistActive();
    renderActive();
  }

  function assessReinforcement(question, response, assessment) {
    const reference = createQuestionReference(question);
    const key = recordKey(reference);
    const responseEvent = createReinforcementEvent(response.attemptId, "response", question, { result: response.correct ? "correct" : "incorrect", occurredAt: response.answeredAt });
    const event = assessment === "defective"
      ? createReinforcementEvent(`reinforcement:${activeSession.sessionId}:${key}:defective`, "defective", question)
      : createReinforcementEvent(`reinforcement:${activeSession.sessionId}:${key}:assessment:${assessment}`, "assessment", question, { assessment });
    const saved = applyStoredReinforcementEvents(activeSession.isDemo, [responseEvent, event]);
    if (!saved.saved) {
      setStatus(saved.error || "No se pudo guardar la valoración de refuerzo.", "error");
      return;
    }
    if (assessment === "doubt") {
      const annotation = createAnalyticsAnnotationEvent(
        `reinforcement:${activeSession.sessionId}:${question.collection}:${question.id}:annotation:doubt`,
        activeSession.isDemo,
        analyticsAttemptId(activeSession, question),
        { doubted: true },
      );
      const analytics = applyStoredAnalyticsEvents(activeSession.isDemo, [annotation]);
      if (!analytics.saved) setStatus(analytics.error || "El refuerzo se actualizó, pero no se pudo anotar la duda.", "error");
    }
    response.assessment = assessment;
    response.assessedAt = event.occurredAt;
    persistActive();
    renderActive();
    renderAll();
  }

  function renderRecovery() {
    const candidates = [isDemoStore()];
    if (data.demoEnabled && !candidates.includes(true)) candidates.push(true);
    pendingRecovery = activeSession ? null : candidates
      .map((isDemo) => ({ isDemo, session: loadReinforcementStore(isDemo).store.activeSession }))
      .find((candidate) => candidate.session) || null;
    recovery.hidden = !pendingRecovery;
    if (pendingRecovery) resume.textContent = pendingRecovery.isDemo ? "Reanudar sesión demo" : "Reanudar";
  }

  function renderAll() {
    renderSummary();
    renderList();
    updateAvailability();
    renderRecovery();
  }

  addBlocks(filterBlock);
  addBlocks(sessionBlock);
  filterBlock.addEventListener("change", () => { populateTopics(filterBlock.value, filterTopic); renderList(); });
  sessionBlock.addEventListener("change", () => { populateTopics(sessionBlock.value, sessionTopic); updateAvailability(); });
  for (const control of [storeSelect, filterTopic, filterOrigin, filterPriority, filterStatus, filterOnlyDue, filterOnlyDefective]) {
    control.addEventListener("change", () => { activeSession = null; sessionForm.hidden = false; renderAll(); });
  }
  for (const control of [sessionTopic, sessionOrigin, quantity, order, onlyDue, includeFuture]) control.addEventListener("change", updateAvailability);
  includeFuture.addEventListener("change", () => { if (includeFuture.checked) onlyDue.checked = false; updateAvailability(); });
  onlyDue.addEventListener("change", () => { if (onlyDue.checked) includeFuture.checked = false; updateAvailability(); });
  filterForm.addEventListener("input", renderList);
  sessionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loaded = currentStore();
    const config = sessionConfig();
    const selection = selectReinforcementQuestions(loaded.store.records, data.questions, config);
    const requested = Number(quantity.value);
    if (!Number.isInteger(requested) || requested < 1 || selection.selected.length === 0) {
      setStatus("No hay preguntas de refuerzo disponibles para iniciar la sesión.", "error");
      return;
    }
    if (selection.selected.length < requested) {
      setStatus(`Se solicitaron ${requested} preguntas y solo hay ${selection.selected.length} disponibles con esta configuración.`, "error");
      return;
    }
    activeSession = createReinforcementSession(isDemoStore(), selection.selected.slice(0, requested), config);
    const saved = persistActive();
    if (!saved) return;
    setStatus("Sesión de refuerzo iniciada.", "success");
    renderActive();
  });
  resume.addEventListener("click", () => {
    const session = pendingRecovery?.session;
    if (pendingRecovery?.isDemo && !isDemoStore()) {
      storeSelect.value = "demo";
      renderSummary();
      renderList();
      updateAvailability();
    }
    const resolved = resolveSession(session);
    if (resolved.error) {
      setStatus(resolved.error, "error");
      return;
    }
    activeSession = session;
    renderActive();
  });
  discard.addEventListener("click", () => {
    if (!window.confirm("¿Descartar la sesión de refuerzo pendiente?")) return;
    const saved = clearReinforcementSession(pendingRecovery?.isDemo ?? isDemoStore());
    setStatus(saved.saved ? "Sesión de refuerzo descartada." : saved.error, saved.saved ? "success" : "error");
    renderAll();
  });
  clearDemo.addEventListener("click", () => {
    if (!window.confirm("¿Borrar únicamente todo el refuerzo de demostración guardado en este navegador?")) return;
    const cleared = clearDemoReinforcement();
    setStatus(cleared ? "Refuerzo demo eliminado." : "No se pudo borrar el refuerzo demo.", cleared ? "success" : "error");
    if (isDemoStore()) { activeSession = null; activeNode.hidden = true; sessionForm.hidden = false; }
    renderAll();
  });
  clearAll.addEventListener("click", () => {
    if (!window.confirm("¿Borrar todo el refuerzo real y de demostración guardado en este navegador?")) return;
    const cleared = clearAllReinforcement();
    activeSession = null;
    activeNode.hidden = true;
    sessionForm.hidden = false;
    setStatus(cleared ? "Todo el refuerzo local ha sido eliminado." : "No se pudo borrar todo el refuerzo.", cleared ? "success" : "error");
    renderAll();
  });
  renderAll();
}
