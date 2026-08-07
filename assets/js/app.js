import { isDemoMode, loadAppData } from "./data-service.js?m2";
import { initRouter, syncRouter } from "./router.js?m2";
import { loadTopicContentIndex } from "./topic-content-service.js?phase7a";
import { initSyllabusView } from "./syllabus-view.js?m2";
import { initTraining } from "./training.js";
import { initExam } from "./exam.js";
import { migratePhase3Training } from "./reinforcement-migration.js";
import { initReinforcement } from "./reinforcement.js";
import { migrateAnalytics } from "./analytics-migration.js";
import { initStatistics, renderAnalyticsHome } from "./statistics.js";
import { clearStatus, setStatus, setText } from "./ui.js";

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
    renderHomeSummary(data);
    initSyllabusView(data, topicContentIndex);
    const realMigration = migratePhase3Training(data, false);
    const demoMigration = data.demoEnabled ? migratePhase3Training(data, true) : null;
    const realAnalyticsMigration = migrateAnalytics(data, false);
    const demoAnalyticsMigration = data.demoEnabled ? migrateAnalytics(data, true) : null;
    initTraining(data);
    initExam(data);
    initReinforcement(data);
    initStatistics(data);
    renderAnalyticsHome(data);
    // Las vistas se resuelven exclusivamente desde el hash. Esta segunda
    // sincronización mantiene la ruta inicial si cualquier módulo de carga
    // ha actualizado el DOM durante la inicialización asíncrona.
    syncRouter(false);
    if (realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error) {
      setStatus(realMigration.error || demoMigration?.error || realAnalyticsMigration.error || demoAnalyticsMigration?.error || "No se pudo migrar el historial local.", "error");
      return;
    }
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
