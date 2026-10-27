const et = {
  version: "v21.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, at = (t) => {
  const a = t;
  typeof globalThis > "u" || !a || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: et,
    render: a
  });
}, ot = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.type;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, lt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.data;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, nt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.columns;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, st = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.showLog;
  if (e !== void 0 && typeof e != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, N = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return ot(a), lt(a), nt(a), st(a), !0;
}, rt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.targetHtmlId;
  if (e === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof e != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (e.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, it = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.appendPosition;
  if (e === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof e != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, ct = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.classToApply;
  if (e === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof e != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, E = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return rt(a), it(a), ct(a), !0;
}, ut = "table", dt = "", bt = [], pt = [], mt = "", ht = "replace", ft = !1, y = {
  type: ut,
  targetHtmlId: dt,
  data: bt,
  columns: pt,
  classToApply: mt,
  appendPosition: ht,
  showLog: ft
}, R = (t) => {
  const a = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return a && a in y ? y[a] : { ...y };
};
Object.assign(R, y);
const C = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return N(a), E(a), !0;
};
C.getSpec = R;
C.configSpec = y;
C.guardSpec = N;
C.guardMount = E;
const yt = {
  version: "1.41.0",
  name: "json-to-dom"
}, Ct = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonToDom = {
    meta: yt,
    appendToDom: t
  });
}, wt = {
  version: "v12",
  description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, gt = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const a = typeof t == "function" ? t : t.buildSpecElement, e = t.buildSpecElementWithValidate, o = {
    meta: wt,
    buildSpecElement: a,
    ...e ? { buildSpecElementWithValidate: e } : {}
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, L = ({ inItems: t, inFunc: a }) => {
  const e = t, o = a;
  return Array.isArray(e) ? e.map((l) => x({ inSpec: l, inFunc: o })).flat(1 / 0).filter(Boolean) : [];
}, $t = ({ inSpec: t, inFunc: a }) => {
  const e = t, o = a;
  if (!e || typeof e != "object" || Array.isArray(e))
    return null;
  const l = typeof o == "function" ? o(e) : null;
  if (Array.isArray(e.children)) {
    const n = L({ inItems: e.children, inFunc: o });
    if (l && typeof l.append == "function" && Array.isArray(n)) {
      const s = n.filter(Boolean);
      s.length && l.append(...s);
    }
  }
  return l;
}, x = ({ inSpec: t, inFunc: a }) => {
  const e = t, o = a;
  return e == null ? null : typeof Node < "u" && e instanceof Node ? e : Array.isArray(e) ? L({ inItems: e, inFunc: o }) : typeof e == "object" ? $t({ inSpec: e, inFunc: o }) : typeof e == "string" || typeof e == "number" ? typeof document < "u" ? document.createTextNode(String(e)) : String(e) : null;
}, Nt = ({ inNode: t, inErrors: a }) => {
  const e = t, o = a;
  return !e || typeof e != "object" || Array.isArray(e) ? (o.push({
    reason: "Node must be a plain object"
  }), !1) : !0;
}, xt = ({ inNode: t, inCatalog: a, inErrors: e }) => {
  const o = t, l = a, n = e, s = o.tagName;
  return !s || typeof s != "string" || s.trim() === "" ? (n.push({
    reason: "Missing or empty 'tagName'"
  }), !1) : l && typeof l == "object" && !(!!l[s] || Object.keys(l).includes(s)) ? (n.push({
    tagName: s,
    reason: `Unrecognized tagName '${s}' not found in spec catalog`
  }), !1) : !0;
}, Tt = ({ inNode: t, inCatalog: a, inErrors: e }) => {
  const o = t, l = a, n = e, s = o.tagName, r = l ? l[s] : null;
  return r && r.allowsTextContent === !1 && o.textContent ? (n.push({
    tagName: s,
    reason: `Tag '${s}' does not allow direct textContent`
  }), !1) : !0;
}, At = ({ inNode: t, inCatalog: a, inErrors: e }) => {
  const o = t, l = a, n = e, s = o.tagName, r = l ? l[s] : null;
  return r && r.allowsChildren === !1 && Array.isArray(o.children) && o.children.length > 0 ? (n.push({
    tagName: s,
    reason: `Tag '${s}' does not allow children (void element)`
  }), !1) : "children" in o && !Array.isArray(o.children) ? (n.push({
    tagName: s,
    reason: "'children' must be an array"
  }), !1) : !0;
}, Ft = ({ inNode: t, inCatalog: a, inErrors: e }) => {
  const o = t, l = a, n = e, s = o.tagName, r = l ? l[s] : null;
  return r && Array.isArray(r.childTags) && r.childTags.length > 0 && Array.isArray(o.children) && o.children.forEach((i) => {
    i && i.tagName && !r.childTags.includes(i.tagName) && n.push({
      tagName: i.tagName,
      reason: `Tag '${i.tagName}' is not an allowed child of '${s}' (allowed: ${r.childTags.join(", ")})`
    });
  }), !0;
}, kt = ({ inNode: t, inErrors: a }) => {
  const e = t, o = a, l = e.tagName;
  return "attributes" in e && (!e.attributes || typeof e.attributes != "object" || Array.isArray(e.attributes)) ? (o.push({
    tagName: l,
    reason: "'attributes' must be a key-value object"
  }), !1) : !0;
}, St = ({ inNode: t, inCatalog: a, inErrors: e }) => {
  const o = t, l = a, n = e;
  Nt({ inNode: o, inErrors: n }) && (xt({ inNode: o, inCatalog: l, inErrors: n }), Tt({ inNode: o, inCatalog: l, inErrors: n }), At({ inNode: o, inCatalog: l, inErrors: n }), Ft({ inNode: o, inCatalog: l, inErrors: n }), kt({ inNode: o, inErrors: n }));
}, Bt = "./tags.schema.json", jt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, vt = {
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
}, It = {
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
}, Pt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Et = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Rt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Lt = {
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
}, Ot = {
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
}, Dt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Vt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Wt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Gt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Kt = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, qt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Ht = {
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
}, Mt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, zt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Ut = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Jt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, _t = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Xt = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Qt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Yt = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, Zt = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, te = {
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
}, ee = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, ae = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, oe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, le = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, ne = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, se = {
  $schema: Bt,
  div: jt,
  input: vt,
  checkbox: It,
  colgroup: Pt,
  col: Et,
  label: Rt,
  form: Lt,
  select: Ot,
  p: Dt,
  h1: Vt,
  h2: Wt,
  span: Gt,
  img: Kt,
  button: qt,
  table: Ht,
  thead: Mt,
  tbody: zt,
  tfoot: Ut,
  tr: Jt,
  th: _t,
  td: Xt,
  datalist: Qt,
  option: Yt,
  header: Zt,
  a: te,
  i: ee,
  small: ae,
  ul: oe,
  li: le,
  hr: ne
};
function re({ inJson: t, inCatalog: a, inSpec: e }) {
  const o = t, l = a ?? e ?? se, n = [];
  return x({
    inSpec: o,
    inFunc: (s) => {
      St({
        inNode: s,
        inCatalog: l,
        inErrors: n
      });
    }
  }), {
    isValid: n.length === 0,
    errors: n
  };
}
const ie = "http://www.w3.org/2000/svg", ce = /* @__PURE__ */ new Set([
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
]), ue = ({ inTagName: t }) => {
  const a = t == null ? void 0 : t.toLowerCase();
  if (!a) return null;
  if (a === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return ce.has(a) ? document.createElementNS(ie, a) : document.createElement(a);
}, de = ({ inElement: t, inTextContent: a }) => (!t || a === void 0 || a === null || (t.textContent = a), t), be = ({ inElement: t, inProperties: a }) => (t && a && typeof a == "object" && Object.assign(t, a), t), pe = "http://www.w3.org/1999/xlink", me = ({ inElement: t, inAttributes: a }) => {
  const e = t, o = a;
  if (!e || !o || typeof o != "object")
    return e;
  const l = typeof SVGElement < "u" ? e instanceof SVGElement : e.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([n, s]) => {
    if (n === "class") {
      l ? e.setAttribute("class", String(s)) : e.className = s;
      return;
    }
    if (n === "xlink:href" || n === "href") {
      if (s != null) {
        const r = String(s);
        if (l)
          try {
            e.setAttributeNS(pe, "href", r);
          } catch {
          }
        e.setAttribute("href", r), e.setAttribute("xlink:href", r);
      }
      return;
    }
    if (typeof s == "boolean") {
      s ? e.setAttribute(n, "") : e.removeAttribute(n);
      return;
    }
    s != null && e.setAttribute(n, String(s));
  }), e;
}, he = ({ inElement: t, inClassList: a }) => {
  if (!t || !a) return t;
  const e = typeof a == "string" ? a.split(/\s+/).filter(Boolean) : Array.isArray(a) ? a.filter((o) => typeof o == "string" && o.trim()) : [];
  return e.length && t.classList.add(...e), t;
}, O = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const a = ue({ inTagName: t.tagName });
  return a ? (de({
    inElement: a,
    inTextContent: t.textContent,
    inTagName: t.tagName
  }), be({
    inElement: a,
    inProperties: t.properties
  }), me({
    inElement: a,
    inAttributes: t.attributes
  }), he({
    inElement: a,
    inClassList: t.classList
  }), a) : null;
}, D = (t = {}) => {
  const a = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return x({ inSpec: a, inFunc: O });
}, fe = (t = {}) => {
  const a = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t, e = re({ inJson: a });
  return e.isValid || console.warn("[json-to-tag] Specification validation issues:", e.errors), x({ inSpec: a, inFunc: O });
};
gt({
  buildSpecElement: D,
  buildSpecElementWithValidate: fe
});
const ye = {
  version: "2.1.1",
  name: "spec-to-dom"
}, Ce = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.specToDom = {
    meta: ye,
    appendToDom: t
  });
}, V = ({ buildSpec: t, targetHtmlId: a, appendPosition: e, showLog: o }) => {
  const l = t, n = a, s = e, r = o;
  r && console.log("renderToDom 1 (content):", l);
  const i = document.getElementById(n);
  return i ? (Array.isArray(l) || l instanceof NodeList || l instanceof HTMLCollection ? s === "prepend" ? i.prepend(...l) : i.append(...l) : s === "prepend" ? i.prepend(l) : (i.innerHTML = "", i.append(l)), r && console.log("renderToDom 2 (mounted):", i), i) : null;
};
Ce(V);
const W = ({ jsonSpec: t, targetHtmlId: a, appendPosition: e, showLog: o }) => {
  const l = D(t);
  return V({ buildSpec: l, targetHtmlId: a, appendPosition: e, showLog: o });
};
Ct(W);
const we = {
  version: "1.22.0",
  name: "json-renderers-build"
}, ge = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: we,
    render: t
  });
}, $e = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Ne = (t, a) => {
  if (!$e(t)) return;
  let e = {};
  for (const [o, l] of Object.entries(t))
    e[o] = b(a, l);
  return e;
}, xe = (t, a) => {
  const e = structuredClone(t);
  return Array.isArray(e) ? e.map((l) => b(a, l)) : void 0;
}, G = (t, a, e) => {
  if (t === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : t.replace(/\$\{(\w+)\}/g, (o, l) => a[l] !== void 0 ? a[l] : o);
}, Te = (t, a) => G(t, a), Ae = (t, a, e) => {
  if (e && console.log("inElement : ", t), e && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, Fe = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, ke = (t) => {
  var a, e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = t), (e = globalThis.ks).transformerFuncs ?? (e.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: Fe,
    applyTemplate: t
  });
}, b = (t, a, e) => {
  const o = t, l = a;
  Ae(o, l, e);
  const n = structuredClone(l);
  return typeof n == "string" ? G(n, o) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = Te(n == null ? void 0 : n.textContent, o)), "attributes" in n && (n.attributes = Ne(n == null ? void 0 : n.attributes, o)), "children" in n && (n.children = xe(n == null ? void 0 : n.children, o))), n);
};
ke(b);
const Se = (t, a) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let e = 0; e < t.length; e++)
    if (!t[e] || typeof t[e] != "object")
      throw new TypeError(`inSource[${e}] must be an object`);
  if (!a || typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, h = (t, a) => {
  const e = t, o = a;
  return Se(e, o), e.map((l) => b(l, o));
}, Be = (t, a) => t.map((o) => ({
  ...o,
  rowData: a[o.columnName]
})), je = (t, a, e) => {
  var l, n, s, r, i, d;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let c = 0; c < t.length; c++) {
    const u = t[c];
    if (!u || typeof u != "object")
      throw new TypeError(`inColumns[${c}] must be an object`);
    if (typeof u.columnName != "string" || !u.columnName.trim())
      throw new TypeError(`inColumns[${c}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let c = 0; c < a.length; c++) {
    const u = a[c];
    if (!u || typeof u != "object")
      throw new TypeError(`inData[${c}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const o = ((s = (n = (l = t[0]) == null ? void 0 : l.template) == null ? void 0 : n.body) == null ? void 0 : s.tr) || "buildBodyTr";
  if (!(o in e))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let c = 0; c < t.length; c++) {
    const u = t[c], p = ((i = (r = u.template) == null ? void 0 : r.body) == null ? void 0 : i.cell) || ((d = u.template) == null ? void 0 : d.bodyCell) || "buildBodyCell";
    if (!(p in e))
      throw new Error(`Cell template "${p}" for column "${u.columnName}" not found in inSpec`);
  }
  return !0;
}, ve = (t, a) => t.map((o) => {
  var r, i, d;
  const l = ((i = (r = o.template) == null ? void 0 : r.body) == null ? void 0 : i.cell) || ((d = o.template) == null ? void 0 : d.bodyCell) || "buildBodyCell", n = a[l];
  return b(o, n);
}), K = (t, a, e) => {
  var d, c, u;
  je(t, a, e);
  const o = t, l = a, n = e, s = ((u = (c = (d = o[0]) == null ? void 0 : d.template) == null ? void 0 : c.body) == null ? void 0 : u.tr) || "buildBodyTr", r = n[s];
  return l.map((p) => {
    const f = b(p, r), Z = Be(o, p), tt = ve(Z, n);
    return f.children = tt, f;
  });
}, T = (t) => Array.isArray(t) ? t : [t], q = (t, a, e) => {
  t[a] = e;
}, Ie = (t, a, e) => {
  t[a].push(...T(e));
}, Pe = (t, a, e) => {
  t[a].unshift(...T(e));
}, Ee = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.push(...structuredClone(T(e)));
  });
}, Re = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.unshift(...structuredClone(T(e)));
  });
}, Le = (t, a, e) => {
  t[a].forEach((o, l) => {
    const n = structuredClone(e);
    n.textContent = l + 1, o.children.unshift(n);
  });
}, Oe = {
  set: q,
  push: Ie,
  unshift: Pe,
  pushToRows: Ee,
  unshiftToRows: Re,
  unshiftSerialToRows: Le
}, w = (t, a) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === a) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = w(o, a);
    if (l) return l;
  }
  return null;
}, De = (t, a) => {
  const e = a.dataRole ? w(t[a.fileName], a.dataRole) : t[a.fileName], o = [...a.filePath ?? []], l = o.pop();
  return { parent: o.reduce((s, r) => s[r], e), key: l };
}, H = (t, a, e) => {
  const { parent: o, key: l } = De(t, a), n = a.action;
  (Oe[n] || q)(o, l, e);
}, M = (t, a) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === a) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const l = M(o, a);
    if (l) return l;
  }
  return null;
}, Ve = (t, a) => {
  const e = t[a.fileName], o = a.dataRole ? M(e, a.dataRole) : e;
  return (a.filePath ?? []).reduce((l, n) => l[n], o);
}, We = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Ge = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Ke = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, qe = {
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
}, He = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Me = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, ze = {
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
}, Ue = {
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
}, Je = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, _e = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Xe = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Qe = {
  tagName: "td",
  children: []
}, Ye = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Ze = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, ta = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, ea = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, aa = {
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
}, oa = {
  buildBodyTr: We,
  buildColGroup: Ge,
  buildHeader: Ke,
  buildFooter: qe,
  buildBodyCell: He,
  button: Me,
  buttonCell: ze,
  optionsButtonCell: Ue,
  buildOption: Je,
  buildSelect: _e,
  buildDataList: Xe,
  emptyCell: Qe,
  headerSerialCell: Ye,
  colGroupForSerial: Ze,
  colGroupForOption: ta,
  headerForOption: ea,
  tdWithButtonSaveWarning: aa
}, la = { applyTemplate: b, fromCollection: h }, na = (t, a) => (t == null ? void 0 : t.sourcePath) === null ? null : Ve(a, t.sourcePath), sa = (t, a, e, o) => {
  const l = oa, n = t.templateKey;
  let s = l[n], r;
  const i = na(t, a);
  i === null ? r = s : r = la[t.func](i, s), H(a, t.destinationPath, r);
}, g = (t, a, e, o) => {
  t.forEach((l) => {
    sa(l, a);
  });
}, ra = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, ia = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, ca = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ua = {
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
}, da = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, ba = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, pa = {
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
}, ma = {
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
}, ha = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, fa = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, ya = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Ca = {
  tagName: "td",
  children: []
}, wa = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ga = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, $a = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, Na = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, xa = {
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
}, Ta = {
  buildBodyTr: ra,
  buildColGroup: ia,
  buildHeader: ca,
  buildFooter: ua,
  buildBodyCell: da,
  button: ba,
  buttonCell: pa,
  optionsButtonCell: ma,
  buildOption: ha,
  buildSelect: fa,
  buildDataList: ya,
  emptyCell: Ca,
  headerSerialCell: wa,
  colGroupForSerial: ga,
  colGroupForOption: $a,
  headerForOption: Na,
  tdWithButtonSaveWarning: xa
}, Aa = { applyTemplate: b, fromCollection: h, twoDimensional: K }, Fa = (t, a, e, o) => {
  const l = Aa[t.func](
    a.data.columns,
    a.data.data,
    Ta
  );
  H(a, t.destinationPath, l);
}, z = (t, a, e, o) => {
  t.forEach((l) => {
    Fa(l, a);
  });
}, ka = (t, a, e) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/base: ${o ? "passed" : "failed"}`;
  return Array.isArray(e) && e.push(l), a && console.log(l), o;
}, Sa = (t, a, e) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), l = `guards/options: ${o ? "passed" : "failed"}`;
  return Array.isArray(e) && e.push(l), a && console.log(l), o;
}, Ba = (t, a, e) => {
  const o = typeof t == "boolean", l = `guards/showLog: ${o ? "passed" : "failed"}`;
  return Array.isArray(e) && e.push(l), a && console.log(l), o;
}, ja = (t, a, e) => {
  const o = Array.isArray(t), l = `guards/returnLog: ${o ? "passed" : "failed"}`;
  return o ? t.push(l) : Array.isArray(e) && e.push(l), a && console.log(l), o;
}, va = ({ options: t, base: a, showLog: e, returnLog: o }) => ({
  base: ka(a, e, o),
  options: Sa(t, e, o),
  showLog: Ba(e, e, o),
  returnLog: ja(o, e, o)
}), Ia = [
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
], Pa = [
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
], U = ({ options: t = {}, base: a, showLog: e = !1, returnLog: o = [] } = {}) => {
  const l = va({ options: t, base: a, showLog: e, returnLog: o });
  if (!Object.values(l).every(Boolean))
    return a;
  const n = t, s = a;
  return (n.showSerial || n.serial) && g(Ia, { base: s }), (n.showOptions || n.options) && g(Pa, { base: s }), n.showSearch, s;
}, Ea = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Ra = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, La = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Oa = {
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
}, Da = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Va = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Wa = {
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
}, Ga = {
  tagName: "td",
  attributes: {
    class: "py-2 px-3 text-center"
  },
  children: [
    {
      tagName: "button",
      textContent: "${columnName}",
      attributes: {
        class: "btn btn-primary btn-sm"
      }
    }
  ]
}, Ka = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, qa = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Ha = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Ma = {
  tagName: "td",
  children: []
}, J = {
  buildBodyTr: Ea,
  buildColGroup: Ra,
  buildHeader: La,
  buildFooter: Oa,
  buildBodyCell: Da,
  button: Va,
  buttonCell: Wa,
  optionsButtonCell: Ga,
  buildOption: Ka,
  buildSelect: qa,
  buildDataList: Ha,
  emptyCell: Ma
}, za = "table", Ua = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Ja = [
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
], _a = {
  tagName: za,
  attributes: Ua,
  children: Ja
}, Xa = [
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
], Qa = [
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
], Ya = ({ data: t, columns: a, options: e }) => {
  const o = structuredClone(_a), l = {
    data: { columns: a, data: t },
    base: o,
    spec: J,
    ...e
  };
  return g(Xa, l), z(Qa, l), U({ options: e, base: o }), o;
}, Za = "table", to = {
  class: "table table-hover table-striped align-middle border mb-0"
}, eo = [
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
], ao = {
  tagName: Za,
  attributes: to,
  children: eo
}, oo = [
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
], lo = [
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
], no = ({ data: t, columns: a, options: e }) => {
  const o = structuredClone(ao), l = {
    data: { columns: a, data: t },
    base: o,
    spec: J,
    ...e
  };
  return g(oo, l), z(lo, l), U({ options: e, base: o, showLog: !1, returnLog: [] }), o;
}, so = { simple: Ya, withFooter: no }, j = ({
  inData: t,
  inColumns: a,
  inType: e,
  footer: o = [],
  inOptions: l,
  inShowLog: n
} = {}) => {
  const s = e, r = so[s], i = l, d = n;
  return d && console.log("table : ", s, i), r({
    columns: a,
    data: t,
    options: i,
    showLog: d
  });
}, ro = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), io = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, co = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, uo = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, m = {
  buildOption: io,
  buildSelect: co,
  buildDataList: uo
}, bo = (t, a = m.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, po = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(m.buildSelect);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const l = bo(e, m.buildOption);
  return o.children = h(t, l), o;
}, mo = ({ data: t, columns: a }) => a.map((e) => po(t, e)), ho = (t = {}) => {
  const { data: a, columns: e } = ro(t);
  return mo({ data: a, columns: e });
}, fo = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), yo = (t, a = m.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, Co = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = yo(e, m.buildOption);
  return h(t, o);
}, wo = ({ data: t, columns: a }) => a.map((e) => Co(t, e)), go = (t = {}) => {
  const { data: a, columns: e } = fo(t);
  return wo({ data: a, columns: e });
}, $o = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), No = (t, a = m.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, xo = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(m.buildDataList);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const l = No(e, m.buildOption);
  return o.children = h(t, l), o;
}, To = ({ data: t, columns: a }) => a.map((e) => xo(t, e)), v = (t = {}) => {
  const { data: a, columns: e } = $o(t);
  return To({ data: a, columns: e });
}, Ao = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Fo = (t) => {
  const a = t;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Ao,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, ko = "input", So = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, Bo = {
  tagName: ko,
  attributes: So
}, $ = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(Bo);
  return e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.id && (o.attributes.id = e.id), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.value && (o.attributes.value = e.value), o;
}, jo = "div", vo = {
  class: "d-flex align-items-center gap-2"
}, Io = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  }
], Po = {
  tagName: jo,
  attributes: vo,
  children: Io
}, A = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(Po), l = o.children[0], n = o.children[1];
  return e.label && (l.textContent = e.label), e.id && (l.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (l.attributes.class = e.labelClass), o;
}, Eo = "div", Ro = {
  class: "d-flex align-items-center gap-2"
}, Lo = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  },
  {
    tagName: "button",
    textContent: "Search",
    attributes: {
      type: "button",
      class: "btn btn-primary text-nowrap",
      id: "searchButtonId"
    }
  }
], Oo = {
  tagName: Eo,
  attributes: Ro,
  children: Lo
}, B = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(Oo), l = o.children[0], n = o.children[1], s = o.children[2];
  return e.label && (l.textContent = e.label), e.id && (l.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.buttonText && (s.textContent = e.buttonText), e.buttonClass && (s.attributes.class = e.buttonClass), e.buttonId && (s.attributes.id = e.buttonId), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (l.attributes.class = e.labelClass), o;
}, Do = {
  input: $,
  inputOnly: $,
  inputWithLabel: A,
  inputWithLabelButton: B
}, Vo = ({
  type: t = "inputWithLabel",
  options: a = {},
  inType: e,
  inOptions: o
} = {}) => {
  const l = e ?? t, n = o ?? a;
  return (Do[l] || A)({ inOptions: n, options: n });
};
Fo({
  render: Vo,
  inputOnly: $,
  inputWithLabel: A,
  inputWithLabelButton: B
});
const F = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? $({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? B({ inOptions: e }) : A({ inOptions: e });
}, Wo = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, Go = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: Wo, render: t });
}, Ko = "div", qo = {
  class: "${cardClass}",
  "data-role": "form-card"
}, Ho = [
  {
    tagName: "header",
    attributes: {
      class: "${headerClass}",
      "data-role": "form-header"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "${headingClass}"
        },
        children: [
          {
            tagName: "h2",
            textContent: "${title}",
            attributes: {
              class: "${titleClass}"
            }
          },
          {
            tagName: "p",
            textContent: "${description}",
            attributes: {
              class: "${descriptionClass}"
            }
          }
        ]
      },
      {
        tagName: "span",
        textContent: "${recordId}",
        attributes: {
          class: "${recordIdClass}",
          "data-role": "record-id"
        }
      },
      {
        tagName: "div",
        attributes: {
          class: "${headerActionsClass}",
          "data-role": "header-actions"
        },
        children: []
      }
    ]
  },
  {
    tagName: "div",
    attributes: {
      class: "${cardBodyClass}"
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
  },
  {
    tagName: "footer",
    attributes: {
      class: "${footerClass}",
      "data-role": "form-footer"
    },
    children: [
      {
        tagName: "div",
        attributes: {
          class: "${footerActionsClass}",
          "data-role": "footer-actions"
        },
        children: []
      }
    ]
  }
], Mo = {
  tagName: Ko,
  attributes: qo,
  children: Ho
}, zo = () => structuredClone(Mo), Uo = "header-actions", Jo = "button", I = {
  destinationRole: Uo,
  template: Jo
}, _o = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Xo = {
  button: _o
}, Qo = (t, a) => {
  const e = structuredClone(t), o = h(a.header.actions, Xo[I.template]);
  return w(e, I.destinationRole).children.push(...o), e;
}, Yo = "form-body", Zo = {
  destinationRole: Yo
}, tl = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, el = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    }
  ]
}, al = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    }
  ]
}, ol = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${labelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "textarea",
      textContent: "${rowValue}",
      attributes: {
        class: "${inputClass} ${inputSizeClass}",
        rows: "3",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}"
      }
    }
  ]
}, ll = {
  tagName: "div",
  attributes: {
    class: "${checkboxWrapperClass} ${fieldClass}"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "${checkboxInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${checkboxLabelClass}",
        for: "${columnName}"
      }
    }
  ]
}, nl = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    }
  ]
}, sl = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    }
  ]
}, rl = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}"
      }
    },
    {
      tagName: "button",
      textContent: "${buttonText}",
      attributes: {
        type: "${buttonType}",
        class: "${inlineButtonClass}"
      }
    }
  ]
}, il = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "input",
      attributes: {
        type: "${type}",
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}",
        value: "${rowValue}",
        required: "required"
      }
    },
    {
      tagName: "button",
      textContent: "${buttonText}",
      attributes: {
        type: "${buttonType}",
        class: "${inlineButtonClass}"
      }
    }
  ]
}, cl = {
  tagName: "div",
  attributes: {
    class: "${fieldClass}"
  },
  children: [
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${inlineLabelClass}",
        for: "${columnName}"
      }
    },
    {
      tagName: "textarea",
      textContent: "${rowValue}",
      attributes: {
        class: "${inputClass} ${inputSizeClass} ${inlineInputClass}",
        rows: "3",
        id: "${columnName}",
        name: "${columnName}",
        placeholder: "${placeholder}"
      }
    }
  ]
}, ul = {
  tagName: "div",
  attributes: {
    class: "${inlineCheckboxWrapperClass}"
  },
  children: [
    {
      tagName: "input",
      attributes: {
        type: "checkbox",
        class: "${checkboxInputClass}",
        id: "${columnName}",
        name: "${columnName}",
        value: "true"
      }
    },
    {
      tagName: "label",
      textContent: "${label}",
      attributes: {
        class: "${checkboxLabelClass}",
        for: "${columnName}"
      }
    }
  ]
}, dl = {
  buildBodyTr: tl,
  buildBodyCell: el,
  buildRequiredField: al,
  buildTextareaField: ol,
  buildCheckboxField: ll,
  buildInlineField: nl,
  buildInlineRequiredField: sl,
  buildInlineFieldWithButton: rl,
  buildInlineRequiredFieldWithButton: il,
  buildInlineTextareaField: cl,
  buildInlineCheckboxField: ul
}, bl = (t, a, e) => {
  const o = t.map((s) => {
    var d, c, u, p, f;
    const r = ((c = (d = s.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) ?? (s.required ? "buildRequiredField" : "buildBodyCell");
    let i = ((u = e.fieldTemplates) == null ? void 0 : u[r]) ?? r;
    return s.buttonText && (i = ((p = e.buttonFieldTemplates) == null ? void 0 : p[i]) ?? i), {
      ...s,
      label: s.label ?? s.title ?? s.columnName,
      type: s.type ?? "text",
      placeholder: s.placeholder ?? "",
      buttonType: s.buttonType ?? "button",
      template: { ...s.template, body: { ...(f = s.template) == null ? void 0 : f.body, cell: i } }
    };
  }), l = a[0] ?? {}, n = Object.fromEntries(o.map((s) => [
    s.columnName,
    l[s.columnName] ?? s.value ?? ""
  ]));
  return { columns: o, rows: [n] };
}, pl = (t, a, e) => {
  const o = bl(a.columns, a.records, e.body), l = K(o.columns, o.rows, dl), n = structuredClone(t);
  return w(n, Zo.destinationRole).children.push(...Array.isArray(l) ? l : [l]), n;
}, ml = "footer-actions", hl = "button", P = {
  destinationRole: ml,
  template: hl
}, fl = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, yl = {
  button: fl
}, Cl = (t, a) => {
  const e = structuredClone(t), o = h(a.footer.actions, yl[P.template]);
  return w(e, P.destinationRole).children.push(...o), e;
}, _ = ({ inColumns: t, inData: a, inOptions: e, columns: o, data: l, options: n } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(l) ? l : [],
  options: e && Object.keys(e).length > 0 ? e : n ?? {}
}), wl = "bigButtonsForm", gl = "Account details", $l = "Update your profile information.", Nl = "", xl = "label", Tl = "stacked", Al = "saveCancel", Fl = {
  formId: wl,
  title: gl,
  description: $l,
  recordId: Nl,
  header: xl,
  body: Tl,
  footer: Al
}, kl = {
  actions: []
}, Sl = {
  actions: []
}, Bl = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, jl = {
  actions: []
}, vl = {
  none: kl,
  label: Sl,
  labelWithRefresh: Bl,
  labelWithId: jl
}, Il = {
  fieldTemplates: {
    buildBodyCell: "buildInlineField",
    buildRequiredField: "buildInlineRequiredField",
    buildTextareaField: "buildInlineTextareaField",
    buildCheckboxField: "buildInlineCheckboxField"
  },
  buttonFieldTemplates: {
    buildInlineField: "buildInlineFieldWithButton",
    buildInlineRequiredField: "buildInlineRequiredFieldWithButton"
  }
}, Pl = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, El = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Rl = {
  inline: Il,
  stacked: Pl,
  threeColumns: El
}, Ll = {
  actions: []
}, Ol = {
  actions: [
    {
      label: "Save",
      type: "submit",
      buttonClass: "${primaryButtonClass}"
    },
    {
      label: "Cancel",
      type: "reset",
      buttonClass: "${secondaryButtonClass}"
    }
  ]
}, Dl = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Vl = {
  none: Ll,
  saveCancel: Ol,
  edit: Dl
}, k = (t, a, e) => {
  const o = t[a];
  if (!o) throw new RangeError("Unknown bigButtons " + e + ": " + a);
  return o;
}, X = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = t["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const e = { ...Fl, ...a };
  return {
    options: e,
    header: k(vl, e.header, "header"),
    body: k(Rl, e.body, "body"),
    footer: k(Vl, e.footer, "footer")
  };
}, Wl = (t, a = {}) => {
  const e = _(a), o = X(e.options), l = Qo(t, o), n = pl(l, e, o);
  return Cl(n, o);
}, Gl = {
  none: {
    headerClass: "d-none",
    headerActionsClass: "d-none"
  },
  label: {
    headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
    headingClass: "me-auto",
    titleClass: "h4 fw-semibold mb-1",
    descriptionClass: "text-muted mb-0",
    recordIdClass: "d-none",
    headerActionsClass: "d-none",
    headerButtonClass: "btn btn-outline-secondary text-nowrap"
  },
  labelWithRefresh: {
    headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
    headingClass: "me-auto",
    titleClass: "h4 fw-semibold mb-1",
    descriptionClass: "text-muted mb-0",
    recordIdClass: "d-none",
    headerActionsClass: "d-flex align-items-center gap-2",
    headerButtonClass: "btn btn-outline-secondary text-nowrap"
  },
  labelWithId: {
    headerClass: "card-header d-flex align-items-center justify-content-between gap-3",
    headingClass: "me-auto",
    titleClass: "h4 fw-semibold mb-1",
    descriptionClass: "text-muted mb-0",
    recordIdClass: "badge text-bg-light border text-secondary",
    headerActionsClass: "d-none",
    headerButtonClass: "btn btn-outline-secondary text-nowrap"
  }
}, Kl = {
  bootstrap: Gl
}, ql = (t, a) => {
  var o;
  const e = (o = Kl[a]) == null ? void 0 : o[t.header];
  if (!e) throw new RangeError("Unknown bigButtons header: " + t.header);
  return e;
}, Hl = "bootstrap", Ml = {
  bootstrap: {
    base: {
      cardClass: "card border-0 shadow-sm w-100",
      cardBodyClass: "card-body p-4 p-lg-5",
      labelClass: "form-label fw-semibold",
      inputClass: "form-control",
      inputSizeClass: "form-control-lg",
      checkboxWrapperClass: "form-check mb-3",
      checkboxInputClass: "form-check-input",
      checkboxLabelClass: "form-check-label"
    },
    bodies: {
      inline: {
        rowClass: "vstack gap-3",
        fieldClass: "d-flex align-items-center gap-3",
        inlineLabelClass: "form-label fw-semibold mb-0 text-nowrap",
        inlineInputClass: "flex-grow-1",
        inlineCheckboxWrapperClass: "form-check d-flex align-items-center gap-2"
      },
      stacked: {
        rowClass: "vstack gap-3",
        fieldClass: "w-100"
      },
      threeColumns: {
        rowClass: "row g-3",
        fieldClass: "col-md-4"
      }
    }
  }
}, S = {
  defaultFramework: Hl,
  frameworks: Ml
}, zl = (t, a) => {
  const e = S.frameworks[a];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  const o = e.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...e.base, ...o };
}, Ul = {
  base: {
    footerClass: "card-footer bg-transparent",
    footerActionsClass: "d-flex flex-wrap justify-content-end gap-2",
    buttonSizeClass: "btn-lg",
    buttonPaddingClass: "px-4 py-2",
    primaryButtonClass: "btn btn-primary text-nowrap",
    secondaryButtonClass: "btn btn-outline-secondary text-nowrap",
    infoButtonClass: "btn btn-outline-info text-nowrap",
    inlineButtonClass: "btn btn-outline-secondary text-nowrap"
  },
  footers: {
    none: {
      footerClass: "d-none"
    },
    saveCancel: {},
    edit: {}
  }
}, Jl = {
  bootstrap: Ul
}, _l = (t, a) => {
  const e = Jl[a], o = e == null ? void 0 : e.footers[t.footer];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...e.base, ...o };
}, Xl = (t, a = {}) => {
  const e = X(_(a).options), { options: o } = e, l = o.framework ?? S.defaultFramework;
  if (!S.frameworks[l]) throw new RangeError("Unknown bigButtons framework: " + l);
  const s = Object.assign(
    {},
    o,
    zl(o, l),
    ql(o, l),
    _l(o, l)
  );
  return b(s, structuredClone(t));
}, Ql = (t = {}) => {
  const a = zo(), e = Wl(a, t);
  return Xl(e, t);
}, Q = (t = {}) => {
  const a = { ...t, type: t.type ?? "form.bigButtons" };
  return N(a), Ql(a);
};
Go(Q);
const Yl = ({
  inType: t = "stacked",
  inData: a,
  inColumns: e
} = {}) => Q({
  type: t,
  columns: e,
  data: a
}), Zl = {
  table: j,
  tableFromSpec: j,
  select: ho,
  selectOptionsOnly: go,
  dataList: v,
  datalist: v,
  searchInput: F,
  search: F,
  inputRow: F,
  form: Yl
}, Y = (t = {}) => {
  N(t);
  const a = t == null ? void 0 : t.showLog;
  console.log("localShowLog : ", a);
  const e = t.type, o = t == null ? void 0 : t.options;
  let l = e, n = e;
  if (e.includes(".")) {
    const i = e.split(".");
    l = i[0], n = i[1];
  }
  a && console.log("localMainType : ", l, n);
  const s = Zl[l];
  if (!s)
    throw new Error(`Renderer for type "${l}" not found.`);
  const r = s({
    inType: n,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: a
  });
  return a && console.log("json-renderers-build output:", r), r;
};
ge(Y);
const tn = ({
  inColumns: t,
  inType: a = "table",
  inData: e,
  inShowLog: o = !1,
  inOptions: l
} = {}) => Y({
  type: a,
  data: e ?? [],
  columns: t,
  showLog: o,
  options: l
}), en = (t = {}) => {
  C(t);
  const a = t == null ? void 0 : t.showLog, e = t == null ? void 0 : t.options;
  a && console.log("first : ", t == null ? void 0 : t.options, t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const o = tn({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog,
    inOptions: e
  });
  a && console.log("spec : ", o);
  const l = W({
    jsonSpec: o,
    targetHtmlId: t.targetHtmlId,
    appendPosition: t.appendPosition,
    showLog: a
  });
  return a && console.log("dom : ", l), l;
};
at(en);
export {
  en as default,
  en as render
};
