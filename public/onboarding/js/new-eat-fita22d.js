/*!
 * @preserve
 * @version: 1.0.0
 * @author: SE7ENSKY Frontend studio <info@se7ensky.com>
 *
 */ !(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) ||
                Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: r,
                });
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 77));
})([
    function (t, e) {
        var n = (t.exports = { version: "2.6.11" });
        "number" == typeof __e && (__e = n);
    },
    function (t, e, n) {
        var r;
        !(function (e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports
                ? (t.exports = e.document
                      ? n(e, !0)
                      : function (t) {
                            if (!t.document)
                                throw new Error(
                                    "jQuery requires a window with a document"
                                );
                            return n(t);
                        })
                : n(e);
        })("undefined" != typeof window ? window : this, function (n, i) {
            "use strict";
            var o = [],
                a = n.document,
                s = Object.getPrototypeOf,
                u = o.slice,
                c = o.concat,
                l = o.push,
                f = o.indexOf,
                d = {},
                p = d.toString,
                h = d.hasOwnProperty,
                v = h.toString,
                g = v.call(Object),
                m = {},
                y = function (t) {
                    return (
                        "function" == typeof t && "number" != typeof t.nodeType
                    );
                },
                _ = function (t) {
                    return null != t && t === t.window;
                },
                b = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function w(t, e, n) {
                var r,
                    i,
                    o = (n = n || a).createElement("script");
                if (((o.text = t), e))
                    for (r in b)
                        (i = e[r] || (e.getAttribute && e.getAttribute(r))) &&
                            o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o);
            }
            function x(t) {
                return null == t
                    ? t + ""
                    : "object" == typeof t || "function" == typeof t
                    ? d[p.call(t)] || "object"
                    : typeof t;
            }
            var C = function (t, e) {
                    return new C.fn.init(t, e);
                },
                k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function T(t) {
                var e = !!t && "length" in t && t.length,
                    n = x(t);
                return (
                    !y(t) &&
                    !_(t) &&
                    ("array" === n ||
                        0 === e ||
                        ("number" == typeof e && e > 0 && e - 1 in t))
                );
            }
            (C.fn = C.prototype =
                {
                    jquery: "3.4.1",
                    constructor: C,
                    length: 0,
                    toArray: function () {
                        return u.call(this);
                    },
                    get: function (t) {
                        return null == t
                            ? u.call(this)
                            : t < 0
                            ? this[t + this.length]
                            : this[t];
                    },
                    pushStack: function (t) {
                        var e = C.merge(this.constructor(), t);
                        return (e.prevObject = this), e;
                    },
                    each: function (t) {
                        return C.each(this, t);
                    },
                    map: function (t) {
                        return this.pushStack(
                            C.map(this, function (e, n) {
                                return t.call(e, n, e);
                            })
                        );
                    },
                    slice: function () {
                        return this.pushStack(u.apply(this, arguments));
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    eq: function (t) {
                        var e = this.length,
                            n = +t + (t < 0 ? e : 0);
                        return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
                    },
                    end: function () {
                        return this.prevObject || this.constructor();
                    },
                    push: l,
                    sort: o.sort,
                    splice: o.splice,
                }),
                (C.extend = C.fn.extend =
                    function () {
                        var t,
                            e,
                            n,
                            r,
                            i,
                            o,
                            a = arguments[0] || {},
                            s = 1,
                            u = arguments.length,
                            c = !1;
                        for (
                            "boolean" == typeof a &&
                                ((c = a), (a = arguments[s] || {}), s++),
                                "object" == typeof a || y(a) || (a = {}),
                                s === u && ((a = this), s--);
                            s < u;
                            s++
                        )
                            if (null != (t = arguments[s]))
                                for (e in t)
                                    (r = t[e]),
                                        "__proto__" !== e &&
                                            a !== r &&
                                            (c &&
                                            r &&
                                            (C.isPlainObject(r) ||
                                                (i = Array.isArray(r)))
                                                ? ((n = a[e]),
                                                  (o =
                                                      i && !Array.isArray(n)
                                                          ? []
                                                          : i ||
                                                            C.isPlainObject(n)
                                                          ? n
                                                          : {}),
                                                  (i = !1),
                                                  (a[e] = C.extend(c, o, r)))
                                                : void 0 !== r && (a[e] = r));
                        return a;
                    }),
                C.extend({
                    expando:
                        "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (t) {
                        throw new Error(t);
                    },
                    noop: function () {},
                    isPlainObject: function (t) {
                        var e, n;
                        return (
                            !(!t || "[object Object]" !== p.call(t)) &&
                            (!(e = s(t)) ||
                                ("function" ==
                                    typeof (n =
                                        h.call(e, "constructor") &&
                                        e.constructor) &&
                                    v.call(n) === g))
                        );
                    },
                    isEmptyObject: function (t) {
                        var e;
                        for (e in t) return !1;
                        return !0;
                    },
                    globalEval: function (t, e) {
                        w(t, { nonce: e && e.nonce });
                    },
                    each: function (t, e) {
                        var n,
                            r = 0;
                        if (T(t))
                            for (
                                n = t.length;
                                r < n && !1 !== e.call(t[r], r, t[r]);
                                r++
                            );
                        else
                            for (r in t)
                                if (!1 === e.call(t[r], r, t[r])) break;
                        return t;
                    },
                    trim: function (t) {
                        return null == t ? "" : (t + "").replace(k, "");
                    },
                    makeArray: function (t, e) {
                        var n = e || [];
                        return (
                            null != t &&
                                (T(Object(t))
                                    ? C.merge(n, "string" == typeof t ? [t] : t)
                                    : l.call(n, t)),
                            n
                        );
                    },
                    inArray: function (t, e, n) {
                        return null == e ? -1 : f.call(e, t, n);
                    },
                    merge: function (t, e) {
                        for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                            t[i++] = e[r];
                        return (t.length = i), t;
                    },
                    grep: function (t, e, n) {
                        for (
                            var r = [], i = 0, o = t.length, a = !n;
                            i < o;
                            i++
                        )
                            !e(t[i], i) !== a && r.push(t[i]);
                        return r;
                    },
                    map: function (t, e, n) {
                        var r,
                            i,
                            o = 0,
                            a = [];
                        if (T(t))
                            for (r = t.length; o < r; o++)
                                null != (i = e(t[o], o, n)) && a.push(i);
                        else
                            for (o in t)
                                null != (i = e(t[o], o, n)) && a.push(i);
                        return c.apply([], a);
                    },
                    guid: 1,
                    support: m,
                }),
                "function" == typeof Symbol &&
                    (C.fn[Symbol.iterator] = o[Symbol.iterator]),
                C.each(
                    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                        " "
                    ),
                    function (t, e) {
                        d["[object " + e + "]"] = e.toLowerCase();
                    }
                );
            var S = (function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c,
                    l,
                    f,
                    d,
                    p,
                    h,
                    v,
                    g,
                    m,
                    y,
                    _,
                    b = "sizzle" + 1 * new Date(),
                    w = t.document,
                    x = 0,
                    C = 0,
                    k = ut(),
                    T = ut(),
                    S = ut(),
                    A = ut(),
                    O = function (t, e) {
                        return t === e && (f = !0), 0;
                    },
                    E = {}.hasOwnProperty,
                    j = [],
                    P = j.pop,
                    D = j.push,
                    I = j.push,
                    N = j.slice,
                    M = function (t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (t[n] === e) return n;
                        return -1;
                    },
                    L =
                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    F = "[\\x20\\t\\r\\n\\f]",
                    q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    B =
                        "\\[" +
                        F +
                        "*(" +
                        q +
                        ")(?:" +
                        F +
                        "*([*^$|!~]?=)" +
                        F +
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                        q +
                        "))|)" +
                        F +
                        "*\\]",
                    W =
                        ":(" +
                        q +
                        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                        B +
                        ")*)|.*)\\)|)",
                    R = new RegExp(F + "+", "g"),
                    $ = new RegExp(
                        "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
                        "g"
                    ),
                    H = new RegExp("^" + F + "*," + F + "*"),
                    z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                    U = new RegExp(F + "|>"),
                    V = new RegExp(W),
                    X = new RegExp("^" + q + "$"),
                    G = {
                        ID: new RegExp("^#(" + q + ")"),
                        CLASS: new RegExp("^\\.(" + q + ")"),
                        TAG: new RegExp("^(" + q + "|[*])"),
                        ATTR: new RegExp("^" + B),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp(
                            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                F +
                                "*(even|odd|(([+-]|)(\\d*)n|)" +
                                F +
                                "*(?:([+-]|)" +
                                F +
                                "*(\\d+)|))" +
                                F +
                                "*\\)|)",
                            "i"
                        ),
                        bool: new RegExp("^(?:" + L + ")$", "i"),
                        needsContext: new RegExp(
                            "^" +
                                F +
                                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                F +
                                "*((?:-\\d)?\\d*)" +
                                F +
                                "*\\)|)(?=[^-]|$)",
                            "i"
                        ),
                    },
                    Q = /HTML$/i,
                    J = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    Y = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = new RegExp(
                        "\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)",
                        "ig"
                    ),
                    nt = function (t, e, n) {
                        var r = "0x" + e - 65536;
                        return r != r || n
                            ? e
                            : r < 0
                            ? String.fromCharCode(r + 65536)
                            : String.fromCharCode(
                                  (r >> 10) | 55296,
                                  (1023 & r) | 56320
                              );
                    },
                    rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    it = function (t, e) {
                        return e
                            ? "\0" === t
                                ? "�"
                                : t.slice(0, -1) +
                                  "\\" +
                                  t.charCodeAt(t.length - 1).toString(16) +
                                  " "
                            : "\\" + t;
                    },
                    ot = function () {
                        d();
                    },
                    at = bt(
                        function (t) {
                            return (
                                !0 === t.disabled &&
                                "fieldset" === t.nodeName.toLowerCase()
                            );
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    I.apply((j = N.call(w.childNodes)), w.childNodes),
                        j[w.childNodes.length].nodeType;
                } catch (t) {
                    I = {
                        apply: j.length
                            ? function (t, e) {
                                  D.apply(t, N.call(e));
                              }
                            : function (t, e) {
                                  for (
                                      var n = t.length, r = 0;
                                      (t[n++] = e[r++]);

                                  );
                                  t.length = n - 1;
                              },
                    };
                }
                function st(t, e, r, i) {
                    var o,
                        s,
                        c,
                        l,
                        f,
                        h,
                        m,
                        y = e && e.ownerDocument,
                        x = e ? e.nodeType : 9;
                    if (
                        ((r = r || []),
                        "string" != typeof t ||
                            !t ||
                            (1 !== x && 9 !== x && 11 !== x))
                    )
                        return r;
                    if (
                        !i &&
                        ((e ? e.ownerDocument || e : w) !== p && d(e),
                        (e = e || p),
                        v)
                    ) {
                        if (11 !== x && (f = Z.exec(t)))
                            if ((o = f[1])) {
                                if (9 === x) {
                                    if (!(c = e.getElementById(o))) return r;
                                    if (c.id === o) return r.push(c), r;
                                } else if (
                                    y &&
                                    (c = y.getElementById(o)) &&
                                    _(e, c) &&
                                    c.id === o
                                )
                                    return r.push(c), r;
                            } else {
                                if (f[2])
                                    return (
                                        I.apply(r, e.getElementsByTagName(t)), r
                                    );
                                if (
                                    (o = f[3]) &&
                                    n.getElementsByClassName &&
                                    e.getElementsByClassName
                                )
                                    return (
                                        I.apply(r, e.getElementsByClassName(o)),
                                        r
                                    );
                            }
                        if (
                            n.qsa &&
                            !A[t + " "] &&
                            (!g || !g.test(t)) &&
                            (1 !== x || "object" !== e.nodeName.toLowerCase())
                        ) {
                            if (((m = t), (y = e), 1 === x && U.test(t))) {
                                for (
                                    (l = e.getAttribute("id"))
                                        ? (l = l.replace(rt, it))
                                        : e.setAttribute("id", (l = b)),
                                        s = (h = a(t)).length;
                                    s--;

                                )
                                    h[s] = "#" + l + " " + _t(h[s]);
                                (m = h.join(",")),
                                    (y = (tt.test(t) && mt(e.parentNode)) || e);
                            }
                            try {
                                return I.apply(r, y.querySelectorAll(m)), r;
                            } catch (e) {
                                A(t, !0);
                            } finally {
                                l === b && e.removeAttribute("id");
                            }
                        }
                    }
                    return u(t.replace($, "$1"), e, r, i);
                }
                function ut() {
                    var t = [];
                    return function e(n, i) {
                        return (
                            t.push(n + " ") > r.cacheLength &&
                                delete e[t.shift()],
                            (e[n + " "] = i)
                        );
                    };
                }
                function ct(t) {
                    return (t[b] = !0), t;
                }
                function lt(t) {
                    var e = p.createElement("fieldset");
                    try {
                        return !!t(e);
                    } catch (t) {
                        return !1;
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), (e = null);
                    }
                }
                function ft(t, e) {
                    for (var n = t.split("|"), i = n.length; i--; )
                        r.attrHandle[n[i]] = e;
                }
                function dt(t, e) {
                    var n = e && t,
                        r =
                            n &&
                            1 === t.nodeType &&
                            1 === e.nodeType &&
                            t.sourceIndex - e.sourceIndex;
                    if (r) return r;
                    if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                    return t ? 1 : -1;
                }
                function pt(t) {
                    return function (e) {
                        return (
                            "input" === e.nodeName.toLowerCase() && e.type === t
                        );
                    };
                }
                function ht(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return (
                            ("input" === n || "button" === n) && e.type === t
                        );
                    };
                }
                function vt(t) {
                    return function (e) {
                        return "form" in e
                            ? e.parentNode && !1 === e.disabled
                                ? "label" in e
                                    ? "label" in e.parentNode
                                        ? e.parentNode.disabled === t
                                        : e.disabled === t
                                    : e.isDisabled === t ||
                                      (e.isDisabled !== !t && at(e) === t)
                                : e.disabled === t
                            : "label" in e && e.disabled === t;
                    };
                }
                function gt(t) {
                    return ct(function (e) {
                        return (
                            (e = +e),
                            ct(function (n, r) {
                                for (
                                    var i, o = t([], n.length, e), a = o.length;
                                    a--;

                                )
                                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                            })
                        );
                    });
                }
                function mt(t) {
                    return t && void 0 !== t.getElementsByTagName && t;
                }
                for (e in ((n = st.support = {}),
                (o = st.isXML =
                    function (t) {
                        var e = t.namespaceURI,
                            n = (t.ownerDocument || t).documentElement;
                        return !Q.test(e || (n && n.nodeName) || "HTML");
                    }),
                (d = st.setDocument =
                    function (t) {
                        var e,
                            i,
                            a = t ? t.ownerDocument || t : w;
                        return a !== p && 9 === a.nodeType && a.documentElement
                            ? ((h = (p = a).documentElement),
                              (v = !o(p)),
                              w !== p &&
                                  (i = p.defaultView) &&
                                  i.top !== i &&
                                  (i.addEventListener
                                      ? i.addEventListener("unload", ot, !1)
                                      : i.attachEvent &&
                                        i.attachEvent("onunload", ot)),
                              (n.attributes = lt(function (t) {
                                  return (
                                      (t.className = "i"),
                                      !t.getAttribute("className")
                                  );
                              })),
                              (n.getElementsByTagName = lt(function (t) {
                                  return (
                                      t.appendChild(p.createComment("")),
                                      !t.getElementsByTagName("*").length
                                  );
                              })),
                              (n.getElementsByClassName = Y.test(
                                  p.getElementsByClassName
                              )),
                              (n.getById = lt(function (t) {
                                  return (
                                      (h.appendChild(t).id = b),
                                      !p.getElementsByName ||
                                          !p.getElementsByName(b).length
                                  );
                              })),
                              n.getById
                                  ? ((r.filter.ID = function (t) {
                                        var e = t.replace(et, nt);
                                        return function (t) {
                                            return t.getAttribute("id") === e;
                                        };
                                    }),
                                    (r.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && v) {
                                            var n = e.getElementById(t);
                                            return n ? [n] : [];
                                        }
                                    }))
                                  : ((r.filter.ID = function (t) {
                                        var e = t.replace(et, nt);
                                        return function (t) {
                                            var n =
                                                void 0 !== t.getAttributeNode &&
                                                t.getAttributeNode("id");
                                            return n && n.value === e;
                                        };
                                    }),
                                    (r.find.ID = function (t, e) {
                                        if (void 0 !== e.getElementById && v) {
                                            var n,
                                                r,
                                                i,
                                                o = e.getElementById(t);
                                            if (o) {
                                                if (
                                                    (n =
                                                        o.getAttributeNode(
                                                            "id"
                                                        )) &&
                                                    n.value === t
                                                )
                                                    return [o];
                                                for (
                                                    i = e.getElementsByName(t),
                                                        r = 0;
                                                    (o = i[r++]);

                                                )
                                                    if (
                                                        (n =
                                                            o.getAttributeNode(
                                                                "id"
                                                            )) &&
                                                        n.value === t
                                                    )
                                                        return [o];
                                            }
                                            return [];
                                        }
                                    })),
                              (r.find.TAG = n.getElementsByTagName
                                  ? function (t, e) {
                                        return void 0 !== e.getElementsByTagName
                                            ? e.getElementsByTagName(t)
                                            : n.qsa
                                            ? e.querySelectorAll(t)
                                            : void 0;
                                    }
                                  : function (t, e) {
                                        var n,
                                            r = [],
                                            i = 0,
                                            o = e.getElementsByTagName(t);
                                        if ("*" === t) {
                                            for (; (n = o[i++]); )
                                                1 === n.nodeType && r.push(n);
                                            return r;
                                        }
                                        return o;
                                    }),
                              (r.find.CLASS =
                                  n.getElementsByClassName &&
                                  function (t, e) {
                                      if (
                                          void 0 !== e.getElementsByClassName &&
                                          v
                                      )
                                          return e.getElementsByClassName(t);
                                  }),
                              (m = []),
                              (g = []),
                              (n.qsa = Y.test(p.querySelectorAll)) &&
                                  (lt(function (t) {
                                      (h.appendChild(t).innerHTML =
                                          "<a id='" +
                                          b +
                                          "'></a><select id='" +
                                          b +
                                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                          t.querySelectorAll(
                                              "[msallowcapture^='']"
                                          ).length &&
                                              g.push(
                                                  "[*^$]=" + F + "*(?:''|\"\")"
                                              ),
                                          t.querySelectorAll("[selected]")
                                              .length ||
                                              g.push(
                                                  "\\[" +
                                                      F +
                                                      "*(?:value|" +
                                                      L +
                                                      ")"
                                              ),
                                          t.querySelectorAll("[id~=" + b + "-]")
                                              .length || g.push("~="),
                                          t.querySelectorAll(":checked")
                                              .length || g.push(":checked"),
                                          t.querySelectorAll("a#" + b + "+*")
                                              .length || g.push(".#.+[+~]");
                                  }),
                                  lt(function (t) {
                                      t.innerHTML =
                                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                      var e = p.createElement("input");
                                      e.setAttribute("type", "hidden"),
                                          t
                                              .appendChild(e)
                                              .setAttribute("name", "D"),
                                          t.querySelectorAll("[name=d]")
                                              .length &&
                                              g.push(
                                                  "name" + F + "*[*^$|!~]?="
                                              ),
                                          2 !==
                                              t.querySelectorAll(":enabled")
                                                  .length &&
                                              g.push(":enabled", ":disabled"),
                                          (h.appendChild(t).disabled = !0),
                                          2 !==
                                              t.querySelectorAll(":disabled")
                                                  .length &&
                                              g.push(":enabled", ":disabled"),
                                          t.querySelectorAll("*,:x"),
                                          g.push(",.*:");
                                  })),
                              (n.matchesSelector = Y.test(
                                  (y =
                                      h.matches ||
                                      h.webkitMatchesSelector ||
                                      h.mozMatchesSelector ||
                                      h.oMatchesSelector ||
                                      h.msMatchesSelector)
                              )) &&
                                  lt(function (t) {
                                      (n.disconnectedMatch = y.call(t, "*")),
                                          y.call(t, "[s!='']:x"),
                                          m.push("!=", W);
                                  }),
                              (g = g.length && new RegExp(g.join("|"))),
                              (m = m.length && new RegExp(m.join("|"))),
                              (e = Y.test(h.compareDocumentPosition)),
                              (_ =
                                  e || Y.test(h.contains)
                                      ? function (t, e) {
                                            var n =
                                                    9 === t.nodeType
                                                        ? t.documentElement
                                                        : t,
                                                r = e && e.parentNode;
                                            return (
                                                t === r ||
                                                !(
                                                    !r ||
                                                    1 !== r.nodeType ||
                                                    !(n.contains
                                                        ? n.contains(r)
                                                        : t.compareDocumentPosition &&
                                                          16 &
                                                              t.compareDocumentPosition(
                                                                  r
                                                              ))
                                                )
                                            );
                                        }
                                      : function (t, e) {
                                            if (e)
                                                for (; (e = e.parentNode); )
                                                    if (e === t) return !0;
                                            return !1;
                                        }),
                              (O = e
                                  ? function (t, e) {
                                        if (t === e) return (f = !0), 0;
                                        var r =
                                            !t.compareDocumentPosition -
                                            !e.compareDocumentPosition;
                                        return (
                                            r ||
                                            (1 &
                                                (r =
                                                    (t.ownerDocument || t) ===
                                                    (e.ownerDocument || e)
                                                        ? t.compareDocumentPosition(
                                                              e
                                                          )
                                                        : 1) ||
                                            (!n.sortDetached &&
                                                e.compareDocumentPosition(t) ===
                                                    r)
                                                ? t === p ||
                                                  (t.ownerDocument === w &&
                                                      _(w, t))
                                                    ? -1
                                                    : e === p ||
                                                      (e.ownerDocument === w &&
                                                          _(w, e))
                                                    ? 1
                                                    : l
                                                    ? M(l, t) - M(l, e)
                                                    : 0
                                                : 4 & r
                                                ? -1
                                                : 1)
                                        );
                                    }
                                  : function (t, e) {
                                        if (t === e) return (f = !0), 0;
                                        var n,
                                            r = 0,
                                            i = t.parentNode,
                                            o = e.parentNode,
                                            a = [t],
                                            s = [e];
                                        if (!i || !o)
                                            return t === p
                                                ? -1
                                                : e === p
                                                ? 1
                                                : i
                                                ? -1
                                                : o
                                                ? 1
                                                : l
                                                ? M(l, t) - M(l, e)
                                                : 0;
                                        if (i === o) return dt(t, e);
                                        for (n = t; (n = n.parentNode); )
                                            a.unshift(n);
                                        for (n = e; (n = n.parentNode); )
                                            s.unshift(n);
                                        for (; a[r] === s[r]; ) r++;
                                        return r
                                            ? dt(a[r], s[r])
                                            : a[r] === w
                                            ? -1
                                            : s[r] === w
                                            ? 1
                                            : 0;
                                    }),
                              p)
                            : p;
                    }),
                (st.matches = function (t, e) {
                    return st(t, null, null, e);
                }),
                (st.matchesSelector = function (t, e) {
                    if (
                        ((t.ownerDocument || t) !== p && d(t),
                        n.matchesSelector &&
                            v &&
                            !A[e + " "] &&
                            (!m || !m.test(e)) &&
                            (!g || !g.test(e)))
                    )
                        try {
                            var r = y.call(t, e);
                            if (
                                r ||
                                n.disconnectedMatch ||
                                (t.document && 11 !== t.document.nodeType)
                            )
                                return r;
                        } catch (t) {
                            A(e, !0);
                        }
                    return st(e, p, null, [t]).length > 0;
                }),
                (st.contains = function (t, e) {
                    return (t.ownerDocument || t) !== p && d(t), _(t, e);
                }),
                (st.attr = function (t, e) {
                    (t.ownerDocument || t) !== p && d(t);
                    var i = r.attrHandle[e.toLowerCase()],
                        o =
                            i && E.call(r.attrHandle, e.toLowerCase())
                                ? i(t, e, !v)
                                : void 0;
                    return void 0 !== o
                        ? o
                        : n.attributes || !v
                        ? t.getAttribute(e)
                        : (o = t.getAttributeNode(e)) && o.specified
                        ? o.value
                        : null;
                }),
                (st.escape = function (t) {
                    return (t + "").replace(rt, it);
                }),
                (st.error = function (t) {
                    throw new Error(
                        "Syntax error, unrecognized expression: " + t
                    );
                }),
                (st.uniqueSort = function (t) {
                    var e,
                        r = [],
                        i = 0,
                        o = 0;
                    if (
                        ((f = !n.detectDuplicates),
                        (l = !n.sortStable && t.slice(0)),
                        t.sort(O),
                        f)
                    ) {
                        for (; (e = t[o++]); ) e === t[o] && (i = r.push(o));
                        for (; i--; ) t.splice(r[i], 1);
                    }
                    return (l = null), t;
                }),
                (i = st.getText =
                    function (t) {
                        var e,
                            n = "",
                            r = 0,
                            o = t.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof t.textContent)
                                    return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    n += i(t);
                            } else if (3 === o || 4 === o) return t.nodeValue;
                        } else for (; (e = t[r++]); ) n += i(e);
                        return n;
                    }),
                ((r = st.selectors =
                    {
                        cacheLength: 50,
                        createPseudo: ct,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return (
                                    (t[1] = t[1].replace(et, nt)),
                                    (t[3] = (
                                        t[3] ||
                                        t[4] ||
                                        t[5] ||
                                        ""
                                    ).replace(et, nt)),
                                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                    t.slice(0, 4)
                                );
                            },
                            CHILD: function (t) {
                                return (
                                    (t[1] = t[1].toLowerCase()),
                                    "nth" === t[1].slice(0, 3)
                                        ? (t[3] || st.error(t[0]),
                                          (t[4] = +(t[4]
                                              ? t[5] + (t[6] || 1)
                                              : 2 *
                                                ("even" === t[3] ||
                                                    "odd" === t[3]))),
                                          (t[5] = +(
                                              t[7] + t[8] || "odd" === t[3]
                                          )))
                                        : t[3] && st.error(t[0]),
                                    t
                                );
                            },
                            PSEUDO: function (t) {
                                var e,
                                    n = !t[6] && t[2];
                                return G.CHILD.test(t[0])
                                    ? null
                                    : (t[3]
                                          ? (t[2] = t[4] || t[5] || "")
                                          : n &&
                                            V.test(n) &&
                                            (e = a(n, !0)) &&
                                            (e =
                                                n.indexOf(")", n.length - e) -
                                                n.length) &&
                                            ((t[0] = t[0].slice(0, e)),
                                            (t[2] = n.slice(0, e))),
                                      t.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(et, nt).toLowerCase();
                                return "*" === t
                                    ? function () {
                                          return !0;
                                      }
                                    : function (t) {
                                          return (
                                              t.nodeName &&
                                              t.nodeName.toLowerCase() === e
                                          );
                                      };
                            },
                            CLASS: function (t) {
                                var e = k[t + " "];
                                return (
                                    e ||
                                    ((e = new RegExp(
                                        "(^|" + F + ")" + t + "(" + F + "|$)"
                                    )) &&
                                        k(t, function (t) {
                                            return e.test(
                                                ("string" ==
                                                    typeof t.className &&
                                                    t.className) ||
                                                    (void 0 !==
                                                        t.getAttribute &&
                                                        t.getAttribute(
                                                            "class"
                                                        )) ||
                                                    ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (t, e, n) {
                                return function (r) {
                                    var i = st.attr(r, t);
                                    return null == i
                                        ? "!=" === e
                                        : !e ||
                                              ((i += ""),
                                              "=" === e
                                                  ? i === n
                                                  : "!=" === e
                                                  ? i !== n
                                                  : "^=" === e
                                                  ? n && 0 === i.indexOf(n)
                                                  : "*=" === e
                                                  ? n && i.indexOf(n) > -1
                                                  : "$=" === e
                                                  ? n &&
                                                    i.slice(-n.length) === n
                                                  : "~=" === e
                                                  ? (
                                                        " " +
                                                        i.replace(R, " ") +
                                                        " "
                                                    ).indexOf(n) > -1
                                                  : "|=" === e &&
                                                    (i === n ||
                                                        i.slice(
                                                            0,
                                                            n.length + 1
                                                        ) ===
                                                            n + "-"));
                                };
                            },
                            CHILD: function (t, e, n, r, i) {
                                var o = "nth" !== t.slice(0, 3),
                                    a = "last" !== t.slice(-4),
                                    s = "of-type" === e;
                                return 1 === r && 0 === i
                                    ? function (t) {
                                          return !!t.parentNode;
                                      }
                                    : function (e, n, u) {
                                          var c,
                                              l,
                                              f,
                                              d,
                                              p,
                                              h,
                                              v =
                                                  o !== a
                                                      ? "nextSibling"
                                                      : "previousSibling",
                                              g = e.parentNode,
                                              m = s && e.nodeName.toLowerCase(),
                                              y = !u && !s,
                                              _ = !1;
                                          if (g) {
                                              if (o) {
                                                  for (; v; ) {
                                                      for (d = e; (d = d[v]); )
                                                          if (
                                                              s
                                                                  ? d.nodeName.toLowerCase() ===
                                                                    m
                                                                  : 1 ===
                                                                    d.nodeType
                                                          )
                                                              return !1;
                                                      h = v =
                                                          "only" === t &&
                                                          !h &&
                                                          "nextSibling";
                                                  }
                                                  return !0;
                                              }
                                              if (
                                                  ((h = [
                                                      a
                                                          ? g.firstChild
                                                          : g.lastChild,
                                                  ]),
                                                  a && y)
                                              ) {
                                                  for (
                                                      _ =
                                                          (p =
                                                              (c =
                                                                  (l =
                                                                      (f =
                                                                          (d =
                                                                              g)[
                                                                              b
                                                                          ] ||
                                                                          (d[
                                                                              b
                                                                          ] =
                                                                              {}))[
                                                                          d
                                                                              .uniqueID
                                                                      ] ||
                                                                      (f[
                                                                          d.uniqueID
                                                                      ] = {}))[
                                                                      t
                                                                  ] ||
                                                                  [])[0] ===
                                                                  x && c[1]) &&
                                                          c[2],
                                                          d =
                                                              p &&
                                                              g.childNodes[p];
                                                      (d =
                                                          (++p && d && d[v]) ||
                                                          (_ = p = 0) ||
                                                          h.pop());

                                                  )
                                                      if (
                                                          1 === d.nodeType &&
                                                          ++_ &&
                                                          d === e
                                                      ) {
                                                          l[t] = [x, p, _];
                                                          break;
                                                      }
                                              } else if (
                                                  (y &&
                                                      (_ = p =
                                                          (c =
                                                              (l =
                                                                  (f =
                                                                      (d = e)[
                                                                          b
                                                                      ] ||
                                                                      (d[b] =
                                                                          {}))[
                                                                      d.uniqueID
                                                                  ] ||
                                                                  (f[
                                                                      d.uniqueID
                                                                  ] = {}))[t] ||
                                                              [])[0] === x &&
                                                          c[1]),
                                                  !1 === _)
                                              )
                                                  for (
                                                      ;
                                                      (d =
                                                          (++p && d && d[v]) ||
                                                          (_ = p = 0) ||
                                                          h.pop()) &&
                                                      ((s
                                                          ? d.nodeName.toLowerCase() !==
                                                            m
                                                          : 1 !== d.nodeType) ||
                                                          !++_ ||
                                                          (y &&
                                                              ((l =
                                                                  (f =
                                                                      d[b] ||
                                                                      (d[b] =
                                                                          {}))[
                                                                      d.uniqueID
                                                                  ] ||
                                                                  (f[
                                                                      d.uniqueID
                                                                  ] = {}))[t] =
                                                                  [x, _]),
                                                          d !== e));

                                                  );
                                              return (
                                                  (_ -= i) === r ||
                                                  (_ % r == 0 && _ / r >= 0)
                                              );
                                          }
                                      };
                            },
                            PSEUDO: function (t, e) {
                                var n,
                                    i =
                                        r.pseudos[t] ||
                                        r.setFilters[t.toLowerCase()] ||
                                        st.error("unsupported pseudo: " + t);
                                return i[b]
                                    ? i(e)
                                    : i.length > 1
                                    ? ((n = [t, t, "", e]),
                                      r.setFilters.hasOwnProperty(
                                          t.toLowerCase()
                                      )
                                          ? ct(function (t, n) {
                                                for (
                                                    var r,
                                                        o = i(t, e),
                                                        a = o.length;
                                                    a--;

                                                )
                                                    t[(r = M(t, o[a]))] = !(n[
                                                        r
                                                    ] = o[a]);
                                            })
                                          : function (t) {
                                                return i(t, 0, n);
                                            })
                                    : i;
                            },
                        },
                        pseudos: {
                            not: ct(function (t) {
                                var e = [],
                                    n = [],
                                    r = s(t.replace($, "$1"));
                                return r[b]
                                    ? ct(function (t, e, n, i) {
                                          for (
                                              var o,
                                                  a = r(t, null, i, []),
                                                  s = t.length;
                                              s--;

                                          )
                                              (o = a[s]) &&
                                                  (t[s] = !(e[s] = o));
                                      })
                                    : function (t, i, o) {
                                          return (
                                              (e[0] = t),
                                              r(e, null, o, n),
                                              (e[0] = null),
                                              !n.pop()
                                          );
                                      };
                            }),
                            has: ct(function (t) {
                                return function (e) {
                                    return st(t, e).length > 0;
                                };
                            }),
                            contains: ct(function (t) {
                                return (
                                    (t = t.replace(et, nt)),
                                    function (e) {
                                        return (
                                            (e.textContent || i(e)).indexOf(t) >
                                            -1
                                        );
                                    }
                                );
                            }),
                            lang: ct(function (t) {
                                return (
                                    X.test(t || "") ||
                                        st.error("unsupported lang: " + t),
                                    (t = t.replace(et, nt).toLowerCase()),
                                    function (e) {
                                        var n;
                                        do {
                                            if (
                                                (n = v
                                                    ? e.lang
                                                    : e.getAttribute(
                                                          "xml:lang"
                                                      ) ||
                                                      e.getAttribute("lang"))
                                            )
                                                return (
                                                    (n = n.toLowerCase()) ===
                                                        t ||
                                                    0 === n.indexOf(t + "-")
                                                );
                                        } while (
                                            (e = e.parentNode) &&
                                            1 === e.nodeType
                                        );
                                        return !1;
                                    }
                                );
                            }),
                            target: function (e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id;
                            },
                            root: function (t) {
                                return t === h;
                            },
                            focus: function (t) {
                                return (
                                    t === p.activeElement &&
                                    (!p.hasFocus || p.hasFocus()) &&
                                    !!(t.type || t.href || ~t.tabIndex)
                                );
                            },
                            enabled: vt(!1),
                            disabled: vt(!0),
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return (
                                    ("input" === e && !!t.checked) ||
                                    ("option" === e && !!t.selected)
                                );
                            },
                            selected: function (t) {
                                return (
                                    t.parentNode && t.parentNode.selectedIndex,
                                    !0 === t.selected
                                );
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function (t) {
                                return !r.pseudos.empty(t);
                            },
                            header: function (t) {
                                return K.test(t.nodeName);
                            },
                            input: function (t) {
                                return J.test(t.nodeName);
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return (
                                    ("input" === e && "button" === t.type) ||
                                    "button" === e
                                );
                            },
                            text: function (t) {
                                var e;
                                return (
                                    "input" === t.nodeName.toLowerCase() &&
                                    "text" === t.type &&
                                    (null == (e = t.getAttribute("type")) ||
                                        "text" === e.toLowerCase())
                                );
                            },
                            first: gt(function () {
                                return [0];
                            }),
                            last: gt(function (t, e) {
                                return [e - 1];
                            }),
                            eq: gt(function (t, e, n) {
                                return [n < 0 ? n + e : n];
                            }),
                            even: gt(function (t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t;
                            }),
                            odd: gt(function (t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t;
                            }),
                            lt: gt(function (t, e, n) {
                                for (
                                    var r = n < 0 ? n + e : n > e ? e : n;
                                    --r >= 0;

                                )
                                    t.push(r);
                                return t;
                            }),
                            gt: gt(function (t, e, n) {
                                for (var r = n < 0 ? n + e : n; ++r < e; )
                                    t.push(r);
                                return t;
                            }),
                        },
                    }).pseudos.nth = r.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    r.pseudos[e] = pt(e);
                for (e in { submit: !0, reset: !0 }) r.pseudos[e] = ht(e);
                function yt() {}
                function _t(t) {
                    for (var e = 0, n = t.length, r = ""; e < n; e++)
                        r += t[e].value;
                    return r;
                }
                function bt(t, e, n) {
                    var r = e.dir,
                        i = e.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = C++;
                    return e.first
                        ? function (e, n, i) {
                              for (; (e = e[r]); )
                                  if (1 === e.nodeType || a) return t(e, n, i);
                              return !1;
                          }
                        : function (e, n, u) {
                              var c,
                                  l,
                                  f,
                                  d = [x, s];
                              if (u) {
                                  for (; (e = e[r]); )
                                      if ((1 === e.nodeType || a) && t(e, n, u))
                                          return !0;
                              } else
                                  for (; (e = e[r]); )
                                      if (1 === e.nodeType || a)
                                          if (
                                              ((l =
                                                  (f = e[b] || (e[b] = {}))[
                                                      e.uniqueID
                                                  ] || (f[e.uniqueID] = {})),
                                              i &&
                                                  i ===
                                                      e.nodeName.toLowerCase())
                                          )
                                              e = e[r] || e;
                                          else {
                                              if (
                                                  (c = l[o]) &&
                                                  c[0] === x &&
                                                  c[1] === s
                                              )
                                                  return (d[2] = c[2]);
                                              if (
                                                  ((l[o] = d),
                                                  (d[2] = t(e, n, u)))
                                              )
                                                  return !0;
                                          }
                              return !1;
                          };
                }
                function wt(t) {
                    return t.length > 1
                        ? function (e, n, r) {
                              for (var i = t.length; i--; )
                                  if (!t[i](e, n, r)) return !1;
                              return !0;
                          }
                        : t[0];
                }
                function xt(t, e, n, r, i) {
                    for (
                        var o, a = [], s = 0, u = t.length, c = null != e;
                        s < u;
                        s++
                    )
                        (o = t[s]) &&
                            ((n && !n(o, r, i)) || (a.push(o), c && e.push(s)));
                    return a;
                }
                function Ct(t, e, n, r, i, o) {
                    return (
                        r && !r[b] && (r = Ct(r)),
                        i && !i[b] && (i = Ct(i, o)),
                        ct(function (o, a, s, u) {
                            var c,
                                l,
                                f,
                                d = [],
                                p = [],
                                h = a.length,
                                v =
                                    o ||
                                    (function (t, e, n) {
                                        for (
                                            var r = 0, i = e.length;
                                            r < i;
                                            r++
                                        )
                                            st(t, e[r], n);
                                        return n;
                                    })(e || "*", s.nodeType ? [s] : s, []),
                                g = !t || (!o && e) ? v : xt(v, d, t, s, u),
                                m = n ? (i || (o ? t : h || r) ? [] : a) : g;
                            if ((n && n(g, m, s, u), r))
                                for (
                                    c = xt(m, p), r(c, [], s, u), l = c.length;
                                    l--;

                                )
                                    (f = c[l]) && (m[p[l]] = !(g[p[l]] = f));
                            if (o) {
                                if (i || t) {
                                    if (i) {
                                        for (c = [], l = m.length; l--; )
                                            (f = m[l]) && c.push((g[l] = f));
                                        i(null, (m = []), c, u);
                                    }
                                    for (l = m.length; l--; )
                                        (f = m[l]) &&
                                            (c = i ? M(o, f) : d[l]) > -1 &&
                                            (o[c] = !(a[c] = f));
                                }
                            } else (m = xt(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : I.apply(a, m);
                        })
                    );
                }
                function kt(t) {
                    for (
                        var e,
                            n,
                            i,
                            o = t.length,
                            a = r.relative[t[0].type],
                            s = a || r.relative[" "],
                            u = a ? 1 : 0,
                            l = bt(
                                function (t) {
                                    return t === e;
                                },
                                s,
                                !0
                            ),
                            f = bt(
                                function (t) {
                                    return M(e, t) > -1;
                                },
                                s,
                                !0
                            ),
                            d = [
                                function (t, n, r) {
                                    var i =
                                        (!a && (r || n !== c)) ||
                                        ((e = n).nodeType
                                            ? l(t, n, r)
                                            : f(t, n, r));
                                    return (e = null), i;
                                },
                            ];
                        u < o;
                        u++
                    )
                        if ((n = r.relative[t[u].type])) d = [bt(wt(d), n)];
                        else {
                            if (
                                (n = r.filter[t[u].type].apply(
                                    null,
                                    t[u].matches
                                ))[b]
                            ) {
                                for (
                                    i = ++u;
                                    i < o && !r.relative[t[i].type];
                                    i++
                                );
                                return Ct(
                                    u > 1 && wt(d),
                                    u > 1 &&
                                        _t(
                                            t
                                                .slice(0, u - 1)
                                                .concat({
                                                    value:
                                                        " " === t[u - 2].type
                                                            ? "*"
                                                            : "",
                                                })
                                        ).replace($, "$1"),
                                    n,
                                    u < i && kt(t.slice(u, i)),
                                    i < o && kt((t = t.slice(i))),
                                    i < o && _t(t)
                                );
                            }
                            d.push(n);
                        }
                    return wt(d);
                }
                return (
                    (yt.prototype = r.filters = r.pseudos),
                    (r.setFilters = new yt()),
                    (a = st.tokenize =
                        function (t, e) {
                            var n,
                                i,
                                o,
                                a,
                                s,
                                u,
                                c,
                                l = T[t + " "];
                            if (l) return e ? 0 : l.slice(0);
                            for (s = t, u = [], c = r.preFilter; s; ) {
                                for (a in ((n && !(i = H.exec(s))) ||
                                    (i && (s = s.slice(i[0].length) || s),
                                    u.push((o = []))),
                                (n = !1),
                                (i = z.exec(s)) &&
                                    ((n = i.shift()),
                                    o.push({
                                        value: n,
                                        type: i[0].replace($, " "),
                                    }),
                                    (s = s.slice(n.length))),
                                r.filter))
                                    !(i = G[a].exec(s)) ||
                                        (c[a] && !(i = c[a](i))) ||
                                        ((n = i.shift()),
                                        o.push({
                                            value: n,
                                            type: a,
                                            matches: i,
                                        }),
                                        (s = s.slice(n.length)));
                                if (!n) break;
                            }
                            return e
                                ? s.length
                                : s
                                ? st.error(t)
                                : T(t, u).slice(0);
                        }),
                    (s = st.compile =
                        function (t, e) {
                            var n,
                                i = [],
                                o = [],
                                s = S[t + " "];
                            if (!s) {
                                for (e || (e = a(t)), n = e.length; n--; )
                                    (s = kt(e[n]))[b] ? i.push(s) : o.push(s);
                                (s = S(
                                    t,
                                    (function (t, e) {
                                        var n = e.length > 0,
                                            i = t.length > 0,
                                            o = function (o, a, s, u, l) {
                                                var f,
                                                    h,
                                                    g,
                                                    m = 0,
                                                    y = "0",
                                                    _ = o && [],
                                                    b = [],
                                                    w = c,
                                                    C =
                                                        o ||
                                                        (i &&
                                                            r.find.TAG("*", l)),
                                                    k = (x +=
                                                        null == w
                                                            ? 1
                                                            : Math.random() ||
                                                              0.1),
                                                    T = C.length;
                                                for (
                                                    l &&
                                                    (c = a === p || a || l);
                                                    y !== T &&
                                                    null != (f = C[y]);
                                                    y++
                                                ) {
                                                    if (i && f) {
                                                        for (
                                                            h = 0,
                                                                a ||
                                                                    f.ownerDocument ===
                                                                        p ||
                                                                    (d(f),
                                                                    (s = !v));
                                                            (g = t[h++]);

                                                        )
                                                            if (
                                                                g(f, a || p, s)
                                                            ) {
                                                                u.push(f);
                                                                break;
                                                            }
                                                        l && (x = k);
                                                    }
                                                    n &&
                                                        ((f = !g && f) && m--,
                                                        o && _.push(f));
                                                }
                                                if (((m += y), n && y !== m)) {
                                                    for (h = 0; (g = e[h++]); )
                                                        g(_, b, a, s);
                                                    if (o) {
                                                        if (m > 0)
                                                            for (; y--; )
                                                                _[y] ||
                                                                    b[y] ||
                                                                    (b[y] =
                                                                        P.call(
                                                                            u
                                                                        ));
                                                        b = xt(b);
                                                    }
                                                    I.apply(u, b),
                                                        l &&
                                                            !o &&
                                                            b.length > 0 &&
                                                            m + e.length > 1 &&
                                                            st.uniqueSort(u);
                                                }
                                                return (
                                                    l && ((x = k), (c = w)), _
                                                );
                                            };
                                        return n ? ct(o) : o;
                                    })(o, i)
                                )).selector = t;
                            }
                            return s;
                        }),
                    (u = st.select =
                        function (t, e, n, i) {
                            var o,
                                u,
                                c,
                                l,
                                f,
                                d = "function" == typeof t && t,
                                p = !i && a((t = d.selector || t));
                            if (((n = n || []), 1 === p.length)) {
                                if (
                                    (u = p[0] = p[0].slice(0)).length > 2 &&
                                    "ID" === (c = u[0]).type &&
                                    9 === e.nodeType &&
                                    v &&
                                    r.relative[u[1].type]
                                ) {
                                    if (
                                        !(e = (r.find.ID(
                                            c.matches[0].replace(et, nt),
                                            e
                                        ) || [])[0])
                                    )
                                        return n;
                                    d && (e = e.parentNode),
                                        (t = t.slice(u.shift().value.length));
                                }
                                for (
                                    o = G.needsContext.test(t) ? 0 : u.length;
                                    o-- &&
                                    ((c = u[o]), !r.relative[(l = c.type)]);

                                )
                                    if (
                                        (f = r.find[l]) &&
                                        (i = f(
                                            c.matches[0].replace(et, nt),
                                            (tt.test(u[0].type) &&
                                                mt(e.parentNode)) ||
                                                e
                                        ))
                                    ) {
                                        if (
                                            (u.splice(o, 1),
                                            !(t = i.length && _t(u)))
                                        )
                                            return I.apply(n, i), n;
                                        break;
                                    }
                            }
                            return (
                                (d || s(t, p))(
                                    i,
                                    e,
                                    !v,
                                    n,
                                    !e || (tt.test(t) && mt(e.parentNode)) || e
                                ),
                                n
                            );
                        }),
                    (n.sortStable = b.split("").sort(O).join("") === b),
                    (n.detectDuplicates = !!f),
                    d(),
                    (n.sortDetached = lt(function (t) {
                        return (
                            1 &
                            t.compareDocumentPosition(
                                p.createElement("fieldset")
                            )
                        );
                    })),
                    lt(function (t) {
                        return (
                            (t.innerHTML = "<a href='#'></a>"),
                            "#" === t.firstChild.getAttribute("href")
                        );
                    }) ||
                        ft("type|href|height|width", function (t, e, n) {
                            if (!n)
                                return t.getAttribute(
                                    e,
                                    "type" === e.toLowerCase() ? 1 : 2
                                );
                        }),
                    (n.attributes &&
                        lt(function (t) {
                            return (
                                (t.innerHTML = "<input/>"),
                                t.firstChild.setAttribute("value", ""),
                                "" === t.firstChild.getAttribute("value")
                            );
                        })) ||
                        ft("value", function (t, e, n) {
                            if (!n && "input" === t.nodeName.toLowerCase())
                                return t.defaultValue;
                        }),
                    lt(function (t) {
                        return null == t.getAttribute("disabled");
                    }) ||
                        ft(L, function (t, e, n) {
                            var r;
                            if (!n)
                                return !0 === t[e]
                                    ? e.toLowerCase()
                                    : (r = t.getAttributeNode(e)) && r.specified
                                    ? r.value
                                    : null;
                        }),
                    st
                );
            })(n);
            (C.find = S),
                (C.expr = S.selectors),
                (C.expr[":"] = C.expr.pseudos),
                (C.uniqueSort = C.unique = S.uniqueSort),
                (C.text = S.getText),
                (C.isXMLDoc = S.isXML),
                (C.contains = S.contains),
                (C.escapeSelector = S.escape);
            var A = function (t, e, n) {
                    for (
                        var r = [], i = void 0 !== n;
                        (t = t[e]) && 9 !== t.nodeType;

                    )
                        if (1 === t.nodeType) {
                            if (i && C(t).is(n)) break;
                            r.push(t);
                        }
                    return r;
                },
                O = function (t, e) {
                    for (var n = []; t; t = t.nextSibling)
                        1 === t.nodeType && t !== e && n.push(t);
                    return n;
                },
                E = C.expr.match.needsContext;
            function j(t, e) {
                return (
                    t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                );
            }
            var P =
                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function D(t, e, n) {
                return y(e)
                    ? C.grep(t, function (t, r) {
                          return !!e.call(t, r, t) !== n;
                      })
                    : e.nodeType
                    ? C.grep(t, function (t) {
                          return (t === e) !== n;
                      })
                    : "string" != typeof e
                    ? C.grep(t, function (t) {
                          return f.call(e, t) > -1 !== n;
                      })
                    : C.filter(e, t, n);
            }
            (C.filter = function (t, e, n) {
                var r = e[0];
                return (
                    n && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === r.nodeType
                        ? C.find.matchesSelector(r, t)
                            ? [r]
                            : []
                        : C.find.matches(
                              t,
                              C.grep(e, function (t) {
                                  return 1 === t.nodeType;
                              })
                          )
                );
            }),
                C.fn.extend({
                    find: function (t) {
                        var e,
                            n,
                            r = this.length,
                            i = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                C(t).filter(function () {
                                    for (e = 0; e < r; e++)
                                        if (C.contains(i[e], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), e = 0; e < r; e++)
                            C.find(t, i[e], n);
                        return r > 1 ? C.uniqueSort(n) : n;
                    },
                    filter: function (t) {
                        return this.pushStack(D(this, t || [], !1));
                    },
                    not: function (t) {
                        return this.pushStack(D(this, t || [], !0));
                    },
                    is: function (t) {
                        return !!D(
                            this,
                            "string" == typeof t && E.test(t) ? C(t) : t || [],
                            !1
                        ).length;
                    },
                });
            var I,
                N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((C.fn.init = function (t, e, n) {
                var r, i;
                if (!t) return this;
                if (((n = n || I), "string" == typeof t)) {
                    if (
                        !(r =
                            "<" === t[0] &&
                            ">" === t[t.length - 1] &&
                            t.length >= 3
                                ? [null, t, null]
                                : N.exec(t)) ||
                        (!r[1] && e)
                    )
                        return !e || e.jquery
                            ? (e || n).find(t)
                            : this.constructor(e).find(t);
                    if (r[1]) {
                        if (
                            ((e = e instanceof C ? e[0] : e),
                            C.merge(
                                this,
                                C.parseHTML(
                                    r[1],
                                    e && e.nodeType ? e.ownerDocument || e : a,
                                    !0
                                )
                            ),
                            P.test(r[1]) && C.isPlainObject(e))
                        )
                            for (r in e)
                                y(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                        return this;
                    }
                    return (
                        (i = a.getElementById(r[2])) &&
                            ((this[0] = i), (this.length = 1)),
                        this
                    );
                }
                return t.nodeType
                    ? ((this[0] = t), (this.length = 1), this)
                    : y(t)
                    ? void 0 !== n.ready
                        ? n.ready(t)
                        : t(C)
                    : C.makeArray(t, this);
            }).prototype = C.fn),
                (I = C(a));
            var M = /^(?:parents|prev(?:Until|All))/,
                L = { children: !0, contents: !0, next: !0, prev: !0 };
            function F(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; );
                return t;
            }
            C.fn.extend({
                has: function (t) {
                    var e = C(t, this),
                        n = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < n; t++)
                            if (C.contains(this, e[t])) return !0;
                    });
                },
                closest: function (t, e) {
                    var n,
                        r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof t && C(t);
                    if (!E.test(t))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== e; n = n.parentNode)
                                if (
                                    n.nodeType < 11 &&
                                    (a
                                        ? a.index(n) > -1
                                        : 1 === n.nodeType &&
                                          C.find.matchesSelector(n, t))
                                ) {
                                    o.push(n);
                                    break;
                                }
                    return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
                },
                index: function (t) {
                    return t
                        ? "string" == typeof t
                            ? f.call(C(t), this[0])
                            : f.call(this, t.jquery ? t[0] : t)
                        : this[0] && this[0].parentNode
                        ? this.first().prevAll().length
                        : -1;
                },
                add: function (t, e) {
                    return this.pushStack(
                        C.uniqueSort(C.merge(this.get(), C(t, e)))
                    );
                },
                addBack: function (t) {
                    return this.add(
                        null == t ? this.prevObject : this.prevObject.filter(t)
                    );
                },
            }),
                C.each(
                    {
                        parent: function (t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (t) {
                            return A(t, "parentNode");
                        },
                        parentsUntil: function (t, e, n) {
                            return A(t, "parentNode", n);
                        },
                        next: function (t) {
                            return F(t, "nextSibling");
                        },
                        prev: function (t) {
                            return F(t, "previousSibling");
                        },
                        nextAll: function (t) {
                            return A(t, "nextSibling");
                        },
                        prevAll: function (t) {
                            return A(t, "previousSibling");
                        },
                        nextUntil: function (t, e, n) {
                            return A(t, "nextSibling", n);
                        },
                        prevUntil: function (t, e, n) {
                            return A(t, "previousSibling", n);
                        },
                        siblings: function (t) {
                            return O((t.parentNode || {}).firstChild, t);
                        },
                        children: function (t) {
                            return O(t.firstChild);
                        },
                        contents: function (t) {
                            return void 0 !== t.contentDocument
                                ? t.contentDocument
                                : (j(t, "template") && (t = t.content || t),
                                  C.merge([], t.childNodes));
                        },
                    },
                    function (t, e) {
                        C.fn[t] = function (n, r) {
                            var i = C.map(this, e, n);
                            return (
                                "Until" !== t.slice(-5) && (r = n),
                                r &&
                                    "string" == typeof r &&
                                    (i = C.filter(r, i)),
                                this.length > 1 &&
                                    (L[t] || C.uniqueSort(i),
                                    M.test(t) && i.reverse()),
                                this.pushStack(i)
                            );
                        };
                    }
                );
            var q = /[^\x20\t\r\n\f]+/g;
            function B(t) {
                return t;
            }
            function W(t) {
                throw t;
            }
            function R(t, e, n, r) {
                var i;
                try {
                    t && y((i = t.promise))
                        ? i.call(t).done(e).fail(n)
                        : t && y((i = t.then))
                        ? i.call(t, e, n)
                        : e.apply(void 0, [t].slice(r));
                } catch (t) {
                    n.apply(void 0, [t]);
                }
            }
            (C.Callbacks = function (t) {
                t =
                    "string" == typeof t
                        ? (function (t) {
                              var e = {};
                              return (
                                  C.each(t.match(q) || [], function (t, n) {
                                      e[n] = !0;
                                  }),
                                  e
                              );
                          })(t)
                        : C.extend({}, t);
                var e,
                    n,
                    r,
                    i,
                    o = [],
                    a = [],
                    s = -1,
                    u = function () {
                        for (i = i || t.once, r = e = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length; )
                                !1 === o[s].apply(n[0], n[1]) &&
                                    t.stopOnFalse &&
                                    ((s = o.length), (n = !1));
                        t.memory || (n = !1), (e = !1), i && (o = n ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                o &&
                                    (n && !e && ((s = o.length - 1), a.push(n)),
                                    (function e(n) {
                                        C.each(n, function (n, r) {
                                            y(r)
                                                ? (t.unique && c.has(r)) ||
                                                  o.push(r)
                                                : r &&
                                                  r.length &&
                                                  "string" !== x(r) &&
                                                  e(r);
                                        });
                                    })(arguments),
                                    n && !e && u()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                C.each(arguments, function (t, e) {
                                    for (var n; (n = C.inArray(e, o, n)) > -1; )
                                        o.splice(n, 1), n <= s && s--;
                                }),
                                this
                            );
                        },
                        has: function (t) {
                            return t ? C.inArray(t, o) > -1 : o.length > 0;
                        },
                        empty: function () {
                            return o && (o = []), this;
                        },
                        disable: function () {
                            return (i = a = []), (o = n = ""), this;
                        },
                        disabled: function () {
                            return !o;
                        },
                        lock: function () {
                            return (i = a = []), n || e || (o = n = ""), this;
                        },
                        locked: function () {
                            return !!i;
                        },
                        fireWith: function (t, n) {
                            return (
                                i ||
                                    ((n = [
                                        t,
                                        (n = n || []).slice ? n.slice() : n,
                                    ]),
                                    a.push(n),
                                    e || u()),
                                this
                            );
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!r;
                        },
                    };
                return c;
            }),
                C.extend({
                    Deferred: function (t) {
                        var e = [
                                [
                                    "notify",
                                    "progress",
                                    C.Callbacks("memory"),
                                    C.Callbacks("memory"),
                                    2,
                                ],
                                [
                                    "resolve",
                                    "done",
                                    C.Callbacks("once memory"),
                                    C.Callbacks("once memory"),
                                    0,
                                    "resolved",
                                ],
                                [
                                    "reject",
                                    "fail",
                                    C.Callbacks("once memory"),
                                    C.Callbacks("once memory"),
                                    1,
                                    "rejected",
                                ],
                            ],
                            r = "pending",
                            i = {
                                state: function () {
                                    return r;
                                },
                                always: function () {
                                    return (
                                        o.done(arguments).fail(arguments), this
                                    );
                                },
                                catch: function (t) {
                                    return i.then(null, t);
                                },
                                pipe: function () {
                                    var t = arguments;
                                    return C.Deferred(function (n) {
                                        C.each(e, function (e, r) {
                                            var i = y(t[r[4]]) && t[r[4]];
                                            o[r[1]](function () {
                                                var t =
                                                    i &&
                                                    i.apply(this, arguments);
                                                t && y(t.promise)
                                                    ? t
                                                          .promise()
                                                          .progress(n.notify)
                                                          .done(n.resolve)
                                                          .fail(n.reject)
                                                    : n[r[0] + "With"](
                                                          this,
                                                          i ? [t] : arguments
                                                      );
                                            });
                                        }),
                                            (t = null);
                                    }).promise();
                                },
                                then: function (t, r, i) {
                                    var o = 0;
                                    function a(t, e, r, i) {
                                        return function () {
                                            var s = this,
                                                u = arguments,
                                                c = function () {
                                                    var n, c;
                                                    if (!(t < o)) {
                                                        if (
                                                            (n = r.apply(
                                                                s,
                                                                u
                                                            )) === e.promise()
                                                        )
                                                            throw new TypeError(
                                                                "Thenable self-resolution"
                                                            );
                                                        (c =
                                                            n &&
                                                            ("object" ==
                                                                typeof n ||
                                                                "function" ==
                                                                    typeof n) &&
                                                            n.then),
                                                            y(c)
                                                                ? i
                                                                    ? c.call(
                                                                          n,
                                                                          a(
                                                                              o,
                                                                              e,
                                                                              B,
                                                                              i
                                                                          ),
                                                                          a(
                                                                              o,
                                                                              e,
                                                                              W,
                                                                              i
                                                                          )
                                                                      )
                                                                    : (o++,
                                                                      c.call(
                                                                          n,
                                                                          a(
                                                                              o,
                                                                              e,
                                                                              B,
                                                                              i
                                                                          ),
                                                                          a(
                                                                              o,
                                                                              e,
                                                                              W,
                                                                              i
                                                                          ),
                                                                          a(
                                                                              o,
                                                                              e,
                                                                              B,
                                                                              e.notifyWith
                                                                          )
                                                                      ))
                                                                : (r !== B &&
                                                                      ((s =
                                                                          void 0),
                                                                      (u = [
                                                                          n,
                                                                      ])),
                                                                  (
                                                                      i ||
                                                                      e.resolveWith
                                                                  )(s, u));
                                                    }
                                                },
                                                l = i
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (n) {
                                                              C.Deferred
                                                                  .exceptionHook &&
                                                                  C.Deferred.exceptionHook(
                                                                      n,
                                                                      l.stackTrace
                                                                  ),
                                                                  t + 1 >= o &&
                                                                      (r !==
                                                                          W &&
                                                                          ((s =
                                                                              void 0),
                                                                          (u = [
                                                                              n,
                                                                          ])),
                                                                      e.rejectWith(
                                                                          s,
                                                                          u
                                                                      ));
                                                          }
                                                      };
                                            t
                                                ? l()
                                                : (C.Deferred.getStackHook &&
                                                      (l.stackTrace =
                                                          C.Deferred.getStackHook()),
                                                  n.setTimeout(l));
                                        };
                                    }
                                    return C.Deferred(function (n) {
                                        e[0][3].add(
                                            a(0, n, y(i) ? i : B, n.notifyWith)
                                        ),
                                            e[1][3].add(a(0, n, y(t) ? t : B)),
                                            e[2][3].add(a(0, n, y(r) ? r : W));
                                    }).promise();
                                },
                                promise: function (t) {
                                    return null != t ? C.extend(t, i) : i;
                                },
                            },
                            o = {};
                        return (
                            C.each(e, function (t, n) {
                                var a = n[2],
                                    s = n[5];
                                (i[n[1]] = a.add),
                                    s &&
                                        a.add(
                                            function () {
                                                r = s;
                                            },
                                            e[3 - t][2].disable,
                                            e[3 - t][3].disable,
                                            e[0][2].lock,
                                            e[0][3].lock
                                        ),
                                    a.add(n[3].fire),
                                    (o[n[0]] = function () {
                                        return (
                                            o[n[0] + "With"](
                                                this === o ? void 0 : this,
                                                arguments
                                            ),
                                            this
                                        );
                                    }),
                                    (o[n[0] + "With"] = a.fireWith);
                            }),
                            i.promise(o),
                            t && t.call(o, o),
                            o
                        );
                    },
                    when: function (t) {
                        var e = arguments.length,
                            n = e,
                            r = Array(n),
                            i = u.call(arguments),
                            o = C.Deferred(),
                            a = function (t) {
                                return function (n) {
                                    (r[t] = this),
                                        (i[t] =
                                            arguments.length > 1
                                                ? u.call(arguments)
                                                : n),
                                        --e || o.resolveWith(r, i);
                                };
                            };
                        if (
                            e <= 1 &&
                            (R(t, o.done(a(n)).resolve, o.reject, !e),
                            "pending" === o.state() || y(i[n] && i[n].then))
                        )
                            return o.then();
                        for (; n--; ) R(i[n], a(n), o.reject);
                        return o.promise();
                    },
                });
            var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (C.Deferred.exceptionHook = function (t, e) {
                n.console &&
                    n.console.warn &&
                    t &&
                    $.test(t.name) &&
                    n.console.warn(
                        "jQuery.Deferred exception: " + t.message,
                        t.stack,
                        e
                    );
            }),
                (C.readyException = function (t) {
                    n.setTimeout(function () {
                        throw t;
                    });
                });
            var H = C.Deferred();
            function z() {
                a.removeEventListener("DOMContentLoaded", z),
                    n.removeEventListener("load", z),
                    C.ready();
            }
            (C.fn.ready = function (t) {
                return (
                    H.then(t).catch(function (t) {
                        C.readyException(t);
                    }),
                    this
                );
            }),
                C.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (t) {
                        (!0 === t ? --C.readyWait : C.isReady) ||
                            ((C.isReady = !0),
                            (!0 !== t && --C.readyWait > 0) ||
                                H.resolveWith(a, [C]));
                    },
                }),
                (C.ready.then = H.then),
                "complete" === a.readyState ||
                ("loading" !== a.readyState && !a.documentElement.doScroll)
                    ? n.setTimeout(C.ready)
                    : (a.addEventListener("DOMContentLoaded", z),
                      n.addEventListener("load", z));
            var U = function (t, e, n, r, i, o, a) {
                    var s = 0,
                        u = t.length,
                        c = null == n;
                    if ("object" === x(n))
                        for (s in ((i = !0), n)) U(t, e, s, n[s], !0, o, a);
                    else if (
                        void 0 !== r &&
                        ((i = !0),
                        y(r) || (a = !0),
                        c &&
                            (a
                                ? (e.call(t, r), (e = null))
                                : ((c = e),
                                  (e = function (t, e, n) {
                                      return c.call(C(t), n);
                                  }))),
                        e)
                    )
                        for (; s < u; s++)
                            e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                    return i ? t : c ? e.call(t) : u ? e(t[0], n) : o;
                },
                V = /^-ms-/,
                X = /-([a-z])/g;
            function G(t, e) {
                return e.toUpperCase();
            }
            function Q(t) {
                return t.replace(V, "ms-").replace(X, G);
            }
            var J = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function K() {
                this.expando = C.expando + K.uid++;
            }
            (K.uid = 1),
                (K.prototype = {
                    cache: function (t) {
                        var e = t[this.expando];
                        return (
                            e ||
                                ((e = {}),
                                J(t) &&
                                    (t.nodeType
                                        ? (t[this.expando] = e)
                                        : Object.defineProperty(
                                              t,
                                              this.expando,
                                              { value: e, configurable: !0 }
                                          ))),
                            e
                        );
                    },
                    set: function (t, e, n) {
                        var r,
                            i = this.cache(t);
                        if ("string" == typeof e) i[Q(e)] = n;
                        else for (r in e) i[Q(r)] = e[r];
                        return i;
                    },
                    get: function (t, e) {
                        return void 0 === e
                            ? this.cache(t)
                            : t[this.expando] && t[this.expando][Q(e)];
                    },
                    access: function (t, e, n) {
                        return void 0 === e ||
                            (e && "string" == typeof e && void 0 === n)
                            ? this.get(t, e)
                            : (this.set(t, e, n), void 0 !== n ? n : e);
                    },
                    remove: function (t, e) {
                        var n,
                            r = t[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e)
                                    ? e.map(Q)
                                    : (e = Q(e)) in r
                                    ? [e]
                                    : e.match(q) || []).length;
                                for (; n--; ) delete r[e[n]];
                            }
                            (void 0 === e || C.isEmptyObject(r)) &&
                                (t.nodeType
                                    ? (t[this.expando] = void 0)
                                    : delete t[this.expando]);
                        }
                    },
                    hasData: function (t) {
                        var e = t[this.expando];
                        return void 0 !== e && !C.isEmptyObject(e);
                    },
                });
            var Y = new K(),
                Z = new K(),
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;
            function nt(t, e, n) {
                var r;
                if (void 0 === n && 1 === t.nodeType)
                    if (
                        ((r = "data-" + e.replace(et, "-$&").toLowerCase()),
                        "string" == typeof (n = t.getAttribute(r)))
                    ) {
                        try {
                            n = (function (t) {
                                return (
                                    "true" === t ||
                                    ("false" !== t &&
                                        ("null" === t
                                            ? null
                                            : t === +t + ""
                                            ? +t
                                            : tt.test(t)
                                            ? JSON.parse(t)
                                            : t))
                                );
                            })(n);
                        } catch (t) {}
                        Z.set(t, e, n);
                    } else n = void 0;
                return n;
            }
            C.extend({
                hasData: function (t) {
                    return Z.hasData(t) || Y.hasData(t);
                },
                data: function (t, e, n) {
                    return Z.access(t, e, n);
                },
                removeData: function (t, e) {
                    Z.remove(t, e);
                },
                _data: function (t, e, n) {
                    return Y.access(t, e, n);
                },
                _removeData: function (t, e) {
                    Y.remove(t, e);
                },
            }),
                C.fn.extend({
                    data: function (t, e) {
                        var n,
                            r,
                            i,
                            o = this[0],
                            a = o && o.attributes;
                        if (void 0 === t) {
                            if (
                                this.length &&
                                ((i = Z.get(o)),
                                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
                            ) {
                                for (n = a.length; n--; )
                                    a[n] &&
                                        0 ===
                                            (r = a[n].name).indexOf("data-") &&
                                        ((r = Q(r.slice(5))), nt(o, r, i[r]));
                                Y.set(o, "hasDataAttrs", !0);
                            }
                            return i;
                        }
                        return "object" == typeof t
                            ? this.each(function () {
                                  Z.set(this, t);
                              })
                            : U(
                                  this,
                                  function (e) {
                                      var n;
                                      if (o && void 0 === e)
                                          return void 0 !== (n = Z.get(o, t))
                                              ? n
                                              : void 0 !== (n = nt(o, t))
                                              ? n
                                              : void 0;
                                      this.each(function () {
                                          Z.set(this, t, e);
                                      });
                                  },
                                  null,
                                  e,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (t) {
                        return this.each(function () {
                            Z.remove(this, t);
                        });
                    },
                }),
                C.extend({
                    queue: function (t, e, n) {
                        var r;
                        if (t)
                            return (
                                (e = (e || "fx") + "queue"),
                                (r = Y.get(t, e)),
                                n &&
                                    (!r || Array.isArray(n)
                                        ? (r = Y.access(t, e, C.makeArray(n)))
                                        : r.push(n)),
                                r || []
                            );
                    },
                    dequeue: function (t, e) {
                        e = e || "fx";
                        var n = C.queue(t, e),
                            r = n.length,
                            i = n.shift(),
                            o = C._queueHooks(t, e);
                        "inprogress" === i && ((i = n.shift()), r--),
                            i &&
                                ("fx" === e && n.unshift("inprogress"),
                                delete o.stop,
                                i.call(
                                    t,
                                    function () {
                                        C.dequeue(t, e);
                                    },
                                    o
                                )),
                            !r && o && o.empty.fire();
                    },
                    _queueHooks: function (t, e) {
                        var n = e + "queueHooks";
                        return (
                            Y.get(t, n) ||
                            Y.access(t, n, {
                                empty: C.Callbacks("once memory").add(
                                    function () {
                                        Y.remove(t, [e + "queue", n]);
                                    }
                                ),
                            })
                        );
                    },
                }),
                C.fn.extend({
                    queue: function (t, e) {
                        var n = 2;
                        return (
                            "string" != typeof t && ((e = t), (t = "fx"), n--),
                            arguments.length < n
                                ? C.queue(this[0], t)
                                : void 0 === e
                                ? this
                                : this.each(function () {
                                      var n = C.queue(this, t, e);
                                      C._queueHooks(this, t),
                                          "fx" === t &&
                                              "inprogress" !== n[0] &&
                                              C.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function (t) {
                        return this.each(function () {
                            C.dequeue(this, t);
                        });
                    },
                    clearQueue: function (t) {
                        return this.queue(t || "fx", []);
                    },
                    promise: function (t, e) {
                        var n,
                            r = 1,
                            i = C.Deferred(),
                            o = this,
                            a = this.length,
                            s = function () {
                                --r || i.resolveWith(o, [o]);
                            };
                        for (
                            "string" != typeof t && ((e = t), (t = void 0)),
                                t = t || "fx";
                            a--;

                        )
                            (n = Y.get(o[a], t + "queueHooks")) &&
                                n.empty &&
                                (r++, n.empty.add(s));
                        return s(), i.promise(e);
                    },
                });
            var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                it = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
                ot = ["Top", "Right", "Bottom", "Left"],
                at = a.documentElement,
                st = function (t) {
                    return C.contains(t.ownerDocument, t);
                },
                ut = { composed: !0 };
            at.getRootNode &&
                (st = function (t) {
                    return (
                        C.contains(t.ownerDocument, t) ||
                        t.getRootNode(ut) === t.ownerDocument
                    );
                });
            var ct = function (t, e) {
                    return (
                        "none" === (t = e || t).style.display ||
                        ("" === t.style.display &&
                            st(t) &&
                            "none" === C.css(t, "display"))
                    );
                },
                lt = function (t, e, n, r) {
                    var i,
                        o,
                        a = {};
                    for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
                    for (o in ((i = n.apply(t, r || [])), e)) t.style[o] = a[o];
                    return i;
                };
            function ft(t, e, n, r) {
                var i,
                    o,
                    a = 20,
                    s = r
                        ? function () {
                              return r.cur();
                          }
                        : function () {
                              return C.css(t, e, "");
                          },
                    u = s(),
                    c = (n && n[3]) || (C.cssNumber[e] ? "" : "px"),
                    l =
                        t.nodeType &&
                        (C.cssNumber[e] || ("px" !== c && +u)) &&
                        it.exec(C.css(t, e));
                if (l && l[3] !== c) {
                    for (u /= 2, c = c || l[3], l = +u || 1; a--; )
                        C.style(t, e, l + c),
                            (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 &&
                                (a = 0),
                            (l /= o);
                    (l *= 2), C.style(t, e, l + c), (n = n || []);
                }
                return (
                    n &&
                        ((l = +l || +u || 0),
                        (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                        r && ((r.unit = c), (r.start = l), (r.end = i))),
                    i
                );
            }
            var dt = {};
            function pt(t) {
                var e,
                    n = t.ownerDocument,
                    r = t.nodeName,
                    i = dt[r];
                return (
                    i ||
                    ((e = n.body.appendChild(n.createElement(r))),
                    (i = C.css(e, "display")),
                    e.parentNode.removeChild(e),
                    "none" === i && (i = "block"),
                    (dt[r] = i),
                    i)
                );
            }
            function ht(t, e) {
                for (var n, r, i = [], o = 0, a = t.length; o < a; o++)
                    (r = t[o]).style &&
                        ((n = r.style.display),
                        e
                            ? ("none" === n &&
                                  ((i[o] = Y.get(r, "display") || null),
                                  i[o] || (r.style.display = "")),
                              "" === r.style.display && ct(r) && (i[o] = pt(r)))
                            : "none" !== n &&
                              ((i[o] = "none"), Y.set(r, "display", n)));
                for (o = 0; o < a; o++)
                    null != i[o] && (t[o].style.display = i[o]);
                return t;
            }
            C.fn.extend({
                show: function () {
                    return ht(this, !0);
                },
                hide: function () {
                    return ht(this);
                },
                toggle: function (t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ct(this) ? C(this).show() : C(this).hide();
                          });
                },
            });
            var vt = /^(?:checkbox|radio)$/i,
                gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                mt = /^$|^module$|\/(?:java|ecma)script/i,
                yt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            function _t(t, e) {
                var n;
                return (
                    (n =
                        void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e || "*")
                            : void 0 !== t.querySelectorAll
                            ? t.querySelectorAll(e || "*")
                            : []),
                    void 0 === e || (e && j(t, e)) ? C.merge([t], n) : n
                );
            }
            function bt(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    Y.set(t[n], "globalEval", !e || Y.get(e[n], "globalEval"));
            }
            (yt.optgroup = yt.option),
                (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
                (yt.th = yt.td);
            var wt = /<|&#?\w+;/;
            function xt(t, e, n, r, i) {
                for (
                    var o,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f = e.createDocumentFragment(),
                        d = [],
                        p = 0,
                        h = t.length;
                    p < h;
                    p++
                )
                    if ((o = t[p]) || 0 === o)
                        if ("object" === x(o)) C.merge(d, o.nodeType ? [o] : o);
                        else if (wt.test(o)) {
                            for (
                                a = a || f.appendChild(e.createElement("div")),
                                    s = (gt.exec(o) || [
                                        "",
                                        "",
                                    ])[1].toLowerCase(),
                                    u = yt[s] || yt._default,
                                    a.innerHTML =
                                        u[1] + C.htmlPrefilter(o) + u[2],
                                    l = u[0];
                                l--;

                            )
                                a = a.lastChild;
                            C.merge(d, a.childNodes),
                                ((a = f.firstChild).textContent = "");
                        } else d.push(e.createTextNode(o));
                for (f.textContent = "", p = 0; (o = d[p++]); )
                    if (r && C.inArray(o, r) > -1) i && i.push(o);
                    else if (
                        ((c = st(o)),
                        (a = _t(f.appendChild(o), "script")),
                        c && bt(a),
                        n)
                    )
                        for (l = 0; (o = a[l++]); )
                            mt.test(o.type || "") && n.push(o);
                return f;
            }
            !(function () {
                var t = a
                        .createDocumentFragment()
                        .appendChild(a.createElement("div")),
                    e = a.createElement("input");
                e.setAttribute("type", "radio"),
                    e.setAttribute("checked", "checked"),
                    e.setAttribute("name", "t"),
                    t.appendChild(e),
                    (m.checkClone = t
                        .cloneNode(!0)
                        .cloneNode(!0).lastChild.checked),
                    (t.innerHTML = "<textarea>x</textarea>"),
                    (m.noCloneChecked = !!t.cloneNode(!0).lastChild
                        .defaultValue);
            })();
            var Ct = /^key/,
                kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Tt = /^([^.]*)(?:\.(.+)|)/;
            function St() {
                return !0;
            }
            function At() {
                return !1;
            }
            function Ot(t, e) {
                return (
                    (t ===
                        (function () {
                            try {
                                return a.activeElement;
                            } catch (t) {}
                        })()) ==
                    ("focus" === e)
                );
            }
            function Et(t, e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    for (s in ("string" != typeof n &&
                        ((r = r || n), (n = void 0)),
                    e))
                        Et(t, s, n, r, e[s], o);
                    return t;
                }
                if (
                    (null == r && null == i
                        ? ((i = n), (r = n = void 0))
                        : null == i &&
                          ("string" == typeof n
                              ? ((i = r), (r = void 0))
                              : ((i = r), (r = n), (n = void 0))),
                    !1 === i)
                )
                    i = At;
                else if (!i) return t;
                return (
                    1 === o &&
                        ((a = i),
                        ((i = function (t) {
                            return C().off(t), a.apply(this, arguments);
                        }).guid = a.guid || (a.guid = C.guid++))),
                    t.each(function () {
                        C.event.add(this, e, i, r, n);
                    })
                );
            }
            function jt(t, e, n) {
                n
                    ? (Y.set(t, e, !1),
                      C.event.add(t, e, {
                          namespace: !1,
                          handler: function (t) {
                              var r,
                                  i,
                                  o = Y.get(this, e);
                              if (1 & t.isTrigger && this[e]) {
                                  if (o.length)
                                      (C.event.special[e] || {}).delegateType &&
                                          t.stopPropagation();
                                  else if (
                                      ((o = u.call(arguments)),
                                      Y.set(this, e, o),
                                      (r = n(this, e)),
                                      this[e](),
                                      o !== (i = Y.get(this, e)) || r
                                          ? Y.set(this, e, !1)
                                          : (i = {}),
                                      o !== i)
                                  )
                                      return (
                                          t.stopImmediatePropagation(),
                                          t.preventDefault(),
                                          i.value
                                      );
                              } else
                                  o.length &&
                                      (Y.set(this, e, {
                                          value: C.event.trigger(
                                              C.extend(o[0], C.Event.prototype),
                                              o.slice(1),
                                              this
                                          ),
                                      }),
                                      t.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === Y.get(t, e) && C.event.add(t, e, St);
            }
            (C.event = {
                global: {},
                add: function (t, e, n, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d,
                        p,
                        h,
                        v,
                        g = Y.get(t);
                    if (g)
                        for (
                            n.handler &&
                                ((n = (o = n).handler), (i = o.selector)),
                                i && C.find.matchesSelector(at, i),
                                n.guid || (n.guid = C.guid++),
                                (u = g.events) || (u = g.events = {}),
                                (a = g.handle) ||
                                    (a = g.handle =
                                        function (e) {
                                            return void 0 !== C &&
                                                C.event.triggered !== e.type
                                                ? C.event.dispatch.apply(
                                                      t,
                                                      arguments
                                                  )
                                                : void 0;
                                        }),
                                c = (e = (e || "").match(q) || [""]).length;
                            c--;

                        )
                            (p = v = (s = Tt.exec(e[c]) || [])[1]),
                                (h = (s[2] || "").split(".").sort()),
                                p &&
                                    ((f = C.event.special[p] || {}),
                                    (p =
                                        (i ? f.delegateType : f.bindType) || p),
                                    (f = C.event.special[p] || {}),
                                    (l = C.extend(
                                        {
                                            type: p,
                                            origType: v,
                                            data: r,
                                            handler: n,
                                            guid: n.guid,
                                            selector: i,
                                            needsContext:
                                                i &&
                                                C.expr.match.needsContext.test(
                                                    i
                                                ),
                                            namespace: h.join("."),
                                        },
                                        o
                                    )),
                                    (d = u[p]) ||
                                        (((d = u[p] = []).delegateCount = 0),
                                        (f.setup &&
                                            !1 !== f.setup.call(t, r, h, a)) ||
                                            (t.addEventListener &&
                                                t.addEventListener(p, a))),
                                    f.add &&
                                        (f.add.call(t, l),
                                        l.handler.guid ||
                                            (l.handler.guid = n.guid)),
                                    i
                                        ? d.splice(d.delegateCount++, 0, l)
                                        : d.push(l),
                                    (C.event.global[p] = !0));
                },
                remove: function (t, e, n, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d,
                        p,
                        h,
                        v,
                        g = Y.hasData(t) && Y.get(t);
                    if (g && (u = g.events)) {
                        for (c = (e = (e || "").match(q) || [""]).length; c--; )
                            if (
                                ((p = v = (s = Tt.exec(e[c]) || [])[1]),
                                (h = (s[2] || "").split(".").sort()),
                                p)
                            ) {
                                for (
                                    f = C.event.special[p] || {},
                                        d =
                                            u[
                                                (p =
                                                    (r
                                                        ? f.delegateType
                                                        : f.bindType) || p)
                                            ] || [],
                                        s =
                                            s[2] &&
                                            new RegExp(
                                                "(^|\\.)" +
                                                    h.join("\\.(?:.*\\.|)") +
                                                    "(\\.|$)"
                                            ),
                                        a = o = d.length;
                                    o--;

                                )
                                    (l = d[o]),
                                        (!i && v !== l.origType) ||
                                            (n && n.guid !== l.guid) ||
                                            (s && !s.test(l.namespace)) ||
                                            (r &&
                                                r !== l.selector &&
                                                ("**" !== r || !l.selector)) ||
                                            (d.splice(o, 1),
                                            l.selector && d.delegateCount--,
                                            f.remove && f.remove.call(t, l));
                                a &&
                                    !d.length &&
                                    ((f.teardown &&
                                        !1 !==
                                            f.teardown.call(t, h, g.handle)) ||
                                        C.removeEvent(t, p, g.handle),
                                    delete u[p]);
                            } else
                                for (p in u)
                                    C.event.remove(t, p + e[c], n, r, !0);
                        C.isEmptyObject(u) && Y.remove(t, "handle events");
                    }
                },
                dispatch: function (t) {
                    var e,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s = C.event.fix(t),
                        u = new Array(arguments.length),
                        c = (Y.get(this, "events") || {})[s.type] || [],
                        l = C.event.special[s.type] || {};
                    for (u[0] = s, e = 1; e < arguments.length; e++)
                        u[e] = arguments[e];
                    if (
                        ((s.delegateTarget = this),
                        !l.preDispatch || !1 !== l.preDispatch.call(this, s))
                    ) {
                        for (
                            a = C.event.handlers.call(this, s, c), e = 0;
                            (i = a[e++]) && !s.isPropagationStopped();

                        )
                            for (
                                s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) &&
                                !s.isImmediatePropagationStopped();

                            )
                                (s.rnamespace &&
                                    !1 !== o.namespace &&
                                    !s.rnamespace.test(o.namespace)) ||
                                    ((s.handleObj = o),
                                    (s.data = o.data),
                                    void 0 !==
                                        (r = (
                                            (C.event.special[o.origType] || {})
                                                .handle || o.handler
                                        ).apply(i.elem, u)) &&
                                        !1 === (s.result = r) &&
                                        (s.preventDefault(),
                                        s.stopPropagation()));
                        return (
                            l.postDispatch && l.postDispatch.call(this, s),
                            s.result
                        );
                    }
                },
                handlers: function (t, e) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s = [],
                        u = e.delegateCount,
                        c = t.target;
                    if (
                        u &&
                        c.nodeType &&
                        !("click" === t.type && t.button >= 1)
                    )
                        for (; c !== this; c = c.parentNode || this)
                            if (
                                1 === c.nodeType &&
                                ("click" !== t.type || !0 !== c.disabled)
                            ) {
                                for (o = [], a = {}, n = 0; n < u; n++)
                                    void 0 ===
                                        a[(i = (r = e[n]).selector + " ")] &&
                                        (a[i] = r.needsContext
                                            ? C(i, this).index(c) > -1
                                            : C.find(i, this, null, [c])
                                                  .length),
                                        a[i] && o.push(r);
                                o.length && s.push({ elem: c, handlers: o });
                            }
                    return (
                        (c = this),
                        u < e.length &&
                            s.push({ elem: c, handlers: e.slice(u) }),
                        s
                    );
                },
                addProp: function (t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e)
                            ? function () {
                                  if (this.originalEvent)
                                      return e(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent)
                                      return this.originalEvent[t];
                              },
                        set: function (e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e,
                            });
                        },
                    });
                },
                fix: function (t) {
                    return t[C.expando] ? t : new C.Event(t);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (t) {
                            var e = this || t;
                            return (
                                vt.test(e.type) &&
                                    e.click &&
                                    j(e, "input") &&
                                    jt(e, "click", St),
                                !1
                            );
                        },
                        trigger: function (t) {
                            var e = this || t;
                            return (
                                vt.test(e.type) &&
                                    e.click &&
                                    j(e, "input") &&
                                    jt(e, "click"),
                                !0
                            );
                        },
                        _default: function (t) {
                            var e = t.target;
                            return (
                                (vt.test(e.type) &&
                                    e.click &&
                                    j(e, "input") &&
                                    Y.get(e, "click")) ||
                                j(e, "a")
                            );
                        },
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result &&
                                t.originalEvent &&
                                (t.originalEvent.returnValue = t.result);
                        },
                    },
                },
            }),
                (C.removeEvent = function (t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n);
                }),
                (C.Event = function (t, e) {
                    if (!(this instanceof C.Event)) return new C.Event(t, e);
                    t && t.type
                        ? ((this.originalEvent = t),
                          (this.type = t.type),
                          (this.isDefaultPrevented =
                              t.defaultPrevented ||
                              (void 0 === t.defaultPrevented &&
                                  !1 === t.returnValue)
                                  ? St
                                  : At),
                          (this.target =
                              t.target && 3 === t.target.nodeType
                                  ? t.target.parentNode
                                  : t.target),
                          (this.currentTarget = t.currentTarget),
                          (this.relatedTarget = t.relatedTarget))
                        : (this.type = t),
                        e && C.extend(this, e),
                        (this.timeStamp = (t && t.timeStamp) || Date.now()),
                        (this[C.expando] = !0);
                }),
                (C.Event.prototype = {
                    constructor: C.Event,
                    isDefaultPrevented: At,
                    isPropagationStopped: At,
                    isImmediatePropagationStopped: At,
                    isSimulated: !1,
                    preventDefault: function () {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = St),
                            t && !this.isSimulated && t.preventDefault();
                    },
                    stopPropagation: function () {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = St),
                            t && !this.isSimulated && t.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = St),
                            t &&
                                !this.isSimulated &&
                                t.stopImmediatePropagation(),
                            this.stopPropagation();
                    },
                }),
                C.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (t) {
                            var e = t.button;
                            return null == t.which && Ct.test(t.type)
                                ? null != t.charCode
                                    ? t.charCode
                                    : t.keyCode
                                : !t.which && void 0 !== e && kt.test(t.type)
                                ? 1 & e
                                    ? 1
                                    : 2 & e
                                    ? 3
                                    : 4 & e
                                    ? 2
                                    : 0
                                : t.which;
                        },
                    },
                    C.event.addProp
                ),
                C.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                    C.event.special[t] = {
                        setup: function () {
                            return jt(this, t, Ot), !1;
                        },
                        trigger: function () {
                            return jt(this, t), !0;
                        },
                        delegateType: e,
                    };
                }),
                C.each(
                    {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout",
                    },
                    function (t, e) {
                        C.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function (t) {
                                var n,
                                    r = t.relatedTarget,
                                    i = t.handleObj;
                                return (
                                    (r &&
                                        (r === this || C.contains(this, r))) ||
                                        ((t.type = i.origType),
                                        (n = i.handler.apply(this, arguments)),
                                        (t.type = e)),
                                    n
                                );
                            },
                        };
                    }
                ),
                C.fn.extend({
                    on: function (t, e, n, r) {
                        return Et(this, t, e, n, r);
                    },
                    one: function (t, e, n, r) {
                        return Et(this, t, e, n, r, 1);
                    },
                    off: function (t, e, n) {
                        var r, i;
                        if (t && t.preventDefault && t.handleObj)
                            return (
                                (r = t.handleObj),
                                C(t.delegateTarget).off(
                                    r.namespace
                                        ? r.origType + "." + r.namespace
                                        : r.origType,
                                    r.selector,
                                    r.handler
                                ),
                                this
                            );
                        if ("object" == typeof t) {
                            for (i in t) this.off(i, e, t[i]);
                            return this;
                        }
                        return (
                            (!1 !== e && "function" != typeof e) ||
                                ((n = e), (e = void 0)),
                            !1 === n && (n = At),
                            this.each(function () {
                                C.event.remove(this, t, n, e);
                            })
                        );
                    },
                });
            var Pt =
                    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Dt = /<script|<style|<link/i,
                It = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Mt(t, e) {
                return (
                    (j(t, "table") &&
                        j(11 !== e.nodeType ? e : e.firstChild, "tr") &&
                        C(t).children("tbody")[0]) ||
                    t
                );
            }
            function Lt(t) {
                return (
                    (t.type = (null !== t.getAttribute("type")) + "/" + t.type),
                    t
                );
            }
            function Ft(t) {
                return (
                    "true/" === (t.type || "").slice(0, 5)
                        ? (t.type = t.type.slice(5))
                        : t.removeAttribute("type"),
                    t
                );
            }
            function qt(t, e) {
                var n, r, i, o, a, s, u, c;
                if (1 === e.nodeType) {
                    if (
                        Y.hasData(t) &&
                        ((o = Y.access(t)), (a = Y.set(e, o)), (c = o.events))
                    )
                        for (i in (delete a.handle, (a.events = {}), c))
                            for (n = 0, r = c[i].length; n < r; n++)
                                C.event.add(e, i, c[i][n]);
                    Z.hasData(t) &&
                        ((s = Z.access(t)), (u = C.extend({}, s)), Z.set(e, u));
                }
            }
            function Bt(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && vt.test(t.type)
                    ? (e.checked = t.checked)
                    : ("input" !== n && "textarea" !== n) ||
                      (e.defaultValue = t.defaultValue);
            }
            function Wt(t, e, n, r) {
                e = c.apply([], e);
                var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    f = 0,
                    d = t.length,
                    p = d - 1,
                    h = e[0],
                    v = y(h);
                if (
                    v ||
                    (d > 1 &&
                        "string" == typeof h &&
                        !m.checkClone &&
                        It.test(h))
                )
                    return t.each(function (i) {
                        var o = t.eq(i);
                        v && (e[0] = h.call(this, i, o.html())), Wt(o, e, n, r);
                    });
                if (
                    d &&
                    ((o = (i = xt(e, t[0].ownerDocument, !1, t, r)).firstChild),
                    1 === i.childNodes.length && (i = o),
                    o || r)
                ) {
                    for (
                        s = (a = C.map(_t(i, "script"), Lt)).length;
                        f < d;
                        f++
                    )
                        (u = i),
                            f !== p &&
                                ((u = C.clone(u, !0, !0)),
                                s && C.merge(a, _t(u, "script"))),
                            n.call(t[f], u, f);
                    if (s)
                        for (
                            l = a[a.length - 1].ownerDocument,
                                C.map(a, Ft),
                                f = 0;
                            f < s;
                            f++
                        )
                            (u = a[f]),
                                mt.test(u.type || "") &&
                                    !Y.access(u, "globalEval") &&
                                    C.contains(l, u) &&
                                    (u.src &&
                                    "module" !== (u.type || "").toLowerCase()
                                        ? C._evalUrl &&
                                          !u.noModule &&
                                          C._evalUrl(u.src, {
                                              nonce:
                                                  u.nonce ||
                                                  u.getAttribute("nonce"),
                                          })
                                        : w(
                                              u.textContent.replace(Nt, ""),
                                              u,
                                              l
                                          ));
                }
                return t;
            }
            function Rt(t, e, n) {
                for (
                    var r, i = e ? C.filter(e, t) : t, o = 0;
                    null != (r = i[o]);
                    o++
                )
                    n || 1 !== r.nodeType || C.cleanData(_t(r)),
                        r.parentNode &&
                            (n && st(r) && bt(_t(r, "script")),
                            r.parentNode.removeChild(r));
                return t;
            }
            C.extend({
                htmlPrefilter: function (t) {
                    return t.replace(Pt, "<$1></$2>");
                },
                clone: function (t, e, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = t.cloneNode(!0),
                        u = st(t);
                    if (
                        !(
                            m.noCloneChecked ||
                            (1 !== t.nodeType && 11 !== t.nodeType) ||
                            C.isXMLDoc(t)
                        )
                    )
                        for (
                            a = _t(s), r = 0, i = (o = _t(t)).length;
                            r < i;
                            r++
                        )
                            Bt(o[r], a[r]);
                    if (e)
                        if (n)
                            for (
                                o = o || _t(t),
                                    a = a || _t(s),
                                    r = 0,
                                    i = o.length;
                                r < i;
                                r++
                            )
                                qt(o[r], a[r]);
                        else qt(t, s);
                    return (
                        (a = _t(s, "script")).length > 0 &&
                            bt(a, !u && _t(t, "script")),
                        s
                    );
                },
                cleanData: function (t) {
                    for (
                        var e, n, r, i = C.event.special, o = 0;
                        void 0 !== (n = t[o]);
                        o++
                    )
                        if (J(n)) {
                            if ((e = n[Y.expando])) {
                                if (e.events)
                                    for (r in e.events)
                                        i[r]
                                            ? C.event.remove(n, r)
                                            : C.removeEvent(n, r, e.handle);
                                n[Y.expando] = void 0;
                            }
                            n[Z.expando] && (n[Z.expando] = void 0);
                        }
                },
            }),
                C.fn.extend({
                    detach: function (t) {
                        return Rt(this, t, !0);
                    },
                    remove: function (t) {
                        return Rt(this, t);
                    },
                    text: function (t) {
                        return U(
                            this,
                            function (t) {
                                return void 0 === t
                                    ? C.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType &&
                                              11 !== this.nodeType &&
                                              9 !== this.nodeType) ||
                                              (this.textContent = t);
                                      });
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    append: function () {
                        return Wt(this, arguments, function (t) {
                            (1 !== this.nodeType &&
                                11 !== this.nodeType &&
                                9 !== this.nodeType) ||
                                Mt(this, t).appendChild(t);
                        });
                    },
                    prepend: function () {
                        return Wt(this, arguments, function (t) {
                            if (
                                1 === this.nodeType ||
                                11 === this.nodeType ||
                                9 === this.nodeType
                            ) {
                                var e = Mt(this, t);
                                e.insertBefore(t, e.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return Wt(this, arguments, function (t) {
                            this.parentNode &&
                                this.parentNode.insertBefore(t, this);
                        });
                    },
                    after: function () {
                        return Wt(this, arguments, function (t) {
                            this.parentNode &&
                                this.parentNode.insertBefore(
                                    t,
                                    this.nextSibling
                                );
                        });
                    },
                    empty: function () {
                        for (var t, e = 0; null != (t = this[e]); e++)
                            1 === t.nodeType &&
                                (C.cleanData(_t(t, !1)), (t.textContent = ""));
                        return this;
                    },
                    clone: function (t, e) {
                        return (
                            (t = null != t && t),
                            (e = null == e ? t : e),
                            this.map(function () {
                                return C.clone(this, t, e);
                            })
                        );
                    },
                    html: function (t) {
                        return U(
                            this,
                            function (t) {
                                var e = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === t && 1 === e.nodeType)
                                    return e.innerHTML;
                                if (
                                    "string" == typeof t &&
                                    !Dt.test(t) &&
                                    !yt[
                                        (gt.exec(t) || [
                                            "",
                                            "",
                                        ])[1].toLowerCase()
                                    ]
                                ) {
                                    t = C.htmlPrefilter(t);
                                    try {
                                        for (; n < r; n++)
                                            1 ===
                                                (e = this[n] || {}).nodeType &&
                                                (C.cleanData(_t(e, !1)),
                                                (e.innerHTML = t));
                                        e = 0;
                                    } catch (t) {}
                                }
                                e && this.empty().append(t);
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var t = [];
                        return Wt(
                            this,
                            arguments,
                            function (e) {
                                var n = this.parentNode;
                                C.inArray(this, t) < 0 &&
                                    (C.cleanData(_t(this)),
                                    n && n.replaceChild(e, this));
                            },
                            t
                        );
                    },
                }),
                C.each(
                    {
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith",
                    },
                    function (t, e) {
                        C.fn[t] = function (t) {
                            for (
                                var n,
                                    r = [],
                                    i = C(t),
                                    o = i.length - 1,
                                    a = 0;
                                a <= o;
                                a++
                            )
                                (n = a === o ? this : this.clone(!0)),
                                    C(i[a])[e](n),
                                    l.apply(r, n.get());
                            return this.pushStack(r);
                        };
                    }
                );
            var $t = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
                Ht = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return (e && e.opener) || (e = n), e.getComputedStyle(t);
                },
                zt = new RegExp(ot.join("|"), "i");
            function Ut(t, e, n) {
                var r,
                    i,
                    o,
                    a,
                    s = t.style;
                return (
                    (n = n || Ht(t)) &&
                        ("" !== (a = n.getPropertyValue(e) || n[e]) ||
                            st(t) ||
                            (a = C.style(t, e)),
                        !m.pixelBoxStyles() &&
                            $t.test(a) &&
                            zt.test(e) &&
                            ((r = s.width),
                            (i = s.minWidth),
                            (o = s.maxWidth),
                            (s.minWidth = s.maxWidth = s.width = a),
                            (a = n.width),
                            (s.width = r),
                            (s.minWidth = i),
                            (s.maxWidth = o))),
                    void 0 !== a ? a + "" : a
                );
            }
            function Vt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function t() {
                    if (l) {
                        (c.style.cssText =
                            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (l.style.cssText =
                                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            at.appendChild(c).appendChild(l);
                        var t = n.getComputedStyle(l);
                        (r = "1%" !== t.top),
                            (u = 12 === e(t.marginLeft)),
                            (l.style.right = "60%"),
                            (s = 36 === e(t.right)),
                            (i = 36 === e(t.width)),
                            (l.style.position = "absolute"),
                            (o = 12 === e(l.offsetWidth / 3)),
                            at.removeChild(c),
                            (l = null);
                    }
                }
                function e(t) {
                    return Math.round(parseFloat(t));
                }
                var r,
                    i,
                    o,
                    s,
                    u,
                    c = a.createElement("div"),
                    l = a.createElement("div");
                l.style &&
                    ((l.style.backgroundClip = "content-box"),
                    (l.cloneNode(!0).style.backgroundClip = ""),
                    (m.clearCloneStyle =
                        "content-box" === l.style.backgroundClip),
                    C.extend(m, {
                        boxSizingReliable: function () {
                            return t(), i;
                        },
                        pixelBoxStyles: function () {
                            return t(), s;
                        },
                        pixelPosition: function () {
                            return t(), r;
                        },
                        reliableMarginLeft: function () {
                            return t(), u;
                        },
                        scrollboxSize: function () {
                            return t(), o;
                        },
                    }));
            })();
            var Xt = ["Webkit", "Moz", "ms"],
                Gt = a.createElement("div").style,
                Qt = {};
            function Jt(t) {
                var e = C.cssProps[t] || Qt[t];
                return (
                    e ||
                    (t in Gt
                        ? t
                        : (Qt[t] =
                              (function (t) {
                                  for (
                                      var e = t[0].toUpperCase() + t.slice(1),
                                          n = Xt.length;
                                      n--;

                                  )
                                      if ((t = Xt[n] + e) in Gt) return t;
                              })(t) || t))
                );
            }
            var Kt = /^(none|table(?!-c[ea]).+)/,
                Yt = /^--/,
                Zt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block",
                },
                te = { letterSpacing: "0", fontWeight: "400" };
            function ee(t, e, n) {
                var r = it.exec(e);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
            }
            function ne(t, e, n, r, i, o) {
                var a = "width" === e ? 1 : 0,
                    s = 0,
                    u = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2)
                    "margin" === n && (u += C.css(t, n + ot[a], !0, i)),
                        r
                            ? ("content" === n &&
                                  (u -= C.css(t, "padding" + ot[a], !0, i)),
                              "margin" !== n &&
                                  (u -= C.css(
                                      t,
                                      "border" + ot[a] + "Width",
                                      !0,
                                      i
                                  )))
                            : ((u += C.css(t, "padding" + ot[a], !0, i)),
                              "padding" !== n
                                  ? (u += C.css(
                                        t,
                                        "border" + ot[a] + "Width",
                                        !0,
                                        i
                                    ))
                                  : (s += C.css(
                                        t,
                                        "border" + ot[a] + "Width",
                                        !0,
                                        i
                                    )));
                return (
                    !r &&
                        o >= 0 &&
                        (u +=
                            Math.max(
                                0,
                                Math.ceil(
                                    t[
                                        "offset" +
                                            e[0].toUpperCase() +
                                            e.slice(1)
                                    ] -
                                        o -
                                        u -
                                        s -
                                        0.5
                                )
                            ) || 0),
                    u
                );
            }
            function re(t, e, n) {
                var r = Ht(t),
                    i =
                        (!m.boxSizingReliable() || n) &&
                        "border-box" === C.css(t, "boxSizing", !1, r),
                    o = i,
                    a = Ut(t, e, r),
                    s = "offset" + e[0].toUpperCase() + e.slice(1);
                if ($t.test(a)) {
                    if (!n) return a;
                    a = "auto";
                }
                return (
                    ((!m.boxSizingReliable() && i) ||
                        "auto" === a ||
                        (!parseFloat(a) &&
                            "inline" === C.css(t, "display", !1, r))) &&
                        t.getClientRects().length &&
                        ((i = "border-box" === C.css(t, "boxSizing", !1, r)),
                        (o = s in t) && (a = t[s])),
                    (a = parseFloat(a) || 0) +
                        ne(t, e, n || (i ? "border" : "content"), o, r, a) +
                        "px"
                );
            }
            function ie(t, e, n, r, i) {
                return new ie.prototype.init(t, e, n, r, i);
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = Ut(t, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i,
                            o,
                            a,
                            s = Q(e),
                            u = Yt.test(e),
                            c = t.style;
                        if (
                            (u || (e = Jt(s)),
                            (a = C.cssHooks[e] || C.cssHooks[s]),
                            void 0 === n)
                        )
                            return a &&
                                "get" in a &&
                                void 0 !== (i = a.get(t, !1, r))
                                ? i
                                : c[e];
                        "string" === (o = typeof n) &&
                            (i = it.exec(n)) &&
                            i[1] &&
                            ((n = ft(t, e, i)), (o = "number")),
                            null != n &&
                                n == n &&
                                ("number" !== o ||
                                    u ||
                                    (n +=
                                        (i && i[3]) ||
                                        (C.cssNumber[s] ? "" : "px")),
                                m.clearCloneStyle ||
                                    "" !== n ||
                                    0 !== e.indexOf("background") ||
                                    (c[e] = "inherit"),
                                (a &&
                                    "set" in a &&
                                    void 0 === (n = a.set(t, n, r))) ||
                                    (u ? c.setProperty(e, n) : (c[e] = n)));
                    }
                },
                css: function (t, e, n, r) {
                    var i,
                        o,
                        a,
                        s = Q(e);
                    return (
                        Yt.test(e) || (e = Jt(s)),
                        (a = C.cssHooks[e] || C.cssHooks[s]) &&
                            "get" in a &&
                            (i = a.get(t, !0, n)),
                        void 0 === i && (i = Ut(t, e, r)),
                        "normal" === i && e in te && (i = te[e]),
                        "" === n || n
                            ? ((o = parseFloat(i)),
                              !0 === n || isFinite(o) ? o || 0 : i)
                            : i
                    );
                },
            }),
                C.each(["height", "width"], function (t, e) {
                    C.cssHooks[e] = {
                        get: function (t, n, r) {
                            if (n)
                                return !Kt.test(C.css(t, "display")) ||
                                    (t.getClientRects().length &&
                                        t.getBoundingClientRect().width)
                                    ? re(t, e, r)
                                    : lt(t, Zt, function () {
                                          return re(t, e, r);
                                      });
                        },
                        set: function (t, n, r) {
                            var i,
                                o = Ht(t),
                                a =
                                    !m.scrollboxSize() &&
                                    "absolute" === o.position,
                                s =
                                    (a || r) &&
                                    "border-box" ===
                                        C.css(t, "boxSizing", !1, o),
                                u = r ? ne(t, e, r, s, o) : 0;
                            return (
                                s &&
                                    a &&
                                    (u -= Math.ceil(
                                        t[
                                            "offset" +
                                                e[0].toUpperCase() +
                                                e.slice(1)
                                        ] -
                                            parseFloat(o[e]) -
                                            ne(t, e, "border", !1, o) -
                                            0.5
                                    )),
                                u &&
                                    (i = it.exec(n)) &&
                                    "px" !== (i[3] || "px") &&
                                    ((t.style[e] = n), (n = C.css(t, e))),
                                ee(0, n, u)
                            );
                        },
                    };
                }),
                (C.cssHooks.marginLeft = Vt(
                    m.reliableMarginLeft,
                    function (t, e) {
                        if (e)
                            return (
                                (parseFloat(Ut(t, "marginLeft")) ||
                                    t.getBoundingClientRect().left -
                                        lt(t, { marginLeft: 0 }, function () {
                                            return t.getBoundingClientRect().left;
                                        })) + "px"
                            );
                    }
                )),
                C.each(
                    { margin: "", padding: "", border: "Width" },
                    function (t, e) {
                        (C.cssHooks[t + e] = {
                            expand: function (n) {
                                for (
                                    var r = 0,
                                        i = {},
                                        o =
                                            "string" == typeof n
                                                ? n.split(" ")
                                                : [n];
                                    r < 4;
                                    r++
                                )
                                    i[t + ot[r] + e] = o[r] || o[r - 2] || o[0];
                                return i;
                            },
                        }),
                            "margin" !== t && (C.cssHooks[t + e].set = ee);
                    }
                ),
                C.fn.extend({
                    css: function (t, e) {
                        return U(
                            this,
                            function (t, e, n) {
                                var r,
                                    i,
                                    o = {},
                                    a = 0;
                                if (Array.isArray(e)) {
                                    for (r = Ht(t), i = e.length; a < i; a++)
                                        o[e[a]] = C.css(t, e[a], !1, r);
                                    return o;
                                }
                                return void 0 !== n
                                    ? C.style(t, e, n)
                                    : C.css(t, e);
                            },
                            t,
                            e,
                            arguments.length > 1
                        );
                    },
                }),
                (C.Tween = ie),
                (ie.prototype = {
                    constructor: ie,
                    init: function (t, e, n, r, i, o) {
                        (this.elem = t),
                            (this.prop = n),
                            (this.easing = i || C.easing._default),
                            (this.options = e),
                            (this.start = this.now = this.cur()),
                            (this.end = r),
                            (this.unit = o || (C.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var t = ie.propHooks[this.prop];
                        return t && t.get
                            ? t.get(this)
                            : ie.propHooks._default.get(this);
                    },
                    run: function (t) {
                        var e,
                            n = ie.propHooks[this.prop];
                        return (
                            this.options.duration
                                ? (this.pos = e =
                                      C.easing[this.easing](
                                          t,
                                          this.options.duration * t,
                                          0,
                                          1,
                                          this.options.duration
                                      ))
                                : (this.pos = e = t),
                            (this.now =
                                (this.end - this.start) * e + this.start),
                            this.options.step &&
                                this.options.step.call(
                                    this.elem,
                                    this.now,
                                    this
                                ),
                            n && n.set
                                ? n.set(this)
                                : ie.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (ie.prototype.init.prototype = ie.prototype),
                (ie.propHooks = {
                    _default: {
                        get: function (t) {
                            var e;
                            return 1 !== t.elem.nodeType ||
                                (null != t.elem[t.prop] &&
                                    null == t.elem.style[t.prop])
                                ? t.elem[t.prop]
                                : (e = C.css(t.elem, t.prop, "")) &&
                                  "auto" !== e
                                ? e
                                : 0;
                        },
                        set: function (t) {
                            C.fx.step[t.prop]
                                ? C.fx.step[t.prop](t)
                                : 1 !== t.elem.nodeType ||
                                  (!C.cssHooks[t.prop] &&
                                      null == t.elem.style[Jt(t.prop)])
                                ? (t.elem[t.prop] = t.now)
                                : C.style(t.elem, t.prop, t.now + t.unit);
                        },
                    },
                }),
                (ie.propHooks.scrollTop = ie.propHooks.scrollLeft =
                    {
                        set: function (t) {
                            t.elem.nodeType &&
                                t.elem.parentNode &&
                                (t.elem[t.prop] = t.now);
                        },
                    }),
                (C.easing = {
                    linear: function (t) {
                        return t;
                    },
                    swing: function (t) {
                        return 0.5 - Math.cos(t * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (C.fx = ie.prototype.init),
                (C.fx.step = {});
            var oe,
                ae,
                se = /^(?:toggle|show|hide)$/,
                ue = /queueHooks$/;
            function ce() {
                ae &&
                    (!1 === a.hidden && n.requestAnimationFrame
                        ? n.requestAnimationFrame(ce)
                        : n.setTimeout(ce, C.fx.interval),
                    C.fx.tick());
            }
            function le() {
                return (
                    n.setTimeout(function () {
                        oe = void 0;
                    }),
                    (oe = Date.now())
                );
            }
            function fe(t, e) {
                var n,
                    r = 0,
                    i = { height: t };
                for (e = e ? 1 : 0; r < 4; r += 2 - e)
                    i["margin" + (n = ot[r])] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i;
            }
            function de(t, e, n) {
                for (
                    var r,
                        i = (pe.tweeners[e] || []).concat(pe.tweeners["*"]),
                        o = 0,
                        a = i.length;
                    o < a;
                    o++
                )
                    if ((r = i[o].call(n, e, t))) return r;
            }
            function pe(t, e, n) {
                var r,
                    i,
                    o = 0,
                    a = pe.prefilters.length,
                    s = C.Deferred().always(function () {
                        delete u.elem;
                    }),
                    u = function () {
                        if (i) return !1;
                        for (
                            var e = oe || le(),
                                n = Math.max(0, c.startTime + c.duration - e),
                                r = 1 - (n / c.duration || 0),
                                o = 0,
                                a = c.tweens.length;
                            o < a;
                            o++
                        )
                            c.tweens[o].run(r);
                        return (
                            s.notifyWith(t, [c, r, n]),
                            r < 1 && a
                                ? n
                                : (a || s.notifyWith(t, [c, 1, 0]),
                                  s.resolveWith(t, [c]),
                                  !1)
                        );
                    },
                    c = s.promise({
                        elem: t,
                        props: C.extend({}, e),
                        opts: C.extend(
                            !0,
                            { specialEasing: {}, easing: C.easing._default },
                            n
                        ),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: oe || le(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (e, n) {
                            var r = C.Tween(
                                t,
                                c.opts,
                                e,
                                n,
                                c.opts.specialEasing[e] || c.opts.easing
                            );
                            return c.tweens.push(r), r;
                        },
                        stop: function (e) {
                            var n = 0,
                                r = e ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) c.tweens[n].run(1);
                            return (
                                e
                                    ? (s.notifyWith(t, [c, 1, 0]),
                                      s.resolveWith(t, [c, e]))
                                    : s.rejectWith(t, [c, e]),
                                this
                            );
                        },
                    }),
                    l = c.props;
                for (
                    !(function (t, e) {
                        var n, r, i, o, a;
                        for (n in t)
                            if (
                                ((i = e[(r = Q(n))]),
                                (o = t[n]),
                                Array.isArray(o) &&
                                    ((i = o[1]), (o = t[n] = o[0])),
                                n !== r && ((t[r] = o), delete t[n]),
                                (a = C.cssHooks[r]) && ("expand" in a))
                            )
                                for (n in ((o = a.expand(o)), delete t[r], o))
                                    (n in t) || ((t[n] = o[n]), (e[n] = i));
                            else e[r] = i;
                    })(l, c.opts.specialEasing);
                    o < a;
                    o++
                )
                    if ((r = pe.prefilters[o].call(c, t, l, c.opts)))
                        return (
                            y(r.stop) &&
                                (C._queueHooks(c.elem, c.opts.queue).stop =
                                    r.stop.bind(r)),
                            r
                        );
                return (
                    C.map(l, de, c),
                    y(c.opts.start) && c.opts.start.call(t, c),
                    c
                        .progress(c.opts.progress)
                        .done(c.opts.done, c.opts.complete)
                        .fail(c.opts.fail)
                        .always(c.opts.always),
                    C.fx.timer(
                        C.extend(u, { elem: t, anim: c, queue: c.opts.queue })
                    ),
                    c
                );
            }
            (C.Animation = C.extend(pe, {
                tweeners: {
                    "*": [
                        function (t, e) {
                            var n = this.createTween(t, e);
                            return ft(n.elem, t, it.exec(e), n), n;
                        },
                    ],
                },
                tweener: function (t, e) {
                    y(t) ? ((e = t), (t = ["*"])) : (t = t.match(q));
                    for (var n, r = 0, i = t.length; r < i; r++)
                        (n = t[r]),
                            (pe.tweeners[n] = pe.tweeners[n] || []),
                            pe.tweeners[n].unshift(e);
                },
                prefilters: [
                    function (t, e, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            c,
                            l,
                            f = "width" in e || "height" in e,
                            d = this,
                            p = {},
                            h = t.style,
                            v = t.nodeType && ct(t),
                            g = Y.get(t, "fxshow");
                        for (r in (n.queue ||
                            (null == (a = C._queueHooks(t, "fx")).unqueued &&
                                ((a.unqueued = 0),
                                (s = a.empty.fire),
                                (a.empty.fire = function () {
                                    a.unqueued || s();
                                })),
                            a.unqueued++,
                            d.always(function () {
                                d.always(function () {
                                    a.unqueued--,
                                        C.queue(t, "fx").length ||
                                            a.empty.fire();
                                });
                            })),
                        e))
                            if (((i = e[r]), se.test(i))) {
                                if (
                                    (delete e[r],
                                    (o = o || "toggle" === i),
                                    i === (v ? "hide" : "show"))
                                ) {
                                    if ("show" !== i || !g || void 0 === g[r])
                                        continue;
                                    v = !0;
                                }
                                p[r] = (g && g[r]) || C.style(t, r);
                            }
                        if ((u = !C.isEmptyObject(e)) || !C.isEmptyObject(p))
                            for (r in (f &&
                                1 === t.nodeType &&
                                ((n.overflow = [
                                    h.overflow,
                                    h.overflowX,
                                    h.overflowY,
                                ]),
                                null == (c = g && g.display) &&
                                    (c = Y.get(t, "display")),
                                "none" === (l = C.css(t, "display")) &&
                                    (c
                                        ? (l = c)
                                        : (ht([t], !0),
                                          (c = t.style.display || c),
                                          (l = C.css(t, "display")),
                                          ht([t]))),
                                ("inline" === l ||
                                    ("inline-block" === l && null != c)) &&
                                    "none" === C.css(t, "float") &&
                                    (u ||
                                        (d.done(function () {
                                            h.display = c;
                                        }),
                                        null == c &&
                                            ((l = h.display),
                                            (c = "none" === l ? "" : l))),
                                    (h.display = "inline-block"))),
                            n.overflow &&
                                ((h.overflow = "hidden"),
                                d.always(function () {
                                    (h.overflow = n.overflow[0]),
                                        (h.overflowX = n.overflow[1]),
                                        (h.overflowY = n.overflow[2]);
                                })),
                            (u = !1),
                            p))
                                u ||
                                    (g
                                        ? "hidden" in g && (v = g.hidden)
                                        : (g = Y.access(t, "fxshow", {
                                              display: c,
                                          })),
                                    o && (g.hidden = !v),
                                    v && ht([t], !0),
                                    d.done(function () {
                                        for (r in (v || ht([t]),
                                        Y.remove(t, "fxshow"),
                                        p))
                                            C.style(t, r, p[r]);
                                    })),
                                    (u = de(v ? g[r] : 0, r, d)),
                                    r in g ||
                                        ((g[r] = u.start),
                                        v &&
                                            ((u.end = u.start), (u.start = 0)));
                    },
                ],
                prefilter: function (t, e) {
                    e ? pe.prefilters.unshift(t) : pe.prefilters.push(t);
                },
            })),
                (C.speed = function (t, e, n) {
                    var r =
                        t && "object" == typeof t
                            ? C.extend({}, t)
                            : {
                                  complete: n || (!n && e) || (y(t) && t),
                                  duration: t,
                                  easing: (n && e) || (e && !y(e) && e),
                              };
                    return (
                        C.fx.off
                            ? (r.duration = 0)
                            : "number" != typeof r.duration &&
                              (r.duration in C.fx.speeds
                                  ? (r.duration = C.fx.speeds[r.duration])
                                  : (r.duration = C.fx.speeds._default)),
                        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                        (r.old = r.complete),
                        (r.complete = function () {
                            y(r.old) && r.old.call(this),
                                r.queue && C.dequeue(this, r.queue);
                        }),
                        r
                    );
                }),
                C.fn.extend({
                    fadeTo: function (t, e, n, r) {
                        return this.filter(ct)
                            .css("opacity", 0)
                            .show()
                            .end()
                            .animate({ opacity: e }, t, n, r);
                    },
                    animate: function (t, e, n, r) {
                        var i = C.isEmptyObject(t),
                            o = C.speed(e, n, r),
                            a = function () {
                                var e = pe(this, C.extend({}, t), o);
                                (i || Y.get(this, "finish")) && e.stop(!0);
                            };
                        return (
                            (a.finish = a),
                            i || !1 === o.queue
                                ? this.each(a)
                                : this.queue(o.queue, a)
                        );
                    },
                    stop: function (t, e, n) {
                        var r = function (t) {
                            var e = t.stop;
                            delete t.stop, e(n);
                        };
                        return (
                            "string" != typeof t &&
                                ((n = e), (e = t), (t = void 0)),
                            e && !1 !== t && this.queue(t || "fx", []),
                            this.each(function () {
                                var e = !0,
                                    i = null != t && t + "queueHooks",
                                    o = C.timers,
                                    a = Y.get(this);
                                if (i) a[i] && a[i].stop && r(a[i]);
                                else
                                    for (i in a)
                                        a[i] &&
                                            a[i].stop &&
                                            ue.test(i) &&
                                            r(a[i]);
                                for (i = o.length; i--; )
                                    o[i].elem !== this ||
                                        (null != t && o[i].queue !== t) ||
                                        (o[i].anim.stop(n),
                                        (e = !1),
                                        o.splice(i, 1));
                                (!e && n) || C.dequeue(this, t);
                            })
                        );
                    },
                    finish: function (t) {
                        return (
                            !1 !== t && (t = t || "fx"),
                            this.each(function () {
                                var e,
                                    n = Y.get(this),
                                    r = n[t + "queue"],
                                    i = n[t + "queueHooks"],
                                    o = C.timers,
                                    a = r ? r.length : 0;
                                for (
                                    n.finish = !0,
                                        C.queue(this, t, []),
                                        i && i.stop && i.stop.call(this, !0),
                                        e = o.length;
                                    e--;

                                )
                                    o[e].elem === this &&
                                        o[e].queue === t &&
                                        (o[e].anim.stop(!0), o.splice(e, 1));
                                for (e = 0; e < a; e++)
                                    r[e] &&
                                        r[e].finish &&
                                        r[e].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                C.each(["toggle", "show", "hide"], function (t, e) {
                    var n = C.fn[e];
                    C.fn[e] = function (t, r, i) {
                        return null == t || "boolean" == typeof t
                            ? n.apply(this, arguments)
                            : this.animate(fe(e, !0), t, r, i);
                    };
                }),
                C.each(
                    {
                        slideDown: fe("show"),
                        slideUp: fe("hide"),
                        slideToggle: fe("toggle"),
                        fadeIn: { opacity: "show" },
                        fadeOut: { opacity: "hide" },
                        fadeToggle: { opacity: "toggle" },
                    },
                    function (t, e) {
                        C.fn[t] = function (t, n, r) {
                            return this.animate(e, t, n, r);
                        };
                    }
                ),
                (C.timers = []),
                (C.fx.tick = function () {
                    var t,
                        e = 0,
                        n = C.timers;
                    for (oe = Date.now(); e < n.length; e++)
                        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                    n.length || C.fx.stop(), (oe = void 0);
                }),
                (C.fx.timer = function (t) {
                    C.timers.push(t), C.fx.start();
                }),
                (C.fx.interval = 13),
                (C.fx.start = function () {
                    ae || ((ae = !0), ce());
                }),
                (C.fx.stop = function () {
                    ae = null;
                }),
                (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (C.fn.delay = function (t, e) {
                    return (
                        (t = (C.fx && C.fx.speeds[t]) || t),
                        (e = e || "fx"),
                        this.queue(e, function (e, r) {
                            var i = n.setTimeout(e, t);
                            r.stop = function () {
                                n.clearTimeout(i);
                            };
                        })
                    );
                }),
                (function () {
                    var t = a.createElement("input"),
                        e = a
                            .createElement("select")
                            .appendChild(a.createElement("option"));
                    (t.type = "checkbox"),
                        (m.checkOn = "" !== t.value),
                        (m.optSelected = e.selected),
                        ((t = a.createElement("input")).value = "t"),
                        (t.type = "radio"),
                        (m.radioValue = "t" === t.value);
                })();
            var he,
                ve = C.expr.attrHandle;
            C.fn.extend({
                attr: function (t, e) {
                    return U(this, C.attr, t, e, arguments.length > 1);
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        C.removeAttr(this, t);
                    });
                },
            }),
                C.extend({
                    attr: function (t, e, n) {
                        var r,
                            i,
                            o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === t.getAttribute
                                ? C.prop(t, e, n)
                                : ((1 === o && C.isXMLDoc(t)) ||
                                      (i =
                                          C.attrHooks[e.toLowerCase()] ||
                                          (C.expr.match.bool.test(e)
                                              ? he
                                              : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void C.removeAttr(t, e)
                                          : i &&
                                            "set" in i &&
                                            void 0 !== (r = i.set(t, n, e))
                                          ? r
                                          : (t.setAttribute(e, n + ""), n)
                                      : i &&
                                        "get" in i &&
                                        null !== (r = i.get(t, e))
                                      ? r
                                      : null == (r = C.find.attr(t, e))
                                      ? void 0
                                      : r);
                    },
                    attrHooks: {
                        type: {
                            set: function (t, e) {
                                if (
                                    !m.radioValue &&
                                    "radio" === e &&
                                    j(t, "input")
                                ) {
                                    var n = t.value;
                                    return (
                                        t.setAttribute("type", e),
                                        n && (t.value = n),
                                        e
                                    );
                                }
                            },
                        },
                    },
                    removeAttr: function (t, e) {
                        var n,
                            r = 0,
                            i = e && e.match(q);
                        if (i && 1 === t.nodeType)
                            for (; (n = i[r++]); ) t.removeAttribute(n);
                    },
                }),
                (he = {
                    set: function (t, e, n) {
                        return (
                            !1 === e
                                ? C.removeAttr(t, n)
                                : t.setAttribute(n, n),
                            n
                        );
                    },
                }),
                C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
                    var n = ve[e] || C.find.attr;
                    ve[e] = function (t, e, r) {
                        var i,
                            o,
                            a = e.toLowerCase();
                        return (
                            r ||
                                ((o = ve[a]),
                                (ve[a] = i),
                                (i = null != n(t, e, r) ? a : null),
                                (ve[a] = o)),
                            i
                        );
                    };
                });
            var ge = /^(?:input|select|textarea|button)$/i,
                me = /^(?:a|area)$/i;
            function ye(t) {
                return (t.match(q) || []).join(" ");
            }
            function _e(t) {
                return (t.getAttribute && t.getAttribute("class")) || "";
            }
            function be(t) {
                return Array.isArray(t)
                    ? t
                    : ("string" == typeof t && t.match(q)) || [];
            }
            C.fn.extend({
                prop: function (t, e) {
                    return U(this, C.prop, t, e, arguments.length > 1);
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[C.propFix[t] || t];
                    });
                },
            }),
                C.extend({
                    prop: function (t, e, n) {
                        var r,
                            i,
                            o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && C.isXMLDoc(t)) ||
                                    ((e = C.propFix[e] || e),
                                    (i = C.propHooks[e])),
                                void 0 !== n
                                    ? i &&
                                      "set" in i &&
                                      void 0 !== (r = i.set(t, n, e))
                                        ? r
                                        : (t[e] = n)
                                    : i &&
                                      "get" in i &&
                                      null !== (r = i.get(t, e))
                                    ? r
                                    : t[e]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (t) {
                                var e = C.find.attr(t, "tabindex");
                                return e
                                    ? parseInt(e, 10)
                                    : ge.test(t.nodeName) ||
                                      (me.test(t.nodeName) && t.href)
                                    ? 0
                                    : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                m.optSelected ||
                    (C.propHooks.selected = {
                        get: function (t) {
                            var e = t.parentNode;
                            return (
                                e && e.parentNode && e.parentNode.selectedIndex,
                                null
                            );
                        },
                        set: function (t) {
                            var e = t.parentNode;
                            e &&
                                (e.selectedIndex,
                                e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                C.each(
                    [
                        "tabIndex",
                        "readOnly",
                        "maxLength",
                        "cellSpacing",
                        "cellPadding",
                        "rowSpan",
                        "colSpan",
                        "useMap",
                        "frameBorder",
                        "contentEditable",
                    ],
                    function () {
                        C.propFix[this.toLowerCase()] = this;
                    }
                ),
                C.fn.extend({
                    addClass: function (t) {
                        var e,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u = 0;
                        if (y(t))
                            return this.each(function (e) {
                                C(this).addClass(t.call(this, e, _e(this)));
                            });
                        if ((e = be(t)).length)
                            for (; (n = this[u++]); )
                                if (
                                    ((i = _e(n)),
                                    (r = 1 === n.nodeType && " " + ye(i) + " "))
                                ) {
                                    for (a = 0; (o = e[a++]); )
                                        r.indexOf(" " + o + " ") < 0 &&
                                            (r += o + " ");
                                    i !== (s = ye(r)) &&
                                        n.setAttribute("class", s);
                                }
                        return this;
                    },
                    removeClass: function (t) {
                        var e,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u = 0;
                        if (y(t))
                            return this.each(function (e) {
                                C(this).removeClass(t.call(this, e, _e(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = be(t)).length)
                            for (; (n = this[u++]); )
                                if (
                                    ((i = _e(n)),
                                    (r = 1 === n.nodeType && " " + ye(i) + " "))
                                ) {
                                    for (a = 0; (o = e[a++]); )
                                        for (; r.indexOf(" " + o + " ") > -1; )
                                            r = r.replace(" " + o + " ", " ");
                                    i !== (s = ye(r)) &&
                                        n.setAttribute("class", s);
                                }
                        return this;
                    },
                    toggleClass: function (t, e) {
                        var n = typeof t,
                            r = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && r
                            ? e
                                ? this.addClass(t)
                                : this.removeClass(t)
                            : y(t)
                            ? this.each(function (n) {
                                  C(this).toggleClass(
                                      t.call(this, n, _e(this), e),
                                      e
                                  );
                              })
                            : this.each(function () {
                                  var e, i, o, a;
                                  if (r)
                                      for (
                                          i = 0, o = C(this), a = be(t);
                                          (e = a[i++]);

                                      )
                                          o.hasClass(e)
                                              ? o.removeClass(e)
                                              : o.addClass(e);
                                  else
                                      (void 0 !== t && "boolean" !== n) ||
                                          ((e = _e(this)) &&
                                              Y.set(this, "__className__", e),
                                          this.setAttribute &&
                                              this.setAttribute(
                                                  "class",
                                                  e || !1 === t
                                                      ? ""
                                                      : Y.get(
                                                            this,
                                                            "__className__"
                                                        ) || ""
                                              ));
                              });
                    },
                    hasClass: function (t) {
                        var e,
                            n,
                            r = 0;
                        for (e = " " + t + " "; (n = this[r++]); )
                            if (
                                1 === n.nodeType &&
                                (" " + ye(_e(n)) + " ").indexOf(e) > -1
                            )
                                return !0;
                        return !1;
                    },
                });
            var we = /\r/g;
            C.fn.extend({
                val: function (t) {
                    var e,
                        n,
                        r,
                        i = this[0];
                    return arguments.length
                        ? ((r = y(t)),
                          this.each(function (n) {
                              var i;
                              1 === this.nodeType &&
                                  (null ==
                                  (i = r ? t.call(this, n, C(this).val()) : t)
                                      ? (i = "")
                                      : "number" == typeof i
                                      ? (i += "")
                                      : Array.isArray(i) &&
                                        (i = C.map(i, function (t) {
                                            return null == t ? "" : t + "";
                                        })),
                                  ((e =
                                      C.valHooks[this.type] ||
                                      C.valHooks[
                                          this.nodeName.toLowerCase()
                                      ]) &&
                                      "set" in e &&
                                      void 0 !== e.set(this, i, "value")) ||
                                      (this.value = i));
                          }))
                        : i
                        ? (e =
                              C.valHooks[i.type] ||
                              C.valHooks[i.nodeName.toLowerCase()]) &&
                          "get" in e &&
                          void 0 !== (n = e.get(i, "value"))
                            ? n
                            : "string" == typeof (n = i.value)
                            ? n.replace(we, "")
                            : null == n
                            ? ""
                            : n
                        : void 0;
                },
            }),
                C.extend({
                    valHooks: {
                        option: {
                            get: function (t) {
                                var e = C.find.attr(t, "value");
                                return null != e ? e : ye(C.text(t));
                            },
                        },
                        select: {
                            get: function (t) {
                                var e,
                                    n,
                                    r,
                                    i = t.options,
                                    o = t.selectedIndex,
                                    a = "select-one" === t.type,
                                    s = a ? null : [],
                                    u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (
                                        ((n = i[r]).selected || r === o) &&
                                        !n.disabled &&
                                        (!n.parentNode.disabled ||
                                            !j(n.parentNode, "optgroup"))
                                    ) {
                                        if (((e = C(n).val()), a)) return e;
                                        s.push(e);
                                    }
                                return s;
                            },
                            set: function (t, e) {
                                for (
                                    var n,
                                        r,
                                        i = t.options,
                                        o = C.makeArray(e),
                                        a = i.length;
                                    a--;

                                )
                                    ((r = i[a]).selected =
                                        C.inArray(C.valHooks.option.get(r), o) >
                                        -1) && (n = !0);
                                return n || (t.selectedIndex = -1), o;
                            },
                        },
                    },
                }),
                C.each(["radio", "checkbox"], function () {
                    (C.valHooks[this] = {
                        set: function (t, e) {
                            if (Array.isArray(e))
                                return (t.checked =
                                    C.inArray(C(t).val(), e) > -1);
                        },
                    }),
                        m.checkOn ||
                            (C.valHooks[this].get = function (t) {
                                return null === t.getAttribute("value")
                                    ? "on"
                                    : t.value;
                            });
                }),
                (m.focusin = "onfocusin" in n);
            var xe = /^(?:focusinfocus|focusoutblur)$/,
                Ce = function (t) {
                    t.stopPropagation();
                };
            C.extend(C.event, {
                trigger: function (t, e, r, i) {
                    var o,
                        s,
                        u,
                        c,
                        l,
                        f,
                        d,
                        p,
                        v = [r || a],
                        g = h.call(t, "type") ? t.type : t,
                        m = h.call(t, "namespace")
                            ? t.namespace.split(".")
                            : [];
                    if (
                        ((s = p = u = r = r || a),
                        3 !== r.nodeType &&
                            8 !== r.nodeType &&
                            !xe.test(g + C.event.triggered) &&
                            (g.indexOf(".") > -1 &&
                                ((g = (m = g.split(".")).shift()), m.sort()),
                            (l = g.indexOf(":") < 0 && "on" + g),
                            ((t = t[C.expando]
                                ? t
                                : new C.Event(
                                      g,
                                      "object" == typeof t && t
                                  )).isTrigger = i ? 2 : 3),
                            (t.namespace = m.join(".")),
                            (t.rnamespace = t.namespace
                                ? new RegExp(
                                      "(^|\\.)" +
                                          m.join("\\.(?:.*\\.|)") +
                                          "(\\.|$)"
                                  )
                                : null),
                            (t.result = void 0),
                            t.target || (t.target = r),
                            (e = null == e ? [t] : C.makeArray(e, [t])),
                            (d = C.event.special[g] || {}),
                            i || !d.trigger || !1 !== d.trigger.apply(r, e)))
                    ) {
                        if (!i && !d.noBubble && !_(r)) {
                            for (
                                c = d.delegateType || g,
                                    xe.test(c + g) || (s = s.parentNode);
                                s;
                                s = s.parentNode
                            )
                                v.push(s), (u = s);
                            u === (r.ownerDocument || a) &&
                                v.push(u.defaultView || u.parentWindow || n);
                        }
                        for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
                            (p = s),
                                (t.type = o > 1 ? c : d.bindType || g),
                                (f =
                                    (Y.get(s, "events") || {})[t.type] &&
                                    Y.get(s, "handle")) && f.apply(s, e),
                                (f = l && s[l]) &&
                                    f.apply &&
                                    J(s) &&
                                    ((t.result = f.apply(s, e)),
                                    !1 === t.result && t.preventDefault());
                        return (
                            (t.type = g),
                            i ||
                                t.isDefaultPrevented() ||
                                (d._default &&
                                    !1 !== d._default.apply(v.pop(), e)) ||
                                !J(r) ||
                                (l &&
                                    y(r[g]) &&
                                    !_(r) &&
                                    ((u = r[l]) && (r[l] = null),
                                    (C.event.triggered = g),
                                    t.isPropagationStopped() &&
                                        p.addEventListener(g, Ce),
                                    r[g](),
                                    t.isPropagationStopped() &&
                                        p.removeEventListener(g, Ce),
                                    (C.event.triggered = void 0),
                                    u && (r[l] = u))),
                            t.result
                        );
                    }
                },
                simulate: function (t, e, n) {
                    var r = C.extend(new C.Event(), n, {
                        type: t,
                        isSimulated: !0,
                    });
                    C.event.trigger(r, null, e);
                },
            }),
                C.fn.extend({
                    trigger: function (t, e) {
                        return this.each(function () {
                            C.event.trigger(t, e, this);
                        });
                    },
                    triggerHandler: function (t, e) {
                        var n = this[0];
                        if (n) return C.event.trigger(t, e, n, !0);
                    },
                }),
                m.focusin ||
                    C.each(
                        { focus: "focusin", blur: "focusout" },
                        function (t, e) {
                            var n = function (t) {
                                C.event.simulate(e, t.target, C.event.fix(t));
                            };
                            C.event.special[e] = {
                                setup: function () {
                                    var r = this.ownerDocument || this,
                                        i = Y.access(r, e);
                                    i || r.addEventListener(t, n, !0),
                                        Y.access(r, e, (i || 0) + 1);
                                },
                                teardown: function () {
                                    var r = this.ownerDocument || this,
                                        i = Y.access(r, e) - 1;
                                    i
                                        ? Y.access(r, e, i)
                                        : (r.removeEventListener(t, n, !0),
                                          Y.remove(r, e));
                                },
                            };
                        }
                    );
            var ke = n.location,
                Te = Date.now(),
                Se = /\?/;
            C.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = new n.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                    e = void 0;
                }
                return (
                    (e && !e.getElementsByTagName("parsererror").length) ||
                        C.error("Invalid XML: " + t),
                    e
                );
            };
            var Ae = /\[\]$/,
                Oe = /\r?\n/g,
                Ee = /^(?:submit|button|image|reset|file)$/i,
                je = /^(?:input|select|textarea|keygen)/i;
            function Pe(t, e, n, r) {
                var i;
                if (Array.isArray(e))
                    C.each(e, function (e, i) {
                        n || Ae.test(t)
                            ? r(t, i)
                            : Pe(
                                  t +
                                      "[" +
                                      ("object" == typeof i && null != i
                                          ? e
                                          : "") +
                                      "]",
                                  i,
                                  n,
                                  r
                              );
                    });
                else if (n || "object" !== x(e)) r(t, e);
                else for (i in e) Pe(t + "[" + i + "]", e[i], n, r);
            }
            (C.param = function (t, e) {
                var n,
                    r = [],
                    i = function (t, e) {
                        var n = y(e) ? e() : e;
                        r[r.length] =
                            encodeURIComponent(t) +
                            "=" +
                            encodeURIComponent(null == n ? "" : n);
                    };
                if (null == t) return "";
                if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
                    C.each(t, function () {
                        i(this.name, this.value);
                    });
                else for (n in t) Pe(n, t[n], e, i);
                return r.join("&");
            }),
                C.fn.extend({
                    serialize: function () {
                        return C.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var t = C.prop(this, "elements");
                            return t ? C.makeArray(t) : this;
                        })
                            .filter(function () {
                                var t = this.type;
                                return (
                                    this.name &&
                                    !C(this).is(":disabled") &&
                                    je.test(this.nodeName) &&
                                    !Ee.test(t) &&
                                    (this.checked || !vt.test(t))
                                );
                            })
                            .map(function (t, e) {
                                var n = C(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? C.map(n, function (t) {
                                          return {
                                              name: e.name,
                                              value: t.replace(Oe, "\r\n"),
                                          };
                                      })
                                    : {
                                          name: e.name,
                                          value: n.replace(Oe, "\r\n"),
                                      };
                            })
                            .get();
                    },
                });
            var De = /%20/g,
                Ie = /#.*$/,
                Ne = /([?&])_=[^&]*/,
                Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Le = /^(?:GET|HEAD)$/,
                Fe = /^\/\//,
                qe = {},
                Be = {},
                We = "*/".concat("*"),
                Re = a.createElement("a");
            function $e(t) {
                return function (e, n) {
                    "string" != typeof e && ((n = e), (e = "*"));
                    var r,
                        i = 0,
                        o = e.toLowerCase().match(q) || [];
                    if (y(n))
                        for (; (r = o[i++]); )
                            "+" === r[0]
                                ? ((r = r.slice(1) || "*"),
                                  (t[r] = t[r] || []).unshift(n))
                                : (t[r] = t[r] || []).push(n);
                };
            }
            function He(t, e, n, r) {
                var i = {},
                    o = t === Be;
                function a(s) {
                    var u;
                    return (
                        (i[s] = !0),
                        C.each(t[s] || [], function (t, s) {
                            var c = s(e, n, r);
                            return "string" != typeof c || o || i[c]
                                ? o
                                    ? !(u = c)
                                    : void 0
                                : (e.dataTypes.unshift(c), a(c), !1);
                        }),
                        u
                    );
                }
                return a(e.dataTypes[0]) || (!i["*"] && a("*"));
            }
            function ze(t, e) {
                var n,
                    r,
                    i = C.ajaxSettings.flatOptions || {};
                for (n in e)
                    void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
                return r && C.extend(!0, t, r), t;
            }
            (Re.href = ke.href),
                C.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: ke.href,
                        type: "GET",
                        isLocal:
                            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                ke.protocol
                            ),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType:
                            "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": We,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript",
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/,
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON",
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": C.parseXML,
                        },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (t, e) {
                        return e
                            ? ze(ze(t, C.ajaxSettings), e)
                            : ze(C.ajaxSettings, t);
                    },
                    ajaxPrefilter: $e(qe),
                    ajaxTransport: $e(Be),
                    ajax: function (t, e) {
                        "object" == typeof t && ((e = t), (t = void 0)),
                            (e = e || {});
                        var r,
                            i,
                            o,
                            s,
                            u,
                            c,
                            l,
                            f,
                            d,
                            p,
                            h = C.ajaxSetup({}, e),
                            v = h.context || h,
                            g =
                                h.context && (v.nodeType || v.jquery)
                                    ? C(v)
                                    : C.event,
                            m = C.Deferred(),
                            y = C.Callbacks("once memory"),
                            _ = h.statusCode || {},
                            b = {},
                            w = {},
                            x = "canceled",
                            k = {
                                readyState: 0,
                                getResponseHeader: function (t) {
                                    var e;
                                    if (l) {
                                        if (!s)
                                            for (s = {}; (e = Me.exec(o)); )
                                                s[e[1].toLowerCase() + " "] = (
                                                    s[
                                                        e[1].toLowerCase() + " "
                                                    ] || []
                                                ).concat(e[2]);
                                        e = s[t.toLowerCase() + " "];
                                    }
                                    return null == e ? null : e.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return l ? o : null;
                                },
                                setRequestHeader: function (t, e) {
                                    return (
                                        null == l &&
                                            ((t = w[t.toLowerCase()] =
                                                w[t.toLowerCase()] || t),
                                            (b[t] = e)),
                                        this
                                    );
                                },
                                overrideMimeType: function (t) {
                                    return null == l && (h.mimeType = t), this;
                                },
                                statusCode: function (t) {
                                    var e;
                                    if (t)
                                        if (l) k.always(t[k.status]);
                                        else for (e in t) _[e] = [_[e], t[e]];
                                    return this;
                                },
                                abort: function (t) {
                                    var e = t || x;
                                    return r && r.abort(e), T(0, e), this;
                                },
                            };
                        if (
                            (m.promise(k),
                            (h.url = ((t || h.url || ke.href) + "").replace(
                                Fe,
                                ke.protocol + "//"
                            )),
                            (h.type = e.method || e.type || h.method || h.type),
                            (h.dataTypes = (h.dataType || "*")
                                .toLowerCase()
                                .match(q) || [""]),
                            null == h.crossDomain)
                        ) {
                            c = a.createElement("a");
                            try {
                                (c.href = h.url),
                                    (c.href = c.href),
                                    (h.crossDomain =
                                        Re.protocol + "//" + Re.host !=
                                        c.protocol + "//" + c.host);
                            } catch (t) {
                                h.crossDomain = !0;
                            }
                        }
                        if (
                            (h.data &&
                                h.processData &&
                                "string" != typeof h.data &&
                                (h.data = C.param(h.data, h.traditional)),
                            He(qe, h, e, k),
                            l)
                        )
                            return k;
                        for (d in ((f = C.event && h.global) &&
                            0 == C.active++ &&
                            C.event.trigger("ajaxStart"),
                        (h.type = h.type.toUpperCase()),
                        (h.hasContent = !Le.test(h.type)),
                        (i = h.url.replace(Ie, "")),
                        h.hasContent
                            ? h.data &&
                              h.processData &&
                              0 ===
                                  (h.contentType || "").indexOf(
                                      "application/x-www-form-urlencoded"
                                  ) &&
                              (h.data = h.data.replace(De, "+"))
                            : ((p = h.url.slice(i.length)),
                              h.data &&
                                  (h.processData ||
                                      "string" == typeof h.data) &&
                                  ((i += (Se.test(i) ? "&" : "?") + h.data),
                                  delete h.data),
                              !1 === h.cache &&
                                  ((i = i.replace(Ne, "$1")),
                                  (p =
                                      (Se.test(i) ? "&" : "?") +
                                      "_=" +
                                      Te++ +
                                      p)),
                              (h.url = i + p)),
                        h.ifModified &&
                            (C.lastModified[i] &&
                                k.setRequestHeader(
                                    "If-Modified-Since",
                                    C.lastModified[i]
                                ),
                            C.etag[i] &&
                                k.setRequestHeader("If-None-Match", C.etag[i])),
                        ((h.data && h.hasContent && !1 !== h.contentType) ||
                            e.contentType) &&
                            k.setRequestHeader("Content-Type", h.contentType),
                        k.setRequestHeader(
                            "Accept",
                            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                                ? h.accepts[h.dataTypes[0]] +
                                      ("*" !== h.dataTypes[0]
                                          ? ", " + We + "; q=0.01"
                                          : "")
                                : h.accepts["*"]
                        ),
                        h.headers))
                            k.setRequestHeader(d, h.headers[d]);
                        if (
                            h.beforeSend &&
                            (!1 === h.beforeSend.call(v, k, h) || l)
                        )
                            return k.abort();
                        if (
                            ((x = "abort"),
                            y.add(h.complete),
                            k.done(h.success),
                            k.fail(h.error),
                            (r = He(Be, h, e, k)))
                        ) {
                            if (
                                ((k.readyState = 1),
                                f && g.trigger("ajaxSend", [k, h]),
                                l)
                            )
                                return k;
                            h.async &&
                                h.timeout > 0 &&
                                (u = n.setTimeout(function () {
                                    k.abort("timeout");
                                }, h.timeout));
                            try {
                                (l = !1), r.send(b, T);
                            } catch (t) {
                                if (l) throw t;
                                T(-1, t);
                            }
                        } else T(-1, "No Transport");
                        function T(t, e, a, s) {
                            var c,
                                d,
                                p,
                                b,
                                w,
                                x = e;
                            l ||
                                ((l = !0),
                                u && n.clearTimeout(u),
                                (r = void 0),
                                (o = s || ""),
                                (k.readyState = t > 0 ? 4 : 0),
                                (c = (t >= 200 && t < 300) || 304 === t),
                                a &&
                                    (b = (function (t, e, n) {
                                        for (
                                            var r,
                                                i,
                                                o,
                                                a,
                                                s = t.contents,
                                                u = t.dataTypes;
                                            "*" === u[0];

                                        )
                                            u.shift(),
                                                void 0 === r &&
                                                    (r =
                                                        t.mimeType ||
                                                        e.getResponseHeader(
                                                            "Content-Type"
                                                        ));
                                        if (r)
                                            for (i in s)
                                                if (s[i] && s[i].test(r)) {
                                                    u.unshift(i);
                                                    break;
                                                }
                                        if (u[0] in n) o = u[0];
                                        else {
                                            for (i in n) {
                                                if (
                                                    !u[0] ||
                                                    t.converters[i + " " + u[0]]
                                                ) {
                                                    o = i;
                                                    break;
                                                }
                                                a || (a = i);
                                            }
                                            o = o || a;
                                        }
                                        if (o)
                                            return (
                                                o !== u[0] && u.unshift(o), n[o]
                                            );
                                    })(h, k, a)),
                                (b = (function (t, e, n, r) {
                                    var i,
                                        o,
                                        a,
                                        s,
                                        u,
                                        c = {},
                                        l = t.dataTypes.slice();
                                    if (l[1])
                                        for (a in t.converters)
                                            c[a.toLowerCase()] =
                                                t.converters[a];
                                    for (o = l.shift(); o; )
                                        if (
                                            (t.responseFields[o] &&
                                                (n[t.responseFields[o]] = e),
                                            !u &&
                                                r &&
                                                t.dataFilter &&
                                                (e = t.dataFilter(
                                                    e,
                                                    t.dataType
                                                )),
                                            (u = o),
                                            (o = l.shift()))
                                        )
                                            if ("*" === o) o = u;
                                            else if ("*" !== u && u !== o) {
                                                if (
                                                    !(a =
                                                        c[u + " " + o] ||
                                                        c["* " + o])
                                                )
                                                    for (i in c)
                                                        if (
                                                            (s =
                                                                i.split(
                                                                    " "
                                                                ))[1] === o &&
                                                            (a =
                                                                c[
                                                                    u +
                                                                        " " +
                                                                        s[0]
                                                                ] ||
                                                                c["* " + s[0]])
                                                        ) {
                                                            !0 === a
                                                                ? (a = c[i])
                                                                : !0 !== c[i] &&
                                                                  ((o = s[0]),
                                                                  l.unshift(
                                                                      s[1]
                                                                  ));
                                                            break;
                                                        }
                                                if (!0 !== a)
                                                    if (a && t.throws) e = a(e);
                                                    else
                                                        try {
                                                            e = a(e);
                                                        } catch (t) {
                                                            return {
                                                                state: "parsererror",
                                                                error: a
                                                                    ? t
                                                                    : "No conversion from " +
                                                                      u +
                                                                      " to " +
                                                                      o,
                                                            };
                                                        }
                                            }
                                    return { state: "success", data: e };
                                })(h, b, k, c)),
                                c
                                    ? (h.ifModified &&
                                          ((w =
                                              k.getResponseHeader(
                                                  "Last-Modified"
                                              )) && (C.lastModified[i] = w),
                                          (w = k.getResponseHeader("etag")) &&
                                              (C.etag[i] = w)),
                                      204 === t || "HEAD" === h.type
                                          ? (x = "nocontent")
                                          : 304 === t
                                          ? (x = "notmodified")
                                          : ((x = b.state),
                                            (d = b.data),
                                            (c = !(p = b.error))))
                                    : ((p = x),
                                      (!t && x) ||
                                          ((x = "error"), t < 0 && (t = 0))),
                                (k.status = t),
                                (k.statusText = (e || x) + ""),
                                c
                                    ? m.resolveWith(v, [d, x, k])
                                    : m.rejectWith(v, [k, x, p]),
                                k.statusCode(_),
                                (_ = void 0),
                                f &&
                                    g.trigger(c ? "ajaxSuccess" : "ajaxError", [
                                        k,
                                        h,
                                        c ? d : p,
                                    ]),
                                y.fireWith(v, [k, x]),
                                f &&
                                    (g.trigger("ajaxComplete", [k, h]),
                                    --C.active || C.event.trigger("ajaxStop")));
                        }
                        return k;
                    },
                    getJSON: function (t, e, n) {
                        return C.get(t, e, n, "json");
                    },
                    getScript: function (t, e) {
                        return C.get(t, void 0, e, "script");
                    },
                }),
                C.each(["get", "post"], function (t, e) {
                    C[e] = function (t, n, r, i) {
                        return (
                            y(n) && ((i = i || r), (r = n), (n = void 0)),
                            C.ajax(
                                C.extend(
                                    {
                                        url: t,
                                        type: e,
                                        dataType: i,
                                        data: n,
                                        success: r,
                                    },
                                    C.isPlainObject(t) && t
                                )
                            )
                        );
                    };
                }),
                (C._evalUrl = function (t, e) {
                    return C.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (t) {
                            C.globalEval(t, e);
                        },
                    });
                }),
                C.fn.extend({
                    wrapAll: function (t) {
                        var e;
                        return (
                            this[0] &&
                                (y(t) && (t = t.call(this[0])),
                                (e = C(t, this[0].ownerDocument)
                                    .eq(0)
                                    .clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function () {
                                        for (
                                            var t = this;
                                            t.firstElementChild;

                                        )
                                            t = t.firstElementChild;
                                        return t;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (t) {
                        return y(t)
                            ? this.each(function (e) {
                                  C(this).wrapInner(t.call(this, e));
                              })
                            : this.each(function () {
                                  var e = C(this),
                                      n = e.contents();
                                  n.length ? n.wrapAll(t) : e.append(t);
                              });
                    },
                    wrap: function (t) {
                        var e = y(t);
                        return this.each(function (n) {
                            C(this).wrapAll(e ? t.call(this, n) : t);
                        });
                    },
                    unwrap: function (t) {
                        return (
                            this.parent(t)
                                .not("body")
                                .each(function () {
                                    C(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (C.expr.pseudos.hidden = function (t) {
                    return !C.expr.pseudos.visible(t);
                }),
                (C.expr.pseudos.visible = function (t) {
                    return !!(
                        t.offsetWidth ||
                        t.offsetHeight ||
                        t.getClientRects().length
                    );
                }),
                (C.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (t) {}
                });
            var Ue = { 0: 200, 1223: 204 },
                Ve = C.ajaxSettings.xhr();
            (m.cors = !!Ve && "withCredentials" in Ve),
                (m.ajax = Ve = !!Ve),
                C.ajaxTransport(function (t) {
                    var e, r;
                    if (m.cors || (Ve && !t.crossDomain))
                        return {
                            send: function (i, o) {
                                var a,
                                    s = t.xhr();
                                if (
                                    (s.open(
                                        t.type,
                                        t.url,
                                        t.async,
                                        t.username,
                                        t.password
                                    ),
                                    t.xhrFields)
                                )
                                    for (a in t.xhrFields)
                                        s[a] = t.xhrFields[a];
                                for (a in (t.mimeType &&
                                    s.overrideMimeType &&
                                    s.overrideMimeType(t.mimeType),
                                t.crossDomain ||
                                    i["X-Requested-With"] ||
                                    (i["X-Requested-With"] = "XMLHttpRequest"),
                                i))
                                    s.setRequestHeader(a, i[a]);
                                (e = function (t) {
                                    return function () {
                                        e &&
                                            ((e =
                                                r =
                                                s.onload =
                                                s.onerror =
                                                s.onabort =
                                                s.ontimeout =
                                                s.onreadystatechange =
                                                    null),
                                            "abort" === t
                                                ? s.abort()
                                                : "error" === t
                                                ? "number" != typeof s.status
                                                    ? o(0, "error")
                                                    : o(s.status, s.statusText)
                                                : o(
                                                      Ue[s.status] || s.status,
                                                      s.statusText,
                                                      "text" !==
                                                          (s.responseType ||
                                                              "text") ||
                                                          "string" !=
                                                              typeof s.responseText
                                                          ? {
                                                                binary: s.response,
                                                            }
                                                          : {
                                                                text: s.responseText,
                                                            },
                                                      s.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (s.onload = e()),
                                    (r = s.onerror = s.ontimeout = e("error")),
                                    void 0 !== s.onabort
                                        ? (s.onabort = r)
                                        : (s.onreadystatechange = function () {
                                              4 === s.readyState &&
                                                  n.setTimeout(function () {
                                                      e && r();
                                                  });
                                          }),
                                    (e = e("abort"));
                                
                            },
                            abort: function () {
                                e && e();
                            },
                        };
                }),
                C.ajaxPrefilter(function (t) {
                    t.crossDomain && (t.contents.script = !1);
                }),
                C.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                    },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (t) {
                            return C.globalEval(t), t;
                        },
                    },
                }),
                C.ajaxPrefilter("script", function (t) {
                    void 0 === t.cache && (t.cache = !1),
                        t.crossDomain && (t.type = "GET");
                }),
                C.ajaxTransport("script", function (t) {
                    var e, n;
                    if (t.crossDomain || t.scriptAttrs)
                        return {
                            send: function (r, i) {
                                (e = C("<script>")
                                    .attr(t.scriptAttrs || {})
                                    .prop({
                                        charset: t.scriptCharset,
                                        src: t.url,
                                    })
                                    .on(
                                        "load error",
                                        (n = function (t) {
                                            e.remove(),
                                                (n = null),
                                                t &&
                                                    i(
                                                        "error" === t.type
                                                            ? 404
                                                            : 200,
                                                        t.type
                                                    );
                                        })
                                    )),
                                    a.head.appendChild(e[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                });
            var Xe = [],
                Ge = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Xe.pop() || C.expando + "_" + Te++;
                    return (this[t] = !0), t;
                },
            }),
                C.ajaxPrefilter("json jsonp", function (t, e, r) {
                    var i,
                        o,
                        a,
                        s =
                            !1 !== t.jsonp &&
                            (Ge.test(t.url)
                                ? "url"
                                : "string" == typeof t.data &&
                                  0 ===
                                      (t.contentType || "").indexOf(
                                          "application/x-www-form-urlencoded"
                                      ) &&
                                  Ge.test(t.data) &&
                                  "data");
                    if (s || "jsonp" === t.dataTypes[0])
                        return (
                            (i = t.jsonpCallback =
                                y(t.jsonpCallback)
                                    ? t.jsonpCallback()
                                    : t.jsonpCallback),
                            s
                                ? (t[s] = t[s].replace(Ge, "$1" + i))
                                : !1 !== t.jsonp &&
                                  (t.url +=
                                      (Se.test(t.url) ? "&" : "?") +
                                      t.jsonp +
                                      "=" +
                                      i),
                            (t.converters["script json"] = function () {
                                return (
                                    a || C.error(i + " was not called"), a[0]
                                );
                            }),
                            (t.dataTypes[0] = "json"),
                            (o = n[i]),
                            (n[i] = function () {
                                a = arguments;
                            }),
                            r.always(function () {
                                void 0 === o ? C(n).removeProp(i) : (n[i] = o),
                                    t[i] &&
                                        ((t.jsonpCallback = e.jsonpCallback),
                                        Xe.push(i)),
                                    a && y(o) && o(a[0]),
                                    (a = o = void 0);
                            }),
                            "script"
                        );
                }),
                (m.createHTMLDocument = (function () {
                    var t = a.implementation.createHTMLDocument("").body;
                    return (
                        (t.innerHTML = "<form></form><form></form>"),
                        2 === t.childNodes.length
                    );
                })()),
                (C.parseHTML = function (t, e, n) {
                    return "string" != typeof t
                        ? []
                        : ("boolean" == typeof e && ((n = e), (e = !1)),
                          e ||
                              (m.createHTMLDocument
                                  ? (((r = (e =
                                        a.implementation.createHTMLDocument(
                                            ""
                                        )).createElement("base")).href =
                                        a.location.href),
                                    e.head.appendChild(r))
                                  : (e = a)),
                          (i = P.exec(t)),
                          (o = !n && []),
                          i
                              ? [e.createElement(i[1])]
                              : ((i = xt([t], e, o)),
                                o && o.length && C(o).remove(),
                                C.merge([], i.childNodes)));
                    var r, i, o;
                }),
                (C.fn.load = function (t, e, n) {
                    var r,
                        i,
                        o,
                        a = this,
                        s = t.indexOf(" ");
                    return (
                        s > -1 && ((r = ye(t.slice(s))), (t = t.slice(0, s))),
                        y(e)
                            ? ((n = e), (e = void 0))
                            : e && "object" == typeof e && (i = "POST"),
                        a.length > 0 &&
                            C.ajax({
                                url: t,
                                type: i || "GET",
                                dataType: "html",
                                data: e,
                            })
                                .done(function (t) {
                                    (o = arguments),
                                        a.html(
                                            r
                                                ? C("<div>")
                                                      .append(C.parseHTML(t))
                                                      .find(r)
                                                : t
                                        );
                                })
                                .always(
                                    n &&
                                        function (t, e) {
                                            a.each(function () {
                                                n.apply(
                                                    this,
                                                    o || [t.responseText, e, t]
                                                );
                                            });
                                        }
                                ),
                        this
                    );
                }),
                C.each(
                    [
                        "ajaxStart",
                        "ajaxStop",
                        "ajaxComplete",
                        "ajaxError",
                        "ajaxSuccess",
                        "ajaxSend",
                    ],
                    function (t, e) {
                        C.fn[e] = function (t) {
                            return this.on(e, t);
                        };
                    }
                ),
                (C.expr.pseudos.animated = function (t) {
                    return C.grep(C.timers, function (e) {
                        return t === e.elem;
                    }).length;
                }),
                (C.offset = {
                    setOffset: function (t, e, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            c = C.css(t, "position"),
                            l = C(t),
                            f = {};
                        "static" === c && (t.style.position = "relative"),
                            (s = l.offset()),
                            (o = C.css(t, "top")),
                            (u = C.css(t, "left")),
                            ("absolute" === c || "fixed" === c) &&
                            (o + u).indexOf("auto") > -1
                                ? ((a = (r = l.position()).top), (i = r.left))
                                : ((a = parseFloat(o) || 0),
                                  (i = parseFloat(u) || 0)),
                            y(e) && (e = e.call(t, n, C.extend({}, s))),
                            null != e.top && (f.top = e.top - s.top + a),
                            null != e.left && (f.left = e.left - s.left + i),
                            "using" in e ? e.using.call(t, f) : l.css(f);
                    },
                }),
                C.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function (e) {
                                      C.offset.setOffset(this, t, e);
                                  });
                        var e,
                            n,
                            r = this[0];
                        return r
                            ? r.getClientRects().length
                                ? ((e = r.getBoundingClientRect()),
                                  (n = r.ownerDocument.defaultView),
                                  {
                                      top: e.top + n.pageYOffset,
                                      left: e.left + n.pageXOffset,
                                  })
                                : { top: 0, left: 0 }
                            : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var t,
                                e,
                                n,
                                r = this[0],
                                i = { top: 0, left: 0 };
                            if ("fixed" === C.css(r, "position"))
                                e = r.getBoundingClientRect();
                            else {
                                for (
                                    e = this.offset(),
                                        n = r.ownerDocument,
                                        t = r.offsetParent || n.documentElement;
                                    t &&
                                    (t === n.body || t === n.documentElement) &&
                                    "static" === C.css(t, "position");

                                )
                                    t = t.parentNode;
                                t &&
                                    t !== r &&
                                    1 === t.nodeType &&
                                    (((i = C(t).offset()).top += C.css(
                                        t,
                                        "borderTopWidth",
                                        !0
                                    )),
                                    (i.left += C.css(
                                        t,
                                        "borderLeftWidth",
                                        !0
                                    )));
                            }
                            return {
                                top: e.top - i.top - C.css(r, "marginTop", !0),
                                left:
                                    e.left -
                                    i.left -
                                    C.css(r, "marginLeft", !0),
                            };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (
                                var t = this.offsetParent;
                                t && "static" === C.css(t, "position");

                            )
                                t = t.offsetParent;
                            return t || at;
                        });
                    },
                }),
                C.each(
                    { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                    function (t, e) {
                        var n = "pageYOffset" === e;
                        C.fn[t] = function (r) {
                            return U(
                                this,
                                function (t, r, i) {
                                    var o;
                                    if (
                                        (_(t)
                                            ? (o = t)
                                            : 9 === t.nodeType &&
                                              (o = t.defaultView),
                                        void 0 === i)
                                    )
                                        return o ? o[e] : t[r];
                                    o
                                        ? o.scrollTo(
                                              n ? o.pageXOffset : i,
                                              n ? i : o.pageYOffset
                                          )
                                        : (t[r] = i);
                                },
                                t,
                                r,
                                arguments.length
                            );
                        };
                    }
                ),
                C.each(["top", "left"], function (t, e) {
                    C.cssHooks[e] = Vt(m.pixelPosition, function (t, n) {
                        if (n)
                            return (
                                (n = Ut(t, e)),
                                $t.test(n) ? C(t).position()[e] + "px" : n
                            );
                    });
                }),
                C.each({ Height: "height", Width: "width" }, function (t, e) {
                    C.each(
                        { padding: "inner" + t, content: e, "": "outer" + t },
                        function (n, r) {
                            C.fn[r] = function (i, o) {
                                var a =
                                        arguments.length &&
                                        (n || "boolean" != typeof i),
                                    s =
                                        n ||
                                        (!0 === i || !0 === o
                                            ? "margin"
                                            : "border");
                                return U(
                                    this,
                                    function (e, n, i) {
                                        var o;
                                        return _(e)
                                            ? 0 === r.indexOf("outer")
                                                ? e["inner" + t]
                                                : e.document.documentElement[
                                                      "client" + t
                                                  ]
                                            : 9 === e.nodeType
                                            ? ((o = e.documentElement),
                                              Math.max(
                                                  e.body["scroll" + t],
                                                  o["scroll" + t],
                                                  e.body["offset" + t],
                                                  o["offset" + t],
                                                  o["client" + t]
                                              ))
                                            : void 0 === i
                                            ? C.css(e, n, s)
                                            : C.style(e, n, i, s);
                                    },
                                    e,
                                    a ? i : void 0,
                                    a
                                );
                            };
                        }
                    );
                }),
                C.each(
                    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                        " "
                    ),
                    function (t, e) {
                        C.fn[e] = function (t, n) {
                            return arguments.length > 0
                                ? this.on(e, null, t, n)
                                : this.trigger(e);
                        };
                    }
                ),
                C.fn.extend({
                    hover: function (t, e) {
                        return this.mouseenter(t).mouseleave(e || t);
                    },
                }),
                C.fn.extend({
                    bind: function (t, e, n) {
                        return this.on(t, null, e, n);
                    },
                    unbind: function (t, e) {
                        return this.off(t, null, e);
                    },
                    delegate: function (t, e, n, r) {
                        return this.on(e, t, n, r);
                    },
                    undelegate: function (t, e, n) {
                        return 1 === arguments.length
                            ? this.off(t, "**")
                            : this.off(e, t || "**", n);
                    },
                }),
                (C.proxy = function (t, e) {
                    var n, r, i;
                    if (
                        ("string" == typeof e && ((n = t[e]), (e = t), (t = n)),
                        y(t))
                    )
                        return (
                            (r = u.call(arguments, 2)),
                            ((i = function () {
                                return t.apply(
                                    e || this,
                                    r.concat(u.call(arguments))
                                );
                            }).guid = t.guid =
                                t.guid || C.guid++),
                            i
                        );
                }),
                (C.holdReady = function (t) {
                    t ? C.readyWait++ : C.ready(!0);
                }),
                (C.isArray = Array.isArray),
                (C.parseJSON = JSON.parse),
                (C.nodeName = j),
                (C.isFunction = y),
                (C.isWindow = _),
                (C.camelCase = Q),
                (C.type = x),
                (C.now = Date.now),
                (C.isNumeric = function (t) {
                    var e = C.type(t);
                    return (
                        ("number" === e || "string" === e) &&
                        !isNaN(t - parseFloat(t))
                    );
                }),
                void 0 ===
                    (r = function () {
                        return C;
                    }.apply(e, [])) || (t.exports = r);
            var Qe = n.jQuery,
                Je = n.$;
            return (
                (C.noConflict = function (t) {
                    return (
                        n.$ === C && (n.$ = Je),
                        t && n.jQuery === C && (n.jQuery = Qe),
                        C
                    );
                }),
                i || (n.jQuery = n.$ = C),
                C
            );
        });
    },
    function (t, e) {
        var n = (t.exports =
            "undefined" != typeof window && window.Math == Math
                ? window
                : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (t, e, n) {
        var r = n(40)("wks"),
            i = n(25),
            o = n(2).Symbol,
            a = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = (a && o[t]) || (a ? o : i)("Symbol." + t));
        }).store = r;
    },
    function (t, e, n) {
        var r = n(2),
            i = n(0),
            o = n(12),
            a = n(9),
            s = n(10),
            u = function (t, e, n) {
                var c,
                    l,
                    f,
                    d = t & u.F,
                    p = t & u.G,
                    h = t & u.S,
                    v = t & u.P,
                    g = t & u.B,
                    m = t & u.W,
                    y = p ? i : i[e] || (i[e] = {}),
                    _ = y.prototype,
                    b = p ? r : h ? r[e] : (r[e] || {}).prototype;
                for (c in (p && (n = e), n))
                    ((l = !d && b && void 0 !== b[c]) && s(y, c)) ||
                        ((f = l ? b[c] : n[c]),
                        (y[c] =
                            p && "function" != typeof b[c]
                                ? n[c]
                                : g && l
                                ? o(f, r)
                                : m && b[c] == f
                                ? (function (t) {
                                      var e = function (e, n, r) {
                                          if (this instanceof t) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new t();
                                                  case 1:
                                                      return new t(e);
                                                  case 2:
                                                      return new t(e, n);
                                              }
                                              return new t(e, n, r);
                                          }
                                          return t.apply(this, arguments);
                                      };
                                      return (e.prototype = t.prototype), e;
                                  })(f)
                                : v && "function" == typeof f
                                ? o(Function.call, f)
                                : f),
                        v &&
                            (((y.virtual || (y.virtual = {}))[c] = f),
                            t & u.R && _ && !_[c] && a(_, c, f)));
            };
        (u.F = 1),
            (u.G = 2),
            (u.S = 4),
            (u.P = 8),
            (u.B = 16),
            (u.W = 32),
            (u.U = 64),
            (u.R = 128),
            (t.exports = u);
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    function (t, e, n) {
        t.exports = !n(13)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e, n) {
        var r = n(6),
            i = n(55),
            o = n(35),
            a = Object.defineProperty;
        e.f = n(7)
            ? Object.defineProperty
            : function (t, e, n) {
                  if ((r(t), (e = o(e, !0)), r(n), i))
                      try {
                          return a(t, e, n);
                      } catch (t) {}
                  if ("get" in n || "set" in n)
                      throw TypeError("Accessors not supported!");
                  return "value" in n && (t[e] = n.value), t;
              };
    },
    function (t, e, n) {
        var r = n(8),
            i = n(19);
        t.exports = n(7)
            ? function (t, e, n) {
                  return r.f(t, e, i(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var r = n(38),
            i = n(33);
        t.exports = function (t) {
            return r(i(t));
        };
    },
    function (t, e, n) {
        var r = n(18);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(33);
        t.exports = function (t) {
            return Object(r(t));
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(82)(!0);
        n(54)(
            String,
            "String",
            function (t) {
                (this._t = String(t)), (this._i = 0);
            },
            function () {
                var t,
                    e = this._t,
                    n = this._i;
                return n >= e.length
                    ? { value: void 0, done: !0 }
                    : ((t = r(e, n)),
                      (this._i += t.length),
                      { value: t, done: !1 });
            }
        );
    },
    function (t, e) {
        t.exports = !0;
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e,
            };
        };
    },
    function (t, e, n) {
        var r = n(57),
            i = n(41);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e, n) {
        var r = n(8).f,
            i = n(10),
            o = n(3)("toStringTag");
        t.exports = function (t, e, n) {
            t &&
                !i((t = n ? t : t.prototype), o) &&
                r(t, o, { configurable: !0, value: e });
        };
    },
    function (t, e, n) {
        n(87);
        for (
            var r = n(2),
                i = n(9),
                o = n(14),
                a = n(3)("toStringTag"),
                s =
                    "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                        ","
                    ),
                u = 0;
            u < s.length;
            u++
        ) {
            var c = s[u],
                l = r[c],
                f = l && l.prototype;
            f && !f[a] && i(f, a, c), (o[c] = o.Array);
        }
    },
    function (t, e, n) {
        var r = n(32),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(
                void 0 === t ? "" : t,
                ")_",
                (++n + r).toString(36)
            );
        };
    },
    function (t, e, n) {
        e.f = n(3);
    },
    function (t, e, n) {
        var r = n(25)("meta"),
            i = n(5),
            o = n(10),
            a = n(8).f,
            s = 0,
            u =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            c = !n(13)(function () {
                return u(Object.preventExtensions({}));
            }),
            l = function (t) {
                a(t, r, { value: { i: "O" + ++s, w: {} } });
            },
            f = (t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function (t, e) {
                    if (!i(t))
                        return "symbol" == typeof t
                            ? t
                            : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, r)) {
                        if (!u(t)) return "F";
                        if (!e) return "E";
                        l(t);
                    }
                    return t[r].i;
                },
                getWeak: function (t, e) {
                    if (!o(t, r)) {
                        if (!u(t)) return !0;
                        if (!e) return !1;
                        l(t);
                    }
                    return t[r].w;
                },
                onFreeze: function (t) {
                    return c && f.NEED && u(t) && !o(t, r) && l(t), t;
                },
            });
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e) {
        e.f = {}.propertyIsEnumerable;
    },
    function (t, e) {},
    function (t, e, n) {
        var r = n(12),
            i = n(68),
            o = n(69),
            a = n(6),
            s = n(24),
            u = n(48),
            c = {},
            l = {};
        ((e = t.exports =
            function (t, e, n, f, d) {
                var p,
                    h,
                    v,
                    g,
                    m = d
                        ? function () {
                              return t;
                          }
                        : u(t),
                    y = r(n, f, e ? 2 : 1),
                    _ = 0;
                if ("function" != typeof m)
                    throw TypeError(t + " is not iterable!");
                if (o(m)) {
                    for (p = s(t.length); p > _; _++)
                        if (
                            (g = e ? y(a((h = t[_]))[0], h[1]) : y(t[_])) ===
                                c ||
                            g === l
                        )
                            return g;
                } else
                    for (v = m.call(t); !(h = v.next()).done; )
                        if ((g = i(v, y, h.value, e)) === c || g === l)
                            return g;
            }).BREAK = c),
            (e.RETURN = l);
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(2).document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {};
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (
                e &&
                "function" == typeof (n = t.toString) &&
                !r((i = n.call(t)))
            )
                return i;
            if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t))))
                return i;
            if (
                !e &&
                "function" == typeof (n = t.toString) &&
                !r((i = n.call(t)))
            )
                return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        t.exports = n(9);
    },
    function (t, e, n) {
        var r = n(6),
            i = n(56),
            o = n(41),
            a = n(39)("IE_PROTO"),
            s = function () {},
            u = function () {
                var t,
                    e = n(34)("iframe"),
                    r = o.length;
                for (
                    e.style.display = "none",
                        n(58).appendChild(e),
                        e.src = "javascript:",
                        (t = e.contentWindow.document).open(),
                        t.write("<script>document.F=Object</script>"),
                        t.close(),
                        u = t.F;
                    r--;

                )
                    delete u.prototype[o[r]];
                return u();
            };
        t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return (
                    null !== t
                        ? ((s.prototype = r(t)),
                          (n = new s()),
                          (s.prototype = null),
                          (n[a] = t))
                        : (n = u()),
                    void 0 === e ? n : i(n, e)
                );
            };
    },
    function (t, e, n) {
        var r = n(21);
        t.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (t) {
                  return "String" == r(t) ? t.split("") : Object(t);
              };
    },
    function (t, e, n) {
        var r = n(40)("keys"),
            i = n(25);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t));
        };
    },
    function (t, e, n) {
        var r = n(0),
            i = n(2),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: r.version,
            mode: n(17) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });
    },
    function (t, e) {
        t.exports =
            "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                ","
            );
    },
    function (t, e, n) {
        var r = n(2),
            i = n(0),
            o = n(17),
            a = n(26),
            s = n(8).f;
        t.exports = function (t) {
            var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, { value: a.f(t) });
        };
    },
    function (t, e, n) {
        var r = n(57),
            i = n(41).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e, n) {
        var r = n(29),
            i = n(19),
            o = n(11),
            a = n(35),
            s = n(10),
            u = n(55),
            c = Object.getOwnPropertyDescriptor;
        e.f = n(7)
            ? c
            : function (t, e) {
                  if (((t = o(t)), (e = a(e, !0)), u))
                      try {
                          return c(t, e);
                      } catch (t) {}
                  if (s(t, e)) return i(!r.f.call(t, e), t[e]);
              };
    },
    function (t, e, n) {
        var r = n(12),
            i = n(38),
            o = n(15),
            a = n(24),
            s = n(130);
        t.exports = function (t, e) {
            var n = 1 == t,
                u = 2 == t,
                c = 3 == t,
                l = 4 == t,
                f = 6 == t,
                d = 5 == t || f,
                p = e || s;
            return function (e, s, h) {
                for (
                    var v,
                        g,
                        m = o(e),
                        y = i(m),
                        _ = r(s, h, 3),
                        b = a(y.length),
                        w = 0,
                        x = n ? p(e, b) : u ? p(e, 0) : void 0;
                    b > w;
                    w++
                )
                    if ((d || w in y) && ((g = _((v = y[w]), w, m)), t))
                        if (n) x[w] = g;
                        else if (g)
                            switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return v;
                                case 6:
                                    return w;
                                case 2:
                                    x.push(v);
                            }
                        else if (l) return !1;
                return f ? -1 : c || l ? l : x;
            };
        };
    },
    function (t, e, n) {
        var r = n(9);
        t.exports = function (t, e, n) {
            for (var i in e) n && t[i] ? (t[i] = e[i]) : r(t, i, e[i]);
            return t;
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || (void 0 !== r && r in t))
                throw TypeError(n + ": incorrect invocation!");
            return t;
        };
    },
    function (t, e, n) {
        var r = n(49),
            i = n(3)("iterator"),
            o = n(14);
        t.exports = n(0).getIteratorMethod = function (t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
        };
    },
    function (t, e, n) {
        var r = n(21),
            i = n(3)("toStringTag"),
            o =
                "Arguments" ==
                r(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t
                ? "Undefined"
                : null === t
                ? "Null"
                : "string" ==
                  typeof (n = (function (t, e) {
                      try {
                          return t[e];
                      } catch (t) {}
                  })((e = Object(t)), i))
                ? n
                : o
                ? r(e)
                : "Object" == (a = r(e)) && "function" == typeof e.callee
                ? "Arguments"
                : a;
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function (t, e) {
            if (!r(t) || t._t !== e)
                throw TypeError("Incompatible receiver, " + e + " required!");
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(18);
        t.exports.f = function (t) {
            return new (function (t) {
                var e, n;
                (this.promise = new t(function (t, r) {
                    if (void 0 !== e || void 0 !== n)
                        throw TypeError("Bad Promise constructor");
                    (e = t), (n = r);
                })),
                    (this.resolve = r(e)),
                    (this.reject = r(n));
            })(t);
        };
    },
    function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = a(n(53)),
            i = a(n(59)),
            o =
                "function" == typeof i.default && "symbol" == typeof r.default
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof i.default &&
                              t.constructor === i.default &&
                              t !== i.default.prototype
                              ? "symbol"
                              : typeof t;
                      };
        function a(t) {
            return t && t.__esModule ? t : { default: t };
        }
        e.default =
            "function" == typeof i.default && "symbol" === o(r.default)
                ? function (t) {
                      return void 0 === t ? "undefined" : o(t);
                  }
                : function (t) {
                      return t &&
                          "function" == typeof i.default &&
                          t.constructor === i.default &&
                          t !== i.default.prototype
                          ? "symbol"
                          : void 0 === t
                          ? "undefined"
                          : o(t);
                  };
    },
    function (t, e, n) {
        t.exports = { default: n(81), __esModule: !0 };
    },
    function (t, e, n) {
        "use strict";
        var r = n(17),
            i = n(4),
            o = n(36),
            a = n(9),
            s = n(14),
            u = n(83),
            c = n(22),
            l = n(86),
            f = n(3)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function () {
                return this;
            };
        t.exports = function (t, e, n, h, v, g, m) {
            u(n, e, h);
            var y,
                _,
                b,
                w = function (t) {
                    if (!d && t in T) return T[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t);
                            };
                    }
                    return function () {
                        return new n(this, t);
                    };
                },
                x = e + " Iterator",
                C = "values" == v,
                k = !1,
                T = t.prototype,
                S = T[f] || T["@@iterator"] || (v && T[v]),
                A = S || w(v),
                O = v ? (C ? w("entries") : A) : void 0,
                E = ("Array" == e && T.entries) || S;
            if (
                (E &&
                    (b = l(E.call(new t()))) !== Object.prototype &&
                    b.next &&
                    (c(b, x, !0), r || "function" == typeof b[f] || a(b, f, p)),
                C &&
                    S &&
                    "values" !== S.name &&
                    ((k = !0),
                    (A = function () {
                        return S.call(this);
                    })),
                (r && !m) || (!d && !k && T[f]) || a(T, f, A),
                (s[e] = A),
                (s[x] = p),
                v)
            )
                if (
                    ((y = {
                        values: C ? A : w("values"),
                        keys: g ? A : w("keys"),
                        entries: O,
                    }),
                    m)
                )
                    for (_ in y) _ in T || o(T, _, y[_]);
                else i(i.P + i.F * (d || k), e, y);
            return y;
        };
    },
    function (t, e, n) {
        t.exports =
            !n(7) &&
            !n(13)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(34)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(8),
            i = n(6),
            o = n(20);
        t.exports = n(7)
            ? Object.defineProperties
            : function (t, e) {
                  i(t);
                  for (var n, a = o(e), s = a.length, u = 0; s > u; )
                      r.f(t, (n = a[u++]), e[n]);
                  return t;
              };
    },
    function (t, e, n) {
        var r = n(10),
            i = n(11),
            o = n(84)(!1),
            a = n(39)("IE_PROTO");
        t.exports = function (t, e) {
            var n,
                s = i(t),
                u = 0,
                c = [];
            for (n in s) n != a && r(s, n) && c.push(n);
            for (; e.length > u; )
                r(s, (n = e[u++])) && (~o(c, n) || c.push(n));
            return c;
        };
    },
    function (t, e, n) {
        var r = n(2).document;
        t.exports = r && r.documentElement;
    },
    function (t, e, n) {
        t.exports = { default: n(90), __esModule: !0 };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(10),
            o = n(7),
            a = n(4),
            s = n(36),
            u = n(27).KEY,
            c = n(13),
            l = n(40),
            f = n(22),
            d = n(25),
            p = n(3),
            h = n(26),
            v = n(42),
            g = n(91),
            m = n(61),
            y = n(6),
            _ = n(5),
            b = n(15),
            w = n(11),
            x = n(35),
            C = n(19),
            k = n(37),
            T = n(92),
            S = n(44),
            A = n(28),
            O = n(8),
            E = n(20),
            j = S.f,
            P = O.f,
            D = T.f,
            I = r.Symbol,
            N = r.JSON,
            M = N && N.stringify,
            L = p("_hidden"),
            F = p("toPrimitive"),
            q = {}.propertyIsEnumerable,
            B = l("symbol-registry"),
            W = l("symbols"),
            R = l("op-symbols"),
            $ = Object.prototype,
            H = "function" == typeof I && !!A.f,
            z = r.QObject,
            U = !z || !z.prototype || !z.prototype.findChild,
            V =
                o &&
                c(function () {
                    return (
                        7 !=
                        k(
                            P({}, "a", {
                                get: function () {
                                    return P(this, "a", { value: 7 }).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (t, e, n) {
                          var r = j($, e);
                          r && delete $[e],
                              P(t, e, n),
                              r && t !== $ && P($, e, r);
                      }
                    : P,
            X = function (t) {
                var e = (W[t] = k(I.prototype));
                return (e._k = t), e;
            },
            G =
                H && "symbol" == typeof I.iterator
                    ? function (t) {
                          return "symbol" == typeof t;
                      }
                    : function (t) {
                          return t instanceof I;
                      },
            Q = function (t, e, n) {
                return (
                    t === $ && Q(R, e, n),
                    y(t),
                    (e = x(e, !0)),
                    y(n),
                    i(W, e)
                        ? (n.enumerable
                              ? (i(t, L) && t[L][e] && (t[L][e] = !1),
                                (n = k(n, { enumerable: C(0, !1) })))
                              : (i(t, L) || P(t, L, C(1, {})), (t[L][e] = !0)),
                          V(t, e, n))
                        : P(t, e, n)
                );
            },
            J = function (t, e) {
                y(t);
                for (var n, r = g((e = w(e))), i = 0, o = r.length; o > i; )
                    Q(t, (n = r[i++]), e[n]);
                return t;
            },
            K = function (t) {
                var e = q.call(this, (t = x(t, !0)));
                return (
                    !(this === $ && i(W, t) && !i(R, t)) &&
                    (!(
                        e ||
                        !i(this, t) ||
                        !i(W, t) ||
                        (i(this, L) && this[L][t])
                    ) ||
                        e)
                );
            },
            Y = function (t, e) {
                if (
                    ((t = w(t)), (e = x(e, !0)), t !== $ || !i(W, e) || i(R, e))
                ) {
                    var n = j(t, e);
                    return (
                        !n ||
                            !i(W, e) ||
                            (i(t, L) && t[L][e]) ||
                            (n.enumerable = !0),
                        n
                    );
                }
            },
            Z = function (t) {
                for (var e, n = D(w(t)), r = [], o = 0; n.length > o; )
                    i(W, (e = n[o++])) || e == L || e == u || r.push(e);
                return r;
            },
            tt = function (t) {
                for (
                    var e, n = t === $, r = D(n ? R : w(t)), o = [], a = 0;
                    r.length > a;

                )
                    !i(W, (e = r[a++])) || (n && !i($, e)) || o.push(W[e]);
                return o;
            };
        H ||
            (s(
                (I = function () {
                    if (this instanceof I)
                        throw TypeError("Symbol is not a constructor!");
                    var t = d(arguments.length > 0 ? arguments[0] : void 0),
                        e = function (n) {
                            this === $ && e.call(R, n),
                                i(this, L) &&
                                    i(this[L], t) &&
                                    (this[L][t] = !1),
                                V(this, t, C(1, n));
                        };
                    return (
                        o && U && V($, t, { configurable: !0, set: e }), X(t)
                    );
                }).prototype,
                "toString",
                function () {
                    return this._k;
                }
            ),
            (S.f = Y),
            (O.f = Q),
            (n(43).f = T.f = Z),
            (n(29).f = K),
            (A.f = tt),
            o && !n(17) && s($, "propertyIsEnumerable", K, !0),
            (h.f = function (t) {
                return X(p(t));
            })),
            a(a.G + a.W + a.F * !H, { Symbol: I });
        for (
            var et =
                    "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                        ","
                    ),
                nt = 0;
            et.length > nt;

        )
            p(et[nt++]);
        for (var rt = E(p.store), it = 0; rt.length > it; ) v(rt[it++]);
        a(a.S + a.F * !H, "Symbol", {
            for: function (t) {
                return i(B, (t += "")) ? B[t] : (B[t] = I(t));
            },
            keyFor: function (t) {
                if (!G(t)) throw TypeError(t + " is not a symbol!");
                for (var e in B) if (B[e] === t) return e;
            },
            useSetter: function () {
                U = !0;
            },
            useSimple: function () {
                U = !1;
            },
        }),
            a(a.S + a.F * !H, "Object", {
                create: function (t, e) {
                    return void 0 === e ? k(t) : J(k(t), e);
                },
                defineProperty: Q,
                defineProperties: J,
                getOwnPropertyDescriptor: Y,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: tt,
            });
        var ot = c(function () {
            A.f(1);
        });
        a(a.S + a.F * ot, "Object", {
            getOwnPropertySymbols: function (t) {
                return A.f(b(t));
            },
        }),
            N &&
                a(
                    a.S +
                        a.F *
                            (!H ||
                                c(function () {
                                    var t = I();
                                    return (
                                        "[null]" != M([t]) ||
                                        "{}" != M({ a: t }) ||
                                        "{}" != M(Object(t))
                                    );
                                })),
                    "JSON",
                    {
                        stringify: function (t) {
                            for (
                                var e, n, r = [t], i = 1;
                                arguments.length > i;

                            )
                                r.push(arguments[i++]);
                            if (
                                ((n = e = r[1]),
                                (_(e) || void 0 !== t) && !G(t))
                            )
                                return (
                                    m(e) ||
                                        (e = function (t, e) {
                                            if (
                                                ("function" == typeof n &&
                                                    (e = n.call(this, t, e)),
                                                !G(e))
                                            )
                                                return e;
                                        }),
                                    (r[1] = e),
                                    M.apply(N, r)
                                );
                        },
                    }
                ),
            I.prototype[F] || n(9)(I.prototype, F, I.prototype.valueOf),
            f(I, "Symbol"),
            f(Math, "Math", !0),
            f(r.JSON, "JSON", !0);
    },
    function (t, e, n) {
        var r = n(21);
        t.exports =
            Array.isArray ||
            function (t) {
                return "Array" == r(t);
            };
    },
    function (t, e, n) {
        t.exports = { default: n(97), __esModule: !0 };
    },
    function (t, e) {
        (function (e) {
            t.exports = e;
        }.call(e, {}));
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    function (t, e, n) {
        var r = n(108),
            i =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
            o = r || i || Function("return this")();
        t.exports = o;
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(65).Symbol;
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(6);
        t.exports = function (t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var o = t.return;
                throw (void 0 !== o && r(o.call(t)), e);
            }
        };
    },
    function (t, e, n) {
        var r = n(14),
            i = n(3)("iterator"),
            o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(8),
            i = n(19);
        t.exports = function (t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : (t[e] = n);
        };
    },
    function (t, e, n) {
        var r = n(3)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            (o.return = function () {
                i = !0;
            }),
                Array.from(o, function () {
                    throw 2;
                });
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[r]();
                (a.next = function () {
                    return { done: (n = !0) };
                }),
                    (o[r] = function () {
                        return a;
                    }),
                    t(o);
            } catch (t) {}
            return n;
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(18),
            o = n(3)("species");
        t.exports = function (t, e) {
            var n,
                a = r(t).constructor;
            return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n);
        };
    },
    function (t, e, n) {
        var r,
            i,
            o,
            a = n(12),
            s = n(148),
            u = n(58),
            c = n(34),
            l = n(2),
            f = l.process,
            d = l.setImmediate,
            p = l.clearImmediate,
            h = l.MessageChannel,
            v = l.Dispatch,
            g = 0,
            m = {},
            y = function () {
                var t = +this;
                if (m.hasOwnProperty(t)) {
                    var e = m[t];
                    delete m[t], e();
                }
            },
            _ = function (t) {
                y.call(t.data);
            };
        (d && p) ||
            ((d = function (t) {
                for (var e = [], n = 1; arguments.length > n; )
                    e.push(arguments[n++]);
                return (
                    (m[++g] = function () {
                        s("function" == typeof t ? t : Function(t), e);
                    }),
                    r(g),
                    g
                );
            }),
            (p = function (t) {
                delete m[t];
            }),
            "process" == n(21)(f)
                ? (r = function (t) {
                      f.nextTick(a(y, t, 1));
                  })
                : v && v.now
                ? (r = function (t) {
                      v.now(a(y, t, 1));
                  })
                : h
                ? ((o = (i = new h()).port2),
                  (i.port1.onmessage = _),
                  (r = a(o.postMessage, o, 1)))
                : l.addEventListener &&
                  "function" == typeof postMessage &&
                  !l.importScripts
                ? ((r = function (t) {
                      l.postMessage(t + "", "*");
                  }),
                  l.addEventListener("message", _, !1))
                : (r =
                      "onreadystatechange" in c("script")
                          ? function (t) {
                                u.appendChild(c("script")).onreadystatechange =
                                    function () {
                                        u.removeChild(this), y.call(t);
                                    };
                            }
                          : function (t) {
                                setTimeout(a(y, t, 1), 0);
                            })),
            (t.exports = { set: d, clear: p });
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return { e: !1, v: t() };
            } catch (t) {
                return { e: !0, v: t };
            }
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(5),
            o = n(51);
        t.exports = function (t, e) {
            if ((r(t), i(e) && e.constructor === t)) return e;
            var n = o.f(t);
            return (0, n.resolve)(e), n.promise;
        };
    },
    function (t, e, n) {
        var r = n(4),
            i = n(0),
            o = n(13);
        t.exports = function (t, e) {
            var n = (i.Object || {})[t] || Object[t],
                a = {};
            (a[t] = e(n)),
                r(
                    r.S +
                        r.F *
                            o(function () {
                                n(1);
                            }),
                    "Object",
                    a
                );
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            function (t) {
                var e = n(78),
                    r = (n.n(e), n(80), n(121));
                n.n(r), n(122), n(125);
                !(function (t) {
                    t.keys().forEach(t);
                })(n(99)),
                    t(document).ready(function () {
                        t(".reviews-box")
                            .find(".reviews-box__wrap")
                            .each(function () {
                                var e = t(this).find(".reviews-box__text"),
                                    n = t(this).find(
                                        ".reviews-box__text-label"
                                    ),
                                    r =
                                        t(window).innerWidth() < 768
                                            ? 248
                                            : 227;
                                e.text().length < r &&
                                    (e.addClass("show"), n.addClass("hide")),
                                    n.on("click", function () {
                                        e.addClass("show"),
                                            t(this).addClass("hide");
                                    });
                            });
                    }),
                    t(document).ready(function () {
                        if (t("[data-scroll-block]").length) {
                            var e = t("[data-scroll-block]"),
                                n = t(".button-box"),
                                r = t("header");
                            function i() {
                                t(window).scrollTop() >=
                                e.offset().top + e.height() + r.height()
                                    ? n.addClass("show")
                                    : n.removeClass("show");
                            }
                            e.length > 0 &&
                                t(window).on("scroll", function () {
                                    i();
                                }),
                                t(document).on("headerBackClick", function () {
                                    i();
                                });
                        }
                    });
            }.call(e, n(1));
    },
    function (t, e, n) {
        (function (t) {
            var e;
            (window.select7_template_current = function (t, e) {
                var n, r;
                return (
                    (n = this.$el.attr("placeholder")),
                    (r = t.title),
                    t.isPlaceholder ? n : n + ": " + r
                );
            }),
                t(function () {
                    return t(".select7").select7(), n(79).init();
                }),
                (e = function () {
                    return [
                        "it",
                        "de",
                        "fr",
                        "tr",
                        "ar",
                        "pt",
                        "ja",
                        "es",
                        "ru",
                        "pl",
                    ].forEach(function (e) {
                        if (t("body").hasClass(e))
                            return t(".step-wrap__body").each(function () {
                                return (
                                    t(this)
                                        .find(".toggle-content-nav-item")
                                        .removeClass("active"),
                                    t(this)
                                        .find(".toggle-content-tab")
                                        .removeClass("active"),
                                    t(this)
                                        .find('[data-system="metric"]')
                                        .addClass("active")
                                );
                            });
                    });
                }),
                t(document).on("load", e());
        }.call(e, n(1)));
    },
    function (t, e, n) {
        var r, i, o;
        !(function (n, a) {
            "use strict";
            (i = []),
                void 0 ===
                    (o = "function" == typeof (r = a) ? r.apply(e, i) : r) ||
                    (t.exports = o);
        })(0, function () {
            "use strict";
            var t,
                e,
                n,
                r,
                i = !1,
                o = window.navigator.userAgent,
                a = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,
                s = /(https?:)?\/\//,
                u = [].forEach,
                c = /MSIE [0-9]\./i.test(o),
                l = /MSIE [0-8]\./i.test(o),
                f = o.indexOf("Opera Mini") > -1,
                d =
                    /(iPhone|iPod|iPad).+AppleWebKit/i.test(o) &&
                    (function () {
                        var t = o.match(/OS (\d)/);
                        return t && t.length > 1 && parseInt(t[1]) < 10;
                    })(),
                p =
                    o.indexOf(" Android ") > -1 &&
                    o.indexOf("Version/") > -1 &&
                    parseFloat((o.match("Android ([0-9.]+)") || [])[1]) <= 4.4;
            c ||
                (c = !!navigator.userAgent.match(
                    /MSIE 10\.|Trident.*rv[ :]*1[01]\.| Edge\/1\d\./
                ));
            try {
                new h("test");
            } catch (t) {
                var h = function (t, e) {
                    var n;
                    return (
                        (e = e || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0,
                        }),
                        (n =
                            document.createEvent(
                                "CustomEvent"
                            )).initCustomEvent(
                            t,
                            e.bubbles,
                            e.cancelable,
                            e.detail
                        ),
                        n
                    );
                };
                (h.prototype = window.Event.prototype),
                    (window.CustomEvent = h);
            }
            function v() {
                i &&
                    (g(),
                    setTimeout(function () {
                        (r.textContent = y()),
                            r.parentNode.appendChild(r),
                            window.dispatchEvent(
                                new h("viewport-units-buggyfill-style")
                            );
                    }, 1));
            }
            function g() {
                return (
                    (n = []),
                    u.call(document.styleSheets, function (t) {
                        var e = (function (t) {
                            try {
                                if (!t.cssRules) return;
                            } catch (t) {
                                if ("SecurityError" !== t.name) throw t;
                                return;
                            }
                            for (
                                var e = [], n = 0;
                                n < t.cssRules.length;
                                n++
                            ) {
                                var r = t.cssRules[n];
                                e.push(r);
                            }
                            return e;
                        })(t);
                        e &&
                            "patched-viewport" !== t.ownerNode.id &&
                            "ignore" !==
                                t.ownerNode.getAttribute(
                                    "data-viewport-units-buggyfill"
                                ) &&
                            ((t.media &&
                                t.media.mediaText &&
                                window.matchMedia &&
                                !window.matchMedia(t.media.mediaText)
                                    .matches) ||
                                u.call(e, m));
                    }),
                    n
                );
            }
            function m(e) {
                if (7 === e.type) {
                    var r;
                    try {
                        r = e.cssText;
                    } catch (t) {
                        return;
                    }
                    return (
                        (a.lastIndex = 0),
                        void (
                            a.test(r) &&
                            !s.test(r) &&
                            (n.push([e, null, r]),
                            t.hacks && t.hacks.findDeclarations(n, e, null, r))
                        )
                    );
                }
                if (e.style)
                    u.call(e.style, function (r) {
                        var i = e.style.getPropertyValue(r);
                        e.style.getPropertyPriority(r) && (i += " !important"),
                            (a.lastIndex = 0),
                            a.test(i) &&
                                (n.push([e, r, i]),
                                t.hacks &&
                                    t.hacks.findDeclarations(n, e, r, i));
                    });
                else {
                    if (!e.cssRules) return;
                    u.call(e.cssRules, function (t) {
                        m(t);
                    });
                }
            }
            function y() {
                e = (function () {
                    var t = window.innerHeight,
                        e = window.innerWidth;
                    return {
                        vh: t,
                        vw: e,
                        vmax: Math.max(e, t),
                        vmin: Math.min(e, t),
                    };
                })();
                var r,
                    i,
                    o = [],
                    s = [];
                return (
                    n.forEach(function (e) {
                        var n = function (e, n, r) {
                                var i,
                                    o = [];
                                (i = r.replace(a, _)),
                                    t.hacks &&
                                        (i = t.hacks.overwriteDeclaration(
                                            e,
                                            n,
                                            i
                                        )),
                                    n &&
                                        (o.push(e.selectorText),
                                        (i = n + ": " + i + ";"));
                                for (var s = e.parentRule; s; )
                                    s.media
                                        ? o.unshift(
                                              "@media " + s.media.mediaText
                                          )
                                        : s.conditionText &&
                                          o.unshift(
                                              "@supports " + s.conditionText
                                          ),
                                        (s = s.parentRule);
                                return { selector: o, content: i };
                            }.apply(null, e),
                            u = n.selector.length
                                ? n.selector.join(" {\n") + " {\n"
                                : "",
                            c = new Array(n.selector.length + 1).join("\n}");
                        if (!u || u !== r)
                            return (
                                s.length &&
                                    (o.push(r + s.join("\n") + i),
                                    (s.length = 0)),
                                void (u
                                    ? ((r = u), (i = c), s.push(n.content))
                                    : (o.push(n.content),
                                      (r = null),
                                      (i = null)))
                            );
                        u && !r && ((r = u), (i = c)), s.push(n.content);
                    }),
                    s.length && o.push(r + s.join("\n") + i),
                    f && o.push("* { content: normal !important; }"),
                    o.join("\n\n")
                );
            }
            function _(t, n, r) {
                var i = e[r];
                return (parseFloat(n) / 100) * i + "px";
            }
            function b(t) {
                return t.slice(0, t.indexOf("/", t.indexOf("://") + 3));
            }
            return {
                version: "0.6.1",
                findProperties: g,
                getCss: y,
                init: function (e) {
                    if (!i) {
                        if (
                            (!0 === e && (e = { force: !0 }),
                            ((t = e || {}).isMobileSafari = d),
                            (t.isBadStockAndroid = p),
                            !t.ignoreVmax || t.force || l || (c = !1),
                            l ||
                                (!t.force &&
                                    !d &&
                                    !c &&
                                    !p &&
                                    !f &&
                                    (!t.hacks || !t.hacks.required(t))))
                        )
                            return (
                                window.console &&
                                    l &&
                                    console.info(
                                        "viewport-units-buggyfill requires a proper CSSOM and basic viewport unit support, which are not available in IE8 and below"
                                    ),
                                { init: function () {} }
                            );
                        window.dispatchEvent(
                            new h("viewport-units-buggyfill-init")
                        ),
                            t.hacks && t.hacks.initialize(t),
                            (i = !0),
                            ((r = document.createElement("style")).id =
                                "patched-viewport"),
                            document[
                                t.appendToBody ? "body" : "head"
                            ].appendChild(r),
                            (function (t) {
                                var e = 0,
                                    n = function () {
                                        --e || t();
                                    };
                                u.call(document.styleSheets, function (t) {
                                    t.href &&
                                        b(t.href) !== b(location.href) &&
                                        "ignore" !==
                                            t.ownerNode.getAttribute(
                                                "data-viewport-units-buggyfill"
                                            ) &&
                                        (e++,
                                        (function (t, e) {
                                            !(function (t, e, n) {
                                                var r = new XMLHttpRequest();
                                                if ("withCredentials" in r)
                                                    r.open("GET", t, !0);
                                                else {
                                                    if (
                                                        "undefined" ==
                                                        typeof XDomainRequest
                                                    )
                                                        throw new Error(
                                                            "cross-domain XHR not supported"
                                                        );
                                                    (r =
                                                        new XDomainRequest()).open(
                                                        "GET",
                                                        t
                                                    );
                                                }
                                                (r.onload = e),
                                                    (r.onerror = n),
                                                    r.send();
                                            })(
                                                t.href,
                                                function () {
                                                    var n =
                                                        document.createElement(
                                                            "style"
                                                        );
                                                    (n.media = t.media),
                                                        n.setAttribute(
                                                            "data-href",
                                                            t.href
                                                        ),
                                                        (n.textContent =
                                                            this.responseText),
                                                        t.parentNode.replaceChild(
                                                            n,
                                                            t
                                                        ),
                                                        e();
                                                },
                                                e
                                            );
                                        })(t.ownerNode, n));
                                }),
                                    e || t();
                            })(function () {
                                var e = (function (t, e) {
                                    var n;
                                    return function () {
                                        var r = this,
                                            i = arguments;
                                        clearTimeout(n),
                                            (n = setTimeout(function () {
                                                t.apply(r, i);
                                            }, e));
                                    };
                                })(v, t.refreshDebounceWait || 100);
                                window.addEventListener(
                                    "orientationchange",
                                    e,
                                    !0
                                ),
                                    window.addEventListener("pageshow", e, !0),
                                    (t.force ||
                                        c ||
                                        (function () {
                                            try {
                                                return (
                                                    window.self !== window.top
                                                );
                                            } catch (t) {
                                                return !0;
                                            }
                                        })()) &&
                                        (window.addEventListener(
                                            "resize",
                                            e,
                                            !0
                                        ),
                                        (t._listeningToResize = !0)),
                                    t.hacks &&
                                        t.hacks.initializeEvents(t, v, e),
                                    v();
                            });
                    }
                },
                refresh: v,
            };
        });
    },
    function (t, e, n) {
        "use strict";
        (function (t) {
            var e,
                r = n(52),
                i = n.n(r),
                o = n(95),
                a = n.n(o),
                s = n(96),
                u = n.n(s);
            (e = function (t) {
                var e, n, r, o;
                return (
                    (o = function (t) {
                        return t.replace(/^\s*/, "").replace(/\s*$/, "");
                    }),
                    (n = function (e) {
                        var n, r, i, a;
                        return (
                            (n = t(e).attr("placeholder")) &&
                                t(e)
                                    .find("option:first")
                                    .prop("disabled", !0)
                                    .attr("data-is-placeholder", !0)
                                    .attr("selected", !0)
                                    .text(n),
                            (i = function (e) {
                                var n, r;
                                return (
                                    ((r = t(e).data()).title = o(t(e).text())),
                                    (r.value =
                                        t(e).attr("value") || o(t(e).text())),
                                    (r.disabled = !!t(e).attr("disabled")),
                                    (n = t(e).attr("class")) && (r.class = n),
                                    r
                                );
                            }),
                            (r = function (e) {
                                var n, r;
                                return (
                                    ((r = t(e).data()).isOptgroup = !0),
                                    (r.title = o(t(e).attr("label"))),
                                    (n = t(e).attr("class")) && (r.class = n),
                                    (r.options = a(e)),
                                    r
                                );
                            }),
                            (a = function (e) {
                                var n, o, a, s, u;
                                for (
                                    u = [],
                                        o = 0,
                                        a = (s = t(e).find(
                                            "> option, > optgroup"
                                        )).length;
                                    o < a;
                                    o++
                                )
                                    (n = s[o]),
                                        t(n).is("option")
                                            ? u.push(i(n))
                                            : u.push(r(n));
                                return u;
                            })(e)
                        );
                    }),
                    (r = function (e, n) {
                        var r, i, o, a, s, u, c, l;
                        for (l = t(e).val(), i = 0, a = n.length; i < a; i++)
                            if ((r = n[i]).isOptgroup) {
                                for (
                                    o = 0, s = (c = r.options).length;
                                    o < s;
                                    o++
                                )
                                    if ((u = c[o]).value === l) return u;
                            } else if (r.value === l) return r;
                        return n.length > 0 && n[0].isPlaceholder ? n[0] : null;
                    }),
                    (e = function () {
                        var e = (function () {
                            function e(n, r) {
                                var i, o, s;
                                a()(this, e),
                                    (this.el = n),
                                    (this.$el = t(this.el)),
                                    (this.$select7 = null),
                                    (this.$drop = null),
                                    (this.config = t.extend(
                                        {},
                                        this.defaults,
                                        r
                                    )),
                                    this.$el.is(".select7_native_dropdown") &&
                                        (this.config.nativeDropdown = !0),
                                    this.$el.is(".select7_readonly") &&
                                        (this.config.readonly = !0),
                                    this.$el.is(".select7_remove_current") &&
                                        (this.config.removeCurrent = !0),
                                    this.$el.is(
                                        ".select7_collapse_optgroups"
                                    ) && (this.config.collapseOptgroups = !0),
                                    this.$el.is(".select7_sort_active") &&
                                        (this.config.sortActive = !0);
                                var u = this.$el.data();
                                (s = u.templateOptionFnName),
                                    (o = u.templateOptgroupFnName),
                                    (i = u.templateCurrentFnName),
                                    s &&
                                        (this.config.optionTemplate =
                                            function () {
                                                for (
                                                    var t,
                                                        e = arguments.length,
                                                        n = Array(e),
                                                        r = 0;
                                                    r < e;
                                                    r++
                                                )
                                                    n[r] = arguments[r];
                                                return (t =
                                                    window[s]).call.apply(
                                                    t,
                                                    [this].concat(n)
                                                );
                                            }),
                                    o &&
                                        (this.config.optgroupTemplate =
                                            function () {
                                                for (
                                                    var t,
                                                        e = arguments.length,
                                                        n = Array(e),
                                                        r = 0;
                                                    r < e;
                                                    r++
                                                )
                                                    n[r] = arguments[r];
                                                return (t =
                                                    window[o]).call.apply(
                                                    t,
                                                    [this].concat(n)
                                                );
                                            }),
                                    i &&
                                        (this.config.currentTemplate =
                                            function () {
                                                for (
                                                    var t,
                                                        e = arguments.length,
                                                        n = Array(e),
                                                        r = 0;
                                                    r < e;
                                                    r++
                                                )
                                                    n[r] = arguments[r];
                                                return (t =
                                                    window[i]).call.apply(
                                                    t,
                                                    [this].concat(n)
                                                );
                                            }),
                                    this.updateItemsAndSelected(),
                                    (this.opened = !1),
                                    this.pwnSelect();
                            }
                            return (
                                u()(e, [
                                    {
                                        key: "updateItemsAndSelected",
                                        value: function () {
                                            return (
                                                (this.items = n(this.el)),
                                                (this.selected = r(
                                                    this.el,
                                                    this.items
                                                ))
                                            );
                                        },
                                    },
                                    {
                                        key: "pwnSelect",
                                        value: function () {
                                            var e,
                                                n,
                                                r,
                                                i,
                                                o,
                                                a = this;
                                            if (
                                                (this.config.nativeDropdown ||
                                                    this.$el.hide(),
                                                (e = this.$el
                                                    .attr("class")
                                                    .split(" ")).splice(
                                                    e.indexOf("select7"),
                                                    1
                                                ),
                                                (r =
                                                    '<div class="select7 ' +
                                                    e.join(" ") +
                                                    '">\n\t<div class="select7__current">\n\t\t<span data-role="value" class="select7__current-value" data-value=""></span><span class="select7__caret"></span>\n\t</div>\n</div>'),
                                                (this.$select7 = t(r)),
                                                this.$el.data(
                                                    "updateCurrentFn",
                                                    function () {
                                                        return a.updateCurrent();
                                                    }
                                                ),
                                                this.$el.on(
                                                    "change",
                                                    this.$el.data(
                                                        "updateCurrentFn"
                                                    )
                                                ),
                                                this.updateCurrent(),
                                                this.config.nativeDropdown ||
                                                    this.$select7
                                                        .find(
                                                            ".select7__current"
                                                        )
                                                        .click(function () {
                                                            return a.toggle();
                                                        }),
                                                this.$el.after(this.$select7),
                                                this.config.nativeDropdown)
                                            )
                                                return (
                                                    this.$el.css({
                                                        position: "absolute",
                                                        transformOrigin:
                                                            "top left",
                                                        zIndex: 1,
                                                        opacity: 0,
                                                        margin: 0,
                                                        padding: 0,
                                                    }),
                                                    (i = function (t, e) {
                                                        return parseFloat(
                                                            t
                                                                .css(e)
                                                                .replace(
                                                                    "px",
                                                                    ""
                                                                )
                                                        );
                                                    }),
                                                    (o = function (t) {
                                                        return (
                                                            i(t, "width") +
                                                            i(
                                                                t,
                                                                "padding-left"
                                                            ) +
                                                            i(
                                                                t,
                                                                "padding-right"
                                                            ) +
                                                            i(
                                                                t,
                                                                "border-left-width"
                                                            ) +
                                                            i(
                                                                t,
                                                                "border-right-width"
                                                            )
                                                        );
                                                    }),
                                                    (n = function (t) {
                                                        return (
                                                            i(t, "height") +
                                                            i(
                                                                t,
                                                                "padding-top"
                                                            ) +
                                                            i(
                                                                t,
                                                                "padding-bottom"
                                                            ) +
                                                            i(
                                                                t,
                                                                "border-top-width"
                                                            ) +
                                                            i(
                                                                t,
                                                                "border-bottom-width"
                                                            )
                                                        );
                                                    }),
                                                    this.$el.css({
                                                        transform:
                                                            "scaleX(" +
                                                            o(this.$select7) /
                                                                o(this.$el) +
                                                            ") scaleY(" +
                                                            n(this.$select7) /
                                                                n(this.$el) +
                                                            ")",
                                                    })
                                                );
                                        },
                                    },
                                    {
                                        key: "updateCurrent",
                                        value: function () {
                                            var t;
                                            return (
                                                this.updateItemsAndSelected(),
                                                (t = this.$select7.find(
                                                    "[data-role='value']"
                                                )),
                                                null === this.selected &&
                                                    (this.selected = {
                                                        isPlaceholder: !0,
                                                        title: "-",
                                                    }),
                                                t.attr(
                                                    "data-value",
                                                    this.selected.isPlaceholder
                                                        ? ""
                                                        : this.selected.value
                                                ),
                                                t.toggleClass(
                                                    "select7__placeholder",
                                                    !!this.selected
                                                        .isPlaceholder
                                                ),
                                                this.config.currentTemplate
                                                    ? t.html(
                                                          this.config.currentTemplate.call(
                                                              this,
                                                              this.selected,
                                                              this.items
                                                          )
                                                      )
                                                    : (t.text(
                                                          this.selected.title
                                                      ),
                                                      t
                                                          .find(
                                                              ".select7__icon"
                                                          )
                                                          .remove(),
                                                      this.selected.icon
                                                          ? t.prepend(
                                                                '<span class="select7__icon"><img src="' +
                                                                    this
                                                                        .selected
                                                                        .icon +
                                                                    '"></span>'
                                                            )
                                                          : void 0)
                                            );
                                        },
                                    },
                                    {
                                        key: "open",
                                        value: function () {
                                            var e,
                                                r,
                                                i,
                                                o,
                                                a,
                                                s,
                                                u,
                                                c,
                                                l,
                                                f,
                                                d,
                                                p,
                                                h,
                                                v = this;
                                            if (
                                                !this.opened &&
                                                ((this.items = n(this.el)),
                                                0 !== this.items.length)
                                            ) {
                                                if (
                                                    ((this.$drop = t(
                                                        '<ul class="select7__drop"></ul>'
                                                    )),
                                                    (this.$drop = t(
                                                        '<div class="select7__drop"></div>'
                                                    )),
                                                    (e = t(
                                                        '<ul class="select7__drop-list"></ul>'
                                                    )),
                                                    this.$drop.append(e),
                                                    (a = function (e) {
                                                        var n;
                                                        return (
                                                            (n = t(
                                                                '<li class="select7__option ' +
                                                                    (e.class ||
                                                                        "") +
                                                                    '"></li>'
                                                            )),
                                                            v.config
                                                                .optionTemplate
                                                                ? n.html(
                                                                      v.config.optionTemplate.call(
                                                                          v,
                                                                          e,
                                                                          v.items
                                                                      )
                                                                  )
                                                                : n.text(
                                                                      e.title
                                                                  ),
                                                            e.disabled &&
                                                                n.addClass(
                                                                    "select7__option_disabled"
                                                                ),
                                                            e === v.selected &&
                                                                n.addClass(
                                                                    "select7__option_current"
                                                                ),
                                                            e.icon &&
                                                                n.prepend(
                                                                    '<span class="select7__icon"><img src="' +
                                                                        e.icon +
                                                                        '"></span>'
                                                                ),
                                                            n.data("option", e),
                                                            n
                                                        );
                                                    }),
                                                    (o = function (e) {
                                                        var n,
                                                            r,
                                                            i,
                                                            o,
                                                            s,
                                                            c,
                                                            l,
                                                            f;
                                                        if (
                                                            ((r = t(
                                                                '<li class="select7__optgroup ' +
                                                                    (e.class ||
                                                                        "") +
                                                                    '"></li>'
                                                            )),
                                                            v.config
                                                                .collapseOptgroups &&
                                                                r.addClass(
                                                                    "select7__optgroup_collapse"
                                                                ),
                                                            (o = !1),
                                                            (n = t(
                                                                '<span class="select7__optgroup-label"></span>'
                                                            )),
                                                            v.config
                                                                .optgroupTemplate
                                                                ? n.html(
                                                                      v.config.optgroupTemplate.call(
                                                                          v,
                                                                          e,
                                                                          v.items
                                                                      )
                                                                  )
                                                                : n.text(
                                                                      e.title
                                                                  ),
                                                            r.append(n),
                                                            u.options)
                                                        ) {
                                                            for (
                                                                i = t(
                                                                    '<ul class="select7__optgroup-items"></ul>'
                                                                ),
                                                                    s = 0,
                                                                    c = (f =
                                                                        u.options)
                                                                        .length;
                                                                s < c;
                                                                s++
                                                            )
                                                                (l = f[s]) ===
                                                                    v.selected &&
                                                                    (o = !0),
                                                                    (v.config
                                                                        .removeCurrent &&
                                                                        l ===
                                                                            v.selected) ||
                                                                        i.append(
                                                                            a(l)
                                                                        );
                                                            r.append(i);
                                                        }
                                                        return (
                                                            v.config
                                                                .collapseOptgroups &&
                                                                o &&
                                                                r.addClass(
                                                                    "select7__optgroup_collapse_open"
                                                                ),
                                                            r
                                                        );
                                                    }),
                                                    this.config.sortActive)
                                                ) {
                                                    for (
                                                        r = [],
                                                            i = [],
                                                            s = c = 0,
                                                            f = (p = this.items)
                                                                .length;
                                                        c < f;
                                                        s = ++c
                                                    )
                                                        (u = p[s]).disabled &&
                                                        !u.isPlaceholder
                                                            ? i.push(u)
                                                            : r.push(u);
                                                    this.items = r.concat(i);
                                                }
                                                for (
                                                    s = l = 0,
                                                        d = (h = this.items)
                                                            .length;
                                                    l < d;
                                                    s = ++l
                                                )
                                                    (u = h[s]).isPlaceholder ||
                                                        (this.config
                                                            .removeCurrent &&
                                                            u ===
                                                                this
                                                                    .selected) ||
                                                        e.append(
                                                            u.isOptgroup
                                                                ? o(u)
                                                                : a(u)
                                                        );
                                                return (
                                                    this.$drop.on(
                                                        "click",
                                                        ".select7__option",
                                                        function (e) {
                                                            var n;
                                                            if (
                                                                !v.config
                                                                    .readonly
                                                            ) {
                                                                if (
                                                                    (n = t(
                                                                        e.currentTarget
                                                                    ).data(
                                                                        "option"
                                                                    )).disabled
                                                                )
                                                                    return;
                                                                if (n.href)
                                                                    return void (window.location.href =
                                                                        n.href);
                                                                v.$el
                                                                    .val(
                                                                        n.value
                                                                    )
                                                                    .trigger(
                                                                        "change"
                                                                    );
                                                            }
                                                            return v.close();
                                                        }
                                                    ),
                                                    this.$drop.on(
                                                        "click",
                                                        ".select7__optgroup_collapse",
                                                        function (e) {
                                                            return t(
                                                                e.currentTarget
                                                            ).toggleClass(
                                                                "select7__optgroup_collapse_open"
                                                            );
                                                        }
                                                    ),
                                                    this.$select7.append(
                                                        this.$drop
                                                    ),
                                                    this.$select7.addClass(
                                                        "select7_open"
                                                    ),
                                                    (this.opened = !0),
                                                    t("body").trigger(
                                                        "select7Opened"
                                                    ),
                                                    setTimeout(function () {
                                                        return (
                                                            v.$drop.click(
                                                                function (t) {
                                                                    return t.stopPropagation();
                                                                }
                                                            ),
                                                            v.$drop.data(
                                                                "closeFn",
                                                                function () {
                                                                    return v.close();
                                                                }
                                                            ),
                                                            t("body").on(
                                                                "click select7Opened",
                                                                v.$drop.data(
                                                                    "closeFn"
                                                                )
                                                            )
                                                        );
                                                    }, 1)
                                                );
                                            }
                                        },
                                    },
                                    {
                                        key: "close",
                                        value: function () {
                                            if (this.opened)
                                                return (
                                                    this.$select7.removeClass(
                                                        "select7_open"
                                                    ),
                                                    t("body").off(
                                                        "click select7Opened",
                                                        this.$drop.data(
                                                            "closeFn"
                                                        )
                                                    ),
                                                    this.$drop.remove(),
                                                    (this.$drop = null),
                                                    (this.opened = !1)
                                                );
                                        },
                                    },
                                    {
                                        key: "toggle",
                                        value: function () {
                                            return this.opened
                                                ? this.close()
                                                : this.open();
                                        },
                                    },
                                    {
                                        key: "destroy",
                                        value: function () {
                                            return (
                                                this.opened && close(),
                                                this.$select7.remove(),
                                                this.$el.off(
                                                    "change",
                                                    this.$el.data(
                                                        "updateCurrentFn"
                                                    )
                                                ),
                                                this.$el.data(
                                                    "updateCurrentFn",
                                                    null
                                                ),
                                                this.$el.data("select7", null),
                                                this.$el.show()
                                            );
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                        return (
                            (e.prototype.defaults = {
                                nativeDropdown: !1,
                                readonly: !1,
                            }),
                            e
                        );
                    }.call(this)),
                    (t.fn.select7 = function (n) {
                        for (
                            var r = arguments.length,
                                o = Array(r > 1 ? r - 1 : 0),
                                a = 1;
                            a < r;
                            a++
                        )
                            o[a - 1] = arguments[a];
                        return this.each(function () {
                            var r;
                            if (
                                ((r = t(this).data("select7")) ||
                                    ((r = new e(
                                        this,
                                        "object" ===
                                        (void 0 === n ? "undefined" : i()(n))
                                            ? option
                                            : {}
                                    )),
                                    t(this).data("select7", r)),
                                "string" == typeof n)
                            )
                                return r[n].apply(r, o);
                        });
                    })
                );
            }),
                "function" == typeof define && n(63)
                    ? define(["jquery"], e)
                    : e(t);
        }.call(e, n(1)));
    },
    function (t, e, n) {
        n(16), n(23), (t.exports = n(26).f("iterator"));
    },
    function (t, e, n) {
        var r = n(32),
            i = n(33);
        t.exports = function (t) {
            return function (e, n) {
                var o,
                    a,
                    s = String(i(e)),
                    u = r(n),
                    c = s.length;
                return u < 0 || u >= c
                    ? t
                        ? ""
                        : void 0
                    : (o = s.charCodeAt(u)) < 55296 ||
                      o > 56319 ||
                      u + 1 === c ||
                      (a = s.charCodeAt(u + 1)) < 56320 ||
                      a > 57343
                    ? t
                        ? s.charAt(u)
                        : o
                    : t
                    ? s.slice(u, u + 2)
                    : a - 56320 + ((o - 55296) << 10) + 65536;
            };
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(37),
            i = n(19),
            o = n(22),
            a = {};
        n(9)(a, n(3)("iterator"), function () {
            return this;
        }),
            (t.exports = function (t, e, n) {
                (t.prototype = r(a, { next: i(1, n) })), o(t, e + " Iterator");
            });
    },
    function (t, e, n) {
        var r = n(11),
            i = n(24),
            o = n(85);
        t.exports = function (t) {
            return function (e, n, a) {
                var s,
                    u = r(e),
                    c = i(u.length),
                    l = o(a, c);
                if (t && n != n) {
                    for (; c > l; ) if ((s = u[l++]) != s) return !0;
                } else
                    for (; c > l; l++)
                        if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1;
            };
        };
    },
    function (t, e, n) {
        var r = n(32),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
        };
    },
    function (t, e, n) {
        var r = n(10),
            i = n(15),
            o = n(39)("IE_PROTO"),
            a = Object.prototype;
        t.exports =
            Object.getPrototypeOf ||
            function (t) {
                return (
                    (t = i(t)),
                    r(t, o)
                        ? t[o]
                        : "function" == typeof t.constructor &&
                          t instanceof t.constructor
                        ? t.constructor.prototype
                        : t instanceof Object
                        ? a
                        : null
                );
            };
    },
    function (t, e, n) {
        "use strict";
        var r = n(88),
            i = n(89),
            o = n(14),
            a = n(11);
        (t.exports = n(54)(
            Array,
            "Array",
            function (t, e) {
                (this._t = a(t)), (this._i = 0), (this._k = e);
            },
            function () {
                var t = this._t,
                    e = this._k,
                    n = this._i++;
                return !t || n >= t.length
                    ? ((this._t = void 0), i(1))
                    : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
            },
            "values"
        )),
            (o.Arguments = o.Array),
            r("keys"),
            r("values"),
            r("entries");
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e) {
        t.exports = function (t, e) {
            return { value: e, done: !!t };
        };
    },
    function (t, e, n) {
        n(60), n(30), n(93), n(94), (t.exports = n(0).Symbol);
    },
    function (t, e, n) {
        var r = n(20),
            i = n(28),
            o = n(29);
        t.exports = function (t) {
            var e = r(t),
                n = i.f;
            if (n)
                for (var a, s = n(t), u = o.f, c = 0; s.length > c; )
                    u.call(t, (a = s[c++])) && e.push(a);
            return e;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(43).f,
            o = {}.toString,
            a =
                "object" == typeof window &&
                window &&
                Object.getOwnPropertyNames
                    ? Object.getOwnPropertyNames(window)
                    : [];
        t.exports.f = function (t) {
            return a && "[object Window]" == o.call(t)
                ? (function (t) {
                      try {
                          return i(t);
                      } catch (t) {
                          return a.slice();
                      }
                  })(t)
                : i(r(t));
        };
    },
    function (t, e, n) {
        n(42)("asyncIterator");
    },
    function (t, e, n) {
        n(42)("observable");
    },
    function (t, e, n) {
        "use strict";
        (e.__esModule = !0),
            (e.default = function (t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            });
    },
    function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = (function (t) {
            return t && t.__esModule ? t : { default: t };
        })(n(62));
        e.default = (function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        (0, r.default)(t, i.key, i);
                }
            }
            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        })();
    },
    function (t, e, n) {
        n(98);
        var r = n(0).Object;
        t.exports = function (t, e, n) {
            return r.defineProperty(t, e, n);
        };
    },
    function (t, e, n) {
        var r = n(4);
        r(r.S + r.F * !n(7), "Object", { defineProperty: n(8).f });
    },
    function (t, e, n) {
        var r = {
            "./app.coffee": 100,
            "./body-type.coffee": 101,
            "./choose-box.coffee": 102,
            "./choose-list.coffee": 103,
            "./header.coffee": 104,
            "./input-box.coffee": 105,
            "./load-block.coffee": 115,
            "./load-box.coffee": 116,
            "./notification-box.coffee": 117,
            "./question-box.coffee": 118,
            "./select-box.coffee": 119,
            "./toggle-content.coffee": 120,
        };
        function i(t) {
            return n(o(t));
        }
        function o(t) {
            var e = r[t];
            if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
            return e;
        }
        (i.keys = function () {
            return Object.keys(r);
        }),
            (i.resolve = o),
            (t.exports = i),
            (i.id = 99);
    },
    function (t, e, n) {
        (function (t) {
            var e, n, r, i, o, a, s, u, c;
            t(function () {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    c,
                    l,
                    f,
                    d,
                    p,
                    h,
                    v,
                    g,
                    m,
                    y,
                    _,
                    b,
                    w,
                    x,
                    C,
                    k,
                    T,
                    S,
                    A,
                    O,
                    E,
                    j,
                    P,
                    D,
                    I,
                    N,
                    M,
                    L,
                    F;
                if (t(".app").length)
                    return (
                        (e = t("body")),
                        (s = (o = t(".intro-box")).find(
                            ".intro-box__select-button"
                        )),
                        (a = o.find(".button-box__button")),
                        (C = t(".step-wrap")),
                        (x = C.find(".steps-box__list-item")),
                        (w = C.find(".step-wrap__body")),
                        (i = t(".header__toggle")),
                        (k = t(".step-wrap__footer")),
                        (n = t(".choose-list__item")),
                        (c = t(".number-field__input")),
                        (r = t(".header__back, .steps-box__back")),
                        (S = 0),
                        (j = !1),
                        (t("body").hasClass("de") ||
                            t("body").hasClass("fr") ||
                            t("body").hasClass("it") ||
                            t("body").hasClass("es") ||
                            t("body").hasClass("pt")) &&
                            (j = !0),
                        (M =
                            AB.isAD() || AB.isAE()
                                ? [
                                      "1",
                                      "2",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "18",
                                      "19",
                                      "20",
                                      "20-2",
                                      "21",
                                      "22",
                                      "23",
                                      "24",
                                  ]
                                : AB.isAB() || AB.isAC()
                                ? [
                                      "1",
                                      "2",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "18",
                                      "19",
                                      "20",
                                      "20-2",
                                      "21",
                                      "22",
                                      "23",
                                      "24",
                                  ]
                                : AB.isAP() ||
                                  ABFlag.emailConsent() ||
                                  (AB.isBC() && j) ||
                                  (AB.isAK() && j) ||
                                  (AB.isA() && t("body").hasClass("de"))
                                ? [
                                      "1",
                                      "2",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "18",
                                      "19",
                                      "20",
                                      "20-2",
                                      "21",
                                      "22",
                                      "23",
                                      "24",
                                      "25",
                                  ]
                                : AB.isAX()
                                ? [
                                      "1",
                                      "2",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "18",
                                      "19",
                                      "20",
                                      "20-2",
                                      "21",
                                      "22",
                                      "23",
                                      "24",
                                  ]
                                : AB.isBA()
                                ? [
                                      "1",
                                      "2",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "18",
                                      "19",
                                      "20",
                                      "20-2",
                                      "21-2",
                                      "24",
                                  ]
                                : AB.isDO() || AB.isDP() || AB.isDQ()
                                ? [
                                      "1",
                                      "1-1",
                                      "2",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "20-2",
                                      "21",
                                      "22",
                                      "23",
                                      "24",
                                  ]
                                : AB.isDV()
                                ? [
                                      "1",
                                      "2",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "18-2",
                                      "20-2",
                                      "21",
                                      "22",
                                      "23",
                                      "24",
                                  ]
                                : [
                                      "1",
                                      "2",
                                      "6",
                                      "7",
                                      "8",
                                      "9",
                                      "10",
                                      "11",
                                      "12",
                                      "13",
                                      "14",
                                      "16",
                                      "17",
                                      "18",
                                      "19",
                                      "20",
                                      "20-2",
                                      "21",
                                      "22",
                                      "23",
                                      "24",
                                  ]),
                        (T = function () {
                            return (
                                w.removeClass("active"),
                                C.removeClass("step-wrap_show"),
                                i.removeClass("hide"),
                                o.removeClass("intro-box_hide"),
                                x.removeClass("selected active hide"),
                                n.removeClass("active"),
                                c.val(""),
                                e.removeClass("started"),
                                t("select.select7").each(function () {
                                    return t(this)
                                        .select7("destroy")
                                        .val("")
                                        .trigger("change")
                                        .select7();
                                }),
                                t(".step-wrap__button").addClass("disabled"),
                                t(".body-type__item").removeClass("active"),
                                t(".choose-box__item").removeClass("active"),
                                t(".body-params__col").addClass("empty-select"),
                                t(".select-box__item").removeClass("active"),
                                t(".question-box__item").removeClass("active")
                            );
                        }),
                        (D = function (e) {
                            var n, r;
                            return (
                                (e = String(e)),
                                (n = M.indexOf(e)),
                                (r = x.length),
                                (S = n),
                                t(document).trigger("setActiveStep", n),
                                x.each(function (e, i) {
                                    if (
                                        (e < n && t(i).addClass("selected"),
                                        e === n &&
                                            (x.removeClass("active"),
                                            t(i).addClass("active")),
                                        window.innerWidth < 768)
                                    ) {
                                        if (S > 2 && S < r - 1 && e < S - 2)
                                            return t(i).addClass("hide");
                                    } else if (S > 3 && S < r - 2 && e < S - 3) return t(i).addClass("hide");
                                }),
                                0 === S && T(),
                                w.each(function (n, r) {
                                    if (t(r).attr("data-step") === e)
                                        return (
                                            w.removeClass("active"),
                                            t(r).addClass("active")
                                        );
                                }),
                                n === M.indexOf("8") ||
                                n === M.indexOf("21") ||
                                n >= M.indexOf("23")
                                    ? k.addClass("hide")
                                    : k.hasClass("hide")
                                    ? k.removeClass("hide")
                                    : void 0
                            );
                        }),
                        (F = function (t) {
                            return (
                                o.addClass("intro-box_hide"),
                                C.addClass("step-wrap_show"),
                                i.addClass("hide"),
                                D(t || 2),
                                e.addClass("started")
                            );
                        }),
                        (L = Date.parse(new Date()) + "."),
                        (E = document.location.href),
                        (A =
                            -1 !== E.indexOf("fbclid")
                                ? E.slice(E.indexOf("fbclid") + 7)
                                : "_not_find_fbclid"),
                        (P = function (t) {
                            return (
                                window.dataLayer &&
                                    window.dataLayer.push({
                                        event: "VirtualPageView",
                                        virtualPageURL: t,
                                    }),
                                (document.location.href =
                                    "https://better-wl.onelink.me/sS7F?pid=onepage_landing&c=promo-landing-page&af_sub1=fb.1." +
                                    L +
                                    A)
                            );
                        }),
                        s.on("click", function (n) {
                            return (
                                t(this).is('[data-gender="male"]') &&
                                    e.attr("data-state", "male"),
                                t(this).is('[data-gender="female"]') &&
                                    e.attr("data-state", "female"),
                                "promo-landing-page" ===
                                e.attr("data-page-type")
                                    ? t(this).is('[data-gender="male"]')
                                        ? P("male_click")
                                        : P("female_click")
                                    : F()
                            );
                        }),
                        a.on("click", function (n) {
                            return (
                                t(this).is('[data-gender="male"]') &&
                                    e.attr("data-state", "male"),
                                t(this).is('[data-gender="female"]') &&
                                    e.attr("data-state", "female"),
                                "promo-landing-page" ===
                                e.attr("data-page-type")
                                    ? t(this).is('[data-gender="male"]')
                                        ? P("male_click")
                                        : P("female_click")
                                    : F()
                            );
                        }),
                        o.find("[data-age]").on("click", function (t) {
                            return (
                                AB.isAD() && e.attr("data-state", "male"),
                                AB.isAE() && e.attr("data-state", "female"),
                                F()
                            );
                        }),
                        o.find("[data-bodytype]").on("click", function (t) {
                            return (
                                AB.isAB() && e.attr("data-state", "male"),
                                AB.isAC() && e.attr("data-state", "female"),
                                F()
                            );
                        }),
                        o.find("[data-diet-type]").on("click", function (n) {
                            var r;
                            return (
                                (r = t(n.target)
                                    .closest(".choose-block__item")
                                    .attr("data-diet-type")),
                                e.attr("data-diet-type", r),
                                F("1-1")
                            );
                        }),
                        r.on("click", function () {
                            var e;
                            return (
                                (e =
                                    "22" ===
                                    t(".step-wrap__body.active").attr(
                                        "data-step"
                                    )
                                        ? "20-2"
                                        : M[S - 1]),
                                D(e),
                                t(document).trigger("headerBackClick"),
                                x.each(function (e, n) {
                                    if (S > 3)
                                        return e < S - 2
                                            ? t(n).addClass("hide")
                                            : t(n)
                                                  .prev()
                                                  .prev()
                                                  .removeClass("hide");
                                })
                            );
                        }),
                        t(".step-wrap__body_step-1-1 .choose-list__item").on(
                            "click",
                            function (n) {
                                var r;
                                return (
                                    (r = t(n.target)
                                        .closest(".choose-list__item")
                                        .attr("data-gender-type")),
                                    setTimeout(function () {
                                        return e.attr("data-state", r), D(2);
                                    }, 550)
                                );
                            }
                        ),
                        t(".step-wrap__body_step-2 .choose-list__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return D(6);
                                }, 550);
                            }
                        ),
                        (h = t(".step-wrap__body_step-3")),
                        (v = h.find(".step-wrap__button")),
                        (m = h.find(".number-field__input")),
                        (g = h.find(".body-weight__error-label")),
                        h
                            .find(".imperial-content .number-field__input")
                            .on("input", function (e) {
                                var n;
                                return "" === (n = t(this)).val() ||
                                    n.val() < 55 ||
                                    n.val() > 661
                                    ? (v.addClass("disabled"),
                                      g.addClass("show"))
                                    : (v.removeClass("disabled"),
                                      g.removeClass("show"));
                            }),
                        h
                            .find(".metric-content .number-field__input")
                            .on("input", function (e) {
                                var n;
                                return "" === (n = t(this)).val() ||
                                    n.val() < 25 ||
                                    n.val() > 300
                                    ? (v.addClass("disabled"),
                                      g.addClass("show"))
                                    : (v.removeClass("disabled"),
                                      g.removeClass("show"));
                            }),
                        v.on("click", function (e) {
                            return "" ===
                                h
                                    .find(
                                        ".toggle-content-tab.active .number-field__input"
                                    )
                                    .val()
                                ? (t(this).addClass("disabled"), m.val(""))
                                : D(4);
                        }),
                        (y = t(".step-wrap__body_step-4")),
                        (_ = y.find(".step-wrap__button")),
                        (b = y.find("select.select7")),
                        (I = !1),
                        (N = function () {
                            return y.find(
                                ".toggle-content-tab.active .empty-select"
                            ).length
                                ? (_.addClass("disabled"), (I = !1))
                                : (_.removeClass("disabled"), (I = !0));
                        }),
                        b.on("change", function (e) {
                            return (
                                t(this)
                                    .closest(".body-params__col")
                                    .removeClass("empty-select"),
                                N()
                            );
                        }),
                        _.on("click", function (t) {
                            if ((N(), I))
                                return AB.isAD() || AB.isAE() ? D(6) : D(5);
                        }),
                        t(".step-wrap__body_step-5 .choose-box__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return AB.isAB() || AB.isAC() ? D(7) : D(6);
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-6 .body-type__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return D(7);
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-7 .choose-box__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return (
                                        D(8),
                                        t(
                                            ".step-wrap__body_step-8 .step-wrap__button"
                                        ).removeClass("disabled")
                                    );
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-8 .step-wrap__button").on(
                            "click",
                            function () {
                                return D(9);
                            }
                        ),
                        t(".step-wrap__body_step-9 .choose-list__item").on(
                            "click",
                            function () {
                                return (
                                    O(),
                                    setTimeout(function () {
                                        return D(10);
                                    }, 550)
                                );
                            }
                        ),
                        t(".step-wrap__body_step-10 .step-wrap__button").on(
                            "click",
                            function () {
                                return D(11);
                            }
                        ),
                        t(".step-wrap__body_step-11 .choose-list__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return D(12);
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-12 .choose-list__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return D(13);
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-13 .choose-list__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return D(14);
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-14 .choose-list__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return D(16);
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-15 .step-wrap__button").on(
                            "click",
                            function () {
                                return D(16);
                            }
                        ),
                        t(".step-wrap__body_step-16 .question-box__item").on(
                            "click",
                            function () {
                                return setTimeout(function () {
                                    return D(17);
                                }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-17 .question-box__item").on(
                            "click",
                            function () {
                                return AB.isDO() || AB.isDP() || AB.isDQ()
                                    ? setTimeout(function () {
                                          return D("20-2");
                                      }, 550)
                                    : AB.isDV()
                                    ? setTimeout(function () {
                                          return D("18-2");
                                      }, 550)
                                    : setTimeout(function () {
                                          return D(18);
                                      }, 550);
                            }
                        ),
                        t(".step-wrap__body_step-18 .step-wrap__button").on(
                            "click",
                            function () {
                                return D(19);
                            }
                        ),
                        t(".step-wrap__body_step-18-2 .step-wrap__button").on(
                            "click",
                            function () {
                                return D("20-2");
                            }
                        ),
                        t(".step-wrap__body_step-19 .step-wrap__button").on(
                            "click",
                            function () {
                                return D(20);
                            }
                        ),
                        t(".step-wrap__body_step-20 .step-wrap__button").on(
                            "click",
                            function () {
                                return D("20-2");
                            }
                        ),
                        (l = t(".step-wrap__body_step-20-2")),
                        (f = l.find(".step-wrap__button")),
                        l.find(".measurement-field__input"),
                        (p = l.find(".measurement-field__error-label")),
                        (d = l.find(".body-measurements__warning")),
                        l.find(".measurement-field__input").each(function () {
                            return t(this).on("input", function (e) {
                                var n,
                                    r,
                                    i,
                                    o,
                                    a,
                                    s,
                                    c,
                                    h,
                                    v,
                                    g,
                                    m,
                                    y,
                                    _,
                                    b,
                                    w,
                                    x;
                                switch (
                                    ((v = (h = t(this)).closest(
                                        "[data-system]"
                                    )),
                                    (b = h.attr("data-type")),
                                    (x = 10),
                                    (w = 100),
                                    (n = v.find('[data-type="age"]')),
                                    (a = v.find('[data-type="height"]')),
                                    (s = v.find('[data-type="heightFt"]')),
                                    (c = v.find('[data-type="heightIn"]')),
                                    (y = v.find('[data-type="weight"]')),
                                    (g = v.find('[data-type="targetWeight"]')),
                                    (_ = v.find('[data-type="weightLbs"]')),
                                    (m = v.find(
                                        '[data-type="targetWeightLbs"]'
                                    )),
                                    b)
                                ) {
                                    case "age":
                                        (x = 18), (w = 90);
                                        break;
                                    case "height":
                                        (x = 90), (w = 243);
                                        break;
                                    case "heightFt":
                                        (x = 3), (w = 7);
                                        break;
                                    case "heightIn":
                                        (x = 0), (w = 11);
                                        break;
                                    case "weightLbs":
                                    case "targetWeightLbs":
                                        (x = 55), (w = 661);
                                        break;
                                    case "weight":
                                    case "targetWeight":
                                        (x = 25), (w = 300);
                                        break;
                                    default:
                                        return;
                                }
                                return (
                                    "" === h.val() || h.val() < x || h.val() > w
                                        ? (h
                                              .closest(".measurement-field")
                                              .find(p)
                                              .addClass("show"),
                                          h.addClass("error"))
                                        : (h
                                              .closest(".measurement-field")
                                              .find(p)
                                              .removeClass("show"),
                                          h.removeClass("error")),
                                    (r = s.length && c.length ? s : a),
                                    (o = _.length ? _ : y),
                                    (i = m.length ? m : g),
                                    d.removeClass("show"),
                                    (n.val().length &&
                                        o.val().length &&
                                        i.val().length &&
                                        r.val().length) > 0 &&
                                    !v.find("input").hasClass("error")
                                        ? (f.removeClass("disabled"),
                                          u(l)
                                              ? d.addClass("show")
                                              : d.removeClass("show"))
                                        : f.addClass("disabled")
                                );
                            });
                        }),
                        f.on("click", function (e) {
                            return (
                                O(),
                                D(21),
                                t(document).trigger("loaderInit"),
                                setTimeout(function () {
                                    return D(22);
                                }, 9e3)
                            );
                        }),
                        t(".step-wrap__body_step-22 .choose-list__item").on(
                            "click",
                            function () {
                                return (
                                    setTimeout(function () {
                                        return (
                                            D(23),
                                            t(document).trigger(
                                                "loaderInitMore"
                                            )
                                        );
                                    }, 550),
                                    setTimeout(function () {
                                        return (
                                            D(24),
                                            t(document).trigger(
                                                "endLoaderTimer"
                                            )
                                        );
                                    }, 8500)
                                );
                            }
                        ),
                        (AB.isAP() ||
                            ABFlag.emailConsent() ||
                            (AB.isBC() && j) ||
                            (AB.isAK() && j) ||
                            (AB.isA() && t("body").hasClass("de"))) &&
                            t(".step-wrap__body_step-25").length > 0 &&
                            t(".step-wrap__body_step-24").on(
                                "click",
                                ".step-wrap__button:not(.disabled)",
                                function () {
                                    return D(25);
                                }
                            ),
                        t(".step-wrap__body_step-2 .choose-list__item").on(
                            "click",
                            function (e) {
                                return (
                                    t(".goal-step-label").text(
                                        t(this).data("targetlabel")
                                    ),
                                    t(".sleep-step-label").text(
                                        t(this).data("sleeplabel")
                                    )
                                );
                            }
                        ),
                        t(".step-wrap__body_step-5 .choose-box__item").on(
                            "click",
                            function (e) {
                                return t("body").hasClass("ru")
                                    ? t(".age-step-label").text(
                                          "в возрасте " +
                                              t(this)
                                                  .find(
                                                      ".choose-box__item-text"
                                                  )
                                                  .text() +
                                              " лет"
                                      )
                                    : t(".age-step-label").text(
                                          t(this)
                                              .find(".choose-box__item-title")
                                              .text()
                                      );
                            }
                        ),
                        t(".step-wrap__body_step-6 .body-type__item").on(
                            "click",
                            function () {
                                return t(".bodytype-step-label").text(
                                    t(this).data("bodytypelabel")
                                );
                            }
                        ),
                        (O = function () {
                            var e, n, r, i, o, a, s, u, c, l;
                            return (
                                (u = t(
                                    ".step-wrap__body_step-11 .fitness-step-label"
                                ).attr("data-lose-weight")),
                                (a = t(
                                    ".step-wrap__body_step-11 .fitness-step-label"
                                ).attr("data-gain-weight")),
                                (o = t(
                                    ".step-wrap__body_step-24 .input-box"
                                ).attr("data-fitness-plan")),
                                (c = t(
                                    ".step-wrap__body_step-24 .input-box"
                                ).attr("data-loss-plan")),
                                t(".body-measurements").length
                                    ? ((i = t(
                                          '.step-wrap__body_step-20-2 .toggle-content-tab.active [data-type="targetWeight"]'
                                      ).val()),
                                      (s = t(
                                          '.step-wrap__body_step-20-2 .toggle-content-tab.active [data-type="weight"]'
                                      )
                                          .siblings(".measurement-field__label")
                                          .text()),
                                      (r = t(
                                          '.step-wrap__body_step-20-2 .toggle-content-tab.active [data-type="weight"]'
                                      ).val()))
                                    : ((i = t(
                                          ".step-wrap__body_step-3 .toggle-content-tab.active .number-field__input"
                                      ).val()),
                                      (s = t(
                                          ".step-wrap__body_step-3 .toggle-content-tab.active .number-field__label"
                                      ).text()),
                                      (r = t(
                                          ".step-wrap__body_step-4 .toggle-content-tab.active .select-weight"
                                      ).val())),
                                (l = parseInt(i) - parseInt(r)) < 0 &&
                                    (l *= -1),
                                parseInt(i) < parseInt(r)
                                    ? ((n =
                                          t("body").hasClass("de") ||
                                          t("body").hasClass("tr")
                                              ? l + s + " " + u
                                              : t("body").hasClass("ja")
                                              ? l + s + u
                                              : u + " " + l + s),
                                      (e = c))
                                    : ((n =
                                          t("body").hasClass("de") ||
                                          t("body").hasClass("tr")
                                              ? l + s + " " + a
                                              : t("body").hasClass("ja")
                                              ? l + s + a
                                              : a + " " + l + s),
                                      (e = o)),
                                t(
                                    ".step-wrap__body_step-24 .input-box__title-label"
                                ).text(e),
                                t(
                                    ".step-wrap__body_step-11 .fitness-step-label"
                                ).text(n),
                                t(
                                    ".step-wrap__body_step-11 .typicalday-step-label"
                                ).text(
                                    t(
                                        ".step-wrap__body_step-7 .choose-box__item.active"
                                    ).data("targetlabel")
                                )
                            );
                        })
                    );
            }),
                t("body").on("click", ".select-height", function () {
                    var e, n;
                    if (
                        ("165",
                        42,
                        t(this).hasClass("select7_open") &&
                            (e = t(
                                ".step-wrap__body_step-4 .toggle-content-tab.metric-body-param-content .select-height .select7__drop-list"
                            )).length)
                    )
                        return (
                            (n = e.find(".select7__option:contains(165)")),
                            e.scrollTop(42 * e.children().index(n))
                        );
                }),
                t("body").on("click", ".select-ft", function () {
                    var e, n;
                    if (
                        ("5",
                        42,
                        t(this).hasClass("select7_open") &&
                            (e = t(
                                ".step-wrap__body_step-4 .toggle-content-tab.imperial-body-param-content .select-ft .select7__drop-list"
                            )).length)
                    )
                        return (
                            (n = e.find(".select7__option:contains(5)")),
                            e.scrollTop(42 * e.children().index(n))
                        );
                }),
                t("body").on("click", ".select-inch", function () {
                    var e, n;
                    if (
                        ("4",
                        42,
                        t(this).hasClass("select7_open") &&
                            (e = t(
                                ".step-wrap__body_step-4 .toggle-content-tab.imperial-body-param-content .select-inch .select7__drop-list"
                            )).length)
                    )
                        return (
                            (n = e.find(".select7__option:contains(4)")),
                            e.scrollTop(42 * e.children().index(n))
                        );
                }),
                t("body").on("click", ".select-weight", function () {
                    var e, n, r;
                    if (
                        ("62",
                        "136",
                        42,
                        t(this).hasClass("select7_open") &&
                            ((r = t(
                                ".step-wrap__body_step-4 .toggle-content-tab.metric-body-param-content .select-weight .select7__drop-list"
                            )),
                            (n = t(
                                ".step-wrap__body_step-4 .toggle-content-tab.imperial-body-param-content .select-weight .select7__drop-list"
                            )),
                            r.length &&
                                ((e = r.find(".select7__option:contains(62)")),
                                r.scrollTop(42 * r.children().index(e))),
                            n.length))
                    )
                        return (
                            (e = n.find(".select7__option:contains(136)")),
                            n.scrollTop(42 * n.children().index(e))
                        );
                }),
                t(".steps-box__progressbar").length &&
                    ((o = t(".step-wrap")),
                    (a = o.find(".step-wrap__body")),
                    (i = t(".steps-box")),
                    (r = i.find(".steps-box__progressbar-line")),
                    (n = i.find(".steps-box__count-current")),
                    (e = i.find(".steps-box__count-all")),
                    (s = a.length),
                    e.text(s),
                    (c = function () {
                        var e;
                        return (
                            (e = 1),
                            setTimeout(function () {
                                var i;
                                return (
                                    a.each(function (n) {
                                        if (t(this).hasClass("active"))
                                            return (e = n + 1);
                                    }),
                                    n.text(e),
                                    (i = Math.round((100 * e) / s)),
                                    r.css({ right: "calc(100% - " + i + "%)" })
                                );
                            }, 50)
                        );
                    }),
                    t(document).on("setActiveStep", function () {
                        return c();
                    })),
                (u = function (t) {
                    var e, n, r, i, o, a, s;
                    if (
                        (18.5,
                        (a = Number(
                            t.find('[data-type="targetWeight"]').val()
                        )),
                        (s = Number(
                            t.find('[data-type="targetWeightLbs"]').val()
                        )),
                        (r = Number(t.find('[data-type="height"]').val())),
                        (i = Number(t.find('[data-type="heightFt"]').val())),
                        (o = Number(t.find('[data-type="heightIn"]').val())),
                        t.find('[data-system="metric"]').hasClass("active")
                            ? (n = a / Math.pow(r / 100, 2))
                            : ((e = 12 * i),
                              o && (e += o),
                              (n = (s / Math.pow(e, 2)) * 703)),
                        n < 18.5)
                    )
                        return !0;
                }),
                t(document).on("setActiveStep", function (e, n) {
                    var r;
                    switch (((r = t(".help-box")), n)) {
                        case 17:
                        case 19:
                            return r.addClass("hide");
                        default:
                            return r.removeClass("hide");
                    }
                });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e;
                if ((e = t(".body-type")).length)
                    return e.each(function () {
                        var e;
                        return (e = t(this).find(".body-type__item")).on(
                            "click",
                            function (n) {
                                if (!t(this).is(".active"))
                                    return (
                                        e.removeClass("active"),
                                        t(this).addClass("active")
                                    );
                            }
                        );
                    });
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e;
                if ((e = t(".choose-box")).length)
                    return e.each(function () {
                        var e;
                        return (e = t(this).find(".choose-box__item")).on(
                            "click",
                            function (n) {
                                if (!t(this).is(".active"))
                                    return (
                                        e.removeClass("active"),
                                        t(this).addClass("active")
                                    );
                            }
                        );
                    });
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e;
                if ((e = t(".choose-list")).length)
                    return e.each(function () {
                        var e;
                        return (e = t(this).find(".choose-list__item")).on(
                            "click",
                            function (n) {
                                if (!t(this).is(".active"))
                                    return (
                                        e.removeClass("active"),
                                        t(this).addClass("active")
                                    );
                            }
                        );
                    });
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e, n, r, i, o;
                if ((e = t(".header")).length)
                    return (
                        e.find(".header__toggle"),
                        e.find(".header__menu"),
                        (n = e.find(".header__drop-bg")),
                        (r = e.find(".header__drop-close")),
                        (i = function () {
                            return (
                                e.removeClass("header_active"),
                                setTimeout(function () {
                                    return t("body").removeClass("menu-open");
                                }, 200)
                            );
                        }),
                        (o = function (n) {
                            var r, o, a;
                            if (
                                ((o = (r = t(n.target)).closest(
                                    ".header"
                                ).length),
                                (a = r.closest(".header__toggle").length),
                                t("body").hasClass("menu-open"))
                            ) {
                                if (a || !o) return i();
                            } else if (a)
                                return (
                                    setTimeout(function () {
                                        return e.addClass("header_active");
                                    }, 300),
                                    t("body").addClass("menu-open")
                                );
                        }),
                        n.on("click", function () {
                            return i();
                        }),
                        r.on("click", function () {
                            return i();
                        }),
                        (
                            "undefined" != typeof Modernizr &&
                            null !== Modernizr
                                ? Modernizr.touchevents
                                : void 0
                        )
                            ? t(document).on("touchstart", o)
                            : t(document).on("click", o)
                    );
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            function (t) {
                var e = n(106),
                    r = n.n(e);
                t(function () {
                    var e;
                    if ((e = t(".input-box")).length)
                        return e.each(function () {
                            var e, n, i, o;
                            return (
                                (i = t(this)),
                                (e = i.find(".input-box__icon-clear")),
                                (o = function (n, r) {
                                    return (i = t(n.currentTarget)).val().length
                                        ? e.removeClass("hide")
                                        : e.addClass("hide");
                                }),
                                (n = i.find(".input-box__input")).on(
                                    "keydown focus blur",
                                    r()(o, 16)
                                ),
                                e.on("click", function () {
                                    return n.val(""), e.addClass("hide");
                                })
                            );
                        });
                });
            }.call(e, n(1));
    },
    function (t, e, n) {
        var r = n(64),
            i = n(107),
            o = n(109),
            a = "Expected a function",
            s = Math.max,
            u = Math.min;
        t.exports = function (t, e, n) {
            var c,
                l,
                f,
                d,
                p,
                h,
                v = 0,
                g = !1,
                m = !1,
                y = !0;
            if ("function" != typeof t) throw new TypeError(a);
            function _(e) {
                var n = c,
                    r = l;
                return (c = l = void 0), (v = e), (d = t.apply(r, n));
            }
            function b(t) {
                var n = t - h;
                return void 0 === h || n >= e || n < 0 || (m && t - v >= f);
            }
            function w() {
                var t = i();
                if (b(t)) return x(t);
                p = setTimeout(
                    w,
                    (function (t) {
                        var n = e - (t - h);
                        return m ? u(n, f - (t - v)) : n;
                    })(t)
                );
            }
            function x(t) {
                return (p = void 0), y && c ? _(t) : ((c = l = void 0), d);
            }
            function C() {
                var t = i(),
                    n = b(t);
                if (((c = arguments), (l = this), (h = t), n)) {
                    if (void 0 === p)
                        return (function (t) {
                            return (
                                (v = t), (p = setTimeout(w, e)), g ? _(t) : d
                            );
                        })(h);
                    if (m) return clearTimeout(p), (p = setTimeout(w, e)), _(h);
                }
                return void 0 === p && (p = setTimeout(w, e)), d;
            }
            return (
                (e = o(e) || 0),
                r(n) &&
                    ((g = !!n.leading),
                    (f = (m = "maxWait" in n) ? s(o(n.maxWait) || 0, e) : f),
                    (y = "trailing" in n ? !!n.trailing : y)),
                (C.cancel = function () {
                    void 0 !== p && clearTimeout(p),
                        (v = 0),
                        (c = h = l = p = void 0);
                }),
                (C.flush = function () {
                    return void 0 === p ? d : x(i());
                }),
                C
            );
        };
    },
    function (t, e, n) {
        var r = n(65);
        t.exports = function () {
            return r.Date.now();
        };
    },
    function (t, e, n) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }.call(e, n(66)));
    },
    function (t, e, n) {
        var r = n(64),
            i = n(110),
            o = NaN,
            a = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            l = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (i(t)) return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = u.test(t);
            return n || c.test(t)
                ? l(t.slice(2), n ? 2 : 8)
                : s.test(t)
                ? o
                : +t;
        };
    },
    function (t, e, n) {
        var r = n(111),
            i = n(114),
            o = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || (i(t) && r(t) == o);
        };
    },
    function (t, e, n) {
        var r = n(67),
            i = n(112),
            o = n(113),
            a = "[object Null]",
            s = "[object Undefined]",
            u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            return null == t
                ? void 0 === t
                    ? s
                    : a
                : u && u in Object(t)
                ? i(t)
                : o(t);
        };
    },
    function (t, e, n) {
        var r = n(67),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            s = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            var e = o.call(t, s),
                n = t[s];
            try {
                t[s] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[s] = n) : delete t[s]), i;
        };
    },
    function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
            return n.call(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return null != t && "object" == typeof t;
        };
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e, n, r, i, o, a, s, u, c;
                if ((e = t(".load-block")).length)
                    return (
                        e.find(".load-block__text"),
                        (n = e.find(".load-block__text_1")),
                        (r = e.find(".load-block__text_2")),
                        (i = e.find(".load-block__text_3")),
                        (o = e.find(".load-block__text_4")),
                        (a = e.find(".load-block__text_5")),
                        (s = e.find(".load-block__text_6")),
                        (c = function (t, e) {
                            return setTimeout(function () {
                                return (
                                    t === s
                                        ? t.addClass("show-last")
                                        : t.addClass("show"),
                                    setTimeout(function () {
                                        return t.removeClass("show");
                                    }, 2100)
                                );
                            }, e);
                        }),
                        (u = function () {
                            var t;
                            return (
                                (t = new ProgressBar.Circle(
                                    ".load-block__loader",
                                    {
                                        strokeWidth: 4,
                                        step: function (t, e) {
                                            var n;
                                            return (
                                                (n = Math.round(
                                                    100 * e.value()
                                                )),
                                                e.setText(n + "<span>%</span>")
                                            );
                                        },
                                    }
                                )).animate(
                                    0.56,
                                    { duration: 4500 },
                                    function () {
                                        return t.animate(
                                            0.61,
                                            { duration: 4e3 },
                                            function () {
                                                return t.animate(
                                                    0.9,
                                                    { duration: 2e3 },
                                                    function () {
                                                        return t.animate(
                                                            0.93,
                                                            { duration: 3e3 },
                                                            function () {
                                                                return t.animate(
                                                                    1,
                                                                    {
                                                                        duration: 700,
                                                                    },
                                                                    function () {}
                                                                );
                                                            }
                                                        );
                                                    }
                                                );
                                            }
                                        );
                                    }
                                ),
                                c(n, 100),
                                c(r, 2200),
                                c(i, 4700),
                                c(o, 7300),
                                c(a, 1e4),
                                c(s, 13e3)
                            );
                        }),
                        t(document).on("loadBlockInit", function () {
                            return u();
                        })
                    );
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e, n, r, i, o, a, s, u, c, l, f, d, p, h;
                if ((e = t(".load-box")).length)
                    return (
                        (n = e.find(".line")),
                        (r = e.find(".load-box__count-val")),
                        (i = e.find(".load-box__text")),
                        (o = e.find(".load-box__text_1")),
                        (a = e.find(".load-box__text_2")),
                        (s = e.find(".load-box__text_3")),
                        (u = e.find(".load-box__text_4")),
                        (c = e.find(".load-box__text_5")),
                        (l = e.find(".load-box__text_6")),
                        e.find(".load-box__inner-wrap"),
                        null,
                        (h = function (t, e) {
                            return setTimeout(function () {
                                return (
                                    t === s || t === l
                                        ? t.addClass("show-last")
                                        : t.addClass("show"),
                                    setTimeout(function () {
                                        return t.removeClass("show");
                                    }, 1800)
                                );
                            }, e);
                        }),
                        (f = function (t, e, n) {
                            return setInterval(function () {
                                return n <= e && r.text(n), n++;
                            }, t);
                        }),
                        (d = function () {
                            return (
                                n.css({ "stroke-dasharray": "0px, 766px" }),
                                i.removeClass("show-last"),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 4s linear",
                                        "stroke-dasharray": "315px, 766px",
                                    });
                                }, 50),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 1.7s linear",
                                        "stroke-dasharray": "375px, 766px",
                                    });
                                }, 4e3),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 1.7s linear",
                                        "stroke-dasharray": "390px, 766px",
                                    });
                                }, 4800),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 3.2s linear",
                                        "stroke-dasharray": "400px, 766px",
                                    });
                                }, 5200),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 0.6s linear",
                                        "stroke-dasharray": "415px, 766px",
                                    });
                                }, 7800),
                                f(100, 50, 0),
                                setTimeout(function () {
                                    return f(450, 56, 50);
                                }, 5e3),
                                h(o, 100),
                                h(a, 2500),
                                h(s, 4500)
                            );
                        }),
                        (p = function () {
                            return (
                                n.css({ "stroke-dasharray": "415px, 766px" }),
                                i.removeClass("show-last"),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 2.2s linear",
                                        "stroke-dasharray": "450px,766px",
                                    });
                                }, 50),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 1.2s linear",
                                        "stroke-dasharray": "505px,766px",
                                    });
                                }, 2300),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 2s linear",
                                        "stroke-dasharray": "600px,766px",
                                    });
                                }, 3500),
                                setTimeout(function () {
                                    return n.css({
                                        transition:
                                            "stroke-dasharray 5.2s linear",
                                        "stroke-dasharray": "766px,766px",
                                    });
                                }, 5500),
                                f(250, 65, 56),
                                setTimeout(function () {
                                    return f(110, 80, 65);
                                }, 2300),
                                setTimeout(function () {
                                    return f(100, 95, 80);
                                }, 4e3),
                                setTimeout(function () {
                                    return f(270, 100, 95);
                                }, 5500),
                                s.removeClass("show-last"),
                                h(u, 100),
                                h(c, 2500),
                                h(l, 4600)
                            );
                        }),
                        t(document).bind("loaderInit", function () {
                            return d();
                        }),
                        t(document).bind("loaderInitMore", function () {
                            return p();
                        })
                    );
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e, n, r, i, o, a, s, u, c, l, f, d, p;
                if ((e = t(".notification-box")).length)
                    return (
                        (o = (n = e.find(".notification-box__image-i")).attr(
                            "data-icon-1"
                        )),
                        (a = n.attr("data-icon-2")),
                        n.attr("data-icon-3"),
                        n.attr("data-icon-4"),
                        (d = (i = e.find(".notification-box__title")).attr(
                            "data-title-woman-1"
                        )),
                        (p = i.attr("data-title-woman-2")),
                        i.attr("data-title-woman-3"),
                        i.attr("data-title-woman-4"),
                        i.attr("data-title-man-1"),
                        (f = i.attr("data-title-man-2")),
                        i.attr("data-title-man-3"),
                        i.attr("data-title-man-4"),
                        (c = (r = e.find(".notification-box__subtitle")).attr(
                            "data-subtitle-woman-1"
                        )),
                        (l = r.attr("data-subtitle-woman-2")),
                        r.attr("data-subtitle-woman-3"),
                        r.attr("data-subtitle-woman-4"),
                        r.attr("data-subtitle-man-1"),
                        (u = r.attr("data-subtitle-man-2")),
                        r.attr("data-subtitle-man-3"),
                        r.attr("data-subtitle-man-4"),
                        (s = function (t, o, a, s, u) {
                            return (
                                n.attr("src", t),
                                i.html(o),
                                r.text(a),
                                e.addClass("active"),
                                e.addClass(s),
                                setTimeout(function () {
                                    return e.addClass("show");
                                }, 500),
                                setTimeout(function () {
                                    return e.removeClass("show");
                                }, 4500),
                                setTimeout(function () {
                                    return (
                                        e.removeClass("active"),
                                        e.removeClass(s)
                                    );
                                }, 4800),
                                sessionStorage.setItem("notification-" + u, !0)
                            );
                        }),
                        t("body").hasClass("ab_var_bp") &&
                            null ===
                                sessionStorage.getItem(
                                    "notification-main-page"
                                ) &&
                            t(document).ready(s(o, d, c, "", "main-page")),
                        t("body").hasClass("ab_var_bp") &&
                        null ===
                            sessionStorage.getItem("notification-email-page")
                            ? t(document).on("endLoaderTimer", function () {
                                  return "female" ===
                                      t("body").attr("data-state")
                                      ? s(a, p, l, "top", "email-page")
                                      : s(a, f, u, "top", "email-page");
                              })
                            : void 0
                    );
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e;
                if ((e = t(".question-box")).length)
                    return e.each(function () {
                        var e;
                        return (e = t(this).find(".question-box__item")).on(
                            "click",
                            function (n) {
                                if (!t(this).is(".active"))
                                    return (
                                        e.removeClass("active"),
                                        t(this).addClass("active")
                                    );
                            }
                        );
                    });
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e, n;
                if ((e = t(".select-box")).length)
                    return (
                        (n = e.find(".select-box__item_remove")),
                        e.each(function () {
                            var e, r, i, o, a, s;
                            return (
                                (i = t(this)),
                                (r = i.find(".select-box__item")),
                                (e = i
                                    .closest(".step-wrap__body")
                                    .find(".step-wrap__button")),
                                0,
                                (o = !!i.is("[data-select-single-item]")),
                                (a = function (o) {
                                    var a;
                                    return (
                                        (a = t(o.currentTarget)).hasClass(
                                            "select-box__item_remove"
                                        )
                                            ? (n.toggleClass("active"),
                                              a
                                                  .siblings(r)
                                                  .removeClass("active"))
                                            : (a.toggleClass("active"),
                                              n.removeClass("active")),
                                        i.find(".select-box__item.active")
                                            .length > 0
                                            ? e.removeClass("disabled")
                                            : e.addClass("disabled")
                                    );
                                }),
                                (s = function (n) {
                                    var o;
                                    return (
                                        (o = t(n.currentTarget)),
                                        r.removeClass("active"),
                                        o.toggleClass("active"),
                                        i.find(".select-box__item.active")
                                            .length > 0
                                            ? e.removeClass("disabled")
                                            : e.addClass("disabled")
                                    );
                                }),
                                r.on("click", function (t) {
                                    return o ? s(t) : a(t);
                                })
                            );
                        })
                    );
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            t(function () {
                var e, n;
                if ((e = t(".toggle-content")).length)
                    return (
                        (n = e.find(".body-measurements__warning")),
                        e.each(function () {
                            var e, r, i;
                            return (
                                (i = t(this)),
                                (r = i.find(".toggle-content-nav-item")),
                                (e = i.find(".toggle-content-tab")),
                                r.on("click", function (o) {
                                    var a, s, u;
                                    return (
                                        (i = t(this)),
                                        t(this).hasClass("active") ||
                                            (r.removeClass("active"),
                                            i.addClass("active")),
                                        (u = i.data("target")),
                                        t(u).hasClass("active") ||
                                            (e.removeClass("active"),
                                            t(u).addClass("active")),
                                        t(".body-measurements").length &&
                                            ((a =
                                                t(".body-measurements").find(
                                                    ".measurement-field"
                                                ))
                                                .find(
                                                    ".measurement-field__input"
                                                )
                                                .val(""),
                                            a
                                                .find(
                                                    ".measurement-field__input"
                                                )
                                                .removeClass("error"),
                                            a
                                                .find(
                                                    ".measurement-field__error-label"
                                                )
                                                .removeClass("show"),
                                            n.removeClass("show")),
                                        i
                                            .closest(".step-wrap__body")
                                            .find(".step-wrap__button")
                                            .addClass("disabled"),
                                        (s = i.data("system")),
                                        i
                                            .closest(".step-wrap")
                                            .find(".step-wrap__body")
                                            .each(function () {
                                                return (
                                                    t(this)
                                                        .find(
                                                            ".toggle-content-nav-item"
                                                        )
                                                        .removeClass("active"),
                                                    t(this)
                                                        .find(
                                                            ".toggle-content-tab"
                                                        )
                                                        .removeClass("active"),
                                                    t(this)
                                                        .find(
                                                            '[data-system="' +
                                                                s +
                                                                '"]'
                                                        )
                                                        .addClass("active")
                                                );
                                            })
                                    );
                                })
                            );
                        })
                    );
            });
        }.call(e, n(1)));
    },
    function (t, e, n) {
        (function (t) {
            (function () {
                t(function () {
                    var e, n, r, i, o, a;
                    if ((e = t(".form-group_email-help")).length)
                        return (
                            (n = e.find("input")),
                            (i = e.find(".input-box__input-list")),
                            (r = e.find(".input-box__input-item")),
                            (o = function () {
                                return r.each(function () {
                                    return t(this).text(
                                        t(this).attr("data-value")
                                    );
                                });
                            }),
                            r.on("click", function () {
                                t(this)
                                    .closest(e)
                                    .find("input")
                                    .val(t(this).text()),
                                    (a =
                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                    t(".custom-btn").length &&
                                        a.test(
                                            String(t(this).text()).toLowerCase()
                                        ) &&
                                        t(".custom-btn").removeClass(
                                            "disabled"
                                        );
                            }),
                            n.focusin(function (e) {
                                if (
                                    0 == t(this).val().length &&
                                    t(this).val().indexOf("@") < 0
                                )
                                    return i.addClass("show");
                            }),
                            n.focusout(function () {
                                return setTimeout(function () {
                                    return i.removeClass("show"), o();
                                }, 200);
                            }),
                            n.keyup(function (e) {
                                return t(this).val().indexOf("@") > 0
                                    ? (i.removeClass("show"), o())
                                    : (i.addClass("show"),
                                      setTimeout(
                                          (function (e) {
                                              return function () {
                                                  var n;
                                                  return (
                                                      (n = t(e).val()),
                                                      r.each(function () {
                                                          var e;
                                                          return (
                                                              (e =
                                                                  t(this).attr(
                                                                      "data-value"
                                                                  )),
                                                              t(this).text(
                                                                  n + e
                                                              )
                                                          );
                                                      })
                                                  );
                                              };
                                          })(this),
                                          200
                                      ));
                            })
                        );
                });
            }.call(this));
        }.call(e, n(1)));
    },
    function (t, e, n) {
        "use strict";
        (function (t, e) {
            var r = n(123),
                i = n.n(r);
            t(function () {
                console.info("Onboarding v2");
                var t = !1,
                    n = (function () {
                        var e = {};
                        return {
                            setItem: function (n, r) {
                                (e[n] = r),
                                    t &&
                                        console.log(
                                            "Store updated",
                                            i()(e, null, "\t")
                                        );
                            },
                            getItem: function (t) {
                                return e[t];
                            },
                            toJSON: function () {
                                return e;
                            },
                        };
                    })();
                function r(r) {
                    var i = {
                        0:
                            "promo-landing-page" ==
                            e("body").attr("data-page-type")
                                ? "/landing-page"
                                : AB.isDO() || AB.isDP() || AB.isDQ()
                                ? "/diet_page"
                                : "/gender_page",
                        1: "/does_not_exists",
                        "1-1": "/gender_page",
                        2: "/primary_goal",
                        3: "/desired_weight",
                        4: "/body_measurements",
                        5: "/your_age",
                        6:
                            "/your_body_type" +
                            ("female" === n.getItem("gender") ? "_f" : "_m"),
                        7: "/your_typical_day",
                        8: "/info_message1",
                        9: "/ideal_weight",
                        10: "/your_habits",
                        11: "/your_fitness",
                        12: "/your_energy",
                        13: "/much_sleep",
                        14: "/much_water",
                        15: "/info_message2",
                        16: "/agree_motivation",
                        17: "/agree_behavior",
                        18: "/mark_vegetables",
                        "18-2": "/choose_diet",
                        19: "/mark_products",
                        20: "/mark_meats",
                        "20-2": "/bmi_measurements",
                        "21-2": "/loader_new",
                        21: "/loader_part1",
                        22: "/much_cooking_time",
                        23: "/loader_part2",
                        24: "/email_page",
                        25: "/email_consent",
                    }[r];
                    if (void 0 === i) throw "Invalid step";
                    window.dataLayer &&
                        window.dataLayer.push({
                            event: "VirtualPageView",
                            virtualPageURL: i,
                        }),
                        t && console.log("Virtual url", i);
                }
                var o = !1;
                (e("body").hasClass("de") ||
                    e("body").hasClass("fr") ||
                    e("body").hasClass("it") ||
                    e("body").hasClass("es") ||
                    e("body").hasClass("pt")) &&
                    (o = !0),
                    r(0),
                    n.setItem("_ab", AB.getTest());
                var a = e(".intro-box");
                "promo-landing-page" != e("body").attr("data-page-type") &&
                    (a.find("[data-diet-type]").length
                        ? a.on("click", "[data-diet-type]", function () {
                              var t = e(this).attr("data-diet-type");
                              r("1-1"), n.setItem("diet", t);
                          })
                        : (a.on("click", "[data-gender]", function () {
                              r(2),
                                  n.setItem(
                                      "gender",
                                      e(this).attr("data-gender")
                                  );
                          }),
                          a.on("click", "[data-age]", function () {
                              AB.isAD() && n.setItem("gender", "male"),
                                  AB.isAE() && n.setItem("gender", "female"),
                                  r(2);
                              var t = e(this).attr("data-age"),
                                  i = {
                                      18: "20s",
                                      25: "30s",
                                      35: "40s",
                                      45: "50+",
                                  };
                              if (!(t in i)) throw "Unknown age";
                              var o = i[t];
                              n.setItem("age", o);
                          }),
                          a.on("click", "[data-bodytype]", function () {
                              AB.isAB() && n.setItem("gender", "male"),
                                  AB.isAC() && n.setItem("gender", "female"),
                                  r(2);
                              var t = e(this).attr("data-bodytype"),
                                  i = {};
                              if (
                                  ("male" === n.getItem("gender") &&
                                      (i = {
                                          rectangle: "ectomorph",
                                          rounded: "endomorph",
                                          triangle: "mesomorph",
                                          not_sure: "not_sure",
                                      }),
                                  "female" === n.getItem("gender") &&
                                      (i = {
                                          rectangle: "rectangle",
                                          rounded: "round",
                                          triangle: "hourglass",
                                          not_sure: "not_sure",
                                      }),
                                  !(t in i))
                              )
                                  throw "Unknown body type";
                              var o = i[t];
                              n.setItem("bodyType", o);
                          }))),
                    e("[data-step=1-1]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-list .choose-list__item",
                            function (t) {
                                r(2);
                                var i = e(t.target)
                                    .closest(".choose-list__item")
                                    .attr("data-gender-type");
                                if (void 0 === i) throw "Unknown goal";
                                n.setItem("gender", i);
                            }
                        );
                    }),
                    e("[data-step=2]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-list .choose-list__item",
                            function () {
                                AB.isDO() || AB.isDP() || AB.isDQ()
                                    ? r("20-2")
                                    : r(6);
                                var t = [
                                    "Lose weight",
                                    "Gain muscle",
                                    "Develop healthy habits",
                                ][e(this).index()];
                                if (void 0 === t) throw "Unknown goal";
                                n.setItem("goal", t);
                            }
                        );
                    }),
                    e("[data-step=3]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                r(4);
                                var e = ["imperial", "metric"][
                                    t
                                        .find(
                                            ".body-weight__nav .toggle-content-nav-item.active"
                                        )
                                        .index()
                                ];
                                if (void 0 === e){};
                                var i = t
                                    .find(
                                        ".toggle-content-tab.active .number-field__input"
                                    )
                                    .val();
                                n.setItem("desiredWeight", parseFloat(i)),
                                    n.setItem("desiredWeightSystem", e);
                            }
                        );
                    }),
                    e("[data-step=4]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                AB.isAD() || AB.isAE() ? r(6) : r(5);
                                var e = ["imperial", "metric"][
                                    t
                                        .find(
                                            ".body-params__nav .toggle-content-nav-item.active"
                                        )
                                        .index()
                                ];
                                if (void 0 === e){};
                                var i = t.find(".toggle-content-tab.active");
                                if ("imperial" === e) {
                                    var o = i.find("select.select-ft").val(),
                                        a = i.find("select.select-inch").val();
                                    n.setItem("height", parseFloat(o)),
                                        n.setItem("height2", parseFloat(a));
                                } else {
                                    o = i.find("select.select-height").val();
                                    n.setItem("height", parseFloat(o));
                                }
                                n.setItem("heightSystem", e);
                                var s = i.find("select.select-weight").val();
                                n.setItem("weight", parseFloat(s)),
                                    n.setItem("weightSystem", e);
                            }
                        );
                    }),
                    e("[data-step=5]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-box .choose-box__item",
                            function () {
                                AB.isAB() || AB.isAC() ? r(7) : r(6);
                                var t = ["20s", "30s", "40s", "50+"][
                                    e(this).index()
                                ];
                                if (void 0 === t) throw "Unknown age";
                                n.setItem("age", t);
                            }
                        );
                    }),
                    e("[data-step=6]").each(function () {
                        e(this).on(
                            "click",
                            ".body-type .body-type__item",
                            function () {
                                r(7);
                                var t = e(this).index();
                                if ("male" === n.getItem("gender")) {
                                    if (
                                        void 0 ===
                                        (i = [
                                            "ectomorph",
                                            "mesomorph",
                                            "endomorph",
                                        ][t])
                                    )
                                        throw "Unknown body type";
                                    n.setItem("bodyType", i);
                                }
                                if ("female" === n.getItem("gender")) {
                                    var i;
                                    if (
                                        void 0 ===
                                        (i = [
                                            "rectangle",
                                            "hourglass",
                                            "pear",
                                            "round",
                                        ][t])
                                    )
                                        throw "Unknown body type";
                                    n.setItem("bodyType", i);
                                }
                            }
                        );
                    }),
                    e("[data-step=7]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-box .choose-box__item",
                            function () {
                                r(8);
                                var t = [
                                    "at_the_office",
                                    "daily_long_walks",
                                    "physical_work",
                                    "mostly_at_home",
                                ][e(this).index()];
                                if (void 0 === t) throw "Unknown typical day";
                                n.setItem("typicalDay", t);
                            }
                        );
                    }),
                    e("[data-step=8]").each(function () {
                        e(this).on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                r(9);
                            }
                        );
                    }),
                    e("[data-step=9]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-list .choose-list__item",
                            function () {
                                r(10);
                                var t = [
                                    "less_than_1_year",
                                    "1-2_years",
                                    "more_than_3_years",
                                    "never",
                                ][e(this).index()];
                                if (void 0 === t)
                                    throw "Unknown past weight time";
                                n.setItem("pastWeightTime", t);
                            }
                        );
                    }),
                    e("[data-step=10]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                r(11);
                                var i = [];
                                t.find(
                                    ".select-box .select-box__item.active"
                                ).each(function () {
                                    var t = e(this).index();
                                    i.push(t);
                                });
                                var o = [
                                    "i_eat_late_at_night",
                                    "i_dont_get_enough_sleep",
                                    "i_cant_give_up_sweets",
                                    "i_love_soft_drinks",
                                    "i_consume_a_lot_of_salt",
                                    "none_of_the_above",
                                ].filter(function (t, e) {
                                    return -1 !== i.indexOf(e);
                                });
                                n.setItem("habits", o);
                            }
                        );
                    }),
                    e("[data-step=11]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-list .choose-list__item",
                            function () {
                                r(12);
                                var t = [
                                    "barely_any_activity",
                                    "fitness_1-2_times_a_week",
                                    "fitness_3-5_times_a_week",
                                    "fitness_5-7_times_a_week",
                                ][e(this).index()];
                                if (void 0 === t) throw "Unknown fitness";
                                n.setItem("fitness", t);
                            }
                        );
                    }),
                    e("[data-step=12]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-list .choose-list__item",
                            function () {
                                r(13);
                                var t = [
                                    "my_energy_levels_do_not_fluctuate",
                                    "i_drag_before_meals",
                                    "i_feel_sleepy_after_lunch",
                                ][e(this).index()];
                                if (void 0 === t) throw "Unknown energy";
                                n.setItem("energy", t);
                            }
                        );
                    }),
                    e("[data-step=13]").each(function () {
                        e(this).on(
                            "click",
                            ".choose-list .choose-list__item",
                            function () {
                                r(14);
                                var t = [
                                    "less_than_5_hours",
                                    "5-6_hours",
                                    "7-8_hours",
                                    "more_than_8_hours",
                                ][e(this).index()];
                                if (void 0 === t) throw "Unknown sleep";
                                n.setItem("sleep", t);
                            }
                        );
                    }),
                    e("[data-step=14]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".choose-list .choose-list__item",
                            function () {
                                r(16);
                                var i = ["imperial", "metric"][
                                    t
                                        .find(
                                            ".toggle-content-nav .toggle-content-nav-item.active"
                                        )
                                        .index()
                                ];
                                if (void 0 === i) {};
                                var o = [
                                    "only_coffee_or_tea",
                                    "less_than_2_glasses",
                                    "2-6_glasses",
                                    "more_than_6_glasses",
                                ][e(this).index()];
                                if (void 0 === o) throw "Unknown water intake";
                                n.setItem("waterIntake", o),
                                    n.setItem("waterIntakeSystem", i);
                            }
                        );
                    }),
                    e("[data-step=16]").each(function () {
                        e(this).on(
                            "click",
                            ".question-box .question-box__item",
                            function () {
                                r(17);
                                var t = ["yes", "no"][e(this).index()];
                                if (void 0 === t) throw "Unknown motivation";
                                n.setItem("motivation", t);
                            }
                        );
                    }),
                    e("[data-step=17]").each(function () {
                        e(this).on(
                            "click",
                            ".question-box .question-box__item",
                            function () {
                                AB.isDO() || AB.isDP() || AB.isDQ()
                                    ? (r(21),
                                      setTimeout(function () {
                                          r(22);
                                      }, 9e3))
                                    : AB.isDV()
                                    ? r("18-2")
                                    : r(18);
                                var t = ["yes", "no"][e(this).index()];
                                if (void 0 === t) throw "Unknown behavior";
                                n.setItem("behavior", t);
                            }
                        );
                    }),
                    e("[data-step=18]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                r(19);
                                var i = [];
                                t.find(
                                    ".select-box .select-box__item.active"
                                ).each(function () {
                                    var t = e(this).index();
                                    i.push(t);
                                });
                                var o = [
                                    "broccoli",
                                    "sweet_potato",
                                    "mushrooms",
                                    "tomato",
                                    "peas",
                                    "spinach",
                                    "zucchini",
                                    "pepper",
                                ].filter(function (t, e) {
                                    return -1 !== i.indexOf(e);
                                });
                                n.setItem("vegetables", o);
                            }
                        );
                    }),
                    e("[data-step=18-2]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                r("20-2");
                                var i = [];
                                t.find(
                                    ".select-box .select-box__item.active"
                                ).each(function () {
                                    var t = e(this).index();
                                    i.push(t);
                                });
                                var o = [
                                    "Traditional",
                                    "Vegetarian",
                                    "Vegetarian (Plant Diet)",
                                    "Keto Vegan",
                                    "Keto",
                                    "Pescatarian",
                                    "Lactose Free",
                                    "Gluten Free",
                                    "Paleo",
                                    "Mediterranean diet",
                                ].filter(function (t, e) {
                                    return -1 !== i.indexOf(e);
                                });
                                n.setItem("diet", o);
                            }
                        );
                    }),
                    e("[data-step=19]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                r(20);
                                var i = [];
                                t.find(
                                    ".select-box .select-box__item.active"
                                ).each(function () {
                                    var t = e(this).index();
                                    i.push(t);
                                });
                                var o = [
                                    "avocado",
                                    "eggs",
                                    "yogurt",
                                    "cottage_cheese",
                                    "tofu",
                                    "olives",
                                    "peanut_butter",
                                    "nuts",
                                    "mozzarella",
                                    "milk",
                                ].filter(function (t, e) {
                                    return -1 !== i.indexOf(e);
                                });
                                n.setItem("products", o);
                            }
                        );
                    }),
                    e("[data-step=20]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                r("20-2");
                                var i = [];
                                t.find(
                                    ".select-box .select-box__item.active"
                                ).each(function () {
                                    var t = e(this).index();
                                    i.push(t);
                                });
                                var o = [
                                    "turkey",
                                    "fish",
                                    "beef",
                                    "chicken",
                                    "pork",
                                    "none",
                                ].filter(function (t, e) {
                                    return -1 !== i.indexOf(e);
                                });
                                n.setItem("meats", o);
                            }
                        );
                    }),
                    e("[data-step=20-2]").each(function () {
                        var t = e(this);
                        t.on(
                            "click",
                            ".step-wrap__button:not(.disabled)",
                            function () {
                                AB.isDO() || AB.isDP() || AB.isDQ()
                                    ? r(6)
                                    : (r(21),
                                      setTimeout(function () {
                                          r(22);
                                      }, 9e3));
                                var e = ["imperial", "metric"][
                                    t
                                        .find(
                                            ".body-measurements__nav .toggle-content-nav-item.active"
                                        )
                                        .index()
                                ];
                                if (void 0 === e){};
                                var i = t
                                    .find(
                                        '.toggle-content-tab.active [data-type="age"]'
                                    )
                                    .val();
                                (i = parseInt(i)), n.setItem("ageNum", i);
                                var o = void 0;
                                if (
                                    (i >= 0 && i <= 29
                                        ? (o = "20s")
                                        : i >= 30 && i <= 39
                                        ? (o = "30s")
                                        : i >= 40 && i <= 49
                                        ? (o = "40s")
                                        : i >= 50 && (o = "50+"),
                                    n.setItem("age", o),
                                    "imperial" === e)
                                ) {
                                    var a = t
                                            .find(
                                                '.toggle-content-tab.active [data-type="heightFt"]'
                                            )
                                            .val(),
                                        s = t
                                            .find(
                                                '.toggle-content-tab.active [data-type="heightIn"]'
                                            )
                                            .val();
                                    n.setItem("height", parseFloat(a)),
                                        n.setItem("height2", parseFloat(s));
                                } else {
                                    var u = t
                                        .find(
                                            '.toggle-content-tab.active [data-type="height"]'
                                        )
                                        .val();
                                    n.setItem("height", parseFloat(u));
                                }
                                if (
                                    (n.setItem("heightSystem", e),
                                    "imperial" === e)
                                ) {
                                    var c = t
                                        .find(
                                            '.toggle-content-tab.active [data-type="weightLbs"]'
                                        )
                                        .val();
                                    n.setItem("weight", parseFloat(c)),
                                        n.setItem("weightSystem", e);
                                } else {
                                    var l = t
                                        .find(
                                            '.toggle-content-tab.active [data-type="weight"]'
                                        )
                                        .val();
                                    n.setItem("weight", parseFloat(l)),
                                        n.setItem("weightSystem", e);
                                }
                                if ("imperial" === e) {
                                    var f = t
                                        .find(
                                            '.toggle-content-tab.active [data-type="targetWeightLbs"]'
                                        )
                                        .val();
                                    n.setItem("desiredWeight", parseFloat(f)),
                                        n.setItem("desiredWeightSystem", e);
                                } else {
                                    var d = t
                                        .find(
                                            '.toggle-content-tab.active [data-type="targetWeight"]'
                                        )
                                        .val();
                                    n.setItem("desiredWeight", parseFloat(d)),
                                        n.setItem("desiredWeightSystem", e);
                                }
                            }
                        );
                    });
                var s = !1;
                e("[data-step=22]").each(function () {
                    e(this).on(
                        "click",
                        ".choose-list .choose-list__item",
                        function () {
                            r(23),
                                ABSet.emailOnPay() &&
                                    ((s = !0), e("[data-step=24]").hide()),
                                setTimeout(function () {
                                    s
                                        ? (l(),
                                          c(
                                              e("[data-step=24]").attr(
                                                  "data-xhr"
                                              )
                                          ))
                                        : r(24);
                                }, 8500);
                            var t = [
                                "less_than_30_min",
                                "30-60_min",
                                "more_than_1_hour",
                            ][e(this).index()];
                            if (void 0 === t) throw "Unknown cooking time";
                            n.setItem("cookingTime", t);
                        }
                    );
                }),
                    e("[data-step=24]").each(function () {
                        var t = e(this),
                            i = void 0;
                        (i = e("body").hasClass("ja")
                            ? /^.+@.+\..+$/
                            : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                            t.on(
                                "cut paste input change",
                                ".input-box__input",
                                function () {
                                    var n = e(this).val(),
                                        r = i.test(String(n).toLowerCase());
                                    t.find(".step-wrap__button").toggleClass(
                                        "disabled",
                                        !r
                                    );
                                }
                            ),
                            t.on(
                                "click",
                                ".input-box__icon-clear",
                                function () {
                                    t.find(".input-box__input").trigger(
                                        "input"
                                    );
                                }
                            ),
                            t.on(
                                "click",
                                ".step-wrap__button:not(.disabled)",
                                function () {
                                    var i = t.find(".input-box__input").val();
                                    n.setItem("email", i),
                                        l(),
                                        (AB.isAP() ||
                                            ABFlag.emailConsent() ||
                                            (AB.isBC() && o) ||
                                            (AB.isAK() && o) ||
                                            (AB.isA() &&
                                                e("body").hasClass("de"))) &&
                                        e(".step-wrap__body_step-25").length > 0
                                            ? r(25)
                                            : c(t.attr("data-xhr"));
                                }
                            );
                    }),
                    e("[data-step=25]").each(function () {
                        var t = e(this);
                        function r() {
                            c(e("[data-step=24]").attr("data-xhr"));
                        }
                        t.on("click", ".step-wrap__button", function () {
                            n.setItem("emailConsent", "yes"), r();
                        }),
                            t.on(
                                "click",
                                ".step-wrap__description",
                                function () {
                                    n.setItem("emailConsent", "no"), r();
                                }
                            );
                    });
                var u = !1;
                function c(t) {
                    if (!u) {
                        u = !0;
                        var r = e.ajax({
                            headers: {
                                "X-CSRF-TOKEN": e(
                                    'meta[name="csrf-token"]'
                                ).attr("content"),
                            },
                            method: "POST",
                            url: t,
                            data: n.toJSON(),
                        });
                        r
                            .then(function (t) {
                                window.location.href = t.url;
                            })
                            .catch(function () {
                                alert("Validation error");
                            }),
                            r.always(function () {
                                u = !1;
                            });
                    }
                }
                function l() {
                    var t = { imperial: "metric", metric: "decimal" },
                        e = i()({
                            gender: n.getItem("gender"),
                            age: n.getItem("age"),
                            goal: n.getItem("goal"),
                            physical: "workout_hero",
                            height: n.getItem("height"),
                            height_second: n.getItem("height2"),
                            notation_height: t[n.getItem("heightSystem")],
                            weight: n.getItem("weight"),
                            notation_weight: t[n.getItem("weightSystem")],
                            target_weight: n.getItem("desiredWeight"),
                            notation_target_weight:
                                t[n.getItem("desiredWeightSystem")],
                            email: encodeURIComponent(n.getItem("email")),
                            diet: n.getItem("diet"),
                        }),
                        r = i()({ ageNum: n.getItem("ageNum") });
                 
                }
               
                function d(t) {
                    document.cookie =
                        t + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
                }
                d("u_data"),
                    d("u_data_age"),
                    d("users_timer"),
                    d("users_offer_time");
            });
        }.call(e, n(1), n(1)));
    },
    function (t, e, n) {
        t.exports = { default: n(124), __esModule: !0 };
    },
    function (t, e, n) {
        var r = n(0),
            i = r.JSON || (r.JSON = { stringify: JSON.stringify });
        t.exports = function (t) {
            return i.stringify.apply(i, arguments);
        };
    },
    function (t, e, n) {
        "use strict";
        (function (t, e) {
            var r,
                i = n(127),
                o = n.n(i),
                a = n(139),
                s = n.n(a),
                u = n(142),
                c = n.n(u),
                l = n(145),
                f = n.n(l),
                d = n(154),
                p = n.n(d),
                h = n(157),
                v = n.n(h),
                g = n(160),
                m = n.n(g),
                y = n(164),
                _ = n.n(y),
                b = n(167),
                w = n.n(b),
                x = n(169),
                C = n.n(x),
                k = n(53),
                T = n.n(k),
                S = n(172),
                A = n.n(S),
                O = n(175),
                E = n.n(O),
                j = n(59),
                P = n.n(j),
                D = n(62),
                I = n.n(D),
                N = n(52),
                M = n.n(N);
            !(function (r) {
                if (
                    "object" ===
                        ("undefined" == typeof exports
                            ? "undefined"
                            : M()(exports)) &&
                    void 0 !== t
                )
                    t.exports = r();
                else if ("function" == typeof define && n(63)) define([], r);
                else {
                    ("undefined" != typeof window
                        ? window
                        : void 0 !== e
                        ? e
                        : "undefined" != typeof self
                        ? self
                        : this
                    ).ProgressBar = r();
                }
            })(function () {
                return (function () {
                    return function t(e, n, i) {
                        function o(s, u) {
                            if (!n[s]) {
                                if (!e[s]) {
                                    if (!u && "function" == typeof r && r)
                                        return r(s, !0);
                                    if (a) return a(s, !0);
                                    var c = new Error(
                                        "Cannot find module '" + s + "'"
                                    );
                                    throw ((c.code = "MODULE_NOT_FOUND"), c);
                                }
                                var l = (n[s] = { exports: {} });
                                e[s][0].call(
                                    l.exports,
                                    function (t) {
                                        return o(e[s][1][t] || t);
                                    },
                                    l,
                                    l.exports,
                                    t,
                                    e,
                                    n,
                                    i
                                );
                            }
                            return n[s].exports;
                        }
                        for (
                            var a = "function" == typeof r && r, s = 0;
                            s < i.length;
                            s++
                        )
                            o(i[s]);
                        return o;
                    };
                })()(
                    {
                        1: [
                            function (t, e, n) {
                                !(function (t, r) {
                                    "object" ==
                                        (void 0 === n ? "undefined" : M()(n)) &&
                                    "object" ==
                                        (void 0 === e ? "undefined" : M()(e))
                                        ? (e.exports = r())
                                        : "object" ==
                                          (void 0 === n ? "undefined" : M()(n))
                                        ? (n.shifty = r())
                                        : (t.shifty = r());
                                })(window, function () {
                                    return (function (t) {
                                        var e = {};
                                        function n(r) {
                                            if (e[r]) return e[r].exports;
                                            var i = (e[r] = {
                                                i: r,
                                                l: !1,
                                                exports: {},
                                            });
                                            return (
                                                t[r].call(
                                                    i.exports,
                                                    i,
                                                    i.exports,
                                                    n
                                                ),
                                                (i.l = !0),
                                                i.exports
                                            );
                                        }
                                        return (
                                            (n.m = t),
                                            (n.c = e),
                                            (n.d = function (t, e, r) {
                                                n.o(t, e) ||
                                                    I()(t, e, {
                                                        enumerable: !0,
                                                        get: r,
                                                    });
                                            }),
                                            (n.r = function (t) {
                                                void 0 !== P.a &&
                                                    E.a &&
                                                    I()(t, E.a, {
                                                        value: "Module",
                                                    }),
                                                    Object.defineProperty(
                                                        t,
                                                        "__esModule",
                                                        { value: !0 }
                                                    );
                                            }),
                                            (n.t = function (t, e) {
                                                if (
                                                    (1 & e && (t = n(t)), 8 & e)
                                                )
                                                    return t;
                                                if (
                                                    4 & e &&
                                                    "object" ==
                                                        (void 0 === t
                                                            ? "undefined"
                                                            : M()(t)) &&
                                                    t &&
                                                    t.__esModule
                                                )
                                                    return t;
                                                var r = A()(null);
                                                if (
                                                    (n.r(r),
                                                    Object.defineProperty(
                                                        r,
                                                        "default",
                                                        {
                                                            enumerable: !0,
                                                            value: t,
                                                        }
                                                    ),
                                                    2 & e &&
                                                        "string" != typeof t)
                                                )
                                                    for (var i in t)
                                                        n.d(
                                                            r,
                                                            i,
                                                            function (e) {
                                                                return t[e];
                                                            }.bind(null, i)
                                                        );
                                                return r;
                                            }),
                                            (n.n = function (t) {
                                                var e =
                                                    t && t.__esModule
                                                        ? function () {
                                                              return t.default;
                                                          }
                                                        : function () {
                                                              return t;
                                                          };
                                                return n.d(e, "a", e), e;
                                            }),
                                            (n.o = function (t, e) {
                                                return Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    e
                                                );
                                            }),
                                            (n.p = ""),
                                            n((n.s = 3))
                                        );
                                    })([
                                        function (t, e, n) {
                                            (function (t) {
                                                n.d(e, "e", function () {
                                                    return b;
                                                }),
                                                    n.d(e, "c", function () {
                                                        return k;
                                                    }),
                                                    n.d(e, "b", function () {
                                                        return S;
                                                    }),
                                                    n.d(e, "a", function () {
                                                        return O;
                                                    }),
                                                    n.d(e, "d", function () {
                                                        return E;
                                                    });
                                                var r = n(1);
                                                function i(t, e) {
                                                    for (
                                                        var n = 0;
                                                        n < e.length;
                                                        n++
                                                    ) {
                                                        var r = e[n];
                                                        (r.enumerable =
                                                            r.enumerable || !1),
                                                            (r.configurable =
                                                                !0),
                                                            "value" in r &&
                                                                (r.writable =
                                                                    !0),
                                                            I()(t, r.key, r);
                                                    }
                                                }
                                                function o(t) {
                                                    return (o =
                                                        "function" ==
                                                            typeof P.a &&
                                                        "symbol" == M()(T.a)
                                                            ? function (t) {
                                                                  return void 0 ===
                                                                      t
                                                                      ? "undefined"
                                                                      : M()(t);
                                                              }
                                                            : function (t) {
                                                                  return t &&
                                                                      "function" ==
                                                                          typeof P.a &&
                                                                      t.constructor ===
                                                                          P.a &&
                                                                      t !==
                                                                          P.a
                                                                              .prototype
                                                                      ? "symbol"
                                                                      : void 0 ===
                                                                        t
                                                                      ? "undefined"
                                                                      : M()(t);
                                                              })(t);
                                                }
                                                function a(t, e) {
                                                    var n = C()(t);
                                                    if (w.a) {
                                                        var r = w()(t);
                                                        e &&
                                                            (r = r.filter(
                                                                function (e) {
                                                                    return _()(
                                                                        t,
                                                                        e
                                                                    )
                                                                        .enumerable;
                                                                }
                                                            )),
                                                            n.push.apply(n, r);
                                                    }
                                                    return n;
                                                }
                                                function s(t) {
                                                    for (
                                                        var e = 1;
                                                        e < arguments.length;
                                                        e++
                                                    ) {
                                                        var n =
                                                            null != arguments[e]
                                                                ? arguments[e]
                                                                : {};
                                                        e % 2
                                                            ? a(
                                                                  Object(n),
                                                                  !0
                                                              ).forEach(
                                                                  function (e) {
                                                                      u(
                                                                          t,
                                                                          e,
                                                                          n[e]
                                                                      );
                                                                  }
                                                              )
                                                            : m.a
                                                            ? v()(t, m()(n))
                                                            : a(
                                                                  Object(n)
                                                              ).forEach(
                                                                  function (e) {
                                                                      I()(
                                                                          t,
                                                                          e,
                                                                          _()(
                                                                              n,
                                                                              e
                                                                          )
                                                                      );
                                                                  }
                                                              );
                                                    }
                                                    return t;
                                                }
                                                function u(t, e, n) {
                                                    return (
                                                        e in t
                                                            ? I()(t, e, {
                                                                  value: n,
                                                                  enumerable:
                                                                      !0,
                                                                  configurable:
                                                                      !0,
                                                                  writable: !0,
                                                              })
                                                            : (t[e] = n),
                                                        t
                                                    );
                                                }
                                                var c =
                                                        "undefined" !=
                                                        typeof window
                                                            ? window
                                                            : t,
                                                    l =
                                                        c.requestAnimationFrame ||
                                                        c.webkitRequestAnimationFrame ||
                                                        c.oRequestAnimationFrame ||
                                                        c.msRequestAnimationFrame ||
                                                        (c.mozCancelRequestAnimationFrame &&
                                                            c.mozRequestAnimationFrame) ||
                                                        setTimeout,
                                                    d = function () {},
                                                    h = null,
                                                    g = null,
                                                    y = s({}, r),
                                                    b = function (
                                                        t,
                                                        e,
                                                        n,
                                                        r,
                                                        i,
                                                        o,
                                                        a
                                                    ) {
                                                        var s =
                                                            t < o
                                                                ? 0
                                                                : (t - o) / i;
                                                        for (var u in e) {
                                                            var c = a[u],
                                                                l = c.call
                                                                    ? c
                                                                    : y[c],
                                                                f = n[u];
                                                            e[u] =
                                                                f +
                                                                (r[u] - f) *
                                                                    l(s);
                                                        }
                                                        return e;
                                                    },
                                                    x = function (t, e) {
                                                        var n = t._attachment,
                                                            r = t._currentState,
                                                            i = t._delay,
                                                            o = t._easing,
                                                            a =
                                                                t._originalState,
                                                            s = t._duration,
                                                            u = t._step,
                                                            c = t._targetState,
                                                            l = t._timestamp,
                                                            f = l + i + s,
                                                            d = e > f ? f : e,
                                                            p = s - (f - d);
                                                        d >= f
                                                            ? (u(c, n, p),
                                                              t.stop(!0))
                                                            : (t._applyFilter(
                                                                  "beforeTween"
                                                              ),
                                                              d < l + i
                                                                  ? ((d = 1),
                                                                    (s = 1),
                                                                    (l = 1))
                                                                  : (l += i),
                                                              b(
                                                                  d,
                                                                  r,
                                                                  a,
                                                                  c,
                                                                  s,
                                                                  l,
                                                                  o
                                                              ),
                                                              t._applyFilter(
                                                                  "afterTween"
                                                              ),
                                                              u(r, n, p));
                                                    },
                                                    k = function () {
                                                        for (
                                                            var t = O.now(),
                                                                e = h;
                                                            e;

                                                        ) {
                                                            var n = e._next;
                                                            x(e, t), (e = n);
                                                        }
                                                    },
                                                    S = function (t) {
                                                        var e =
                                                                arguments.length >
                                                                    1 &&
                                                                void 0 !==
                                                                    arguments[1]
                                                                    ? arguments[1]
                                                                    : "linear",
                                                            n = {},
                                                            r = o(e);
                                                        if (
                                                            "string" === r ||
                                                            "function" === r
                                                        )
                                                            for (var i in t)
                                                                n[i] = e;
                                                        else
                                                            for (var a in t)
                                                                n[a] =
                                                                    e[a] ||
                                                                    "linear";
                                                        return n;
                                                    },
                                                    A = function (t) {
                                                        if (t === h)
                                                            (h = t._next)
                                                                ? (h._previous =
                                                                      null)
                                                                : (g = null);
                                                        else if (t === g)
                                                            (g = t._previous)
                                                                ? (g._next =
                                                                      null)
                                                                : (h = null);
                                                        else {
                                                            var e = t._previous,
                                                                n = t._next;
                                                            (e._next = n),
                                                                (n._previous =
                                                                    e);
                                                        }
                                                        t._previous = t._next =
                                                            null;
                                                    },
                                                    O = (function () {
                                                        function t() {
                                                            var e =
                                                                    arguments.length >
                                                                        0 &&
                                                                    void 0 !==
                                                                        arguments[0]
                                                                        ? arguments[0]
                                                                        : {},
                                                                n =
                                                                    arguments.length >
                                                                        1 &&
                                                                    void 0 !==
                                                                        arguments[1]
                                                                        ? arguments[1]
                                                                        : void 0;
                                                            !(function (t, e) {
                                                                if (
                                                                    !(
                                                                        t instanceof
                                                                        e
                                                                    )
                                                                )
                                                                    throw new TypeError(
                                                                        "Cannot call a class as a function"
                                                                    );
                                                            })(this, t),
                                                                (this._currentState =
                                                                    e),
                                                                (this._configured =
                                                                    !1),
                                                                (this._filters =
                                                                    []),
                                                                (this._timestamp =
                                                                    null),
                                                                (this._next =
                                                                    null),
                                                                (this._previous =
                                                                    null),
                                                                n &&
                                                                    this.setConfig(
                                                                        n
                                                                    );
                                                        }
                                                        var e, n;
                                                        return (
                                                            (e = t),
                                                            (n = [
                                                                {
                                                                    key: "_applyFilter",
                                                                    value: function (
                                                                        t
                                                                    ) {
                                                                        var e =
                                                                                !0,
                                                                            n =
                                                                                !1,
                                                                            r =
                                                                                void 0;
                                                                        try {
                                                                            for (
                                                                                var i,
                                                                                    o =
                                                                                        p()(
                                                                                            this
                                                                                                ._filters
                                                                                        );
                                                                                !(e =
                                                                                    (i =
                                                                                        o.next())
                                                                                        .done);
                                                                                e =
                                                                                    !0
                                                                            ) {
                                                                                var a =
                                                                                    i
                                                                                        .value[
                                                                                        t
                                                                                    ];
                                                                                a &&
                                                                                    a(
                                                                                        this
                                                                                    );
                                                                            }
                                                                        } catch (t) {
                                                                            (n =
                                                                                !0),
                                                                                (r =
                                                                                    t);
                                                                        } finally {
                                                                            try {
                                                                                e ||
                                                                                    null ==
                                                                                        o.return ||
                                                                                    o.return();
                                                                            } finally {
                                                                                if (
                                                                                    n
                                                                                )
                                                                                    throw r;
                                                                            }
                                                                        }
                                                                    },
                                                                },
                                                                {
                                                                    key: "tween",
                                                                    value: function () {
                                                                        var e =
                                                                                arguments.length >
                                                                                    0 &&
                                                                                void 0 !==
                                                                                    arguments[0]
                                                                                    ? arguments[0]
                                                                                    : void 0,
                                                                            n =
                                                                                this
                                                                                    ._attachment,
                                                                            r =
                                                                                this
                                                                                    ._configured;
                                                                        return (
                                                                            (!e &&
                                                                                r) ||
                                                                                this.setConfig(
                                                                                    e
                                                                                ),
                                                                            (this._pausedAtTime =
                                                                                null),
                                                                            (this._timestamp =
                                                                                t.now()),
                                                                            this._start(
                                                                                this.get(),
                                                                                n
                                                                            ),
                                                                            this.resume()
                                                                        );
                                                                    },
                                                                },
                                                                {
                                                                    key: "setConfig",
                                                                    value: function () {
                                                                        var e =
                                                                                this,
                                                                            n =
                                                                                arguments.length >
                                                                                    0 &&
                                                                                void 0 !==
                                                                                    arguments[0]
                                                                                    ? arguments[0]
                                                                                    : {},
                                                                            r =
                                                                                n.attachment,
                                                                            i =
                                                                                n.delay,
                                                                            o =
                                                                                void 0 ===
                                                                                i
                                                                                    ? 0
                                                                                    : i,
                                                                            a =
                                                                                n.duration,
                                                                            u =
                                                                                void 0 ===
                                                                                a
                                                                                    ? 500
                                                                                    : a,
                                                                            c =
                                                                                n.easing,
                                                                            l =
                                                                                n.from,
                                                                            p =
                                                                                n.promise,
                                                                            h =
                                                                                void 0 ===
                                                                                p
                                                                                    ? f.a
                                                                                    : p,
                                                                            v =
                                                                                n.start,
                                                                            g =
                                                                                void 0 ===
                                                                                v
                                                                                    ? d
                                                                                    : v,
                                                                            m =
                                                                                n.step,
                                                                            y =
                                                                                void 0 ===
                                                                                m
                                                                                    ? d
                                                                                    : m,
                                                                            _ =
                                                                                n.to;
                                                                        (this._configured =
                                                                            !0),
                                                                            (this._attachment =
                                                                                r),
                                                                            (this._isPlaying =
                                                                                !1),
                                                                            (this._pausedAtTime =
                                                                                null),
                                                                            (this._scheduleId =
                                                                                null),
                                                                            (this._delay =
                                                                                o),
                                                                            (this._start =
                                                                                g),
                                                                            (this._step =
                                                                                y),
                                                                            (this._duration =
                                                                                u),
                                                                            (this._currentState =
                                                                                s(
                                                                                    {},
                                                                                    l ||
                                                                                        this.get()
                                                                                )),
                                                                            (this._originalState =
                                                                                this.get()),
                                                                            (this._targetState =
                                                                                s(
                                                                                    {},
                                                                                    _ ||
                                                                                        this.get()
                                                                                ));
                                                                        var b =
                                                                            this
                                                                                ._currentState;
                                                                        (this._targetState =
                                                                            s(
                                                                                {},
                                                                                b,
                                                                                {},
                                                                                this
                                                                                    ._targetState
                                                                            )),
                                                                            (this._easing =
                                                                                S(
                                                                                    b,
                                                                                    c
                                                                                ));
                                                                        var w =
                                                                            t.filters;
                                                                        for (var x in ((this._filters.length = 0),
                                                                        w))
                                                                            w[
                                                                                x
                                                                            ].doesApply(
                                                                                this
                                                                            ) &&
                                                                                this._filters.push(
                                                                                    w[
                                                                                        x
                                                                                    ]
                                                                                );
                                                                        return (
                                                                            this._applyFilter(
                                                                                "tweenCreated"
                                                                            ),
                                                                            (this._promise =
                                                                                new h(
                                                                                    function (
                                                                                        t,
                                                                                        n
                                                                                    ) {
                                                                                        (e._resolve =
                                                                                            t),
                                                                                            (e._reject =
                                                                                                n);
                                                                                    }
                                                                                )),
                                                                            this._promise.catch(
                                                                                d
                                                                            ),
                                                                            this
                                                                        );
                                                                    },
                                                                },
                                                                {
                                                                    key: "get",
                                                                    value: function () {
                                                                        return s(
                                                                            {},
                                                                            this
                                                                                ._currentState
                                                                        );
                                                                    },
                                                                },
                                                                {
                                                                    key: "set",
                                                                    value: function (
                                                                        t
                                                                    ) {
                                                                        this._currentState =
                                                                            t;
                                                                    },
                                                                },
                                                                {
                                                                    key: "pause",
                                                                    value: function () {
                                                                        if (
                                                                            this
                                                                                ._isPlaying
                                                                        )
                                                                            return (
                                                                                (this._pausedAtTime =
                                                                                    t.now()),
                                                                                (this._isPlaying =
                                                                                    !1),
                                                                                A(
                                                                                    this
                                                                                ),
                                                                                this
                                                                            );
                                                                    },
                                                                },
                                                                {
                                                                    key: "resume",
                                                                    value: function () {
                                                                        if (
                                                                            null ===
                                                                            this
                                                                                ._timestamp
                                                                        )
                                                                            return this.tween();
                                                                        if (
                                                                            this
                                                                                ._isPlaying
                                                                        )
                                                                            return this
                                                                                ._promise;
                                                                        var e =
                                                                            t.now();
                                                                        return (
                                                                            this
                                                                                ._pausedAtTime &&
                                                                                ((this._timestamp +=
                                                                                    e -
                                                                                    this
                                                                                        ._pausedAtTime),
                                                                                (this._pausedAtTime =
                                                                                    null)),
                                                                            (this._isPlaying =
                                                                                !0),
                                                                            null ===
                                                                            h
                                                                                ? ((h =
                                                                                      this),
                                                                                  (g =
                                                                                      this),
                                                                                  (function t() {
                                                                                      h &&
                                                                                          (l.call(
                                                                                              c,
                                                                                              t,
                                                                                              1e3 /
                                                                                                  60
                                                                                          ),
                                                                                          k());
                                                                                  })())
                                                                                : ((this._previous =
                                                                                      g),
                                                                                  (g._next =
                                                                                      this),
                                                                                  (g =
                                                                                      this)),
                                                                            this
                                                                                ._promise
                                                                        );
                                                                    },
                                                                },
                                                                {
                                                                    key: "seek",
                                                                    value: function (
                                                                        e
                                                                    ) {
                                                                        e =
                                                                            Math.max(
                                                                                e,
                                                                                0
                                                                            );
                                                                        var n =
                                                                            t.now();
                                                                        return this
                                                                            ._timestamp +
                                                                            e ===
                                                                            0
                                                                            ? this
                                                                            : ((this._timestamp =
                                                                                  n -
                                                                                  e),
                                                                              this
                                                                                  ._isPlaying ||
                                                                                  x(
                                                                                      this,
                                                                                      n
                                                                                  ),
                                                                              this);
                                                                    },
                                                                },
                                                                {
                                                                    key: "stop",
                                                                    value: function () {
                                                                        var t =
                                                                                arguments.length >
                                                                                    0 &&
                                                                                void 0 !==
                                                                                    arguments[0] &&
                                                                                arguments[0],
                                                                            e =
                                                                                this
                                                                                    ._attachment,
                                                                            n =
                                                                                this
                                                                                    ._currentState,
                                                                            r =
                                                                                this
                                                                                    ._easing,
                                                                            i =
                                                                                this
                                                                                    ._originalState,
                                                                            o =
                                                                                this
                                                                                    ._targetState;
                                                                        if (
                                                                            this
                                                                                ._isPlaying
                                                                        )
                                                                            return (
                                                                                (this._isPlaying =
                                                                                    !1),
                                                                                A(
                                                                                    this
                                                                                ),
                                                                                t
                                                                                    ? (this._applyFilter(
                                                                                          "beforeTween"
                                                                                      ),
                                                                                      b(
                                                                                          1,
                                                                                          n,
                                                                                          i,
                                                                                          o,
                                                                                          1,
                                                                                          0,
                                                                                          r
                                                                                      ),
                                                                                      this._applyFilter(
                                                                                          "afterTween"
                                                                                      ),
                                                                                      this._applyFilter(
                                                                                          "afterTweenEnd"
                                                                                      ),
                                                                                      this._resolve(
                                                                                          n,
                                                                                          e
                                                                                      ))
                                                                                    : this._reject(
                                                                                          n,
                                                                                          e
                                                                                      ),
                                                                                this
                                                                            );
                                                                    },
                                                                },
                                                                {
                                                                    key: "isPlaying",
                                                                    value: function () {
                                                                        return this
                                                                            ._isPlaying;
                                                                    },
                                                                },
                                                                {
                                                                    key: "setScheduleFunction",
                                                                    value: function (
                                                                        e
                                                                    ) {
                                                                        t.setScheduleFunction(
                                                                            e
                                                                        );
                                                                    },
                                                                },
                                                                {
                                                                    key: "dispose",
                                                                    value: function () {
                                                                        for (var t in this)
                                                                            delete this[
                                                                                t
                                                                            ];
                                                                    },
                                                                },
                                                            ]) &&
                                                                i(
                                                                    e.prototype,
                                                                    n
                                                                ),
                                                            t
                                                        );
                                                    })();
                                                function E() {
                                                    var t =
                                                            arguments.length >
                                                                0 &&
                                                            void 0 !==
                                                                arguments[0]
                                                                ? arguments[0]
                                                                : {},
                                                        e = new O(),
                                                        n = e.tween(t);
                                                    return (n.tweenable = e), n;
                                                }
                                                (O.setScheduleFunction =
                                                    function (t) {
                                                        return (l = t);
                                                    }),
                                                    (O.formulas = y),
                                                    (O.filters = {}),
                                                    (O.now =
                                                        Date.now ||
                                                        function () {
                                                            return +new Date();
                                                        });
                                            }.call(this, n(2)));
                                        },
                                        function (t, e, n) {
                                            n.r(e),
                                                n.d(e, "linear", function () {
                                                    return r;
                                                }),
                                                n.d(
                                                    e,
                                                    "easeInQuad",
                                                    function () {
                                                        return i;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutQuad",
                                                    function () {
                                                        return o;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutQuad",
                                                    function () {
                                                        return a;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInCubic",
                                                    function () {
                                                        return s;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutCubic",
                                                    function () {
                                                        return u;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutCubic",
                                                    function () {
                                                        return c;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInQuart",
                                                    function () {
                                                        return l;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutQuart",
                                                    function () {
                                                        return f;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutQuart",
                                                    function () {
                                                        return d;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInQuint",
                                                    function () {
                                                        return p;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutQuint",
                                                    function () {
                                                        return h;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutQuint",
                                                    function () {
                                                        return v;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInSine",
                                                    function () {
                                                        return g;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutSine",
                                                    function () {
                                                        return m;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutSine",
                                                    function () {
                                                        return y;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInExpo",
                                                    function () {
                                                        return _;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutExpo",
                                                    function () {
                                                        return b;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutExpo",
                                                    function () {
                                                        return w;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInCirc",
                                                    function () {
                                                        return x;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutCirc",
                                                    function () {
                                                        return C;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutCirc",
                                                    function () {
                                                        return k;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutBounce",
                                                    function () {
                                                        return T;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInBack",
                                                    function () {
                                                        return S;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeOutBack",
                                                    function () {
                                                        return A;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeInOutBack",
                                                    function () {
                                                        return O;
                                                    }
                                                ),
                                                n.d(e, "elastic", function () {
                                                    return E;
                                                }),
                                                n.d(
                                                    e,
                                                    "swingFromTo",
                                                    function () {
                                                        return j;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "swingFrom",
                                                    function () {
                                                        return P;
                                                    }
                                                ),
                                                n.d(e, "swingTo", function () {
                                                    return D;
                                                }),
                                                n.d(e, "bounce", function () {
                                                    return I;
                                                }),
                                                n.d(
                                                    e,
                                                    "bouncePast",
                                                    function () {
                                                        return N;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "easeFromTo",
                                                    function () {
                                                        return M;
                                                    }
                                                ),
                                                n.d(e, "easeFrom", function () {
                                                    return L;
                                                }),
                                                n.d(e, "easeTo", function () {
                                                    return F;
                                                });
                                            var r = function (t) {
                                                    return t;
                                                },
                                                i = function (t) {
                                                    return Math.pow(t, 2);
                                                },
                                                o = function (t) {
                                                    return -(
                                                        Math.pow(t - 1, 2) - 1
                                                    );
                                                },
                                                a = function (t) {
                                                    return (t /= 0.5) < 1
                                                        ? 0.5 * Math.pow(t, 2)
                                                        : -0.5 *
                                                              ((t -= 2) * t -
                                                                  2);
                                                },
                                                s = function (t) {
                                                    return Math.pow(t, 3);
                                                },
                                                u = function (t) {
                                                    return (
                                                        Math.pow(t - 1, 3) + 1
                                                    );
                                                },
                                                c = function (t) {
                                                    return (t /= 0.5) < 1
                                                        ? 0.5 * Math.pow(t, 3)
                                                        : 0.5 *
                                                              (Math.pow(
                                                                  t - 2,
                                                                  3
                                                              ) +
                                                                  2);
                                                },
                                                l = function (t) {
                                                    return Math.pow(t, 4);
                                                },
                                                f = function (t) {
                                                    return -(
                                                        Math.pow(t - 1, 4) - 1
                                                    );
                                                },
                                                d = function (t) {
                                                    return (t /= 0.5) < 1
                                                        ? 0.5 * Math.pow(t, 4)
                                                        : -0.5 *
                                                              ((t -= 2) *
                                                                  Math.pow(
                                                                      t,
                                                                      3
                                                                  ) -
                                                                  2);
                                                },
                                                p = function (t) {
                                                    return Math.pow(t, 5);
                                                },
                                                h = function (t) {
                                                    return (
                                                        Math.pow(t - 1, 5) + 1
                                                    );
                                                },
                                                v = function (t) {
                                                    return (t /= 0.5) < 1
                                                        ? 0.5 * Math.pow(t, 5)
                                                        : 0.5 *
                                                              (Math.pow(
                                                                  t - 2,
                                                                  5
                                                              ) +
                                                                  2);
                                                },
                                                g = function (t) {
                                                    return (
                                                        1 -
                                                        Math.cos(
                                                            t * (Math.PI / 2)
                                                        )
                                                    );
                                                },
                                                m = function (t) {
                                                    return Math.sin(
                                                        t * (Math.PI / 2)
                                                    );
                                                },
                                                y = function (t) {
                                                    return (
                                                        -0.5 *
                                                        (Math.cos(Math.PI * t) -
                                                            1)
                                                    );
                                                },
                                                _ = function (t) {
                                                    return 0 === t
                                                        ? 0
                                                        : Math.pow(
                                                              2,
                                                              10 * (t - 1)
                                                          );
                                                },
                                                b = function (t) {
                                                    return 1 === t
                                                        ? 1
                                                        : 1 -
                                                              Math.pow(
                                                                  2,
                                                                  -10 * t
                                                              );
                                                },
                                                w = function (t) {
                                                    return 0 === t
                                                        ? 0
                                                        : 1 === t
                                                        ? 1
                                                        : (t /= 0.5) < 1
                                                        ? 0.5 *
                                                          Math.pow(
                                                              2,
                                                              10 * (t - 1)
                                                          )
                                                        : 0.5 *
                                                          (2 -
                                                              Math.pow(
                                                                  2,
                                                                  -10 * --t
                                                              ));
                                                },
                                                x = function (t) {
                                                    return -(
                                                        Math.sqrt(1 - t * t) - 1
                                                    );
                                                },
                                                C = function (t) {
                                                    return Math.sqrt(
                                                        1 - Math.pow(t - 1, 2)
                                                    );
                                                },
                                                k = function (t) {
                                                    return (t /= 0.5) < 1
                                                        ? -0.5 *
                                                              (Math.sqrt(
                                                                  1 - t * t
                                                              ) -
                                                                  1)
                                                        : 0.5 *
                                                              (Math.sqrt(
                                                                  1 -
                                                                      (t -= 2) *
                                                                          t
                                                              ) +
                                                                  1);
                                                },
                                                T = function (t) {
                                                    return t < 1 / 2.75
                                                        ? 7.5625 * t * t
                                                        : t < 2 / 2.75
                                                        ? 7.5625 *
                                                              (t -=
                                                                  1.5 / 2.75) *
                                                              t +
                                                          0.75
                                                        : t < 2.5 / 2.75
                                                        ? 7.5625 *
                                                              (t -=
                                                                  2.25 / 2.75) *
                                                              t +
                                                          0.9375
                                                        : 7.5625 *
                                                              (t -=
                                                                  2.625 /
                                                                  2.75) *
                                                              t +
                                                          0.984375;
                                                },
                                                S = function (t) {
                                                    var e = 1.70158;
                                                    return (
                                                        t *
                                                        t *
                                                        ((e + 1) * t - e)
                                                    );
                                                },
                                                A = function (t) {
                                                    var e = 1.70158;
                                                    return (
                                                        (t -= 1) *
                                                            t *
                                                            ((e + 1) * t + e) +
                                                        1
                                                    );
                                                },
                                                O = function (t) {
                                                    var e = 1.70158;
                                                    return (t /= 0.5) < 1
                                                        ? t *
                                                              t *
                                                              ((1 +
                                                                  (e *= 1.525)) *
                                                                  t -
                                                                  e) *
                                                              0.5
                                                        : 0.5 *
                                                              ((t -= 2) *
                                                                  t *
                                                                  ((1 +
                                                                      (e *= 1.525)) *
                                                                      t +
                                                                      e) +
                                                                  2);
                                                },
                                                E = function (t) {
                                                    return (
                                                        -1 *
                                                            Math.pow(
                                                                4,
                                                                -8 * t
                                                            ) *
                                                            Math.sin(
                                                                ((6 * t - 1) *
                                                                    (2 *
                                                                        Math.PI)) /
                                                                    2
                                                            ) +
                                                        1
                                                    );
                                                },
                                                j = function (t) {
                                                    var e = 1.70158;
                                                    return (t /= 0.5) < 1
                                                        ? t *
                                                              t *
                                                              ((1 +
                                                                  (e *= 1.525)) *
                                                                  t -
                                                                  e) *
                                                              0.5
                                                        : 0.5 *
                                                              ((t -= 2) *
                                                                  t *
                                                                  ((1 +
                                                                      (e *= 1.525)) *
                                                                      t +
                                                                      e) +
                                                                  2);
                                                },
                                                P = function (t) {
                                                    var e = 1.70158;
                                                    return (
                                                        t *
                                                        t *
                                                        ((e + 1) * t - e)
                                                    );
                                                },
                                                D = function (t) {
                                                    var e = 1.70158;
                                                    return (
                                                        (t -= 1) *
                                                            t *
                                                            ((e + 1) * t + e) +
                                                        1
                                                    );
                                                },
                                                I = function (t) {
                                                    return t < 1 / 2.75
                                                        ? 7.5625 * t * t
                                                        : t < 2 / 2.75
                                                        ? 7.5625 *
                                                              (t -=
                                                                  1.5 / 2.75) *
                                                              t +
                                                          0.75
                                                        : t < 2.5 / 2.75
                                                        ? 7.5625 *
                                                              (t -=
                                                                  2.25 / 2.75) *
                                                              t +
                                                          0.9375
                                                        : 7.5625 *
                                                              (t -=
                                                                  2.625 /
                                                                  2.75) *
                                                              t +
                                                          0.984375;
                                                },
                                                N = function (t) {
                                                    return t < 1 / 2.75
                                                        ? 7.5625 * t * t
                                                        : t < 2 / 2.75
                                                        ? 2 -
                                                          (7.5625 *
                                                              (t -=
                                                                  1.5 / 2.75) *
                                                              t +
                                                              0.75)
                                                        : t < 2.5 / 2.75
                                                        ? 2 -
                                                          (7.5625 *
                                                              (t -=
                                                                  2.25 / 2.75) *
                                                              t +
                                                              0.9375)
                                                        : 2 -
                                                          (7.5625 *
                                                              (t -=
                                                                  2.625 /
                                                                  2.75) *
                                                              t +
                                                              0.984375);
                                                },
                                                M = function (t) {
                                                    return (t /= 0.5) < 1
                                                        ? 0.5 * Math.pow(t, 4)
                                                        : -0.5 *
                                                              ((t -= 2) *
                                                                  Math.pow(
                                                                      t,
                                                                      3
                                                                  ) -
                                                                  2);
                                                },
                                                L = function (t) {
                                                    return Math.pow(t, 4);
                                                },
                                                F = function (t) {
                                                    return Math.pow(t, 0.25);
                                                };
                                        },
                                        function (t, e) {
                                            var n;
                                            n = (function () {
                                                return this;
                                            })();
                                            try {
                                                n =
                                                    n ||
                                                    new Function(
                                                        "return this"
                                                    )();
                                            } catch (t) {
                                                "object" ==
                                                    ("undefined" ==
                                                    typeof window
                                                        ? "undefined"
                                                        : M()(window)) &&
                                                    (n = window);
                                            }
                                            t.exports = n;
                                        },
                                        function (t, e, n) {
                                            n.r(e);
                                            var r = {};
                                            n.r(r),
                                                n.d(
                                                    r,
                                                    "doesApply",
                                                    function () {
                                                        return F;
                                                    }
                                                ),
                                                n.d(
                                                    r,
                                                    "tweenCreated",
                                                    function () {
                                                        return q;
                                                    }
                                                ),
                                                n.d(
                                                    r,
                                                    "beforeTween",
                                                    function () {
                                                        return B;
                                                    }
                                                ),
                                                n.d(
                                                    r,
                                                    "afterTween",
                                                    function () {
                                                        return W;
                                                    }
                                                );
                                            var i,
                                                a,
                                                u = n(0),
                                                l = /(\d|-|\.)/,
                                                f = /([^\-0-9.]+)/g,
                                                d = /[0-9.-]+/g,
                                                p =
                                                    ((i = d.source),
                                                    (a = /,\s*/.source),
                                                    new RegExp(
                                                        "rgb\\("
                                                            .concat(i)
                                                            .concat(a)
                                                            .concat(i)
                                                            .concat(a)
                                                            .concat(i, "\\)"),
                                                        "g"
                                                    )),
                                                h = /^.*\(/,
                                                g = /#([0-9]|[a-f]){3,6}/gi,
                                                y = function (t, e) {
                                                    return t.map(function (
                                                        t,
                                                        n
                                                    ) {
                                                        return "_"
                                                            .concat(e, "_")
                                                            .concat(n);
                                                    });
                                                };
                                            function b(t) {
                                                return parseInt(t, 16);
                                            }
                                            var x = function (t) {
                                                    return "rgb(".concat(
                                                        ((e = t),
                                                        3 ===
                                                            (e = e.replace(
                                                                /#/,
                                                                ""
                                                            )).length &&
                                                            (e =
                                                                (e =
                                                                    e.split(
                                                                        ""
                                                                    ))[0] +
                                                                e[0] +
                                                                e[1] +
                                                                e[1] +
                                                                e[2] +
                                                                e[2]),
                                                        [
                                                            b(e.substr(0, 2)),
                                                            b(e.substr(2, 2)),
                                                            b(e.substr(4, 2)),
                                                        ]).join(","),
                                                        ")"
                                                    );
                                                    var e;
                                                },
                                                k = function (t, e, n) {
                                                    var r = e.match(t),
                                                        i = e.replace(t, "VAL");
                                                    return (
                                                        r &&
                                                            r.forEach(function (
                                                                t
                                                            ) {
                                                                return (i =
                                                                    i.replace(
                                                                        "VAL",
                                                                        n(t)
                                                                    ));
                                                            }),
                                                        i
                                                    );
                                                },
                                                T = function (t) {
                                                    for (var e in t) {
                                                        var n = t[e];
                                                        "string" == typeof n &&
                                                            n.match(g) &&
                                                            (t[e] = k(g, n, x));
                                                    }
                                                },
                                                S = function (t) {
                                                    var e = t
                                                            .match(d)
                                                            .map(Math.floor),
                                                        n = t.match(h)[0];
                                                    return ""
                                                        .concat(n)
                                                        .concat(
                                                            e.join(","),
                                                            ")"
                                                        );
                                                },
                                                A = function (t) {
                                                    return t.match(d);
                                                },
                                                O = function (t) {
                                                    var e,
                                                        n,
                                                        r = {};
                                                    for (var i in t) {
                                                        var o = t[i];
                                                        "string" == typeof o &&
                                                            (r[i] = {
                                                                formatString:
                                                                    ((e = o),
                                                                    (n =
                                                                        void 0),
                                                                    (n =
                                                                        e.match(
                                                                            f
                                                                        )),
                                                                    n
                                                                        ? (1 ===
                                                                              n.length ||
                                                                              e
                                                                                  .charAt(
                                                                                      0
                                                                                  )
                                                                                  .match(
                                                                                      l
                                                                                  )) &&
                                                                          n.unshift(
                                                                              ""
                                                                          )
                                                                        : (n = [
                                                                              "",
                                                                              "",
                                                                          ]),
                                                                    n.join(
                                                                        "VAL"
                                                                    )),
                                                                chunkNames: y(
                                                                    A(o),
                                                                    i
                                                                ),
                                                            });
                                                    }
                                                    return r;
                                                },
                                                E = function (t, e) {
                                                    var n = function (n) {
                                                        A(t[n]).forEach(
                                                            function (r, i) {
                                                                return (t[
                                                                    e[
                                                                        n
                                                                    ].chunkNames[
                                                                        i
                                                                    ]
                                                                ] = +r);
                                                            }
                                                        ),
                                                            delete t[n];
                                                    };
                                                    for (var r in e) n(r);
                                                },
                                                j = function (t, e) {
                                                    var n = {};
                                                    return (
                                                        e.forEach(function (e) {
                                                            (n[e] = t[e]),
                                                                delete t[e];
                                                        }),
                                                        n
                                                    );
                                                },
                                                P = function (t, e) {
                                                    return e.map(function (e) {
                                                        return t[e];
                                                    });
                                                },
                                                D = function (t, e) {
                                                    return (
                                                        e.forEach(function (e) {
                                                            return (t =
                                                                t.replace(
                                                                    "VAL",
                                                                    +e.toFixed(
                                                                        4
                                                                    )
                                                                ));
                                                        }),
                                                        t
                                                    );
                                                },
                                                N = function (t, e) {
                                                    for (var n in e) {
                                                        var r = e[n],
                                                            i = r.chunkNames,
                                                            o = r.formatString,
                                                            a = D(
                                                                o,
                                                                P(j(t, i), i)
                                                            );
                                                        t[n] = k(p, a, S);
                                                    }
                                                },
                                                M = function (t, e) {
                                                    var n = function (n) {
                                                        var r = e[n].chunkNames,
                                                            i = t[n];
                                                        if (
                                                            "string" == typeof i
                                                        ) {
                                                            var o =
                                                                    i.split(
                                                                        " "
                                                                    ),
                                                                a =
                                                                    o[
                                                                        o.length -
                                                                            1
                                                                    ];
                                                            r.forEach(function (
                                                                e,
                                                                n
                                                            ) {
                                                                return (t[e] =
                                                                    o[n] || a);
                                                            });
                                                        } else
                                                            r.forEach(function (
                                                                e
                                                            ) {
                                                                return (t[e] =
                                                                    i);
                                                            });
                                                        delete t[n];
                                                    };
                                                    for (var r in e) n(r);
                                                },
                                                L = function (t, e) {
                                                    for (var n in e) {
                                                        var r = e[n].chunkNames,
                                                            i = t[r[0]];
                                                        t[n] =
                                                            "string" == typeof i
                                                                ? r
                                                                      .map(
                                                                          function (
                                                                              e
                                                                          ) {
                                                                              var n =
                                                                                  t[
                                                                                      e
                                                                                  ];
                                                                              return (
                                                                                  delete t[
                                                                                      e
                                                                                  ],
                                                                                  n
                                                                              );
                                                                          }
                                                                      )
                                                                      .join(" ")
                                                                : i;
                                                    }
                                                },
                                                F = function (t) {
                                                    var e = t._currentState;
                                                    return C()(e).some(
                                                        function (t) {
                                                            return (
                                                                "string" ==
                                                                typeof e[t]
                                                            );
                                                        }
                                                    );
                                                };
                                            function q(t) {
                                                var e = t._currentState;
                                                [
                                                    e,
                                                    t._originalState,
                                                    t._targetState,
                                                ].forEach(T),
                                                    (t._tokenData = O(e));
                                            }
                                            function B(t) {
                                                var e = t._currentState,
                                                    n = t._originalState,
                                                    r = t._targetState,
                                                    i = t._easing,
                                                    o = t._tokenData;
                                                M(i, o),
                                                    [e, n, r].forEach(function (
                                                        t
                                                    ) {
                                                        return E(t, o);
                                                    });
                                            }
                                            function W(t) {
                                                var e = t._currentState,
                                                    n = t._originalState,
                                                    r = t._targetState,
                                                    i = t._easing,
                                                    o = t._tokenData;
                                                [e, n, r].forEach(function (t) {
                                                    return N(t, o);
                                                }),
                                                    L(i, o);
                                            }
                                            function R(t, e) {
                                                var n = C()(t);
                                                if (w.a) {
                                                    var r = w()(t);
                                                    e &&
                                                        (r = r.filter(function (
                                                            e
                                                        ) {
                                                            return _()(t, e)
                                                                .enumerable;
                                                        })),
                                                        n.push.apply(n, r);
                                                }
                                                return n;
                                            }
                                            function $(t, e, n) {
                                                return (
                                                    e in t
                                                        ? I()(t, e, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (t[e] = n),
                                                    t
                                                );
                                            }
                                            var H = new u.a(),
                                                z = u.a.filters,
                                                U = function (t, e, n, r) {
                                                    var i =
                                                            arguments.length >
                                                                4 &&
                                                            void 0 !==
                                                                arguments[4]
                                                                ? arguments[4]
                                                                : 0,
                                                        o = (function (t) {
                                                            for (
                                                                var e = 1;
                                                                e <
                                                                arguments.length;
                                                                e++
                                                            ) {
                                                                var n =
                                                                    null !=
                                                                    arguments[e]
                                                                        ? arguments[
                                                                              e
                                                                          ]
                                                                        : {};
                                                                e % 2
                                                                    ? R(
                                                                          Object(
                                                                              n
                                                                          ),
                                                                          !0
                                                                      ).forEach(
                                                                          function (
                                                                              e
                                                                          ) {
                                                                              $(
                                                                                  t,
                                                                                  e,
                                                                                  n[
                                                                                      e
                                                                                  ]
                                                                              );
                                                                          }
                                                                      )
                                                                    : m.a
                                                                    ? v()(
                                                                          t,
                                                                          m()(n)
                                                                      )
                                                                    : R(
                                                                          Object(
                                                                              n
                                                                          )
                                                                      ).forEach(
                                                                          function (
                                                                              e
                                                                          ) {
                                                                              I()(
                                                                                  t,
                                                                                  e,
                                                                                  _()(
                                                                                      n,
                                                                                      e
                                                                                  )
                                                                              );
                                                                          }
                                                                      );
                                                            }
                                                            return t;
                                                        })({}, t),
                                                        a = Object(u.b)(t, r);
                                                    for (var s in ((H._filters.length = 0),
                                                    H.set({}),
                                                    (H._currentState = o),
                                                    (H._originalState = t),
                                                    (H._targetState = e),
                                                    (H._easing = a),
                                                    z))
                                                        z[s].doesApply(H) &&
                                                            H._filters.push(
                                                                z[s]
                                                            );
                                                    H._applyFilter(
                                                        "tweenCreated"
                                                    ),
                                                        H._applyFilter(
                                                            "beforeTween"
                                                        );
                                                    var c = Object(u.e)(
                                                        n,
                                                        o,
                                                        t,
                                                        e,
                                                        1,
                                                        i,
                                                        a
                                                    );
                                                    return (
                                                        H._applyFilter(
                                                            "afterTween"
                                                        ),
                                                        c
                                                    );
                                                };
                                            function V(t, e) {
                                                for (
                                                    var n = 0;
                                                    n < e.length;
                                                    n++
                                                ) {
                                                    var r = e[n];
                                                    (r.enumerable =
                                                        r.enumerable || !1),
                                                        (r.configurable = !0),
                                                        "value" in r &&
                                                            (r.writable = !0),
                                                        I()(t, r.key, r);
                                                }
                                            }
                                            function X(t, e) {
                                                var n = e.get(t);
                                                if (!n)
                                                    throw new TypeError(
                                                        "attempted to get private field on non-instance"
                                                    );
                                                return n.get
                                                    ? n.get.call(t)
                                                    : n.value;
                                            }
                                            var G = (function () {
                                                    function t() {
                                                        !(function (t, e) {
                                                            if (
                                                                !(
                                                                    t instanceof
                                                                    e
                                                                )
                                                            )
                                                                throw new TypeError(
                                                                    "Cannot call a class as a function"
                                                                );
                                                        })(this, t),
                                                            Q.set(this, {
                                                                writable: !0,
                                                                value: [],
                                                            });
                                                        for (
                                                            var e =
                                                                    arguments.length,
                                                                n = new Array(
                                                                    e
                                                                ),
                                                                r = 0;
                                                            r < e;
                                                            r++
                                                        )
                                                            n[r] = arguments[r];
                                                        n.forEach(
                                                            this.add.bind(this)
                                                        );
                                                    }
                                                    var e, n;
                                                    return (
                                                        (e = t),
                                                        (n = [
                                                            {
                                                                key: "add",
                                                                value: function (
                                                                    t
                                                                ) {
                                                                    return (
                                                                        X(
                                                                            this,
                                                                            Q
                                                                        ).push(
                                                                            t
                                                                        ),
                                                                        t
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "remove",
                                                                value: function (
                                                                    t
                                                                ) {
                                                                    var e = X(
                                                                        this,
                                                                        Q
                                                                    ).indexOf(
                                                                        t
                                                                    );
                                                                    return (
                                                                        ~e &&
                                                                            X(
                                                                                this,
                                                                                Q
                                                                            ).splice(
                                                                                e,
                                                                                1
                                                                            ),
                                                                        t
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "empty",
                                                                value: function () {
                                                                    return this.tweenables.map(
                                                                        this.remove.bind(
                                                                            this
                                                                        )
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "isPlaying",
                                                                value: function () {
                                                                    return X(
                                                                        this,
                                                                        Q
                                                                    ).some(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return t.isPlaying();
                                                                        }
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "play",
                                                                value: function () {
                                                                    return (
                                                                        X(
                                                                            this,
                                                                            Q
                                                                        ).forEach(
                                                                            function (
                                                                                t
                                                                            ) {
                                                                                return t.tween();
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "pause",
                                                                value: function () {
                                                                    return (
                                                                        X(
                                                                            this,
                                                                            Q
                                                                        ).forEach(
                                                                            function (
                                                                                t
                                                                            ) {
                                                                                return t.pause();
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "resume",
                                                                value: function () {
                                                                    return (
                                                                        X(
                                                                            this,
                                                                            Q
                                                                        ).forEach(
                                                                            function (
                                                                                t
                                                                            ) {
                                                                                return t.resume();
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "stop",
                                                                value: function (
                                                                    t
                                                                ) {
                                                                    return (
                                                                        X(
                                                                            this,
                                                                            Q
                                                                        ).forEach(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                return e.stop(
                                                                                    t
                                                                                );
                                                                            }
                                                                        ),
                                                                        this
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "tweenables",
                                                                get: function () {
                                                                    return (function (
                                                                        t
                                                                    ) {
                                                                        return (
                                                                            (function (
                                                                                t
                                                                            ) {
                                                                                if (
                                                                                    Array.isArray(
                                                                                        t
                                                                                    )
                                                                                ) {
                                                                                    for (
                                                                                        var e = 0,
                                                                                            n =
                                                                                                new Array(
                                                                                                    t.length
                                                                                                );
                                                                                        e <
                                                                                        t.length;
                                                                                        e++
                                                                                    )
                                                                                        n[
                                                                                            e
                                                                                        ] =
                                                                                            t[
                                                                                                e
                                                                                            ];
                                                                                    return n;
                                                                                }
                                                                            })(
                                                                                t
                                                                            ) ||
                                                                            (function (
                                                                                t
                                                                            ) {
                                                                                if (
                                                                                    c()(
                                                                                        Object(
                                                                                            t
                                                                                        )
                                                                                    ) ||
                                                                                    "[object Arguments]" ===
                                                                                        Object.prototype.toString.call(
                                                                                            t
                                                                                        )
                                                                                )
                                                                                    return s()(
                                                                                        t
                                                                                    );
                                                                            })(
                                                                                t
                                                                            ) ||
                                                                            (function () {
                                                                                throw new TypeError(
                                                                                    "Invalid attempt to spread non-iterable instance"
                                                                                );
                                                                            })()
                                                                        );
                                                                    })(
                                                                        X(
                                                                            this,
                                                                            Q
                                                                        )
                                                                    );
                                                                },
                                                            },
                                                            {
                                                                key: "promises",
                                                                get: function () {
                                                                    return X(
                                                                        this,
                                                                        Q
                                                                    ).map(
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return t._promise;
                                                                        }
                                                                    );
                                                                },
                                                            },
                                                        ]) && V(e.prototype, n),
                                                        t
                                                    );
                                                })(),
                                                Q = new o.a();
                                            var J = function (t, e, n, r, i) {
                                                    var o = (function (
                                                        t,
                                                        e,
                                                        n,
                                                        r
                                                    ) {
                                                        return function (i) {
                                                            return (function (
                                                                t,
                                                                e,
                                                                n,
                                                                r,
                                                                i,
                                                                o
                                                            ) {
                                                                var a,
                                                                    s,
                                                                    u,
                                                                    c = 0,
                                                                    l = 0,
                                                                    f = 0,
                                                                    d =
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return (
                                                                                ((c *
                                                                                    t +
                                                                                    l) *
                                                                                    t +
                                                                                    f) *
                                                                                t
                                                                            );
                                                                        },
                                                                    p =
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return (
                                                                                (3 *
                                                                                    c *
                                                                                    t +
                                                                                    2 *
                                                                                        l) *
                                                                                    t +
                                                                                f
                                                                            );
                                                                        },
                                                                    h =
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return t >=
                                                                                0
                                                                                ? t
                                                                                : 0 -
                                                                                      t;
                                                                        };
                                                                return (
                                                                    (c =
                                                                        1 -
                                                                        (f =
                                                                            3 *
                                                                            e) -
                                                                        (l =
                                                                            3 *
                                                                                (r -
                                                                                    e) -
                                                                            f)),
                                                                    (a =
                                                                        1 -
                                                                        (u =
                                                                            3 *
                                                                            n) -
                                                                        (s =
                                                                            3 *
                                                                                (i -
                                                                                    n) -
                                                                            u)),
                                                                    (function (
                                                                        t
                                                                    ) {
                                                                        return (
                                                                            ((a *
                                                                                t +
                                                                                s) *
                                                                                t +
                                                                                u) *
                                                                            t
                                                                        );
                                                                    })(
                                                                        (function (
                                                                            t,
                                                                            e
                                                                        ) {
                                                                            var n,
                                                                                r,
                                                                                i,
                                                                                o,
                                                                                a,
                                                                                s;
                                                                            for (
                                                                                i =
                                                                                    t,
                                                                                    s = 0;
                                                                                s <
                                                                                8;
                                                                                s++
                                                                            ) {
                                                                                if (
                                                                                    ((o =
                                                                                        d(
                                                                                            i
                                                                                        ) -
                                                                                        t),
                                                                                    h(
                                                                                        o
                                                                                    ) <
                                                                                        e)
                                                                                )
                                                                                    return i;
                                                                                if (
                                                                                    ((a =
                                                                                        p(
                                                                                            i
                                                                                        )),
                                                                                    h(
                                                                                        a
                                                                                    ) <
                                                                                        1e-6)
                                                                                )
                                                                                    break;
                                                                                i -=
                                                                                    o /
                                                                                    a;
                                                                            }
                                                                            if (
                                                                                (i =
                                                                                    t) <
                                                                                (n = 0)
                                                                            )
                                                                                return n;
                                                                            if (
                                                                                i >
                                                                                (r = 1)
                                                                            )
                                                                                return r;
                                                                            for (
                                                                                ;
                                                                                n <
                                                                                r;

                                                                            ) {
                                                                                if (
                                                                                    ((o =
                                                                                        d(
                                                                                            i
                                                                                        )),
                                                                                    h(
                                                                                        o -
                                                                                            t
                                                                                    ) <
                                                                                        e)
                                                                                )
                                                                                    return i;
                                                                                t >
                                                                                o
                                                                                    ? (n =
                                                                                          i)
                                                                                    : (r =
                                                                                          i),
                                                                                    (i =
                                                                                        0.5 *
                                                                                            (r -
                                                                                                n) +
                                                                                        n);
                                                                            }
                                                                            return i;
                                                                        })(
                                                                            t,
                                                                            1 /
                                                                                (200 *
                                                                                    o)
                                                                        )
                                                                    )
                                                                );
                                                            })(
                                                                i,
                                                                t,
                                                                e,
                                                                n,
                                                                r,
                                                                1
                                                            );
                                                        };
                                                    })(e, n, r, i);
                                                    return (
                                                        (o.displayName = t),
                                                        (o.x1 = e),
                                                        (o.y1 = n),
                                                        (o.x2 = r),
                                                        (o.y2 = i),
                                                        (u.a.formulas[t] = o)
                                                    );
                                                },
                                                K = function (t) {
                                                    return delete u.a.formulas[
                                                        t
                                                    ];
                                                };
                                            n.d(
                                                e,
                                                "processTweens",
                                                function () {
                                                    return u.c;
                                                }
                                            ),
                                                n.d(
                                                    e,
                                                    "Tweenable",
                                                    function () {
                                                        return u.a;
                                                    }
                                                ),
                                                n.d(e, "tween", function () {
                                                    return u.d;
                                                }),
                                                n.d(
                                                    e,
                                                    "interpolate",
                                                    function () {
                                                        return U;
                                                    }
                                                ),
                                                n.d(e, "Scene", function () {
                                                    return G;
                                                }),
                                                n.d(
                                                    e,
                                                    "setBezierFunction",
                                                    function () {
                                                        return J;
                                                    }
                                                ),
                                                n.d(
                                                    e,
                                                    "unsetBezierFunction",
                                                    function () {
                                                        return K;
                                                    }
                                                ),
                                                (u.a.filters.token = r);
                                        },
                                    ]);
                                });
                            },
                            {},
                        ],
                        2: [
                            function (t, e, n) {
                                var r = t("./shape"),
                                    i = t("./utils"),
                                    o = function (t, e) {
                                        (this._pathTemplate =
                                            "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"),
                                            (this.containerAspectRatio = 1),
                                            r.apply(this, arguments);
                                    };
                                ((o.prototype = new r()).constructor = o),
                                    (o.prototype._pathString = function (t) {
                                        var e = t.strokeWidth;
                                        t.trailWidth &&
                                            t.trailWidth > t.strokeWidth &&
                                            (e = t.trailWidth);
                                        var n = 50 - e / 2;
                                        return i.render(this._pathTemplate, {
                                            radius: n,
                                            "2radius": 2 * n,
                                        });
                                    }),
                                    (o.prototype._trailString = function (t) {
                                        return this._pathString(t);
                                    }),
                                    (e.exports = o);
                            },
                            { "./shape": 7, "./utils": 9 },
                        ],
                        3: [
                            function (t, e, n) {
                                var r = t("./shape"),
                                    i = t("./utils"),
                                    o = function (t, e) {
                                        (this._pathTemplate = e.vertical
                                            ? "M {center},100 L {center},0"
                                            : "M 0,{center} L 100,{center}"),
                                            r.apply(this, arguments);
                                    };
                                ((o.prototype = new r()).constructor = o),
                                    (o.prototype._initializeSvg = function (
                                        t,
                                        e
                                    ) {
                                        var n = e.vertical
                                            ? "0 0 " + e.strokeWidth + " 100"
                                            : "0 0 100 " + e.strokeWidth;
                                        t.setAttribute("viewBox", n),
                                            t.setAttribute(
                                                "preserveAspectRatio",
                                                "none"
                                            );
                                    }),
                                    (o.prototype._pathString = function (t) {
                                        return i.render(this._pathTemplate, {
                                            center: t.strokeWidth / 2,
                                        });
                                    }),
                                    (o.prototype._trailString = function (t) {
                                        return this._pathString(t);
                                    }),
                                    (e.exports = o);
                            },
                            { "./shape": 7, "./utils": 9 },
                        ],
                        4: [
                            function (t, e, n) {
                                e.exports = {
                                    Line: t("./line"),
                                    Circle: t("./circle"),
                                    SemiCircle: t("./semicircle"),
                                    Square: t("./square"),
                                    Path: t("./path"),
                                    Shape: t("./shape"),
                                    utils: t("./utils"),
                                };
                            },
                            {
                                "./circle": 2,
                                "./line": 3,
                                "./path": 5,
                                "./semicircle": 6,
                                "./shape": 7,
                                "./square": 8,
                                "./utils": 9,
                            },
                        ],
                        5: [
                            function (t, e, n) {
                                var r = t("shifty"),
                                    i = t("./utils"),
                                    o = r.Tweenable,
                                    a = {
                                        easeIn: "easeInCubic",
                                        easeOut: "easeOutCubic",
                                        easeInOut: "easeInOutCubic",
                                    },
                                    s = function t(e, n) {
                                        if (!(this instanceof t))
                                            throw new Error(
                                                "Constructor was called without new keyword"
                                            );
                                        var r;
                                        (n = i.extend(
                                            {
                                                delay: 0,
                                                duration: 800,
                                                easing: "linear",
                                                from: {},
                                                to: {},
                                                step: function () {},
                                            },
                                            n
                                        )),
                                            (r = i.isString(e)
                                                ? document.querySelector(e)
                                                : e),
                                            (this.path = r),
                                            (this._opts = n),
                                            (this._tweenable = null);
                                        var o = this.path.getTotalLength();
                                        (this.path.style.strokeDasharray =
                                            o + " " + o),
                                            this.set(0);
                                    };
                                (s.prototype.value = function () {
                                    var t = this._getComputedDashOffset(),
                                        e = this.path.getTotalLength();
                                    return parseFloat(
                                        (1 - t / e).toFixed(6),
                                        10
                                    );
                                }),
                                    (s.prototype.set = function (t) {
                                        this.stop(),
                                            (this.path.style.strokeDashoffset =
                                                this._progressToOffset(t));
                                        var e = this._opts.step;
                                        if (i.isFunction(e)) {
                                            var n = this._easing(
                                                this._opts.easing
                                            );
                                            e(
                                                this._calculateTo(t, n),
                                                this._opts.shape || this,
                                                this._opts.attachment
                                            );
                                        }
                                    }),
                                    (s.prototype.stop = function () {
                                        this._stopTween(),
                                            (this.path.style.strokeDashoffset =
                                                this._getComputedDashOffset());
                                    }),
                                    (s.prototype.animate = function (t, e, n) {
                                        (e = e || {}),
                                            i.isFunction(e) &&
                                                ((n = e), (e = {}));
                                        var r = i.extend({}, e),
                                            a = i.extend({}, this._opts);
                                        e = i.extend(a, e);
                                        var s = this._easing(e.easing),
                                            u = this._resolveFromAndTo(t, s, r);
                                        this.stop(),
                                            this.path.getBoundingClientRect();
                                        var c = this._getComputedDashOffset(),
                                            l = this._progressToOffset(t),
                                            f = this;
                                        (this._tweenable = new o()),
                                            this._tweenable
                                                .tween({
                                                    from: i.extend(
                                                        { offset: c },
                                                        u.from
                                                    ),
                                                    to: i.extend(
                                                        { offset: l },
                                                        u.to
                                                    ),
                                                    duration: e.duration,
                                                    delay: e.delay,
                                                    easing: s,
                                                    step: function (t) {
                                                        f.path.style.strokeDashoffset =
                                                            t.offset;
                                                        var n = e.shape || f;
                                                        e.step(
                                                            t,
                                                            n,
                                                            e.attachment
                                                        );
                                                    },
                                                })
                                                .then(function (t) {
                                                    i.isFunction(n) && n();
                                                })
                                                .catch(function (t) {
                                                    throw (
                                                        (console.error(
                                                            "Error in tweening:",
                                                            t
                                                        ),
                                                        t)
                                                    );
                                                });
                                    }),
                                    (s.prototype._getComputedDashOffset =
                                        function () {
                                            var t = window.getComputedStyle(
                                                this.path,
                                                null
                                            );
                                            return parseFloat(
                                                t.getPropertyValue(
                                                    "stroke-dashoffset"
                                                ),
                                                10
                                            );
                                        }),
                                    (s.prototype._progressToOffset = function (
                                        t
                                    ) {
                                        var e = this.path.getTotalLength();
                                        return e - t * e;
                                    }),
                                    (s.prototype._resolveFromAndTo = function (
                                        t,
                                        e,
                                        n
                                    ) {
                                        return n.from && n.to
                                            ? { from: n.from, to: n.to }
                                            : {
                                                  from: this._calculateFrom(e),
                                                  to: this._calculateTo(t, e),
                                              };
                                    }),
                                    (s.prototype._calculateFrom = function (t) {
                                        return r.interpolate(
                                            this._opts.from,
                                            this._opts.to,
                                            this.value(),
                                            t
                                        );
                                    }),
                                    (s.prototype._calculateTo = function (
                                        t,
                                        e
                                    ) {
                                        return r.interpolate(
                                            this._opts.from,
                                            this._opts.to,
                                            t,
                                            e
                                        );
                                    }),
                                    (s.prototype._stopTween = function () {
                                        null !== this._tweenable &&
                                            (this._tweenable.stop(!0),
                                            (this._tweenable = null));
                                    }),
                                    (s.prototype._easing = function (t) {
                                        return a.hasOwnProperty(t) ? a[t] : t;
                                    }),
                                    (e.exports = s);
                            },
                            { "./utils": 9, shifty: 1 },
                        ],
                        6: [
                            function (t, e, n) {
                                var r = t("./shape"),
                                    i = t("./circle"),
                                    o = t("./utils"),
                                    a = function (t, e) {
                                        (this._pathTemplate =
                                            "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"),
                                            (this.containerAspectRatio = 2),
                                            r.apply(this, arguments);
                                    };
                                ((a.prototype = new r()).constructor = a),
                                    (a.prototype._initializeSvg = function (
                                        t,
                                        e
                                    ) {
                                        t.setAttribute("viewBox", "0 0 100 50");
                                    }),
                                    (a.prototype._initializeTextContainer =
                                        function (t, e, n) {
                                            t.text.style &&
                                                ((n.style.top = "auto"),
                                                (n.style.bottom = "0"),
                                                t.text.alignToBottom
                                                    ? o.setStyle(
                                                          n,
                                                          "transform",
                                                          "translate(-50%, 0)"
                                                      )
                                                    : o.setStyle(
                                                          n,
                                                          "transform",
                                                          "translate(-50%, 50%)"
                                                      ));
                                        }),
                                    (a.prototype._pathString =
                                        i.prototype._pathString),
                                    (a.prototype._trailString =
                                        i.prototype._trailString),
                                    (e.exports = a);
                            },
                            { "./circle": 2, "./shape": 7, "./utils": 9 },
                        ],
                        7: [
                            function (t, e, n) {
                                var r = t("./path"),
                                    i = t("./utils"),
                                    o = "Object is destroyed",
                                    a = function t(e, n) {
                                        if (!(this instanceof t))
                                            throw new Error(
                                                "Constructor was called without new keyword"
                                            );
                                        if (0 !== arguments.length) {
                                            (this._opts = i.extend(
                                                {
                                                    color: "#555",
                                                    strokeWidth: 1,
                                                    trailColor: null,
                                                    trailWidth: null,
                                                    fill: null,
                                                    text: {
                                                        style: {
                                                            color: null,
                                                            position:
                                                                "absolute",
                                                            left: "50%",
                                                            top: "50%",
                                                            padding: 0,
                                                            margin: 0,
                                                            transform: {
                                                                prefix: !0,
                                                                value: "translate(-50%, -50%)",
                                                            },
                                                        },
                                                        autoStyleContainer: !0,
                                                        alignToBottom: !0,
                                                        value: null,
                                                        className:
                                                            "progressbar-text",
                                                    },
                                                    svgStyle: {
                                                        display: "block",
                                                        width: "100%",
                                                    },
                                                    warnings: !1,
                                                },
                                                n,
                                                !0
                                            )),
                                                i.isObject(n) &&
                                                    void 0 !== n.svgStyle &&
                                                    (this._opts.svgStyle =
                                                        n.svgStyle),
                                                i.isObject(n) &&
                                                    i.isObject(n.text) &&
                                                    void 0 !== n.text.style &&
                                                    (this._opts.text.style =
                                                        n.text.style);
                                            var o,
                                                a = this._createSvgView(
                                                    this._opts
                                                );
                                            if (
                                                !(o = i.isString(e)
                                                    ? document.querySelector(e)
                                                    : e)
                                            )
                                                throw new Error(
                                                    "Container does not exist: " +
                                                        e
                                                );
                                            (this._container = o),
                                                this._container.appendChild(
                                                    a.svg
                                                ),
                                                this._opts.warnings &&
                                                    this._warnContainerAspectRatio(
                                                        this._container
                                                    ),
                                                this._opts.svgStyle &&
                                                    i.setStyles(
                                                        a.svg,
                                                        this._opts.svgStyle
                                                    ),
                                                (this.svg = a.svg),
                                                (this.path = a.path),
                                                (this.trail = a.trail),
                                                (this.text = null);
                                            var s = i.extend(
                                                {
                                                    attachment: void 0,
                                                    shape: this,
                                                },
                                                this._opts
                                            );
                                            (this._progressPath = new r(
                                                a.path,
                                                s
                                            )),
                                                i.isObject(this._opts.text) &&
                                                    null !==
                                                        this._opts.text.value &&
                                                    this.setText(
                                                        this._opts.text.value
                                                    );
                                        }
                                    };
                                (a.prototype.animate = function (t, e, n) {
                                    if (null === this._progressPath)
                                        throw new Error(o);
                                    this._progressPath.animate(t, e, n);
                                }),
                                    (a.prototype.stop = function () {
                                        if (null === this._progressPath)
                                            throw new Error(o);
                                        void 0 !== this._progressPath &&
                                            this._progressPath.stop();
                                    }),
                                    (a.prototype.pause = function () {
                                        if (null === this._progressPath)
                                            throw new Error(o);
                                        void 0 !== this._progressPath &&
                                            this._progressPath._tweenable &&
                                            this._progressPath._tweenable.pause();
                                    }),
                                    (a.prototype.resume = function () {
                                        if (null === this._progressPath)
                                            throw new Error(o);
                                        void 0 !== this._progressPath &&
                                            this._progressPath._tweenable &&
                                            this._progressPath._tweenable.resume();
                                    }),
                                    (a.prototype.destroy = function () {
                                        if (null === this._progressPath)
                                            throw new Error(o);
                                        this.stop(),
                                            this.svg.parentNode.removeChild(
                                                this.svg
                                            ),
                                            (this.svg = null),
                                            (this.path = null),
                                            (this.trail = null),
                                            (this._progressPath = null),
                                            null !== this.text &&
                                                (this.text.parentNode.removeChild(
                                                    this.text
                                                ),
                                                (this.text = null));
                                    }),
                                    (a.prototype.set = function (t) {
                                        if (null === this._progressPath)
                                            throw new Error(o);
                                        this._progressPath.set(t);
                                    }),
                                    (a.prototype.value = function () {
                                        if (null === this._progressPath)
                                            throw new Error(o);
                                        return void 0 === this._progressPath
                                            ? 0
                                            : this._progressPath.value();
                                    }),
                                    (a.prototype.setText = function (t) {
                                        if (null === this._progressPath)
                                            throw new Error(o);
                                        null === this.text &&
                                            ((this.text =
                                                this._createTextContainer(
                                                    this._opts,
                                                    this._container
                                                )),
                                            this._container.appendChild(
                                                this.text
                                            )),
                                            i.isObject(t)
                                                ? (i.removeChildren(this.text),
                                                  this.text.appendChild(t))
                                                : (this.text.innerHTML = t);
                                    }),
                                    (a.prototype._createSvgView = function (t) {
                                        var e = document.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            "svg"
                                        );
                                        this._initializeSvg(e, t);
                                        var n = null;
                                        (t.trailColor || t.trailWidth) &&
                                            ((n = this._createTrail(t)),
                                            e.appendChild(n));
                                        var r = this._createPath(t);
                                        return (
                                            e.appendChild(r),
                                            { svg: e, path: r, trail: n }
                                        );
                                    }),
                                    (a.prototype._initializeSvg = function (
                                        t,
                                        e
                                    ) {
                                        t.setAttribute(
                                            "viewBox",
                                            "0 0 100 100"
                                        );
                                    }),
                                    (a.prototype._createPath = function (t) {
                                        var e = this._pathString(t);
                                        return this._createPathElement(e, t);
                                    }),
                                    (a.prototype._createTrail = function (t) {
                                        var e = this._trailString(t),
                                            n = i.extend({}, t);
                                        return (
                                            n.trailColor ||
                                                (n.trailColor = "#eee"),
                                            n.trailWidth ||
                                                (n.trailWidth = n.strokeWidth),
                                            (n.color = n.trailColor),
                                            (n.strokeWidth = n.trailWidth),
                                            (n.fill = null),
                                            this._createPathElement(e, n)
                                        );
                                    }),
                                    (a.prototype._createPathElement = function (
                                        t,
                                        e
                                    ) {
                                        var n = document.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            "path"
                                        );
                                        return (
                                            n.setAttribute("d", t),
                                            n.setAttribute("stroke", e.color),
                                            n.setAttribute(
                                                "stroke-width",
                                                e.strokeWidth
                                            ),
                                            e.fill
                                                ? n.setAttribute("fill", e.fill)
                                                : n.setAttribute(
                                                      "fill-opacity",
                                                      "0"
                                                  ),
                                            n
                                        );
                                    }),
                                    (a.prototype._createTextContainer =
                                        function (t, e) {
                                            var n =
                                                document.createElement("div");
                                            n.className = t.text.className;
                                            var r = t.text.style;
                                            return (
                                                r &&
                                                    (t.text
                                                        .autoStyleContainer &&
                                                        (e.style.position =
                                                            "relative"),
                                                    i.setStyles(n, r),
                                                    r.color ||
                                                        (n.style.color =
                                                            t.color)),
                                                this._initializeTextContainer(
                                                    t,
                                                    e,
                                                    n
                                                ),
                                                n
                                            );
                                        }),
                                    (a.prototype._initializeTextContainer =
                                        function (t, e, n) {}),
                                    (a.prototype._pathString = function (t) {
                                        throw new Error(
                                            "Override this function for each progress bar"
                                        );
                                    }),
                                    (a.prototype._trailString = function (t) {
                                        throw new Error(
                                            "Override this function for each progress bar"
                                        );
                                    }),
                                    (a.prototype._warnContainerAspectRatio =
                                        function (t) {
                                            if (this.containerAspectRatio) {
                                                var e = window.getComputedStyle(
                                                        t,
                                                        null
                                                    ),
                                                    n = parseFloat(
                                                        e.getPropertyValue(
                                                            "width"
                                                        ),
                                                        10
                                                    ),
                                                    r = parseFloat(
                                                        e.getPropertyValue(
                                                            "height"
                                                        ),
                                                        10
                                                    );
                                                i.floatEquals(
                                                    this.containerAspectRatio,
                                                    n / r
                                                ) ||
                                                    (console.warn(
                                                        "Incorrect aspect ratio of container",
                                                        "#" + t.id,
                                                        "detected:",
                                                        e.getPropertyValue(
                                                            "width"
                                                        ) + "(width)",
                                                        "/",
                                                        e.getPropertyValue(
                                                            "height"
                                                        ) + "(height)",
                                                        "=",
                                                        n / r
                                                    ),
                                                    console.warn(
                                                        "Aspect ratio of should be",
                                                        this
                                                            .containerAspectRatio
                                                    ));
                                            }
                                        }),
                                    (e.exports = a);
                            },
                            { "./path": 5, "./utils": 9 },
                        ],
                        8: [
                            function (t, e, n) {
                                var r = t("./shape"),
                                    i = t("./utils"),
                                    o = function (t, e) {
                                        (this._pathTemplate =
                                            "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}"),
                                            (this._trailTemplate =
                                                "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}"),
                                            r.apply(this, arguments);
                                    };
                                ((o.prototype = new r()).constructor = o),
                                    (o.prototype._pathString = function (t) {
                                        var e = 100 - t.strokeWidth / 2;
                                        return i.render(this._pathTemplate, {
                                            width: e,
                                            strokeWidth: t.strokeWidth,
                                            halfOfStrokeWidth:
                                                t.strokeWidth / 2,
                                        });
                                    }),
                                    (o.prototype._trailString = function (t) {
                                        var e = 100 - t.strokeWidth / 2;
                                        return i.render(this._trailTemplate, {
                                            width: e,
                                            strokeWidth: t.strokeWidth,
                                            halfOfStrokeWidth:
                                                t.strokeWidth / 2,
                                            startMargin:
                                                t.strokeWidth / 2 -
                                                t.trailWidth / 2,
                                        });
                                    }),
                                    (e.exports = o);
                            },
                            { "./shape": 7, "./utils": 9 },
                        ],
                        9: [
                            function (t, e, n) {
                                var r = "Webkit Moz O ms".split(" "),
                                    i = 0.001;
                                function o(t, e, n) {
                                    for (
                                        var i = t.style, o = 0;
                                        o < r.length;
                                        ++o
                                    ) {
                                        i[r[o] + a(e)] = n;
                                    }
                                    i[e] = n;
                                }
                                function a(t) {
                                    return (
                                        t.charAt(0).toUpperCase() + t.slice(1)
                                    );
                                }
                                function s(t) {
                                    return (
                                        !(function (t) {
                                            return (
                                                "[object Array]" ===
                                                Object.prototype.toString.call(
                                                    t
                                                )
                                            );
                                        })(t) &&
                                        "object" ===
                                            (void 0 === t
                                                ? "undefined"
                                                : M()(t)) &&
                                        !!t
                                    );
                                }
                                function u(t, e) {
                                    for (var n in t) {
                                        if (t.hasOwnProperty(n)) e(t[n], n);
                                    }
                                }
                                e.exports = {
                                    extend: function t(e, n, r) {
                                        for (var i in ((e = e || {}),
                                        (n = n || {}),
                                        (r = r || !1),
                                        n))
                                            if (n.hasOwnProperty(i)) {
                                                var o = e[i],
                                                    a = n[i];
                                                r && s(o) && s(a)
                                                    ? (e[i] = t(o, a, r))
                                                    : (e[i] = a);
                                            }
                                        return e;
                                    },
                                    render: function (t, e) {
                                        var n = t;
                                        for (var r in e)
                                            if (e.hasOwnProperty(r)) {
                                                var i = e[r],
                                                    o = new RegExp(
                                                        "\\{" + r + "\\}",
                                                        "g"
                                                    );
                                                n = n.replace(o, i);
                                            }
                                        return n;
                                    },
                                    setStyle: o,
                                    setStyles: function (t, e) {
                                        u(e, function (e, n) {
                                            null !== e &&
                                                void 0 !== e &&
                                                (s(e) && !0 === e.prefix
                                                    ? o(t, n, e.value)
                                                    : (t.style[n] = e));
                                        });
                                    },
                                    capitalize: a,
                                    isString: function (t) {
                                        return (
                                            "string" == typeof t ||
                                            t instanceof String
                                        );
                                    },
                                    isFunction: function (t) {
                                        return "function" == typeof t;
                                    },
                                    isObject: s,
                                    forEachObject: u,
                                    floatEquals: function (t, e) {
                                        return Math.abs(t - e) < i;
                                    },
                                    removeChildren: function (t) {
                                        for (; t.firstChild; )
                                            t.removeChild(t.firstChild);
                                    },
                                };
                            },
                            {},
                        ],
                    },
                    {},
                    [4]
                )(4);
            });
        }.call(e, n(126)(t), n(66)));
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    Object.defineProperty(e, "exports", { enumerable: !0 }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function (t, e, n) {
        t.exports = { default: n(128), __esModule: !0 };
    },
    function (t, e, n) {
        n(30), n(23), n(129), n(135), n(137), (t.exports = n(0).WeakMap);
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(2),
            o = n(45)(0),
            a = n(36),
            s = n(27),
            u = n(132),
            c = n(133),
            l = n(5),
            f = n(50),
            d = n(50),
            p = !i.ActiveXObject && "ActiveXObject" in i,
            h = s.getWeak,
            v = Object.isExtensible,
            g = c.ufstore,
            m = function (t) {
                return function () {
                    return t(
                        this,
                        arguments.length > 0 ? arguments[0] : void 0
                    );
                };
            },
            y = {
                get: function (t) {
                    if (l(t)) {
                        var e = h(t);
                        return !0 === e
                            ? g(f(this, "WeakMap")).get(t)
                            : e
                            ? e[this._i]
                            : void 0;
                    }
                },
                set: function (t, e) {
                    return c.def(f(this, "WeakMap"), t, e);
                },
            },
            _ = (t.exports = n(134)("WeakMap", m, y, c, !0, !0));
        d &&
            p &&
            (u((r = c.getConstructor(m, "WeakMap")).prototype, y),
            (s.NEED = !0),
            o(["delete", "has", "get", "set"], function (t) {
                var e = _.prototype,
                    n = e[t];
                a(e, t, function (e, i) {
                    if (l(e) && !v(e)) {
                        this._f || (this._f = new r());
                        var o = this._f[t](e, i);
                        return "set" == t ? this : o;
                    }
                    return n.call(this, e, i);
                });
            }));
    },
    function (t, e, n) {
        var r = n(131);
        t.exports = function (t, e) {
            return new (r(t))(e);
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(61),
            o = n(3)("species");
        t.exports = function (t) {
            var e;
            return (
                i(t) &&
                    ("function" != typeof (e = t.constructor) ||
                        (e !== Array && !i(e.prototype)) ||
                        (e = void 0),
                    r(e) && null === (e = e[o]) && (e = void 0)),
                void 0 === e ? Array : e
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(7),
            i = n(20),
            o = n(28),
            a = n(29),
            s = n(15),
            u = n(38),
            c = Object.assign;
        t.exports =
            !c ||
            n(13)(function () {
                var t = {},
                    e = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                return (
                    (t[n] = 7),
                    r.split("").forEach(function (t) {
                        e[t] = t;
                    }),
                    7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
                );
            })
                ? function (t, e) {
                      for (
                          var n = s(t),
                              c = arguments.length,
                              l = 1,
                              f = o.f,
                              d = a.f;
                          c > l;

                      )
                          for (
                              var p,
                                  h = u(arguments[l++]),
                                  v = f ? i(h).concat(f(h)) : i(h),
                                  g = v.length,
                                  m = 0;
                              g > m;

                          )
                              (p = v[m++]),
                                  (r && !d.call(h, p)) || (n[p] = h[p]);
                      return n;
                  }
                : c;
    },
    function (t, e, n) {
        "use strict";
        var r = n(46),
            i = n(27).getWeak,
            o = n(6),
            a = n(5),
            s = n(47),
            u = n(31),
            c = n(45),
            l = n(10),
            f = n(50),
            d = c(5),
            p = c(6),
            h = 0,
            v = function (t) {
                return t._l || (t._l = new g());
            },
            g = function () {
                this.a = [];
            },
            m = function (t, e) {
                return d(t.a, function (t) {
                    return t[0] === e;
                });
            };
        (g.prototype = {
            get: function (t) {
                var e = m(this, t);
                if (e) return e[1];
            },
            has: function (t) {
                return !!m(this, t);
            },
            set: function (t, e) {
                var n = m(this, t);
                n ? (n[1] = e) : this.a.push([t, e]);
            },
            delete: function (t) {
                var e = p(this.a, function (e) {
                    return e[0] === t;
                });
                return ~e && this.a.splice(e, 1), !!~e;
            },
        }),
            (t.exports = {
                getConstructor: function (t, e, n, o) {
                    var c = t(function (t, r) {
                        s(t, c, e, "_i"),
                            (t._t = e),
                            (t._i = h++),
                            (t._l = void 0),
                            void 0 != r && u(r, n, t[o], t);
                    });
                    return (
                        r(c.prototype, {
                            delete: function (t) {
                                if (!a(t)) return !1;
                                var n = i(t);
                                return !0 === n
                                    ? v(f(this, e)).delete(t)
                                    : n && l(n, this._i) && delete n[this._i];
                            },
                            has: function (t) {
                                if (!a(t)) return !1;
                                var n = i(t);
                                return !0 === n
                                    ? v(f(this, e)).has(t)
                                    : n && l(n, this._i);
                            },
                        }),
                        c
                    );
                },
                def: function (t, e, n) {
                    var r = i(o(e), !0);
                    return !0 === r ? v(t).set(e, n) : (r[t._i] = n), t;
                },
                ufstore: v,
            });
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(4),
            o = n(27),
            a = n(13),
            s = n(9),
            u = n(46),
            c = n(31),
            l = n(47),
            f = n(5),
            d = n(22),
            p = n(8).f,
            h = n(45)(0),
            v = n(7);
        t.exports = function (t, e, n, g, m, y) {
            var _ = r[t],
                b = _,
                w = m ? "set" : "add",
                x = b && b.prototype,
                C = {};
            return (
                v &&
                "function" == typeof b &&
                (y ||
                    (x.forEach &&
                        !a(function () {
                            new b().entries().next();
                        })))
                    ? ((b = e(function (e, n) {
                          l(e, b, t, "_c"),
                              (e._c = new _()),
                              void 0 != n && c(n, m, e[w], e);
                      })),
                      h(
                          "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                              ","
                          ),
                          function (t) {
                              var e = "add" == t || "set" == t;
                              t in x &&
                                  (!y || "clear" != t) &&
                                  s(b.prototype, t, function (n, r) {
                                      if ((l(this, b, t), !e && y && !f(n)))
                                          return "get" == t && void 0;
                                      var i = this._c[t](0 === n ? 0 : n, r);
                                      return e ? this : i;
                                  });
                          }
                      ),
                      y ||
                          p(b.prototype, "size", {
                              get: function () {
                                  return this._c.size;
                              },
                          }))
                    : ((b = g.getConstructor(e, t, m, w)),
                      u(b.prototype, n),
                      (o.NEED = !0)),
                d(b, t),
                (C[t] = b),
                i(i.G + i.W + i.F, C),
                y || g.setStrong(b, t, m),
                b
            );
        };
    },
    function (t, e, n) {
        n(136)("WeakMap");
    },
    function (t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = function (t) {
            r(r.S, t, {
                of: function () {
                    for (var t = arguments.length, e = new Array(t); t--; )
                        e[t] = arguments[t];
                    return new this(e);
                },
            });
        };
    },
    function (t, e, n) {
        n(138)("WeakMap");
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            i = n(18),
            o = n(12),
            a = n(31);
        t.exports = function (t) {
            r(r.S, t, {
                from: function (t) {
                    var e,
                        n,
                        r,
                        s,
                        u = arguments[1];
                    return (
                        i(this),
                        (e = void 0 !== u) && i(u),
                        void 0 == t
                            ? new this()
                            : ((n = []),
                              e
                                  ? ((r = 0),
                                    (s = o(u, arguments[2], 2)),
                                    a(t, !1, function (t) {
                                        n.push(s(t, r++));
                                    }))
                                  : a(t, !1, n.push, n),
                              new this(n))
                    );
                },
            });
        };
    },
    function (t, e, n) {
        t.exports = { default: n(140), __esModule: !0 };
    },
    function (t, e, n) {
        n(16), n(141), (t.exports = n(0).Array.from);
    },
    function (t, e, n) {
        "use strict";
        var r = n(12),
            i = n(4),
            o = n(15),
            a = n(68),
            s = n(69),
            u = n(24),
            c = n(70),
            l = n(48);
        i(
            i.S +
                i.F *
                    !n(71)(function (t) {
                        Array.from(t);
                    }),
            "Array",
            {
                from: function (t) {
                    var e,
                        n,
                        i,
                        f,
                        d = o(t),
                        p = "function" == typeof this ? this : Array,
                        h = arguments.length,
                        v = h > 1 ? arguments[1] : void 0,
                        g = void 0 !== v,
                        m = 0,
                        y = l(d);
                    if (
                        (g && (v = r(v, h > 2 ? arguments[2] : void 0, 2)),
                        void 0 == y || (p == Array && s(y)))
                    )
                        for (n = new p((e = u(d.length))); e > m; m++)
                            c(n, m, g ? v(d[m], m) : d[m]);
                    else
                        for (
                            f = y.call(d), n = new p();
                            !(i = f.next()).done;
                            m++
                        )
                            c(n, m, g ? a(f, v, [i.value, m], !0) : i.value);
                    return (n.length = m), n;
                },
            }
        );
    },
    function (t, e, n) {
        t.exports = { default: n(143), __esModule: !0 };
    },
    function (t, e, n) {
        n(23), n(16), (t.exports = n(144));
    },
    function (t, e, n) {
        var r = n(49),
            i = n(3)("iterator"),
            o = n(14);
        t.exports = n(0).isIterable = function (t) {
            var e = Object(t);
            return (
                void 0 !== e[i] || "@@iterator" in e || o.hasOwnProperty(r(e))
            );
        };
    },
    function (t, e, n) {
        t.exports = { default: n(146), __esModule: !0 };
    },
    function (t, e, n) {
        n(30), n(16), n(23), n(147), n(152), n(153), (t.exports = n(0).Promise);
    },
    function (t, e, n) {
        "use strict";
        var r,
            i,
            o,
            a,
            s = n(17),
            u = n(2),
            c = n(12),
            l = n(49),
            f = n(4),
            d = n(5),
            p = n(18),
            h = n(47),
            v = n(31),
            g = n(72),
            m = n(73).set,
            y = n(149)(),
            _ = n(51),
            b = n(74),
            w = n(150),
            x = n(75),
            C = u.TypeError,
            k = u.process,
            T = k && k.versions,
            S = (T && T.v8) || "",
            A = u.Promise,
            O = "process" == l(k),
            E = function () {},
            j = (i = _.f),
            P = !!(function () {
                try {
                    var t = A.resolve(1),
                        e = ((t.constructor = {})[n(3)("species")] = function (
                            t
                        ) {
                            t(E, E);
                        });
                    return (
                        (O || "function" == typeof PromiseRejectionEvent) &&
                        t.then(E) instanceof e &&
                        0 !== S.indexOf("6.6") &&
                        -1 === w.indexOf("Chrome/66")
                    );
                } catch (t) {}
            })(),
            D = function (t) {
                var e;
                return !(!d(t) || "function" != typeof (e = t.then)) && e;
            },
            I = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    y(function () {
                        for (
                            var r = t._v,
                                i = 1 == t._s,
                                o = 0,
                                a = function (e) {
                                    var n,
                                        o,
                                        a,
                                        s = i ? e.ok : e.fail,
                                        u = e.resolve,
                                        c = e.reject,
                                        l = e.domain;
                                    try {
                                        s
                                            ? (i ||
                                                  (2 == t._h && L(t),
                                                  (t._h = 1)),
                                              !0 === s
                                                  ? (n = r)
                                                  : (l && l.enter(),
                                                    (n = s(r)),
                                                    l && (l.exit(), (a = !0))),
                                              n === e.promise
                                                  ? c(C("Promise-chain cycle"))
                                                  : (o = D(n))
                                                  ? o.call(n, u, c)
                                                  : u(n))
                                            : c(r);
                                    } catch (t) {
                                        l && !a && l.exit(), c(t);
                                    }
                                };
                            n.length > o;

                        )
                            a(n[o++]);
                        (t._c = []), (t._n = !1), e && !t._h && N(t);
                    });
                }
            },
            N = function (t) {
                m.call(u, function () {
                    var e,
                        n,
                        r,
                        i = t._v,
                        o = M(t);
                    if (
                        (o &&
                            ((e = b(function () {
                                O
                                    ? k.emit("unhandledRejection", i, t)
                                    : (n = u.onunhandledrejection)
                                    ? n({ promise: t, reason: i })
                                    : (r = u.console) &&
                                      r.error &&
                                      r.error("Unhandled promise rejection", i);
                            })),
                            (t._h = O || M(t) ? 2 : 1)),
                        (t._a = void 0),
                        o && e.e)
                    )
                        throw e.v;
                });
            },
            M = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            },
            L = function (t) {
                m.call(u, function () {
                    var e;
                    O
                        ? k.emit("rejectionHandled", t)
                        : (e = u.onrejectionhandled) &&
                          e({ promise: t, reason: t._v });
                });
            },
            F = function (t) {
                var e = this;
                e._d ||
                    ((e._d = !0),
                    ((e = e._w || e)._v = t),
                    (e._s = 2),
                    e._a || (e._a = e._c.slice()),
                    I(e, !0));
            },
            q = function (t) {
                var e,
                    n = this;
                if (!n._d) {
                    (n._d = !0), (n = n._w || n);
                    try {
                        if (n === t)
                            throw C("Promise can't be resolved itself");
                        (e = D(t))
                            ? y(function () {
                                  var r = { _w: n, _d: !1 };
                                  try {
                                      e.call(t, c(q, r, 1), c(F, r, 1));
                                  } catch (t) {
                                      F.call(r, t);
                                  }
                              })
                            : ((n._v = t), (n._s = 1), I(n, !1));
                    } catch (t) {
                        F.call({ _w: n, _d: !1 }, t);
                    }
                }
            };
        P ||
            ((A = function (t) {
                h(this, A, "Promise", "_h"), p(t), r.call(this);
                try {
                    t(c(q, this, 1), c(F, this, 1));
                } catch (t) {
                    F.call(this, t);
                }
            }),
            ((r = function (t) {
                (this._c = []),
                    (this._a = void 0),
                    (this._s = 0),
                    (this._d = !1),
                    (this._v = void 0),
                    (this._h = 0),
                    (this._n = !1);
            }).prototype = n(46)(A.prototype, {
                then: function (t, e) {
                    var n = j(g(this, A));
                    return (
                        (n.ok = "function" != typeof t || t),
                        (n.fail = "function" == typeof e && e),
                        (n.domain = O ? k.domain : void 0),
                        this._c.push(n),
                        this._a && this._a.push(n),
                        this._s && I(this, !1),
                        n.promise
                    );
                },
                catch: function (t) {
                    return this.then(void 0, t);
                },
            })),
            (o = function () {
                var t = new r();
                (this.promise = t),
                    (this.resolve = c(q, t, 1)),
                    (this.reject = c(F, t, 1));
            }),
            (_.f = j =
                function (t) {
                    return t === A || t === a ? new o(t) : i(t);
                })),
            f(f.G + f.W + f.F * !P, { Promise: A }),
            n(22)(A, "Promise"),
            n(151)("Promise"),
            (a = n(0).Promise),
            f(f.S + f.F * !P, "Promise", {
                reject: function (t) {
                    var e = j(this);
                    return (0, e.reject)(t), e.promise;
                },
            }),
            f(f.S + f.F * (s || !P), "Promise", {
                resolve: function (t) {
                    return x(s && this === a ? A : this, t);
                },
            }),
            f(
                f.S +
                    f.F *
                        !(
                            P &&
                            n(71)(function (t) {
                                A.all(t).catch(E);
                            })
                        ),
                "Promise",
                {
                    all: function (t) {
                        var e = this,
                            n = j(e),
                            r = n.resolve,
                            i = n.reject,
                            o = b(function () {
                                var n = [],
                                    o = 0,
                                    a = 1;
                                v(t, !1, function (t) {
                                    var s = o++,
                                        u = !1;
                                    n.push(void 0),
                                        a++,
                                        e.resolve(t).then(function (t) {
                                            u ||
                                                ((u = !0),
                                                (n[s] = t),
                                                --a || r(n));
                                        }, i);
                                }),
                                    --a || r(n);
                            });
                        return o.e && i(o.v), n.promise;
                    },
                    race: function (t) {
                        var e = this,
                            n = j(e),
                            r = n.reject,
                            i = b(function () {
                                v(t, !1, function (t) {
                                    e.resolve(t).then(n.resolve, r);
                                });
                            });
                        return i.e && r(i.v), n.promise;
                    },
                }
            );
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r
                        ? t(e[0], e[1], e[2])
                        : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r
                        ? t(e[0], e[1], e[2], e[3])
                        : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    },
    function (t, e, n) {
        var r = n(2),
            i = n(73).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            s = r.Promise,
            u = "process" == n(21)(a);
        t.exports = function () {
            var t,
                e,
                n,
                c = function () {
                    var r, i;
                    for (u && (r = a.domain) && r.exit(); t; ) {
                        (i = t.fn), (t = t.next);
                        try {
                            i();
                        } catch (r) {
                            throw (t ? n() : (e = void 0), r);
                        }
                    }
                    (e = void 0), r && r.enter();
                };
            if (u)
                n = function () {
                    a.nextTick(c);
                };
            else if (!o || (r.navigator && r.navigator.standalone))
                if (s && s.resolve) {
                    var l = s.resolve(void 0);
                    n = function () {
                        l.then(c);
                    };
                } else
                    n = function () {
                        i.call(r, c);
                    };
            else {
                var f = !0,
                    d = document.createTextNode("");
                new o(c).observe(d, { characterData: !0 }),
                    (n = function () {
                        d.data = f = !f;
                    });
            }
            return function (r) {
                var i = { fn: r, next: void 0 };
                e && (e.next = i), t || ((t = i), n()), (e = i);
            };
        };
    },
    function (t, e, n) {
        var r = n(2).navigator;
        t.exports = (r && r.userAgent) || "";
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(0),
            o = n(8),
            a = n(7),
            s = n(3)("species");
        t.exports = function (t) {
            var e = "function" == typeof i[t] ? i[t] : r[t];
            a &&
                e &&
                !e[s] &&
                o.f(e, s, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            i = n(0),
            o = n(2),
            a = n(72),
            s = n(75);
        r(r.P + r.R, "Promise", {
            finally: function (t) {
                var e = a(this, i.Promise || o.Promise),
                    n = "function" == typeof t;
                return this.then(
                    n
                        ? function (n) {
                              return s(e, t()).then(function () {
                                  return n;
                              });
                          }
                        : t,
                    n
                        ? function (n) {
                              return s(e, t()).then(function () {
                                  throw n;
                              });
                          }
                        : t
                );
            },
        });
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            i = n(51),
            o = n(74);
        r(r.S, "Promise", {
            try: function (t) {
                var e = i.f(this),
                    n = o(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise;
            },
        });
    },
    function (t, e, n) {
        t.exports = { default: n(155), __esModule: !0 };
    },
    function (t, e, n) {
        n(23), n(16), (t.exports = n(156));
    },
    function (t, e, n) {
        var r = n(6),
            i = n(48);
        t.exports = n(0).getIterator = function (t) {
            var e = i(t);
            if ("function" != typeof e)
                throw TypeError(t + " is not iterable!");
            return r(e.call(t));
        };
    },
    function (t, e, n) {
        t.exports = { default: n(158), __esModule: !0 };
    },
    function (t, e, n) {
        n(159);
        var r = n(0).Object;
        t.exports = function (t, e) {
            return r.defineProperties(t, e);
        };
    },
    function (t, e, n) {
        var r = n(4);
        r(r.S + r.F * !n(7), "Object", { defineProperties: n(56) });
    },
    function (t, e, n) {
        t.exports = { default: n(161), __esModule: !0 };
    },
    function (t, e, n) {
        n(162), (t.exports = n(0).Object.getOwnPropertyDescriptors);
    },
    function (t, e, n) {
        var r = n(4),
            i = n(163),
            o = n(11),
            a = n(44),
            s = n(70);
        r(r.S, "Object", {
            getOwnPropertyDescriptors: function (t) {
                for (
                    var e, n, r = o(t), u = a.f, c = i(r), l = {}, f = 0;
                    c.length > f;

                )
                    void 0 !== (n = u(r, (e = c[f++]))) && s(l, e, n);
                return l;
            },
        });
    },
    function (t, e, n) {
        var r = n(43),
            i = n(28),
            o = n(6),
            a = n(2).Reflect;
        t.exports =
            (a && a.ownKeys) ||
            function (t) {
                var e = r.f(o(t)),
                    n = i.f;
                return n ? e.concat(n(t)) : e;
            };
    },
    function (t, e, n) {
        t.exports = { default: n(165), __esModule: !0 };
    },
    function (t, e, n) {
        n(166);
        var r = n(0).Object;
        t.exports = function (t, e) {
            return r.getOwnPropertyDescriptor(t, e);
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(44).f;
        n(76)("getOwnPropertyDescriptor", function () {
            return function (t, e) {
                return i(r(t), e);
            };
        });
    },
    function (t, e, n) {
        t.exports = { default: n(168), __esModule: !0 };
    },
    function (t, e, n) {
        n(60), (t.exports = n(0).Object.getOwnPropertySymbols);
    },
    function (t, e, n) {
        t.exports = { default: n(170), __esModule: !0 };
    },
    function (t, e, n) {
        n(171), (t.exports = n(0).Object.keys);
    },
    function (t, e, n) {
        var r = n(15),
            i = n(20);
        n(76)("keys", function () {
            return function (t) {
                return i(r(t));
            };
        });
    },
    function (t, e, n) {
        t.exports = { default: n(173), __esModule: !0 };
    },
    function (t, e, n) {
        n(174);
        var r = n(0).Object;
        t.exports = function (t, e) {
            return r.create(t, e);
        };
    },
    function (t, e, n) {
        var r = n(4);
        r(r.S, "Object", { create: n(37) });
    },
    function (t, e, n) {
        t.exports = { default: n(176), __esModule: !0 };
    },
    function (t, e, n) {
        n(30), (t.exports = n(26).f("toStringTag"));
    },
]);
