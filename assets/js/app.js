import { isDemoMode, loadAppData } from "./data-service.js?gsi2";
import { initRouter, syncRouter } from "./router.js?gsi2";
import { loadTopicContentIndex } from "./topic-content-service.js?gsi2";
import { initSyllabusView } from "./syllabus-view.js?gsi2";
import { configurePersistenceV2 } from "./persistence-v2.js?gsi2";
import { migrateV1ToV2 } from "./persistence-migration-v2.js?gsi2";
import { initTraining } from "./training.js?gsi2";
import { initExam } from "./exam.js?gsi2";
import { initWrittenPractice } from "./written-practice.js?gsi2";
import { initProgressBackup } from "./progress-backup.js?gsi2";
import { migratePhase3Training } from "./reinforcement-migration.js?gsi2";
import { initReinforcement } from "./reinforcement.js?gsi2";
import { migrateAnalytics } from "./analytics-migration.js?gsi2";
import { initStatistics, renderAnalyticsHome } from "./statistics.js?gsi2";
import { clearStatus, setStatus, setText } from "./ui.js?gsi2";

function renderHomeSummary(data) {
  const topicCount = data.syllabus.blocks.reduce((total, block) => total + block.topics.length, 0);
  const activeRealQuestions = data.questions.filter((question) => question.is_active && !question.isDemo).length;
  setText("#home-block-count", data.syllabus.blocks.length);
  setText("#home-topic-count", topicCount);
  setText("#home-question-count", activeRealQuestions);
  setText("#home-update-count", data.updates.updates.length);
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
  setStatus("Cargando temario, fuentes, actualizaciones y bancos de preguntas…");
  try {
    const [data, topicContentIndex] = await Promise.all([loadAppData(), loadTopicContentIndex()]);
    configurePersistenceV2(data.runtimeContext, window.localStorage);
    const persistenceMigration = migrateV1ToV2(data.runtimeContext, window.localStorage);
    if (!persistenceMigration.ok) {
      setStatus(persistenceMigration.error || "No se pudo migrar el historial local a persistencia v2.", "error");
      return;
    }
    renderHomeSummary(data);
    initSyllabusView(data, topicContentIndex);
    const realMigration = migratePhase3Training(data, false);
    const demoMigration = data.demoEnabled ? migratePhase3Training(data, true) : null;
    const realAnalyticsMigration = migrateAnalytics(data, false);
    const demoAnalyticsMigration = data.demoEnabled ? migrateAnalytics(data, true) : null;
    if (realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error) {
      setStatus(realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error || "No se pudo migrar el historial local.", "error");
      return;
    }
    initTraining(data);
    initExam(data);
    await initWrittenPractice(data);
    initProgressBackup(data);
    initReinforcement(data);
    initStatistics(data);
    renderAnalyticsHome(data);
    // Las vistas se resuelven exclusivamente desde el hash. Esta segunda
    // sincronización mantiene la ruta inicial si cualquier módulo de carga
    // ha actualizado el DOM durante la inicialización asíncrona.
    syncRouter(false);
    if (data.demoEnabled) {
      setStatus("Datos cargados en modo demostración. Las preguntas demo son ficticias y no oficiales.", "success");
    } else {
      clearStatus();
    }
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "No se pudieron cargar los datos de la aplicación.", "error");
  }
}

start();
