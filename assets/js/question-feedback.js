/** Stable option IDs keep per-distractor feedback valid after presentation shuffle. */
export function feedbackFor(question, selectedOption, correct) {
  if (correct) return question.feedback?.correct || "Respuesta correcta.";
  return question.feedback?.incorrect_options?.[selectedOption] || question.feedback?.incorrect || question.feedback?.correct || "Consulta la respuesta correcta y su fuente.";
}
