const ct = {
  version: "v18.0.0",
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
}, T = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return dt(a), bt(a), pt(a), mt(a), !0;
}, ft = (t) => {
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
}, z = (t) => {
  const a = (t == null ? void 0 : t.inConfig) ?? t;
  if (!a || typeof a != "object" || Array.isArray(a))
    throw new TypeError("Config must be an object");
  return ft(a), ht(a), yt(a), !0;
}, Ct = "table", $t = "", gt = [], wt = [], Nt = "", xt = "replace", Tt = !1, $ = {
  type: Ct,
  targetHtmlId: $t,
  data: gt,
  columns: wt,
  classToApply: Nt,
  appendPosition: xt,
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
  return T(a), z(a), !0;
};
g.getSpec = G;
g.configSpec = $;
g.guardSpec = T;
g.guardMount = z;
const At = {
  version: "1.22.0",
  name: "json-renderers-build"
}, kt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: At,
    render: t
  });
}, It = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Ft = (t, a) => {
  if (!It(t)) return;
  let e = {};
  for (const [o, n] of Object.entries(t))
    e[o] = h(a, n);
  return e;
}, Pt = (t, a) => {
  const e = structuredClone(t);
  return Array.isArray(e) ? e.map((n) => h(a, n)) : void 0;
}, M = (t, a, e) => {
  if (t === "${agg:count}" && "rowData" in a) {
    if (Array.isArray(a == null ? void 0 : a.rowData))
      return a == null ? void 0 : a.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in a ? a == null ? void 0 : a.rowData : t.replace(/\$\{(\w+)\}/g, (o, n) => a[n] !== void 0 ? a[n] : o);
}, jt = (t, a) => M(t, a), Bt = (t, a, e) => {
  if (e && console.log("inElement : ", t), e && console.log("inTemplate : ", a), a == null)
    throw new TypeError("inTemplate is required");
  if (typeof a != "object" && typeof a != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, vt = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, St = (t) => {
  var a, e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (a = globalThis.ks).applyTemplate ?? (a.applyTemplate = t), (e = globalThis.ks).transformerFuncs ?? (e.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: vt,
    applyTemplate: t
  });
}, h = (t, a, e) => {
  const o = t, n = a;
  Bt(o, n, e);
  const r = structuredClone(n);
  return typeof r == "string" ? M(r, o) : (r === null || typeof r != "object" || ("textContent" in r && (r.textContent = jt(r == null ? void 0 : r.textContent, o)), "attributes" in r && (r.attributes = Ft(r == null ? void 0 : r.attributes, o)), "children" in r && (r.children = Pt(r == null ? void 0 : r.children, o))), r);
};
St(h);
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
}, p = (t, a) => {
  const e = t, o = a;
  return Rt(e, o), e.map((n) => h(n, o));
}, Et = (t, a) => t.map((o) => ({
  ...o,
  rowData: a[o.columnName]
})), Lt = (t, a, e) => {
  var n, r, s, l, i, u;
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
  const o = ((s = (r = (n = t[0]) == null ? void 0 : n.template) == null ? void 0 : r.body) == null ? void 0 : s.tr) || "buildBodyTr";
  if (!(o in e))
    throw new Error(`Row template "${o}" not found in inSpec`);
  for (let c = 0; c < t.length; c++) {
    const d = t[c], m = ((i = (l = d.template) == null ? void 0 : l.body) == null ? void 0 : i.cell) || ((u = d.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(m in e))
      throw new Error(`Cell template "${m}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, Dt = (t, a) => t.map((o) => {
  var l, i, u;
  const n = ((i = (l = o.template) == null ? void 0 : l.body) == null ? void 0 : i.cell) || ((u = o.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", r = a[n];
  return h(o, r);
}), w = (t, a, e) => {
  var u, c, d;
  Lt(t, a, e);
  const o = t, n = a, r = e, s = ((d = (c = (u = o[0]) == null ? void 0 : u.template) == null ? void 0 : c.body) == null ? void 0 : d.tr) || "buildBodyTr", l = r[s];
  return n.map((m) => {
    const C = h(m, l), lt = Et(o, m), it = Dt(lt, r);
    return C.children = it, C;
  });
}, Ot = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, Kt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Vt = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Wt = {
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
}, qt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Ht = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, zt = {
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
}, Gt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Mt = {
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
}, b = {
  buildBodyTr: Ot,
  buildColGroup: Kt,
  buildHeader: Vt,
  buildFooter: Wt,
  buildBodyCell: qt,
  button: Ht,
  buttonCell: zt,
  buildOption: Gt,
  buildSelect: Mt,
  buildDataList: Ut
}, Jt = "table", _t = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Xt = [
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
], U = {
  tagName: Jt,
  attributes: _t,
  children: Xt
}, Qt = [
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
], Yt = [
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
], y = (t, a) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === a) return t;
  for (const o of (t == null ? void 0 : t.children) ?? []) {
    const n = y(o, a);
    if (n) return n;
  }
  return null;
}, Zt = (t, a) => {
  const e = t[a.fileName], o = a.dataRole ? y(e, a.dataRole) : e;
  return (a.filePath ?? []).reduce((n, r) => n[r], o);
}, A = (t) => Array.isArray(t) ? t : [t], J = (t, a, e) => {
  t[a] = e;
}, te = (t, a, e) => {
  t[a].push(...A(e));
}, ee = (t, a, e) => {
  t[a].unshift(...A(e));
}, ae = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.push(...structuredClone(A(e)));
  });
}, oe = (t, a, e) => {
  t[a].forEach((o) => {
    o.children.unshift(...structuredClone(A(e)));
  });
}, ne = (t, a, e) => {
  t[a].forEach((o, n) => {
    const r = structuredClone(e);
    r.textContent = n + 1, o.children.unshift(r);
  });
}, re = {
  set: J,
  push: te,
  unshift: ee,
  pushToRows: ae,
  unshiftToRows: oe,
  unshiftSerialToRows: ne
}, se = (t, a) => {
  const e = a.dataRole ? y(t[a.fileName], a.dataRole) : t[a.fileName], o = [...a.filePath ?? []], n = o.pop();
  return { parent: o.reduce((s, l) => s[l], e), key: n };
}, _ = (t, a, e) => {
  const { parent: o, key: n } = se(t, a);
  (re[a.action] || J)(o, n, e);
}, le = (t, a, e) => {
  var r, s;
  const o = !!((r = t.sourcePath) != null && r.fileName && Array.isArray((s = t.sourcePath) == null ? void 0 : s.filePath)), n = `structure/sourcePath: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, ie = (t, a, e) => {
  var r, s;
  const o = !!((r = t.destinationPath) != null && r.fileName && Array.isArray((s = t.destinationPath) == null ? void 0 : s.filePath)), n = `structure/destinationPath: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, ce = (t, a, e) => {
  const o = t.templateKey === void 0 || typeof t.templateKey == "string" && t.templateKey.length > 0, n = `structure/templateKey: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, ue = (t, a, e) => {
  const o = typeof t.func == "string" && t.func.length > 0, n = `structure/func: ${o ? "passed" : "failed"}`;
  return e.push(n), a && console.log(n), o;
}, de = (t, a, e) => [
  le(t, a, e),
  ie(t, a, e),
  ce(t, a, e),
  ue(t, a, e)
].every(Boolean), be = (t, a, e, o) => {
  const n = typeof a[t.func] == "function", r = `references/func (${t.func}): ${n ? "passed" : "failed"}`;
  return o.push(r), e && console.log(r), n;
}, pe = (t, a, e, o) => {
  const n = t.templateKey === void 0 || Object.hasOwn(a, t.templateKey), r = `references/templateKey${t.templateKey === void 0 ? " (not used)" : ` (${t.templateKey})`}: ${n ? "passed" : "failed"}`;
  return o.push(r), e && console.log(r), n;
}, me = (t, a, e, o, n) => {
  const r = be(t, a, o, n), s = pe(t, e, o, n);
  return r && s;
}, X = (t, a, e, o, n) => de(t, o, n) ? me(t, a, e, o, n) : !1, fe = (t, a, e, o, n, r) => {
  if (!X(t, e, o, n, r)) return;
  const s = o, l = t.templateKey, i = s[l];
  console.log("templateKey ; ", l), console.log("localSpecKey ; ", i);
  const u = Zt(a, t.sourcePath), c = e[t.func](u, i);
  l === "buildFooter" && console.log("result ; ", c), _(a, t.destinationPath, c);
}, k = (t, a, e, o, n, r) => {
  t.forEach((s) => {
    fe(s, a, e, o, n, r);
  });
}, he = (t, a, e, o, n, r) => {
  if (!X(t, e, o, n, r)) return;
  const s = e[t.func](
    a.data.columns,
    a.data.data,
    o
  );
  _(a, t.destinationPath, s);
}, S = (t, a, e, o, n, r) => {
  t.forEach((s) => {
    he(s, a, e, o, n, r);
  });
}, F = { data: {}, base: U, spec: b }, E = { fromCollection: p, twoDimensional: w }, ye = (t, a = !1, e = []) => (F.data = t, k(Qt, F, E, b, a, e), S(Yt, F, E, b, a, e), U), Ce = "table", $e = {
  class: "table table-hover table-striped align-middle border mb-0"
}, ge = [
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
  tagName: Ce,
  attributes: $e,
  children: ge
}, we = [
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
], L = { data: {}, base: Q, spec: b }, Ne = { fromCollection: p }, xe = (t, a = !1, e = []) => (L.data = t, k(we, L, Ne, b, a, e), Q), Te = [], Y = {
  children: Te
}, Ae = [
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
], D = { data: {}, base: Y, spec: b }, ke = { twoDimensional: w }, Ie = (t, a = !1, e = []) => (D.data = t, S(Ae, D, ke, b, a, e), Y.children), Fe = "table", Pe = {
  class: "table table-hover table-striped align-middle border mb-0"
}, je = [
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
], Z = {
  tagName: Fe,
  attributes: Pe,
  children: je
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
], ve = [
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
], P = { data: {}, base: Z, spec: b }, O = { fromCollection: p, twoDimensional: w }, Se = (t, a = !1, e = []) => (P.data = t, k(Be, P, O, b, a, e), S(ve, P, O, b, a, e), Z), Re = [], N = {
  children: Re
}, Ee = [
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
], K = { data: {}, base: N, spec: b }, Le = { fromCollection: p, twoDimensional: w }, De = (t, a = !1, e = []) => (K.data = t, k(Ee, K, Le, b, a, e), N == null ? void 0 : N.children), Oe = {
  simple: ye,
  headerOnly: xe,
  bodyOnly: Ie,
  withFooter: Se,
  footerOnly: De
}, V = ({
  inData: t,
  inColumns: a,
  inType: e,
  footer: o = [],
  options: n,
  inShowLog: r
} = {}) => {
  const l = Oe[e];
  return l({
    columns: a,
    data: t,
    showLog: r
  });
}, Ke = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Ve = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, We = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, qe = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, f = {
  buildOption: Ve,
  buildSelect: We,
  buildDataList: qe
}, He = (t, a = f.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, ze = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(f.buildSelect);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const n = He(e, f.buildOption);
  return o.children = p(t, n), o;
}, Ge = ({ data: t, columns: a }) => a.map((e) => ze(t, e)), Me = (t = {}) => {
  const { data: a, columns: e } = Ke(t);
  return Ge({ data: a, columns: e });
}, Ue = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Je = (t, a = f.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, _e = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = Je(e, f.buildOption);
  return p(t, o);
}, Xe = ({ data: t, columns: a }) => a.map((e) => _e(t, e)), Qe = (t = {}) => {
  const { data: a, columns: e } = Ue(t);
  return Xe({ data: a, columns: e });
}, Ye = ({ inData: t = [], inColumns: a = [] } = {}) => ({
  data: t,
  columns: a
}), Ze = (t, a = f.buildOption) => {
  const e = structuredClone(a);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, ta = (t, a) => {
  const e = a == null ? void 0 : a.columnName, o = structuredClone(f.buildDataList);
  o.attributes.id = e, o.attributes["data-name"] = e;
  const n = Ze(e, f.buildOption);
  return o.children = p(t, n), o;
}, ea = ({ data: t, columns: a }) => a.map((e) => ta(t, e)), W = (t = {}) => {
  const { data: a, columns: e } = Ye(t);
  return ea({ data: a, columns: e });
}, aa = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, oa = (t) => {
  const a = t;
  if (typeof globalThis > "u" || !a) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof a == "function" ? a : a.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: aa,
    render: e,
    ...typeof a == "object" ? a : {}
  };
}, na = "input", ra = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, sa = {
  tagName: na,
  attributes: ra
}, x = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(sa);
  return e.placeholder && (o.attributes.placeholder = e.placeholder), e.class && (o.attributes.class = e.class), e.id && (o.attributes.id = e.id), e.name && (o.attributes.name = e.name), e.type && (o.attributes.type = e.type), e.value && (o.attributes.value = e.value), o;
}, la = "div", ia = {
  class: "d-flex align-items-center gap-2"
}, ca = [
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
], ua = {
  tagName: la,
  attributes: ia,
  children: ca
}, I = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(ua), n = o.children[0], r = o.children[1];
  return e.label && (n.textContent = e.label), e.id && (n.attributes.for = e.id, r.attributes.id = e.id), e.placeholder && (r.attributes.placeholder = e.placeholder), e.class && (r.attributes.class = e.class), e.name && (r.attributes.name = e.name), e.type && (r.attributes.type = e.type), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (n.attributes.class = e.labelClass), o;
}, da = "div", ba = {
  class: "d-flex align-items-center gap-2"
}, pa = [
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
], ma = {
  tagName: da,
  attributes: ba,
  children: pa
}, R = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a, o = structuredClone(ma), n = o.children[0], r = o.children[1], s = o.children[2];
  return e.label && (n.textContent = e.label), e.id && (n.attributes.for = e.id, r.attributes.id = e.id), e.placeholder && (r.attributes.placeholder = e.placeholder), e.class && (r.attributes.class = e.class), e.name && (r.attributes.name = e.name), e.type && (r.attributes.type = e.type), e.buttonText && (s.textContent = e.buttonText), e.buttonClass && (s.attributes.class = e.buttonClass), e.buttonId && (s.attributes.id = e.buttonId), e.wrapperClass && (o.attributes.class = e.wrapperClass), e.labelClass && (n.attributes.class = e.labelClass), o;
}, fa = {
  input: x,
  inputOnly: x,
  inputWithLabel: I,
  inputWithLabelButton: R
}, ha = ({
  type: t = "inputWithLabel",
  options: a = {},
  inType: e,
  inOptions: o
} = {}) => {
  const n = e ?? t, r = o ?? a;
  return (fa[n] || I)({ inOptions: r, options: r });
};
oa({
  render: ha,
  inputOnly: x,
  inputWithLabel: I,
  inputWithLabelButton: R
});
const j = ({ inOptions: t = {}, options: a = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : a;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? x({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? R({ inOptions: e }) : I({ inOptions: e });
}, ya = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, Ca = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: ya, render: t });
}, $a = "div", ga = {
  class: "${cardClass}",
  "data-role": "form-card"
}, wa = [
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
], Na = {
  tagName: $a,
  attributes: ga,
  children: wa
}, xa = () => structuredClone(Na), Ta = "header-actions", Aa = "button", q = {
  destinationRole: Ta,
  template: Aa
}, ka = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ia = {
  button: ka
}, Fa = (t, a) => {
  const e = structuredClone(t), o = p(a.header.actions, Ia[q.template]);
  return y(e, q.destinationRole).children.push(...o), e;
}, Pa = "form-body", ja = {
  destinationRole: Pa
}, Ba = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, va = {
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
}, Sa = {
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
}, Ra = {
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
}, Ea = {
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
}, La = {
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
}, Da = {
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
}, Oa = {
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
}, Ka = {
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
}, Va = {
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
}, Wa = {
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
}, qa = {
  buildBodyTr: Ba,
  buildBodyCell: va,
  buildRequiredField: Sa,
  buildTextareaField: Ra,
  buildCheckboxField: Ea,
  buildInlineField: La,
  buildInlineRequiredField: Da,
  buildInlineFieldWithButton: Oa,
  buildInlineRequiredFieldWithButton: Ka,
  buildInlineTextareaField: Va,
  buildInlineCheckboxField: Wa
}, Ha = (t, a, e) => {
  const o = t.map((s) => {
    var u, c, d, m, C;
    const l = ((c = (u = s.template) == null ? void 0 : u.body) == null ? void 0 : c.cell) ?? (s.required ? "buildRequiredField" : "buildBodyCell");
    let i = ((d = e.fieldTemplates) == null ? void 0 : d[l]) ?? l;
    return s.buttonText && (i = ((m = e.buttonFieldTemplates) == null ? void 0 : m[i]) ?? i), {
      ...s,
      label: s.label ?? s.title ?? s.columnName,
      type: s.type ?? "text",
      placeholder: s.placeholder ?? "",
      buttonType: s.buttonType ?? "button",
      template: { ...s.template, body: { ...(C = s.template) == null ? void 0 : C.body, cell: i } }
    };
  }), n = a[0] ?? {}, r = Object.fromEntries(o.map((s) => [
    s.columnName,
    n[s.columnName] ?? s.value ?? ""
  ]));
  return { columns: o, rows: [r] };
}, za = (t, a, e) => {
  const o = Ha(a.columns, a.records, e.body), n = w(o.columns, o.rows, qa), r = structuredClone(t);
  return y(r, ja.destinationRole).children.push(...Array.isArray(n) ? n : [n]), r;
}, Ga = "footer-actions", Ma = "button", H = {
  destinationRole: Ga,
  template: Ma
}, Ua = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ja = {
  button: Ua
}, _a = (t, a) => {
  const e = structuredClone(t), o = p(a.footer.actions, Ja[H.template]);
  return y(e, H.destinationRole).children.push(...o), e;
}, tt = ({ inColumns: t, inData: a, inOptions: e, columns: o, data: n, options: r } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(o) ? o : [],
  records: Array.isArray(a) && a.length > 0 ? a : Array.isArray(n) ? n : [],
  options: e && Object.keys(e).length > 0 ? e : r ?? {}
}), Xa = "bigButtonsForm", Qa = "Account details", Ya = "Update your profile information.", Za = "", to = "label", eo = "stacked", ao = "saveCancel", oo = {
  formId: Xa,
  title: Qa,
  description: Ya,
  recordId: Za,
  header: to,
  body: eo,
  footer: ao
}, no = {
  actions: []
}, ro = {
  actions: []
}, so = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, lo = {
  actions: []
}, io = {
  none: no,
  label: ro,
  labelWithRefresh: so,
  labelWithId: lo
}, co = {
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
}, uo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, bo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, po = {
  inline: co,
  stacked: uo,
  threeColumns: bo
}, mo = {
  actions: []
}, fo = {
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
}, ho = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, yo = {
  none: mo,
  saveCancel: fo,
  edit: ho
}, B = (t, a, e) => {
  const o = t[a];
  if (!o) throw new RangeError("Unknown bigButtons " + e + ": " + a);
  return o;
}, et = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const a = t["form.bigButtons"] ?? {};
  if (typeof a != "object" || a === null || Array.isArray(a))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const e = { ...oo, ...a };
  return {
    options: e,
    header: B(io, e.header, "header"),
    body: B(po, e.body, "body"),
    footer: B(yo, e.footer, "footer")
  };
}, Co = (t, a = {}) => {
  const e = tt(a), o = et(e.options), n = Fa(t, o), r = za(n, e, o);
  return _a(r, o);
}, $o = {
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
}, go = {
  bootstrap: $o
}, wo = (t, a) => {
  var o;
  const e = (o = go[a]) == null ? void 0 : o[t.header];
  if (!e) throw new RangeError("Unknown bigButtons header: " + t.header);
  return e;
}, No = "bootstrap", xo = {
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
}, v = {
  defaultFramework: No,
  frameworks: xo
}, To = (t, a) => {
  const e = v.frameworks[a];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  const o = e.bodies[t.body];
  if (!o) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...e.base, ...o };
}, Ao = {
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
}, ko = {
  bootstrap: Ao
}, Io = (t, a) => {
  const e = ko[a], o = e == null ? void 0 : e.footers[t.footer];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + a);
  if (!o) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...e.base, ...o };
}, Fo = (t, a = {}) => {
  const e = et(tt(a).options), { options: o } = e, n = o.framework ?? v.defaultFramework;
  if (!v.frameworks[n]) throw new RangeError("Unknown bigButtons framework: " + n);
  const s = Object.assign(
    {},
    o,
    To(o, n),
    wo(o, n),
    Io(o, n)
  );
  return h(s, structuredClone(t));
}, Po = (t = {}) => {
  const a = xa(), e = Co(a, t);
  return Fo(e, t);
}, at = (t = {}) => {
  const a = { ...t, type: t.type ?? "form.bigButtons" };
  return T(a), Po(a);
};
Ca(at);
const jo = ({
  inType: t = "stacked",
  inData: a,
  inColumns: e
} = {}) => at({
  type: t,
  columns: e,
  data: a
}), Bo = {
  table: V,
  tableFromSpec: V,
  select: Me,
  selectOptionsOnly: Qe,
  dataList: W,
  datalist: W,
  searchInput: j,
  search: j,
  inputRow: j,
  form: jo
}, ot = (t = {}) => {
  T(t);
  const a = t == null ? void 0 : t.showLog, e = t.type;
  let o = e, n = e;
  if (e.includes(".")) {
    const l = e.split(".");
    o = l[0], n = l[1];
  }
  const r = Bo[o];
  if (!r)
    throw new Error(`Renderer for type "${o}" not found.`);
  const s = r({
    inType: n,
    inColumns: t.columns,
    inData: t.data,
    inOptions: t.options,
    options: t.options,
    inShowLog: a
  });
  return a && console.log("json-renderers-build output:", s), s;
};
kt(ot);
const vo = ({
  inColumns: t,
  inType: a = "table",
  inData: e,
  inShowLog: o = !1
} = {}) => ot({
  type: a,
  data: e ?? [],
  columns: t,
  showLog: o
}), So = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Ro = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const a = {
    meta: So,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = a, globalThis.ks.jsonToTag = a;
}, Eo = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : rt(t), nt = (t) => Array.isArray(t) ? t.map(Eo).flat(1 / 0).filter(Boolean) : [], Lo = (t) => (t == null, t), Do = "http://www.w3.org/2000/svg", Oo = /* @__PURE__ */ new Set([
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
]), Ko = ({ inTagName: t }) => {
  const a = t == null ? void 0 : t.toLowerCase();
  if (!a) return null;
  if (a === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return Oo.has(a) ? document.createElementNS(Do, a) : document.createElement(a);
}, Vo = ({ inElement: t, inTextContent: a }) => (!t || a === void 0 || a === null || (t.textContent = a), t), Wo = ({ inElement: t, inProperties: a }) => (t && a && typeof a == "object" && Object.assign(t, a), t), qo = "http://www.w3.org/1999/xlink", Ho = ({ inElement: t, inAttributes: a }) => {
  const e = t, o = a;
  if (!e || !o || typeof o != "object")
    return e;
  const n = typeof SVGElement < "u" ? e instanceof SVGElement : e.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(o).forEach(([r, s]) => {
    if (r === "class") {
      n ? e.setAttribute("class", String(s)) : e.className = s;
      return;
    }
    if (r === "xlink:href" || r === "href") {
      if (s != null) {
        const l = String(s);
        if (n)
          try {
            e.setAttributeNS(qo, "href", l);
          } catch {
          }
        e.setAttribute("href", l), e.setAttribute("xlink:href", l);
      }
      return;
    }
    if (typeof s == "boolean") {
      s ? e.setAttribute(r, "") : e.removeAttribute(r);
      return;
    }
    s != null && e.setAttribute(r, String(s));
  }), e;
}, zo = ({ inElement: t, inClassList: a }) => {
  if (!t || !a) return t;
  const e = typeof a == "string" ? a.split(/\s+/).filter(Boolean) : Array.isArray(a) ? a.filter((o) => typeof o == "string" && o.trim()) : [];
  return e.length && t.classList.add(...e), t;
}, Go = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const a = Ko({ inTagName: t.tagName });
  if (!a) return null;
  if (Vo({
    inElement: a,
    inTextContent: Lo(t.textContent),
    inTagName: t.tagName
  }), Wo({
    inElement: a,
    inProperties: t.properties
  }), Ho({
    inElement: a,
    inAttributes: t.attributes
  }), zo({
    inElement: a,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const e = nt(t.children);
    e.length && a.append(...e);
  }
  return a;
}, rt = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? nt(t) : typeof t == "object" ? Go(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, st = (t = {}) => {
  const a = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return rt(a);
};
Ro(st);
const Mo = ({
  inSpec: t,
  inTargetHtmlId: a,
  inAppendPosition: e,
  inShowLog: o = !1
} = {}) => {
  const n = t, r = a, s = e, l = o, i = st(n);
  l && console.log("renderToDom 1 (content):", i);
  const u = document.getElementById(r);
  return u ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? s === "prepend" ? u.prepend(...i) : u.append(...i) : s === "prepend" ? u.prepend(i) : (u.innerHTML = "", u.append(i)), l && console.log("renderToDom 2 (mounted):", u), u) : null;
}, Uo = (t = {}) => {
  g(t), (t == null ? void 0 : t.showLog) && console.log("first : ", t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const e = vo({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog
  });
  return Mo({
    inSpec: e,
    inTargetHtmlId: t.targetHtmlId,
    inAppendPosition: t.appendPosition,
    inShowLog: t.showLog
  });
};
ut(Uo);
export {
  Uo as default,
  Uo as render
};
