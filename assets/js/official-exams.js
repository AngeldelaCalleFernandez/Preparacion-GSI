import { createElement } from "./ui.js?gsi2";

export function describeOfficialQuestion(question) {
  if (question.origin !== "official" || !question.exam) return "";
  const exam = question.exam;
  return `INAP · convocatoria ${exam.year} · ${exam.is_reserve ? "reserva" : "pregunta"} ${exam.number}. Se corrige con la plantilla histórica de esa convocatoria; contrasta la normativa y la tecnología con el temario vigente.`;
}

export async function renderOfficialExamLibrary(container, onChoose) {
  if (!container) return;
  try {
    const response = await fetch("./data/gsi-official-exams.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const catalog = await response.json();
    container.replaceChildren();
    for (const exam of catalog.exams) {
      const card = createElement("details", "source-card");
      card.dataset.examId = exam.id;
      card.append(createElement("summary", "", `${exam.title} · plantilla ${exam.key_status === "definitive" ? "definitiva" : "provisional"}`));
      card.append(createElement("p", "form-help", exam.note));
      const links = createElement("ul");
      const labels = { questionnaire: "Primer ejercicio (PDF)", answer_key: `Plantilla ${exam.key_status === "definitive" ? "definitiva" : "provisional"} (PDF)`, written: "Segundo ejercicio: supuestos oficiales (PDF)", criteria: "Criterios de corrección (PDF)" };
      for (const document of exam.documents) {
        const url = new URL(document.url);
        if (url.protocol !== "https:" || url.hostname !== "sede.inap.gob.es") throw new Error("Fuente oficial no reconocida");
        const link = createElement("a", "", labels[document.kind] ?? document.kind);
        link.href = url.href; link.target = "_blank"; link.rel = "noopener noreferrer";
        const item = createElement("li"); item.append(link); links.append(item);
      }
      card.append(links);
      if (exam.key_status === "definitive" && exam.question_ids.length === 100) {
        card.append(createElement("p", "form-help", `100 preguntas evaluables · 90 minutos · error −1/3. Anuladas: ${exam.annulled_numbers.join(", ")}; sustituidas por las reservas ${exam.used_reserve_numbers.join(", ")}. Se mantienen las letras originales.`));
        const button = createElement("button", "button button--secondary", "Preparar este examen");
        button.type = "button"; button.addEventListener("click", () => onChoose(exam.id)); card.append(button);
      }
      container.append(card);
    }
  } catch (error) {
    container.textContent = `No se pudo cargar el catálogo oficial (${error.message}). Recarga la página para volver a intentarlo.`;
  }
}
