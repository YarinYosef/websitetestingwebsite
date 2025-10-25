"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [982], {
        2374: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                cancelIdleCallback: function() {
                    return r
                },
                requestIdleCallback: function() {
                    return n
                }
            });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2714: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setAttributesFromProps", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv",
                    noModule: "noModule"
                },
                r = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

            function a(e) {
                return ["async", "defer", "noModule"].includes(e)
            }

            function i(e, t) {
                for (let [i, o] of Object.entries(t)) {
                    if (!t.hasOwnProperty(i) || r.includes(i) || void 0 === o) continue;
                    let l = n[i] || i.toLowerCase();
                    "SCRIPT" === e.tagName && a(l) ? e[l] = !!o : e.setAttribute(l, String(o)), (!1 === o || "SCRIPT" === e.tagName && a(l) && (!o || "false" === o)) && (e.setAttribute(l, ""), e.removeAttribute(l))
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3554: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => a.a
            });
            var r = n(9243),
                a = n.n(r),
                i = {};
            for (let e in r) "default" !== e && (i[e] = () => r[e]);
            n.d(t, i)
        },
        6063: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = void 0, t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
                    dataLayerName: l = "dataLayer",
                    auth: u,
                    preview: d,
                    dataLayer: s,
                    nonce: c
                } = e;
                o = l;
                let f = "dataLayer" !== l ? `&l=${l}` : "",
                    p = u ? `&gtm_auth=${u}` : "",
                    g = d ? `&gtm_preview=${d}&gtm_cookies_win=x` : "";
                return (0, a.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${s?`w[l].push(${JSON.stringify(s)})`:""}
      })(window,'${l}');`
                        },
                        nonce: c
                    }), (0, r.jsx)(i.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: `${n}?id=${t}${f}${p}${g}`,
                        nonce: c
                    })]
                })
            };
            let r = n(5155),
                a = n(2115),
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(3554)),
                o = "dataLayer";
            t.sendGTMEvent = (e, t) => {
                let n = t || o;
                window[n] = window[n] || [], window[n].push(e)
            }
        },
        6259: (e, t, n) => {
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    debugMode: n,
                    dataLayerName: l = "dataLayer",
                    nonce: u
                } = e;
                return void 0 === r && (r = l), (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: `
          window['${l}'] = window['${l}'] || [];
          function gtag(){window['${l}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${n?",{ 'debug_mode': true }":""});`
                        },
                        nonce: u
                    }), (0, a.jsx)(o.default, {
                        id: "_next-ga",
                        src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
                        nonce: u
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === r) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[r] ? window[r].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${r} does not exist`)
            };
            let a = n(5155),
                i = n(2115),
                o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(3554))
        },
        7383: (e, t, n) => {
            function r(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) e[r] = n[r]
                }
                return e
            }
            n.d(t, {
                A: () => a
            });
            var a = function e(t, n) {
                function a(e, a, i) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(i = r({}, n, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var o = "";
                        for (var l in i) {
                            if (i[l]) o += "; " + l, !0 !== i[l] && (o += "=" + i[l].split(";")[0])
                        }
                        return document.cookie = e + "=" + t.write(a, e) + o
                    }
                }
                return Object.create({
                    set: a,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var n = document.cookie ? document.cookie.split("; ") : [], r = {}, a = 0; a < n.length; a++) {
                                var i = n[a].split("="),
                                    o = i.slice(1).join("=");
                                try {
                                    var l = decodeURIComponent(i[0]);
                                    if (r[l] = t.read(o, l), e === l) break
                                } catch (e) {}
                            }
                            return e ? r[e] : r
                        }
                    },
                    remove: function(e, t) {
                        a(e, "", r({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, r({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(r({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(n)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        },
        8930: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: i = null,
                    children: o,
                    dataNtpc: l = ""
                } = e;
                return (0, a.useEffect)(() => {
                    l && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: `next-third-parties-${l}`
                        }
                    })
                }, [l]), (0, r.jsxs)(r.Fragment, {
                    children: [o, t ? (0, r.jsx)("div", {
                        style: {
                            height: null != n ? `${n}px` : "auto",
                            width: null != i ? `${i}px` : "auto"
                        },
                        "data-ntpc": l,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            };
            let r = n(5155),
                a = n(2115)
        },
        9243: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                default: function() {
                    return y
                },
                handleClientScriptLoad: function() {
                    return _
                },
                initScriptLoader: function() {
                    return m
                }
            });
            let r = n(8229),
                a = n(6966),
                i = n(5155),
                o = r._(n(7650)),
                l = a._(n(2115)),
                u = n(2830),
                d = n(2714),
                s = n(2374),
                c = new Map,
                f = new Set,
                p = e => {
                    if (o.default.preinit) {
                        e.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    } {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                g = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: a = null,
                        dangerouslySetInnerHTML: i,
                        children: o = "",
                        strategy: l = "afterInteractive",
                        onError: u,
                        stylesheets: s
                    } = e, g = n || t;
                    if (g && f.has(g)) return;
                    if (c.has(t)) {
                        f.add(g), c.get(t).then(r, u);
                        return
                    }
                    let _ = () => {
                            a && a(), f.add(g)
                        },
                        m = document.createElement("script"),
                        h = new Promise((e, t) => {
                            m.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), _()
                            }), m.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            u && u(e)
                        });
                    i ? (m.innerHTML = i.__html || "", _()) : o ? (m.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", _()) : t && (m.src = t, c.set(t, h)), (0, d.setAttributesFromProps)(m, e), "worker" === l && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", l), s && p(s), document.body.appendChild(m)
                };

            function _(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, s.requestIdleCallback)(() => g(e))
                }) : g(e)
            }

            function m(e) {
                e.forEach(_), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function h(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: a = null,
                    strategy: d = "afterInteractive",
                    onError: c,
                    stylesheets: p,
                    ..._
                } = e, {
                    updateScripts: m,
                    scripts: h,
                    getIsSsr: y,
                    appDir: w,
                    nonce: b
                } = (0, l.useContext)(u.HeadManagerContext), v = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    let e = t || n;
                    v.current || (a && e && f.has(e) && a(), v.current = !0)
                }, [a, t, n]);
                let x = (0, l.useRef)(!1);
                if ((0, l.useEffect)(() => {
                        if (!x.current) {
                            if ("afterInteractive" === d) g(e);
                            else if ("lazyOnload" === d) "complete" === document.readyState ? (0, s.requestIdleCallback)(() => g(e)) : window.addEventListener("load", () => {
                                (0, s.requestIdleCallback)(() => g(e))
                            });
                            x.current = !0
                        }
                    }, [e, d]), ("beforeInteractive" === d || "worker" === d) && (m ? (h[d] = (h[d] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: a,
                        onError: c,
                        ..._
                    }]), m(h)) : y && y() ? f.add(t || n) : y && !y() && g(e)), w) {
                    if (p && p.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === d) return n ? (o.default.preload(n, _.integrity ? {
                        as: "script",
                        integrity: _.integrity,
                        nonce: b,
                        crossOrigin: _.crossOrigin
                    } : {
                        as: "script",
                        nonce: b,
                        crossOrigin: _.crossOrigin
                    }), (0, i.jsx)("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ..._,
                                id: t
                            }]) + ")"
                        }
                    })) : (_.dangerouslySetInnerHTML && (_.children = _.dangerouslySetInnerHTML.__html, delete _.dangerouslySetInnerHTML), (0, i.jsx)("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ..._,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === d && n && o.default.preload(n, _.integrity ? {
                        as: "script",
                        integrity: _.integrity,
                        nonce: b,
                        crossOrigin: _.crossOrigin
                    } : {
                        as: "script",
                        nonce: b,
                        crossOrigin: _.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(h, "__nextScript", {
                value: !0
            });
            let y = h;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        }
    }
]);