# json-renderers

> Browser DOM renderer — pass data, columns, and a target element; get a fully rendered UI component on the page.

[![Version](https://img.shields.io/badge/version-1.22.2-emerald.svg)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Docs-10b981?logo=github)](https://keshavsoft.github.io/json-renderers/)

---

## The Story

You have data. You have columns. You want a table, a form, a dropdown — rendered into the browser, right now.

`json-renderers` is the single function that makes that happen.

You hand it an **input contract** — a plain JavaScript object with two responsibilities:

1. **What to build** — the component spec (`type`, `data`, `columns`, `options`)
2. **Where to mount it** — the DOM target (`targetHtmlId`, `classToApply`, `appendPosition`)

It validates both, builds the component spec internally, converts it to real DOM nodes, and mounts the result into your page.

---

## The Input Contract

```javascript
render({

    // ── SPEC: What to build ──────────────────────────────
    type: "table.simple",        // which component to render
    data: [...],                 // array of row objects
    columns: [...],              // array of column definitions
    options: {                   // component-level feature flags
        showSerial: true,        //   adds a # serial column
        showSearch: true,        //   adds a live search bar
        showOptions: true        //   adds a row-level action button
    },
    showLog: false,              // enable debug logging

    // ── MOUNT: Where to put it ───────────────────────────
    targetHtmlId: "my-container",   // id of the DOM element to mount into
    classToApply: "",               // extra CSS class on the rendered root
    appendPosition: "replace",      // "replace" | "prepend"

});
```

### Spec Parameters

| Parameter | Type | What it means |
|---|---|---|
| `type` | `string` | Which component to render — see supported types below |
| `data` | `Array` | Your data records (array of objects) |
| `columns` | `Array` | Column definitions — schema, labels, types, widths |
| `options` | `object` | Component-level flags (e.g. `showSerial`, `showSearch`, `showOptions`) |
| `showLog` | `boolean` | Logs internal spec and DOM steps to the console |

### Mount Parameters

| Parameter | Type | What it means |
|---|---|---|
| `targetHtmlId` | `string` | The `id` of the HTML element to mount the component into |
| `classToApply` | `string` | A CSS class added to the rendered root element |
| `appendPosition` | `string` | `"replace"` clears and replaces; `"prepend"` inserts before existing content |

---

## Supported Component Types

| `type` | Renders |
|---|---|
| `table.simple` | Data table with headers and rows |
| `form` | Input form pre-filled from `data[0]`, fields from `columns` |
| `select` | Dropdown — auto-targets the `select` type column |
| `dataList` | Autocomplete input |
| `searchInput` | Standalone search bar |

---

## Quick Example — Table with Search

**HTML**
```html
<div id="dom-render-container"></div>
```

**data.json** (one record shown)
```json
[
  {
    "itemName": "0.09/30mm High Tensile Bolt",
    "category": "Fasteners",
    "baseUnit": "kgs",
    "openingRate": "1200.00/kgs",
    "inStock": true,
    "notes": "Grade 8.8 tensile steel bolt for industrial heavy machinery."
  }
]
```

**columns.json** (one column shown)
```json
[
  { "columnName": "itemName", "label": "Item Name", "type": "text", "width": "260px" },
  { "columnName": "category", "label": "Category",  "type": "select" },
  ...
]
```

**JavaScript**
```javascript
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
    appendPosition: "replace"
});
```

---

## Global Registration

When loaded via `<script type="module">`, the renderer is available globally:

```javascript
window.ks.jsonRenderers = {
    meta: { version: "1.22.1" },
    render: [Function]
};
```

---

## Project Structure

```
json-renderers/
├── src/
│   ├── index.js            # Entry point → routes to v22
│   └── v22/                # Current version (1.22.1)
│       ├── index.js        # Orchestrator: guard → buildSpec → jsonToDom → mount
│       ├── buildSpec/      # Calls json-renderers-specs, returns JSON AST
│       ├── registerGlobal.js   # Attaches to window.ks.jsonRenderers
│       └── meta.js         # Version descriptor
├── samples/
│   └── v22/                # Runnable samples — one per component type
│       ├── common/         # Shared data.json and columns.json
│       ├── table/
│       ├── tableWithSearch/
│       ├── form/
│       ├── select/
│       ├── dataList/
│       └── searchInput/
└── docs/dist/v22/min.js    # Production bundle
```

---

## License

MIT © [KeshavSoft](https://github.com/keshavsoft)
