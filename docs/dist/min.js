const it = {
  version: "v19.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, ct = (t) => {
  const a = t;
  typeof globalThis > "u" || !a || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: it,
    render: a
  });
}, ut = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.type;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, dt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.data;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, bt = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.columns;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, pt = (t) => {
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
  return ut(a), dt(a), bt(a), pt(a), !0;
}, mt = (t) => {
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
}, ht = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object")
    throw new TypeError("Config must be an object");
  const e = a.appendPosition;
  if (e === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof e != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, ft = (t) => {
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
  return mt(a), ht(a), ft(a), !0;
}, yt = "table", Ct = "", wt = [], $t = [], gt = "", Nt = "replace", Tt = !1, $ = {
  type: yt,
  targetHtmlId: Ct,
  data: wt,
  columns: $t,
  classToApply: gt,
  appendPosition: Nt,
  showLog: Tt
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
const xt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, Pt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: xt,
    render: t
  });
}, At = (t) => typeof t == "object" && t !== null && !Array.isArray(t), It = (t, a) => {
  if (!At(t)) return;
  let e = {};
  for (const [o, n] of Object.entries(t))
    e[o] = p(a, n);
  return e;
}, kt = (t, a) => {
  const e = structuredClone(t);
  return Array.isArray(e) ? e.map((n) => p(a, n)) : void 0;
}, z = (t, a, e) => {
  if (t === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : t.replace(/\$\{(\w+)\}/g, (o, n) => a[n] !== void 0 ? a[n] : o);
}, Bt = (t, a) => z(t, a), Ft = (t, a, e) => {
  if (e && console.log("inElement : ", t), e && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, St = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, jt = (t) => {
  var a, e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = t), (e = globalThis.ks).transformerFuncs ?? (e.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: St,
    applyTemplate: t
  });
}, p = (t, a, e) => {
  const o = t, n = a;
  Ft(o, n, e);
  const s = structuredClone(n);
  return typeof s == "string" ? z(s, o) : (s === null || typeof s != "object" || ("textContent" in s && (s.textContent = Bt(s == null ? void 0 : s.textContent, o)), "attributes" in s && (s.attributes = It(s == null ? void 0 : s.attributes, o)), "children" in s && (s.children = kt(s == null ? void 0 : s.children, o))), s);
};
jt(p);
const Rt = (t, a) => {
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
  return Rt(e, o), e.map((n) => p(n, o));
}, vt = (t, a) => t.map((o) => ({
  ...o,
  rowData: a[o.columnName]
})), Et = (t, a, e) => {
  var n, s, r, i, l, c;
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
  if (!Array.isArray(a))
    throw new TypeError("inData must be an Array");
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${u}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const o = ((r = (s = (n = t[0]) == null ? void 0 : n.template) == null ? void 0 : s.body) == null ? void 0 : r.tr) || "buildBodyTr";
  if (!(o in e))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let u = 0; u < t.length; u++) {
    const d = t[u], h = ((l = (i = d.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((c = d.template) == null ? void 0 : c.bodyCell) || "buildBodyCell";
    if (!(h in e))
      throw new Error(`Cell template "${h}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, Ot = (t, a) => t.map((o) => {
  var i, l, c;
  const n = ((l = (i = o.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((c = o.template) == null ? void 0 : c.bodyCell) || "buildBodyCell", s = a[n];
  return p(o, s);
}), N = (t, a, e) => {
  var c, u, d;
  Et(t, a, e);
  const o = t, n = a, s = e, r = ((d = (u = (c = o[0]) == null ? void 0 : c.template) == null ? void 0 : u.body) == null ? void 0 : d.tr) || "buildBodyTr", i = s[r];
  return n.map((h) => {
    const w = p(h, i), rt = vt(o, h), lt = Ot(rt, s);
    return w.children = lt, w;
  });
}, Dt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Lt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Kt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Vt = {
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
}, Ht = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Mt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Wt = {
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
}, qt = {
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
}, Gt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, zt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Ut = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, Jt = {
  tagName: "td",
  children: []
}, b = {
  buildBodyTr: Dt,
  buildColGroup: Lt,
  buildHeader: Kt,
  buildFooter: Vt,
  buildBodyCell: Ht,
  button: Mt,
  buttonCell: Wt,
  optionsButtonCell: qt,
  buildOption: Gt,
  buildSelect: zt,
  buildDataList: Ut,
  emptyCell: Jt
}, _t = "table", Xt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Qt = [
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
], Yt = {
  tagName: _t,
  attributes: Xt,
  children: Qt
}, Zt = [
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
], te = [
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
}, ee = (t, a) => {
  const e = t[a.fileName], o = a.dataRole ? C(e, a.dataRole) : e;
  return (a.filePath ?? []).reduce((n, s) => n[s], o);
}, A = (t) => Array.isArray(t) ? t : [t], U = (t, a, e) => {
  t[a] = e;
}, ae = (t, a, e) => {
  t[a].push(...A(e));
}, oe = (t, a, e) => {
  t[a].unshift(...A(e));
}, ne = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.push(...structuredClone(A(e)));
  });
}, se = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.unshift(...structuredClone(A(e)));
  });
}, re = (t, a, e) => {
  t[a].forEach((o, n) => {
    const s = structuredClone(e);
    s.textContent = n + 1, o.children.unshift(s);
  });
}, le = {
  set: U,
  push: ae,
  unshift: oe,
  pushToRows: ne,
  unshiftToRows: se,
  unshiftSerialToRows: re
}, ie = (t, a) => {
  const e = a.dataRole ? C(t[a.fileName], a.dataRole) : t[a.fileName], o = [...a.filePath ?? []], n = o.pop();
  return { parent: o.reduce((r, i) => r[i], e), key: n };
}, J = (t, a, e) => {
  const { parent: o, key: n } = ie(t, a);
  (le[a.action] || U)(o, n, e);
}, ce = (t, a, e) => {
  var s, r;
  const o = !!((s = t.sourcePath) != null && s.fileName && Array.isArray((r = t.sourcePath) == null ? void 0 : r.filePath)), n = `structure/sourcePath: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, ue = (t, a, e) => {
  var s, r;
  const o = !!((s = t.destinationPath) != null && s.fileName && Array.isArray((r = t.destinationPath) == null ? void 0 : r.filePath)), n = `structure/destinationPath: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, de = (t, a, e) => {
  const o = t.templateKey === void 0 || typeof t.templateKey == "string" && t.templateKey.length > 0, n = `structure/templateKey: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, be = (t, a, e) => {
  const o = typeof t.func == "string" && t.func.length > 0, n = `structure/func: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, pe = (t, a, e) => [
  ce(t, a, e),
  ue(t, a, e),
  de(t, a, e),
  be(t, a, e)
].every(Boolean), me = (t, a, e, o) => {
  const n = typeof a[t.func] == "function", s = `references/func (${t.func}): ${n ? "passed" : "failed"}`;
  return o.push(s), e && console.log(s), n;
}, he = (t, a, e, o) => {
  const n = t.templateKey === void 0 || Object.hasOwn(a, t.templateKey), s = `references/templateKey${t.templateKey === void 0 ? " (not used)" : ` (${t.templateKey})`}: ${n ? "passed" : "failed"}`;
  return o.push(s), e && console.log(s), n;
}, fe = (t, a, e, o, n) => {
  const s = me(t, a, o, n), r = he(t, e, o, n);
  return s && r;
}, _ = (t, a, e, o, n) => pe(t, o, n) ? fe(t, a, e, o, n) : !1, ye = (t, a, e, o, n, s) => {
  if (!_(t, e, o, n, s)) return;
  const r = n, i = o, l = t.templateKey, c = i[l];
  r && console.log("singleInstruction ; ", l, c);
  const u = ee(a, t.sourcePath), d = e[t.func](u, c);
  J(a, t.destinationPath, d);
}, f = (t, a, e, o, n, s) => {
  t.forEach((r) => {
    ye(r, a, e, o, n, s);
  });
}, Ce = (t, a, e, o, n, s) => {
  if (!_(t, e, o, n, s)) return;
  const r = e[t.func](
    a.data.columns,
    a.data.data,
    o
  );
  J(a, t.destinationPath, r);
}, S = (t, a, e, o, n, s) => {
  t.forEach((r) => {
    Ce(r, a, e, o, n, s);
  });
}, we = [
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
], $e = [
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
], R = { applyTemplate: p }, ge = (t = {}, a = {}, e = !1, o = []) => {
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
  f(we, i, R, b, e, o);
  const l = C(n, "table-footer-row");
  return l && Array.isArray(l.children) && l.children.length > 0 && f($e, i, R, b, e, o), n;
}, Ne = [
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
], Te = [
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
], v = { applyTemplate: p }, xe = (t = {}, a = {}, e = !1, o = []) => {
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
  f(Ne, i, v, b, e, o);
  const l = C(n, "table-footer-row");
  return l && Array.isArray(l.children) && l.children.length > 0 && f(Te, i, v, b, e, o), n;
}, X = ({ inOptions: t = {}, inBase: a, showLog: e = !1, returnLog: o = [] }) => {
  const n = t, s = a;
  return (n.showSerial || n.serial) && ge(s, n.serial || {}, e, o), (n.showOptions || n.options) && xe(s, n.options || {}, e, o), s;
}, E = { fromCollection: m, twoDimensional: N }, Pe = (t = {}, a = !1, e = []) => {
  const o = t, n = o.columns || [], s = o.data || [], r = o.options, i = structuredClone(Yt), l = {
    data: {
      columns: n,
      data: s
    },
    base: i,
    spec: b
  };
  return f(Zt, l, E, b, a, e), S(te, l, E, b, a, e), X({ inOptions: r, inBase: i }), i;
}, Ae = "table", Ie = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ke = [
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
], Q = {
  tagName: Ae,
  attributes: Ie,
  children: ke
}, Be = [
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
], O = { data: {}, base: Q, spec: b }, Fe = { fromCollection: m }, Se = (t, a = !1, e = []) => (O.data = t, f(Be, O, Fe, b, a, e), Q), je = [], Y = {
  children: je
}, Re = [
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
], D = { data: {}, base: Y, spec: b }, ve = { twoDimensional: N }, Ee = (t, a = !1, e = []) => (D.data = t, S(Re, D, ve, b, a, e), Y.children), Oe = "table", De = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Le = [
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
], Ke = {
  tagName: Oe,
  attributes: De,
  children: Le
}, Ve = [
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
], He = [
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
], L = { fromCollection: m, twoDimensional: N }, Me = (t = {}, a = !1, e = []) => {
  const o = t, n = o.inColumns || o.columns || [], s = o.inData || o.data || [], r = o.inOptions || o.options || {}, i = structuredClone(Ke), l = {
    data: {
      columns: n,
      data: s
    },
    base: i,
    spec: b
  };
  return f(Ve, l, L, b, a, e), S(He, l, L, b, a, e), X({ inOptions: r, inBase: i }), i;
}, We = [], T = {
  children: We
}, qe = [
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
], K = { data: {}, base: T, spec: b }, Ge = { fromCollection: m, twoDimensional: N }, ze = (t, a = !1, e = []) => (K.data = t, f(qe, K, Ge, b, a, e), T == null ? void 0 : T.children), Ue = {
  simple: Pe,
  headerOnly: Se,
  bodyOnly: Ee,
  withFooter: Me,
  footerOnly: ze
}, V = ({
  inData: t,
  inColumns: a,
  inType: e,
  footer: o = [],
  inOptions: n,
  inShowLog: s
} = {}) => {
  const r = e, i = Ue[r], l = n, c = s;
  return c && console.log("table : ", r, l), i({
    columns: a,
    data: t,
    options: l,
    showLog: c
  });
}, Je = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), _e = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Xe = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Qe = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, y = {
  buildOption: _e,
  buildSelect: Xe,
  buildDataList: Qe
}, Ye = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, Ze = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(y.buildSelect);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const n = Ye(e, y.buildOption);
  return o.children = m(t, n), o;
}, ta = ({ data: t, columns: a }) => a.map((e) => Ze(t, e)), ea = (t = {}) => {
  const { data: a, columns: e } = Je(t);
  return ta({ data: a, columns: e });
}, aa = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), oa = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, na = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = oa(e, y.buildOption);
  return m(t, o);
}, sa = ({ data: t, columns: a }) => a.map((e) => na(t, e)), ra = (t = {}) => {
  const { data: a, columns: e } = aa(t);
  return sa({ data: a, columns: e });
}, la = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), ia = (t, a = y.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, ca = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(y.buildDataList);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const n = ia(e, y.buildOption);
  return o.children = m(t, n), o;
}, ua = ({ data: t, columns: a }) => a.map((e) => ca(t, e)), H = (t = {}) => {
  const { data: a, columns: e } = la(t);
  return ua({ data: a, columns: e });
}, da = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, ba = (t) => {
  const a = t;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: da,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, pa = "input", ma = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, ha = {
  tagName: pa,
  attributes: ma
}, x = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(ha);
  return e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.id && (o.attributes.id = e.id), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.value && (o.attributes.value = e.value), o;
}, fa = "div", ya = {
  class: "d-flex align-items-center gap-2"
}, Ca = [
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
], wa = {
  tagName: fa,
  attributes: ya,
  children: Ca
}, I = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(wa), n = o.children[0], s = o.children[1];
  return e.label && (n.textContent = e.label), e.id && (n.attributes.for = e.id, s.attributes.id = e.id), e.placeholder && (s.attributes.placeholder = e.placeholder), e.class && (s.attributes.class = e.class), e.name && (s.attributes.name = e.name), e.type && (s.attributes.type = e.type), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (n.attributes.class = e.labelClass), o;
}, $a = "div", ga = {
  class: "d-flex align-items-center gap-2"
}, Na = [
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
], Ta = {
  tagName: $a,
  attributes: ga,
  children: Na
}, j = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(Ta), n = o.children[0], s = o.children[1], r = o.children[2];
  return e.label && (n.textContent = e.label), e.id && (n.attributes.for = e.id, s.attributes.id = e.id), e.placeholder && (s.attributes.placeholder = e.placeholder), e.class && (s.attributes.class = e.class), e.name && (s.attributes.name = e.name), e.type && (s.attributes.type = e.type), e.buttonText && (r.textContent = e.buttonText), e.buttonClass && (r.attributes.class = e.buttonClass), e.buttonId && (r.attributes.id = e.buttonId), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (n.attributes.class = e.labelClass), o;
}, xa = {
  input: x,
  inputOnly: x,
  inputWithLabel: I,
  inputWithLabelButton: j
}, Pa = ({
  type: t = "inputWithLabel",
  options: a = {},
  inType: e,
  inOptions: o
} = {}) => {
  const n = e ?? t, s = o ?? a;
  return (xa[n] || I)({ inOptions: s, options: s });
};
ba({
  render: Pa,
  inputOnly: x,
  inputWithLabel: I,
  inputWithLabelButton: j
});
const k = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? x({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? j({ inOptions: e }) : I({ inOptions: e });
}, Aa = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, Ia = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: Aa, render: t });
}, ka = "div", Ba = {
  class: "${cardClass}",
  "data-role": "form-card"
}, Fa = [
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
], Sa = {
  tagName: ka,
  attributes: Ba,
  children: Fa
}, ja = () => structuredClone(Sa), Ra = "header-actions", va = "button", M = {
  destinationRole: Ra,
  template: va
}, Ea = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Oa = {
  button: Ea
}, Da = (t, a) => {
  const e = structuredClone(t), o = m(a.header.actions, Oa[M.template]);
  return C(e, M.destinationRole).children.push(...o), e;
}, La = "form-body", Ka = {
  destinationRole: La
}, Va = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, Ha = {
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
}, Ma = {
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
}, Wa = {
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
}, qa = {
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
}, Ga = {
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
}, za = {
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
}, Ua = {
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
}, Ja = {
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
}, _a = {
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
}, Xa = {
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
}, Qa = {
  buildBodyTr: Va,
  buildBodyCell: Ha,
  buildRequiredField: Ma,
  buildTextareaField: Wa,
  buildCheckboxField: qa,
  buildInlineField: Ga,
  buildInlineRequiredField: za,
  buildInlineFieldWithButton: Ua,
  buildInlineRequiredFieldWithButton: Ja,
  buildInlineTextareaField: _a,
  buildInlineCheckboxField: Xa
}, Ya = (t, a, e) => {
  const o = t.map((r) => {
    var c, u, d, h, w;
    const i = ((u = (c = r.template) == null ? void 0 : c.body) == null ? void 0 : u.cell) ?? (r.required ? "buildRequiredField" : "buildBodyCell");
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
}, Za = (t, a, e) => {
  const o = Ya(a.columns, a.records, e.body), n = N(o.columns, o.rows, Qa), s = structuredClone(t);
  return C(s, Ka.destinationRole).children.push(...Array.isArray(n) ? n : [n]), s;
}, to = "footer-actions", eo = "button", W = {
  destinationRole: to,
  template: eo
}, ao = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, oo = {
  button: ao
}, no = (t, a) => {
  const e = structuredClone(t), o = m(a.footer.actions, oo[W.template]);
  return C(e, W.destinationRole).children.push(...o), e;
}, Z = ({ inColumns: t, inData: a, inOptions: e, columns: o, data: n, options: s } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(n) ? n : [],
  options: e && Object.keys(e).length > 0 ? e : s ?? {}
}), so = "bigButtonsForm", ro = "Account details", lo = "Update your profile information.", io = "", co = "label", uo = "stacked", bo = "saveCancel", po = {
  formId: so,
  title: ro,
  description: lo,
  recordId: io,
  header: co,
  body: uo,
  footer: bo
}, mo = {
  actions: []
}, ho = {
  actions: []
}, fo = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, yo = {
  actions: []
}, Co = {
  none: mo,
  label: ho,
  labelWithRefresh: fo,
  labelWithId: yo
}, wo = {
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
}, $o = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, go = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, No = {
  inline: wo,
  stacked: $o,
  threeColumns: go
}, To = {
  actions: []
}, xo = {
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
}, Po = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, Ao = {
  none: To,
  saveCancel: xo,
  edit: Po
}, B = (t, a, e) => {
  const o = t[a];
  if (!o) throw new RangeError("Unknown bigButtons " + e + ": " + a);
  return o;
}, tt = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = t["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const e = { ...po, ...a };
  return {
    options: e,
    header: B(Co, e.header, "header"),
    body: B(No, e.body, "body"),
    footer: B(Ao, e.footer, "footer")
  };
}, Io = (t, a = {}) => {
  const e = Z(a), o = tt(e.options), n = Da(t, o), s = Za(n, e, o);
  return no(s, o);
}, ko = {
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
}, Bo = {
  bootstrap: ko
}, Fo = (t, a) => {
  var o;
  const e = (o = Bo[a]) == null ? void 0 : o[t.header];
  if (!e) throw new RangeError("Unknown bigButtons header: " + t.header);
  return e;
}, So = "bootstrap", jo = {
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
  defaultFramework: So,
  frameworks: jo
}, Ro = (t, a) => {
  const e = F.frameworks[a];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  const o = e.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...e.base, ...o };
}, vo = {
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
}, Eo = {
  bootstrap: vo
}, Oo = (t, a) => {
  const e = Eo[a], o = e == null ? void 0 : e.footers[t.footer];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...e.base, ...o };
}, Do = (t, a = {}) => {
  const e = tt(Z(a).options), { options: o } = e, n = o.framework ?? F.defaultFramework;
  if (!F.frameworks[n]) throw new RangeError("Unknown bigButtons framework: " + n);
  const r = Object.assign(
    {},
    o,
    Ro(o, n),
    Fo(o, n),
    Oo(o, n)
  );
  return p(r, structuredClone(t));
}, Lo = (t = {}) => {
  const a = ja(), e = Io(a, t);
  return Do(e, t);
}, et = (t = {}) => {
  const a = { ...t, type: t.type ?? "form.bigButtons" };
  return P(a), Lo(a);
};
Ia(et);
const Ko = ({
  inType: t = "stacked",
  inData: a,
  inColumns: e
} = {}) => et({
  type: t,
  columns: e,
  data: a
}), Vo = {
  table: V,
  tableFromSpec: V,
  select: ea,
  selectOptionsOnly: ra,
  dataList: H,
  datalist: H,
  searchInput: k,
  search: k,
  inputRow: k,
  form: Ko
}, at = (t = {}) => {
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
  const r = Vo[n];
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
Pt(at);
const Ho = ({
  inColumns: t,
  inType: a = "table",
  inData: e,
  inShowLog: o = !1,
  inOptions: n
} = {}) => at({
  type: a,
  data: e ?? [],
  columns: t,
  showLog: o,
  options: n
}), Mo = {
  version: "v10",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Wo = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const a = {
    meta: Mo,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = a, globalThis.ks.jsonToTag = a;
}, qo = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : nt(t), ot = (t) => Array.isArray(t) ? t.map(qo).flat(1 / 0).filter(Boolean) : [], Go = (t) => (t == null, t), zo = "http://www.w3.org/2000/svg", Uo = /* @__PURE__ */ new Set([
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
]), Jo = ({ inTagName: t }) => {
  const a = t == null ? void 0 : t.toLowerCase();
  if (!a) return null;
  if (a === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return Uo.has(a) ? document.createElementNS(zo, a) : document.createElement(a);
}, _o = ({ inElement: t, inTextContent: a }) => (!t || a === void 0 || a === null || (t.textContent = a), t), Xo = ({ inElement: t, inProperties: a }) => (t && a && typeof a == "object" && Object.assign(t, a), t), Qo = "http://www.w3.org/1999/xlink", Yo = ({ inElement: t, inAttributes: a }) => {
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
            e.setAttributeNS(Qo, "href", i);
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
}, Zo = ({ inElement: t, inClassList: a }) => {
  if (!t || !a) return t;
  const e = typeof a == "string" ? a.split(/\s+/).filter(Boolean) : Array.isArray(a) ? a.filter((o) => typeof o == "string" && o.trim()) : [];
  return e.length && t.classList.add(...e), t;
}, tn = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const a = Jo({ inTagName: t.tagName });
  if (!a) return null;
  if (_o({
    inElement: a,
    inTextContent: Go(t.textContent),
    inTagName: t.tagName
  }), Xo({
    inElement: a,
    inProperties: t.properties
  }), Yo({
    inElement: a,
    inAttributes: t.attributes
  }), Zo({
    inElement: a,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const e = ot(t.children);
    e.length && a.append(...e);
  }
  return a;
}, nt = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? ot(t) : typeof t == "object" ? tn(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, st = (t = {}) => {
  const a = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return nt(a);
};
Wo(st);
const en = ({
  inSpec: t,
  inTargetHtmlId: a,
  inAppendPosition: e,
  inShowLog: o = !1
} = {}) => {
  const n = t, s = a, r = e, i = o, l = st(n);
  i && console.log("renderToDom 1 (content):", l);
  const c = document.getElementById(s);
  return c ? (Array.isArray(l) || l instanceof NodeList || l instanceof HTMLCollection ? r === "prepend" ? c.prepend(...l) : c.append(...l) : r === "prepend" ? c.prepend(l) : (c.innerHTML = "", c.append(l)), i && console.log("renderToDom 2 (mounted):", c), c) : null;
}, an = (t = {}) => {
  g(t);
  const a = t == null ? void 0 : t.showLog, e = t == null ? void 0 : t.options;
  a && console.log("first : ", t == null ? void 0 : t.options, t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const o = Ho({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog,
    inOptions: e
  });
  return en({
    inSpec: o,
    inTargetHtmlId: t.targetHtmlId,
    inAppendPosition: t.appendPosition,
    inShowLog: t.showLog
  });
};
ct(an);
export {
  an as default,
  an as render
};
