import render from "../../docs/dist/v22/min.js";
import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

// Single common source of truth for ALL renderers
import data from "./common/data.json" with { type: "json" };
import columns from "./common/columns.json" with { type: "json" };

const initDashboard = () => {
    // 1. Render Table Component (type: "table.simple")
    try {
        const tableSpec = render({
            type: "table.simple",
            data,
            columns,
            options: {
                showSerial: true,
                showOptions: true
            }
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: tableSpec,
            targetHtmlId: "demo-table-container",
            options: {},
            classToApply: "",
            appendPosition: "replace",
        });
    } catch (err) {
        console.error("Table render error:", err);
        document.getElementById("demo-table-container").innerHTML = `<div class="alert alert-danger small">${err.message}</div>`;
    }

    // 2. Render Form Component (type: "form")
    try {
        const formSpec = render({
            type: "form",
            data,
            columns,
            options: {
                title: "Edit Product Record",
                submitLabel: "Update Item"
            }
        });

        const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
        if (buildFunc) {
            const el = buildFunc(formSpec);
            const container = document.getElementById("demo-form-container");
            container.replaceChildren(el);

            const realForm = el.querySelector("form") || el;
            realForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Form submitted successfully! Check console for form data.");
                console.log("Submitted form data:", Object.fromEntries(new FormData(realForm)));
            });
        }
    } catch (err) {
        console.error("Form render error:", err);
        document.getElementById("demo-form-container").innerHTML = `<div class="alert alert-danger small">${err.message}</div>`;
    }

    // 3. Render Select Component (type: "select")
    try {
        const selectSpec = render({
            type: "select",
            data,
            columns
        });

        const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
        if (buildFunc) {
            const el = buildFunc(selectSpec);
            const elements = Array.isArray(el) ? el : [el];
            elements.forEach(selectEl => {
                if (selectEl.tagName === "SELECT") {
                    selectEl.className = "form-select shadow-sm";
                }
            });
            document.getElementById("demo-select-container").replaceChildren(...elements);
        }
    } catch (err) {
        console.error("Select render error:", err);
    }

    // 4. Render DataList Component (type: "dataList")
    try {
        const dataListSpec = render({
            type: "dataList",
            data,
            columns
        });

        const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
        if (buildFunc) {
            const el = buildFunc(dataListSpec);
            const elements = Array.isArray(el) ? el : [el];
            document.getElementById("demo-datalist-container").replaceChildren(...elements);
        }
    } catch (err) {
        console.error("DataList render error:", err);
    }

    // 5. Render Search Input Component (type: "searchInput")
    try {
        const searchSpec = render({
            type: "searchInput",
            data,
            columns,
            options: {
                label: "Quick Filter:",
                placeholder: "Search inventory items or categories...",
                id: "masterSearchBox",
                class: "form-control shadow-sm"
            }
        });

        const buildFunc = buildSpecElement || window.ks?.jsonToTag?.buildSpecElement;
        if (buildFunc) {
            const el = buildFunc(searchSpec);
            const elements = Array.isArray(el) ? el : [el];
            document.getElementById("demo-search-container").replaceChildren(...elements);
        }
    } catch (err) {
        console.error("Search input render error:", err);
    }
};

initDashboard();

