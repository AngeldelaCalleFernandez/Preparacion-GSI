import { isDemoMode, loadAppData, loadQuestionData } from "./data-service.js?gsi3";
import { initRouter, resolveRoute, syncRouter } from "./router.js?gsi2";
import { loadTopicContentIndex } from "./topic-content-service.js?gsi2";
import { initSyllabusView } from "./syllabus-view.js?gsi2";
import { initStudyPlan } from "./study-plan.js?gsi2";
import { initStudyProgress } from "./study-progress.js?gsi2";
import { configurePersistenceV2 } from "./persistence-v2.js?gsi2";
import { migrateV1ToV2 } from "./persistence-migration-v2.js?gsi2";
import { initWrittenPractice } from "./written-practice.js?gsi2";
import { initProgressBackup } from "./progress-backup.js?gsi3";
import { initStatistics, renderAnalyticsHome } from "./statistics.js?gsi2";
import { clearStatus, setStatus, setText } from "./ui.js?gsi2";

const QUESTION_ROUTES = new Set(["entrenamiento", "examen", "refuerzo", "estadisticas"]);
let coreData = null;
let fullDataPromise = null;
let questionFeaturesPromise = null;

function renderHomeSummary(data) {
  const topicCount = data.syllabus.blocks.reduce((total, block) => total + block.topics.length, 0);
  const activeRealQuestions = data.coverage.question_totals.active;
  setText("#home-block-count", data.syllabus.blocks.length);
  setText("#home-topic-count", topicCount);
  setText("#home-question-count", activeRealQuestions);
  setText("#home-update-count", data.updates.updates.length);
}

function getFullData() {
  if (!fullDataPromise) {
    fullDataPromise = loadQuestionData(coreData).catch((error) => {
      fullDataPromise = null;
      throw error;
    });
  }
  return fullDataPromise;
}

async function initQuestionFeatures() {
  if (questionFeaturesPromise) return questionFeaturesPromise;
  setStatus("Cargando y validando los bancos de preguntas…");
  questionFeaturesPromise = (async () => {
    const [data, trainingModule, examModule, reinforcementMigrationModule, reinforcementModule, analyticsMigrationModule] = await Promise.all([
      getFullData(),
      import("./training.js?gsi3"),
      import("./exam.js?gsi2"),
      import("./reinforcement-migration.js?gsi2"),
      import("./reinforcement.js?gsi2"),
      import("./analytics-migration.js?gsi2"),
    ]);
    const realMigration = reinforcementMigrationModule.migratePhase3Training(data, false);
    const demoMigration = data.demoEnabled ? reinforcementMigrationModule.migratePhase3Training(data, true) : null;
    const realAnalyticsMigration = analyticsMigrationModule.migrateAnalytics(data, false);
    const demoAnalyticsMigration = data.demoEnabled ? analyticsMigrationModule.migrateAnalytics(data, true) : null;
    if (realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error) {
      throw new Error(realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error || "No se pudo migrar el historial local.");
    }
    trainingModule.initTraining(data);
    examModule.initExam(data);
    reinforcementModule.initReinforcement(data);
    initStatistics(data);
    renderAnalyticsHome(data);
    clearStatus();
    return data;
  })().catch((error) => {
    questionFeaturesPromise = null;
    setStatus(error instanceof Error ? error.message : "No se pudieron cargar los bancos de preguntas.", "error");
    throw error;
  });
  return questionFeaturesPromise;
}

function loadQuestionsForRoute(route) {
  if (QUESTION_ROUTES.has(route)) void initQuestionFeatures().catch(() => {});
}

async function start() {
  initRouter();
  const demoEnabled = isDemoMode();
  if (demoEnabled) {
    document.querySelector("#demo-banner").hidden = false;
  }
  if (window.location.protocol === "file:") {
    setStatus("Abre esta aplicación con un servidor HTTP, por ejemplo: python -m http.server 8000.", "error");
    return;
  }
  setStatus("Cargando temario, fuentes y actualizaciones…");
  try {
    const [data, topicContentIndex] = await Promise.all([loadAppData(), loadTopicContentIndex()]);
    coreData = data;
    configurePersistenceV2(data.runtimeContext, window.localStorage);
    const persistenceMigration = migrateV1ToV2(data.runtimeContext, window.localStorage);
    if (!persistenceMigration.ok) {
      setStatus(persistenceMigration.error || "No se pudo migrar el historial local a persistencia v2.", "error");
      return;
    }
    renderHomeSummary(data);
    initSyllabusView(data, topicContentIndex);
    await initWrittenPractice(data);
    initStudyPlan(data);
    initStudyProgress(data);
    initProgressBackup(data, getFullData);
    renderAnalyticsHome({ ...data, questions: [] });
    window.addEventListener("gsi:routechange", (event) => loadQuestionsForRoute(event.detail?.route));
    // Las vistas se resuelven exclusivamente desde el hash. Esta segunda
    // sincronización mantiene la ruta inicial si cualquier módulo de carga
    // ha actualizado el DOM durante la inicialización asíncrona.
    syncRouter(false);
    if (data.demoEnabled) {
      setStatus("Datos cargados en modo demostración. Las preguntas demo son ficticias y no oficiales.", "success");
    } else {
      clearStatus();
    }
    loadQuestionsForRoute(resolveRoute());
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "No se pudieron cargar los datos de la aplicación.", "error");
  }
}

start();
