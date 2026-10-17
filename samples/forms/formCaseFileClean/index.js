import "../../../../json-renderers-build/docs/dist/v22/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const loadJson = async filename => {
  const response = await fetch(new URL(filename, import.meta.url));
  if (!response.ok) throw new Error("Could not load " + filename + " (" + response.status + ")");
  return response.json();
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
  document.getElementById("data-list-container").replaceChildren(...dataLists.map(toElement));
  document.getElementById("data-list-status").textContent = dataLists.length + " data lists built from columns and data.";
  const form = toElement(formSpec);
  document.getElementById("form-container").replaceChildren(form);
  document.getElementById("form-status").textContent = "Form ready.";

  form.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("form-result").textContent =
      "Saved locally: " + JSON.stringify(Object.fromEntries(new FormData(form)));
  });
};

start().catch(error => {
  document.getElementById("form-status").textContent = "Could not build the form: " + error.message;
  console.error(error);
});
