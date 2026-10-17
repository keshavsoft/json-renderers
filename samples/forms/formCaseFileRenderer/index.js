import renderForm from "../../../../json-renderers-build/src/v22/form/index.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const loadJson = async url => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not load ${url} (${response.status})`);
  return response.json();
};

const start = async () => {
  const [columns, data] = await Promise.all([
    loadJson(new URL("./columns.json", import.meta.url)),
    loadJson(new URL("./data.json", import.meta.url))
  ]);
  const spec = renderForm({
    columns,
    data,
    options: { formId: "case-file-form", submitLabel: "Save case", prefill: false }
  });
  const form = window.ks.jsonToTag.buildSpecElement(spec);
  document.getElementById("form-container").replaceChildren(form);

  form.addEventListener("submit", event => {
    event.preventDefault();
    const result = document.getElementById("submit-result");
    result.textContent = `Saved locally: ${JSON.stringify(Object.fromEntries(new FormData(form)))}`;
    result.classList.remove("d-none");
  });
};

start().catch(error => {
  document.getElementById("form-container").textContent = error.message;
  console.error(error);
});
