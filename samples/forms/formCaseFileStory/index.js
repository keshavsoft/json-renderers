import renderForm from "../../../../json-renderers-build/src/v22/form/index.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const loadJson = async url => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not load ${url} (${response.status})`);
  return response.json();
};

const showBuiltLists = (spec, columns, data) => {
  const lists = spec.children.filter(node => node.tagName === "datalist");
  const entries = lists.map(list => ({
    id: list.attributes.id,
    label: columns.find(column => column.dataListId === list.attributes.id)?.label ?? list.attributes.id,
    values: list.children.map(option => option.attributes.value)
  }));
  const totalSuggestions = entries.reduce((total, entry) => total + entry.values.length, 0);

  document.getElementById("field-count").textContent = columns.length;
  document.getElementById("record-count").textContent = data.length;
  document.getElementById("list-count").textContent = entries.length;
  document.getElementById("suggestion-count").textContent = totalSuggestions;

  const pantry = document.getElementById("suggestion-pantry");
  const fragment = document.createDocumentFragment();
  for (const entry of entries) {
    const group = document.createElement("section");
    group.className = "pantry-group";

    const heading = document.createElement("div");
    heading.className = "d-flex justify-content-between align-items-baseline gap-2 mb-2";
    const label = document.createElement("h3");
    label.className = "h6 mb-0 fw-semibold";
    label.textContent = entry.label;
    const count = document.createElement("span");
    count.className = "small text-secondary";
    count.textContent = `${entry.values.length} suggestions`;
    heading.append(label, count);

    const chips = document.createElement("div");
    chips.className = "d-flex flex-wrap gap-2";
    for (const value of entry.values) {
      const chip = document.createElement("span");
      chip.className = "suggestion-chip";
      chip.textContent = value;
      chips.append(chip);
    }
    group.append(heading, chips);
    fragment.append(group);
  }

  const freeTextColumns = columns.filter(column => !column.dataListId);
  if (freeTextColumns.length) {
    const note = document.createElement("p");
    note.className = "small text-secondary mt-3 mb-0";
    note.textContent = `${freeTextColumns.map(column => column.label).join(", ")} stays free text because its column has no dataListId.`;
    fragment.append(note);
  }
  pantry.replaceChildren(fragment);
};

const start = async () => {
  const [columns, data] = await Promise.all([
    loadJson(new URL("./columns.json", import.meta.url)),
    loadJson(new URL("./data.json", import.meta.url))
  ]);

  // Build owns the form and datalist JSON. This sample only supplies the two collections.
  const spec = renderForm({
    columns,
    data,
    options: { formId: "case-file-form", submitLabel: "Save case", prefill: false }
  });
  showBuiltLists(spec, columns, data);
  document.getElementById("spec-output").textContent = JSON.stringify(spec, null, 2);

  const form = window.ks.jsonToTag.buildSpecElement(spec);
  document.getElementById("form-container").replaceChildren(form);
  document.getElementById("build-status").textContent = "Ready: Build prepared the form and its suggestions.";

  form.addEventListener("submit", event => {
    event.preventDefault();
    const result = document.getElementById("save-result");
    result.querySelector("pre").textContent = JSON.stringify(Object.fromEntries(new FormData(form)), null, 2);
    result.classList.remove("d-none");
  });
};

start().catch(error => {
  document.getElementById("build-status").textContent = `Could not build the form: ${error.message}`;
  console.error(error);
});

