(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var m = this || self;
  function aa(a) {
    a = a.o;
    const b = encodeURIComponent;
    let c = "";
    a.platform && (c += "&uap=" + b(a.platform));
    a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
    a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
    a.architecture && (c += "&uaa=" + b(a.architecture));
    a.model && (c += "&uam=" + b(a.model));
    a.bitness && (c += "&uab=" + b(a.bitness));
    a.fullVersionList &&
      (c +=
        "&uafvl=" +
        b(
          a.fullVersionList
            .map((d) => b(d.brand) + ";" + b(d.version))
            .join("|"),
        ));
    "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
    return c;
  }
  function ba(a, b) {
    return a.g ? a.l.slice(0, a.g.index) + b + a.l.slice(a.g.index) : a.l + b;
  }
  function ca(a) {
    let b = "&act=1&ri=1";
    a.h && a.o && (b += aa(a));
    return ba(a, b);
  }
  function da(a, b) {
    return (a.h && a.i) || a.m
      ? 1 == b
        ? a.h
          ? a.i
          : ba(a, "&dct=1")
        : 2 == b
          ? ba(a, "&ri=2")
          : ba(a, "&ri=16")
      : a.l;
  }
  var ea = class {
    constructor({ url: a, P: b }) {
      this.l = a;
      this.o = b;
      b = /[?&]dsh=1(&|$)/.test(a);
      this.h = !b && /[?&]ae=1(&|$)/.test(a);
      this.m = !b && /[?&]ae=2(&|$)/.test(a);
      if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
        let c;
        try {
          c = decodeURIComponent(this.g[1]);
        } catch (d) {
          c = null;
        }
        this.i = c;
      }
    }
  };
  var r = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g.toString();
    }
  };
  r.prototype.h = !0;
  var fa;
  try {
    new URL("s://g"), (fa = !0);
  } catch (a) {
    fa = !1;
  }
  var ha = fa,
    ia = {},
    ka = new r("about:invalid#zClosurez", ia);
  function la(a, b) {
    a: {
      const c = a.length,
        d = "string" === typeof a ? a.split("") : a;
      for (let e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function ma(a) {
    let b = 0;
    for (const c in a) b++;
  }
  var na, oa;
  a: {
    for (var pa = ["CLOSURE_FLAGS"], qa = m, ra = 0; ra < pa.length; ra++)
      if (((qa = qa[pa[ra]]), null == qa)) {
        oa = null;
        break a;
      }
    oa = qa;
  }
  var sa = oa && oa[610401301];
  na = null != sa ? sa : !1;
  var ta;
  const ua = m.navigator;
  ta = ua ? ua.userAgentData || null : null;
  function va(a) {
    return na
      ? ta
        ? ta.brands.some(({ brand: b }) => b && -1 != b.indexOf(a))
        : !1
      : !1;
  }
  function t(a) {
    var b;
    a: {
      if ((b = m.navigator)) if ((b = b.userAgent)) break a;
      b = "";
    }
    return -1 != b.indexOf(a);
  }
  function v() {
    return na ? !!ta && 0 < ta.brands.length : !1;
  }
  function wa() {
    return v()
      ? va("Chromium")
      : ((t("Chrome") || t("CriOS")) && !(v() ? 0 : t("Edge"))) || t("Silk");
  }
  function xa(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  } /*

 SPDX-License-Identifier: Apache-2.0
*/
  class ya {
    constructor(a) {
      this.Y = a;
    }
  }
  function w(a) {
    return new ya((b) => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const za = new ya((a) => /^[^:]*([/?#]|$)/.test(a));
  var Aa = w("http"),
    Ba = w("https"),
    Ca = w("ftp"),
    Da = w("mailto"),
    Ea = w("intent"),
    Fa = w("market"),
    Ga = w("itms"),
    Ha = w("itms-appss");
  const Ia = [w("data"), Aa, Ba, Da, Ca, za];
  function Ja(a, b = Ia) {
    if (a instanceof r) return a;
    for (let c = 0; c < b.length; ++c) {
      const d = b[c];
      if (d instanceof ya && d.Y(a)) return new r(a, ia);
    }
  }
  function Ka(a, b = Ia) {
    return Ja(a, b) || ka;
  }
  function La(a) {
    m.setTimeout(() => {
      throw a;
    }, 0);
  }
  function Ma() {
    return t("iPhone") && !t("iPod") && !t("iPad");
  }
  function Na(a) {
    Na[" "](a);
    return a;
  }
  Na[" "] = function () {};
  var Oa = Ma(),
    Pa = t("iPad");
  var Qa = Ma() || t("iPod"),
    Ra = t("iPad");
  !t("Android") || wa();
  wa();
  t("Safari") &&
    (wa() ||
      (v() ? 0 : t("Coast")) ||
      (v() ? 0 : t("Opera")) ||
      (v() ? 0 : t("Edge")) ||
      (v() ? va("Microsoft Edge") : t("Edg/")) ||
      (v() && va("Opera")));
  var Sa = {},
    Ta = null;
  function y(a) {
    return Array.prototype.slice.call(a);
  }
  const z = Symbol();
  function Ua(a) {
    const b = a[z] | 0;
    1 !== (b & 1) && (Object.isFrozen(a) && (a = y(a)), (a[z] = b | 1));
  }
  function B(a, b, c) {
    return c ? a | b : a & ~b;
  }
  function Va() {
    var a = [];
    a[z] |= 1;
    return a;
  }
  function C(a) {
    a[z] |= 34;
    return a;
  }
  function Wa(a, b) {
    b[z] = (a | 0) & -2303;
  }
  function Xa(a, b) {
    b[z] = (a | 34) & -2269;
  }
  function Ya(a) {
    a = (a >> 12) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var Za = {};
  function $a(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  let ab;
  var D;
  const bb = [];
  bb[z] = 55;
  D = Object.freeze(bb);
  function cb(a) {
    if (a & 2) throw Error();
  }
  class db {
    constructor(a, b, c) {
      this.i = 0;
      this.g = a;
      this.h = b;
      this.l = c;
    }
    next() {
      if (this.i < this.g.length) {
        const a = this.g[this.i++];
        return { done: !1, value: this.h ? this.h.call(this.l, a) : a };
      }
      return { done: !0, value: void 0 };
    }
    [Symbol.iterator]() {
      return new db(this.g, this.h, this.l);
    }
  }
  var eb = {};
  function fb() {
    const a = Error();
    xa(a, "incident");
    return a;
  }
  function gb(a) {
    if (!Number.isFinite(a)) {
      const b = fb();
      La(b);
    }
    return a;
  }
  function ib(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return a;
  }
  function E(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function jb(a, b, c, d) {
    if (null != a && "object" === typeof a && a.C === Za) return a;
    if (!Array.isArray(a))
      return (
        c
          ? d & 2
            ? (a = b[kb])
              ? (b = a)
              : ((a = new b()), C(a.j), (b = b[kb] = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    let e = (c = a[z] | 0);
    0 === e && (e |= d & 32);
    e |= d & 2;
    e !== c && (a[z] = e);
    return new b(a);
  }
  const kb = Symbol();
  function lb(a) {
    return a;
  }
  function nb(a, b, c) {
    return "string" === typeof a ? a : c ? "" : void 0;
  }
  let ob;
  function pb(a) {
    if (a.h & 2) throw Error("Cannot mutate an immutable Map");
  }
  var G = class extends Map {
    constructor(a, b, c = lb, d = lb) {
      super();
      let e = a[z] | 0;
      e |= 64;
      this.h = a[z] = e;
      this.i = b;
      this.g = c || lb;
      this.m = this.i ? qb : d || lb;
      for (let f = 0; f < a.length; f++) {
        const h = a[f],
          g = c(h[0], !1, !0);
        let k = h[1];
        b
          ? void 0 === k && (k = null)
          : (k = d(h[1], !1, !0, void 0, void 0, e));
        super.set(g, k);
      }
    }
    s(a = rb) {
      return this.l(a);
    }
    l(a = rb) {
      const b = [],
        c = super.entries();
      for (var d; !(d = c.next()).done; )
        (d = d.value), (d[0] = a(d[0])), (d[1] = a(d[1])), b.push(d);
      return b;
    }
    clear() {
      pb(this);
      super.clear();
    }
    delete(a) {
      pb(this);
      return super.delete(this.g(a, !0, !1));
    }
    entries() {
      var a = this.o();
      return new db(a, sb, this);
    }
    keys() {
      return this.v();
    }
    values() {
      var a = this.o();
      return new db(a, G.prototype.get, this);
    }
    forEach(a, b) {
      super.forEach((c, d) => {
        a.call(b, this.get(d), d, this);
      });
    }
    set(a, b) {
      pb(this);
      a = this.g(a, !0, !1);
      return null == a
        ? this
        : null == b
          ? (super.delete(a), this)
          : super.set(a, this.m(b, !0, !0, this.i, !1, this.h));
    }
    has(a) {
      return super.has(this.g(a, !1, !1));
    }
    get(a) {
      a = this.g(a, !1, !1);
      const b = super.get(a);
      if (void 0 !== b) {
        var c = this.i;
        return c
          ? ((c = this.m(b, !1, !0, c, this.u, this.h)),
            c !== b && super.set(a, c),
            c)
          : b;
      }
    }
    o() {
      return Array.from(super.keys());
    }
    v() {
      return super.keys();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  G.prototype.toJSON = void 0;
  function qb(a, b, c, d, e, f) {
    a = jb(a, d, c, f);
    e && (a = tb(a));
    return a;
  }
  function rb(a) {
    return a;
  }
  function sb(a) {
    return [a, this.get(a)];
  }
  function ub(a, b) {
    return yb(b);
  }
  function yb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a && !Array.isArray(a)) {
          if (null != a && a instanceof Uint8Array) {
            let b = "",
              c = 0;
            const d = a.length - 10240;
            for (; c < d; )
              b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
            return btoa(b);
          }
          if (a instanceof G) return a.s();
        }
    }
    return a;
  }
  function zb(a, b, c) {
    a = y(a);
    var d = a.length;
    const e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (const f in e) b[f] = c(e[f]);
    }
    return a;
  }
  function Ab(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a))
        a =
          e && 0 == a.length && (a[z] | 0) & 1
            ? void 0
            : f && (a[z] | 0) & 2
              ? a
              : Bb(a, b, c, void 0 !== d, e, f);
      else if ($a(a)) {
        const h = {};
        for (let g in a) h[g] = Ab(a[g], b, c, d, e, f);
        a = h;
      } else a = b(a, d);
      return a;
    }
  }
  function Bb(a, b, c, d, e, f) {
    const h = d || c ? a[z] | 0 : 0;
    d = d ? !!(h & 32) : void 0;
    a = y(a);
    for (let g = 0; g < a.length; g++) a[g] = Ab(a[g], b, c, d, e, f);
    c && c(h, a);
    return a;
  }
  function Cb(a) {
    return Ab(a, Db, void 0, void 0, !1, !1);
  }
  function Db(a) {
    return a.C === Za ? a.toJSON() : a instanceof G ? a.s(Cb) : yb(a);
  }
  function Eb(a, b, c = Xa) {
    if (null != a) {
      if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = a[z] | 0;
        if (d & 2) return a;
        b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b
          ? ((a[z] = (d | 34) & -5), a)
          : Bb(a, Eb, d & 4 ? Xa : c, !0, !1, !0);
      }
      a.C === Za
        ? ((c = a.j), (d = c[z]), (a = d & 2 ? a : Fb(a, c, d, !0)))
        : a instanceof G && ((c = C(a.l(Eb))), (a = new G(c, a.i, a.g, a.m)));
      return a;
    }
  }
  function Gb(a) {
    const b = a.j;
    return Fb(a, b, b[z], !1);
  }
  function Fb(a, b, c, d) {
    a = a.constructor;
    ob = b = Hb(b, c, d);
    b = new a(b);
    ob = void 0;
    return b;
  }
  function Hb(a, b, c) {
    const d = c || b & 2 ? Xa : Wa,
      e = !!(b & 32);
    a = zb(a, b, (f) => Eb(f, e, d));
    a[z] = a[z] | 32 | (c ? 2 : 0);
    return a;
  }
  function tb(a) {
    const b = a.j,
      c = b[z];
    return c & 2 ? Fb(a, b, c, !1) : a;
  }
  Object.freeze({});
  function H(a, b) {
    a = a.j;
    return Ib(a, a[z], b);
  }
  function Ib(a, b, c, d) {
    if (-1 === c) return null;
    if (c >= Ya(b)) {
      if (b & 256) return a[a.length - 1][c];
    } else {
      var e = a.length;
      if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
      b = c + (+!!(b & 512) - 1);
      if (b < e) return a[b];
    }
  }
  function Jb(a, b, c) {
    const d = a.j;
    let e = d[z];
    cb(e);
    I(d, e, b, c);
    return a;
  }
  function I(a, b, c, d, e) {
    var f = Ya(b);
    if (c >= f || e) {
      e = b;
      if (b & 256) f = a[a.length - 1];
      else {
        if (null == d) return e;
        f = a[f + (+!!(b & 512) - 1)] = {};
        e |= 256;
      }
      f[c] = d;
      e !== b && (a[z] = e);
      return e;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    return b;
  }
  function Kb(a, b, c, d, e) {
    var f = b & 2;
    let h = Ib(a, b, c, e);
    Array.isArray(h) || (h = D);
    const g = !(d & 2);
    d = !(d & 1);
    const k = !!(b & 32);
    let l = h[z] | 0;
    0 !== l || !k || f || g
      ? l & 1 || ((l |= 1), (h[z] = l))
      : ((l |= 33), (h[z] = l));
    f
      ? ((a = !1),
        l & 2 || (C(h), (a = !!(4 & l))),
        (d || a) && Object.freeze(h))
      : ((f = !!(2 & l) || !!(2048 & l)),
        d && f
          ? ((h = y(h)),
            (d = 1),
            k && !g && (d |= 32),
            (h[z] = d),
            I(a, b, c, h, e))
          : g && l & 32 && !f && (h[z] &= -33));
    return h;
  }
  function Lb(a, b) {
    var c = 2;
    a = a.j;
    let d = a[z];
    2 & d && (c = 1);
    let e = Kb(a, d, b, 1);
    d = a[z];
    let f = e[z] | 0,
      h = f,
      g = !!(2 & f);
    var k = !!(4 & f),
      l = g && k;
    if (!k) {
      Object.isFrozen(e) &&
        ((e = y(e)),
        (h = 0),
        (f = Mb(f, d, !1)),
        (g = !!(2 & f)),
        (d = I(a, d, b, e)));
      let n = (k = 0);
      for (; k < e.length; k++) {
        const p = E(e[k]);
        null != p && (e[n++] = p);
      }
      n < k && (e.length = n);
      f = B(f, 20, !0);
    }
    l ||
      ((l = 1 === c) && (f = B(f, 2, !0)),
      f !== h && (e[z] = f),
      (l || g) && Object.freeze(e));
    2 === c && g && ((e = y(e)), (f = Mb(f, d, !1)), (e[z] = f), I(a, d, b, e));
    return e;
  }
  let Nb;
  function Ob() {
    let a;
    return null != (a = Nb)
      ? a
      : (Nb = new G(C([]), void 0, void 0, void 0, eb));
  }
  function Pb(a, b, c, d, e, f) {
    const h = b & 2;
    a: {
      var g = c,
        k = b & 2;
      c = !1;
      if (null == g) {
        if (k) {
          a = Ob();
          break a;
        }
        g = [];
      } else if (g.constructor === G) {
        if (0 == (g.h & 2) || k) {
          a = g;
          break a;
        }
        g = g.l();
      } else Array.isArray(g) ? (c = !!((g[z] | 0) & 2)) : (g = []);
      if (k) {
        if (!g.length) {
          a = Ob();
          break a;
        }
        c || ((c = !0), C(g));
      } else if (c) {
        c = !1;
        k = y(g);
        for (g = 0; g < k.length; g++) {
          const l = (k[g] = y(k[g]));
          Array.isArray(l[1]) && (l[1] = C(l[1]));
        }
        g = k;
      }
      c || ((g[z] | 0) & 64 ? (g[z] &= -33) : 32 & b && (g[z] |= 32));
      f = new G(g, e, nb, f);
      I(a, b, d, f, !1);
      a = f;
    }
    if (null == a) return a;
    !h && e && (a.u = !0);
    return a;
  }
  function Qb(a, b) {
    a = a.j;
    const c = a[z];
    return Pb(a, c, Ib(a, c, b), b, void 0, nb);
  }
  function J(a, b, c) {
    a = a.j;
    let d = a[z];
    const e = Ib(a, d, c, !1);
    b = jb(e, b, !1, d);
    b !== e && null != b && I(a, d, c, b, !1);
    return b;
  }
  function K(a, b, c) {
    b = J(a, b, c);
    if (null == b) return b;
    a = a.j;
    let d = a[z];
    if (!(d & 2)) {
      const e = tb(b);
      e !== b && ((b = e), I(a, d, c, b, !1));
    }
    return b;
  }
  function Rb(a) {
    a = a.j;
    var b = a[z],
      c = !!(2 & b),
      d = c ? 1 : 2,
      e = Sb;
    const f = 1 === d;
    d = 2 === d;
    var h = !!(2 & b) && d;
    let g = Kb(a, b, 7, 3);
    b = a[z];
    var k = g[z] | 0,
      l = !!(2 & k);
    const n = !!(4 & k),
      p = !!(32 & k);
    let q = (l && n) || !!(2048 & k);
    if (!n) {
      var u = g,
        F = b;
      const A = !!(2 & k);
      A && (F = B(F, 2, !0));
      let V = !A,
        W = !0,
        P = 0,
        X = 0;
      for (; P < u.length; P++) {
        const x = jb(u[P], e, !1, F);
        if (x instanceof e) {
          if (!A) {
            const Q = !!((x.j[z] | 0) & 2);
            V && (V = !Q);
            W && (W = Q);
          }
          u[X++] = x;
        }
      }
      X < P && (u.length = X);
      k = B(k, 4, !0);
      k = B(k, 16, W);
      k = B(k, 8, V);
      u[z] = k;
      l && !h && (Object.freeze(g), (q = !0));
    }
    e = k;
    h = !!(8 & k) || (f && !g.length);
    if (!c && !h) {
      q &&
        ((g = y(g)),
        (q = !1),
        (e = 0),
        (k = Mb(k, b, !1)),
        (b = I(a, b, 7, g)));
      c = g;
      h = k;
      for (l = 0; l < c.length; l++)
        (u = c[l]), (k = tb(u)), u !== k && (c[l] = k);
      h = B(h, 8, !0);
      k = h = B(h, 16, !c.length);
    }
    q ||
      (f
        ? (k = B(k, !g.length || (16 & k && (!n || p)) ? 2 : 2048, !0))
        : (k = B(k, 32, !1)),
      k !== e && (g[z] = k),
      f && (Object.freeze(g), (q = !0)));
    d && q && ((g = y(g)), (k = Mb(k, b, !1)), (g[z] = k), I(a, b, 7, g));
    return g;
  }
  function Mb(a, b, c) {
    a = B(a, 2, !!(2 & b));
    a = B(a, 32, !!(32 & b) && c);
    return (a = B(a, 2048, !1));
  }
  function M(a, b) {
    return null != a ? a : b;
  }
  function N(a, b, c = !1) {
    a = H(a, b);
    return M(
      null == a
        ? a
        : "boolean" === typeof a || "number" === typeof a
          ? !!a
          : void 0,
      c,
    );
  }
  function O(a, b) {
    return M(E(H(a, b)), "");
  }
  function R(a, b, c = 0) {
    return M(H(a, b), c);
  }
  function Tb(a, b, c) {
    if (null != c) {
      if ("boolean" !== typeof c)
        throw (
          ((a = typeof c),
          Error(
            `Expected boolean but got ${"object" != a ? a : c ? (Array.isArray(c) ? "array" : a) : "null"}: ${c}`,
          ))
        );
      c = !!c;
    }
    return Jb(a, b, c);
  }
  function Ub(a, b, c) {
    if (null != c) {
      if ("number" !== typeof c)
        throw ((a = Error("int32")), xa(a, "warning"), a);
      if (!Number.isFinite(c)) {
        const d = fb();
        La(d);
      }
    }
    Jb(a, b, c);
  }
  function S(a, b, c) {
    if (null != c && "string" !== typeof c) throw Error();
    return Jb(a, b, c);
  }
  function Vb(a, b, c) {
    Jb(a, b, null == c ? c : gb(c));
  }
  function Wb(a) {
    ab = !0;
    try {
      return JSON.stringify(a.toJSON(), ub);
    } finally {
      ab = !1;
    }
  }
  var T = class {
    constructor(a) {
      a: {
        null == a && (a = ob);
        ob = void 0;
        if (null == a) {
          var b = 96;
          a = [];
        } else {
          if (!Array.isArray(a)) throw Error();
          b = a[z] | 0;
          if (b & 64) break a;
          var c = a;
          b |= 64;
          var d = c.length;
          if (d) {
            var e = d - 1;
            d = c[e];
            if ($a(d)) {
              b |= 256;
              const f = +!!(b & 512) - 1;
              e -= f;
              if (1024 <= e) {
                e = 1023 + f;
                const h = c.length;
                for (let g = e; g < h; g++) {
                  const k = c[g];
                  null != k && k !== d && (d[g - f] = k);
                }
                c.length = e + 1;
                c[e] = d;
                e = 1023;
              }
              b = (b & -4190209) | ((e & 1023) << 12);
            }
          }
        }
        a[z] = b;
      }
      this.j = a;
    }
    toJSON() {
      if (ab) var a = Xb(this, this.j, !1);
      else (a = Bb(this.j, Db, void 0, void 0, !1, !1)), (a = Xb(this, a, !0));
      return a;
    }
  };
  T.prototype.C = Za;
  T.prototype.toString = function () {
    return Xb(this, this.j, !1).toString();
  };
  function Xb(a, b, c) {
    var d = a.constructor.B,
      e = Ya((c ? a.j : b)[z]),
      f = !1;
    if (d) {
      if (!c) {
        b = y(b);
        var h;
        if (b.length && $a((h = b[b.length - 1])))
          for (f = 0; f < d.length; f++)
            if (d[f] >= e) {
              Object.assign((b[b.length - 1] = {}), h);
              break;
            }
        f = !0;
      }
      e = b;
      c = !c;
      h = a.j[z];
      a = Ya(h);
      h = +!!(h & 512) - 1;
      var g;
      for (let A = 0; A < d.length; A++) {
        var k = d[A];
        if (k < a) {
          k += h;
          var l = e[k];
          null == l ? (e[k] = c ? D : Va()) : c && l !== D && Ua(l);
        } else {
          if (!g) {
            var n = void 0;
            e.length && $a((n = e[e.length - 1])) ? (g = n) : e.push((g = {}));
          }
          l = g[k];
          null == g[k] ? (g[k] = c ? D : Va()) : c && l !== D && Ua(l);
        }
      }
    }
    d = b.length;
    if (!d) return b;
    let p, q;
    if ($a((g = b[d - 1]))) {
      a: {
        var u = g;
        n = {};
        e = !1;
        for (let A in u)
          (c = u[A]),
            Array.isArray(c) && c != c && (e = !0),
            null != c ? (n[A] = c) : (e = !0);
        if (e) {
          for (let A in n) {
            u = n;
            break a;
          }
          u = null;
        }
      }
      u != g && (p = !0);
      d--;
    }
    for (; 0 < d; d--) {
      g = b[d - 1];
      if (null != g) break;
      q = !0;
    }
    if (!p && !q) return b;
    var F;
    f ? (F = b) : (F = Array.prototype.slice.call(b, 0, d));
    b = F;
    f && (b.length = d);
    u && b.push(u);
    return b;
  }
  var Yb = class extends T {
    constructor() {
      super();
    }
  };
  var Zb = class extends T {};
  var $b = class extends T {};
  var Sb = class extends T {
    A() {
      return O(this, 3);
    }
    O(a) {
      Tb(this, 5, a);
    }
  };
  var ac = class extends T {
    A() {
      return O(this, 1);
    }
    O(a) {
      Tb(this, 2, a);
    }
  };
  var bc = class extends T {};
  var cc = class extends T {};
  cc.B = [6, 7];
  function dc(a) {
    a = a.j;
    const b = a[z];
    return Pb(a, b, Ib(a, b, 1), 1, cc);
  }
  var ec = class extends T {};
  ec.B = [17];
  var fc = class extends T {};
  var gc = class extends T {
    constructor() {
      super();
    }
  };
  function hc(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  var ic = { capture: !0 },
    jc = { passive: !0 },
    kc = hc(function () {
      let a = !1;
      try {
        const b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        m.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    });
  function lc(a) {
    return a ? (a.passive && kc() ? a : a.capture || !1) : !1;
  }
  function mc(a, b, c, d) {
    a.addEventListener && a.addEventListener(b, c, lc(d));
  }
  function nc(a, b) {
    if (!(b instanceof r || b instanceof r)) {
      b = "object" == typeof b && b.h ? b.g.toString() : String(b);
      b: {
        var c = b;
        if (ha) {
          try {
            var d = new URL(c);
          } catch (e) {
            c = "https:";
            break b;
          }
          c = d.protocol;
        } else
          c: {
            d = document.createElement("a");
            try {
              d.href = c;
            } catch (e) {
              c = void 0;
              break c;
            }
            c = d.protocol;
            c = ":" === c || "" === c ? "https:" : c;
          }
      }
      "javascript:" === c && (b = "about:invalid#zClosurez");
      b = new r(b, ia);
    }
    a.href = b instanceof r && b.constructor === r ? b.g : "type_error:SafeUrl";
  }
  var oc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
  );
  function pc(a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) pc(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
  }
  var qc = /#|$/;
  function rc(a, b) {
    var c = a.search(qc);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f)
          if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  }
  function sc(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  var tc = (a) => {
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  let uc = [];
  const vc = () => {
    const a = uc;
    uc = [];
    for (const b of a)
      try {
        b();
      } catch (c) {}
  };
  var wc = (a) => {
      uc.push(a);
      1 == uc.length &&
        (window.Promise
          ? Promise.resolve().then(vc)
          : window.setImmediate
            ? setImmediate(vc)
            : setTimeout(vc, 0));
    },
    xc = (a) => {
      var b = U;
      "complete" === b.readyState || "interactive" === b.readyState
        ? wc(a)
        : b.addEventListener("DOMContentLoaded", a);
    },
    yc = (a) => {
      var b = window;
      "complete" === b.document.readyState
        ? wc(a)
        : b.addEventListener("load", a);
    };
  function zc(a = document) {
    return a.createElement("img");
  }
  function Ac(a, b, c = null, d = !1) {
    Bc(a, b, c, d);
  }
  function Bc(a, b, c, d) {
    a.google_image_requests || (a.google_image_requests = []);
    const e = zc(a.document);
    if (c || d) {
      const f = (h) => {
        c && c(h);
        if (d) {
          h = a.google_image_requests;
          const g = Array.prototype.indexOf.call(h, e, void 0);
          0 <= g && Array.prototype.splice.call(h, g, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, lc());
        e.removeEventListener && e.removeEventListener("error", f, lc());
      };
      mc(e, "load", f);
      mc(e, "error", f);
    }
    e.src = b;
    a.google_image_requests.push(e);
  }
  function Cc(a, b) {
    var c;
    if ((c = a.navigator))
      (c = a.navigator.userAgent),
        (c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1);
    c && a.navigator.sendBeacon
      ? a.navigator.sendBeacon(b)
      : Ac(a, b, void 0, !1);
  }
  let Ec = 0;
  function Fc(a) {
    return (
      ((a = Gc(a, document.currentScript)) &&
        a.getAttribute("data-jc-version")) ||
      "unknown"
    );
  }
  function Gc(a, b = null) {
    return b && b.getAttribute("data-jc") === String(a)
      ? b
      : document.querySelector(`[${"data-jc"}="${a}"]`);
  }
  function Hc(a) {
    if (!(0.01 < Math.random())) {
      const b = Gc(a, document.currentScript);
      a = `https://${b && "true" === b.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Fc(a)}&sample=${0.01}`;
      Cc(window, a);
    }
  }
  var U = document,
    Ic = window;
  const Jc = [Aa, Ba, Da, Ca, za, Fa, Ga, Ea, Ha];
  function Kc(a, b) {
    if (a instanceof r) return a;
    const c = Ka(a, Jc);
    c === ka && b(a);
    return c;
  }
  var Lc = (a) => {
    var b = `${"http:" === Ic.location.protocol ? "http:" : "https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
    return (c) => {
      c = { id: "unsafeurl", ctx: a, url: c };
      var d = [];
      for (e in c) pc(e, c[e], d);
      var e = d.join("&");
      if (e) {
        c = b.indexOf("#");
        0 > c && (c = b.length);
        d = b.indexOf("?");
        if (0 > d || d > c) {
          d = c;
          var f = "";
        } else f = b.substring(d + 1, c);
        c = [b.slice(0, d), f, b.slice(c)];
        d = c[1];
        c[1] = e ? (d ? d + "&" + e : e) : d;
        e = c[0] + (c[1] ? "?" + c[1] : "") + c[2];
      } else e = b;
      navigator.sendBeacon && navigator.sendBeacon(e, "");
    };
  };
  var Mc = (a) => {
    var b = U;
    try {
      return b.querySelectorAll("*[" + a + "]");
    } catch (c) {
      return [];
    }
  };
  class Nc {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  }
  const Oc = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)",
  );
  var Pc = class {
      constructor(a, b) {
        this.g = a;
        this.h = b;
      }
    },
    Qc = class {
      constructor(a, b) {
        this.url = a;
        this.N = !!b;
        this.depth = null;
      }
    };
  let Rc = null;
  function Sc() {
    const a = m.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function Tc() {
    const a = m.performance;
    return a && a.now ? a.now() : null;
  }
  var Uc = class {
    constructor(a, b) {
      var c = Tc() || Sc();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
  };
  const Y = m.performance,
    Vc = !!(Y && Y.mark && Y.measure && Y.clearMarks),
    Wc = hc(() => {
      var a;
      if ((a = Vc)) {
        var b;
        if (null === Rc) {
          Rc = "";
          try {
            a = "";
            try {
              a = m.top.location.hash;
            } catch (c) {
              a = m.location.hash;
            }
            a && (Rc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = Rc;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    });
  function Xc(a) {
    a &&
      Y &&
      Wc() &&
      (Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  class Yc {
    constructor() {
      var a = window;
      this.h = [];
      this.i = a || m;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.h = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.g = Wc() || (null != b ? b : 1 > Math.random());
    }
    start(a, b) {
      if (!this.g) return null;
      a = new Uc(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      Y && Wc() && Y.mark(b);
      return a;
    }
    end(a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = (Tc() || Sc()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        Y && Wc() && Y.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    }
  }
  function Zc(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }
  function $c(a, b, c, d, e) {
    const f = [];
    sc(a, function (h, g) {
      (h = ad(h, b, c, d, e)) && f.push(g + "=" + h);
    });
    return f.join(b);
  }
  function ad(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        const f = [];
        for (let h = 0; h < a.length; h++) f.push(ad(a[h], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent($c(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function bd(a) {
    let b = 1;
    for (const c in a.h) b = c.length > b ? c.length : b;
    return 3997 - b - a.i.length - 1;
  }
  function cd(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = bd(a) - b.length;
    if (0 > d) return "";
    a.g.sort(function (f, h) {
      return f - h;
    });
    b = null;
    let e = "";
    for (let f = 0; f < a.g.length; f++) {
      const h = a.g[f],
        g = a.h[h];
      for (let k = 0; k < g.length; k++) {
        if (!d) {
          b = null == b ? h : b;
          break;
        }
        let l = $c(g[k], a.i, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.i;
            break;
          }
          b = null == b ? h : b;
        }
      }
    }
    a = "";
    null != b && (a = e + "trn=" + b);
    return c + a;
  }
  class dd {
    constructor() {
      this.i = "&";
      this.h = {};
      this.l = 0;
      this.g = [];
    }
  }
  function ed(a) {
    let b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        let d;
        for (; a != d; )
          (d = a),
            (a = a.replace(
              RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
              "$1",
            ));
        b = a.replace(RegExp("\n *", "g"), "\n");
      } catch (d) {
        b = c;
      }
    }
    return b;
  }
  function fd(a, b, c) {
    let d, e;
    try {
      a.g && a.g.g
        ? ((e = a.g.start(b.toString(), 3)), (d = c()), a.g.end(e))
        : (d = c());
    } catch (f) {
      c = !0;
      try {
        Xc(e), (c = a.m(b, new Nc(f, { message: ed(f) }), void 0, void 0));
      } catch (h) {
        a.l(217, h);
      }
      if (c) {
        let h, g;
        null == (h = window.console) || null == (g = h.error) || g.call(h, f);
      } else throw f;
    }
    return d;
  }
  function gd(a, b) {
    var c = hd;
    return (...d) => fd(c, a, () => b.apply(void 0, d));
  }
  var kd = class {
    constructor(a = null) {
      this.pinger = id;
      this.g = a;
      this.h = null;
      this.i = !1;
      this.m = this.l;
    }
    l(a, b, c, d, e) {
      e = e || "jserror";
      let f;
      try {
        const x = new dd();
        x.g.push(1);
        x.h[1] = Zc("context", a);
        (b.error && b.meta && b.id) || (b = new Nc(b, { message: ed(b) }));
        if (b.msg) {
          var h = b.msg.substring(0, 512);
          x.g.push(2);
          x.h[2] = Zc("msg", h);
        }
        const Q = b.meta || {};
        if (this.h)
          try {
            this.h(Q);
          } catch (L) {}
        if (d)
          try {
            d(Q);
          } catch (L) {}
        b = [Q];
        x.g.push(3);
        x.h[3] = b;
        d = m;
        b = [];
        let vb;
        h = null;
        do {
          var g = d;
          try {
            var k;
            if ((k = !!g && null != g.location.href))
              b: {
                try {
                  Na(g.foo);
                  k = !0;
                  break b;
                } catch (L) {}
                k = !1;
              }
            var l = k;
          } catch (L) {
            l = !1;
          }
          l
            ? ((vb = g.location.href),
              (h = (g.document && g.document.referrer) || null))
            : ((vb = h), (h = null));
          b.push(new Qc(vb || ""));
          try {
            d = g.parent;
          } catch (L) {
            d = null;
          }
        } while (d && g != d);
        for (let L = 0, Dc = b.length - 1; L <= Dc; ++L) b[L].depth = Dc - L;
        g = m;
        if (
          g.location &&
          g.location.ancestorOrigins &&
          g.location.ancestorOrigins.length == b.length - 1
        )
          for (l = 1; l < b.length; ++l) {
            var n = b[l];
            n.url ||
              ((n.url = g.location.ancestorOrigins[l - 1] || ""), (n.N = !0));
          }
        var p = b;
        let wb = new Qc(m.location.href, !1);
        g = null;
        const xb = p.length - 1;
        for (n = xb; 0 <= n; --n) {
          var q = p[n];
          !g && Oc.test(q.url) && (g = q);
          if (q.url && !q.N) {
            wb = q;
            break;
          }
        }
        q = null;
        const Id = p.length && p[xb].url;
        0 != wb.depth && Id && (q = p[xb]);
        f = new Pc(wb, q);
        if (f.h) {
          var u = f.h.url || "";
          x.g.push(4);
          x.h[4] = Zc("top", u);
        }
        var F = { url: f.g.url || "" };
        if (f.g.url) {
          var A = f.g.url.match(oc),
            V = A[1],
            W = A[3],
            P = A[4];
          p = "";
          V && (p += V + ":");
          W && ((p += "//"), (p += W), P && (p += ":" + P));
          var X = p;
        } else X = "";
        F = [F, { url: X }];
        x.g.push(5);
        x.h[5] = F;
        jd(this.pinger, e, x, this.i, c);
      } catch (x) {
        try {
          jd(
            this.pinger,
            e,
            { context: "ecmserr", rctx: a, msg: ed(x), url: f && f.g.url },
            this.i,
            c,
          );
        } catch (Q) {}
      }
      return !0;
    }
  };
  class ld {}
  function jd(a, b, c, d = !1, e) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof dd
          ? (f = c)
          : ((f = new dd()),
            sc(c, (g, k) => {
              var l = f;
              const n = l.l++;
              g = Zc(k, g);
              l.g.push(n);
              l.h[n] = g;
            }));
        const h = cd(f, "/pagead/gen_204?id=" + b + "&");
        h && Ac(m, h);
      } catch (f) {}
  }
  function md() {
    var a = id,
      b = window.google_srt;
    0 <= b && 1 >= b && (a.g = b);
  }
  class nd {
    constructor() {
      this.g = Math.random();
    }
  }
  let id, hd;
  const Z = new Yc();
  var od = () => {
    window.google_measure_js_timing ||
      ((Z.g = !1),
      Z.h != Z.i.google_js_reporting_queue &&
        (Wc() && Array.prototype.forEach.call(Z.h, Xc, void 0),
        (Z.h.length = 0)));
  };
  ((a) => {
    id = null != a ? a : new nd();
    "number" !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    md();
    hd = new kd(Z);
    hd.h = (b) => {
      const c = Ec;
      0 !== c && ((b.jc = String(c)), (b.shv = Fc(c)));
    };
    hd.i = !0;
    "complete" == window.document.readyState
      ? od()
      : Z.g &&
        mc(window, "load", () => {
          od();
        });
  })();
  var pd = (a, b) => gd(a, b),
    qd = (a) => {
      var b = ld;
      var c = "M";
      (b.M && b.hasOwnProperty(c)) || ((c = new b()), (b.M = c));
      b = [];
      !a.eid && b.length && (a.eid = b.toString());
      jd(id, "gdn-asoch", a, !0);
    };
  function rd(a = window) {
    return a;
  }
  ma({
    ka: 0,
    ia: 1,
    fa: 2,
    aa: 3,
    ga: 4,
    ba: 5,
    ha: 6,
    da: 7,
    ea: 8,
    Z: 9,
    ca: 10,
    la: 11,
  });
  ma({ na: 0, oa: 1, ma: 2 });
  function sd(a) {
    var b = new td();
    const c = b.j,
      d = c[z] | 0;
    cb(b.j[z]);
    b = Kb(c, d, 1, 2, !1);
    if (Array.isArray(a)) for (var e = 0; e < a.length; e++) b.push(gb(a[e]));
    else for (e of a) b.push(gb(e));
  }
  var td = class extends T {
    constructor() {
      super();
    }
  };
  td.B = [1];
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(
    (a, b) => a + b,
  );
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(
    (a, b) => a + b,
  );
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
  sd([1, 8, 10, 11, 12, 2, 3, 4, 5]);
  sd([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5]);
  sd([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5]);
  new td();
  var ud = (a, b) => {
      b = O(a, 2) || b;
      if (!b) return "";
      if (N(a, 13)) return b;
      const c = /[?&]adurl=([^&]+)/.exec(b);
      if (!c) return b;
      const d = [b.slice(0, c.index + 1)];
      Qb(a, 4).forEach((e, f) => {
        d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&");
      });
      d.push(b.slice(c.index + 1));
      return d.join("");
    },
    vd = (a, b = []) => {
      b = 0 < b.length ? b : Mc("data-asoch-targets");
      a = dc(a);
      const c = [];
      for (let g = 0; g < b.length; ++g) {
        var d = b[g].getAttribute("data-asoch-targets"),
          e = d.split(","),
          f = !0;
        for (let k of e)
          if (!a.has(k)) {
            f = !1;
            break;
          }
        if (f) {
          f = a.get(e[0]);
          for (d = 1; d < e.length; ++d) {
            var h = a.get(e[d]);
            f = Gb(f).toJSON();
            h = h.toJSON();
            const k = Math.max(f.length, h.length);
            for (let l = 0; l < k; ++l) null == f[l] && (f[l] = h[l]);
            f = new cc(f);
          }
          e = Qb(f, 4);
          null != H(f, 5) && e.set("nb", R(f, 5, 0).toString());
          c.push({ element: b[g], data: f });
        } else qd({ type: 1, data: d });
      }
      return c;
    },
    yd = (a, b, c, d) => {
      c = ud(b, c);
      if (0 !== c.length) {
        if ("2" === rc(c, "ase") && 1087 !== d) {
          const f = 609 === d;
          var e;
          const h = !(
            null == (e = U.featurePolicy) ||
            !e.allowedFeatures().includes("attribution-reporting")
          );
          e = f ? 4 : h ? 6 : 5;
          let g = "";
          f || (h && !wd(c))
            ? ((c = xd(c, "nis", e.toString())),
              a.setAttribute("attributionsrc", g))
            : h &&
              wd(c) &&
              ((g = xd(ca(new ea({ url: c })), "nis", e.toString())),
              a.setAttribute("attributionsrc", g));
        }
        nc(a, Kc(c, Lc(d)));
        a.target || (a.target = null != E(H(b, 11)) ? O(b, 11) : "_top");
      }
    },
    zd = (a) => {
      for (const b of a)
        if (((a = b.data), "A" == b.element.tagName && !N(a, 1))) {
          const c = b.element;
          yd(c, a, c.href, 609);
        }
    },
    Ad = (a, b, c) => {
      b = encodeURIComponent(b);
      const d = encodeURIComponent(c);
      c = new RegExp("[?&]" + b + "=([^&]+)");
      const e = c.exec(a);
      b = b + "=" + d;
      return e
        ? a.replace(c, e[0].charAt(0) + b)
        : a.replace("?", "?" + b + "&");
    },
    wd = (a) => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
    Bd = (a) => {
      const b = m.oneAfmaInstance;
      if (b)
        for (const c of a)
          if ((a = c.data) && void 0 !== J(a, bc, 8)) {
            const d = O(K(a, bc, 8), 4);
            if (d) {
              b.fetchAppStoreOverlay(d, void 0, O(K(a, bc, 8), 6));
              break;
            }
          }
    },
    Cd = (a, b = 500) => {
      const c = [],
        d = [];
      for (var e of a)
        (a = e.data) &&
          void 0 !== J(a, ac, 12) &&
          (d.push(K(a, ac, 12)), c.push(K(a, ac, 12).A()));
      e = (f, h) => {
        if (h) for (const g of d) h[g.A()] && g.O(!0);
      };
      a = m.oneAfmaInstance;
      for (const f of c) {
        let h;
        null == (h = a) || h.canOpenAndroidApp(f, e, () => {}, b);
      }
    },
    Ed = (a, b, c, d, e) => {
      if (!b || void 0 === J(b, bc, 8)) return !1;
      const f = K(b, bc, 8);
      let h = O(f, 2);
      Qb(b, 10).forEach((l, n) => {
        h = Ad(h, n, l);
      });
      Dd(b) &&
        N(b, 15) &&
        !/[?&]label=/.test(c) &&
        (c = xd(c, "label", "deep_link_fallback"));
      const g = (l) => d.openStoreOverlay(l, void 0, O(f, 6)),
        k = (l) => Cc(Ic, l);
      return d.redirectForStoreU2({
        clickUrl: c,
        trackingUrl: O(f, 3),
        finalUrl: h,
        pingFunc: N(b, 13) ? d.httpTrack : e ? k : d.click,
        openFunc: (null == a ? 0 : N(a, 1)) ? g : d.openIntentOrNativeApp,
        isExternalClickUrl: N(b, 13),
      });
    },
    Gd = (a, b, c, d, e, f, h, g = !1, k = !1) => {
      const l = N(e, 15),
        n = wd(f);
      if (
        a &&
        b &&
        (!l || !n) &&
        ((f = g ? Fd(f) : Fd(f, h.click)), k && (null == e ? 0 : N(e, 21, !1)))
      )
        return;
      f && f.startsWith("intent:")
        ? h.openIntentOrNativeApp(f)
        : c
          ? d
            ? h.openBrowser(f)
            : h.openChromeCustomTab(f)
          : h.openSystemBrowser(f, {
              useFirstPackage: !0,
              useRunningProcess: !0,
            });
    },
    Fd = (a, b = null) => {
      if (null !== b) {
        const c = new ea({ url: a });
        if ((c.h && c.i) || c.m) return b(ca(c)), da(c, 1);
      } else
        return (
          ({ P: b } = {}),
          (b = new ea({ url: a, P: b })),
          (b.h && b.i) || b.m
            ? navigator.sendBeacon
              ? navigator.sendBeacon(ca(b), "")
                ? da(b, 1)
                : da(b, 2)
              : da(b, 0)
            : a
        );
      return a;
    },
    Hd = (a, b = !0) => {
      b && Ic.fetch
        ? Ic.fetch(a, { method: "GET", keepalive: !0, mode: "no-cors" }).then(
            (c) => {
              c.ok || Ac(Ic, a);
            },
          )
        : Ac(Ic, a);
    },
    xd = (a, b, c) => {
      b = encodeURIComponent(String(b));
      c = encodeURIComponent(String(c));
      return a.replace("?", "?" + b + "=" + c + "&");
    },
    Dd = (a) => {
      for (const b of Rb(a)) if (3 === R(b, 1, 0) && O(b, 2)) return !0;
      return !1;
    };
  var Jd = (a, b) =>
    a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : "";
  var Kd = class extends T {
    constructor() {
      super();
    }
  };
  function Ld(a, b) {
    return S(a, 2, b);
  }
  function Md(a, b) {
    return S(a, 3, b);
  }
  function Nd(a, b) {
    return S(a, 4, b);
  }
  function Od(a, b) {
    return S(a, 5, b);
  }
  function Pd(a, b) {
    return S(a, 9, b);
  }
  function Qd(a, b) {
    {
      const n = a.j;
      let p = n[z];
      cb(p);
      if (null == b) I(n, p, 10);
      else {
        var c = b[z] | 0,
          d = c,
          e = !!(2 & c) || !!(2048 & c),
          f = e || Object.isFrozen(b),
          h;
        if ((h = !f)) h = !1;
        var g = !0,
          k = !0;
        for (let q = 0; q < b.length; q++) {
          var l = b[q];
          e || ((l = !!((l.j[z] | 0) & 2)), g && (g = !l), k && (k = l));
        }
        e ||
          ((c = B(c, 5, !0)),
          (c = B(c, 8, g)),
          (c = B(c, 16, k)),
          h && (c = B(c, k ? 2 : 2048, !0)),
          c !== d && (f && ((b = y(b)), (c = Mb(c, p, !0))), (b[z] = c)),
          h && Object.freeze(b));
        I(n, p, 10, b);
      }
    }
    return a;
  }
  function Rd(a, b) {
    return Tb(a, 11, b);
  }
  function Sd(a, b) {
    return S(a, 1, b);
  }
  function Td(a, b) {
    return Tb(a, 7, b);
  }
  var Ud = class extends T {
    constructor() {
      super();
    }
  };
  Ud.B = [10, 6];
  const Vd =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " ",
    );
  function Wd(a) {
    let b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function Xd(a) {
    let b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
          ? void 0
          : c.getHighEntropyValues)
    );
  }
  function Yd() {
    var a = window;
    if (!Xd(a)) return null;
    const b = Wd(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(Vd).then((c) => {
      null != b.uach || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function Zd(a) {
    let b;
    return Rd(
      Qd(
        Od(
          Ld(
            Sd(
              Nd(
                Td(
                  Pd(Md(new Ud(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1,
                ),
                a.model || "",
              ),
              a.platform || "",
            ),
            a.platformVersion || "",
          ),
          a.uaFullVersion || "",
        ),
        (null == (b = a.fullVersionList)
          ? void 0
          : b.map((c) => {
              var d = new Kd();
              d = S(d, 1, c.brand);
              return S(d, 2, c.version);
            })) || [],
      ),
      a.wow64 || !1,
    );
  }
  function $d() {
    let a, b;
    return null != (b = null == (a = Yd()) ? void 0 : a.then((c) => Zd(c)))
      ? b
      : null;
  }
  function ae(a) {
    for (const b of a)
      if ("A" == b.element.tagName) {
        a = b.element;
        const c = b.data;
        null == E(H(c, 2)) && S(c, 2, a.href);
      }
  }
  function be(a, b) {
    return la(a, (c) => c.element === b);
  }
  function ce(a) {
    xc(
      pd(556, () => {
        new de(a || {});
      }),
    );
  }
  function ee(a, b) {
    if (!b.defaultPrevented || a.u === b) {
      for (var c, d, e = b.target; (!c || !d) && e; ) {
        d || "A" != e.tagName || (d = e);
        var f = e.hasAttribute("data-asoch-targets"),
          h = e.hasAttribute("data-asoch-fixed-value");
        if (!c)
          if (h)
            c = new cc(
              JSON.parse(e.getAttribute("data-asoch-fixed-value")) || [],
            );
          else if ("A" == e.tagName || f)
            if (
              ((f =
                f && "true" === e.getAttribute("data-asoch-is-dynamic")
                  ? vd(a.h, [e])
                  : a.g),
              (f = be(f, e)))
            )
              c = f.data;
        e = e.parentElement;
      }
      e = c && !N(c, 1);
      if (a.D && a.l && b.defaultPrevented) fe(a, b, d, e ? c : a.l);
      else {
        if (e) {
          if (!a.D && b.defaultPrevented) {
            fe(a, b, d, c);
            return;
          }
          f = c;
          for (var g of Lb(f, 6)) Hd(g);
        }
        a.F &&
          e &&
          N(c, 21, !1) &&
          (tc(b),
          (g = c) && O(g, 2) && ((f = Ad(O(g, 2), "ae", "1")), S(g, 2, f)));
        if (d && e) {
          c = e ? c : null;
          (g = be(a.g, d))
            ? (g = g.data)
            : ((g = new cc()),
              S(g, 2, d.href),
              S(g, 11, d.target || "_top"),
              a.g.push({ element: d, data: g }));
          yd(d, c || g, O(g, 2), 557);
          ge(a, b, d, c);
          for (var k of Lb(a.h, 17))
            (g = U.body),
              (e = {}),
              "function" === typeof window.CustomEvent
                ? (f = new CustomEvent(k, e))
                : ((f = document.createEvent("CustomEvent")),
                  f.initCustomEvent(k, !!e.bubbles, !!e.cancelable, e.detail)),
              g.dispatchEvent(f);
          if (null == c ? 0 : null != E(H(c, 19))) {
            k = new Yb();
            g = R(c, 5, 0);
            Vb(k, 1, g);
            g = Jd(d.href, "nx");
            "" != g && Ub(k, 2, +g);
            g = Jd(d.href, "ny");
            "" != g && Ub(k, 3, +g);
            g = Jd(d.href, "bg");
            "" != g && S(k, 4, g);
            g = Jd(d.href, "nm");
            "" != g && Ub(k, 5, +g);
            g = Jd(d.href, "mb");
            "" != g && Ub(k, 6, +g);
            g = O(c, 19);
            e = null != ib(H(c, 20)) ? M(ib(H(c, 20)), 0) : null;
            h = Wb(k);
            var l = a.o;
            k = rd(m);
            f = new gc();
            S(f, 1, g);
            null !== e && Ub(f, 2, e);
            null !== l && S(f, 3, l);
            g = S(f, 4, h);
            Vb(g, 9, 4);
            var n;
            null == k ||
              null == (n = k.fence) ||
              n.reportEvent({
                eventType: "click",
                eventData: JSON.stringify(f),
                destination: ["buyer"],
              });
            Vb(f, 9, 5);
            var p;
            null == k ||
              null == (p = k.fence) ||
              p.setReportEventDataForAutomaticBeacons({
                eventType: "reserved.top_navigation",
                eventData: JSON.stringify(f),
                destination: ["buyer"],
                once: !0,
              });
          }
          N(a.h, 16) || a.H
            ? he(a, b, d, c)
            : ((n = ""),
              (p = m.oneAfmaInstance) && (n = p.appendClickSignals(d.href)),
              ie(a, b, d, c, n));
        }
      }
    }
  }
  function fe(a, b, c, d) {
    if (a.u === b && a.v) {
      const f = new $b(a.v),
        h = O(d, 9);
      var e = "";
      switch (R(f, 4, 1)) {
        case 2:
          if (M(ib(H(f, 2)), 0)) e = "blocked_fast_click";
          else if (O(f, 1) || O(f, 7)) e = "blocked_border_click";
          break;
        case 3:
          e = U;
          e = e.getElementById
            ? e.getElementById("common_15click_anchor")
            : null;
          const g = window;
          if ("function" === typeof g.copfcChm && e) {
            d = Gb(d);
            Vb(d, 5, 12);
            Qb(d, 4).set("nb", (12).toString());
            const k = be(a.g, e);
            k ? (k.data = d) : a.g.push({ element: e, data: d });
            !a.L && c && (ge(a, b, c, d), S(d, 2, c.href));
            g.copfcChm(
              b,
              ud(d, e.href),
              null,
              void 0 !== J(f, Zb, 10) ? Wb(K(f, Zb, 10)) : null,
            );
            a.L && ge(a, b, e, d);
          }
          e = "onepointfiveclick_first_click";
      }
      h && e && Hd(h + "&label=" + e, !1);
      Hc(a.I);
    }
  }
  function ge(a, b, c, d) {
    if (!N(d, 13)) {
      var e = c.href;
      var f = /[?&]adurl=([^&]+)/.exec(e);
      e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
      for (nc(c, Kc(e[0], Lc(557))); !c.id; )
        if (
          ((f =
            "asoch-id-" +
            (Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(
                Math.floor(2147483648 * Math.random()) ^ Date.now(),
              ).toString(36))),
          !U.getElementById(f))
        ) {
          c.id = f;
          break;
        }
      f = c.id;
      "function" === typeof window.xy && window.xy(b, c, U.body);
      "function" === typeof window.mb && window.mb(c);
      "function" === typeof window.bgz && window.bgz(f);
      "function" === typeof window.ja && window.ja(f, d ? R(d, 5, 0) : 0);
      "function" === typeof window.vti && window.vti(c);
      a.i &&
        "function" === typeof window.ss &&
        (a.K ? window.ss(f, 1, a.i) : window.ss(a.i, 1));
      0 < e.length &&
        ((a =
          0 < a.o.length && (null == d || null == E(H(d, 19)))
            ? c.href + "&uach=" + encodeURIComponent(a.o) + e[1]
            : c.href + e[1]),
        nc(c, Kc(a, Lc(557))));
    }
  }
  async function he(a, b, c, d) {
    let e = "";
    var f = m.oneAfmaInstance;
    if (
      f &&
      (b.preventDefault(),
      (e = (await f.appendClickSignalsAsync(c.href)) || ""),
      a.H)
    ) {
      if (a.T) return;
      if ((f = await f.getNativeClickMeta())) {
        if (f.customClickGestureEligible) return;
        e = xd(e, "nas", f.encodedNas);
      }
    }
    ie(a, b, c, d, e);
  }
  function ie(a, b, c, d, e) {
    const f = N(a.h, 2),
      h = f && 300 < Date.now() - a.J,
      g = m.oneAfmaInstance;
    g
      ? (tc(b),
        (() => {
          let k = N(d, 13) ? e : g.logScionEventAndAddParam(e);
          if (!a.s && d && void 0 !== J(d, ac, 12)) {
            var l = K(d, ac, 12).A();
            if (0 < Rb(d).length) for (const n of Rb(d));
            N(K(d, ac, 12), 2)
              ? (g.click(k), g.openAndroidApp(l), (l = !0))
              : (l = !1);
          } else l = !1;
          l || Ed(a.m, d, k, g, a.U) || Gd(f, h, a.W, a.s, d, k, g, a.V, a.F);
        })())
      : ((b = window),
        a.S && b.pawsig && "function" === typeof b.pawsig.clk
          ? b.pawsig.clk(c)
          : h &&
            ((b =
              null != c.getAttribute("attributionsrc") &&
              "6" === rc(c.getAttribute("attributionsrc"), "nis")
                ? Fd(c.href, () => {})
                : Fd(c.href)),
            b !== c.href && nc(c, Kc(b, Lc(599)))));
    h && (a.J = Date.now());
    Hc(a.I);
  }
  var de = class {
    constructor(a) {
      this.s = Qa || Oa || Ra || Pa;
      var b = Mc("data-asoch-meta");
      if (1 !== b.length) qd({ type: 2, data: b.length });
      else {
        this.I = 70;
        this.h = new ec(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
        this.G = a["extra-meta"] ? new ec(JSON.parse(a["extra-meta"])) : null;
        this.H = "true" === a["is-fsn"];
        this.T = "true" === a["is-tap-disabled-for-fsn"];
        this.m = a["ios-store-overlay-config"]
          ? new fc(JSON.parse(a["ios-store-overlay-config"]))
          : null;
        this.W = "true" === a["use-cct-over-browser"];
        this.U = "true" === a["send-ac-click-ping-by-js"];
        this.L = "true" === a["correct-redirect-url-for-och-15-click"];
        this.V = "true" === a["send-click-ping-by-js-in-och"];
        this.R = "true" === a["middle-clicks-in-och"];
        this.D = "true" === a["default-msg-in-och"];
        this.S = "true" === a["enable-paw"];
        this.F = "true" === a["allow-redirection-muted-in-och"];
        this.o = "";
        b = $d();
        null != b &&
          b.then((d) => {
            var e = Wb(d);
            d = [];
            for (var f = 0, h = 0; h < e.length; h++) {
              var g = e.charCodeAt(h);
              255 < g && ((d[f++] = g & 255), (g >>= 8));
              d[f++] = g;
            }
            e = 3;
            void 0 === e && (e = 0);
            if (!Ta)
              for (
                Ta = {},
                  f =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                      "",
                    ),
                  h = ["+/=", "+/", "-_=", "-_.", "-_"],
                  g = 0;
                5 > g;
                g++
              ) {
                var k = f.concat(h[g].split(""));
                Sa[g] = k;
                for (var l = 0; l < k.length; l++) {
                  var n = k[l];
                  void 0 === Ta[n] && (Ta[n] = l);
                }
              }
            e = Sa[e];
            f = Array(Math.floor(d.length / 3));
            h = e[64] || "";
            for (g = k = 0; k < d.length - 2; k += 3) {
              var p = d[k],
                q = d[k + 1];
              n = d[k + 2];
              l = e[p >> 2];
              p = e[((p & 3) << 4) | (q >> 4)];
              q = e[((q & 15) << 2) | (n >> 6)];
              n = e[n & 63];
              f[g++] = l + p + q + n;
            }
            l = 0;
            n = h;
            switch (d.length - k) {
              case 2:
                (l = d[k + 1]), (n = e[(l & 15) << 2] || h);
              case 1:
                (d = d[k]),
                  (f[g] = e[d >> 2] + e[((d & 3) << 4) | (l >> 4)] + n + h);
            }
            this.o = f.join("");
          });
        this.g = vd(this.h);
        this.D &&
          ((this.l = null),
          dc(this.h).forEach((d) => {
            null == this.l &&
              null != E(H(d, 2)) &&
              null != E(H(d, 9)) &&
              (this.l = d);
          }));
        this.X =
          Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
        this.J = -Infinity;
        this.i = O(this.h, 5) || "";
        this.K = N(this.h, 11);
        this.G && (this.K = N(this.G, 11));
        this.v = this.u = null;
        N(this.h, 3) || (zd(this.g), Tb(this.h, 3, !0));
        ae(this.g);
        a = m.oneAfmaInstance;
        !this.s && a && Cd(this.g, this.X);
        var c;
        if (a && (null == (c = this.m) ? 0 : N(c, 2)))
          switch (
            ((c = () => {
              const d = M(ib(H(this.m, 4)), 0);
              0 < d
                ? m.setTimeout(() => {
                    Bd(this.g);
                  }, d)
                : Bd(this.g);
            }),
            R(this.m, 3, 0))
          ) {
            case 1:
              a.runOnOnShowEvent(c);
              break;
            case 2:
              yc(c);
              break;
            default:
              Bd(this.g);
          }
        mc(
          U,
          "click",
          pd(557, (d) => {
            ee(this, d);
          }),
          ic,
        );
        this.R &&
          mc(
            U,
            "auxclick",
            pd(557, (d) => {
              1 === d.button && ee(this, d);
            }),
            ic,
          );
        this.i &&
          "function" === typeof window.ss &&
          mc(
            U.body,
            "mouseover",
            pd(626, () => {
              window.ss(this.i, 0);
            }),
            jc,
          );
        "function" === typeof window.ivti && window.ivti(U.body);
        c = window;
        c.googqscp &&
          "function" === typeof c.googqscp.registerCallback &&
          c.googqscp.registerCallback((d, e) => {
            this.u = d;
            this.v = e;
          });
      }
    }
  };
  var je = pd(555, (a) => ce(a));
  Ec = 70;
  const ke = Gc(70, document.currentScript);
  if (null == ke) throw Error("JSC not found 70");
  const le = {},
    me = ke.attributes;
  for (let a = me.length - 1; 0 <= a; a--) {
    const b = me[a].name;
    0 === b.indexOf("data-jcp-") && (le[b.substring(9)] = me[a].value);
  }
  je(le);
}).call(this);
