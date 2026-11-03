const V = {
  version: "1.22.1",
  description: "Browser DOM component renderer built on top of json-renderers-specs and @keshavsoft/json-to-dom"
}, W = (t) => {
  const e = t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: V,
    render: e
  });
}, q = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, J = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, _ = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, U = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, A = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return q(e), J(e), _(e), U(e), !0;
}, z = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.targetHtmlId;
  if (a === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof a != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (a.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, X = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.appendPosition;
  if (a === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof a != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, Q = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.classToApply;
  if (a === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof a != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, j = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return z(e), X(e), Q(e), !0;
}, Y = "table", Z = "", tt = [], et = [], at = "", ot = "replace", lt = !1, f = {
  type: Y,
  targetHtmlId: Z,
  data: tt,
  columns: et,
  classToApply: at,
  appendPosition: ot,
  showLog: lt
}, k = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in f ? f[e] : { ...f };
};
Object.assign(k, f);
const y = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return A(e), j(e), !0;
};
y.getSpec = k;
y.configSpec = f;
y.guardSpec = A;
y.guardMount = j;
const rt = {
  version: "1.41.0",
  name: "json-to-dom"
}, nt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonToDom = {
    meta: rt,
    appendToDom: t
  });
}, st = {
  version: "v12",
  description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, ct = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof t == "function" ? t : t.buildSpecElement, a = t.buildSpecElementWithValidate, o = {
    meta: st,
    buildSpecElement: e,
    ...a ? { buildSpecElementWithValidate: a } : {}
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, v = ({ inItems: t, inFunc: e }) => {
  const a = t, o = e;
  return Array.isArray(a) ? a.map((l) => N({ inSpec: l, inFunc: o })).flat(1 / 0).filter(Boolean) : [];
}, it = ({ inSpec: t, inFunc: e }) => {
  const a = t, o = e;
  if (!a || typeof a != "object" || Array.isArray(a))
    return null;
  const l = typeof o == "function" ? o(a) : null;
  if (Array.isArray(a.children)) {
    const r = v({ inItems: a.children, inFunc: o });
    if (l && typeof l.append == "function" && Array.isArray(r)) {
      const n = r.filter(Boolean);
      n.length && l.append(...n);
    }
  }
  return l;
}, N = ({ inSpec: t, inFunc: e }) => {
  const a = t, o = e;
  return a == null ? null : typeof Node < "u" && a instanceof Node ? a : Array.isArray(a) ? v({ inItems: a, inFunc: o }) : typeof a == "object" ? it({ inSpec: a, inFunc: o }) : typeof a == "string" || typeof a == "number" ? typeof document < "u" ? document.createTextNode(String(a)) : String(a) : null;
}, ut = ({ inNode: t, inErrors: e }) => {
  const a = t, o = e;
  return !a || typeof a != "object" || Array.isArray(a) ? (o.push({
    reason: "Node must be a plain object"
  }), !1) : !0;
}, dt = ({ inNode: t, inCatalog: e, inErrors: a }) => {
  const o = t, l = e, r = a, n = o.tagName;
  return !n || typeof n != "string" || n.trim() === "" ? (r.push({
    reason: "Missing or empty 'tagName'"
  }), !1) : l && typeof l == "object" && !(!!l[n] || Object.keys(l).includes(n)) ? (r.push({
    tagName: n,
    reason: `Unrecognized tagName '${n}' not found in spec catalog`
  }), !1) : !0;
}, bt = ({ inNode: t, inCatalog: e, inErrors: a }) => {
  const o = t, l = e, r = a, n = o.tagName, s = l ? l[n] : null;
  return s && s.allowsTextContent === !1 && o.textContent ? (r.push({
    tagName: n,
    reason: `Tag '${n}' does not allow direct textContent`
  }), !1) : !0;
}, ht = ({ inNode: t, inCatalog: e, inErrors: a }) => {
  const o = t, l = e, r = a, n = o.tagName, s = l ? l[n] : null;
  return s && s.allowsChildren === !1 && Array.isArray(o.children) && o.children.length > 0 ? (r.push({
    tagName: n,
    reason: `Tag '${n}' does not allow children (void element)`
  }), !1) : "children" in o && !Array.isArray(o.children) ? (r.push({
    tagName: n,
    reason: "'children' must be an array"
  }), !1) : !0;
}, pt = ({ inNode: t, inCatalog: e, inErrors: a }) => {
  const o = t, l = e, r = a, n = o.tagName, s = l ? l[n] : null;
  return s && Array.isArray(s.childTags) && s.childTags.length > 0 && Array.isArray(o.children) && o.children.forEach((c) => {
    c && c.tagName && !s.childTags.includes(c.tagName) && r.push({
      tagName: c.tagName,
      reason: `Tag '${c.tagName}' is not an allowed child of '${n}' (allowed: ${s.childTags.join(", ")})`
    });
  }), !0;
}, mt = ({ inNode: t, inErrors: e }) => {
  const a = t, o = e, l = a.tagName;
  return "attributes" in a && (!a.attributes || typeof a.attributes != "object" || Array.isArray(a.attributes)) ? (o.push({
    tagName: l,
    reason: "'attributes' must be a key-value object"
  }), !1) : !0;
}, ft = ({ inNode: t, inCatalog: e, inErrors: a }) => {
  const o = t, l = e, r = a;
  ut({ inNode: o, inErrors: r }) && (dt({ inNode: o, inCatalog: l, inErrors: r }), bt({ inNode: o, inCatalog: l, inErrors: r }), ht({ inNode: o, inCatalog: l, inErrors: r }), pt({ inNode: o, inCatalog: l, inErrors: r }), mt({ inNode: o, inErrors: r }));
}, yt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, wt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, gt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Nt = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        id: "${columnName}",
        list: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, Ct = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Tt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, xt = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${agg:count}",
      attributes: {
        class: "btn btn-primary btn-sm"
      }
    }
  ]
}, $t = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "show",
      attributes: {
        class: "btn btn-primary btn-sm ks-btn-show"
      }
    }
  ]
}, At = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Pt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, St = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, jt = {
  tagName: "td",
  children: []
}, kt = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, vt = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, Et = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, Ft = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Ot = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "save",
      attributes: {
        class: "btn btn-warning btn-sm ks-btn-save"
      }
    }
  ]
}, Bt = {
  tagName: "div",
  attributes: {
    class: "row mb-3 justify-content-end"
  },
  children: [
    {
      tagName: "div",
      attributes: {
        class: "col-md-4"
      },
      children: [
        {
          tagName: "div",
          attributes: {
            class: "input-group"
          },
          children: [
            {
              tagName: "span",
              attributes: {
                class: "input-group-text bg-white"
              },
              children: [
                {
                  tagName: "i",
                  attributes: {
                    class: "bi bi-search"
                  },
                  textContent: "🔍"
                }
              ]
            },
            {
              tagName: "input",
              attributes: {
                type: "text",
                id: "tableSearch",
                class: "form-control",
                placeholder: "Search table..."
              }
            }
          ]
        }
      ]
    }
  ]
}, Rt = {
  buildBodyTr: yt,
  buildColGroup: wt,
  buildHeader: gt,
  buildFooter: Nt,
  buildBodyCell: Ct,
  button: Tt,
  buttonCell: xt,
  optionsButtonCell: $t,
  buildOption: At,
  buildSelect: Pt,
  buildDataList: St,
  emptyCell: jt,
  headerSerialCell: kt,
  colGroupForSerial: vt,
  colGroupForOption: Et,
  headerForOption: Ft,
  tdWithButtonSaveWarning: Ot,
  tableSearch: Bt
}, Lt = "./tags.schema.json", It = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, Dt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "type",
    "placeholder",
    "value",
    "name",
    "disabled",
    "readonly",
    "required",
    "list"
  ]
}, Gt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "type",
    "checked",
    "name",
    "value",
    "disabled",
    "required"
  ]
}, Kt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Ht = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Mt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Vt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "action",
    "method",
    "autocomplete",
    "enctype",
    "name",
    "novalidate",
    "target"
  ],
  childTags: []
}, Wt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "name",
    "disabled",
    "required",
    "multiple",
    "size"
  ],
  childTags: [
    "option"
  ]
}, qt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Jt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, _t = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ut = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, zt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, Xt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Qt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "border",
    "cellpadding",
    "cellspacing"
  ],
  childTags: [
    "caption",
    "colgroup",
    "thead",
    "tbody",
    "tfoot",
    "tr"
  ]
}, Yt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Zt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, te = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, ee = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, ae = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, oe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, le = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, re = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, ne = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, se = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "href",
    "target",
    "rel",
    "title",
    "download"
  ],
  childTags: []
}, ce = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, ie = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, ue = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, de = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, be = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, he = {
  $schema: Lt,
  div: It,
  input: Dt,
  checkbox: Gt,
  colgroup: Kt,
  col: Ht,
  label: Mt,
  form: Vt,
  select: Wt,
  p: qt,
  h1: Jt,
  h2: _t,
  span: Ut,
  img: zt,
  button: Xt,
  table: Qt,
  thead: Yt,
  tbody: Zt,
  tfoot: te,
  tr: ee,
  th: ae,
  td: oe,
  datalist: le,
  option: re,
  header: ne,
  a: se,
  i: ce,
  small: ie,
  ul: ue,
  li: de,
  hr: be
};
function pe({ inJson: t, inCatalog: e, inSpec: a }) {
  const o = t, l = e ?? a ?? he, r = [];
  return N({
    inSpec: o,
    inFunc: (n) => {
      ft({
        inNode: n,
        inCatalog: l,
        inErrors: r
      });
    }
  }), {
    isValid: r.length === 0,
    errors: r
  };
}
const me = "http://www.w3.org/2000/svg", fe = /* @__PURE__ */ new Set([
  "svg",
  "path",
  "symbol",
  "use",
  "g",
  "circle",
  "ellipse",
  "rect",
  "line",
  "polyline",
  "polygon",
  "text",
  "tspan",
  "defs",
  "clippath",
  "mask",
  "pattern",
  "marker",
  "lineargradient",
  "radialgradient",
  "stop",
  "image",
  "filter",
  "fegaussianblur",
  "femerge",
  "femergenode"
]), ye = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const a = document.createElement("input");
    return a.type = "checkbox", a;
  }
  return fe.has(e) ? document.createElementNS(me, e) : document.createElement(e);
}, we = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), ge = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Ne = "http://www.w3.org/1999/xlink", Ce = ({ inElement: t, inAttributes: e }) => {
  const a = t, o = e;
  if (!a || !o || typeof o != "object")
    return a;
  const l = typeof SVGElement < "u" ? a instanceof SVGElement : a.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([r, n]) => {
    if (r === "class") {
      l ? a.setAttribute("class", String(n)) : a.className = n;
      return;
    }
    if (r === "xlink:href" || r === "href") {
      if (n != null) {
        const s = String(n);
        if (l)
          try {
            a.setAttributeNS(Ne, "href", s);
          } catch {
          }
        a.setAttribute("href", s), a.setAttribute("xlink:href", s);
      }
      return;
    }
    if (typeof n == "boolean") {
      n ? a.setAttribute(r, "") : a.removeAttribute(r);
      return;
    }
    n != null && a.setAttribute(r, String(n));
  }), a;
}, Te = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const a = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return a.length && t.classList.add(...a), t;
}, E = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = ye({ inTagName: t.tagName });
  return e ? (we({
    inElement: e,
    inTextContent: t.textContent,
    inTagName: t.tagName
  }), ge({
    inElement: e,
    inProperties: t.properties
  }), Ce({
    inElement: e,
    inAttributes: t.attributes
  }), Te({
    inElement: e,
    inClassList: t.classList
  }), e) : null;
}, F = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return N({ inSpec: e, inFunc: E });
}, xe = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t, a = pe({ inJson: e });
  return a.isValid || console.warn("[json-to-tag] Specification validation issues:", a.errors), N({ inSpec: e, inFunc: E });
};
ct({
  buildSpecElement: F,
  buildSpecElementWithValidate: xe
});
const $e = {
  version: "2.1.1",
  name: "spec-to-dom"
}, Ae = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.specToDom = {
    meta: $e,
    appendToDom: t
  });
}, O = ({ buildSpec: t, targetHtmlId: e, appendPosition: a, showLog: o }) => {
  const l = t, r = e, n = a, s = o;
  s && console.log("renderToDom 1 (content):", l);
  const c = document.getElementById(r);
  return c ? (Array.isArray(l) || l instanceof NodeList || l instanceof HTMLCollection ? n === "prepend" ? c.prepend(...l) : c.append(...l) : n === "prepend" ? c.prepend(l) : (c.innerHTML = "", c.append(l)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
Ae(O);
const B = ({ jsonSpec: t, targetHtmlId: e, appendPosition: a, showLog: o }) => {
  const l = F(t);
  return O({ buildSpec: l, targetHtmlId: e, appendPosition: a, showLog: o });
};
nt(B);
const Pe = {
  version: "1.2.1",
  name: "json-renderers-specs"
}, Se = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersSpecs = {
    meta: Pe,
    render: t
  });
}, je = {
  simple: {
    base: {
      tagName: "div",
      attributes: {
        "data-role": "table-parent"
      },
      children: [
        {
          tagName: "table",
          attributes: {
            class: "table table-hover table-striped align-middle border mb-0"
          },
          children: [
            {
              tagName: "colgroup",
              attributes: {
                "data-role": "table-colgroup"
              },
              children: []
            },
            {
              tagName: "thead",
              attributes: {
                class: "table-dark",
                "data-role": "table-header"
              },
              children: [
                {
                  tagName: "tr",
                  attributes: {
                    "data-role": "table-header-row"
                  },
                  children: []
                }
              ]
            },
            {
              tagName: "tbody",
              attributes: {
                "data-role": "table-body"
              },
              children: []
            },
            {
              tagName: "tfoot",
              attributes: {
                "data-role": "table-footer"
              },
              children: [
                {
                  tagName: "tr",
                  attributes: {
                    "data-role": "table-footer-row"
                  },
                  children: []
                }
              ]
            }
          ]
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
        destinationPath: {
          fileName: "base",
          dataRole: "table-colgroup",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildColGroup",
        func: "fromCollection"
      },
      {
        narration: "Build table header",
        destinationPath: {
          fileName: "base",
          dataRole: "table-header-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildHeader",
        func: "fromCollection"
      }
    ],
    double: [
      {
        narration: "Build table body",
        destinationPath: {
          fileName: "base",
          dataRole: "table-body",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        func: "twoDimensional"
      }
    ]
  },
  withFooter: {
    base: {
      tagName: "table",
      attributes: {
        class: "table table-hover table-striped align-middle border mb-0"
      },
      children: [
        {
          tagName: "colgroup",
          attributes: {
            "data-role": "table-colgroup"
          },
          children: []
        },
        {
          tagName: "thead",
          attributes: {
            class: "table-dark",
            "data-role": "table-header"
          },
          children: [
            {
              tagName: "tr",
              attributes: {
                "data-role": "table-header-row"
              },
              children: []
            }
          ]
        },
        {
          tagName: "tbody",
          attributes: {
            "data-role": "table-body"
          },
          children: []
        },
        {
          tagName: "tfoot",
          attributes: {
            "data-role": "table-footer"
          },
          children: [
            {
              tagName: "tr",
              attributes: {
                "data-role": "table-footer-row"
              },
              children: []
            }
          ]
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
        destinationPath: {
          fileName: "base",
          dataRole: "table-colgroup",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildColGroup",
        func: "fromCollection"
      },
      {
        narration: "Build table header",
        destinationPath: {
          fileName: "base",
          dataRole: "table-header-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildHeader",
        func: "fromCollection"
      },
      {
        narration: "Build footer input cells",
        destinationPath: {
          fileName: "base",
          dataRole: "table-footer-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildFooter",
        func: "fromCollection"
      }
    ],
    double: [
      {
        narration: "Build table body",
        destinationPath: {
          fileName: "base",
          dataRole: "table-body",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        func: "twoDimensional"
      }
    ]
  },
  bodyOnly: {
    base: {
      tagName: "tbody",
      attributes: {
        "data-role": "table-body"
      },
      children: []
    },
    single: [],
    double: [
      {
        narration: "Build table body",
        destinationPath: {
          fileName: "base",
          dataRole: "table-body",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        func: "twoDimensional"
      }
    ]
  },
  footerOnly: {
    base: {
      tagName: "tfoot",
      attributes: {
        "data-role": "table-footer"
      },
      children: [
        {
          tagName: "tr",
          attributes: {
            "data-role": "table-footer-row"
          },
          children: []
        }
      ]
    },
    single: [
      {
        narration: "Build footer input cells",
        destinationPath: {
          fileName: "base",
          dataRole: "table-footer-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildFooter",
        func: "fromCollection"
      }
    ],
    double: []
  },
  headerOnly: {
    base: {
      tagName: "table",
      attributes: {
        class: "table table-hover table-striped align-middle border mb-0"
      },
      children: [
        {
          tagName: "colgroup",
          attributes: {
            "data-role": "table-colgroup"
          },
          children: []
        },
        {
          tagName: "thead",
          attributes: {
            class: "table-dark",
            "data-role": "table-header"
          },
          children: [
            {
              tagName: "tr",
              attributes: {
                "data-role": "table-header-row"
              },
              children: []
            }
          ]
        },
        {
          tagName: "tbody",
          attributes: {
            "data-role": "table-body"
          },
          children: []
        }
      ]
    },
    single: [
      {
        narration: "Build column widths",
        destinationPath: {
          fileName: "base",
          dataRole: "table-colgroup",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildColGroup",
        func: "fromCollection"
      },
      {
        narration: "Build table header",
        destinationPath: {
          fileName: "base",
          dataRole: "table-header-row",
          filePath: [
            "children"
          ]
        },
        sourcePath: {
          fileName: "data",
          filePath: [
            "columns"
          ]
        },
        templateKey: "buildHeader",
        func: "fromCollection"
      }
    ],
    double: []
  }
}, ke = {
  base: {
    tagName: "select",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, ve = {
  base: {
    tagName: "datalist",
    attributes: {
      id: "${columnName}",
      "data-name": "${columnName}"
    },
    children: []
  }
}, Ee = {
  base: {
    tagName: "div",
    attributes: {
      class: "d-flex align-items-center gap-2"
    },
    children: [
      {
        tagName: "label",
        textContent: "${label}",
        attributes: {
          class: "form-label mb-0 text-nowrap fw-semibold",
          for: "${id}"
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "search",
          placeholder: "${placeholder}",
          class: "form-control",
          id: "${id}"
        }
      }
    ]
  }
}, Fe = {
  base: {
    tagName: "div",
    attributes: {
      class: "card shadow-sm border-0"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center"
        },
        children: [
          {
            tagName: "h2",
            textContent: "${title}",
            attributes: {
              class: "h5 fw-bold mb-0 text-dark"
            }
          }
        ]
      },
      {
        tagName: "div",
        attributes: {
          class: "card-body p-4"
        },
        children: [
          {
            tagName: "form",
            attributes: {
              id: "${formId}",
              "data-role": "form-body"
            },
            children: []
          }
        ]
      }
    ]
  }
}, m = {
  table: je,
  select: ke,
  dataList: ve,
  searchInput: Ee,
  form: Fe
}, Oe = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Be = (t, e) => {
  if (!Oe(t)) return;
  let a = {};
  for (const [o, l] of Object.entries(t))
    a[o] = p(e, l);
  return a;
}, Re = (t, e) => {
  const a = structuredClone(t);
  return Array.isArray(a) ? a.map((l) => p(e, l)) : void 0;
}, R = (t, e, a) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (o, l) => e[l] !== void 0 ? e[l] : o);
}, Le = (t, e) => R(t, e), Ie = (t, e, a) => {
  if (a && console.log("inElement : ", t), a && console.log("inTemplate : ", e), e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, De = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, Ge = (t) => {
  var e, a;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).applyTemplate ?? (e.applyTemplate = t), (a = globalThis.ks).transformerFuncs ?? (a.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: De,
    applyTemplate: t
  });
}, p = (t, e, a) => {
  const o = t, l = e;
  Ie(o, l, a);
  const r = structuredClone(l);
  return typeof r == "string" ? R(r, o) : (r === null || typeof r != "object" || ("textContent" in r && (r.textContent = Le(r == null ? void 0 : r.textContent, o)), "attributes" in r && (r.attributes = Be(r == null ? void 0 : r.attributes, o)), "children" in r && (r.children = Re(r == null ? void 0 : r.children, o))), r);
};
Ge(p);
const Ke = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let a = 0; a < t.length; a++)
    if (!t[a] || typeof t[a] != "object")
      throw new TypeError(`inSource[${a}] must be an object`);
  if (!e || typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, w = (t, e) => {
  const a = t, o = e;
  return Ke(a, o), a.map((l) => p(l, o));
}, C = (t) => Array.isArray(t) ? t : [t], L = (t, e, a) => {
  t[e] = a;
}, He = (t, e, a) => {
  t[e].push(...C(a));
}, Me = (t, e, a) => {
  t[e].unshift(...C(a));
}, Ve = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.push(...structuredClone(C(a)));
  });
}, We = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.unshift(...structuredClone(C(a)));
  });
}, qe = (t, e, a) => {
  t[e].forEach((o, l) => {
    const r = structuredClone(a);
    r.textContent = l + 1, o.children.unshift(r);
  });
}, Je = {
  set: L,
  push: He,
  unshift: Me,
  pushToRows: Ve,
  unshiftToRows: We,
  unshiftSerialToRows: qe
}, _e = (t, e) => t.map((o) => ({
  ...o,
  rowData: e[o.columnName]
})), Ue = (t, e, a) => {
  var l, r, n, s, c, i;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let u = 0; u < t.length; u++) {
    const d = t[u];
    if (!d || typeof d != "object")
      throw new TypeError(`inColumns[${u}] must be an object`);
    if (typeof d.columnName != "string" || !d.columnName.trim())
      throw new TypeError(`inColumns[${u}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let u = 0; u < e.length; u++) {
    const d = e[u];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${u}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const o = ((n = (r = (l = t[0]) == null ? void 0 : l.template) == null ? void 0 : r.body) == null ? void 0 : n.tr) || "buildBodyTr";
  if (!(o in a))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let u = 0; u < t.length; u++) {
    const d = t[u], b = ((c = (s = d.template) == null ? void 0 : s.body) == null ? void 0 : c.cell) || ((i = d.template) == null ? void 0 : i.bodyCell) || "buildBodyCell";
    if (!(b in a))
      throw new Error(`Cell template "${b}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, ze = (t, e) => t.map((o) => {
  var s, c, i;
  const l = ((c = (s = o.template) == null ? void 0 : s.body) == null ? void 0 : c.cell) || ((i = o.template) == null ? void 0 : i.bodyCell) || "buildBodyCell", r = e[l];
  return p(o, r);
}), Xe = (t, e, a) => {
  var i, u, d;
  Ue(t, e, a);
  const o = t, l = e, r = a, n = ((d = (u = (i = o[0]) == null ? void 0 : i.template) == null ? void 0 : u.body) == null ? void 0 : d.tr) || "buildBodyTr", s = r[n];
  return l.map((b) => {
    const h = p(b, s), T = _e(o, b), M = ze(T, r);
    return h.children = M, h;
  });
}, I = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = I(o, e);
    if (l) return l;
  }
  return null;
}, Qe = (t, e) => {
  const a = e.dataRole ? I(t[e.fileName], e.dataRole) : t[e.fileName], o = [...e.filePath ?? []], l = o.pop();
  return { parent: o.reduce((n, s) => n[s], a), key: l };
}, D = (t, e, a, o) => {
  const { parent: l, key: r } = Qe(t, e), n = e.action;
  (Je[n] || L)(l, r, a);
}, G = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = G(o, e);
    if (l) return l;
  }
  return null;
}, Ye = (t, e) => {
  const a = t[e.fileName], o = e.dataRole ? G(a, e.dataRole) : a;
  return (e.filePath ?? []).reduce((l, r) => l[r], o);
}, Ze = { applyTemplate: p, fromCollection: w }, ta = (t, e, a) => (t == null ? void 0 : t.sourcePath) === null ? null : Ye(e, t.sourcePath), ea = (t, e, a) => {
  const o = (e == null ? void 0 : e.spec) ?? Rt, l = t.templateKey, r = t == null ? void 0 : t.func, n = o[l], s = ta(t, e), c = r === null ? n : Ze[t.func](s, n), i = s === null ? n : c;
  D(e, t.destinationPath, i);
}, g = (t, e, a, o) => {
  t.forEach((l) => {
    ea(l, e);
  });
}, aa = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, oa = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, la = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ra = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        id: "${columnName}",
        list: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, na = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, sa = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, ca = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${agg:count}",
      attributes: {
        class: "btn btn-primary btn-sm"
      }
    }
  ]
}, ia = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "show",
      attributes: {
        class: "btn btn-primary btn-sm ks-btn-show"
      }
    }
  ]
}, ua = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, da = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, ba = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, ha = {
  tagName: "td",
  children: []
}, pa = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ma = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, fa = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, ya = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, wa = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "save",
      attributes: {
        class: "btn btn-warning btn-sm ks-btn-save"
      }
    }
  ]
}, ga = {
  buildBodyTr: aa,
  buildColGroup: oa,
  buildHeader: la,
  buildFooter: ra,
  buildBodyCell: na,
  button: sa,
  buttonCell: ca,
  optionsButtonCell: ia,
  buildOption: ua,
  buildSelect: da,
  buildDataList: ba,
  emptyCell: ha,
  headerSerialCell: pa,
  colGroupForSerial: ma,
  colGroupForOption: fa,
  headerForOption: ya,
  tdWithButtonSaveWarning: wa
}, Na = { applyTemplate: p, fromCollection: w, twoDimensional: Xe }, Ca = (t, e, a, o) => {
  const l = Na[t.func](
    e.data.columns,
    e.data.data,
    ga
  );
  D(e, t.destinationPath, l);
}, Ta = (t, e, a, o) => {
  t.forEach((l) => {
    Ca(l, e);
  });
}, xa = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/base: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(l), e && console.log(l), o;
}, $a = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/options: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(l), e && console.log(l), o;
}, Aa = (t, e, a) => {
  const o = typeof t == "boolean", l = `guards/showLog: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(l), e && console.log(l), o;
}, Pa = (t, e, a) => {
  const o = Array.isArray(t), l = `guards/returnLog: ${o ? "passed" : "failed"}`;
  return o ? t.push(l) : Array.isArray(a) && a.push(l), e && console.log(l), o;
}, Sa = ({ options: t, base: e, showLog: a, returnLog: o }) => ({
  base: xa(e, a, o),
  options: $a(t, a, o),
  showLog: Aa(a, a, o),
  returnLog: Pa(o, a, o)
}), ja = [
  {
    narration: "Prepend the serial column width to the table colgroup.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "colGroupForSerial",
    func: null
  },
  {
    narration: "Prepend the serial header cell to the table header row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "headerSerialCell",
    func: null
  },
  {
    narration: "Prepend the serial number cell into each table body row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ],
      action: "unshiftSerialToRows"
    },
    sourcePath: null,
    templateKey: "buildBodyCell",
    func: null
  },
  {
    narration: "Prepend the serial footer cell to the table footer row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "headerSerialCell",
    func: null
  }
], ka = [
  {
    narration: "Append the options column width to the table colgroup.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-colgroup",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: null,
    templateKey: "colGroupForOption",
    func: null
  },
  {
    narration: "Append the options header cell to the table header row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-header-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: null,
    templateKey: "headerForOption",
    func: null
  },
  {
    narration: "Append the options button cell into each table body row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-body",
      filePath: [
        "children"
      ],
      action: "pushToRows"
    },
    sourcePath: null,
    templateKey: "optionsButtonCell",
    func: null
  },
  {
    narration: "Append the options footer cell to the table footer row.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: null,
    templateKey: "tdWithButtonSaveWarning",
    func: null
  }
], va = [
  {
    narration: "Prepend the search row to top of the table.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-parent",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: null,
    templateKey: "tableSearch",
    func: null
  }
], K = (t, e) => {
  var a;
  return !t || typeof t != "object" ? !1 : ((a = t.attributes) == null ? void 0 : a["data-role"]) === e ? !0 : Array.isArray(t.children) && t.children.some((o) => K(o, e));
}, x = (t, e) => t.filter(
  ({ destinationPath: o }) => K(e, o == null ? void 0 : o.dataRole)
), Ea = ({ options: t = {}, base: e, showLog: a = !1, returnLog: o = [] } = {}) => {
  const l = Sa({ options: t, base: e, showLog: a, returnLog: o });
  if (!Object.values(l).every(Boolean))
    return e;
  const r = t, n = e;
  return (r.showSerial || r.serial) && g(
    x(ja, n),
    { base: n }
  ), (r.showOptions || r.options) && g(
    x(ka, n),
    { base: n }
  ), r.showSearch && g(
    x(va, n),
    { base: n }
  ), n;
}, P = ({
  inData: t = [],
  inColumns: e = [],
  inType: a = "simple",
  footer: o = [],
  inOptions: l = {},
  options: r = {},
  inShowLog: n = !1
} = {}) => {
  const s = !a || a === "table" ? "simple" : a, c = Object.keys(l || {}).length > 0 ? l : r, i = m.table[s] || m.table.simple;
  if (!i)
    throw new Error(`Unknown table type: "${s}". Available types: ${Object.keys(m.table).join(", ")}`);
  const u = structuredClone(i.base), d = {
    data: { columns: e, data: t },
    base: u,
    ...c
  };
  return i.single && i.single.length > 0 && g(i.single, d), i.double && i.double.length > 0 && Ta(i.double, d), Ea({ options: c, base: u }), u;
}, Fa = ({ inData: t = [], inColumns: e = [], inOptions: a = {}, options: o = {} } = {}) => {
  const l = Object.keys(a || {}).length > 0 ? a : o, r = m.select;
  let n = e;
  if (l.columnName || l.column) {
    const s = l.columnName || l.column;
    n = e.filter((c) => (c.columnName || c) === s);
  } else e.length > 1 && !l.allColumns && (n = [e.find((c) => c.type === "select") || e[0]]);
  return n.map((s) => {
    const c = (s == null ? void 0 : s.columnName) || (s == null ? void 0 : s.name) || s || "", i = structuredClone(r.base);
    i.attributes.id = c, i.attributes["data-name"] = c;
    const u = {
      tagName: "option",
      textContent: `\${${c}}`,
      attributes: { value: `\${${c}}` }
    };
    return i.children = w(t, u), i;
  });
}, Oa = ({ inData: t = [], inColumns: e = [] } = {}) => e.map((a) => {
  const o = (a == null ? void 0 : a.columnName) || "", l = {
    tagName: "option",
    textContent: `\${${o}}`,
    attributes: { value: `\${${o}}` }
  };
  return w(t, l);
}), S = ({ inData: t = [], inColumns: e = [], inOptions: a = {}, options: o = {} } = {}) => {
  const l = Object.keys(a || {}).length > 0 ? a : o, r = m.dataList;
  let n = e;
  if (l.columnName || l.column) {
    const s = l.columnName || l.column;
    n = e.filter((c) => (c.columnName || c) === s);
  } else e.length > 1 && !l.allColumns && (n = [e[0]]);
  return n.map((s) => {
    const c = (s == null ? void 0 : s.columnName) || (s == null ? void 0 : s.name) || s || "", i = structuredClone(r.base);
    i.attributes.id = c, i.attributes["data-name"] = c;
    const u = {
      tagName: "option",
      textContent: `\${${c}}`,
      attributes: { value: `\${${c}}` }
    };
    return i.children = w(t, u), i;
  });
}, $ = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = Object.keys(t || {}).length > 0 ? t : e, o = structuredClone(m.searchInput.base), l = a.label ?? "Search:", r = a.placeholder ?? "Search...", n = a.id ?? "searchInputId", s = a.class ?? "form-control";
  return o.children[0].textContent = l, o.children[0].attributes.for = n, o.children[1].attributes.placeholder = r, o.children[1].attributes.id = n, o.children[1].attributes.class = s, o;
}, Ba = (t, e = {}) => {
  const a = t.columnName || t.name || "", o = t.label || a, l = t.type || "text", r = t.placeholder || "", n = e[a] ?? t.value ?? "", s = t.required ?? !1;
  if (l === "textarea") {
    const i = {
      tagName: "textarea",
      textContent: String(n),
      attributes: {
        class: "form-control",
        id: a,
        name: a,
        placeholder: r,
        rows: "3"
      }
    };
    return s && (i.attributes.required = "true"), {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        i
      ]
    };
  }
  if (l === "select") {
    const i = (t.options || []).map((u) => {
      const d = typeof u == "object" ? u.value : u, b = typeof u == "object" ? u.label : u, h = {
        tagName: "option",
        textContent: String(b),
        attributes: { value: String(d) }
      };
      return String(d) === String(n) && (h.attributes.selected = "true"), h;
    });
    return {
      tagName: "div",
      attributes: { class: "mb-3" },
      children: [
        { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
        {
          tagName: "select",
          attributes: { class: "form-select", id: a, name: a },
          children: i
        }
      ]
    };
  }
  if (l === "checkbox") {
    const i = {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "form-check-input",
        id: a,
        name: a
      }
    };
    return n && (i.attributes.checked = "true"), {
      tagName: "div",
      attributes: { class: "mb-3 form-check" },
      children: [
        i,
        { tagName: "label", textContent: o, attributes: { class: "form-check-label small fw-semibold text-secondary", for: a } }
      ]
    };
  }
  const c = {
    tagName: "input",
    attributes: {
      type: l,
      class: "form-control",
      id: a,
      name: a,
      placeholder: r
    }
  };
  return n !== "" && (c.attributes.value = String(n)), s && (c.attributes.required = "true"), {
    tagName: "div",
    attributes: { class: "mb-3" },
    children: [
      { tagName: "label", textContent: o, attributes: { class: "form-label fw-semibold small text-secondary", for: a } },
      c
    ]
  };
}, Ra = ({
  inData: t = [],
  inColumns: e = [],
  inOptions: a = {},
  options: o = {}
} = {}) => {
  var h;
  const l = Object.keys(a || {}).length > 0 ? a : o, r = structuredClone((h = m.form) == null ? void 0 : h.base), n = l.title || l.ariaLabel || "Form", s = l.formId || "formElement", c = l.submitLabel || "Submit";
  r.children[0].children[0].textContent = n;
  const i = r.children[1].children[0];
  i.attributes.id = s;
  const u = Array.isArray(t) && t.length > 0 ? t[0] : t || {}, d = e.map((T) => Ba(T, u)), b = {
    tagName: "div",
    attributes: { class: "d-flex justify-content-end gap-2 mt-4 pt-3 border-top" },
    children: [
      { tagName: "button", textContent: "Reset", attributes: { type: "reset", class: "btn btn-outline-secondary" } },
      { tagName: "button", textContent: c, attributes: { type: "submit", class: "btn btn-primary px-4 fw-medium" } }
    ]
  };
  return i.children = [...d, b], r;
}, La = {
  table: P,
  tableFromSpec: P,
  select: Fa,
  selectOptionsOnly: Oa,
  dataList: S,
  datalist: S,
  searchInput: $,
  search: $,
  inputRow: $,
  form: Ra
}, H = (t = {}) => {
  A(t);
  const e = t == null ? void 0 : t.showLog, a = t.type, o = t == null ? void 0 : t.options;
  let l = a, r = a;
  if (a.includes(".")) {
    const c = a.split(".");
    l = c[0], r = c[1];
  }
  e && console.log("localMainType : ", l, r);
  const n = La[l];
  if (!n)
    throw new Error(`Renderer for type "${l}" not found.`);
  const s = n({
    inType: r,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: e
  });
  return e && console.log("json-renderers-build output:", s), s;
};
Se(H);
const Ia = ({
  inColumns: t,
  inType: e = "table",
  inData: a,
  inShowLog: o = !1,
  inOptions: l
} = {}) => H({
  type: e,
  data: a ?? [],
  columns: t,
  showLog: o,
  options: l
}), Da = (t = {}) => {
  y(t);
  const e = t == null ? void 0 : t.showLog, a = t == null ? void 0 : t.options;
  e && console.log("first : ", t == null ? void 0 : t.options, t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const o = Ia({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog,
    inOptions: a
  });
  e && console.log("spec : ", o);
  const l = B({
    jsonSpec: o,
    targetHtmlId: t.targetHtmlId,
    appendPosition: t.appendPosition,
    showLog: e
  });
  return e && console.log("dom : ", l), l;
};
W(Da);
export {
  Da as default,
  Da as render
};
