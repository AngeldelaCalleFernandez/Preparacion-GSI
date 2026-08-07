function assertCatalog(condition, message) {
  if (!condition) throw new Error(`Catálogo runtime inválido: ${message}`);
}

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function assertUnique(items, label, getKey) {
  const seen = new Set();
  for (const item of items) {
    const key = getKey(item);
    assertCatalog(isNonEmptyString(key), `${label} contiene un identificador vacío.`);
    assertCatalog(!seen.has(key), `${label} contiene un identificador duplicado: ${key}.`);
    seen.add(key);
  }
}

function assertRuntimeSource(catalog) {
  const source = catalog.runtime_source;
  assertCatalog(isRecord(source), "falta runtime_source.");
  assertCatalog(isNonEmptyString(source.path), "runtime_source.path no es válido.");
  assertCatalog(source.status === "legacy-operational", "runtime_source no declara materialización legacy.");
  assertCatalog(source.catalog_is_runtime_source === false, "runtime_source no puede ser el catálogo.");
  return source;
}

function assertSyllabusShape(syllabus) {
  assertCatalog(isRecord(syllabus), "hay un syllabus que no es un objeto.");
  assertCatalog(isNonEmptyString(syllabus.id), "hay un syllabus sin id.");
  assertCatalog(isNonEmptyString(syllabus.opposition_id), `${syllabus.id} no referencia una oposición.`);
  assertCatalog(typeof syllabus.runtime_available === "boolean", `${syllabus.id} no declara runtime_available.`);
  assertCatalog(isRecord(syllabus.identifier_policy), `${syllabus.id} no declara política de identidad.`);
  assertCatalog(isRecord(syllabus.declared_structure), `${syllabus.id} no declara su estructura.`);
  assertCatalog(Array.isArray(syllabus.blocks), `${syllabus.id} no declara bloques.`);
}

function assertOppositionShape(opposition) {
  assertCatalog(isRecord(opposition), "hay una oposición que no es un objeto.");
  assertCatalog(isNonEmptyString(opposition.id), "hay una oposición sin id.");
  assertCatalog(isNonEmptyString(opposition.short_code), `${opposition.id} no declara código corto.`);
  assertCatalog(typeof opposition.runtime_available === "boolean", `${opposition.id} no declara runtime_available.`);
  assertCatalog(Array.isArray(opposition.syllabus_ids), `${opposition.id} no declara syllabus_ids.`);
}

function isRuntimeCandidate(opposition, syllabus) {
  return opposition.runtime_available === true
    && syllabus.runtime_available === true
    && opposition.status !== "planned"
    && syllabus.status !== "planned"
    && syllabus.identifier_policy.operational_id_kind === "legacy"
    && isNonEmptyString(syllabus.legacy_source_path)
    && syllabus.declared_structure.topics_extracted === true;
}

function registerReference(index, reference, legacyId, label) {
  assertCatalog(isNonEmptyString(reference), `${label} contiene una referencia vacía.`);
  const previous = index.get(reference);
  assertCatalog(!previous || previous === legacyId, `${label} tiene una referencia ambigua: ${reference}.`);
  index.set(reference, legacyId);
}

function buildReferenceIndex(entries, label) {
  const references = new Map();
  const byLegacyId = new Map();
  const byCanonicalId = new Map();
  for (const entry of entries) {
    assertCatalog(isRecord(entry), `${label} contiene una entrada no válida.`);
    assertCatalog(isNonEmptyString(entry.legacy_id), `${label} sin legacy_id.`);
    assertCatalog(isNonEmptyString(entry.canonical_id), `${label} sin canonical_id.`);
    assertCatalog(Array.isArray(entry.historical_aliases), `${entry.legacy_id} no declara aliases históricos.`);
    assertCatalog(!byLegacyId.has(entry.legacy_id), `${label} repite legacy_id ${entry.legacy_id}.`);
    assertCatalog(!byCanonicalId.has(entry.canonical_id), `${label} repite canonical_id ${entry.canonical_id}.`);
    byLegacyId.set(entry.legacy_id, entry);
    byCanonicalId.set(entry.canonical_id, entry);
    registerReference(references, entry.legacy_id, entry.legacy_id, label);
    registerReference(references, entry.canonical_id, entry.legacy_id, label);
    for (const alias of entry.historical_aliases) {
      registerReference(references, alias, entry.legacy_id, label);
    }
  }
  return { references, byLegacyId, byCanonicalId };
}

export function buildIdentityIndexes(syllabus) {
  assertSyllabusShape(syllabus);
  const blocks = buildReferenceIndex(syllabus.blocks, `bloques de ${syllabus.id}`);
  const topics = buildReferenceIndex(
    syllabus.blocks.flatMap((block) => {
      assertCatalog(Array.isArray(block.topics), `${block.legacy_id} no declara temas.`);
      return block.topics;
    }),
    `temas de ${syllabus.id}`
  );
  return {
    blockReferences: blocks.references,
    blocksByLegacyId: blocks.byLegacyId,
    blocksByCanonicalId: blocks.byCanonicalId,
    topicReferences: topics.references,
    topicsByLegacyId: topics.byLegacyId,
    topicsByCanonicalId: topics.byCanonicalId,
  };
}

export function validateCatalogs(oppositionsCatalog, syllabiCatalog) {
  assertCatalog(isRecord(oppositionsCatalog) && Array.isArray(oppositionsCatalog.oppositions), "oppositions.json no tiene oppositiones válidas.");
  assertCatalog(isRecord(syllabiCatalog) && Array.isArray(syllabiCatalog.syllabi), "syllabi-catalog.json no tiene syllabi válidos.");
  const runtimeSource = assertRuntimeSource(syllabiCatalog);
  for (const opposition of oppositionsCatalog.oppositions) assertOppositionShape(opposition);
  for (const syllabus of syllabiCatalog.syllabi) assertSyllabusShape(syllabus);
  assertUnique(oppositionsCatalog.oppositions, "oppositions.json", (opposition) => opposition.id);
  assertUnique(oppositionsCatalog.oppositions, "códigos cortos de oposición", (opposition) => opposition.short_code);
  assertUnique(syllabiCatalog.syllabi, "syllabi-catalog.json", (syllabus) => syllabus.id);

  const oppositionsById = new Map(oppositionsCatalog.oppositions.map((opposition) => [opposition.id, opposition]));
  const syllabiById = new Map(syllabiCatalog.syllabi.map((syllabus) => [syllabus.id, syllabus]));
  for (const opposition of oppositionsCatalog.oppositions) {
    assertUnique(opposition.syllabus_ids.map((id) => ({ id })), `syllabus_ids de ${opposition.id}`, (item) => item.id);
    for (const syllabusId of opposition.syllabus_ids) {
      const syllabus = syllabiById.get(syllabusId);
      assertCatalog(syllabus, `${opposition.id} referencia el syllabus inexistente ${syllabusId}.`);
      assertCatalog(syllabus.opposition_id === opposition.id, `${syllabusId} no pertenece a ${opposition.id}.`);
    }
  }
  for (const syllabus of syllabiCatalog.syllabi) {
    const opposition = oppositionsById.get(syllabus.opposition_id);
    assertCatalog(opposition, `${syllabus.id} referencia la oposición inexistente ${syllabus.opposition_id}.`);
    assertCatalog(opposition.syllabus_ids.includes(syllabus.id), `${syllabus.id} no figura en la oposición ${opposition.id}.`);
    if (syllabus.status === "planned" || syllabus.runtime_available === false) {
      assertCatalog(syllabus.blocks.length === 0, `${syllabus.id} no operativo no puede declarar temas runtime.`);
    }
  }
  return { oppositionsById, syllabiById, runtimeSource };
}

function assertDeclaredStructure(syllabus) {
  const structure = syllabus.declared_structure;
  const distribution = syllabus.blocks.map((block) => block.topics.length);
  const topicCount = distribution.reduce((total, count) => total + count, 0);
  assertCatalog(structure.block_count === syllabus.blocks.length, `${syllabus.id} declara un número de bloques incoherente.`);
  assertCatalog(structure.topic_count === topicCount, `${syllabus.id} declara un número de temas incoherente.`);
  assertCatalog(JSON.stringify(structure.distribution) === JSON.stringify(distribution), `${syllabus.id} declara una distribución incoherente.`);
}

function createRuntimeContext(opposition, syllabus, runtimeSource) {
  assertCatalog(isRuntimeCandidate(opposition, syllabus), `${syllabus.id} no puede seleccionarse como contexto operativo.`);
  assertCatalog(syllabus.legacy_source_path === runtimeSource.path, `${syllabus.id} no coincide con la materialización runtime declarada.`);
  assertDeclaredStructure(syllabus);
  return {
    opposition,
    syllabus,
    oppositionId: opposition.id,
    syllabusId: syllabus.id,
    oppositionShortCode: opposition.short_code,
    legacySourcePath: syllabus.legacy_source_path,
    runtimeSource: { ...runtimeSource },
    runtimeStatus: syllabus.status,
    identityPolicy: { ...syllabus.identifier_policy },
    identity: buildIdentityIndexes(syllabus),
  };
}

export function selectRuntimeContext(oppositionsCatalog, syllabiCatalog, selection = null) {
  const { oppositionsById, syllabiById, runtimeSource } = validateCatalogs(oppositionsCatalog, syllabiCatalog);
  const hasSelection = selection !== null && selection !== undefined;
  if (hasSelection) {
    assertCatalog(isRecord(selection), "la selección explícita no es válida.");
    const oppositionId = selection.oppositionId;
    const syllabusId = selection.syllabusId;
    assertCatalog(isNonEmptyString(oppositionId) && isNonEmptyString(syllabusId), "la selección explícita requiere oppositionId y syllabusId.");
    const opposition = oppositionsById.get(oppositionId);
    const syllabus = syllabiById.get(syllabusId);
    assertCatalog(opposition, `no existe la oposición ${oppositionId}.`);
    assertCatalog(syllabus, `no existe el syllabus ${syllabusId}.`);
    assertCatalog(syllabus.opposition_id === opposition.id && opposition.syllabus_ids.includes(syllabus.id), "la oposición y el syllabus seleccionados no están relacionados.");
    return createRuntimeContext(opposition, syllabus, runtimeSource);
  }

  const candidates = syllabiCatalog.syllabi
    .map((syllabus) => ({ syllabus, opposition: oppositionsById.get(syllabus.opposition_id) }))
    .filter(({ syllabus, opposition }) => opposition && isRuntimeCandidate(opposition, syllabus));
  assertCatalog(candidates.length === 1, `se esperaba un único contexto runtime disponible y se encontraron ${candidates.length}.`);
  return createRuntimeContext(candidates[0].opposition, candidates[0].syllabus, runtimeSource);
}

export function resolveTopicReference(context, reference) {
  if (!context?.identity?.topicReferences || !isNonEmptyString(reference)) return null;
  return context.identity.topicReferences.get(reference.trim()) || null;
}

export function resolveBlockReference(context, reference) {
  if (!context?.identity?.blockReferences || !isNonEmptyString(reference)) return null;
  return context.identity.blockReferences.get(reference.trim()) || null;
}

export function validateLegacySyllabusCompatibility(context, legacySyllabus) {
  assertCatalog(isRecord(context?.syllabus), "falta el contexto runtime seleccionado.");
  assertCatalog(Array.isArray(legacySyllabus?.blocks), "la materialización legacy no declara bloques.");
  const catalogBlocks = context.syllabus.blocks;
  assertCatalog(catalogBlocks.length === legacySyllabus.blocks.length, "la materialización legacy no coincide en número de bloques.");
  let topicCount = 0;
  for (let blockIndex = 0; blockIndex < catalogBlocks.length; blockIndex += 1) {
    const catalogBlock = catalogBlocks[blockIndex];
    const legacyBlock = legacySyllabus.blocks[blockIndex];
    assertCatalog(catalogBlock.legacy_id === legacyBlock?.id, `el bloque ${blockIndex + 1} no conserva su ID legacy.`);
    assertCatalog(catalogBlock.order === legacyBlock?.number, `${catalogBlock.legacy_id} no conserva su orden.`);
    assertCatalog(catalogBlock.title === legacyBlock?.title, `${catalogBlock.legacy_id} no conserva su título.`);
    if (catalogBlock.legacy_status) assertCatalog(catalogBlock.legacy_status === legacyBlock?.status, `${catalogBlock.legacy_id} no conserva su estado.`);
    assertCatalog(catalogBlock.topics.length === legacyBlock?.topics?.length, `${catalogBlock.legacy_id} no conserva su distribución.`);
    topicCount += legacyBlock.topics.length;
    for (let topicIndex = 0; topicIndex < catalogBlock.topics.length; topicIndex += 1) {
      const catalogTopic = catalogBlock.topics[topicIndex];
      const legacyTopic = legacyBlock.topics[topicIndex];
      assertCatalog(catalogTopic.legacy_id === legacyTopic?.id, `${catalogBlock.legacy_id}: tema ${topicIndex + 1} no conserva su ID legacy.`);
      assertCatalog(catalogTopic.order === legacyTopic?.number, `${catalogTopic.legacy_id} no conserva su orden.`);
      assertCatalog(catalogTopic.title === legacyTopic?.title, `${catalogTopic.legacy_id} no conserva su título.`);
      if (catalogTopic.legacy_status) assertCatalog(catalogTopic.legacy_status === legacyTopic?.status, `${catalogTopic.legacy_id} no conserva su estado.`);
    }
  }
  const structure = context.syllabus.declared_structure;
  assertCatalog(structure.block_count === legacySyllabus.blocks.length, "la materialización legacy no coincide con el total de bloques declarado.");
  assertCatalog(structure.topic_count === topicCount, "la materialización legacy no coincide con el total de temas declarado.");
  assertCatalog(JSON.stringify(structure.distribution) === JSON.stringify(legacySyllabus.blocks.map((block) => block.topics.length)), "la materialización legacy no coincide con la distribución declarada.");
  return true;
}
