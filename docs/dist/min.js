const ct = {
  version: "v20.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, ut = (t) => {
  const a = t;
  typeof globalThis > "u" || !a || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: ct,
    render: a
  });
}, dt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.type;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, bt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.data;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, pt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.columns;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, mt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.showLog;
  if (e !== void 0 && typeof e != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, P = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return dt(a), bt(a), pt(a), mt(a), !0;
}, ht = (t) => {
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
}, ft = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.appendPosition;
  if (e === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof e != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, yt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.classToApply;
  if (e === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof e != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, q = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return ht(a), ft(a), yt(a), !0;
}, Ct = "table", wt = "", $t = [], gt = [], Nt = "", Tt = "replace", xt = !1, $ = {
  type: Ct,
  targetHtmlId: wt,
  data: $t,
  columns: gt,
  classToApply: Nt,
  appendPosition: Tt,
  showLog: xt
}, G = (t) => {
  const a = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return a && a in $ ? $[a] : { ...$ };
};
Object.assign(G, $);
const g = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return P(a), q(a), !0;
};
g.getSpec = G;
g.configSpec = $;
g.guardSpec = P;
g.guardMount = q;
const Pt = {
  version: "v10",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, At = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const a = {
    meta: Pt,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = a, globalThis.ks.jsonToTag = a;
}, kt = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : U(t), z = (t) => Array.isArray(t) ? t.map(kt).flat(1 / 0).filter(Boolean) : [], It = (t) => (t == null, t), Bt = "http://www.w3.org/2000/svg", Ft = /* @__PURE__ */ new Set([
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
]), jt = ({ inTagName: t }) => {
  const a = t == null ? void 0 : t.toLowerCase();
  if (!a) return null;
  if (a === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return Ft.has(a) ? document.createElementNS(Bt, a) : document.createElement(a);
}, St = ({ inElement: t, inTextContent: a }) => (!t || a === void 0 || a === null || (t.textContent = a), t), Rt = ({ inElement: t, inProperties: a }) => (t && a && typeof a == "object" && Object.assign(t, a), t), vt = "http://www.w3.org/1999/xlink", Et = ({ inElement: t, inAttributes: a }) => {
  const e = t, o = a;
  if (!e || !o || typeof o != "object")
    return e;
  const n = typeof SVGElement < "u" ? e instanceof SVGElement : e.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([s, r]) => {
    if (s === "class") {
      n ? e.setAttribute("class", String(r)) : e.className = r;
      return;
    }
    if (s === "xlink:href" || s === "href") {
      if (r != null) {
        const i = String(r);
        if (n)
          try {
            e.setAttributeNS(vt, "href", i);
          } catch {
          }
        e.setAttribute("href", i), e.setAttribute("xlink:href", i);
      }
      return;
    }
    if (typeof r == "boolean") {
      r ? e.setAttribute(s, "") : e.removeAttribute(s);
      return;
    }
    r != null && e.setAttribute(s, String(r));
  }), e;
}, Ot = ({ inElement: t, inClassList: a }) => {
  if (!t || !a) return t;
  const e = typeof a == "string" ? a.split(/\s+/).filter(Boolean) : Array.isArray(a) ? a.filter((o) => typeof o == "string" && o.trim()) : [];
  return e.length && t.classList.add(...e), t;
}, Dt = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const a = jt({ inTagName: t.tagName });
  if (!a) return null;
  if (St({
    inElement: a,
    inTextContent: It(t.textContent),
    inTagName: t.tagName
  }), Rt({
    inElement: a,
    inProperties: t.properties
  }), Et({
    inElement: a,
    inAttributes: t.attributes
  }), Ot({
    inElement: a,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const e = z(t.children);
    e.length && a.append(...e);
  }
  return a;
}, U = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? z(t) : typeof t == "object" ? Dt(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, J = (t = {}) => {
  const a = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return U(a);
};
At(J);
const Lt = {
  version: "1.41.0",
  name: "json-to-dom"
}, Kt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonToDom = {
    meta: Lt,
    appendToDom: t
  });
}, _ = ({ buildSpec: t, targetHtmlId: a, appendPosition: e, showLog: o }) => {
  const n = t, s = a, r = e, i = o;
  i && console.log("renderToDom 1 (content):", n);
  const l = document.getElementById(s);
  return l ? (Array.isArray(n) || n instanceof NodeList || n instanceof HTMLCollection ? r === "prepend" ? l.prepend(...n) : l.append(...n) : r === "prepend" ? l.prepend(n) : (l.innerHTML = "", l.append(n)), i && console.log("renderToDom 2 (mounted):", l), l) : null;
};
Kt(_);
const Vt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, Ht = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: Vt,
    render: t
  });
}, Mt = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Wt = (t, a) => {
  if (!Mt(t)) return;
  let e = {};
  for (const [o, n] of Object.entries(t))
    e[o] = p(a, n);
  return e;
}, qt = (t, a) => {
  const e = structuredClone(t);
  return Array.isArray(e) ? e.map((n) => p(a, n)) : void 0;
}, X = (t, a, e) => {
  if (t === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : t.replace(/\$\{(\w+)\}/g, (o, n) => a[n] !== void 0 ? a[n] : o);
}, Gt = (t, a) => X(t, a), zt = (t, a, e) => {
  if (e && console.log("inElement : ", t), e && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, Ut = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, Jt = (t) => {
  var a, e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = t), (e = globalThis.ks).transformerFuncs ?? (e.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: Ut,
    applyTemplate: t
  });
}, p = (t, a, e) => {
  const o = t, n = a;
  zt(o, n, e);
  const s = structuredClone(n);
  return typeof s == "string" ? X(s, o) : (s === null || typeof s != "object" || ("textContent" in s && (s.textContent = Gt(s == null ? void 0 : s.textContent, o)), "attributes" in s && (s.attributes = Wt(s == null ? void 0 : s.attributes, o)), "children" in s && (s.children = qt(s == null ? void 0 : s.children, o))), s);
};
Jt(p);
const _t = (t, a) => {
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
}, m = (t, a) => {
  const e = t, o = a;
  return _t(e, o), e.map((n) => p(n, o));
}, Xt = (t, a) => t.map((o) => ({
  ...o,
  rowData: a[o.columnName]
})), Qt = (t, a, e) => {
  var n, s, r, i, l, u;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let c = 0; c < t.length; c++) {
    const d = t[c];
    if (!d || typeof d != "object")
      throw new TypeError(`inColumns[${c}] must be an object`);
    if (typeof d.columnName != "string" || !d.columnName.trim())
      throw new TypeError(`inColumns[${c}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let c = 0; c < a.length; c++) {
    const d = a[c];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${c}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const o = ((r = (s = (n = t[0]) == null ? void 0 : n.template) == null ? void 0 : s.body) == null ? void 0 : r.tr) || "buildBodyTr";
  if (!(o in e))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let c = 0; c < t.length; c++) {
    const d = t[c], h = ((l = (i = d.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((u = d.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(h in e))
      throw new Error(`Cell template "${h}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, Yt = (t, a) => t.map((o) => {
  var i, l, u;
  const n = ((l = (i = o.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((u = o.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", s = a[n];
  return p(o, s);
}), N = (t, a, e) => {
  var u, c, d;
  Qt(t, a, e);
  const o = t, n = a, s = e, r = ((d = (c = (u = o[0]) == null ? void 0 : u.template) == null ? void 0 : c.body) == null ? void 0 : d.tr) || "buildBodyTr", i = s[r];
  return n.map((h) => {
    const w = p(h, i), lt = Xt(o, h), it = Yt(lt, s);
    return w.children = it, w;
  });
}, Zt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, te = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, ee = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, ae = {
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
}, oe = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, ne = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, se = {
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
}, re = {
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
}, le = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, ie = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, ce = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, ue = {
  tagName: "td",
  children: []
}, b = {
  buildBodyTr: Zt,
  buildColGroup: te,
  buildHeader: ee,
  buildFooter: ae,
  buildBodyCell: oe,
  button: ne,
  buttonCell: se,
  optionsButtonCell: re,
  buildOption: le,
  buildSelect: ie,
  buildDataList: ce,
  emptyCell: ue
}, de = "table", be = {
  class: "table table-hover table-striped align-middle border mb-0"
}, pe = [
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
], me = {
  tagName: de,
  attributes: be,
  children: pe
}, he = [
  {
    narration: "Build the column widths for the table using the configured columns.",
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
    narration: "Build the header row for the table using the configured columns.",
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
], fe = [
  {
    narration: "Build the table body rows for the table using the configured columns and data.",
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
], C = (t, a) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === a) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const n = C(o, a);
    if (n) return n;
  }
  return null;
}, ye = (t, a) => {
  const e = t[a.fileName], o = a.dataRole ? C(e, a.dataRole) : e;
  return (a.filePath ?? []).reduce((n, s) => n[s], o);
}, A = (t) => Array.isArray(t) ? t : [t], Q = (t, a, e) => {
  t[a] = e;
}, Ce = (t, a, e) => {
  t[a].push(...A(e));
}, we = (t, a, e) => {
  t[a].unshift(...A(e));
}, $e = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.push(...structuredClone(A(e)));
  });
}, ge = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.unshift(...structuredClone(A(e)));
  });
}, Ne = (t, a, e) => {
  t[a].forEach((o, n) => {
    const s = structuredClone(e);
    s.textContent = n + 1, o.children.unshift(s);
  });
}, Te = {
  set: Q,
  push: Ce,
  unshift: we,
  pushToRows: $e,
  unshiftToRows: ge,
  unshiftSerialToRows: Ne
}, xe = (t, a) => {
  const e = a.dataRole ? C(t[a.fileName], a.dataRole) : t[a.fileName], o = [...a.filePath ?? []], n = o.pop();
  return { parent: o.reduce((r, i) => r[i], e), key: n };
}, Y = (t, a, e) => {
  const { parent: o, key: n } = xe(t, a);
  (Te[a.action] || Q)(o, n, e);
}, Pe = (t, a, e) => {
  var s, r;
  const o = !!((s = t.sourcePath) != null && s.fileName && Array.isArray((r = t.sourcePath) == null ? void 0 : r.filePath)), n = `structure/sourcePath: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, Ae = (t, a, e) => {
  var s, r;
  const o = !!((s = t.destinationPath) != null && s.fileName && Array.isArray((r = t.destinationPath) == null ? void 0 : r.filePath)), n = `structure/destinationPath: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, ke = (t, a, e) => {
  const o = t.templateKey === void 0 || typeof t.templateKey == "string" && t.templateKey.length > 0, n = `structure/templateKey: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, Ie = (t, a, e) => {
  const o = typeof t.func == "string" && t.func.length > 0, n = `structure/func: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, Be = (t, a, e) => [
  Pe(t, a, e),
  Ae(t, a, e),
  ke(t, a, e),
  Ie(t, a, e)
].every(Boolean), Fe = (t, a, e, o) => {
  const n = typeof a[t.func] == "function", s = `references/func (${t.func}): ${n ? "passed" : "failed"}`;
  return o.push(s), e && console.log(s), n;
}, je = (t, a, e, o) => {
  const n = t.templateKey === void 0 || Object.hasOwn(a, t.templateKey), s = `references/templateKey${t.templateKey === void 0 ? " (not used)" : ` (${t.templateKey})`}: ${n ? "passed" : "failed"}`;
  return o.push(s), e && console.log(s), n;
}, Se = (t, a, e, o, n) => {
  const s = Fe(t, a, o, n), r = je(t, e, o, n);
  return s && r;
}, Z = (t, a, e, o, n) => Be(t, o, n) ? Se(t, a, e, o, n) : !1, Re = (t, a, e, o, n, s) => {
  if (!Z(t, e, o, n, s)) return;
  const r = n, i = o, l = t.templateKey, u = i[l];
  r && console.log("singleInstruction ; ", l, u);
  const c = ye(a, t.sourcePath), d = e[t.func](c, u);
  Y(a, t.destinationPath, d);
}, f = (t, a, e, o, n, s) => {
  t.forEach((r) => {
    Re(r, a, e, o, n, s);
  });
}, ve = (t, a, e, o, n, s) => {
  if (!Z(t, e, o, n, s)) return;
  const r = e[t.func](
    a.data.columns,
    a.data.data,
    o
  );
  Y(a, t.destinationPath, r);
}, j = (t, a, e, o, n, s) => {
  t.forEach((r) => {
    ve(r, a, e, o, n, s);
  });
}, Ee = [
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
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "col"
      ]
    },
    templateKey: "buildColGroup",
    func: "applyTemplate"
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
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "header"
      ]
    },
    templateKey: "buildHeader",
    func: "applyTemplate"
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
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "body"
      ]
    },
    templateKey: "buildBodyCell",
    func: "applyTemplate"
  }
], Oe = [
  {
    narration: "Prepend an empty cell into the table footer row if footer row is present.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "unshift"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "serial",
        "footer"
      ]
    },
    templateKey: "emptyCell",
    func: "applyTemplate"
  }
], R = { applyTemplate: p }, De = (t = {}, a = {}, e = !1, o = []) => {
  let n = t, s = a;
  t && typeof t == "object" && "inTableSpec" in t && (n = t.inTableSpec, s = t.inSerial || a);
  const i = {
    data: {
      serial: {
        col: { width: "50px" },
        header: { columnName: "#" },
        body: {},
        footer: {},
        ...s
      }
    },
    base: n,
    spec: b
  };
  f(Ee, i, R, b, e, o);
  const l = C(n, "table-footer-row");
  return l && Array.isArray(l.children) && l.children.length > 0 && f(Oe, i, R, b, e, o), n;
}, Le = [
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
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "col"
      ]
    },
    templateKey: "buildColGroup",
    func: "applyTemplate"
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
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "header"
      ]
    },
    templateKey: "buildHeader",
    func: "applyTemplate"
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
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "body"
      ]
    },
    templateKey: "optionsButtonCell",
    func: "applyTemplate"
  }
], Ke = [
  {
    narration: "Append an empty cell into the table footer row if footer row is present.",
    destinationPath: {
      fileName: "base",
      dataRole: "table-footer-row",
      filePath: [
        "children"
      ],
      action: "push"
    },
    sourcePath: {
      fileName: "data",
      filePath: [
        "options",
        "footer"
      ]
    },
    templateKey: "emptyCell",
    func: "applyTemplate"
  }
], v = { applyTemplate: p }, Ve = (t = {}, a = {}, e = !1, o = []) => {
  let n = t, s = a;
  t && typeof t == "object" && "inTableSpec" in t && (n = t.inTableSpec, s = t.inOptions || a);
  const i = {
    data: {
      options: {
        col: { width: "100px" },
        header: { columnName: "options" },
        body: { columnName: "show" },
        footer: {},
        ...s
      }
    },
    base: n,
    spec: b
  };
  f(Le, i, v, b, e, o);
  const l = C(n, "table-footer-row");
  return l && Array.isArray(l.children) && l.children.length > 0 && f(Ke, i, v, b, e, o), n;
}, tt = ({ inOptions: t = {}, inBase: a, showLog: e = !1, returnLog: o = [] }) => {
  const n = t, s = a;
  return (n.showSerial || n.serial) && De(s, n.serial || {}, e, o), (n.showOptions || n.options) && Ve(s, n.options || {}, e, o), s;
}, E = { fromCollection: m, twoDimensional: N }, He = (t = {}, a = !1, e = []) => {
  const o = t, n = o.columns || [], s = o.data || [], r = o.options, i = structuredClone(me), l = {
    data: {
      columns: n,
      data: s
    },
    base: i,
    spec: b
  };
  return f(he, l, E, b, a, e), j(fe, l, E, b, a, e), tt({ inOptions: r, inBase: i }), i;
}, Me = "table", We = {
  class: "table table-hover table-striped align-middle border mb-0"
}, qe = [
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
], et = {
  tagName: Me,
  attributes: We,
  children: qe
}, Ge = [
  {
    narration: "Build the column widths for the table using the configured columns.",
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
    narration: "Build the header row for the table using the configured columns.",
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
], O = { data: {}, base: et, spec: b }, ze = { fromCollection: m }, Ue = (t, a = !1, e = []) => (O.data = t, f(Ge, O, ze, b, a, e), et), Je = [], at = {
  children: Je
}, _e = [
  {
    narration: "Build the table body rows for the table using the configured columns and data.",
    destinationPath: {
      fileName: "base",
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
], D = { data: {}, base: at, spec: b }, Xe = { twoDimensional: N }, Qe = (t, a = !1, e = []) => (D.data = t, j(_e, D, Xe, b, a, e), at.children), Ye = "table", Ze = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ta = [
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
], ea = {
  tagName: Ye,
  attributes: Ze,
  children: ta
}, aa = [
  {
    narration: "Build the column widths for the table using the configured columns.",
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
    narration: "Build the header row for the table using the configured columns.",
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
    narration: "Build the footer row for the table using the configured columns.",
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
], oa = [
  {
    narration: "Build the table body rows for the table using the configured columns and data.",
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
], L = { fromCollection: m, twoDimensional: N }, na = (t = {}, a = !1, e = []) => {
  const o = t, n = o.inColumns || o.columns || [], s = o.inData || o.data || [], r = o.inOptions || o.options || {}, i = structuredClone(ea), l = {
    data: {
      columns: n,
      data: s
    },
    base: i,
    spec: b
  };
  return f(aa, l, L, b, a, e), j(oa, l, L, b, a, e), tt({ inOptions: r, inBase: i }), i;
}, sa = [], T = {
  children: sa
}, ra = [
  {
    narration: "Build the footer row for the table using the configured columns.",
    destinationPath: {
      fileName: "base",
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
], K = { data: {}, base: T, spec: b }, la = { fromCollection: m, twoDimensional: N }, ia = (t, a = !1, e = []) => (K.data = t, f(ra, K, la, b, a, e), T == null ? void 0 : T.children), ca = {
  simple: He,
  headerOnly: Ue,
  bodyOnly: Qe,
  withFooter: na,
  footerOnly: ia
}, V = ({
  inData: t,
  inColumns: a,
  inType: e,
  footer: o = [],
  inOptions: n,
  inShowLog: s
} = {}) => {
  const r = e, i = ca[r], l = n, u = s;
  return u && console.log("table : ", r, l), i({
    columns: a,
    data: t,
    options: l,
    showLog: u
  });
}, ua = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), da = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, ba = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, pa = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, y = {
  buildOption: da,
  buildSelect: ba,
  buildDataList: pa
}, ma = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, ha = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(y.buildSelect);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const n = ma(e, y.buildOption);
  return o.children = m(t, n), o;
}, fa = ({ data: t, columns: a }) => a.map((e) => ha(t, e)), ya = (t = {}) => {
  const { data: a, columns: e } = ua(t);
  return fa({ data: a, columns: e });
}, Ca = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), wa = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, $a = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = wa(e, y.buildOption);
  return m(t, o);
}, ga = ({ data: t, columns: a }) => a.map((e) => $a(t, e)), Na = (t = {}) => {
  const { data: a, columns: e } = Ca(t);
  return ga({ data: a, columns: e });
}, Ta = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), xa = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, Pa = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(y.buildDataList);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const n = xa(e, y.buildOption);
  return o.children = m(t, n), o;
}, Aa = ({ data: t, columns: a }) => a.map((e) => Pa(t, e)), H = (t = {}) => {
  const { data: a, columns: e } = Ta(t);
  return Aa({ data: a, columns: e });
}, ka = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Ia = (t) => {
  const a = t;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: ka,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, Ba = "input", Fa = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, ja = {
  tagName: Ba,
  attributes: Fa
}, x = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(ja);
  return e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.id && (o.attributes.id = e.id), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.value && (o.attributes.value = e.value), o;
}, Sa = "div", Ra = {
  class: "d-flex align-items-center gap-2"
}, va = [
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
], Ea = {
  tagName: Sa,
  attributes: Ra,
  children: va
}, k = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(Ea), n = o.children[0], s = o.children[1];
  return e.label && (n.textContent = e.label), e.id && (n.attributes.for = e.id, s.attributes.id = e.id), e.placeholder && (s.attributes.placeholder = e.placeholder), e.class && (s.attributes.class = e.class), e.name && (s.attributes.name = e.name), e.type && (s.attributes.type = e.type), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (n.attributes.class = e.labelClass), o;
}, Oa = "div", Da = {
  class: "d-flex align-items-center gap-2"
}, La = [
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
], Ka = {
  tagName: Oa,
  attributes: Da,
  children: La
}, S = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(Ka), n = o.children[0], s = o.children[1], r = o.children[2];
  return e.label && (n.textContent = e.label), e.id && (n.attributes.for = e.id, s.attributes.id = e.id), e.placeholder && (s.attributes.placeholder = e.placeholder), e.class && (s.attributes.class = e.class), e.name && (s.attributes.name = e.name), e.type && (s.attributes.type = e.type), e.buttonText && (r.textContent = e.buttonText), e.buttonClass && (r.attributes.class = e.buttonClass), e.buttonId && (r.attributes.id = e.buttonId), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (n.attributes.class = e.labelClass), o;
}, Va = {
  input: x,
  inputOnly: x,
  inputWithLabel: k,
  inputWithLabelButton: S
}, Ha = ({
  type: t = "inputWithLabel",
  options: a = {},
  inType: e,
  inOptions: o
} = {}) => {
  const n = e ?? t, s = o ?? a;
  return (Va[n] || k)({ inOptions: s, options: s });
};
Ia({
  render: Ha,
  inputOnly: x,
  inputWithLabel: k,
  inputWithLabelButton: S
});
const I = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? x({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? S({ inOptions: e }) : k({ inOptions: e });
}, Ma = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, Wa = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: Ma, render: t });
}, qa = "div", Ga = {
  class: "${cardClass}",
  "data-role": "form-card"
}, za = [
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
], Ua = {
  tagName: qa,
  attributes: Ga,
  children: za
}, Ja = () => structuredClone(Ua), _a = "header-actions", Xa = "button", M = {
  destinationRole: _a,
  template: Xa
}, Qa = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ya = {
  button: Qa
}, Za = (t, a) => {
  const e = structuredClone(t), o = m(a.header.actions, Ya[M.template]);
  return C(e, M.destinationRole).children.push(...o), e;
}, to = "form-body", eo = {
  destinationRole: to
}, ao = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, oo = {
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
}, no = {
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
}, so = {
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
}, ro = {
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
}, lo = {
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
}, io = {
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
}, co = {
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
}, uo = {
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
}, bo = {
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
}, po = {
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
}, mo = {
  buildBodyTr: ao,
  buildBodyCell: oo,
  buildRequiredField: no,
  buildTextareaField: so,
  buildCheckboxField: ro,
  buildInlineField: lo,
  buildInlineRequiredField: io,
  buildInlineFieldWithButton: co,
  buildInlineRequiredFieldWithButton: uo,
  buildInlineTextareaField: bo,
  buildInlineCheckboxField: po
}, ho = (t, a, e) => {
  const o = t.map((r) => {
    var u, c, d, h, w;
    const i = ((c = (u = r.template) == null ? void 0 : u.body) == null ? void 0 : c.cell) ?? (r.required ? "buildRequiredField" : "buildBodyCell");
    let l = ((d = e.fieldTemplates) == null ? void 0 : d[i]) ?? i;
    return r.buttonText && (l = ((h = e.buttonFieldTemplates) == null ? void 0 : h[l]) ?? l), {
      ...r,
      label: r.label ?? r.title ?? r.columnName,
      type: r.type ?? "text",
      placeholder: r.placeholder ?? "",
      buttonType: r.buttonType ?? "button",
      template: { ...r.template, body: { ...(w = r.template) == null ? void 0 : w.body, cell: l } }
    };
  }), n = a[0] ?? {}, s = Object.fromEntries(o.map((r) => [
    r.columnName,
    n[r.columnName] ?? r.value ?? ""
  ]));
  return { columns: o, rows: [s] };
}, fo = (t, a, e) => {
  const o = ho(a.columns, a.records, e.body), n = N(o.columns, o.rows, mo), s = structuredClone(t);
  return C(s, eo.destinationRole).children.push(...Array.isArray(n) ? n : [n]), s;
}, yo = "footer-actions", Co = "button", W = {
  destinationRole: yo,
  template: Co
}, wo = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, $o = {
  button: wo
}, go = (t, a) => {
  const e = structuredClone(t), o = m(a.footer.actions, $o[W.template]);
  return C(e, W.destinationRole).children.push(...o), e;
}, ot = ({ inColumns: t, inData: a, inOptions: e, columns: o, data: n, options: s } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(n) ? n : [],
  options: e && Object.keys(e).length > 0 ? e : s ?? {}
}), No = "bigButtonsForm", To = "Account details", xo = "Update your profile information.", Po = "", Ao = "label", ko = "stacked", Io = "saveCancel", Bo = {
  formId: No,
  title: To,
  description: xo,
  recordId: Po,
  header: Ao,
  body: ko,
  footer: Io
}, Fo = {
  actions: []
}, jo = {
  actions: []
}, So = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, Ro = {
  actions: []
}, vo = {
  none: Fo,
  label: jo,
  labelWithRefresh: So,
  labelWithId: Ro
}, Eo = {
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
}, Oo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Do = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Lo = {
  inline: Eo,
  stacked: Oo,
  threeColumns: Do
}, Ko = {
  actions: []
}, Vo = {
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
}, Ho = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Mo = {
  none: Ko,
  saveCancel: Vo,
  edit: Ho
}, B = (t, a, e) => {
  const o = t[a];
  if (!o) throw new RangeError("Unknown bigButtons " + e + ": " + a);
  return o;
}, nt = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = t["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const e = { ...Bo, ...a };
  return {
    options: e,
    header: B(vo, e.header, "header"),
    body: B(Lo, e.body, "body"),
    footer: B(Mo, e.footer, "footer")
  };
}, Wo = (t, a = {}) => {
  const e = ot(a), o = nt(e.options), n = Za(t, o), s = fo(n, e, o);
  return go(s, o);
}, qo = {
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
}, Go = {
  bootstrap: qo
}, zo = (t, a) => {
  var o;
  const e = (o = Go[a]) == null ? void 0 : o[t.header];
  if (!e) throw new RangeError("Unknown bigButtons header: " + t.header);
  return e;
}, Uo = "bootstrap", Jo = {
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
}, F = {
  defaultFramework: Uo,
  frameworks: Jo
}, _o = (t, a) => {
  const e = F.frameworks[a];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  const o = e.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...e.base, ...o };
}, Xo = {
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
}, Qo = {
  bootstrap: Xo
}, Yo = (t, a) => {
  const e = Qo[a], o = e == null ? void 0 : e.footers[t.footer];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...e.base, ...o };
}, Zo = (t, a = {}) => {
  const e = nt(ot(a).options), { options: o } = e, n = o.framework ?? F.defaultFramework;
  if (!F.frameworks[n]) throw new RangeError("Unknown bigButtons framework: " + n);
  const r = Object.assign(
    {},
    o,
    _o(o, n),
    zo(o, n),
    Yo(o, n)
  );
  return p(r, structuredClone(t));
}, tn = (t = {}) => {
  const a = Ja(), e = Wo(a, t);
  return Zo(e, t);
}, st = (t = {}) => {
  const a = { ...t, type: t.type ?? "form.bigButtons" };
  return P(a), tn(a);
};
Wa(st);
const en = ({
  inType: t = "stacked",
  inData: a,
  inColumns: e
} = {}) => st({
  type: t,
  columns: e,
  data: a
}), an = {
  table: V,
  tableFromSpec: V,
  select: ya,
  selectOptionsOnly: Na,
  dataList: H,
  datalist: H,
  searchInput: I,
  search: I,
  inputRow: I,
  form: en
}, rt = (t = {}) => {
  P(t);
  const a = t == null ? void 0 : t.showLog;
  console.log("localShowLog : ", a);
  const e = t.type, o = t == null ? void 0 : t.options;
  let n = e, s = e;
  if (e.includes(".")) {
    const l = e.split(".");
    n = l[0], s = l[1];
  }
  a && console.log("localMainType : ", n, s);
  const r = an[n];
  if (!r)
    throw new Error(`Renderer for type "${n}" not found.`);
  const i = r({
    inType: s,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: a
  });
  return a && console.log("json-renderers-build output:", i), i;
};
Ht(rt);
const on = ({
  inColumns: t,
  inType: a = "table",
  inData: e,
  inShowLog: o = !1,
  inOptions: n
} = {}) => rt({
  type: a,
  data: e ?? [],
  columns: t,
  showLog: o,
  options: n
}), nn = (t = {}) => {
  g(t);
  const a = t == null ? void 0 : t.showLog, e = t == null ? void 0 : t.options;
  a && console.log("first : ", t == null ? void 0 : t.options, t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const o = on({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog,
    inOptions: e
  }), n = J(o);
  return _({
    buildSpec: n,
    targetHtmlId: t.targetHtmlId,
    appendPosition: t.appendPosition,
    showLog: t.showLog
  });
};
ut(nn);
export {
  nn as default,
  nn as render
};
