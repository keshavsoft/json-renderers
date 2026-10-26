const tt = {
  version: "v21.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, et = (t) => {
  const e = t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: tt,
    render: e
  });
}, at = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.type;
  if (a === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof a != "string")
    throw new TypeError("type must be a string");
  return !0;
}, ot = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.data;
  if (a === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(a))
    throw new TypeError("data must be an Array");
  return !0;
}, nt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.columns;
  if (a === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(a))
    throw new TypeError("columns must be an Array");
  return !0;
}, st = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.showLog;
  if (a !== void 0 && typeof a != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, N = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return at(e), ot(e), nt(e), st(e), !0;
}, rt = (t) => {
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
}, lt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.appendPosition;
  if (a === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof a != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, it = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const a = e.classToApply;
  if (a === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof a != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, v = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return rt(e), lt(e), it(e), !0;
}, ct = "table", ut = "", dt = [], bt = [], pt = "", mt = "replace", ht = !1, y = {
  type: ct,
  targetHtmlId: ut,
  data: dt,
  columns: bt,
  classToApply: pt,
  appendPosition: mt,
  showLog: ht
}, R = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in y ? y[e] : { ...y };
};
Object.assign(R, y);
const C = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return N(e), v(e), !0;
};
C.getSpec = R;
C.configSpec = y;
C.guardSpec = N;
C.guardMount = v;
const ft = {
  version: "1.41.0",
  name: "json-to-dom"
}, yt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonToDom = {
    meta: ft,
    appendToDom: t
  });
}, Ct = {
  version: "v10",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, $t = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = {
    meta: Ct,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = e, globalThis.ks.jsonToTag = e;
}, gt = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : E(t), L = (t) => Array.isArray(t) ? t.map(gt).flat(1 / 0).filter(Boolean) : [], wt = (t) => (t == null, t), Nt = "http://www.w3.org/2000/svg", xt = /* @__PURE__ */ new Set([
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
]), Tt = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const a = document.createElement("input");
    return a.type = "checkbox", a;
  }
  return xt.has(e) ? document.createElementNS(Nt, e) : document.createElement(e);
}, At = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), Ft = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), kt = "http://www.w3.org/1999/xlink", Bt = ({ inElement: t, inAttributes: e }) => {
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
            a.setAttributeNS(kt, "href", i);
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
}, St = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const a = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((o) => typeof o == "string" && o.trim()) : [];
  return a.length && t.classList.add(...a), t;
}, It = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = Tt({ inTagName: t.tagName });
  if (!e) return null;
  if (At({
    inElement: e,
    inTextContent: wt(t.textContent),
    inTagName: t.tagName
  }), Ft({
    inElement: e,
    inProperties: t.properties
  }), Bt({
    inElement: e,
    inAttributes: t.attributes
  }), St({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const a = L(t.children);
    a.length && e.append(...a);
  }
  return e;
}, E = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? L(t) : typeof t == "object" ? It(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, O = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return E(e);
};
$t(O);
const jt = {
  version: "2.1.1",
  name: "spec-to-dom"
}, Pt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.specToDom = {
    meta: jt,
    appendToDom: t
  });
}, D = ({ buildSpec: t, targetHtmlId: e, appendPosition: a, showLog: o }) => {
  const n = t, s = e, r = a, i = o;
  i && console.log("renderToDom 1 (content):", n);
  const l = document.getElementById(s);
  return l ? (Array.isArray(n) || n instanceof NodeList || n instanceof HTMLCollection ? r === "prepend" ? l.prepend(...n) : l.append(...n) : r === "prepend" ? l.prepend(n) : (l.innerHTML = "", l.append(n)), i && console.log("renderToDom 2 (mounted):", l), l) : null;
};
Pt(D);
const V = ({ jsonSpec: t, targetHtmlId: e, appendPosition: a, showLog: o }) => {
  const n = O(t);
  return D({ buildSpec: n, targetHtmlId: e, appendPosition: a, showLog: o });
};
yt(V);
const vt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, Rt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: vt,
    render: t
  });
}, Lt = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Et = (t, e) => {
  if (!Lt(t)) return;
  let a = {};
  for (const [o, n] of Object.entries(t))
    a[o] = b(e, n);
  return a;
}, Ot = (t, e) => {
  const a = structuredClone(t);
  return Array.isArray(a) ? a.map((n) => b(e, n)) : void 0;
}, G = (t, e, a) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (o, n) => e[n] !== void 0 ? e[n] : o);
}, Dt = (t, e) => G(t, e), Vt = (t, e, a) => {
  if (a && console.log("inElement : ", t), a && console.log("inTemplate : ", e), e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, Gt = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, Wt = (t) => {
  var e, a;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (e = globalThis.ks).applyTemplate ?? (e.applyTemplate = t), (a = globalThis.ks).transformerFuncs ?? (a.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: Gt,
    applyTemplate: t
  });
}, b = (t, e, a) => {
  const o = t, n = e;
  Vt(o, n, a);
  const s = structuredClone(n);
  return typeof s == "string" ? G(s, o) : (s === null || typeof s != "object" || ("textContent" in s && (s.textContent = Dt(s == null ? void 0 : s.textContent, o)), "attributes" in s && (s.attributes = Et(s == null ? void 0 : s.attributes, o)), "children" in s && (s.children = Ot(s == null ? void 0 : s.children, o))), s);
};
Wt(b);
const Ht = (t, e) => {
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
}, h = (t, e) => {
  const a = t, o = e;
  return Ht(a, o), a.map((n) => b(n, o));
}, Kt = (t, e) => t.map((o) => ({
  ...o,
  rowData: e[o.columnName]
})), qt = (t, e, a) => {
  var n, s, r, i, l, d;
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
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let c = 0; c < e.length; c++) {
    const u = e[c];
    if (!u || typeof u != "object")
      throw new TypeError(`inData[${c}] must be an object`);
  }
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("inSpec must be an object");
  const o = ((r = (s = (n = t[0]) == null ? void 0 : n.template) == null ? void 0 : s.body) == null ? void 0 : r.tr) || "buildBodyTr";
  if (!(o in a))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let c = 0; c < t.length; c++) {
    const u = t[c], p = ((l = (i = u.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((d = u.template) == null ? void 0 : d.bodyCell) || "buildBodyCell";
    if (!(p in a))
      throw new Error(`Cell template "${p}" for column "${u.columnName}" not found in inSpec`);
  }
  return !0;
}, Mt = (t, e) => t.map((o) => {
  var i, l, d;
  const n = ((l = (i = o.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((d = o.template) == null ? void 0 : d.bodyCell) || "buildBodyCell", s = e[n];
  return b(o, s);
}), W = (t, e, a) => {
  var d, c, u;
  qt(t, e, a);
  const o = t, n = e, s = a, r = ((u = (c = (d = o[0]) == null ? void 0 : d.template) == null ? void 0 : c.body) == null ? void 0 : u.tr) || "buildBodyTr", i = s[r];
  return n.map((p) => {
    const f = b(p, i), Y = Kt(o, p), Z = Mt(Y, s);
    return f.children = Z, f;
  });
}, x = (t) => Array.isArray(t) ? t : [t], H = (t, e, a) => {
  t[e] = a;
}, zt = (t, e, a) => {
  t[e].push(...x(a));
}, Ut = (t, e, a) => {
  t[e].unshift(...x(a));
}, Jt = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.push(...structuredClone(x(a)));
  });
}, _t = (t, e, a) => {
  t[e].forEach((o) => {
    o.children.unshift(...structuredClone(x(a)));
  });
}, Xt = (t, e, a) => {
  t[e].forEach((o, n) => {
    const s = structuredClone(a);
    s.textContent = n + 1, o.children.unshift(s);
  });
}, Qt = {
  set: H,
  push: zt,
  unshift: Ut,
  pushToRows: Jt,
  unshiftToRows: _t,
  unshiftSerialToRows: Xt
}, $ = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const n = $(o, e);
    if (n) return n;
  }
  return null;
}, Yt = (t, e) => {
  const a = e.dataRole ? $(t[e.fileName], e.dataRole) : t[e.fileName], o = [...e.filePath ?? []], n = o.pop();
  return { parent: o.reduce((r, i) => r[i], a), key: n };
}, K = (t, e, a) => {
  const { parent: o, key: n } = Yt(t, e), s = e.action;
  (Qt[s] || H)(o, n, a);
}, q = (t, e) => {
  var a;
  if (((a = t == null ? void 0 : t.attributes) == null ? void 0 : a["data-role"]) === e) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const n = q(o, e);
    if (n) return n;
  }
  return null;
}, Zt = (t, e) => {
  const a = t[e.fileName], o = e.dataRole ? q(a, e.dataRole) : a;
  return (e.filePath ?? []).reduce((n, s) => n[s], o);
}, te = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, ee = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, ae = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, oe = {
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
}, ne = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, se = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, re = {
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
}, le = {
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
}, ie = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, ce = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, ue = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, de = {
  tagName: "td",
  children: []
}, be = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, pe = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, me = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, he = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, fe = {
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
}, ye = {
  buildBodyTr: te,
  buildColGroup: ee,
  buildHeader: ae,
  buildFooter: oe,
  buildBodyCell: ne,
  button: se,
  buttonCell: re,
  optionsButtonCell: le,
  buildOption: ie,
  buildSelect: ce,
  buildDataList: ue,
  emptyCell: de,
  headerSerialCell: be,
  colGroupForSerial: pe,
  colGroupForOption: me,
  headerForOption: he,
  tdWithButtonSaveWarning: fe
}, Ce = { applyTemplate: b, fromCollection: h }, $e = (t, e) => (t == null ? void 0 : t.sourcePath) === null ? null : Zt(e, t.sourcePath), ge = (t, e, a, o) => {
  const n = ye, s = t.templateKey;
  let r = n[s], i;
  const l = $e(t, e);
  l === null ? i = r : i = Ce[t.func](l, r), K(e, t.destinationPath, i);
}, g = (t, e, a, o) => {
  t.forEach((n) => {
    ge(n, e);
  });
}, we = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Ne = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, xe = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Te = {
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
}, Ae = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Fe = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, ke = {
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
}, Be = {
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
}, Se = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Ie = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, je = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Pe = {
  tagName: "td",
  children: []
}, ve = {
  tagName: "th",
  textContent: "#",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Re = {
  tagName: "col",
  attributes: {
    width: "50px"
  }
}, Le = {
  tagName: "col",
  attributes: {
    width: "100px"
  }
}, Ee = {
  tagName: "th",
  textContent: "options",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Oe = {
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
}, De = {
  buildBodyTr: we,
  buildColGroup: Ne,
  buildHeader: xe,
  buildFooter: Te,
  buildBodyCell: Ae,
  button: Fe,
  buttonCell: ke,
  optionsButtonCell: Be,
  buildOption: Se,
  buildSelect: Ie,
  buildDataList: je,
  emptyCell: Pe,
  headerSerialCell: ve,
  colGroupForSerial: Re,
  colGroupForOption: Le,
  headerForOption: Ee,
  tdWithButtonSaveWarning: Oe
}, Ve = { applyTemplate: b, fromCollection: h, twoDimensional: W }, Ge = (t, e, a, o) => {
  const n = Ve[t.func](
    e.data.columns,
    e.data.data,
    De
  );
  K(e, t.destinationPath, n);
}, M = (t, e, a, o) => {
  t.forEach((n) => {
    Ge(n, e);
  });
}, We = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), n = `guards/base: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(n), e && console.log(n), o;
}, He = (t, e, a) => {
  const o = !!(t && typeof t == "object" && !Array.isArray(t)), n = `guards/options: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(n), e && console.log(n), o;
}, Ke = (t, e, a) => {
  const o = typeof t == "boolean", n = `guards/showLog: ${o ? "passed" : "failed"}`;
  return Array.isArray(a) && a.push(n), e && console.log(n), o;
}, qe = (t, e, a) => {
  const o = Array.isArray(t), n = `guards/returnLog: ${o ? "passed" : "failed"}`;
  return o ? t.push(n) : Array.isArray(a) && a.push(n), e && console.log(n), o;
}, Me = ({ options: t, base: e, showLog: a, returnLog: o }) => ({
  base: We(e, a, o),
  options: He(t, a, o),
  showLog: Ke(a, a, o),
  returnLog: qe(o, a, o)
}), ze = [
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
], Ue = [
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
], z = ({ options: t = {}, base: e, showLog: a = !1, returnLog: o = [] } = {}) => {
  const n = Me({ options: t, base: e, showLog: a, returnLog: o });
  if (!Object.values(n).every(Boolean))
    return e;
  const s = t, r = e;
  return (s.showSerial || s.serial) && g(ze, { base: r }), (s.showOptions || s.options) && g(Ue, { base: r }), s.showSearch, r;
}, Je = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, _e = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Xe = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Qe = {
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
}, Ye = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Ze = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, ta = {
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
}, ea = {
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
}, aa = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, oa = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, na = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, sa = {
  tagName: "td",
  children: []
}, U = {
  buildBodyTr: Je,
  buildColGroup: _e,
  buildHeader: Xe,
  buildFooter: Qe,
  buildBodyCell: Ye,
  button: Ze,
  buttonCell: ta,
  optionsButtonCell: ea,
  buildOption: aa,
  buildSelect: oa,
  buildDataList: na,
  emptyCell: sa
}, ra = "table", la = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ia = [
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
], ca = {
  tagName: ra,
  attributes: la,
  children: ia
}, ua = [
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
], da = [
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
], ba = ({ data: t, columns: e, options: a }) => {
  const o = structuredClone(ca), n = {
    data: { columns: e, data: t },
    base: o,
    spec: U,
    ...a
  };
  return g(ua, n), M(da, n), z({ options: a, base: o }), o;
}, pa = "table", ma = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ha = [
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
], fa = {
  tagName: pa,
  attributes: ma,
  children: ha
}, ya = [
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
], Ca = [
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
], $a = ({ data: t, columns: e, options: a }) => {
  const o = structuredClone(fa), n = {
    data: { columns: e, data: t },
    base: o,
    spec: U,
    ...a
  };
  return g(ya, n), M(Ca, n), z({ options: a, base: o, showLog: !1, returnLog: [] }), o;
}, ga = { simple: ba, withFooter: $a }, S = ({
  inData: t,
  inColumns: e,
  inType: a,
  footer: o = [],
  inOptions: n,
  inShowLog: s
} = {}) => {
  const r = a, i = ga[r], l = n, d = s;
  return d && console.log("table : ", r, l), i({
    columns: e,
    data: t,
    options: l,
    showLog: d
  });
}, wa = ({ inData: t = [], inColumns: e = [] } = {}) => ({
  data: t,
  columns: e
}), Na = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, xa = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Ta = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, m = {
  buildOption: Na,
  buildSelect: xa,
  buildDataList: Ta
}, Aa = (t, e = m.buildOption) => {
  const a = structuredClone(e);
  return a.textContent = a.textContent.replace("rowValue", t), a.attributes.value = a.attributes.value.replace("rowValue", t), a;
}, Fa = (t, e) => {
  const a = e == null ? void 0 : e.columnName, o = structuredClone(m.buildSelect);
  o.attributes.id = a, o.attributes["data-name"] = a;
  const n = Aa(a, m.buildOption);
  return o.children = h(t, n), o;
}, ka = ({ data: t, columns: e }) => e.map((a) => Fa(t, a)), Ba = (t = {}) => {
  const { data: e, columns: a } = wa(t);
  return ka({ data: e, columns: a });
}, Sa = ({ inData: t = [], inColumns: e = [] } = {}) => ({
  data: t,
  columns: e
}), Ia = (t, e = m.buildOption) => {
  const a = structuredClone(e);
  return a.textContent = a.textContent.replace("rowValue", t), a.attributes.value = a.attributes.value.replace("rowValue", t), a;
}, ja = (t, e) => {
  const a = e == null ? void 0 : e.columnName, o = Ia(a, m.buildOption);
  return h(t, o);
}, Pa = ({ data: t, columns: e }) => e.map((a) => ja(t, a)), va = (t = {}) => {
  const { data: e, columns: a } = Sa(t);
  return Pa({ data: e, columns: a });
}, Ra = ({ inData: t = [], inColumns: e = [] } = {}) => ({
  data: t,
  columns: e
}), La = (t, e = m.buildOption) => {
  const a = structuredClone(e);
  return a.textContent = a.textContent.replace("rowValue", t), a.attributes.value = a.attributes.value.replace("rowValue", t), a;
}, Ea = (t, e) => {
  const a = e == null ? void 0 : e.columnName, o = structuredClone(m.buildDataList);
  o.attributes.id = a, o.attributes["data-name"] = a;
  const n = La(a, m.buildOption);
  return o.children = h(t, n), o;
}, Oa = ({ data: t, columns: e }) => e.map((a) => Ea(t, a)), I = (t = {}) => {
  const { data: e, columns: a } = Ra(t);
  return Oa({ data: e, columns: a });
}, Da = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, Va = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const a = typeof e == "function" ? e : e.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Da,
    render: a,
    ...typeof e == "object" ? e : {}
  };
}, Ga = "input", Wa = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, Ha = {
  tagName: Ga,
  attributes: Wa
}, w = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e, o = structuredClone(Ha);
  return a.placeholder && (o.attributes.placeholder = a.placeholder), a.class && (o.attributes.class = a.class), a.id && (o.attributes.id = a.id), a.name && (o.attributes.name = a.name), a.type && (o.attributes.type = a.type), a.value && (o.attributes.value = a.value), o;
}, Ka = "div", qa = {
  class: "d-flex align-items-center gap-2"
}, Ma = [
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
], za = {
  tagName: Ka,
  attributes: qa,
  children: Ma
}, T = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e, o = structuredClone(za), n = o.children[0], s = o.children[1];
  return a.label && (n.textContent = a.label), a.id && (n.attributes.for = a.id, s.attributes.id = a.id), a.placeholder && (s.attributes.placeholder = a.placeholder), a.class && (s.attributes.class = a.class), a.name && (s.attributes.name = a.name), a.type && (s.attributes.type = a.type), a.wrapperClass && (o.attributes.class = a.wrapperClass), a.labelClass && (n.attributes.class = a.labelClass), o;
}, Ua = "div", Ja = {
  class: "d-flex align-items-center gap-2"
}, _a = [
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
], Xa = {
  tagName: Ua,
  attributes: Ja,
  children: _a
}, B = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e, o = structuredClone(Xa), n = o.children[0], s = o.children[1], r = o.children[2];
  return a.label && (n.textContent = a.label), a.id && (n.attributes.for = a.id, s.attributes.id = a.id), a.placeholder && (s.attributes.placeholder = a.placeholder), a.class && (s.attributes.class = a.class), a.name && (s.attributes.name = a.name), a.type && (s.attributes.type = a.type), a.buttonText && (r.textContent = a.buttonText), a.buttonClass && (r.attributes.class = a.buttonClass), a.buttonId && (r.attributes.id = a.buttonId), a.wrapperClass && (o.attributes.class = a.wrapperClass), a.labelClass && (n.attributes.class = a.labelClass), o;
}, Qa = {
  input: w,
  inputOnly: w,
  inputWithLabel: T,
  inputWithLabelButton: B
}, Ya = ({
  type: t = "inputWithLabel",
  options: e = {},
  inType: a,
  inOptions: o
} = {}) => {
  const n = a ?? t, s = o ?? e;
  return (Qa[n] || T)({ inOptions: s, options: s });
};
Va({
  render: Ya,
  inputOnly: w,
  inputWithLabel: T,
  inputWithLabelButton: B
});
const A = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const a = t && Object.keys(t).length > 0 ? t : e;
  return (a == null ? void 0 : a.label) === !1 || (a == null ? void 0 : a.flavour) === "inputOnly" ? w({ inOptions: a }) : (a == null ? void 0 : a.flavour) === "inputWithLabelButton" || a != null && a.button || a != null && a.buttonText ? B({ inOptions: a }) : T({ inOptions: a });
}, Za = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, to = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: Za, render: t });
}, eo = "div", ao = {
  class: "${cardClass}",
  "data-role": "form-card"
}, oo = [
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
], no = {
  tagName: eo,
  attributes: ao,
  children: oo
}, so = () => structuredClone(no), ro = "header-actions", lo = "button", j = {
  destinationRole: ro,
  template: lo
}, io = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, co = {
  button: io
}, uo = (t, e) => {
  const a = structuredClone(t), o = h(e.header.actions, co[j.template]);
  return $(a, j.destinationRole).children.push(...o), a;
}, bo = "form-body", po = {
  destinationRole: bo
}, mo = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
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
}, fo = {
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
}, yo = {
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
}, Co = {
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
}, $o = {
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
}, go = {
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
}, wo = {
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
}, No = {
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
}, xo = {
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
}, To = {
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
}, Ao = {
  buildBodyTr: mo,
  buildBodyCell: ho,
  buildRequiredField: fo,
  buildTextareaField: yo,
  buildCheckboxField: Co,
  buildInlineField: $o,
  buildInlineRequiredField: go,
  buildInlineFieldWithButton: wo,
  buildInlineRequiredFieldWithButton: No,
  buildInlineTextareaField: xo,
  buildInlineCheckboxField: To
}, Fo = (t, e, a) => {
  const o = t.map((r) => {
    var d, c, u, p, f;
    const i = ((c = (d = r.template) == null ? void 0 : d.body) == null ? void 0 : c.cell) ?? (r.required ? "buildRequiredField" : "buildBodyCell");
    let l = ((u = a.fieldTemplates) == null ? void 0 : u[i]) ?? i;
    return r.buttonText && (l = ((p = a.buttonFieldTemplates) == null ? void 0 : p[l]) ?? l), {
      ...r,
      label: r.label ?? r.title ?? r.columnName,
      type: r.type ?? "text",
      placeholder: r.placeholder ?? "",
      buttonType: r.buttonType ?? "button",
      template: { ...r.template, body: { ...(f = r.template) == null ? void 0 : f.body, cell: l } }
    };
  }), n = e[0] ?? {}, s = Object.fromEntries(o.map((r) => [
    r.columnName,
    n[r.columnName] ?? r.value ?? ""
  ]));
  return { columns: o, rows: [s] };
}, ko = (t, e, a) => {
  const o = Fo(e.columns, e.records, a.body), n = W(o.columns, o.rows, Ao), s = structuredClone(t);
  return $(s, po.destinationRole).children.push(...Array.isArray(n) ? n : [n]), s;
}, Bo = "footer-actions", So = "button", P = {
  destinationRole: Bo,
  template: So
}, Io = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, jo = {
  button: Io
}, Po = (t, e) => {
  const a = structuredClone(t), o = h(e.footer.actions, jo[P.template]);
  return $(a, P.destinationRole).children.push(...o), a;
}, J = ({ inColumns: t, inData: e, inOptions: a, columns: o, data: n, options: s } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(e) && e.length > 0 ? e : Array.isArray(n) ? n : [],
  options: a && Object.keys(a).length > 0 ? a : s ?? {}
}), vo = "bigButtonsForm", Ro = "Account details", Lo = "Update your profile information.", Eo = "", Oo = "label", Do = "stacked", Vo = "saveCancel", Go = {
  formId: vo,
  title: Ro,
  description: Lo,
  recordId: Eo,
  header: Oo,
  body: Do,
  footer: Vo
}, Wo = {
  actions: []
}, Ho = {
  actions: []
}, Ko = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, qo = {
  actions: []
}, Mo = {
  none: Wo,
  label: Ho,
  labelWithRefresh: Ko,
  labelWithId: qo
}, zo = {
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
}, Uo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Jo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, _o = {
  inline: zo,
  stacked: Uo,
  threeColumns: Jo
}, Xo = {
  actions: []
}, Qo = {
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
}, Yo = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Zo = {
  none: Xo,
  saveCancel: Qo,
  edit: Yo
}, F = (t, e, a) => {
  const o = t[e];
  if (!o) throw new RangeError("Unknown bigButtons " + a + ": " + e);
  return o;
}, _ = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const e = t["form.bigButtons"] ?? {};
  if (typeof e != "object" || e === null || Array.isArray(e))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const a = { ...Go, ...e };
  return {
    options: a,
    header: F(Mo, a.header, "header"),
    body: F(_o, a.body, "body"),
    footer: F(Zo, a.footer, "footer")
  };
}, tn = (t, e = {}) => {
  const a = J(e), o = _(a.options), n = uo(t, o), s = ko(n, a, o);
  return Po(s, o);
}, en = {
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
}, an = {
  bootstrap: en
}, on = (t, e) => {
  var o;
  const a = (o = an[e]) == null ? void 0 : o[t.header];
  if (!a) throw new RangeError("Unknown bigButtons header: " + t.header);
  return a;
}, nn = "bootstrap", sn = {
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
}, k = {
  defaultFramework: nn,
  frameworks: sn
}, rn = (t, e) => {
  const a = k.frameworks[e];
  if (!a) throw new RangeError("Unknown bigButtons framework: " + e);
  const o = a.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...a.base, ...o };
}, ln = {
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
}, cn = {
  bootstrap: ln
}, un = (t, e) => {
  const a = cn[e], o = a == null ? void 0 : a.footers[t.footer];
  if (!a) throw new RangeError("Unknown bigButtons framework: " + e);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...a.base, ...o };
}, dn = (t, e = {}) => {
  const a = _(J(e).options), { options: o } = a, n = o.framework ?? k.defaultFramework;
  if (!k.frameworks[n]) throw new RangeError("Unknown bigButtons framework: " + n);
  const r = Object.assign(
    {},
    o,
    rn(o, n),
    on(o, n),
    un(o, n)
  );
  return b(r, structuredClone(t));
}, bn = (t = {}) => {
  const e = so(), a = tn(e, t);
  return dn(a, t);
}, X = (t = {}) => {
  const e = { ...t, type: t.type ?? "form.bigButtons" };
  return N(e), bn(e);
};
to(X);
const pn = ({
  inType: t = "stacked",
  inData: e,
  inColumns: a
} = {}) => X({
  type: t,
  columns: a,
  data: e
}), mn = {
  table: S,
  tableFromSpec: S,
  select: Ba,
  selectOptionsOnly: va,
  dataList: I,
  datalist: I,
  searchInput: A,
  search: A,
  inputRow: A,
  form: pn
}, Q = (t = {}) => {
  N(t);
  const e = t == null ? void 0 : t.showLog;
  console.log("localShowLog : ", e);
  const a = t.type, o = t == null ? void 0 : t.options;
  let n = a, s = a;
  if (a.includes(".")) {
    const l = a.split(".");
    n = l[0], s = l[1];
  }
  e && console.log("localMainType : ", n, s);
  const r = mn[n];
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
Rt(Q);
const hn = ({
  inColumns: t,
  inType: e = "table",
  inData: a,
  inShowLog: o = !1,
  inOptions: n
} = {}) => Q({
  type: e,
  data: a ?? [],
  columns: t,
  showLog: o,
  options: n
}), fn = (t = {}) => {
  C(t);
  const e = t == null ? void 0 : t.showLog, a = t == null ? void 0 : t.options;
  e && console.log("first : ", t == null ? void 0 : t.options, t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const o = hn({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog,
    inOptions: a
  });
  e && console.log("spec : ", o);
  const n = V({
    jsonSpec: o,
    targetHtmlId: t.targetHtmlId,
    appendPosition: t.appendPosition,
    showLog: e
  });
  return e && console.log("dom : ", n), n;
};
et(fn);
export {
  fn as default,
  fn as render
};
