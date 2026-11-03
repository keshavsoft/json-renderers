import render from "../../../docs/dist/v22/min.js";
import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";

// Single common source of data and columns
import data from "../common/data.json" with { type: "json" };
import columns from "../common/columns.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const start = () => {
    try {
        window.ks.jsonRenderers.render({
            type: "table.simple",
            data,
            columns,
            options: {
                showSerial: true,
                showSearch: true,
                showOptions: true
            },
            targetHtmlId: "dom-render-container",
            classToApply: "",
            appendPosition: "replace",
        });

    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
