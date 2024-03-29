(function () {
  var m,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        "object" == typeof globalThis && globalThis,
        a,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("a");
    },
    da = ca(this),
    p = function (a, b) {
      if (b)
        a: {
          var c = da;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  p("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.hg = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.hg;
    };
    var c = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e) throw new TypeError("b");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  p("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " ",
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = da[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ea(aa(this));
          },
        });
    }
    return a;
  });
  p("Symbol.asyncIterator", function (a) {
    return a ? a : Symbol("Symbol.asyncIterator");
  });
  var ea = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    fa = function (a) {
      return (a.raw = a);
    },
    ha = function (a, b) {
      a.raw = b;
      return a;
    },
    t = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: aa(a) };
      throw Error("c`" + String(a));
    },
    u = function (a) {
      if (!(a instanceof Array)) {
        a = t(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    ja = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ka =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) ja(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  p("Object.assign", function (a) {
    return a || ka;
  });
  var la =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var pa = { a: !0 },
        qa = {};
      try {
        qa.__proto__ = pa;
        na = qa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError("d`" + a);
          return a;
        }
      : null;
  }
  var ra = ma,
    w = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (ra) ra(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.mi = b.prototype;
    },
    sa = function () {
      this.cc = !1;
      this.eb = null;
      this.Ie = void 0;
      this.ha = 1;
      this.Ia = this.fb = 0;
      this.Qd = this.da = null;
    };
  m = sa.prototype;
  m.cb = function () {
    if (this.cc) throw new TypeError("f");
    this.cc = !0;
  };
  m.ic = function (a) {
    this.Ie = a;
  };
  m.qc = function (a) {
    this.da = { ff: a, wf: !0 };
    this.ha = this.fb || this.Ia;
  };
  m.return = function (a) {
    this.da = { return: a };
    this.ha = this.Ia;
  };
  m.mb = function (a) {
    this.ha = a;
  };
  var ta = function (a, b, c) {
      c = a.Qd.splice(c || 0)[0];
      (c = a.da = a.da || c)
        ? c.wf
          ? (a.ha = a.fb || a.Ia)
          : void 0 != c.mb && a.Ia < c.mb
            ? ((a.ha = c.mb), (a.da = null))
            : (a.ha = a.Ia)
        : (a.ha = b);
    },
    ua = function (a) {
      this.s = new sa();
      this.Th = a;
    };
  ua.prototype.ic = function (a) {
    this.s.cb();
    if (this.s.eb) return va(this, this.s.eb.next, a, this.s.ic);
    this.s.ic(a);
    return wa(this);
  };
  var xa = function (a, b) {
    a.s.cb();
    var c = a.s.eb;
    if (c)
      return va(
        a,
        "return" in c
          ? c["return"]
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.s.return,
      );
    a.s.return(b);
    return wa(a);
  };
  ua.prototype.qc = function (a) {
    this.s.cb();
    if (this.s.eb) return va(this, this.s.eb["throw"], a, this.s.ic);
    this.s.qc(a);
    return wa(this);
  };
  var va = function (a, b, c, d) {
      try {
        var e = b.call(a.s.eb, c);
        if (!(e instanceof Object)) throw new TypeError("e`" + e);
        if (!e.done) return (a.s.cc = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.s.eb = null), a.s.qc(g), wa(a);
      }
      a.s.eb = null;
      d.call(a.s, f);
      return wa(a);
    },
    wa = function (a) {
      for (; a.s.ha; )
        try {
          var b = a.Th(a.s);
          if (b) return (a.s.cc = !1), { value: b.value, done: !1 };
        } catch (c) {
          (a.s.Ie = void 0), a.s.qc(c);
        }
      a.s.cc = !1;
      if (a.s.da) {
        b = a.s.da;
        a.s.da = null;
        if (b.wf) throw b.ff;
        return { value: b.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    },
    ya = function (a) {
      this.next = function (b) {
        return a.ic(b);
      };
      this.throw = function (b) {
        return a.qc(b);
      };
      this.return = function (b) {
        return xa(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    za = function (a) {
      function b(d) {
        return a.next(d);
      }
      function c(d) {
        return a.throw(d);
      }
      return new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    },
    Ba = function (a) {
      this[Symbol.asyncIterator] = function () {
        return this;
      };
      this[Symbol.iterator] = function () {
        return a;
      };
      this.next = function (b) {
        return Promise.resolve(a.next(b));
      };
      void 0 !== a["throw"] &&
        (this["throw"] = function (b) {
          return Promise.resolve(a["throw"](b));
        });
      void 0 !== a["return"] &&
        (this["return"] = function (b) {
          return Promise.resolve(a["return"](b));
        });
    },
    x = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
  p("Promise", function (a) {
    function b() {
      this.Sa = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.Re = function (g) {
      if (null == this.Sa) {
        this.Sa = [];
        var h = this;
        this.Se(function () {
          h.Mg();
        });
      }
      this.Sa.push(g);
    };
    var d = da.setTimeout;
    b.prototype.Se = function (g) {
      d(g, 0);
    };
    b.prototype.Mg = function () {
      for (; this.Sa && this.Sa.length; ) {
        var g = this.Sa;
        this.Sa = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (l) {
            this.ug(l);
          }
        }
      }
      this.Sa = null;
    };
    b.prototype.ug = function (g) {
      this.Se(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.Nb = 0;
      this.nc = void 0;
      this.Ib = [];
      this.zf = !1;
      var h = this.Id();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.Id = function () {
      function g(l) {
        return function (n) {
          k || ((k = !0), l.call(h, n));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.bi), reject: g(this.ue) };
    };
    e.prototype.bi = function (g) {
      if (g === this) this.ue(new TypeError("g"));
      else if (g instanceof e) this.gi(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.ai(g) : this.kf(g);
      }
    };
    e.prototype.ai = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.ue(k);
        return;
      }
      "function" == typeof h ? this.hi(h, g) : this.kf(g);
    };
    e.prototype.ue = function (g) {
      this.Wf(2, g);
    };
    e.prototype.kf = function (g) {
      this.Wf(1, g);
    };
    e.prototype.Wf = function (g, h) {
      if (0 != this.Nb) throw Error("h`" + g + "`" + h + "`" + this.Nb);
      this.Nb = g;
      this.nc = h;
      2 === this.Nb && this.di();
      this.Ng();
    };
    e.prototype.di = function () {
      var g = this;
      d(function () {
        if (g.Eh()) {
          var h = da.console;
          "undefined" !== typeof h && h.error(g.nc);
        }
      }, 1);
    };
    e.prototype.Eh = function () {
      if (this.zf) return !1;
      var g = da.CustomEvent,
        h = da.Event,
        k = da.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof g
        ? (g = new g("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof h
          ? (g = new h("unhandledrejection", { cancelable: !0 }))
          : ((g = da.document.createEvent("CustomEvent")),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.nc;
      return k(g);
    };
    e.prototype.Ng = function () {
      if (null != this.Ib) {
        for (var g = 0; g < this.Ib.length; ++g) f.Re(this.Ib[g]);
        this.Ib = null;
      }
    };
    var f = new b();
    e.prototype.gi = function (g) {
      var h = this.Id();
      g.Dc(h.resolve, h.reject);
    };
    e.prototype.hi = function (g, h) {
      var k = this.Id();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    e.prototype.then = function (g, h) {
      function k(q, v) {
        return "function" == typeof q
          ? function (y) {
              try {
                l(q(y));
              } catch (D) {
                n(D);
              }
            }
          : v;
      }
      var l,
        n,
        r = new e(function (q, v) {
          l = q;
          n = v;
        });
      this.Dc(k(g, l), k(h, n));
      return r;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.Dc = function (g, h) {
      function k() {
        switch (l.Nb) {
          case 1:
            g(l.nc);
            break;
          case 2:
            h(l.nc);
            break;
          default:
            throw Error("i`" + l.Nb);
        }
      }
      var l = this;
      null == this.Ib ? f.Re(k) : this.Ib.push(k);
      this.zf = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var l = t(g), n = l.next(); !n.done; n = l.next())
          c(n.value).Dc(h, k);
      });
    };
    e.all = function (g) {
      var h = t(g),
        k = h.next();
      return k.done
        ? c([])
        : new e(function (l, n) {
            function r(y) {
              return function (D) {
                q[y] = D;
                v--;
                0 == v && l(q);
              };
            }
            var q = [],
              v = 0;
            do
              q.push(void 0),
                v++,
                c(k.value).Dc(r(q.length - 1), n),
                (k = h.next());
            while (!k.done);
          });
    };
    return e;
  });
  p("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ja(b, d) && c.push(b[d]);
          return c;
        };
  });
  var Ca = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  p("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Ca(this, function (b) {
            return b;
          });
        };
  });
  p("WeakMap", function (a) {
    function b() {}
    function c(k) {
      var l = typeof k;
      return ("object" === l && null !== k) || "function" === l;
    }
    function d(k) {
      if (!ja(k, f)) {
        var l = new b();
        ba(k, f, { value: l });
      }
    }
    function e(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (n) {
          if (n instanceof b) return n;
          Object.isExtensible(n) && d(n);
          return l(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            n = new a([
              [k, 2],
              [l, 3],
            ]);
          if (2 != n.get(k) || 3 != n.get(l)) return !1;
          n.delete(k);
          n.set(l, 4);
          return !n.has(k) && 4 == n.get(l);
        } catch (r) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      h = function (k) {
        this.ac = (g += Math.random() + 1).toString();
        if (k) {
          k = t(k);
          for (var l; !(l = k.next()).done; )
            (l = l.value), this.set(l[0], l[1]);
        }
      };
    h.prototype.set = function (k, l) {
      if (!c(k)) throw Error("j");
      d(k);
      if (!ja(k, f)) throw Error("k`" + k);
      k[f][this.ac] = l;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && ja(k, f) ? k[f][this.ac] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && ja(k, f) && ja(k[f], this.ac);
    };
    h.prototype.delete = function (k) {
      return c(k) && ja(k, f) && ja(k[f], this.ac) ? delete k[f][this.ac] : !1;
    };
    return h;
  });
  p("Map", function (a) {
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(t([[h, "s"]]));
          if (
            "s" != k.get(h) ||
            1 != k.size ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            2 != k.size
          )
            return !1;
          var l = k.entries(),
            n = l.next();
          if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
          n = l.next();
          return n.done ||
            4 != n.value[0].x ||
            "t" != n.value[1] ||
            !l.next().done
            ? !1
            : !0;
        } catch (r) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (h) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (h) {
          h = t(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this[0][l.id] = []);
      l.P
        ? (l.P.value = k)
        : ((l.P = {
            next: this[1],
            Ma: this[1].Ma,
            head: this[1],
            key: h,
            value: k,
          }),
          l.list.push(l.P),
          (this[1].Ma.next = l.P),
          (this[1].Ma = l.P),
          this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.P && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.P.Ma.next = h.P.next),
          (h.P.next.Ma = h.P.Ma),
          (h.P.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].Ma = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).P;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).P) && h.value;
    };
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value;
      });
    };
    c.prototype.forEach = function (h, k) {
      for (var l = this.entries(), n; !(n = l.next()).done; )
        (n = n.value), h.call(k, n[1], n[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var l = k && typeof k;
        "object" == l || "function" == l
          ? b.has(k)
            ? (l = b.get(k))
            : ((l = "" + ++g), b.set(k, l))
          : (l = "p_" + k);
        var n = h[0][l];
        if (n && ja(h[0], l))
          for (h = 0; h < n.length; h++) {
            var r = n[h];
            if ((k !== k && r.key !== r.key) || k === r.key)
              return { id: l, list: n, index: h, P: r };
          }
        return { id: l, list: n, index: -1, P: void 0 };
      },
      e = function (h, k) {
        var l = h[1];
        return ea(function () {
          if (l) {
            for (; l.head != h[1]; ) l = l.Ma;
            for (; l.next != l.head; )
              return (l = l.next), { done: !1, value: k(l) };
            l = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.Ma = h.next = h.head = h);
      },
      g = 0;
    return c;
  });
  var Da = function (a, b, c) {
    if (null == a) throw new TypeError("l`" + c);
    if (b instanceof RegExp) throw new TypeError("m`" + c);
    return a + "";
  };
  p("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  p("String.prototype.startsWith", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Da(this, b, "startsWith");
          b += "";
          var e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  p("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  p("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return Ca(this, function (b, c) {
            return c;
          });
        };
  });
  p("Set", function (a) {
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(t([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == c ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    var b = function (c) {
      this.Aa = new Map();
      if (c) {
        c = t(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.Aa.size;
    };
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.Aa.set(c, c);
      this.size = this.Aa.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.Aa.delete(c);
      this.size = this.Aa.size;
      return c;
    };
    b.prototype.clear = function () {
      this.Aa.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.Aa.has(c);
    };
    b.prototype.entries = function () {
      return this.Aa.entries();
    };
    b.prototype.values = function () {
      return this.Aa.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.Aa.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  p("Array.prototype.entries", function (a) {
    return a
      ? a
      : function () {
          return Ca(this, function (b, c) {
            return [b, c];
          });
        };
  });
  p("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
            return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  p("Math.log2", function (a) {
    return a
      ? a
      : function (b) {
          return Math.log(b) / Math.LN2;
        };
  });
  p("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  p("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  p("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== Da(this, b, "includes").indexOf(b, c || 0);
        };
  });
  p("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  p("Number.isInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  p("Number.isSafeInteger", function (a) {
    return a
      ? a
      : function (b) {
          return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
        };
  });
  p("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  p("Array.prototype.fill", function (a) {
    return a
      ? a
      : function (b, c, d) {
          var e = this.length || 0;
          0 > c && (c = Math.max(0, e + c));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (c = Number(c || 0); c < d; c++) this[c] = b;
          return this;
        };
  });
  var Ea = function (a) {
    return a ? a : Array.prototype.fill;
  };
  p("Int8Array.prototype.fill", Ea);
  p("Uint8Array.prototype.fill", Ea);
  p("Uint8ClampedArray.prototype.fill", Ea);
  p("Int16Array.prototype.fill", Ea);
  p("Uint16Array.prototype.fill", Ea);
  p("Int32Array.prototype.fill", Ea);
  p("Uint32Array.prototype.fill", Ea);
  p("Float32Array.prototype.fill", Ea);
  p("Float64Array.prototype.fill", Ea);
  p("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) ja(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  p("Array.prototype.flat", function (a) {
    return a
      ? a
      : function (b) {
          b = void 0 === b ? 1 : b;
          var c = [];
          Array.prototype.forEach.call(this, function (d) {
            Array.isArray(d) && 0 < b
              ? ((d = Array.prototype.flat.call(d, b - 1)), c.push.apply(c, d))
              : c.push(d);
          });
          return c;
        };
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Fa = this || self,
    Ia = function (a, b) {
      a: {
        var c = ["CLOSURE_FLAGS"];
        for (var d = Fa, e = 0; e < c.length; e++)
          if (((d = d[c[e]]), null == d)) {
            c = null;
            break a;
          }
        c = d;
      }
      a = c && c[a];
      return null != a ? a : b;
    },
    Ja = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    },
    Ka = function (a) {
      var b = Ja(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    La = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    Ma = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.mi = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.dj = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    Na = function (a) {
      return a;
    };
  var Oa = function () {
    this.cg = 0;
  };
  Oa.prototype.Qa = function (a, b) {
    var c = this;
    return function () {
      var d = x.apply(0, arguments);
      c.cg = a;
      return b.apply(null, u(d));
    };
  };
  var Pa = function () {
      var a = {};
      this.Ca = ((a[3] = []), (a[2] = []), (a[1] = []), a);
      this.ee = !1;
    },
    Sa = function (a, b, c) {
      var d = Ra(a, c);
      a.Ca[c].push(b);
      d && 1 === a.Ca[c].length && a.flush();
    },
    Ra = function (a, b) {
      return Object.keys(a.Ca)
        .map(function (c) {
          return Number(c);
        })
        .filter(function (c) {
          return !isNaN(c) && c > b;
        })
        .every(function (c) {
          return 0 === a.Ca[c].length;
        });
    };
  Pa.prototype.flush = function () {
    if (!this.ee) {
      this.ee = !0;
      try {
        for (
          ;
          Object.values(this.Ca).some(function (a) {
            return 0 < a.length;
          });

        )
          Ta(this, 3), Ta(this, 2), Ta(this, 1);
      } catch (a) {
        throw (
          (Object.values(this.Ca).forEach(function (b) {
            return void b.splice(0, b.length);
          }),
          a)
        );
      } finally {
        this.ee = !1;
      }
    }
  };
  var Ta = function (a, b) {
    for (; Ra(a, b) && 0 < a.Ca[b].length; ) a.Ca[b][0](), a.Ca[b].shift();
  };
  da.Object.defineProperties(Pa.prototype, {
    Tf: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return Object.values(this.Ca).some(function (a) {
          return 0 < a.length;
        });
      },
    },
  });
  function Ua(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Ua);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  Ma(Ua, Error);
  Ua.prototype.name = "CustomError";
  var Va;
  function Wa(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    Ua.call(this, c + a[d]);
  }
  Ma(Wa, Ua);
  Wa.prototype.name = "AssertionError";
  function Xa(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
      e += ": " + c;
      var f = d;
    } else a && ((e += ": " + a), (f = b));
    throw new Wa("" + e, f || []);
  }
  var z = function (a, b, c) {
      a || Xa("", null, b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    Ya = function (a, b, c) {
      null == a &&
        Xa(
          "Expected to exist: %s.",
          [a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
      return a;
    },
    Za = function (a, b) {
      throw new Wa(
        "Failure" + (a ? ": " + a : ""),
        Array.prototype.slice.call(arguments, 1),
      );
    },
    $a = function (a, b, c) {
      "number" !== typeof a &&
        Xa(
          "Expected number but got %s: %s.",
          [Ja(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
    },
    ab = function (a, b, c) {
      "string" !== typeof a &&
        Xa(
          "Expected string but got %s: %s.",
          [Ja(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
    },
    bb = function (a, b, c) {
      "function" !== typeof a &&
        Xa(
          "Expected function but got %s: %s.",
          [Ja(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
      return a;
    },
    cb = function (a, b, c) {
      La(a) ||
        Xa(
          "Expected object but got %s: %s.",
          [Ja(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
    },
    eb = function (a, b, c) {
      Array.isArray(a) ||
        Xa(
          "Expected array but got %s: %s.",
          [Ja(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
      return a;
    },
    gb = function (a, b, c, d) {
      a instanceof b ||
        Xa(
          "Expected instanceof %s but got %s.",
          [fb(b), fb(a)],
          c,
          Array.prototype.slice.call(arguments, 3),
        );
      return a;
    };
  function fb(a) {
    return a instanceof Function
      ? a.displayName || a.name || "unknown type name"
      : a instanceof Object
        ? a.constructor.displayName ||
          a.constructor.name ||
          Object.prototype.toString.call(a)
        : null === a
          ? "null"
          : typeof a;
  }
  var hb = Array.prototype.forEach
      ? function (a, b) {
          z(null != a.length);
          Array.prototype.forEach.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            e in d && b.call(void 0, d[e], e, a);
        },
    ib = Array.prototype.map
      ? function (a, b) {
          z(null != a.length);
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = Array(c),
              e = "string" === typeof a ? a.split("") : a,
              f = 0;
            f < c;
            f++
          )
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        },
    jb = Array.prototype.some
      ? function (a, b) {
          z(null != a.length);
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  function kb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function lb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function mb(a, b, c) {
    if (!Ka(a) || !Ka(b) || a.length != b.length) return !1;
    var d = a.length;
    c = c || nb;
    for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return !1;
    return !0;
  }
  function nb(a, b) {
    return a === b;
  }
  function qb(a, b) {
    return kb.apply([], ib(a, b));
  }
  var rb;
  var tb = function (a) {
    if (sb !== sb) throw Error("n");
    this.Sh = a;
  };
  tb.prototype.toString = function () {
    return this.Sh + "";
  };
  var sb = {},
    ub = function (a) {
      if (void 0 === rb) {
        var b = null;
        var c = Fa.trustedTypes;
        if (c && c.createPolicy)
          try {
            b = c.createPolicy("goog#html", {
              createHTML: Na,
              createScript: Na,
              createScriptURL: Na,
            });
          } catch (d) {
            Fa.console && Fa.console.error(d.message);
          }
        rb = b;
      }
      a = (b = rb) ? b.createScriptURL(a) : a;
      return new tb(a);
    };
  var vb = function (a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase());
  };
  var xb = function (a) {
    if (wb !== wb) throw Error("o");
    this.Rh = a;
  };
  xb.prototype.toString = function () {
    return this.Rh.toString();
  };
  var wb = {};
  new xb("about:invalid#zClosurez");
  new xb("about:blank");
  var yb = {},
    zb = function () {
      if (yb !== yb) throw Error("p");
      this.Qh = "";
    };
  zb.prototype.toString = function () {
    return this.Qh.toString();
  };
  new zb();
  var Ab = {},
    Bb = function () {
      if (Ab !== Ab) throw Error("q");
      this.Ph = "";
    };
  Bb.prototype.toString = function () {
    return this.Ph.toString();
  };
  new Bb();
  var Cb = Ia(610401301, !1),
    Db = Ia(572417392, Ia(1, !0));
  function Eb() {
    var a = Fa.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Hb,
    Ib = Fa.navigator;
  Hb = Ib ? Ib.userAgentData || null : null;
  function Jb(a) {
    return Cb
      ? Hb
        ? Hb.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          })
        : !1
      : !1;
  }
  function F(a) {
    return -1 != Eb().indexOf(a);
  }
  function Kb() {
    return Cb ? !!Hb && 0 < Hb.brands.length : !1;
  }
  function Lb() {
    return Kb() ? !1 : F("Opera");
  }
  function Mb() {
    return Kb() ? !1 : F("Trident") || F("MSIE");
  }
  function Nb() {
    return (
      F("Safari") &&
      !(
        Ob() ||
        (Kb() ? 0 : F("Coast")) ||
        Lb() ||
        (Kb() ? 0 : F("Edge")) ||
        (Kb() ? Jb("Microsoft Edge") : F("Edg/")) ||
        (Kb() ? Jb("Opera") : F("OPR")) ||
        F("Firefox") ||
        F("FxiOS") ||
        F("Silk") ||
        F("Android")
      )
    );
  }
  function Ob() {
    return Kb()
      ? Jb("Chromium")
      : ((F("Chrome") || F("CriOS")) && !(Kb() ? 0 : F("Edge"))) || F("Silk");
  }
  function Pb() {
    return (
      F("Android") && !(Ob() || F("Firefox") || F("FxiOS") || Lb() || F("Silk"))
    );
  }
  function Qb() {
    var a = Eb();
    if (Mb()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
    } else a = "";
    return a;
  }
  function Rb() {
    if (Kb()) {
      var a = Hb.brands.find(function (b) {
        return "Internet Explorer" === b.brand;
      });
      if (!a || !a.version) return NaN;
      a = a.version.split(".");
    } else {
      a = Qb();
      if ("" === a) return NaN;
      a = a.split(".");
    }
    return 0 === a.length ? NaN : Number(a[0]);
  }
  var Sb = {},
    Tb = function () {
      var a = (Fa.trustedTypes && Fa.trustedTypes.emptyHTML) || "";
      if (Sb !== Sb) throw Error("r");
      this.Oh = a;
    };
  Tb.prototype.toString = function () {
    return this.Oh.toString();
  };
  new Tb();
  var Ub = function () {
    this.names = new Map();
  };
  Ub.prototype.Bb = function (a) {
    var b = this.names.get(a);
    if (b) return b;
    var c;
    b =
      null != (c = a.description)
        ? c
        : Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now(),
          ).toString(36);
    this.names.set(a, b);
    return b;
  }; /*


 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  var Vb = !1,
    Wb = {
      set wa(a) {
        a ? console.warn("s`" + Error().stack) : Vb && console.log("t");
        Vb = a;
      },
      get wa() {
        return Vb;
      },
    };
  var Xb =
    ("function" === typeof Symbol && Symbol.observable) || "@@observable";
  function Yb(a) {
    setTimeout(function () {
      throw a;
    }, 0);
  }
  var Zb = {
    closed: !0,
    next: function () {},
    error: function (a) {
      if (Wb.wa) throw a;
      Yb(a);
    },
    complete: function () {},
  };
  var $b = (function () {
    function a(b) {
      this.message = b
        ? b.length +
          " errors occurred during unsubscription:\n" +
          b
            .map(function (c, d) {
              return d + 1 + ") " + c.toString();
            })
            .join("\n  ")
        : "";
      this.name = "UnsubscriptionError";
      this.errors = b;
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  var ac =
    Array.isArray ||
    function (a) {
      return a && "number" === typeof a.length;
    };
  function bc(a) {
    return "function" === typeof a;
  }
  function cc(a) {
    return null !== a && "object" === typeof a;
  }
  var H = function (a) {
    this.closed = !1;
    this.vb = this.Qb = null;
    a && ((this.jg = !0), (this.Fa = a));
  };
  H.prototype.unsubscribe = function () {
    if (!this.closed) {
      var a = this.Qb,
        b = this.jg,
        c = this.Fa,
        d = this.vb;
      this.closed = !0;
      this.vb = this.Qb = null;
      if (a instanceof H) a.remove(this);
      else if (null !== a) for (var e = 0; e < a.length; ++e) a[e].remove(this);
      if (bc(c)) {
        b && (this.Fa = void 0);
        try {
          c.call(this);
        } catch (k) {
          var f = k instanceof $b ? dc(k.errors) : [k];
        }
      }
      if (ac(d)) {
        e = -1;
        for (var g = d.length; ++e < g; ) {
          var h = d[e];
          if (cc(h))
            try {
              h.unsubscribe();
            } catch (k) {
              (f = f || []),
                k instanceof $b ? (f = f.concat(dc(k.errors))) : f.push(k);
            }
        }
      }
      if (f) throw new $b(f);
    }
  };
  H.prototype.add = function (a) {
    var b = a;
    if (!a) return H.EMPTY;
    switch (typeof a) {
      case "function":
        b = new H(a);
      case "object":
        if (b === this || b.closed || "function" !== typeof b.unsubscribe)
          return b;
        if (this.closed) return b.unsubscribe(), b;
        b instanceof H || ((a = b), (b = new H()), (b.vb = [a]));
        break;
      default:
        throw Error("u`" + a);
    }
    var c = b.Qb;
    if (null === c) b.Qb = this;
    else if (c instanceof H) {
      if (c === this) return b;
      b.Qb = [c, this];
    } else if (-1 === c.indexOf(this)) c.push(this);
    else return b;
    a = this.vb;
    null === a ? (this.vb = [b]) : a.push(b);
    return b;
  };
  H.prototype.remove = function (a) {
    var b = this.vb;
    b && ((a = b.indexOf(a)), -1 !== a && b.splice(a, 1));
  };
  var ec = new H();
  ec.closed = !0;
  H.EMPTY = ec;
  function fc(a) {
    return (
      a instanceof H ||
      (a &&
        "closed" in a &&
        "function" === typeof a.remove &&
        "function" === typeof a.add &&
        "function" === typeof a.unsubscribe)
    );
  }
  function dc(a) {
    return a.reduce(function (b, c) {
      return b.concat(c instanceof $b ? c.errors : c);
    }, []);
  }
  var I = function (a, b, c) {
    H.call(this);
    this.fd = null;
    this.F = this.ia = this.ed = !1;
    switch (arguments.length) {
      case 0:
        this.destination = Zb;
        break;
      case 1:
        if (!a) {
          this.destination = Zb;
          break;
        }
        if ("object" === typeof a) {
          a instanceof I
            ? ((this.ia = a.ia), (this.destination = a), a.add(this))
            : ((this.ia = !0), (this.destination = new gc(this, a)));
          break;
        }
      default:
        (this.ia = !0), (this.destination = new gc(this, a, b, c));
    }
  };
  w(I, H);
  I.EMPTY = H.EMPTY;
  I.create = function (a, b, c) {
    a = new I(a, b, c);
    a.ia = !1;
    return a;
  };
  m = I.prototype;
  m.next = function (a) {
    this.F || this.o(a);
  };
  m.error = function (a) {
    this.F || ((this.F = !0), this.X(a));
  };
  m.complete = function () {
    this.F || ((this.F = !0), this.C());
  };
  m.unsubscribe = function () {
    this.closed || ((this.F = !0), H.prototype.unsubscribe.call(this));
  };
  m.o = function (a) {
    this.destination.next(a);
  };
  m.X = function (a) {
    this.destination.error(a);
    this.unsubscribe();
  };
  m.C = function () {
    this.destination.complete();
    this.unsubscribe();
  };
  var gc = function (a, b, c, d) {
    I.call(this);
    this.Rb = a;
    var e = this;
    if (bc(b)) var f = b;
    else
      b &&
        ((f = b.next),
        (c = b.error),
        (d = b.complete),
        b !== Zb &&
          ((e = Object.create(b)),
          fc(b) && b.add(this.unsubscribe.bind(this)),
          (e.unsubscribe = this.unsubscribe.bind(this))));
    this.Ea = e;
    this.o = f;
    this.X = c;
    this.C = d;
  };
  w(gc, I);
  gc.EMPTY = I.EMPTY;
  gc.create = I.create;
  m = gc.prototype;
  m.next = function (a) {
    if (!this.F && this.o) {
      var b = this.Rb;
      Wb.wa && b.ia
        ? this.qd(b, this.o, a) && this.unsubscribe()
        : this.rd(this.o, a);
    }
  };
  m.error = function (a) {
    if (!this.F) {
      var b = this.Rb,
        c = Wb.wa;
      if (this.X)
        c && b.ia ? this.qd(b, this.X, a) : this.rd(this.X, a),
          this.unsubscribe();
      else if (b.ia) c ? ((b.fd = a), (b.ed = !0)) : Yb(a), this.unsubscribe();
      else {
        this.unsubscribe();
        if (c) throw a;
        Yb(a);
      }
    }
  };
  m.complete = function () {
    var a = this;
    if (!this.F) {
      var b = this.Rb;
      if (this.C) {
        var c = function () {
          return a.C.call(a.Ea);
        };
        Wb.wa && b.ia ? this.qd(b, c) : this.rd(c);
      }
      this.unsubscribe();
    }
  };
  m.rd = function (a, b) {
    try {
      a.call(this.Ea, b);
    } catch (c) {
      this.unsubscribe();
      if (Wb.wa) throw c;
      Yb(c);
    }
  };
  m.qd = function (a, b, c) {
    if (!Wb.wa) throw Error("v");
    try {
      b.call(this.Ea, c);
    } catch (d) {
      return Wb.wa ? ((a.fd = d), (a.ed = !0)) : Yb(d), !0;
    }
    return !1;
  };
  m.Fa = function () {
    var a = this.Rb;
    this.Rb = this.Ea = null;
    a.unsubscribe();
  };
  function hc(a) {
    return a;
  }
  function J() {
    return ic(x.apply(0, arguments));
  }
  function ic(a) {
    return 0 === a.length
      ? hc
      : 1 === a.length
        ? a[0]
        : function (b) {
            return a.reduce(function (c, d) {
              return d(c);
            }, b);
          };
  }
  function jc(a) {
    return (
      a &&
      "function" === typeof a.next &&
      "function" === typeof a.error &&
      "function" === typeof a.complete
    );
  }
  var kc = function (a) {
    I.call(this);
    this.destination = a;
  };
  w(kc, I);
  kc.EMPTY = I.EMPTY;
  kc.create = I.create;
  var K = function (a) {
    a && (this.ca = a);
  };
  m = K.prototype;
  m.Fb = function (a) {
    var b = new K();
    b.source = this;
    b.operator = a;
    return b;
  };
  m.subscribe = function (a, b, c) {
    var d = this.operator;
    a: {
      if (a) {
        if (a instanceof I || (jc(a) && fc(a))) break a;
        if (jc(a)) {
          a = new kc(a);
          break a;
        }
      }
      a = a || b || c ? new I(a, b, c) : new I(Zb);
    }
    d
      ? a.add(d.call(a, this.source))
      : a.add(this.source || (Wb.wa && !a.ia) ? this.ca(a) : this.wd(a));
    if (Wb.wa && a.ia && ((a.ia = !1), a.ed)) throw a.fd;
    return a;
  };
  m.wd = function (a) {
    try {
      return this.ca(a);
    } catch (e) {
      Wb.wa && ((a.ed = !0), (a.fd = e));
      var b;
      a: {
        for (b = a; b; ) {
          var c = b.destination,
            d = b.F;
          if (b.closed || d) {
            b = !1;
            break a;
          }
          b = c && c instanceof I ? c : null;
        }
        b = !0;
      }
      b ? a.error(e) : console.warn(e);
    }
  };
  m.forEach = function (a, b) {
    var c = this;
    b = lc(b);
    return new b(function (d, e) {
      var f = c.subscribe(
        function (g) {
          try {
            a(g);
          } catch (h) {
            e(h), f && f.unsubscribe();
          }
        },
        e,
        d,
      );
    });
  };
  m.ca = function (a) {
    var b = this.source;
    return b && b.subscribe(a);
  };
  K.prototype[Xb] = function () {
    return this;
  };
  K.prototype.g = function () {
    var a = x.apply(0, arguments);
    return 0 === a.length ? this : ic(a)(this);
  };
  K.create = function (a) {
    return new K(a);
  };
  function lc(a) {
    a || (a = Promise);
    if (!a) throw Error("w");
    return a;
  }
  var mc = function (a, b) {
    H.call(this);
    this.Yf = a;
    this.Ae = b;
    this.closed = !1;
  };
  w(mc, H);
  mc.EMPTY = H.EMPTY;
  mc.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.closed = !0;
      var a = this.Yf,
        b = a.Ka;
      this.Yf = null;
      !b ||
        0 === b.length ||
        a.F ||
        a.closed ||
        ((a = b.indexOf(this.Ae)), -1 !== a && b.splice(a, 1));
    }
  };
  var nc = (function () {
    function a() {
      this.message = "object unsubscribed";
      this.name = "ObjectUnsubscribedError";
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  var L = function () {
    this.Ka = [];
    this.Yb = this.F = this.closed = !1;
    this.gd = null;
  };
  w(L, K);
  m = L.prototype;
  m.Fb = function (a) {
    var b = new oc(this, this);
    b.operator = a;
    return b;
  };
  m.next = function (a) {
    if (this.closed) throw new nc();
    if (!this.F) {
      var b = this.Ka,
        c = b.length;
      b = b.slice();
      for (var d = 0; d < c; d++) b[d].next(a);
    }
  };
  m.error = function (a) {
    if (this.closed) throw new nc();
    this.Yb = !0;
    this.gd = a;
    this.F = !0;
    var b = this.Ka,
      c = b.length;
    b = b.slice();
    for (var d = 0; d < c; d++) b[d].error(a);
    this.Ka.length = 0;
  };
  m.complete = function () {
    if (this.closed) throw new nc();
    this.F = !0;
    var a = this.Ka,
      b = a.length;
    a = a.slice();
    for (var c = 0; c < b; c++) a[c].complete();
    this.Ka.length = 0;
  };
  m.unsubscribe = function () {
    this.closed = this.F = !0;
    this.Ka = null;
  };
  m.wd = function (a) {
    if (this.closed) throw new nc();
    return K.prototype.wd.call(this, a);
  };
  m.ca = function (a) {
    if (this.closed) throw new nc();
    if (this.Yb) return a.error(this.gd), H.EMPTY;
    if (this.F) return a.complete(), H.EMPTY;
    this.Ka.push(a);
    return new mc(this, a);
  };
  m.Y = function () {
    var a = new K();
    a.source = this;
    return a;
  };
  L.create = function (a, b) {
    return new oc(a, b);
  };
  var oc = function (a, b) {
    L.call(this);
    this.destination = a;
    this.source = b;
  };
  w(oc, L);
  oc.create = L.create;
  oc.prototype.next = function (a) {
    var b = this.destination;
    b && b.next && b.next(a);
  };
  oc.prototype.error = function (a) {
    var b = this.destination;
    b && b.error && this.destination.error(a);
  };
  oc.prototype.complete = function () {
    var a = this.destination;
    a && a.complete && this.destination.complete();
  };
  oc.prototype.ca = function (a) {
    return this.source ? this.source.subscribe(a) : H.EMPTY;
  };
  var pc = function (a) {
    L.call(this);
    this.xd = a;
  };
  w(pc, L);
  pc.create = L.create;
  pc.prototype.ca = function (a) {
    var b = L.prototype.ca.call(this, a);
    b && !b.closed && a.next(this.xd);
    return b;
  };
  pc.prototype.getValue = function () {
    if (this.Yb) throw this.gd;
    if (this.closed) throw new nc();
    return this.xd;
  };
  pc.prototype.next = function (a) {
    L.prototype.next.call(this, (this.xd = a));
  };
  da.Object.defineProperties(pc.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.getValue();
      },
    },
  });
  var qc = new K(function (a) {
    return a.complete();
  });
  function rc(a, b) {
    return new K(function (c) {
      var d = new H(),
        e = 0;
      d.add(
        b.B(function () {
          e === a.length
            ? c.complete()
            : (c.next(a[e++]), c.closed || d.add(this.B()));
        }),
      );
      return d;
    });
  }
  var sc = function (a) {
    return function (b) {
      for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
      b.complete();
    };
  };
  function tc(a, b) {
    return b ? rc(a, b) : new K(sc(a));
  }
  function uc(a) {
    return a && "function" === typeof a.B;
  }
  function M() {
    var a = x.apply(0, arguments),
      b = a[a.length - 1];
    return uc(b) ? (a.pop(), rc(a, b)) : tc(a);
  }
  function vc(a) {
    return new K(function (b) {
      return b.error(a);
    });
  }
  var wc = {
    now: function () {
      return (wc.Hg || Date).now();
    },
    Hg: void 0,
  };
  var xc = function (a, b, c) {
    a = void 0 === a ? Infinity : a;
    b = void 0 === b ? Infinity : b;
    c = void 0 === c ? wc : c;
    L.call(this);
    this.pi = c;
    this.vc = [];
    this.Oe = !1;
    this.Je = 1 > a ? 1 : a;
    this.pg = 1 > b ? 1 : b;
    Infinity === b
      ? ((this.Oe = !0), (this.next = this.Bh))
      : (this.next = this.Dh);
  };
  w(xc, L);
  xc.create = L.create;
  m = xc.prototype;
  m.Bh = function (a) {
    var b = this.vc;
    b.push(a);
    b.length > this.Je && b.shift();
    L.prototype.next.call(this, a);
  };
  m.Dh = function (a) {
    this.vc.push({ time: this.Me(), value: a });
    this.Pe();
    L.prototype.next.call(this, a);
  };
  m.ca = function (a) {
    var b = this.Oe,
      c = b ? this.vc : this.Pe(),
      d = c.length;
    if (this.closed) throw new nc();
    if (this.F || this.Yb) var e = H.EMPTY;
    else this.Ka.push(a), (e = new mc(this, a));
    if (b) for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
    else for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
    this.Yb ? a.error(this.gd) : this.F && a.complete();
    return e;
  };
  m.Me = function () {
    var a = this.pi;
    return a ? a.now() : wc.now();
  };
  m.Pe = function () {
    for (
      var a = this.Me(),
        b = this.Je,
        c = this.pg,
        d = this.vc,
        e = d.length,
        f = 0;
      f < e && !(a - d[f].time < c);

    )
      f++;
    e > b && (f = Math.max(f, e - b));
    0 < f && d.splice(0, f);
    return d;
  };
  var zc = function (a, b) {
    b = void 0 === b ? yc : b;
    this.ig = a;
    this.now = b;
  };
  zc.prototype.B = function (a, b, c) {
    b = void 0 === b ? 0 : b;
    return new this.ig(this, a).B(c, b);
  };
  var yc = wc.now;
  var Ac = (function () {
    function a() {
      this.message = "no elements in sequence";
      this.name = "EmptyError";
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  function N(a, b) {
    if (a && "function" === typeof a.Fb) return a.Fb(b);
    throw new TypeError("x");
  }
  function Bc() {
    return function (a) {
      return N(a, new Cc());
    };
  }
  var Cc = function () {};
  Cc.prototype.call = function (a, b) {
    b.Sb++;
    a = new Dc(a, b);
    var c = b.subscribe(a);
    a.closed || (a.connection = b.connect());
    return c;
  };
  var Dc = function (a, b) {
    I.call(this, a);
    this.xb = b;
    this.connection = null;
  };
  w(Dc, I);
  Dc.EMPTY = I.EMPTY;
  Dc.create = I.create;
  Dc.prototype.Fa = function () {
    var a = this.xb;
    if (a) {
      this.xb = null;
      var b = a.Sb;
      0 >= b
        ? (this.connection = null)
        : ((a.Sb = b - 1),
          1 < b
            ? (this.connection = null)
            : ((b = this.connection),
              (a = a.ub),
              (this.connection = null),
              !a || (b && a !== b) || a.unsubscribe()));
    } else this.connection = null;
  };
  var Ec = function (a, b) {
    this.source = a;
    this.Zf = b;
    this.Sb = 0;
    this.wc = !1;
  };
  w(Ec, K);
  Ec.create = K.create;
  Ec.prototype.ca = function (a) {
    return this.Oc().subscribe(a);
  };
  Ec.prototype.Oc = function () {
    var a = this.xc;
    if (!a || a.F) this.xc = this.Zf();
    return this.xc;
  };
  Ec.prototype.connect = function () {
    var a = this.ub;
    a ||
      ((this.wc = !1),
      (a = this.ub = new H()),
      a.add(this.source.subscribe(new Fc(this.Oc(), this))),
      a.closed && ((this.ub = null), (a = H.EMPTY)));
    return a;
  };
  Ec.prototype.Qf = function () {
    return Bc()(this);
  };
  var Gc,
    Hc = Ec.prototype;
  Gc = {
    operator: { value: null },
    Sb: { value: 0, writable: !0 },
    xc: { value: null, writable: !0 },
    ub: { value: null, writable: !0 },
    ca: { value: Hc.ca },
    wc: { value: Hc.wc, writable: !0 },
    Oc: { value: Hc.Oc },
    connect: { value: Hc.connect },
    Qf: { value: Hc.Qf },
  };
  var Fc = function (a, b) {
    I.call(this);
    this.destination = a;
    this.xb = b;
  };
  w(Fc, I);
  Fc.EMPTY = I.EMPTY;
  Fc.create = I.create;
  Fc.prototype.X = function (a) {
    this.Fa();
    I.prototype.X.call(this, a);
  };
  Fc.prototype.C = function () {
    this.xb.wc = !0;
    this.Fa();
    I.prototype.C.call(this);
  };
  Fc.prototype.Fa = function () {
    var a = this.xb;
    if (a) {
      this.xb = null;
      var b = a.ub;
      a.Sb = 0;
      a.xc = null;
      a.ub = null;
      b && b.unsubscribe();
    }
  };
  function O(a) {
    return function (b) {
      if ("function" !== typeof a) throw new TypeError("y");
      return N(b, new Kc(a));
    };
  }
  var Kc = function (a) {
    this.M = a;
    this.ja = void 0;
  };
  Kc.prototype.call = function (a, b) {
    return b.subscribe(new Lc(a, this.M, this.ja));
  };
  var Lc = function (a, b, c) {
    I.call(this, a);
    this.M = b;
    this.count = 0;
    this.ja = c || this;
  };
  w(Lc, I);
  Lc.EMPTY = I.EMPTY;
  Lc.create = I.create;
  Lc.prototype.o = function (a) {
    try {
      var b = this.M.call(this.ja, a, this.count++);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  };
  var Mc =
    "function" === typeof Symbol && Symbol.iterator
      ? Symbol.iterator
      : "@@iterator";
  var Nc = function (a) {
    return a && "number" === typeof a.length && "function" !== typeof a;
  };
  function Oc(a) {
    return (
      !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    );
  }
  function Pc(a) {
    return function (b) {
      Qc(a, b).catch(function (c) {
        return b.error(c);
      });
    };
  }
  function Qc(a, b) {
    var c, d, e, f, g, h;
    return za(
      new ya(
        new ua(function (k) {
          switch (k.ha) {
            case 1:
              k.fb = 2;
              k.Ia = 3;
              var l = a[Symbol.asyncIterator];
              f = void 0 !== l ? l.call(a) : new Ba(t(a));
            case 5:
              return (l = f.next()), (k.ha = 8), { value: l };
            case 8:
              d = k.Ie;
              if (d.done) {
                k.mb(3);
                break;
              }
              g = d.value;
              b.next(g);
              k.mb(5);
              break;
            case 3:
              k.Qd = [k.da];
              k.fb = 0;
              k.Ia = 0;
              k.fb = 0;
              k.Ia = 9;
              if (!d || d.done || !(e = f.return)) {
                k.mb(9);
                break;
              }
              l = e.call(f);
              k.ha = 9;
              return { value: l };
            case 9:
              k.Qd[1] = k.da;
              k.fb = 0;
              k.Ia = 0;
              if (c) throw c.error;
              ta(k, 10, 1);
              break;
            case 10:
              ta(k, 4);
              break;
            case 2:
              k.fb = 0;
              l = k.da.ff;
              k.da = null;
              h = l;
              c = { error: h };
              k.mb(3);
              break;
            case 4:
              b.complete(), (k.ha = 0);
          }
        }),
      ),
    );
  }
  var Rc = function (a) {
    return function (b) {
      var c = a[Mc]();
      do {
        var d = void 0;
        try {
          d = c.next();
        } catch (e) {
          b.error(e);
          return;
        }
        if (d.done) {
          b.complete();
          break;
        }
        b.next(d.value);
        if (b.closed) break;
      } while (1);
      "function" === typeof c.return &&
        b.add(function () {
          c.return && c.return();
        });
      return b;
    };
  };
  var Sc = function (a) {
    return function (b) {
      var c = a[Xb]();
      if ("function" !== typeof c.subscribe) throw new TypeError("z");
      return c.subscribe(b);
    };
  };
  var Tc = function (a) {
    return function (b) {
      a.then(
        function (c) {
          b.closed || (b.next(c), b.complete());
        },
        function (c) {
          return b.error(c);
        },
      ).then(null, Yb);
      return b;
    };
  };
  var Uc = function (a) {
    if (a && "function" === typeof a[Xb]) return Sc(a);
    if (Nc(a)) return sc(a);
    if (Oc(a)) return Tc(a);
    if (a && "function" === typeof a[Mc]) return Rc(a);
    if (
      Symbol &&
      Symbol.asyncIterator &&
      a &&
      "function" === typeof a[Symbol.asyncIterator]
    )
      return Pc(a);
    throw new TypeError("A`" + (cc(a) ? "an invalid object" : "'" + a + "'"));
  };
  var Vc = function (a) {
    I.call(this);
    this.parent = a;
  };
  w(Vc, I);
  Vc.EMPTY = I.EMPTY;
  Vc.create = I.create;
  Vc.prototype.o = function (a) {
    this.parent.ra(a);
  };
  Vc.prototype.X = function (a) {
    this.parent.ab(a);
    this.unsubscribe();
  };
  Vc.prototype.C = function () {
    this.parent.T();
    this.unsubscribe();
  };
  var Wc = function (a, b, c) {
    I.call(this);
    this.parent = a;
    this.Lf = b;
    this.Nh = c;
  };
  w(Wc, I);
  Wc.EMPTY = I.EMPTY;
  Wc.create = I.create;
  Wc.prototype.o = function (a) {
    this.parent.ra(this.Lf, a, this.Nh, this);
  };
  Wc.prototype.X = function (a) {
    this.parent.ab(a);
    this.unsubscribe();
  };
  Wc.prototype.C = function () {
    this.parent.T(this);
    this.unsubscribe();
  };
  var P = function () {
    I.apply(this, arguments);
  };
  w(P, I);
  P.EMPTY = I.EMPTY;
  P.create = I.create;
  P.prototype.ra = function (a) {
    this.destination.next(a);
  };
  P.prototype.ab = function (a) {
    this.destination.error(a);
  };
  P.prototype.T = function () {
    this.destination.complete();
  };
  var Q = function () {
    I.apply(this, arguments);
  };
  w(Q, I);
  Q.EMPTY = I.EMPTY;
  Q.create = I.create;
  Q.prototype.ra = function (a, b) {
    this.destination.next(b);
  };
  Q.prototype.ab = function (a) {
    this.destination.error(a);
  };
  Q.prototype.T = function () {
    this.destination.complete();
  };
  function Xc(a, b) {
    if (!b.closed) return a instanceof K ? a.subscribe(b) : Uc(a)(b);
  }
  var Yc = {};
  function R() {
    var a = x.apply(0, arguments),
      b = void 0,
      c = void 0,
      d = void 0;
    uc(a[a.length - 1]) && (c = a.pop());
    "function" === typeof a[a.length - 1] && (b = a.pop());
    if (1 === a.length) {
      var e = a[0];
      ac(e) && (a = e);
      cc(e) &&
        Object.getPrototypeOf(e) === Object.prototype &&
        ((d = Object.keys(e)),
        (a = d.map(function (f) {
          return e[f];
        })));
    }
    return N(tc(a, c), new Zc(b, d));
  }
  var Zc = function (a, b) {
    this.Pa = a;
    this.keys = b;
  };
  Zc.prototype.call = function (a, b) {
    return b.subscribe(new $c(a, this.Pa, this.keys));
  };
  var $c = function (a, b, c) {
    Q.call(this, a);
    this.Pa = b;
    this.keys = c;
    this.active = 0;
    this.values = [];
    this.bb = [];
  };
  w($c, Q);
  $c.EMPTY = Q.EMPTY;
  $c.create = Q.create;
  m = $c.prototype;
  m.o = function (a) {
    this.values.push(Yc);
    this.bb.push(a);
  };
  m.C = function () {
    var a = this.bb,
      b = a.length;
    if (0 === b) this.destination.complete();
    else {
      this.tb = this.active = b;
      for (var c = 0; c < b; c++) this.add(Xc(a[c], new Wc(this, null, c)));
    }
  };
  m.T = function () {
    0 === --this.active && this.destination.complete();
  };
  m.ra = function (a, b, c) {
    var d = this.values,
      e = d[c];
    e = this.tb ? (e === Yc ? --this.tb : this.tb) : 0;
    d[c] = b;
    0 === e &&
      (this.Pa
        ? this.lg(d)
        : this.destination.next(
            this.keys
              ? this.keys.reduce(function (f, g, h) {
                  return (f[g] = d[h]), f;
                }, {})
              : d.slice(),
          ));
  };
  m.lg = function (a) {
    try {
      var b = this.Pa.apply(this, a);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  };
  function ad(a, b) {
    if (!a) throw Error("B");
    return new K(function (c) {
      var d = new H();
      d.add(
        b.B(function () {
          var e = a[Symbol.asyncIterator]();
          d.add(
            b.B(function () {
              var f = this;
              e.next().then(function (g) {
                g.done ? c.complete() : (c.next(g.value), f.B());
              });
            }),
          );
        }),
      );
      return d;
    });
  }
  function bd(a, b) {
    if (!a) throw Error("B");
    return new K(function (c) {
      var d = new H(),
        e;
      d.add(function () {
        e && "function" === typeof e.return && e.return();
      });
      d.add(
        b.B(function () {
          e = a[Mc]();
          d.add(
            b.B(function () {
              if (!c.closed) {
                try {
                  var f = e.next();
                  var g = f.value;
                  var h = f.done;
                } catch (k) {
                  c.error(k);
                  return;
                }
                h ? c.complete() : (c.next(g), this.B());
              }
            }),
          );
        }),
      );
      return d;
    });
  }
  function cd(a, b) {
    return new K(function (c) {
      var d = new H();
      d.add(
        b.B(function () {
          var e = a[Xb]();
          d.add(
            e.subscribe({
              next: function (f) {
                d.add(
                  b.B(function () {
                    return c.next(f);
                  }),
                );
              },
              error: function (f) {
                d.add(
                  b.B(function () {
                    return c.error(f);
                  }),
                );
              },
              complete: function () {
                d.add(
                  b.B(function () {
                    return c.complete();
                  }),
                );
              },
            }),
          );
        }),
      );
      return d;
    });
  }
  function dd(a, b) {
    return new K(function (c) {
      var d = new H();
      d.add(
        b.B(function () {
          return a.then(
            function (e) {
              d.add(
                b.B(function () {
                  c.next(e);
                  d.add(
                    b.B(function () {
                      return c.complete();
                    }),
                  );
                }),
              );
            },
            function (e) {
              d.add(
                b.B(function () {
                  return c.error(e);
                }),
              );
            },
          );
        }),
      );
      return d;
    });
  }
  function ed(a) {
    var b = fd;
    if (null != a) {
      if (a && "function" === typeof a[Xb]) return cd(a, b);
      if (Oc(a)) return dd(a, b);
      if (Nc(a)) return rc(a, b);
      if ((a && "function" === typeof a[Mc]) || "string" === typeof a)
        return bd(a, b);
      if (
        Symbol &&
        Symbol.asyncIterator &&
        "function" === typeof a[Symbol.asyncIterator]
      )
        return ad(a, b);
    }
    throw new TypeError("C`" + ((null !== a && typeof a) || a));
  }
  function gd(a) {
    return a instanceof K ? a : new K(Uc(a));
  }
  function hd(a, b) {
    var c = void 0 === c ? Infinity : c;
    if ("function" === typeof b)
      return function (d) {
        return d.g(
          hd(function (e, f) {
            return gd(a(e, f)).g(
              O(function (g, h) {
                return b(e, g, f, h);
              }),
            );
          }, c),
        );
      };
    "number" === typeof b && (c = b);
    return function (d) {
      return N(d, new id(a, c));
    };
  }
  var id = function (a, b) {
    b = void 0 === b ? Infinity : b;
    this.M = a;
    this.Fd = b;
  };
  id.prototype.call = function (a, b) {
    return b.subscribe(new jd(a, this.M, this.Fd));
  };
  var jd = function (a, b, c) {
    c = void 0 === c ? Infinity : c;
    P.call(this, a);
    this.destination = a;
    this.M = b;
    this.Fd = c;
    this.Cb = !1;
    this.buffer = [];
    this.index = this.active = 0;
  };
  w(jd, P);
  jd.EMPTY = P.EMPTY;
  jd.create = P.create;
  jd.prototype.o = function (a) {
    if (this.active < this.Fd) {
      var b = this.index++;
      try {
        var c = this.M(a, b);
      } catch (d) {
        this.destination.error(d);
        return;
      }
      this.active++;
      a = new Vc(this);
      this.destination.add(a);
      Xc(c, a);
    } else this.buffer.push(a);
  };
  jd.prototype.C = function () {
    this.Cb = !0;
    0 === this.active &&
      0 === this.buffer.length &&
      this.destination.complete();
    this.unsubscribe();
  };
  jd.prototype.ra = function (a) {
    this.destination.next(a);
  };
  jd.prototype.T = function () {
    var a = this.buffer;
    this.active--;
    0 < a.length
      ? this.o(a.shift())
      : 0 === this.active && this.Cb && this.destination.complete();
  };
  function kd(a) {
    a = void 0 === a ? Infinity : a;
    return hd(hc, a);
  }
  function ld() {
    return kd(1)(M.apply(null, u(x.apply(0, arguments))));
  }
  function md(a, b, c) {
    if (bc(c)) {
      var d = c;
      c = void 0;
    }
    return d
      ? md(a, b, c).g(
          O(function (e) {
            return ac(e) ? d.apply(null, u(e)) : d(e);
          }),
        )
      : new K(function (e) {
          nd(
            a,
            b,
            function (f) {
              1 < arguments.length
                ? e.next(Array.prototype.slice.call(arguments))
                : e.next(f);
            },
            e,
            c,
          );
        });
  }
  function nd(a, b, c, d, e) {
    if (
      a &&
      "function" === typeof a.addEventListener &&
      "function" === typeof a.removeEventListener
    ) {
      a.addEventListener(b, c, e);
      var f = function () {
        return a.removeEventListener(b, c, e);
      };
    } else if (a && "function" === typeof a.Hh && "function" === typeof a.Gh)
      a.Hh(b, c),
        (f = function () {
          return a.Gh(b, c);
        });
    else if (
      a &&
      "function" === typeof a.addListener &&
      "function" === typeof a.removeListener
    )
      a.addListener(b, c),
        (f = function () {
          return a.removeListener(b, c);
        });
    else if (a && a.length)
      for (var g = 0, h = a.length; g < h; g++) nd(a[g], b, c, d, e);
    else throw new TypeError("D");
    d.add(f);
  }
  var od = function () {
    H.call(this);
  };
  w(od, H);
  od.EMPTY = H.EMPTY;
  od.prototype.B = function () {
    return this;
  };
  var pd = function (a, b) {
    return setInterval.apply(null, [a, b].concat(u(x.apply(2, arguments))));
  };
  var qd = function (a, b) {
    H.call(this);
    this.scheduler = a;
    this.od = b;
    this.pending = !1;
  };
  w(qd, od);
  qd.EMPTY = od.EMPTY;
  m = qd.prototype;
  m.B = function (a, b) {
    b = void 0 === b ? 0 : b;
    if (this.closed) return this;
    this.state = a;
    a = this.id;
    var c = this.scheduler;
    null != a && (this.id = this.kc(c, a, b));
    this.pending = !0;
    this.delay = b;
    this.id = this.id || this.lc(c, this.id, b);
    return this;
  };
  m.lc = function (a, b, c) {
    return pd(a.flush.bind(a, this), void 0 === c ? 0 : c);
  };
  m.kc = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    if (null !== c && this.delay === c && !1 === this.pending) return b;
    clearInterval(b);
  };
  m.execute = function (a, b) {
    if (this.closed) return Error("E");
    this.pending = !1;
    if ((a = this.Ke(a, b))) return a;
    !1 === this.pending &&
      null != this.id &&
      (this.id = this.kc(this.scheduler, this.id, null));
  };
  m.Ke = function (a) {
    var b = !1,
      c = void 0;
    try {
      this.od(a);
    } catch (d) {
      (b = !0), (c = (!!d && d) || Error(d));
    }
    if (b) return this.unsubscribe(), c;
  };
  m.Fa = function () {
    var a = this.id,
      b = this.scheduler,
      c = b.actions,
      d = c.indexOf(this);
    this.state = this.od = null;
    this.pending = !1;
    this.scheduler = null;
    -1 !== d && c.splice(d, 1);
    null != a && (this.id = this.kc(b, a, null));
    this.delay = null;
  };
  var rd = function (a, b) {
    b = void 0 === b ? yc : b;
    zc.call(this, a, b);
    this.actions = [];
    this.active = !1;
    this.dd = void 0;
  };
  w(rd, zc);
  rd.prototype.flush = function (a) {
    var b = this.actions;
    if (this.active) b.push(a);
    else {
      var c;
      this.active = !0;
      do if ((c = a.execute(a.state, a.delay))) break;
      while ((a = b.shift()));
      this.active = !1;
      if (c) {
        for (; (a = b.shift()); ) a.unsubscribe();
        throw c;
      }
    }
  };
  function sd() {
    var a = x.apply(0, arguments),
      b = Infinity,
      c = void 0,
      d = a[a.length - 1];
    uc(d)
      ? ((c = a.pop()),
        1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop()))
      : "number" === typeof d && (b = a.pop());
    return !c && 1 === a.length && a[0] instanceof K ? a[0] : kd(b)(tc(a, c));
  }
  function td() {}
  var ud = new K(td);
  function T(a) {
    return function (b) {
      return N(b, new vd(a));
    };
  }
  var vd = function (a) {
    this.ua = a;
    this.ja = void 0;
  };
  vd.prototype.call = function (a, b) {
    return b.subscribe(new wd(a, this.ua, this.ja));
  };
  var wd = function (a, b, c) {
    I.call(this, a);
    this.ua = b;
    this.ja = c;
    this.count = 0;
  };
  w(wd, I);
  wd.EMPTY = I.EMPTY;
  wd.create = I.create;
  wd.prototype.o = function (a) {
    try {
      var b = this.ua.call(this.ja, a, this.count++);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    b && this.destination.next(a);
  };
  function xd() {
    var a = x.apply(0, arguments);
    if (1 === a.length)
      if (ac(a[0])) a = a[0];
      else return gd(a[0]);
    return N(tc(a), new yd());
  }
  var yd = function () {};
  yd.prototype.call = function (a, b) {
    return b.subscribe(new zd(a));
  };
  var zd = function (a) {
    Q.call(this, a);
    this.Zb = !1;
    this.bb = [];
    this.pc = [];
  };
  w(zd, Q);
  zd.EMPTY = Q.EMPTY;
  zd.create = Q.create;
  m = zd.prototype;
  m.o = function (a) {
    this.bb.push(a);
  };
  m.C = function () {
    var a = this.bb,
      b = a.length;
    if (0 === b) this.destination.complete();
    else {
      for (var c = 0; c < b && !this.Zb; c++) {
        var d = Xc(a[c], new Wc(this, null, c));
        this.pc && this.pc.push(d);
        this.add(d);
      }
      this.bb = null;
    }
  };
  m.ra = function (a, b, c) {
    if (!this.Zb) {
      this.Zb = !0;
      for (var d = 0; d < this.pc.length; d++)
        if (d !== c) {
          var e = this.pc[d];
          e.unsubscribe();
          this.remove(e);
        }
      this.pc = null;
    }
    this.destination.next(b);
  };
  m.T = function (a) {
    this.Zb = !0;
    Q.prototype.T.call(this, a);
  };
  m.ab = function (a) {
    this.Zb = !0;
    Q.prototype.ab.call(this, a);
  };
  function Ad() {
    var a = x.apply(0, arguments),
      b = void 0;
    "function" === typeof a[a.length - 1] && (b = a.pop());
    return N(tc(a), new Bd(b));
  }
  var Bd = function (a) {
    this.Pa = a;
  };
  Bd.prototype.call = function (a, b) {
    return b.subscribe(new Cd(a, this.Pa));
  };
  var Cd = function (a, b, c) {
    void 0 === c && Object.create(null);
    I.call(this, a);
    this.ge = [];
    this.active = 0;
    this.Pa = b;
  };
  w(Cd, I);
  Cd.EMPTY = I.EMPTY;
  Cd.create = I.create;
  Cd.prototype.o = function (a) {
    var b = this.ge;
    ac(a)
      ? b.push(new Dd(a))
      : "function" === typeof a[Mc]
        ? b.push(new Ed(a[Mc]()))
        : b.push(new Fd(this.destination, this, a));
  };
  Cd.prototype.C = function () {
    var a = this.ge,
      b = a.length;
    this.unsubscribe();
    if (0 === b) this.destination.complete();
    else {
      this.active = b;
      for (var c = 0; c < b; c++) {
        var d = a[c];
        d.ki ? this.destination.add(d.subscribe()) : this.active--;
      }
    }
  };
  Cd.prototype.mg = function (a) {
    try {
      var b = this.Pa.apply(this, a);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  };
  var Ed = function (a) {
    this.iterator = a;
    this.le = a.next();
  };
  Ed.prototype.jb = function () {
    return !0;
  };
  Ed.prototype.next = function () {
    var a = this.le;
    this.le = this.iterator.next();
    return a;
  };
  Ed.prototype.Cb = function () {
    var a = this.le;
    return a && !!a.done;
  };
  var Dd = function (a) {
    this.Ad = a;
    this.length = this.index = 0;
    this.length = a.length;
  };
  Dd.prototype[Mc] = function () {
    return this;
  };
  Dd.prototype.next = function () {
    var a = this.index++,
      b = this.Ad;
    return a < this.length
      ? { value: b[a], done: !1 }
      : { value: null, done: !0 };
  };
  Dd.prototype.jb = function () {
    return this.Ad.length > this.index;
  };
  Dd.prototype.Cb = function () {
    return this.Ad.length === this.index;
  };
  var Fd = function (a, b, c) {
    P.call(this, a);
    this.parent = b;
    this.observable = c;
    this.ki = !0;
    this.buffer = [];
    this.ce = !1;
  };
  w(Fd, P);
  Fd.EMPTY = P.EMPTY;
  Fd.create = P.create;
  Fd.prototype[Mc] = function () {
    return this;
  };
  m = Fd.prototype;
  m.next = function () {
    var a = this.buffer;
    return 0 === a.length && this.ce
      ? { value: null, done: !0 }
      : { value: a.shift(), done: !1 };
  };
  m.jb = function () {
    return 0 < this.buffer.length;
  };
  m.Cb = function () {
    return 0 === this.buffer.length && this.ce;
  };
  m.T = function () {
    if (0 < this.buffer.length) {
      this.ce = !0;
      var a = this.parent;
      a.active--;
      0 === a.active && a.destination.complete();
    } else this.destination.complete();
  };
  m.ra = function (a) {
    this.buffer.push(a);
    a: {
      a = this.parent;
      for (var b = a.ge, c = b.length, d = a.destination, e = 0; e < c; e++) {
        var f = b[e];
        if ("function" === typeof f.jb && !f.jb()) break a;
      }
      e = !1;
      f = [];
      for (var g = 0; g < c; g++) {
        var h = b[g],
          k = h.next();
        h.Cb() && (e = !0);
        if (k.done) {
          d.complete();
          break a;
        }
        f.push(k.value);
      }
      a.Pa ? a.mg(f) : d.next(f);
      e && d.complete();
    }
  };
  m.subscribe = function () {
    return Xc(this.observable, new Vc(this));
  };
  (function () {
    function a(b) {
      this.message = "Timeout has occurred";
      this.name = "TimeoutError";
      this.info = void 0 === b ? null : b;
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  var Gd = 1,
    Hd,
    Id = {};
  function Jd(a) {
    return a in Id ? (delete Id[a], !0) : !1;
  }
  var Kd = function (a) {
    var b = Gd++;
    Id[b] = !0;
    Hd || (Hd = Promise.resolve());
    Hd.then(function () {
      return Jd(b) && a();
    });
    return b;
  };
  var Ld = function () {
    return Kd.apply(null, u(x.apply(0, arguments)));
  };
  var Md = function (a, b) {
    qd.call(this, a, b);
    this.scheduler = a;
    this.od = b;
  };
  w(Md, qd);
  Md.EMPTY = qd.EMPTY;
  Md.prototype.lc = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    if (null !== c && 0 < c) return qd.prototype.lc.call(this, a, b, c);
    a.actions.push(this);
    return a.dd || (a.dd = Ld(a.flush.bind(a, void 0)));
  };
  Md.prototype.kc = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    if ((null !== c && 0 < c) || (null === c && 0 < this.delay))
      return qd.prototype.kc.call(this, a, b, c);
    0 === a.actions.length && (Jd(b), (a.dd = void 0));
  };
  var Pd = function () {
    rd.apply(this, arguments);
  };
  w(Pd, rd);
  Pd.prototype.flush = function (a) {
    this.active = !0;
    this.dd = void 0;
    var b = this.actions,
      c,
      d = -1;
    a = a || b.shift();
    var e = b.length;
    do if ((c = a.execute(a.state, a.delay))) break;
    while (++d < e && (a = b.shift()));
    this.active = !1;
    if (c) {
      for (; ++d < e && (a = b.shift()); ) a.unsubscribe();
      throw c;
    }
  };
  var Qd = new Pd(Md);
  var Rd = function (a, b) {
    qd.call(this, a, b);
    this.scheduler = a;
    this.od = b;
  };
  w(Rd, qd);
  Rd.EMPTY = qd.EMPTY;
  Rd.prototype.B = function (a, b) {
    b = void 0 === b ? 0 : b;
    if (0 < b) return qd.prototype.B.call(this, a, b);
    this.delay = b;
    this.state = a;
    this.scheduler.flush(this);
    return this;
  };
  Rd.prototype.execute = function (a, b) {
    return 0 < b || this.closed
      ? qd.prototype.execute.call(this, a, b)
      : this.Ke(a, b);
  };
  Rd.prototype.lc = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    return (null !== c && 0 < c) || (null === c && 0 < this.delay)
      ? qd.prototype.lc.call(this, a, b, c)
      : a.flush(this);
  };
  var Sd = function () {
    rd.apply(this, arguments);
  };
  w(Sd, rd);
  var fd = new Sd(Rd);
  var Td = (function () {
    function a() {
      this.message = "argument out of range";
      this.name = "ArgumentOutOfRangeError";
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  (function () {
    function a(b) {
      this.message = b;
      this.name = "NotFoundError";
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  (function () {
    function a(b) {
      this.message = b;
      this.name = "SequenceError";
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  var Ud = function () {
    this.A = new Oa();
    this.h = new Pa();
    this.hh = Symbol();
    this.af = new Ub();
  };
  Ud.prototype.Td = function () {
    return ud;
  };
  da.Object.defineProperties(Ud.prototype, {
    Ob: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.hh;
      },
    },
  });
  var Vd = function (a, b) {
    b = Error.call(this, b ? a + ": " + b : String(a));
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
    this.code = a;
    this.__proto__ = Vd.prototype;
    this.name = String(a);
  };
  w(Vd, Error);
  var Wd = function (a) {
    Vd.call(this, 1e3, 'sfr:"' + a + '"');
    this.vh = a;
    this.__proto__ = Wd.prototype;
  };
  w(Wd, Vd);
  var Xd = function () {
    Vd.call(this, 1003);
    this.__proto__ = Xd.prototype;
  };
  w(Xd, Vd);
  var Yd = function () {
    Vd.call(this, 1009);
    this.__proto__ = Yd.prototype;
  };
  w(Yd, Vd);
  var Zd = function () {
    Vd.call(this, 1011);
    this.__proto__ = Zd.prototype;
  };
  w(Zd, Vd);
  var $d = function () {
    Vd.call(this, 1007);
    this.__proto__ = Xd.prototype;
  };
  w($d, Vd);
  var ae = function () {
    Vd.call(this, 1008);
    this.__proto__ = Xd.prototype;
  };
  w(ae, Vd);
  var be = function () {
    Vd.call(this, 1001);
    this.__proto__ = be.prototype;
  };
  w(be, Vd);
  var ce = function (a) {
    Vd.call(this, 1004, String(a));
    this.fh = a;
    this.__proto__ = ce.prototype;
  };
  w(ce, Vd);
  var ee = function (a) {
    Vd.call(this, 1010, a);
    this.__proto__ = de.prototype;
  };
  w(ee, Vd);
  var de = function (a) {
    Vd.call(this, 1005, a);
    this.__proto__ = de.prototype;
  };
  w(de, Vd);
  var fe = function (a) {
    var b = x.apply(1, arguments),
      c = this;
    this.Jb = [];
    this.Jb.push(a);
    b.forEach(function (d) {
      c.Jb.push(d);
    });
  };
  fe.prototype.K = function (a) {
    return this.Jb.some(function (b) {
      return b.K(a);
    });
  };
  fe.prototype.S = function (a, b) {
    for (var c = 0; c < this.Jb.length; c++)
      if (this.Jb[c].K(b)) return this.Jb[c].S(a, b);
    throw new Yd();
  };
  function ge(a) {
    var b, c, d;
    return (
      !!a &&
      "boolean" === typeof a.active &&
      "function" === typeof (null == (b = a.clock) ? void 0 : b.now) &&
      void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) &&
      !(null == (d = a.u) || !d.timestamp) &&
      "function" === typeof a.ea &&
      "function" === typeof a.ga &&
      "function" === typeof a.oa &&
      "function" === typeof a.map &&
      "function" === typeof a.qa
    );
  }
  var he = Symbol("time-origin"),
    ie = Symbol("date"),
    je = function (a, b) {
      this.value = a;
      this.timeline = b;
    },
    ke = function (a, b) {
      if (b.timeline !== a.timeline) throw new $d();
      return a.value - b.value;
    };
  je.prototype.equals = function (a) {
    return 0 === ke(this, a);
  };
  je.prototype.maximum = function (a) {
    if (a.timeline !== this.timeline) throw new $d();
    return this.value >= a.value ? this : a;
  };
  je.prototype.round = function () {
    return new je(Math.round(this.value), this.timeline);
  };
  je.prototype.toString = function () {
    return String(this.value);
  };
  function le(a) {
    function b(c) {
      return (
        "boolean" === typeof c ||
        "string" === typeof c ||
        "number" === typeof c ||
        void 0 === c ||
        null === c
      );
    }
    return b(a)
      ? !0
      : Array.isArray(a)
        ? a.every(b)
        : "object" === typeof a
          ? Object.keys(a).every(function (c) {
              return "string" === typeof c;
            }) &&
            Object.values(a).every(function (c) {
              return Array.isArray(c) ? c.every(b) : b(c);
            })
          : !1;
  }
  function me(a) {
    if (le(a)) return a;
    if (ge(a))
      return {
        u: {
          value: me(a.u.value),
          timestamp: ke(a.u.timestamp, new je(0, a.u.timestamp.timeline)),
        },
        active: a.active,
      };
    try {
      return JSON.parse(JSON.stringify(a));
    } catch (b) {}
    return String(a);
  }
  function ne(a) {
    return function (b) {
      return N(b, function (c) {
        var d = this,
          e = new H(),
          f = null,
          g = !1,
          h;
        f = c.subscribe({
          next: function (k) {
            return d.next(k);
          },
          error: function (k) {
            try {
              h = gd(a(k, ne(a)(c)));
            } catch (l) {
              d.error(l);
            }
            h &&
              (f
                ? (f.unsubscribe(), (f = null), e.add(h.subscribe(d)))
                : (g = !0));
          },
          complete: function () {
            return d.complete();
          },
        });
        g ? (f.unsubscribe(), (f = null), e.add(h.subscribe(d))) : e.add(f);
        return e;
      });
    };
  }
  function oe() {
    var a = x.apply(0, arguments),
      b = void 0;
    "function" === typeof a[a.length - 1] && (b = a.pop());
    1 === a.length && ac(a[0]) && (a = a[0].slice());
    return function (c) {
      var d = gd([c].concat(u(a))),
        e = new Zc(b);
      if (c && "function" === typeof c.Fb) c = c.Fb.call(d, e);
      else throw new TypeError("x");
      return c;
    };
  }
  function pe() {
    return oe.apply(null, u(x.apply(0, arguments)));
  }
  function qe(a) {
    a = void 0 === a ? null : a;
    return function (b) {
      return N(b, new re(a));
    };
  }
  var re = function (a) {
    this.defaultValue = a;
  };
  re.prototype.call = function (a, b) {
    return b.subscribe(new se(a, this.defaultValue));
  };
  var se = function (a, b) {
    I.call(this, a);
    this.defaultValue = b;
    this.Vc = !0;
  };
  w(se, I);
  se.EMPTY = I.EMPTY;
  se.create = I.create;
  se.prototype.o = function (a) {
    this.Vc = !1;
    this.destination.next(a);
  };
  se.prototype.C = function () {
    this.Vc && this.destination.next(this.defaultValue);
    this.destination.complete();
  };
  function te(a) {
    return function (b) {
      return N(b, new ue(a));
    };
  }
  var ue = function (a) {
    this.Ld = a;
  };
  ue.prototype.call = function (a, b) {
    return b.subscribe(new ve(a, this.Ld));
  };
  var ve = function (a, b) {
    Q.call(this, a);
    this.Ld = b;
    this.We = !1;
    this.Ic = [];
    this.index = 0;
  };
  w(ve, Q);
  ve.EMPTY = Q.EMPTY;
  ve.create = Q.create;
  m = ve.prototype;
  m.ra = function (a, b, c, d) {
    this.destination.next(a);
    we(this, d);
    xe(this);
  };
  m.ab = function (a) {
    this.X(a);
  };
  m.T = function (a) {
    (a = we(this, a)) && this.destination.next(a);
    xe(this);
  };
  m.o = function (a) {
    var b = this.index++;
    try {
      var c = this.Ld(a, b);
      if (c) {
        var d = Xc(c, new Wc(this, a, 0));
        d && !d.closed && (this.destination.add(d), this.Ic.push(d));
      }
    } catch (e) {
      this.destination.error(e);
    }
  };
  m.C = function () {
    this.We = !0;
    xe(this);
    this.unsubscribe();
  };
  var we = function (a, b) {
      b.unsubscribe();
      var c = a.Ic.indexOf(b);
      -1 !== c && a.Ic.splice(c, 1);
      return b.Lf;
    },
    xe = function (a) {
      a.We && 0 === a.Ic.length && a.destination.complete();
    };
  function ye(a) {
    return function (b) {
      return N(b, new ze(a));
    };
  }
  var ze = function (a) {
    this.Za = a;
    this.Vg = void 0;
  };
  ze.prototype.call = function (a, b) {
    return b.subscribe(new Ae(a, this.Za, this.Vg));
  };
  var Ae = function (a, b, c) {
    P.call(this, a);
    this.Za = b;
    this.values = new Set();
    c && this.add(Xc(c, new Vc(this)));
  };
  w(Ae, P);
  Ae.EMPTY = P.EMPTY;
  Ae.create = P.create;
  m = Ae.prototype;
  m.ra = function () {
    this.values.clear();
  };
  m.ab = function (a) {
    this.X(a);
  };
  m.o = function (a) {
    this.Za ? this.ng(a) : this.Le(a, a);
  };
  m.ng = function (a) {
    var b = this.destination;
    try {
      var c = this.Za(a);
    } catch (d) {
      b.error(d);
      return;
    }
    this.Le(c, a);
  };
  m.Le = function (a, b) {
    var c = this.values;
    c.has(a) || (c.add(a), this.destination.next(b));
  };
  function V(a) {
    return function (b) {
      return N(b, new Be(a));
    };
  }
  var Be = function (a) {
    this.compare = a;
    this.Za = void 0;
  };
  Be.prototype.call = function (a, b) {
    return b.subscribe(new Ce(a, this.compare, this.Za));
  };
  var Ce = function (a, b, c) {
    I.call(this, a);
    this.Za = c;
    this.rf = !1;
    "function" === typeof b && (this.compare = b);
  };
  w(Ce, I);
  Ce.EMPTY = I.EMPTY;
  Ce.create = I.create;
  Ce.prototype.compare = function (a, b) {
    return a === b;
  };
  Ce.prototype.o = function (a) {
    try {
      var b = this.Za;
      var c = b ? b(a) : a;
    } catch (e) {
      return this.destination.error(e);
    }
    b = !1;
    if (this.rf)
      try {
        var d = this.compare;
        b = d(this.key, c);
      } catch (e) {
        return this.destination.error(e);
      }
    else this.rf = !0;
    b || ((this.key = c), this.destination.next(a));
  };
  function De(a) {
    if (isNaN(a)) throw new TypeError("F");
    if (0 > a) throw new Td();
    return function (b) {
      return 0 === a ? qc : N(b, new Ee(a));
    };
  }
  var Ee = function (a) {
    this.count = a;
  };
  Ee.prototype.call = function (a, b) {
    return b.subscribe(new Fe(a, this.count));
  };
  var Fe = function (a, b) {
    I.call(this, a);
    this.count = b;
    this.og = 0;
  };
  w(Fe, I);
  Fe.EMPTY = I.EMPTY;
  Fe.create = I.create;
  Fe.prototype.o = function (a) {
    var b = this.count,
      c = ++this.og;
    c <= b &&
      (this.destination.next(a),
      c === b && (this.destination.complete(), this.unsubscribe()));
  };
  function Ge(a) {
    a = void 0 === a ? He : a;
    return function (b) {
      return N(b, new Ie(a));
    };
  }
  var Ie = function (a) {
    this.Od = a;
  };
  Ie.prototype.call = function (a, b) {
    return b.subscribe(new Je(a, this.Od));
  };
  var Je = function (a, b) {
    I.call(this, a);
    this.Od = b;
    this.jb = !1;
  };
  w(Je, I);
  Je.EMPTY = I.EMPTY;
  Je.create = I.create;
  Je.prototype.o = function (a) {
    this.jb = !0;
    this.destination.next(a);
  };
  Je.prototype.C = function () {
    if (this.jb) return this.destination.complete();
    try {
      var a = this.Od();
    } catch (b) {
      a = b;
    }
    this.destination.error(a);
  };
  function He() {
    return new Ac();
  }
  function Ke() {
    var a = x.apply(0, arguments);
    return function (b) {
      return ld(b, M.apply(null, u(a)));
    };
  }
  function Le(a) {
    return function (b) {
      return N(b, new Me(a, b));
    };
  }
  var Me = function (a, b) {
    this.ua = a;
    this.ja = void 0;
    this.source = b;
  };
  Me.prototype.call = function (a, b) {
    return b.subscribe(new Ne(a, this.ua, this.ja, this.source));
  };
  var Ne = function (a, b, c, d) {
    I.call(this, a);
    this.ua = b;
    this.ja = c;
    this.source = d;
    this.index = 0;
    this.ja = c || this;
  };
  w(Ne, I);
  Ne.EMPTY = I.EMPTY;
  Ne.create = I.create;
  Ne.prototype.T = function (a) {
    this.destination.next(a);
    this.destination.complete();
  };
  Ne.prototype.o = function (a) {
    var b = !1;
    try {
      b = this.ua.call(this.ja, a, this.index++, this.source);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    b || this.T(!1);
  };
  Ne.prototype.C = function () {
    this.T(!0);
  };
  function Oe() {
    return function (a) {
      return N(a, new Pe());
    };
  }
  var Pe = function () {};
  Pe.prototype.call = function (a, b) {
    return b.subscribe(new Qe(a));
  };
  var Qe = function () {
    I.apply(this, arguments);
  };
  w(Qe, I);
  Qe.EMPTY = I.EMPTY;
  Qe.create = I.create;
  Qe.prototype.o = function () {};
  function Re() {
    if (isNaN(1)) throw new TypeError("F");
    return function (a) {
      return N(a, new Se());
    };
  }
  var Se = function () {
    this.total = 1;
  };
  Se.prototype.call = function (a, b) {
    return b.subscribe(new Te(a, this.total));
  };
  var Te = function (a, b) {
    I.call(this, a);
    this.total = b;
    this.Sf = [];
    this.count = 0;
  };
  w(Te, I);
  Te.EMPTY = I.EMPTY;
  Te.create = I.create;
  Te.prototype.o = function (a) {
    var b = this.Sf,
      c = this.total,
      d = this.count++;
    b.length < c ? b.push(a) : (b[d % c] = a);
  };
  Te.prototype.C = function () {
    var a = this.destination,
      b = this.count;
    if (0 < b)
      for (
        var c = this.count >= this.total ? this.total : this.count,
          d = this.Sf,
          e = 0;
        e < c;
        e++
      ) {
        var f = b++ % c;
        a.next(d[f]);
      }
    a.complete();
  };
  function Ue(a, b) {
    var c = 2 <= arguments.length;
    return function (d) {
      return d.g(
        a
          ? T(function (e, f) {
              return a(e, f, d);
            })
          : hc,
        Re(),
        c
          ? qe(b)
          : Ge(function () {
              return new Ac();
            }),
      );
    };
  }
  function Ve(a) {
    return function (b) {
      return N(b, new We(a));
    };
  }
  var We = function (a) {
    this.value = a;
  };
  We.prototype.call = function (a, b) {
    return b.subscribe(new Xe(a, this.value));
  };
  var Xe = function (a, b) {
    I.call(this, a);
    this.value = b;
  };
  w(Xe, I);
  Xe.EMPTY = I.EMPTY;
  Xe.create = I.create;
  Xe.prototype.o = function () {
    this.destination.next(this.value);
  };
  function Ye(a, b) {
    var c = !1;
    2 <= arguments.length && (c = !0);
    return function (d) {
      return N(d, new Ze(a, b, c));
    };
  }
  var Ze = function (a, b, c) {
    this.yd = a;
    this.seed = b;
    this.bh = void 0 === c ? !1 : c;
  };
  Ze.prototype.call = function (a, b) {
    return b.subscribe(new $e(a, this.yd, this.seed, this.bh));
  };
  var $e = function (a, b, c, d) {
    I.call(this, a);
    this.yd = b;
    this.sd = c;
    this.Ne = d;
    this.index = 0;
  };
  w($e, I);
  $e.EMPTY = I.EMPTY;
  $e.create = I.create;
  $e.prototype.o = function (a) {
    var b = this.destination;
    if (this.Ne) {
      var c = this.index++;
      try {
        var d = this.yd(this.sd, a, c);
      } catch (e) {
        b.error(e);
        return;
      }
      this.sd = d;
      b.next(d);
    } else (this.sd = a), (this.Ne = !0), b.next(a);
  };
  function af(a) {
    return function (b) {
      var c =
        "function" === typeof a
          ? a
          : function () {
              return a;
            };
      var d = Object.create(b, Gc);
      d.source = b;
      d.Zf = c;
      return d;
    };
  }
  function bf() {
    var a = x.apply(0, arguments);
    1 === a.length && ac(a[0]) && (a = a[0]);
    return function (b) {
      return N(b, new cf(a));
    };
  }
  var cf = function (a) {
    this.me = a;
  };
  cf.prototype.call = function (a, b) {
    return b.subscribe(new df(a, this.me));
  };
  var df = function (a, b) {
    P.call(this, a);
    this.destination = a;
    this.me = b;
  };
  w(df, P);
  df.EMPTY = P.EMPTY;
  df.create = P.create;
  df.prototype.ab = function () {
    ef(this);
  };
  df.prototype.T = function () {
    ef(this);
  };
  df.prototype.X = function () {
    ef(this);
    this.unsubscribe();
  };
  df.prototype.C = function () {
    ef(this);
    this.unsubscribe();
  };
  var ef = function (a) {
    var b = a.me.shift();
    if (b) {
      var c = new Vc(a);
      a.destination.add(c);
      Xc(b, c);
    } else a.destination.complete();
  };
  function ff(a) {
    var b = new xc(a, void 0, void 0);
    return function (c) {
      return af(function () {
        return b;
      })(c);
    };
  }
  function gf() {
    var a = void 0 === a ? Infinity : a;
    return function (b) {
      return 0 >= a
        ? qc
        : N(b, function (c) {
            var d = this,
              e = 0,
              f = new H(),
              g,
              h = function () {
                var k = !1;
                g = c.subscribe({
                  next: function (l) {
                    return d.next(l);
                  },
                  error: function (l) {
                    return d.error(l);
                  },
                  complete: function () {
                    ++e < a
                      ? g
                        ? (g.unsubscribe(), (g = null), h())
                        : (k = !0)
                      : d.complete();
                  },
                });
                k ? (g.unsubscribe(), (g = null), h()) : f.add(g);
              };
            h();
            return f;
          });
    };
  }
  function hf() {
    return new L();
  }
  function jf() {
    return function (a) {
      return Bc()(af(hf)(a));
    };
  }
  function W() {
    var a = x.apply(0, arguments),
      b = a[a.length - 1];
    return uc(b)
      ? (a.pop(),
        function (c) {
          return ld(a, c, b);
        })
      : function (c) {
          return ld(a, c);
        };
  }
  var kf = function (a, b, c) {
    b = void 0 === b ? 0 : b;
    c = void 0 === c ? Qd : c;
    this.source = a;
    this.delayTime = b;
    this.scheduler = c;
    0 > b && (this.delayTime = 0);
    uc(c) || (this.scheduler = Qd);
  };
  w(kf, K);
  kf.create = K.create;
  kf.Ig = function (a) {
    return this.add(a.source.subscribe(a.Ae));
  };
  kf.prototype.ca = function (a) {
    return this.scheduler.B(kf.Ig, this.delayTime, {
      source: this.source,
      Ae: a,
    });
  };
  function lf() {
    var a = void 0 === a ? 0 : a;
    return function (b) {
      return N(b, new mf(a));
    };
  }
  var mf = function (a) {
    this.scheduler = fd;
    this.delay = a;
  };
  mf.prototype.call = function (a, b) {
    return new kf(b, this.delay, this.scheduler).subscribe(a);
  };
  function X(a) {
    return function (b) {
      return N(b, new of(a));
    };
  }
  var of = function (a) {
    this.M = a;
  };
  of.prototype.call = function (a, b) {
    return b.subscribe(new pf(a, this.M));
  };
  var pf = function (a, b) {
    P.call(this, a);
    this.destination = a;
    this.M = b;
    this.index = 0;
  };
  w(pf, P);
  pf.EMPTY = P.EMPTY;
  pf.create = P.create;
  m = pf.prototype;
  m.o = function (a) {
    var b = this.index++;
    try {
      var c = this.M(a, b);
    } catch (d) {
      this.destination.error(d);
      return;
    }
    (a = this.Tc) && a.unsubscribe();
    a = new Vc(this);
    this.destination.add(a);
    this.Tc = a;
    Xc(c, a);
  };
  m.C = function () {
    var a = this.Tc;
    (a && !a.closed) || P.prototype.C.call(this);
    this.unsubscribe();
  };
  m.Fa = function () {
    this.Tc = void 0;
  };
  m.T = function () {
    this.Tc = void 0;
    this.F && P.prototype.C.call(this);
  };
  m.ra = function (a) {
    this.destination.next(a);
  };
  function qf(a, b) {
    b = void 0 === b ? !1 : b;
    return function (c) {
      return N(c, new rf(a, b));
    };
  }
  var rf = function (a, b) {
    this.ua = a;
    this.Yd = b;
  };
  rf.prototype.call = function (a, b) {
    return b.subscribe(new sf(a, this.ua, this.Yd));
  };
  var sf = function (a, b, c) {
    I.call(this, a);
    this.ua = b;
    this.Yd = c;
    this.index = 0;
  };
  w(sf, I);
  sf.EMPTY = I.EMPTY;
  sf.create = I.create;
  sf.prototype.o = function (a) {
    var b = this.destination;
    try {
      var c = this.ua(a, this.index++);
    } catch (d) {
      b.error(d);
      return;
    }
    b = this.destination;
    c ? b.next(a) : (this.Yd && b.next(a), b.complete());
  };
  function tf(a, b, c) {
    return function (d) {
      return N(d, new uf(a, b, c));
    };
  }
  var uf = function (a, b, c) {
    this.Ch = a;
    this.error = b;
    this.complete = c;
  };
  uf.prototype.call = function (a, b) {
    return b.subscribe(new vf(a, this.Ch, this.error, this.complete));
  };
  var vf = function (a, b, c, d) {
    I.call(this, a);
    this.td = this.ud = this.vd = td;
    this.ud = c || td;
    this.td = d || td;
    bc(b)
      ? ((this.Ea = this), (this.vd = b))
      : b &&
        ((this.Ea = b),
        (this.vd = b.next || td),
        (this.ud = b.error || td),
        (this.td = b.complete || td));
  };
  w(vf, I);
  vf.EMPTY = I.EMPTY;
  vf.create = I.create;
  vf.prototype.o = function (a) {
    try {
      this.vd.call(this.Ea, a);
    } catch (b) {
      this.destination.error(b);
      return;
    }
    this.destination.next(a);
  };
  vf.prototype.X = function (a) {
    try {
      this.ud.call(this.Ea, a);
    } catch (b) {
      this.destination.error(b);
      return;
    }
    this.destination.error(a);
  };
  vf.prototype.C = function () {
    try {
      this.td.call(this.Ea);
    } catch (a) {
      this.destination.error(a);
      return;
    }
    return this.destination.complete();
  };
  function wf() {
    var a = x.apply(0, arguments);
    return function (b) {
      var c;
      "function" === typeof a[a.length - 1] && (c = a.pop());
      return N(b, new xf(a, c));
    };
  }
  var xf = function (a, b) {
    this.bb = a;
    this.M = b;
  };
  xf.prototype.call = function (a, b) {
    return b.subscribe(new yf(a, this.bb, this.M));
  };
  var yf = function (a, b, c) {
    Q.call(this, a);
    this.M = c;
    this.tb = [];
    a = b.length;
    this.values = Array(a);
    for (c = 0; c < a; c++) this.tb.push(c);
    for (c = 0; c < a; c++) this.add(Xc(b[c], new Wc(this, void 0, c)));
  };
  w(yf, Q);
  yf.EMPTY = Q.EMPTY;
  yf.create = Q.create;
  yf.prototype.ra = function (a, b, c) {
    this.values[c] = b;
    b = this.tb;
    0 < b.length && ((c = b.indexOf(c)), -1 !== c && b.splice(c, 1));
  };
  yf.prototype.T = function () {};
  yf.prototype.o = function (a) {
    0 === this.tb.length &&
      ((a = [a].concat(u(this.values))),
      this.M ? this.kg(a) : this.destination.next(a));
  };
  yf.prototype.kg = function (a) {
    try {
      var b = this.M.apply(this, a);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  };
  var zf = function (a) {
    this.sa = a;
  };
  zf.prototype.K = function (a) {
    return (null == a ? 0 : a.Bc)
      ? !0
      : "POST" === (null == a ? void 0 : a.wb) ||
          (null == a ? 0 : a.yb) ||
          (null == a ? 0 : a.Kd)
        ? !1
        : this.sa.K();
  };
  zf.prototype.ping = function () {
    var a = this,
      b = M.apply(null, u(x.apply(0, arguments))).g(
        hd(function (c) {
          return Af(a, c);
        }),
        Le(function (c) {
          return c;
        }),
        ff(1),
      );
    b.connect();
    return b;
  };
  var Af = function (a, b) {
    var c = new xc(1);
    Bf(
      a.sa,
      b,
      function () {
        c.next(!0);
        c.complete();
      },
      function () {
        c.next(!1);
        c.complete();
      },
    );
    return c;
  };
  zf.prototype.bd = function (a, b, c) {
    this.ping.apply(this, u(x.apply(3, arguments)));
  };
  function Cf(a, b) {
    var c = !1;
    return new K(function (d) {
      var e = a.setTimeout(function () {
        c = !0;
        d.next(!0);
        d.complete();
      }, b);
      return function () {
        c || a.clearTimeout(e);
      };
    });
  }
  var Df = function (a) {
    this.sa = a;
    this.timeline = ie;
  };
  m = Df.prototype;
  m.setTimeout = function (a, b) {
    return Number(
      this.sa.setTimeout(function () {
        return a();
      }, b),
    );
  };
  m.clearTimeout = function (a) {
    this.sa.clearTimeout(a);
  };
  m.now = function () {
    return new je(Date.now(), this.timeline);
  };
  m.interval = function (a, b) {
    var c = this.Ya(a).subscribe(b);
    return function () {
      return void c.unsubscribe();
    };
  };
  m.Ya = function (a) {
    return Cf(this, a).g(
      gf(),
      Ye(function (b) {
        return b + 1;
      }, -1),
    );
  };
  m.xa = function () {
    return !0;
  };
  var Ef = function (a, b) {
    this.context = a;
    this.Kb = b;
  };
  Ef.prototype.K = function (a) {
    return this.Kb.K(a);
  };
  Ef.prototype.S = function (a, b) {
    if (!this.K(b)) throw new Yd();
    return new Ff(this.context, this.Kb, null != b ? b : void 0, a);
  };
  var Ff = function (a, b, c, d) {
    var e = this;
    this.Kb = b;
    this.properties = c;
    this.url = d;
    this.Uc = !0;
    this.yb = new Map();
    this.body = void 0;
    var f;
    this.method = null != (f = null == c ? void 0 : c.wb) ? f : "GET";
    this.vg = a.Td().subscribe(function () {
      e.sendNow();
    });
  };
  Ff.prototype.deactivate = function () {
    this.Uc = !1;
  };
  Ff.prototype.sendNow = function () {
    if (this.Uc)
      if ((this.vg.unsubscribe(), this.Kb.K(this.properties)))
        try {
          if (0 < this.yb.size || void 0 !== this.body) {
            var a, b;
            this.Kb.bd(
              null != (a = this.properties) ? a : {},
              this.yb,
              null != (b = this.body) ? b : "",
              this.url,
            );
          } else this.Kb.ping(this.url);
          this.Uc = !1;
        } catch (c) {}
      else this.Uc = !1;
  };
  function Gf(a) {
    var b = Object.assign({}, a);
    delete b.timestamp;
    return { timestamp: new je(a.timestamp, ie), value: b };
  }
  function Hf(a) {
    return (
      void 0 !== a &&
      "number" === typeof a.x &&
      "number" === typeof a.y &&
      "number" === typeof a.width &&
      "number" === typeof a.height
    );
  } /*

 SPDX-License-Identifier: Apache-2.0
*/
  var If = fa([""]),
    Jf = ha(["\x00"], ["\\0"]),
    Kf = ha(["\n"], ["\\n"]),
    Lf = ha(["\x00"], ["\\u0000"]),
    Mf = fa([""]),
    Nf = ha(["\x00"], ["\\0"]),
    Of = ha(["\n"], ["\\n"]),
    Pf = ha(["\x00"], ["\\u0000"]);
  function Qf(a) {
    return Object.isFrozen(a) && Object.isFrozen(a.raw);
  }
  function Rf(a) {
    return -1 === a.toString().indexOf("`");
  }
  var Sf =
      Rf(function (a) {
        return a(If);
      }) ||
      Rf(function (a) {
        return a(Jf);
      }) ||
      Rf(function (a) {
        return a(Kf);
      }) ||
      Rf(function (a) {
        return a(Lf);
      }),
    Tf = Qf(Mf) && Qf(Nf) && Qf(Of) && Qf(Pf);
  var Uf = function (a, b) {
    this.name = a;
    this.value = b;
  };
  Uf.prototype.toString = function () {
    return this.name;
  };
  var Vf = new Uf("OFF", Infinity),
    Wf = new Uf("WARNING", 900),
    Xf = new Uf("INFO", 800),
    Yf = new Uf("CONFIG", 700),
    Zf = function () {
      this.Ec = 0;
      this.clear();
    },
    $f;
  Zf.prototype.clear = function () {
    this.Ue = Array(this.Ec);
    this.Ze = -1;
    this.xf = !1;
  };
  var ag = function (a, b, c) {
    this.reset(a || Vf, b, c, void 0, void 0);
  };
  ag.prototype.reset = function (a, b, c, d) {
    d || Date.now();
    this.Ah = b;
  };
  ag.prototype.getMessage = function () {
    return this.Ah;
  };
  var bg = function (a, b) {
      this.level = null;
      this.Yg = [];
      this.parent = (void 0 === b ? null : b) || null;
      this.children = [];
      this.Df = {
        Bb: function () {
          return a;
        },
      };
    },
    cg = function (a) {
      if (a.level) return a.level;
      if (a.parent) return cg(a.parent);
      Za("Root logger has no level set.");
      return Vf;
    },
    dg = function (a, b) {
      for (; a; )
        a.Yg.forEach(function (c) {
          c(b);
        }),
          (a = a.parent);
    },
    eg = function () {
      this.entries = {};
      var a = new bg("");
      a.level = Yf;
      this.entries[""] = a;
    },
    fg,
    gg = function (a, b, c) {
      var d = a.entries[b];
      if (d) return void 0 !== c && (d.level = c), d;
      d = gg(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
      var e = new bg(b, d);
      a.entries[b] = e;
      d.children.push(e);
      void 0 !== c && (e.level = c);
      return e;
    },
    hg = function () {
      fg || (fg = new eg());
      return fg;
    },
    ig = function (a, b) {
      var c = Wf,
        d;
      if ((d = a))
        if ((d = a && c)) {
          d = c.value;
          var e = a ? cg(gg(hg(), a.Bb())) : Vf;
          d = d >= e.value;
        }
      if (d) {
        c = c || Vf;
        d = gg(hg(), a.Bb());
        "function" === typeof b && (b = b());
        $f || ($f = new Zf());
        e = $f;
        a = a.Bb();
        if (0 < e.Ec) {
          var f = (e.Ze + 1) % e.Ec;
          e.Ze = f;
          e.xf
            ? ((e = e.Ue[f]), e.reset(c, b, a), (a = e))
            : ((e.xf = f == e.Ec - 1), (a = e.Ue[f] = new ag(c, b, a)));
        } else a = new ag(c, b, a);
        dg(d, a);
      }
    };
  var jg = [],
    kg = function (a) {
      var b = gg(hg(), "safevalues").Df;
      b && ig(b, "A URL with content '" + a + "' was sanitized away.");
    };
  -1 === jg.indexOf(kg) && jg.push(kg);
  function lg(a) {
    var b = x.apply(1, arguments);
    if (
      !Array.isArray(a) ||
      !Array.isArray(a.raw) ||
      a.length !== a.raw.length ||
      (!Sf && a === a.raw) ||
      !((Sf && !Tf) || Qf(a)) ||
      b.length + 1 !== a.length
    )
      throw new TypeError("G");
    if (0 === b.length) return ub(a[0]);
    var c = a[0].toLowerCase();
    if (/^data:/.test(c)) throw Error("N");
    if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
      var d = c.indexOf("//") + 2;
      var e = c.indexOf("/", d);
      if (e <= d) throw Error("H");
      d = c.substring(d, e);
      if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("I");
      if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("J");
      if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("K");
      d = !0;
    } else d = !1;
    if (!d)
      if (/^\//.test(c))
        if ("/" === c || (1 < c.length && "/" !== c[1] && "\\" !== c[1]))
          d = !0;
        else throw Error("M");
      else d = !1;
    if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
      if (/^about:blank/.test(c)) {
        if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("L");
        d = !0;
      } else d = !1;
    if (!d) throw Error("O");
    c = a[0];
    for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return ub(c);
  }
  var mg = fa([
      "https://www.googleadservices.com/pagead/managed/js/activeview/",
      "/reach_worklet.html",
    ]),
    ng = fa(["./reach_worklet.js"]),
    og = fa(["./reach_worklet.js"]),
    pg = fa(["./reach_worklet.html"]),
    qg = fa(["./reach_worklet.js"]),
    rg = fa(["./reach_worklet.js"]);
  function sg() {
    var a = {};
    return (a[0] = lg(mg, "current")), (a[1] = lg(ng)), (a[2] = lg(og)), a;
  }
  lg(pg);
  lg(qg);
  lg(rg);
  var ug = function (a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? sg() : d;
    Ud.call(this);
    this.sa = a;
    this.wi = b;
    this.hb = c;
    this.xe = new xc(3);
    this.xe.g(
      T(function (e) {
        return "sessionStart" === e.value.type;
      }),
    );
    this.fi = this.xe.g(
      T(function (e) {
        return "sessionFinish" === e.value.type;
      }),
    );
    this.tf = new xc(1);
    this.xi = new xc();
    this.lf = new xc(10);
    this.l = new Df(a);
    this.J = new Ef(this, new zf(a));
    this.nh = this.sa.K();
    tg(this);
  };
  w(ug, Ud);
  ug.prototype.validate = function () {
    return this.nh;
  };
  var tg = function (a) {
    vg(
      a.sa,
      function (e) {
        return void a.xe.next(Gf(e));
      },
      a.wi,
    );
    a.sa.addEventListener("geometryChange", function (e) {
      if (void 0 === e) var f = !1;
      else {
        f = e.data;
        var g;
        (g = void 0 === f) ||
          ((g = f.viewport),
          (g =
            void 0 === g ||
            (void 0 !== g &&
              "number" === typeof g.width &&
              "number" === typeof g.height)));
        g
          ? ((f = f.adView),
            (f =
              void 0 !== f &&
              "number" === typeof f.percentageInView &&
              (void 0 === f.geometry || Hf(f.geometry)) &&
              (void 0 === f.onScreenGeometry || Hf(f.onScreenGeometry))))
          : (f = !1);
      }
      f
        ? a.lf.next(Gf(e))
        : 0.01 >= Math.random() &&
          ((e =
            "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" +
            JSON.stringify(e)),
          a.J.S(e).sendNow());
    });
    for (
      var b = t(
          "loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(
            " ",
          ),
        ),
        c = b.next(),
        d = {};
      !c.done;
      d = { Jc: d.Jc }, c = b.next()
    )
      (d.Jc = c.value),
        a.sa.addEventListener(
          d.Jc,
          (function (e) {
            return function (f) {
              f.type === e.Jc && a.xi.next(Gf(f));
            };
          })(d),
        );
    a.sa.addEventListener("impression", function (e) {
      a.tf.next(Gf(e));
    });
  };
  da.Object.defineProperties(ug.prototype, {
    global: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return wg;
      },
    },
  });
  var wg = {};
  function xg(a, b) {
    if (a) throw Error("P");
    b.push(65533);
  }
  function yg(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b;
  }
  var zg = void 0,
    Ag,
    Bg,
    Cg = "undefined" !== typeof TextDecoder;
  var Dg = function (a) {
    Dg[" "](a);
    return a;
  };
  Dg[" "] = function () {};
  var Eg = function (a, b) {
    try {
      return Dg(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var Fg = Lb(),
    Gg = Mb(),
    Hg = F("Edge"),
    Ig =
      F("Gecko") &&
      !(vb(Eb(), "WebKit") && !F("Edge")) &&
      !(F("Trident") || F("MSIE")) &&
      !F("Edge"),
    Jg = vb(Eb(), "WebKit") && !F("Edge"),
    Kg = function () {
      var a = Fa.document;
      return a ? a.documentMode : void 0;
    },
    Lg;
  a: {
    var Mg = "",
      Ng = (function () {
        var a = Eb();
        if (Ig) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Hg) return /Edge\/([\d\.]+)/.exec(a);
        if (Gg) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Jg) return /WebKit\/(\S+)/.exec(a);
        if (Fg) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Ng && (Mg = Ng ? Ng[1] : "");
    if (Gg) {
      var Og = Kg();
      if (null != Og && Og > parseFloat(Mg)) {
        Lg = String(Og);
        break a;
      }
    }
    Lg = Mg;
  }
  var Pg = Lg,
    Qg;
  if (Fa.document && Gg) {
    var Rg = Kg();
    Qg = Rg ? Rg : parseInt(Pg, 10) || void 0;
  } else Qg = void 0;
  var Sg = Qg;
  Pb();
  Ob();
  Nb();
  var Tg = {},
    Ug = null,
    Vg = Ig || Jg || "function" == typeof Fa.btoa,
    Xg = function (a) {
      var b;
      z(Ka(a), "encodeByteArray takes an array as a parameter");
      void 0 === b && (b = 0);
      Wg();
      b = Tg[b];
      for (
        var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0;
        e < a.length - 2;
        e += 3
      ) {
        var g = a[e],
          h = a[e + 1],
          k = a[e + 2],
          l = b[g >> 2];
        g = b[((g & 3) << 4) | (h >> 4)];
        h = b[((h & 15) << 2) | (k >> 6)];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k;
      }
      l = 0;
      k = d;
      switch (a.length - e) {
        case 2:
          (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
        case 1:
          (a = a[e]),
            (c[f] = "" + b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
      }
      return c.join("");
    },
    Zg = function (a) {
      var b = a.length,
        c = (3 * b) / 4;
      c % 3
        ? (c = Math.floor(c))
        : -1 != "=.".indexOf(a[b - 1]) &&
          (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
      var d = new Uint8Array(c),
        e = 0;
      Yg(a, function (f) {
        d[e++] = f;
      });
      return e !== c ? d.subarray(0, e) : d;
    },
    Yg = function (a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var l = a.charAt(d++),
            n = Ug[l];
          if (null != n) return n;
          if (!/^[\s\xa0]*$/.test(l)) throw Error("R`" + l);
        }
        return k;
      }
      Wg();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (64 === h && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
      }
    },
    Wg = function () {
      if (!Ug) {
        Ug = {};
        for (
          var a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                "",
              ),
            b = ["+/=", "+/", "-_=", "-_.", "-_"],
            c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          Tg[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e],
              g = Ug[f];
            void 0 === g ? (Ug[f] = e) : z(g === e);
          }
        }
      }
    };
  var $g = "undefined" !== typeof Uint8Array,
    ah = !Gg && "function" === typeof btoa;
  function bh(a) {
    if (!ah) return Xg(a);
    for (var b = "", c = 0, d = a.length - 10240; c < d; )
      b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b);
  }
  var ch = /[-_.]/g,
    dh = { "-": "+", _: "/", ".": "=" };
  function eh(a) {
    return dh[a] || "";
  }
  function fh(a) {
    if (!ah) return Zg(a);
    var b = a;
    ch.test(b) && (b = b.replace(ch, eh));
    try {
      var c = atob(b);
    } catch (d) {
      throw Error("S`" + a + "`" + d);
    }
    a = new Uint8Array(c.length);
    for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
    return a;
  }
  var gh,
    hh = {};
  var jh,
    lh = function (a, b) {
      if (b !== hh) throw Error("T");
      this.uc = a;
      if (null != a && 0 === a.length) throw Error("U");
      this.dontPassByteStringToStructuredClone = kh;
    };
  lh.prototype.Vc = function () {
    return null == this.uc;
  };
  function kh() {}
  function mh(a) {
    if ("string" === typeof a) return { buffer: fh(a), kb: !1 };
    if (Array.isArray(a)) return { buffer: new Uint8Array(a), kb: !1 };
    if (a.constructor === Uint8Array) return { buffer: a, kb: !1 };
    if (a.constructor === ArrayBuffer)
      return { buffer: new Uint8Array(a), kb: !1 };
    if (a.constructor === lh) {
      gb(a, lh);
      if (hh !== hh) throw Error("T");
      var b = a.uc;
      null == b ||
        ($g && null != b && b instanceof Uint8Array) ||
        ("string" === typeof b
          ? (b = fh(b))
          : (Za("Cannot coerce to Uint8Array: " + Ja(b)), (b = null)));
      return {
        buffer: (null == b ? b : (a.uc = b)) || gh || (gh = new Uint8Array(0)),
        kb: !0,
      };
    }
    if (a instanceof Uint8Array)
      return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        kb: !1,
      };
    throw Error("da");
  }
  var nh = "function" === typeof Uint8Array.prototype.slice,
    oh = 0,
    ph = 0;
  function qh(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    b &&
      ((c = t(rh(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
    oh = c >>> 0;
    ph = a >>> 0;
  }
  function sh(a, b) {
    return 4294967296 * b + (a >>> 0);
  }
  function th() {
    var a = oh,
      b = ph;
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);
    else
      "function" === typeof BigInt
        ? (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)))
        : ((c = ((a >>> 24) | (b << 8)) & 16777215),
          (b = (b >> 16) & 65535),
          (a = (a & 16777215) + 6777216 * c + 6710656 * b),
          (c += 8147497 * b),
          (b *= 2),
          1e7 <= a && ((c += Math.floor(a / 1e7)), (a %= 1e7)),
          1e7 <= c && ((b += Math.floor(c / 1e7)), (c %= 1e7)),
          z(b),
          (c = b + uh(c) + uh(a)));
    return c;
  }
  function uh(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function rh(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  var wh = function (a, b) {
      this.ma = null;
      this.Bd = !1;
      this.G = this.ya = this.cb = 0;
      vh(this, a, b);
    },
    vh = function (a, b, c) {
      c = void 0 === c ? {} : c;
      a.Ac = void 0 === c.Ac ? !1 : c.Ac;
      b &&
        ((b = mh(b)),
        (a.ma = b.buffer),
        (a.Bd = b.kb),
        (a.cb = 0),
        (a.ya = a.ma.length),
        (a.G = a.cb));
    };
  m = wh.prototype;
  m.jf = function () {
    this.clear();
    100 > xh.length && xh.push(this);
  };
  m.clear = function () {
    this.ma = null;
    this.Bd = !1;
    this.G = this.ya = this.cb = 0;
    this.Ac = !1;
  };
  m.setEnd = function (a) {
    this.ya = a;
  };
  m.reset = function () {
    this.G = this.cb;
  };
  m.U = function () {
    return this.G;
  };
  m.advance = function (a) {
    yh(this, this.G + a);
  };
  m.re = function (a) {
    var b = 0,
      c = 0,
      d = 0,
      e = this.ma,
      f = this.G;
    do {
      var g = e[f++];
      b |= (g & 127) << d;
      d += 7;
    } while (32 > d && g & 128);
    32 < d && (c |= (g & 127) >> 4);
    for (d = 3; 32 > d && g & 128; d += 7) (g = e[f++]), (c |= (g & 127) << d);
    yh(this, f);
    if (128 > g) return a(b >>> 0, c >>> 0);
    throw Error("aa");
  };
  var yh = function (a, b) {
      a.G = b;
      if (b > a.ya) throw Error("ba`" + b + "`" + a.ya);
    },
    zh = function (a) {
      var b = a.ma,
        c = a.G,
        d = b[c++],
        e = d & 127;
      if (
        d & 128 &&
        ((d = b[c++]),
        (e |= (d & 127) << 7),
        d & 128 &&
          ((d = b[c++]),
          (e |= (d & 127) << 14),
          d & 128 &&
            ((d = b[c++]),
            (e |= (d & 127) << 21),
            d & 128 &&
              ((d = b[c++]),
              (e |= d << 28),
              d & 128 &&
                b[c++] & 128 &&
                b[c++] & 128 &&
                b[c++] & 128 &&
                b[c++] & 128 &&
                b[c++] & 128))))
      )
        throw Error("aa");
      yh(a, c);
      return e;
    };
  m = wh.prototype;
  m.Na = function () {
    return zh(this) >>> 0;
  };
  m.Pf = function () {
    return this.re(sh);
  };
  m.ob = function () {
    var a = this.ma,
      b = this.G,
      c = a[b + 0],
      d = a[b + 1],
      e = a[b + 2];
    a = a[b + 3];
    this.advance(4);
    return ((c << 0) | (d << 8) | (e << 16) | (a << 24)) >>> 0;
  };
  m.se = function () {
    var a = this.ob(),
      b = this.ob();
    return sh(a, b);
  };
  m.Nf = function () {
    var a = this.ma,
      b = this.G,
      c = a[b + 0],
      d = a[b + 1],
      e = a[b + 2];
    a = a[b + 3];
    this.advance(4);
    return (c << 0) | (d << 8) | (e << 16) | (a << 24);
  };
  m.qe = function () {
    var a = this.ob(),
      b = 2 * (a >> 31) + 1,
      c = (a >>> 23) & 255;
    a &= 8388607;
    return 255 == c
      ? a
        ? NaN
        : Infinity * b
      : 0 == c
        ? b * Math.pow(2, -149) * a
        : b * Math.pow(2, c - 150) * (a + Math.pow(2, 23));
  };
  m.cd = function () {
    for (var a = 0, b = this.G, c = b + 10, d = this.ma; b < c; ) {
      var e = d[b++];
      a |= e;
      if (0 === (e & 128)) return yh(this, b), !!(a & 127);
    }
    throw Error("aa");
  };
  m.Mf = function () {
    return zh(this);
  };
  var Ah = function (a, b) {
    if (0 > b) throw Error("ca`" + b);
    var c = a.G,
      d = c + b;
    if (d > a.ya) throw Error("ba`" + (a.ya - c) + "`" + b);
    a.G = d;
    return c;
  };
  wh.prototype.Of = function (a, b) {
    var c = Ah(this, a),
      d = z(this.ma);
    if (Cg) {
      var e;
      b
        ? (e = Ag) || (e = Ag = new TextDecoder("utf-8", { fatal: !0 }))
        : (e = Bg) || (e = Bg = new TextDecoder("utf-8", { fatal: !1 }));
      var f = c + a;
      d = 0 === c && f === d.length ? d : d.subarray(c, f);
      try {
        var g = e.decode(d);
      } catch (n) {
        if (b) {
          if (void 0 === zg) {
            try {
              e.decode(new Uint8Array([128]));
            } catch (r) {}
            try {
              e.decode(new Uint8Array([97])), (zg = !0);
            } catch (r) {
              zg = !1;
            }
          }
          b = !zg;
        }
        b && (Ag = void 0);
        throw n;
      }
    } else {
      a = c + a;
      g = [];
      for (var h = null, k, l; c < a; )
        (k = d[c++]),
          128 > k
            ? g.push(k)
            : 224 > k
              ? c >= a
                ? xg(b, g)
                : ((l = d[c++]),
                  194 > k || 128 !== (l & 192)
                    ? (c--, xg(b, g))
                    : ((k = ((k & 31) << 6) | (l & 63)),
                      z(128 <= k && 2047 >= k),
                      g.push(k)))
              : 240 > k
                ? c >= a - 1
                  ? xg(b, g)
                  : ((l = d[c++]),
                    128 !== (l & 192) ||
                    (224 === k && 160 > l) ||
                    (237 === k && 160 <= l) ||
                    128 !== ((e = d[c++]) & 192)
                      ? (c--, xg(b, g))
                      : ((k = ((k & 15) << 12) | ((l & 63) << 6) | (e & 63)),
                        z(2048 <= k && 65535 >= k),
                        z(55296 > k || 57343 < k),
                        g.push(k)))
                : 244 >= k
                  ? c >= a - 2
                    ? xg(b, g)
                    : ((l = d[c++]),
                      128 !== (l & 192) ||
                      0 !== ((k << 28) + (l - 144)) >> 30 ||
                      128 !== ((e = d[c++]) & 192) ||
                      128 !== ((f = d[c++]) & 192)
                        ? (c--, xg(b, g))
                        : ((k =
                            ((k & 7) << 18) |
                            ((l & 63) << 12) |
                            ((e & 63) << 6) |
                            (f & 63)),
                          z(65536 <= k && 1114111 >= k),
                          (k -= 65536),
                          g.push(
                            ((k >> 10) & 1023) + 55296,
                            (k & 1023) + 56320,
                          )))
                  : xg(b, g),
          8192 <= g.length && ((h = yg(h, g)), (g.length = 0));
      z(c === a, "expected " + c + " === " + a);
      g = yg(h, g);
    }
    return g;
  };
  wh.prototype.pe = function (a) {
    if (0 == a) return jh || (jh = new lh(null, hh));
    var b = Ah(this, a);
    if (this.Ac && this.Bd) b = this.ma.subarray(b, b + a);
    else {
      var c = z(this.ma);
      a = b + a;
      b =
        b === a
          ? gh || (gh = new Uint8Array(0))
          : nh
            ? c.slice(b, a)
            : new Uint8Array(c.subarray(b, a));
    }
    gb(b, Uint8Array);
    return 0 == b.length ? jh || (jh = new lh(null, hh)) : new lh(b, hh);
  };
  var xh = [];
  z(!0);
  var Ch = function (a, b) {
      if (xh.length) {
        var c = xh.pop();
        vh(c, a, b);
        a = c;
      } else a = new wh(a, b);
      this.j = a;
      this.Ha = this.j.U();
      this.m = this.Ba = this.Gb = -1;
      Bh(this, b);
    },
    Bh = function (a, b) {
      b = void 0 === b ? {} : b;
      a.Nd = void 0 === b.Nd ? !1 : b.Nd;
    };
  Ch.prototype.jf = function () {
    this.j.clear();
    this.m = this.Gb = this.Ba = -1;
    100 > Dh.length && Dh.push(this);
  };
  Ch.prototype.U = function () {
    return this.j.U();
  };
  Ch.prototype.reset = function () {
    this.j.reset();
    this.Ha = this.j.U();
    this.m = this.Gb = this.Ba = -1;
  };
  Ch.prototype.advance = function (a) {
    this.j.advance(a);
  };
  var Eh = function (a) {
      var b = a.j;
      if (b.G == b.ya) return !1;
      -1 !== a.Ba &&
        ((b = a.j.U()),
        (a.j.G = a.Ha),
        a.j.Na(),
        4 === a.m || 3 === a.m
          ? z(
              b === a.j.U(),
              "Expected to not advance the cursor.  Group tags do not have values.",
            )
          : z(
              b > a.j.U(),
              "Expected to read the field, did you forget to call a read or skip method?",
            ),
        (a.j.G = b));
      a.Ha = a.j.U();
      b = a.j.Na();
      var c = b >>> 3,
        d = b & 7;
      if (!(0 <= d && 5 >= d)) throw Error("W`" + d + "`" + a.Ha);
      if (1 > c) throw Error("X`" + c + "`" + a.Ha);
      a.Ba = b;
      a.Gb = c;
      a.m = d;
      return !0;
    },
    Gh = function (a) {
      if (2 != a.m) Za("Invalid wire type for skipDelimitedField"), Fh(a);
      else {
        var b = a.j.Na();
        a.j.advance(b);
      }
    },
    Fh = function (a) {
      switch (a.m) {
        case 0:
          0 != a.m
            ? (Za("Invalid wire type for skipVarintField"), Fh(a))
            : a.j.cd();
          break;
        case 1:
          z(1 === a.m);
          a.j.advance(8);
          break;
        case 2:
          Gh(a);
          break;
        case 5:
          z(5 === a.m);
          a.j.advance(4);
          break;
        case 3:
          var b = a.Gb;
          do {
            if (!Eh(a)) throw Error("Z");
            if (4 == a.m) {
              if (a.Gb != b) throw Error("$");
              break;
            }
            Fh(a);
          } while (1);
          break;
        default:
          throw Error("W`" + a.m + "`" + a.Ha);
      }
    },
    Ih = function (a) {
      var b = a.Ha;
      Fh(a);
      return Hh(a, b);
    },
    Hh = function (a, b) {
      if (!a.Nd) {
        var c = a.j.U();
        a.j.G = b;
        b = a.j.pe(c - b);
        z(c == a.j.U());
        return b;
      }
    },
    Jh = function (a, b, c) {
      z(2 == a.m);
      var d = a.j.ya,
        e = a.j.Na(),
        f = a.j.U() + e,
        g = f - d;
      0 >= g &&
        (a.j.setEnd(f), c(b, a, void 0, void 0, void 0), (g = f - a.j.U()));
      if (g) throw Error("V`" + e + "`" + (e - g));
      a.j.G = f;
      a.j.setEnd(d);
    },
    Kh = function (a, b) {
      z(11 === a.Ba);
      for (var c = 0, d = 0; Eh(a) && 4 != a.m; )
        16 !== a.Ba || c
          ? 26 !== a.Ba || d
            ? Fh(a)
            : c
              ? ((d = -1), Jh(a, c, b))
              : ((d = a.Ha), Gh(a))
          : ((c = a.ob()),
            d && (z(0 < d), (a.Ba = -1), (a.m = -1), (a.j.G = d), (d = 0)));
      if (12 !== a.Ba || !d || !c) throw Error("Y");
    };
  m = Ch.prototype;
  m.Nf = function () {
    z(0 == this.m);
    return zh(this.j);
  };
  m.ob = function () {
    z(0 == this.m);
    return this.j.Na();
  };
  m.se = function () {
    z(0 == this.m);
    return this.j.Pf();
  };
  m.qe = function () {
    z(5 == this.m);
    return this.j.qe();
  };
  m.cd = function () {
    z(0 == this.m);
    return this.j.cd();
  };
  m.Mf = function () {
    z(0 == this.m);
    return zh(this.j);
  };
  m.Of = function () {
    return Lh(this);
  };
  var Lh = function (a) {
    z(2 == a.m);
    var b = a.j.Na();
    return a.j.Of(b, !0);
  };
  Ch.prototype.pe = function () {
    z(2 == this.m);
    var a = this.j.Na();
    return this.j.pe(a);
  };
  Ch.prototype.re = function (a) {
    z(0 == this.m);
    return this.j.re(a);
  };
  var Mh = function (a, b, c) {
      z(2 == a.m);
      var d = a.j.Na();
      for (d = a.j.U() + d; a.j.U() < d; ) c.push(b.call(a.j));
    },
    Dh = [];
  var Nh = function (a, b, c, d) {
    this.pd = a;
    this.gg = c;
    this.fg = d;
  };
  function Oh(a) {
    return Array.prototype.slice.call(a);
  }
  var Ph =
    "function" === typeof Symbol && "symbol" === typeof Symbol()
      ? Symbol("INTERNAL_ARRAY_STATE")
      : void 0;
  z(
    13 ===
      Math.round(
        Math.log2(
          Math.max.apply(
            Math,
            u(
              Object.values({
                Ri: 1,
                Pi: 2,
                Oi: 4,
                Vi: 8,
                Ui: 16,
                Ti: 32,
                Ci: 64,
                Yi: 128,
                Ni: 256,
                Mi: 512,
                Qi: 1024,
                Gi: 2048,
                Xi: 4096,
                Hi: 8192,
              }),
            ),
          ),
        ),
      ),
  );
  function Qh(a) {
    z((a & 16777215) == a);
  }
  var Rh = Ph
    ? function (a, b) {
        Qh(b);
        eb(a, "state is only maintained on arrays.");
        a[Ph] |= b;
      }
    : function (a, b) {
        Qh(b);
        eb(a, "state is only maintained on arrays.");
        void 0 !== a.Wa
          ? (a.Wa |= b)
          : Object.defineProperties(a, {
              Wa: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
      };
  function Sh(a) {
    var b = Th(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = Oh(a)), Uh(a, b | 1));
  }
  var Vh = Object.getOwnPropertyDescriptor(Array.prototype, "oh");
  Object.defineProperties(Array.prototype, {
    oh: {
      get: function () {
        function a(e, f) {
          e & b && c.push(f);
        }
        var b = Th(this),
          c = [];
        a(1, "IS_REPEATED_FIELD");
        a(2, "IS_IMMUTABLE_ARRAY");
        a(4, "IS_API_FORMATTED");
        a(4096, "STRING_FORMATTED");
        a(8192, "GBIGINT_FORMATTED");
        a(8, "ONLY_MUTABLE_VALUES");
        a(32, "MUTABLE_REFERENCES_ARE_OWNED");
        a(64, "CONSTRUCTED");
        a(128, "TRANSFERRED");
        a(256, "HAS_SPARSE_OBJECT");
        a(512, "HAS_MESSAGE_ID");
        a(2048, "FROZEN_ARRAY");
        var d = Wh(b);
        536870912 !== d && c.push("pivot: " + d);
        d = c.join(",");
        return Vh ? Vh.get.call(this) + "|" + d : d;
      },
      configurable: !0,
      enumerable: !1,
    },
  });
  var Th = Ph
    ? function (a) {
        eb(a, "state is only maintained on arrays.");
        return a[Ph] | 0;
      }
    : function (a) {
        eb(a, "state is only maintained on arrays.");
        return a.Wa | 0;
      };
  function Xh(a, b) {
    z(b & 64, "state for messages must be constructed");
    z(
      0 === (b & 5),
      "state for messages should not contain repeated field state",
    );
    var c = Wh(b),
      d = a.length;
    z(
      c + (+!!(b & 512) - 1) >= d - 1,
      "pivot %s is pointing at an index earlier than the last index of the array, length: %s",
      c,
      d,
    );
    b & 512 &&
      z(
        "string" === typeof a[0],
        "arrays with a message_id bit must have a string in the first position, got: %s",
        a[0],
      );
    a = d ? a[d - 1] : void 0;
    z(
      (null != a && "object" === typeof a && a.constructor === Object) ===
        !!(b & 256),
      "arraystate and array disagree on sparseObject presence",
    );
  }
  var Yh = Ph
      ? function (a) {
          eb(a, "state is only maintained on arrays.");
          var b = a[Ph];
          Xh(a, b);
          return b;
        }
      : function (a) {
          eb(a, "state is only maintained on arrays.");
          var b = a.Wa;
          Xh(a, b);
          return b;
        },
    Uh = Ph
      ? function (a, b) {
          eb(a, "state is only maintained on arrays.");
          Qh(b);
          a[Ph] = b;
        }
      : function (a, b) {
          eb(a, "state is only maintained on arrays.");
          Qh(b);
          void 0 !== a.Wa
            ? (a.Wa = b)
            : Object.defineProperties(a, {
                Wa: {
                  value: b,
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                },
              });
        };
  function Zh() {
    var a = [];
    Rh(a, 1);
    return a;
  }
  function $h(a, b) {
    Uh(b, (a | 0) & -14591);
  }
  function ai(a, b) {
    Uh(b, (a | 34) & -14557);
  }
  function bi(a, b) {
    $a(b);
    z((0 < b && 1023 >= b) || 536870912 === b);
    return (a & -16760833) | ((b & 1023) << 14);
  }
  function Wh(a) {
    a = (a >> 14) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var ci,
    di = {};
  function ei(a) {
    var b = a.xh === di;
    z(!ci || b === a instanceof ci);
    return b;
  }
  var fi = {};
  function gi(a) {
    var b = !(!a || "object" !== typeof a || a.hj !== fi);
    z(b === a instanceof Map);
    return b && 0 === gb(a, Map).size;
  }
  function hi(a, b) {
    $a(a);
    z(0 < a);
    z(0 === b || -1 === b);
    return a + b;
  }
  function ii(a, b) {
    $a(a);
    z(0 <= a);
    z(0 === b || -1 === b);
    return a - b;
  }
  function ji(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var ki,
    li = !Db;
  function mi(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = Th(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    Uh(a, d | 1);
    return !0;
  }
  var ni,
    oi = [];
  Uh(oi, 55);
  ni = Object.freeze(oi);
  function pi(a) {
    if (a & 2) throw Error("ea");
  }
  function qi() {}
  var ri;
  function si(a, b) {
    eb(a);
    if (b) {
      ri || (ri = Symbol("unknownBinaryFields"));
      var c = a[ri];
      c ? c.push(b) : (a[ri] = [b]);
    }
  }
  function ti(a, b) {
    eb(a);
    eb(b);
    (b = ri ? eb(b)[ri] : void 0) && (a[ri] = Oh(b));
  }
  var ui;
  function vi(a, b) {
    var c = Th(eb(a));
    b || z(!((c & 2 && c & 4) || c & 2048) || Object.isFrozen(a));
    b = !!(c & 8);
    c = !!(c & 16 && c & 32);
    if (b || c) {
      var d, e, f;
      a.forEach(function (g) {
        Array.isArray(g)
          ? (f = !0)
          : g && ei(g) && (Th(g.D) & 2 ? (e = !0) : (d = !0));
      });
      f && z(!e && !d);
      c && z(!f && !d);
      b && z(!f && !e);
    }
    wi(a);
  }
  function wi(a) {
    var b = Th(a),
      c = b & 4,
      d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
    z(
      (c && 1 >= d) || (!c && 0 === d),
      "Expected at most 1 type-specific formatting bit, but got " +
        d +
        " with state: " +
        b,
    );
    if (4096 & Th(a))
      for (b = 0; b < a.length; b++)
        "string" !== typeof a[b] &&
          Za(
            "Unexpected element of type " +
              typeof a[b] +
              " in string formatted repeated 64-bit int field",
          );
  }
  function xi(a) {
    a = Error(a);
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = "warning";
    return a;
  }
  function yi(a) {
    return a.displayName || a.name || "unknown type name";
  }
  function zi(a) {
    if ("boolean" !== typeof a) throw Error("fa`" + Ja(a) + "`" + a);
    return !!a;
  }
  function Ai(a) {
    if (null == a) return a;
    if ("boolean" === typeof a || "number" === typeof a) return !!a;
  }
  var Bi = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Ci(a) {
    var b = typeof a;
    return "number" === b
      ? Number.isFinite(a)
      : "string" !== b
        ? !1
        : Bi.test(a);
  }
  function Di(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
  }
  function Ei(a) {
    return "Expected uint32 as finite number but got " + Ja(a) + ": " + a;
  }
  function Fi(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0;
  }
  function Gi(a) {
    if (null == a) return a;
    if (Ci(a)) {
      if ("string" === typeof a) {
        z(Ci(a));
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && 0 <= b) a = String(b);
        else {
          b = a.indexOf(".");
          -1 !== b && (a = a.substring(0, b));
          z(0 < a.length);
          if (16 > a.length) qh(Number(a));
          else if ("function" === typeof BigInt)
            (a = BigInt(a)),
              (oh = Number(a & BigInt(4294967295)) >>> 0),
              (ph = Number((a >> BigInt(32)) & BigInt(4294967295)));
          else {
            z(0 < a.length);
            b = +("-" === a[0]);
            ph = oh = 0;
            for (
              var c = a.length, d = 0 + b, e = ((c - b) % 6) + b;
              e <= c;
              d = e, e += 6
            )
              (d = Number(a.slice(d, e))),
                (ph *= 1e6),
                (oh = 1e6 * oh + d),
                4294967296 <= oh &&
                  ((ph += Math.trunc(oh / 4294967296)),
                  (ph >>>= 0),
                  (oh >>>= 0));
            b &&
              ((b = t(rh(oh, ph))),
              (a = b.next().value),
              (b = b.next().value),
              (oh = a),
              (ph = b));
          }
          a = th();
        }
        return a;
      }
      if ("number" === typeof a)
        return (
          z(Ci(a)),
          (a = Math.trunc(a)),
          qh(a),
          0 > a
            ? ((b = th()),
              (a = Number(b)),
              (a = Number.isSafeInteger(a) ? a : b))
            : (a = sh(oh, ph)),
          a
        );
    }
  }
  function Hi(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  var Ii =
    "function" === typeof Symbol && "symbol" === typeof Symbol()
      ? Symbol("defaultInstance")
      : "di";
  var Ji;
  function Ki(a, b) {
    z(!!(Th(b) & 32));
    Ji = b;
    a = new a(b);
    Ji = void 0;
    return a;
  }
  var Li, Mi;
  function Ni(a) {
    switch (typeof a) {
      case "boolean":
        return Li || (Li = [0, void 0, !0]);
      case "number":
        return 0 < a
          ? void 0
          : 0 === a
            ? Mi || (Mi = [0, void 0])
            : [-a, void 0];
      case "string":
        return [0, a];
      case "object":
        return (
          eb(a),
          z(2 === a.length || (3 === a.length && !0 === a[2])),
          z(null == a[0] || ("number" === typeof a[0] && 0 <= a[0])),
          z(null == a[1] || "string" === typeof a[1]),
          a
        );
    }
  }
  function Oi(a, b) {
    eb(b);
    return Pi(a, b[0], b[1]);
  }
  function Pi(a, b, c) {
    null == a && (a = Ji);
    Ji = void 0;
    if (null != a)
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        Array.isArray(e) && vi(e);
      }
    if (null == a)
      (d = 96), c ? ((a = [c]), (d |= 512)) : (a = []), b && (d = bi(d, b));
    else {
      if (!Array.isArray(a))
        throw Error("ia`" + JSON.stringify(a) + "`" + Ja(a));
      if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a))
        throw Error("ja");
      d = Th(a);
      if (d & 64) return Xh(a, d), ui && delete a[ui], a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0]))
        throw Error("ka`" + c + "`" + JSON.stringify(a[0]) + "`" + Ja(a[0]));
      a: {
        c = d;
        if ((d = a.length))
          if (((e = d - 1), ji(a[e]))) {
            c |= 256;
            b = ii(e, +!!(c & 512) - 1);
            if (1024 <= b) throw Error("la`" + b);
            d = bi(c, b);
            break a;
          }
        if (b) {
          b = Math.max(b, ii(d, +!!(c & 512) - 1));
          if (1024 < b) throw Error("ma`" + d);
          d = bi(c, b);
        } else d = c;
      }
    }
    Uh(a, d);
    z(d & 64);
    return a;
  }
  var Qi = function () {
    throw Error("na");
  };
  if (
    "undefined" != typeof Symbol &&
    "undefined" != typeof Symbol.hasInstance
  ) {
    var Ri = function () {
        throw Error("oa");
      },
      Si = {};
    Object.defineProperties(
      Qi,
      ((Si[Symbol.hasInstance] = {
        value: Ri,
        configurable: !1,
        writable: !1,
        enumerable: !1,
      }),
      Si),
    );
    z(
      Qi[Symbol.hasInstance] === Ri,
      "defineProperties did not work: was it monkey-patched?",
    );
  }
  function Ti(a, b) {
    return Ui(b);
  }
  function Ui(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a) {
          if (Array.isArray(a)) return li || !mi(a, void 0, 9999) ? a : void 0;
          if ($g && null != a && a instanceof Uint8Array) return bh(a);
          if (a instanceof lh) {
            var b = a.uc;
            return null == b ? "" : "string" === typeof b ? b : (a.uc = bh(b));
          }
        }
    }
    return a;
  }
  function Vi(a, b, c) {
    var d = Oh(a),
      e = d.length,
      f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
      b = d[b] = {};
      for (var g in f)
        z(
          !isNaN(g),
          "should not have non-numeric keys in sparse objects after a constructor is called.",
        ),
          (b[g] = c(f[g]));
    }
    ti(d, a);
    return d;
  }
  function Wi(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a))
        a =
          e && 0 == a.length && Th(a) & 1
            ? void 0
            : f && Th(a) & 2
              ? a
              : Xi(a, b, c, void 0 !== d, e, f);
      else if (ji(a)) {
        var g = {},
          h;
        for (h in a) g[h] = Wi(a[h], b, c, d, e, f);
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function Xi(a, b, c, d, e, f) {
    var g = d || c ? Th(a) : 0;
    d = d ? !!(g & 32) : void 0;
    for (var h = Oh(a), k = 0; k < h.length; k++)
      h[k] = Wi(h[k], b, c, d, e, f);
    c && (ti(h, a), c(g, h));
    return h;
  }
  function Yi(a) {
    return ei(a) ? a.toJSON() : Ui(a);
  }
  function Zi(a, b, c) {
    c = void 0 === c ? ai : c;
    if (null != a) {
      if ($g && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = Th(a);
        if (d & 2) return a;
        vi(a);
        b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
        return b
          ? (Uh(a, (d | 34) & -12293), a)
          : Xi(a, Zi, d & 4 ? ai : c, !0, !1, !0);
      }
      ei(a) &&
        (z(ei(a)),
        (c = a.D),
        (d = Yh(c)),
        (a = d & 2 ? a : Ki(a.constructor, $i(c, d, !0))));
      return a;
    }
  }
  function $i(a, b, c) {
    var d = c || b & 2 ? ai : $h,
      e = !!(b & 32);
    a = Vi(a, b, function (f) {
      return Zi(f, e, d);
    });
    Rh(a, 32 | (c ? 2 : 0));
    return a;
  }
  function aj(a) {
    var b = a.D,
      c = Yh(b);
    return c & 2 ? Ki(a.constructor, $i(b, c, !1)) : a;
  }
  var bj = Object.freeze({});
  var dj = function (a, b) {
      a = a.D;
      return cj(a, Yh(a), b);
    },
    cj = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= Wh(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
        b = hi(c, +!!(b & 512) - 1);
        if (b < e) return a[b];
      }
    },
    fj = function (a, b, c) {
      var d = a.D,
        e = Yh(d);
      pi(e);
      ej(d, e, b, c);
      return a;
    };
  function ej(a, b, c, d) {
    z(!ji(d), "Invalid object passed to a setter");
    var e = Wh(b);
    if (c >= e) {
      z(536870912 !== e);
      var f = b;
      if (b & 256) e = a[a.length - 1];
      else {
        if (null == d) return;
        e = hi(e, +!!(b & 512) - 1);
        z(
          e >= a.length && Number.isInteger(e) && 4294967295 > e,
          "Expected sparseObjectIndex (%s) to be >= %s and a valid array index",
          e,
          a.length,
        );
        e = a[e] = {};
        f |= 256;
      }
      e[c] = d;
      f !== b && Uh(a, f);
    } else
      (a[hi(c, +!!(b & 512) - 1)] = d),
        b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
  }
  function gj(a, b) {
    if (!a) return a;
    z(Th(b) & 2 ? !!(Th(a.D) & 2) : !0);
    return a;
  }
  var hj = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = Yh(a);
      z(!0);
      var e = d & 2;
      c = cj(a, d, b, c);
      Array.isArray(c) || (c = ni);
      var f = !!(d & 32),
        g = Th(c);
      0 === g && f && !e
        ? ((g |= 33), Uh(c, g))
        : g & 1 || ((g |= 1), Uh(c, g));
      if (e) g & 2 || Rh(c, 34), Object.freeze(c);
      else if (2 & g || 2048 & g)
        (c = Oh(c)), (e = 1), f && (e |= 32), Uh(c, e), ej(a, d, b, c);
      b = c;
      d = !1;
      e = !0;
      d = void 0 === d ? !1 : d;
      e = void 0 === e ? !1 : e;
      vi(b, d);
      d ||
        (e || z(Object.isFrozen(b) || !(Th(b) & 32)),
        z(Th(a) & 2 ? Object.isFrozen(b) : !0));
      return b;
    },
    ij = function (a, b, c, d) {
      var e = Yh(a);
      pi(e);
      d = cj(a, e, c, d);
      if (null != d && ei(d))
        return (b = aj(d)), b !== d && ej(a, e, c, b), b.D;
      if (Array.isArray(d)) {
        var f = Th(d);
        f = f & 2 ? $i(d, f, !1) : d;
        f = Oi(f, b);
      } else f = Oi(void 0, b);
      f !== d && ej(a, e, c, f);
      return f;
    },
    jj = function (a, b, c, d) {
      a = a.D;
      var e = Yh(a);
      d = cj(a, e, c, d);
      if (null != d && "object" === typeof d && ei(d)) b = d;
      else if (Array.isArray(d)) {
        var f = Th(d),
          g = f;
        0 === g && (g |= e & 32);
        g |= e & 2;
        g !== f && Uh(d, g);
        b = new b(d);
      } else b = void 0;
      b !== d && null != b && ej(a, e, c, b);
      return gj(b, a);
    },
    lj = function (a) {
      var b = kj;
      (a = jj(a, b, 2, !1))
        ? (b = a)
        : (a = b[Ii])
          ? (b = a)
          : ((a = new b()), Rh(a.D, 34), (b = b[Ii] = a));
      return b;
    },
    mj = function (a, b, c) {
      b = jj(a, b, c, !1);
      if (null == b) return b;
      a = a.D;
      var d = Yh(a);
      if (!(d & 2)) {
        var e = aj(b);
        e !== b && ((b = e), ej(a, d, c, b));
      }
      return gj(b, a);
    };
  function nj(a, b) {
    return null != a ? a : b;
  }
  var oj = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      return nj(Ai(dj(a, b)), c);
    },
    pj = function (a, b) {
      var c = void 0 === c ? 0 : c;
      return nj(Di(dj(a, b)), c);
    },
    qj = function (a) {
      a = Hi(dj(a, 3));
      return null == a ? void 0 : a;
    },
    rj = function (a, b) {
      if (null != b) {
        if ("number" !== typeof b) throw xi(Ei(b));
        if (!Number.isFinite(b)) throw xi(Ei(b));
        b >>>= 0;
      }
      fj(a, 1, b);
    },
    sj = function (a, b, c) {
      if (null != c && "string" !== typeof c)
        throw Error("ga`" + c + "`" + Ja(c));
      return fj(a, b, c);
    };
  if ("undefined" !== typeof Proxy) {
    var uj = tj;
    new Proxy(
      {},
      {
        getPrototypeOf: uj,
        setPrototypeOf: uj,
        isExtensible: uj,
        preventExtensions: uj,
        getOwnPropertyDescriptor: uj,
        defineProperty: uj,
        has: uj,
        get: uj,
        set: uj,
        deleteProperty: uj,
        apply: uj,
        construct: uj,
      },
    );
  }
  function tj() {
    throw Error("pa");
    throw Error();
  }
  var vj = function (a, b, c) {
    gb(this, vj, "The message constructor should only be used by subclasses");
    z(
      this.constructor !== vj,
      "Message is an abstract class and cannot be directly constructed",
    );
    this.D = Pi(a, b, c);
    this.preventPassingToStructuredClone = qi;
  };
  m = vj.prototype;
  m.toJSON = function () {
    if (ki) var a = wj(this, this.D, !1);
    else
      (a = this.D),
        eb(a),
        (a = Xi(a, Yi, void 0, void 0, !1, !1)),
        (a = wj(this, a, !0));
    return a;
  };
  m.rb = function () {
    ki = !0;
    try {
      return JSON.stringify(this.toJSON(), Ti);
    } finally {
      ki = !1;
    }
  };
  m.getExtension = function (a) {
    gb(this, a.Pg);
    var b = gb(this, vj);
    b = a.Wb
      ? a.Nc(b, a.Wb, a.Xb, !0, void 0 !== bj ? 1 : 2)
      : a.Af
        ? a.Nc(b, a.Xb, !0, void 0 !== bj ? 1 : 2)
        : a.Nc(b, a.Xb, a.defaultValue, !0);
    return a.gj && null == b ? a.defaultValue : b;
  };
  m.hasExtension = function (a) {
    z(!a.Af, "repeated extensions don't support hasExtension");
    if (a.Wb) a = void 0 !== jj(this, a.Wb, a.Xb, !0);
    else {
      z(!a.Af, "repeated extensions don't support getExtensionOrUndefined");
      gb(this, a.Pg);
      var b = gb(this, vj);
      a = a.Wb ? a.Nc(b, a.Wb, a.Xb, !0) : a.Nc(b, a.Xb, null, !0);
      a = void 0 !== (null === a ? void 0 : a);
    }
    return a;
  };
  m.clone = function () {
    var a = gb(this, vj);
    z(ei(a));
    var b = a.D,
      c = Yh(b);
    return Ki(a.constructor, $i(b, c, !1));
  };
  m.kb = function () {
    return !!(Th(this.D) & 2);
  };
  ci = vj;
  vj.prototype.xh = di;
  vj.prototype.toString = function () {
    return wj(this, this.D, !1).toString();
  };
  function wj(a, b, c) {
    var d = a.constructor.Yh,
      e = Yh(c ? a.D : b),
      f = Wh(e),
      g = !1;
    if (d && li) {
      if (!c) {
        b = Oh(b);
        var h;
        if (b.length && ji((h = b[b.length - 1])))
          for (g = 0; g < d.length; g++)
            if (d[g] >= f) {
              Object.assign((b[b.length - 1] = {}), h);
              break;
            }
        g = !0;
      }
      f = b;
      c = !c;
      h = Yh(a.D);
      a = Wh(h);
      h = +!!(h & 512) - 1;
      for (var k, l, n = 0; n < d.length; n++)
        if (((l = d[n]), l < a)) {
          l = hi(l, h);
          var r = f[l];
          null == r ? (f[l] = c ? ni : Zh()) : c && r !== ni && Sh(r);
        } else
          k ||
            ((r = void 0),
            f.length && ji((r = f[f.length - 1])) ? (k = r) : f.push((k = {}))),
            (r = k[l]),
            null == k[l] ? (k[l] = c ? ni : Zh()) : c && r !== ni && Sh(r);
    }
    k = b.length;
    if (!k) return b;
    var q;
    if (ji((f = b[k - 1]))) {
      a: {
        var v = f;
        c = {};
        a = !1;
        for (var y in v) {
          h = v[y];
          if (Array.isArray(h)) {
            n = h;
            if (mi(h, d, +y) || gi(h)) h = null;
            h != n && (a = !0);
          }
          null != h ? (c[y] = h) : (a = !0);
        }
        if (a) {
          for (var D in c) {
            v = c;
            break a;
          }
          v = null;
        }
      }
      v != f && (q = !0);
      k--;
    }
    for (e = +!!(e & 512) - 1; 0 < k; k--) {
      y = k - 1;
      f = b[y];
      if (null != f && !mi(f, d, y - e) && !gi(f)) break;
      var E = !0;
    }
    if (!q && !E) return b;
    b = g ? b : Array.prototype.slice.call(b, 0, k);
    g && (b.length = k);
    v && b.push(v);
    return b;
  }
  function xj(a) {
    return Array.isArray(a)
      ? a[0] instanceof Nh
        ? (z(2 === a.length), yj(a[1]), a)
        : [zj, yj(a)]
      : [gb(a, Nh), void 0];
  }
  var Cj = function (a, b, c) {
      eb(a);
      for (var d = c.gf, e = {}; Eh(b) && 4 != b.m; )
        if (((e = { md: e.md }), 11 === b.Ba)) {
          var f = b.Ha;
          e.md = !1;
          Kh(
            b,
            (function (g) {
              return function (h, k) {
                var l = c[h];
                if (!l) {
                  var n = d[h];
                  if (n) {
                    l = yj(n);
                    var r = Aj(l),
                      q = Bj(l).Zc;
                    l = c[h] = function (v, y, D) {
                      return r(ij(y, q, D, !0), v);
                    };
                  }
                }
                l ? l(k, a, h) : ((g.md = !0), (k.j.G = k.j.ya));
              };
            })(e),
          );
          e.md && si(a, Hh(b, f));
        } else si(a, Ih(b));
    },
    Ej = function (a, b) {
      return function (c, d, e) {
        return c.vj(e, Dj(d, a), b);
      };
    };
  function Fj(a, b, c) {
    if (Array.isArray(b)) {
      var d = Th(b);
      if (d & 4) return b;
      for (var e = 0, f = 0; e < b.length; e++) {
        var g = a(b[e]);
        null != g && (b[f++] = g);
      }
      f < e && (b.length = f);
      c && (Uh(b, (d | 5) & -12289), d & 2 && Object.freeze(b));
      return b;
    }
  }
  function Dj(a, b) {
    return a instanceof vj ? a.D : Array.isArray(a) ? Oi(a, b) : void 0;
  }
  var Gj = Symbol("deserializeBinaryFromReaderCache");
  function Aj(a) {
    var b = a[Gj];
    if (!b) {
      var c = Hj(a),
        d = Bj(a),
        e = d.bf;
      b = e
        ? function (f, g) {
            return e(f, g, d);
          }
        : function (f, g) {
            for (; Eh(g) && 4 != g.m; ) {
              var h = g.Gb,
                k = d[h];
              if (!k) {
                var l = d.gf;
                l && (l = l[h]) && (k = d[h] = Ij(l));
              }
              (k && k(g, f, h)) || si(f, Ih(g));
            }
            c === Jj ||
              c.Mh ||
              (f[ui || (ui = Symbol("JSPB_COMPARISON_TYPE_INFO"))] = c);
          };
      a[Gj] = b;
    }
    return b;
  }
  function Ij(a) {
    a = xj(a);
    var b = gb(a[0], Nh).pd;
    if ((a = a[1])) {
      yj(a);
      var c = Aj(a),
        d = Bj(z(a)).Zc;
      return function (e, f, g) {
        return b(e, f, g, d, c);
      };
    }
    return b;
  }
  var Jj,
    Kj = Symbol("comparisonTypeInfoCache");
  function Lj(a, b, c) {
    var d = c[1];
    if (d) {
      var e = d[Kj];
      var f = e ? e.Zc : z(Ni(d[0]));
      a[b] = null != e ? e : d;
    }
    f && f === Li
      ? eb(a.Ef || (a.Ef = [])).push(b)
      : c[0] && eb(a.Rf || (a.Rf = [])).push(b);
  }
  function Mj(a, b) {
    return [a.gg, !b || 0 < b[0] ? void 0 : b];
  }
  function Hj(a) {
    var b = a[Kj];
    if (b) return b;
    b = Nj(a, (a[Kj] = {}), Mj, Mj, Lj);
    if (!b.Rf && !b.Ef) {
      var c = !0,
        d;
      for (d in b) {
        isNaN(d) || (c = !1);
        break;
      }
      c ? (b = a[Kj] = Jj || (Jj = {})) : (b.Mh = !0);
    }
    return b;
  }
  function yj(a) {
    eb(a);
    var b;
    if (!(b = Oj in a || Pj in a) && (b = 0 < a.length)) {
      b = a[0];
      var c = Ni(b);
      null != c && c !== b && (a[0] = c);
      b = null != c;
    }
    z(b);
    return a;
  }
  function Qj(a, b, c) {
    a[b] = c;
  }
  function Nj(a, b, c, d, e) {
    e = void 0 === e ? Qj : e;
    b.Zc = z(Ni(a[0]));
    var f = 0,
      g = a[++f];
    g &&
      g.constructor === Object &&
      ((b.gf = g),
      (g = a[++f]),
      "function" === typeof g &&
        ((b.bf = g),
        (b.rh = bb(a[++f])),
        z(b.bf === Cj),
        z(b.rh === Ej),
        (g = a[++f])));
    for (
      var h = {};
      Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];

    ) {
      for (var k = 0; k < g.length; k++) h[g[k]] = g;
      g = a[++f];
    }
    for (k = 1; void 0 !== g; ) {
      "number" === typeof g && (z(0 < g), (k += g), (g = a[++f]));
      var l = void 0;
      if (g instanceof Nh) var n = g;
      else (n = Rj), f--;
      if (n.fg) {
        g = a[++f];
        l = a;
        var r = f;
        "function" == typeof g && (z(0 === g.length), (g = g()), (l[r] = g));
        yj(g);
        l = g;
      }
      g = a[++f];
      r = k + 1;
      "number" === typeof g && 0 > g && ((r -= g), (g = a[++f]));
      for (; k < r; k++) {
        var q = h[k];
        e(b, k, l ? d(n, l, q) : c(n, q));
      }
    }
    return b;
  }
  var Pj = Symbol("serializerFnCache"),
    Oj = Symbol("deserializerFnCache");
  function Sj(a, b) {
    var c = a.pd;
    return b
      ? function (d, e, f) {
          return c(d, e, f, b);
        }
      : c;
  }
  function Tj(a, b, c) {
    var d = a.pd,
      e,
      f;
    return function (g, h, k) {
      return d(g, h, k, f || (f = Bj(b).Zc), e || (e = Aj(b)), c);
    };
  }
  function Bj(a) {
    var b = a[Oj];
    if (b) return b;
    Hj(a);
    b = Nj(a, (a[Oj] = {}), Sj, Tj);
    Oj in a && Pj in a && (a.length = 0);
    return b;
  }
  function Uj(a, b) {
    return new Nh(a, b, !1, !1);
  }
  function Vj(a, b, c) {
    ej(a, Yh(a), b, c);
  }
  function Wj(a, b, c, d, e) {
    a.uj(c, Dj(b, d), e);
  }
  var Xj = Uj(
      function (a, b, c) {
        if (5 !== a.m) return !1;
        Vj(b, c, a.qe());
        return !0;
      },
      function (a, b, c) {
        b =
          null == b
            ? b
            : "number" === typeof b ||
                "NaN" === b ||
                "Infinity" === b ||
                "-Infinity" === b
              ? Number(b)
              : void 0;
        a.sj(c, b);
      },
    ),
    Yj = Uj(
      function (a, b, c) {
        if (0 !== a.m) return !1;
        Vj(b, c, a.se());
        return !0;
      },
      function (a, b, c) {
        a.Aj(c, Gi(b));
      },
    ),
    Zj;
  Zj = new Nh(
    function (a, b, c) {
      if (0 !== a.m && 2 !== a.m) return !1;
      b = hj(b, c);
      2 == a.m ? Mh(a, wh.prototype.Pf, b) : b.push(a.se());
      return !0;
    },
    function (a, b, c) {
      a.xj(c, Fj(Gi, b, !1));
    },
    !0,
    !1,
  );
  var ak = Uj(
      function (a, b, c) {
        if (0 !== a.m) return !1;
        Vj(b, c, a.Nf());
        return !0;
      },
      function (a, b, c) {
        a.tj(c, Di(b));
      },
    ),
    bk = Uj(
      function (a, b, c) {
        if (0 !== a.m) return !1;
        Vj(b, c, a.cd());
        return !0;
      },
      function (a, b, c) {
        a.qj(c, Ai(b));
      },
    ),
    ck = Uj(
      function (a, b, c) {
        if (2 !== a.m) return !1;
        Vj(b, c, Lh(a));
        return !0;
      },
      function (a, b, c) {
        a.yj(c, Hi(b));
      },
    ),
    zj = new Nh(
      function (a, b, c, d, e) {
        if (2 !== a.m) return !1;
        Jh(a, ij(b, d, c, !0), e);
        return !0;
      },
      Wj,
      !1,
      !0,
    ),
    Rj = new Nh(
      function (a, b, c, d, e) {
        if (2 !== a.m) return !1;
        Jh(a, ij(b, d, c), e);
        return !0;
      },
      Wj,
      !1,
      !0,
    ),
    dk = Uj(
      function (a, b, c) {
        if (0 !== a.m) return !1;
        Vj(b, c, a.ob());
        return !0;
      },
      function (a, b, c) {
        a.zj(c, Fi(b));
      },
    ),
    ek;
  ek = new Nh(
    function (a, b, c) {
      if (0 !== a.m && 2 !== a.m) return !1;
      b = hj(b, c);
      2 == a.m ? Mh(a, wh.prototype.Na, b) : b.push(a.ob());
      return !0;
    },
    function (a, b, c) {
      a.wj(c, Fj(Fi, b, !0));
    },
    !0,
    !1,
  );
  var fk = Uj(
    function (a, b, c) {
      if (0 !== a.m) return !1;
      Vj(b, c, a.Mf());
      return !0;
    },
    function (a, b, c) {
      a.rj(c, Di(b));
    },
  );
  function gk(a) {
    if (a instanceof vj) return a.constructor.Xa;
  }
  function hk(a, b) {
    b = void 0 === b ? new Set() : b;
    if (b.has(a)) return "(Recursive reference)";
    switch (typeof a) {
      case "object":
        if (a) {
          var c = Object.getPrototypeOf(a);
          switch (c) {
            case Map.prototype:
            case Set.prototype:
            case Array.prototype:
              b.add(a);
              var d =
                "[" +
                Array.from(a, function (e) {
                  return hk(e, b);
                }).join(", ") +
                "]";
              b.delete(a);
              c !== Array.prototype && (d = ik(c.constructor) + "(" + d + ")");
              return d;
            case Object.prototype:
              return (
                b.add(a),
                (c =
                  "{" +
                  Object.entries(a)
                    .map(function (e) {
                      var f = t(e);
                      e = f.next().value;
                      f = f.next().value;
                      return e + ": " + hk(f, b);
                    })
                    .join(", ") +
                  "}"),
                b.delete(a),
                c
              );
            default:
              return (
                (d = "Object"),
                c && c.constructor && (d = ik(c.constructor)),
                "function" === typeof a.toString &&
                a.toString !== Object.prototype.toString
                  ? d + "(" + String(a) + ")"
                  : "(object " + d + ")"
              );
          }
        }
        break;
      case "function":
        return "function " + ik(a);
      case "number":
        if (!Number.isFinite(a)) return String(a);
        break;
      case "bigint":
        return a.toString(10) + "n";
      case "symbol":
        return a.toString();
    }
    return JSON.stringify(a);
  }
  function ik(a) {
    var b = a.name;
    b ||
      (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
    return b;
  }
  function jk(a, b) {
    a.nf =
      "function" === typeof b
        ? b
        : function () {
            return b;
          };
    return a;
  }
  var kk = void 0;
  function lk() {
    throw Error(
      x
        .apply(0, arguments)
        .map(function (a) {
          return "function" === typeof a ? a() : a;
        })
        .filter(function (a) {
          return a;
        })
        .join("\n")
        .trim()
        .replace(/:$/, ""),
    );
  }
  (function () {
    var a = Fa.jspbGetTypeName;
    Fa.jspbGetTypeName = a
      ? function (b) {
          return a(b) || gk(b);
        }
      : gk;
  })();
  var mk = vj;
  var nk = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  m = nk.prototype;
  m.clone = function () {
    return new nk(this.x, this.y);
  };
  m.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
  };
  m.equals = function (a) {
    return (
      a instanceof nk &&
      (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    );
  };
  m.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  m.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  m.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  m.translate = function (a, b) {
    a instanceof nk
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), "number" === typeof b && (this.y += b));
    return this;
  };
  m.scale = function (a, b) {
    this.x *= a;
    this.y *= "number" === typeof b ? b : a;
    return this;
  };
  var ok = function (a, b) {
    this.width = a;
    this.height = b;
  };
  m = ok.prototype;
  m.clone = function () {
    return new ok(this.width, this.height);
  };
  m.toString = function () {
    return "(" + this.width + " x " + this.height + ")";
  };
  m.aspectRatio = function () {
    return this.width / this.height;
  };
  m.Vc = function () {
    return !(this.width * this.height);
  };
  m.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  m.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  m.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  m.scale = function (a, b) {
    this.width *= a;
    this.height *= "number" === typeof b ? b : a;
    return this;
  };
  var rk = function (a) {
      return a ? new pk(qk(a)) : Va || (Va = new pk());
    },
    sk = function (a) {
      var b = a.scrollingElement
        ? a.scrollingElement
        : Jg || "CSS1Compat" != a.compatMode
          ? a.body || a.documentElement
          : a.documentElement;
      a = a.parentWindow || a.defaultView;
      return Gg && a.pageYOffset != b.scrollTop
        ? new nk(b.scrollLeft, b.scrollTop)
        : new nk(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    tk = function (a, b, c) {
      function d(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (var e = 1; e < c.length; e++) {
        var f = c[e];
        if (!Ka(f) || (La(f) && 0 < f.nodeType)) d(f);
        else {
          a: {
            if (f && "number" == typeof f.length) {
              if (La(f)) {
                var g =
                  "function" == typeof f.item || "string" == typeof f.item;
                break a;
              }
              if ("function" === typeof f) {
                g = "function" == typeof f.item;
                break a;
              }
            }
            g = !1;
          }
          hb(g ? lb(f) : f, d);
        }
      }
    },
    qk = function (a) {
      z(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    uk = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a; ) {
        z("parentNode" != a.name);
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    pk = function (a) {
      this.Ab = a || Fa.document || document;
    };
  m = pk.prototype;
  m.getElementsByTagName = function (a, b) {
    return (b || this.Ab).getElementsByTagName(String(a));
  };
  m.createElement = function (a) {
    var b = this.Ab;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  };
  m.createTextNode = function (a) {
    return this.Ab.createTextNode(String(a));
  };
  m.appendChild = function (a, b) {
    z(
      null != a && null != b,
      "goog.dom.appendChild expects non-null arguments",
    );
    a.appendChild(b);
  };
  m.append = function (a, b) {
    tk(qk(a), a, arguments);
  };
  m.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  m.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  m.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  var wk = function () {
      return Cb && Hb
        ? Hb.mobile
        : !vk() && (F("iPod") || F("iPhone") || F("Android") || F("IEMobile"));
    },
    vk = function () {
      return Cb && Hb
        ? !Hb.mobile && (F("iPad") || F("Android") || F("Silk"))
        : F("iPad") || (F("Android") && !F("Mobile")) || F("Silk");
    };
  var xk = function (a) {
    try {
      return !!a && null != a.location.href && Eg(a, "foo");
    } catch (b) {
      return !1;
    }
  };
  function yk() {
    var a = void 0 === a ? Fa : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  var zk = function (a, b) {
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      2048 > b.length && b.push(a);
    },
    Ak = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = window,
        e = "undefined" !== typeof queueMicrotask;
      return function () {
        c &&
          e &&
          queueMicrotask(function () {
            d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
            d.google_rum_task_id_counter += 1;
          });
        var f = yk(),
          g = 3;
        try {
          var h = b.apply(this, arguments);
        } catch (l) {
          throw ((g = 13), l);
        } finally {
          if (d.google_measure_js_timing && f) {
            var k = yk() || 0;
            zk(
              Object.assign(
                {},
                { label: a.toString(), value: f, duration: k - f, type: g },
                c &&
                  e && {
                    taskId: (d.google_rum_task_id_counter =
                      d.google_rum_task_id_counter || 1),
                  },
              ),
              d,
            );
          }
        }
        return h;
      };
    };
  var Bk = function () {
    Oa.apply(this, arguments);
  };
  w(Bk, Oa);
  Bk.prototype.Qa = function (a, b) {
    return Oa.prototype.Qa.call(this, a, Ak(a, b));
  };
  function Ck(a, b) {
    return function (c) {
      return new K(function (d) {
        return c.subscribe(
          function (e) {
            a.Qa(b, function () {
              d.next(e);
            })();
          },
          function (e) {
            a.Qa(b, function () {
              d.error(e);
            })();
          },
          function () {
            a.Qa(b, function () {
              d.complete();
            })();
          },
        );
      });
    };
  }
  var Ek = function () {
    for (var a = t(x.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
      if (((b = b.value), b.xa())) {
        this.l = b;
        return;
      }
    this.l = new Dk();
  };
  m = Ek.prototype;
  m.xa = function () {
    return this.l.xa();
  };
  m.now = function () {
    return this.l.now();
  };
  m.setTimeout = function (a, b) {
    return this.l.setTimeout(a, b);
  };
  m.clearTimeout = function (a) {
    this.l.clearTimeout(a);
  };
  m.interval = function (a, b) {
    var c = this.Ya(a).subscribe(b);
    return function () {
      return void c.unsubscribe();
    };
  };
  m.Ya = function (a) {
    return this.l.Ya(a);
  };
  da.Object.defineProperties(Ek.prototype, {
    timeline: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.l.timeline;
      },
    },
  });
  var Dk = function () {
    this.timeline = Symbol();
  };
  m = Dk.prototype;
  m.xa = function () {
    return !1;
  };
  m.now = function () {
    return new je(0, this.timeline);
  };
  m.setTimeout = function () {
    return 0;
  };
  m.clearTimeout = function () {};
  m.interval = function () {
    return function () {};
  };
  m.Ya = function () {
    return ud;
  };
  var Fk = function (a, b) {
    this.I = a;
    this.A = b;
  };
  m = Fk.prototype;
  m.setTimeout = function (a, b) {
    return this.I.setTimeout(this.A.Qa(734, a), b);
  };
  m.clearTimeout = function (a) {
    this.I.clearTimeout(a);
  };
  m.interval = function (a, b) {
    var c = this.Ya(a).subscribe(b);
    return function () {
      return void c.unsubscribe();
    };
  };
  m.Ya = function (a) {
    var b = this;
    return new K(function (c) {
      var d = 0,
        e = b.I.setInterval(function () {
          c.next(d++);
        }, a);
      return function () {
        b.I.clearInterval(e);
      };
    });
  };
  m.xa = function () {
    return (
      !!this.I.clearTimeout &&
      "setTimeout" in this.I &&
      "setInterval" in this.I &&
      !!this.I.clearInterval
    );
  };
  var Gk = function (a, b) {
    Fk.call(this, a, b);
    this.timeline = ie;
  };
  w(Gk, Fk);
  Gk.prototype.now = function () {
    return new je(this.I.Date.now(), this.timeline);
  };
  Gk.prototype.xa = function () {
    return !!this.I.Date && !!this.I.Date.now && Fk.prototype.xa.call(this);
  };
  var Hk = function (a, b) {
    Fk.call(this, a, b);
    this.timeline = he;
  };
  w(Hk, Fk);
  Hk.prototype.now = function () {
    return new je(this.I.performance.now(), this.timeline);
  };
  Hk.prototype.xa = function () {
    return (
      !!this.I.performance &&
      !!this.I.performance.now &&
      Fk.prototype.xa.call(this)
    );
  };
  var Ik = function (a) {
    this.context = a;
  };
  Ik.prototype.K = function () {
    return !Jk(this.context) && !!this.context.global.fetch;
  };
  Ik.prototype.ping = function () {
    var a = this;
    return sd
      .apply(
        null,
        u(
          x.apply(0, arguments).map(function (b) {
            return gd(
              a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors",
              }),
            ).g(
              O(function (c) {
                return 200 === c.status;
              }),
            );
          }),
        ),
      )
      .g(
        Le(function (b) {
          return b;
        }),
        Ue(),
      );
  };
  Ik.prototype.bd = function (a, b, c) {
    for (
      var d = x.apply(3, arguments),
        e = this,
        f = new Headers(),
        g = t(b.entries()),
        h = g.next();
      !h.done;
      h = g.next()
    ) {
      var k = t(h.value);
      h = k.next().value;
      k = k.next().value;
      f.set(h, k);
    }
    var l,
      n = null != (l = a.Cf) ? l : !1;
    sd.apply(
      null,
      u(
        d.map(function (r) {
          return gd(
            e.context.global.fetch(
              r,
              Object.assign(
                {},
                { method: String(a.wb), cache: "no-cache" },
                n ? { keepalive: !0 } : {},
                { mode: "no-cors", headers: f, body: c },
              ),
            ),
          ).g(
            O(function (q) {
              return 200 === q.status;
            }),
          );
        }),
      ),
    ).g(
      Le(function (r) {
        return r;
      }),
      Ue(),
    );
  };
  var Kk = function (a) {
    this.context = a;
  };
  Kk.prototype.K = function (a) {
    return (null == a ? 0 : a.Bc) ||
      "POST" === (null == a ? void 0 : a.wb) ||
      (null == a ? 0 : a.yb) ||
      (null == a ? 0 : a.Kd) ||
      (null == a ? 0 : a.Cf)
      ? !1
      : !Jk(this.context);
  };
  Kk.prototype.ping = function () {
    var a = this;
    return M(
      x
        .apply(0, arguments)
        .map(function (b) {
          try {
            var c = a.context.global;
            c.google_image_requests || (c.google_image_requests = []);
            var d = c.document;
            d = void 0 === d ? document : d;
            var e = d.createElement("img");
            e.src = b;
            c.google_image_requests.push(e);
            return !0;
          } catch (f) {
            return !1;
          }
        })
        .every(function (b) {
          return b;
        }),
    );
  };
  Kk.prototype.bd = function (a, b, c) {
    this.ping.apply(this, u(x.apply(3, arguments)));
  };
  function Lk(a) {
    a = a.global;
    if (a.PendingGetBeacon) return a.PendingGetBeacon;
  }
  var Ok = function (a) {
      this.context = a;
      if (void 0 === Mk) {
        var b,
          c,
          d =
            null == (b = a.global)
              ? void 0
              : null == (c = b.document)
                ? void 0
                : c.createElement("meta");
        try {
          d &&
            ((d.httpEquiv = "origin-trial"),
            (d.content =
              "A/6hmwx8DpHud613fSYYa2C2T61iC513V4BYG/pBH4zs5sGsUc9RgaPKhfk3JhHF30N/9/NntWzEq28kkrMxpgQAAABweyJvcmlnaW4iOiJodHRwczovL2FkLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUGVuZGluZ0JlYWNvbkFQSSIsImV4cGlyeSI6MTY3ODIzMzU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="),
            a.global.document.head.append(d));
        } catch (e) {}
        Mk = d;
      }
      Nk = !0;
    },
    Mk;
  Ok.prototype.K = function (a) {
    return (
      Nk &&
      !Jk(this.context) &&
      void 0 !== Lk(this.context) &&
      !(null == a ? 0 : a.Bc) &&
      "POST" !== (null == a ? void 0 : a.wb) &&
      !(null == a ? 0 : a.yb) &&
      !(null == a ? 0 : a.Kd)
    );
  };
  Ok.prototype.S = function (a, b) {
    if (!this.K(b)) throw new Yd();
    return new Pk(this.context, a);
  };
  var Nk = !1,
    Pk = function (a, b) {
      this.context = a;
      this.Ce = b;
      a = Lk(this.context);
      if (void 0 === a) throw Error();
      this.He = new a(Qk(this), {});
    },
    Qk = function (a) {
      a = a.Ce;
      return ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1";
    };
  Pk.prototype.deactivate = function () {
    this.He.deactivate();
  };
  Pk.prototype.sendNow = function () {
    this.He.sendNow();
  };
  da.Object.defineProperties(Pk.prototype, {
    url: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Ce;
      },
      set: function (a) {
        this.Ce = a;
        this.He.setURL(Qk(this));
      },
    },
    method: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return "GET";
      },
      set: function (a) {
        if ("GET" !== a) throw new Yd();
      },
    },
  });
  var Rk = function (a) {
    this.context = a;
  };
  Rk.prototype.K = function (a) {
    if (
      (null == a ? 0 : a.Bc) ||
      "GET" === (null == a ? void 0 : a.wb) ||
      (null == a ? 0 : a.yb) ||
      (null == a ? 0 : a.Kd) ||
      (null == a ? 0 : a.Cf)
    )
      return !1;
    var b;
    return (
      !Jk(this.context) &&
      void 0 !==
        (null == (b = this.context.global.navigator) ? void 0 : b.sendBeacon)
    );
  };
  Rk.prototype.ping = function () {
    var a = this;
    return M(
      x
        .apply(0, arguments)
        .map(function (b) {
          var c;
          return null == (c = a.context.global.navigator)
            ? void 0
            : c.sendBeacon(b);
        })
        .every(function (b) {
          return b;
        }),
    );
  };
  Rk.prototype.bd = function (a, b, c) {
    this.ping.apply(this, u(x.apply(3, arguments)));
  };
  function Sk(a) {
    return function (b) {
      return b.g(Tk(a, af(new L())));
    };
  }
  function Y(a, b) {
    return function (c) {
      return c.g(Tk(a, ff(b)));
    };
  }
  function Tk(a, b) {
    function c(d) {
      return new K(function (e) {
        return d.subscribe(
          function (f) {
            Sa(
              a,
              function () {
                return void e.next(f);
              },
              3,
            );
          },
          function (f) {
            Sa(
              a,
              function () {
                return void e.error(f);
              },
              3,
            );
          },
          function () {
            Sa(
              a,
              function () {
                return void e.complete();
              },
              3,
            );
          },
        );
      });
    }
    return J(c, lf(), b, Bc(), c);
  }
  var Z = function (a) {
    this.value = a;
  };
  Z.prototype.Y = function (a) {
    return M(this.value).g(Y(a, 1));
  };
  function Uk(a) {
    var b = Vk(a);
    return null === b
      ? new Z(null)
      : b.g(
          O(function (c) {
            c = c.rb();
            if (Vg) c = Fa.btoa(c);
            else {
              for (var d = [], e = 0, f = 0; f < c.length; f++) {
                var g = c.charCodeAt(f);
                if (255 < g) throw Error("Q");
                d[e++] = g;
              }
              c = Xg(d);
            }
            return c;
          }),
          De(1),
          Y(a.h, 1),
        );
  }
  function Wk(a) {
    var b = void 0 === b ? {} : b;
    if ("function" === typeof Event) return new Event(a, b);
    if ("undefined" !== typeof document) {
      var c = document.createEvent("CustomEvent");
      c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
      return c;
    }
    throw Error();
  }
  var Xk = function (a) {
    this.value = a;
    this.ve = new L();
  };
  Xk.prototype.release = function () {
    this.ve.next();
    this.ve.complete();
    this.value = void 0;
  };
  da.Object.defineProperties(Xk.prototype, {
    i: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.value;
      },
    },
    released: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.ve;
      },
    },
  });
  var Yk = ["FRAME", "IMG", "IFRAME"],
    Zk = /^[01](px)?$/;
  function $k(a) {
    return "string" === typeof a ? document.getElementById(a) : a;
  }
  function al(a, b) {
    var c = !0,
      d = !0,
      e = void 0,
      f = !0;
    c = void 0 === c ? !0 : c;
    d = void 0 === d ? !1 : d;
    f = void 0 === f ? !1 : f;
    var g = void 0 === g ? !1 : g;
    if ((a = $k(a))) {
      e ||
        (e = function (ia, C, A) {
          ia.addEventListener(C, A);
        });
      for (
        var h = !1,
          k = function (ia) {
            h || ((h = !0), b(ia));
          },
          l,
          n,
          r = 0;
        r < Yk.length;
        ++r
      )
        if (Yk[r] == a.tagName) {
          n = 3;
          l = [a];
          break;
        }
      l || ((l = a.querySelectorAll(Yk.join(","))), (n = 2));
      var q = 0,
        v = 0,
        y = !g,
        D = (a = !1);
      r = {};
      for (var E = 0; E < l.length; r = { bc: r.bc }, E++) {
        var B = l[E];
        if (
          !(
            ("IMG" == B.tagName &&
              ((B.complete && (!B.naturalWidth || !B.naturalHeight)) ||
                ((void 0 === g ? 0 : g) &&
                  B.style &&
                  "none" === B.style.display))) ||
            (Zk.test(B.getAttribute("width")) &&
              Zk.test(B.getAttribute("height")))
          )
        ) {
          r.bc = "IMG" === B.tagName;
          if ("IMG" == B.tagName)
            var S = B.naturalWidth && B.naturalHeight ? !0 : !1;
          else
            try {
              S =
                "complete" ===
                (B.readyState
                  ? B.readyState
                  : B.contentWindow &&
                    B.contentWindow.document &&
                    B.contentWindow.document.readyState)
                  ? !0
                  : !1;
            } catch (ia) {
              S = void 0 === d ? !1 : d;
            }
          if (S) (a = !0), r.bc && (y = !0);
          else {
            q++;
            var oa = (function (ia) {
              return function (C) {
                q--;
                !q && y && k(n);
                ia.bc &&
                  ((C = C && "error" === C.type),
                  v--,
                  C || (y = !0),
                  !v && D && y && k(n));
              };
            })(r);
            e(B, "load", oa);
            r.bc && (v++, e(B, "error", oa));
          }
        }
      }
      0 === v && (y = !0);
      l = null;
      if (0 === q && !a && "complete" === Fa.document.readyState) n = 5;
      else if (q || !a) {
        e(Fa, "load", function () {
          !f || (!v && y) ? k(4) : (D = !0);
        });
        return;
      }
      c && k(n);
    }
  }
  function cl(a, b, c) {
    if (a) for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a);
  }
  function dl(a, b) {
    cl(
      a,
      function (c) {
        try {
          return c === c.parent ? null : c.parent;
        } catch (d) {}
        return null;
      },
      b,
    );
  }
  function el(a, b) {
    if ("IFRAME" == a.tagName) b(a);
    else {
      a = a.querySelectorAll("IFRAME");
      for (var c = 0; c < a.length && !b(a[c]); ++c);
    }
  }
  function fl(a) {
    return ((a = a.ownerDocument) && (a.parentWindow || a.defaultView)) || null;
  }
  function gl(a, b, c) {
    try {
      var d = JSON.parse(c.data);
    } catch (g) {}
    if ("object" === typeof d && d && "creativeLoad" === d.type) {
      var e = fl(a);
      if (c.source && e) {
        var f;
        dl(c.source, function (g) {
          try {
            if (g.parent === e) return (f = g), !0;
          } catch (h) {}
        });
        f &&
          el(a, function (g) {
            if (g.contentWindow === f) return b(d), !0;
          });
      }
    }
  }
  function hl(a) {
    return "string" === typeof a ? document.getElementById(a) : a;
  }
  var il = function (a, b) {
    var c = hl(a);
    if (c)
      if (c.onCreativeLoad) c.onCreativeLoad(b);
      else {
        var d = b ? [b] : [],
          e = function (f) {
            for (var g = 0; g < d.length; ++g)
              try {
                d[g](1, f);
              } catch (h) {}
            d = {
              push: function (h) {
                h(1, f);
              },
            };
          };
        c.onCreativeLoad = function (f) {
          d.push(f);
        };
        c.setAttribute("data-creative-load-listener", "");
        c.addEventListener("creativeLoad", function (f) {
          e(f.detail);
        });
        Fa.addEventListener("message", function (f) {
          gl(c, e, f);
        });
      }
  };
  var jl = function (a, b) {
      var c = this;
      this.global = a;
      this.ad = b;
      this.Lh = this.document
        ? sd(M(!0), md(this.document, "visibilitychange")).g(
            Ck(this.ad.A, 748),
            O(function () {
              return c.document ? c.document.visibilityState : "visible";
            }),
            V(),
          )
        : M("visible");
      this.Ih = this.document
        ? md(this.document, "DOMContentLoaded").g(Ck(this.ad.A, 739), De(1))
        : M(Wk("DOMContentLoaded"));
    },
    kl = function (a) {
      return a.document ? a.document.readyState : "complete";
    },
    ll = function (a) {
      return null !== a.document && void 0 !== a.document.visibilityState;
    };
  jl.prototype.querySelector = function (a) {
    return this.document ? this.document.querySelector(a) : null;
  };
  jl.prototype.querySelectorAll = function (a) {
    return this.document ? lb(this.document.querySelectorAll(a)) : [];
  };
  var ml = function (a) {
    return (
      null !== a.document && "function" === typeof a.document.elementFromPoint
    );
  };
  jl.prototype.elementFromPoint = function (a, b) {
    if (!this.document || !ml(this)) return null;
    a = this.document.elementFromPoint(a, b);
    return null === a ? null : new Xk(a);
  };
  var nl = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    if (void 0 === b.i || !a.document) return M(b).g(Ck(a.ad.A, 749));
    var d = new xc(1),
      e = function () {
        d.next(b);
      };
    c || il(b.i, e);
    al(b.i, e);
    return d.g(Ck(a.ad.A, 749), De(1));
  };
  da.Object.defineProperties(jl.prototype, {
    document: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return Eg(this.global, "document")
          ? this.global.document || null
          : null;
      },
    },
  });
  var ol = { left: 0, top: 0, width: 0, height: 0 };
  function pl(a, b) {
    return (
      a.left === b.left &&
      a.top === b.top &&
      a.width === b.width &&
      a.height === b.height
    );
  }
  function ql(a, b) {
    return {
      left: Math.max(a.left, b.left),
      top: Math.max(a.top, b.top),
      width: Math.max(
        0,
        Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left),
      ),
      height: Math.max(
        0,
        Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top),
      ),
    };
  }
  function rl(a, b) {
    return {
      left: Math.round(a.left + b.x),
      top: Math.round(a.top + b.y),
      width: a.width,
      height: a.height,
    };
  }
  var sl = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  m = sl.prototype;
  m.Ud = function () {
    return this.right - this.left;
  };
  m.Sd = function () {
    return this.bottom - this.top;
  };
  m.clone = function () {
    return new sl(this.top, this.right, this.bottom, this.left);
  };
  m.toString = function () {
    return (
      "(" +
      this.top +
      "t, " +
      this.right +
      "r, " +
      this.bottom +
      "b, " +
      this.left +
      "l)"
    );
  };
  m.contains = function (a) {
    return this && a
      ? a instanceof sl
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  m.expand = function (a, b, c, d) {
    La(a)
      ? ((this.top -= a.top),
        (this.right += a.right),
        (this.bottom += a.bottom),
        (this.left -= a.left))
      : ((this.top -= a),
        (this.right += Number(b)),
        (this.bottom += Number(c)),
        (this.left -= Number(d)));
    return this;
  };
  m.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  m.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  m.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  m.translate = function (a, b) {
    a instanceof nk
      ? ((this.left += a.x),
        (this.right += a.x),
        (this.top += a.y),
        (this.bottom += a.y))
      : ($a(a),
        (this.left += a),
        (this.right += a),
        "number" === typeof b && ((this.top += b), (this.bottom += b)));
    return this;
  };
  m.scale = function (a, b) {
    b = "number" === typeof b ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  var tl = function (a) {
    mk.call(this, a);
  };
  w(tl, mk);
  tl.prototype.mf = function () {
    var a = void 0 === a ? "" : a;
    return nj(Hi(dj(this, 2)), a);
  };
  tl.Xa = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
  var ul = function (a) {
    mk.call(this, a);
  };
  w(ul, mk);
  var vl = function (a, b) {
      return sj(a, 2, b);
    },
    wl = function (a, b) {
      return sj(a, 3, b);
    },
    xl = function (a, b) {
      return sj(a, 4, b);
    },
    yl = function (a, b) {
      return sj(a, 5, b);
    },
    zl = function (a, b) {
      return sj(a, 9, b);
    },
    Al = function (a, b) {
      var c = a.D,
        d = Yh(c);
      pi(d);
      if (null == b) ej(c, d, 10);
      else {
        eb(b);
        var e = Th(b),
          f = e,
          g = !!(2 & e) || !!(2048 & e);
        z(!g || Object.isFrozen(b));
        for (
          var h = g || Object.isFrozen(b), k = !h && !1, l = !0, n = !0, r = 0;
          r < b.length;
          r++
        ) {
          var q = b[r],
            v = Ya(tl);
          if (!(q instanceof v))
            throw Error("ha`" + yi(v) + "`" + (q && yi(q.constructor)));
          g || ((q = !!(Th(q.D) & 2)), l && (l = !q), n && (n = q));
        }
        g ||
          ((e |= 5),
          (e = l ? e | 8 : e & -9),
          (e = n ? e | 16 : e & -17),
          k && (e |= n ? 2 : 2048),
          e !== f &&
            (h &&
              ((b = Oh(b)),
              (e = 2 & d ? e | 2 : e & -3),
              (e = 32 & d ? e | 32 : e & -33),
              (e &= -2049)),
            Uh(b, e)),
          k && Object.freeze(b));
        vi(b);
        ej(c, d, 10, b);
      }
      return a;
    },
    Bl = function (a, b) {
      return fj(a, 11, null == b ? b : zi(b));
    },
    Cl = function (a, b) {
      return sj(a, 1, b);
    },
    Dl = function (a, b) {
      return fj(a, 7, null == b ? b : zi(b));
    };
  ul.Xa = "wireless.mdl.UserAgentClientHints";
  ul.Yh = [10, 6];
  var El =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " ",
    );
  function Fl(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function Gl(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
          ? void 0
          : c.getHighEntropyValues)
    );
  }
  function Hl(a) {
    if (!Gl(a)) return null;
    var b = Fl(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(El).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function Il(a) {
    var b;
    return Bl(
      Al(
        yl(
          vl(
            Cl(
              xl(
                Dl(
                  zl(
                    wl(new ul(), String(a.architecture || "")),
                    String(a.bitness || ""),
                  ),
                  !!a.mobile,
                ),
                String(a.model || ""),
              ),
              String(a.platform || ""),
            ),
            String(a.platformVersion || ""),
          ),
          String(a.uaFullVersion || ""),
        ),
        (null == (b = a.fullVersionList)
          ? void 0
          : b.map(function (c) {
              var d = new tl();
              d = sj(d, 1, String(c.brand));
              return sj(d, 2, String(c.version));
            })) || [],
      ),
      !!a.wow64,
    );
  }
  function Jl(a) {
    var b, c;
    return null !=
      (c =
        null == (b = Hl(a))
          ? void 0
          : b.then(function (d) {
              return Il(d);
            }))
      ? c
      : null;
  }
  var Kl = function (a, b, c, d) {
    a = void 0 === a ? window : a;
    b = void 0 === b ? null : b;
    c = void 0 === c ? new Oa() : c;
    void 0 === d && sg();
    Ud.call(this);
    this.global = a;
    this.hb = b;
    this.A = c;
    this.Jh = md(this.global, "pagehide").g(Ck(this.A, 941));
    this.Kf = md(this.global, "load").g(Ck(this.A, 738), De(1));
    this.Kh = md(this.global, "resize").g(Ck(this.A, 741));
    this.onMessage = md(this.global, "message").g(Ck(this.A, 740));
    this.document = new jl(this.global, this);
    this.l = new Ek(new Hk(this.I, this.A), new Gk(this.I, this.A));
    this.J = new fe(
      new Ok(this),
      new Ef(this, new Ik(this)),
      new Ef(this, new Rk(this)),
      new Ef(this, new Kk(this)),
    );
  };
  w(Kl, Ud);
  var Jk = function (a) {
    var b = a.global;
    return (
      !!a.global.HTMLFencedFrameElement &&
      !!b.fence &&
      "function" === typeof b.fence.reportEvent
    );
  };
  Kl.prototype.pb = function (a) {
    Jk(this) && this.global.fence.reportEvent(a);
  };
  Kl.prototype.Td = function () {
    return this.Jh.g(
      Ck(this.A, 942),
      Y(this.h, 1),
      O(function () {}),
    );
  };
  var Ll = function (a) {
      var b = new Kl(a.global.top, a.hb);
      b.J = a.J;
      return b;
    },
    Ml = function (a, b) {
      b.start();
      return md(b, "message").g(Ck(a.A, 740));
    };
  Kl.prototype.postMessage = function (a, b, c) {
    c = void 0 === c ? [] : c;
    this.global.postMessage(a, b, c);
  };
  Kl.prototype.Ud = function () {
    return xk(this.global) ? this.global.width : 0;
  };
  Kl.prototype.Sd = function () {
    return xk(this.global) ? this.global.height : 0;
  };
  var Nl = function (a, b) {
    try {
      var c = a.global;
      try {
        b && (c = c.top);
        a = c;
        var d = vk() || wk();
        b && null !== a && a != a.top && (a = a.top);
        try {
          if (void 0 === d ? 0 : d)
            var e = new ok(a.innerWidth, a.innerHeight).round();
          else {
            var f = (a || window).document,
              g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
            e = new ok(g.clientWidth, g.clientHeight).round();
          }
          var h = e;
        } catch (y) {
          h = new ok(-12245933, -12245933);
        }
        b = h;
        var k = b.height,
          l = b.width;
        if (-12245933 === l) var n = new sl(l, l, l, l);
        else {
          var r = sk(rk(c.document).Ab),
            q = r.x,
            v = r.y;
          n = new sl(v, q + l, v + k, q);
        }
      } catch (y) {
        n = new sl(-12245933, -12245933, -12245933, -12245933);
      }
      return { left: n.left, top: n.top, width: n.Ud(), height: n.Sd() };
    } catch (y) {
      return ol;
    }
  };
  Kl.prototype.validate = function () {
    var a = this.J.K() || Jk(this);
    return this.global && this.l.xa() && a;
  };
  var Vk = function (a) {
    return (a = Jl(a.global)) ? gd(a) : null;
  };
  da.Object.defineProperties(Kl.prototype, {
    sharedStorage: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.global.sharedStorage;
      },
    },
    I: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return window;
      },
    },
    Db: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return !xk(this.global.top);
      },
    },
    Xd: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Db || this.global.top !== this.global;
      },
    },
    scrollY: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.global.scrollY;
      },
    },
    MutationObserver: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.I.MutationObserver;
      },
    },
    ResizeObserver: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.I.ResizeObserver;
      },
    },
    lh: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        z(!0, "Major version must be an integer");
        return 8 <= Rb();
      },
    },
    zg: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return "vu" in this.global || "vv" in this.global;
      },
    },
  });
  var Ol = !Gg && !Nb(),
    Pl = function (a, b) {
      if (/-[a-z]/.test(b)) return null;
      if (Ol && a.dataset) {
        if (Pb() && !(b in a.dataset)) return null;
        a = a.dataset[b];
        return void 0 === a ? null : a;
      }
      return a.getAttribute(
        "data-" +
          String(b)
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase(),
      );
    };
  var Ql = {},
    Rl =
      ((Ql["data-google-av-cxn"] = "_avicxn_"),
      (Ql["data-google-av-cpmav"] = "_cvu_"),
      (Ql["data-google-av-metadata"] = "_avm_"),
      (Ql["data-google-av-adk"] = "_adk_"),
      (Ql["data-google-av-btr"] = void 0),
      (Ql["data-google-av-override"] = void 0),
      (Ql["data-google-av-dm"] = void 0),
      (Ql["data-google-av-immediate"] = void 0),
      (Ql["data-google-av-aid"] = void 0),
      (Ql["data-google-av-naid"] = void 0),
      (Ql["data-google-av-inapp"] = void 0),
      (Ql["data-google-av-slift"] = void 0),
      (Ql["data-google-av-itpl"] = void 0),
      (Ql["data-google-av-ext-cxn"] = void 0),
      (Ql["data-google-av-rs"] = void 0),
      (Ql["data-google-av-flags"] = void 0),
      (Ql["data-google-av-turtlex"] = void 0),
      (Ql["data-google-av-ufs-integrator-metadata"] = void 0),
      (Ql["data-google-av-vattr"] = void 0),
      (Ql["data-google-av-vrus"] = void 0),
      Ql),
    Sl = {},
    Tl =
      ((Sl["data-google-av-adk"] = "googleAvAdk"),
      (Sl["data-google-av-btr"] = "googleAvBtr"),
      (Sl["data-google-av-cpmav"] = "googleAvCpmav"),
      (Sl["data-google-av-dm"] = "googleAvDm"),
      (Sl["data-google-av-ext-cxn"] = "googleAvExtCxn"),
      (Sl["data-google-av-immediate"] = "googleAvImmediate"),
      (Sl["data-google-av-inapp"] = "googleAvInapp"),
      (Sl["data-google-av-itpl"] = "googleAvItpl"),
      (Sl["data-google-av-metadata"] = "googleAvMetadata"),
      (Sl["data-google-av-naid"] = "googleAvNaid"),
      (Sl["data-google-av-override"] = "googleAvOverride"),
      (Sl["data-google-av-rs"] = "googleAvRs"),
      (Sl["data-google-av-slift"] = "googleAvSlift"),
      (Sl["data-google-av-cxn"] = "googleAvCxn"),
      (Sl["data-google-av-aid"] = void 0),
      (Sl["data-google-av-flags"] = "googleAvFlags"),
      (Sl["data-google-av-turtlex"] = "googleAvTurtlex"),
      (Sl["data-google-av-ufs-integrator-metadata"] =
        "googleAvUfsIntegratorMetadata"),
      (Sl["data-google-av-vattr"] = "googleAvVattr"),
      (Sl["data-google-av-vrus"] = "googleAvVurs"),
      Sl);
  function Ul(a, b) {
    if (void 0 === a.i) return null;
    try {
      var c;
      var d = null != (c = a.i.getAttribute(b)) ? c : null;
      if (null !== d) return d;
    } catch (g) {}
    try {
      var e = Rl[b];
      if (e && ((d = a.i[e]), void 0 !== d)) return d;
    } catch (g) {}
    try {
      var f = Tl[b];
      if (f) return Pl(a.i, f);
    } catch (g) {}
    return null;
  }
  function Vl(a) {
    return O(function (b) {
      return Ul(b, a);
    });
  }
  var Wl = J(
    (function (a) {
      return O(function (b) {
        return a.map(function (c) {
          return Ul(b, c);
        });
      });
    })(["data-google-av-cxn", "data-google-av-turtlex"]),
    O(function (a) {
      var b = t(a);
      a = b.next().value;
      b = b.next().value;
      if (!a) {
        if (null !== b) return [];
        throw new be();
      }
      return a.split("|");
    }),
  );
  var Xl = function () {
    return J(
      hd(function (a) {
        return a.element
          .g(
            Wl,
            ne(function () {
              return M([""]);
            }),
          )
          .g(
            O(function (b) {
              return { Da: b, Gc: a };
            }),
          );
      }),
      ye(function (a) {
        return a.Da.sort().join(";");
      }),
      O(function (a) {
        return a.Gc;
      }),
    );
  };
  var Zl = function () {
      return hd(function (a) {
        return gd(Yl(a)).g(Sk(a.h));
      });
    },
    Yl = function (a) {
      return a.document
        .querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass")
        .map(function (b) {
          return new Xk(b);
        });
    };
  function $l(a) {
    var b = a.Kf,
      c = a.document.Ih;
    return sd(M({}), c, b).g(
      O(function () {
        return a;
      }),
    );
  }
  var bm = O(am);
  function am(a) {
    var b = Number(Ul(a, "data-google-av-rs"));
    if (!isNaN(b) && 0 !== b) return b;
    var c;
    return (a = null == (c = a.i) ? void 0 : c.id)
      ? a.startsWith("DfaVisibilityIdentifier")
        ? 6
        : a.startsWith("YtKevlarVisibilityIdentifier")
          ? 15
          : a.startsWith("YtSparklesVisibilityIdentifier")
            ? 17
            : a.startsWith("YtKabukiVisibilityIdentifier")
              ? 18
              : 0
      : 0;
  }
  function cm() {
    return J(
      T(function (a) {
        return void 0 !== a;
      }),
      O(function (a) {
        return a;
      }),
    );
  }
  function dm() {
    return function (a) {
      var b = [];
      return a.g(
        T(function (c) {
          if (
            void 0 === c.i ||
            b.some(function (d) {
              return d.i === c.i;
            })
          )
            return !1;
          b.push(c);
          return !0;
        }),
      );
    };
  }
  function em(a, b) {
    b = void 0 === b ? qc : b;
    return sd($l(a), b).g(Zl(), dm(), cm(), Y(a.h, 1));
  }
  function fm(a, b) {
    return new K(function (c) {
      var d = !1,
        e = Array(b.length);
      e.fill(void 0);
      var f = new Set(),
        g = new Set(),
        h = function (r, q) {
          a.Tf
            ? ((e[q] = r),
              f.add(q),
              d ||
                ((d = !0),
                Sa(
                  a,
                  function () {
                    d = !1;
                    c.next(lb(e));
                  },
                  1,
                )))
            : c.error(new ce(q));
        },
        k = function (r, q) {
          g.add(q);
          f.add(q);
          Sa(
            a,
            function () {
              c.error(r);
            },
            1,
          );
        },
        l = function (r) {
          g.add(r);
          Sa(
            a,
            function () {
              g.size === b.length && c.complete();
            },
            1,
          );
        },
        n = b.map(function (r, q) {
          return r.subscribe(
            function (v) {
              return void h(v, q);
            },
            function (v) {
              return void k(v, q);
            },
            function () {
              return void l(q);
            },
          );
        });
      return function () {
        n.forEach(function (r) {
          return void r.unsubscribe();
        });
      };
    });
  }
  function gm(a, b, c) {
    function d() {
      if (b.hb) {
        var E = b.hb,
          B = E.next;
        var S = {
          creativeId: b.af.Bb(c),
          requiredSignals: e,
          signals: Object.assign({}, f),
          hasPrematurelyCompleted: g,
          errorMessage: h,
          erroredSignalKey: k,
        };
        S = {
          specMajor: 2,
          specMinor: 0,
          specPatch: 0,
          timestamp: ke(b.l.now(), new je(0, b.l.timeline)),
          instanceId: b.af.Bb(b.Ob),
          creativeState: S,
        };
        B.call(E, S);
      }
    }
    for (
      var e = Object.keys(a),
        f = {},
        g = !1,
        h = null,
        k = null,
        l = {},
        n = new Set(),
        r = [],
        q = [],
        v = t(e),
        y = v.next(),
        D = {};
      !y.done;
      D = { aa: D.aa }, y = v.next()
    )
      (D.aa = y.value),
        (y = a[D.aa]),
        y instanceof Z
          ? ((l[D.aa] = y.value),
            n.add(D.aa),
            b.hb && (f[String(D.aa)] = me(y.value)))
          : ((y = y.g(
              V(function (E, B) {
                return ge(E) || ge(B) ? !1 : E === B;
              }),
              O(
                (function (E) {
                  return function (B) {
                    b.hb && ((f[String(E.aa)] = me(B)), d());
                    var S = {};
                    return (S[E.aa] = B), S;
                  };
                })(D),
              ),
              ne(
                (function (E) {
                  return function (B) {
                    if (B instanceof ce) throw new ee(String(E.aa));
                    throw B;
                  };
                })(D),
              ),
              tf(
                (function (E) {
                  return function () {
                    n.add(E.aa);
                  };
                })(D),
                (function (E) {
                  return function (B) {
                    k = String(E.aa);
                    h = String(B);
                    d();
                  };
                })(D),
                (function (E) {
                  return function () {
                    n.has(E.aa) || ((g = !0), d());
                  };
                })(D),
              ),
            )),
            q.push(D.aa),
            r.push(y));
    (a = 0 < Object.keys(f).length) && d();
    v = fm(b.h, r).g(
      ne(function (E) {
        if (E instanceof ce) throw new de(String(q[E.fh]));
        throw E;
      }),
      O(function (E) {
        return Object.freeze(Object.assign.apply(Object, [{}, l].concat(u(E))));
      }),
    );
    return (r = 0 < r.length) && a
      ? sd(M(Object.freeze(l)), v)
      : r
        ? v
        : M(Object.freeze(l));
  }
  function hm(a, b, c, d) {
    var e = im(jm(km(), lm), mm, nm);
    return a.A.Qa.bind(a.A)(733, function () {
      var f = {};
      try {
        return b
          .g(
            ne(function (g) {
              d(Object.assign({}, f, { error: g }));
              return qc;
            }),
            hd(function (g) {
              try {
                var h = c(a, g);
              } catch (l) {
                return (
                  d(
                    Object.assign({}, f, {
                      error: l instanceof Error ? l : String(l),
                    }),
                  ),
                  qc
                );
              }
              var k = {};
              return gm(h, a, g.Ob)
                .g(
                  tf(function (l) {
                    k = l;
                  }),
                  ff(1),
                  Bc(),
                )
                .g(
                  e,
                  ne(function (l) {
                    d(Object.assign({}, k, { error: l }));
                    return qc;
                  }),
                  Ke(void 0),
                  O(function () {
                    return !0;
                  }),
                );
            }),
          )
          .g(
            Ye(function (g) {
              return g + 1;
            }, 0),
            ne(function (g) {
              d(Object.assign({}, f, { error: g }));
              return qc;
            }),
          );
      } catch (g) {
        return d(Object.assign({}, f, { error: g })), qc;
      }
    })();
  }
  function om(a, b) {
    return J(
      X(function (c) {
        var d = a(c),
          e = b(c),
          f = {};
        return d && e && f
          ? new K(function (g) {
              e(d, f, function (h) {
                g.next(Object.assign({}, c, { yg: h }));
                g.complete();
              });
              return function () {};
            })
          : ud;
      }),
      T(function (c) {
        return c.yg;
      }),
    );
  }
  var mm = J(
    T(function (a) {
      var b = a.J,
        c = a.Cc,
        d = a.Pb,
        e = a.pb,
        f = a.lb,
        g = a.Tb;
      return (
        void 0 !== a.ib &&
        void 0 !== g &&
        void 0 !== b &&
        void 0 !== c &&
        void 0 !== d &&
        (!f || void 0 !== e)
      );
    }),
    qf(function (a) {
      return !(!1 === a.vf && void 0 !== a.df);
    }, !1),
    T(function (a) {
      return !0 === a.vf;
    }),
    om(
      function (a) {
        return a.Tb;
      },
      function (a) {
        return a.ib;
      },
    ),
    O(function (a) {
      if (a.lb) {
        var b;
        a.pb({
          eventType: "active-view-begin-to-render",
          eventData: null != (b = a.ld) ? b : "",
          destination: ["buyer"],
        });
      } else
        a.Pb(a.Cc, a).forEach(function (c) {
          a.J.S(c).sendNow();
        });
    }),
    De(1),
    Oe(),
  );
  function pm(a) {
    var b = new Map();
    if ("object" !== typeof a || null === a) return b;
    Object.values(a).forEach(function (c) {
      c &&
        "function" === typeof c.ga &&
        (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()));
    });
    return b;
  }
  function qm(a, b) {
    var c = rm,
      d = sm,
      e = tm;
    b = void 0 === b ? 0.01 : b;
    return function (f) {
      0 < b &&
        Math.random() <= b &&
        (a.global.HTMLFencedFrameElement &&
          a.global.fence &&
          "function" === typeof a.global.fence.reportEvent &&
          a.global.fence.reportEvent({
            eventType: "active-view-error",
            eventData: "",
            destination: ["buyer"],
          }),
        (f = Object.assign({}, f, {
          errorMessage:
            f.error instanceof Error && f.error.message
              ? f.error.message
              : String(f.error),
          ef:
            f.error instanceof Error && f.error.stack
              ? String(f.error.stack)
              : null,
          Kg:
            f.error instanceof Error && f.error.name
              ? String(f.error.name)
              : null,
          Jg: String(a.A.cg),
        })),
        d(
          Object.assign({}, f, {
            ta: (function () {
              return function (g) {
                try {
                  return e(Object.assign({}, g));
                } catch (h) {
                  return {};
                }
              };
            })(),
            Da: [c],
          }),
          pm(f),
        ).forEach(function (g) {
          a.J.S(g).sendNow();
        }));
    };
  }
  var nm = J(
    O(function (a) {
      var b = a.J,
        c = a.Qg;
      if (void 0 === b || void 0 === c) return !1;
      if (void 0 !== a.df) return !0;
      if (null === c) return !1;
      for (a = 0; a < c; a++)
        b.S(
          "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" +
            Math.floor(1e7 * Math.random()),
        ).sendNow();
      return !0;
    }),
    qf(function (a) {
      return !a;
    }),
    Oe(),
  );
  var tm = function (a) {
    return {
      id: a.ne,
      mcvt: a.fc,
      p: a.Hc,
      asp: a.aj,
      mtos: a.hc,
      tos: a.rc,
      v: a.xg,
      bin: a.wg,
      avms: a.If,
      bs: a.Te,
      mc: a.Ff,
      if: a.Dg,
      vu: a.Gg,
      app: a.Va,
      mse: a.je,
      mtop: a.ke,
      itpl: a.Zd,
      adk: a.zd,
      exk: a.cj,
      rs: a.Oa,
      la: a.yf,
      cr: a.de,
      uach: a.tc,
      vs: a.De,
      r: a.te,
      pay: a.Zg,
      rst: a.rg,
      rpt: a.qg,
      isd: a.eh,
      lsd: a.qh,
      context: a.Jg,
      msg: a.errorMessage,
      stack: a.ef,
      name: a.Kg,
      ec: a.ah,
      sfr: a.ze,
      met: a.Vb,
      wmsd: a.Ge,
      pv: a.jj,
      epv: a.fj,
      pbe: a.uf,
      vae: a.dh,
      spb: a.ag,
      ffslot: a.kh,
      reach: a.ii,
      io2: a.nd,
    };
  };
  function im() {
    var a = x.apply(0, arguments);
    return function (b) {
      var c = b.g(ff(1), Bc());
      b = a.map(function (d) {
        return c.g(d, Ke(!0));
      });
      return R(b).g(De(1), Oe());
    };
  }
  function jm() {
    var a = x.apply(0, arguments);
    return function (b) {
      var c = b.g(ff(1), Bc());
      b = a.map(function (d) {
        return c.g(d, Ke(!0));
      });
      return sd.apply(null, u(b)).g(De(1), Oe());
    };
  }
  function km() {
    var a = um,
      b = vm;
    return function (c) {
      var d = c.g(ff(1), Bc());
      c = d.g(a, Ke(!0));
      d = d.g(J(b, ff(), Bc()), Ke(!0));
      c = R([c, d]);
      return xd(c, d).g(De(1), Oe());
    };
  }
  var vm = function (a) {
    var b = [];
    return a.g(
      O(function (c) {
        var d = c.J,
          e = c.Tg,
          f = c.rc,
          g = c.oi,
          h = c.ta,
          k = c.ni,
          l = c.hd,
          n = c.sc,
          r = c.Ee,
          q = c.qf,
          v = c.uf,
          y = c.ag,
          D = c.ld;
        if (
          !c.Rd ||
          !q ||
          void 0 === c.hc ||
          void 0 === f ||
          void 0 === g ||
          void 0 === h ||
          void 0 === k ||
          void 0 === n ||
          void 0 === d
        )
          return !1;
        if (c.lb) {
          if (void 0 === l) return !1;
          g = c.pb;
          if (!g) return !1;
          g({
            eventType: "active-view-time-on-screen",
            eventData: null != D ? D : "",
            destination: ["buyer"],
          });
          return !0;
        }
        if (!v && !l) return !1;
        D = pm(c);
        var E;
        r = null != (E = null == r ? void 0 : r.pa(D).value) ? E : !1;
        c = n(
          Object.assign({}, c, {
            ne: k,
            De: r ? 4 : 3,
            te: null != l ? l : "u",
            ta: h,
            Da: g,
          }),
          D,
        );
        if (v) {
          for (; b.length > g.length; )
            (v = void 0), null == (v = b.shift()) || v.deactivate();
          c.forEach(function (B, S) {
            S >= b.length ? b.push(d.S(B)) : (b[S].url = B);
          });
          return y && e && void 0 !== l
            ? (c.forEach(function (B) {
                e.S(B).sendNow();
              }),
              !0)
            : void 0 !== l;
        }
        return y && e && void 0 !== l
          ? (c.forEach(function (B) {
              e.S(B).sendNow();
            }),
            !0)
          : void 0 !== l
            ? (c.forEach(function (B) {
                d.S(B).sendNow();
              }),
              !0)
            : !1;
      }),
      qf(function (c) {
        return !c;
      }),
      Oe(),
    );
  };
  function wm(a) {
    return function (b) {
      return b.g(
        O(function (c) {
          a.Tf || Za("Assertion on queued Observable output failed");
          return c;
        }),
      );
    };
  }
  function xm(a) {
    return function (b) {
      return new K(function (c) {
        var d = !1,
          e = b.g(wm(a)).subscribe(
            function (f) {
              d = !0;
              c.next(f);
            },
            c.error.bind(c),
            c.complete.bind(c),
          );
        Sa(
          a,
          function () {
            d || c.next(null);
          },
          3,
        );
        return e;
      });
    };
  }
  function ym(a, b) {
    return function (c) {
      return c.g(
        X(function (d) {
          return new K(function (e) {
            function f() {
              h.disconnect();
              k.unsubscribe();
            }
            var g = a.MutationObserver;
            if (g && void 0 !== d.i) {
              var h = new g(function (l) {
                e.next(l);
              });
              h.observe(d.i, b);
              var k = d.released.subscribe(f);
              return f;
            }
          });
        }),
      );
    };
  }
  var zm = {
    Zi: 0,
    Di: 1,
    Fi: 2,
    Ei: 3,
    0: "UNKNOWN",
    1: "DEFER_MEASUREMENT",
    2: "DO_NOT_DEFER_MEASUREMENT",
    3: "DEFER_MEASUREMENT_AND_PING",
  };
  function Am(a, b) {
    var c = b.g(ym(a, { attributes: !0 }), Y(a.h, 1));
    return R([b, c.g(Y(a.h, 1), xm(a.h))]).g(
      O(function (d) {
        return t(d).next().value;
      }),
      Vl("data-google-av-dm"),
      O(Bm),
    );
  }
  function Bm(a) {
    return a && a in zm ? Number(a) : 2;
  }
  function Cm(a) {
    if (3 === a.uh) return null;
    if (void 0 !== a.hd) {
      var b = !1 === a.Cg ? "n" : !a.Md && !1 === a.Rd && a.hd ? a.hd : null;
      if (null !== b) return b;
    }
    return a.Lc instanceof Wd
      ? "msf"
      : a.Gd instanceof Xd
        ? "c"
        : !1 === a.Bg
          ? "pv"
          : a.Lc || a.Gd
            ? "x"
            : null;
  }
  var lm = J(
    T(function (a) {
      return (
        void 0 !== a.Qc &&
        void 0 !== a.ta &&
        void 0 !== a.sc &&
        void 0 !== a.Rc &&
        void 0 !== a.J
      );
    }),
    T(function (a) {
      return null !== Cm(a);
    }),
    om(
      function (a) {
        return a.yc;
      },
      function (a) {
        return a.ib;
      },
    ),
    O(function (a) {
      if (a.lb) {
        var b = a.pb;
        if (b) {
          var c;
          b({
            eventType: "active-view-unmeasurable",
            eventData: null != (c = a.ld) ? c : "",
            destination: ["buyer"],
          });
        }
      } else {
        c = void 0;
        var d = Cm(a);
        if ("x" === d) {
          var e,
            f = null != (e = a.Lc) ? e : a.Gd;
          f && ((b = f.stack), (c = f.message));
        }
        a.sc(
          Object.assign({}, a, {
            Da: a.Qc,
            ta: a.ta,
            ne: a.Rc,
            De: 2,
            te: d,
            errorMessage: c,
            ef: b,
          }),
          pm(a),
        ).forEach(function (g) {
          a.J.S(g).sendNow();
        });
      }
    }),
    De(1),
    Oe(),
  );
  function Dm(a, b) {
    return "string" === typeof a
      ? encodeURIComponent(a)
      : "number" === typeof a
        ? String(a)
        : Array.isArray(a)
          ? a
              .map(function (c) {
                return Dm(c, b);
              })
              .join(",")
          : a instanceof je
            ? a.toString()
            : a && "function" === typeof a.ga
              ? Dm(a.pa(b).value, b)
              : !0 === a
                ? "1"
                : !1 === a
                  ? "0"
                  : void 0 === a || null === a
                    ? null
                    : [
                        a.top,
                        a.left,
                        a.top + a.height,
                        a.left + a.width,
                      ].join();
  }
  function Em(a, b) {
    a = Object.entries(a)
      .map(function (c) {
        var d = t(c);
        c = d.next().value;
        d = d.next().value;
        d = Dm(d, b);
        return null === d ? "" : c + "=" + d;
      })
      .filter(function (c) {
        return "" !== c;
      });
    return a.length ? a.join("&") : "";
  }
  var Fm = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
    Gm = gg(
      hg(),
      "google3.javascript.ads.common.url_macros_substitutor",
      Xf,
    ).Df;
  function Hm(a, b) {
    return a.replace(Fm, function (c, d) {
      try {
        var e = null !== b && d in b ? b[d] : void 0;
        if (null == e)
          return (
            Gm && ig(Gm, "No value supplied for unsupported macro: " + d), c
          );
        if (null == e.toString())
          return (
            Gm &&
              ig(
                Gm,
                "The toString method of value returns null for macro: " + d,
              ),
            c
          );
        e = e.toString();
        if ("" == e || !/^[\s\xa0]*$/.test(null == e ? "" : String(e)))
          return encodeURIComponent(e).replace(/%2C/g, ",");
        Gm && ig(Gm, "Null value supplied for macro: " + d);
      } catch (f) {
        Gm && ig(Gm, "Failed to set macro: " + d);
      }
      return c;
    });
  }
  function Im(a, b) {
    var c = Object.assign({}, a),
      d = a.tc;
    c = (delete c.tc, c);
    c = a.ta(c);
    var e = Em(c, b);
    return ib(a.Da, function (f) {
      var g = "";
      "string" === typeof d && (g = "&" + Em({ uach: d }, b));
      var h = {};
      return Hm(f, ((h.VIEWABILITY = e), h)) + g;
    });
  }
  function sm(a, b) {
    var c = a.ta(a),
      d = Em(c, b);
    return d
      ? ib(a.Da, function (e) {
          e = 0 <= e.indexOf("?") ? e : e + "?";
          e = 0 <= "?&".indexOf(e.slice(-1)) ? e : e + "&";
          return e + d;
        })
      : a.Da;
  }
  function Jm(a, b) {
    return ib(a, function (c) {
      if ("string" === typeof b.tc) {
        var d = "&" + Em({ uach: b.tc }, new Map());
        return "&adurl=" == c.substring(c.length - 7)
          ? c.substring(0, c.length - 7) + d + "&adurl="
          : c + d;
      }
      return c;
    });
  }
  var um = J(
    T(function (a) {
      return (
        void 0 !== a.ta &&
        void 0 !== a.Qc &&
        void 0 !== a.sc &&
        void 0 !== a.Rc &&
        void 0 !== a.J
      );
    }),
    O(function (a) {
      return Object.assign({}, a, { dg: pm(a) });
    }),
    T(function (a) {
      var b = a.Ee,
        c = a.dg,
        d;
      return (
        !!a.qf && (null != (d = null == b ? void 0 : b.pa(c).value) ? d : !1)
      );
    }),
    om(
      function (a) {
        return a.zc;
      },
      function (a) {
        return a.ib;
      },
    ),
    O(function (a) {
      var b = a.J,
        c = a.ld;
      if (a.lb) {
        var d = a.pb;
        if (!d) return !1;
        d({
          eventType: "active-view-viewable",
          eventData: null != c ? c : "",
          destination: ["buyer"],
        });
        return !0;
      }
      c = a.sc(
        Object.assign({}, a, { Da: a.Qc, ta: a.ta, ne: a.Rc, De: 4, te: "v" }),
        a.dg,
      );
      (d = a.Hd) &&
        0 < d.length &&
        a.Pb &&
        a.Pb(d, a).forEach(function (e) {
          b.S(e).sendNow();
        });
      (d = a.Fe) &&
        0 < d.length &&
        a.Pb &&
        a.Pb(d, a).forEach(function (e) {
          b.S(e).sendNow();
        });
      c.forEach(function (e) {
        b.S(e, { Bc: a.fe }).sendNow();
      });
      return !0;
    }),
    qf(function (a) {
      return !a;
    }),
    Oe(),
  );
  function Km(a) {
    var b = Math.pow(10, 2);
    return Math.round(a * b) / b;
  }
  function Lm(a, b, c, d) {
    var e = Object.keys(c).map(function (h) {
        return h;
      }),
      f = e.filter(function (h) {
        var k = c[h];
        h = d[h];
        return k instanceof Z && h instanceof Z && k.value === h.value;
      }),
      g = f.reduce(function (h, k) {
        var l = {};
        return Object.assign({}, h, ((l[k] = c[k]), l));
      }, {});
    return e.reduce(function (h, k) {
      if (0 <= f.indexOf(k)) return h;
      var l = {};
      return Object.assign(
        {},
        h,
        ((l[k] = b.g(
          X(function (n) {
            return (n = n ? c[k] : d[k]) &&
              (n instanceof K ||
                ("function" === typeof n.Fb &&
                  "function" === typeof n.subscribe))
              ? n
              : n.Y(a);
          }),
        )),
        l),
      );
    }, g);
  }
  function Mm(a) {
    return J(
      O(function () {
        return !0;
      }),
      W(!1),
      Y(a, 1),
    );
  }
  function Nm(a) {
    return 0 >= a.length
      ? qc
      : R(
          a.map(function (b) {
            var c = 0;
            return b.g(
              O(function (d) {
                return { index: c++, value: d };
              }),
            );
          }),
        ).g(
          T(function (b) {
            return b.every(function (c) {
              return c.index === b[0].index;
            });
          }),
          O(function (b) {
            return b.map(function (c) {
              return c.value;
            });
          }),
        );
  }
  function Om(a, b) {
    a.Ga && (a.nb = a.Ga);
    a.Ga = b;
    a.nb && a.nb.value
      ? ((b = Math.max(0, ke(b.timestamp, a.nb.timestamp))),
        (a.totalTime += b),
        (a.na += b))
      : (a.na = 0);
    return a;
  }
  function Pm() {
    return J(
      Ye(Om, { totalTime: 0, na: 0 }),
      O(function (a) {
        return a.totalTime;
      }),
    );
  }
  function Qm() {
    return J(
      Ye(Om, { totalTime: 0, na: 0 }),
      O(function (a) {
        return a.na;
      }),
    );
  }
  function Rm(a, b) {
    return J(
      Vl("data-google-av-metadata"),
      O(function (c) {
        if (null === c) return b(void 0);
        c = c
          .split("&")
          .map(function (d) {
            return d.split("=");
          })
          .filter(function (d) {
            return d[0] === a;
          });
        return 0 === c.length ? b(void 0) : b(c[0].slice(1).join("="));
      }),
    );
  }
  var Sm = { Ai: "asmreq", Bi: "asmres" };
  var Tm = function (a) {
    mk.call(this, a);
  };
  w(Tm, mk);
  Tm.prototype.Vf = function (a) {
    rj(this, a);
  };
  Tm.Xa = "tagging.common.osd.AdSpeedMetricsRequest";
  var Um = function (a) {
    mk.call(this, a);
  };
  w(Um, mk);
  Um.Xa = "tagging.common.osd.AdSpeedMetricsResponse.Box";
  var Vm = function (a) {
    mk.call(this, a);
  };
  w(Vm, mk);
  Vm.prototype.Vf = function (a) {
    rj(this, a);
  };
  var Wm = (function (a) {
    return function (b) {
      bb(a);
      if (null == b || "" == b) b = gb(new a(), vj);
      else {
        ab(b);
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("qa`" + Ja(b) + "`" + b);
        Rh(b, 32);
        b = Ki(a, b);
      }
      return b;
    };
  })(Vm);
  Vm.Xa = "tagging.common.osd.AdSpeedMetricsResponse";
  function Xm(a, b) {
    var c = void 0 === c ? Ll(a) : c;
    var d = new MessageChannel();
    b = b.g(
      O(function (f) {
        return Number(f);
      }),
      T(function (f) {
        return !isNaN(f) && 0 !== f;
      }),
      tf(function (f) {
        var g = new Tm();
        g.Vf(f);
        f = { type: "asmreq", payload: g.rb() };
        c.postMessage(f, "*", [d.port2]);
      }),
      De(1),
    );
    var e = Ml(a, d.port1).g(
      T(function (f) {
        return "object" === typeof f.data;
      }),
      O(function (f) {
        var g = f.data,
          h = Object.values(Sm).includes(g.type);
        g = "string" === typeof g.payload;
        if (!h || !g || "asmres" !== f.data.type) return null;
        try {
          return Wm(f.data.payload);
        } catch (k) {
          return null;
        }
      }),
      T(function (f) {
        return null !== f;
      }),
      O(function (f) {
        return f;
      }),
    );
    return b.g(
      X(function (f) {
        return M(f).g(pe(e));
      }),
      T(function (f) {
        var g = t(f);
        f = g.next().value;
        g = g.next().value;
        if (null != Fi(dj(g, 1))) {
          var h = void 0 === h ? 0 : h;
          h = nj(Fi(dj(g, 1)), h) === f;
        } else h = !1;
        return h;
      }),
      O(function (f) {
        f = t(f);
        f.next();
        return f.next().value;
      }),
      Sk(a.h),
    );
  }
  function Ym(a, b, c) {
    var d = b.dc.g(
      De(1),
      X(function () {
        return Xm(a, c);
      }),
      T(function (f) {
        return (
          oj(f, 2) &&
          void 0 !== jj(f, Um, 3, !1) &&
          null != Di(dj(f, 4)) &&
          null != Di(dj(f, 5))
        );
      }),
      De(1),
      Sk(a.h),
    );
    b = d.g(
      O(function (f) {
        return { x: pj(mj(f, Um, 3), 2), y: pj(mj(f, Um, 3), 1) };
      }),
      V(function (f, g) {
        return f.x === g.x && f.y === g.y;
      }),
      Y(a.h, 1),
    );
    var e = d.g(
      O(function (f) {
        return pj(f, 4);
      }),
      Y(a.h, 1),
    );
    d = d.g(
      O(function (f) {
        return pj(f, 5);
      }),
      Y(a.h, 1),
    );
    return { eh: e, tg: b, qh: d };
  }
  function Zm(a, b) {
    return b.dc.g(
      De(1),
      O(function () {
        return a.l.now().round();
      }),
    );
  }
  var $m = O(function (a) {
    return [a.value.N.width, a.value.N.height];
  });
  function an(a, b) {
    return function (c) {
      return Nm(
        b.map(function (d) {
          return c.g(a(d));
        }),
      );
    };
  }
  function bn() {
    var a;
    return J(
      tf(function (b) {
        return void (a = b.timestamp);
      }),
      Qm(),
      O(function (b) {
        return { timestamp: a, value: Math.round(b) };
      }),
    );
  }
  var cn = function (a, b) {
      this.Cd = a;
      this.options = b;
      this.L = this.be = this.ae = null;
    },
    dn = function (a, b) {
      2 === b.L || 3 === b.L
        ? a.L ||
          ((b = Object.assign({}, a.options, {
            delay: 100,
            trackVisibility: !0,
          })),
          (a.L = new IntersectionObserver(a.Cd, b)))
        : 1 === b.L
          ? a.be ||
            ((b = Object.assign({}, a.options, { delay: 100 })),
            (a.be = new IntersectionObserver(a.Cd, b)))
          : a.ae || (a.ae = new IntersectionObserver(a.Cd, a.options));
    },
    en = function (a, b) {
      a = 2 === b || 3 === b ? a.L : 1 === b ? a.be : a.ae;
      if (!a) throw new Zd();
      return a;
    };
  cn.prototype.observe = function (a, b) {
    en(this, a).observe(b);
  };
  cn.prototype.unobserve = function (a, b) {
    en(this, a).unobserve(b);
  };
  cn.prototype.disconnect = function (a) {
    en(this, a).disconnect();
  };
  cn.prototype.takeRecords = function (a) {
    return en(this, a).takeRecords();
  };
  var fn = {
    W: "ns",
    Z: ol,
    N: ol,
    V: new L(),
    O: "ns",
    H: ol,
    R: ol,
    ba: { x: 0, y: 0 },
  };
  function gn(a, b) {
    return (
      pl(a.N, b.N) &&
      pl(a.H, b.H) &&
      pl(a.Z, b.Z) &&
      pl(a.R, b.R) &&
      a.O === b.O &&
      a.V === b.V &&
      a.W === b.W &&
      a.ba.x === b.ba.x &&
      a.ba.y === b.ba.y
    );
  }
  var hn = function (a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  };
  function jn(a, b) {
    return function (c) {
      return function (d) {
        var e = d.g(af(new L()), Bc());
        d = c.element.g(V());
        e = e.g(
          O(function (f) {
            return f.value;
          }),
        );
        return R([d, e, b]).g(
          O(function (f) {
            var g = t(f);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            if (void 0 === f.i)
              var k = { top: 0, left: 0, width: 0, height: 0 };
            else {
              k = f.i.getBoundingClientRect();
              var l = f.i,
                n = a.global,
                r = new nk(0, 0);
              var q = (q = qk(l)) ? q.parentWindow || q.defaultView : window;
              if (Eg(q, "parent")) {
                do {
                  if (q == n) {
                    var v = l,
                      y = qk(v);
                    cb(v, "Parameter is required");
                    var D = new nk(0, 0);
                    var E = y ? qk(y) : document;
                    E =
                      !Gg ||
                      9 <= Number(Sg) ||
                      "CSS1Compat" == rk(E).Ab.compatMode
                        ? E.documentElement
                        : E.body;
                    v != E &&
                      ((v = hn(v)),
                      (y = sk(rk(y).Ab)),
                      (D.x = v.left + y.x),
                      (D.y = v.top + y.y));
                  } else (D = z(l)), (D = hn(D)), (D = new nk(D.left, D.top));
                  r.x += D.x;
                  r.y += D.y;
                } while (
                  q &&
                  q != n &&
                  q != q.parent &&
                  (l = q.frameElement) &&
                  (q = q.parent)
                );
              }
              k = { top: r.y, left: r.x, width: k.width, height: k.height };
            }
            k = rl(k, h.ba);
            n = ql(k, h.Z);
            r = a.l.now();
            q = Object;
            l = q.assign;
            if (2 !== g || a.Db || 0 >= n.width || 0 >= n.height) var B = !1;
            else
              try {
                var S = a.document.elementFromPoint(
                  n.left + n.width / 2,
                  n.top + n.height / 2,
                );
                B = S ? !kn(S, f) : !1;
              } catch (oa) {
                B = !1;
              }
            return {
              timestamp: r,
              value: l.call(q, {}, h, { O: "geo", R: B ? fn.R : n, H: k }),
            };
          }),
          Sk(a.h),
        );
      };
    };
  }
  function kn(a, b, c) {
    c = void 0 === c ? 0 : c;
    return void 0 === a.i || void 0 === b.i
      ? !1
      : a.i === b.i ||
          uk(b.i, function (d) {
            return d === a.i;
          })
        ? !0
        : b.i.ownerDocument &&
            b.i.ownerDocument.defaultView &&
            b.i.ownerDocument.defaultView === b.i.ownerDocument.defaultView.top
          ? !1
          : 10 > c &&
              b.i.ownerDocument &&
              b.i.ownerDocument.defaultView &&
              b.i.ownerDocument.defaultView.frameElement
            ? kn(a, new Xk(b.i.ownerDocument.defaultView.frameElement), c + 1)
            : !0;
  }
  function ln(a) {
    return function (b) {
      return b.g(a.ResizeObserver ? mn(a) : nn(a), ff(1), Bc());
    };
  }
  function mn(a) {
    return function (b) {
      return b.g(
        X(function (c) {
          var d = a.ResizeObserver;
          if (!d || void 0 === c.i) return M(fn.H);
          var e = new K(function (f) {
            function g() {
              void 0 !== c.i && h.unobserve(c.i);
              h.disconnect();
              k.unsubscribe();
            }
            if (void 0 === c.i) return f.complete(), function () {};
            var h = new d(function (l) {
              l.forEach(function (n) {
                f.next(n);
              });
            });
            h.observe(c.i);
            var k = c.released.subscribe(g);
            return g;
          }).g(
            Ck(a.A, 736),
            O(function (f) {
              return f.contentRect;
            }),
          );
          return sd(M(c.i.getBoundingClientRect()), e);
        }),
        V(pl),
      );
    };
  }
  function nn(a) {
    return function (b) {
      var c = b.g(
          ym(a, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }),
        ),
        d = a.Kh;
      c = sd(
        b.g(
          O(function () {
            return Wk("resize");
          }),
        ),
        c,
        d,
      );
      return R(b, c).g(
        Ck(a.A, 737),
        O(function (e) {
          e = t(e).next().value;
          return void 0 === e.i ? void 0 : e.i.getBoundingClientRect();
        }),
        cm(),
        V(pl),
      );
    };
  }
  function on(a, b) {
    var c = pn(a, b).g(ff(1), Bc());
    return function (d) {
      return function (e) {
        e = e.g(
          X(function (f) {
            return f.element;
          }),
          V(),
        );
        return R([c, e]).g(
          X(function (f) {
            var g = t(f);
            f = g.next().value;
            g = g.next().value;
            return qn(a, f.ih, ln(a), f.Fh, d, f.Ug, g);
          }),
          Sk(a.h),
        );
      };
    };
  }
  function rn(a, b, c) {
    var d = on(a, c)(b);
    return function (e) {
      var f = d(M(e));
      return function (g) {
        return R([g, f]).g(
          O(function (h) {
            var k = t(h);
            h = k.next().value;
            k = k.next().value;
            var l = rl(k.value.H, h.value.ba),
              n = ql(rl(k.value.R, h.value.ba), h.value.Z);
            return {
              timestamp: h.timestamp.maximum(k.timestamp),
              value: Object.assign({}, h.value, { O: "nio", R: n, H: l }),
            };
          }),
        );
      };
    };
  }
  function sn(a) {
    return O(function (b) {
      return "nio" !== b.value.W
        ? b
        : Object.assign({}, b, {
            value: Object.assign({}, b.value, { Z: Nl(a, !0), N: Nl(a, !0) }),
          });
    });
  }
  function tn(a, b) {
    return M(b).g(
      a,
      O(function () {
        return b;
      }),
    );
  }
  function pn(a, b) {
    return a.l.timeline !== he
      ? vc(new Wd(2))
      : a.MutationObserver
        ? "undefined" === typeof IntersectionObserver
          ? vc(new Wd(0))
          : new K(function (c) {
              var d = new L(),
                e = new cn(d.next.bind(d), { threshold: [].concat(u(b)) });
              c.next({
                Fh: d.g(Ck(a.A, 735)),
                ih: e,
                Ug: function (f) {
                  f = e.takeRecords(f.L);
                  0 < f.length && d.next(f);
                },
              });
            }).g(De(1), ff(1), Bc())
        : vc(new Wd(1));
  }
  function un(a) {
    return ed(
      a.sort(function (b, c) {
        return b.time - c.time;
      }),
    );
  }
  function qn(a, b, c, d, e, f, g) {
    return new K(function (h) {
      function k() {
        y ||
          ((y = !0),
          void 0 !== g.i && b.unobserve(e.L, g.i),
          n.unsubscribe(),
          v.unsubscribe(),
          q.unsubscribe(),
          D.unsubscribe());
      }
      if (void 0 !== g.i) {
        dn(b, e);
        b.observe(e.L, g.i);
        var l = new pc({
            timestamp: a.l.now(),
            value: Object.assign({}, fn, { W: "nio", O: "nio" }),
          }),
          n = d
            .g(
              hd(function (E) {
                return un(E);
              }),
              T(function (E) {
                return E.target === g.i;
              }),
              O(function (E) {
                return {
                  timestamp: new je(E.time, he),
                  value: {
                    W: "nio",
                    Z: E.rootBounds || ol,
                    N: E.rootBounds || Nl(a, !0),
                    V: r,
                    O: "nio",
                    R: E.intersectionRect,
                    H: E.boundingClientRect,
                    ba: { x: 0, y: 0 },
                    isIntersecting: E.isIntersecting,
                    Bf: E.isVisible,
                  },
                };
              }),
              af(l),
              Bc(),
            )
            .subscribe(h),
          r = new L(),
          q = r.subscribe(function () {
            f(e);
            h.next({ timestamp: a.l.now(), value: l.value.value });
            void 0 !== g.i && (b.unobserve(e.L, g.i), b.observe(e.L, g.i));
          }),
          v = tn(c, g).subscribe(function () {
            r.next();
          }),
          y = !1,
          D = g.released.subscribe(function () {
            return k();
          });
        return k;
      }
    });
  }
  function vn(a, b) {
    var c = a.Td().g(
      O(function () {
        return "b";
      }),
    );
    return xd(b, c).g(De(1), Y(a.h, 1));
  }
  function wn(a) {
    return function (b) {
      var c;
      return b.g(
        tf(function (d) {
          return void (c = d.timestamp);
        }),
        O(function (d) {
          return d.value;
        }),
        a,
        O(function (d) {
          return { timestamp: c, value: d };
        }),
      );
    };
  }
  var xn = function (a) {
      return (a.R.width * a.R.height) / (a.H.width * a.H.height);
    },
    yn = wn(
      J(
        O(function (a) {
          var b;
          return null != (b = a.Kc) ? b : xn(a);
        }),
        O(function (a) {
          return isFinite(a) ? a : 0;
        }),
      ),
    ),
    zn = wn(
      J(
        O(function (a) {
          var b;
          return null != (b = a.Kc) ? b : xn(a);
        }),
        O(function (a) {
          return isFinite(a) ? a : -1;
        }),
      ),
    );
  var An = function (a, b) {
    this.a = a;
    this.b = b;
    if (a.clock.timeline !== b.clock.timeline) throw Error();
  };
  An.prototype.ea = function (a) {
    return a instanceof An ? this.a.ea(a.a) && this.b.ea(a.b) : !1;
  };
  An.prototype.oa = function (a) {
    var b = this.a.oa(a).value,
      c = this.b.oa(a).value;
    return { timestamp: a, value: [b, c] };
  };
  da.Object.defineProperties(An.prototype, {
    active: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.a.active || this.b.active;
      },
    },
    clock: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.a.clock;
      },
    },
    u: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a = this.a.u.timestamp.maximum(this.b.u.timestamp),
          b = this.a.u.timestamp.equals(a)
            ? this.a.u.value
            : this.a.oa(a).value,
          c = this.b.u.timestamp.equals(a)
            ? this.b.u.value
            : this.b.oa(a).value;
        return { timestamp: a, value: [b, c] };
      },
    },
  });
  var Bn = function (a, b) {
    this.input = a;
    this.Xc = b;
    this.u = {
      timestamp: this.input.u.timestamp,
      value: this.Xc(this.input.u.value),
    };
  };
  Bn.prototype.ea = function (a) {
    return a instanceof Bn ? this.input.ea(a.input) && this.Xc === a.Xc : !1;
  };
  Bn.prototype.oa = function (a) {
    a = this.input.oa(a);
    return { timestamp: a.timestamp, value: this.Xc(a.value) };
  };
  da.Object.defineProperties(Bn.prototype, {
    active: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.input.active;
      },
    },
    clock: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.input.clock;
      },
    },
  });
  function Cn(a, b, c) {
    c =
      void 0 === c
        ? function (d, e) {
            return d === e;
          }
        : c;
    return a.timestamp.equals(b.timestamp) && c(a.value, b.value);
  }
  var Dn = function (a, b, c) {
    this.clock = a;
    this.u = b;
    this.active = c;
  };
  Dn.prototype.ea = function (a) {
    return a instanceof Dn
      ? this.active === a.active &&
          this.clock.timeline === a.clock.timeline &&
          Cn(this.u, a.u)
      : !1;
  };
  Dn.prototype.oa = function (a) {
    return {
      timestamp: a,
      value:
        this.u.value + (this.active ? Math.max(0, ke(a, this.u.timestamp)) : 0),
    };
  };
  var En = function () {};
  En.prototype.ga = function () {
    return this.oa(this.clock.now());
  };
  En.prototype.pa = function (a) {
    var b = this.clock.timeline,
      c,
      d = null != (c = a.get(b)) ? c : this.clock.now();
    a.set(b, d);
    return this.oa(d);
  };
  En.prototype.map = function (a) {
    return new Fn(this, a);
  };
  En.prototype.qa = function (a) {
    return new Gn(this, a);
  };
  var Gn = function () {
    An.apply(this, arguments);
    this.map = En.prototype.map;
    this.qa = En.prototype.qa;
    this.ga = En.prototype.ga;
    this.pa = En.prototype.pa;
  };
  w(Gn, An);
  var Hn = function () {
    Dn.apply(this, arguments);
    this.map = En.prototype.map;
    this.qa = En.prototype.qa;
    this.ga = En.prototype.ga;
    this.pa = En.prototype.pa;
  };
  w(Hn, Dn);
  var Fn = function () {
    Bn.apply(this, arguments);
    this.map = En.prototype.map;
    this.qa = En.prototype.qa;
    this.ga = En.prototype.ga;
    this.pa = En.prototype.pa;
  };
  w(Fn, Bn);
  function In(a, b) {
    a.Ga && (a.nb = a.Ga);
    a.Ga = b;
    a.nb && a.nb.value
      ? ((b = Math.max(0, ke(b.timestamp, a.nb.timestamp))),
        (a.totalTime += b),
        (a.na += b))
      : (a.na = 0);
    return a;
  }
  function Jn(a) {
    return J(
      Ye(In, { totalTime: 0, na: 0 }),
      O(function (b) {
        return new Hn(
          a,
          { timestamp: b.Ga.timestamp, value: b.totalTime },
          b.Ga.value,
        );
      }),
    );
  }
  function Kn(a) {
    return J(
      Ye(In, { totalTime: 0, na: 0 }),
      O(function (b) {
        return new Hn(
          a,
          { timestamp: b.Ga.timestamp, value: b.na },
          b.Ga.value,
        );
      }),
    );
  }
  function Ln(a) {
    return J(
      Kn(a),
      O(function (b) {
        return b.map(function (c) {
          return Math.round(c);
        });
      }),
    );
  }
  var Mn = function (a, b) {
    this.u = b;
    this.ga = En.prototype.ga;
    this.pa = En.prototype.pa;
    this.map = En.prototype.map;
    this.qa = En.prototype.qa;
    this.clock = a;
  };
  Mn.prototype.ea = function (a) {
    return a.active;
  };
  Mn.prototype.oa = function () {
    return this.u;
  };
  da.Object.defineProperties(Mn.prototype, {
    active: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return !1;
      },
    },
  });
  function Nn(a, b) {
    return b.g(
      O(function (c) {
        return new Mn(a.l, { timestamp: a.l.now(), value: c });
      }),
    );
  }
  function On(a, b) {
    return 1 <= a ? !0 : 0 >= a ? !1 : a >= b;
  }
  function Pn(a) {
    return function (b) {
      return b.g(
        wf(a),
        O(function (c) {
          var d = t(c);
          c = d.next().value;
          d = d.next().value;
          return { timestamp: c.timestamp, value: On(c.value, d) };
        }),
      );
    };
  }
  var Qn = O(function (a) {
    if ("omid" === a.value.W) {
      if ("nio" === a.value.O) return "omio";
      if ("geo" === a.value.O) return "omgeo";
    }
    return "geo" === a.value.O || "nio" === a.value.O ? a.value.W : a.value.O;
  });
  function Rn() {
    return J(
      T(function (a, b) {
        return 0 < b;
      }),
      Sn,
      W(-1),
      V(),
    );
  }
  var Sn = J(
    T(function (a) {
      return !isNaN(a);
    }),
    Ye(function (a, b) {
      return isNaN(a) ? b : Math.min(a, b);
    }, NaN),
    V(),
  );
  var Tn = wn(
    J(
      O(function (a) {
        return (a.R.width * a.R.height) / (a.Z.width * a.Z.height);
      }),
      O(function (a) {
        return isFinite(a) ? Math.min(1, a) : 0;
      }),
    ),
  );
  function Un(a, b, c) {
    return a
      ? R([b, c]).g(
          T(function (d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp);
          }),
          O(function (d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e;
          }),
        )
      : b;
  }
  function Vn(a) {
    return function (b) {
      var c = b.g(yn),
        d = b.g(Tn);
      return a instanceof K
        ? a.g(
            X(function (e) {
              return Un(e, c, d);
            }),
          )
        : Un(a.value, c, d);
    };
  }
  var Wn = J(
    wn(
      O(function (a) {
        a = a.Kc
          ? (a.Kc * a.H.width * a.H.height) / (a.N.width * a.N.height)
          : (a.R.width * a.R.height) / (a.N.width * a.N.height);
        return isFinite(a) ? a : 0;
      }),
    ),
  );
  function Xn(a, b, c, d) {
    var e = d.Mc,
      f = d.Pd,
      g = d.eg,
      h = d.Qe,
      k = d.he,
      l = d.Gf,
      n = d.Pc,
      r = d.fa;
    b = Yn(a, c, b);
    c = Zn(a, c);
    d = $n(b, r);
    r = ao(a, e, l, d, r, b);
    var q = r.g(
        O(function (A) {
          return A.value;
        }),
        V(),
        Y(a, 1),
        Ye(function (A, U) {
          return Math.max(A, U);
        }, 0),
      ),
      v = r.g(
        O(function (A) {
          return A.value;
        }),
        Rn(),
        Y(a, 1),
      ),
      y = b.g(
        zn,
        O(function (A) {
          return A.value;
        }),
        De(2),
        V(),
        Y(a, 1),
      );
    g = bo(a, b, g, h);
    var D = g.g(
      W(!1),
      V(),
      O(function (A) {
        return A ? k : f;
      }),
    );
    h = r.g(Pn(D), V(), Y(a, 1));
    var E = R([h, b]).g(
      T(function (A) {
        var U = t(A);
        A = U.next().value;
        U = U.next().value;
        return A.timestamp.equals(U.timestamp);
      }),
      O(function (A) {
        var U = t(A);
        A = U.next().value;
        U = U.next().value;
        return { visible: A.value, geometry: U.value.H };
      }),
      Ye(
        function (A, U) {
          return !U.visible && A.visible ? A : U;
        },
        { visible: !1, geometry: ol },
      ),
      O(function (A) {
        return A.geometry;
      }),
      W(ol),
      Y(a, 1),
      V(pl),
    );
    l = l instanceof K ? l.g(V(), Ve()) : ud;
    D = R([l, D]).g(Ve());
    var B = b.g(
        T(function (A) {
          return "ns" !== A.value.W && "ns" !== A.value.O;
        }),
        Ye(function (A) {
          return A + 1;
        }, 0),
        W(0),
        Y(a, 1),
      ),
      S = c.g(Ve(!0), W(!1), Y(a, 1));
    S = R([n, S]).g(
      O(function (A) {
        var U = t(A);
        A = U.next().value;
        U = U.next().value;
        return A && !U;
      }),
      Y(a, 1),
    );
    var oa = b.g(Wn, V()),
      ia = oa.g(
        O(function (A) {
          return A.value;
        }),
        Ye(function (A, U) {
          return Math.max(A, U);
        }, 0),
        V(),
        Y(a, 1),
      ),
      C = oa.g(
        O(function (A) {
          return A.value;
        }),
        Rn(),
        Y(a, 1),
      );
    return {
      ye: l,
      oc: D,
      za: {
        Vh: b,
        If: b.g(Qn),
        Hc: E.g(V(pl)),
        visible: h.g(V(Cn)),
        Be: r.g(V(Cn)),
        Ff: q,
        zh: v,
        Te: b.g($m, V(mb)),
        ri: oa,
        sh: ia,
        yh: C,
        Lc: c,
        V: new Z(new L()).Y(a),
        yf: g,
        Mc: e,
        Pc: n,
        Rd: S,
        ui: B,
        ph: y,
        nd: d,
      },
    };
  }
  function Zn(a, b) {
    return b.g(
      T(function () {
        return !1;
      }),
      O(function (c) {
        return c;
      }),
      ne(function (c) {
        return new Z(c).Y(a);
      }),
    );
  }
  function $n(a, b) {
    b = b.g(
      O(function (d) {
        return d.L;
      }),
    );
    a = R([a, b]).g(
      O(function (d) {
        var e = t(d);
        d = e.next().value;
        e = e.next().value;
        if (0 !== e && 1 !== e && d.value.isIntersecting) return d.value.Bf;
      }),
      V(),
    );
    b = a.g(
      O(function (d) {
        return void 0 === d ? !0 : d;
      }),
      Ye(function (d, e) {
        return d || !e;
      }, !1),
    );
    var c = a.g(
      Ye(
        function (d, e) {
          return void 0 === e ? d : e ? !1 : null != d ? d : !0;
        },
        void 0,
      ),
      O(function (d) {
        return !!d;
      }),
    );
    return Ad(a, b, c).g(
      O(function (d) {
        var e = t(d);
        d = e.next().value;
        var f = e.next().value;
        e = e.next().value;
        var g = 0;
        if (void 0 === d) return 0;
        d && (g |= 1);
        d || (g |= 2);
        f && (g |= 4);
        e && (g |= 8);
        return g;
      }),
    );
  }
  function Yn(a, b, c) {
    return b.g(bf(ud), Y(a, 1)).g(
      V(function (d, e) {
        return Cn(d, e, gn);
      }),
      W({ timestamp: c.now(), value: fn }),
      Y(a, 1),
    );
  }
  function ao(a, b, c, d, e, f) {
    c = f.g(
      Vn(c),
      wn(
        O(function (g) {
          return Km(g);
        }),
      ),
      Y(a, 1),
    );
    if (b instanceof Z) return c;
    e = e.g(
      O(function (g) {
        return g.L;
      }),
    );
    return R([c, b, d, e]).g(
      O(function (g) {
        var h = t(g);
        g = h.next().value;
        var k = h.next().value,
          l = h.next().value;
        h = 3 === h.next().value && 0 !== (l & 2);
        return {
          timestamp: k.timestamp.maximum(g.timestamp),
          value: k.value || h ? 0 : g.value,
        };
      }),
      V(Cn),
      Y(a, 10),
    );
  }
  function bo(a, b, c, d) {
    b = [
      b.g(
        O(function (e) {
          return 242500 <= e.value.H.width * e.value.H.height;
        }),
      ),
    ];
    c instanceof K &&
      b.push(
        c.g(
          O(function (e) {
            return !!e;
          }),
        ),
      );
    c = R(b);
    return d
      ? c.g(
          O(function (e) {
            return e.some(function (f) {
              return f;
            });
          }),
          W(!1),
          V(),
          Y(a, 1),
        )
      : new Z(!1).Y(a);
  }
  var co = function (a) {
      this.l = a;
      this.jd = null;
      this.timeout = new L();
    },
    fo = function (a, b) {
      eo(a);
      a.jd = a.l.setTimeout(function () {
        return void a.timeout.next();
      }, b);
    },
    eo = function (a) {
      null !== a.jd && (a.l.clearTimeout(a.jd), (a.jd = null));
    };
  function go(a, b, c, d) {
    var e = ho.bg,
      f = new co(b);
    c = c
      .g(
        W(void 0),
        X(function () {
          eo(f);
          return d;
        }),
      )
      .g(
        O(function (g) {
          eo(f);
          var h = g.u,
            k = g.active;
          h.value >= e ||
            !k ||
            ((k = b.now()),
            (k = Math.max(0, ke(k, h.timestamp))),
            fo(f, Math.max(0, e - h.value - k)));
          return g.map(function (l) {
            return l >= e;
          });
        }),
      );
    return R([c, sd(f.timeout, M(void 0))]).g(
      O(function (g) {
        return t(g).next().value;
      }),
      qf(function (g) {
        return !g.ga().value;
      }, !0),
      Y(a, 1),
    );
  }
  function io(a) {
    var b = new Hn(a, { timestamp: a.now(), value: 0 }, !1);
    return J(
      Kn(a),
      Ye(function (c, d) {
        return c.u.value > d.u.value ? new Hn(a, c.u, !1) : d;
      }, b),
      O(function (c) {
        return c.map(function (d) {
          return Math.round(d);
        });
      }),
    );
  }
  function jo(a) {
    return function (b) {
      return J(Pn(M(b)), io(a));
    };
  }
  function ko(a) {
    return function (b) {
      return J(
        wn(
          O(function (c) {
            return On(c, b);
          }),
        ),
        Jn(a),
        O(function (c) {
          return c.map(function (d) {
            return Math.round(d);
          });
        }),
      );
    };
  }
  function lo(a) {
    return a
      .map(function (b) {
        return b.map(function (c) {
          return [c];
        });
      })
      .reduce(function (b, c) {
        return b.qa(c).map(function (d) {
          return d.flat();
        });
      });
  }
  function mo(a, b) {
    return a.qa(b).map(function (c) {
      var d = t(c);
      c = d.next().value;
      d = d.next().value;
      return c - d;
    });
  }
  function no(a, b, c, d, e, f) {
    var g = oo;
    if (1 < g.length)
      for (var h = 0; h < g.length - 1; h++) if (g[h] < g[h + 1]) throw Error();
    h = f.g(
      W(void 0),
      X(function () {
        return d.g(Ln(a));
      }),
      V(function (k, l) {
        return k.ea(l);
      }),
      Y(b, 1),
    );
    f = f.g(
      W(void 0),
      X(function () {
        return d.g(io(a));
      }),
      V(function (k, l) {
        return k.ea(l);
      }),
      Y(b, 1),
    );
    return {
      hc: e.g(
        W(void 0),
        X(function () {
          return c.g(an(jo(a), g));
        }),
        O(lo),
        V(function (k, l) {
          return k.ea(l);
        }),
        Y(b, 1),
      ),
      rc: e.g(
        W(void 0),
        X(function () {
          return c.g(
            an(ko(a), g),
            O(function (k) {
              return k.map(function (l, n) {
                return 0 < n ? mo(l, k[n - 1]) : l;
              });
            }),
          );
        }),
        O(lo),
        V(function (k, l) {
          return k.ea(l);
        }),
        Y(b, 1),
      ),
      fc: f,
      gb: h.g(
        V(function (k, l) {
          return k.ea(l);
        }),
        Y(b, 1),
      ),
    };
  }
  function po(a) {
    var b;
    if ((b = qo(a)))
      b =
        !ro(a, "abgcp") &&
        !ro(a, "abgc") &&
        !("string" === typeof a.id && "abgb" === a.id) &&
        !("string" === typeof a.id && "mys-abgc" === a.id) &&
        !ro(a, "cbb");
    return b;
  }
  function ro(a, b) {
    return a.classList
      ? a.classList.contains(b)
      : -1 < (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function qo(a) {
    try {
      var b = a.getBoundingClientRect();
      return b && 30 <= b.height && 30 <= b.width;
    } catch (c) {
      return !1;
    }
  }
  function so(a, b) {
    if (void 0 === a.i || !a.i.children) return a;
    for (var c = lb(a.i.children); c.length; ) {
      var d = b ? c.filter(po) : c.filter(qo);
      if (1 === d.length) return new Xk(d[0]);
      if (1 < d.length) break;
      c = qb(c, function (e) {
        return lb(e.children);
      });
    }
    return a;
  }
  function to(a, b, c, d, e) {
    if (c) return { Gc: b, qb: M(null) };
    c = b.element.g(
      O(function (f) {
        a: if (void 0 === f.i || qo(f.i)) f = { Yc: f, qb: "mue" };
        else {
          var g = so(f, e);
          if (void 0 !== g.i && qo(g.i)) f = { Yc: g, qb: "ie" };
          else {
            if (d || a.Xd)
              if (
                (g = a.document.querySelector(
                  ".GoogleActiveViewInnerContainer",
                ))
              ) {
                f = { Yc: new Xk(g), qb: "ce" };
                break a;
              }
            f = { Yc: f, qb: "mue" };
          }
        }
        return f;
      }),
      jf(),
    );
    return {
      Gc: {
        Ob: b.Ob,
        element: c.g(
          O(function (f) {
            return f.Yc;
          }),
        ),
      },
      qb: c.g(
        O(function (f) {
          return f.qb;
        }),
      ),
    };
  }
  function uo(a, b, c, d) {
    var e = d.Mc,
      f = d.Pd,
      g = d.eg,
      h = d.Qe,
      k = d.he,
      l = d.Gf,
      n = d.Pc,
      r = d.fa;
    b = vo(a, c, b);
    c = wo(a, c);
    d = xo(b, r);
    r = yo(a, e, l, d, r, b);
    var q = r.g(
        O(function (C) {
          return C.value;
        }),
        V(),
        Y(a, 1),
        Ye(function (C, A) {
          return Math.max(C, A);
        }, 0),
      ),
      v = r.g(
        O(function (C) {
          return C.value;
        }),
        Rn(),
        Y(a, 1),
      ),
      y = b.g(
        zn,
        O(function (C) {
          return C.value;
        }),
        De(2),
        V(),
        Y(a, 1),
      );
    g = zo(a, b, g, h);
    var D = g.g(
      W(!1),
      V(),
      O(function (C) {
        return C ? k : f;
      }),
    );
    h = r.g(Pn(D), V(), Y(a, 1));
    var E = R([h, b]).g(
      T(function (C) {
        var A = t(C);
        C = A.next().value;
        A = A.next().value;
        return C.timestamp.equals(A.timestamp);
      }),
      O(function (C) {
        var A = t(C);
        C = A.next().value;
        A = A.next().value;
        return { visible: C.value, geometry: A.value.H };
      }),
      Ye(
        function (C, A) {
          return !A.visible && C.visible ? C : A;
        },
        { visible: !1, geometry: ol },
      ),
      O(function (C) {
        return C.geometry;
      }),
      W(ol),
      Y(a, 1),
      V(pl),
    );
    l = l instanceof K ? l.g(V(), Ve()) : ud;
    D = R([l, D]).g(Ve());
    var B = b.g(
        T(function (C) {
          return "ns" !== C.value.W && "ns" !== C.value.O;
        }),
        Ye(function (C) {
          return C + 1;
        }, 0),
        W(0),
        Y(a, 1),
      ),
      S = c.g(Ve(!0), W(!1), Y(a, 1));
    S = R([n, S]).g(
      O(function (C) {
        var A = t(C);
        C = A.next().value;
        A = A.next().value;
        return C && !A;
      }),
      Y(a, 1),
    );
    var oa = b.g(Wn, V()),
      ia = oa.g(
        O(function (C) {
          return C.value;
        }),
        Ye(function (C, A) {
          return Math.max(C, A);
        }, 0),
        V(),
        Y(a, 1),
      );
    a = oa.g(
      O(function (C) {
        return C.value;
      }),
      Rn(),
      Y(a, 1),
    );
    return {
      ye: l,
      oc: D,
      za: {
        Vh: b,
        If: b.g(Qn),
        Hc: E.g(V(pl)),
        visible: h.g(V(Cn)),
        Be: r.g(V(Cn)),
        Ff: q,
        zh: v,
        Te: b.g($m, V(mb)),
        ri: oa,
        sh: ia,
        yh: a,
        Lc: c,
        V: b.g(
          O(function (C) {
            return C.value.V;
          }),
        ),
        yf: g,
        Mc: e,
        Pc: n,
        Rd: S,
        ui: B,
        ph: y,
        nd: d,
      },
    };
  }
  function wo(a, b) {
    return b.g(
      T(function () {
        return !1;
      }),
      O(function (c) {
        return c;
      }),
      ne(function (c) {
        return new Z(c).Y(a);
      }),
    );
  }
  function vo(a, b, c) {
    return b.g(bf(ud), Y(a, 1)).g(
      V(function (d, e) {
        return Cn(d, e, gn);
      }),
      W({ timestamp: c.now(), value: fn }),
      Y(a, 1),
    );
  }
  function yo(a, b, c, d, e, f) {
    c = f.g(
      Vn(c),
      wn(
        O(function (g) {
          return Km(g);
        }),
      ),
      Y(a, 1),
    );
    if (b instanceof Z) return c;
    e = e.g(
      O(function (g) {
        return g.L;
      }),
    );
    return R([c, b, d, e]).g(
      O(function (g) {
        var h = t(g);
        g = h.next().value;
        var k = h.next().value,
          l = h.next().value;
        h = 3 === h.next().value && 0 !== (l & 2);
        return {
          timestamp: k.timestamp.maximum(g.timestamp),
          value: k.value || h ? 0 : g.value,
        };
      }),
      V(Cn),
      Y(a, 1),
    );
  }
  function zo(a, b, c, d) {
    b = [
      b.g(
        O(function (e) {
          return 242500 <= e.value.H.width * e.value.H.height;
        }),
      ),
    ];
    c instanceof K &&
      b.push(
        c.g(
          O(function (e) {
            return !!e;
          }),
        ),
      );
    c = R(b);
    return d
      ? c.g(
          O(function (e) {
            return e.some(function (f) {
              return f;
            });
          }),
          W(!1),
          V(),
          Y(a, 1),
        )
      : new Z(!1).Y(a);
  }
  function xo(a, b) {
    b = b.g(
      O(function (d) {
        return d.L;
      }),
    );
    a = R([a, b]).g(
      O(function (d) {
        var e = t(d);
        d = e.next().value;
        e = e.next().value;
        if (0 !== e && 1 !== e && d.value.isIntersecting) return d.value.Bf;
      }),
      V(),
    );
    b = a.g(
      O(function (d) {
        return void 0 === d ? !0 : d;
      }),
      Ye(function (d, e) {
        return d || !e;
      }, !1),
    );
    var c = a.g(
      Ye(
        function (d, e) {
          return void 0 === e ? d : e ? !1 : null != d ? d : !0;
        },
        void 0,
      ),
      O(function (d) {
        return !!d;
      }),
    );
    return Ad(a, b, c).g(
      O(function (d) {
        var e = t(d);
        d = e.next().value;
        var f = e.next().value;
        e = e.next().value;
        var g = 0;
        if (void 0 === d) return 0;
        d && (g |= 1);
        d || (g |= 2);
        f && (g |= 4);
        e && (g |= 8);
        return g;
      }),
    );
  }
  var Ao = J(
    Vl("data-google-av-itpl"),
    O(function (a) {
      return Number(a);
    }),
    O(function (a) {
      return isNaN(a) ? 1 : a;
    }),
  );
  var Bo = {
      zi: "addEventListener",
      Ii: "getMaxSize",
      Ji: "getScreenSize",
      Ki: "getState",
      Li: "getVersion",
      Wi: "removeEventListener",
      Si: "isViewable",
    },
    Co = function (a, b) {
      this.va = null;
      this.gh = new L();
      b = b || this.vi;
      var c = a.Xd,
        d = !a.Db;
      if (c && d) {
        var e = a.global.top.mraid;
        if (e) {
          this.Fc = b(e);
          this.va = e;
          this.sb = 3;
          return;
        }
      }
      (a = a.global.mraid)
        ? ((this.Fc = b(a)), (this.va = a), (this.sb = c ? (d ? 2 : 1) : 0))
        : ((this.sb = -1), (this.Fc = 2));
    };
  Co.prototype.addEventListener = function (a, b) {
    return this.Lb("addEventListener", a, b);
  };
  Co.prototype.removeEventListener = function (a, b) {
    return this.Lb("removeEventListener", a, b);
  };
  Co.prototype.mf = function () {
    var a = this.Lb("getVersion");
    return "string" === typeof a ? a : "";
  };
  Co.prototype.getState = function () {
    var a = this.Lb("getState");
    return "string" === typeof a ? a : "";
  };
  var Do = function (a) {
      a = a.Lb("isViewable");
      return "boolean" === typeof a ? a : !1;
    },
    Eo = function (a) {
      if (a.va)
        return (a = a.va.AFMA_LIDAR), "string" === typeof a ? a : void 0;
    };
  Co.prototype.vi = function (a) {
    return a
      ? a.IS_GMA_SDK
        ? Object.values(Bo).every(function (b) {
            return "function" === typeof a[b];
          })
          ? 0
          : 1
        : 2
      : 1;
  };
  Co.prototype.Lb = function (a) {
    var b = x.apply(1, arguments);
    if (this.va)
      try {
        return this.va[a].apply(this.va, u(b));
      } catch (c) {
        this.gh.next(a);
      }
  };
  da.Object.defineProperties(Co.prototype, {
    cf: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        if (this.va) {
          var a = this.va.AFMA_LIDAR_EXP_1;
          return void 0 === a ? void 0 : !!a;
        }
      },
      set: function (a) {
        this.va && (this.va.AFMA_LIDAR_EXP_1 = a);
      },
    },
  });
  function Fo(a, b) {
    return -1 !== new Co(a).sb
      ? new Z(!0).Y(a.h)
      : b.g(
          Vl("data-google-av-inapp"),
          O(function (c) {
            return null !== c;
          }),
          Y(a.h, 1),
        );
  }
  var Ho = function (a, b) {
      var c = this;
      this.l = a;
      this.ie = this.Wc = null;
      this.Zh = b.g(V()).subscribe(function (d) {
        Go(c);
        c.ie = d;
      });
    },
    Io = function (a, b) {
      Go(a);
      a.Wc = a.l.setTimeout(function () {
        var c;
        return void (null == (c = a.ie) ? void 0 : c.next());
      }, b);
    },
    Go = function (a) {
      null !== a.Wc && a.l.clearTimeout(a.Wc);
      a.Wc = null;
    };
  Ho.prototype.zb = function () {
    Go(this);
    this.Zh.unsubscribe();
    this.ie = null;
  };
  function Jo(a, b, c, d, e) {
    var f = ho.bg;
    var g = void 0 === g ? new Ho(b, d) : g;
    return new K(function (h) {
      var k = c
        .g(
          W(void 0),
          X(function () {
            return Ko(e);
          }),
        )
        .g(
          O(function (l) {
            var n = l.value;
            l = l.timestamp;
            var r = n.visible;
            n = n.gb;
            var q = n >= f;
            q || !r
              ? Go(g)
              : ((l = Math.max(0, ke(b.now(), l))),
                Io(g, Math.max(0, f - n - l)));
            return q;
          }),
          Ye(function (l, n) {
            return n || l;
          }, !1),
          V(),
        )
        .subscribe(h);
      return function () {
        g.zb();
        k.unsubscribe();
      };
    }).g(
      qf(function (h) {
        return !h;
      }, !0),
      Y(a, 1),
    );
  }
  function Ko(a) {
    return Nm([a, a.g(bn())]).g(
      O(function (b) {
        var c = t(b);
        b = c.next().value;
        c = c.next().value;
        return {
          timestamp: b.timestamp,
          value: { visible: b.value, gb: c.value },
        };
      }),
      V(function (b, c) {
        return Cn(b, c, function (d, e) {
          return d.gb === e.gb && d.visible === e.visible;
        });
      }),
    );
  }
  function Lo(a, b) {
    return {
      zd: b.g(Vl("data-google-av-adk")),
      Cc: b.g(
        Vl("data-google-av-btr"),
        V(),
        O(function (c) {
          return null === c
            ? []
            : c.split("|").filter(function (d) {
                return "" !== d;
              });
        }),
      ),
      Hd: b.g(
        Vl("data-google-av-cpmav"),
        V(),
        O(function (c) {
          return null === c
            ? []
            : c.split("|").filter(function (d) {
                return "" !== d;
              });
        }),
      ),
      Fe: b.g(
        Vl("data-google-av-vrus"),
        V(),
        O(function (c) {
          return null === c
            ? []
            : c.split("|").filter(function (d) {
                return "" !== d;
              });
        }),
      ),
      Fg: Am(a, b),
      flags: b.g(Vl("data-google-av-flags"), V()),
      Va: Fo(a, b),
      de: b.g(
        Rm("cr", function (c) {
          return "1" === c;
        }),
        V(),
      ),
      mh: b.g(
        Rm("omid", function (c) {
          return "1" === c;
        }),
        V(),
      ),
      Zd: b.g(Ao),
      metadata: b.g(Vl("data-google-av-metadata")),
      Oa: b.g(bm),
      Da: b.g(Wl),
      yi: b.g(
        Rm("la", function (c) {
          return "1" === c;
        }),
        V(),
      ),
      lb: b.g(
        Vl("data-google-av-turtlex"),
        O(function (c) {
          return null !== c;
        }),
        V(),
      ),
      fe: b.g(
        Vl("data-google-av-vattr"),
        O(function (c) {
          return null !== c;
        }),
        V(),
      ),
    };
  }
  function Mo() {
    return J(
      Qm(),
      Ye(function (a, b) {
        return Math.max(a, b);
      }, 0),
      O(function (a) {
        return Math.round(a);
      }),
    );
  }
  function No(a) {
    return J(Pn(M(a)), Mo());
  }
  function Oo(a, b, c, d, e) {
    c = c.g(
      O(function () {
        return !1;
      }),
    );
    d = R([e, d]).g(
      X(function (f) {
        f = t(f).next().value;
        return Po(b, f);
      }),
    );
    return sd(M(!1), c, d).g(V(), Y(a.h, 1));
  }
  function Po(a, b) {
    return a.g(
      O(function (c) {
        return b || 0 === c || 2 === c;
      }),
    );
  }
  var Qo = [33, 32],
    Ro = J(
      Ao,
      O(function (a) {
        return 0 <= Qo.indexOf(a);
      }),
      V(),
    );
  function So(a, b, c, d, e, f) {
    var g = c.g(
        O(function (k) {
          return 9 === k;
        }),
      ),
      h = b.element.g(Ro);
    c = e.g(
      T(function (k) {
        return k;
      }),
      X(function () {
        return R([g, h]);
      }),
      O(function (k) {
        k = t(k);
        var l = k.next().value;
        return !k.next().value || l;
      }),
      V(),
    );
    f = R([c, d.g(V()), f]).g(
      O(function (k) {
        var l = t(k);
        k = l.next().value;
        var n = l.next().value;
        l = l.next().value;
        return to(a, b, !k, n, l);
      }),
      ff(1),
      Bc(),
    );
    d = f.g(
      O(function (k) {
        return k.Gc;
      }),
    );
    f = f.g(
      X(function (k) {
        return k.qb;
      }),
      W(null),
      V(),
      Y(a.h, 1),
    );
    return { Ja: d, Vb: f };
  }
  function To(a) {
    var b = void 0 === b ? !1 : b;
    return J(
      X(function (c) {
        return nl(a.document, c, b);
      }),
      Y(a.h, 1),
    );
  }
  var Uo = function (a, b, c, d, e, f) {
    this.dc = b.element.g(To(a), Y(a.h, 1));
    this.Xf = Oo(a, c, b.element, this.dc, d);
    c = So(a, b, e, d, this.Xf, f);
    d = c.Vb;
    this.Ja = c.Ja;
    this.Vb = d;
    this.Ge = sd(
      new Z(1).Y(a.h),
      b.element.g(
        De(1),
        O(function () {
          return 2;
        }),
        Y(a.h, 1),
      ),
      this.dc.g(
        De(1),
        O(function () {
          return 3;
        }),
        Y(a.h, 1),
      ),
      this.Xf.g(
        T(Boolean),
        De(1),
        O(function () {
          return 0;
        }),
        Y(a.h, 1),
      ),
    ).g(
      qf(function (g) {
        return 0 !== g;
      }, !0),
      Y(a.h, 0),
    );
  };
  function Vo(a, b) {
    return a && 0 === b ? 15 : a || 1 !== b ? null : 14;
  }
  function Wo(a, b, c) {
    return b instanceof K
      ? b.g(
          X(function (d) {
            return (d = Vo(d, c)) ? vc(new Wd(d)) : a;
          }),
        )
      : (b = Vo(b.value, c))
        ? vc(new Wd(b))
        : a;
  }
  function Xo(a) {
    var b = new Wd(13);
    if (1 > a.length) return { Ve: qc, Ed: qc };
    var c = new L();
    return {
      Ve: a
        .slice(1)
        .reduce(function (d, e) {
          return d.g(
            ne(function (f) {
              c.next(f);
              return e;
            }),
          );
        }, a[0])
        .g(
          ne(function (d) {
            c.next(d);
            return vc(b);
          }),
          af(new L()),
          Bc(),
        ),
      Ed: c,
    };
  }
  var Yo = function () {};
  var Zo = function (a, b) {
    this.context = a;
    this.li = b;
  };
  w(Zo, Yo);
  Zo.prototype.Ta = function (a, b) {
    var c = this.li.map(function (f) {
        return f.Ta(a, b);
      }),
      d = Xo(
        c.map(function (f) {
          return f.Ua;
        }),
      ),
      e = d.Ed.g($o());
    return {
      Ua: d.Ve.g(Y(this.context.h, 1)),
      Ra: Object.assign.apply(
        Object,
        [{ ze: e, nj: d.Ed }].concat(
          u(
            c.map(function (f) {
              return f.Ra;
            }),
          ),
        ),
      ),
    };
  };
  var $o = function () {
    return Ye(function (a, b) {
      b instanceof Wd ? a.push(b.vh) : a.push(-1);
      return a;
    }, []);
  };
  function ap(a, b) {
    var c = a.g(af(new L()), Bc());
    return X(function (d) {
      return c.g(b(d));
    });
  }
  function bp(a, b) {
    var c =
      void 0 === c
        ? function () {
            var f = (xk(a.global) ? a.global.innerWidth : 0) || a.Ud() || 0,
              g = (xk(a.global) ? a.global.innerHeight : 0) || a.Sd() || 0;
            return { left: 0, top: 0, width: f, height: g };
          }
        : c;
    var d = a.Db
      ? ml(a.document)
        ? a.lh
          ? null
          : vc(new Wd(5))
        : vc(new Wd(4))
      : vc(new Wd(3));
    if (d) return d;
    var e = new L();
    return sd(M({}), b, e).g(
      O(function () {
        var f = cp(a, c);
        return {
          timestamp: a.l.now(),
          value: { W: "iem", Z: f, N: f, V: e, ba: { x: 0, y: 0 } },
        };
      }),
      Y(a.h, 1),
    );
  }
  function cp(a, b) {
    b = b();
    var c = sk(document),
      d = function (q, v) {
        return !!a.document.elementFromPoint(q, v);
      },
      e = Math.floor(b.left - c.x),
      f = Math.floor(b.top - c.y),
      g = Math.floor(b.left + b.width - c.x),
      h = Math.floor(b.top + b.height - c.y);
    b = d(e, f);
    c = d(g, h);
    if (b && c) return { top: f, left: e, width: g - e, height: h - f };
    var k = d(g, f),
      l = d(e, h);
    if (b)
      (h = dp(f, h, function (q) {
        return d(e, q);
      })),
        (g = dp(e, g, function (q) {
          return d(q, f);
        }));
    else if (k)
      (h = dp(f, h, function (q) {
        return d(g, q);
      })),
        (e = dp(g, e, function (q) {
          return d(q, f);
        }));
    else if (l)
      (f = dp(h, f, function (q) {
        return d(e, q);
      })),
        (g = dp(e, g, function (q) {
          return d(q, h);
        }));
    else if (c)
      (f = dp(h, f, function (q) {
        return d(g, q);
      })),
        (e = dp(g, e, function (q) {
          return d(q, h);
        }));
    else {
      var n = Math.floor((e + g) / 2),
        r = Math.floor((f + h) / 2);
      if (!d(n, r)) return { left: 0, top: 0, width: 0, height: 0 };
      f = dp(r, f, function (q) {
        return d(n, q);
      });
      h = dp(r, h, function (q) {
        return d(n, q);
      });
      e = dp(n, e, function (q) {
        return d(q, r);
      });
      g = dp(n, g, function (q) {
        return d(q, r);
      });
    }
    return { top: f, left: e, width: g - e, height: h - f };
  }
  function dp(a, b, c) {
    if (c(b)) return b;
    for (var d = 15; d--; ) {
      var e = Math.floor((a + b) / 2);
      if (e === a || e === b) break;
      c(e) ? (a = e) : (b = e);
    }
    return a;
  }
  var ep = function (a, b) {
    this.context = a;
    this.La = b;
  };
  w(ep, Yo);
  ep.prototype.Ta = function (a, b) {
    var c = ap(bp(this.context, this.La), jn(this.context, b.Oa));
    return { Ua: Wo(a.Ja.g(c), b.Va, 0), Ra: {} };
  };
  function fp(a, b) {
    if (a.Db) return vc(new Wd(6));
    var c = new L();
    return sd(M({}), b, c).g(
      O(function () {
        return {
          timestamp: a.l.now(),
          value: { W: "geo", Z: gp(a), N: Nl(a, !0), V: c, ba: { x: 0, y: 0 } },
        };
      }),
      Sk(a.h),
    );
  }
  function gp(a) {
    var b = Nl(a, !1);
    if (!a.Xd || !xk(a.global.parent) || a.global.parent === a.global) return b;
    var c = new Kl(a.global.parent, a.hb);
    c.J = a.J;
    c = gp(c);
    a = a.global.frameElement.getBoundingClientRect();
    return ql(rl(ql(c, a), { x: b.left - a.left, y: b.top - a.top }), b);
  }
  var hp = function (a, b) {
    this.context = a;
    this.La = b;
  };
  w(hp, Yo);
  hp.prototype.Ta = function (a, b) {
    var c = ap(fp(this.context, this.La), jn(this.context, b.Oa));
    return { Ua: Wo(a.Ja.g(c), b.Va, 0), Ra: {} };
  };
  var ip = function (a, b, c) {
    c = void 0 === c ? on(a, b) : c;
    this.context = a;
    this.jh = c;
  };
  w(ip, Yo);
  ip.prototype.Ta = function (a, b) {
    var c = this.jh(b.fa);
    return { Ua: Wo(a.Ja.g(c, sn(this.context)), b.Va, 0), Ra: {} };
  };
  function jp(a, b, c, d, e) {
    var f = void 0 === f ? new Co(a) : f;
    var g = void 0 === g ? Cf(a.l, 500) : g;
    var h = void 0 === h ? Cf(a.l, 100) : h;
    e = M(f).g(
      kp(c),
      tf(function (k) {
        d.next(k.sb);
      }),
      lp(a, h),
      mp(a),
      np(a, e),
      ff(1),
      Bc(),
    );
    f = new L();
    b = sd(M({}), b, f);
    return e.g(op(a, f, b, g, c), Y(a.h, 1));
  }
  function np(a, b) {
    return J(
      function (c) {
        return R([c, b]);
      },
      te(function (c) {
        c = t(c);
        var d = c.next().value;
        return 9 !== c.next().value || Do(d)
          ? M(!0)
          : pp(a, d, "viewableChange").g(
              T(function (e) {
                return t(e).next().value;
              }),
              De(1),
            );
      }),
      O(function (c) {
        return t(c).next().value;
      }),
    );
  }
  function kp(a) {
    return X(function (b) {
      if (-1 === b.sb) return a.next("if"), vc(new Wd(7));
      if (0 !== b.Fc)
        switch (b.Fc) {
          case 1:
            return a.next("mm"), vc(new Wd(18));
          case 2:
            return a.next("ng"), vc(new Wd(17));
          default:
            return a.next("i"), vc(new Wd(8));
        }
      return M(b);
    });
  }
  function lp(a, b) {
    return te(function () {
      var c = a.Kf;
      return "complete" === kl(a.document)
        ? M(!0)
        : c.g(
            te(function () {
              return b;
            }),
          );
    });
  }
  var mp = function (a) {
    return X(function (b) {
      return "loading" !== b.getState()
        ? M(b)
        : pp(a, b, "ready").g(
            O(function () {
              return b;
            }),
          );
    });
  };
  function op(a, b, c, d, e) {
    return X(function (f) {
      var g = Eo(f);
      if ("string" !== typeof g) return e.next("nc"), vc(new Wd(9));
      void 0 !== f.cf && (f.cf = !0);
      g = pp(a, f, g, qp);
      var h = { version: f.mf(), sb: f.sb };
      g = g.g(
        O(function (l) {
          return rp.apply(null, [a, b, f, h].concat(u(l)));
        }),
      );
      var k = d.g(
        tf(function () {
          e.next("mt");
        }),
        X(function () {
          return vc(new Wd(10));
        }),
      );
      g = xd(g, k);
      return R([g, c]).g(
        O(function (l) {
          l = t(l).next().value;
          return Object.assign({}, l, { timestamp: a.l.now() });
        }),
      );
    });
  }
  function qp(a, b) {
    return (
      (null === b || "number" === typeof b) &&
      (null === a ||
        (!!a &&
          "number" === typeof a.height &&
          "number" === typeof a.width &&
          "number" === typeof a.x &&
          "number" === typeof a.y))
    );
  }
  function rp(a, b, c, d, e, f) {
    e = e ? { left: e.x, top: e.y, width: e.width, height: e.height } : ol;
    c = c.Lb("getMaxSize");
    var g =
      null != c && "number" === typeof c.width && "number" === typeof c.height
        ? c
        : { width: 0, height: 0 };
    c = { left: 0, top: 0, width: -1, height: -1 };
    if (g) {
      var h = Number(String(g.width));
      g = Number(String(g.height));
      c = isNaN(h) || isNaN(g) ? c : { left: 0, top: 0, width: h, height: g };
    }
    a = {
      value: { Z: e, N: c, W: "mraid", V: b, ba: { x: 0, y: 0 } },
      timestamp: a.l.now(),
    };
    return Object.assign({}, a, d, { bj: f });
  }
  function pp(a, b, c, d) {
    d =
      void 0 === d
        ? function () {
            return !0;
          }
        : d;
    return new K(function (e) {
      var f = a.A.Qa(745, function () {
        e.next(x.apply(0, arguments));
      });
      b.addEventListener(c, f);
      return function () {
        b.removeEventListener(c, f);
      };
    }).g(
      T(function (e) {
        return d.apply(null, u(e));
      }),
    );
  }
  var sp = function (a, b) {
    this.context = a;
    this.La = b;
  };
  w(sp, Yo);
  sp.prototype.Ta = function (a, b) {
    var c = new xc(1),
      d = new xc(1),
      e = ap(jp(this.context, this.La, c, d, b.Oa), jn(this.context, b.Oa));
    return {
      Ua: Wo(a.Ja.g(e), b.Va, 1),
      Ra: { je: c.g(Y(this.context.h, 1)), ke: d.g(Y(this.context.h, 1)) },
    };
  };
  function tp(a) {
    return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a);
  }
  function up() {
    var a = Error;
    return jk(
      function (b) {
        return b instanceof a;
      },
      function () {
        return ik(a);
      },
    );
  }
  function vp(a, b) {
    var c = void 0 === c ? null : c;
    var d = new L(),
      e = void 0,
      f = a.lf,
      g = d.g(
        O(function () {
          return e ? Object.assign({}, e, { timestamp: a.l.now() }) : null;
        }),
        T(function (k) {
          return null !== k;
        }),
        O(function (k) {
          return k;
        }),
      );
    b = R([sd(f, g), b]);
    var h = c;
    return b.g(
      T(function (k) {
        k = t(k).next().value;
        null === h && (h = k.value.sg);
        return k.value.sg === h;
      }),
      tf(function (k) {
        return void (e = t(k).next().value);
      }),
      O(function (k) {
        var l = t(k);
        k = l.next().value;
        l = l.next().value;
        try {
          var n = k.value.data,
            r = k.timestamp,
            q = n.viewport,
            v,
            y,
            D = Object.assign({}, q, {
              width: null != (v = null == q ? void 0 : q.width) ? v : 0,
              height: null != (y = null == q ? void 0 : q.height) ? y : 0,
              x: 0,
              y: 0,
              kj: q ? q.width * q.height : 0,
            }),
            E = wp(D),
            B = n.adView,
            S =
              B.measuringElement && B.containerGeometry
                ? wp(B.containerGeometry)
                : wp(B.geometry),
            oa = wp(B.geometry),
            ia = B.reasons.some(tp),
            C = ia ? ol : wp(B.onScreenGeometry),
            A;
          l && (A = B.percentageInView / 100);
          l && ia && (A = 0);
          return {
            timestamp: r,
            value: {
              W: "omid",
              Z: S,
              N: E,
              V: d,
              O: "omid",
              H: oa,
              ba: { x: S.left, y: S.top },
              R: C,
              Kc: A,
            },
          };
        } catch (Fb) {
          y = Fb;
          n = up();
          r = kk;
          kk = void 0;
          q = [];
          v = n(y, q);
          !v && q && ((y = "Expected " + n.nf() + ", got " + hk(y)), q.push(y));
          v ||
            lk.apply(
              null,
              [void 0, r, "Guard " + n.nf() + " failed:"].concat(
                u(q.reverse()),
              ),
            );
          var U, ob;
          n =
            null != (ob = null == (U = Fb) ? void 0 : U.message)
              ? ob
              : "An unknown error occurred";
          U =
            "Error while processing geometryChange event: " +
            JSON.stringify(k.value) +
            "; " +
            n;
          throw Error(U);
        }
      }),
      ff(1),
      Bc(),
    );
  }
  function wp(a) {
    var b, c, d, e;
    return {
      left: Math.floor(null != (b = null == a ? void 0 : a.x) ? b : 0),
      top: Math.floor(null != (c = null == a ? void 0 : a.y) ? c : 0),
      width: Math.floor(null != (d = null == a ? void 0 : a.width) ? d : 0),
      height: Math.floor(null != (e = null == a ? void 0 : a.height) ? e : 0),
    };
  }
  function xp(a, b, c, d) {
    c = void 0 === c ? ud : c;
    var e = a.h;
    if (null === b) return vc(new Wd(20));
    if (!b.validate()) return vc(new Wd(21));
    var f;
    d = yp(e, b, d).g(
      O(function (g) {
        var h = g.value;
        g = g.timestamp;
        var k = b.l,
          l = a.l;
        if (k.timeline !== g.timeline) throw new ae();
        g = new je(g.value - k.now().value + l.now().value, l.timeline);
        return (f = { value: h, timestamp: g });
      }),
    );
    return sd(
      d,
      c.g(
        O(function () {
          return f;
        }),
      ),
    ).g(
      T(function (g) {
        return void 0 !== g;
      }),
      O(function (g) {
        return g;
      }),
      Y(a.h, 1),
    );
  }
  function yp(a, b, c) {
    return vp(b, c).g(
      Y(a, 1),
      O(function (d) {
        return {
          timestamp: d.timestamp,
          value: {
            ba: { x: d.value.H.left, y: d.value.H.top },
            Z: d.value.R,
            N: d.value.N,
            W: d.value.O,
            V: d.value.V,
          },
        };
      }),
    );
  }
  var zp = function (a, b, c) {
    this.Hb = a;
    this.ka = b;
    this.La = c;
  };
  w(zp, Yo);
  zp.prototype.Ta = function (a, b) {
    var c = b.Oa;
    b = xp(this.ka, this.Hb, this.La, b.Jf);
    c = ap(b, jn(this.ka, c));
    return { Ua: a.Ja.g(c), Ra: {} };
  };
  var Ap = function (a, b, c) {
    this.Hb = a;
    this.ka = b;
    this.Og = c;
  };
  w(Ap, Yo);
  Ap.prototype.Ta = function (a, b) {
    var c = xp(this.ka, this.Hb, void 0, b.Jf);
    b = rn(this.ka, b.fa, this.Og);
    c = ap(c, b);
    return { Ua: a.Ja.g(c), Ra: {} };
  };
  function Bp(a) {
    return a.document.Lh.g(
      O(function (b) {
        return "visible" === b;
      }),
      V(),
      Y(a.h, 1),
    );
  }
  var Cp;
  Cp = ["av.key", "js", "20231106"].slice(-1)[0].substring(0, 8);
  function Dp(a, b, c) {
    var d;
    return b.g(
      V(),
      X(function (e) {
        return c.g(
          O(function () {
            if (!d) {
              d = !0;
              try {
                e.next();
              } finally {
                d = !1;
              }
            }
            return !0;
          }),
        );
      }),
      W(!1),
      Y(a.h, 1),
    );
  }
  function Ep(a) {
    return J(
      wn(
        O(function (b) {
          return On(b, a);
        }),
      ),
      Pm(),
      O(function (b) {
        return Math.round(b);
      }),
    );
  }
  function Fp(a, b, c, d, e) {
    var f = oo;
    if (1 < f.length)
      for (var g = 0; g < f.length - 1; g++) if (f[g] < f[g + 1]) throw Error();
    g = e.g(
      W(void 0),
      X(function () {
        return c.g(bn());
      }),
      V(),
      Y(a, 1),
    );
    e = e.g(
      W(void 0),
      X(function () {
        return c.g(Mo());
      }),
      V(),
      Y(a, 1),
    );
    return {
      hc: d.g(
        W(void 0),
        X(function () {
          return b.g(an(No, f));
        }),
        V(mb),
        Y(a, 1),
      ),
      rc: d.g(
        W(void 0),
        X(function () {
          return b.g(
            an(Ep, f),
            O(function (h) {
              return h.map(function (k, l) {
                return 0 < l ? k - h[l - 1] : k;
              });
            }),
          );
        }),
        V(mb),
        Y(a, 1),
      ),
      fc: e,
      gb: g.g(V(Cn), Y(a, 1)),
    };
  }
  function Gp(a, b, c) {
    var d = c.g(
      O(function (e) {
        return { value: e, timestamp: a.l.now() };
      }),
      V(Cn),
    );
    return b instanceof K
      ? b.g(
          V(),
          X(function (e) {
            return e ? new Z({ value: !1, timestamp: a.l.now() }).Y(a.h) : d;
          }),
        )
      : !1 === b.value
        ? d
        : new Z(!1);
  }
  function Hp(a, b, c, d, e, f, g) {
    var h = ho;
    b = b instanceof K ? b.g(W(!1), V()) : b;
    var k = !(vk() || wk());
    c = Gp(a, c, d);
    a = f.Ja.g(Mm(a.h));
    return Object.assign({}, h, { Mc: c, eg: e, Qe: k, Gf: b, Pc: a, fa: g });
  }
  function Ip(a) {
    a = a.global;
    if ("undefined" === typeof a.__google_lidar_)
      return (a.__google_lidar_ = 1), !1;
    a.__google_lidar_ = Number(a.__google_lidar_) + 1;
    var b = a.__google_lidar_adblocks_count_;
    if (
      "number" === typeof b &&
      0 < b &&
      ((a = a.__google_lidar_radf_), "function" === typeof a)
    )
      try {
        a();
      } catch (c) {}
    return !0;
  }
  function Jp(a) {
    var b = a.global;
    b.osdlfm = function () {
      return b.__google_lidar_radf_;
    };
    if (void 0 !== b.__google_lidar_radf_) return qc;
    b.__google_lidar_adblocks_count_ = 1;
    var c = new L();
    b.__google_lidar_radf_ = function () {
      return void c.next(a);
    };
    return c.g(Ck(a.A, 743));
  }
  var Kp = function (a) {
      this.key = a;
      this.defaultValue = !1;
      this.valueType = "boolean";
    },
    Lp = function (a) {
      this.key = a;
      this.defaultValue = 0;
      this.valueType = "number";
    };
  var Mp = new Kp("45430027"),
    Np = new Kp("100006"),
    Op = new Kp("45424363"),
    Pp = new Lp("45362137"),
    Qp = new Kp("45377435"),
    Rp = new Lp("45411635"),
    Sp = new Kp("45372163"),
    Tp = new Kp("45407241"),
    Up = new Kp("45428757"),
    Vp = new Kp("45382077"),
    Wp = new Kp("45407239"),
    Xp = new Kp("45407240"),
    Yp = new Kp("45427308");
  var Zp = new Lp("45389692");
  var kj = function (a) {
    mk.call(this, a);
  };
  w(kj, mk);
  kj.Xa =
    "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
  var $p = [0, ck, -2, bk];
  var aq = [
    0,
    ck,
    -1,
    bk,
    [
      0,
      dk,
      -4,
      fk,
      bk,
      ak,
      Xj,
      dk,
      Xj,
      dk,
      ak,
      dk,
      -1,
      [0, ak, -3],
      ek,
      Zj,
      dk,
      Yj,
      -1,
      ak,
      -1,
      Yj,
      Xj,
      [0, Yj, ak, -1, fk, Xj, Yj],
    ],
  ];
  var bq = function (a) {
    mk.call(this, a);
  };
  w(bq, mk);
  bq.Xa = "ads.branding.measurement.client.serving.IntegratorMetadata";
  var cq = (function (a, b) {
    return function (c, d) {
      a: {
        if (Dh.length) {
          var e = Dh.pop();
          Bh(e, d);
          vh(e.j, c, d);
          c = e;
        } else c = new Ch(c, d);
        try {
          var f = new a(),
            g = f.D;
          Aj(b)(g, c);
          ui && delete g[ui];
          var h = f;
          break a;
        } finally {
          c.jf();
        }
        h = void 0;
      }
      return h;
    };
  })(bq, [0, aq, $p]);
  var dq = function () {
      this.hf = {};
    },
    eq = function (a, b) {
      a = a.hf[b.key];
      if ("proto" === b.valueType) {
        try {
          var c = JSON.parse(a);
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return b.defaultValue;
      }
      return typeof a === typeof b.defaultValue ? a : b.defaultValue;
    };
  var fq = function () {
    this.Ye = new Map();
  };
  fq.prototype.start = function (a, b, c, d) {
    var e = this;
    if (void 0 === this.we && a.ka) {
      var f = a.ka;
      this.Xe = d;
      a = Ip(f);
      c = Jp(f);
      c = em(f, c);
      this.we = (
        a
          ? qc
          : c.g(
              O(function (g) {
                var h = void 0 === h ? Symbol() : h;
                return Object.freeze({ Ob: h, element: new Z(g).Y(f.h) });
              }),
              Xl(),
            )
      ).subscribe(function (g) {
        var h = g.Ob;
        e.Ye.set(h, g);
        g.element.g(De(1)).subscribe(function (k) {
          var l = Ul(k, "data-google-av-flags"),
            n = new dq();
          if (null !== l)
            try {
              var r = JSON.parse(l)[0];
              l = "";
              for (var q = 0; q < r.length; q++)
                l += String.fromCharCode(
                  r.charCodeAt(q) ^
                    "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(
                      q % 10,
                    ),
                );
              n.hf = JSON.parse(l);
            } catch (Ic) {}
          var v, y, D, E, B, S, oa, ia, C, A, U, ob, Fb, Aa;
          r = {
            Ag: null != (v = null == n ? void 0 : eq(n, Np)) ? v : !1,
            Rg: null != (y = null == n ? void 0 : eq(n, Pp)) ? y : 0,
            Sg: null != (D = null == n ? void 0 : eq(n, Qp)) ? D : !1,
            ci: null != (E = null == n ? void 0 : eq(n, Sp)) ? E : !1,
            ji: null != (B = null == n ? void 0 : eq(n, Vp)) ? B : !1,
            Eg: null != (S = null == n ? void 0 : eq(n, Zp)) ? S : 0,
            si: null != (oa = null == n ? void 0 : eq(n, Wp)) ? oa : !1,
            ti: null != (ia = null == n ? void 0 : eq(n, Xp)) ? ia : !1,
            mj: null != (C = null == n ? void 0 : eq(n, Up)) ? C : !1,
            ei: null != (A = null == n ? void 0 : eq(n, Tp)) ? A : !1,
            L: null != (U = null == n ? void 0 : eq(n, Rp)) ? U : 0,
            Md: null != (ob = null == n ? void 0 : eq(n, Op)) ? ob : !1,
            pj: null != (Fb = null == n ? void 0 : eq(n, Yp)) ? Fb : !1,
            ej: null != (Aa = null == n ? void 0 : eq(n, Mp)) ? Aa : !1,
          };
          k = Ul(k, "data-google-av-ufs-integrator-metadata");
          a: {
            if (null !== k)
              try {
                var Nd = cq(k);
                break a;
              } catch (Ic) {}
            Nd = new bq();
          }
          b(h, Nd, r);
        });
      });
      a && this.zb();
    }
  };
  fq.prototype.zb = function () {
    var a, b;
    null == (a = this.we) || null == (b = a.unsubscribe) || b.call(a);
    this.we = void 0;
    var c;
    null == (c = this.Xe) || c.call(this);
    this.Xe = void 0;
  };
  var gq = function (a) {
    mk.call(this, a);
  };
  w(gq, mk);
  var hq = function (a, b) {
    return sj(a, 1, b);
  };
  gq.Xa = "contentads.bow.rendering.client.TurtleDoveReportingData";
  function iq() {
    var a = Eb();
    return a
      ? jb(
          "AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(
            ";",
          ),
          function (b) {
            return vb(a, b);
          },
        ) ||
        (vb(a, "OMI/") && !vb(a, "XiaoMi/"))
        ? !0
        : vb(a, "Presto") &&
          vb(a, "Linux") &&
          !vb(a, "X11") &&
          !vb(a, "Android") &&
          !vb(a, "Mobi")
      : !1;
  }
  var ho = Object.freeze({ bg: 1e3, Pd: 0.5, he: 0.3 }),
    oo = Object.freeze([1, 0.75, ho.Pd, ho.he, 0]),
    rm =
      "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" +
      Cp;
  function jq(a, b) {
    return { Lg: 0.01, wh: Cf(a.l, 36e5), La: a.l.Ya(100).g(Y(a.h, 1)), Hb: b };
  }
  var kq = function (a, b) {
    var c = Symbol(),
      d = Symbol(),
      e = Symbol(),
      f = Symbol(),
      g = this;
    this.Uh = a;
    this.Eb = b;
    this.sf = c;
    this.Tb = d;
    this.yc = e;
    this.zc = f;
    this.name = "rxlidar";
    this.Hf = new xc();
    this.th = new K(function (h) {
      var k = g.Hf.subscribe(h);
      return function () {
        k.unsubscribe();
        g.zb();
      };
    });
    this.controlledEvents = [];
    this.subscribedEvents = [];
    this.Jd = new xc();
    this.controlledEvents.push(this.sf, this.Tb, this.yc, this.zc);
  };
  kq.prototype.start = function (a) {
    if (void 0 === this.Vd && a.ka) {
      var b, c;
      this.Eb =
        null != (c = this.Eb) ? c : jq(a.ka, null != (b = a.Hb) ? b : null);
      a = a.ka;
      this.Vd = lq(
        a,
        this.Jd.g(Y(a.h, 1)),
        this.Eb.Lg,
        this.Eb.wh,
        this.Eb.La,
        this.Eb.Hb,
        this.sf,
        this.Tb,
        this.yc,
        this.zc,
      ).subscribe(this.Hf);
    }
  };
  kq.prototype.zb = function () {
    this.Jd.complete();
    var a;
    null == (a = this.Vd) || a.unsubscribe();
    this.Vd = void 0;
  };
  kq.prototype.handleEvent = function () {};
  function lq(a, b, c, d, e, f, g, h, k, l) {
    var n = Bp(a).g(
        O(function (q) {
          return !q;
        }),
      ),
      r = new Zo(a, [
        new ip(a, oo),
        new hp(a, e),
        new ep(a, e),
        new Ap(f, a, oo),
        new zp(f, a, e),
        new sp(a, e),
      ]);
    return hm(
      a,
      b,
      function (q, v) {
        var y = Lo(q, v.element),
          D = y.zd,
          E = y.Cc,
          B = y.Hd,
          S = y.Fe,
          oa = y.Fg,
          ia = y.Va,
          C = y.mh,
          A = y.Zd,
          U = y.de,
          ob = y.Oa,
          Fb = y.Da,
          Aa = y.yi,
          Nd = y.lb;
        y = y.fe;
        var Ic,
          db = null != (Ic = qj(lj(v.metadata))) ? Ic : "";
        Ic = hq(new gq(), atob(db)).rb();
        db = new Z(v.fa).Y(q.h);
        var Gb = db.g(
            O(function (G) {
              return G.ji;
            }),
          ),
          Ga = ia.g(
            pe(C),
            O(function (G) {
              var Qa = t(G);
              G = Qa.next().value;
              Qa = Qa.next().value;
              (G = G || Qa) ||
                ((G =
                  vb(Eb(), "CrKey") ||
                  vb(Eb(), "PlayStation") ||
                  vb(Eb(), "Roku") ||
                  iq() ||
                  vb(Eb(), "Xbox")) ||
                  ((G = Eb()),
                  (G =
                    vb(G, "AppleTV") ||
                    vb(G, "Apple TV") ||
                    vb(G, "CFNetwork") ||
                    vb(G, "tvOS"))),
                G ||
                  ((G = Eb()),
                  (G = vb(G, "sdk_google_atv_x86") || vb(G, "Android TV"))));
              return G;
            }),
          );
        C = new Uo(q, v, oa, ia, ob, Gb);
        Gb = db.g(
          O(function (G) {
            return G.Ag;
          }),
        );
        Gb = r.Ta(C, { Va: ia, fa: v.fa, Oa: ob, Jf: Gb });
        var Ha = Gb.Ua,
          Od = Gb.Ra;
        Gb = Od.je;
        var Hq = Od.ke;
        Od = Od.ze;
        var pb = Hp(q, U, Ga, n, Aa, C, db);
        Aa = uo(q.h, q.l, Ha, pb);
        Ga = Fp(q.h, Aa.za.Be, Aa.za.visible, Aa.ye, Aa.oc);
        var Jc = Jo(q.h, q.l, Aa.oc, Aa.za.V, Aa.za.visible);
        Ha = Xn(q.h, q.l, Ha, pb);
        pb = no(q.l, q.h, Ha.za.Be, Ha.za.visible, Ha.ye, Ha.oc);
        var nf = { Ee: go(q.h, q.l, Ha.oc, pb.fc) },
          ih = db.g(
            O(function (G) {
              return G.Sg;
            }),
            W(!1),
          );
        Ha = Lm(
          q.h,
          ih,
          Object.assign({}, Ha.za, pb, nf),
          Object.assign({}, Aa.za, {
            Ee: Nn(q, Jc),
            hc: Nn(q, Ga.hc),
            rc: Nn(q, Ga.rc),
            fc: Nn(q, Ga.fc),
            gb: Ga.gb.g(
              O(function (G) {
                return new Mn(q.l, G);
              }),
            ),
          }),
        );
        Ga = vn(q, d.g(Ve("t")));
        Jc = null !== f && f.validate();
        pb = (Jc ? f.fi : ud).g(Y(q.h, 1), Ve("u"));
        Ga = xd(Ga, pb);
        Jc = (Jc ? f.tf.g(De(1), Ve(!0), W(!1)) : new Z(!0).Y(q.h)).g(
          X(function (G) {
            return G
              ? new K(function (Qa) {
                  v.ib(g, {}, function (Iq) {
                    Qa.next(Iq);
                    Qa.complete();
                  });
                })
              : ud;
          }),
          W(!1),
          Y(q.h, 1),
        );
        pb = Dp(
          q,
          Ha.V,
          Ga.g(
            T(function (G) {
              return null !== G;
            }),
          ),
        );
        nf = mq(q, C, D);
        ih = nq(q, Ga, v.element);
        var Lq = nf.tg.g(W({ x: 0, y: 0 })),
          Mq = db.g(
            O(function (G) {
              return G.ci;
            }),
            W(!1),
            V(),
            tf(function (G) {
              Nk = G;
            }),
            Y(q.h, 1),
          ),
          bl = A.g(
            O(function (G) {
              return 40 === G || 41 === G;
            }),
          );
        return Object.assign(
          {},
          {
            J: new Z(q.J),
            Rc: new Z("lidar2"),
            ni: new Z("lidartos"),
            xg: new Z(Cp),
            wg: new Z(7),
            Gd: new Z(q.validate() ? null : new Xd()),
            Bg: new Z(ll(q.document)),
            ta: new Z(tm),
            df: Ga,
            hd: Ga,
            lj: pb,
            qf: Jc,
            ib: new Z(v.ib),
            Tb: new Z(h),
            yc: new Z(k),
            zc: new Z(l),
            Dg: new Z(q.Db ? 1 : void 0),
            Gg: new Z(q.zg ? 1 : void 0),
            Va: ia,
            lb: Nd,
            ld: new Z(Ic),
            pb: Nd.g(
              T(function (G) {
                return G;
              }),
              O(function () {
                return q.pb.bind(q);
              }),
            ),
            je: Gb.g(Y(q.h, 1)),
            ke: Hq.g(Y(q.h, 1)),
            Qg: db.g(
              O(function (G) {
                return G.Rg;
              }),
            ),
            uf: Mq,
            fe: y,
            kh: bl,
            dh: db.g(
              O(function (G) {
                return G.Eg;
              }),
            ),
            Tg: new Z(new Ef(q, new Ik(q))),
            ag: new Z(Nk && new Ok(q).K({ wb: "GET" })),
            ii: new Z(
              ((Number(v.fa.ti) << (0 + Number(v.fa.si))) <<
                (1 + Number(v.fa.ei))) <<
                2,
            ),
            Cg: v.element.g(
              O(function (G) {
                return null !== G;
              }),
            ),
            Qc: Fb,
            oi: Fb,
            Hd: B.g(W([])),
            Fe: S.g(W([])),
            Zg: B.g(
              O(function (G) {
                return 0 < G.length ? !0 : null;
              }),
              W(null),
              V(),
            ),
            Cc: E.g(W([]), Y(q.h, 1)),
            ij: db,
            zd: D,
            Vb: C.Vb,
            Zd: A.g(W(0), Y(q.h, 1)),
            uh: oa,
            Oa: ob.g(W(0), Y(q.h, 1)),
            sc: bl.g(
              O(function (G) {
                return G ? Im : sm;
              }),
            ),
            Pb: new Z(Jm),
            de: U,
            vf: C.dc.g(Mm(q.h)),
            Ge: C.Ge,
          },
          Ha,
          {
            Hc: R([Ha.Hc, Lq]).g(
              O(function (G) {
                var Qa = t(G);
                G = Qa.next().value;
                Qa = Qa.next().value;
                return rl(G, Qa);
              }),
              V(pl),
            ),
          },
          nf,
          { tc: Uk(q), ah: ih, ze: Od, nd: Aa.za.nd, Md: new Z(v.fa.Md) },
        );
      },
      qm(a, c),
    );
  }
  function mq(a, b, c) {
    var d = void 0 === d ? Fa : d;
    var e, f;
    d =
      (null == (e = d.performance)
        ? void 0
        : null == (f = e.timing)
          ? void 0
          : f.navigationStart) || 0;
    return Object.assign({}, { rg: new Z(d), qg: Zm(a, b) }, Ym(a, b, c));
  }
  function nq(a, b, c) {
    return b.g(
      T(function (d) {
        return null !== d;
      }),
      X(function () {
        return c;
      }),
      O(function (d) {
        var e = Yl(a);
        return 0 < e.length && 0 <= e.indexOf(d);
      }),
      O(function (d) {
        return !d;
      }),
    );
  }
  function oq(a, b) {
    var c = new fq(),
      d = new kq(c, b);
    d.start(a);
    var e = function (f, g, h) {
      h(!0);
    };
    c.start(
      a,
      function (f, g, h) {
        (void 0 !== jj(g, kj, 2, !1) && !oj(mj(g, kj, 2), 4, !0)) ||
          d.Jd.next(
            Object.assign({}, d.Uh.Ye.get(f), {
              metadata: g,
              fa: h,
              oj: f,
              ib: e,
            }),
          );
      },
      function () {},
      function () {
        d.zb();
      },
    );
    return d.th;
  }
  function pq(a, b) {
    if (!b) throw Error("ra`" + a);
    if ("string" !== typeof b && !(b instanceof String)) throw Error("sa`" + a);
    if ("" === b.trim()) throw Error("ta`" + a);
  }
  function qq(a) {
    if (!a) throw Error("wa`functionToExecute");
  }
  function rq(a, b) {
    if (null == b) throw Error("ua`" + a);
    if ("number" !== typeof b || isNaN(b)) throw Error("va`" + a);
    if (0 > b) throw Error("xa`" + a);
  }
  function sq() {
    return /\d+\.\d+\.\d+(-.*)?/.test("1.4.8-google_20230803");
  }
  function tq() {
    for (var a = ["1", "4", "8"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
      var d = parseInt(a[c], 10),
        e = parseInt(b[c], 10);
      if (d > e) break;
      else if (d < e) return !1;
    }
    return !0;
  }
  var uq = function (a, b, c, d) {
      this.pf = a;
      this.method = b;
      this.version = c;
      this.args = d;
    },
    vq = function (a) {
      return (
        !!a &&
        void 0 !== a.omid_message_guid &&
        void 0 !== a.omid_message_method &&
        void 0 !== a.omid_message_version &&
        "string" === typeof a.omid_message_guid &&
        "string" === typeof a.omid_message_method &&
        "string" === typeof a.omid_message_version &&
        (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
      );
    },
    wq = function (a) {
      return new uq(
        a.omid_message_guid,
        a.omid_message_method,
        a.omid_message_version,
        a.omid_message_args,
      );
    };
  uq.prototype.rb = function () {
    var a = {};
    a =
      ((a.omid_message_guid = this.pf),
      (a.omid_message_method = this.method),
      (a.omid_message_version = this.version),
      a);
    void 0 !== this.args && (a.omid_message_args = this.args);
    return a;
  };
  var xq = function (a) {
    this.kd = a;
  };
  xq.prototype.rb = function () {
    return JSON.stringify(void 0);
  };
  var yq = function (a) {
    return [
      "omid_v1_present",
      "omid_v1_present_web",
      "omid_v1_present_app",
    ].some(function (b) {
      try {
        var c = a.frames && !!a.frames[b];
      } catch (d) {
        c = !1;
      }
      return c;
    });
  };
  function zq(a, b) {
    return a && (a[b] || (a[b] = {}));
  }
  function Aq() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (a) {
        var b = (16 * Math.random()) | 0;
        return "y" === a ? ((b & 3) | 8).toString(16) : b.toString(16);
      },
    );
  }
  function Bq() {
    var a = x.apply(0, arguments);
    Cq(
      function () {
        throw new (Function.prototype.bind.apply(
          Error,
          [null, "Could not complete the test successfully - "].concat(u(a)),
        ))();
      },
      function () {
        return console.error.apply(console, u(a));
      },
    );
  }
  function Cq(a, b) {
    "undefined" !== typeof jasmine && jasmine
      ? a()
      : "undefined" !== typeof console && console && console.error && b();
  }
  var Dq = (function () {
    if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
    if ("undefined" !== typeof global && global) return global;
    if ("undefined" !== typeof window && window) return window;
    if ("undefined" !== typeof globalThis && globalThis) return globalThis;
    var a = Function("return this")();
    if (a) return a;
    throw Error("ya");
  })();
  var Eq = function (a) {
    this.kd = a;
    this.handleExportedMessage = Eq.prototype.Wg.bind(this);
  };
  w(Eq, xq);
  Eq.prototype.sendMessage = function (a, b) {
    b = void 0 === b ? this.kd : b;
    if (!b) throw Error("za");
    b.handleExportedMessage(a.rb(), this);
  };
  Eq.prototype.Wg = function (a, b) {
    if (vq(a) && this.onMessage) this.onMessage(wq(a), b);
  };
  function Fq(a) {
    return null != a && "undefined" !== typeof a.top && null != a.top;
  }
  function Gq(a) {
    if (a === Dq) return !1;
    try {
      if ("undefined" === typeof a.location.hostname) return !0;
    } catch (b) {
      return !0;
    }
    return !1;
  }
  var Jq = function (a, b) {
    this.kd = b = void 0 === b ? Dq : b;
    var c = this;
    a.addEventListener("message", function (d) {
      if ("object" === typeof d.data) {
        var e = d.data;
        if (vq(e) && d.source && c.onMessage) c.onMessage(wq(e), d.source);
      }
    });
  };
  w(Jq, xq);
  Jq.prototype.sendMessage = function (a, b) {
    b = void 0 === b ? this.kd : b;
    if (!b) throw Error("za");
    b.postMessage(a.rb(), "*");
  };
  var Kq = ["omid", "v1_VerificationServiceCommunication"],
    Nq = ["omidVerificationProperties", "serviceWindow"];
  function Oq(a, b) {
    return b.reduce(function (c, d) {
      return c && c[d];
    }, a);
  }
  var Pq = function (a) {
    if (!a) {
      var b;
      "undefined" === typeof b &&
        "undefined" !== typeof window &&
        window &&
        (b = window);
      b = Fq(b) ? b : Dq;
      var c = void 0 === c ? yq : c;
      a = [];
      var d = Oq(b, Nq);
      d && a.push(d);
      a.push(Fq(b) ? b.top : Dq);
      a: {
        a = t(a);
        for (var e = a.next(); !e.done; e = a.next()) {
          b: {
            d = b;
            e = e.value;
            var f = c;
            if (!Gq(e))
              try {
                var g = Oq(e, Kq);
                if (g) {
                  var h = new Eq(g);
                  break b;
                }
              } catch (k) {}
            h = f(e) ? new Jq(d, e) : null;
          }
          if ((d = h)) {
            a = d;
            break a;
          }
        }
        a = null;
      }
    }
    if ((this.Ub = a)) this.Ub.onMessage = this.Xg.bind(this);
    else if (
      (c =
        (c = Dq.omid3p) &&
        "function" === typeof c.registerSessionObserver &&
        "function" === typeof c.addEventListener
          ? c
          : null)
    )
      this.jc = c;
    this.Wh = this.Xh = 0;
    this.Dd = {};
    this.Wd = [];
    this.Sc = (c = Dq.omidVerificationProperties) ? c.injectionId : void 0;
  };
  Pq.prototype.K = function () {
    return !(!this.Ub && !this.jc);
  };
  var vg = function (a, b, c) {
    qq(b);
    a.jc
      ? a.jc.registerSessionObserver(b, c, a.Sc)
      : a.Mb("addSessionListener", b, c, a.Sc);
  };
  Pq.prototype.addEventListener = function (a, b) {
    pq("eventType", a);
    qq(b);
    this.jc
      ? this.jc.addEventListener(a, b, this.Sc)
      : this.Mb("addEventListener", b, a, this.Sc);
  };
  var Bf = function (a, b, c, d) {
      pq("url", b);
      Dq.document && Dq.document.createElement
        ? Qq(a, b, c, d)
        : a.Mb(
            "sendUrl",
            function (e) {
              e && c ? c() : !e && d && d();
            },
            b,
          );
    },
    Qq = function (a, b, c, d) {
      var e = Dq.document.createElement("img");
      a.Wd.push(e);
      var f = function (g) {
        var h = a.Wd.indexOf(e);
        0 <= h && a.Wd.splice(h, 1);
        g && g();
      };
      e.addEventListener("load", f.bind(a, c));
      e.addEventListener("error", f.bind(a, d));
      e.src = b;
    };
  Pq.prototype.setTimeout = function (a, b) {
    qq(a);
    rq("timeInMillis", b);
    if (Rq()) return Dq.setTimeout(a, b);
    var c = this.Xh++;
    this.Mb("setTimeout", a, c, b);
    return c;
  };
  Pq.prototype.clearTimeout = function (a) {
    rq("timeoutId", a);
    Rq() ? Dq.clearTimeout(a) : this.Uf("clearTimeout", a);
  };
  Pq.prototype.setInterval = function (a, b) {
    qq(a);
    rq("timeInMillis", b);
    if (Sq()) return Dq.setInterval(a, b);
    var c = this.Wh++;
    this.Mb("setInterval", a, c, b);
    return c;
  };
  Pq.prototype.clearInterval = function (a) {
    rq("intervalId", a);
    Sq() ? Dq.clearInterval(a) : this.Uf("clearInterval", a);
  };
  var Rq = function () {
      return (
        "function" === typeof Dq.setTimeout &&
        "function" === typeof Dq.clearTimeout
      );
    },
    Sq = function () {
      return (
        "function" === typeof Dq.setInterval &&
        "function" === typeof Dq.clearInterval
      );
    };
  Pq.prototype.Xg = function (a) {
    var b = a.method,
      c = a.pf;
    a = a.args;
    if ("response" === b && this.Dd[c]) {
      var d =
        sq() && tq()
          ? a
            ? a
            : []
          : a && "string" === typeof a
            ? JSON.parse(a)
            : [];
      this.Dd[c].apply(this, d);
    }
    "error" === b && window.console && Bq(a);
  };
  Pq.prototype.Uf = function (a) {
    this.Mb.apply(this, [a, null].concat(u(x.apply(1, arguments))));
  };
  Pq.prototype.Mb = function (a, b) {
    var c = x.apply(2, arguments);
    if (this.Ub) {
      var d = Aq();
      b && (this.Dd[d] = b);
      var e = "VerificationService." + a;
      c = sq() && tq() ? c : JSON.stringify(c);
      this.Ub.sendMessage(new uq(d, e, "1.4.8-google_20230803", c));
    }
  };
  var Tq = void 0;
  if (
    (Tq =
      void 0 === Tq
        ? "undefined" === typeof omidExports
          ? null
          : omidExports
        : Tq)
  ) {
    var Uq = ["OmidVerificationClient"];
    Uq.slice(0, Uq.length - 1).reduce(zq, Tq)[Uq[Uq.length - 1]] = Pq;
  }
  var Vq = null;
  try {
    var Wq = new Pq();
    Vq = new ug(Wq, "doubleclickbygoogle.com-omid");
  } catch (a) {
    Vq = null;
  }
  var Xq = new Kl(window, null, new Bk()),
    Yq = jq(Xq, Vq);
  (function (a, b) {
    return a.ka.A.Qa(742, function () {
      return oq(a, b);
    })();
  })({ ka: Xq }, Yq).subscribe();
}).call(this);
