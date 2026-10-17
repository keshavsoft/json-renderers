const _ = {
  version: "v18.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, J = (e) => {
  const t = e;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof t == "function" ? t : t.render, n = typeof t == "object" ? t.getSpec : void 0;
  globalThis.ks.jsonRenderers = {
    meta: _,
    ...typeof t == "object" ? t : {},
    render: o,
    renderToDom: o,
    domMount: t == null ? void 0 : t.renderToDom,
    ...n ? { getSpec: n } : {}
  };
}, Y = ({ inConfig: e, inValue: t } = {}) => {
  const o = e, n = o ? o.type : t;
  if (n === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof n != "string")
    throw new TypeError("type must be a string");
  return !0;
}, U = ({ inConfig: e, inValue: t } = {}) => {
  const o = e, n = o ? o.targetHtmlId : t;
  if (n === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof n != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (n.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, X = ({ inConfig: e, inValue: t } = {}) => {
  const o = e, n = o ? o.data : t;
  if (n === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(n))
    throw new TypeError("data must be an Array");
  return !0;
}, Q = ({ inConfig: e, inValue: t } = {}) => {
  const o = e, n = o ? o.columns : t;
  if (n === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(n))
    throw new TypeError("columns must be an Array");
  return !0;
}, W = ({ inConfig: e, inValue: t } = {}) => {
  const o = e, n = o ? o.classToApply : t;
  if (n === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof n != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, Z = ({ inConfig: e, inValue: t } = {}) => {
  const o = e, n = o ? o.appendPosition : t;
  if (n === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof n != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, tt = ({ inConfig: e, inValue: t } = {}) => {
  const o = e, n = o ? o.showLog : t;
  if (n === void 0)
    throw new Error('Missing compulsory key: "showLog"');
  if (typeof n != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, et = "table", ot = "", nt = [], rt = [], lt = "", at = "replace", st = !1, g = {
  type: et,
  targetHtmlId: ot,
  data: nt,
  columns: rt,
  classToApply: lt,
  appendPosition: at,
  showLog: st
}, S = ({ inKey: e } = {}) => {
  const t = e;
  return t && t in g ? g[t] : { ...g };
};
Object.assign(S, g);
const $ = ({ inConfig: e, config: t } = {}) => {
  const o = e ?? t;
  if (!o || typeof o != "object" || Array.isArray(o))
    throw new TypeError("Config must be an object");
  return Y({ inConfig: o }), U({ inConfig: o }), X({ inConfig: o }), Q({ inConfig: o }), W({ inConfig: o }), Z({ inConfig: o }), tt({ inConfig: o }), !0;
};
$.getSpec = S;
$.configSpec = g;
const k = ({
  type: e = "table",
  targetHtmlId: t,
  data: o,
  columns: n,
  classToApply: l = "",
  appendPosition: r = "replace",
  showLog: s = !1
} = {}) => {
  const y = {
    type: e,
    targetHtmlId: t,
    data: o,
    columns: n,
    classToApply: l,
    appendPosition: r,
    showLog: s
  };
  return $({ inConfig: y }), y;
}, ct = {
  version: "1.15.0",
  name: "json-renderers-build"
}, it = (e) => {
  const t = e;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = typeof t == "function" ? t : t.render, n = typeof t == "object" ? t.getSpec : void 0;
  globalThis.ks.jsonRenderersBuild = {
    meta: ct,
    renderToDom: o,
    render: o,
    ...n ? { getSpec: n } : {},
    ...typeof t == "object" ? t : {}
  };
}, N = ["table", "tableFromSpec", "select", "selectOptionsOnly", "dataList", "datalist"], ut = ["table", "tableFromSpec"], F = ({ inConfig: e } = {}) => {
  const t = e;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (typeof t.type != "string" || !N.includes(t.type))
    throw console.error(`type must be one of: ${N.join(", ")}`), new Error(`type must be one of: ${N.join(", ")}`);
  if (t.showLog !== void 0 && typeof t.showLog != "boolean")
    throw console.error("showLog must be a boolean"), new TypeError("showLog must be a boolean");
  if (!Array.isArray(t.data))
    throw console.error("data must be an Array"), new TypeError("data must be an Array");
  if (ut.includes(t.type)) {
    if (!Array.isArray(t.columns))
      throw console.error("columns must be an array for table rendering"), new TypeError("columns must be an array for table rendering");
    for (let o = 0; o < t.columns.length; o++) {
      const n = t.columns[o];
      if (!n || typeof n != "object")
        throw console.error(`columns[${o}] must be an object`), new TypeError(`columns[${o}] must be an object`);
      if (typeof n.columnName != "string" || !n.columnName.trim())
        throw console.error(`columns[${o}].columnName must be a non-empty string`), new TypeError(`columns[${o}].columnName must be a non-empty string`);
    }
    for (let o = 0; o < t.data.length; o++) {
      const n = t.data[o];
      if (!n || typeof n != "object")
        throw console.error(`data[${o}] must be an object`), new TypeError(`data[${o}] must be an object`);
    }
    if (t.columns.length > 0 && t.data.length > 0) {
      const o = t.columns.map((r) => r.columnName), n = Object.keys(t.data[0]);
      if (!o.some((r) => n.includes(r))) {
        const r = `Data alignment error: None of the columns [${o.join(", ")}] match any keys in data rows [${n.join(", ")}]`;
        throw console.error(r), new Error(r);
      }
    }
  }
  return !0;
}, dt = "table", pt = [], ft = [], bt = {}, ht = !1, b = {
  type: dt,
  columns: pt,
  data: ft,
  options: bt,
  showLog: ht
}, gt = [
  {
    columnName: "Name",
    width: "150px"
  },
  {
    columnName: "Designation",
    width: "100px"
  }
], wt = [
  {
    Name: "Keshav",
    Designation: "Founder"
  }
], mt = {
  columns: gt,
  data: wt
}, f = {
  ...b,
  ...mt
}, j = ({
  type: e = f.type,
  data: t = f.data,
  columns: o = f.columns,
  options: n = f.options,
  showLog: l = f.showLog
} = {}) => {
  const a = {
    type: e,
    data: t,
    columns: o,
    options: n,
    showLog: l
  };
  return F({ inConfig: a }), a;
};
Object.assign(j, f);
j.toJSON = () => structuredClone(f);
const yt = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Tt = (e, t) => {
  if (!yt(e)) return;
  let o = {};
  for (const [n, l] of Object.entries(e))
    o[n] = m(t, l);
  return o;
}, Ct = (e, t) => {
  const o = structuredClone(e);
  return Array.isArray(o) ? o.map((l) => m(t, l)) : void 0;
}, v = (e, t, o) => {
  if (e === "${agg:count}" && "rowData" in t) {
    if (Array.isArray(t == null ? void 0 : t.rowData))
      return t == null ? void 0 : t.rowData.length;
  } else
    return e === "${rowValue}" && "rowData" in t ? t == null ? void 0 : t.rowData : e.replace(/\$\{(\w+)\}/g, (n, l) => t[l] !== void 0 ? t[l] : n);
}, At = (e, t) => v(e, t), Nt = (e, t, o) => {
  if (t == null)
    throw new TypeError("inTemplate is required");
  if (typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inElement must be an object");
  return !0;
}, m = (e, t, o) => {
  const n = e, l = t;
  Nt(n, l);
  const r = structuredClone(l);
  return typeof r == "string" ? v(r, n) : (r === null || typeof r != "object" || ("textContent" in r && (r.textContent = At(r == null ? void 0 : r.textContent, n)), "attributes" in r && (r.attributes = Tt(r == null ? void 0 : r.attributes, n)), "children" in r && (r.children = Ct(r == null ? void 0 : r.children, n))), r);
}, xt = (e, t) => {
  if (!Array.isArray(e))
    throw new TypeError("inSource must be an Array");
  if (e.length === 0)
    throw new Error("inSource cannot be empty");
  for (let o = 0; o < e.length; o++)
    if (!e[o] || typeof e[o] != "object")
      throw new TypeError(`inSource[${o}] must be an object`);
  if (!t || typeof t != "object" && typeof t != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, C = (e, t) => {
  const o = e, n = t;
  return xt(o, n), o.map((l) => m(l, n));
}, St = (e, t) => e.map((n) => ({
  ...n,
  rowData: t[n.columnName]
})), $t = (e, t, o) => {
  var l, r, s, c, i, u;
  if (!Array.isArray(e))
    throw new TypeError("inColumns must be an Array");
  if (e.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let a = 0; a < e.length; a++) {
    const d = e[a];
    if (!d || typeof d != "object")
      throw new TypeError(`inColumns[${a}] must be an object`);
    if (typeof d.columnName != "string" || !d.columnName.trim())
      throw new TypeError(`inColumns[${a}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(t))
    throw new TypeError("inData must be an Array");
  for (let a = 0; a < t.length; a++) {
    const d = t[a];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${a}] must be an object`);
  }
  if (!o || typeof o != "object" || Array.isArray(o))
    throw new TypeError("inSpec must be an object");
  const n = ((s = (r = (l = e[0]) == null ? void 0 : l.template) == null ? void 0 : r.body) == null ? void 0 : s.tr) || "buildBodyTr";
  if (!(n in o))
    throw new Error(`Row template "${n}" not found in inSpec`);
  for (let a = 0; a < e.length; a++) {
    const d = e[a], p = ((i = (c = d.template) == null ? void 0 : c.body) == null ? void 0 : i.cell) || ((u = d.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(p in o))
      throw new Error(`Cell template "${p}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, jt = (e, t) => e.map((n) => {
  var c, i, u;
  const l = ((i = (c = n.template) == null ? void 0 : c.body) == null ? void 0 : i.cell) || ((u = n.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", r = t[l];
  return m(n, r);
}), Lt = (e, t, o) => {
  var u, a, d;
  $t(e, t, o);
  const n = e, l = t, r = o, s = ((d = (a = (u = n[0]) == null ? void 0 : u.template) == null ? void 0 : a.body) == null ? void 0 : d.tr) || "buildBodyTr", c = r[s];
  return l.map((p) => {
    const A = m(p, c), y = St(n, p), q = jt(y, r);
    return A.children = q, A;
  });
}, L = (e, t) => {
  var o;
  if (((o = e == null ? void 0 : e.attributes) == null ? void 0 : o["data-role"]) === t) return e;
  for (const n of (e == null ? void 0 : e.children) ?? []) {
    const l = L(n, t);
    if (l) return l;
  }
  return null;
}, Et = (e, t) => {
  const o = e[t.fileName], n = t.dataRole ? L(o, t.dataRole) : o;
  return (t.filePath ?? []).reduce((l, r) => l[r], n);
}, Dt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Pt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Ot = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, kt = {
  tagName: "td",
  children: [
    {
      tagName: "input",
      attributes: {
        type: "text",
        placeholder: "enter ${columnName}",
        name: "${columnName}",
        class: "form-control"
      }
    }
  ]
}, Ft = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, vt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, It = {
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
}, Ht = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Rt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Mt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, E = {
  buildBodyTr: Dt,
  buildColGroup: Pt,
  buildHeader: Ot,
  buildFooter: kt,
  buildBodyCell: Ft,
  button: vt,
  buttonCell: It,
  buildOption: Ht,
  buildSelect: Rt,
  buildDataList: Mt
}, Vt = "table", Bt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Gt = [
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
], I = {
  tagName: Vt,
  attributes: Bt,
  children: Gt
}, Kt = [
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
], zt = [
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
], T = (e) => Array.isArray(e) ? e : [e], D = {
  set: (e, t, o) => {
    e[t] = o;
  },
  push: (e, t, o) => {
    e[t].push(...T(o));
  },
  unshift: (e, t, o) => {
    e[t].unshift(...T(o));
  },
  pushToRows: (e, t, o) => {
    e[t].forEach((n) => {
      n.children.push(...structuredClone(T(o)));
    });
  },
  unshiftToRows: (e, t, o) => {
    e[t].forEach((n) => {
      n.children.unshift(...structuredClone(T(o)));
    });
  },
  unshiftSerialToRows: (e, t, o) => {
    e[t].forEach((n, l) => {
      const r = structuredClone(o);
      r.textContent = l + 1, n.children.unshift(r);
    });
  }
}, H = (e, t, o) => {
  const n = t.dataRole ? L(e[t.fileName], t.dataRole) : e[t.fileName], l = [...t.filePath ?? []], r = l.pop(), s = l.reduce((i, u) => i[u], n);
  (D[t.action] || D.set)(s, r, o);
}, h = { data: {}, base: I, spec: E }, R = {
  fromCollection: C,
  twoDimensional: Lt
}, qt = (e) => {
  e.forEach((t) => {
    const o = Et(h, t.sourcePath);
    if (o) {
      const n = R[t.func](o, E[t.templateKey]);
      H(h, t.destinationPath, n);
    } else
      console.log("   !instruction : ", t), console.log("   !source : ", o);
  });
}, _t = (e) => {
  e.forEach((t) => {
    const o = R[t.func](
      h.data.columns,
      h.data.data,
      E
    );
    H(h, t.destinationPath, o);
  });
}, Jt = (e) => (h.data = e, qt(Kt), _t(zt), I), P = ({
  inData: e,
  inColumns: t,
  footer: o = [],
  options: n
} = {}) => Jt({
  columns: t,
  data: e
}), Yt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Ut = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Xt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, w = {
  buildOption: Yt,
  buildSelect: Ut,
  buildDataList: Xt
}, Qt = ({ inData: e = [] } = {}) => {
  const t = (e ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), o = structuredClone(w.buildSelect);
  return o.children = C(t, w.buildOption), o;
}, Wt = ({ inData: e = [], inColumns: t = [] } = {}) => t.map((n) => {
  const l = structuredClone(w.buildOption);
  l.textContent = l.textContent.replace("rowValue", n.columnName), l.attributes.value = l.attributes.value.replace("rowValue", n.columnName);
  const r = C(e, l);
  return console.log("createdArray : ", r[0], l), r;
}), O = ({ inData: e = [] } = {}) => {
  const t = (e ?? []).map(
    (n) => typeof n == "object" && n !== null ? n : { rowValue: n }
  ), o = structuredClone(w.buildDataList);
  return o.children = C(t, w.buildOption), o;
}, Zt = {
  table: P,
  tableFromSpec: P,
  select: Qt,
  selectOptionsOnly: Wt,
  dataList: O,
  datalist: O
}, M = ({
  type: e = b.type,
  data: t = b.data,
  columns: o = b.columns,
  options: n = b.options,
  showLog: l = b.showLog
} = {}) => {
  const a = {
    type: e,
    data: t,
    columns: o,
    options: n,
    showLog: l
  };
  F({ inConfig: a });
  const d = Zt[a.type];
  if (!d)
    throw new Error(`Renderer for type "${a.type}" not found.`);
  const p = d({
    inColumns: a.columns,
    inData: a.data,
    options: a.options
  });
  return a.showLog && console.log("json-renderers-build output:", p), p;
};
it({ render: M, getSpec: j, spec: f });
const V = ({
  inColumns: e,
  inType: t = "table",
  inData: o,
  inShowLog: n = !1
} = {}) => M({
  type: t,
  data: o ?? [],
  columns: e,
  showLog: n
}), te = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, ee = ({ inFuncDefinition: e, inReviewSpec: t } = {}) => {
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: te,
    buildSpecElement: e,
    reviewSpec: t
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, oe = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : typeof e == "object" && (e.nodeType === 3 || e.tagName === "#text" || !e.tagName && (e.textContent !== void 0 || e.text !== void 0)) ? document.createTextNode(e.textContent ?? e.text ?? "") : G(e), B = (e) => Array.isArray(e) ? e.map(oe).flat(1 / 0).filter(Boolean) : [], ne = (e) => (e == null, e), re = "http://www.w3.org/2000/svg", le = /* @__PURE__ */ new Set([
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
]), ae = ({ inTagName: e }) => {
  const t = e == null ? void 0 : e.toLowerCase();
  if (!t) return null;
  if (t === "checkbox") {
    const o = document.createElement("input");
    return o.type = "checkbox", o;
  }
  return le.has(t) ? document.createElementNS(re, t) : document.createElement(t);
}, se = ({ inElement: e, inTextContent: t }) => (!e || t === void 0 || t === null || (e.textContent = t), e), ce = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), ie = "http://www.w3.org/1999/xlink", ue = ({ inElement: e, inAttributes: t }) => {
  const o = e, n = t;
  if (!o || !n || typeof n != "object")
    return o;
  const l = typeof SVGElement < "u" ? o instanceof SVGElement : o.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(n).forEach(([r, s]) => {
    if (r === "class") {
      l ? o.setAttribute("class", String(s)) : o.className = s;
      return;
    }
    if (r === "xlink:href" || r === "href") {
      if (s != null) {
        const c = String(s);
        if (l)
          try {
            o.setAttributeNS(ie, "href", c);
          } catch {
          }
        o.setAttribute("href", c), o.setAttribute("xlink:href", c);
      }
      return;
    }
    if (typeof s == "boolean") {
      s ? o.setAttribute(r, "") : o.removeAttribute(r);
      return;
    }
    s != null && o.setAttribute(r, String(s));
  }), o;
}, de = ({ inElement: e, inClassList: t }) => {
  if (!e || !t) return e;
  const o = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((n) => typeof n == "string" && n.trim()) : [];
  return o.length && e.classList.add(...o), e;
}, pe = (e) => {
  if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
  const t = ae({ inTagName: e.tagName });
  if (!t) return null;
  if (se({
    inElement: t,
    inTextContent: ne(e.textContent),
    inTagName: e.tagName
  }), ce({
    inElement: t,
    inProperties: e.properties
  }), ue({
    inElement: t,
    inAttributes: e.attributes
  }), de({
    inElement: t,
    inClassList: e.classList
  }), Array.isArray(e.children)) {
    const o = B(e.children);
    o.length && t.append(...o);
  }
  return t;
}, G = (e) => e == null ? null : typeof Node < "u" && e instanceof Node ? e : Array.isArray(e) ? B(e) : typeof e == "object" ? pe(e) : typeof e == "string" || typeof e == "number" ? document.createTextNode(String(e)) : null, fe = "./tags.schema.json", be = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, he = {
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
}, ge = {
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
}, we = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, me = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, ye = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Te = {
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
}, Ce = {
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
}, Ae = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Ne = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, xe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Se = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, $e = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, je = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, Le = {
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
}, Ee = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, De = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Pe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, Oe = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, ke = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, Fe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, ve = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, Ie = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, He = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, Re = {
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
}, Me = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, Ve = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, Be = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, Ge = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Ke = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, ze = {
  $schema: fe,
  div: be,
  input: he,
  checkbox: ge,
  colgroup: we,
  col: me,
  label: ye,
  form: Te,
  select: Ce,
  p: Ae,
  h1: Ne,
  h2: xe,
  span: Se,
  img: $e,
  button: je,
  table: Le,
  thead: Ee,
  tbody: De,
  tfoot: Pe,
  tr: Oe,
  th: ke,
  td: Fe,
  datalist: ve,
  option: Ie,
  header: He,
  a: Re,
  i: Me,
  small: Ve,
  ul: Be,
  li: Ge,
  hr: Ke
}, x = ({ inSpec: e }) => {
  const t = e;
  if (!t) return [];
  if (Array.isArray(t))
    return t.flatMap((n) => x({ inSpec: n }));
  if (typeof t != "object") return [];
  const o = [];
  return typeof t.tagName == "string" && t.tagName.trim().length > 0 && o.push(t.tagName.toLowerCase()), Array.isArray(t.children) && t.children.length > 0 && t.children.forEach((n) => {
    const l = x({ inSpec: n });
    o.push(...l);
  }), o;
}, qe = ({ inTagsFound: e, inAllowedTags: t }) => {
  const o = e ?? [], n = t ?? {}, l = new Set(
    Object.keys(n).filter((a) => a !== "$schema").map((a) => a.toLowerCase())
  ), r = {}, s = [], c = [];
  o.forEach((a) => {
    r[a] = (r[a] || 0) + 1, l.has(a) ? s.includes(a) || s.push(a) : c.includes(a) || c.push(a);
  });
  const i = o.length, u = c.length === 0;
  return {
    totalTags: i,
    tagCounts: r,
    uniqueTags: Object.keys(r),
    recognizedTags: s,
    unrecognizedTags: c,
    areAllTagsPresent: u
  };
}, _e = ({ inSpec: e, inTags: t = ze } = {}) => {
  const o = e, n = t, l = x({ inSpec: o }), r = qe({
    inTagsFound: l,
    inAllowedTags: n
  });
  return {
    areAllTagsPresent: r.areAllTagsPresent,
    totalTags: r.totalTags,
    tagCounts: r.tagCounts,
    uniqueTags: r.uniqueTags,
    recognizedTags: r.recognizedTags,
    unrecognizedTags: r.unrecognizedTags
  };
}, K = (e = {}) => {
  const t = (e == null ? void 0 : e.spec) ?? (e == null ? void 0 : e.inSpec) ?? e;
  return G(t);
};
ee({
  inFuncDefinition: K,
  inReviewSpec: _e
});
const z = ({
  inSpec: e,
  inTargetHtmlId: t,
  inAppendPosition: o,
  inShowLog: n = !1
} = {}) => {
  const l = e, r = t, s = o, c = n, i = K(l);
  c && console.log("renderToDom 1 (content):", i);
  const u = document.getElementById(r);
  return u ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? s === "prepend" ? u.prepend(...i) : u.append(...i) : s === "prepend" ? u.prepend(i) : (u.innerHTML = "", u.append(i)), c && console.log("renderToDom 2 (mounted):", u), u) : null;
}, Je = (e = {}) => {
  const t = k(e);
  (t == null ? void 0 : t.showLog) && console.log("first : ", t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const n = V({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog
  });
  return z({
    inSpec: n,
    inTargetHtmlId: t.targetHtmlId,
    inAppendPosition: t.appendPosition,
    inShowLog: t.showLog
  });
};
J({ render: Je, getSpec: S, validateConfig: k, buildSpec: V, renderToDom: z });
export {
  V as buildSpec,
  Je as default,
  S as getSpec,
  Je as render,
  z as renderToDom,
  k as validateConfig
};
