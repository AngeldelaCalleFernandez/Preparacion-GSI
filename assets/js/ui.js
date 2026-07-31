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
