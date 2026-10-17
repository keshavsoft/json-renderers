const et = {
  version: "v18.0.0",
  description: "build table from store data and render to DOM uses json-to-spec, json-to-dom under the hood"
}, rt = (t) => {
  const e = t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderers = {
    meta: et,
    render: e
  });
}, st = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.type;
  if (r === void 0)
    throw new Error('Missing compulsory key: "type"');
  if (typeof r != "string")
    throw new TypeError("type must be a string");
  return !0;
}, nt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.data;
  if (r === void 0)
    throw new Error('Missing compulsory key: "data"');
  if (!Array.isArray(r))
    throw new TypeError("data must be an Array");
  return !0;
}, ot = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.columns;
  if (r === void 0)
    throw new Error('Missing compulsory key: "columns"');
  if (!Array.isArray(r))
    throw new TypeError("columns must be an Array");
  return !0;
}, at = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.showLog;
  if (r !== void 0 && typeof r != "boolean")
    throw new TypeError("showLog must be a boolean");
  return !0;
}, I = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return st(e), nt(e), ot(e), at(e), !0;
}, lt = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.targetHtmlId;
  if (r === void 0)
    throw new Error('Missing compulsory key: "targetHtmlId"');
  if (typeof r != "string")
    throw new TypeError("targetHtmlId must be a string");
  if (r.trim().length === 0)
    throw new Error("targetHtmlId must be a non-empty string");
  return !0;
}, it = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.appendPosition;
  if (r === void 0)
    throw new Error('Missing compulsory key: "appendPosition"');
  if (typeof r != "string")
    throw new TypeError("appendPosition must be a string");
  return !0;
}, ct = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object")
    throw new TypeError("Config must be an object");
  const r = e.classToApply;
  if (r === void 0)
    throw new Error('Missing compulsory key: "classToApply"');
  if (typeof r != "string")
    throw new TypeError("classToApply must be a string");
  return !0;
}, K = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return lt(e), it(e), ct(e), !0;
}, ut = "table", dt = "", bt = [], pt = [], ft = "", ht = "replace", yt = !1, w = {
  type: ut,
  targetHtmlId: dt,
  data: bt,
  columns: pt,
  classToApply: ft,
  appendPosition: ht,
  showLog: yt
}, z = (t) => {
  const e = typeof t == "object" && t !== null ? t.inKey ?? t.key : t;
  return e && e in w ? w[e] : { ...w };
};
Object.assign(z, w);
const T = (t) => {
  const e = (t == null ? void 0 : t.inConfig) ?? t;
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError("Config must be an object");
  return I(e), K(e), !0;
};
T.getSpec = z;
T.configSpec = w;
T.guardSpec = I;
T.guardMount = K;
const mt = {
  version: "1.22.0",
  name: "json-renderers-build"
}, wt = (t) => {
  t && (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuild = {
    meta: mt,
    render: t
  });
}, gt = (t) => typeof t == "object" && t !== null && !Array.isArray(t), Tt = (t, e) => {
  if (!gt(t)) return;
  let r = {};
  for (const [s, a] of Object.entries(t))
    r[s] = C(e, a);
  return r;
}, Ct = (t, e) => {
  const r = structuredClone(t);
  return Array.isArray(r) ? r.map((a) => C(e, a)) : void 0;
}, W = (t, e, r) => {
  if (t === "${agg:count}" && "rowData" in e) {
    if (Array.isArray(e == null ? void 0 : e.rowData))
      return e == null ? void 0 : e.rowData.length;
  } else
    return t === "${rowValue}" && "rowData" in e ? e == null ? void 0 : e.rowData : t.replace(/\$\{(\w+)\}/g, (s, a) => e[a] !== void 0 ? e[a] : s);
}, At = (t, e) => W(t, e), xt = (t, e, r) => {
  if (e == null)
    throw new TypeError("inTemplate is required");
  if (typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError("inElement must be an object");
  return !0;
}, C = (t, e, r) => {
  const s = t, a = e;
  xt(s, a);
  const n = structuredClone(a);
  return typeof n == "string" ? W(n, s) : (n === null || typeof n != "object" || ("textContent" in n && (n.textContent = At(n == null ? void 0 : n.textContent, s)), "attributes" in n && (n.attributes = Tt(n == null ? void 0 : n.attributes, s)), "children" in n && (n.children = Ct(n == null ? void 0 : n.children, s))), n);
}, Nt = (t, e) => {
  if (!Array.isArray(t))
    throw new TypeError("inSource must be an Array");
  if (t.length === 0)
    throw new Error("inSource cannot be empty");
  for (let r = 0; r < t.length; r++)
    if (!t[r] || typeof t[r] != "object")
      throw new TypeError(`inSource[${r}] must be an object`);
  if (!e || typeof e != "object" && typeof e != "string")
    throw new TypeError("inTemplate must be an object or string");
  return !0;
}, L = (t, e) => {
  const r = t, s = e;
  return Nt(r, s), r.map((a) => C(a, s));
}, $t = (t, e) => t.map((s) => ({
  ...s,
  rowData: e[s.columnName]
})), St = (t, e, r) => {
  var a, n, i, d, o, u;
  if (!Array.isArray(t))
    throw new TypeError("inColumns must be an Array");
  if (t.length === 0)
    throw new Error("inColumns cannot be empty");
  for (let l = 0; l < t.length; l++) {
    const c = t[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inColumns[${l}] must be an object`);
    if (typeof c.columnName != "string" || !c.columnName.trim())
      throw new TypeError(`inColumns[${l}].columnName must be a non-empty string`);
  }
  if (!Array.isArray(e))
    throw new TypeError("inData must be an Array");
  for (let l = 0; l < e.length; l++) {
    const c = e[l];
    if (!c || typeof c != "object")
      throw new TypeError(`inData[${l}] must be an object`);
  }
  if (!r || typeof r != "object" || Array.isArray(r))
    throw new TypeError("inSpec must be an object");
  const s = ((i = (n = (a = t[0]) == null ? void 0 : a.template) == null ? void 0 : n.body) == null ? void 0 : i.tr) || "buildBodyTr";
  if (!(s in r))
    throw new Error(`Row template "${s}" not found in inSpec`);
  for (let l = 0; l < t.length; l++) {
    const c = t[l], b = ((o = (d = c.template) == null ? void 0 : d.body) == null ? void 0 : o.cell) || ((u = c.template) == null ? void 0 : u.bodyCell) || "buildBodyCell";
    if (!(b in r))
      throw new Error(`Cell template "${b}" for column "${c.columnName}" not found in inSpec`);
  }
  return !0;
}, jt = (t, e) => t.map((s) => {
  var d, o, u;
  const a = ((o = (d = s.template) == null ? void 0 : d.body) == null ? void 0 : o.cell) || ((u = s.template) == null ? void 0 : u.bodyCell) || "buildBodyCell", n = e[a];
  return C(s, n);
}), It = (t, e, r) => {
  var u, l, c;
  St(t, e, r);
  const s = t, a = e, n = r, i = ((c = (l = (u = s[0]) == null ? void 0 : u.template) == null ? void 0 : l.body) == null ? void 0 : c.tr) || "buildBodyTr", d = n[i];
  return a.map((b) => {
    const f = C(b, d), x = $t(s, b), N = jt(x, n);
    return f.children = N, f;
  });
}, B = (t, e) => {
  var r;
  if (((r = t == null ? void 0 : t.attributes) == null ? void 0 : r["data-role"]) === e) return t;
  for (const s of (t == null ? void 0 : t.children) ?? []) {
    const a = B(s, e);
    if (a) return a;
  }
  return null;
}, Lt = (t, e) => {
  const r = t[e.fileName], s = e.dataRole ? B(r, e.dataRole) : r;
  return (e.filePath ?? []).reduce((a, n) => a[n], s);
}, vt = {
  tagName: "tr",
  attributes: {
    class: "align-middle"
  },
  children: []
}, kt = {
  tagName: "col",
  attributes: {
    width: "${width}"
  }
}, Et = {
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
}, Pt = {
  tagName: "td",
  textContent: "${rowValue}",
  attributes: {
    class: "py-3 px-3 text-secondary"
  }
}, Dt = {
  tagName: "button",
  textContent: "${columnName}",
  attributes: {
    class: "btn btn-primary btn-sm"
  }
}, Rt = {
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
}, Ft = {
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
}, Ht = {
  tagName: "datalist",
  attributes: {
    "data-name": "${columnName}"
  },
  children: []
}, P = {
  buildBodyTr: vt,
  buildColGroup: kt,
  buildHeader: Et,
  buildFooter: Bt,
  buildBodyCell: Pt,
  button: Dt,
  buttonCell: Rt,
  buildOption: Ft,
  buildSelect: Mt,
  buildDataList: Ht
}, Vt = "table", Gt = {
  class: "table table-hover table-striped align-middle border mb-0"
}, Kt = [
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
], _ = {
  tagName: Vt,
  attributes: Gt,
  children: Kt
}, zt = [
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
], Wt = [
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
], $ = (t) => Array.isArray(t) ? t : [t], R = {
  set: (t, e, r) => {
    t[e] = r;
  },
  push: (t, e, r) => {
    t[e].push(...$(r));
  },
  unshift: (t, e, r) => {
    t[e].unshift(...$(r));
  },
  pushToRows: (t, e, r) => {
    t[e].forEach((s) => {
      s.children.push(...structuredClone($(r)));
    });
  },
  unshiftToRows: (t, e, r) => {
    t[e].forEach((s) => {
      s.children.unshift(...structuredClone($(r)));
    });
  },
  unshiftSerialToRows: (t, e, r) => {
    t[e].forEach((s, a) => {
      const n = structuredClone(r);
      n.textContent = a + 1, s.children.unshift(n);
    });
  }
}, q = (t, e, r) => {
  const s = e.dataRole ? B(t[e.fileName], e.dataRole) : t[e.fileName], a = [...e.filePath ?? []], n = a.pop(), i = a.reduce((o, u) => o[u], s);
  (R[e.action] || R.set)(i, n, r);
}, m = { data: {}, base: _, spec: P }, O = {
  fromCollection: L,
  twoDimensional: It
}, _t = (t) => {
  t.forEach((e) => {
    const r = Lt(m, e.sourcePath);
    if (r) {
      const s = O[e.func](r, P[e.templateKey]);
      q(m, e.destinationPath, s);
    } else
      console.log("   !instruction : ", e), console.log("   !source : ", r);
  });
}, qt = (t) => {
  t.forEach((e) => {
    const r = O[e.func](
      m.data.columns,
      m.data.data,
      P
    );
    q(m, e.destinationPath, r);
  });
}, Ot = (t) => (m.data = t, _t(zt), qt(Wt), _), F = ({
  inData: t,
  inColumns: e,
  inType: r,
  footer: s = [],
  options: a
} = {}) => Ot({
  columns: e,
  data: t
}), Jt = {
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
}, g = {
  buildOption: Jt,
  buildSelect: Ut,
  buildDataList: Xt
}, Qt = ({ inData: t = [] } = {}) => {
  const e = (t ?? []).map(
    (s) => typeof s == "object" && s !== null ? s : { rowValue: s }
  ), r = structuredClone(g.buildSelect);
  return r.children = L(e, g.buildOption), r;
}, Yt = ({ inData: t = [], inColumns: e = [] } = {}) => e.map((s) => {
  const a = structuredClone(g.buildOption);
  a.textContent = a.textContent.replace("rowValue", s.columnName), a.attributes.value = a.attributes.value.replace("rowValue", s.columnName);
  const n = L(t, a);
  return console.log("createdArray : ", n[0], a), n;
}), M = ({ inData: t = [] } = {}) => {
  const e = (t ?? []).map(
    (s) => typeof s == "object" && s !== null ? s : { rowValue: s }
  ), r = structuredClone(g.buildDataList);
  return r.children = L(e, g.buildOption), r;
}, Zt = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, te = (t) => {
  const e = t;
  if (typeof globalThis > "u" || !e) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = typeof e == "function" ? e : e.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: Zt,
    render: r,
    ...typeof e == "object" ? e : {}
  };
}, ee = "input", re = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, se = {
  tagName: ee,
  attributes: re
}, S = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e, s = structuredClone(se);
  return r.placeholder && (s.attributes.placeholder = r.placeholder), r.class && (s.attributes.class = r.class), r.id && (s.attributes.id = r.id), r.name && (s.attributes.name = r.name), r.type && (s.attributes.type = r.type), r.value && (s.attributes.value = r.value), s;
}, ne = "div", oe = {
  class: "d-flex align-items-center gap-2"
}, ae = [
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
], le = {
  tagName: ne,
  attributes: oe,
  children: ae
}, A = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e, s = structuredClone(le), a = s.children[0], n = s.children[1];
  return r.label && (a.textContent = r.label), r.id && (a.attributes.for = r.id, n.attributes.id = r.id), r.placeholder && (n.attributes.placeholder = r.placeholder), r.class && (n.attributes.class = r.class), r.name && (n.attributes.name = r.name), r.type && (n.attributes.type = r.type), r.wrapperClass && (s.attributes.class = r.wrapperClass), r.labelClass && (a.attributes.class = r.labelClass), s;
}, ie = "div", ce = {
  class: "d-flex align-items-center gap-2"
}, ue = [
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
], de = {
  tagName: ie,
  attributes: ce,
  children: ue
}, v = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e, s = structuredClone(de), a = s.children[0], n = s.children[1], i = s.children[2];
  return r.label && (a.textContent = r.label), r.id && (a.attributes.for = r.id, n.attributes.id = r.id), r.placeholder && (n.attributes.placeholder = r.placeholder), r.class && (n.attributes.class = r.class), r.name && (n.attributes.name = r.name), r.type && (n.attributes.type = r.type), r.buttonText && (i.textContent = r.buttonText), r.buttonClass && (i.attributes.class = r.buttonClass), r.buttonId && (i.attributes.id = r.buttonId), r.wrapperClass && (s.attributes.class = r.wrapperClass), r.labelClass && (a.attributes.class = r.labelClass), s;
}, be = {
  input: S,
  inputOnly: S,
  inputWithLabel: A,
  inputWithLabelButton: v
}, pe = ({
  type: t = "inputWithLabel",
  options: e = {},
  inType: r,
  inOptions: s
} = {}) => {
  const a = r ?? t, n = s ?? e;
  return (be[a] || A)({ inOptions: n, options: n });
};
te({
  render: pe,
  inputOnly: S,
  inputWithLabel: A,
  inputWithLabelButton: v
});
const k = ({ inOptions: t = {}, options: e = {} } = {}) => {
  const r = t && Object.keys(t).length > 0 ? t : e;
  return (r == null ? void 0 : r.label) === !1 || (r == null ? void 0 : r.flavour) === "inputOnly" ? S({ inOptions: r }) : (r == null ? void 0 : r.flavour) === "inputWithLabelButton" || r != null && r.button || r != null && r.buttonText ? v({ inOptions: r }) : A({ inOptions: r });
}, fe = {
  version: "1.2.0",
  name: "json-renderers-build-form"
}, he = (t) => {
  const e = t;
  typeof globalThis > "u" || !e || (globalThis.ks ?? (globalThis.ks = {}), globalThis.ks.jsonRenderersBuildForm = {
    meta: fe,
    render: e
  });
}, ye = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "appFormId"
  },
  children: []
}, me = {
  tagName: "div",
  attributes: {
    class: "mb-3"
  },
  children: []
}, we = {
  tagName: "label",
  textContent: "Label",
  attributes: {
    class: "form-label fw-semibold",
    for: "fieldId"
  }
}, ge = {
  tagName: "input",
  attributes: {
    type: "text",
    placeholder: "",
    class: "form-control",
    id: "fieldId",
    name: "fieldName"
  }
}, Te = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, y = {
  form: ye,
  fieldWrapper: me,
  label: we,
  input: ge,
  submitButton: Te
}, Ce = ({ inColumn: t, inRow: e = {}, inIndex: r = 0 } = {}) => {
  var x, N;
  const s = t, a = e, n = r, i = (s == null ? void 0 : s.columnName) ?? `field_${n}`, d = (s == null ? void 0 : s.type) ?? "text", o = (s == null ? void 0 : s.label) ?? (s == null ? void 0 : s.title) ?? i, u = (s == null ? void 0 : s.id) ?? `form-${n}-${i.toLowerCase()}`, l = a[i] ?? (s == null ? void 0 : s.value), c = structuredClone(y.fieldWrapper), b = structuredClone(y.label);
  if (b.textContent = o, b.attributes.for = u, d === "checkbox") {
    c.attributes.class = "form-check mb-3";
    const p = structuredClone(y.input);
    return p.attributes.type = "checkbox", p.attributes.class = "form-check-input", p.attributes.id = u, p.attributes.name = i, p.attributes.value = "true", p.properties = { checked: !!(l ?? (s == null ? void 0 : s.checked) ?? !1) }, b.attributes.class = "form-check-label", c.children = [p, b], c;
  }
  if (d === "textarea") {
    const p = {
      tagName: "textarea",
      textContent: l ? String(l) : "",
      attributes: {
        class: (s == null ? void 0 : s.class) ?? "form-control",
        rows: String((s == null ? void 0 : s.rows) ?? 3),
        id: u,
        name: i,
        placeholder: (s == null ? void 0 : s.placeholder) ?? ""
      }
    };
    return c.children = [b, p], c;
  }
  if (d === "select") {
    const p = {
      tagName: "select",
      attributes: {
        class: (s == null ? void 0 : s.class) ?? "form-select",
        id: u,
        name: i
      },
      children: ((s == null ? void 0 : s.options) ?? []).map((h) => {
        const D = String(typeof h == "object" ? h.value : h), Z = typeof h == "object" ? h.label ?? h.value : String(h), tt = l != null && String(l) === D;
        return {
          tagName: "option",
          textContent: Z,
          attributes: {
            value: D,
            ...tt ? { selected: !0 } : {}
          }
        };
      })
    };
    return c.children = [b, p], c;
  }
  const f = structuredClone(y.input);
  if (f.attributes.type = d, f.attributes.id = u, f.attributes.name = i, s != null && s.placeholder && (f.attributes.placeholder = s.placeholder), s != null && s.class && (f.attributes.class = s.class), l != null && (f.attributes.value = String(l)), s != null && s.buttonText || s != null && s.button) {
    const p = {
      tagName: "button",
      textContent: s.buttonText ?? ((x = s.button) == null ? void 0 : x.text) ?? "Action",
      attributes: {
        type: "button",
        class: s.buttonClass ?? ((N = s.button) == null ? void 0 : N.class) ?? "btn btn-success",
        id: s.buttonId ?? `${u}-btn`
      }
    };
    return c.children = [b, f, p], c;
  }
  return c.children = [b, f], c;
}, j = ({ inColumns: t = [], inData: e = [], inOptions: r = {}, columns: s, data: a, options: n } = {}) => {
  const i = Array.isArray(t) && t.length > 0 ? t : Array.isArray(s) ? s : [], d = Array.isArray(e) && e.length > 0 ? e : Array.isArray(a) ? a : [], o = r && Object.keys(r).length > 0 ? r : n ?? {}, u = d[0] ?? {}, l = structuredClone(y.form);
  if (o != null && o.formId && (l.attributes.id = o.formId), o != null && o.className && (l.attributes.class = o.className), l.children = i.map(
    (c, b) => Ce({ inColumn: c, inRow: u, inIndex: b })
  ), (o == null ? void 0 : o.showSubmit) !== !1 && (o == null ? void 0 : o.submitButton) !== !1) {
    const c = structuredClone(y.submitButton);
    o != null && o.submitLabel && (c.textContent = o.submitLabel), o != null && o.submitClass && (c.attributes.class = o.submitClass), l.children.push(c);
  }
  return l;
}, Ae = {
  tagName: "form",
  attributes: {
    class: "vstack gap-3",
    id: "inlineFormId"
  },
  children: []
}, xe = {
  tagName: "button",
  textContent: "Submit",
  attributes: {
    type: "submit",
    class: "btn btn-primary align-self-start",
    id: "formSubmitBtnId"
  }
}, H = {
  form: Ae,
  submitButton: xe
}, Ne = ({ inColumn: t, inRow: e = {}, inIndex: r = 0 } = {}) => {
  var c, b;
  const s = t, a = e, n = r, i = (s == null ? void 0 : s.columnName) ?? `field_${n}`, d = (s == null ? void 0 : s.type) ?? "text", o = (s == null ? void 0 : s.label) ?? (s == null ? void 0 : s.title) ?? i, u = (s == null ? void 0 : s.id) ?? `form-${n}-${i.toLowerCase()}`, l = a[i] ?? (s == null ? void 0 : s.value);
  return s != null && s.buttonText || s != null && s.button ? v({
    inOptions: {
      label: o,
      type: d,
      id: u,
      name: i,
      placeholder: (s == null ? void 0 : s.placeholder) ?? "",
      class: (s == null ? void 0 : s.class) ?? "form-control",
      value: l != null ? String(l) : void 0,
      buttonText: s.buttonText ?? ((c = s.button) == null ? void 0 : c.text) ?? "Action",
      buttonClass: s.buttonClass ?? ((b = s.button) == null ? void 0 : b.class) ?? "btn btn-outline-primary",
      buttonId: s.buttonId ?? `${u}-btn`,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  }) : A({
    inOptions: {
      label: o,
      type: d,
      id: u,
      name: i,
      placeholder: (s == null ? void 0 : s.placeholder) ?? "",
      class: (s == null ? void 0 : s.class) ?? "form-control",
      value: l != null ? String(l) : void 0,
      wrapperClass: "d-flex align-items-center gap-2 mb-3",
      labelClass: "form-label mb-0 text-nowrap fw-semibold"
    }
  });
}, V = ({ inColumns: t = [], inData: e = [], inOptions: r = {}, columns: s, data: a, options: n } = {}) => {
  const i = Array.isArray(t) && t.length > 0 ? t : Array.isArray(s) ? s : [], d = Array.isArray(e) && e.length > 0 ? e : Array.isArray(a) ? a : [], o = r && Object.keys(r).length > 0 ? r : n ?? {}, u = d[0] ?? {}, l = structuredClone(H.form);
  if (o != null && o.formId && (l.attributes.id = o.formId), o != null && o.className && (l.attributes.class = o.className), l.children = i.map(
    (c, b) => Ne({ inColumn: c, inRow: u, inIndex: b })
  ), (o == null ? void 0 : o.showSubmit) !== !1 && (o == null ? void 0 : o.submitButton) !== !1) {
    const c = structuredClone(H.submitButton);
    o != null && o.submitLabel && (c.textContent = o.submitLabel), o != null && o.submitClass && (c.attributes.class = o.submitClass), l.children.push(c);
  }
  return l;
}, $e = {
  tagName: "div",
  attributes: {
    class: "d-flex align-items-center gap-2 mt-3"
  },
  children: [
    {
      tagName: "button",
      textContent: "Submit",
      attributes: {
        type: "submit",
        class: "btn btn-primary",
        id: "submitBtnId"
      }
    },
    {
      tagName: "button",
      textContent: "Cancel",
      attributes: {
        type: "button",
        class: "btn btn-secondary",
        id: "cancelBtnId"
      }
    }
  ]
}, Se = {
  buttonBar: $e
}, G = ({ inColumns: t = [], inData: e = [], inOptions: r = {}, columns: s, data: a, options: n } = {}) => {
  const i = Array.isArray(t) && t.length > 0 ? t : Array.isArray(s) ? s : [], d = Array.isArray(e) && e.length > 0 ? e : Array.isArray(a) ? a : [], o = r && Object.keys(r).length > 0 ? r : n ?? {}, u = j({
    inColumns: i,
    inData: d,
    inOptions: { ...o, submitButton: !1, showSubmit: !1 }
  }), l = structuredClone(Se.buttonBar);
  return o.submitLabel && (l.children[0].textContent = o.submitLabel), o.cancelLabel && (l.children[1].textContent = o.cancelLabel), u.children.push(l), u;
}, je = {
  stacked: j,
  vertical: j,
  inline: V,
  horizontal: V,
  withButtons: G,
  buttons: G
}, J = (t = {}) => (t.type ?? (t.type = "stacked"), I(t), (je[t.type] || j)({
  inColumns: t.columns,
  inData: t.data,
  inOptions: t.options
}));
he(J);
const Ie = ({
  inType: t = "stacked",
  inData: e,
  inColumns: r
} = {}) => J({
  type: t,
  columns: r,
  data: e
}), Le = {
  table: F,
  tableFromSpec: F,
  select: Qt,
  selectOptionsOnly: Yt,
  dataList: M,
  datalist: M,
  searchInput: k,
  search: k,
  inputRow: k,
  form: Ie
}, U = (t = {}) => {
  I(t);
  const e = t == null ? void 0 : t.showLog, r = t.type;
  let s = r, a = r;
  if (r.includes(".")) {
    const d = r.split(".");
    s = d[0], a = d[1];
  }
  const n = Le[s];
  if (!n)
    throw new Error(`Renderer for type "${s}" not found.`);
  const i = n({
    inType: a,
    inColumns: t.columns,
    inData: t.data,
    inOptions: t.options,
    options: t.options
  });
  return e && console.log("json-renderers-build output:", i), i;
};
wt(U);
const ve = ({
  inColumns: t,
  inType: e = "table",
  inData: r,
  inShowLog: s = !1
} = {}) => U({
  type: e,
  data: r ?? [],
  columns: t,
  showLog: s
}), ke = {
  version: "v9",
  description: "JSON-to-DOM engine with SVG namespace support, mixed text content, and centralized traversal"
}, Ee = ({ inFuncDefinition: t, inReviewSpec: e } = {}) => {
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const r = {
    meta: ke,
    buildSpecElement: t,
    reviewSpec: e
  };
  globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, Be = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : typeof t == "object" && (t.nodeType === 3 || t.tagName === "#text" || !t.tagName && (t.textContent !== void 0 || t.text !== void 0)) ? document.createTextNode(t.textContent ?? t.text ?? "") : Q(t), X = (t) => Array.isArray(t) ? t.map(Be).flat(1 / 0).filter(Boolean) : [], Pe = (t) => (t == null, t), De = "http://www.w3.org/2000/svg", Re = /* @__PURE__ */ new Set([
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
]), Fe = ({ inTagName: t }) => {
  const e = t == null ? void 0 : t.toLowerCase();
  if (!e) return null;
  if (e === "checkbox") {
    const r = document.createElement("input");
    return r.type = "checkbox", r;
  }
  return Re.has(e) ? document.createElementNS(De, e) : document.createElement(e);
}, Me = ({ inElement: t, inTextContent: e }) => (!t || e === void 0 || e === null || (t.textContent = e), t), He = ({ inElement: t, inProperties: e }) => (t && e && typeof e == "object" && Object.assign(t, e), t), Ve = "http://www.w3.org/1999/xlink", Ge = ({ inElement: t, inAttributes: e }) => {
  const r = t, s = e;
  if (!r || !s || typeof s != "object")
    return r;
  const a = typeof SVGElement < "u" ? r instanceof SVGElement : r.namespaceURI === "http://www.w3.org/2000/svg";
  return Object.entries(s).forEach(([n, i]) => {
    if (n === "class") {
      a ? r.setAttribute("class", String(i)) : r.className = i;
      return;
    }
    if (n === "xlink:href" || n === "href") {
      if (i != null) {
        const d = String(i);
        if (a)
          try {
            r.setAttributeNS(Ve, "href", d);
          } catch {
          }
        r.setAttribute("href", d), r.setAttribute("xlink:href", d);
      }
      return;
    }
    if (typeof i == "boolean") {
      i ? r.setAttribute(n, "") : r.removeAttribute(n);
      return;
    }
    i != null && r.setAttribute(n, String(i));
  }), r;
}, Ke = ({ inElement: t, inClassList: e }) => {
  if (!t || !e) return t;
  const r = typeof e == "string" ? e.split(/\s+/).filter(Boolean) : Array.isArray(e) ? e.filter((s) => typeof s == "string" && s.trim()) : [];
  return r.length && t.classList.add(...r), t;
}, ze = (t) => {
  if (!t || typeof t != "object" || Array.isArray(t) || !t.tagName) return null;
  const e = Fe({ inTagName: t.tagName });
  if (!e) return null;
  if (Me({
    inElement: e,
    inTextContent: Pe(t.textContent),
    inTagName: t.tagName
  }), He({
    inElement: e,
    inProperties: t.properties
  }), Ge({
    inElement: e,
    inAttributes: t.attributes
  }), Ke({
    inElement: e,
    inClassList: t.classList
  }), Array.isArray(t.children)) {
    const r = X(t.children);
    r.length && e.append(...r);
  }
  return e;
}, Q = (t) => t == null ? null : typeof Node < "u" && t instanceof Node ? t : Array.isArray(t) ? X(t) : typeof t == "object" ? ze(t) : typeof t == "string" || typeof t == "number" ? document.createTextNode(String(t)) : null, We = "./tags.schema.json", _e = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "title",
    "role"
  ],
  childTags: []
}, qe = {
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
}, Oe = {
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
}, Je = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "span"
  ],
  childTags: [
    "col"
  ]
}, Ue = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "span",
    "style",
    "width"
  ]
}, Xe = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "for"
  ],
  childTags: []
}, Qe = {
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
}, Ye = {
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
}, Ze = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, tr = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, er = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, rr = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, sr = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: [
    "src",
    "alt",
    "width",
    "height",
    "loading"
  ]
}, nr = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "type",
    "disabled",
    "name",
    "value"
  ],
  childTags: []
}, or = {
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
}, ar = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, lr = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, ir = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "tr"
  ]
}, cr = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "td",
    "th"
  ]
}, ur = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "scope",
    "colspan",
    "rowspan"
  ],
  childTags: []
}, dr = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "colspan",
    "rowspan"
  ],
  childTags: []
}, br = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: [
    "option"
  ]
}, pr = {
  allowsTextContent: !0,
  allowsChildren: !1,
  allowedAttributes: [
    "value",
    "label",
    "selected",
    "disabled"
  ]
}, fr = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "role"
  ],
  childTags: []
}, hr = {
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
}, yr = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "aria-hidden"
  ],
  childTags: []
}, mr = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [],
  childTags: []
}, wr = {
  allowsTextContent: !1,
  allowsChildren: !0,
  allowedAttributes: [
    "type"
  ],
  childTags: [
    "li"
  ]
}, gr = {
  allowsTextContent: !0,
  allowsChildren: !0,
  allowedAttributes: [
    "value"
  ],
  childTags: []
}, Tr = {
  allowsTextContent: !1,
  allowsChildren: !1,
  allowedAttributes: []
}, Cr = {
  $schema: We,
  div: _e,
  input: qe,
  checkbox: Oe,
  colgroup: Je,
  col: Ue,
  label: Xe,
  form: Qe,
  select: Ye,
  p: Ze,
  h1: tr,
  h2: er,
  span: rr,
  img: sr,
  button: nr,
  table: or,
  thead: ar,
  tbody: lr,
  tfoot: ir,
  tr: cr,
  th: ur,
  td: dr,
  datalist: br,
  option: pr,
  header: fr,
  a: hr,
  i: yr,
  small: mr,
  ul: wr,
  li: gr,
  hr: Tr
}, E = ({ inSpec: t }) => {
  const e = t;
  if (!e) return [];
  if (Array.isArray(e))
    return e.flatMap((s) => E({ inSpec: s }));
  if (typeof e != "object") return [];
  const r = [];
  return typeof e.tagName == "string" && e.tagName.trim().length > 0 && r.push(e.tagName.toLowerCase()), Array.isArray(e.children) && e.children.length > 0 && e.children.forEach((s) => {
    const a = E({ inSpec: s });
    r.push(...a);
  }), r;
}, Ar = ({ inTagsFound: t, inAllowedTags: e }) => {
  const r = t ?? [], s = e ?? {}, a = new Set(
    Object.keys(s).filter((l) => l !== "$schema").map((l) => l.toLowerCase())
  ), n = {}, i = [], d = [];
  r.forEach((l) => {
    n[l] = (n[l] || 0) + 1, a.has(l) ? i.includes(l) || i.push(l) : d.includes(l) || d.push(l);
  });
  const o = r.length, u = d.length === 0;
  return {
    totalTags: o,
    tagCounts: n,
    uniqueTags: Object.keys(n),
    recognizedTags: i,
    unrecognizedTags: d,
    areAllTagsPresent: u
  };
}, xr = ({ inSpec: t, inTags: e = Cr } = {}) => {
  const r = t, s = e, a = E({ inSpec: r }), n = Ar({
    inTagsFound: a,
    inAllowedTags: s
  });
  return {
    areAllTagsPresent: n.areAllTagsPresent,
    totalTags: n.totalTags,
    tagCounts: n.tagCounts,
    uniqueTags: n.uniqueTags,
    recognizedTags: n.recognizedTags,
    unrecognizedTags: n.unrecognizedTags
  };
}, Y = (t = {}) => {
  const e = (t == null ? void 0 : t.spec) ?? (t == null ? void 0 : t.inSpec) ?? t;
  return Q(e);
};
Ee({
  inFuncDefinition: Y,
  inReviewSpec: xr
});
const Nr = ({
  inSpec: t,
  inTargetHtmlId: e,
  inAppendPosition: r,
  inShowLog: s = !1
} = {}) => {
  const a = t, n = e, i = r, d = s, o = Y(a);
  d && console.log("renderToDom 1 (content):", o);
  const u = document.getElementById(n);
  return u ? (Array.isArray(o) || o instanceof NodeList || o instanceof HTMLCollection ? i === "prepend" ? u.prepend(...o) : u.append(...o) : i === "prepend" ? u.prepend(o) : (u.innerHTML = "", u.append(o)), d && console.log("renderToDom 2 (mounted):", u), u) : null;
}, $r = (t = {}) => {
  T(t), (t == null ? void 0 : t.showLog) && console.log("first : ", t == null ? void 0 : t.columns, t == null ? void 0 : t.data, t == null ? void 0 : t.appendPosition);
  const r = ve({
    inColumns: t.columns,
    inData: t.data,
    inType: t.type,
    inShowLog: t.showLog
  });
  return Nr({
    inSpec: r,
    inTargetHtmlId: t.targetHtmlId,
    inAppendPosition: t.appendPosition,
    inShowLog: t.showLog
  });
};
rt($r);
export {
  $r as default,
  $r as render
};
