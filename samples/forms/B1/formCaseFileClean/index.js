import "../../../../docs/dist/v18/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const loadJson = async file => {
  const response = await fetch(new URL(file, import.meta.url));
  if (!response.ok) throw new Error(`${file}: HTTP ${response.status}`);
  return response.json();
};

const findById = (node, id) => node?.attributes?.id === id
  ? node
  : node?.children?.map(child => findById(child, id)).find(Boolean);

const start = async () => {
  const [columns, data] = await Promise.all([
    loadJson("./columns.json"),
    loadJson("./data.json")
  ]);

  const formSpec = window.ks.jsonRenderersBuild.render({
    type: "form",
    columns,
    data: [],
    options: { formId: "case-file-form", submitLabel: "Save case" }
  });

  const dataListSpecs = columns.flatMap(column => {
    if (!column.dataListId) return [];
    const values = [...new Set(data
      .map(row => row[column.columnName])
      .filter(value => value != null)
      .map(value => String(value).trim())
      .filter(Boolean))];
    if (!values.length) return [];

    const input = findById(formSpec, column.id);
    if (!input) throw new Error(`Missing form field: ${column.id}`);
    input.attributes.list = column.dataListId;

    const spec = window.ks.jsonRenderersBuild.render({ type: "dataList", data: values });
    spec.attributes = { ...spec.attributes, id: column.dataListId };
    return [spec];
  });

  const toElement = spec => window.ks.jsonToTag.buildSpecElement(spec);
  document.getElementById("data-list-container").replaceChildren(...dataListSpecs.map(toElement));
  document.getElementById("form-container").replaceChildren(toElement(formSpec));
  document.getElementById("data-list-status").textContent = `${dataListSpecs.length} datalists built from data.json.`;
  document.getElementById("form-status").textContent = `${columns.length} fields built from columns.json.`;
  document.querySelector("#form-container form").addEventListener("submit", event => event.preventDefault());
};

start().catch(error => {
  document.getElementById("data-list-status").textContent = `Build failed: ${error.message}`;
  document.getElementById("form-status").textContent = `Build failed: ${error.message}`;
  console.error(error);
});