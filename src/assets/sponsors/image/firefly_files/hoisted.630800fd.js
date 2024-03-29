import { a as l, d as u, l as S } from "./index.ddd2b5a1.js";
import { e as k } from "./index.08acff76.js";
import { h as f } from "./index.b93551d5.js";
import { p as T, e as d } from "./index.49b7be11.js";
import { d as C } from "./store.3896b57b.js";
import { o as v } from "./share-url.1367d329.js";
import "./hoisted.88ccb9c0.js";
import "./hoisted.812eda4f.js";
import "./hoisted.55ab6db9.js";
import "./lazy.ec63ec52.js";
import "./signals.module.fa2a3d3e.js";
import "./preact.module.a3655f31.js";
import "./hooks.module.3dd397b4.js";
import "./preload-helper.e8d31950.js";
function x() {
  import.meta.url, import("data:text/javascript,").catch(() => 1);
  async function* t() {}
  x.g = t;
}
const h = (t, e) => {
  if (+__PN_DATA__.uid <= 0) return e && e();
  t();
};
let m = null;
const w = () => {
  if (m) return m;
  const t = document.querySelector("[data-closest]");
  return (m = Object.assign({}, t == null ? void 0 : t.dataset)), m;
};
l("click", "[data-downld-name]", function () {
  const t = this.dataset.downldName,
    e = this.dataset.downldUrl,
    o = this.dataset.downldSuffix,
    n = this.dataset.hueid,
    a = w();
  if (!t) return;
  const s = document.getElementById("GoPremiumBtn");
  h(
    () => {
      switch ((n && d(n), t)) {
        case "png":
        case "rar":
        case "ppt":
        case "twibbon":
          const i = a.fee == "1" && t === "png";
          C(
            {
              type: a.type || "1",
              btnType: t,
              rarName: o || "PSD",
              goPremiumTxt:
                (s == null ? void 0 : s.textContent) || "Go Premium",
              href: e,
              downUrl: e,
              fee: i,
              licenseType: a.licenseType || 0,
            },
            !1,
          );
          break;
        case "edit":
          e && window.open(e, "_blank");
          break;
        case "mobile":
          const r = document.querySelector("._o2b");
          k(r, (c) => c - 40);
          break;
        default:
          e &&
            setTimeout(() => {
              window.open(e, "_blank");
            }, 100);
          break;
      }
    },
    () => {
      d("down-btnnologin");
    },
  );
});
if (__PN_DATA__.no_bot == "1") {
  const { id: t, type: e, detect_status: o } = w();
  f.get("/api/statistics/view", { id: t, type: e, t: o }),
    e == "1"
      ? f.get("/api/statistics/detail-out-view", { id: t })
      : e == "5" && T("font_detail", 1, "come");
}
l("click", "[data-share-btn]", function () {
  const t = q();
  (t.name = this.dataset.shareBtn || ""), v(t);
});
function q() {
  const t = { title: "", media: "", word: "", name: "" },
    e = document.querySelector("[data-share-media]");
  if (e) {
    const { shareTitle: o, shareMedia: n, shareWord: a } = e.dataset;
    (t.title = o || ""), (t.media = n || ""), (t.word = a || "");
  }
  return t;
}
const D = "._z_b";
l("click", D, function () {
  setTimeout(() => {
    d("der-followmain");
  }),
    h(() => {
      const t = this.dataset.follow,
        e = this.textContent,
        o = this.dataset.txt;
      (this.disabled = !0),
        f
          .post("/api/async/designer-follow", { id: t })
          .then((n) => {
            n.status === 200 &&
              ((this.textContent = o), (this.dataset.txt = e));
          })
          .finally(() => {
            this.disabled = !1;
          });
    });
});
const A = "._t2b a";
l("click", "[data-prf-type]", function () {
  h(() => {
    const e = this.dataset.prfType === "enterprise",
      o = e ? "team" : "",
      n = w(),
      { vip_type: a, enterprise_status: s } = window.__PN_DATA__;
    n.licenseType == 2 && s != "1"
      ? window.open("/team-pay/card?type=2&b=121", "_blank")
      : +a <= 0
        ? (u(document, "dialog:toggle", { name: "prf-license", show: !0 }),
          d("prfview-btn" + o))
        : ((this.disabled = !0),
          u(document, "down:prf", {
            data: n,
            isTeam: e,
            resolve: () => {
              this.disabled = !1;
            },
            reject: () => {
              this.disabled = !1;
            },
          }),
          d("prfdown-btn" + o));
  });
});
l("click", A, function (t) {
  t.preventDefault(),
    d("relatekeyword-report"),
    this.href &&
      setTimeout(() => {
        window.open(this.href, "_blank");
      }, 100);
});
const I = "._w8b ._i_b";
l("click", I, function () {
  const t = this.dataset.id;
  t && d("url-similartype-".concat(t));
});
l("click", "._b3b>span", function () {
  u(this.parentElement.querySelector('[data-huejs="der-linkmain"]'), "click");
});
const P = "._pdc",
  W = "._qdc",
  N = "._rdc",
  L = ["_h", "_w8"];
B();
function B() {
  if (window.innerWidth < 1024) return;
  const t = document.querySelectorAll(P);
  for (const e of t) {
    const o = e.querySelector(W),
      n = e.querySelector(N);
    if (!o || !n) continue;
    const a = [...o.children].filter((g) => g !== n),
      s = a.length,
      i = a[s - 1];
    if (s <= 1 || (i && i.offsetTop <= 0)) continue;
    const r = getComputedStyle(n, null),
      c = H({
        box_w: o.offsetWidth,
        btn_w: n.offsetWidth,
        mx: (parseFloat(r.marginLeft) || 0) + parseFloat(r.marginRight) || 0,
        len: s,
        btns: a,
      });
    F(c, o, n, e);
  }
}
function F(t, e, o, n) {
  const a = "+" + t.count,
    s = o.dataset.less,
    i = n.offsetHeight,
    r = e.offsetHeight,
    c = () => {
      (t.show = !1),
        (o.textContent = a),
        o.style.removeProperty("width"),
        e.insertBefore(o, t.el),
        (n.style.cssText += "height:".concat(i, "px;"));
    };
  S(o, "click", () => {
    if (t.show) return c();
    (t.show = !0),
      e.appendChild(o),
      (o.textContent = s),
      (o.style.width = "auto"),
      (n.style.cssText += "height:".concat(r, "px;"));
  }),
    c(),
    t.count > 0 &&
      requestAnimationFrame(() => {
        o.classList.remove(...L);
      });
}
function H({ len: t, mx: e, box_w: o, btn_w: n, btns: a }) {
  const s = { el: null, i: 0, count: 0, show: !1 };
  let i = 0;
  for (let r = 0; r < t; r++) {
    const c = a[r];
    if (((i += c.offsetWidth + e), i + n + e >= o)) {
      (s.i = r), (s.el = c);
      break;
    }
  }
  return (s.count = t - s.i), s;
}
const b = "._bac",
  j = "._ndc",
  _ = () => {
    u(document, "dialog:toggle", { name: "PreviewImage", show: !0 });
  },
  y = (t) => {
    var e;
    (e = document.querySelector(j)) == null ||
      e.classList[t ? "add" : "remove"]("_ck");
  },
  p = (t) => {
    t.preventDefault();
  };
l("click", b, function (t) {
  p(t),
    setTimeout(() => {
      d("detail-preview-image");
    }, 100);
  const e = document.getElementById("PreviewImage");
  if (e) {
    if (e.querySelector("img")) return _();
  } else return;
  const o = this.querySelector("a"),
    n = this.querySelector("img");
  if (!o || !n) return;
  const a = o.href || n.currentSrc || n.src;
  if (!a) return;
  _();
  const s = o.offsetHeight > o.parentElement.offsetHeight,
    i = document.createElement("img"),
    r = s ? e : i;
  (r.style.maxWidth = window.innerWidth - 40 + "px"),
    (r.style.maxHeight = window.innerHeight - 120 + "px"),
    (i.className = e.dataset.imgClass || ""),
    (i.style.minWidth = s ? "640px" : "auto"),
    (i.alt = ""),
    (i.oncontextmenu = p),
    (i.onload =
      i.onabort =
      i.onerror =
        () => {
          requestAnimationFrame(() => {
            y(!0);
          });
        }),
    (i.src = a),
    requestAnimationFrame(() => {
      y(), e.appendChild(i);
    });
});
l("contextmenu", b, p);
export { x as __vite_legacy_guard };
