import render from "../../../docs/dist/v21/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";
import data from "./data.json" with {type: "json"};
import columns from "./columns.json" with {type: "json"};

const start = () => {
  const container = document.getElementById("dom-render-container");
  const status = document.getElementById("status");

  try {
    // Build the table specification using the table renderer.
    render({
      type: "table.withFooter", columns, data,
      targetHtmlId: "dom-render-container",
      classToApply: "",
      appendPosition: "",
      options: {
        showSerial: false
      },
      showLog: true
    });

    render({
      type: "dataList", columns, data,
      targetHtmlId: "dataListsId",
      classToApply: "",
      appendPosition: ""
    });
  } catch (error) {
    console.error(error);
  }
};

start();
