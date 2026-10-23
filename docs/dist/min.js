const ut = {
  version: "v21.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, dt = (t) => {
  const e = t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: ut,
    render: e
  });
}, bt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, pt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, mt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, ht = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, P = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return bt(e), pt(e), mt(e), ht(e), !0;
}, ft = (t) => {
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
}, yt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.appendPosition;
  if (a === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof a != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, Ct = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.classToApply;
  if (a === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof a != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, q = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return ft(e), yt(e), Ct(e), !0;
}, $t = "table", wt = "", gt = [], Nt = [], Tt = "", xt = "replace", Pt = !1, w = {
  type: $t,
  targetHtmlId: wt,
  data: gt,
  columns: Nt,
  classToApply: Tt,
  appendPosition: xt,
  showLog: Pt
}, G = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in w ? w[e] : { ...w };
};
Object.assign(G, w);
const g = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return P(e), q(e), !0;
};
g.getSpec = G;
g.configSpec = w;
g.guardSpec = P;
g.guardMount = q;
const At = {
  version: "v10",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, kt = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: At,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = e, globalThis.ks.jsonToTag = e;
}, It = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : U(t), z = (t) => Array.isArray(t) ? t.map(It).flat(1 / 0).filter(Boolean) : [], Ft = (t) => (t == null, t), Bt = "http://www.w3.org/2000/svg", jt = /* @__PURE__ */ new Set([
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
]), St = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const a = document.createElement("input");
    return a.type = "checkbox", a;
  }
  return jt.has(e) ? document.createElementNS(Bt, e) : document.createElement(e);
}, Rt = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), vt = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Et = "http://www.w3.org/1999/xlink", Ot = ({ inElement: t, inAttributes: e }) => {
  const a = t, o = e;
  if (!a || !o || typeof o != "object")
    return a;
  const n = typeof SVGElement < "u" ? a instanceof SVGElement : a.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([s, r]) => {
    if (s === "class") {
      n ? a.setAttribute("class", String(r)) : a.className = r;
      return;
    }
    if (s === "xlink:href" || s === "href") {
      if (r != null) {
        const i = String(r);
        if (n)
          try {
            a.setAttributeNS(Et, "href", i);
          } catch {
          }
        a.setAttribute("href", i), a.setAttribute("xlink:href", i);
      }
      return;
    }
    if (typeof r == "boolean") {
      r ? a.setAttribute(s, "") : a.removeAttribute(s);
      return;
    }
    r != null && a.setAttribute(s, String(r));
  }), a;
}, Dt = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const a = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return a.length && t.classList.add(...a), t;
}, Kt = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = St({ inTagName: t.tagName });
  if (!e) return null;
  if (Rt({
    inElement: e,
    inTextContent: Ft(t.textContent),
    inTagName: t.tagName
  }), vt({
    inElement: e,
    inProperties: t.properties
  }), Ot({
    inElement: e,
    inAttributes: t.attributes
  }), Dt({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const a = z(t.children);
    a.length && e.append(...a);
  }
  return e;
}, U = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? z(t) : typeof t == "object" ? Kt(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, J = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return U(e);
};
kt(J);
const Lt = {
  version: "1.41.0",
  name: "json-to-dom"
}, Vt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonToDom = {
    meta: Lt,
    appendToDom: t
  });
}, Ht = {
  version: "2.1.1",
  name: "spec-to-dom"
}, Mt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.specToDom = {
    meta: Ht,
    appendToDom: t
  });
}, _ = ({ buildSpec: t, targetHtmlId: e, appendPosition: a, showLog: o }) => {
  const n = t, s = e, r = a, i = o;
  i && console.log("renderToDom 1 (content):", n);
  const l = document.getElementById(s);
  return l ? (Array.isArray(n) || n instanceof NodeList || n instanceof HTMLCollection ? r === "prepend" ? l.prepend(...n) : l.append(...n) : r === "prepend" ? l.prepend(n) : (l.innerHTML = "", l.append(n)), i && console.log("renderToDom 2 (mounted):", l), l) : null;
};
Mt(_);
const X = ({ jsonSpec: t, targetHtmlId: e, appendPosition: a, showLog: o }) => {
  const n = J(t);
  return _({ buildSpec: n, targetHtmlId: e, appendPosition: a, showLog: o });
};
Vt(X);
const Wt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, qt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: Wt,
    render: t
  });
}, Gt = (t) => typeof t == "object" && t !== null && !Array.isArray(t), zt = (t, e) => {
  if (!Gt(t)) return;
  let a = {};
  for (const [o, n] of Object.entries(t))
    a[o] = p(e, n);
  return a;
}, Ut = (t, e) => {
  const a = structuredClone(t);
  return Array.isArray(a) ? a.map((n) => p(e, n)) : void 0;
}, Q = (t, e, a) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (o, n) => e[n] !== void 0 ? e[n] : o);
}, Jt = (t, e) => Q(t, e), _t = (t, e, a) => {
  if (a && console.log("inElement : ", t), a && console.log("inTemplate : ", e), e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, Xt = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, Qt = (t) => {
  var e, a;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).applyTemplate ?? (e.applyTemplate = t), (a = globalThis.ks).transformerFuncs ?? (a.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: Xt,
    applyTemplate: t
  });
}, p = (t, e, a) => {
  const o = t, n = e;
  _t(o, n, a);
  const s = structuredClone(n);
  return typeof s == "string" ? Q(s, o) : (s === null || typeof s != "object" || ("textContent" in s && (s.textContent = Jt(s == null ? void 0 : s.textContent, o)), "attributes" in s && (s.attributes = zt(s == null ? void 0 : s.attributes, o)), "children" in s && (s.children = Ut(s == null ? void 0 : s.children, o))), s);
};
Qt(p);
const Yt = (t, e) => {
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
}, m = (t, e) => {
  const a = t, o = e;
  return Yt(a, o), a.map((n) => p(n, o));
}, Zt = (t, e) => t.map((o) => ({
  ...o,
  rowData: e[o.columnName]
})), te = (t, e, a) => {
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
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let c = 0; c < e.length; c++) {
    const d = e[c];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${c}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const o = ((r = (s = (n = t[0]) == null ? void 0 : n.template) == null ? void 0 : s.body) == null ? void 0 : r.tr) || "buildBodyTr";
  if (!(o in a))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let c = 0; c < t.length; c++) {
    const d = t[c], h = ((l = (i = d.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((u = d.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(h in a))
      throw new Error(`Cell template "${h}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, ee = (t, e) => t.map((o) => {
  var i, l, u;
  const n = ((l = (i = o.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((u = o.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", s = e[n];
  return p(o, s);
}), N = (t, e, a) => {
  var u, c, d;
  te(t, e, a);
  const o = t, n = e, s = a, r = ((d = (c = (u = o[0]) == null ? void 0 : u.template) == null ? void 0 : c.body) == null ? void 0 : d.tr) || "buildBodyTr", i = s[r];
  return n.map((h) => {
    const $ = p(h, i), it = Zt(o, h), ct = ee(it, s);
    return $.children = ct, $;
  });
}, ae = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, oe = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, ne = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, se = {
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
}, re = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, le = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, ie = {
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
}, ce = {
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
}, ue = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, de = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, be = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, pe = {
  tagName: "td",
  children: []
}, b = {
  buildBodyTr: ae,
  buildColGroup: oe,
  buildHeader: ne,
  buildFooter: se,
  buildBodyCell: re,
  button: le,
  buttonCell: ie,
  optionsButtonCell: ce,
  buildOption: ue,
  buildSelect: de,
  buildDataList: be,
  emptyCell: pe
}, me = "table", he = {
  class: "table table-hover table-striped align-middle border mb-0"
}, fe = [
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
], ye = {
  tagName: me,
  attributes: he,
  children: fe
}, Ce = [
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
], $e = [
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
], C = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const n = C(o, e);
    if (n) return n;
  }
  return null;
}, we = (t, e) => {
  const a = t[e.fileName], o = e.dataRole ? C(a, e.dataRole) : a;
  return (e.filePath ?? []).reduce((n, s) => n[s], o);
}, A = (t) => Array.isArray(t) ? t : [t], Y = (t, e, a) => {
  t[e] = a;
}, ge = (t, e, a) => {
  t[e].push(...A(a));
}, Ne = (t, e, a) => {
  t[e].unshift(...A(a));
}, Te = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.push(...structuredClone(A(a)));
  });
}, xe = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.unshift(...structuredClone(A(a)));
  });
}, Pe = (t, e, a) => {
  t[e].forEach((o, n) => {
    const s = structuredClone(a);
    s.textContent = n + 1, o.children.unshift(s);
  });
}, Ae = {
  set: Y,
  push: ge,
  unshift: Ne,
  pushToRows: Te,
  unshiftToRows: xe,
  unshiftSerialToRows: Pe
}, ke = (t, e) => {
  const a = e.dataRole ? C(t[e.fileName], e.dataRole) : t[e.fileName], o = [...e.filePath ?? []], n = o.pop();
  return { parent: o.reduce((r, i) => r[i], a), key: n };
}, Z = (t, e, a) => {
  const { parent: o, key: n } = ke(t, e);
  (Ae[e.action] || Y)(o, n, a);
}, Ie = (t, e, a) => {
  var s, r;
  const o = !!((s = t.sourcePath) != null && s.fileName && Array.isArray((r = t.sourcePath) == null ? void 0 : r.filePath)), n = `structure/sourcePath: ${o ? "passed" : "failed"}`;
  return a.push(n), e && console.log(n), o;
}, Fe = (t, e, a) => {
  var s, r;
  const o = !!((s = t.destinationPath) != null && s.fileName && Array.isArray((r = t.destinationPath) == null ? void 0 : r.filePath)), n = `structure/destinationPath: ${o ? "passed" : "failed"}`;
  return a.push(n), e && console.log(n), o;
}, Be = (t, e, a) => {
  const o = t.templateKey === void 0 || typeof t.templateKey == "string" && t.templateKey.length > 0, n = `structure/templateKey: ${o ? "passed" : "failed"}`;
  return a.push(n), e && console.log(n), o;
}, je = (t, e, a) => {
  const o = typeof t.func == "string" && t.func.length > 0, n = `structure/func: ${o ? "passed" : "failed"}`;
  return a.push(n), e && console.log(n), o;
}, Se = (t, e, a) => [
  Ie(t, e, a),
  Fe(t, e, a),
  Be(t, e, a),
  je(t, e, a)
].every(Boolean), Re = (t, e, a, o) => {
  const n = typeof e[t.func] == "function", s = `references/func (${t.func}): ${n ? "passed" : "failed"}`;
  return o.push(s), a && console.log(s), n;
}, ve = (t, e, a, o) => {
  const n = t.templateKey === void 0 || Object.hasOwn(e, t.templateKey), s = `references/templateKey${t.templateKey === void 0 ? " (not used)" : ` (${t.templateKey})`}: ${n ? "passed" : "failed"}`;
  return o.push(s), a && console.log(s), n;
}, Ee = (t, e, a, o, n) => {
  const s = Re(t, e, o, n), r = ve(t, a, o, n);
  return s && r;
}, tt = (t, e, a, o, n) => Se(t, o, n) ? Ee(t, e, a, o, n) : !1, Oe = (t, e, a, o, n, s) => {
  if (!tt(t, a, o, n, s)) return;
  const r = n, i = o, l = t.templateKey, u = i[l];
  r && console.log("singleInstruction ; ", l, u);
  const c = we(e, t.sourcePath), d = a[t.func](c, u);
  Z(e, t.destinationPath, d);
}, f = (t, e, a, o, n, s) => {
  t.forEach((r) => {
    Oe(r, e, a, o, n, s);
  });
}, De = (t, e, a, o, n, s) => {
  if (!tt(t, a, o, n, s)) return;
  const r = a[t.func](
    e.data.columns,
    e.data.data,
    o
  );
  Z(e, t.destinationPath, r);
}, j = (t, e, a, o, n, s) => {
  t.forEach((r) => {
    De(r, e, a, o, n, s);
  });
}, Ke = [
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
], Le = [
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
], R = { applyTemplate: p }, Ve = (t = {}, e = {}, a = !1, o = []) => {
  let n = t, s = e;
  t && typeof t == "object" && "inTableSpec" in t && (n = t.inTableSpec, s = t.inSerial || e);
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
  f(Ke, i, R, b, a, o);
  const l = C(n, "table-footer-row");
  return l && Array.isArray(l.children) && l.children.length > 0 && f(Le, i, R, b, a, o), n;
}, He = [
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
], Me = [
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
], v = { applyTemplate: p }, We = (t = {}, e = {}, a = !1, o = []) => {
  let n = t, s = e;
  t && typeof t == "object" && "inTableSpec" in t && (n = t.inTableSpec, s = t.inOptions || e);
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
  f(He, i, v, b, a, o);
  const l = C(n, "table-footer-row");
  return l && Array.isArray(l.children) && l.children.length > 0 && f(Me, i, v, b, a, o), n;
}, et = ({ inOptions: t = {}, inBase: e, showLog: a = !1, returnLog: o = [] }) => {
  const n = t, s = e;
  return (n.showSerial || n.serial) && Ve(s, n.serial || {}, a, o), (n.showOptions || n.options) && We(s, n.options || {}, a, o), s;
}, E = { fromCollection: m, twoDimensional: N }, qe = (t = {}, e = !1, a = []) => {
  const o = t, n = o.columns || [], s = o.data || [], r = o.options, i = structuredClone(ye), l = {
    data: {
      columns: n,
      data: s
    },
    base: i,
    spec: b
  };
  return f(Ce, l, E, b, e, a), j($e, l, E, b, e, a), et({ inOptions: r, inBase: i }), i;
}, Ge = "table", ze = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Ue = [
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
], at = {
  tagName: Ge,
  attributes: ze,
  children: Ue
}, Je = [
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
], O = { data: {}, base: at, spec: b }, _e = { fromCollection: m }, Xe = (t, e = !1, a = []) => (O.data = t, f(Je, O, _e, b, e, a), at), Qe = [], ot = {
  children: Qe
}, Ye = [
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
], D = { data: {}, base: ot, spec: b }, Ze = { twoDimensional: N }, ta = (t, e = !1, a = []) => (D.data = t, j(Ye, D, Ze, b, e, a), ot.children), ea = "table", aa = {
  class: "table table-hover table-striped align-middle border mb-0"
}, oa = [
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
], na = {
  tagName: ea,
  attributes: aa,
  children: oa
}, sa = [
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
], ra = [
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
], K = { fromCollection: m, twoDimensional: N }, la = (t = {}, e = !1, a = []) => {
  const o = t, n = o.inColumns || o.columns || [], s = o.inData || o.data || [], r = o.inOptions || o.options || {}, i = structuredClone(na), l = {
    data: {
      columns: n,
      data: s
    },
    base: i,
    spec: b
  };
  return f(sa, l, K, b, e, a), j(ra, l, K, b, e, a), et({ inOptions: r, inBase: i }), i;
}, ia = [], T = {
  children: ia
}, ca = [
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
], L = { data: {}, base: T, spec: b }, ua = { fromCollection: m, twoDimensional: N }, da = (t, e = !1, a = []) => (L.data = t, f(ca, L, ua, b, e, a), T == null ? void 0 : T.children), ba = {
  simple: qe,
  headerOnly: Xe,
  bodyOnly: ta,
  withFooter: la,
  footerOnly: da
}, V = ({
  inData: t,
  inColumns: e,
  inType: a,
  footer: o = [],
  inOptions: n,
  inShowLog: s
} = {}) => {
  const r = a, i = ba[r], l = n, u = s;
  return u && console.log("table : ", r, l), i({
    columns: e,
    data: t,
    options: l,
    showLog: u
  });
}, pa = ({ inData: t = [], inColumns: e = [] } = {}) => ({
  data: t,
  columns: e
}), ma = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, ha = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, fa = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, y = {
  buildOption: ma,
  buildSelect: ha,
  buildDataList: fa
}, ya = (t, e = y.buildOption) => {
  const a = structuredClone(e);
  return a.textContent = a.textContent.replace("rowValue", t), a.attributes.value = a.attributes.value.replace("rowValue", t), a;
}, Ca = (t, e) => {
  const a = e == null ? void 0 : e.columnName, o = structuredClone(y.buildSelect);
  o.attributes.id = a, o.attributes["data-name"] = a;
  const n = ya(a, y.buildOption);
  return o.children = m(t, n), o;
}, $a = ({ data: t, columns: e }) => e.map((a) => Ca(t, a)), wa = (t = {}) => {
  const { data: e, columns: a } = pa(t);
  return $a({ data: e, columns: a });
}, ga = ({ inData: t = [], inColumns: e = [] } = {}) => ({
  data: t,
  columns: e
}), Na = (t, e = y.buildOption) => {
  const a = structuredClone(e);
  return a.textContent = a.textContent.replace("rowValue", t), a.attributes.value = a.attributes.value.replace("rowValue", t), a;
}, Ta = (t, e) => {
  const a = e == null ? void 0 : e.columnName, o = Na(a, y.buildOption);
  return m(t, o);
}, xa = ({ data: t, columns: e }) => e.map((a) => Ta(t, a)), Pa = (t = {}) => {
  const { data: e, columns: a } = ga(t);
  return xa({ data: e, columns: a });
}, Aa = ({ inData: t = [], inColumns: e = [] } = {}) => ({
  data: t,
  columns: e
}), ka = (t, e = y.buildOption) => {
  const a = structuredClone(e);
  return a.textContent = a.textContent.replace("rowValue", t), a.attributes.value = a.attributes.value.replace("rowValue", t), a;
}, Ia = (t, e) => {
  const a = e == null ? void 0 : e.columnName, o = structuredClone(y.buildDataList);
  o.attributes.id = a, o.attributes["data-name"] = a;
  const n = ka(a, y.buildOption);
  return o.children = m(t, n), o;
}, Fa = ({ data: t, columns: e }) => e.map((a) => Ia(t, a)), H = (t = {}) => {
  const { data: e, columns: a } = Aa(t);
  return Fa({ data: e, columns: a });
}, Ba = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, ja = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const a = typeof e == "function" ? e : e.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Ba,
    render: a,
    ...typeof e == "object" ? e : {}
  };
}, Sa = "input", Ra = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, va = {
  tagName: Sa,
  attributes: Ra
}, x = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e, o = structuredClone(va);
  return a.placeholder && (o.attributes.placeholder = a.placeholder), a.class && (o.attributes.class = a.class), a.id && (o.attributes.id = a.id), a.name && (o.attributes.name = a.name), a.type && (o.attributes.type = a.type), a.value && (o.attributes.value = a.value), o;
}, Ea = "div", Oa = {
  class: "d-flex align-items-center gap-2"
}, Da = [
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
], Ka = {
  tagName: Ea,
  attributes: Oa,
  children: Da
}, k = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e, o = structuredClone(Ka), n = o.children[0], s = o.children[1];
  return a.label && (n.textContent = a.label), a.id && (n.attributes.for = a.id, s.attributes.id = a.id), a.placeholder && (s.attributes.placeholder = a.placeholder), a.class && (s.attributes.class = a.class), a.name && (s.attributes.name = a.name), a.type && (s.attributes.type = a.type), a.wrapperClass && (o.attributes.class = a.wrapperClass), a.labelClass && (n.attributes.class = a.labelClass), o;
}, La = "div", Va = {
  class: "d-flex align-items-center gap-2"
}, Ha = [
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
], Ma = {
  tagName: La,
  attributes: Va,
  children: Ha
}, S = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e, o = structuredClone(Ma), n = o.children[0], s = o.children[1], r = o.children[2];
  return a.label && (n.textContent = a.label), a.id && (n.attributes.for = a.id, s.attributes.id = a.id), a.placeholder && (s.attributes.placeholder = a.placeholder), a.class && (s.attributes.class = a.class), a.name && (s.attributes.name = a.name), a.type && (s.attributes.type = a.type), a.buttonText && (r.textContent = a.buttonText), a.buttonClass && (r.attributes.class = a.buttonClass), a.buttonId && (r.attributes.id = a.buttonId), a.wrapperClass && (o.attributes.class = a.wrapperClass), a.labelClass && (n.attributes.class = a.labelClass), o;
}, Wa = {
  input: x,
  inputOnly: x,
  inputWithLabel: k,
  inputWithLabelButton: S
}, qa = ({
  type: t = "inputWithLabel",
  options: e = {},
  inType: a,
  inOptions: o
} = {}) => {
  const n = a ?? t, s = o ?? e;
  return (Wa[n] || k)({ inOptions: s, options: s });
};
ja({
  render: qa,
  inputOnly: x,
  inputWithLabel: k,
  inputWithLabelButton: S
});
const I = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e;
  return (a == null ? void 0 : a.label) === !1 || (a == null ? void 0 : a.flavour) === "inputOnly" ? x({ inOptions: a }) : (a == null ? void 0 : a.flavour) === "inputWithLabelButton" || a != null && a.button || a != null && a.buttonText ? S({ inOptions: a }) : k({ inOptions: a });
}, Ga = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, za = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: Ga, render: t });
}, Ua = "div", Ja = {
  class: "${cardClass}",
  "data-role": "form-card"
}, _a = [
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
], Xa = {
  tagName: Ua,
  attributes: Ja,
  children: _a
}, Qa = () => structuredClone(Xa), Ya = "header-actions", Za = "button", M = {
  destinationRole: Ya,
  template: Za
}, to = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, eo = {
  button: to
}, ao = (t, e) => {
  const a = structuredClone(t), o = m(e.header.actions, eo[M.template]);
  return C(a, M.destinationRole).children.push(...o), a;
}, oo = "form-body", no = {
  destinationRole: oo
}, so = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, ro = {
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
}, co = {
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
        value: "${rowValue}"
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
}, po = {
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
}, mo = {
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
}, ho = {
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
}, fo = {
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
}, yo = {
  buildBodyTr: so,
  buildBodyCell: ro,
  buildRequiredField: lo,
  buildTextareaField: io,
  buildCheckboxField: co,
  buildInlineField: uo,
  buildInlineRequiredField: bo,
  buildInlineFieldWithButton: po,
  buildInlineRequiredFieldWithButton: mo,
  buildInlineTextareaField: ho,
  buildInlineCheckboxField: fo
}, Co = (t, e, a) => {
  const o = t.map((r) => {
    var u, c, d, h, $;
    const i = ((c = (u = r.template) == null ? void 0 : u.body) == null ? void 0 : c.cell) ?? (r.required ? "buildRequiredField" : "buildBodyCell");
    let l = ((d = a.fieldTemplates) == null ? void 0 : d[i]) ?? i;
    return r.buttonText && (l = ((h = a.buttonFieldTemplates) == null ? void 0 : h[l]) ?? l), {
      ...r,
      label: r.label ?? r.title ?? r.columnName,
      type: r.type ?? "text",
      placeholder: r.placeholder ?? "",
      buttonType: r.buttonType ?? "button",
      template: { ...r.template, body: { ...($ = r.template) == null ? void 0 : $.body, cell: l } }
    };
  }), n = e[0] ?? {}, s = Object.fromEntries(o.map((r) => [
    r.columnName,
    n[r.columnName] ?? r.value ?? ""
  ]));
  return { columns: o, rows: [s] };
}, $o = (t, e, a) => {
  const o = Co(e.columns, e.records, a.body), n = N(o.columns, o.rows, yo), s = structuredClone(t);
  return C(s, no.destinationRole).children.push(...Array.isArray(n) ? n : [n]), s;
}, wo = "footer-actions", go = "button", W = {
  destinationRole: wo,
  template: go
}, No = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, To = {
  button: No
}, xo = (t, e) => {
  const a = structuredClone(t), o = m(e.footer.actions, To[W.template]);
  return C(a, W.destinationRole).children.push(...o), a;
}, nt = ({ inColumns: t, inData: e, inOptions: a, columns: o, data: n, options: s } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(e) && e.length > 0 ? e : Array.isArray(n) ? n : [],
  options: a && Object.keys(a).length > 0 ? a : s ?? {}
}), Po = "bigButtonsForm", Ao = "Account details", ko = "Update your profile information.", Io = "", Fo = "label", Bo = "stacked", jo = "saveCancel", So = {
  formId: Po,
  title: Ao,
  description: ko,
  recordId: Io,
  header: Fo,
  body: Bo,
  footer: jo
}, Ro = {
  actions: []
}, vo = {
  actions: []
}, Eo = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, Oo = {
  actions: []
}, Do = {
  none: Ro,
  label: vo,
  labelWithRefresh: Eo,
  labelWithId: Oo
}, Ko = {
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
}, Lo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Vo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Ho = {
  inline: Ko,
  stacked: Lo,
  threeColumns: Vo
}, Mo = {
  actions: []
}, Wo = {
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
}, qo = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Go = {
  none: Mo,
  saveCancel: Wo,
  edit: qo
}, F = (t, e, a) => {
  const o = t[e];
  if (!o) throw new RangeError("Unknown bigButtons " + a + ": " + e);
  return o;
}, st = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const e = t["form.bigButtons"] ?? {};
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const a = { ...So, ...e };
  return {
    options: a,
    header: F(Do, a.header, "header"),
    body: F(Ho, a.body, "body"),
    footer: F(Go, a.footer, "footer")
  };
}, zo = (t, e = {}) => {
  const a = nt(e), o = st(a.options), n = ao(t, o), s = $o(n, a, o);
  return xo(s, o);
}, Uo = {
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
}, Jo = {
  bootstrap: Uo
}, _o = (t, e) => {
  var o;
  const a = (o = Jo[e]) == null ? void 0 : o[t.header];
  if (!a) throw new RangeError("Unknown bigButtons header: " + t.header);
  return a;
}, Xo = "bootstrap", Qo = {
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
}, B = {
  defaultFramework: Xo,
  frameworks: Qo
}, Yo = (t, e) => {
  const a = B.frameworks[e];
  if (!a) throw new RangeError("Unknown bigButtons framework: " + e);
  const o = a.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...a.base, ...o };
}, Zo = {
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
}, tn = {
  bootstrap: Zo
}, en = (t, e) => {
  const a = tn[e], o = a == null ? void 0 : a.footers[t.footer];
  if (!a) throw new RangeError("Unknown bigButtons framework: " + e);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...a.base, ...o };
}, an = (t, e = {}) => {
  const a = st(nt(e).options), { options: o } = a, n = o.framework ?? B.defaultFramework;
  if (!B.frameworks[n]) throw new RangeError("Unknown bigButtons framework: " + n);
  const r = Object.assign(
    {},
    o,
    Yo(o, n),
    _o(o, n),
    en(o, n)
  );
  return p(r, structuredClone(t));
}, on = (t = {}) => {
  const e = Qa(), a = zo(e, t);
  return an(a, t);
}, rt = (t = {}) => {
  const e = { ...t, type: t.type ?? "form.bigButtons" };
  return P(e), on(e);
};
za(rt);
const nn = ({
  inType: t = "stacked",
  inData: e,
  inColumns: a
} = {}) => rt({
  type: t,
  columns: a,
  data: e
}), sn = {
  table: V,
  tableFromSpec: V,
  select: wa,
  selectOptionsOnly: Pa,
  dataList: H,
  datalist: H,
  searchInput: I,
  search: I,
  inputRow: I,
  form: nn
}, lt = (t = {}) => {
  P(t);
  const e = t == null ? void 0 : t.showLog;
  console.log("localShowLog : ", e);
  const a = t.type, o = t == null ? void 0 : t.options;
  let n = a, s = a;
  if (a.includes(".")) {
    const l = a.split(".");
    n = l[0], s = l[1];
  }
  e && console.log("localMainType : ", n, s);
  const r = sn[n];
  if (!r)
    throw new Error(`Renderer for type "${n}" not found.`);
  const i = r({
    inType: s,
    inColumns: t.columns,
    inData: t.data,
    inOptions: o,
    options: t.options,
    inShowLog: e
  });
  return e && console.log("json-renderers-build output:", i), i;
};
qt(lt);
const rn = ({
  inColumns: t,
  inType: e = "table",
  inData: a,
  inShowLog: o = !1,
  inOptions: n
} = {}) => lt({
  type: e,
  data: a ?? [],
  columns: t,
  showLog: o,
  options: n
}), ln = (t = {}) => {
  g(t);
  const e = t == null ? void 0 : t.showLog, a = t == null ? void 0 : t.options;
  e && console.log("first : ", t == null ? void 0 : t.options, t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const o = rn({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog,
    inOptions: a
  });
  e && console.log("spec : ", o);
  const n = X({
    jsonSpec: o,
    targetHtmlId: t.targetHtmlId,
    appendPosition: t.appendPosition,
    showLog: e
  });
  return e && console.log("dom : ", n), n;
};
dt(ln);
export {
  ln as default,
  ln as render
};
