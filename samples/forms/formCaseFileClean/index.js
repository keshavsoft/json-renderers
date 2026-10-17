import renderForm from "../../../../json-renderers-build/src/v22/form/index.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const loadJson = async filename => {
  const response = await fetch(new URL(filename, import.meta.url));
  if (!response.ok) throw new Error(`Could not load ${filename} (${response.status})`);
  return response.json();
};

const start = async () => {
  const [columns, data] = await Promise.all([
    loadJson("./columns.json"),
    loadJson("./data.json")
  ]);

  // Build creates the form spec and its linked datalist specs from these collections.
  const spec = renderForm({
    columns,
    data,
    options: { formId: "case-file-form", submitLabel: "Save case", prefill: false }
  });

  // Keep Build's datalists separate so the form and lists have distinct DOM containers.
  const dataListSpecs = spec.children.filter(child => child.tagName === "datalist");
  const formSpec = {
    ...spec,
    children: spec.children.filter(child => child.tagName !== "datalist")
  };

  // JSON-to-tag turns both Build outputs into DOM.
  const buildSpecElement = window.ks.jsonToTag.buildSpecElement;
  const dataListContainer = document.getElementById("data-list-container");
  dataListContainer.replaceChildren(...dataListSpecs.map(dataListSpec => buildSpecElement(dataListSpec)));
  document.getElementById("data-list-status").textContent =
    `${dataListSpecs.length} data lists built from the supplied collections.`;

  const form = buildSpecElement(formSpec);
  document.getElementById("form-container").replaceChildren(form);
  document.getElementById("form-status").textContent = "Form ready.";

  form.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("form-result").textContent =
      `Local sample payload: ${JSON.stringify(Object.fromEntries(new FormData(form)))}`;
  });
};

start().catch(error => {
  document.getElementById("form-status").textContent = error.message;
  console.error(error);
});
