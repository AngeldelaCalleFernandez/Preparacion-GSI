function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createSourcePill(source) {
  const title = source?.title ?? "Fuente sin catalogar";
  const node = source?.url ? element("a", "pill pill--official", title) : element("span", "pill", title);
  if (source?.url) {
    node.href = source.url;
    node.target = "_blank";
    node.rel = "noreferrer";
  }
  return node;
}

export function renderSyllabus(data) {
  const summary = document.querySelector("#syllabus-summary");
  const container = document.querySelector("#syllabus-blocks");
  const topicCount = data.syllabus.blocks.reduce((total, block) => total + block.topics.length, 0);
  summary.textContent = `${data.syllabus.blocks.length} bloques y ${topicCount} temas oficiales catalogados.`;
  container.replaceChildren();

  for (const block of data.syllabus.blocks) {
    const card = element("details", "block-card");
    const summaryNode = element("summary", "", `${block.id} · ${block.title} (${block.topics.length} temas)`);
    const list = element("ol", "topic-list");
    list.start = 1;
    for (const topic of block.topics) {
      const item = element("li");
      const title = element("p", "topic-title", `Tema ${topic.number}. ${topic.title}`);
      const meta = element("div", "topic-meta");
      for (const sourceId of topic.source_ids) {
        meta.append(createSourcePill(data.indexes.sourcesById.get(sourceId)));
      }
      item.append(title, meta);
      list.append(item);
    }
    card.append(summaryNode, list);
    container.append(card);
  }
}
