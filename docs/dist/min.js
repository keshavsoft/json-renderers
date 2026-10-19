const Q = {
  version: "v18.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, Y = (t) => {
  const o = t;
  typeof globalThis > "u" || !o || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: Q,
    render: o
  });
}, Z = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object")
    throw new TypeError("Config must be an object");
  const e = o.type;
  if (e === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof e != "string")
    throw new TypeError("type must be a string");
  return !0;
}, tt = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object")
    throw new TypeError("Config must be an object");
  const e = o.data;
  if (e === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(e))
    throw new TypeError("data must be an Array");
  return !0;
}, et = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object")
    throw new TypeError("Config must be an object");
  const e = o.columns;
  if (e === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(e))
    throw new TypeError("columns must be an Array");
  return !0;
}, ot = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object")
    throw new TypeError("Config must be an object");
  const e = o.showLog;
  if (e !== void 0 && typeof e != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, x = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object" || Array.isArray(o))
    throw new TypeError("Config must be an object");
  return Z(o), tt(o), et(o), ot(o), !0;
}, rt = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object")
    throw new TypeError("Config must be an object");
  const e = o.targetHtmlId;
  if (e === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof e != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (e.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, nt = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object")
    throw new TypeError("Config must be an object");
  const e = o.appendPosition;
  if (e === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof e != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, at = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object")
    throw new TypeError("Config must be an object");
  const e = o.classToApply;
  if (e === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof e != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, L = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object" || Array.isArray(o))
    throw new TypeError("Config must be an object");
  return rt(o), nt(o), at(o), !0;
}, st = "table", lt = "", it = [], ct = [], ut = "", dt = "replace", bt = !1, w = {
  type: st,
  targetHtmlId: lt,
  data: it,
  columns: ct,
  classToApply: ut,
  appendPosition: dt,
  showLog: bt
}, P = (t) => {
  const o = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return o && o in w ? w[o] : { ...w };
};
Object.assign(P, w);
const $ = (t) => {
  const o = (t == null ? void 0 : t.inConfig) ?? t;
  if (!o || typeof o != "object" || Array.isArray(o))
    throw new TypeError("Config must be an object");
  return x(o), L(o), !0;
};
$.getSpec = P;
$.configSpec = w;
$.guardSpec = x;
$.guardMount = L;
const pt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, mt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: pt,
    render: t
  });
}, ft = (t) => typeof t == "object" && t !== null && !Array.isArray(t), ht = (t, o) => {
  if (!ft(t)) return;
  let e = {};
  for (const [r, a] of Object.entries(t))
    e[r] = m(o, a);
  return e;
}, yt = (t, o) => {
  const e = structuredClone(t);
  return Array.isArray(e) ? e.map((a) => m(o, a)) : void 0;
}, D = (t, o, e) => {
  if (t === "${agg:count}" && "rowData" in o) {
    if (Array.isArray(o == null ? void 0 : o.rowData))
      return o == null ? void 0 : o.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in o ? o == null ? void 0 : o.rowData : t.replace(/\$\{(\w+)\}/g, (r, a) => o[a] !== void 0 ? o[a] : r);
}, Ct = (t, o) => D(t, o), wt = (t, o, e) => {
  if (e && console.log("inElement : ", t), e && console.log("inTemplate : ", o), o == null)
    throw new TypeError("inTemplate is required");
  if (typeof o != "object" && typeof o != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, $t = {
  name: "json-transformer-funcs-primitive",
  version: "1.9.0"
}, gt = (t) => {
  var o, e;
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), (o = globalThis.ks).applyTemplate ?? (o.applyTemplate = t), (e = globalThis.ks).transformerFuncs ?? (e.transformerFuncs = {}), globalThis.ks.transformerFuncs.primitive = {
    meta: $t,
    applyTemplate: t
  });
}, m = (t, o, e) => {
  const r = t, a = o;
  wt(r, a, e);
  const n = structuredClone(a);
  return typeof n == "string" ? D(n, r) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = Ct(n == null ? void 0 : n.textContent, r)), "attributes" in n && (n.attributes = ht(n == null ? void 0 : n.attributes, r)), "children" in n && (n.children = yt(n == null ? void 0 : n.children, r))), n);
};
gt(m);
const Nt = (t, o) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let e = 0; e < t.length; e++)
    if (!t[e] || typeof t[e] != "object")
      throw new TypeError(`inSource[${e}] must be an object`);
  if (!o || typeof o != "object" && typeof o != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, h = (t, o) => {
  const e = t, r = o;
  return Nt(e, r), e.map((a) => m(a, r));
}, xt = (t, o) => t.map((r) => ({
  ...r,
  rowData: o[r.columnName]
})), Tt = (t, o, e) => {
  var a, n, s, i, l, c;
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
  if (!Array.isArray(o))
    throw new TypeError("inData must be an Array");
  for (let u = 0; u < o.length; u++) {
    const d = o[u];
    if (!d || typeof d != "object")
      throw new TypeError(`inData[${u}] must be an object`);
  }
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("inSpec must be an object");
  const r = ((s = (n = (a = t[0]) == null ? void 0 : a.template) == null ? void 0 : n.body) == null ? void 0 : s.tr) || "buildBodyTr";
  if (!(r in e))
    throw new Error(`Row template "${r}" not found in inSpec`);
  for (let u = 0; u < t.length; u++) {
    const d = t[u], b = ((l = (i = d.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((c = d.template) == null ? void 0 : c.bodyCell) || "buildBodyCell";
    if (!(b in e))
      throw new Error(`Cell template "${b}" for column "${d.columnName}" not found in inSpec`);
  }
  return !0;
}, At = (t, o) => t.map((r) => {
  var i, l, c;
  const a = ((l = (i = r.template) == null ? void 0 : i.body) == null ? void 0 : l.cell) || ((c = r.template) == null ? void 0 : c.bodyCell) || "buildBodyCell", n = o[a];
  return m(r, n);
}), O = (t, o, e) => {
  var c, u, d;
  Tt(t, o, e);
  const r = t, a = o, n = e, s = ((d = (u = (c = r[0]) == null ? void 0 : c.template) == null ? void 0 : u.body) == null ? void 0 : d.tr) || "buildBodyTr", i = n[s];
  return a.map((b) => {
    const C = m(b, i), _ = xt(r, b), X = At(_, n);
    return C.children = X, C;
  });
}, y = (t, o) => {
  var e;
  if (((e = t == null ? void 0 : t.attributes) == null ? void 0 : e["data-role"]) === o) return t;
  for (const r of (t == null ? void 0 : t.children) ?? []) {
    const a = y(r, o);
    if (a) return a;
  }
  return null;
}, It = (t, o) => {
  const e = t[o.fileName], r = o.dataRole ? y(e, o.dataRole) : e;
  return (o.filePath ?? []).reduce((a, n) => a[n], r);
}, kt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, jt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Ft = {
  tagName: "th",
  textContent: "${columnName}",
  attributes: {
    class: "py-3 px-3 fw-semibold text-uppercase small"
  }
}, Bt = {
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
}, vt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, St = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Et = {
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
}, Rt = {
  tagName: "option",
  textContent: "${rowValue}",
  attributes: {
    value: "${rowValue}"
  }
}, Lt = {
  tagName: "select",
  attributes: {
    id: "LedgerName"
  },
  children: []
}, Pt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, j = {
  buildBodyTr: kt,
  buildColGroup: jt,
  buildHeader: Ft,
  buildFooter: Bt,
  buildBodyCell: vt,
  button: St,
  buttonCell: Et,
  buildOption: Rt,
  buildSelect: Lt,
  buildDataList: Pt
}, Dt = "table", Ot = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Vt = [
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
], V = {
  tagName: Dt,
  attributes: Ot,
  children: Vt
}, Wt = [
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
], qt = [
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
], g = (t) => Array.isArray(t) ? t : [t], B = {
  set: (t, o, e) => {
    t[o] = e;
  },
  push: (t, o, e) => {
    t[o].push(...g(e));
  },
  unshift: (t, o, e) => {
    t[o].unshift(...g(e));
  },
  pushToRows: (t, o, e) => {
    t[o].forEach((r) => {
      r.children.push(...structuredClone(g(e)));
    });
  },
  unshiftToRows: (t, o, e) => {
    t[o].forEach((r) => {
      r.children.unshift(...structuredClone(g(e)));
    });
  },
  unshiftSerialToRows: (t, o, e) => {
    t[o].forEach((r, a) => {
      const n = structuredClone(e);
      n.textContent = a + 1, r.children.unshift(n);
    });
  }
}, W = (t, o, e) => {
  const r = o.dataRole ? y(t[o.fileName], o.dataRole) : t[o.fileName], a = [...o.filePath ?? []], n = a.pop(), s = a.reduce((l, c) => l[c], r);
  (B[o.action] || B.set)(s, n, e);
}, f = { data: {}, base: V, spec: j }, q = {
  fromCollection: h,
  twoDimensional: O
}, Ht = (t) => {
  t.forEach((o) => {
    const e = It(f, o.sourcePath);
    if (e) {
      const r = q[o.func](e, j[o.templateKey]);
      W(f, o.destinationPath, r);
    } else
      console.log("   !instruction : ", o), console.log("   !source : ", e);
  });
}, zt = (t) => {
  t.forEach((o) => {
    const e = q[o.func](
      f.data.columns,
      f.data.data,
      j
    );
    W(f, o.destinationPath, e);
  });
}, Mt = (t) => (f.data = t, Ht(Wt), zt(qt), V), v = ({
  inData: t,
  inColumns: o,
  inType: e,
  footer: r = [],
  options: a
} = {}) => Mt({
  columns: o,
  data: t
}), Gt = ({ inData: t = [], inColumns: o = [] } = {}) => ({
  data: t,
  columns: o
}), Kt = {
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
}, Jt = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, p = {
  buildOption: Kt,
  buildSelect: Ut,
  buildDataList: Jt
}, _t = (t, o = p.buildOption) => {
  const e = structuredClone(o);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, Xt = (t, o) => {
  const e = o == null ? void 0 : o.columnName, r = structuredClone(p.buildSelect);
  r.attributes.id = e, r.attributes["data-name"] = e;
  const a = _t(e, p.buildOption);
  return r.children = h(t, a), r;
}, Qt = ({ data: t, columns: o }) => o.map((e) => Xt(t, e)), Yt = (t = {}) => {
  const { data: o, columns: e } = Gt(t);
  return Qt({ data: o, columns: e });
}, Zt = ({ inData: t = [], inColumns: o = [] } = {}) => ({
  data: t,
  columns: o
}), te = (t, o = p.buildOption) => {
  const e = structuredClone(o);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, ee = (t, o) => {
  const e = o == null ? void 0 : o.columnName, r = te(e, p.buildOption);
  return constBuiltOptions = h(t, r), constBuiltOptions;
}, oe = ({ data: t, columns: o }) => o.map((e) => ee(t, e)), re = (t = {}) => {
  const { data: o, columns: e } = Zt(t);
  return oe({ data: o, columns: e });
}, ne = ({ inData: t = [], inColumns: o = [] } = {}) => ({
  data: t,
  columns: o
}), ae = (t, o = p.buildOption) => {
  const e = structuredClone(o);
  return e.textContent = e.textContent.replace("rowValue", t), e.attributes.value = e.attributes.value.replace("rowValue", t), e;
}, se = (t, o) => {
  const e = o == null ? void 0 : o.columnName, r = structuredClone(p.buildDataList);
  r.attributes.id = e, r.attributes["data-name"] = e;
  const a = ae(e, p.buildOption);
  return r.children = h(t, a), r;
}, le = ({ data: t, columns: o }) => o.map((e) => se(t, e)), S = (t = {}) => {
  const { data: o, columns: e } = ne(t);
  return le({ data: o, columns: e });
}, ie = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, ce = (t) => {
  const o = t;
  if (typeof globalThis > "u" || !o) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof o == "function" ? o : o.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: ie,
    render: e,
    ...typeof o == "object" ? o : {}
  };
}, ue = "input", de = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, be = {
  tagName: ue,
  attributes: de
}, N = ({ inOptions: t = {}, options: o = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : o, r = structuredClone(be);
  return e.placeholder && (r.attributes.placeholder = e.placeholder), e.class && (r.attributes.class = e.class), e.id && (r.attributes.id = e.id), e.name && (r.attributes.name = e.name), e.type && (r.attributes.type = e.type), e.value && (r.attributes.value = e.value), r;
}, pe = "div", me = {
  class: "d-flex align-items-center gap-2"
}, fe = [
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
], he = {
  tagName: pe,
  attributes: me,
  children: fe
}, T = ({ inOptions: t = {}, options: o = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : o, r = structuredClone(he), a = r.children[0], n = r.children[1];
  return e.label && (a.textContent = e.label), e.id && (a.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.wrapperClass && (r.attributes.class = e.wrapperClass), e.labelClass && (a.attributes.class = e.labelClass), r;
}, ye = "div", Ce = {
  class: "d-flex align-items-center gap-2"
}, we = [
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
], $e = {
  tagName: ye,
  attributes: Ce,
  children: we
}, F = ({ inOptions: t = {}, options: o = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : o, r = structuredClone($e), a = r.children[0], n = r.children[1], s = r.children[2];
  return e.label && (a.textContent = e.label), e.id && (a.attributes.for = e.id, n.attributes.id = e.id), e.placeholder && (n.attributes.placeholder = e.placeholder), e.class && (n.attributes.class = e.class), e.name && (n.attributes.name = e.name), e.type && (n.attributes.type = e.type), e.buttonText && (s.textContent = e.buttonText), e.buttonClass && (s.attributes.class = e.buttonClass), e.buttonId && (s.attributes.id = e.buttonId), e.wrapperClass && (r.attributes.class = e.wrapperClass), e.labelClass && (a.attributes.class = e.labelClass), r;
}, ge = {
  input: N,
  inputOnly: N,
  inputWithLabel: T,
  inputWithLabelButton: F
}, Ne = ({
  type: t = "inputWithLabel",
  options: o = {},
  inType: e,
  inOptions: r
} = {}) => {
  const a = e ?? t, n = r ?? o;
  return (ge[a] || T)({ inOptions: n, options: n });
};
ce({
  render: Ne,
  inputOnly: N,
  inputWithLabel: T,
  inputWithLabelButton: F
});
const A = ({ inOptions: t = {}, options: o = {} } = {}) => {
  const e = t && Object.keys(t).length > 0 ? t : o;
  return (e == null ? void 0 : e.label) === !1 || (e == null ? void 0 : e.flavour) === "inputOnly" ? N({ inOptions: e }) : (e == null ? void 0 : e.flavour) === "inputWithLabelButton" || e != null && e.button || e != null && e.buttonText ? F({ inOptions: e }) : T({ inOptions: e });
}, xe = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, Te = (t) => {
  typeof globalThis > "u" || !t || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = { meta: xe, render: t });
}, Ae = "div", Ie = {
  class: "${cardClass}",
  "data-role": "form-card"
}, ke = [
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
], je = {
  tagName: Ae,
  attributes: Ie,
  children: ke
}, Fe = () => structuredClone(je), Be = "header-actions", ve = "button", E = {
  destinationRole: Be,
  template: ve
}, Se = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, Ee = {
  button: Se
}, Re = (t, o) => {
  const e = structuredClone(t), r = h(o.header.actions, Ee[E.template]);
  return y(e, E.destinationRole).children.push(...r), e;
}, Le = "form-body", Pe = {
  destinationRole: Le
}, De = {
  tagName: "div",
  attributes: {
    class: "${rowClass}"
  },
  children: []
}, Oe = {
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
}, Ve = {
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
}, We = {
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
}, qe = {
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
}, He = {
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
}, ze = {
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
}, Me = {
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
}, Ge = {
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
}, Ke = {
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
}, Ue = {
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
}, Je = {
  buildBodyTr: De,
  buildBodyCell: Oe,
  buildRequiredField: Ve,
  buildTextareaField: We,
  buildCheckboxField: qe,
  buildInlineField: He,
  buildInlineRequiredField: ze,
  buildInlineFieldWithButton: Me,
  buildInlineRequiredFieldWithButton: Ge,
  buildInlineTextareaField: Ke,
  buildInlineCheckboxField: Ue
}, _e = (t, o, e) => {
  const r = t.map((s) => {
    var c, u, d, b, C;
    const i = ((u = (c = s.template) == null ? void 0 : c.body) == null ? void 0 : u.cell) ?? (s.required ? "buildRequiredField" : "buildBodyCell");
    let l = ((d = e.fieldTemplates) == null ? void 0 : d[i]) ?? i;
    return s.buttonText && (l = ((b = e.buttonFieldTemplates) == null ? void 0 : b[l]) ?? l), {
      ...s,
      label: s.label ?? s.title ?? s.columnName,
      type: s.type ?? "text",
      placeholder: s.placeholder ?? "",
      buttonType: s.buttonType ?? "button",
      template: { ...s.template, body: { ...(C = s.template) == null ? void 0 : C.body, cell: l } }
    };
  }), a = o[0] ?? {}, n = Object.fromEntries(r.map((s) => [
    s.columnName,
    a[s.columnName] ?? s.value ?? ""
  ]));
  return { columns: r, rows: [n] };
}, Xe = (t, o, e) => {
  const r = _e(o.columns, o.records, e.body), a = O(r.columns, r.rows, Je), n = structuredClone(t);
  return y(n, Pe.destinationRole).children.push(...Array.isArray(a) ? a : [a]), n;
}, Qe = "footer-actions", Ye = "button", R = {
  destinationRole: Qe,
  template: Ye
}, Ze = {
  tagName: "button",
  textContent: "${label}",
  attributes: {
    type: "${type}",
    form: "${formId}",
    class: "${buttonClass} ${buttonSizeClass} ${buttonPaddingClass}"
  }
}, to = {
  button: Ze
}, eo = (t, o) => {
  const e = structuredClone(t), r = h(o.footer.actions, to[R.template]);
  return y(e, R.destinationRole).children.push(...r), e;
}, H = ({ inColumns: t, inData: o, inOptions: e, columns: r, data: a, options: n } = {}) => ({
  columns: Array.isArray(t) && t.length > 0 ? t : Array.isArray(r) ? r : [],
  records: Array.isArray(o) && o.length > 0 ? o : Array.isArray(a) ? a : [],
  options: e && Object.keys(e).length > 0 ? e : n ?? {}
}), oo = "bigButtonsForm", ro = "Account details", no = "Update your profile information.", ao = "", so = "label", lo = "stacked", io = "saveCancel", co = {
  formId: oo,
  title: ro,
  description: no,
  recordId: ao,
  header: so,
  body: lo,
  footer: io
}, uo = {
  actions: []
}, bo = {
  actions: []
}, po = {
  actions: [
    {
      label: "Refresh",
      type: "button",
      buttonClass: "${headerButtonClass}"
    }
  ]
}, mo = {
  actions: []
}, fo = {
  none: uo,
  label: bo,
  labelWithRefresh: po,
  labelWithId: mo
}, ho = {
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
}, yo = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, Co = {
  fieldTemplates: {},
  buttonFieldTemplates: {}
}, wo = {
  inline: ho,
  stacked: yo,
  threeColumns: Co
}, $o = {
  actions: []
}, go = {
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
}, No = {
  actions: [
    {
      label: "Edit",
      type: "button",
      buttonClass: "${infoButtonClass}"
    }
  ]
}, xo = {
  none: $o,
  saveCancel: go,
  edit: No
}, I = (t, o, e) => {
  const r = t[o];
  if (!r) throw new RangeError("Unknown bigButtons " + e + ": " + o);
  return r;
}, z = (t) => {
  if (typeof t != "object" || t === null || Array.isArray(t))
    throw new TypeError("bigButtons options must be an object keyed by renderer type");
  const o = t["form.bigButtons"] ?? {};
  if (typeof o != "object" || o === null || Array.isArray(o))
    throw new TypeError('options["form.bigButtons"] must be an object');
  const e = { ...co, ...o };
  return {
    options: e,
    header: I(fo, e.header, "header"),
    body: I(wo, e.body, "body"),
    footer: I(xo, e.footer, "footer")
  };
}, To = (t, o = {}) => {
  const e = H(o), r = z(e.options), a = Re(t, r), n = Xe(a, e, r);
  return eo(n, r);
}, Ao = {
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
}, Io = {
  bootstrap: Ao
}, ko = (t, o) => {
  var r;
  const e = (r = Io[o]) == null ? void 0 : r[t.header];
  if (!e) throw new RangeError("Unknown bigButtons header: " + t.header);
  return e;
}, jo = "bootstrap", Fo = {
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
  defaultFramework: jo,
  frameworks: Fo
}, Bo = (t, o) => {
  const e = k.frameworks[o];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + o);
  const r = e.bodies[t.body];
  if (!r) throw new RangeError("Unknown bigButtons body: " + t.body);
  return { ...e.base, ...r };
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
}, So = {
  bootstrap: vo
}, Eo = (t, o) => {
  const e = So[o], r = e == null ? void 0 : e.footers[t.footer];
  if (!e) throw new RangeError("Unknown bigButtons framework: " + o);
  if (!r) throw new RangeError("Unknown bigButtons footer: " + t.footer);
  return { ...e.base, ...r };
}, Ro = (t, o = {}) => {
  const e = z(H(o).options), { options: r } = e, a = r.framework ?? k.defaultFramework;
  if (!k.frameworks[a]) throw new RangeError("Unknown bigButtons framework: " + a);
  const s = Object.assign(
    {},
    r,
    Bo(r, a),
    ko(r, a),
    Eo(r, a)
  );
  return m(s, structuredClone(t));
}, Lo = (t = {}) => {
  const o = Fe(), e = To(o, t);
  return Ro(e, t);
}, M = (t = {}) => {
  const o = { ...t, type: t.type ?? "form.bigButtons" };
  return x(o), Lo(o);
};
Te(M);
const Po = ({
  inType: t = "stacked",
  inData: o,
  inColumns: e
} = {}) => M({
  type: t,
  columns: e,
  data: o
}), Do = {
  table: v,
  tableFromSpec: v,
  select: Yt,
  selectOptionsOnly: re,
  dataList: S,
  datalist: S,
  searchInput: A,
  search: A,
  inputRow: A,
  form: Po
}, G = (t = {}) => {
  x(t);
  const o = t == null ? void 0 : t.showLog, e = t.type;
  let r = e, a = e;
  if (e.includes(".")) {
    const i = e.split(".");
    r = i[0], a = i[1];
  }
  const n = Do[r];
  if (!n)
    throw new Error(`Renderer for type "${r}" not found.`);
  const s = n({
    inType: a,
    inColumns: t.columns,
    inData: t.data,
    inOptions: t.options,
    options: t.options
  });
  return o && console.log("json-renderers-build output:", s), s;
};
mt(G);
const Oo = ({
  inColumns: t,
  inType: o = "table",
  inData: e,
  inShowLog: r = !1
} = {}) => G({
  type: o,
  data: e ?? [],
  columns: t,
  showLog: r
}), Vo = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Wo = (t) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const o = {
    meta: Vo,
    buildSpecElement: t
  };
  globalThis.ks["json-to-tag"] = o, globalThis.ks.jsonToTag = o;
}, qo = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : U(t), K = (t) => Array.isArray(t) ? t.map(qo).flat(1 / 0).filter(Boolean) : [], Ho = (t) => (t == null, t), zo = "http://www.w3.org/2000/svg", Mo = /* @__PURE__ */ new Set([
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
]), Go = ({ inTagName: t }) => {
  const o = t == null ? void 0 : t.toLowerCase();
  if (!o) return null;
  if (o === "checkbox") {
    const e = document.createElement("input");
    return e.type = "checkbox", e;
  }
  return Mo.has(o) ? document.createElementNS(zo, o) : document.createElement(o);
}, Ko = ({ inElement: t, inTextContent: o }) => (!t || o === void 0 || o === null || (t.textContent = o), t), Uo = ({ inElement: t, inProperties: o }) => (t && o && typeof o == "object" && Object.assign(t, o), t), Jo = "http://www.w3.org/1999/xlink", _o = ({ inElement: t, inAttributes: o }) => {
  const e = t, r = o;
  if (!e || !r || typeof r != "object")
    return e;
  const a = typeof SVGElement < "u" ? e instanceof SVGElement : e.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(r).forEach(([n, s]) => {
    if (n === "class") {
      a ? e.setAttribute("class", String(s)) : e.className = s;
      return;
    }
    if (n === "xlink:href" || n === "href") {
      if (s != null) {
        const i = String(s);
        if (a)
          try {
            e.setAttributeNS(Jo, "href", i);
          } catch {
          }
        e.setAttribute("href", i), e.setAttribute("xlink:href", i);
      }
      return;
    }
    if (typeof s == "boolean") {
      s ? e.setAttribute(n, "") : e.removeAttribute(n);
      return;
    }
    s != null && e.setAttribute(n, String(s));
  }), e;
}, Xo = ({ inElement: t, inClassList: o }) => {
  if (!t || !o) return t;
  const e = typeof o == "string" ? o.split(/\s+/).filter(Boolean) : Array.isArray(o) ? o.filter((r) => typeof r == "string" && r.trim()) : [];
  return e.length && t.classList.add(...e), t;
}, Qo = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const o = Go({ inTagName: t.tagName });
  if (!o) return null;
  if (Ko({
    inElement: o,
    inTextContent: Ho(t.textContent),
    inTagName: t.tagName
  }), Uo({
    inElement: o,
    inProperties: t.properties
  }), _o({
    inElement: o,
    inAttributes: t.attributes
  }), Xo({
    inElement: o,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const e = K(t.children);
    e.length && o.append(...e);
  }
  return o;
}, U = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? K(t) : typeof t == "object" ? Qo(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, J = (t = {}) => {
  const o = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return U(o);
};
Wo(J);
const Yo = ({
  inSpec: t,
  inTargetHtmlId: o,
  inAppendPosition: e,
  inShowLog: r = !1
} = {}) => {
  const a = t, n = o, s = e, i = r, l = J(a);
  i && console.log("renderToDom 1 (content):", l);
  const c = document.getElementById(n);
  return c ? (Array.isArray(l) || l instanceof NodeList || l instanceof HTMLCollection ? s === "prepend" ? c.prepend(...l) : c.append(...l) : s === "prepend" ? c.prepend(l) : (c.innerHTML = "", c.append(l)), i && console.log("renderToDom 2 (mounted):", c), c) : null;
}, Zo = (t = {}) => {
  $(t), (t == null ? void 0 : t.showLog) && console.log("first : ", t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const e = Oo({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog
  });
  return Yo({
    inSpec: e,
    inTargetHtmlId: t.targetHtmlId,
    inAppendPosition: t.appendPosition,
    inShowLog: t.showLog
  });
};
Y(Zo);
export {
  Zo as default,
  Zo as render
};
