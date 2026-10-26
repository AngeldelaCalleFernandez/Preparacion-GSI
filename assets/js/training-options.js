import { archiveFingerprint } from "./analytics-engine.js?gsi2";
/** Presentation order is separate from stable option IDs used by all stores. */
export const trainingQuestionKey = (question) => `${question.collection}:${question.id}`;

export function questionVersion(question) {
  // A compact change detector; editorial acceptance uses SHA-256 separately.
  return archiveFingerprint("training-question", JSON.stringify([question.statement, question.options, question.correct_option, question.feedback, question.source, question.provenance, question.is_active, question.validation_status]));
}

export function dependsOnOptionOrder(question) {
  const text = [question.statement, ...question.options.map((option) => option.text), question.feedback?.correct || "", question.feedback?.incorrect || "", ...Object.values(question.feedback?.incorrect_options || {})].join("\n");
  return /\b(?:todas?|ningun[ao]|ambas?|las|los)\s+(?:(?:las|los)\s+)?anteriores\b/i.test(text)
    || /\b(?:[Oo]pci[oó]n(?:es)?|[Rr]espuesta(?:s)?|[Aa]lternativa(?:s)?)\s+[A-D]\b|\b[A-D]\s*(?:y|e|\/)\s*[A-D]\s+(?:son|es)\b/.test(text);
}

export function createTrainingOptionOrders(questions, enabled, random = Math.random) {
  return Object.fromEntries(questions.map((question) => {
    const ids = question.options.map((option) => option.id);
    if (enabled && question.origin !== "official" && !dependsOnOptionOrder(question)) {
      for (let i = ids.length - 1; i > 0; i -= 1) {
        const j = Math.floor(random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
      }
    }
    return [trainingQuestionKey(question), ids];
  }));
}

export function orderedTrainingOptions(question, orders = {}) {
  const ids = orders[trainingQuestionKey(question)] || question.options.map((o) => o.id);
  return ids.map((id, index) => ({ ...question.options.find((o) => o.id === id), displayLetter: "ABCD"[index] }));
}

export function trainingOptionLetter(question, id, orders = {}) {
  return orderedTrainingOptions(question, orders).find((o) => o.id === id)?.displayLetter || id;
}

export function validateTrainingContext(saved, questions, { checkVersions = true } = {}) {
  if (!saved || !Array.isArray(saved.questionRefs) || !saved.questionRefs.length || typeof saved.sessionId !== "string" || !questions.length || saved.questionRefs.length !== questions.length) return false;
  if (questions.some((q) => !q)) return false;
  const keys = new Set(questions.map(trainingQuestionKey));
  if (keys.size !== questions.length || questions.some((q, i) => !q || q.id !== saved.questionRefs[i].id || q.collection !== saved.questionRefs[i].collection || Boolean(q.isDemo) !== saved.isDemo)) return false;
  const orders = saved.optionOrderByQuestionKey;
  const modern = orders !== undefined || saved.shuffleOptions !== undefined;
  if (modern) {
    if (!orders || typeof orders !== "object" || Array.isArray(orders) || typeof saved.shuffleOptions !== "boolean" || Object.keys(orders).length !== keys.size) return false;
    const versions = saved.questionVersionsByQuestionKey;
    if (!versions || typeof versions !== "object" || Array.isArray(versions) || Object.keys(versions).length !== keys.size || [...keys].some((key) => !/^[a-f0-9]{16}:[a-f0-9]{16}$/.test(versions[key]))) return false;
    for (const q of questions) {
      const key = trainingQuestionKey(q), order = orders[key], original = q.options.map((o) => o.id);
      if (!Array.isArray(order) || order.length !== 4 || new Set(order).size !== 4 || order.some((id) => !original.includes(id))) return false;
      if ((!saved.shuffleOptions || q.origin === "official" || (checkVersions && dependsOnOptionOrder(q))) && order.join("") !== original.join("")) return false;
      if (checkVersions && saved.questionVersionsByQuestionKey?.[key] !== questionVersion(q)) return false;
    }
  } else if (checkVersions && questions.some((q) => q.source?.editorial_revision_id)) return false;
  const responses = saved.responsesByQuestionKey || {};
  if (typeof responses !== "object" || Array.isArray(responses)) return false;
  return Object.entries(responses).every(([key, response]) => {
    const q = questions.find((candidate) => trainingQuestionKey(candidate) === key);
    return q && response && q.options.some((o) => o.id === response.selectedOption) && typeof response.correct === "boolean";
  });
}
