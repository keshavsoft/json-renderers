import render from "../../../docs/dist/v19/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const data = [
  { itemName: "Keyboard", category: "Accessories" },
  { itemName: "Krishna Mouse", category: "Accessories" },
  { itemName: "Monitor", category: "Displays" },
  { itemName: "KeshavSoft Laptop", category: "Computers" },
  { itemName: "USB Cable", category: "Accessories" }
];

const columns = [
  { columnName: "itemName", width: "60%" },
  { columnName: "category", width: "40%" }
];

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
        showSerial: true
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
