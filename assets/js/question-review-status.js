import { createElement } from "./ui.js?gsi2";

export const PROVISIONAL_REVIEW_QUESTION_ID = "MAN-GSI-P17-026";

export function appendProvisionalReviewNotice(container, question) {
  if (question.id !== PROVISIONAL_REVIEW_QUESTION_ID) return;
  container.append(createElement("p", "notice provisional-question-notice",
    `${question.id} · Revisión independiente pendiente por posible ambigüedad. La clave mostrada es provisional.`));
}
