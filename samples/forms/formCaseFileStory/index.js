import "../../../../json-renderers-build/docs/dist/v22/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const loadJson = async filename => {
  const response = await fetch(new URL(filename, import.meta.url));
  if (!response.ok) throw new Error("Could not load " + filename + " (" + response.status + ")");
  return response.json();
};

const showBuiltLists = (lists, columns, data) => {
  const entries = lists.map(list => ({
    label: columns.find(column => column.dataListId === list.attributes.id)?.label ?? list.attributes.id,
    values: list.children.map(option => option.attributes.value)
  }));
  const counts = [
    ["field-count", columns.length],
    ["record-count", data.length],
    ["list-count", entries.length],
    ["suggestion-count", entries.reduce((sum, entry) => sum + entry.values.length, 0)]
  ];
  for (const [id, count] of counts) document.getElementById(id).textContent = count;

  const pantry = document.getElementById("suggestion-pantry");
  pantry.replaceChildren(...entries.map(entry => {
    const group = document.createElement("section");
    group.className = "pantry-group";
    const heading = document.createElement("h3");
    heading.className = "h6 mb-2 fw-semibold";
    heading.textContent = entry.label;
    const chips = document.createElement("div");
    chips.className = "d-flex flex-wrap gap-2";
    for (const value of entry.values) {
      const chip = document.createElement("span");
      chip.className = "suggestion-chip";
      chip.textContent = value;
      chips.append(chip);
    }
    group.append(heading, chips);
    return group;
  }));
};

const start = async () => {
  const [columns, data] = await Promise.all([
    loadJson("./columns.json"),
    loadJson("./data.json")
  ]);
  const spec = window.ks.jsonRenderersBuild.render({
    type: "form",
    columns,
    data,
    options: { formId: "case-file-form", submitLabel: "Save case", prefill: false }
  });
  const dataLists = spec.children.filter(child => child.tagName === "datalist");
  const formSpec = { ...spec, children: spec.children.filter(child => child.tagName !== "datalist") };
  const toElement = spec => window.ks.jsonToTag.buildSpecElement(spec);

  showBuiltLists(dataLists, columns, data);
  document.getElementById("spec-output").textContent = JSON.stringify(spec, null, 2);
  document.getElementById("data-list-container").replaceChildren(...dataLists.map(toElement));
  const form = toElement(formSpec);
  document.getElementById("form-container").replaceChildren(form);
  document.getElementById("build-status").textContent = "Ready: Build created the form and its suggestions.";

  form.addEventListener("submit", event => {
    event.preventDefault();
    const result = document.getElementById("save-result");
    result.querySelector("pre").textContent = JSON.stringify(Object.fromEntries(new FormData(form)), null, 2);
    result.classList.remove("d-none");
  });
};

start().catch(error => {
  document.getElementById("build-status").textContent = "Could not build the form: " + error.message;
  console.error(error);
});
