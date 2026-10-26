export function setStatus(message, state = "info") {
  const status = document.querySelector("#app-status");
  status.textContent = message;
  status.dataset.state = state;
}

export function clearStatus() {
  const status = document.querySelector("#app-status");
  status.textContent = "";
  delete status.dataset.state;
}

export function setText(selector, text) {
  const node = document.querySelector(selector);
  if (node) node.textContent = String(text);
}

export function createElement(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function appendEditorialReferences(container, question) {
  for (const reference of question.source?.editorial_references || []) {
    let url;
    try { url = new URL(reference.url); } catch { continue; }
    if (url.protocol !== "https:") continue;
    const paragraph = createElement("p", "");
    const link = createElement("a", "", reference.title);
    link.href = url.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    paragraph.append(link, document.createTextNode(` · ${reference.locator} · comprobado: ${reference.checked_at}`));
    container.append(paragraph);
  }
}
