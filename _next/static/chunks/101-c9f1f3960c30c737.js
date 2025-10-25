(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [101], {
        31: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => n
            });
            var i = r(3264);
            class n extends i.BRH {
                constructor(e) {
                    super(e), this.type = i.ix0
                }
                parse(e) {
                    let t, r, n;
                    let o = function(e, t) {
                            switch (e) {
                                case 1:
                                    throw Error("THREE.RGBELoader: Read Error: " + (t || ""));
                                case 2:
                                    throw Error("THREE.RGBELoader: Write Error: " + (t || ""));
                                case 3:
                                    throw Error("THREE.RGBELoader: Bad File Format: " + (t || ""));
                                default:
                                    throw Error("THREE.RGBELoader: Memory Error: " + (t || ""))
                            }
                        },
                        s = function(e, t, r) {
                            t = t || 1024;
                            let i = e.pos,
                                n = -1,
                                o = 0,
                                s = "",
                                a = String.fromCharCode.apply(null, new Uint16Array(e.subarray(i, i + 128)));
                            for (; 0 > (n = a.indexOf("\n")) && o < t && i < e.byteLength;) s += a, o += a.length, i += 128, a += String.fromCharCode.apply(null, new Uint16Array(e.subarray(i, i + 128)));
                            return -1 < n && (!1 !== r && (e.pos += o + n + 1), s + a.slice(0, n))
                        },
                        a = new Uint8Array(e);
                    a.pos = 0;
                    let l = function(e) {
                            let t, r;
                            let i = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                                n = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                                a = /^\s*FORMAT=(\S+)\s*$/,
                                l = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                                c = {
                                    valid: 0,
                                    string: "",
                                    comments: "",
                                    programtype: "RGBE",
                                    format: "",
                                    gamma: 1,
                                    exposure: 1,
                                    width: 0,
                                    height: 0
                                };
                            for (!(e.pos >= e.byteLength) && (t = s(e)) || o(1, "no header found"), (r = t.match(/^#\?(\S+)/)) || o(3, "bad initial token"), c.valid |= 1, c.programtype = r[1], c.string += t + "\n"; !1 !== (t = s(e));) {
                                if (c.string += t + "\n", "#" === t.charAt(0)) {
                                    c.comments += t + "\n";
                                    continue
                                }
                                if ((r = t.match(i)) && (c.gamma = parseFloat(r[1])), (r = t.match(n)) && (c.exposure = parseFloat(r[1])), (r = t.match(a)) && (c.valid |= 2, c.format = r[1]), (r = t.match(l)) && (c.valid |= 4, c.height = parseInt(r[1], 10), c.width = parseInt(r[2], 10)), 2 & c.valid && 4 & c.valid) break
                            }
                            return 2 & c.valid || o(3, "missing format specifier"), 4 & c.valid || o(3, "missing image size specifier"), c
                        }(a),
                        c = l.width,
                        u = l.height,
                        h = function(e, t, r) {
                            if (t < 8 || t > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2]) return new Uint8Array(e);
                            t !== (e[2] << 8 | e[3]) && o(3, "wrong scanline width");
                            let i = new Uint8Array(4 * t * r);
                            i.length || o(4, "unable to allocate buffer space");
                            let n = 0,
                                s = 0,
                                a = 4 * t,
                                l = new Uint8Array(4),
                                c = new Uint8Array(a),
                                u = r;
                            for (; u > 0 && s < e.byteLength;) {
                                s + 4 > e.byteLength && o(1), l[0] = e[s++], l[1] = e[s++], l[2] = e[s++], l[3] = e[s++], (2 != l[0] || 2 != l[1] || (l[2] << 8 | l[3]) != t) && o(3, "bad rgbe scanline format");
                                let r = 0,
                                    h;
                                for (; r < a && s < e.byteLength;) {
                                    let t = (h = e[s++]) > 128;
                                    if (t && (h -= 128), (0 === h || r + h > a) && o(3, "bad scanline data"), t) {
                                        let t = e[s++];
                                        for (let e = 0; e < h; e++) c[r++] = t
                                    } else c.set(e.subarray(s, s + h), r), r += h, s += h
                                }
                                for (let e = 0; e < t; e++) {
                                    let r = 0;
                                    i[n] = c[e + r], r += t, i[n + 1] = c[e + r], r += t, i[n + 2] = c[e + r], r += t, i[n + 3] = c[e + r], n += 4
                                }
                                u--
                            }
                            return i
                        }(a.subarray(a.pos), c, u);
                    switch (this.type) {
                        case i.RQf:
                            let d = new Float32Array(4 * (n = h.length / 4));
                            for (let e = 0; e < n; e++) ! function(e, t, r, i) {
                                let n = Math.pow(2, e[t + 3] - 128) / 255;
                                r[i + 0] = e[t + 0] * n, r[i + 1] = e[t + 1] * n, r[i + 2] = e[t + 2] * n, r[i + 3] = 1
                            }(h, 4 * e, d, 4 * e);
                            t = d, r = i.RQf;
                            break;
                        case i.ix0:
                            let p = new Uint16Array(4 * (n = h.length / 4));
                            for (let e = 0; e < n; e++) ! function(e, t, r, n) {
                                let o = Math.pow(2, e[t + 3] - 128) / 255;
                                r[n + 0] = i.GxU.toHalfFloat(Math.min(e[t + 0] * o, 65504)), r[n + 1] = i.GxU.toHalfFloat(Math.min(e[t + 1] * o, 65504)), r[n + 2] = i.GxU.toHalfFloat(Math.min(e[t + 2] * o, 65504)), r[n + 3] = i.GxU.toHalfFloat(1)
                            }(h, 4 * e, p, 4 * e);
                            t = p, r = i.ix0;
                            break;
                        default:
                            throw Error("THREE.RGBELoader: Unsupported type: " + this.type)
                    }
                    return {
                        width: c,
                        height: u,
                        data: t,
                        header: l.string,
                        gamma: l.gamma,
                        exposure: l.exposure,
                        type: r
                    }
                }
                setDataType(e) {
                    return this.type = e, this
                }
                load(e, t, r, n) {
                    return super.load(e, function(e, r) {
                        switch (e.type) {
                            case i.RQf:
                            case i.ix0:
                                e.colorSpace = i.Zr2, e.minFilter = i.k6q, e.magFilter = i.k6q, e.generateMipmaps = !1, e.flipY = !0
                        }
                        t && t(e, r)
                    }, r, n)
                }
            }
        },
        228: (e, t, r) => {
            "use strict";
            r.d(t, {
                DY: () => a,
                IU: () => c,
                uv: () => l
            });
            let i = e => "object" == typeof e && "function" == typeof e.then,
                n = [];

            function o(e, t, r = (e, t) => e === t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                let i = e.length;
                if (t.length !== i) return !1;
                for (let n = 0; n < i; n++)
                    if (!r(e[n], t[n])) return !1;
                return !0
            }

            function s(e, t = null, r = !1, a = {}) {
                for (let i of (null === t && (t = [e]), n))
                    if (o(t, i.keys, i.equal)) {
                        if (r) return;
                        if (Object.prototype.hasOwnProperty.call(i, "error")) throw i.error;
                        if (Object.prototype.hasOwnProperty.call(i, "response")) return a.lifespan && a.lifespan > 0 && (i.timeout && clearTimeout(i.timeout), i.timeout = setTimeout(i.remove, a.lifespan)), i.response;
                        if (!r) throw i.promise
                    }
                let l = {
                    keys: t,
                    equal: a.equal,
                    remove: () => {
                        let e = n.indexOf(l); - 1 !== e && n.splice(e, 1)
                    },
                    promise: (i(e) ? e : e(...t)).then(e => {
                        l.response = e, a.lifespan && a.lifespan > 0 && (l.timeout = setTimeout(l.remove, a.lifespan))
                    }).catch(e => l.error = e)
                };
                if (n.push(l), !r) throw l.promise
            }
            let a = (e, t, r) => s(e, t, !1, r),
                l = (e, t, r) => void s(e, t, !0, r),
                c = e => {
                    if (void 0 === e || 0 === e.length) n.splice(0, n.length);
                    else {
                        let t = n.find(t => o(e, t.keys, t.equal));
                        t && t.remove()
                    }
                }
        },
        554: (e, t, r) => {
            "use strict";
            r.d(t, {
                AM: () => v,
                Fh: () => a,
                K1: () => s,
                Kk: () => y
            });
            var i = Object.defineProperty,
                n = (e, t, r) => t in e ? i(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                o = (e, t, r) => n(e, "symbol" != typeof t ? t + "" : t, r);
            let s = e => {
                if ("object" != typeof e || typeof e._editable > "u") return {};
                try {
                    let t = JSON.parse(e._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
                    return t ? {
                        "data-blok-c": JSON.stringify(t),
                        "data-blok-uid": `${t.id}-${t.uid}`
                    } : {}
                } catch {
                    return {}
                }
            };
            var a = (e => (e.DOCUMENT = "doc", e.HEADING = "heading", e.PARAGRAPH = "paragraph", e.QUOTE = "blockquote", e.OL_LIST = "ordered_list", e.UL_LIST = "bullet_list", e.LIST_ITEM = "list_item", e.CODE_BLOCK = "code_block", e.HR = "horizontal_rule", e.BR = "hard_break", e.IMAGE = "image", e.EMOJI = "emoji", e.COMPONENT = "blok", e.TABLE = "table", e.TABLE_ROW = "tableRow", e.TABLE_CELL = "tableCell", e.TABLE_HEADER = "tableHeader", e))(a || {}),
                l = (e => (e.BOLD = "bold", e.STRONG = "strong", e.STRIKE = "strike", e.UNDERLINE = "underline", e.ITALIC = "italic", e.CODE = "code", e.LINK = "link", e.ANCHOR = "anchor", e.STYLED = "styled", e.SUPERSCRIPT = "superscript", e.SUBSCRIPT = "subscript", e.TEXT_STYLE = "textStyle", e.HIGHLIGHT = "highlight", e))(l || {}),
                c = (e => (e.TEXT = "text", e))(c || {}),
                u = (e => (e.URL = "url", e.STORY = "story", e.ASSET = "asset", e.EMAIL = "email", e))(u || {});
            let h = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"],
                d = (e = {}) => Object.keys(e).map(t => `${t}="${e[t]}"`).join(" "),
                p = (e = {}) => Object.keys(e).map(t => `${t}: ${e[t]}`).join("; ");

            function f(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
            }
            let m = e => Object.fromEntries(Object.entries(e).filter(([e, t]) => void 0 !== t));

            function g(e, t = {}, r) {
                let i = d(t),
                    n = i ? `${e} ${i}` : e,
                    o = Array.isArray(r) ? r.join("") : r || "";
                return e ? h.includes(e) ? `<${n}>` : `<${n}>${o}</${e}>` : o
            }

            function v(e = {}) {
                let t = new Map,
                    {
                        renderFn: r = g,
                        textFn: i = f,
                        resolvers: n = {},
                        optimizeImages: o = !1,
                        keyedResolvers: s = !1
                    } = e,
                    h = r !== g,
                    d = () => ({
                        render: (e, i = {}, n) => {
                            if (s && e) {
                                let r = t.get(e) || 0;
                                t.set(e, r + 1), i.key = `${e}-${r}`
                            }
                            return r(e, i, n)
                        }
                    }),
                    y = e => (t, r) => {
                        let i = t.attrs || {};
                        return r.render(e, i, t.children || null)
                    },
                    b = (e, t = !1) => ({
                        text: r,
                        attrs: i
                    }, n) => {
                        let {
                            class: o,
                            id: s,
                            ...a
                        } = i || {}, l = t ? {
                            class: o,
                            id: s,
                            style: p(a) || void 0
                        } : i || {};
                        return n.render(e, m(l), r)
                    },
                    x = e => S(e),
                    w = (e, t) => {
                        let {
                            linktype: r,
                            href: i,
                            anchor: n,
                            ...o
                        } = e.attrs || {}, s = "";
                        switch (r) {
                            case u.ASSET:
                            case u.URL:
                                s = i;
                                break;
                            case u.EMAIL:
                                s = `mailto:${i}`;
                                break;
                            case u.STORY:
                                s = i, n && (s = `${s}#${n}`);
                                break;
                            default:
                                s = i
                        }
                        let a = { ...o
                        };
                        return s && (a.href = s), t.render("a", a, e.text)
                    },
                    A = new Map([
                        [a.DOCUMENT, y("")],
                        [a.HEADING, (e, t) => {
                            let {
                                level: r,
                                ...i
                            } = e.attrs || {};
                            return t.render(`h${r}`, i, e.children)
                        }],
                        [a.PARAGRAPH, y("p")],
                        [a.UL_LIST, y("ul")],
                        [a.OL_LIST, y("ol")],
                        [a.LIST_ITEM, y("li")],
                        [a.IMAGE, (e, t) => {
                            let {
                                src: r,
                                alt: i,
                                title: n,
                                srcset: s,
                                sizes: a
                            } = e.attrs || {}, l = r, c = {};
                            if (o) {
                                let {
                                    src: e,
                                    attrs: t
                                } = function(e, t) {
                                    if (!t) return {
                                        src: e,
                                        attrs: {}
                                    };
                                    let r = 0,
                                        i = 0,
                                        n = {},
                                        o = [];

                                    function s(e, t, r, i, n) {
                                        "number" != typeof e || e <= t || e >= r ? console.warn(`[StoryblokRichText] - ${i.charAt(0).toUpperCase()+i.slice(1)} value must be a number between ${t} and ${r} (inclusive)`) : n.push(`${i}(${e})`)
                                    }
                                    if ("object" == typeof t) {
                                        if ("number" == typeof t.width && t.width > 0 ? (n.width = t.width, r = t.width) : console.warn("[StoryblokRichText] - Width value must be a number greater than 0"), t.height && "number" == typeof t.height && t.height > 0 ? (n.height = t.height, i = t.height) : console.warn("[StoryblokRichText] - Height value must be a number greater than 0"), t.loading && ["lazy", "eager"].includes(t.loading) && (n.loading = t.loading), t.class && (n.class = t.class), t.filters) {
                                            let {
                                                filters: e
                                            } = t || {}, {
                                                blur: r,
                                                brightness: i,
                                                fill: n,
                                                format: a,
                                                grayscale: l,
                                                quality: c,
                                                rotate: u
                                            } = e || {};
                                            r && s(r, 0, 100, "blur", o), c && s(c, 0, 100, "quality", o), i && s(i, 0, 100, "brightness", o), n && o.push(`fill(${n})`), l && o.push("grayscale()"), u && [0, 90, 180, 270].includes(t.filters.rotate || 0) && o.push(`rotate(${u})`), a && ["webp", "png", "jpeg"].includes(a) && o.push(`format(${a})`)
                                        }
                                        t.srcset && (n.srcset = t.srcset.map(t => {
                                            if ("number" == typeof t) return `${e}/m/${t}x0/${o.length>0?`filters:${o.join(":")}`:""} ${t}w`;
                                            if (Array.isArray(t) && 2 === t.length) {
                                                let [r, i] = t;
                                                return `${e}/m/${r}x${i}/${o.length>0?`filters:${o.join(":")}`:""} ${r}w`
                                            }
                                            console.warn("[StoryblokRichText] - srcset entry must be a number or a tuple of two numbers")
                                        }).join(", ")), t.sizes && (n.sizes = t.sizes.join(", "))
                                    }
                                    let a = `${e}/m/`;
                                    return r > 0 && i > 0 && (a = `${a}${r}x${i}/`), o.length > 0 && (a = `${a}filters:${o.join(":")}`), {
                                        src: a,
                                        attrs: n
                                    }
                                }(r, o);
                                l = e, c = t
                            }
                            let u = {
                                src: l,
                                alt: i,
                                title: n,
                                srcset: s,
                                sizes: a,
                                ...c
                            };
                            return t.render("img", m(u))
                        }],
                        [a.EMOJI, (e, t) => {
                            var r, i, n, o;
                            let s = t.render("img", {
                                src: null == (r = e.attrs) ? void 0 : r.fallbackImage,
                                alt: null == (i = e.attrs) ? void 0 : i.alt,
                                style: "width: 1.25em; height: 1.25em; vertical-align: text-top",
                                draggable: "false",
                                loading: "lazy"
                            });
                            return t.render("span", {
                                "data-type": "emoji",
                                "data-name": null == (n = e.attrs) ? void 0 : n.name,
                                "data-emoji": null == (o = e.attrs) ? void 0 : o.emoji
                            }, s)
                        }],
                        [a.CODE_BLOCK, (e, t) => t.render("pre", e.attrs || {}, t.render("code", {}, e.children || ""))],
                        [a.HR, y("hr")],
                        [a.BR, y("br")],
                        [a.QUOTE, y("blockquote")],
                        [a.COMPONENT, (e, t) => {
                            var r, i;
                            return console.warn("[StoryblokRichtText] - BLOK resolver is not available for vanilla usage"), t.render("span", {
                                blok: null == (r = null == e ? void 0 : e.attrs) ? void 0 : r.body[0],
                                id: null == (i = e.attrs) ? void 0 : i.id,
                                style: "display: none"
                            })
                        }],
                        [c.TEXT, e => {
                            let {
                                marks: r,
                                ...n
                            } = e;
                            if ("text" in e) {
                                if (r) return r.reduce((e, t) => x({ ...t,
                                    text: e
                                }), x({ ...n,
                                    children: n.children
                                }));
                                let o = e.attrs || {};
                                if (s) {
                                    let e = t.get("txt") || 0;
                                    t.set("txt", e + 1), o.key = `txt-${e}`
                                }
                                return i(n.text, o)
                            }
                            return ""
                        }],
                        [l.LINK, w],
                        [l.ANCHOR, w],
                        [l.STYLED, b("span", !0)],
                        [l.BOLD, b("strong")],
                        [l.TEXT_STYLE, b("span", !0)],
                        [l.ITALIC, b("em")],
                        [l.UNDERLINE, b("u")],
                        [l.STRIKE, b("s")],
                        [l.CODE, b("code")],
                        [l.SUPERSCRIPT, b("sup")],
                        [l.SUBSCRIPT, b("sub")],
                        [l.HIGHLIGHT, b("mark")],
                        [a.TABLE, (e, t) => {
                            let r = t.render("tbody", {}, e.children);
                            return t.render("table", {}, r)
                        }],
                        [a.TABLE_ROW, (e, t) => t.render("tr", {}, e.children)],
                        [a.TABLE_CELL, (e, t) => {
                            let {
                                colspan: r,
                                rowspan: i,
                                colwidth: n,
                                backgroundColor: o,
                                ...s
                            } = e.attrs || {}, a = { ...s
                            };
                            r > 1 && (a.colspan = r), i > 1 && (a.rowspan = i);
                            let l = [];
                            return n && l.push(`width: ${n}px;`), o && l.push(`background-color: ${o};`), l.length > 0 && (a.style = l.join(" ")), t.render("td", m(a), e.children)
                        }],
                        [a.TABLE_HEADER, (e, t) => {
                            let {
                                colspan: r,
                                rowspan: i,
                                colwidth: n,
                                backgroundColor: o,
                                ...s
                            } = e.attrs || {}, a = { ...s
                            };
                            r > 1 && (a.colspan = r), i > 1 && (a.rowspan = i);
                            let l = [];
                            return n && l.push(`width: ${n}px;`), o && l.push(`background-color: ${o};`), l.length > 0 && (a.style = l.join(" ")), t.render("th", m(a), e.children)
                        }], ...Object.entries(n).map(([e, t]) => [e, t])
                    ]);

                function E(e) {
                    let t = A.get(e.type);
                    if (!t) return console.error("<Storyblok>", `No resolver found for node type ${e.type}`), "";
                    let r = d();
                    if ("text" === e.type) return t(e, r);
                    let i = e.content ? e.content.map(S) : void 0;
                    return t({ ...e,
                        children: i
                    }, r)
                }

                function S(e) {
                    return "doc" === e.type ? h ? e.content.map(E) : e.content.map(E).join("") : Array.isArray(e) ? e.map(E) : E(e)
                }
                return {
                    render: S
                }
            }
            let y = (e, t, r = {}) => {
                var i;
                let n = !(typeof window > "u") && "u" > typeof window.storyblokRegisterEvent,
                    o = new URL(null == (i = window.location) ? void 0 : i.href).searchParams.get("_storyblok");
                if (!(!n || null === o || +o !== e)) {
                    if (!e) {
                        console.warn("Story ID is not defined. Please provide a valid ID.");
                        return
                    }
                    window.storyblokRegisterEvent(() => {
                        new window.StoryblokBridge(r).on(["input", "published", "change"], r => {
                            var i;
                            r && ("input" === r.action && (null == (i = r.story) ? void 0 : i.id) === e ? t(r.story) : ("change" === r.action || "published" === r.action) && r.storyId === e && window.location.reload())
                        })
                    })
                }
            }
        },
        802: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => ex
            });
            var i, n, o, s, a, l, c, u = r(934),
                h = {},
                d = 180 / Math.PI,
                p = Math.PI / 180,
                f = Math.atan2,
                m = /([A-Z])/g,
                g = /(left|right|width|margin|padding|x)/i,
                v = /[\s,\(]\S/,
                y = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                b = function(e, t) {
                    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
                },
                x = function(e, t) {
                    return t.set(t.t, t.p, 1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
                },
                w = function(e, t) {
                    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
                },
                A = function(e, t) {
                    var r = t.s + t.c * e;
                    t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
                },
                E = function(e, t) {
                    return t.set(t.t, t.p, e ? t.e : t.b, t)
                },
                S = function(e, t) {
                    return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
                },
                T = function(e, t, r) {
                    return e.style[t] = r
                },
                _ = function(e, t, r) {
                    return e.style.setProperty(t, r)
                },
                k = function(e, t, r) {
                    return e._gsap[t] = r
                },
                C = function(e, t, r) {
                    return e._gsap.scaleX = e._gsap.scaleY = r
                },
                R = function(e, t, r, i, n) {
                    var o = e._gsap;
                    o.scaleX = o.scaleY = r, o.renderTransform(n, o)
                },
                M = function(e, t, r, i, n) {
                    var o = e._gsap;
                    o[t] = r, o.renderTransform(n, o)
                },
                j = "transform",
                I = j + "Origin",
                O = function e(t, r) {
                    var i = this,
                        n = this.target,
                        o = n.style,
                        s = n._gsap;
                    if (t in h && o) {
                        if (this.tfm = this.tfm || {}, "transform" === t) return y.transform.split(",").forEach(function(t) {
                            return e.call(i, t, r)
                        });
                        if (~(t = y[t] || t).indexOf(",") ? t.split(",").forEach(function(e) {
                                return i.tfm[e] = J(n, e)
                            }) : this.tfm[t] = s.x ? s[t] : J(n, t), t === I && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(j) >= 0) return;
                        s.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(I, r, "")), t = j
                    }(o || r) && this.props.push(t, r, o[t])
                },
                L = function(e) {
                    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
                },
                P = function() {
                    var e, t, r = this.props,
                        i = this.target,
                        n = i.style,
                        o = i._gsap;
                    for (e = 0; e < r.length; e += 3) r[e + 1] ? 2 === r[e + 1] ? i[r[e]](r[e + 2]) : i[r[e]] = r[e + 2] : r[e + 2] ? n[r[e]] = r[e + 2] : n.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(m, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (t in this.tfm) o[t] = this.tfm[t];
                        o.svg && (o.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (e = l()) && e.isStart || n[j] || (L(n), o.zOrigin && n[I] && (n[I] += " " + o.zOrigin + "px", o.zOrigin = 0, o.renderTransform()), o.uncache = 1)
                    }
                },
                D = function(e, t) {
                    var r = {
                        target: e,
                        props: [],
                        revert: P,
                        save: O
                    };
                    return e._gsap || u.os.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
                        return r.save(e)
                    }), r
                },
                N = function(e, t) {
                    var r = i.createElementNS ? i.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : i.createElement(e);
                    return r && r.style ? r : i.createElement(e)
                },
                B = function e(t, r, i) {
                    var n = getComputedStyle(t);
                    return n[r] || n.getPropertyValue(r.replace(m, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && e(t, z(r) || r, 1) || ""
                },
                F = "O,Moz,ms,Ms,Webkit".split(","),
                z = function(e, t, r) {
                    var i = (t || s).style,
                        n = 5;
                    if (e in i && !r) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(F[n] + e in i););
                    return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? F[n] : "") + e
                },
                U = function() {
                    "undefined" != typeof window && window.document && (n = (i = window.document).documentElement, s = N("div") || {
                        style: {}
                    }, N("div"), I = (j = z(j)) + "Origin", s.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", c = !!z("perspective"), l = u.os.core.reverting, o = 1)
                },
                H = function(e) {
                    var t, r = e.ownerSVGElement,
                        i = N("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        o = e.cloneNode(!0);
                    o.style.display = "block", i.appendChild(o), n.appendChild(i);
                    try {
                        t = o.getBBox()
                    } catch (e) {}
                    return i.removeChild(o), n.removeChild(i), t
                },
                G = function(e, t) {
                    for (var r = t.length; r--;)
                        if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
                },
                W = function(e) {
                    var t, r;
                    try {
                        t = e.getBBox()
                    } catch (i) {
                        t = H(e), r = 1
                    }
                    return t && (t.width || t.height) || r || (t = H(e)), !t || t.width || t.x || t.y ? t : {
                        x: +G(e, ["x", "cx", "x1"]) || 0,
                        y: +G(e, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                X = function(e) {
                    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && W(e))
                },
                Y = function(e, t) {
                    if (t) {
                        var r, i = e.style;
                        t in h && t !== I && (t = j), i.removeProperty ? (("ms" === (r = t.substr(0, 2)) || "webkit" === t.substr(0, 6)) && (t = "-" + t), i.removeProperty("--" === r ? t : t.replace(m, "-$1").toLowerCase())) : i.removeAttribute(t)
                    }
                },
                q = function(e, t, r, i, n, o) {
                    var s = new u.J7(e._pt, t, r, 0, 1, o ? S : E);
                    return e._pt = s, s.b = i, s.e = n, e._props.push(r), s
                },
                V = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                $ = {
                    grid: 1,
                    flex: 1
                },
                K = function e(t, r, n, o) {
                    var a, l, c, d, p = parseFloat(n) || 0,
                        f = (n + "").trim().substr((p + "").length) || "px",
                        m = s.style,
                        v = g.test(r),
                        y = "svg" === t.tagName.toLowerCase(),
                        b = (y ? "client" : "offset") + (v ? "Width" : "Height"),
                        x = "px" === o,
                        w = "%" === o;
                    if (o === f || !p || V[o] || V[f]) return p;
                    if ("px" === f || x || (p = e(t, r, n, "px")), d = t.getCTM && X(t), (w || "%" === f) && (h[r] || ~r.indexOf("adius"))) return a = d ? t.getBBox()[v ? "width" : "height"] : t[b], (0, u.E_)(w ? p / a * 100 : p / 100 * a);
                    if (m[v ? "width" : "height"] = 100 + (x ? f : o), l = "rem" !== o && ~r.indexOf("adius") || "em" === o && t.appendChild && !y ? t : t.parentNode, d && (l = (t.ownerSVGElement || {}).parentNode), l && l !== i && l.appendChild || (l = i.body), (c = l._gsap) && w && c.width && v && c.time === u.au.time && !c.uncache) return (0, u.E_)(p / c.width * 100);
                    if (w && ("height" === r || "width" === r)) {
                        var A = t.style[r];
                        t.style[r] = 100 + o, a = t[b], A ? t.style[r] = A : Y(t, r)
                    } else(w || "%" === f) && !$[B(l, "display")] && (m.position = B(t, "position")), l === t && (m.position = "static"), l.appendChild(s), a = s[b], l.removeChild(s), m.position = "absolute";
                    return v && w && ((c = (0, u.a0)(l)).time = u.au.time, c.width = l[b]), (0, u.E_)(x ? a * p / 100 : a && p ? 100 / a * p : 0)
                },
                J = function(e, t, r, i) {
                    var n;
                    return o || U(), t in y && "transform" !== t && ~(t = y[t]).indexOf(",") && (t = t.split(",")[0]), h[t] && "transform" !== t ? (n = ec(e, i), n = "transformOrigin" !== t ? n[t] : n.svg ? n.origin : eu(B(e, I)) + " " + n.zOrigin + "px") : (!(n = e.style[t]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = er[t] && er[t](e, t, r) || B(e, t) || (0, u.n)(e, t) || +("opacity" === t)), r && !~(n + "").trim().indexOf(" ") ? K(e, t, n, r) + r : n
                },
                Z = function(e, t, r, i) {
                    if (!r || "none" === r) {
                        var n = z(t, e, 1),
                            o = n && B(e, n, 1);
                        o && o !== r ? (t = n, r = o) : "borderColor" === t && (r = B(e, "borderTopColor"))
                    }
                    var s, a, l, c, h, d, p, f, m, g, v, y = new u.J7(this._pt, e.style, t, 0, 1, u.l1),
                        b = 0,
                        x = 0;
                    if (y.b = r, y.e = i, r += "", "var(--" === (i += "").substring(0, 6) && (i = B(e, i.substring(4, i.indexOf(")")))), "auto" === i && (d = e.style[t], e.style[t] = i, i = B(e, t) || i, d ? e.style[t] = d : Y(e, t)), s = [r, i], (0, u.Uc)(s), r = s[0], i = s[1], l = r.match(u.vM) || [], (i.match(u.vM) || []).length) {
                        for (; a = u.vM.exec(i);) p = a[0], m = i.substring(b, a.index), h ? h = (h + 1) % 5 : ("rgba(" === m.substr(-5) || "hsla(" === m.substr(-5)) && (h = 1), p !== (d = l[x++] || "") && (c = parseFloat(d) || 0, v = d.substr((c + "").length), "=" === p.charAt(1) && (p = (0, u.B0)(c, p) + v), f = parseFloat(p), g = p.substr((f + "").length), b = u.vM.lastIndex - g.length, g || (g = g || u.Yz.units[t] || v, b !== i.length || (i += g, y.e += g)), v !== g && (c = K(e, t, d, g) || 0), y._pt = {
                            _next: y._pt,
                            p: m || 1 === x ? m : ",",
                            s: c,
                            c: f - c,
                            m: h && h < 4 || "zIndex" === t ? Math.round : 0
                        });
                        y.c = b < i.length ? i.substring(b, i.length) : ""
                    } else y.r = "display" === t && "none" === i ? S : E;
                    return u.Ks.test(i) && (y.e = 0), this._pt = y, y
                },
                Q = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                ee = function(e) {
                    var t = e.split(" "),
                        r = t[0],
                        i = t[1] || "50%";
                    return ("top" === r || "bottom" === r || "left" === i || "right" === i) && (e = r, r = i, i = e), t[0] = Q[r] || r, t[1] = Q[i] || i, t.join(" ")
                },
                et = function(e, t) {
                    if (t.tween && t.tween._time === t.tween._dur) {
                        var r, i, n, o = t.t,
                            s = o.style,
                            a = t.u,
                            l = o._gsap;
                        if ("all" === a || !0 === a) s.cssText = "", i = 1;
                        else
                            for (n = (a = a.split(",")).length; --n > -1;) h[r = a[n]] && (i = 1, r = "transformOrigin" === r ? I : j), Y(o, r);
                        i && (Y(o, j), l && (l.svg && o.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", ec(o, 1), l.uncache = 1, L(s)))
                    }
                },
                er = {
                    clearProps: function(e, t, r, i, n) {
                        if ("isFromStart" !== n.data) {
                            var o = e._pt = new u.J7(e._pt, t, r, 0, 0, et);
                            return o.u = i, o.pr = -10, o.tween = n, e._props.push(r), 1
                        }
                    }
                },
                ei = [1, 0, 0, 1, 0, 0],
                en = {},
                eo = function(e) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
                },
                es = function(e) {
                    var t = B(e, j);
                    return eo(t) ? ei : t.substr(7).match(u.vX).map(u.E_)
                },
                ea = function(e, t) {
                    var r, i, o, s, a = e._gsap || (0, u.a0)(e),
                        l = e.style,
                        c = es(e);
                    return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (c = [(o = e.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? ei : c : (c !== ei || e.offsetParent || e === n || a.svg || (o = l.display, l.display = "block", (r = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width) || (s = 1, i = e.nextElementSibling, n.appendChild(e)), c = es(e), o ? l.display = o : Y(e, "display"), s && (i ? r.insertBefore(e, i) : r ? r.appendChild(e) : n.removeChild(e))), t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
                },
                el = function(e, t, r, i, n, o) {
                    var s, a, l, c, u = e._gsap,
                        h = n || ea(e, !0),
                        d = u.xOrigin || 0,
                        p = u.yOrigin || 0,
                        f = u.xOffset || 0,
                        m = u.yOffset || 0,
                        g = h[0],
                        v = h[1],
                        y = h[2],
                        b = h[3],
                        x = h[4],
                        w = h[5],
                        A = t.split(" "),
                        E = parseFloat(A[0]) || 0,
                        S = parseFloat(A[1]) || 0;
                    r ? h !== ei && (a = g * b - v * y) && (l = b / a * E + -y / a * S + (y * w - b * x) / a, c = -v / a * E + g / a * S - (g * w - v * x) / a, E = l, S = c) : (E = (s = W(e)).x + (~A[0].indexOf("%") ? E / 100 * s.width : E), S = s.y + (~(A[1] || A[0]).indexOf("%") ? S / 100 * s.height : S)), i || !1 !== i && u.smooth ? (u.xOffset = f + ((x = E - d) * g + (w = S - p) * y) - x, u.yOffset = m + (x * v + w * b) - w) : u.xOffset = u.yOffset = 0, u.xOrigin = E, u.yOrigin = S, u.smooth = !!i, u.origin = t, u.originIsAbsolute = !!r, e.style[I] = "0px 0px", o && (q(o, u, "xOrigin", d, E), q(o, u, "yOrigin", p, S), q(o, u, "xOffset", f, u.xOffset), q(o, u, "yOffset", m, u.yOffset)), e.setAttribute("data-svg-origin", E + " " + S)
                },
                ec = function(e, t) {
                    var r = e._gsap || new u.n6(e);
                    if ("x" in r && !t && !r.uncache) return r;
                    var i, n, o, s, a, l, h, m, g, v, y, b, x, w, A, E, S, T, _, k, C, R, M, O, L, P, D, N, F, z, U, H, G = e.style,
                        W = r.scaleX < 0,
                        Y = getComputedStyle(e),
                        q = B(e, I) || "0";
                    return i = n = o = l = h = m = g = v = y = 0, s = a = 1, r.svg = !!(e.getCTM && X(e)), Y.translate && (("none" !== Y.translate || "none" !== Y.scale || "none" !== Y.rotate) && (G[j] = ("none" !== Y.translate ? "translate3d(" + (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") + ("none" !== Y.scale ? "scale(" + Y.scale.split(" ").join(",") + ") " : "") + ("none" !== Y[j] ? Y[j] : "")), G.scale = G.rotate = G.translate = "none"), w = ea(e, r.svg), r.svg && (r.uncache ? (L = e.getBBox(), q = r.xOrigin - L.x + "px " + (r.yOrigin - L.y) + "px", O = "") : O = !t && e.getAttribute("data-svg-origin"), el(e, O || q, !!O || r.originIsAbsolute, !1 !== r.smooth, w)), b = r.xOrigin || 0, x = r.yOrigin || 0, w !== ei && (T = w[0], _ = w[1], k = w[2], C = w[3], i = R = w[4], n = M = w[5], 6 === w.length ? (s = Math.sqrt(T * T + _ * _), a = Math.sqrt(C * C + k * k), l = T || _ ? f(_, T) * d : 0, (g = k || C ? f(k, C) * d + l : 0) && (a *= Math.abs(Math.cos(g * p))), r.svg && (i -= b - (b * T + x * k), n -= x - (b * _ + x * C))) : (H = w[6], z = w[7], D = w[8], N = w[9], F = w[10], U = w[11], i = w[12], n = w[13], o = w[14], h = (A = f(H, F)) * d, A && (O = R * (E = Math.cos(-A)) + D * (S = Math.sin(-A)), L = M * E + N * S, P = H * E + F * S, D = -(R * S) + D * E, N = -(M * S) + N * E, F = -(H * S) + F * E, U = -(z * S) + U * E, R = O, M = L, H = P), m = (A = f(-k, F)) * d, A && (O = T * (E = Math.cos(-A)) - D * (S = Math.sin(-A)), L = _ * E - N * S, P = k * E - F * S, U = C * S + U * E, T = O, _ = L, k = P), l = (A = f(_, T)) * d, A && (O = T * (E = Math.cos(A)) + _ * (S = Math.sin(A)), L = R * E + M * S, _ = _ * E - T * S, M = M * E - R * S, T = O, R = L), h && Math.abs(h) + Math.abs(l) > 359.9 && (h = l = 0, m = 180 - m), s = (0, u.E_)(Math.sqrt(T * T + _ * _ + k * k)), a = (0, u.E_)(Math.sqrt(M * M + H * H)), g = Math.abs(A = f(R, M)) > 2e-4 ? A * d : 0, y = U ? 1 / (U < 0 ? -U : U) : 0), r.svg && (O = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !eo(B(e, j)), O && e.setAttribute("transform", O))), Math.abs(g) > 90 && 270 > Math.abs(g) && (W ? (s *= -1, g += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, g += g <= 0 ? 180 : -180)), t = t || r.uncache, r.x = i - ((r.xPercent = i && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = o + "px", r.scaleX = (0, u.E_)(s), r.scaleY = (0, u.E_)(a), r.rotation = (0, u.E_)(l) + "deg", r.rotationX = (0, u.E_)(h) + "deg", r.rotationY = (0, u.E_)(m) + "deg", r.skewX = g + "deg", r.skewY = v + "deg", r.transformPerspective = y + "px", (r.zOrigin = parseFloat(q.split(" ")[2]) || !t && r.zOrigin || 0) && (G[I] = eu(q)), r.xOffset = r.yOffset = 0, r.force3D = u.Yz.force3D, r.renderTransform = r.svg ? em : c ? ef : ed, r.uncache = 0, r
                },
                eu = function(e) {
                    return (e = e.split(" "))[0] + " " + e[1]
                },
                eh = function(e, t, r) {
                    var i = (0, u.l_)(t);
                    return (0, u.E_)(parseFloat(t) + parseFloat(K(e, "x", r + "px", i))) + i
                },
                ed = function(e, t) {
                    t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, ef(e, t)
                },
                ep = "0deg",
                ef = function(e, t) {
                    var r = t || this,
                        i = r.xPercent,
                        n = r.yPercent,
                        o = r.x,
                        s = r.y,
                        a = r.z,
                        l = r.rotation,
                        c = r.rotationY,
                        u = r.rotationX,
                        h = r.skewX,
                        d = r.skewY,
                        f = r.scaleX,
                        m = r.scaleY,
                        g = r.transformPerspective,
                        v = r.force3D,
                        y = r.target,
                        b = r.zOrigin,
                        x = "",
                        w = "auto" === v && e && 1 !== e || !0 === v;
                    if (b && (u !== ep || c !== ep)) {
                        var A, E = parseFloat(c) * p,
                            S = Math.sin(E),
                            T = Math.cos(E);
                        o = eh(y, o, -(S * (A = Math.cos(E = parseFloat(u) * p)) * b)), s = eh(y, s, -(-Math.sin(E) * b)), a = eh(y, a, -(T * A * b) + b)
                    }
                    "0px" !== g && (x += "perspective(" + g + ") "), (i || n) && (x += "translate(" + i + "%, " + n + "%) "), (w || "0px" !== o || "0px" !== s || "0px" !== a) && (x += "0px" !== a || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), l !== ep && (x += "rotate(" + l + ") "), c !== ep && (x += "rotateY(" + c + ") "), u !== ep && (x += "rotateX(" + u + ") "), (h !== ep || d !== ep) && (x += "skew(" + h + ", " + d + ") "), (1 !== f || 1 !== m) && (x += "scale(" + f + ", " + m + ") "), y.style[j] = x || "translate(0, 0)"
                },
                em = function(e, t) {
                    var r, i, n, o, s, a = t || this,
                        l = a.xPercent,
                        c = a.yPercent,
                        h = a.x,
                        d = a.y,
                        f = a.rotation,
                        m = a.skewX,
                        g = a.skewY,
                        v = a.scaleX,
                        y = a.scaleY,
                        b = a.target,
                        x = a.xOrigin,
                        w = a.yOrigin,
                        A = a.xOffset,
                        E = a.yOffset,
                        S = a.forceCSS,
                        T = parseFloat(h),
                        _ = parseFloat(d);
                    f = parseFloat(f), m = parseFloat(m), (g = parseFloat(g)) && (m += g = parseFloat(g), f += g), f || m ? (f *= p, m *= p, r = Math.cos(f) * v, i = Math.sin(f) * v, n = -(Math.sin(f - m) * y), o = Math.cos(f - m) * y, m && (g *= p, n *= s = Math.sqrt(1 + (s = Math.tan(m - g)) * s), o *= s, g && (r *= s = Math.sqrt(1 + (s = Math.tan(g)) * s), i *= s)), r = (0, u.E_)(r), i = (0, u.E_)(i), n = (0, u.E_)(n), o = (0, u.E_)(o)) : (r = v, o = y, i = n = 0), (T && !~(h + "").indexOf("px") || _ && !~(d + "").indexOf("px")) && (T = K(b, "x", h, "px"), _ = K(b, "y", d, "px")), (x || w || A || E) && (T = (0, u.E_)(T + x - (x * r + w * n) + A), _ = (0, u.E_)(_ + w - (x * i + w * o) + E)), (l || c) && (s = b.getBBox(), T = (0, u.E_)(T + l / 100 * s.width), _ = (0, u.E_)(_ + c / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + o + "," + T + "," + _ + ")", b.setAttribute("transform", s), S && (b.style[j] = s)
                },
                eg = function(e, t, r, i, n) {
                    var o, s, a = (0, u.vQ)(n),
                        l = parseFloat(n) * (a && ~n.indexOf("rad") ? d : 1) - i,
                        c = i + l + "deg";
                    return a && ("short" === (o = n.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360), "cw" === o && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === o && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), e._pt = s = new u.J7(e._pt, t, r, i, l, x), s.e = c, s.u = "deg", e._props.push(r), s
                },
                ev = function(e, t) {
                    for (var r in t) e[r] = t[r];
                    return e
                },
                ey = function(e, t, r) {
                    var i, n, o, s, a, l, c, d = ev({}, r._gsap),
                        p = r.style;
                    for (n in d.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), p[j] = t, i = ec(r, 1), Y(r, j), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[j], p[j] = t, i = ec(r, 1), p[j] = o), h)(o = d[n]) !== (s = i[n]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) && (a = (0, u.l_)(o) !== (c = (0, u.l_)(s)) ? K(r, n, o, c) : parseFloat(o), l = parseFloat(s), e._pt = new u.J7(e._pt, i, n, a, l - a, b), e._pt.u = c || 0, e._props.push(n));
                    ev(i, d)
                };
            (0, u.fA)("padding,margin,Width,Radius", function(e, t) {
                var r = "Right",
                    i = "Bottom",
                    n = "Left",
                    o = (t < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(function(r) {
                        return t < 2 ? e + r : "border" + r + e
                    });
                er[t > 1 ? "border" + e : e] = function(e, t, r, i, n) {
                    var s, a;
                    if (arguments.length < 4) return 5 === (a = (s = o.map(function(t) {
                        return J(e, t, r)
                    })).join(" ")).split(s[0]).length ? s[0] : a;
                    s = (i + "").split(" "), a = {}, o.forEach(function(e, t) {
                        return a[e] = s[t] = s[t] || s[(t - 1) / 2 | 0]
                    }), e.init(t, a, n)
                }
            });
            var eb = {
                name: "css",
                register: U,
                targetTest: function(e) {
                    return e.style && e.nodeType
                },
                init: function(e, t, r, i, n) {
                    var s, a, l, c, d, p, f, m, g, x, E, S, T, _, k, C, R = this._props,
                        M = e.style,
                        O = r.vars.startAt;
                    for (f in o || U(), this.styles = this.styles || D(e), C = this.styles.props, this.tween = r, t) {
                        if ("autoRound" !== f) {
                            if (a = t[f], !(u.wU[f] && (0, u.Zm)(f, t, r, i, e, n))) {
                                if (d = typeof a, p = er[f], "function" === d && (d = typeof(a = a.call(r, i, e, n))), "string" === d && ~a.indexOf("random(") && (a = (0, u.Vy)(a)), p) p(this, e, f, a, r) && (k = 1);
                                else if ("--" === f.substr(0, 2)) s = (getComputedStyle(e).getPropertyValue(f) + "").trim(), a += "", u.qA.lastIndex = 0, u.qA.test(s) || (m = (0, u.l_)(s), g = (0, u.l_)(a)), g ? m !== g && (s = K(e, f, s, g) + g) : m && (a += m), this.add(M, "setProperty", s, a, i, n, 0, 0, f), R.push(f), C.push(f, 0, M[f]);
                                else if ("undefined" !== d) {
                                    if (O && f in O ? (s = "function" == typeof O[f] ? O[f].call(r, i, e, n) : O[f], (0, u.vQ)(s) && ~s.indexOf("random(") && (s = (0, u.Vy)(s)), (0, u.l_)(s + "") || "auto" === s || (s += u.Yz.units[f] || (0, u.l_)(J(e, f)) || ""), "=" === (s + "").charAt(1) && (s = J(e, f))) : s = J(e, f), c = parseFloat(s), (x = "string" === d && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), l = parseFloat(a), f in y && ("autoAlpha" === f && (1 === c && "hidden" === J(e, "visibility") && l && (c = 0), C.push("visibility", 0, M.visibility), q(this, M, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), "scale" !== f && "transform" !== f && ~(f = y[f]).indexOf(",") && (f = f.split(",")[0])), E = f in h) {
                                        if (this.styles.save(f), "string" === d && "var(--" === a.substring(0, 6) && (l = parseFloat(a = B(e, a.substring(4, a.indexOf(")"))))), S || ((T = e._gsap).renderTransform && !t.parseTransform || ec(e, t.parseTransform), _ = !1 !== t.smoothOrigin && T.smooth, (S = this._pt = new u.J7(this._pt, M, j, 0, 1, T.renderTransform, T, 0, -1)).dep = 1), "scale" === f) this._pt = new u.J7(this._pt, T, "scaleY", T.scaleY, (x ? (0, u.B0)(T.scaleY, x + l) : l) - T.scaleY || 0, b), this._pt.u = 0, R.push("scaleY", f), f += "X";
                                        else if ("transformOrigin" === f) {
                                            C.push(I, 0, M[I]), a = ee(a), T.svg ? el(e, a, 0, _, 0, this) : ((g = parseFloat(a.split(" ")[2]) || 0) !== T.zOrigin && q(this, T, "zOrigin", T.zOrigin, g), q(this, M, f, eu(s), eu(a)));
                                            continue
                                        } else if ("svgOrigin" === f) {
                                            el(e, a, 1, _, 0, this);
                                            continue
                                        } else if (f in en) {
                                            eg(this, T, f, c, x ? (0, u.B0)(c, x + a) : a);
                                            continue
                                        } else if ("smoothOrigin" === f) {
                                            q(this, T, "smooth", T.smooth, a);
                                            continue
                                        } else if ("force3D" === f) {
                                            T[f] = a;
                                            continue
                                        } else if ("transform" === f) {
                                            ey(this, a, e);
                                            continue
                                        }
                                    } else f in M || (f = z(f) || f);
                                    if (E || (l || 0 === l) && (c || 0 === c) && !v.test(a) && f in M) m = (s + "").substr((c + "").length), l || (l = 0), g = (0, u.l_)(a) || (f in u.Yz.units ? u.Yz.units[f] : m), m !== g && (c = K(e, f, s, g)), this._pt = new u.J7(this._pt, E ? T : M, f, c, (x ? (0, u.B0)(c, x + l) : l) - c, E || "px" !== g && "zIndex" !== f || !1 === t.autoRound ? b : A), this._pt.u = g || 0, m !== g && "%" !== g && (this._pt.b = s, this._pt.r = w);
                                    else if (f in M) Z.call(this, e, f, s, x ? x + a : a);
                                    else if (f in e) this.add(e, f, s || e[f], x ? x + a : a, i, n);
                                    else if ("parseTransform" !== f) {
                                        (0, u.dg)(f, a);
                                        continue
                                    }
                                    E || (f in M ? C.push(f, 0, M[f]) : "function" == typeof e[f] ? C.push(f, 2, e[f]()) : C.push(f, 1, s || e[f])), R.push(f)
                                }
                            }
                        }
                    }
                    k && (0, u.St)(this)
                },
                render: function(e, t) {
                    if (t.tween._time || !l())
                        for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
                    else t.styles.revert()
                },
                get: J,
                aliases: y,
                getSetter: function(e, t, r) {
                    var i = y[t];
                    return i && 0 > i.indexOf(",") && (t = i), t in h && t !== I && (e._gsap.x || J(e, "x")) ? r && a === r ? "scale" === t ? C : k : (a = r || {}, "scale" === t ? R : M) : e.style && !(0, u.OF)(e.style[t]) ? T : ~t.indexOf("-") ? _ : (0, u.Dx)(e, t)
                },
                core: {
                    _removeProperty: Y,
                    _getMatrix: ea
                }
            };
            u.os.utils.checkPrefix = z, u.os.core.getStyleSaver = D,
                function(e, t, r, i) {
                    var n = (0, u.fA)(e + "," + t + "," + r, function(e) {
                        h[e] = 1
                    });
                    (0, u.fA)(t, function(e) {
                        u.Yz.units[e] = "deg", en[e] = 1
                    }), y[n[13]] = e + "," + t, (0, u.fA)(i, function(e) {
                        var t = e.split(":");
                        y[t[1]] = n[t[0]]
                    })
                }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), (0, u.fA)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
                    u.Yz.units[e] = "px"
                }), u.os.registerPlugin(eb);
            var ex = u.os.registerPlugin(eb) || u.os;
            ex.core.Tween
        },
        901: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let i = r(8229)._(r(2115)).default.createContext(null)
        },
        1120: function(e, t, r) {
            var i, n, o;
            "undefined" != typeof window && window, void 0 !== (n = "function" == typeof(i = function() {
                "use strict";

                function e() {}
                var t = e.prototype;
                return t.on = function(e, t) {
                    if (e && t) {
                        var r = this._events = this._events || {},
                            i = r[e] = r[e] || [];
                        return -1 == i.indexOf(t) && i.push(t), this
                    }
                }, t.once = function(e, t) {
                    if (e && t) {
                        this.on(e, t);
                        var r = this._onceEvents = this._onceEvents || {};
                        return (r[e] = r[e] || {})[t] = !0, this
                    }
                }, t.off = function(e, t) {
                    var r = this._events && this._events[e];
                    if (r && r.length) {
                        var i = r.indexOf(t);
                        return -1 != i && r.splice(i, 1), this
                    }
                }, t.emitEvent = function(e, t) {
                    var r = this._events && this._events[e];
                    if (r && r.length) {
                        r = r.slice(0), t = t || [];
                        for (var i = this._onceEvents && this._onceEvents[e], n = 0; n < r.length; n++) {
                            var o = r[n];
                            i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t)
                        }
                        return this
                    }
                }, t.allOff = function() {
                    delete this._events, delete this._onceEvents
                }, e
            }) ? i.call(t, r, t, e) : i) && (e.exports = n)
        },
        1193: (e, t) => {
            "use strict";

            function r(e) {
                var t;
                let {
                    config: r,
                    src: i,
                    width: n,
                    quality: o
                } = e, s = o || (null == (t = r.qualities) ? void 0 : t.reduce((e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
                return r.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + s + (i.startsWith("/_next/static/media/") ? "&dpl=dpl_FbSLCEPGN8y9Ki8UMmBK9rqq9AKp" : "")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            }), r.__next_img_default = !0;
            let i = r
        },
        1401: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => n
            });
            var i = r(3264);

            function n(e, t, r, n) {
                var o;
                return (o = class extends i.BKk {
                    constructor(o) {
                        for (let n in super({
                                vertexShader: t,
                                fragmentShader: r,
                                ...o
                            }), e) this.uniforms[n] = new i.nc$(e[n]), Object.defineProperty(this, n, {
                            get() {
                                return this.uniforms[n].value
                            },
                            set(e) {
                                this.uniforms[n].value = e
                            }
                        });
                        this.uniforms = i.LlO.clone(this.uniforms), null == n || n(this)
                    }
                }).key = i.cj9.generateUUID(), o
            }
        },
        1469: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return l
                },
                getImageProps: function() {
                    return a
                }
            });
            let i = r(8229),
                n = r(8883),
                o = r(3063),
                s = i._(r(1193));

            function a(e) {
                let {
                    props: t
                } = (0, n.getImgProps)(e, {
                    defaultLoader: s.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let l = o.Image
        },
        1915: (e, t, r) => {
            "use strict";
            r.d(t, {
                K1: () => i.K1
            }), r(6576), r(3809);
            var i = r(554),
                n = r(5155),
                o = r(2115);
            r(3266);
            var s = r(8706);
            (0, o.forwardRef)(({
                story: e,
                bridgeOptions: t,
                ...r
            }, i) => {
                if (!e) return console.error("Please provide a 'story' property to the StoryblokServerComponent"), null;
                if (globalThis.storyCache.has(e.uuid) && (e = globalThis.storyCache.get(e.uuid), globalThis.storyCache.delete(e.uuid)), "string" == typeof e.content) try {
                    e.content = JSON.parse(e.content)
                } catch (t) {
                    console.error("An error occurred while trying to parse the story content", t), e.content = {}
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a, {
                        ref: i,
                        blok: e.content,
                        ...r
                    }), (0, n.jsx)(s.default, {
                        story: e,
                        bridgeOptions: t
                    })]
                })
            });
            let a = (0, o.forwardRef)(({
                blok: e,
                ...t
            }, r) => {
                if (!e) return console.error("Please provide a 'blok' property to the StoryblokComponent"), (0, n.jsx)("div", {
                    children: "Please provide a blok property to the StoryblokServerComponent"
                });
                let i = c(e.component);
                if (i) return (0, n.jsx)(i, {
                    ref: r,
                    blok: e,
                    ...t
                });
                if (u()) {
                    let r = h();
                    return r ? (0, n.jsx)(r, {
                        blok: e,
                        ...t
                    }) : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("p", {
                            children: ["Component could not be found for blok", " ", (0, n.jsx)("strong", {
                                children: e.component
                            }), "! Is it configured correctly?"]
                        })
                    })
                }
                return (0, n.jsx)("div", {})
            });
            a.displayName = "StoryblokServerComponent";
            let l = new Map;
            globalThis.storyCache = globalThis.storyCache ? globalThis.storyCache : new Map;
            let c = e => l.has(e) ? l.get(e) : (console.error(`Component ${e} doesn't exist.`), !1),
                u = () => !1,
                h = () => null
        },
        1933: (e, t, r) => {
            "use strict";
            e.exports = r(6500)
        },
        2075: (e, t, r) => {
            "use strict";
            r.d(t, {
                Fh: () => i.Fh,
                c4: () => s,
                uh: () => o.u
            }), r(2115);
            var i = r(554);
            r(4425);
            var n = r(6576);
            r(9829), r(3809);
            var o = r(3840);
            r(3266);
            let s = n.a
        },
        2407: (e, t, r) => {
            "use strict";
            e.exports = r(6892)
        },
        2436: (e, t, r) => {
            "use strict";
            var i = r(2115),
                n = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                o = i.useState,
                s = i.useEffect,
                a = i.useLayoutEffect,
                l = i.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !n(e, r)
                } catch (e) {
                    return !0
                }
            }
            var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    i = o({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    n = i[0].inst,
                    u = i[1];
                return a(function() {
                    n.value = r, n.getSnapshot = t, c(n) && u({
                        inst: n
                    })
                }, [e, r, t]), s(function() {
                    return c(n) && u({
                        inst: n
                    }), e(function() {
                        c(n) && u({
                            inst: n
                        })
                    })
                }, [e]), l(r), r
            };
            t.useSyncExternalStore = void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : u
        },
        2464: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let i = r(8229)._(r(2115)).default.createContext({})
        },
        2757: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                formatUrl: function() {
                    return o
                },
                formatWithValidation: function() {
                    return a
                },
                urlObjectKeys: function() {
                    return s
                }
            });
            let i = r(6966)._(r(8859)),
                n = /https?|ftp|gopher|file/;

            function o(e) {
                let {
                    auth: t,
                    hostname: r
                } = e, o = e.protocol || "", s = e.pathname || "", a = e.hash || "", l = e.query || "", c = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? "[" + r + "]" : r), e.port && (c += ":" + e.port)), l && "object" == typeof l && (l = String(i.urlQueryToSearchParams(l)));
                let u = e.search || l && "?" + l || "";
                return o && !o.endsWith(":") && (o += ":"), e.slashes || (!o || n.test(o)) && !1 !== c ? (c = "//" + (c || ""), s && "/" !== s[0] && (s = "/" + s)) : c || (c = ""), a && "#" !== a[0] && (a = "#" + a), u && "?" !== u[0] && (u = "?" + u), "" + o + c + (s = s.replace(/[?#]/g, encodeURIComponent)) + (u = u.replace("#", "%23")) + a
            }
            let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(e) {
                return o(e)
            }
        },
        2810: (e, t, r) => {
            "use strict";

            function i(e, t, r) {
                return Math.max(e, Math.min(t, r))
            }
            r.d(t, {
                A: () => h
            });
            var n = class {
                    isRunning = !1;
                    value = 0;
                    from = 0;
                    to = 0;
                    currentTime = 0;
                    lerp;
                    duration;
                    easing;
                    onUpdate;
                    advance(e) {
                        if (!this.isRunning) return;
                        let t = !1;
                        if (this.duration && this.easing) {
                            this.currentTime += e;
                            let r = i(0, this.currentTime / this.duration, 1),
                                n = (t = r >= 1) ? 1 : this.easing(r);
                            this.value = this.from + (this.to - this.from) * n
                        } else if (this.lerp) {
                            var r, n, o;
                            this.value = (r = this.value, n = this.to, (1 - (o = 1 - Math.exp(-(60 * this.lerp) * e))) * r + o * n), Math.round(this.value) === this.to && (this.value = this.to, t = !0)
                        } else this.value = this.to, t = !0;
                        t && this.stop(), this.onUpdate ? .(this.value, t)
                    }
                    stop() {
                        this.isRunning = !1
                    }
                    fromTo(e, t, {
                        lerp: r,
                        duration: i,
                        easing: n,
                        onStart: o,
                        onUpdate: s
                    }) {
                        this.from = this.value = e, this.to = t, this.lerp = r, this.duration = i, this.easing = n, this.currentTime = 0, this.isRunning = !0, o ? .(), this.onUpdate = s
                    }
                },
                o = class {
                    constructor(e, t, {
                        autoResize: r = !0,
                        debounce: i = 250
                    } = {}) {
                        this.wrapper = e, this.content = t, r && (this.debouncedResize = function(e, t) {
                            let r;
                            return function(...i) {
                                let n = this;
                                clearTimeout(r), r = setTimeout(() => {
                                    r = void 0, e.apply(n, i)
                                }, t)
                            }
                        }(this.resize, i), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
                    }
                    width = 0;
                    height = 0;
                    scrollHeight = 0;
                    scrollWidth = 0;
                    debouncedResize;
                    wrapperResizeObserver;
                    contentResizeObserver;
                    destroy() {
                        this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
                    }
                    resize = () => {
                        this.onWrapperResize(), this.onContentResize()
                    };
                    onWrapperResize = () => {
                        this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
                    };
                    onContentResize = () => {
                        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
                    };
                    get limit() {
                        return {
                            x: this.scrollWidth - this.width,
                            y: this.scrollHeight - this.height
                        }
                    }
                },
                s = class {
                    events = {};
                    emit(e, ...t) {
                        let r = this.events[e] || [];
                        for (let e = 0, i = r.length; e < i; e++) r[e] ? .(...t)
                    }
                    on(e, t) {
                        return this.events[e] ? .push(t) || (this.events[e] = [t]), () => {
                            this.events[e] = this.events[e] ? .filter(e => t !== e)
                        }
                    }
                    off(e, t) {
                        this.events[e] = this.events[e] ? .filter(e => t !== e)
                    }
                    destroy() {
                        this.events = {}
                    }
                },
                a = 100 / 6,
                l = {
                    passive: !1
                },
                c = class {
                    constructor(e, t = {
                        wheelMultiplier: 1,
                        touchMultiplier: 1
                    }) {
                        this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onTouchMove, l), this.element.addEventListener("touchend", this.onTouchEnd, l)
                    }
                    touchStart = {
                        x: 0,
                        y: 0
                    };
                    lastDelta = {
                        x: 0,
                        y: 0
                    };
                    window = {
                        width: 0,
                        height: 0
                    };
                    emitter = new s;
                    on(e, t) {
                        return this.emitter.on(e, t)
                    }
                    destroy() {
                        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onTouchMove, l), this.element.removeEventListener("touchend", this.onTouchEnd, l)
                    }
                    onTouchStart = e => {
                        let {
                            clientX: t,
                            clientY: r
                        } = e.targetTouches ? e.targetTouches[0] : e;
                        this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
                            x: 0,
                            y: 0
                        }, this.emitter.emit("scroll", {
                            deltaX: 0,
                            deltaY: 0,
                            event: e
                        })
                    };
                    onTouchMove = e => {
                        let {
                            clientX: t,
                            clientY: r
                        } = e.targetTouches ? e.targetTouches[0] : e, i = -(t - this.touchStart.x) * this.options.touchMultiplier, n = -(r - this.touchStart.y) * this.options.touchMultiplier;
                        this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
                            x: i,
                            y: n
                        }, this.emitter.emit("scroll", {
                            deltaX: i,
                            deltaY: n,
                            event: e
                        })
                    };
                    onTouchEnd = e => {
                        this.emitter.emit("scroll", {
                            deltaX: this.lastDelta.x,
                            deltaY: this.lastDelta.y,
                            event: e
                        })
                    };
                    onWheel = e => {
                        let {
                            deltaX: t,
                            deltaY: r,
                            deltaMode: i
                        } = e, n = 1 === i ? a : 2 === i ? this.window.width : 1, o = 1 === i ? a : 2 === i ? this.window.height : 1;
                        t *= n, r *= o, t *= this.options.wheelMultiplier, r *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                            deltaX: t,
                            deltaY: r,
                            event: e
                        })
                    };
                    onWindowResize = () => {
                        this.window = {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }
                    }
                },
                u = e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                h = class {
                    _isScrolling = !1;
                    _isStopped = !1;
                    _isLocked = !1;
                    _preventNextNativeScrollEvent = !1;
                    _resetVelocityTimeout = null;
                    __rafID = null;
                    isTouching;
                    time = 0;
                    userData = {};
                    lastVelocity = 0;
                    velocity = 0;
                    direction = 0;
                    options;
                    targetScroll;
                    animatedScroll;
                    animate = new n;
                    emitter = new s;
                    dimensions;
                    virtualScroll;
                    constructor({
                        wrapper: e = window,
                        content: t = document.documentElement,
                        eventsTarget: r = e,
                        smoothWheel: i = !0,
                        syncTouch: n = !1,
                        syncTouchLerp: s = .075,
                        touchInertiaMultiplier: a = 35,
                        duration: l,
                        easing: h,
                        lerp: d = .1,
                        infinite: p = !1,
                        orientation: f = "vertical",
                        gestureOrientation: m = "vertical",
                        touchMultiplier: g = 1,
                        wheelMultiplier: v = 1,
                        autoResize: y = !0,
                        prevent: b,
                        virtualScroll: x,
                        overscroll: w = !0,
                        autoRaf: A = !1,
                        anchors: E = !1,
                        autoToggle: S = !1,
                        allowNestedScroll: T = !1,
                        __experimental__naiveDimensions: _ = !1
                    } = {}) {
                        window.lenisVersion = "1.3.4", e && e !== document.documentElement || (e = window), "number" == typeof l && "function" != typeof h ? h = u : "function" == typeof h && "number" != typeof l && (l = 1), this.options = {
                            wrapper: e,
                            content: t,
                            eventsTarget: r,
                            smoothWheel: i,
                            syncTouch: n,
                            syncTouchLerp: s,
                            touchInertiaMultiplier: a,
                            duration: l,
                            easing: h,
                            lerp: d,
                            infinite: p,
                            gestureOrientation: m,
                            orientation: f,
                            touchMultiplier: g,
                            wheelMultiplier: v,
                            autoResize: y,
                            prevent: b,
                            virtualScroll: x,
                            overscroll: w,
                            autoRaf: A,
                            anchors: E,
                            autoToggle: S,
                            allowNestedScroll: T,
                            __experimental__naiveDimensions: _
                        }, this.dimensions = new o(e, t, {
                            autoResize: y
                        }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                            capture: !0
                        }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new c(r, {
                            touchMultiplier: g,
                            wheelMultiplier: v
                        }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                            passive: !0
                        }), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
                    }
                    destroy() {
                        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                            capture: !0
                        }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
                    }
                    on(e, t) {
                        return this.emitter.on(e, t)
                    }
                    off(e, t) {
                        return this.emitter.off(e, t)
                    }
                    onScrollEnd = e => {
                        e instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || e.stopPropagation()
                    };
                    dispatchScrollendEvent = () => {
                        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                            bubbles: this.options.wrapper === window,
                            detail: {
                                lenisScrollEnd: !0
                            }
                        }))
                    };
                    onTransitionEnd = e => {
                        if (e.propertyName.includes("overflow")) {
                            let e = this.isHorizontal ? "overflow-x" : "overflow-y";
                            ["hidden", "clip"].includes(getComputedStyle(this.rootElement)[e]) ? this.stop() : this.start()
                        }
                    };
                    setScroll(e) {
                        this.isHorizontal ? this.options.wrapper.scrollTo({
                            left: e,
                            behavior: "instant"
                        }) : this.options.wrapper.scrollTo({
                            top: e,
                            behavior: "instant"
                        })
                    }
                    onClick = e => {
                        let t = e.composedPath().find(e => e instanceof HTMLAnchorElement && (e.getAttribute("href") ? .startsWith("#") || e.getAttribute("href") ? .startsWith("/#") || e.getAttribute("href") ? .startsWith("./#")));
                        if (t) {
                            let e = t.getAttribute("href");
                            if (e) {
                                let t = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
                                    r = `#${e.split("#")[1]}`;
                                ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(e) && (r = 0), this.scrollTo(r, t)
                            }
                        }
                    };
                    onPointerDown = e => {
                        1 === e.button && this.reset()
                    };
                    onVirtualScroll = e => {
                        if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e)) return;
                        let {
                            deltaX: t,
                            deltaY: r,
                            event: i
                        } = e;
                        if (this.emitter.emit("virtual-scroll", {
                                deltaX: t,
                                deltaY: r,
                                event: i
                            }), i.ctrlKey || i.lenisStopPropagation) return;
                        let n = i.type.includes("touch"),
                            o = i.type.includes("wheel");
                        this.isTouching = "touchstart" === i.type || "touchmove" === i.type;
                        let s = 0 === t && 0 === r;
                        if (this.options.syncTouch && n && "touchstart" === i.type && s && !this.isStopped && !this.isLocked) {
                            this.reset();
                            return
                        }
                        let a = "vertical" === this.options.gestureOrientation && 0 === r || "horizontal" === this.options.gestureOrientation && 0 === t;
                        if (s || a) return;
                        let l = i.composedPath();
                        l = l.slice(0, l.indexOf(this.rootElement));
                        let c = this.options.prevent;
                        if (l.find(e => e instanceof HTMLElement && ("function" == typeof c && c ? .(e) || e.hasAttribute ? .("data-lenis-prevent") || n && e.hasAttribute ? .("data-lenis-prevent-touch") || o && e.hasAttribute ? .("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(e, {
                                deltaX: t,
                                deltaY: r
                            })))) return;
                        if (this.isStopped || this.isLocked) {
                            i.preventDefault();
                            return
                        }
                        if (!(this.options.syncTouch && n || this.options.smoothWheel && o)) {
                            this.isScrolling = "native", this.animate.stop(), i.lenisStopPropagation = !0;
                            return
                        }
                        let u = r;
                        "both" === this.options.gestureOrientation ? u = Math.abs(r) > Math.abs(t) ? r : t : "horizontal" === this.options.gestureOrientation && (u = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && r > 0 || this.animatedScroll === this.limit && r < 0)) && (i.lenisStopPropagation = !0), i.preventDefault();
                        let h = n && this.options.syncTouch,
                            d = n && "touchend" === i.type && Math.abs(u) > 5;
                        d && (u = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + u, {
                            programmatic: !1,
                            ...h ? {
                                lerp: d ? this.options.syncTouchLerp : 1
                            } : {
                                lerp: this.options.lerp,
                                duration: this.options.duration,
                                easing: this.options.easing
                            }
                        })
                    };
                    resize() {
                        this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
                    }
                    emit() {
                        this.emitter.emit("scroll", this)
                    }
                    onNativeScroll = () => {
                        if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                            this._preventNextNativeScrollEvent = !1;
                            return
                        }
                        if (!1 === this.isScrolling || "native" === this.isScrolling) {
                            let e = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
                                this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                            }, 400))
                        }
                    };
                    reset() {
                        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
                    }
                    start() {
                        this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
                    }
                    stop() {
                        this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
                    }
                    raf = e => {
                        let t = e - (this.time || e);
                        this.time = e, this.animate.advance(.001 * t), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
                    };
                    scrollTo(e, {
                        offset: t = 0,
                        immediate: r = !1,
                        lock: n = !1,
                        duration: o = this.options.duration,
                        easing: s = this.options.easing,
                        lerp: a = this.options.lerp,
                        onStart: l,
                        onComplete: c,
                        force: h = !1,
                        programmatic: d = !0,
                        userData: p
                    } = {}) {
                        if (!this.isStopped && !this.isLocked || h) {
                            if ("string" == typeof e && ["top", "left", "start"].includes(e)) e = 0;
                            else if ("string" == typeof e && ["bottom", "right", "end"].includes(e)) e = this.limit;
                            else {
                                let r;
                                if ("string" == typeof e ? r = document.querySelector(e) : e instanceof HTMLElement && e ? .nodeType && (r = e), r) {
                                    if (this.options.wrapper !== window) {
                                        let e = this.rootElement.getBoundingClientRect();
                                        t -= this.isHorizontal ? e.left : e.top
                                    }
                                    let i = r.getBoundingClientRect();
                                    e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll
                                }
                            }
                            if ("number" == typeof e) {
                                if (e += t, e = Math.round(e), this.options.infinite) {
                                    if (d) {
                                        this.targetScroll = this.animatedScroll = this.scroll;
                                        let t = e - this.animatedScroll;
                                        t > this.limit / 2 ? e -= this.limit : t < -this.limit / 2 && (e += this.limit)
                                    }
                                } else e = i(0, e, this.limit);
                                if (e === this.targetScroll) {
                                    l ? .(this), c ? .(this);
                                    return
                                }
                                if (this.userData = p ? ? {}, r) {
                                    this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                        this.dispatchScrollendEvent()
                                    });
                                    return
                                }
                                d || (this.targetScroll = e), "number" == typeof o && "function" != typeof s ? s = u : "function" == typeof s && "number" != typeof o && (o = 1), this.animate.fromTo(this.animatedScroll, e, {
                                    duration: o,
                                    easing: s,
                                    lerp: a,
                                    onStart: () => {
                                        n && (this.isLocked = !0), this.isScrolling = "smooth", l ? .(this)
                                    },
                                    onUpdate: (e, t) => {
                                        this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), d && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), c ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                            this.dispatchScrollendEvent()
                                        }), this.preventNextNativeScrollEvent())
                                    }
                                })
                            }
                        }
                    }
                    preventNextNativeScrollEvent() {
                        this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                            this._preventNextNativeScrollEvent = !1
                        })
                    }
                    checkNestedScroll(e, {
                        deltaX: t,
                        deltaY: r
                    }) {
                        let i, n, o, s, a, l, c, u, h, d, p, f, m, g;
                        let v = Date.now(),
                            y = e._lenis ? ? = {},
                            b = this.options.gestureOrientation;
                        if (v - (y.time ? ? 0) > 2e3) {
                            y.time = Date.now();
                            let t = window.getComputedStyle(e);
                            y.computedStyle = t;
                            let r = t.overflowX,
                                h = t.overflowY;
                            if (i = ["auto", "overlay", "scroll"].includes(r), n = ["auto", "overlay", "scroll"].includes(h), y.hasOverflowX = i, y.hasOverflowY = n, !i && !n || "vertical" === b && !n || "horizontal" === b && !i) return !1;
                            a = e.scrollWidth, l = e.scrollHeight, c = e.clientWidth, u = e.clientHeight, o = a > c, s = l > u, y.isScrollableX = o, y.isScrollableY = s, y.scrollWidth = a, y.scrollHeight = l, y.clientWidth = c, y.clientHeight = u
                        } else o = y.isScrollableX, s = y.isScrollableY, i = y.hasOverflowX, n = y.hasOverflowY, a = y.scrollWidth, l = y.scrollHeight, c = y.clientWidth, u = y.clientHeight;
                        if (!i && !n || !o && !s || "vertical" === b && (!n || !s) || "horizontal" === b && (!i || !o) || ("horizontal" === b ? h = "x" : "vertical" === b ? h = "y" : (0 !== t && i && o && (h = "x"), 0 !== r && n && s && (h = "y")), !h)) return !1;
                        if ("x" === h) d = e.scrollLeft, p = a - c, f = t, m = i, g = o;
                        else {
                            if ("y" !== h) return !1;
                            d = e.scrollTop, p = l - u, f = r, m = n, g = s
                        }
                        return (f > 0 ? d < p : d > 0) && m && g
                    }
                    get rootElement() {
                        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
                    }
                    get limit() {
                        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                    }
                    get isHorizontal() {
                        return "horizontal" === this.options.orientation
                    }
                    get actualScroll() {
                        let e = this.options.wrapper;
                        return this.isHorizontal ? e.scrollX ? ? e.scrollLeft : e.scrollY ? ? e.scrollTop
                    }
                    get scroll() {
                        var e;
                        return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll
                    }
                    get progress() {
                        return 0 === this.limit ? 1 : this.scroll / this.limit
                    }
                    get isScrolling() {
                        return this._isScrolling
                    }
                    set isScrolling(e) {
                        this._isScrolling !== e && (this._isScrolling = e, this.updateClassName())
                    }
                    get isStopped() {
                        return this._isStopped
                    }
                    set isStopped(e) {
                        this._isStopped !== e && (this._isStopped = e, this.updateClassName())
                    }
                    get isLocked() {
                        return this._isLocked
                    }
                    set isLocked(e) {
                        this._isLocked !== e && (this._isLocked = e, this.updateClassName())
                    }
                    get isSmooth() {
                        return "smooth" === this.isScrolling
                    }
                    get className() {
                        let e = "lenis";
                        return this.options.autoToggle && (e += " lenis-autoToggle"), this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), "smooth" === this.isScrolling && (e += " lenis-smooth"), e
                    }
                    updateClassName() {
                        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
                    }
                    cleanUpClassName() {
                        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
                    }
                }
        },
        2948: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        3005: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d
            });
            var i = r(8637),
                n = r.n(i),
                o = r(2115),
                s = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, r, i) {
                        return r && e(t.prototype, r), i && e(t, i), t
                    }
                }(),
                a = "undefined" != typeof window ? r(4233) : void 0,
                l = {
                    children: !0,
                    direction: !0,
                    options: !0,
                    recognizeWith: !0,
                    vertical: !0
                },
                c = {
                    action: "tap press",
                    onDoubleTap: "doubletap",
                    onPan: "pan",
                    onPanCancel: "pancancel",
                    onPanEnd: "panend",
                    onPanStart: "panstart",
                    onPinch: "pinch",
                    onPinchCancel: "pinchcancel",
                    onPinchEnd: "pinchend",
                    onPinchIn: "pinchin",
                    onPinchOut: "pinchout",
                    onPinchStart: "pinchstart",
                    onPress: "press",
                    onPressUp: "pressup",
                    onRotate: "rotate",
                    onRotateCancel: "rotatecancel",
                    onRotateEnd: "rotateend",
                    onRotateMove: "rotatemove",
                    onRotateStart: "rotatestart",
                    onSwipe: "swipe",
                    onSwipeRight: "swiperight",
                    onSwipeLeft: "swipeleft",
                    onSwipeUp: "swipeup",
                    onSwipeDown: "swipedown",
                    onTap: "tap"
                };

            function u(e, t) {
                t.hasOwnProperty("vertical") && console.warn("vertical is deprecated, please use `direction` instead");
                var r = t.direction;
                if (r || t.hasOwnProperty("vertical")) {
                    var i = r || (t.vertical ? "DIRECTION_ALL" : "DIRECTION_HORIZONTAL");
                    e.get("pan").set({
                        direction: a[i]
                    }), e.get("swipe").set({
                        direction: a[i]
                    })
                }
                t.options && Object.keys(t.options).forEach(function(r) {
                    if ("recognizers" === r) Object.keys(t.options.recognizers).forEach(function(r) {
                        var i = e.get(r);
                        i.set(t.options.recognizers[r]), t.options.recognizers[r].requireFailure && i.requireFailure(t.options.recognizers[r].requireFailure)
                    }, this);
                    else {
                        var i = {};
                        i[r] = t.options[r], e.set(i)
                    }
                }, this), t.recognizeWith && Object.keys(t.recognizeWith).forEach(function(r) {
                    e.get(r).recognizeWith(t.recognizeWith[r])
                }, this), Object.keys(t).forEach(function(r) {
                    var i = c[r];
                    i && (e.off(i), e.on(i, t[r]))
                })
            }
            Object.keys(c).forEach(function(e) {
                l[e] = !0
            });
            var h = function(e) {
                function t() {
                    return ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t && ("object" == typeof t || "function" == typeof t) ? t : e
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), s(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.hammer = new a(this.domElement), u(this.hammer, this.props)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.hammer && u(this.hammer, this.props)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.hammer && (this.hammer.stop(), this.hammer.destroy()), this.hammer = null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {};
                        Object.keys(this.props).forEach(function(t) {
                            l[t] || (e[t] = this.props[t])
                        }, this);
                        var t = this;
                        return e.ref = function(e) {
                            t.props.ref && t.props.ref(e), t.domElement = e
                        }, o.cloneElement(o.Children.only(this.props.children), e)
                    }
                }]), t
            }(o.Component);
            h.displayName = "Hammer", h.propTypes = {
                className: n().string
            };
            let d = h
        },
        3063: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            let i = r(8229),
                n = r(6966),
                o = r(5155),
                s = n._(r(2115)),
                a = i._(r(7650)),
                l = i._(r(5564)),
                c = r(8883),
                u = r(5840),
                h = r(6752);
            r(3230);
            let d = r(901),
                p = i._(r(1193)),
                f = r(6654),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function g(e, t, r, i, n, o, s) {
                let a = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && n(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let i = !1,
                                n = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => i,
                                isPropagationStopped: () => n,
                                persist: () => {},
                                preventDefault: () => {
                                    i = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    n = !0, t.stopPropagation()
                                }
                            })
                        }(null == i ? void 0 : i.current) && i.current(e)
                    }
                }))
            }

            function v(e) {
                return s.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let y = (0, s.forwardRef)((e, t) => {
                let {
                    src: r,
                    srcSet: i,
                    sizes: n,
                    height: a,
                    width: l,
                    decoding: c,
                    className: u,
                    style: h,
                    fetchPriority: d,
                    placeholder: p,
                    loading: m,
                    unoptimized: y,
                    fill: b,
                    onLoadRef: x,
                    onLoadingCompleteRef: w,
                    setBlurComplete: A,
                    setShowAltText: E,
                    sizesInput: S,
                    onLoad: T,
                    onError: _,
                    ...k
                } = e, C = (0, s.useCallback)(e => {
                    e && (_ && (e.src = e.src), e.complete && g(e, p, x, w, A, y, S))
                }, [r, p, x, w, A, _, y, S]), R = (0, f.useMergedRef)(t, C);
                return (0, o.jsx)("img", { ...k,
                    ...v(d),
                    loading: m,
                    width: l,
                    height: a,
                    decoding: c,
                    "data-nimg": b ? "fill" : "1",
                    className: u,
                    style: h,
                    sizes: n,
                    srcSet: i,
                    src: r,
                    ref: R,
                    onLoad: e => {
                        g(e.currentTarget, p, x, w, A, y, S)
                    },
                    onError: e => {
                        E(!0), "empty" !== p && A(!0), _ && _(e)
                    }
                })
            });

            function b(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: r
                } = e, i = {
                    as: "image",
                    imageSrcSet: r.srcSet,
                    imageSizes: r.sizes,
                    crossOrigin: r.crossOrigin,
                    referrerPolicy: r.referrerPolicy,
                    ...v(r.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(r.src, i), null) : (0, o.jsx)(l.default, {
                    children: (0, o.jsx)("link", {
                        rel: "preload",
                        href: r.srcSet ? void 0 : r.src,
                        ...i
                    }, "__nimg-" + r.src + r.srcSet + r.sizes)
                })
            }
            let x = (0, s.forwardRef)((e, t) => {
                let r = (0, s.useContext)(d.RouterContext),
                    i = (0, s.useContext)(h.ImageConfigContext),
                    n = (0, s.useMemo)(() => {
                        var e;
                        let t = m || i || u.imageConfigDefault,
                            r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
                            n = t.deviceSizes.sort((e, t) => e - t),
                            o = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
                        return { ...t,
                            allSizes: r,
                            deviceSizes: n,
                            qualities: o
                        }
                    }, [i]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = e,
                    f = (0, s.useRef)(a);
                (0, s.useEffect)(() => {
                    f.current = a
                }, [a]);
                let g = (0, s.useRef)(l);
                (0, s.useEffect)(() => {
                    g.current = l
                }, [l]);
                let [v, x] = (0, s.useState)(!1), [w, A] = (0, s.useState)(!1), {
                    props: E,
                    meta: S
                } = (0, c.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: n,
                    blurComplete: v,
                    showAltText: w
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(y, { ...E,
                        unoptimized: S.unoptimized,
                        placeholder: S.placeholder,
                        fill: S.fill,
                        onLoadRef: f,
                        onLoadingCompleteRef: g,
                        setBlurComplete: x,
                        setShowAltText: A,
                        sizesInput: e.sizes,
                        ref: t
                    }), S.priority ? (0, o.jsx)(b, {
                        isAppRouter: !r,
                        imgAttributes: E
                    }) : null]
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3064: (e, t, r) => {
            "use strict";
            r.d(t, {
                Do: () => o,
                Fh: () => p
            });
            var i = r(7431),
                n = r(3264);
            let o = /\bvoid\s+main\s*\(\s*\)\s*{/g;

            function s(e) {
                return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function(e, t) {
                    let r = i.ShaderChunk[t];
                    return r ? s(r) : e
                })
            }
            let a = [];
            for (let e = 0; e < 256; e++) a[e] = (e < 16 ? "0" : "") + e.toString(16);
            let l = Object.assign || function() {
                    let e = arguments[0];
                    for (let t = 1, r = arguments.length; t < r; t++) {
                        let r = arguments[t];
                        if (r)
                            for (let t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                },
                c = Date.now(),
                u = new WeakMap,
                h = new Map,
                d = 1e10;

            function p(e, t) {
                let r = function(e) {
                        let t = JSON.stringify(e, m),
                            r = v.get(t);
                        return null == r && v.set(t, r = ++g), r
                    }(t),
                    i = u.get(e);
                if (i || u.set(e, i = Object.create(null)), i[r]) return new i[r];
                let o = `_onBeforeCompile${r}`,
                    y = function(i, n) {
                        e.onBeforeCompile.call(this, i, n);
                        let a = this.customProgramCacheKey() + "|" + i.vertexShader + "|" + i.fragmentShader,
                            u = h[a];
                        if (!u) {
                            let e = function(e, {
                                vertexShader: t,
                                fragmentShader: r
                            }, i, n) {
                                let {
                                    vertexDefs: o,
                                    vertexMainIntro: a,
                                    vertexMainOutro: l,
                                    vertexTransform: c,
                                    fragmentDefs: u,
                                    fragmentMainIntro: h,
                                    fragmentMainOutro: d,
                                    fragmentColorTransform: p,
                                    customRewriter: m,
                                    timeUniform: g
                                } = i;
                                if (o = o || "", a = a || "", l = l || "", u = u || "", h = h || "", d = d || "", (c || m) && (t = s(t)), (p || m) && (r = s(r = r.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"))), m) {
                                    let e = m({
                                        vertexShader: t,
                                        fragmentShader: r
                                    });
                                    t = e.vertexShader, r = e.fragmentShader
                                }
                                if (p) {
                                    let e = [];
                                    r = r.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, t => (e.push(t), "")), d = `${p}
${e.join("\n")}
${d}`
                                }
                                if (g) {
                                    let e = `
uniform float ${g};
`;
                                    o = e + o, u = e + u
                                }
                                return c && (t = `vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${t}
`, o = `${o}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`, a = `
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`, t = t.replace(/\b(position|normal|uv)\b/g, (e, t, r, i) => /\battribute\s+vec[23]\s+$/.test(i.substr(0, r)) ? t : `troika_${t}_${n}`), e.map && e.map.channel > 0 || (t = t.replace(/\bMAP_UV\b/g, `troika_uv_${n}`))), {
                                    vertexShader: t = f(t, n, o, a, l),
                                    fragmentShader: r = f(r, n, u, h, d)
                                }
                            }(this, i, t, r);
                            u = h[a] = e
                        }
                        i.vertexShader = u.vertexShader, i.fragmentShader = u.fragmentShader, l(i.uniforms, this.uniforms), t.timeUniform && (i.uniforms[t.timeUniform] = {
                            get value() {
                                return Date.now() - c
                            }
                        }), this[o] && this[o](i)
                    },
                    b = function() {
                        return x(t.chained ? e : e.clone())
                    },
                    x = function(i) {
                        let n = Object.create(i, w);
                        return Object.defineProperty(n, "baseMaterial", {
                            value: e
                        }), Object.defineProperty(n, "id", {
                            value: d++
                        }), n.uuid = function() {
                            let e = 0xffffffff * Math.random() | 0,
                                t = 0xffffffff * Math.random() | 0,
                                r = 0xffffffff * Math.random() | 0,
                                i = 0xffffffff * Math.random() | 0;
                            return (a[255 & e] + a[e >> 8 & 255] + a[e >> 16 & 255] + a[e >> 24 & 255] + "-" + a[255 & t] + a[t >> 8 & 255] + "-" + a[t >> 16 & 15 | 64] + a[t >> 24 & 255] + "-" + a[63 & r | 128] + a[r >> 8 & 255] + "-" + a[r >> 16 & 255] + a[r >> 24 & 255] + a[255 & i] + a[i >> 8 & 255] + a[i >> 16 & 255] + a[i >> 24 & 255]).toUpperCase()
                        }(), n.uniforms = l({}, i.uniforms, t.uniforms), n.defines = l({}, i.defines, t.defines), n.defines[`TROIKA_DERIVED_MATERIAL_${r}`] = "", n.extensions = l({}, i.extensions, t.extensions), n._listeners = void 0, n
                    },
                    w = {
                        constructor: {
                            value: b
                        },
                        isDerivedMaterial: {
                            value: !0
                        },
                        type: {
                            get: () => e.type,
                            set: t => {
                                e.type = t
                            }
                        },
                        isDerivedFrom: {
                            writable: !0,
                            configurable: !0,
                            value: function(e) {
                                let t = this.baseMaterial;
                                return e === t || t.isDerivedMaterial && t.isDerivedFrom(e) || !1
                            }
                        },
                        customProgramCacheKey: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                return e.customProgramCacheKey() + "|" + r
                            }
                        },
                        onBeforeCompile: {
                            get: () => y,
                            set(e) {
                                this[o] = e
                            }
                        },
                        copy: {
                            writable: !0,
                            configurable: !0,
                            value: function(t) {
                                return e.copy.call(this, t), e.isShaderMaterial || e.isDerivedMaterial || (l(this.extensions, t.extensions), l(this.defines, t.defines), l(this.uniforms, n.LlO.clone(t.uniforms))), this
                            }
                        },
                        clone: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                return x(new e.constructor).copy(this)
                            }
                        },
                        getDepthMaterial: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                let r = this._depthMaterial;
                                return r || ((r = this._depthMaterial = p(e.isDerivedMaterial ? e.getDepthMaterial() : new n.CSG({
                                    depthPacking: n.N5j
                                }), t)).defines.IS_DEPTH_MATERIAL = "", r.uniforms = this.uniforms), r
                            }
                        },
                        getDistanceMaterial: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                let r = this._distanceMaterial;
                                return r || ((r = this._distanceMaterial = p(e.isDerivedMaterial ? e.getDistanceMaterial() : new n.aVO, t)).defines.IS_DISTANCE_MATERIAL = "", r.uniforms = this.uniforms), r
                            }
                        },
                        dispose: {
                            writable: !0,
                            configurable: !0,
                            value() {
                                let {
                                    _depthMaterial: t,
                                    _distanceMaterial: r
                                } = this;
                                t && t.dispose(), r && r.dispose(), e.dispose.call(this)
                            }
                        }
                    };
                return i[r] = b, new b
            }

            function f(e, t, r, i, n) {
                return (i || n || r) && (e = e.replace(o, `
${r}
void troikaOrigMain${t}() {`) + `
void main() {
  ${i}
  troikaOrigMain${t}();
  ${n}
}`), e
            }

            function m(e, t) {
                return "uniforms" === e ? void 0 : "function" == typeof t ? t.toString() : t
            }
            let g = 0,
                v = new Map,
                y = `
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`,
                b = `
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`,
                x = `
uniform vec3 dashing;
varying float bezierT;
`,
                w = `
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`,
                A = null,
                E = new n._4j({
                    color: 0xffffff,
                    side: n.$EB
                });
            class S extends n.eaF {
                static getGeometry() {
                    return A || (A = new n.Ho_(1, 1, 1, 6, 64).translate(0, .5, 0))
                }
                constructor() {
                    super(S.getGeometry(), E), this.pointA = new n.Pq0, this.controlA = new n.Pq0, this.controlB = new n.Pq0, this.pointB = new n.Pq0, this.radius = .01, this.dashArray = new n.I9Y, this.dashOffset = 0, this.frustumCulled = !1
                }
                get material() {
                    let e = this._derivedMaterial,
                        t = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = E.clone());
                    return (!e || e.baseMaterial !== t) && (e = this._derivedMaterial = p(t, {
                        chained: !0,
                        uniforms: {
                            pointA: {
                                value: new n.Pq0
                            },
                            controlA: {
                                value: new n.Pq0
                            },
                            controlB: {
                                value: new n.Pq0
                            },
                            pointB: {
                                value: new n.Pq0
                            },
                            radius: {
                                value: .01
                            },
                            dashing: {
                                value: new n.Pq0
                            }
                        },
                        vertexDefs: y,
                        vertexTransform: b,
                        fragmentDefs: x,
                        fragmentMainIntro: w
                    }), t.addEventListener("dispose", function r() {
                        t.removeEventListener("dispose", r), e.dispose()
                    })), e
                }
                set material(e) {
                    this._baseMaterial = e
                }
                get customDepthMaterial() {
                    return this.material.getDepthMaterial()
                }
                set customDepthMaterial(e) {}
                get customDistanceMaterial() {
                    return this.material.getDistanceMaterial()
                }
                set customDistanceMaterial(e) {}
                onBeforeRender() {
                    let {
                        uniforms: e
                    } = this.material, {
                        pointA: t,
                        controlA: r,
                        controlB: i,
                        pointB: n,
                        radius: o,
                        dashArray: s,
                        dashOffset: a
                    } = this;
                    e.pointA.value.copy(t), e.controlA.value.copy(r), e.controlB.value.copy(i), e.pointB.value.copy(n), e.radius.value = o, e.dashing.value.set(s.x, s.y, a || 0)
                }
                raycast() {}
            }
        },
        3096: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wx: () => u
            });
            var i = r(2115),
                n = Object.defineProperty,
                o = (e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                s = new Map,
                a = new WeakMap,
                l = 0,
                c = void 0;

            function u() {
                var e;
                let {
                    threshold: t,
                    delay: r,
                    trackVisibility: n,
                    rootMargin: o,
                    root: u,
                    triggerOnce: h,
                    skip: d,
                    initialInView: p,
                    fallbackInView: f,
                    onChange: m
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [g, v] = i.useState(null), y = i.useRef(m), [b, x] = i.useState({
                    inView: !!p,
                    entry: void 0
                });
                y.current = m, i.useEffect(() => {
                    let e;
                    if (!d && g) return e = function(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c;
                        if (void 0 === window.IntersectionObserver && void 0 !== i) {
                            let n = e.getBoundingClientRect();
                            return t(i, {
                                isIntersecting: i,
                                target: e,
                                intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
                                time: 0,
                                boundingClientRect: n,
                                intersectionRect: n,
                                rootBounds: n
                            }), () => {}
                        }
                        let {
                            id: n,
                            observer: o,
                            elements: u
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var r;
                                    return `${t}_${"root"===t?(r=e.root)?(a.has(r)||(l+=1,a.set(r,l.toString())),a.get(r)):"0":e[t]}`
                                }).toString(),
                                r = s.get(t);
                            if (!r) {
                                let i;
                                let n = new Map,
                                    o = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var r;
                                            let o = t.isIntersecting && i.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (r = n.get(t.target)) || r.forEach(e => {
                                                e(o, t)
                                            })
                                        })
                                    }, e);
                                i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
                                    id: t,
                                    observer: o,
                                    elements: n
                                }, s.set(t, r)
                            }
                            return r
                        }(r), h = u.get(e) || [];
                        return u.has(e) || u.set(e, h), h.push(t), o.observe(e),
                            function() {
                                h.splice(h.indexOf(t), 1), 0 === h.length && (u.delete(e), o.unobserve(e)), 0 === u.size && (o.disconnect(), s.delete(n))
                            }
                    }(g, (t, r) => {
                        x({
                            inView: t,
                            entry: r
                        }), y.current && y.current(t, r), r.isIntersecting && h && e && (e(), e = void 0)
                    }, {
                        root: u,
                        rootMargin: o,
                        threshold: t,
                        trackVisibility: n,
                        delay: r
                    }, f), () => {
                        e && e()
                    }
                }, [Array.isArray(t) ? t.toString() : t, g, u, o, h, d, n, f, r]);
                let w = null == (e = b.entry) ? void 0 : e.target,
                    A = i.useRef(void 0);
                g || !w || h || d || A.current === w || (A.current = w, x({
                    inView: !!p,
                    entry: void 0
                }));
                let E = [v, b.inView, b.entry];
                return E.ref = E[0], E.inView = E[1], E.entry = E[2], E
            }
            i.Component
        },
        3160: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => m
            });
            class i {
                constructor(e, t, r, n, o = "div") {
                    this.parent = e, this.object = t, this.property = r, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement(o), this.domElement.classList.add("controller"), this.domElement.classList.add(n), this.$name = document.createElement("div"), this.$name.classList.add("name"), i.nextNameID = i.nextNameID || 0, this.$name.id = `lil-gui-name-${++i.nextNameID}`, this.$widget = document.createElement("div"), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", e => e.stopPropagation()), this.domElement.addEventListener("keyup", e => e.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(r)
                }
                name(e) {
                    return this._name = e, this.$name.textContent = e, this
                }
                onChange(e) {
                    return this._onChange = e, this
                }
                _callOnChange() {
                    this.parent._callOnChange(this), void 0 !== this._onChange && this._onChange.call(this, this.getValue()), this._changed = !0
                }
                onFinishChange(e) {
                    return this._onFinishChange = e, this
                }
                _callOnFinishChange() {
                    this._changed && (this.parent._callOnFinishChange(this), void 0 !== this._onFinishChange && this._onFinishChange.call(this, this.getValue())), this._changed = !1
                }
                reset() {
                    return this.setValue(this.initialValue), this._callOnFinishChange(), this
                }
                enable(e = !0) {
                    return this.disable(!e)
                }
                disable(e = !0) {
                    return e === this._disabled || (this._disabled = e, this.domElement.classList.toggle("disabled", e), this.$disable.toggleAttribute("disabled", e)), this
                }
                show(e = !0) {
                    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this
                }
                hide() {
                    return this.show(!1)
                }
                options(e) {
                    let t = this.parent.add(this.object, this.property, e);
                    return t.name(this._name), this.destroy(), t
                }
                min(e) {
                    return this
                }
                max(e) {
                    return this
                }
                step(e) {
                    return this
                }
                decimals(e) {
                    return this
                }
                listen(e = !0) {
                    return this._listening = e, void 0 !== this._listenCallbackID && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this
                }
                _listenCallback() {
                    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
                    let e = this.save();
                    e !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = e
                }
                getValue() {
                    return this.object[this.property]
                }
                setValue(e) {
                    return this.getValue() !== e && (this.object[this.property] = e, this._callOnChange(), this.updateDisplay()), this
                }
                updateDisplay() {
                    return this
                }
                load(e) {
                    return this.setValue(e), this._callOnFinishChange(), this
                }
                save() {
                    return this.getValue()
                }
                destroy() {
                    this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement)
                }
            }
            class n extends i {
                constructor(e, t, r) {
                    super(e, t, r, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
                        this.setValue(this.$input.checked), this._callOnFinishChange()
                    }), this.$disable = this.$input, this.updateDisplay()
                }
                updateDisplay() {
                    return this.$input.checked = this.getValue(), this
                }
            }

            function o(e) {
                let t, r;
                return (t = e.match(/(#|0x)?([a-f0-9]{6})/i)) ? r = t[2] : (t = e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? r = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (r = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), !!r && "#" + r
            }
            let s = {
                    isPrimitive: !0,
                    match: e => "number" == typeof e,
                    fromHexString: e => parseInt(e.substring(1), 16),
                    toHexString: e => "#" + e.toString(16).padStart(6, 0)
                },
                a = [{
                    isPrimitive: !0,
                    match: e => "string" == typeof e,
                    fromHexString: o,
                    toHexString: o
                }, s, {
                    isPrimitive: !1,
                    match: e => Array.isArray(e),
                    fromHexString(e, t, r = 1) {
                        let i = s.fromHexString(e);
                        t[0] = (i >> 16 & 255) / 255 * r, t[1] = (i >> 8 & 255) / 255 * r, t[2] = (255 & i) / 255 * r
                    },
                    toHexString([e, t, r], i = 1) {
                        let n = e * (i = 255 / i) << 16 ^ t * i << 8 ^ r * i << 0;
                        return s.toHexString(n)
                    }
                }, {
                    isPrimitive: !1,
                    match: e => Object(e) === e,
                    fromHexString(e, t, r = 1) {
                        let i = s.fromHexString(e);
                        t.r = (i >> 16 & 255) / 255 * r, t.g = (i >> 8 & 255) / 255 * r, t.b = (255 & i) / 255 * r
                    },
                    toHexString({
                        r: e,
                        g: t,
                        b: r
                    }, i = 1) {
                        let n = e * (i = 255 / i) << 16 ^ t * i << 8 ^ r * i << 0;
                        return s.toHexString(n)
                    }
                }];
            class l extends i {
                constructor(e, t, r, i) {
                    var n;
                    super(e, t, r, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (n = this.initialValue, a.find(e => e.match(n))), this._rgbScale = i, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
                        this._setValueFromHexString(this.$input.value)
                    }), this.$input.addEventListener("blur", () => {
                        this._callOnFinishChange()
                    }), this.$text.addEventListener("input", () => {
                        let e = o(this.$text.value);
                        e && this._setValueFromHexString(e)
                    }), this.$text.addEventListener("focus", () => {
                        this._textFocused = !0, this.$text.select()
                    }), this.$text.addEventListener("blur", () => {
                        this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange()
                    }), this.$disable = this.$text, this.updateDisplay()
                }
                reset() {
                    return this._setValueFromHexString(this._initialValueHexString), this
                }
                _setValueFromHexString(e) {
                    if (this._format.isPrimitive) {
                        let t = this._format.fromHexString(e);
                        this.setValue(t)
                    } else this._format.fromHexString(e, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay()
                }
                save() {
                    return this._format.toHexString(this.getValue(), this._rgbScale)
                }
                load(e) {
                    return this._setValueFromHexString(e), this._callOnFinishChange(), this
                }
                updateDisplay() {
                    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this
                }
            }
            class c extends i {
                constructor(e, t, r) {
                    super(e, t, r, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", e => {
                        e.preventDefault(), this.getValue().call(this.object), this._callOnChange()
                    }), this.$button.addEventListener("touchstart", () => {}, {
                        passive: !0
                    }), this.$disable = this.$button
                }
            }
            class u extends i {
                constructor(e, t, r, i, n, o) {
                    super(e, t, r, "number"), this._initInput(), this.min(i), this.max(n);
                    let s = void 0 !== o;
                    this.step(s ? o : this._getImplicitStep(), s), this.updateDisplay()
                }
                decimals(e) {
                    return this._decimals = e, this.updateDisplay(), this
                }
                min(e) {
                    return this._min = e, this._onUpdateMinMax(), this
                }
                max(e) {
                    return this._max = e, this._onUpdateMinMax(), this
                }
                step(e, t = !0) {
                    return this._step = e, this._stepExplicit = t, this
                }
                updateDisplay() {
                    let e = this.getValue();
                    if (this._hasSlider) {
                        let t = (e - this._min) / (this._max - this._min);
                        t = Math.max(0, Math.min(t, 1)), this.$fill.style.width = 100 * t + "%"
                    }
                    return this._inputFocused || (this.$input.value = void 0 === this._decimals ? e : e.toFixed(this._decimals)), this
                }
                _initInput() {
                    this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
                    let e = e => {
                            let t = parseFloat(this.$input.value);
                            isNaN(t) || (this._snapClampSetValue(t + e), this.$input.value = this.getValue())
                        },
                        t = !1,
                        r, i, n, o, s, a = e => {
                            if (t) {
                                let n = e.clientX - r;
                                Math.abs(e.clientY - i) > 5 ? (e.preventDefault(), this.$input.blur(), t = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(n) > 5 && l()
                            }
                            if (!t) {
                                let t = e.clientY - n;
                                s -= t * this._step * this._arrowKeyMultiplier(e), o + s > this._max ? s = this._max - o : o + s < this._min && (s = this._min - o), this._snapClampSetValue(o + s)
                            }
                            n = e.clientY
                        },
                        l = () => {
                            this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", l)
                        };
                    this.$input.addEventListener("input", () => {
                        let e = parseFloat(this.$input.value);
                        isNaN(e) || (this._stepExplicit && (e = this._snap(e)), this.setValue(this._clamp(e)))
                    }), this.$input.addEventListener("keydown", t => {
                        "Enter" === t.key && this.$input.blur(), "ArrowUp" === t.code && (t.preventDefault(), e(this._step * this._arrowKeyMultiplier(t))), "ArrowDown" === t.code && (t.preventDefault(), e(-(this._step * this._arrowKeyMultiplier(t) * 1)))
                    }), this.$input.addEventListener("wheel", t => {
                        this._inputFocused && (t.preventDefault(), e(this._step * this._normalizeMouseWheel(t)))
                    }, {
                        passive: !1
                    }), this.$input.addEventListener("mousedown", e => {
                        r = e.clientX, i = n = e.clientY, t = !0, o = this.getValue(), s = 0, window.addEventListener("mousemove", a), window.addEventListener("mouseup", l)
                    }), this.$input.addEventListener("focus", () => {
                        this._inputFocused = !0
                    }), this.$input.addEventListener("blur", () => {
                        this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange()
                    })
                }
                _initSlider() {
                    let e;
                    this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
                    let t = (e, t, r, i, n) => (e - t) / (r - t) * (n - i) + i,
                        r = e => {
                            let r = this.$slider.getBoundingClientRect(),
                                i = t(e, r.left, r.right, this._min, this._max);
                            this._snapClampSetValue(i)
                        },
                        i = e => {
                            r(e.clientX)
                        },
                        n = () => {
                            this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", n)
                        },
                        o = !1,
                        s, a, l = e => {
                            e.preventDefault(), this._setDraggingStyle(!0), r(e.touches[0].clientX), o = !1
                        },
                        c = e => {
                            o ? Math.abs(e.touches[0].clientX - s) > Math.abs(e.touches[0].clientY - a) ? l(e) : (window.removeEventListener("touchmove", c), window.removeEventListener("touchend", u)) : (e.preventDefault(), r(e.touches[0].clientX))
                        },
                        u = () => {
                            this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", c), window.removeEventListener("touchend", u)
                        },
                        h = this._callOnFinishChange.bind(this);
                    this.$slider.addEventListener("mousedown", e => {
                        this._setDraggingStyle(!0), r(e.clientX), window.addEventListener("mousemove", i), window.addEventListener("mouseup", n)
                    }), this.$slider.addEventListener("touchstart", e => {
                        e.touches.length > 1 || (this._hasScrollBar ? (s = e.touches[0].clientX, a = e.touches[0].clientY, o = !0) : l(e), window.addEventListener("touchmove", c, {
                            passive: !1
                        }), window.addEventListener("touchend", u))
                    }, {
                        passive: !1
                    }), this.$slider.addEventListener("wheel", t => {
                        if (Math.abs(t.deltaX) < Math.abs(t.deltaY) && this._hasScrollBar) return;
                        t.preventDefault();
                        let r = this._normalizeMouseWheel(t) * this._step;
                        this._snapClampSetValue(this.getValue() + r), this.$input.value = this.getValue(), clearTimeout(e), e = setTimeout(h, 400)
                    }, {
                        passive: !1
                    })
                }
                _setDraggingStyle(e, t = "horizontal") {
                    this.$slider && this.$slider.classList.toggle("active", e), document.body.classList.toggle("lil-gui-dragging", e), document.body.classList.toggle(`lil-gui-${t}`, e)
                }
                _getImplicitStep() {
                    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : .1
                }
                _onUpdateMinMax() {
                    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay())
                }
                _normalizeMouseWheel(e) {
                    let {
                        deltaX: t,
                        deltaY: r
                    } = e;
                    return Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (t = 0, r = -e.wheelDelta / 120 * (this._stepExplicit ? 1 : 10)), t + -r
                }
                _arrowKeyMultiplier(e) {
                    let t = this._stepExplicit ? 1 : 10;
                    return e.shiftKey ? t *= 10 : e.altKey && (t /= 10), t
                }
                _snap(e) {
                    let t = 0;
                    return this._hasMin ? t = this._min : this._hasMax && (t = this._max), e -= t, e = parseFloat((e = Math.round(e / this._step) * this._step + t).toPrecision(15))
                }
                _clamp(e) {
                    return e < this._min && (e = this._min), e > this._max && (e = this._max), e
                }
                _snapClampSetValue(e) {
                    this.setValue(this._clamp(this._snap(e)))
                }
                get _hasScrollBar() {
                    let e = this.parent.root.$children;
                    return e.scrollHeight > e.clientHeight
                }
                get _hasMin() {
                    return void 0 !== this._min
                }
                get _hasMax() {
                    return void 0 !== this._max
                }
            }
            class h extends i {
                constructor(e, t, r, i) {
                    super(e, t, r, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$select.addEventListener("change", () => {
                        this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange()
                    }), this.$select.addEventListener("focus", () => {
                        this.$display.classList.add("focus")
                    }), this.$select.addEventListener("blur", () => {
                        this.$display.classList.remove("focus")
                    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.options(i)
                }
                options(e) {
                    return this._values = Array.isArray(e) ? e : Object.values(e), this._names = Array.isArray(e) ? e : Object.keys(e), this.$select.replaceChildren(), this._names.forEach(e => {
                        let t = document.createElement("option");
                        t.textContent = e, this.$select.appendChild(t)
                    }), this.updateDisplay(), this
                }
                updateDisplay() {
                    let e = this.getValue(),
                        t = this._values.indexOf(e);
                    return this.$select.selectedIndex = t, this.$display.textContent = -1 === t ? e : this._names[t], this
                }
            }
            class d extends i {
                constructor(e, t, r) {
                    super(e, t, r, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("spellcheck", "false"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
                        this.setValue(this.$input.value)
                    }), this.$input.addEventListener("keydown", e => {
                        "Enter" === e.code && this.$input.blur()
                    }), this.$input.addEventListener("blur", () => {
                        this._callOnFinishChange()
                    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay()
                }
                updateDisplay() {
                    return this.$input.value = this.getValue(), this
                }
            }
            var p = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
            let f = !1;
            class m {
                constructor({
                    parent: e,
                    autoPlace: t = void 0 === e,
                    container: r,
                    width: i,
                    title: n = "Controls",
                    closeFolders: o = !1,
                    injectStyles: s = !0,
                    touchStyles: a = !0
                } = {}) {
                    if (this.parent = e, this.root = e ? e.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("button"), this.$title.classList.add("title"), this.$title.setAttribute("aria-expanded", !0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("touchstart", () => {}, {
                            passive: !0
                        }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(n), this.parent) {
                        this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
                        return
                    }
                    this.domElement.classList.add("root"), a && this.domElement.classList.add("allow-touch-styles"), !f && s && (function(e) {
                        let t = document.createElement("style");
                        t.innerHTML = e;
                        let r = document.querySelector("head link[rel=stylesheet], head style");
                        r ? document.head.insertBefore(t, r) : document.head.appendChild(t)
                    }(p), f = !0), r ? r.appendChild(this.domElement) : t && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), i && this.domElement.style.setProperty("--width", i + "px"), this._closeFolders = o
                }
                add(e, t, r, i, o) {
                    if (Object(r) === r) return new h(this, e, t, r);
                    let s = e[t];
                    switch (typeof s) {
                        case "number":
                            return new u(this, e, t, r, i, o);
                        case "boolean":
                            return new n(this, e, t);
                        case "string":
                            return new d(this, e, t);
                        case "function":
                            return new c(this, e, t)
                    }
                    console.error(`gui.add failed
	property:`, t, `
	object:`, e, `
	value:`, s)
                }
                addColor(e, t, r = 1) {
                    return new l(this, e, t, r)
                }
                addFolder(e) {
                    let t = new m({
                        parent: this,
                        title: e
                    });
                    return this.root._closeFolders && t.close(), t
                }
                load(e, t = !0) {
                    return e.controllers && this.controllers.forEach(t => {
                        !(t instanceof c) && t._name in e.controllers && t.load(e.controllers[t._name])
                    }), t && e.folders && this.folders.forEach(t => {
                        t._title in e.folders && t.load(e.folders[t._title])
                    }), this
                }
                save(e = !0) {
                    let t = {
                        controllers: {},
                        folders: {}
                    };
                    return this.controllers.forEach(e => {
                        if (!(e instanceof c)) {
                            if (e._name in t.controllers) throw Error(`Cannot save GUI with duplicate property "${e._name}"`);
                            t.controllers[e._name] = e.save()
                        }
                    }), e && this.folders.forEach(e => {
                        if (e._title in t.folders) throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);
                        t.folders[e._title] = e.save()
                    }), t
                }
                open(e = !0) {
                    return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this
                }
                close() {
                    return this.open(!1)
                }
                _setClosed(e) {
                    this._closed !== e && (this._closed = e, this._callOnOpenClose(this))
                }
                show(e = !0) {
                    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this
                }
                hide() {
                    return this.show(!1)
                }
                openAnimated(e = !0) {
                    return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
                        let t = this.$children.clientHeight;
                        this.$children.style.height = t + "px", this.domElement.classList.add("transition");
                        let r = e => {
                            e.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", r))
                        };
                        this.$children.addEventListener("transitionend", r);
                        let i = e ? this.$children.scrollHeight : 0;
                        this.domElement.classList.toggle("closed", !e), requestAnimationFrame(() => {
                            this.$children.style.height = i + "px"
                        })
                    }), this
                }
                title(e) {
                    return this._title = e, this.$title.textContent = e, this
                }
                reset(e = !0) {
                    return (e ? this.controllersRecursive() : this.controllers).forEach(e => e.reset()), this
                }
                onChange(e) {
                    return this._onChange = e, this
                }
                _callOnChange(e) {
                    this.parent && this.parent._callOnChange(e), void 0 !== this._onChange && this._onChange.call(this, {
                        object: e.object,
                        property: e.property,
                        value: e.getValue(),
                        controller: e
                    })
                }
                onFinishChange(e) {
                    return this._onFinishChange = e, this
                }
                _callOnFinishChange(e) {
                    this.parent && this.parent._callOnFinishChange(e), void 0 !== this._onFinishChange && this._onFinishChange.call(this, {
                        object: e.object,
                        property: e.property,
                        value: e.getValue(),
                        controller: e
                    })
                }
                onOpenClose(e) {
                    return this._onOpenClose = e, this
                }
                _callOnOpenClose(e) {
                    this.parent && this.parent._callOnOpenClose(e), void 0 !== this._onOpenClose && this._onOpenClose.call(this, e)
                }
                destroy() {
                    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach(e => e.destroy())
                }
                controllersRecursive() {
                    let e = Array.from(this.controllers);
                    return this.folders.forEach(t => {
                        e = e.concat(t.controllersRecursive())
                    }), e
                }
                foldersRecursive() {
                    let e = Array.from(this.folders);
                    return this.folders.forEach(t => {
                        e = e.concat(t.foldersRecursive())
                    }), e
                }
            }
        },
        3266: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var i = r(5155),
                n = r(2115),
                o = r(4425);
            let s = (0, n.forwardRef)(({
                blok: e,
                ...t
            }, r) => {
                if (!e) return console.error("Please provide a 'blok' property to the StoryblokComponent"), (0, i.jsx)("div", {
                    children: "Please provide a blok property to the StoryblokComponent"
                });
                let n = (0, o.QQ)(e.component);
                if (n) return (0, i.jsx)(n, {
                    ref: r,
                    blok: e,
                    ...t
                });
                if ((0, o.l_)()) {
                    let r = (0, o.nr)();
                    return r ? (0, i.jsx)(r, {
                        blok: e,
                        ...t
                    }) : (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)("p", {
                            children: ["Component could not be found for blok", " ", (0, i.jsx)("strong", {
                                children: e.component
                            }), "! Is it configured correctly?"]
                        })
                    })
                }
                return (0, i.jsx)("div", {})
            });
            s.displayName = "StoryblokComponent"
        },
        3461: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var i = /iPhone/i,
                n = /iPod/i,
                o = /iPad/i,
                s = /\biOS-universal(?:.+)Mac\b/i,
                a = /\bAndroid(?:.+)Mobile\b/i,
                l = /Android/i,
                c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
                u = /Silk/i,
                h = /Windows Phone/i,
                d = /\bWindows(?:.+)ARM\b/i,
                p = /BlackBerry/i,
                f = /BB10/i,
                m = /Opera Mini/i,
                g = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                v = /Mobile(?:.+)Firefox\b/i,
                y = function(e) {
                    return void 0 !== e && "MacIntel" === e.platform && "number" == typeof e.maxTouchPoints && e.maxTouchPoints > 1 && "undefined" == typeof MSStream
                };

            function b(e) {
                var t, r = {
                    userAgent: "",
                    platform: "",
                    maxTouchPoints: 0
                };
                e || "undefined" == typeof navigator ? "string" == typeof e ? r.userAgent = e : e && e.userAgent && (r = {
                    userAgent: e.userAgent,
                    platform: e.platform,
                    maxTouchPoints: e.maxTouchPoints || 0
                }) : r = {
                    userAgent: navigator.userAgent,
                    platform: navigator.platform,
                    maxTouchPoints: navigator.maxTouchPoints || 0
                };
                var b = r.userAgent,
                    x = b.split("[FBAN");
                void 0 !== x[1] && (b = x[0]), void 0 !== (x = b.split("Twitter"))[1] && (b = x[0]);
                var w = (t = b, function(e) {
                        return e.test(t)
                    }),
                    A = {
                        apple: {
                            phone: w(i) && !w(h),
                            ipod: w(n),
                            tablet: !w(i) && (w(o) || y(r)) && !w(h),
                            universal: w(s),
                            device: (w(i) || w(n) || w(o) || w(s) || y(r)) && !w(h)
                        },
                        amazon: {
                            phone: w(c),
                            tablet: !w(c) && w(u),
                            device: w(c) || w(u)
                        },
                        android: {
                            phone: !w(h) && w(c) || !w(h) && w(a),
                            tablet: !w(h) && !w(c) && !w(a) && (w(u) || w(l)),
                            device: !w(h) && (w(c) || w(u) || w(a) || w(l)) || w(/\bokhttp\b/i)
                        },
                        windows: {
                            phone: w(h),
                            tablet: w(d),
                            device: w(h) || w(d)
                        },
                        other: {
                            blackberry: w(p),
                            blackberry10: w(f),
                            opera: w(m),
                            firefox: w(v),
                            chrome: w(g),
                            device: w(p) || w(f) || w(m) || w(v) || w(g)
                        },
                        any: !1,
                        phone: !1,
                        tablet: !1
                    };
                return A.any = A.apple.device || A.android.device || A.windows.device || A.other.device, A.phone = A.apple.phone || A.android.phone || A.windows.phone, A.tablet = A.apple.tablet || A.android.tablet || A.windows.tablet, A
            }
        },
        3577: e => {
            ! function() {
                function t(e, t) {
                    document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t)
                }

                function r(e) {
                    this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(e)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
                }

                function i(e, t) {
                    e.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";"
                }

                function n(e) {
                    var t = e.g.offsetWidth,
                        r = t + 100;
                    return e.j.style.width = r + "px", e.i.scrollLeft = r, e.h.scrollLeft = e.h.scrollWidth + 100, e.l !== t && (e.l = t, !0)
                }

                function o(e, r) {
                    function i() {
                        n(o) && null !== o.g.parentNode && r(o.l)
                    }
                    var o = e;
                    t(e.h, i), t(e.i, i), n(e)
                }

                function s(e, t, r) {
                    t = t || {}, r = r || window, this.family = e, this.style = t.style || "normal", this.weight = t.weight || "normal", this.stretch = t.stretch || "normal", this.context = r
                }
                var a = null,
                    l = null,
                    c = null,
                    u = null;

                function h(e) {
                    return null === u && (u = !!e.document.fonts), u
                }

                function d(e, t) {
                    var r = e.style,
                        i = e.weight;
                    if (null === c) {
                        var n = document.createElement("div");
                        try {
                            n.style.font = "condensed 100px sans-serif"
                        } catch (e) {}
                        c = "" !== n.style.font
                    }
                    return [r, i, c ? e.stretch : "", "100px", t].join(" ")
                }
                s.prototype.load = function(e, t) {
                    var n = this,
                        s = e || "BESbswy",
                        c = 0,
                        u = t || 3e3,
                        p = (new Date).getTime();
                    return new Promise(function(e, t) {
                        if (h(n.context) && (f = n.context, null === l && (l = !!(h(f) && /Apple/.test(window.navigator.vendor)) && !!(f = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent)) && 603 > parseInt(f[1], 10)), !l)) {
                            var f, m, g = new Promise(function(e, t) {
                                ! function r() {
                                    (new Date).getTime() - p >= u ? t(Error("" + u + "ms timeout exceeded")) : n.context.document.fonts.load(d(n, '"' + n.family + '"'), s).then(function(t) {
                                        1 <= t.length ? e() : setTimeout(r, 25)
                                    }, t)
                                }()
                            });
                            Promise.race([new Promise(function(e, t) {
                                c = setTimeout(function() {
                                    t(Error("" + u + "ms timeout exceeded"))
                                }, u)
                            }), g]).then(function() {
                                clearTimeout(c), e(n)
                            }, t)
                        } else m = function() {
                            function l() {
                                var t;
                                (t = -1 != g && -1 != v || -1 != g && -1 != y || -1 != v && -1 != y) && ((t = g != v && g != y && v != y) || (null === a && (a = !!(t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)) && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))), t = a && (g == b && v == b && y == b || g == x && v == x && y == x || g == w && v == w && y == w)), t = !t), t && (null !== A.parentNode && A.parentNode.removeChild(A), clearTimeout(c), e(n))
                            }
                            var h = new r(s),
                                f = new r(s),
                                m = new r(s),
                                g = -1,
                                v = -1,
                                y = -1,
                                b = -1,
                                x = -1,
                                w = -1,
                                A = document.createElement("div");
                            A.dir = "ltr", i(h, d(n, "sans-serif")), i(f, d(n, "serif")), i(m, d(n, "monospace")), A.appendChild(h.g), A.appendChild(f.g), A.appendChild(m.g), n.context.document.body.appendChild(A), b = h.g.offsetWidth, x = f.g.offsetWidth, w = m.g.offsetWidth,
                                function e() {
                                    if ((new Date).getTime() - p >= u) null !== A.parentNode && A.parentNode.removeChild(A), t(Error("" + u + "ms timeout exceeded"));
                                    else {
                                        var r = n.context.document.hidden;
                                        (!0 === r || void 0 === r) && (g = h.g.offsetWidth, v = f.g.offsetWidth, y = m.g.offsetWidth, l()), c = setTimeout(e, 50)
                                    }
                                }(), o(h, function(e) {
                                    g = e, l()
                                }), i(h, d(n, '"' + n.family + '",sans-serif')), o(f, function(e) {
                                    v = e, l()
                                }), i(f, d(n, '"' + n.family + '",serif')), o(m, function(e) {
                                    y = e, l()
                                }), i(m, d(n, '"' + n.family + '",monospace'))
                        }, document.body ? m() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
                            document.removeEventListener("DOMContentLoaded", e), m()
                        }) : document.attachEvent("onreadystatechange", function e() {
                            ("interactive" == document.readyState || "complete" == document.readyState) && (document.detachEvent("onreadystatechange", e), m())
                        })
                    })
                }, e.exports = s
            }()
        },
        3809: (e, t, r) => {
            "use strict";
            var i = r(5155),
                n = r(2115),
                o = r(3840),
                s = r(6576);
            (0, n.forwardRef)(({
                doc: e,
                resolvers: t
            }, r) => {
                let {
                    render: n
                } = (0, s.a)({
                    resolvers: t
                }), a = n(e), l = (0, o.u)(a);
                return (0, i.jsx)("div", {
                    ref: r,
                    children: l
                })
            })
        },
        3840: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => function e(t) {
                    if (Array.isArray(t)) return t.map(t => e(t));
                    let r = {
                            class: "className",
                            for: "htmlFor",
                            targetAttr: "targetattr"
                        },
                        n = Object.keys(t.props).reduce((e, i) => {
                            let n = t.props[i];
                            return "style" === i && "string" == typeof n && (n = n.split(";").reduce((e, t) => {
                                let [r, i] = t.split(":");
                                return r = null == r ? void 0 : r.trim(), i = null == i ? void 0 : i.trim(), r && i && (e[r.replace(/-([a-z])/g, e => e[1].toUpperCase())] = i), e
                            }, {})), e[r[i] || i] = n, e
                        }, {});
                    n.key = t.key;
                    let o = i.Children.map(t.props.children, t => "string" == typeof t ? t : e(t));
                    return i.createElement(t.type, n, o)
                }
            });
            var i = r(2115)
        },
        4036: (e, t) => {
            "use strict";
            t.AU = function(e, t, r, i) {
                return r * (e /= i) * e * e + t
            }, t.p_ = function(e, t, r, i) {
                return r * ((e = e / i - 1) * e * e + 1) + t
            }, t.ME = function(e, t, r, i) {
                return (e /= i / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t
            }, t.p2 = function(e, t, r, i) {
                return -r * Math.cos(e / i * (Math.PI / 2)) + r + t
            }, t.rn = function(e, t, r, i) {
                return -r / 2 * (Math.cos(Math.PI * e / i) - 1) + t
            }, t.cY = function(e, t, r, i) {
                return r * Math.sqrt(1 - (e = e / i - 1) * e) + t
            }
        },
        4233: (e, t, r) => {
            var i;
            ! function(n, o, s, a) {
                "use strict";
                var l, c = ["", "webkit", "Moz", "MS", "ms", "o"],
                    u = o.createElement("div"),
                    h = Math.round,
                    d = Math.abs,
                    p = Date.now;

                function f(e, t, r) {
                    return setTimeout(w(e, r), t)
                }

                function m(e, t, r) {
                    return !!Array.isArray(e) && (g(e, r[t], r), !0)
                }

                function g(e, t, r) {
                    var i;
                    if (e) {
                        if (e.forEach) e.forEach(t, r);
                        else if (e.length !== a)
                            for (i = 0; i < e.length;) t.call(r, e[i], i, e), i++;
                        else
                            for (i in e) e.hasOwnProperty(i) && t.call(r, e[i], i, e)
                    }
                }

                function v(e, t, r) {
                    var i = "DEPRECATED METHOD: " + t + "\n" + r + " AT \n";
                    return function() {
                        var t = Error("get-stack-trace"),
                            r = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                            o = n.console && (n.console.warn || n.console.log);
                        return o && o.call(n.console, i, r), e.apply(this, arguments)
                    }
                }
                l = "function" != typeof Object.assign ? function(e) {
                    if (null == e) throw TypeError("Cannot convert undefined or null to object");
                    for (var t = Object(e), r = 1; r < arguments.length; r++) {
                        var i = arguments[r];
                        if (null != i)
                            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n])
                    }
                    return t
                } : Object.assign;
                var y = v(function(e, t, r) {
                        for (var i = Object.keys(t), n = 0; n < i.length;)(!r || r && e[i[n]] === a) && (e[i[n]] = t[i[n]]), n++;
                        return e
                    }, "extend", "Use `assign`."),
                    b = v(function(e, t) {
                        return y(e, t, !0)
                    }, "merge", "Use `assign`.");

                function x(e, t, r) {
                    var i, n = t.prototype;
                    (i = e.prototype = Object.create(n)).constructor = e, i._super = n, r && l(i, r)
                }

                function w(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }

                function A(e, t) {
                    return "function" == typeof e ? e.apply(t && t[0] || a, t) : e
                }

                function E(e, t, r) {
                    g(k(t), function(t) {
                        e.addEventListener(t, r, !1)
                    })
                }

                function S(e, t, r) {
                    g(k(t), function(t) {
                        e.removeEventListener(t, r, !1)
                    })
                }

                function T(e, t) {
                    for (; e;) {
                        if (e == t) return !0;
                        e = e.parentNode
                    }
                    return !1
                }

                function _(e, t) {
                    return e.indexOf(t) > -1
                }

                function k(e) {
                    return e.trim().split(/\s+/g)
                }

                function C(e, t, r) {
                    if (e.indexOf && !r) return e.indexOf(t);
                    for (var i = 0; i < e.length;) {
                        if (r && e[i][r] == t || !r && e[i] === t) return i;
                        i++
                    }
                    return -1
                }

                function R(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function M(e, t, r) {
                    for (var i = [], n = [], o = 0; o < e.length;) {
                        var s = t ? e[o][t] : e[o];
                        0 > C(n, s) && i.push(e[o]), n[o] = s, o++
                    }
                    return r && (i = t ? i.sort(function(e, r) {
                        return e[t] > r[t]
                    }) : i.sort()), i
                }

                function j(e, t) {
                    for (var r, i, n = t[0].toUpperCase() + t.slice(1), o = 0; o < c.length;) {
                        if ((i = (r = c[o]) ? r + n : t) in e) return i;
                        o++
                    }
                    return a
                }
                var I = 1;

                function O(e) {
                    var t = e.ownerDocument || e;
                    return t.defaultView || t.parentWindow || n
                }
                var L = "ontouchstart" in n,
                    P = j(n, "PointerEvent") !== a,
                    D = L && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    N = "touch",
                    B = "mouse",
                    F = ["x", "y"],
                    z = ["clientX", "clientY"];

                function U(e, t) {
                    var r = this;
                    this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                        A(e.options.enable, [e]) && r.handler(t)
                    }, this.init()
                }

                function H(e, t, r) {
                    var i, n, o, s, l, c, u, h, f, m, g, v, y, b, x, w, A, E, S, _, k, C = r.pointers.length,
                        R = r.changedPointers.length,
                        M = 1 & t && C - R == 0,
                        j = 12 & t && C - R == 0;
                    r.isFirst = !!M, r.isFinal = !!j, M && (e.session = {}), r.eventType = t, i = e, n = r, o = i.session, l = (s = n.pointers).length, o.firstInput || (o.firstInput = G(n)), l > 1 && !o.firstMultiple ? o.firstMultiple = G(n) : 1 === l && (o.firstMultiple = !1), c = o.firstInput, h = (u = o.firstMultiple) ? u.center : c.center, f = n.center = W(s), n.timeStamp = p(), n.deltaTime = n.timeStamp - c.timeStamp, n.angle = V(h, f), n.distance = q(h, f), m = o, v = (g = n).center, y = m.offsetDelta || {}, b = m.prevDelta || {}, x = m.prevInput || {}, (1 === g.eventType || 4 === x.eventType) && (b = m.prevDelta = {
                            x: x.deltaX || 0,
                            y: x.deltaY || 0
                        }, y = m.offsetDelta = {
                            x: v.x,
                            y: v.y
                        }), g.deltaX = b.x + (v.x - y.x), g.deltaY = b.y + (v.y - y.y), n.offsetDirection = Y(n.deltaX, n.deltaY), n.overallVelocityX = (w = X(n.deltaTime, n.deltaX, n.deltaY)).x, n.overallVelocityY = w.y, n.overallVelocity = d(w.x) > d(w.y) ? w.x : w.y, n.scale = u ? (A = u.pointers, q((E = s)[0], E[1], z) / q(A[0], A[1], z)) : 1, n.rotation = u ? (S = u.pointers, V((_ = s)[1], _[0], z) + V(S[1], S[0], z)) : 0, n.maxPointers = o.prevInput ? n.pointers.length > o.prevInput.maxPointers ? n.pointers.length : o.prevInput.maxPointers : n.pointers.length,
                        function(e, t) {
                            var r, i, n, o, s = e.lastInterval || t,
                                l = t.timeStamp - s.timeStamp;
                            if (8 != t.eventType && (l > 25 || s.velocity === a)) {
                                var c = t.deltaX - s.deltaX,
                                    u = t.deltaY - s.deltaY,
                                    h = X(l, c, u);
                                i = h.x, n = h.y, r = d(h.x) > d(h.y) ? h.x : h.y, o = Y(c, u), e.lastInterval = t
                            } else r = s.velocity, i = s.velocityX, n = s.velocityY, o = s.direction;
                            t.velocity = r, t.velocityX = i, t.velocityY = n, t.direction = o
                        }(o, n), k = i.element, T(n.srcEvent.target, k) && (k = n.srcEvent.target), n.target = k, e.emit("hammer.input", r), e.recognize(r), e.session.prevInput = r
                }

                function G(e) {
                    for (var t = [], r = 0; r < e.pointers.length;) t[r] = {
                        clientX: h(e.pointers[r].clientX),
                        clientY: h(e.pointers[r].clientY)
                    }, r++;
                    return {
                        timeStamp: p(),
                        pointers: t,
                        center: W(t),
                        deltaX: e.deltaX,
                        deltaY: e.deltaY
                    }
                }

                function W(e) {
                    var t = e.length;
                    if (1 === t) return {
                        x: h(e[0].clientX),
                        y: h(e[0].clientY)
                    };
                    for (var r = 0, i = 0, n = 0; n < t;) r += e[n].clientX, i += e[n].clientY, n++;
                    return {
                        x: h(r / t),
                        y: h(i / t)
                    }
                }

                function X(e, t, r) {
                    return {
                        x: t / e || 0,
                        y: r / e || 0
                    }
                }

                function Y(e, t) {
                    return e === t ? 1 : d(e) >= d(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
                }

                function q(e, t, r) {
                    r || (r = F);
                    var i = t[r[0]] - e[r[0]],
                        n = t[r[1]] - e[r[1]];
                    return Math.sqrt(i * i + n * n)
                }

                function V(e, t, r) {
                    r || (r = F);
                    var i = t[r[0]] - e[r[0]];
                    return 180 * Math.atan2(t[r[1]] - e[r[1]], i) / Math.PI
                }
                U.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && E(this.element, this.evEl, this.domHandler), this.evTarget && E(this.target, this.evTarget, this.domHandler), this.evWin && E(O(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && S(this.element, this.evEl, this.domHandler), this.evTarget && S(this.target, this.evTarget, this.domHandler), this.evWin && S(O(this.element), this.evWin, this.domHandler)
                    }
                };
                var $ = {
                    mousedown: 1,
                    mousemove: 2,
                    mouseup: 4
                };

                function K() {
                    this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, U.apply(this, arguments)
                }
                x(K, U, {
                    handler: function(e) {
                        var t = $[e.type];
                        1 & t && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = 4), this.pressed && (4 & t && (this.pressed = !1), this.callback(this.manager, t, {
                            pointers: [e],
                            changedPointers: [e],
                            pointerType: B,
                            srcEvent: e
                        }))
                    }
                });
                var J = {
                        pointerdown: 1,
                        pointermove: 2,
                        pointerup: 4,
                        pointercancel: 8,
                        pointerout: 8
                    },
                    Z = {
                        2: N,
                        3: "pen",
                        4: B,
                        5: "kinect"
                    },
                    Q = "pointerdown",
                    ee = "pointermove pointerup pointercancel";

                function et() {
                    this.evEl = Q, this.evWin = ee, U.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }
                n.MSPointerEvent && !n.PointerEvent && (Q = "MSPointerDown", ee = "MSPointerMove MSPointerUp MSPointerCancel"), x(et, U, {
                    handler: function(e) {
                        var t = this.store,
                            r = !1,
                            i = J[e.type.toLowerCase().replace("ms", "")],
                            n = Z[e.pointerType] || e.pointerType,
                            o = n == N,
                            s = C(t, e.pointerId, "pointerId");
                        1 & i && (0 === e.button || o) ? s < 0 && (t.push(e), s = t.length - 1) : 12 & i && (r = !0), !(s < 0) && (t[s] = e, this.callback(this.manager, i, {
                            pointers: t,
                            changedPointers: [e],
                            pointerType: n,
                            srcEvent: e
                        }), r && t.splice(s, 1))
                    }
                });
                var er = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                };

                function ei() {
                    this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, U.apply(this, arguments)
                }

                function en(e, t) {
                    var r = R(e.touches),
                        i = R(e.changedTouches);
                    return 12 & t && (r = M(r.concat(i), "identifier", !0)), [r, i]
                }
                x(ei, U, {
                    handler: function(e) {
                        var t = er[e.type];
                        if (1 === t && (this.started = !0), this.started) {
                            var r = en.call(this, e, t);
                            12 & t && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                                pointers: r[0],
                                changedPointers: r[1],
                                pointerType: N,
                                srcEvent: e
                            })
                        }
                    }
                });
                var eo = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                };

                function es() {
                    this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, U.apply(this, arguments)
                }

                function ea(e, t) {
                    var r = R(e.touches),
                        i = this.targetIds;
                    if (3 & t && 1 === r.length) return i[r[0].identifier] = !0, [r, r];
                    var n, o, s = R(e.changedTouches),
                        a = [],
                        l = this.target;
                    if (o = r.filter(function(e) {
                            return T(e.target, l)
                        }), 1 === t)
                        for (n = 0; n < o.length;) i[o[n].identifier] = !0, n++;
                    for (n = 0; n < s.length;) i[s[n].identifier] && a.push(s[n]), 12 & t && delete i[s[n].identifier], n++;
                    if (a.length) return [M(o.concat(a), "identifier", !0), a]
                }

                function el() {
                    U.apply(this, arguments);
                    var e = w(this.handler, this);
                    this.touch = new es(this.manager, e), this.mouse = new K(this.manager, e), this.primaryTouch = null, this.lastTouches = []
                }

                function ec(e, t) {
                    1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, eu.call(this, t)) : 12 & e && eu.call(this, t)
                }

                function eu(e) {
                    var t = e.changedPointers[0];
                    if (t.identifier === this.primaryTouch) {
                        var r = {
                            x: t.clientX,
                            y: t.clientY
                        };
                        this.lastTouches.push(r);
                        var i = this.lastTouches;
                        setTimeout(function() {
                            var e = i.indexOf(r);
                            e > -1 && i.splice(e, 1)
                        }, 2500)
                    }
                }

                function eh(e) {
                    for (var t = e.srcEvent.clientX, r = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var n = this.lastTouches[i],
                            o = Math.abs(t - n.x),
                            s = Math.abs(r - n.y);
                        if (o <= 25 && s <= 25) return !0
                    }
                    return !1
                }
                x(es, U, {
                    handler: function(e) {
                        var t = eo[e.type],
                            r = ea.call(this, e, t);
                        r && this.callback(this.manager, t, {
                            pointers: r[0],
                            changedPointers: r[1],
                            pointerType: N,
                            srcEvent: e
                        })
                    }
                }), x(el, U, {
                    handler: function(e, t, r) {
                        var i = r.pointerType == N,
                            n = r.pointerType == B;
                        if (!n || !r.sourceCapabilities || !r.sourceCapabilities.firesTouchEvents) {
                            if (i) ec.call(this, t, r);
                            else if (n && eh.call(this, r)) return;
                            this.callback(e, t, r)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var ed = j(u.style, "touchAction"),
                    ep = a !== ed,
                    ef = "compute",
                    em = "auto",
                    eg = "manipulation",
                    ev = "none",
                    ey = "pan-x",
                    eb = "pan-y",
                    ex = function() {
                        if (!ep) return !1;
                        var e = {},
                            t = n.CSS && n.CSS.supports;
                        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
                            e[r] = !t || n.CSS.supports("touch-action", r)
                        }), e
                    }();

                function ew(e, t) {
                    this.manager = e, this.set(t)
                }

                function eA(e) {
                    var t;
                    this.options = l({}, this.defaults, e || {}), this.id = I++, this.manager = null, this.options.enable = a === (t = this.options.enable) || t, this.state = 1, this.simultaneous = {}, this.requireFail = []
                }

                function eE(e) {
                    return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
                }

                function eS(e) {
                    return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
                }

                function eT(e, t) {
                    var r = t.manager;
                    return r ? r.get(e) : e
                }

                function e_() {
                    eA.apply(this, arguments)
                }

                function ek() {
                    e_.apply(this, arguments), this.pX = null, this.pY = null
                }

                function eC() {
                    e_.apply(this, arguments)
                }

                function eR() {
                    eA.apply(this, arguments), this._timer = null, this._input = null
                }

                function eM() {
                    e_.apply(this, arguments)
                }

                function ej() {
                    e_.apply(this, arguments)
                }

                function eI() {
                    eA.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function eO(e, t) {
                    var r, i;
                    return (t = t || {}).recognizers = (r = t.recognizers, i = eO.defaults.preset, a === r ? i : r), new eL(e, t)
                }

                function eL(e, t) {
                    var r, i;
                    this.options = l({}, eO.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new((i = this.options.inputClass) ? i : P ? et : D ? es : L ? el : K)(this, H), this.touchAction = new ew(this, this.options.touchAction), eP(this, !0), g(this.options.recognizers, function(e) {
                        var t = this.add(new e[0](e[1]));
                        e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
                    }, this)
                }

                function eP(e, t) {
                    var r, i = e.element;
                    i.style && (g(e.options.cssProps, function(n, o) {
                        r = j(i.style, o), t ? (e.oldCssProps[r] = i.style[r], i.style[r] = n) : i.style[r] = e.oldCssProps[r] || ""
                    }), t || (e.oldCssProps = {}))
                }
                ew.prototype = {
                    set: function(e) {
                        e == ef && (e = this.compute()), ep && this.manager.element.style && ex[e] && (this.manager.element.style[ed] = e), this.actions = e.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var e = [];
                        return g(this.manager.recognizers, function(t) {
                                A(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                            }),
                            function(e) {
                                if (_(e, ev)) return ev;
                                var t = _(e, ey),
                                    r = _(e, eb);
                                return t && r ? ev : t || r ? t ? ey : eb : _(e, eg) ? eg : em
                            }(e.join(" "))
                    },
                    preventDefaults: function(e) {
                        var t = e.srcEvent,
                            r = e.offsetDirection;
                        if (this.manager.session.prevented) {
                            t.preventDefault();
                            return
                        }
                        var i = this.actions,
                            n = _(i, ev) && !ex[ev],
                            o = _(i, eb) && !ex[eb],
                            s = _(i, ey) && !ex[ey];
                        if (n) {
                            var a = 1 === e.pointers.length,
                                l = e.distance < 2,
                                c = e.deltaTime < 250;
                            if (a && l && c) return
                        }
                        if ((!s || !o) && (n || o && 6 & r || s && 24 & r)) return this.preventSrc(t)
                    },
                    preventSrc: function(e) {
                        this.manager.session.prevented = !0, e.preventDefault()
                    }
                }, eA.prototype = {
                    defaults: {},
                    set: function(e) {
                        return l(this.options, e), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(e) {
                        if (m(e, "recognizeWith", this)) return this;
                        var t = this.simultaneous;
                        return t[(e = eT(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(e) {
                        return m(e, "dropRecognizeWith", this) || (e = eT(e, this), delete this.simultaneous[e.id]), this
                    },
                    requireFailure: function(e) {
                        if (m(e, "requireFailure", this)) return this;
                        var t = this.requireFail;
                        return -1 === C(t, e = eT(e, this)) && (t.push(e), e.requireFailure(this)), this
                    },
                    dropRequireFailure: function(e) {
                        if (m(e, "dropRequireFailure", this)) return this;
                        e = eT(e, this);
                        var t = C(this.requireFail, e);
                        return t > -1 && this.requireFail.splice(t, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(e) {
                        return !!this.simultaneous[e.id]
                    },
                    emit: function(e) {
                        var t = this,
                            r = this.state;

                        function i(r) {
                            t.manager.emit(r, e)
                        }
                        r < 8 && i(t.options.event + eE(r)), i(t.options.event), e.additionalEvent && i(e.additionalEvent), r >= 8 && i(t.options.event + eE(r))
                    },
                    tryEmit: function(e) {
                        if (this.canEmit()) return this.emit(e);
                        this.state = 32
                    },
                    canEmit: function() {
                        for (var e = 0; e < this.requireFail.length;) {
                            if (!(33 & this.requireFail[e].state)) return !1;
                            e++
                        }
                        return !0
                    },
                    recognize: function(e) {
                        var t = l({}, e);
                        if (!A(this.options.enable, [this, t])) {
                            this.reset(), this.state = 32;
                            return
                        }
                        56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
                    },
                    process: function(e) {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, x(e_, eA, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(e) {
                        var t = this.options.pointers;
                        return 0 === t || e.pointers.length === t
                    },
                    process: function(e) {
                        var t = this.state,
                            r = e.eventType,
                            i = 6 & t,
                            n = this.attrTest(e);
                        return i && (8 & r || !n) ? 16 | t : i || n ? 4 & r ? 8 | t : 2 & t ? 4 | t : 2 : 32
                    }
                }), x(ek, e_, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var e = this.options.direction,
                            t = [];
                        return 6 & e && t.push(eb), 24 & e && t.push(ey), t
                    },
                    directionTest: function(e) {
                        var t = this.options,
                            r = !0,
                            i = e.distance,
                            n = e.direction,
                            o = e.deltaX,
                            s = e.deltaY;
                        return n & t.direction || (6 & t.direction ? (n = 0 === o ? 1 : o < 0 ? 2 : 4, r = o != this.pX, i = Math.abs(e.deltaX)) : (n = 0 === s ? 1 : s < 0 ? 8 : 16, r = s != this.pY, i = Math.abs(e.deltaY))), e.direction = n, r && i > t.threshold && n & t.direction
                    },
                    attrTest: function(e) {
                        return e_.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
                    },
                    emit: function(e) {
                        this.pX = e.deltaX, this.pY = e.deltaY;
                        var t = eS(e.direction);
                        t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
                    }
                }), x(eC, e_, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [ev]
                    },
                    attrTest: function(e) {
                        return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(e) {
                        if (1 !== e.scale) {
                            var t = e.scale < 1 ? "in" : "out";
                            e.additionalEvent = this.options.event + t
                        }
                        this._super.emit.call(this, e)
                    }
                }), x(eR, eA, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return [em]
                    },
                    process: function(e) {
                        var t = this.options,
                            r = e.pointers.length === t.pointers,
                            i = e.distance < t.threshold,
                            n = e.deltaTime > t.time;
                        if (this._input = e, i && r && (!(12 & e.eventType) || n)) {
                            if (1 & e.eventType) this.reset(), this._timer = f(function() {
                                this.state = 8, this.tryEmit()
                            }, t.time, this);
                            else if (4 & e.eventType) return 8
                        } else this.reset();
                        return 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(e) {
                        8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = p(), this.manager.emit(this.options.event, this._input)))
                    }
                }), x(eM, e_, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [ev]
                    },
                    attrTest: function(e) {
                        return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
                    }
                }), x(ej, e_, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return ek.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(e) {
                        var t, r = this.options.direction;
                        return 30 & r ? t = e.overallVelocity : 6 & r ? t = e.overallVelocityX : 24 & r && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && r & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && d(t) > this.options.velocity && 4 & e.eventType
                    },
                    emit: function(e) {
                        var t = eS(e.offsetDirection);
                        t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
                    }
                }), x(eI, eA, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [eg]
                    },
                    process: function(e) {
                        var t = this.options,
                            r = e.pointers.length === t.pointers,
                            i = e.distance < t.threshold,
                            n = e.deltaTime < t.time;
                        if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
                        if (i && n && r) {
                            if (4 != e.eventType) return this.failTimeout();
                            var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                                s = !this.pCenter || q(this.pCenter, e.center) < t.posThreshold;
                            if (this.pTime = e.timeStamp, this.pCenter = e.center, s && o ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = f(function() {
                                this.state = 8, this.tryEmit()
                            }, t.interval, this), 2) : 8
                        }
                        return 32
                    },
                    failTimeout: function() {
                        return this._timer = f(function() {
                            this.state = 32
                        }, this.options.interval, this), 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), eO.VERSION = "2.0.7", eO.defaults = {
                    domEvents: !1,
                    touchAction: ef,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [eM, {
                            enable: !1
                        }],
                        [eC, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [ej, {
                            direction: 6
                        }],
                        [ek, {
                                direction: 6
                            },
                            ["swipe"]
                        ],
                        [eI],
                        [eI, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [eR]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                }, eL.prototype = {
                    set: function(e) {
                        return l(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
                    },
                    stop: function(e) {
                        this.session.stopped = e ? 2 : 1
                    },
                    recognize: function(e) {
                        var t, r = this.session;
                        if (!r.stopped) {
                            this.touchAction.preventDefaults(e);
                            var i = this.recognizers,
                                n = r.curRecognizer;
                            (!n || n && 8 & n.state) && (n = r.curRecognizer = null);
                            for (var o = 0; o < i.length;) t = i[o], 2 !== r.stopped && (!n || t == n || t.canRecognizeWith(n)) ? t.recognize(e) : t.reset(), !n && 14 & t.state && (n = r.curRecognizer = t), o++
                        }
                    },
                    get: function(e) {
                        if (e instanceof eA) return e;
                        for (var t = this.recognizers, r = 0; r < t.length; r++)
                            if (t[r].options.event == e) return t[r];
                        return null
                    },
                    add: function(e) {
                        if (m(e, "add", this)) return this;
                        var t = this.get(e.options.event);
                        return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
                    },
                    remove: function(e) {
                        if (m(e, "remove", this)) return this;
                        if (e = this.get(e)) {
                            var t = this.recognizers,
                                r = C(t, e); - 1 !== r && (t.splice(r, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(e, t) {
                        if (a !== e && a !== t) {
                            var r = this.handlers;
                            return g(k(e), function(e) {
                                r[e] = r[e] || [], r[e].push(t)
                            }), this
                        }
                    },
                    off: function(e, t) {
                        if (a !== e) {
                            var r = this.handlers;
                            return g(k(e), function(e) {
                                t ? r[e] && r[e].splice(C(r[e], t), 1) : delete r[e]
                            }), this
                        }
                    },
                    emit: function(e, t) {
                        this.options.domEvents && (r = e, i = t, (n = o.createEvent("Event")).initEvent(r, !0, !0), n.gesture = i, i.target.dispatchEvent(n));
                        var r, i, n, s = this.handlers[e] && this.handlers[e].slice();
                        if (s && s.length) {
                            t.type = e, t.preventDefault = function() {
                                t.srcEvent.preventDefault()
                            };
                            for (var a = 0; a < s.length;) s[a](t), a++
                        }
                    },
                    destroy: function() {
                        this.element && eP(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, l(eO, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: 24,
                    DIRECTION_ALL: 30,
                    Manager: eL,
                    Input: U,
                    TouchAction: ew,
                    TouchInput: es,
                    MouseInput: K,
                    PointerEventInput: et,
                    TouchMouseInput: el,
                    SingleTouchInput: ei,
                    Recognizer: eA,
                    AttrRecognizer: e_,
                    Tap: eI,
                    Pan: ek,
                    Swipe: ej,
                    Pinch: eC,
                    Rotate: eM,
                    Press: eR,
                    on: E,
                    off: S,
                    each: g,
                    merge: b,
                    extend: y,
                    assign: l,
                    inherit: x,
                    bindFn: w,
                    prefixed: j
                }), (void 0 !== n ? n : "undefined" != typeof self ? self : {}).Hammer = eO, a !== (i = (function() {
                    return eO
                }).call(t, r, t, e)) && (e.exports = i)
            }(window, document, 0)
        },
        4425: (e, t, r) => {
            "use strict";
            r.d(t, {
                QQ: () => n,
                l_: () => o,
                nr: () => s
            }), r(554), r(3266);
            let i = {},
                n = e => i[e] ? i[e] : (console.error(`Component ${e} doesn't exist.`), !1),
                o = () => !1,
                s = () => null
        },
        4477: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                callServer: function() {
                    return i.callServer
                },
                createServerReference: function() {
                    return o
                },
                findSourceMapURL: function() {
                    return n.findSourceMapURL
                }
            });
            let i = r(3806),
                n = r(1818),
                o = r(4979).createServerReference
        },
        5029: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let i = r(2115),
                n = i.useLayoutEffect,
                o = i.useEffect;

            function s(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: r
                } = e;

                function s() {
                    if (t && t.mountedInstances) {
                        let n = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(r(n, e))
                    }
                }
                return n(() => {
                    var r;
                    return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
                        var r;
                        null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                    }
                }), n(() => (t && (t._pendingUpdate = s), () => {
                    t && (t._pendingUpdate = s)
                })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        5100: (e, t) => {
            "use strict";

            function r(e) {
                let {
                    widthInt: t,
                    heightInt: r,
                    blurWidth: i,
                    blurHeight: n,
                    blurDataURL: o,
                    objectFit: s
                } = e, a = i ? 40 * i : t, l = n ? 40 * n : r, c = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        5202: (e, t, r) => {
            "use strict";

            function i() {
                var e = Object.create(null);

                function t(e, t) {
                    var r = void 0;
                    self.troikaDefine = function(e) {
                        return r = e
                    };
                    var i = URL.createObjectURL(new Blob(["/** " + e.replace(/\*/g, "") + " **/\n\ntroikaDefine(\n" + t + "\n)"], {
                        type: "application/javascript"
                    }));
                    try {
                        importScripts(i)
                    } catch (e) {
                        console.error(e)
                    }
                    return URL.revokeObjectURL(i), delete self.troikaDefine, r
                }
                self.addEventListener("message", function(r) {
                    var i = r.data,
                        n = i.messageId,
                        o = i.action,
                        s = i.data;
                    try {
                        "registerModule" === o && function r(i, n) {
                            var o = i.id,
                                s = i.name,
                                a = i.dependencies;
                            void 0 === a && (a = []);
                            var l = i.init;
                            void 0 === l && (l = function() {});
                            var c = i.getTransferables;
                            if (void 0 === c && (c = null), !e[o]) try {
                                a = a.map(function(t) {
                                    return t && t.isWorkerModule && (r(t, function(e) {
                                        if (e instanceof Error) throw e
                                    }), t = e[t.id].value), t
                                }), l = t("<" + s + ">.init", l), c && (c = t("<" + s + ">.getTransferables", c));
                                var u = null;
                                "function" == typeof l ? u = l.apply(void 0, a) : console.error("worker module init function failed to rehydrate"), e[o] = {
                                    id: o,
                                    value: u,
                                    getTransferables: c
                                }, n(u)
                            } catch (e) {
                                e && e.noLog || console.error(e), n(e)
                            }
                        }(s, function(e) {
                            e instanceof Error ? postMessage({
                                messageId: n,
                                success: !1,
                                error: e.message
                            }) : postMessage({
                                messageId: n,
                                success: !0,
                                result: {
                                    isCallable: "function" == typeof e
                                }
                            })
                        }), "callModule" === o && function(t, r) {
                            var i, n = t.id,
                                o = t.args;
                            e[n] && "function" == typeof e[n].value || r(Error("Worker module " + n + ": not found or its 'init' did not return a function"));
                            try {
                                var s = (i = e[n]).value.apply(i, o);
                                s && "function" == typeof s.then ? s.then(a, function(e) {
                                    return r(e instanceof Error ? e : Error("" + e))
                                }) : a(s)
                            } catch (e) {
                                r(e)
                            }

                            function a(t) {
                                try {
                                    var i = e[n].getTransferables && e[n].getTransferables(t);
                                    i && Array.isArray(i) && i.length || (i = void 0), r(t, i)
                                } catch (e) {
                                    console.error(e), r(e)
                                }
                            }
                        }(s, function(e, t) {
                            e instanceof Error ? postMessage({
                                messageId: n,
                                success: !1,
                                error: e.message
                            }) : postMessage({
                                messageId: n,
                                success: !0,
                                result: e
                            }, t || void 0)
                        })
                    } catch (e) {
                        postMessage({
                            messageId: n,
                            success: !1,
                            error: e.stack
                        })
                    }
                })
            }
            r.d(t, {
                Qw: () => h,
                kl: () => function e(t) {
                    if ((!t || "function" != typeof t.init) && !a) throw Error("requires `options.init` function");
                    var r, i = t.dependencies,
                        s = t.init,
                        l = t.getTransferables,
                        u = t.workerId,
                        h = ((r = function() {
                            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                            return r._getInitResult().then(function(t) {
                                if ("function" == typeof t) return t.apply(void 0, e);
                                throw Error("Worker module function was called but `init` did not return a callable function")
                            })
                        })._getInitResult = function() {
                            var e = t.dependencies,
                                i = t.init,
                                n = Promise.all(e = Array.isArray(e) ? e.map(function(e) {
                                    return e && (e = e.onMainThread || e)._getInitResult && (e = e._getInitResult()), e
                                }) : []).then(function(e) {
                                    return i.apply(null, e)
                                });
                            return r._getInitResult = function() {
                                return n
                            }, n
                        }, r);
                    null == u && (u = "#default");
                    var f = "workerModule" + ++o,
                        m = t.name || f,
                        g = null;

                    function v() {
                        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                        if (!n()) return h.apply(void 0, e);
                        if (!g) {
                            g = p(u, "registerModule", v.workerModuleData);
                            var r = function() {
                                g = null, c[u].delete(r)
                            };
                            (c[u] || (c[u] = new Set)).add(r)
                        }
                        return g.then(function(t) {
                            if (t.isCallable) return p(u, "callModule", {
                                id: f,
                                args: e
                            });
                            throw Error("Worker module function was called but `init` did not return a callable function")
                        })
                    }
                    return i = i && i.map(function(t) {
                        return "function" != typeof t || t.workerModuleData || (a = !0, t = e({
                            workerId: u,
                            name: "<" + m + "> function dependency: " + t.name,
                            init: "function(){return (\n" + d(t) + "\n)}"
                        }), a = !1), t && t.workerModuleData && (t = t.workerModuleData), t
                    }), v.workerModuleData = {
                        isWorkerModule: !0,
                        id: f,
                        name: m,
                        dependencies: i,
                        init: d(s),
                        getTransferables: l && d(l)
                    }, v.onMainThread = h, v
                }
            }), r(7358);
            var n = function() {
                    var e = !1;
                    if ("undefined" != typeof window && void 0 !== window.document) try {
                        new Worker(URL.createObjectURL(new Blob([""], {
                            type: "application/javascript"
                        }))).terminate(), e = !0
                    } catch (e) {
                        console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + e.message + "]")
                    }
                    return n = function() {
                        return e
                    }, e
                },
                o = 0,
                s = 0,
                a = !1,
                l = Object.create(null),
                c = Object.create(null),
                u = Object.create(null);

            function h(e) {
                c[e] && c[e].forEach(function(e) {
                    e()
                }), l[e] && (l[e].terminate(), delete l[e])
            }

            function d(e) {
                var t = e.toString();
                return !/^function/.test(t) && /^\w+\s*\(/.test(t) && (t = "function " + t), t
            }

            function p(e, t, r) {
                return new Promise(function(n, o) {
                    var a = ++s;
                    u[a] = function(e) {
                        e.success ? n(e.result) : o(Error("Error in worker " + t + " call: " + e.error))
                    }, (function(e) {
                        var t = l[e];
                        if (!t) {
                            var r = d(i);
                            (t = l[e] = new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: " + e.replace(/\*/g, "") + " **/\n\n;(" + r + ")()"], {
                                type: "application/javascript"
                            })))).onmessage = function(e) {
                                var t = e.data,
                                    r = t.messageId,
                                    i = u[r];
                                if (!i) throw Error("WorkerModule response with empty or unknown messageId");
                                delete u[r], i(t)
                            }
                        }
                        return t
                    })(e).postMessage({
                        messageId: a,
                        action: t,
                        data: r
                    })
                })
            }
        },
        5220: (e, t, r) => {
            "use strict";
            e.exports = r(1724)
        },
        5286: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var i = r(3264);
            let n = new WeakMap;
            class o extends i.aHM {
                constructor(e) {
                    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
                        position: "POSITION",
                        normal: "NORMAL",
                        color: "COLOR",
                        uv: "TEX_COORD"
                    }, this.defaultAttributeTypes = {
                        position: "Float32Array",
                        normal: "Float32Array",
                        color: "Float32Array",
                        uv: "Float32Array"
                    }
                }
                setDecoderPath(e) {
                    return this.decoderPath = e, this
                }
                setDecoderConfig(e) {
                    return this.decoderConfig = e, this
                }
                setWorkerLimit(e) {
                    return this.workerLimit = e, this
                }
                load(e, t, r, n) {
                    let o = new i.Y9S(this.manager);
                    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, e => {
                        this.parse(e, t, n)
                    }, r, n)
                }
                parse(e, t, r = () => {}) {
                    this.decodeDracoFile(e, t, null, null, i.er$, r).catch(r)
                }
                decodeDracoFile(e, t, r, n, o = i.Zr2, s = () => {}) {
                    let a = {
                        attributeIDs: r || this.defaultAttributeIDs,
                        attributeTypes: n || this.defaultAttributeTypes,
                        useUniqueIDs: !!r,
                        vertexColorSpace: o
                    };
                    return this.decodeGeometry(e, a).then(t).catch(s)
                }
                decodeGeometry(e, t) {
                    let r;
                    let i = JSON.stringify(t);
                    if (n.has(e)) {
                        let t = n.get(e);
                        if (t.key === i) return t.promise;
                        if (0 === e.byteLength) throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
                    }
                    let o = this.workerNextTaskID++,
                        s = e.byteLength,
                        a = this._getWorker(o, s).then(i => (r = i, new Promise((i, n) => {
                            r._callbacks[o] = {
                                resolve: i,
                                reject: n
                            }, r.postMessage({
                                type: "decode",
                                id: o,
                                taskConfig: t,
                                buffer: e
                            }, [e])
                        }))).then(e => this._createGeometry(e.geometry));
                    return a.catch(() => !0).then(() => {
                        r && o && this._releaseTask(r, o)
                    }), n.set(e, {
                        key: i,
                        promise: a
                    }), a
                }
                _createGeometry(e) {
                    let t = new i.LoY;
                    e.index && t.setIndex(new i.THS(e.index.array, 1));
                    for (let r = 0; r < e.attributes.length; r++) {
                        let n = e.attributes[r],
                            o = n.name,
                            s = n.array,
                            a = n.itemSize,
                            l = new i.THS(s, a);
                        "color" === o && (this._assignVertexColorSpace(l, n.vertexColorSpace), l.normalized = s instanceof Float32Array == !1), t.setAttribute(o, l)
                    }
                    return t
                }
                _assignVertexColorSpace(e, t) {
                    if (t !== i.er$) return;
                    let r = new i.Q1f;
                    for (let t = 0, n = e.count; t < n; t++) r.fromBufferAttribute(e, t), i.ppV.toWorkingColorSpace(r, i.er$), e.setXYZ(t, r.r, r.g, r.b)
                }
                _loadLibrary(e, t) {
                    let r = new i.Y9S(this.manager);
                    return r.setPath(this.decoderPath), r.setResponseType(t), r.setWithCredentials(this.withCredentials), new Promise((t, i) => {
                        r.load(e, t, void 0, i)
                    })
                }
                preload() {
                    return this._initDecoder(), this
                }
                _initDecoder() {
                    if (this.decoderPending) return this.decoderPending;
                    let e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
                        t = [];
                    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(t => {
                        let r = t[0];
                        e || (this.decoderConfig.wasmBinary = t[1]);
                        let i = s.toString(),
                            n = ["/* draco decoder */", r, "", "/* worker */", i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))].join("\n");
                        this.workerSourceURL = URL.createObjectURL(new Blob([n]))
                    }), this.decoderPending
                }
                _getWorker(e, t) {
                    return this._initDecoder().then(() => {
                        if (this.workerPool.length < this.workerLimit) {
                            let e = new Worker(this.workerSourceURL);
                            e._callbacks = {}, e._taskCosts = {}, e._taskLoad = 0, e.postMessage({
                                type: "init",
                                decoderConfig: this.decoderConfig
                            }), e.onmessage = function(t) {
                                let r = t.data;
                                switch (r.type) {
                                    case "decode":
                                        e._callbacks[r.id].resolve(r);
                                        break;
                                    case "error":
                                        e._callbacks[r.id].reject(r);
                                        break;
                                    default:
                                        console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"')
                                }
                            }, this.workerPool.push(e)
                        } else this.workerPool.sort(function(e, t) {
                            return e._taskLoad > t._taskLoad ? -1 : 1
                        });
                        let r = this.workerPool[this.workerPool.length - 1];
                        return r._taskCosts[e] = t, r._taskLoad += t, r
                    })
                }
                _releaseTask(e, t) {
                    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
                }
                debug() {
                    console.log("Task load: ", this.workerPool.map(e => e._taskLoad))
                }
                dispose() {
                    for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
                    return this.workerPool.length = 0, "" !== this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), this
                }
            }

            function s() {
                let e, t;
                onmessage = function(r) {
                    let i = r.data;
                    switch (i.type) {
                        case "init":
                            e = i.decoderConfig, t = new Promise(function(t) {
                                e.onModuleLoaded = function(e) {
                                    t({
                                        draco: e
                                    })
                                }, DracoDecoderModule(e)
                            });
                            break;
                        case "decode":
                            let n = i.buffer,
                                o = i.taskConfig;
                            t.then(e => {
                                let t = e.draco,
                                    r = new t.Decoder;
                                try {
                                    let e = function(e, t, r, i) {
                                            let n, o;
                                            let s = i.attributeIDs,
                                                a = i.attributeTypes,
                                                l = t.GetEncodedGeometryType(r);
                                            if (l === e.TRIANGULAR_MESH) n = new e.Mesh, o = t.DecodeArrayToMesh(r, r.byteLength, n);
                                            else if (l === e.POINT_CLOUD) n = new e.PointCloud, o = t.DecodeArrayToPointCloud(r, r.byteLength, n);
                                            else throw Error("THREE.DRACOLoader: Unexpected geometry type.");
                                            if (!o.ok() || 0 === n.ptr) throw Error("THREE.DRACOLoader: Decoding failed: " + o.error_msg());
                                            let c = {
                                                index: null,
                                                attributes: []
                                            };
                                            for (let r in s) {
                                                let o, l;
                                                let u = self[a[r]];
                                                if (i.useUniqueIDs) l = s[r], o = t.GetAttributeByUniqueId(n, l);
                                                else {
                                                    if (-1 === (l = t.GetAttributeId(n, e[s[r]]))) continue;
                                                    o = t.GetAttribute(n, l)
                                                }
                                                let h = function(e, t, r, i, n, o) {
                                                    let s = o.num_components(),
                                                        a = r.num_points() * s,
                                                        l = a * n.BYTES_PER_ELEMENT,
                                                        c = function(e, t) {
                                                            switch (t) {
                                                                case Float32Array:
                                                                    return e.DT_FLOAT32;
                                                                case Int8Array:
                                                                    return e.DT_INT8;
                                                                case Int16Array:
                                                                    return e.DT_INT16;
                                                                case Int32Array:
                                                                    return e.DT_INT32;
                                                                case Uint8Array:
                                                                    return e.DT_UINT8;
                                                                case Uint16Array:
                                                                    return e.DT_UINT16;
                                                                case Uint32Array:
                                                                    return e.DT_UINT32
                                                            }
                                                        }(e, n),
                                                        u = e._malloc(l);
                                                    t.GetAttributeDataArrayForAllPoints(r, o, c, l, u);
                                                    let h = new n(e.HEAPF32.buffer, u, a).slice();
                                                    return e._free(u), {
                                                        name: i,
                                                        array: h,
                                                        itemSize: s
                                                    }
                                                }(e, t, n, r, u, o);
                                                "color" === r && (h.vertexColorSpace = i.vertexColorSpace), c.attributes.push(h)
                                            }
                                            return l === e.TRIANGULAR_MESH && (c.index = function(e, t, r) {
                                                let i = 3 * r.num_faces(),
                                                    n = 4 * i,
                                                    o = e._malloc(n);
                                                t.GetTrianglesUInt32Array(r, n, o);
                                                let s = new Uint32Array(e.HEAPF32.buffer, o, i).slice();
                                                return e._free(o), {
                                                    array: s,
                                                    itemSize: 1
                                                }
                                            }(e, t, n)), e.destroy(n), c
                                        }(t, r, new Int8Array(n), o),
                                        s = e.attributes.map(e => e.array.buffer);
                                    e.index && s.push(e.index.array.buffer), self.postMessage({
                                        type: "decode",
                                        id: i.id,
                                        geometry: e
                                    }, s)
                                } catch (e) {
                                    console.error(e), self.postMessage({
                                        type: "error",
                                        id: i.id,
                                        error: e.message
                                    })
                                } finally {
                                    t.destroy(r)
                                }
                            })
                    }
                }
            }
        },
        5454: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            let i = function() {
                return function(e) {
                    var t, r, i, n, o = {
                            R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
                            EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
                            ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
                            ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
                            AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
                            CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
                            B: "a,3,f+2,2v,690",
                            S: "9,2,k",
                            WS: "c,k,4f4,1vk+a,u,1j,335",
                            ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
                            BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
                            NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
                            AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
                            LRO: "6ct",
                            RLO: "6cu",
                            LRE: "6cq",
                            RLE: "6cr",
                            PDF: "6cs",
                            LRI: "6ee",
                            RLI: "6ef",
                            FSI: "6eg",
                            PDI: "6eh"
                        },
                        s = {},
                        a = {};
                    s.L = 1, a[1] = "L", Object.keys(o).forEach(function(e, t) {
                        s[e] = 1 << t + 1, a[s[e]] = e
                    }), Object.freeze(s);
                    var l = s.LRI | s.RLI | s.FSI,
                        c = s.L | s.R | s.AL,
                        u = s.B | s.S | s.WS | s.ON | s.FSI | s.LRI | s.RLI | s.PDI,
                        h = s.BN | s.RLE | s.LRE | s.RLO | s.LRO | s.PDF,
                        d = s.S | s.WS | s.B | l | s.PDI | h,
                        p = null;

                    function f(e) {
                        return ! function() {
                            if (!p) {
                                p = new Map;
                                var e = function(e) {
                                    if (o.hasOwnProperty(e)) {
                                        var t = 0;
                                        o[e].split(",").forEach(function(r) {
                                            var i = r.split("+"),
                                                n = i[0],
                                                o = i[1];
                                            n = parseInt(n, 36), o = o ? parseInt(o, 36) : 0, p.set(t += n, s[e]);
                                            for (var a = 0; a < o; a++) p.set(++t, s[e])
                                        })
                                    }
                                };
                                for (var t in o) e(t)
                            }
                        }(), p.get(e.codePointAt(0)) || s.L
                    }
                    var m = {
                        pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
                        canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
                    };

                    function g(e, t) {
                        var r, i = 0,
                            n = new Map,
                            o = t && new Map;
                        return e.split(",").forEach(function e(s) {
                            if (-1 !== s.indexOf("+"))
                                for (var a = +s; a--;) e(r);
                            else {
                                r = s;
                                var l = s.split(">"),
                                    c = l[0],
                                    u = l[1];
                                c = String.fromCodePoint(i += parseInt(c, 36)), u = String.fromCodePoint(i += parseInt(u, 36)), n.set(c, u), t && o.set(u, c)
                            }
                        }), {
                            map: n,
                            reverseMap: o
                        }
                    }

                    function v() {
                        if (!t) {
                            var e = g(m.pairs, !0),
                                n = e.map,
                                o = e.reverseMap;
                            t = n, r = o, i = g(m.canonical, !1).map
                        }
                    }

                    function y(e) {
                        return v(), t.get(e) || null
                    }

                    function b(e) {
                        return v(), r.get(e) || null
                    }

                    function x(e) {
                        return v(), i.get(e) || null
                    }
                    var w = s.L,
                        A = s.R,
                        E = s.EN,
                        S = s.ES,
                        T = s.ET,
                        _ = s.AN,
                        k = s.CS,
                        C = s.B,
                        R = s.S,
                        M = s.ON,
                        j = s.BN,
                        I = s.NSM,
                        O = s.AL,
                        L = s.LRO,
                        P = s.RLO,
                        D = s.LRE,
                        N = s.RLE,
                        B = s.PDF,
                        F = s.LRI,
                        z = s.RLI,
                        U = s.FSI,
                        H = s.PDI;

                    function G(e) {
                        return ! function() {
                            if (!n) {
                                var e = g("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", !0),
                                    t = e.map;
                                e.reverseMap.forEach(function(e, r) {
                                    t.set(r, e)
                                }), n = t
                            }
                        }(), n.get(e) || null
                    }

                    function W(e, t, r, i) {
                        var n = e.length;
                        r = Math.max(0, null == r ? 0 : +r), i = Math.min(n - 1, null == i ? n - 1 : +i);
                        var o = [];
                        return t.paragraphs.forEach(function(n) {
                            var s = Math.max(r, n.start),
                                a = Math.min(i, n.end);
                            if (s < a) {
                                for (var l = t.levels.slice(s, a + 1), c = a; c >= s && f(e[c]) & d; c--) l[c] = n.level;
                                for (var u = n.level, h = 1 / 0, p = 0; p < l.length; p++) {
                                    var m = l[p];
                                    m > u && (u = m), m < h && (h = 1 | m)
                                }
                                for (var g = u; g >= h; g--)
                                    for (var v = 0; v < l.length; v++)
                                        if (l[v] >= g) {
                                            for (var y = v; v + 1 < l.length && l[v + 1] >= g;) v++;
                                            v > y && o.push([y + s, v + s])
                                        }
                            }
                        }), o
                    }

                    function X(e, t, r, i) {
                        for (var n = W(e, t, r, i), o = [], s = 0; s < e.length; s++) o[s] = s;
                        return n.forEach(function(e) {
                            for (var t = e[0], r = e[1], i = o.slice(t, r + 1), n = i.length; n--;) o[r - n] = i[n]
                        }), o
                    }
                    return e.closingToOpeningBracket = b, e.getBidiCharType = f, e.getBidiCharTypeName = function(e) {
                        return a[f(e)]
                    }, e.getCanonicalBracket = x, e.getEmbeddingLevels = function(e, t) {
                        for (var r = new Uint32Array(e.length), i = 0; i < e.length; i++) r[i] = f(e[i]);
                        var n = new Map;

                        function o(e, t) {
                            var i = r[e];
                            r[e] = t, n.set(i, n.get(i) - 1), i & u && n.set(u, n.get(u) - 1), n.set(t, (n.get(t) || 0) + 1), t & u && n.set(u, (n.get(u) || 0) + 1)
                        }
                        for (var s = new Uint8Array(e.length), a = new Map, p = [], m = null, g = 0; g < e.length; g++) m || p.push(m = {
                            start: g,
                            end: e.length - 1,
                            level: "rtl" === t ? 1 : "ltr" === t ? 0 : tM(g, !1)
                        }), r[g] & C && (m.end = g, m = null);
                        for (var v = N | D | P | L | l | H | B | C, G = function(e) {
                                return e + (1 & e ? 1 : 2)
                            }, W = function(e) {
                                return e + (1 & e ? 2 : 1)
                            }, X = 0; X < p.length; X++) {
                            var Y = [{
                                    _level: (m = p[X]).level,
                                    _override: 0,
                                    _isolate: 0
                                }],
                                q = void 0,
                                V = 0,
                                $ = 0,
                                K = 0;
                            n.clear();
                            for (var J = m.start; J <= m.end; J++) {
                                var Z = r[J];
                                if (q = Y[Y.length - 1], n.set(Z, (n.get(Z) || 0) + 1), Z & u && n.set(u, (n.get(u) || 0) + 1), Z & v) {
                                    if (Z & (N | D)) {
                                        s[J] = q._level;
                                        var Q = (Z === N ? W : G)(q._level);
                                        !(Q <= 125) || V || $ ? !V && $++ : Y.push({
                                            _level: Q,
                                            _override: 0,
                                            _isolate: 0
                                        })
                                    } else if (Z & (P | L)) {
                                        s[J] = q._level;
                                        var ee = (Z === P ? W : G)(q._level);
                                        !(ee <= 125) || V || $ ? !V && $++ : Y.push({
                                            _level: ee,
                                            _override: Z & P ? A : w,
                                            _isolate: 0
                                        })
                                    } else if (Z & l) {
                                        Z & U && (Z = 1 === tM(J + 1, !0) ? z : F), s[J] = q._level, q._override && o(J, q._override);
                                        var et = (Z === z ? W : G)(q._level);
                                        et <= 125 && 0 === V && 0 === $ ? (K++, Y.push({
                                            _level: et,
                                            _override: 0,
                                            _isolate: 1,
                                            _isolInitIndex: J
                                        })) : V++
                                    } else if (Z & H) {
                                        if (V > 0) V--;
                                        else if (K > 0) {
                                            for ($ = 0; !Y[Y.length - 1]._isolate;) Y.pop();
                                            var er = Y[Y.length - 1]._isolInitIndex;
                                            null != er && (a.set(er, J), a.set(J, er)), Y.pop(), K--
                                        }
                                        q = Y[Y.length - 1], s[J] = q._level, q._override && o(J, q._override)
                                    } else Z & B ? (0 === V && ($ > 0 ? $-- : !q._isolate && Y.length > 1 && (Y.pop(), q = Y[Y.length - 1])), s[J] = q._level) : Z & C && (s[J] = m.level)
                                } else s[J] = q._level, q._override && Z !== j && o(J, q._override)
                            }
                            for (var ei = [], en = null, eo = m.start; eo <= m.end; eo++) {
                                var es = r[eo];
                                if (!(es & h)) {
                                    var ea = s[eo],
                                        el = es & l,
                                        ec = es === H;
                                    en && ea === en._level ? (en._end = eo, en._endsWithIsolInit = el) : ei.push(en = {
                                        _start: eo,
                                        _end: eo,
                                        _level: ea,
                                        _startsWithPDI: ec,
                                        _endsWithIsolInit: el
                                    })
                                }
                            }
                            for (var eu = [], eh = 0; eh < ei.length; eh++) {
                                var ed = ei[eh];
                                if (!ed._startsWithPDI || ed._startsWithPDI && !a.has(ed._start)) {
                                    for (var ep = [en = ed], ef = void 0; en && en._endsWithIsolInit && null != (ef = a.get(en._end));)
                                        for (var em = eh + 1; em < ei.length; em++)
                                            if (ei[em]._start === ef) {
                                                ep.push(en = ei[em]);
                                                break
                                            }
                                    for (var eg = [], ev = 0; ev < ep.length; ev++)
                                        for (var ey = ep[ev], eb = ey._start; eb <= ey._end; eb++) eg.push(eb);
                                    for (var ex = s[eg[0]], ew = m.level, eA = eg[0] - 1; eA >= 0; eA--)
                                        if (!(r[eA] & h)) {
                                            ew = s[eA];
                                            break
                                        }
                                    var eE = eg[eg.length - 1],
                                        eS = s[eE],
                                        eT = m.level;
                                    if (!(r[eE] & l)) {
                                        for (var e_ = eE + 1; e_ <= m.end; e_++)
                                            if (!(r[e_] & h)) {
                                                eT = s[e_];
                                                break
                                            }
                                    }
                                    eu.push({
                                        _seqIndices: eg,
                                        _sosType: Math.max(ew, ex) % 2 ? A : w,
                                        _eosType: Math.max(eT, eS) % 2 ? A : w
                                    })
                                }
                            }
                            for (var ek = 0; ek < eu.length; ek++) {
                                var eC = eu[ek],
                                    eR = eC._seqIndices,
                                    eM = eC._sosType,
                                    ej = eC._eosType,
                                    eI = 1 & s[eR[0]] ? A : w;
                                if (n.get(I))
                                    for (var eO = 0; eO < eR.length; eO++) {
                                        var eL = eR[eO];
                                        if (r[eL] & I) {
                                            for (var eP = eM, eD = eO - 1; eD >= 0; eD--)
                                                if (!(r[eR[eD]] & h)) {
                                                    eP = r[eR[eD]];
                                                    break
                                                }
                                            o(eL, eP & (l | H) ? M : eP)
                                        }
                                    }
                                if (n.get(E))
                                    for (var eN = 0; eN < eR.length; eN++) {
                                        var eB = eR[eN];
                                        if (r[eB] & E)
                                            for (var eF = eN - 1; eF >= -1; eF--) {
                                                var ez = -1 === eF ? eM : r[eR[eF]];
                                                if (ez & c) {
                                                    ez === O && o(eB, _);
                                                    break
                                                }
                                            }
                                    }
                                if (n.get(O))
                                    for (var eU = 0; eU < eR.length; eU++) {
                                        var eH = eR[eU];
                                        r[eH] & O && o(eH, A)
                                    }
                                if (n.get(S) || n.get(k))
                                    for (var eG = 1; eG < eR.length - 1; eG++) {
                                        var eW = eR[eG];
                                        if (r[eW] & (S | k)) {
                                            for (var eX = 0, eY = 0, eq = eG - 1; eq >= 0 && (eX = r[eR[eq]]) & h; eq--);
                                            for (var eV = eG + 1; eV < eR.length && (eY = r[eR[eV]]) & h; eV++);
                                            eX === eY && (r[eW] === S ? eX === E : eX & (E | _)) && o(eW, eX)
                                        }
                                    }
                                if (n.get(E)) {
                                    for (var e$ = 0; e$ < eR.length; e$++)
                                        if (r[eR[e$]] & E) {
                                            for (var eK = e$ - 1; eK >= 0 && r[eR[eK]] & (T | h); eK--) o(eR[eK], E);
                                            for (e$++; e$ < eR.length && r[eR[e$]] & (T | h | E); e$++) r[eR[e$]] !== E && o(eR[e$], E)
                                        }
                                }
                                if (n.get(T) || n.get(S) || n.get(k))
                                    for (var eJ = 0; eJ < eR.length; eJ++) {
                                        var eZ = eR[eJ];
                                        if (r[eZ] & (T | S | k)) {
                                            o(eZ, M);
                                            for (var eQ = eJ - 1; eQ >= 0 && r[eR[eQ]] & h; eQ--) o(eR[eQ], M);
                                            for (var e0 = eJ + 1; e0 < eR.length && r[eR[e0]] & h; e0++) o(eR[e0], M)
                                        }
                                    }
                                if (n.get(E))
                                    for (var e1 = 0, e2 = eM; e1 < eR.length; e1++) {
                                        var e3 = eR[e1],
                                            e5 = r[e3];
                                        e5 & E ? e2 === w && o(e3, w) : e5 & c && (e2 = e5)
                                    }
                                if (n.get(u)) {
                                    for (var e4 = A | E | _, e6 = e4 | w, e8 = [], e9 = [], e7 = 0; e7 < eR.length; e7++)
                                        if (r[eR[e7]] & u) {
                                            var te = e[eR[e7]],
                                                tt = void 0;
                                            if (null !== y(te)) {
                                                if (e9.length < 63) e9.push({
                                                    char: te,
                                                    seqIndex: e7
                                                });
                                                else break
                                            } else if (null !== (tt = b(te)))
                                                for (var tr = e9.length - 1; tr >= 0; tr--) {
                                                    var ti = e9[tr].char;
                                                    if (ti === tt || ti === b(x(te)) || y(x(ti)) === te) {
                                                        e8.push([e9[tr].seqIndex, e7]), e9.length = tr;
                                                        break
                                                    }
                                                }
                                        }
                                    e8.sort(function(e, t) {
                                        return e[0] - t[0]
                                    });
                                    for (var tn = 0; tn < e8.length; tn++) {
                                        for (var to = e8[tn], ts = to[0], ta = to[1], tl = !1, tc = 0, tu = ts + 1; tu < ta; tu++) {
                                            var th = eR[tu];
                                            if (r[th] & e6) {
                                                tl = !0;
                                                var td = r[th] & e4 ? A : w;
                                                if (td === eI) {
                                                    tc = td;
                                                    break
                                                }
                                            }
                                        }
                                        if (tl && !tc) {
                                            tc = eM;
                                            for (var tp = ts - 1; tp >= 0; tp--) {
                                                var tf = eR[tp];
                                                if (r[tf] & e6) {
                                                    var tm = r[tf] & e4 ? A : w;
                                                    tc = tm !== eI ? tm : eI;
                                                    break
                                                }
                                            }
                                        }
                                        if (tc) {
                                            if (r[eR[ts]] = r[eR[ta]] = tc, tc !== eI) {
                                                for (var tg = ts + 1; tg < eR.length; tg++)
                                                    if (!(r[eR[tg]] & h)) {
                                                        f(e[eR[tg]]) & I && (r[eR[tg]] = tc);
                                                        break
                                                    }
                                            }
                                            if (tc !== eI) {
                                                for (var tv = ta + 1; tv < eR.length; tv++)
                                                    if (!(r[eR[tv]] & h)) {
                                                        f(e[eR[tv]]) & I && (r[eR[tv]] = tc);
                                                        break
                                                    }
                                            }
                                        }
                                    }
                                    for (var ty = 0; ty < eR.length; ty++)
                                        if (r[eR[ty]] & u) {
                                            for (var tb = ty, tx = ty, tw = eM, tA = ty - 1; tA >= 0; tA--)
                                                if (r[eR[tA]] & h) tb = tA;
                                                else {
                                                    tw = r[eR[tA]] & e4 ? A : w;
                                                    break
                                                }
                                            for (var tE = ej, tS = ty + 1; tS < eR.length; tS++)
                                                if (r[eR[tS]] & (u | h)) tx = tS;
                                                else {
                                                    tE = r[eR[tS]] & e4 ? A : w;
                                                    break
                                                }
                                            for (var tT = tb; tT <= tx; tT++) r[eR[tT]] = tw === tE ? tw : eI;
                                            ty = tx
                                        }
                                }
                            }
                            for (var t_ = m.start; t_ <= m.end; t_++) {
                                var tk = s[t_],
                                    tC = r[t_];
                                if (1 & tk ? tC & (w | E | _) && s[t_]++ : tC & A ? s[t_]++ : tC & (_ | E) && (s[t_] += 2), tC & h && (s[t_] = 0 === t_ ? m.level : s[t_ - 1]), t_ === m.end || f(e[t_]) & (R | C))
                                    for (var tR = t_; tR >= 0 && f(e[tR]) & d; tR--) s[tR] = m.level
                            }
                        }
                        return {
                            levels: s,
                            paragraphs: p
                        };

                        function tM(t, i) {
                            for (var n = t; n < e.length; n++) {
                                var o = r[n];
                                if (o & (A | O)) return 1;
                                if (o & (C | w) || i && o === H) break;
                                if (o & l) {
                                    var s = function(t) {
                                        for (var i = 1, n = t + 1; n < e.length; n++) {
                                            var o = r[n];
                                            if (o & C) break;
                                            if (o & H) {
                                                if (0 == --i) return n
                                            } else o & l && i++
                                        }
                                        return -1
                                    }(n);
                                    n = -1 === s ? e.length : s
                                }
                            }
                            return 0
                        }
                    }, e.getMirroredCharacter = G, e.getMirroredCharactersMap = function(e, t, r, i) {
                        var n = e.length;
                        r = Math.max(0, null == r ? 0 : +r), i = Math.min(n - 1, null == i ? n - 1 : +i);
                        for (var o = new Map, s = r; s <= i; s++)
                            if (1 & t[s]) {
                                var a = G(e[s]);
                                null !== a && o.set(s, a)
                            }
                        return o
                    }, e.getReorderSegments = W, e.getReorderedIndices = X, e.getReorderedString = function(e, t, r, i) {
                        var n = X(e, t, r, i),
                            o = [].concat(e);
                        return n.forEach(function(r, i) {
                            o[i] = (1 & t.levels[r] ? G(e[r]) : null) || e[r]
                        }), o.join("")
                    }, e.openingToClosingBracket = y, Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e
                }({})
            }
        },
        5564: (e, t, r) => {
            "use strict";
            var i = r(7358);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                default: function() {
                    return g
                },
                defaultHead: function() {
                    return d
                }
            });
            let n = r(8229),
                o = r(6966),
                s = r(5155),
                a = o._(r(2115)),
                l = n._(r(5029)),
                c = r(2464),
                u = r(2830),
                h = r(7544);

            function d(e) {
                void 0 === e && (e = !1);
                let t = [(0, s.jsx)("meta", {
                    charSet: "utf-8"
                }, "charset")];
                return e || t.push((0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                }, "viewport")), t
            }

            function p(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            r(3230);
            let f = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, t) {
                let {
                    inAmpMode: r
                } = t;
                return e.reduce(p, []).reverse().concat(d(r).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        r = new Set,
                        i = {};
                    return n => {
                        let o = !0,
                            s = !1;
                        if (n.key && "number" != typeof n.key && n.key.indexOf("$") > 0) {
                            s = !0;
                            let t = n.key.slice(n.key.indexOf("$") + 1);
                            e.has(t) ? o = !1 : e.add(t)
                        }
                        switch (n.type) {
                            case "title":
                            case "base":
                                t.has(n.type) ? o = !1 : t.add(n.type);
                                break;
                            case "meta":
                                for (let e = 0, t = f.length; e < t; e++) {
                                    let t = f[e];
                                    if (n.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) r.has(t) ? o = !1 : r.add(t);
                                        else {
                                            let e = n.props[t],
                                                r = i[t] || new Set;
                                            ("name" !== t || !s) && r.has(e) ? o = !1 : (r.add(e), i[t] = r)
                                        }
                                    }
                                }
                        }
                        return o
                    }
                }()).reverse().map((e, t) => {
                    let n = e.key || t;
                    if (i.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, a.default.cloneElement(e, t)
                    }
                    return a.default.cloneElement(e, {
                        key: n
                    })
                })
            }
            let g = function(e) {
                let {
                    children: t
                } = e, r = (0, a.useContext)(c.AmpStateContext), i = (0, a.useContext)(u.HeadManagerContext);
                return (0, s.jsx)(l.default, {
                    reduceComponentsToState: m,
                    headManager: i,
                    inAmpMode: (0, h.isInAmpMode)(r),
                    children: t
                })
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5643: (e, t, r) => {
            "use strict";
            e.exports = r(6115)
        },
        5695: (e, t, r) => {
            "use strict";
            var i = r(8999);
            r.o(i, "usePathname") && r.d(t, {
                usePathname: function() {
                    return i.usePathname
                }
            }), r.o(i, "useRouter") && r.d(t, {
                useRouter: function() {
                    return i.useRouter
                }
            })
        },
        5840: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                VALID_LOADERS: function() {
                    return r
                },
                imageConfigDefault: function() {
                    return i
                }
            });
            let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
                i = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "attachment",
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1
                }
        },
        5921: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var i = r(2115),
                n = r(7650),
                o = r(8926),
                s = r.n(o),
                a = r(8637),
                l = r.n(a);
            let c = !!("u" > typeof window && window.document && window.document.createElement);
            class u extends i.Component {
                constructor(e) {
                    super(e), this.state = {
                        flickityReady: !1,
                        flickityCreated: !1,
                        cellCount: 0
                    }, this.carousel = null, this.flkty = null
                }
                static getDerivedStateFromProps(e, t) {
                    let r = i.Children.count(e.children);
                    return r !== t.cellCount ? {
                        flickityReady: !1,
                        cellCount: r
                    } : null
                }
                componentDidUpdate(e, t) {
                    if (!this.flkty) return;
                    let {
                        children: r,
                        options: {
                            draggable: i,
                            initialIndex: n
                        },
                        reloadOnUpdate: o,
                        disableImagesLoaded: a
                    } = this.props, {
                        flickityReady: l
                    } = this.state;
                    if (o || !t.flickityReady && l) {
                        let e = this.flkty.isActive;
                        this.flkty.deactivate(), this.flkty.selectedIndex = n || 0, this.flkty.options.draggable = void 0 === i ? !!r && r.length > 1 : i, e && this.flkty.activate(), !a && this.carousel && s()(this.carousel, () => {
                            this.flkty.reloadCells()
                        })
                    } else this.flkty.reloadCells()
                }
                async componentDidMount() {
                    if (!c || !this.carousel) return null;
                    let e = (await r.e(155).then(r.t.bind(r, 8155, 23))).default,
                        {
                            flickityRef: t,
                            options: i
                        } = this.props;
                    this.flkty = new e(this.carousel, i), t && t(this.flkty), this.props.static ? this.setReady() : this.setState({
                        flickityCreated: !0
                    })
                }
                setReady() {
                    if (this.state.flickityReady) return;
                    let e = () => this.setState({
                        flickityReady: !0
                    });
                    this.props.disableImagesLoaded ? e() : s()(this.carousel, e)
                }
                renderPortal() {
                    if (!this.carousel) return null;
                    let e = this.carousel.querySelector(".flickity-slider");
                    if (e) {
                        let t = (0, n.createPortal)(this.props.children, e);
                        return setTimeout(() => this.setReady(), 0), t
                    }
                }
                render() {
                    return i.createElement(this.props.elementType, {
                        className: this.props.className,
                        ref: e => {
                            this.carousel = e
                        }
                    }, this.props.static ? this.props.children : this.renderPortal())
                }
            }
            u.propTypes = {
                children: l().array,
                className: l().string,
                disableImagesLoaded: l().bool,
                elementType: l().string,
                flickityRef: l().func,
                options: l().object,
                reloadOnUpdate: l().bool,
                static: l().bool
            }, u.defaultProps = {
                className: "",
                disableImagesLoaded: !1,
                elementType: "div",
                options: {},
                reloadOnUpdate: !1,
                static: !1
            }
        },
        6059: (e, t, r) => {
            "use strict";
            let i, n, o, s, a;
            r.d(t, {
                A: () => en,
                B: () => O,
                C: () => eo,
                E: () => L,
                a: () => j,
                b: () => M,
                c: () => eM,
                d: () => eI,
                e: () => em,
                f: () => e$,
                i: () => C,
                j: () => eN,
                k: () => eB,
                l: () => eF,
                u: () => I
            });
            var l = r(3264),
                c = r(7431),
                u = r(2115),
                h = r.t(u, 2),
                d = r(1933),
                p = r(5643);
            let f = e => {
                    let t;
                    let r = new Set,
                        i = (e, i) => {
                            let n = "function" == typeof e ? e(t) : e;
                            if (!Object.is(n, t)) {
                                let e = t;
                                t = (null != i ? i : "object" != typeof n || null === n) ? n : Object.assign({}, t, n), r.forEach(r => r(t, e))
                            }
                        },
                        n = () => t,
                        o = {
                            setState: i,
                            getState: n,
                            getInitialState: () => s,
                            subscribe: e => (r.add(e), () => r.delete(e))
                        },
                        s = t = e(i, n, o);
                    return o
                },
                m = e => e ? f(e) : f,
                {
                    useSyncExternalStoreWithSelector: g
                } = p,
                v = e => e,
                y = (e, t) => {
                    let r = m(e),
                        i = (e, i = t) => (function(e, t = v, r) {
                            let i = g(e.subscribe, e.getState, e.getInitialState, t, r);
                            return u.useDebugValue(i), i
                        })(r, e, i);
                    return Object.assign(i, r), i
                },
                b = (e, t) => e ? y(e, t) : y;
            var x = r(5220),
                w = r.n(x),
                A = r(2407),
                E = r(228),
                S = r(5155),
                T = r(6354);

            function _(e) {
                let t = e.root;
                for (; t.getState().previousRoot;) t = t.getState().previousRoot;
                return t
            }
            r(7358), h.act;
            let k = e => e && e.isOrthographicCamera,
                C = e => e && e.hasOwnProperty("current"),
                R = e => null != e && ("string" == typeof e || "number" == typeof e || e.isColor),
                M = ((e, t) => "undefined" != typeof window && ((null == (e = window.document) ? void 0 : e.createElement) || (null == (t = window.navigator) ? void 0 : t.product) === "ReactNative"))() ? u.useLayoutEffect : u.useEffect;

            function j(e) {
                let t = u.useRef(e);
                return M(() => void(t.current = e), [e]), t
            }

            function I() {
                let e = (0, T.u5)(),
                    t = (0, T.y3)();
                return u.useMemo(() => ({
                    children: r
                }) => {
                    let i = (0, T.Nz)(e, !0, e => e.type === u.StrictMode) ? u.StrictMode : u.Fragment;
                    return (0, S.jsx)(i, {
                        children: (0, S.jsx)(t, {
                            children: r
                        })
                    })
                }, [e, t])
            }

            function O({
                set: e
            }) {
                return M(() => (e(new Promise(() => null)), () => e(!1)), [e]), null
            }
            let L = (e => ((e = class extends u.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        error: !1
                    }
                }
                componentDidCatch(e) {
                    this.props.set(e)
                }
                render() {
                    return this.state.error ? null : this.props.children
                }
            }).getDerivedStateFromError = () => ({
                error: !0
            }), e))();

            function P(e) {
                var t;
                let r = "undefined" != typeof window ? null != (t = window.devicePixelRatio) ? t : 2 : 1;
                return Array.isArray(e) ? Math.min(Math.max(e[0], r), e[1]) : e
            }

            function D(e) {
                var t;
                return null == (t = e.__r3f) ? void 0 : t.root.getState()
            }
            let N = {
                    obj: e => e === Object(e) && !N.arr(e) && "function" != typeof e,
                    fun: e => "function" == typeof e,
                    str: e => "string" == typeof e,
                    num: e => "number" == typeof e,
                    boo: e => "boolean" == typeof e,
                    und: e => void 0 === e,
                    nul: e => null === e,
                    arr: e => Array.isArray(e),
                    equ(e, t, {
                        arrays: r = "shallow",
                        objects: i = "reference",
                        strict: n = !0
                    } = {}) {
                        let o;
                        if (typeof e != typeof t || !!e != !!t) return !1;
                        if (N.str(e) || N.num(e) || N.boo(e)) return e === t;
                        let s = N.obj(e);
                        if (s && "reference" === i) return e === t;
                        let a = N.arr(e);
                        if (a && "reference" === r) return e === t;
                        if ((a || s) && e === t) return !0;
                        for (o in e)
                            if (!(o in t)) return !1;
                        if (s && "shallow" === r && "shallow" === i) {
                            for (o in n ? t : e)
                                if (!N.equ(e[o], t[o], {
                                        strict: n,
                                        objects: "reference"
                                    })) return !1
                        } else
                            for (o in n ? t : e)
                                if (e[o] !== t[o]) return !1;
                        if (N.und(o)) {
                            if (a && 0 === e.length && 0 === t.length || s && 0 === Object.keys(e).length && 0 === Object.keys(t).length) return !0;
                            if (e !== t) return !1
                        }
                        return !0
                    }
                },
                B = ["children", "key", "ref"];

            function F(e, t, r, i) {
                let n = null == e ? void 0 : e.__r3f;
                return !n && (n = {
                    root: t,
                    type: r,
                    parent: null,
                    children: [],
                    props: function(e) {
                        let t = {};
                        for (let r in e) B.includes(r) || (t[r] = e[r]);
                        return t
                    }(i),
                    object: e,
                    eventCount: 0,
                    handlers: {},
                    isHidden: !1
                }, e && (e.__r3f = n)), n
            }

            function z(e, t) {
                let r = e[t];
                if (!t.includes("-")) return {
                    root: e,
                    key: t,
                    target: r
                };
                for (let n of (r = e, t.split("-"))) {
                    var i;
                    t = n, e = r, r = null == (i = r) ? void 0 : i[t]
                }
                return {
                    root: e,
                    key: t,
                    target: r
                }
            }
            let U = /-\d+$/;

            function H(e, t) {
                if (N.str(t.props.attach)) {
                    if (U.test(t.props.attach)) {
                        let r = t.props.attach.replace(U, ""),
                            {
                                root: i,
                                key: n
                            } = z(e.object, r);
                        Array.isArray(i[n]) || (i[n] = [])
                    }
                    let {
                        root: r,
                        key: i
                    } = z(e.object, t.props.attach);
                    t.previousAttach = r[i], r[i] = t.object
                } else N.fun(t.props.attach) && (t.previousAttach = t.props.attach(e.object, t.object))
            }

            function G(e, t) {
                if (N.str(t.props.attach)) {
                    let {
                        root: r,
                        key: i
                    } = z(e.object, t.props.attach), n = t.previousAttach;
                    void 0 === n ? delete r[i] : r[i] = n
                } else null == t.previousAttach || t.previousAttach(e.object, t.object);
                delete t.previousAttach
            }
            let W = [...B, "args", "dispose", "attach", "object", "onUpdate", "dispose"],
                X = new Map,
                Y = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"],
                q = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;

            function V(e, t) {
                var r, i;
                let n = e.__r3f,
                    o = n && _(n).getState(),
                    s = null == n ? void 0 : n.eventCount;
                for (let r in t) {
                    let s = t[r];
                    if (W.includes(r)) continue;
                    if (n && q.test(r)) {
                        "function" == typeof s ? n.handlers[r] = s : delete n.handlers[r], n.eventCount = Object.keys(n.handlers).length;
                        continue
                    }
                    if (void 0 === s) continue;
                    let {
                        root: a,
                        key: c,
                        target: u
                    } = z(e, r);
                    u instanceof l.zgK && s instanceof l.zgK ? u.mask = s.mask : u instanceof l.Q1f && R(s) ? u.set(s) : null !== u && "object" == typeof u && "function" == typeof u.set && "function" == typeof u.copy && null != s && s.constructor && u.constructor === s.constructor ? u.copy(s) : null !== u && "object" == typeof u && "function" == typeof u.set && Array.isArray(s) ? "function" == typeof u.fromArray ? u.fromArray(s) : u.set(...s) : null !== u && "object" == typeof u && "function" == typeof u.set && "number" == typeof s ? "function" == typeof u.setScalar ? u.setScalar(s) : u.set(s) : (a[c] = s, o && !o.linear && Y.includes(c) && null != (i = a[c]) && i.isTexture && a[c].format === l.GWd && a[c].type === l.OUM && (a[c].colorSpace = l.er$))
                }
                if (null != n && n.parent && null != o && o.internal && null != (r = n.object) && r.isObject3D && s !== n.eventCount) {
                    let e = n.object,
                        t = o.internal.interaction.indexOf(e);
                    t > -1 && o.internal.interaction.splice(t, 1), n.eventCount && null !== e.raycast && o.internal.interaction.push(e)
                }
                return n && void 0 === n.props.attach && (n.object.isBufferGeometry ? n.props.attach = "geometry" : n.object.isMaterial && (n.props.attach = "material")), n && $(n), e
            }

            function $(e) {
                var t;
                if (!e.parent) return;
                null == e.props.onUpdate || e.props.onUpdate(e.object);
                let r = null == (t = e.root) ? void 0 : null == t.getState ? void 0 : t.getState();
                r && 0 === r.internal.frames && r.invalidate()
            }

            function K(e, t) {
                e.manual || (k(e) ? (e.left = -(t.width / 2), e.right = t.width / 2, e.top = t.height / 2, e.bottom = -(t.height / 2)) : e.aspect = t.width / t.height, e.updateProjectionMatrix())
            }
            let J = e => null == e ? void 0 : e.isObject3D;

            function Z(e) {
                return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId
            }

            function Q(e, t, r, i) {
                let n = r.get(t);
                n && (r.delete(t), 0 === r.size && (e.delete(i), n.target.releasePointerCapture(i)))
            }
            let ee = e => !!(null != e && e.render),
                et = u.createContext(null),
                er = (e, t) => {
                    let r = b((r, i) => {
                            let n;
                            let o = new l.Pq0,
                                s = new l.Pq0,
                                a = new l.Pq0;

                            function c(e = i().camera, t = s, r = i().size) {
                                let {
                                    width: n,
                                    height: l,
                                    top: u,
                                    left: h
                                } = r, d = n / l;
                                t.isVector3 ? a.copy(t) : a.set(...t);
                                let p = e.getWorldPosition(o).distanceTo(a);
                                if (k(e)) return {
                                    width: n / e.zoom,
                                    height: l / e.zoom,
                                    top: u,
                                    left: h,
                                    factor: 1,
                                    distance: p,
                                    aspect: d
                                }; {
                                    let t = 2 * Math.tan(e.fov * Math.PI / 180 / 2) * p,
                                        r = n / l * t;
                                    return {
                                        width: r,
                                        height: t,
                                        top: u,
                                        left: h,
                                        factor: n / r,
                                        distance: p,
                                        aspect: d
                                    }
                                }
                            }
                            let h = e => r(t => ({
                                    performance: { ...t.performance,
                                        current: e
                                    }
                                })),
                                d = new l.I9Y;
                            return {
                                set: r,
                                get: i,
                                gl: null,
                                camera: null,
                                raycaster: null,
                                events: {
                                    priority: 1,
                                    enabled: !0,
                                    connected: !1
                                },
                                scene: null,
                                xr: null,
                                invalidate: (t = 1) => e(i(), t),
                                advance: (e, r) => t(e, r, i()),
                                legacy: !1,
                                linear: !1,
                                flat: !1,
                                controls: null,
                                clock: new l.zD7,
                                pointer: d,
                                mouse: d,
                                frameloop: "always",
                                onPointerMissed: void 0,
                                performance: {
                                    current: 1,
                                    min: .5,
                                    max: 1,
                                    debounce: 200,
                                    regress: () => {
                                        let e = i();
                                        n && clearTimeout(n), e.performance.current !== e.performance.min && h(e.performance.min), n = setTimeout(() => h(i().performance.max), e.performance.debounce)
                                    }
                                },
                                size: {
                                    width: 0,
                                    height: 0,
                                    top: 0,
                                    left: 0
                                },
                                viewport: {
                                    initialDpr: 0,
                                    dpr: 0,
                                    width: 0,
                                    height: 0,
                                    top: 0,
                                    left: 0,
                                    aspect: 0,
                                    distance: 0,
                                    factor: 0,
                                    getCurrentViewport: c
                                },
                                setEvents: e => r(t => ({ ...t,
                                    events: { ...t.events,
                                        ...e
                                    }
                                })),
                                setSize: (e, t, n = 0, o = 0) => {
                                    let a = i().camera,
                                        l = {
                                            width: e,
                                            height: t,
                                            top: n,
                                            left: o
                                        };
                                    r(e => ({
                                        size: l,
                                        viewport: { ...e.viewport,
                                            ...c(a, s, l)
                                        }
                                    }))
                                },
                                setDpr: e => r(t => {
                                    let r = P(e);
                                    return {
                                        viewport: { ...t.viewport,
                                            dpr: r,
                                            initialDpr: t.viewport.initialDpr || r
                                        }
                                    }
                                }),
                                setFrameloop: (e = "always") => {
                                    let t = i().clock;
                                    t.stop(), t.elapsedTime = 0, "never" !== e && (t.start(), t.elapsedTime = 0), r(() => ({
                                        frameloop: e
                                    }))
                                },
                                previousRoot: void 0,
                                internal: {
                                    interaction: [],
                                    hovered: new Map,
                                    subscribers: [],
                                    initialClick: [0, 0],
                                    initialHits: [],
                                    capturedMap: new Map,
                                    lastEvent: u.createRef(),
                                    active: !1,
                                    frames: 0,
                                    priority: 0,
                                    subscribe: (e, t, r) => {
                                        let n = i().internal;
                                        return n.priority = n.priority + +(t > 0), n.subscribers.push({
                                            ref: e,
                                            priority: t,
                                            store: r
                                        }), n.subscribers = n.subscribers.sort((e, t) => e.priority - t.priority), () => {
                                            let r = i().internal;
                                            null != r && r.subscribers && (r.priority = r.priority - +(t > 0), r.subscribers = r.subscribers.filter(t => t.ref !== e))
                                        }
                                    }
                                }
                            }
                        }),
                        i = r.getState(),
                        n = i.size,
                        o = i.viewport.dpr,
                        s = i.camera;
                    return r.subscribe(() => {
                        let {
                            camera: e,
                            size: t,
                            viewport: i,
                            gl: a,
                            set: l
                        } = r.getState();
                        if (t.width !== n.width || t.height !== n.height || i.dpr !== o) {
                            n = t, o = i.dpr, K(e, t), i.dpr > 0 && a.setPixelRatio(i.dpr);
                            let r = "undefined" != typeof HTMLCanvasElement && a.domElement instanceof HTMLCanvasElement;
                            a.setSize(t.width, t.height, r)
                        }
                        e !== s && (s = e, l(t => ({
                            viewport: { ...t.viewport,
                                ...t.viewport.getCurrentViewport(e)
                            }
                        })))
                    }), r.subscribe(t => e(t)), r
                };

            function ei() {
                let e = u.useContext(et);
                if (!e) throw Error("R3F: Hooks can only be used within the Canvas component!");
                return e
            }

            function en(e = e => e, t) {
                return ei()(e, t)
            }

            function eo(e, t = 0) {
                let r = ei(),
                    i = r.getState().internal.subscribe,
                    n = j(e);
                return M(() => i(n, t, r), [t, i, r]), null
            }
            let es = new WeakMap,
                ea = e => {
                    var t;
                    return "function" == typeof e && (null == e ? void 0 : null == (t = e.prototype) ? void 0 : t.constructor) === e
                };

            function el(e, t) {
                return function(r, ...i) {
                    let n;
                    return ea(r) ? (n = es.get(r)) || (n = new r, es.set(r, n)) : n = r, e && e(n), Promise.all(i.map(e => new Promise((r, i) => n.load(e, e => {
                        J(null == e ? void 0 : e.scene) && Object.assign(e, function(e) {
                            let t = {
                                nodes: {},
                                materials: {},
                                meshes: {}
                            };
                            return e && e.traverse(e => {
                                e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material), e.isMesh && !t.meshes[e.name] && (t.meshes[e.name] = e)
                            }), t
                        }(e.scene)), r(e)
                    }, t, t => i(Error(`Could not load ${e}: ${null==t?void 0:t.message}`))))))
                }
            }

            function ec(e, t, r, i) {
                let n = Array.isArray(t) ? t : [t],
                    o = (0, E.DY)(el(r, i), [e, ...n], {
                        equal: N.equ
                    });
                return Array.isArray(t) ? o : o[0]
            }
            ec.preload = function(e, t, r) {
                let i = Array.isArray(t) ? t : [t];
                return (0, E.uv)(el(r), [e, ...i])
            }, ec.clear = function(e, t) {
                let r = Array.isArray(t) ? t : [t];
                return (0, E.IU)([e, ...r])
            };
            let eu = {},
                eh = /^three(?=[A-Z])/,
                ed = e => `${e[0].toUpperCase()}${e.slice(1)}`,
                ep = 0,
                ef = e => "function" == typeof e;

            function em(e) {
                if (ef(e)) {
                    let t = `${ep++}`;
                    return eu[t] = e, t
                }
                Object.assign(eu, e)
            }

            function eg(e, t) {
                let r = ed(e),
                    i = eu[r];
                if ("primitive" !== e && !i) throw Error(`R3F: ${r} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
                if ("primitive" === e && !t.object) throw Error("R3F: Primitives without 'object' are invalid!");
                if (void 0 !== t.args && !Array.isArray(t.args)) throw Error("R3F: The args prop must be an array!")
            }

            function ev(e) {
                if (e.isHidden) {
                    var t;
                    e.props.attach && null != (t = e.parent) && t.object ? H(e.parent, e) : J(e.object) && !1 !== e.props.visible && (e.object.visible = !0), e.isHidden = !1, $(e)
                }
            }

            function ey(e, t, r) {
                let i = t.root.getState();
                if (e.parent || e.object === i.scene) {
                    if (!t.object) {
                        var n, o;
                        let e = eu[ed(t.type)];
                        t.object = null != (n = t.props.object) ? n : new e(...null != (o = t.props.args) ? o : []), t.object.__r3f = t
                    }
                    if (V(t.object, t.props), t.props.attach) H(e, t);
                    else if (J(t.object) && J(e.object)) {
                        let i = e.object.children.indexOf(null == r ? void 0 : r.object);
                        if (r && -1 !== i) {
                            let r = e.object.children.indexOf(t.object); - 1 !== r ? (e.object.children.splice(r, 1), e.object.children.splice(r < i ? i - 1 : i, 0, t.object)) : (t.object.parent = e.object, e.object.children.splice(i, 0, t.object), t.object.dispatchEvent({
                                type: "added"
                            }), e.object.dispatchEvent({
                                type: "childadded",
                                child: t.object
                            }))
                        } else e.object.add(t.object)
                    }
                    for (let e of t.children) ey(t, e);
                    $(t)
                }
            }

            function eb(e, t) {
                t && (t.parent = e, e.children.push(t), ey(e, t))
            }

            function ex(e, t, r) {
                if (!t || !r) return;
                t.parent = e;
                let i = e.children.indexOf(r); - 1 !== i ? e.children.splice(i, 0, t) : e.children.push(t), ey(e, t, r)
            }

            function ew(e) {
                if ("function" == typeof e.dispose) {
                    let t = () => {
                        try {
                            e.dispose()
                        } catch {}
                    };
                    "undefined" != typeof IS_REACT_ACT_ENVIRONMENT ? t() : (0, A.unstable_scheduleCallback)(A.unstable_IdlePriority, t)
                }
            }

            function eA(e, t, r) {
                if (!t) return;
                t.parent = null;
                let i = e.children.indexOf(t); - 1 !== i && e.children.splice(i, 1), t.props.attach ? G(e, t) : J(t.object) && J(e.object) && (e.object.remove(t.object), function(e, t) {
                    let {
                        internal: r
                    } = e.getState();
                    r.interaction = r.interaction.filter(e => e !== t), r.initialHits = r.initialHits.filter(e => e !== t), r.hovered.forEach((e, i) => {
                        (e.eventObject === t || e.object === t) && r.hovered.delete(i)
                    }), r.capturedMap.forEach((e, i) => {
                        Q(r.capturedMap, t, e, i)
                    })
                }(_(t), t.object));
                let n = null !== t.props.dispose && !1 !== r;
                for (let e = t.children.length - 1; e >= 0; e--) {
                    let r = t.children[e];
                    eA(t, r, n)
                }
                t.children.length = 0, delete t.object.__r3f, n && "primitive" !== t.type && "Scene" !== t.object.type && ew(t.object), void 0 === r && $(t)
            }
            let eE = [],
                eS = () => {},
                eT = {},
                e_ = 0,
                ek = function(e) {
                    let t = w()(e);
                    return t.injectIntoDevTools({
                        bundleType: 0,
                        rendererPackageName: "@react-three/fiber",
                        version: u.version
                    }), t
                }({
                    isPrimaryRenderer: !1,
                    warnsIfNotActing: !1,
                    supportsMutation: !0,
                    supportsPersistence: !1,
                    supportsHydration: !1,
                    createInstance: function(e, t, r) {
                        var i;
                        return eg(e = ed(e) in eu ? e : e.replace(eh, ""), t), "primitive" === e && null != (i = t.object) && i.__r3f && delete t.object.__r3f, F(t.object, r, e, t)
                    },
                    removeChild: eA,
                    appendChild: eb,
                    appendInitialChild: eb,
                    insertBefore: ex,
                    appendChildToContainer(e, t) {
                        let r = e.getState().scene.__r3f;
                        t && r && eb(r, t)
                    },
                    removeChildFromContainer(e, t) {
                        let r = e.getState().scene.__r3f;
                        t && r && eA(r, t)
                    },
                    insertInContainerBefore(e, t, r) {
                        let i = e.getState().scene.__r3f;
                        t && r && i && ex(i, t, r)
                    },
                    getRootHostContext: () => eT,
                    getChildHostContext: () => eT,
                    commitUpdate(e, t, r, i, n) {
                        var o, s, a;
                        eg(t, i);
                        let l = !1;
                        if ("primitive" === e.type && r.object !== i.object ? l = !0 : (null == (o = i.args) ? void 0 : o.length) !== (null == (s = r.args) ? void 0 : s.length) ? l = !0 : null != (a = i.args) && a.some((e, t) => {
                                var i;
                                return e !== (null == (i = r.args) ? void 0 : i[t])
                            }) && (l = !0), l) eE.push([e, { ...i
                        }, n]);
                        else {
                            let t = function(e, t) {
                                let r = {};
                                for (let i in t)
                                    if (!W.includes(i) && !N.equ(t[i], e.props[i]))
                                        for (let e in r[i] = t[i], t) e.startsWith(`${i}-`) && (r[e] = t[e]);
                                for (let i in e.props) {
                                    if (W.includes(i) || t.hasOwnProperty(i)) continue;
                                    let {
                                        root: n,
                                        key: o
                                    } = z(e.object, i);
                                    if (n.constructor && 0 === n.constructor.length) {
                                        let e = function(e) {
                                            let t = X.get(e.constructor);
                                            try {
                                                t || (t = new e.constructor, X.set(e.constructor, t))
                                            } catch (e) {}
                                            return t
                                        }(n);
                                        N.und(e) || (r[o] = e[o])
                                    } else r[o] = 0
                                }
                                return r
                            }(e, i);
                            Object.keys(t).length && (Object.assign(e.props, t), V(e.object, t))
                        }(null === n.sibling || (4 & n.flags) == 0) && function() {
                            for (let [e] of eE) {
                                let t = e.parent;
                                if (t)
                                    for (let r of (e.props.attach ? G(t, e) : J(e.object) && J(t.object) && t.object.remove(e.object), e.children)) r.props.attach ? G(e, r) : J(r.object) && J(e.object) && e.object.remove(r.object);
                                e.isHidden && ev(e), e.object.__r3f && delete e.object.__r3f, "primitive" !== e.type && ew(e.object)
                            }
                            for (let [r, i, n] of eE) {
                                r.props = i;
                                let o = r.parent;
                                if (o) {
                                    var e, t;
                                    let i = eu[ed(r.type)];
                                    for (let s of (r.object = null != (e = r.props.object) ? e : new i(...null != (t = r.props.args) ? t : []), r.object.__r3f = r, ! function(e, t) {
                                            for (let r of [e, e.alternate])
                                                if (null !== r) {
                                                    if ("function" == typeof r.ref) {
                                                        null == r.refCleanup || r.refCleanup();
                                                        let e = r.ref(t);
                                                        "function" == typeof e && (r.refCleanup = e)
                                                    } else r.ref && (r.ref.current = t)
                                                }
                                        }(n, r.object), V(r.object, r.props), r.props.attach ? H(o, r) : J(r.object) && J(o.object) && o.object.add(r.object), r.children)) s.props.attach ? H(r, s) : J(s.object) && J(r.object) && r.object.add(s.object);
                                    $(r)
                                }
                            }
                            eE.length = 0
                        }()
                    },
                    finalizeInitialChildren: () => !1,
                    commitMount() {},
                    getPublicInstance: e => null == e ? void 0 : e.object,
                    prepareForCommit: () => null,
                    preparePortalMount: e => F(e.getState().scene, e, "", {}),
                    resetAfterCommit: () => {},
                    shouldSetTextContent: () => !1,
                    clearContainer: () => !1,
                    hideInstance: function(e) {
                        if (!e.isHidden) {
                            var t;
                            e.props.attach && null != (t = e.parent) && t.object ? G(e.parent, e) : J(e.object) && (e.object.visible = !1), e.isHidden = !0, $(e)
                        }
                    },
                    unhideInstance: ev,
                    createTextInstance: eS,
                    hideTextInstance: eS,
                    unhideTextInstance: eS,
                    scheduleTimeout: "function" == typeof setTimeout ? setTimeout : void 0,
                    cancelTimeout: "function" == typeof clearTimeout ? clearTimeout : void 0,
                    noTimeout: -1,
                    getInstanceFromNode: () => null,
                    beforeActiveInstanceBlur() {},
                    afterActiveInstanceBlur() {},
                    detachDeletedInstance() {},
                    prepareScopeUpdate() {},
                    getInstanceFromScope: () => null,
                    shouldAttemptEagerTransition: () => !1,
                    trackSchedulerEvent: () => {},
                    resolveEventType: () => null,
                    resolveEventTimeStamp: () => -1.1,
                    requestPostPaintCallback() {},
                    maySuspendCommit: () => !1,
                    preloadInstance: () => !0,
                    startSuspendingCommit() {},
                    suspendInstance() {},
                    waitForCommitToBeReady: () => null,
                    NotPendingTransition: null,
                    HostTransitionContext: u.createContext(null),
                    setCurrentUpdatePriority(e) {
                        e_ = e
                    },
                    getCurrentUpdatePriority: () => e_,
                    resolveUpdatePriority() {
                        var e;
                        if (0 !== e_) return e_;
                        switch ("undefined" != typeof window && (null == (e = window.event) ? void 0 : e.type)) {
                            case "click":
                            case "contextmenu":
                            case "dblclick":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointerup":
                                return d.DiscreteEventPriority;
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerenter":
                            case "pointerleave":
                            case "wheel":
                                return d.ContinuousEventPriority;
                            default:
                                return d.DefaultEventPriority
                        }
                    },
                    resetFormInstance() {}
                }),
                eC = new Map,
                eR = {
                    objects: "shallow",
                    strict: !1
                };

            function eM(e) {
                let t, r;
                let i = eC.get(e),
                    n = null == i ? void 0 : i.fiber,
                    o = null == i ? void 0 : i.store;
                i && console.warn("R3F.createRoot should only be called once!");
                let s = "function" == typeof reportError ? reportError : console.error,
                    a = o || er(eY, eq),
                    u = n || ek.createContainer(a, d.ConcurrentRoot, null, !1, null, "", s, s, s, null);
                i || eC.set(e, {
                    fiber: u,
                    store: a
                });
                let h = !1,
                    p = null;
                return {
                    async configure(i = {}) {
                        var n, o;
                        let s;
                        p = new Promise(e => s = e);
                        let {
                            gl: u,
                            size: d,
                            scene: f,
                            events: m,
                            onCreated: g,
                            shadows: v = !1,
                            linear: y = !1,
                            flat: b = !1,
                            legacy: x = !1,
                            orthographic: w = !1,
                            frameloop: A = "always",
                            dpr: E = [1, 2],
                            performance: S,
                            raycaster: T,
                            camera: _,
                            onPointerMissed: k
                        } = i, C = a.getState(), R = C.gl;
                        if (!C.gl) {
                            let t = {
                                    canvas: e,
                                    powerPreference: "high-performance",
                                    antialias: !0,
                                    alpha: !0
                                },
                                r = "function" == typeof u ? await u(t) : u;
                            R = ee(r) ? r : new c.WebGLRenderer({ ...t,
                                ...u
                            }), C.set({
                                gl: R
                            })
                        }
                        let M = C.raycaster;
                        M || C.set({
                            raycaster: M = new l.tBo
                        });
                        let {
                            params: j,
                            ...I
                        } = T || {};
                        if (N.equ(I, M, eR) || V(M, { ...I
                            }), N.equ(j, M.params, eR) || V(M, {
                                params: { ...M.params,
                                    ...j
                                }
                            }), !C.camera || C.camera === r && !N.equ(r, _, eR)) {
                            r = _;
                            let e = null == _ ? void 0 : _.isCamera,
                                t = e ? _ : w ? new l.qUd(0, 0, 0, 0, .1, 1e3) : new l.ubm(75, 0, .1, 1e3);
                            e || (t.position.z = 5, _ && (V(t, _), !t.manual && ("aspect" in _ || "left" in _ || "right" in _ || "bottom" in _ || "top" in _) && (t.manual = !0, t.updateProjectionMatrix())), C.camera || null != _ && _.rotation || t.lookAt(0, 0, 0)), C.set({
                                camera: t
                            }), M.camera = t
                        }
                        if (!C.scene) {
                            let e;
                            null != f && f.isScene ? F(e = f, a, "", {}) : (F(e = new l.Z58, a, "", {}), f && V(e, f)), C.set({
                                scene: e
                            })
                        }
                        m && !C.events.handlers && C.set({
                            events: m(a)
                        });
                        let O = function(e, t) {
                            if (!t && "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && e.parentElement) {
                                let {
                                    width: t,
                                    height: r,
                                    top: i,
                                    left: n
                                } = e.parentElement.getBoundingClientRect();
                                return {
                                    width: t,
                                    height: r,
                                    top: i,
                                    left: n
                                }
                            }
                            return !t && "undefined" != typeof OffscreenCanvas && e instanceof OffscreenCanvas ? {
                                width: e.width,
                                height: e.height,
                                top: 0,
                                left: 0
                            } : {
                                width: 0,
                                height: 0,
                                top: 0,
                                left: 0,
                                ...t
                            }
                        }(e, d);
                        if (N.equ(O, C.size, eR) || C.setSize(O.width, O.height, O.top, O.left), E && C.viewport.dpr !== P(E) && C.setDpr(E), C.frameloop !== A && C.setFrameloop(A), C.onPointerMissed || C.set({
                                onPointerMissed: k
                            }), S && !N.equ(S, C.performance, eR) && C.set(e => ({
                                performance: { ...e.performance,
                                    ...S
                                }
                            })), !C.xr) {
                            let e = (e, t) => {
                                    let r = a.getState();
                                    "never" !== r.frameloop && eq(e, !0, r, t)
                                },
                                t = () => {
                                    let t = a.getState();
                                    t.gl.xr.enabled = t.gl.xr.isPresenting, t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null), t.gl.xr.isPresenting || eY(t)
                                },
                                r = {
                                    connect() {
                                        let e = a.getState().gl;
                                        e.xr.addEventListener("sessionstart", t), e.xr.addEventListener("sessionend", t)
                                    },
                                    disconnect() {
                                        let e = a.getState().gl;
                                        e.xr.removeEventListener("sessionstart", t), e.xr.removeEventListener("sessionend", t)
                                    }
                                };
                            "function" == typeof(null == (n = R.xr) ? void 0 : n.addEventListener) && r.connect(), C.set({
                                xr: r
                            })
                        }
                        if (R.shadowMap) {
                            let e = R.shadowMap.enabled,
                                t = R.shadowMap.type;
                            if (R.shadowMap.enabled = !!v, N.boo(v)) R.shadowMap.type = l.Wk7;
                            else if (N.str(v)) {
                                let e = {
                                    basic: l.bTm,
                                    percentage: l.QP0,
                                    soft: l.Wk7,
                                    variance: l.RyA
                                };
                                R.shadowMap.type = null != (o = e[v]) ? o : l.Wk7
                            } else N.obj(v) && Object.assign(R.shadowMap, v);
                            (e !== R.shadowMap.enabled || t !== R.shadowMap.type) && (R.shadowMap.needsUpdate = !0)
                        }
                        return l.ppV.enabled = !x, h || (R.outputColorSpace = y ? l.Zr2 : l.er$, R.toneMapping = b ? l.y_p : l.FV), C.legacy !== x && C.set(() => ({
                            legacy: x
                        })), C.linear !== y && C.set(() => ({
                            linear: y
                        })), C.flat !== b && C.set(() => ({
                            flat: b
                        })), !u || N.fun(u) || ee(u) || N.equ(u, R, eR) || V(R, u), t = g, h = !0, s(), this
                    },
                    render(r) {
                        return h || p || this.configure(), p.then(() => {
                            ek.updateContainer((0, S.jsx)(ej, {
                                store: a,
                                children: r,
                                onCreated: t,
                                rootElement: e
                            }), u, null, () => void 0)
                        }), a
                    },
                    unmount() {
                        eI(e)
                    }
                }
            }

            function ej({
                store: e,
                children: t,
                onCreated: r,
                rootElement: i
            }) {
                return M(() => {
                    let t = e.getState();
                    t.set(e => ({
                        internal: { ...e.internal,
                            active: !0
                        }
                    })), r && r(t), e.getState().events.connected || null == t.events.connect || t.events.connect(i)
                }, []), (0, S.jsx)(et.Provider, {
                    value: e,
                    children: t
                })
            }

            function eI(e, t) {
                let r = eC.get(e),
                    i = null == r ? void 0 : r.fiber;
                if (i) {
                    let n = null == r ? void 0 : r.store.getState();
                    n && (n.internal.active = !1), ek.updateContainer(null, i, null, () => {
                        n && setTimeout(() => {
                            try {
                                var r, i, o, s;
                                null == n.events.disconnect || n.events.disconnect(), null == (r = n.gl) || null == (i = r.renderLists) || null == i.dispose || i.dispose(), null == (o = n.gl) || null == o.forceContextLoss || o.forceContextLoss(), null != (s = n.gl) && s.xr && n.xr.disconnect(),
                                    function(e) {
                                        for (let t in "Scene" !== e.type && (null == e.dispose || e.dispose()), e) {
                                            let r = e[t];
                                            (null == r ? void 0 : r.type) !== "Scene" && (null == r || null == r.dispose || r.dispose())
                                        }
                                    }(n.scene), eC.delete(e), t && t(e)
                            } catch (e) {}
                        }, 500)
                    })
                }
            }

            function eO(e, t) {
                let r = {
                    callback: e
                };
                return t.add(r), () => void t.delete(r)
            }
            let eL = new Set,
                eP = new Set,
                eD = new Set,
                eN = e => eO(e, eL),
                eB = e => eO(e, eP),
                eF = e => eO(e, eD);

            function ez(e, t) {
                if (e.size)
                    for (let {
                            callback: r
                        } of e.values()) r(t)
            }

            function eU(e, t) {
                switch (e) {
                    case "before":
                        return ez(eL, t);
                    case "after":
                        return ez(eP, t);
                    case "tail":
                        return ez(eD, t)
                }
            }

            function eH(e, t, r) {
                let o = t.clock.getDelta();
                "never" === t.frameloop && "number" == typeof e && (o = e - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = e), i = t.internal.subscribers;
                for (let e = 0; e < i.length; e++)(n = i[e]).ref.current(n.store.getState(), o, r);
                return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), "always" === t.frameloop ? 1 : t.internal.frames
            }
            let eG = !1,
                eW = !1;

            function eX(e) {
                for (let r of (s = requestAnimationFrame(eX), eG = !0, o = 0, eU("before", e), eW = !0, eC.values())) {
                    var t;
                    (a = r.store.getState()).internal.active && ("always" === a.frameloop || a.internal.frames > 0) && !(null != (t = a.gl.xr) && t.isPresenting) && (o += eH(e, a))
                }
                if (eW = !1, eU("after", e), 0 === o) return eU("tail", e), eG = !1, cancelAnimationFrame(s)
            }

            function eY(e, t = 1) {
                var r;
                if (!e) return eC.forEach(e => eY(e.store.getState(), t));
                null != (r = e.gl.xr) && r.isPresenting || !e.internal.active || "never" === e.frameloop || (t > 1 ? e.internal.frames = Math.min(60, e.internal.frames + t) : eW ? e.internal.frames = 2 : e.internal.frames = 1, eG || (eG = !0, requestAnimationFrame(eX)))
            }

            function eq(e, t = !0, r, i) {
                if (t && eU("before", e), r) eH(e, r, i);
                else
                    for (let t of eC.values()) eH(e, t.store.getState());
                t && eU("after", e)
            }
            let eV = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function e$(e) {
                let {
                    handlePointer: t
                } = function(e) {
                    function t(e) {
                        return e.filter(e => ["Move", "Over", "Enter", "Out", "Leave"].some(t => {
                            var r;
                            return null == (r = e.__r3f) ? void 0 : r.handlers["onPointer" + t]
                        }))
                    }

                    function r(t) {
                        let {
                            internal: r
                        } = e.getState();
                        for (let e of r.hovered.values())
                            if (!t.length || !t.find(t => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                                let i = e.eventObject.__r3f;
                                if (r.hovered.delete(Z(e)), null != i && i.eventCount) {
                                    let r = i.handlers,
                                        n = { ...e,
                                            intersections: t
                                        };
                                    null == r.onPointerOut || r.onPointerOut(n), null == r.onPointerLeave || r.onPointerLeave(n)
                                }
                            }
                    }

                    function i(e, t) {
                        for (let r = 0; r < t.length; r++) {
                            let i = t[r].__r3f;
                            null == i || null == i.handlers.onPointerMissed || i.handlers.onPointerMissed(e)
                        }
                    }
                    return {
                        handlePointer: function(n) {
                            switch (n) {
                                case "onPointerLeave":
                                case "onPointerCancel":
                                    return () => r([]);
                                case "onLostPointerCapture":
                                    return t => {
                                        let {
                                            internal: i
                                        } = e.getState();
                                        "pointerId" in t && i.capturedMap.has(t.pointerId) && requestAnimationFrame(() => {
                                            i.capturedMap.has(t.pointerId) && (i.capturedMap.delete(t.pointerId), r([]))
                                        })
                                    }
                            }
                            return function(o) {
                                let {
                                    onPointerMissed: s,
                                    internal: a
                                } = e.getState();
                                a.lastEvent.current = o;
                                let c = "onPointerMove" === n,
                                    u = "onClick" === n || "onContextMenu" === n || "onDoubleClick" === n,
                                    h = function(t, r) {
                                        let i = e.getState(),
                                            n = new Set,
                                            o = [],
                                            s = r ? r(i.internal.interaction) : i.internal.interaction;
                                        for (let e = 0; e < s.length; e++) {
                                            let t = D(s[e]);
                                            t && (t.raycaster.camera = void 0)
                                        }
                                        i.previousRoot || null == i.events.compute || i.events.compute(t, i);
                                        let a = s.flatMap(function(e) {
                                            let r = D(e);
                                            if (!r || !r.events.enabled || null === r.raycaster.camera) return [];
                                            if (void 0 === r.raycaster.camera) {
                                                var i;
                                                null == r.events.compute || r.events.compute(t, r, null == (i = r.previousRoot) ? void 0 : i.getState()), void 0 === r.raycaster.camera && (r.raycaster.camera = null)
                                            }
                                            return r.raycaster.camera ? r.raycaster.intersectObject(e, !0) : []
                                        }).sort((e, t) => {
                                            let r = D(e.object),
                                                i = D(t.object);
                                            return r && i && i.events.priority - r.events.priority || e.distance - t.distance
                                        }).filter(e => {
                                            let t = Z(e);
                                            return !n.has(t) && (n.add(t), !0)
                                        });
                                        for (let e of (i.events.filter && (a = i.events.filter(a, i)), a)) {
                                            let t = e.object;
                                            for (; t;) {
                                                var l;
                                                null != (l = t.__r3f) && l.eventCount && o.push({ ...e,
                                                    eventObject: t
                                                }), t = t.parent
                                            }
                                        }
                                        if ("pointerId" in t && i.internal.capturedMap.has(t.pointerId))
                                            for (let e of i.internal.capturedMap.get(t.pointerId).values()) n.has(Z(e.intersection)) || o.push(e.intersection);
                                        return o
                                    }(o, c ? t : void 0),
                                    d = u ? function(t) {
                                        let {
                                            internal: r
                                        } = e.getState(), i = t.offsetX - r.initialClick[0], n = t.offsetY - r.initialClick[1];
                                        return Math.round(Math.sqrt(i * i + n * n))
                                    }(o) : 0;
                                "onPointerDown" === n && (a.initialClick = [o.offsetX, o.offsetY], a.initialHits = h.map(e => e.eventObject)), u && !h.length && d <= 2 && (i(o, a.interaction), s && s(o)), c && r(h), ! function(e, t, i, n) {
                                    if (e.length) {
                                        let o = {
                                            stopped: !1
                                        };
                                        for (let s of e) {
                                            let a = D(s.object);
                                            if (a || s.object.traverseAncestors(e => {
                                                    let t = D(e);
                                                    if (t) return a = t, !1
                                                }), a) {
                                                let {
                                                    raycaster: c,
                                                    pointer: u,
                                                    camera: h,
                                                    internal: d
                                                } = a, p = new l.Pq0(u.x, u.y, 0).unproject(h), f = e => {
                                                    var t, r;
                                                    return null != (t = null == (r = d.capturedMap.get(e)) ? void 0 : r.has(s.eventObject)) && t
                                                }, m = e => {
                                                    let r = {
                                                        intersection: s,
                                                        target: t.target
                                                    };
                                                    d.capturedMap.has(e) ? d.capturedMap.get(e).set(s.eventObject, r) : d.capturedMap.set(e, new Map([
                                                        [s.eventObject, r]
                                                    ])), t.target.setPointerCapture(e)
                                                }, g = e => {
                                                    let t = d.capturedMap.get(e);
                                                    t && Q(d.capturedMap, s.eventObject, t, e)
                                                }, v = {};
                                                for (let e in t) {
                                                    let r = t[e];
                                                    "function" != typeof r && (v[e] = r)
                                                }
                                                let y = { ...s,
                                                    ...v,
                                                    pointer: u,
                                                    intersections: e,
                                                    stopped: o.stopped,
                                                    delta: i,
                                                    unprojectedPoint: p,
                                                    ray: c.ray,
                                                    camera: h,
                                                    stopPropagation() {
                                                        let i = "pointerId" in t && d.capturedMap.get(t.pointerId);
                                                        (!i || i.has(s.eventObject)) && (y.stopped = o.stopped = !0, d.hovered.size && Array.from(d.hovered.values()).find(e => e.eventObject === s.eventObject) && r([...e.slice(0, e.indexOf(s)), s]))
                                                    },
                                                    target: {
                                                        hasPointerCapture: f,
                                                        setPointerCapture: m,
                                                        releasePointerCapture: g
                                                    },
                                                    currentTarget: {
                                                        hasPointerCapture: f,
                                                        setPointerCapture: m,
                                                        releasePointerCapture: g
                                                    },
                                                    nativeEvent: t
                                                };
                                                if (n(y), !0 === o.stopped) break
                                            }
                                        }
                                    }
                                }(h, o, d, function(e) {
                                    let t = e.eventObject,
                                        r = t.__r3f;
                                    if (!(null != r && r.eventCount)) return;
                                    let s = r.handlers;
                                    if (c) {
                                        if (s.onPointerOver || s.onPointerEnter || s.onPointerOut || s.onPointerLeave) {
                                            let t = Z(e),
                                                r = a.hovered.get(t);
                                            r ? r.stopped && e.stopPropagation() : (a.hovered.set(t, e), null == s.onPointerOver || s.onPointerOver(e), null == s.onPointerEnter || s.onPointerEnter(e))
                                        }
                                        null == s.onPointerMove || s.onPointerMove(e)
                                    } else {
                                        let r = s[n];
                                        r ? (!u || a.initialHits.includes(t)) && (i(o, a.interaction.filter(e => !a.initialHits.includes(e))), r(e)) : u && a.initialHits.includes(t) && i(o, a.interaction.filter(e => !a.initialHits.includes(e)))
                                    }
                                })
                            }
                        }
                    }
                }(e);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(e, t, r) {
                        t.pointer.set(e.offsetX / t.size.width * 2 - 1, -(2 * (e.offsetY / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(eV).reduce((e, r) => ({ ...e,
                        [r]: t(r)
                    }), {}),
                    update: () => {
                        var t;
                        let {
                            events: r,
                            internal: i
                        } = e.getState();
                        null != (t = i.lastEvent) && t.current && r.handlers && r.handlers.onPointerMove(i.lastEvent.current)
                    },
                    connect: t => {
                        let {
                            set: r,
                            events: i
                        } = e.getState();
                        if (null == i.disconnect || i.disconnect(), r(e => ({
                                events: { ...e.events,
                                    connected: t
                                }
                            })), i.handlers)
                            for (let e in i.handlers) {
                                let r = i.handlers[e],
                                    [n, o] = eV[e];
                                t.addEventListener(n, r, {
                                    passive: o
                                })
                            }
                    },
                    disconnect: () => {
                        let {
                            set: t,
                            events: r
                        } = e.getState();
                        if (r.connected) {
                            if (r.handlers)
                                for (let e in r.handlers) {
                                    let t = r.handlers[e],
                                        [i] = eV[e];
                                    r.connected.removeEventListener(i, t)
                                }
                            t(e => ({
                                events: { ...e.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
        },
        6114: (e, t, r) => {
            "use strict";
            r.d(t, {
                w: () => tm,
                L: () => ta
            });
            var i = r(5155),
                n = r(2115),
                o = r(6059),
                s = r(3264),
                a = r(5643);
            let l = e => {
                    let t;
                    let r = new Set,
                        i = (e, i) => {
                            let n = "function" == typeof e ? e(t) : e;
                            if (!Object.is(n, t)) {
                                let e = t;
                                t = (null != i ? i : "object" != typeof n || null === n) ? n : Object.assign({}, t, n), r.forEach(r => r(t, e))
                            }
                        },
                        n = () => t,
                        o = {
                            setState: i,
                            getState: n,
                            getInitialState: () => s,
                            subscribe: e => (r.add(e), () => r.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                            }
                        },
                        s = t = e(i, n, o);
                    return o
                },
                c = e => e ? l(e) : l,
                {
                    useDebugValue: u
                } = n,
                {
                    useSyncExternalStoreWithSelector: h
                } = a,
                d = e => e,
                p = (e, t) => {
                    let r = c(e),
                        i = (e, i = t) => (function(e, t = d, r) {
                            let i = h(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
                            return u(i), i
                        })(r, e, i);
                    return Object.assign(i, r), i
                };

            function f(e, t) {
                if (Object.is(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                if (e instanceof Map && t instanceof Map) {
                    if (e.size !== t.size) return !1;
                    for (let [r, i] of e)
                        if (!Object.is(i, t.get(r))) return !1;
                    return !0
                }
                if (e instanceof Set && t instanceof Set) {
                    if (e.size !== t.size) return !1;
                    for (let r of e)
                        if (!t.has(r)) return !1;
                    return !0
                }
                let r = Object.keys(e);
                if (r.length !== Object.keys(t).length) return !1;
                for (let i of r)
                    if (!Object.prototype.hasOwnProperty.call(t, i) || !Object.is(e[i], t[i])) return !1;
                return !0
            }
            let m = ((e, t) => e ? p(e, t) : p)((e, t) => ({
                    log: null,
                    paused: !1,
                    triggerProgramsUpdate: 0,
                    startTime: 0,
                    customData: 0,
                    fpsLimit: 60,
                    overclockingFps: !1,
                    accumulated: {
                        totalFrames: 0,
                        gl: {
                            calls: 0,
                            triangles: 0,
                            points: 0,
                            lines: 0,
                            counts: 0
                        },
                        log: {
                            gpu: 0,
                            cpu: 0,
                            mem: 0,
                            fps: 0
                        },
                        max: {
                            gl: {
                                calls: 0,
                                triangles: 0,
                                points: 0,
                                lines: 0,
                                counts: 0
                            },
                            log: {
                                gpu: 0,
                                cpu: 0,
                                mem: 0,
                                fps: 0
                            }
                        }
                    },
                    chart: {
                        data: {
                            fps: [],
                            cpu: [],
                            gpu: [],
                            mem: []
                        },
                        circularId: 0
                    },
                    gl: void 0,
                    objectWithMaterials: null,
                    scene: void 0,
                    programs: new Map,
                    sceneLength: void 0,
                    tab: "infos",
                    getReport: function() {
                        var e;
                        let {
                            accumulated: r,
                            startTime: i,
                            infos: n
                        } = t(), o = null == (e = t().log) ? void 0 : e.maxMemory, {
                            totalFrames: s,
                            log: a,
                            gl: l,
                            max: c
                        } = r, u = {
                            calls: l.calls / s,
                            triangles: l.triangles / s,
                            points: l.points / s,
                            lines: l.lines / s
                        }, h = {
                            gpu: a.gpu / s,
                            cpu: a.cpu / s,
                            mem: a.mem / s,
                            fps: a.fps / s
                        };
                        return {
                            sessionTime: (window.performance.now() - i) / 1e3,
                            infos: n,
                            log: h,
                            gl: u,
                            max: c,
                            maxMemory: o,
                            totalFrames: s
                        }
                    }
                })),
                g = e => m(e, f);
            Object.assign(g, m);
            let {
                getState: v,
                setState: y
            } = m, b = {
                value: 0,
                fpsLimit: 60,
                isOverLimit: 0
            }, x = e => (null == e ? void 0 : e.reduce((e, t) => e + t, 0)) / e.length;
            class w {
                constructor(e = {}) {
                    this.names = [""], this.finished = [], this.paused = !1, this.overClock = !1, this.queryHasResult = !1, this.queryCreated = !1, this.isWebGL2 = !0, this.memAccums = [], this.gpuAccums = [], this.activeAccums = [], this.logsAccums = {
                        mem: [],
                        gpu: [],
                        cpu: [],
                        fps: [],
                        fpsFixed: []
                    }, this.fpsChart = [], this.gpuChart = [], this.cpuChart = [], this.memChart = [], this.paramLogger = () => {}, this.glFinish = () => {}, this.chartLogger = () => {}, this.chartLen = 60, this.logsPerSecond = 10, this.maxMemory = 1500, this.chartHz = 10, this.startCpuProfiling = !1, this.lastCalculateFixed = 0, this.chartFrame = 0, this.gpuTimeProcess = 0, this.chartTime = 0, this.activeQueries = 0, this.circularId = 0, this.detected = 0, this.frameId = 0, this.rafId = 0, this.idleCbId = 0, this.checkQueryId = 0, this.uuid = void 0, this.currentCpu = 0, this.currentMem = 0, this.paramFrame = 0, this.paramTime = 0, this.now = () => {}, this.t0 = 0, window.GLPerf = window.GLPerf || {}, Object.assign(this, e), this.fpsChart = Array(this.chartLen).fill(0), this.gpuChart = Array(this.chartLen).fill(0), this.cpuChart = Array(this.chartLen).fill(0), this.memChart = Array(this.chartLen).fill(0), this.now = () => window.performance && window.performance.now ? window.performance.now() : Date.now(), this.initGpu(), this.is120hz()
                }
                initGpu() {
                    this.uuid = s.cj9.generateUUID(), this.gl && (this.isWebGL2 = !0, this.extension || (this.extension = this.gl.getExtension("EXT_disjoint_timer_query_webgl2")), null === this.extension && (this.isWebGL2 = !1))
                }
                is120hz() {
                    let e = 0,
                        t = r => {
                            ++e < 20 ? this.rafId = window.requestAnimationFrame(t) : (this.detected = Math.ceil(1e3 * e / (r - this.t0) / 70), window.cancelAnimationFrame(this.rafId)), this.t0 || (this.t0 = r)
                        };
                    this.rafId = window.requestAnimationFrame(t)
                }
                addUI(e) {
                    -1 === this.names.indexOf(e) && (this.names.push(e), this.gpuAccums.push(0), this.activeAccums.push(!1))
                }
                nextFps(e) {
                    let t = 1e3 / 60 - e.timeRemaining(),
                        r = 1e3 / 60 * b.fpsLimit / 10 / t;
                    !(r < 0) && (b.value = r, b.isOverLimit < 25 ? b.isOverLimit++ : y({
                        overclockingFps: !0
                    }))
                }
                nextFrame(e) {
                    this.frameId++;
                    let t = e || this.now(),
                        r = t - this.paramTime,
                        i = 0;
                    if (this.frameId <= 1) this.paramFrame = this.frameId, this.paramTime = t;
                    else if (t >= this.paramTime) {
                        this.maxMemory = window.performance.memory ? window.performance.memory.jsHeapSizeLimit / 1048576 : 0;
                        let n = this.frameId - this.paramFrame,
                            o = 1e3 * n / r,
                            s = v().overclockingFps ? b.value : o;
                        if (i = this.isWebGL2 ? this.gpuAccums[0] : this.gpuAccums[0] / r, this.isWebGL2 ? this.gpuAccums[0] = 0 : Promise.all(this.finished).then(() => {
                                this.gpuAccums[0] = 0, this.finished = []
                            }), this.currentMem = Math.round(window.performance && window.performance.memory ? window.performance.memory.usedJSHeapSize / 1048576 : 0), window.performance && this.startCpuProfiling) {
                            window.performance.mark("cpu-finished");
                            let e = performance.measure("cpu-duration", "cpu-started", "cpu-finished");
                            this.currentCpu = (null == e ? void 0 : e.duration) || 0, this.logsAccums.cpu.push(this.currentCpu), this.startCpuProfiling = !1
                        }
                        this.logsAccums.mem.push(this.currentMem), this.logsAccums.fpsFixed.push(o), this.logsAccums.fps.push(s), this.logsAccums.gpu.push(i), this.overClock && void 0 !== window.requestIdleCallback && (b.isOverLimit > 0 && s > o ? b.isOverLimit-- : v().overclockingFps && y({
                            overclockingFps: !1
                        })), t >= this.paramTime + 1e3 / this.logsPerSecond && (this.paramLogger({
                            cpu: x(this.logsAccums.cpu),
                            gpu: x(this.logsAccums.gpu),
                            mem: x(this.logsAccums.mem),
                            fps: x(this.logsAccums.fps),
                            duration: Math.round(r),
                            maxMemory: this.maxMemory,
                            frameCount: n
                        }), this.logsAccums.mem = [], this.logsAccums.fps = [], this.logsAccums.gpu = [], this.logsAccums.cpu = [], this.paramFrame = this.frameId, this.paramTime = t), this.overClock && t - this.lastCalculateFixed >= 2e3 && (this.lastCalculateFixed = e, b.fpsLimit = 100 * Math.round(x(this.logsAccums.fpsFixed) / 10), y({
                            fpsLimit: b.fpsLimit / 10
                        }), this.logsAccums.fpsFixed = [], this.paramFrame = this.frameId, this.paramTime = t)
                    }
                    if (this.detected && this.chartFrame) {
                        let e = t - this.chartTime,
                            i = this.chartHz * e / 1e3;
                        for (; --i > 0 && this.detected;) {
                            let i = (this.frameId - this.chartFrame) / e * 1e3,
                                n = v().overclockingFps ? b.value : i;
                            this.fpsChart[this.circularId % this.chartLen] = n;
                            let o = 1e3 / this.currentMem,
                                s = this.currentCpu,
                                a = (this.isWebGL2 ? 2 * this.gpuAccums[1] : Math.round(this.gpuAccums[1] / r * 100)) + 4;
                            a > 0 && (this.gpuChart[this.circularId % this.chartLen] = a), s > 0 && (this.cpuChart[this.circularId % this.chartLen] = s), o > 0 && (this.memChart[this.circularId % this.chartLen] = o);
                            for (let e = 0; e < this.names.length; e++) this.chartLogger({
                                i: e,
                                data: {
                                    fps: this.fpsChart,
                                    gpu: this.gpuChart,
                                    cpu: this.cpuChart,
                                    mem: this.memChart
                                },
                                circularId: this.circularId
                            });
                            this.circularId++, this.chartFrame = this.frameId, this.chartTime = t
                        }
                    } else this.chartFrame = this.frameId, this.chartTime = t, this.circularId = 0
                }
                startGpu() {
                    let e = this.gl,
                        t = this.extension;
                    if (e && t && this.isWebGL2) {
                        let r, i = !1;
                        if (this.query) {
                            this.queryHasResult = !1;
                            let n = this.query;
                            if (i = e.getQueryParameter(n, e.QUERY_RESULT_AVAILABLE), r = e.getParameter(t.GPU_DISJOINT_EXT), i && !r) {
                                let t = 1e-6 * e.getQueryParameter(this.query, e.QUERY_RESULT);
                                (i || r) && (e.deleteQuery(this.query), n = null), i && t > 0 && !r && this.activeAccums.forEach((e, r) => {
                                    this.gpuAccums[r] = t
                                })
                            }
                        }(i || !this.query) && (this.queryCreated = !0, this.query = e.createQuery(), e.beginQuery(t.TIME_ELAPSED_EXT, this.query))
                    }
                }
                endGpu() {
                    let e = this.extension,
                        t = this.gl;
                    this.isWebGL2 && this.queryCreated && t.getQuery(e.TIME_ELAPSED_EXT, t.CURRENT_QUERY) && t.endQuery(e.TIME_ELAPSED_EXT)
                }
                begin(e) {
                    this.startGpu(), this.updateAccums(e)
                }
                end(e) {
                    this.endGpu(), this.updateAccums(e)
                }
                updateAccums(e) {
                    let t = this.names.indexOf(e); - 1 === t && (t = this.names.length, this.addUI(e));
                    let r = this.now();
                    this.activeAccums[t] = !this.activeAccums[t], this.t0 = r
                }
            }
            let A = e => {
                    e.forEach((e, t) => {
                        let {
                            meshes: r
                        } = e;
                        if (!r) return;
                        let i = {
                            total: 0,
                            type: "Triangle",
                            data: []
                        };
                        Object.keys(r).forEach(e => {
                            let t = r[e],
                                {
                                    geometry: n,
                                    material: o
                                } = t,
                                s = n.index,
                                a = n.attributes.position;
                            if (!a) return;
                            let l = 1;
                            !0 === o.wireframe && (l = 0);
                            let c = null !== s ? s.count : a.count,
                                u = n.drawRange.start * l,
                                h = Math.min(c, u + n.drawRange.count * l) - 1,
                                d = 1,
                                p = t.count || 1,
                                f = "Triangle",
                                m = 0;
                            t.isMesh ? !0 === o.wireframe ? (f = "Line", d /= 2) : (f = "Triangle", d /= 3) : t.isLine ? (f = "Line", t.isLineSegments ? d /= 2 : t.isLineLoop || (d -= 1)) : t.isPoints ? f = "Point" : t.isSprite && (f = "Triangle", d /= 3);
                            let g = Math.round(d * p * Math.max(0, h - u + 1));
                            g > m && (m = g, i.type = f), i.total += g, i.data.push({
                                drawCount: g,
                                type: f
                            }), t.userData.drawCount = {
                                type: f,
                                count: g
                            }
                        }), e.drawCounts = i
                    })
                },
                E = new(r(8835)),
                S = s.B69.prototype.updateMatrixWorld,
                T = s.B69.prototype.updateWorldMatrix,
                _ = s.B69.prototype.updateMatrix,
                k = ["calls", "triangles", "points", "lines"],
                C = ["gpu", "cpu", "mem", "fps"],
                R = {
                    value: 0
                },
                M = {
                    value: 0
                },
                j = e => {
                    let t = "" + e;
                    return null !== (t = t.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"))
                },
                I = (e, t) => {
                    e.defines || (e.defines = {}), e.defines && !e.defines.muiPerf && (e.defines = Object.assign(e.defines || {}, {
                        muiPerf: e.uuid
                    }));
                    let r = e.uuid;
                    return t[r] || (t[r] = {
                        meshes: {},
                        material: e
                    }, e.needsUpdate = !0), e.needsUpdate = !1, r
                },
                O = e => "muiPerf" === e,
                L = ({
                    overClock: e,
                    logsPerSecond: t,
                    chart: r,
                    deepAnalyze: i,
                    matrixUpdate: a
                }) => {
                    let {
                        gl: l,
                        scene: c
                    } = (0, o.A)();
                    y({
                        gl: l,
                        scene: c
                    });
                    let u = (0, n.useMemo)(() => {
                        let i = new w({
                                trackGPU: !0,
                                overClock: e,
                                chartLen: r ? r.length : 120,
                                chartHz: r ? r.hz : 60,
                                logsPerSecond: t || 10,
                                gl: l.getContext(),
                                chartLogger: e => {
                                    y({
                                        chart: e
                                    })
                                },
                                paramLogger: e => {
                                    var t;
                                    let r = {
                                        maxMemory: e.maxMemory,
                                        gpu: e.gpu,
                                        cpu: e.cpu,
                                        mem: e.mem,
                                        fps: e.fps,
                                        totalTime: e.duration,
                                        frameCount: e.frameCount
                                    };
                                    y({
                                        log: r
                                    });
                                    let {
                                        accumulated: i
                                    } = v(), n = l.info.render;
                                    i.totalFrames++, i.gl.calls += n.calls, i.gl.triangles += n.triangles, i.gl.points += n.points, i.gl.lines += n.lines, i.log.gpu += e.gpu, i.log.cpu += e.cpu, i.log.mem += e.mem, i.log.fps += e.fps;
                                    for (let e = 0; e < k.length; e++) {
                                        let t = k[e],
                                            r = n[t];
                                        r > i.max.gl[t] && (i.max.gl[t] = r)
                                    }
                                    for (let t = 0; t < C.length; t++) {
                                        let r = C[t],
                                            n = e[r];
                                        n > i.max.log[r] && (i.max.log[r] = n)
                                    }
                                    y({
                                        accumulated: i
                                    }), t = [r, l], E.emit("log", t)
                                }
                            }),
                            n = l.getContext(),
                            o = null,
                            a = null,
                            c = n.getExtension("WEBGL_debug_renderer_info"),
                            u = n.getParameter(n.VERSION);
                        null != c && (o = n.getParameter(c.UNMASKED_RENDERER_WEBGL), a = n.getParameter(c.UNMASKED_VENDOR_WEBGL)), a || (a = "Unknown vendor"), o || (o = n.getParameter(n.RENDERER)), y({
                            startTime: window.performance.now(),
                            infos: {
                                version: u,
                                renderer: o,
                                vendor: a
                            }
                        });
                        let h = new Map,
                            d = new Map;
                        return Object.defineProperty(s.Z58.prototype, "onBeforeRender", {
                            get() {
                                return (...e) => {
                                    var t;
                                    i && i.begin("profiler"), null == (t = h.get(this)) || t(...e)
                                }
                            },
                            set(e) {
                                h.set(this, e)
                            },
                            configurable: !0
                        }), Object.defineProperty(s.Z58.prototype, "onAfterRender", {
                            get() {
                                return (...e) => {
                                    var t;
                                    i && i.end("profiler"), null == (t = d.get(this)) || t(...e)
                                }
                            },
                            set(e) {
                                d.set(this, e)
                            },
                            configurable: !0
                        }), i
                    }, []);
                    return (0, n.useEffect)(() => {
                        u && (u.overClock = e || !1, !1 === e && (y({
                            overclockingFps: !1
                        }), b.value = 0, b.isOverLimit = 0), u.chartHz = (null == r ? void 0 : r.hz) || 60, u.chartLen = (null == r ? void 0 : r.length) || 120)
                    }, [e, u, null == r ? void 0 : r.length, null == r ? void 0 : r.hz]), (0, n.useEffect)(() => {
                        a && (s.B69.prototype.updateMatrixWorld = function() {
                            (this.matrixWorldNeedsUpdate || arguments[0]) && R.value++, S.apply(this, arguments)
                        }, s.B69.prototype.updateWorldMatrix = function() {
                            R.value++, T.apply(this, arguments)
                        }, s.B69.prototype.updateMatrix = function() {
                            M.value++, _.apply(this, arguments)
                        }), l.info.autoReset = !1;
                        let t = null,
                            r = null;
                        if (l.info) return t = (0, o.j)(function() {
                            v().paused && y({
                                paused: !1
                            }), window.performance && (window.performance.mark("cpu-started"), u.startCpuProfiling = !0), M.value -= 1, R.value = 0, M.value = 0, l.info && l.info.reset()
                        }), r = (0, o.k)(function() {
                            var t, r;
                            if (u && !u.paused && (u.nextFrame(window.performance.now()), e && void 0 !== window.requestIdleCallback && (u.idleCbId = requestIdleCallback(u.nextFps))), i) {
                                let e = {},
                                    i = new Map;
                                c.traverse(function(t) {
                                    if ((t instanceof s.eaF || t instanceof s.ONl) && t.material) {
                                        let r = t.material.uuid;
                                        r = Array.isArray(t.material) && t.material.length > 1 ? I(t.material[1], e) : I(t.material, e), e[r].meshes[t.uuid] = t
                                    }
                                }), null == (r = null == (t = null == l ? void 0 : l.info) ? void 0 : t.programs) || r.forEach(t => {
                                    let r = t.cacheKey.split(","),
                                        n = r[r.findIndex(O) + 1];
                                    if (j(n) && e[n]) {
                                        let {
                                            material: r,
                                            meshes: o
                                        } = e[n];
                                        i.set(n, {
                                            program: t,
                                            material: r,
                                            meshes: o,
                                            drawCounts: {
                                                total: 0,
                                                type: "triangle",
                                                data: []
                                            },
                                            expand: !1,
                                            visible: !0
                                        })
                                    }
                                }), i.size !== v().programs.size && (A(i), y({
                                    programs: i,
                                    triggerProgramsUpdate: v().triggerProgramsUpdate++
                                }))
                            }
                        }), () => {
                            u && (void 0 !== window.cancelIdleCallback && window.cancelIdleCallback(u.idleCbId), window.cancelAnimationFrame(u.rafId), window.cancelAnimationFrame(u.checkQueryId)), a && (s.B69.prototype.updateMatrixWorld = _), t(), r()
                        }
                    }, [u, l, r, a]), (0, n.useEffect)(() => {
                        let e = (0, o.l)(function() {
                            return u && (u.paused = !0, M.value = 0, R.value = 0, y({
                                paused: !0,
                                log: {
                                    maxMemory: 0,
                                    gpu: 0,
                                    mem: 0,
                                    cpu: 0,
                                    fps: 0,
                                    totalTime: 0,
                                    frameCount: 0
                                }
                            })), !1
                        });
                        return () => {
                            e()
                        }
                    }, []), null
                };
            var P, D = "colors",
                N = "sizes",
                B = "space",
                F = {
                    gap: B,
                    gridGap: B,
                    columnGap: B,
                    gridColumnGap: B,
                    rowGap: B,
                    gridRowGap: B,
                    inset: B,
                    insetBlock: B,
                    insetBlockEnd: B,
                    insetBlockStart: B,
                    insetInline: B,
                    insetInlineEnd: B,
                    insetInlineStart: B,
                    margin: B,
                    marginTop: B,
                    marginRight: B,
                    marginBottom: B,
                    marginLeft: B,
                    marginBlock: B,
                    marginBlockEnd: B,
                    marginBlockStart: B,
                    marginInline: B,
                    marginInlineEnd: B,
                    marginInlineStart: B,
                    padding: B,
                    paddingTop: B,
                    paddingRight: B,
                    paddingBottom: B,
                    paddingLeft: B,
                    paddingBlock: B,
                    paddingBlockEnd: B,
                    paddingBlockStart: B,
                    paddingInline: B,
                    paddingInlineEnd: B,
                    paddingInlineStart: B,
                    top: B,
                    right: B,
                    bottom: B,
                    left: B,
                    scrollMargin: B,
                    scrollMarginTop: B,
                    scrollMarginRight: B,
                    scrollMarginBottom: B,
                    scrollMarginLeft: B,
                    scrollMarginX: B,
                    scrollMarginY: B,
                    scrollMarginBlock: B,
                    scrollMarginBlockEnd: B,
                    scrollMarginBlockStart: B,
                    scrollMarginInline: B,
                    scrollMarginInlineEnd: B,
                    scrollMarginInlineStart: B,
                    scrollPadding: B,
                    scrollPaddingTop: B,
                    scrollPaddingRight: B,
                    scrollPaddingBottom: B,
                    scrollPaddingLeft: B,
                    scrollPaddingX: B,
                    scrollPaddingY: B,
                    scrollPaddingBlock: B,
                    scrollPaddingBlockEnd: B,
                    scrollPaddingBlockStart: B,
                    scrollPaddingInline: B,
                    scrollPaddingInlineEnd: B,
                    scrollPaddingInlineStart: B,
                    fontSize: "fontSizes",
                    background: D,
                    backgroundColor: D,
                    backgroundImage: D,
                    borderImage: D,
                    border: D,
                    borderBlock: D,
                    borderBlockEnd: D,
                    borderBlockStart: D,
                    borderBottom: D,
                    borderBottomColor: D,
                    borderColor: D,
                    borderInline: D,
                    borderInlineEnd: D,
                    borderInlineStart: D,
                    borderLeft: D,
                    borderLeftColor: D,
                    borderRight: D,
                    borderRightColor: D,
                    borderTop: D,
                    borderTopColor: D,
                    caretColor: D,
                    color: D,
                    columnRuleColor: D,
                    fill: D,
                    outline: D,
                    outlineColor: D,
                    stroke: D,
                    textDecorationColor: D,
                    fontFamily: "fonts",
                    fontWeight: "fontWeights",
                    lineHeight: "lineHeights",
                    letterSpacing: "letterSpacings",
                    blockSize: N,
                    minBlockSize: N,
                    maxBlockSize: N,
                    inlineSize: N,
                    minInlineSize: N,
                    maxInlineSize: N,
                    width: N,
                    minWidth: N,
                    maxWidth: N,
                    height: N,
                    minHeight: N,
                    maxHeight: N,
                    flexBasis: N,
                    gridTemplateColumns: N,
                    gridTemplateRows: N,
                    borderWidth: "borderWidths",
                    borderTopWidth: "borderWidths",
                    borderRightWidth: "borderWidths",
                    borderBottomWidth: "borderWidths",
                    borderLeftWidth: "borderWidths",
                    borderStyle: "borderStyles",
                    borderTopStyle: "borderStyles",
                    borderRightStyle: "borderStyles",
                    borderBottomStyle: "borderStyles",
                    borderLeftStyle: "borderStyles",
                    borderRadius: "radii",
                    borderTopLeftRadius: "radii",
                    borderTopRightRadius: "radii",
                    borderBottomRightRadius: "radii",
                    borderBottomLeftRadius: "radii",
                    boxShadow: "shadows",
                    textShadow: "shadows",
                    transition: "transitions",
                    zIndex: "zIndices"
                },
                z = (e, t) => "function" == typeof t ? {
                    "()": Function.prototype.toString.call(t)
                } : t,
                U = () => {
                    let e = Object.create(null);
                    return (t, r, ...i) => {
                        let n = JSON.stringify(t, z);
                        return n in e ? e[n] : e[n] = r(t, ...i)
                    }
                },
                H = Symbol.for("sxs.internal"),
                G = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
                W = e => {
                    for (let t in e) return !0;
                    return !1
                },
                {
                    hasOwnProperty: X
                } = Object.prototype,
                Y = e => e.includes("-") ? e : e.replace(/[A-Z]/g, e => "-" + e.toLowerCase()),
                q = /\s+(?![^()]*\))/,
                V = e => t => e(..."string" == typeof t ? String(t).split(q) : [t]),
                $ = {
                    appearance: e => ({
                        WebkitAppearance: e,
                        appearance: e
                    }),
                    backfaceVisibility: e => ({
                        WebkitBackfaceVisibility: e,
                        backfaceVisibility: e
                    }),
                    backdropFilter: e => ({
                        WebkitBackdropFilter: e,
                        backdropFilter: e
                    }),
                    backgroundClip: e => ({
                        WebkitBackgroundClip: e,
                        backgroundClip: e
                    }),
                    boxDecorationBreak: e => ({
                        WebkitBoxDecorationBreak: e,
                        boxDecorationBreak: e
                    }),
                    clipPath: e => ({
                        WebkitClipPath: e,
                        clipPath: e
                    }),
                    content: e => ({
                        content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
                    }),
                    hyphens: e => ({
                        WebkitHyphens: e,
                        hyphens: e
                    }),
                    maskImage: e => ({
                        WebkitMaskImage: e,
                        maskImage: e
                    }),
                    maskSize: e => ({
                        WebkitMaskSize: e,
                        maskSize: e
                    }),
                    tabSize: e => ({
                        MozTabSize: e,
                        tabSize: e
                    }),
                    textSizeAdjust: e => ({
                        WebkitTextSizeAdjust: e,
                        textSizeAdjust: e
                    }),
                    userSelect: e => ({
                        WebkitUserSelect: e,
                        userSelect: e
                    }),
                    marginBlock: V((e, t) => ({
                        marginBlockStart: e,
                        marginBlockEnd: t || e
                    })),
                    marginInline: V((e, t) => ({
                        marginInlineStart: e,
                        marginInlineEnd: t || e
                    })),
                    maxSize: V((e, t) => ({
                        maxBlockSize: e,
                        maxInlineSize: t || e
                    })),
                    minSize: V((e, t) => ({
                        minBlockSize: e,
                        minInlineSize: t || e
                    })),
                    paddingBlock: V((e, t) => ({
                        paddingBlockStart: e,
                        paddingBlockEnd: t || e
                    })),
                    paddingInline: V((e, t) => ({
                        paddingInlineStart: e,
                        paddingInlineEnd: t || e
                    }))
                },
                K = /([\d.]+)([^]*)/,
                J = (e, t) => e.length ? e.reduce((e, r) => (e.push(...t.map(e => e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(e) ? `:is(${r})` : r) : r + " " + e)), e), []) : t,
                Z = (e, t) => e in Q && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, r, i, n) => r + ("stretch" === i ? `-moz-available${n};${Y(e)}:${r}-webkit-fill-available` : `-moz-fit-content${n};${Y(e)}:${r}fit-content`) + n) : String(t),
                Q = {
                    blockSize: 1,
                    height: 1,
                    inlineSize: 1,
                    maxBlockSize: 1,
                    maxHeight: 1,
                    maxInlineSize: 1,
                    maxWidth: 1,
                    minBlockSize: 1,
                    minHeight: 1,
                    minInlineSize: 1,
                    minWidth: 1,
                    width: 1
                },
                ee = e => e ? e + "-" : "",
                et = (e, t, r) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e, i, n, o, s) => "$" == o == !!n ? e : (i || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? ee(t) + (s.includes("$") ? "" : ee(r)) + s.replace(/\$/g, "-") : s) + ")" + (i || "--" == o ? "*" + (i || "") + (n || "1") + ")" : "")),
                er = /\s*,\s*(?![^()]*\))/,
                ei = Object.prototype.toString,
                en = (e, t, r, i, n) => {
                    let o, s, a;
                    let l = (e, t, r) => {
                        let c, u;
                        let h = e => {
                            var d;
                            for (c in e) {
                                let p = 64 === c.charCodeAt(0);
                                for (u of p && Array.isArray(e[c]) ? e[c] : [e[c]]) {
                                    let e = /[A-Z]/.test(d = c) ? d : d.replace(/-[^]/g, e => e[1].toUpperCase()),
                                        f = "object" == typeof u && u && u.toString === ei && (!i.utils[e] || !t.length);
                                    if (e in i.utils && !f) {
                                        let t = i.utils[e];
                                        if (t !== s) {
                                            s = t, h(t(u)), s = null;
                                            continue
                                        }
                                    } else if (e in $) {
                                        let t = $[e];
                                        if (t !== a) {
                                            a = t, h(t(u)), a = null;
                                            continue
                                        }
                                    }
                                    if (p && (c = (c.slice(1) in i.media ? "@media " + i.media[c.slice(1)] : c).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, r, i, n, o) => {
                                            let s = K.test(t),
                                                a = .0625 * (s ? -1 : 1),
                                                [l, c] = s ? [i, t] : [t, i];
                                            return "(" + ("=" === r[0] ? "" : ">" === r[0] === s ? "max-" : "min-") + l + ":" + ("=" !== r[0] && 1 === r.length ? c.replace(K, (e, t, i) => Number(t) + a * (">" === r ? 1 : -1) + i) : c) + (n ? ") and (" + (">" === n[0] ? "min-" : "max-") + l + ":" + (1 === n.length ? o.replace(K, (e, t, r) => Number(t) + a * (">" === n ? -1 : 1) + r) : o) : "") + ")"
                                        })), f) {
                                        let e = p ? r.concat(c) : [...r],
                                            i = p ? [...t] : J(t, c.split(er));
                                        void 0 !== o && n(eo(...o)), o = void 0, l(u, i, e)
                                    } else void 0 === o && (o = [
                                        [], t, r
                                    ]), c = p || 36 !== c.charCodeAt(0) ? c : `--${ee(i.prefix)}${c.slice(1).replace(/\$/g,"-")}`, u = f ? u : "number" == typeof u ? u && e in es ? String(u) + "px" : String(u) : et(Z(e, null == u ? "" : u), i.prefix, i.themeMap[e]), o[0].push(`${p?`${c} `:`${Y(c)}:`}${u}`)
                                }
                            }
                        };
                        h(e), void 0 !== o && n(eo(...o)), o = void 0
                    };
                    l(e, t, r)
                },
                eo = (e, t, r) => `${r.map(e=>`${e}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,
                es = {
                    animationDelay: 1,
                    animationDuration: 1,
                    backgroundSize: 1,
                    blockSize: 1,
                    border: 1,
                    borderBlock: 1,
                    borderBlockEnd: 1,
                    borderBlockEndWidth: 1,
                    borderBlockStart: 1,
                    borderBlockStartWidth: 1,
                    borderBlockWidth: 1,
                    borderBottom: 1,
                    borderBottomLeftRadius: 1,
                    borderBottomRightRadius: 1,
                    borderBottomWidth: 1,
                    borderEndEndRadius: 1,
                    borderEndStartRadius: 1,
                    borderInlineEnd: 1,
                    borderInlineEndWidth: 1,
                    borderInlineStart: 1,
                    borderInlineStartWidth: 1,
                    borderInlineWidth: 1,
                    borderLeft: 1,
                    borderLeftWidth: 1,
                    borderRadius: 1,
                    borderRight: 1,
                    borderRightWidth: 1,
                    borderSpacing: 1,
                    borderStartEndRadius: 1,
                    borderStartStartRadius: 1,
                    borderTop: 1,
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1,
                    borderTopWidth: 1,
                    borderWidth: 1,
                    bottom: 1,
                    columnGap: 1,
                    columnRule: 1,
                    columnRuleWidth: 1,
                    columnWidth: 1,
                    containIntrinsicSize: 1,
                    flexBasis: 1,
                    fontSize: 1,
                    gap: 1,
                    gridAutoColumns: 1,
                    gridAutoRows: 1,
                    gridTemplateColumns: 1,
                    gridTemplateRows: 1,
                    height: 1,
                    inlineSize: 1,
                    inset: 1,
                    insetBlock: 1,
                    insetBlockEnd: 1,
                    insetBlockStart: 1,
                    insetInline: 1,
                    insetInlineEnd: 1,
                    insetInlineStart: 1,
                    left: 1,
                    letterSpacing: 1,
                    margin: 1,
                    marginBlock: 1,
                    marginBlockEnd: 1,
                    marginBlockStart: 1,
                    marginBottom: 1,
                    marginInline: 1,
                    marginInlineEnd: 1,
                    marginInlineStart: 1,
                    marginLeft: 1,
                    marginRight: 1,
                    marginTop: 1,
                    maxBlockSize: 1,
                    maxHeight: 1,
                    maxInlineSize: 1,
                    maxWidth: 1,
                    minBlockSize: 1,
                    minHeight: 1,
                    minInlineSize: 1,
                    minWidth: 1,
                    offsetDistance: 1,
                    offsetRotate: 1,
                    outline: 1,
                    outlineOffset: 1,
                    outlineWidth: 1,
                    overflowClipMargin: 1,
                    padding: 1,
                    paddingBlock: 1,
                    paddingBlockEnd: 1,
                    paddingBlockStart: 1,
                    paddingBottom: 1,
                    paddingInline: 1,
                    paddingInlineEnd: 1,
                    paddingInlineStart: 1,
                    paddingLeft: 1,
                    paddingRight: 1,
                    paddingTop: 1,
                    perspective: 1,
                    right: 1,
                    rowGap: 1,
                    scrollMargin: 1,
                    scrollMarginBlock: 1,
                    scrollMarginBlockEnd: 1,
                    scrollMarginBlockStart: 1,
                    scrollMarginBottom: 1,
                    scrollMarginInline: 1,
                    scrollMarginInlineEnd: 1,
                    scrollMarginInlineStart: 1,
                    scrollMarginLeft: 1,
                    scrollMarginRight: 1,
                    scrollMarginTop: 1,
                    scrollPadding: 1,
                    scrollPaddingBlock: 1,
                    scrollPaddingBlockEnd: 1,
                    scrollPaddingBlockStart: 1,
                    scrollPaddingBottom: 1,
                    scrollPaddingInline: 1,
                    scrollPaddingInlineEnd: 1,
                    scrollPaddingInlineStart: 1,
                    scrollPaddingLeft: 1,
                    scrollPaddingRight: 1,
                    scrollPaddingTop: 1,
                    shapeMargin: 1,
                    textDecoration: 1,
                    textDecorationThickness: 1,
                    textIndent: 1,
                    textUnderlineOffset: 1,
                    top: 1,
                    transitionDelay: 1,
                    transitionDuration: 1,
                    verticalAlign: 1,
                    width: 1,
                    wordSpacing: 1
                },
                ea = e => String.fromCharCode(e + (e > 25 ? 39 : 97)),
                el = e => (e => {
                    let t, r = "";
                    for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ea(t % 52) + r;
                    return ea(t % 52) + r
                })(((e, t) => {
                    let r = t.length;
                    for (; r;) e = 33 * e ^ t.charCodeAt(--r);
                    return e
                })(5381, JSON.stringify(e)) >>> 0),
                ec = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"],
                eu = e => {
                    if (e.href && !e.href.startsWith(location.origin)) return !1;
                    try {
                        return !!e.cssRules
                    } catch (e) {
                        return !1
                    }
                },
                eh = e => {
                    let t;
                    let r = () => {
                            let {
                                cssRules: e
                            } = t.sheet;
                            return [].map.call(e, (r, i) => {
                                let {
                                    cssText: n
                                } = r, o = "";
                                if (n.startsWith("--sxs")) return "";
                                if (e[i - 1] && (o = e[i - 1].cssText).startsWith("--sxs")) {
                                    if (!r.cssRules.length) return "";
                                    for (let e in t.rules)
                                        if (t.rules[e].group === r) return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${n}`;
                                    return r.cssRules.length ? `${o}${n}` : ""
                                }
                                return n
                            }).join("")
                        },
                        i = () => {
                            if (t) {
                                let {
                                    rules: e,
                                    sheet: r
                                } = t;
                                if (!r.deleteRule) {
                                    for (; 3 === Object(Object(r.cssRules)[0]).type;) r.cssRules.splice(0, 1);
                                    r.cssRules = []
                                }
                                for (let t in e) delete e[t]
                            }
                            for (let n of Object(e).styleSheets || [])
                                if (eu(n)) {
                                    for (let e = 0, o = n.cssRules; o[e]; ++e) {
                                        let s = Object(o[e]);
                                        if (1 !== s.type) continue;
                                        let a = Object(o[e + 1]);
                                        if (4 !== a.type) continue;
                                        ++e;
                                        let {
                                            cssText: l
                                        } = s;
                                        if (!l.startsWith("--sxs")) continue;
                                        let c = l.slice(14, -3).trim().split(/\s+/),
                                            u = ec[c[0]];
                                        u && (t || (t = {
                                            sheet: n,
                                            reset: i,
                                            rules: {},
                                            toString: r
                                        }), t.rules[u] = {
                                            group: a,
                                            index: e,
                                            cache: new Set(c)
                                        })
                                    }
                                    if (t) break
                                }
                            if (!t) {
                                let n = (e, t) => ({
                                    type: t,
                                    cssRules: [],
                                    insertRule(e, t) {
                                        this.cssRules.splice(t, 0, n(e, {
                                            import: 3,
                                            undefined: 1
                                        }[(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4))
                                    },
                                    get cssText() {
                                        return "@media{}" === e ? `@media{${[].map.call(this.cssRules,e=>e.cssText).join("")}}` : e
                                    }
                                });
                                t = {
                                    sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : n("", "text/css"),
                                    rules: {},
                                    reset: i,
                                    toString: r
                                }
                            }
                            let {
                                sheet: n,
                                rules: o
                            } = t;
                            for (let e = ec.length - 1; e >= 0; --e) {
                                let t = ec[e];
                                if (!o[t]) {
                                    let r = ec[e + 1],
                                        i = o[r] ? o[r].index : n.cssRules.length;
                                    n.insertRule("@media{}", i), n.insertRule(`--sxs{--sxs:${e}}`, i), o[t] = {
                                        group: n.cssRules[i + 1],
                                        index: i,
                                        cache: new Set([e])
                                    }
                                }
                                ed(o[t])
                            }
                        };
                    return i(), t
                },
                ed = e => {
                    let t = e.group,
                        r = t.cssRules.length;
                    e.apply = e => {
                        try {
                            t.insertRule(e, r), ++r
                        } catch (e) {}
                    }
                },
                ep = Symbol(),
                ef = U(),
                em = (e, t) => ef(e, () => (...r) => {
                    let i = {
                        type: null,
                        composers: new Set
                    };
                    for (let t of r)
                        if (null != t) {
                            if (t[H])
                                for (let e of (null == i.type && (i.type = t[H].type), t[H].composers)) i.composers.add(e);
                            else t.constructor !== Object || t.$$typeof ? null == i.type && (i.type = t) : i.composers.add(eg(t, e))
                        }
                    return null == i.type && (i.type = "span"), i.composers.size || i.composers.add(["PJLV", {},
                        [],
                        [], {},
                        []
                    ]), ev(e, i, t)
                }),
                eg = ({
                    variants: e,
                    compoundVariants: t,
                    defaultVariants: r,
                    ...i
                }, n) => {
                    let o = `${ee(n.prefix)}c-${el(i)}`,
                        s = [],
                        a = [],
                        l = Object.create(null),
                        c = [];
                    for (let e in r) l[e] = String(r[e]);
                    if ("object" == typeof e && e)
                        for (let t in e) {
                            X.call(l, t) || (l[t] = "undefined");
                            let r = e[t];
                            for (let e in r) {
                                let i = {
                                    [t]: String(e)
                                };
                                "undefined" === String(e) && c.push(t);
                                let n = r[e],
                                    o = [i, n, !W(n)];
                                s.push(o)
                            }
                        }
                    if ("object" == typeof t && t)
                        for (let e of t) {
                            let {
                                css: t,
                                ...r
                            } = e;
                            for (let e in t = "object" == typeof t && t || {}, r) r[e] = String(r[e]);
                            let i = [r, t, !W(t)];
                            a.push(i)
                        }
                    return [o, i, s, a, l, c]
                },
                ev = (e, t, r) => {
                    let [i, n, o, s] = ey(t.composers), a = "function" == typeof t.type || t.type.$$typeof ? (e => {
                        function t() {
                            for (let r = 0; r < t[ep].length; r++) {
                                let [i, n] = t[ep][r];
                                e.rules[i].apply(n)
                            }
                            return t[ep] = [], null
                        }
                        return t[ep] = [], t.rules = {}, ec.forEach(e => t.rules[e] = {
                            apply: r => t[ep].push([e, r])
                        }), t
                    })(r) : null, l = (a || r).rules, c = `.${i}${n.length>1?`:where(.${n.slice(1).join(".")})`:""}`, u = u => {
                        let {
                            css: h,
                            ...d
                        } = u = "object" == typeof u && u || ex, p = {};
                        for (let e in o)
                            if (delete d[e], e in u) {
                                let t = u[e];
                                "object" == typeof t && t ? p[e] = {
                                    "@initial": o[e],
                                    ...t
                                } : (t = String(t), p[e] = "undefined" !== t || s.has(e) ? t : o[e])
                            } else p[e] = o[e];
                        let f = new Set([...n]);
                        for (let [i, n, o, s] of t.composers) {
                            r.rules.styled.cache.has(i) || (r.rules.styled.cache.add(i), en(n, [`.${i}`], [], e, e => {
                                l.styled.apply(e)
                            }));
                            let t = eb(o, p, e.media),
                                a = eb(s, p, e.media, !0);
                            for (let n of t)
                                if (void 0 !== n)
                                    for (let [t, o, s] of n) {
                                        let n = `${i}-${el(o)}-${t}`;
                                        f.add(n);
                                        let a = (s ? r.rules.resonevar : r.rules.onevar).cache,
                                            c = s ? l.resonevar : l.onevar;
                                        a.has(n) || (a.add(n), en(o, [`.${n}`], [], e, e => {
                                            c.apply(e)
                                        }))
                                    }
                            for (let t of a)
                                if (void 0 !== t)
                                    for (let [n, o] of t) {
                                        let t = `${i}-${el(o)}-${n}`;
                                        f.add(t), r.rules.allvar.cache.has(t) || (r.rules.allvar.cache.add(t), en(o, [`.${t}`], [], e, e => {
                                            l.allvar.apply(e)
                                        }))
                                    }
                        }
                        if ("object" == typeof h && h) {
                            let t = `${i}-i${el(h)}-css`;
                            f.add(t), r.rules.inline.cache.has(t) || (r.rules.inline.cache.add(t), en(h, [`.${t}`], [], e, e => {
                                l.inline.apply(e)
                            }))
                        }
                        for (let e of String(u.className || "").trim().split(/\s+/)) e && f.add(e);
                        let m = d.className = [...f].join(" ");
                        return {
                            type: t.type,
                            className: m,
                            selector: c,
                            props: d,
                            toString: () => m,
                            deferredInjector: a
                        }
                    };
                    return G(u, {
                        className: i,
                        selector: c,
                        [H]: t,
                        toString: () => (r.rules.styled.cache.has(i) || u(), i)
                    })
                },
                ey = e => {
                    let t = "",
                        r = [],
                        i = {},
                        n = [];
                    for (let [o, , , , s, a] of e)
                        for (let e in "" === t && (t = o), r.push(o), n.push(...a), s) {
                            let t = s[e];
                            (void 0 === i[e] || "undefined" !== t || a.includes(t)) && (i[e] = t)
                        }
                    return [t, r, i, new Set(n)]
                },
                eb = (e, t, r, i) => {
                    let n = [];
                    e: for (let [o, s, a] of e) {
                        if (a) continue;
                        let e, l = 0,
                            c = !1;
                        for (e in o) {
                            let i = o[e],
                                n = t[e];
                            if (n !== i) {
                                if ("object" != typeof n || !n) continue e; {
                                    let e, t, o = 0;
                                    for (let s in n) {
                                        if (i === String(n[s])) {
                                            if ("@initial" !== s) {
                                                let e = s.slice(1);
                                                (t = t || []).push(e in r ? r[e] : s.replace(/^@media ?/, "")), c = !0
                                            }
                                            l += o, e = !0
                                        }++o
                                    }
                                    if (t && t.length && (s = {
                                            ["@media " + t.join(", ")]: s
                                        }), !e) continue e
                                }
                            }
                        }(n[l] = n[l] || []).push([i ? "cv" : `${e}-${o[e]}`, s, c])
                    }
                    return n
                },
                ex = {},
                ew = U(),
                eA = (e, t) => ew(e, () => (...r) => {
                    let i = () => {
                        for (let i of r) {
                            let r = el(i = "object" == typeof i && i || {});
                            if (!t.rules.global.cache.has(r)) {
                                if (t.rules.global.cache.add(r), "@import" in i) {
                                    let e = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
                                    for (let r of [].concat(i["@import"])) r = r.includes('"') || r.includes("'") ? r : `"${r}"`, t.sheet.insertRule(`@import ${r};`, e++);
                                    delete i["@import"]
                                }
                                en(i, [], [], e, e => {
                                    t.rules.global.apply(e)
                                })
                            }
                        }
                        return ""
                    };
                    return G(i, {
                        toString: i
                    })
                }),
                eE = U(),
                eS = (e, t) => eE(e, () => r => {
                    let i = `${ee(e.prefix)}k-${el(r)}`,
                        n = () => {
                            if (!t.rules.global.cache.has(i)) {
                                t.rules.global.cache.add(i);
                                let n = [];
                                en(r, [], [], e, e => n.push(e));
                                let o = `@keyframes ${i}{${n.join("")}}`;
                                t.rules.global.apply(o)
                            }
                            return i
                        };
                    return G(n, {
                        get name() {
                            return n()
                        },
                        toString: n
                    })
                }),
                eT = class {
                    constructor(e, t, r, i) {
                        this.token = null == e ? "" : String(e), this.value = null == t ? "" : String(t), this.scale = null == r ? "" : String(r), this.prefix = null == i ? "" : String(i)
                    }
                    get computedValue() {
                        return "var(" + this.variable + ")"
                    }
                    get variable() {
                        return "--" + ee(this.prefix) + ee(this.scale) + this.token
                    }
                    toString() {
                        return this.computedValue
                    }
                },
                e_ = U(),
                ek = (e, t) => e_(e, () => (r, i) => {
                    i = "object" == typeof r && r || Object(i);
                    let n = `.${r=(r="string"==typeof r?r:"")||`${ee(e.prefix)}t-${el(i)}`}`,
                        o = {},
                        s = [];
                    for (let t in i)
                        for (let r in o[t] = {}, i[t]) {
                            let n = `--${ee(e.prefix)}${t}-${r}`,
                                a = et(String(i[t][r]), e.prefix, t);
                            o[t][r] = new eT(r, a, t, e.prefix), s.push(`${n}:${a}`)
                        }
                    let a = () => {
                        if (s.length && !t.rules.themed.cache.has(r)) {
                            t.rules.themed.cache.add(r);
                            let n = `${i===e.theme?":root,":""}.${r}{${s.join(";")}}`;
                            t.rules.themed.apply(n)
                        }
                        return r
                    };
                    return { ...o,
                        get className() {
                            return a()
                        },
                        selector: n,
                        toString: a
                    }
                }),
                eC = U(),
                eR = U(),
                eM = e => {
                    let t = (e => {
                        let t = !1,
                            r = eC(e, e => {
                                t = !0;
                                let r = "prefix" in (e = "object" == typeof e && e || {}) ? String(e.prefix) : "",
                                    i = "object" == typeof e.media && e.media || {},
                                    n = "object" == typeof e.root ? e.root || null : globalThis.document || null,
                                    o = "object" == typeof e.theme && e.theme || {},
                                    s = {
                                        prefix: r,
                                        media: i,
                                        theme: o,
                                        themeMap: "object" == typeof e.themeMap && e.themeMap || { ...F
                                        },
                                        utils: "object" == typeof e.utils && e.utils || {}
                                    },
                                    a = eh(n),
                                    l = {
                                        css: em(s, a),
                                        globalCss: eA(s, a),
                                        keyframes: eS(s, a),
                                        createTheme: ek(s, a),
                                        reset() {
                                            a.reset(), l.theme.toString()
                                        },
                                        theme: {},
                                        sheet: a,
                                        config: s,
                                        prefix: r,
                                        getCssText: a.toString,
                                        toString: a.toString
                                    };
                                return String(l.theme = l.createTheme(o)), l
                            });
                        return t || r.reset(), r
                    })(e);
                    return t.styled = (({
                        config: e,
                        sheet: t
                    }) => eR(e, () => {
                        let r = em(e, t);
                        return (...e) => {
                            let t = r(...e),
                                i = t[H].type,
                                o = n.forwardRef((e, r) => {
                                    let o = e && e.as || i,
                                        {
                                            props: s,
                                            deferredInjector: a
                                        } = t(e);
                                    return delete s.as, s.ref = r, a ? n.createElement(n.Fragment, null, n.createElement(o, s), n.createElement(a, null)) : n.createElement(o, s)
                                });
                            return o.className = t.className, o.displayName = `Styled.${i.displayName||i.name||i}`, o.selector = t.selector, o.toString = () => t.selector, o[H] = t[H], o
                        }
                    }))(t), t
                },
                ej = () => P || (P = eM()),
                eI = (...e) => ej().styled(...e);
            let eO = eI("div", {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    zIndex: 9999,
                    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
                    backgroundColor: "rgba(36, 36, 36, .9)",
                    color: "#fff",
                    margin: 0,
                    minHeight: "100px",
                    padding: "4px 0",
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    userSelect: "none",
                    "&.top-left": {
                        right: "initial",
                        left: 0
                    },
                    "&.bottom-left": {
                        right: "initial",
                        top: "initial",
                        bottom: 0,
                        left: 0,
                        ".__perf_toggle": {
                            top: "-20px",
                            bottom: "initial"
                        }
                    },
                    "&.bottom-right": {
                        top: "initial",
                        bottom: 0,
                        ".__perf_toggle": {
                            top: "-20px",
                            bottom: "initial"
                        }
                    },
                    "&.minimal": {
                        backgroundColor: "rgba(36, 36, 36, .75)"
                    },
                    "*": {
                        margin: "0",
                        padding: "0",
                        border: "0",
                        fontSize: "100%",
                        lineHeight: "1",
                        verticalAlign: "baseline"
                    }
                }),
                eL = eI("small", {
                    position: "absolute",
                    right: 0,
                    fontSize: "10px"
                }),
                eP = eI("div", {
                    display: "inline-flex",
                    fontStyle: "normal",
                    padding: 0,
                    lineHeight: "13px",
                    fontSize: "14px",
                    width: "62px",
                    position: "relative",
                    pointerEvents: "auto",
                    cursor: "default",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    textAlign: "left",
                    height: "29px",
                    whiteSpace: "nowrap",
                    justifyContent: "space-evenly",
                    fontVariantNumeric: "tabular-nums",
                    small: {
                        paddingLeft: "12px"
                    },
                    svg: {
                        padding: 0,
                        color: "rgba(145, 145, 145, 0.3)",
                        fontSize: "40px",
                        position: "absolute",
                        zIndex: 1,
                        maxHeight: "20px",
                        left: " 50%",
                        marginLeft: "-23px",
                        top: "4px"
                    }
                }),
                eD = eI("span", {
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "5px",
                    color: "rgba(101, 197, 188, 1)",
                    textAlign: "right",
                    letterSpacing: "1px",
                    fontSize: "8px",
                    fontWeight: "500",
                    width: "60px"
                }),
                eN = eI("div", {
                    display: "flex"
                }),
                eB = eI("div", {
                    backgroundColor: "#404040",
                    padding: "6px",
                    display: "block",
                    fontSize: "12px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    "*": {
                        cursor: "pointer !important"
                    },
                    "> span": {},
                    small: {
                        fontSize: "9px"
                    },
                    "> b": {
                        marginRight: "4px",
                        cursor: "pointer"
                    }
                }),
                eF = eI("div", {
                    height: "66px",
                    overflow: "hidden",
                    position: "absolute",
                    pointerEvents: "none",
                    display: "flex",
                    top: "0px",
                    justifyContent: "center",
                    width: "100%",
                    minWidth: "310px",
                    margin: "0 auto",
                    canvas: {
                        background: "transparent !important",
                        position: "absolute !important"
                    }
                }),
                ez = eI("div", {
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    verticalAlign: "middle",
                    color: "#f1f1f1",
                    padding: "7px",
                    width: "100%",
                    backgroundColor: "rgba(36, 36, 37, 0.8)",
                    zIndex: 1,
                    position: "absolute",
                    height: "100%"
                }),
                eU = eI("div", {
                    pointerEvents: "auto",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "12px",
                    backgroundColor: "rgb(41, 43, 45)",
                    marginTop: "6px",
                    width: "auto",
                    margin: "0",
                    color: "rgba(145, 145, 145, 1)",
                    textAlign: "center",
                    display: "inline-block",
                    verticalAlign: "middle",
                    padding: "4px 6px",
                    "&.__perf_toggle_tab_active": {
                        backgroundColor: "rgb(31 31 31)"
                    },
                    svg: {
                        width: "12px",
                        height: "12px",
                        float: "left"
                    }
                }),
                eH = eI("div", {
                    pointerEvents: "auto",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "12px",
                    float: "right",
                    backgroundColor: "rgb(41, 43, 45)",
                    width: "auto",
                    margin: "0",
                    color: "rgba(145, 145, 145, 1)",
                    textAlign: "center",
                    display: "inline-block",
                    verticalAlign: "middle",
                    padding: "4px 6px",
                    "&.__perf_toggle_tab_active": {
                        backgroundColor: "rgb(31 31 31)"
                    },
                    svg: {
                        width: "12px",
                        height: "12px",
                        float: "left"
                    }
                }),
                eG = eI("div", {
                    padding: "4px 6px",
                    fontSize: "12px",
                    pointerEvents: "auto"
                }),
                eW = eI("span", {
                    fontWeight: "bold",
                    letterSpacing: "0.08em",
                    maxWidth: "145px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block",
                    verticalAlign: "middle",
                    fontSize: "11px",
                    marginRight: "10px"
                }),
                eX = eI("div", {
                    maxHeight: "50vh",
                    overflowY: "auto",
                    marginTop: "38px"
                }),
                eY = eI("div", {
                    marginTop: "0"
                }),
                eq = eI("div", {
                    display: "flex",
                    position: "relative",
                    fontWeight: "bold",
                    color: "#fff",
                    lineHeight: "14px",
                    svg: {
                        marginRight: "4px",
                        display: "inline-block"
                    }
                }),
                eV = eI("ul", {
                    display: "block",
                    position: "relative",
                    paddingLeft: "10px",
                    margin: "6px 6px",
                    img: {
                        maxHeight: "60px",
                        maxWidth: "100%",
                        margin: "6px auto",
                        display: "block"
                    },
                    "&:after": {
                        content: "",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        width: "1px",
                        height: "100%",
                        backgroundColor: "grey",
                        transform: "translateX(-50%)",
                        maxHeight: "50vh",
                        overflowY: "auto"
                    },
                    li: {
                        borderBottom: "1px solid #313131",
                        display: "block",
                        padding: "4px",
                        margin: 0,
                        lineHeight: 1,
                        verticalAlign: "middle",
                        height: "24px"
                    },
                    b: {
                        fontWeight: "bold"
                    },
                    small: {
                        textAlign: "revert",
                        letterSpacing: "1px",
                        fontSize: "10px",
                        fontWeight: "500",
                        marginLeft: "2px",
                        color: "rgb(101, 197, 188)"
                    }
                }),
                e$ = eI("button", {
                    fontWeight: "bold",
                    letterSpacing: "0.02em",
                    backgroundColor: "rgb(41, 43, 45)",
                    color: "rgb(211, 211, 211)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    cursor: "pointer",
                    display: "block",
                    verticalAlign: "middle",
                    fontSize: "11px",
                    padding: "5px",
                    margin: "4px auto"
                }),
                eK = eI("div", {
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "12px",
                    backgroundColor: "rgb(41, 43, 45)",
                    marginTop: "6px",
                    width: "auto",
                    margin: "0 auto",
                    color: "rgba(145, 145, 145, 1)",
                    textAlign: "center",
                    position: "absolute",
                    right: 0,
                    bottom: " -20px",
                    svg: {
                        width: "12px",
                        height: "12px",
                        float: "left"
                    }
                }),
                eJ = eI("li", {
                    display: "flex !important",
                    height: "auto !important",
                    span: {
                        height: "40px",
                        display: "block",
                        position: "relative"
                    },
                    b: {
                        paddingLeft: "12px"
                    }
                });
            var eZ = r(715),
                eQ = r(7558);

            function e0() {
                return (e0 = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var i in r)({}).hasOwnProperty.call(r, i) && (e[i] = r[i])
                    }
                    return e
                }).apply(null, arguments)
            }
            var e1 = r(1966),
                e2 = r(228);
            let e3 = n.forwardRef(({
                    sdfGlyphSize: e = 64,
                    anchorX: t = "center",
                    anchorY: r = "middle",
                    font: i,
                    fontSize: s = 1,
                    children: a,
                    characters: l,
                    onSync: c,
                    ...u
                }, h) => {
                    let d = (0, o.A)(({
                            invalidate: e
                        }) => e),
                        [p] = n.useState(() => new e1.EY),
                        [f, m] = n.useMemo(() => {
                            let e = [],
                                t = "";
                            return n.Children.forEach(a, r => {
                                "string" == typeof r || "number" == typeof r ? t += r : e.push(r)
                            }), [e, t]
                        }, [a]);
                    return (0, e2.DY)(() => new Promise(e => (0, e1.PY)({
                        font: i,
                        characters: l
                    }, e)), ["troika-text", i, l]), n.useLayoutEffect(() => void p.sync(() => {
                        d(), c && c(p)
                    })), n.useEffect(() => () => p.dispose(), [p]), n.createElement("primitive", e0({
                        object: p,
                        ref: h,
                        font: i,
                        text: m,
                        anchorX: t,
                        anchorY: r,
                        fontSize: s,
                        sdfGlyphSize: e
                    }, u), f)
                }),
                e5 = "data:font/woff;base64,d09GRk9UVE8AAC6gAA0AAAAAQzgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAFIAAAIfMAAChRZFKn5EZGVE0AAC1EAAAAHAAAAByCRgjeR0RFRgAAJxQAAAArAAAANACwACRHUE9TAAAn9AAABU8AAA+MgotnaUdTVUIAACdAAAAAsQAAAWRlFnIQT1MvMgAAAZAAAABUAAAAYJf2spxjbWFwAAAEcAAAAJkAAAFCnGFvpGhlYWQAAAEwAAAANgAAADYNzYU0aGhlYQAAAWgAAAAgAAAAJA8QBSlobXR4AAAtYAAAAT8AAAGAjJsgS21heHAAAAGIAAAABgAAAAYAYFAAbmFtZQAAAeQAAAKJAAAFH4LLI15wb3N0AAAFDAAAABMAAAAg/20AZAABAAAAAiMSbAClT18PPPUACwgAAAAAAMTwES4AAAAA4yMHK/+1/jEG5QabAAAACAACAAAAAAAAeJxjYGRg4Cj+u5aBgV3j/9b/n9meMgBFUEACAKj9B0gAAFAAAGAAAHicY2BmUWT8wsDKwMI6i9WYgYFRHkIzX2RIY2JgYABhCHjAwPQ/gEEhGshUAPHd/f3dGRyA7Do2hn9APkcxU7ACA+N8kByLFesGoIwCAxMAY8AM0niclZS/TttQFMY/O5CIkiAQZUFVdSdUIWKTMEQCtWoUIYQEDKHqhKoa+5JYGN/IdojoC3Tt0k4dO1V9gj5Cxy59g459gg797BxCoHRoLF//7vlzz/E5xwHw2IphYfxz8VrYQg1fhG1U8E24RPkv4RmsWE+EZ7FsnQmXUbM+CFegrJ/CcyjbK8LzeGA3hatYtrVwDY79Q3gB66UT4UWUS++Fl8ifmYk1M8fdqyKrnC2s4p2wTe+vwiXKvwvPYB2/hWexZj0TLmPVeiNcwXPrk/AcqnZFeB4P7UfCVazZT4VrOLGvhBfwolQWXkS19FZ4ifwRHRgMcIUEIXroI4NCE5to8FLYo9ZQHkFzt48YPhxSm5KIz+7EKy12mk/Nsy65BrRExwyukrDXz1Rzs9FQe8b0Iq32Y99R7ShS3VyVqq5OdXKpAzp0Ge+Ud8Zb4bA4J8QQF1SZU5MZdaiDcJhvqetRE8FjRHR1bxh5yf+d8C9L9dfp055qEutl8bYpvQxrk1fOYd220MLOpI4tmukkDU2smk5jq7WTl6J1O3r9vjzr9+cZFrX2eGeM7dFL0yfP8pwyg7M7fXMm2Yep8lSWeIG+8JJzZc6kH7SYdsBYijun+OSLa6XjG3KHrU+KhDKuXlGCcbJ5WfKhyMuCTj8J0yz0YsVEdJKlhsIDevi0i4uRCeg5JAeFZ/5q/WLk2hxOj3bj3W2fDUrua8AmDw99Hac6UMM40InK+lq1B57Ph2g21E1PaJ9PcMZQ2/y/cTEqLoeBb4I7DJCwFi6rMZ1ESskBv4wOdnGEY6716yT6WTbYdt3RaOR4RXDHJD03GieQugf7nd2j4916kcB0i6VduD0TMgx/AIq26g8AAAB4nGNgYGBmgGAZBkYGELAB8hjBfBYGBSDNAoQgft3//0BS4f///w+hKhkY2RhgTJyAkYmZhZWNnYOTi5uHl49fQFBIWERUTFxCUkpaRlZOXkFRSVlFVU1dQ1NLW0dXT9/A0MjYxNTM3MLSytrG1s7ewdHJ2cXVzd3D08vbx9fPPyAwKDgkNCw8IjIqOiY2Lp6A7bQHAPlYGQAAAAB4nGNgZgCD/1kMKQxYAAAqHwHRAHiclXoHXFRX0/ddYXcvllVYF42uig07dkWpoiIWkKYodekKKEhbrPjkMWKcmKDJEyxBsSIgRUS6xqgIYsOuiA01diOJZu7uWfi+uWie8v7e7/u973KWPew9Zc7/zPxn5hwknLExJ5FIFJ6xIbGJsaNcw8OWJi3jJB04Ceci9OYEtUTo00HoayT0MGb+nY1+62zctyNnvGloP4B/VjrLHQ2hatkztWyXVM1d6armuG5qybemas5KPeShGWcsjtaZs+HcuYBxVmPHT7axGDdm7OTpsXEr45dGLkkU/xprMSs2NjIm3GL28lAri2kxMRae4qMEC8/whPD45PAwq08SWnySkL6OTIoJjv+PLzl6SbgOnBFnzEk5GSfnlnAmXEeuE03ehVNwXblunClnxim57pyKM+d6cD25L7heXG9OzfXh+nL9OAuuPzeAG8gN4gZzltwQbig3jBvOjeBGcqM4K240N4Yby43jxnMTuIncJG4yZ81N4abSwmw5O86ec+AcuTWcEzedm8HN5Jy5WZwLN5ubw83l5nGunBs3nwDw4Dw5L86bW8At5Hy4Rdxizpfz4/y5AC6QC+I0IlKDaOKvuArJqA5Ko+HGQ4znGVdLR0lXSfdKG6UtMmOZWlYmeyjX8GP5BBMTk59NnnZ83Wl/p986L+m8uXNe58tdtnX9ouv8rn9222FqZupgGmlmYjbVzNss1+yZ0li5WLmlu3P3fNUKVbN5hfnDHtY9gnvs6XG9p1HPET0Deqb0PNSzrufdnvjFuV6Ler3tnaruro7oM6LPyj63+wb23dm3pJ9jv20WIyxO9p/ff+sAvwE5AyUDBw8MGvj9wAeD5IO0g7YO5gdvYaHQoqtrkbS0CIYWoxZzXZ3+h9Y6WUublUpXJxha6+SK1nBFq/1a3KE2rtCa4UA8zDZjuPIR1eQqiMhYtj9+f3x+ahmUQX7G/gP7D2TkQBGvbICjqXnxB+IPRGVoQANRqfHxfHx8ajSE89vUUjvVvrYMDIf9+gypwnBBv0nIMnuPTswJ++GkT5/KrPf6TSrsB1LlKYuOyk34iyHr05/pFh0Vu7OSBSsch5dwvDBBK3ktWKlwNTgYrNAWbtOTxPa6TXv9OwAcx1ZADbX+kurjWRhI7woTmA3YGSawJPhX/SAAG49p4MEusR0gFaaZi50Sxb+lilW4SH9fGG/2G6ax+ZiGxjRSP5yA3TFN+eo3Yb4KWM+C/tdsrtm0+GPPNTxbiOPRR45dt78uabjacLXgV0Ap1H7588ryleUrjkXlR+WH5Pge8j3kcnhSLj8p1y0/soBX3oosWFUBNXAxs7qwoLDgxE8X4CKcSDjqd9RvtwtM5nGjDLBH9Md59+fdH1vF+J94jGMT2HI5k68brXGZ4TJj6RhgRsAm32XdcLR1ZfzF2IfLHi6rjSqMKIzIDABPHtxS/EIjQiM8VjqAPbjtC67gla+CK5IvwkNegQe1OEjogZa0wYMFc7SUvEN7zEW7B+0f9kbv9M9UYHXYsca7xvtW3DN4Dreyz9Ar+zo089fl8GvsTa8zXmccDlvBaJi23NPL0yt2Oozn0d5edVMOlRnFBw4fOJy/4zgchyNrDy4/uHx7BATwTnLwXRceHxsfu3RNCARD1M4V2Suy1xVBBX+xbbgKTafr/NTG8cz0upRtbtujgjHZTme9znrdjn0BLz6LcEgU4ZocXi6/5XHa47RT9hgYC9NiPbw9vJc7wTgSwU4UoXp78cHsg9lHdpRAiShC7MFYEsGfd5TD4nXhCbEJsVFrNRACS3auOLziMIlQzivuanEhG5WslkrQx+wxaUBXTMFajKzASGXpY6EPbX7XsiGPHR47oDwcB4FYuhX/cZdXLr8/HAuAReFW6UOUH8chgLN4FimDYdpxITY8y8dH765Lr548cTKXfnaehjp4vvTOrPOzzk/M6w/MBEYtdZ7tPHvJWGAyHvwz/PYu3ru42O3sDMbZT58V4cVHeK10BRdeWYpp36vg7rGGe3V87l68ZugkneFtHzcFnMAjS3Oc1xxPOg2XeaXVB52fCqp3HMvOy847uquSLLdw7eG4w3E7yDrBM9k/JIKPiWdGDlLnR0uvwhle0WaiTxe2m91HV+aK45VZ9/XpKhwvWuZBoTegKXMFMuMdZAkrjLC78JTAmJLFRpSwvlTqmOIe60Dlkf3TIL4Ke0sHPbDBLp44jkosugAG8t88lqajxxG0qUFLKrexw8trvB8OkI4LmuRgwyRU3JhpCOtLJZlZArPiFYatggRTjI6xJlUV6y19Vvq48QFKqdShaQn2pbIHBwAO5TfflW7EfgnYW4PmVNywo80Hmw/WNyeV8H5MnRsrfTX6Out6ko2kcoDZAXPlE+XANMvZHA82nooN6zjEnlewRrW0SGsmSHEWs8ZhyqxD+nIV1oxnoewAWg5GZ8xDF1aCgz8yf9yN9U8WoCM7weQE0078nc0ivLJ2sjfsNJpIFWOF2xgvERbieqMrwm2VYGaYieuFmUI3jDd0E4ax9YZhBjOZonUvaxJqJWiOy42y2bcq7GEnPV1Rfq7gWsG1zKvfXOO/wekslljLQ7rZf0PA2sC1gXE+YW6EzhkhExdJrgl7ja4JmSphLy4y7KXxhqzHPRLsjYVG9KuLqn9HhWGKuCzJFmaqQi8Qrqplo5gX7ScpvP45+kg+4EZhCaYZfRBeqLawoBI26t7AewOxow+OBZwA2OmXux/vfjyG4wDDeUyXf41BoTjKrsWuhXU+ycYDmwiss4/dALsBYYx0mNpsZPtU+EC+BbvveVlUW1R7LrcRmqA2pmhu0dzdQ4D14dl9+desh3Z4hGuEq8cyO5gK84+EXw6/nPIeUM0rssgOj2sltKiNRmirz1OhDhWgZrG4EYAexYDhIguXKoCWcJ2W0IRpQhgtoUn0KGkyeLD3UmlVaVXd/ka4BKeSizXFmt1e4AwL1/oso5/Fs2fa8YaVhoPAbPSR5DEWtloDCoKp9MX7K89K7pXc23MbbpDeh7ybcm3KNWZUwPrDMJigdQxzDPP0Dp3Bh85ItiG+ETEUlqG34Eak0UhCBBFxrMCNyg+NQi8ykm7lQ586PnVEeQRaAFoCmhQ/u/PsTvkfxPDQlHw1+FzwufmlNof4S4d/KTtewyuF4zV76sgfoHnIe+sb1jeYvIgNhvFgs3LG0hlLvf1C3ULdUmaBIy+usi6r6vjR40d/2X0RbsHplMLwwvDd3rTK6cneQeFB4e4pjpt5NpR540DZU7iSXB7CKz+Uh+xzJ5/gkOShCdWEztc6iuSxR3NMcyz5Z7ggIo930Edvp5XoZhCgPwsxqm1sqM6ENPAO+U2gp7Pptw+j33o79h1IDSZtdir8P8KNzDwwfGhXK+EBLsJSjJCgClOFWBoHVcSg21i3qqFPHJ44YIdw/AJwGOFR9ujJoyelaEJ2DDg8DDvZP7V/alHG+gE/CRxSXML4Y/heuENTRrTuA9vWeFzoJy3MP7I3NyM3o2hrGelV/YoKnwqffc4wDkYnOwUvDF7oGecIvAssyAw5GnJ0xS9fXhM3apHwlKQ6iQESNKGdisevjNBEqKVdcipn/Z9ZPLPATgtwMGB/QFlF8/Pm52XYqV2sgRFoMu3Xab8OLmcq4FkXGBJiN2UnflH9e9ONphsoKUL1Fj4HA+JlbC2wWdNZNzZYfM9j/sC+p61iJuSVsk4cOVaWU5ZTvfMUXIMzsaXepd5Z5DdhfPKM4AXBCzzjpgM/HdzzAi8EXkh8BMi124HxW9LvBvpQ6b4Cw101U+L3IBBTEXq92776ZMdCHPoILqSDf9BkEbS6oWSDkRS2/P6H0J9WqCwd3OzY7Ih8uLhA8lzyouZbzbdKWwC7w53kqyF1IXUe1Q4FfH3eibKiM7zyTdGZzHoSE7uFvrW5YXODcYWsDzA1MC7SxsnGKXQYKTfM2D2v0Isv9KoOqo92jPLwC3HlQ1yTZ4Idr/wd0zJUcCOr5njZ8bKze6+JS04qDSoN2usO02Ga1iOEXh7JTsA7gWdWcCkfXJp8Fq7RzEd0A1RwOfNUYXFhcfWe83AeqrVFIUUhmQthHrisXBgZFhm2WOsKvCss3hNZzEcWrzxFXk/xFQbgUfQU/iRWfIEbhEjijhd6f1q95VHW8fbY22Nbgmi1KIFXpU2Pv2QWmoH2LvYurMNSNvBrfgkLOCzD1C048yp2wr7i+xz6A+7ir8gB52pwyESUUGH8aTYERoF10gzNDI23W5hdmF3KBBjB44ZtKniSdeN4zfGa09lX4SqcjSqbUzZn7wSw4EfKE32jwjSxmtjAtb4wE7yyg88En0m+Cb/yitYZxNhCo8ja5iJrm7eztu6ZMYRtj6H4Or4gtRTKoWD7AXpl5MJRKE7NjT8Yf3DJ9kDgA2HpuvgV8StSYyCMxlqjo4HMUIKFbBMuV2ZV/E9cCv/ZpyhP1auNz6r+F/Pyf03MPPXNWkm9kK/S3TWQMacZmjFRaMYUqrbeNfBSxSQUaIMSMFCCg1FQ6X7HgNbfZZhgTLVAqinYFHEICjGmqHQfBB5wQav4wf4utDGtoY2tkSpYairu0H1MRhcMMqvFtBzMZj+iluJ15Z+1+rvt1H86s6wgryCv4qezUAvlq3OjcqN2+ZHm+K8LigtZFRcSNGceP2dekEfSwqSF62eKMaNW9s3rfTfKTvDYFbtI3384+aeoJKiIeOV4xfHKgHzWC5g5DFhq68zbOodabWYdeaUeD7aFUXb043+bHf17asRTpLsuPoGPT6DciJAS3hoW40iy4gAMwQHMAq11zjiaNHeYWQtOV0vVOEb5XYsQrdrAFh1itvWsfx1T/zoQu0wXi+UStANeOf8qNPzQsKth1+mskkNk1H2kmsRFK93W8cpCt3XuG7yA9QXG54yoG1E3/WkA8lRSsO/3OHErjjuC/c9hNypNL99f5N9fRPkRcka4lHz9nI+sB5Uq5r6ebU5jfOLIIKcgJ6/IWUSt4Ze2Y0/+Z6FW6lG26LBmh2aH7zYvch4zE+b4zfFb6BI8IXhC3LD1TJLKeu2xOGHDK/udsLkZ+gaqoXJ7+YHyA8eO5p8k+UoG3VuEXQCV8Fv1zdc3X5dgj+/R5nuctwInumMfKuP+YJ1viGVgEZtKfGsNbEgo6z6ViiUznsYseXqHMOu/s7m8rqOvajuqD7dUXq28WltwE3LhyFdH1vGBhr9Jtd4rgqKjSY7o6KVrImEBhO2Pr4yv/PuVH8jqsCd5uueo0Q/WSjLNcRdgR3wu1FG0w57jT2CoopiJaUE6rG2wCiOF9xhpeC9V0PNAwQ/dhFGoMcOhuFVIw3S2DNOVH3CouZAtw8mAZkVPbjy5UfoBsA88SLqmOac5N/+YbVbD4VPHC0+Riy88lVkLlykC0LydeGniJWZ6hE0B3pAmw61q1ktF45+W03ijN92hUHUEzEzyDgwLDHPV2hIW+TqViibfLG+G+tUltDihJDrLhxh1TtKioMigSNdV1ErxUUsLu47BkhbcpuuH6UYtur4U2vU6wDpWWVZZNtg+8X7i3RKHZGRTAb8o/a35t+azqNiJo3mWLls3MHra4sDFgY5JQ4FJwLrE64HXg1jsDDiWR5X8Gxydgx3P3Tt371EJdoBXcD2xOqA6IMchYwBFh7LVON4Tuw1rHtbMVGViaNgJ+seO8Rzj6WzjO8B3QAK5T4r/FGRjgfoC1EjaUbyN24xEACfLRFXks1vOtpxtvHf6w+kPh0Rd6cvfIBJWx2EX7w/eH+zvDzk75CyTHha9scHpM2w02Ew59X4X3GDdYJ0vTjOOnyrfzEZHss4zrGdYDw5hXxA2TuIWeqO/YPl5cnFi/TzioPmCt/AK/Q2vBEudC2raZsoU/bOShVZqP/Pf2pK4rRTgBBoeCDN1E6jdWJkCJ2uplQkFgvswSPKRULcg1D/qhhHqfQ6xLicHnRx03fal90tv5GIpkqXA4mPmi4IXBTd+PtXAC6cN1RSlnWJH5d7uo5fTslhHGF06u3l281Ls2g67MQXT43Kx07n75+4/LkEp4HRoGZ/NpvP4jSwFR3igfOS9kfeY6hibRMROFuM6gHWjspA5AIsjfU/MStb1xiDhd237StrVon01ut66fq29MV1U+HTD7639hN/ZVkok+otBOOUNOFlsOdn8cwuZYhStVW2s10rKMV3wooflwngSuU9J/wf2D+zRJBxHUsxEMUZJ8/3m+6VoBNiP129l6W3pcrDVuoYGhgZ6J84i7vDaHV4cXpxyDu7witq/pvsXzL4ynILThTmtJngKDA26n4Wjui/YOTDYG7YxCzYNdA5sKwVAjDAiiX79V2e9Je3nMPpKXIlw7tPQosGms3TU6oE+tahVPhLnSRcSZcob8TqVMK3tIwW3gpP+T6myLr7VHAyJmE5J3Q1x4ffkhslt7w3W+vesiebEhH+Tl8D87pPM+kyZrk9bJm4V05QiCo+hbW9rP/3edjlxrhbD9PUUF7dQH08StUVnr/qG9TvAup6wOGFxfcpzj+ceH2Oxo6ggH7Kf1zyvuXa/GjkqB9CUQOWb5JtxQDx2W/zn4j9n3h99dvTZAYfJwqgMiB3tMdpjpvViJqGygpkCI3vcOk31kCx2bB52Of/4/ONHx0XPZgzNmrqJdRNzKIRjE3kHyoWtY5jp/EnzJ03UMGPxcGlCmWuza3MMdiOvwCvukhkcJd1J/8te736yV6odxV9k5JKwx7GXjS8bK8TNpq3v54fGIx6NeMS6H2eTyUipzdZWfxUNcEH+cPOlhCr/Kv/988AWbBLc/IP9g52TxpJp/guf1+34bDN6/d/jYwKVUPpdyQ881rOv0RqHsm/RR9p4rq6p7H3Z+ywxbO/7H1DN+AuqzqJp/T+hekRQjfkM1cO/oAqum1Q3KVeEyvq/QiUVoZpY5vrU9WnMJ0NVVBJUNQTVmr+gOvxPda7BAhmWG2pwP8B2dk/4Q/qw4NLJykuVl/Y1wRvCLQAlY26NucXMjzJiccMPImguKhpqj/zJ5ktJZZoyzb75YAeOCe5+Gj+NS/IkAi1di/76Rgw0u4lbWRhNk49blS9uCvNUMOaATbVztXPDgidhT8LepJBDGk/eqfDF9RfXK18DEeut1Reiz/DRZxZXO5c6l44pZtJ8KlPyfQt55R3fwvgyOAX1e09UFFQUXMh8AGISWaWpEoVwEKkeHibeDmwIbJj3i22RbdGY3ZbARlFaED7CYYSD/3DxZIv1usQk+IU136B5GYomS6jcX1JOP3t9YS64JwaIPmv2yvEwGOz2eZfzyhfe5XEX4AGvyBBTn6cEovB3sq1yqquEhWqmxu+oKviiRs3WyhR//EVFaEp23CQSlamQQmQ0rpp1fTvu7TjsGYg2gFNIQSvePXv37IRIvqN5fTCxka+cBQ8fxHz6jgCng74nfU/G34I3vD6EpcsVLz9bdyb9Vgm71Xp3/BqELNGmc8EgU7Mthg5q4wSpQrjyuaUYMKjwqdgyDbBQX4U5bVW4EeirdiJgiW1NLFvfxJYAy21rZMn6Rqni4ufOJeZYCXhZyMVLhlysAsNCXbwwTxfByoGdM+xj54R9VBVcWyOkip8+9xE2kIFsa5dvbdtIMBzBbQDCEWGNfiQ7AuxJqzN7onOWKrb85WnvmesbiBZ3y3Qb9Y1k123HKAfQ6NZD61dtN6SK1nGU4XuoZT7oaYY9hZGGkRRWP8Ke7I5KGIkeMmUDm0JPZfTdFPQ0jJQpDJ3aBdnTLsMHte46bgDDB7Vs1H8OliFYsTRxrAzWW8U8BCu1/JrBinnKlQ1oo9blUOgvtA90SrdMhSGAzkIwzjIEYzCwk7pocmBE8bXMC70k35ozL/0w9JIrDFfUxlfxjKRaiDGqVss4Fe5jZzAQmA+eET2CFn2YVTIRzij8AV3NnlFObEkyVD/DM2QY+fYNrg2uT2I+mfirY3eaeOWa7/1/iPoxmRzqT7K4mrV3SReENfKvUR721PGC4wXLPKYEa3BYM2v5rOULQ8J8wny03uDefhBTmllQkF2QXbH9NFyAqlW5S3OX7goCL34GGyYXD8i6xkx05Se6BlNVTh0OqODsvvLy3PLcK7ueAY89mEaWHBYdHZzIK6uDEwNS/cAHQrbHZMdkry6CSl5hp0VfNjZZ3xv9BGfyY90oy0/DOGE1rSgZu5ljHGSgiVRZeW3M2wCKrCkM+uPErXe33hVhL0BbfgdFTzMoS3B86/h2YDXrKfqLUSEzrSnyYGlyTFMzB5XgKS99frPiAzRC7fIS9xL3LJLWhI+hCEqeNCnEM8TTPdYB+oNjpeYl5XvjtbhQtwJ9JOKpVwiuNGoUcsjuppWx3k+HPR2GnX1xBNyFGz9dzr+c/0tlcU1xTVb9t5d5tlK2ySc5KHRJ6JLFK93ABtyyg2uCa5KeAJrwxcS/fFZz6dnSs7XZjVAHJ7THQo+FZi361pXHlbI0VAS/m3pr6q0BRWKMNBJYZ9/xQ8cPDRJXNIVXOP4nTJ8kS2NxGKesbBQqqMv0Ytbv7uC7g39fJKLUBd6U3XjCK1dlMGOCUKoUFYmlGU7KZ9wbfYzJxbRv4CJ7S97eMoxiR2ZDe5esAjTNelV6vvR8bW4jvIPrmvIJvCFEHjDOKWgokfP8nODzweeTHgN2IJh6EkxYis6YSVDpCnGD0QPhHyTIxEqmej389XA09UUreAZNmdcLrxeeqy69yLMeaCqdOXZMIPkWW5h90Odnn59jrm14yut83soAHUPwC5uXNi+ZrJINASuYnODo7+jv4RI8KXhS8ghgHI9b3ql+fHDwYkllSeUv+y5TqnEq+Wjw0eC9bulT+ZVkOluykvW9KIfORn8JRmCaUbm+lwqntPXCNPo+Dl1Y3GsZdqqpRb5vAeRuOrSR34qeUr+MwK0awhysolzmuMyJsqI6P5RNkStmGuzRG6PQV7cU/bRas/u4UVhKyMdirLLpfjvyzsdYv3uW9yz/WCwibwIviq/eFa+EJiXO8w/yD5qXNFXMNUaXOT7lmZxZSosX1mhuR92OurOKqGo4YOeSJ/ef3C8ja8UBvLJRn89i5ZRsSpVvZjweXkoRIOsBAxbbDuFth4Sx3sBsedwo7lXXvS/L6svq6/PuwVu4HlIxhTfEyf0nOwUPI3Bd84LOB51PekT5Pq8YlfWX5kiwC6nOKPHYsos5pul2yKqab5S+gXqoXJ0Xkxfzkw848q1u9MRHvgl3MRMiydVAGYdlgO1oXmggm1K0LqLhLmtxGv5oRs4pm20nW32Ppmqp16djg4T9Cfnr2o8Ntu+nV/uxQVFqbsKBhANLM4KAD4KlqQnxfEL8+hiIIMe4U63PV9EGXWZpFJyHGGajv1o65PMEMppgG03wwpGlqJi3vGR96Vfl8BGaDp+uOV1ziBZoxKuNdzKy9AD51+NDgiivjobl38Zv5Uko4unJn256Sagj/3+hoj4JlSoKpWCT2hcpLG93wASXKcGFH2XIoRHeNIRhPhg8dJ0ES8FH9GQ/s2cOI0HfkaURo4sAkblRTwuxpwX1bLc+iterPu2E9hPTibwtvrurlU0i16XpDshKGhuOvRHPEC7O/ZYp+VZ/TJNv1q2S7qjaf7QgpyCnYudpaIATq3Oic6J3LgZnvtWb+vlRRKha9sbjkselsUfEqHkgsA7etsxoIRoNPc0GA/HIwCCHccTCG1DKVpKUo/8lymedUN75pBQ/yqqe3ih7S9ZVtTonKidq5yJxGg96EiRPwx+ZHFUsqf3gyM9mOK8s34Cm7SPO+XfizMSNRJyFZB925Uz9fPDzwahYjKPgN3i673bF7YpzF0seljzc8wr+5DeflW7A0YvRdMzLMS9Zx0pmCUNhQpJDgEOA+5zPxt//L4La97KyvpKUXrx2qY+unFs5d/8E0b5Y18RRAXMD5s6LngL8FJibG1AfUJ/4RFQPhZ2hX7JgQcIt+yf05GQShWTcqHyF3QwTSPuEf8iu2b0KEwPs7tBy4vZvt387Kp7k2/A7ycVMj0B1u4s5IRJyVxiumTGBV976G3ZgicSurzCtdZ9KSJSX3r9e8g7uwfno0nml87ImEmkBUyaNCnINcp0fbQ/8EJh+POghr5j1l0iEl/YToQeTVDEYo2xqFCpFWhEJ3fKu5R+LUCVevj8vunaLN6STOigb1dJGFiNfayFyxKORx8UTgZ7EEfZDefuh7Rxh9xmu7ntflZ0vO38+9w68gqthlba8Yb3cf8qMkBFgD/Nzg+qD6pOa2zEyfE9ZtIDrPuNDAUy7QqbIih/dEhPdfDiyKW8j/w2mSBN/iE1fAgNhqr/7KF5Z9BV2YWvEQMZJi3N0m3GO2S1cz/zxb4IS/658cQtfqmDO7vnFXsVevwQ1RDdEN65+KvrxDzlNtU21x+5RglCztnpFCb+iJLRgweEFhx32j8wamTU3KyaLYvWYrNWHyVRLdh3JP5B/oCzjFJyFijUFMQUxP4WBf3uM0hL6wOaCzYWBeaLr7AJDYmzn2c4LsyMPwozqJmEX99NxDUkPVvEPVp3TFiYWJv4UBRoIWxUVlRCV4Js6F2bDwp2huUREoblJ5ZvOEhaVWgzQhaOLBIkKjb4XfYizQSdjIS8G4fy+J+GX70/v5NFdvnxD7KZYCIblP6zOXJ35ZS6U8MJ79CI340XkmcZ2MWe5wuqz775MyHaifbYidMuxk2BK0prnDq11rnV+ulS8JuoBLcevPeSVKVv740oAkQ8BWjOlyvKQSTbBlN3xTObZgH366dxEHmbL2ylKsld/WSUo2i5jJAidqBMF5Ctbd7I1up2Ul5d9anOE2mA1tfEHTNGtxjWtq8VqFTX/GzDH1lSWpEtlc4HFt2rZdJ2WdjPgU89cc9wHGC3IMMYgwyxgr4QKfCjksH3AQpjAAlFgWYAPDDnUZx1xd5BaOkgryRCF6tZ2fomVdOXChIiYpJgk/1Q34AO+BeYuLU0t/qoAxGtX418v4RxecFIbP2AZwOJa49lKXbw4PZBxuOAiyX1zfQdcaLghE37WxQNatT6h2H6RUAiGitZoqcJQIhxEZwluoUDtjHBQhaoLjmx4P7ZUns5SsTMbjqmz+SrsL2XyovktaWTPuJQMeoTHn0xeh/K6Gsodh/MYI/8ObWpbUF7E+6GFlJlEjV0wf9r8aTHDv6ZQgC2RsxFzHZmqr6I1+NPZiBPaGKGTeBtso5adZDayf0oSiilGh1isqor1l2KX/Gdnam/X3j78G3EXj4vlOPziLVT1RWc5U825hcP7oT+J03XZe/fb7rfHnGZd8nk/ZiFFk/Dagd8ye56FUrA2ps4Cu3iyLp5u/cX/H2Bh8k3Mfv5AZhLOK9Bc6IFB+8TbBxNcoFuH7uLln50KF8jgTEb5wYKDBQU/lcMBOPDV3vV71xfFnQw4GVAZfTzleEr5l9XAv4LGovqb9Tfz3ohxKnOXgdda/9iI2IjIlEBYAfFbk35M+jEy26/MrywgL2hP0B6/H3yBHwq2kW5Obk7LRon/2qFQG3/TXW18RaXdo7+8B//cUwsyg/0/5NC5IwZ2RJ9tnTtjGun+Pzp3UXNWSq6DRNLZoUDoAdiHOYG003+5l8lov5fJa7+XyWu/l8n4dC+T2n4fJF42dPq/PLzfuwB4nGNgZGBi4GNgYJAAYgUgmxEI44GYBchnAmJGMMkDxAJANojPAAAadADVAHicY2BkYGDgYmhjWMDA4uLmE8IglVxZlMOgkV6Ums1glpNYksfgwsACVMPw/z8DE5BixMvTY2B3jHJVYNBzDgoBkm5BjkDS198HSPo5hgHJIH9fIBkS5A0kkfQxJSfnFjDwpRUlJjOIgEUYwCRQhoGNQQKIGYBYisGIwYshgaGMoQcswsgwgYEZTPMBsQhUhxdYN6a4N5q4ENQeaokyAt0JEgcBJiBLEOhesBwAlTAg4wAAAHicpVfrT1xFFP/dZSmw7MKyVrSIL6zYilYsAVo0jUGkmDQVRQrFplqxagqpiEbTpGn8oA3xo/+AJNpgYqQmpTE+SGmCjxZF2liF2IrQAgssIG35Zvb4m7l7dy+wy+7G2ZyzM+fMecyZM+fOwADgwj68A2dV9a7nkdd8pL0Vm15rP9iCstYDbx9GFZycAxE4+GckMXI0t73VhqyWg+2HsV5ToDE5WIcsPTbg07MdKHZUcORCKjaihmMne6nkpPFnIAd5pBXgMbhhGIPaUj4qObMGu+n/y2jDMXTgPIbwOy5jHv8aLiPf2GLUGnuMl4wPjU6j2+gxviH0U1+pKNyITKSgnN5tQyEqkEuaV9JJu0dOol4W0CijHLlkEjvkJvaT4sBOmSd9Bl54gvPIJhTIEyiSYpRSU6X8hSqZxVOEakINoZbwHKGOevZQskH8aCLQAzmr8c/E9YyJk56NolyuYZsEUCFXaL1UBkmZ42iII4Oe18kZylzgbBct7mB06mQc+3GLpmST4iZllpQspCONPDUvU34lx0f/Z8gd5vpmtIyyP8F1FXFdZQQXrXgp5w1p93E9fq7Hz/X4uR4/1+LXkqnkBMgJkBMgJ0BOgNI7KVePrYxvDrXX0r5Bmoc2PPI+sgnKWoDWAuTkE1JoL4MWC7j7hXgAD+FhPEoNJYxpOXengjv/OHXsQh01N1BzE3fd4T6qMiHTndlPqfthbz6rI1cZTavlYHnLsdPkGuOwqjGOVu9zucR9MPszhGnbrDE5Tryk6Ks1yJDclCXdX5JBWZAOOaRZbk1bJHQQRqRfftT+0Hs5pXnnmA/q/0oUvYu2/j/h3mcRj+305Jt8mcCcORPzZJjjSaL1MebG9MWK6jLa4moaqQvxfVolsxRNK/PCHr/rCWm6EZWagKwpaVqMvjLdsm0Se+WPODqX5Zp91xNrMiljxBNmHssUa0LisvsIn4RHZxjNYeIROSRnZUAC0sk89vHE/CDj3HdPaN60ym4VC9mg91Ll+eshXmf06K7hwwyrldkLROF28Tx3STG96pBG+Vq6SfSyvp+UHp6zyHk5paIuizIQDMoxZqJXvguSK0cJm1bvVbTdjtintb4Y3g5bJ+D/nMmwtll10ojnVGwZb6tyeZLWNClTWpPOH2bBWBwBq2ZmcfYrhAtrar+arD9aSsczmXyMqcmsT5c1Hoftu7CseW0SdTE03bCw7NYVJXRW5b3Q/y+WndD4jWCrdK3QUZOE50vx53BWn8bX+TUmlg/ELyXBaTUK8XlCgn+rsypfSW+YunWZDtYZ+V5n0Qn1JeJ9w8791Nb/MwGPAhGcaIu+02Ym8ss6x+/uqMpSmFk3EFPPm+Fef1ybE3Iu7hx/uBeqTfKbzoCLrC2niUesXZKemDo2h3vNa1hKunqvoet0VOqRWDbWPqPysXyxgtK3MnLyk8ZTya4jmEB1kHrpJbzK2lwiL3J8AOarANIixyPVhzeqVP3/UbBMsvUcBO/i2J2MR+GWRB2NdiexfRF65NsYcpcIvTIt3epkygm+Oczm09/Fi1FlzgfftfTJdkTuoOoOvRcbwhMjvXtDEL85eBdX74HUMMXFF9LtIf25IVoWqXfiDvroXnGfXseY38b/dD1yhulO/lLUfuDWECUD6paobvym35EbY6SXh7sJibR12ndrDardZ1uTCV6uRPmdS5/dkfqoWxrMd6n5Io20FP6U54ZeNRiXDL2GDNZ+g68U9WrxsF9Aexv5/ijEZjyIIv162YJHUMw3TCnK9Atmu37DVOJJvqir8TRfrc+gFs/yPdPA9Tfhhf8AO0d8HwAAAAABAAAAANoy8IQAAAAAxPARLgAAAADjIwcreJwdzs0rxFEUxvHv79xzjcwskGyGNAs11IgiLyklUiyYIUkp5SUvKzSJTKGJRKR+CwsLZcOGlX/A0grJxkYie8USh8Wnp3vvc++5CgTfINUcyBFT+sK47jHpn5nwlQwHo2TkhnW5J+l2iGuWruCaCjmhR9rZdrWI9WfNmUmbftNoNkzWdJsZMyZVbAbv1GkJHbrKoday7l5pjyRt3iClPkboW5n2bYS6ZaZsvcicvySUTk51gZSP2v4QYSSwswuzZf3K/xzXbzt7oFefrNdMzqcojRRR74up0WcieseANJB3I5RZxtw8Te4YJyEN9uaobrCm9fb/vOljUB5J6Q4Zm7siUXIS/FxpyjLKXsGXdZdY0X3r/t3bpV9uLRP0yTmFusiy+6Tcf5DQAqrcGzHLjFzSIsKFZdynyf4CCpdPRgA=",
                e4 = (0, n.memo)(({
                    isPerf: e,
                    color: t,
                    colorBlind: r,
                    customData: a,
                    isMemory: l,
                    isShadersInfo: c,
                    metric: u,
                    fontSize: h,
                    offsetY: d = 0,
                    offsetX: p,
                    round: f,
                    hasInstance: m
                }) => {
                    let {
                        width: g,
                        height: y
                    } = (0, o.A)(e => e.viewport), b = (0, n.useRef)(null), x = (0, n.useRef)(null);
                    return ! function(e, t, r = [], i) {
                        let o = (0, n.useRef)(t);
                        (0, n.useEffect)(() => void(o.current = t), [t]), (0, n.useEffect)(() => {
                            let e = e => {
                                    var t;
                                    return null == (t = o.current) ? void 0 : t.call(o, e)
                                },
                                t = E.on("log", e);
                            return () => {
                                var r, i;
                                return r = {
                                    context: t
                                }, void E.removeListener("log", e, null != (i = null == r ? void 0 : r.context) ? i : null, null == r ? void 0 : r.once)
                            }
                        }, [e, null == i ? void 0 : i.once, ...r])
                    }("log", function([t, i]) {
                        var n;
                        if (!t || !b.current || (a && (b.current.text = (Math.round(v().customData * Math.pow(10, f)) / Math.pow(10, f)).toFixed(f)), !u)) return;
                        let o = t[u];
                        if (c ? o = null == (n = i.info.programs) ? void 0 : n.length : "matriceCount" === u ? o = M.value : !e && i.info.render && (o = (l ? i.info.memory : i.info.render)[u]), "fps" === u && (b.current.color = v().overclockingFps ? ta(r).overClock.toString() : `rgb(${ta(r).fps.toString()})`), b.current.text = (Math.round(o * Math.pow(10, f)) / Math.pow(10, f)).toFixed(f), m) {
                            let e;
                            let t = i.info.instance;
                            if (void 0 === t && "matriceCount" !== u) return;
                            (e = "matriceCount" === u ? R.value : t[u]) > 0 ? (b.current.fontSize = h / 1.15, x.current.fontSize = o > 0 ? h / 1.4 : h, b.current.position.y = y / 2 - d - h / 1.9, x.current.text = " \xb1	" + (Math.round(e * Math.pow(10, f)) / Math.pow(10, f)).toFixed(f)) : (x.current.text && (x.current.text = ""), b.current.position.y = y / 2 - d - h, b.current.fontSize = h)
                        }
                        M.value -= 1, b.current.updateMatrix(), b.current.matrixWorld.copy(b.current.matrix)
                    }), (0, i.jsxs)(n.Suspense, {
                        fallback: null,
                        children: [(0, i.jsxs)(e3, {
                            textAlign: "justify",
                            matrixAutoUpdate: !1,
                            ref: b,
                            font: e5,
                            fontSize: h,
                            position: [-g / 2 + p + h, y / 2 - d - h, 0],
                            color: t,
                            characters: "0123456789",
                            onUpdate: e => {
                                e.updateMatrix(), M.value -= 1, e.matrixWorld.copy(e.matrix)
                            },
                            children: [(0, i.jsx)("meshBasicMaterial", {
                                blending: s.NTi
                            }), "0"]
                        }), m && (0, i.jsx)(e3, {
                            textAlign: "justify",
                            matrixAutoUpdate: !1,
                            ref: x,
                            font: e5,
                            fontSize: 8,
                            position: [-g / 2 + p + h, y / 2 - d - 1.15 * h, 0],
                            color: "lightgrey",
                            characters: "0123456789",
                            onUpdate: e => {
                                e.updateMatrix(), M.value -= 1, e.matrixWorld.copy(e.matrix)
                            },
                            children: (0, i.jsx)("meshBasicMaterial", {
                                blending: s.NTi
                            })
                        })]
                    })
                }),
                e6 = ({
                    colorBlind: e,
                    customData: t,
                    minimal: r,
                    matrixUpdate: n
                }) => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(e4, {
                        colorBlind: e,
                        color: `rgb(${ta(e).fps.toString()})`,
                        isPerf: !0,
                        metric: "fps",
                        fontSize: 14,
                        offsetX: 140,
                        round: 0
                    }), (0, i.jsx)(e4, {
                        color: `rgb(${ta(e).cpu.toString()})`,
                        isPerf: !0,
                        metric: "cpu",
                        fontSize: 14,
                        offsetX: 72,
                        round: 3
                    }), (0, i.jsx)(e4, {
                        color: `rgb(${ta(e).gpu.toString()})`,
                        isPerf: !0,
                        metric: "gpu",
                        fontSize: 14,
                        offsetX: 10,
                        round: 3
                    }), r ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(e4, {
                            metric: "calls",
                            fontSize: 14,
                            offsetX: 200,
                            round: 0,
                            hasInstance: !0
                        }), (0, i.jsx)(e4, {
                            metric: "triangles",
                            fontSize: 14,
                            offsetX: 260,
                            round: 0,
                            hasInstance: !0
                        }), (0, i.jsx)(e4, {
                            isMemory: !0,
                            metric: "geometries",
                            fontSize: 14,
                            offsetY: 30,
                            offsetX: 0,
                            round: 0
                        }), (0, i.jsx)(e4, {
                            isMemory: !0,
                            metric: "textures",
                            fontSize: 14,
                            offsetY: 30,
                            offsetX: 80,
                            round: 0
                        }), (0, i.jsx)(e4, {
                            isShadersInfo: !0,
                            metric: "programs",
                            fontSize: 14,
                            offsetY: 30,
                            offsetX: 140,
                            round: 0
                        }), (0, i.jsx)(e4, {
                            metric: "lines",
                            fontSize: 14,
                            offsetY: 30,
                            offsetX: 200,
                            round: 0,
                            hasInstance: !0
                        }), (0, i.jsx)(e4, {
                            metric: "points",
                            fontSize: 14,
                            offsetY: 30,
                            offsetX: 260,
                            round: 0,
                            hasInstance: !0
                        }), n && (0, i.jsx)(e4, {
                            isPerf: !0,
                            metric: "matriceCount",
                            fontSize: 14,
                            offsetY: 30,
                            offsetX: 320,
                            round: 0,
                            hasInstance: !0
                        })]
                    }), t && (0, i.jsx)(e4, {
                        color: `rgb(${ta(e).custom.toString()})`,
                        customData: t,
                        fontSize: 14,
                        offsetY: 0,
                        offsetX: r ? 200 : 320,
                        round: t.round || 2
                    })]
                }),
                e8 = ({
                    colorBlind: e,
                    minimal: t,
                    chart: r = {
                        length: 120,
                        hz: 60
                    }
                }) => {
                    let a = (0, n.useMemo)(() => ({
                            fps: new Float32Array(3 * r.length),
                            cpu: new Float32Array(3 * r.length),
                            gpu: new Float32Array(3 * r.length)
                        }), [r]),
                        l = (0, n.useRef)(null),
                        c = (0, n.useRef)(null),
                        u = (0, n.useRef)(null),
                        h = (0, n.useRef)(null),
                        d = (0, n.useMemo)(() => new s.Pq0(0, 0, 0), []),
                        p = (e, r = 1, i, n) => {
                            let o = 0,
                                {
                                    width: s,
                                    height: a
                                } = n,
                                l = v().chart.data[e];
                            if (!l || 0 === l.length) return;
                            let c = t ? 2 : 6,
                                u = t ? 12 : 50,
                                h = l.length;
                            for (let e = 0; e < h; e++) {
                                let t = (v().chart.circularId + e + 1) % h;
                                void 0 !== l[t] && (l[t] > o && (o = l[t] * r), d.set(c + e / (h - 1) * (s - 2 * c) - s / 2, Math.min(100, l[t]) * r / 100 * (a - 2 * c - u) - a / 2, 0), d.toArray(i.attributes.position.array, 3 * e))
                            }
                            i.attributes.position.needsUpdate = !0
                        };
                    return (0, o.C)(function({
                        viewport: t
                    }) {
                        p("fps", 1, l.current, t), c.current && c.current.color.set(v().overclockingFps ? ta(e).overClock.toString() : `rgb(${ta(e).fps.toString()})`), p("gpu", 5, u.current, t), p("cpu", 5, h.current, t)
                    }), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("line", {
                            onUpdate: e => {
                                e.updateMatrix(), M.value -= 1, e.matrixWorld.copy(e.matrix)
                            },
                            children: [(0, i.jsx)("bufferGeometry", {
                                ref: l,
                                children: (0, i.jsx)("bufferAttribute", {
                                    attach: "attributes-position",
                                    count: r.length,
                                    array: a.fps,
                                    itemSize: 3,
                                    usage: s.Vnu,
                                    needsUpdate: !0
                                })
                            }), (0, i.jsx)("lineBasicMaterial", {
                                ref: c,
                                color: `rgb(${ta(e).fps.toString()})`,
                                transparent: !0,
                                opacity: .5
                            })]
                        }), (0, i.jsxs)("line", {
                            onUpdate: e => {
                                e.updateMatrix(), M.value -= 1, e.matrixWorld.copy(e.matrix)
                            },
                            children: [(0, i.jsx)("bufferGeometry", {
                                ref: u,
                                children: (0, i.jsx)("bufferAttribute", {
                                    attach: "attributes-position",
                                    count: r.length,
                                    array: a.gpu,
                                    itemSize: 3,
                                    usage: s.Vnu,
                                    needsUpdate: !0
                                })
                            }), (0, i.jsx)("lineBasicMaterial", {
                                color: `rgb(${ta(e).gpu.toString()})`,
                                transparent: !0,
                                opacity: .5
                            })]
                        }), (0, i.jsxs)("line", {
                            onUpdate: e => {
                                e.updateMatrix(), M.value -= 1, e.matrixWorld.copy(e.matrix)
                            },
                            children: [(0, i.jsx)("bufferGeometry", {
                                ref: h,
                                children: (0, i.jsx)("bufferAttribute", {
                                    attach: "attributes-position",
                                    count: r.length,
                                    array: a.cpu,
                                    itemSize: 3,
                                    usage: s.Vnu,
                                    needsUpdate: !0
                                })
                            }), (0, i.jsx)("lineBasicMaterial", {
                                color: `rgb(${ta(e).cpu.toString()})`,
                                transparent: !0,
                                opacity: .5
                            })]
                        })]
                    })
                },
                e9 = ({
                    colorBlind: e,
                    chart: t,
                    customData: r,
                    matrixUpdate: o,
                    showGraph: s = !0,
                    antialias: a = !0,
                    minimal: l
                }) => {
                    let c = (0, n.useRef)(void 0),
                        u = g(e => e.paused);
                    return (0, i.jsxs)(eF, {
                        style: {
                            display: "flex",
                            position: "absolute",
                            height: `${l?37:s?100:60}px`,
                            minWidth: `${l?"100px":r?"370px":"310px"}`
                        },
                        children: [(0, i.jsx)(eQ.Hl, {
                            ref: c,
                            orthographic: !0,
                            camera: {
                                rotation: [0, 0, 0]
                            },
                            dpr: a ? [1, 2] : 1,
                            gl: {
                                antialias: !0,
                                alpha: !0,
                                stencil: !1,
                                depth: !1
                            },
                            onCreated: ({
                                scene: e
                            }) => {
                                e.traverse(e => {
                                    e.matrixWorldAutoUpdate = !1, e.matrixAutoUpdate = !1
                                })
                            },
                            flat: !0,
                            style: {
                                marginBottom: "-42px",
                                position: "relative",
                                pointerEvents: "none",
                                background: "transparent !important",
                                height: `${l?37:s?100:60}px`
                            },
                            children: u ? null : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(e7, {}), (0, i.jsx)(e6, {
                                    customData: r,
                                    minimal: l,
                                    matrixUpdate: o
                                }), s && (0, i.jsx)(e8, {
                                    colorBlind: e,
                                    minimal: l,
                                    chart: t
                                })]
                            })
                        }), u && (0, i.jsxs)(ez, {
                            children: [(0, i.jsx)(eZ.E$n, {}), " PAUSED"]
                        })]
                    })
                },
                e7 = () => ((0, o.C)(function({
                    gl: e,
                    scene: t,
                    camera: r
                }) {
                    r.updateMatrix(), M.value -= 1, r.matrixWorld.copy(r.matrix), r.matrixWorldInverse.copy(r.matrixWorld).invert(), e.render(t, r), R.value = 0, M.value = 0
                }, 1 / 0), null);
            var te = r(2669);
            let tt = (0, n.forwardRef)(({
                    portal: e,
                    className: t,
                    children: r,
                    name: s,
                    ...a
                }, l) => {
                    let c = (0, o.A)(e => e.gl),
                        u = (0, n.useRef)(null),
                        h = (0, n.useRef)(null),
                        d = (null == e ? void 0 : e.current) != null ? e.current : c.domElement.parentNode;
                    return (0, n.useLayoutEffect)(() => {
                        if (!u.current || !d) return;
                        let e = document.createElement("div"),
                            t = h.current = (0, te.createRoot)(e);
                        return d.appendChild(e), () => {
                            t.unmount(), h.current = null, d.removeChild(e)
                        }
                    }, [d]), (0, n.useLayoutEffect)(() => {
                        let e = h.current;
                        e && e.render((0, i.jsx)("div", {
                            ref: l,
                            className: t,
                            children: r
                        }))
                    }), (0, i.jsx)("group", {
                        name: s,
                        ...a,
                        ref: u
                    })
                }),
                tr = (e, t) => ({
                    name: e,
                    url: t.image.currentSrc,
                    encoding: (e => {
                        switch (e) {
                            case 3e3:
                                return "LinearEncoding";
                            case 3001:
                                return "sRGBEncoding";
                            case 3002:
                                return "RGBEEncoding";
                            case 3003:
                                return "LogLuvEncoding";
                            case 3004:
                                return "RGBM7Encoding";
                            case 3005:
                                return "RGBM16Encoding";
                            case 3006:
                                return "RGBDEncoding";
                            case 3007:
                                return "GammaEncoding";
                            default:
                                return "ClampToEdgeWrapping"
                        }
                    })(t.encoding),
                    wrapT: (e => {
                        switch (e) {
                            case 1e3:
                                return "RepeatWrapping";
                            case 1001:
                            default:
                                return "ClampToEdgeWrapping";
                            case 1002:
                                return "MirroredRepeatWrapping"
                        }
                    })(t.wrapT),
                    flipY: t.flipY.toString()
                }),
                ti = ({
                    program: e,
                    material: t,
                    setTexNumber: r
                }) => {
                    let o = g(e => e.gl),
                        [s, a] = (0, n.useState)(null);
                    return (0, n.useEffect)(() => {
                        if (o) {
                            let i = null == e ? void 0 : e.getUniforms(),
                                n = 0,
                                o = new Map;
                            i.seq.forEach(e => {
                                if (!e.id.includes("uTroika") && "isOrthographic" !== e.id && "uvTransform" !== e.id && "lightProbe" !== e.id && "projectionMatrix" !== e.id && "viewMatrix" !== e.id && "normalMatrix" !== e.id && "modelMatrix" !== e.id && "modelViewMatrix" !== e.id) {
                                    let r = [],
                                        i = {
                                            name: e.id
                                        };
                                    e.cache && (e.cache.forEach(e => {
                                        void 0 !== e && r.push(e.toString().substring(0, 4))
                                    }), i.value = r.join(), t[e.id] && t[e.id].image && t[e.id].image && (n++, i.value = tr(e.id, t[e.id])), i.value || (i.value = "empty"), o.set(e.id, i))
                                }
                            }), t.uniforms && Object.keys(t.uniforms).forEach(e => {
                                let r = t.uniforms[e];
                                if (r.value) {
                                    let {
                                        value: t
                                    } = r, i = {
                                        name: e
                                    };
                                    if (e.includes("uTroika")) return;
                                    if (t.isTexture) n++, i.value = tr(e, t);
                                    else {
                                        let e = JSON.stringify(t);
                                        try {
                                            e = JSON.stringify(t)
                                        } catch (r) {
                                            e = t.toString()
                                        }
                                        i.value = e
                                    }
                                    o.set(e, i)
                                }
                            }), n > 0 && r(n), a(o)
                        }
                    }, []), (0, i.jsx)(eV, {
                        children: s && Array.from(s.values()).map(e => (0, i.jsx)("span", {
                            children: "string" == typeof e.value ? (0, i.jsx)("li", {
                                children: (0, i.jsxs)("span", {
                                    children: [e.name, " :", " ", (0, i.jsxs)("b", {
                                        children: [e.value.substring(0, 30), e.value.length > 30 ? "..." : ""]
                                    })]
                                })
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("li", {
                                    children: (0, i.jsxs)("b", {
                                        children: [e.value.name, ":"]
                                    })
                                }), (0, i.jsxs)("div", {
                                    children: [Object.keys(e.value).map(t => "name" !== t ? (0, i.jsx)("div", {
                                        children: "url" === t ? (0, i.jsx)("a", {
                                            href: e.value[t],
                                            target: "_blank",
                                            children: (0, i.jsx)("img", {
                                                src: e.value[t]
                                            })
                                        }) : (0, i.jsxs)("li", {
                                            children: [t, ": ", (0, i.jsx)("b", {
                                                children: e.value[t]
                                            })]
                                        })
                                    }, t) : null), (0, i.jsxs)(e$, {
                                        onClick: () => {
                                            var r;
                                            console.info(t[e.value.name] || (null == (r = null == t ? void 0 : t.uniforms[e.value.name]) ? void 0 : r.value))
                                        },
                                        children: ["console.info(", e.value.name, ");"]
                                    })]
                                })]
                            })
                        }, e.name))
                    })
                },
                tn = ({
                    el: e
                }) => {
                    g(e => e.log);
                    let t = g(e => e.gl);
                    return (0, i.jsx)(i.Fragment, {
                        children: e.drawCounts.total > 0 && (0, i.jsxs)(eP, {
                            style: {
                                height: "auto",
                                width: "auto",
                                margin: "0 4px"
                            },
                            children: ["Triangle" === e.drawCounts.type ? (0, i.jsx)(eZ.W8c, {
                                style: {
                                    top: "-1px"
                                }
                            }) : (0, i.jsx)(eZ.JDx, {
                                style: {
                                    top: "-1px"
                                }
                            }), e.drawCounts.total, (0, i.jsxs)("small", {
                                children: [e.drawCounts.type, "s"]
                            }), t && (0, i.jsxs)(eD, {
                                style: {
                                    bottom: "-10px",
                                    width: "40px",
                                    fontWeight: "bold"
                                },
                                children: [e.visible && !e.material.wireframe ? (e => {
                                    if (!t) return 0;
                                    let r = Math.round(e.drawCounts.total / (t.info.render.triangles + t.info.render.lines + t.info.render.points) * 1e3) / 10;
                                    return isFinite(r) && r || 0
                                })(e) : 0, "%"]
                            })]
                        })
                    })
                },
                to = ({
                    el: e
                }) => {
                    let [t, r] = (0, n.useState)(e.visible), [o, s] = (0, n.useState)(e.expand), [a, l] = (0, n.useState)(0), {
                        meshes: c,
                        program: u,
                        material: h
                    } = e;
                    return (0, i.jsxs)(eG, {
                        children: [(0, i.jsxs)(eB, {
                            onClick: () => {
                                e.expand = !o, Object.keys(c).forEach(e => {
                                    c[e].material.wireframe = !1
                                }), s(!o)
                            },
                            children: [(0, i.jsx)(eU, {
                                style: {
                                    marginRight: "6px"
                                },
                                children: o ? (0, i.jsx)("span", {
                                    children: (0, i.jsx)(eZ.kj1, {})
                                }) : (0, i.jsx)("span", {
                                    children: (0, i.jsx)(eZ.D5j, {})
                                })
                            }), u && (0, i.jsxs)("span", {
                                children: [(0, i.jsx)(eW, {
                                    children: u.name
                                }), (0, i.jsxs)(eP, {
                                    style: {
                                        height: "auto",
                                        width: "auto",
                                        margin: "0 4px"
                                    },
                                    children: [(0, i.jsx)(eZ.mLz, {
                                        style: {
                                            top: "-1px"
                                        }
                                    }), Object.keys(c).length, (0, i.jsx)("small", {
                                        children: Object.keys(c).length > 1 ? "users" : "user"
                                    })]
                                }), a > 0 && (0, i.jsxs)(eP, {
                                    style: {
                                        height: "auto",
                                        width: "auto",
                                        margin: "0 4px"
                                    },
                                    children: [(0, i.jsx)(eZ.xfq, {
                                        style: {
                                            top: "-1px"
                                        }
                                    }), a, (0, i.jsx)("small", {
                                        children: "tex"
                                    })]
                                }), (0, i.jsx)(tn, {
                                    el: e
                                }), "300 es" === h.glslVersion && (0, i.jsxs)(eP, {
                                    style: {
                                        height: "auto",
                                        width: "auto",
                                        margin: "0 4px"
                                    },
                                    children: [(0, i.jsx)(eZ.Abk, {
                                        style: {
                                            top: "-1px"
                                        }
                                    }), "300", (0, i.jsx)("small", {
                                        children: "es"
                                    }), (0, i.jsx)(eD, {
                                        style: {
                                            bottom: "-10px",
                                            width: "40px"
                                        },
                                        children: "glsl"
                                    })]
                                })]
                            }), (0, i.jsx)(eH, {
                                onPointerEnter: () => {
                                    Object.keys(c).forEach(e => {
                                        c[e].material.wireframe = !0
                                    })
                                },
                                onPointerLeave: () => {
                                    Object.keys(c).forEach(e => {
                                        c[e].material.wireframe = !1
                                    })
                                },
                                onClick: i => {
                                    i.stopPropagation(), Object.keys(c).forEach(i => {
                                        let n = c[i],
                                            o = !t;
                                        n.visible = o, e.visible = o, r(o)
                                    })
                                },
                                children: t ? (0, i.jsx)(eZ.N5q, {}) : (0, i.jsx)(eZ.luy, {})
                            })]
                        }), (0, i.jsxs)("div", {
                            style: {
                                maxHeight: o ? "9999px" : 0,
                                overflow: "hidden"
                            },
                            children: [(0, i.jsxs)(eq, {
                                children: [(0, i.jsx)(eZ.a2l, {}), " Uniforms:"]
                            }), (0, i.jsx)(ti, {
                                program: u,
                                material: h,
                                setTexNumber: l
                            }), (0, i.jsxs)(eq, {
                                children: [(0, i.jsx)(eZ.XRf, {}), " Geometries:"]
                            }), (0, i.jsx)(eV, {
                                children: c && Object.keys(c).map(e => c[e] && c[e].geometry && (0, i.jsxs)(eJ, {
                                    children: [(0, i.jsxs)("span", {
                                        children: [c[e].geometry.type, ": "]
                                    }), c[e].userData && c[e].userData.drawCount && (0, i.jsxs)("b", {
                                        children: [(0, i.jsxs)("div", {
                                            children: [c[e].userData.drawCount.count, (0, i.jsxs)("small", {
                                                children: [" ", c[e].userData.drawCount.type, "s"]
                                            })]
                                        }), (0, i.jsx)("br", {}), (0, i.jsxs)("div", {
                                            children: [Math.round(function(e) {
                                                let t = 0;
                                                for (let r in e.attributes) {
                                                    let i = e.getAttribute(r);
                                                    t += i.count * i.itemSize * i.array.BYTES_PER_ELEMENT
                                                }
                                                let r = e.getIndex();
                                                return t + (r ? r.count * r.itemSize * r.array.BYTES_PER_ELEMENT : 0)
                                            }(c[e].geometry) / 1024 * 1e3) / 1e3, "Kb", (0, i.jsx)("small", {
                                                children: " memory used"
                                            })]
                                        })]
                                    })]
                                }, e))
                            }), (0, i.jsxs)(e$, {
                                onClick: () => {
                                    console.info(h)
                                },
                                children: ["console.info(", h.type, ")"]
                            })]
                        })]
                    })
                },
                ts = () => {
                    g(e => e.triggerProgramsUpdate);
                    let e = g(e => e.programs);
                    return (0, i.jsx)(eY, {
                        children: e && Array.from(e.values()).map(e => e && e ? (0, i.jsx)(to, {
                            el: e
                        }, e.material.uuid) : null)
                    })
                },
                ta = e => ({
                    overClock: "#ff6eff",
                    fps: e ? "100, 143, 255" : "238,38,110",
                    cpu: e ? "254, 254, 98" : "66,226,46",
                    gpu: e ? "254,254,254" : "253,151,31",
                    custom: e ? "86,180,233" : "40,255,255"
                }),
                tl = ({
                    showGraph: e,
                    colorBlind: t
                }) => {
                    let r = g(e => e.overclockingFps),
                        n = g(e => e.fpsLimit);
                    return (0, i.jsxs)(eD, {
                        style: e ? {
                            color: r ? ta(t).overClock.toString() : `rgb(${ta(t).fps})`
                        } : {},
                        children: ["FPS ", r ? `${n}🚀` : ""]
                    })
                },
                tc = ({
                    showGraph: e,
                    colorBlind: t,
                    customData: r,
                    minimal: n
                }) => {
                    let o = g(e => e.gl);
                    return o ? (0, i.jsxs)(eN, {
                        children: [(0, i.jsxs)(eP, {
                            children: [(0, i.jsx)(eZ.xZp, {}), (0, i.jsx)(eD, {
                                style: e ? {
                                    color: `rgb(${ta(t).gpu.toString()})`
                                } : {},
                                children: "GPU"
                            }), (0, i.jsx)(eL, {
                                children: "ms"
                            })]
                        }), (0, i.jsxs)(eP, {
                            children: [(0, i.jsx)(eZ.QgH, {}), (0, i.jsx)(eD, {
                                style: e ? {
                                    color: `rgb(${ta(t).cpu.toString()})`
                                } : {},
                                children: "CPU"
                            }), (0, i.jsx)(eL, {
                                children: "ms"
                            })]
                        }), (0, i.jsxs)(eP, {
                            children: [(0, i.jsx)(eZ.s6k, {}), (0, i.jsx)(tl, {
                                showGraph: e,
                                colorBlind: t
                            })]
                        }), !n && o && (0, i.jsxs)(eP, {
                            children: [(0, i.jsx)(eZ.a2T, {}), (0, i.jsx)(eD, {
                                children: 1 === o.info.render.calls ? "call" : "calls"
                            })]
                        }), !n && o && (0, i.jsxs)(eP, {
                            children: [(0, i.jsx)(eZ.W8c, {}), (0, i.jsx)(eD, {
                                children: "Triangles"
                            })]
                        }), r && (0, i.jsxs)(eP, {
                            children: [(0, i.jsx)(eZ.R5L, {}), (0, i.jsx)(eD, {
                                style: e ? {
                                    color: `rgb(${ta(t).custom})`
                                } : {},
                                children: r.name
                            }), r.info && (0, i.jsx)(eL, {
                                children: r.info
                            })]
                        })]
                    }) : null
                },
                tu = ({
                    showGraph: e,
                    colorBlind: t,
                    deepAnalyze: r,
                    customData: n,
                    matrixUpdate: o,
                    openByDefault: s,
                    minimal: a
                }) => (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(tc, {
                        showGraph: e,
                        colorBlind: t,
                        customData: n,
                        minimal: a
                    }), !a && (0, i.jsx)(tp, {
                        matrixUpdate: o,
                        openByDefault: s,
                        deepAnalyze: r,
                        showGraph: e
                    })]
                }),
                th = ({
                    matrixUpdate: e
                }) => (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)(eP, {
                        children: [(0, i.jsx)(eZ.CRV, {}), (0, i.jsx)(eD, {
                            children: "Geometries"
                        })]
                    }), (0, i.jsxs)(eP, {
                        children: [(0, i.jsx)(eZ.xfq, {}), (0, i.jsx)(eD, {
                            children: "Textures"
                        })]
                    }), (0, i.jsxs)(eP, {
                        children: [(0, i.jsx)(eZ.JDx, {}), (0, i.jsx)(eD, {
                            children: "shaders"
                        })]
                    }), (0, i.jsxs)(eP, {
                        children: [(0, i.jsx)(eZ.QGg, {}), (0, i.jsx)(eD, {
                            children: "Lines"
                        })]
                    }), (0, i.jsxs)(eP, {
                        children: [(0, i.jsx)(eZ.Zy4, {}), (0, i.jsx)(eD, {
                            children: "Points"
                        })]
                    }), e && (0, i.jsxs)(eP, {
                        children: [(0, i.jsx)(eZ.mv7, {}), (0, i.jsx)(eD, {
                            children: "Matrices"
                        })]
                    })]
                }),
                td = ({
                    tab: e,
                    title: t,
                    set: r
                }) => {
                    let n = g(e => e.tab);
                    return (0, i.jsx)(eU, {
                        className: `${n===e?" __perf_toggle_tab_active":""}`,
                        onClick: () => {
                            r(!0), y({
                                tab: e
                            })
                        },
                        children: (0, i.jsx)("span", {
                            children: t
                        })
                    })
                },
                tp = ({
                    openByDefault: e,
                    showGraph: t,
                    deepAnalyze: r,
                    matrixUpdate: o
                }) => {
                    let [s, a] = n.useState(e);
                    return (0, i.jsxs)("span", {
                        children: [(0, i.jsx)(tf, {
                            show: s,
                            showGraph: t,
                            matrixUpdate: o
                        }), e && !r ? null : (0, i.jsxs)(eK, {
                            className: "__perf_toggle",
                            children: [r && (0, i.jsx)(td, {
                                tab: "programs",
                                title: "Programs",
                                set: a
                            }), r && (0, i.jsx)(td, {
                                tab: "infos",
                                title: "Infos",
                                set: a
                            }), (0, i.jsx)(eU, {
                                onClick: () => {
                                    a(!s)
                                },
                                children: s ? (0, i.jsxs)("span", {
                                    children: [(0, i.jsx)(eZ.kj1, {}), " Minimize"]
                                }) : (0, i.jsxs)("span", {
                                    children: [(0, i.jsx)(eZ.D5j, {}), " More"]
                                })
                            })]
                        })]
                    })
                },
                tf = ({
                    show: e,
                    showGraph: t,
                    matrixUpdate: r
                }) => {
                    let n = g(e => e.tab);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(th, {
                            matrixUpdate: r
                        }), e && (0, i.jsx)("div", {
                            children: (0, i.jsx)(eX, {
                                style: {
                                    marginTop: t ? "38px" : 0
                                },
                                children: "programs" === n && (0, i.jsx)(ts, {})
                            })
                        })]
                    })
                },
                tm = ({
                    showGraph: e = !0,
                    colorBlind: t = !1,
                    openByDefault: r = !0,
                    className: o,
                    overClock: s = !1,
                    style: a,
                    position: l = "top-right",
                    chart: c,
                    logsPerSecond: u,
                    deepAnalyze: h = !1,
                    antialias: d = !0,
                    customData: p,
                    matrixUpdate: f,
                    minimal: m
                }) => {
                    let g = (0, n.useRef)(null);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(L, {
                            logsPerSecond: u,
                            chart: c,
                            overClock: s,
                            deepAnalyze: h,
                            matrixUpdate: f
                        }), (0, i.jsx)(tt, {
                            name: "r3f-perf",
                            children: (0, i.jsxs)(eO, {
                                className: (o ? " ".concat(o) : " ") + ` ${l||""} ${m?"minimal":""}`,
                                style: {
                                    minHeight: m ? "37px" : e ? "100px" : "60px",
                                    ...a
                                },
                                ref: g,
                                children: [(0, i.jsx)(e9, {
                                    perfContainerRef: g,
                                    colorBlind: t,
                                    chart: c,
                                    showGraph: e,
                                    antialias: d,
                                    customData: p,
                                    minimal: m,
                                    matrixUpdate: f
                                }), (0, i.jsx)(tu, {
                                    colorBlind: t,
                                    showGraph: e,
                                    deepAnalyze: h,
                                    openByDefault: r,
                                    customData: p,
                                    matrixUpdate: f,
                                    minimal: m
                                })]
                            })
                        })]
                    })
                }
        },
        6115: (e, t, r) => {
            "use strict";
            var i = r(2115),
                n = r(9033),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = n.useSyncExternalStore,
                a = i.useRef,
                l = i.useEffect,
                c = i.useMemo,
                u = i.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, r, i, n) {
                var h = a(null);
                if (null === h.current) {
                    var d = {
                        hasValue: !1,
                        value: null
                    };
                    h.current = d
                } else d = h.current;
                var p = s(e, (h = c(function() {
                    function e(e) {
                        if (!l) {
                            if (l = !0, s = e, e = i(e), void 0 !== n && d.hasValue) {
                                var t = d.value;
                                if (n(t, e)) return a = t
                            }
                            return a = e
                        }
                        if (t = a, o(s, e)) return t;
                        var r = i(e);
                        return void 0 !== n && n(t, r) ? (s = e, t) : (s = e, a = r)
                    }
                    var s, a, l = !1,
                        c = void 0 === r ? null : r;
                    return [function() {
                        return e(t())
                    }, null === c ? void 0 : function() {
                        return e(c())
                    }]
                }, [t, r, i, n]))[0], h[1]);
                return l(function() {
                    d.hasValue = !0, d.value = p
                }, [p]), u(p), p
            }
        },
        6354: (e, t, r) => {
            "use strict";
            r.d(t, {
                Af: () => a,
                Nz: () => n,
                u5: () => l,
                y3: () => h
            });
            var i = r(2115);

            function n(e, t, r) {
                if (!e) return;
                if (!0 === r(e)) return e;
                let i = t ? e.return : e.child;
                for (; i;) {
                    let e = n(i, t, r);
                    if (e) return e;
                    i = t ? null : i.sibling
                }
            }

            function o(e) {
                try {
                    return Object.defineProperties(e, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (t) {
                    return e
                }
            }(() => {
                var e, t;
                return "undefined" != typeof window && ((null == (e = window.document) ? void 0 : e.createElement) || (null == (t = window.navigator) ? void 0 : t.product) === "ReactNative")
            })() ? i.useLayoutEffect: i.useEffect;
            let s = o(i.createContext(null));
            class a extends i.Component {
                render() {
                    return i.createElement(s.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }

            function l() {
                let e = i.useContext(s);
                if (null === e) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                let t = i.useId();
                return i.useMemo(() => {
                    for (let r of [e, null == e ? void 0 : e.alternate]) {
                        if (!r) continue;
                        let e = n(r, !1, e => {
                            let r = e.memoizedState;
                            for (; r;) {
                                if (r.memoizedState === t) return !0;
                                r = r.next
                            }
                        });
                        if (e) return e
                    }
                }, [e, t])
            }
            let c = Symbol.for("react.context"),
                u = e => null !== e && "object" == typeof e && "$$typeof" in e && e.$$typeof === c;

            function h() {
                let e = function() {
                    let e = l(),
                        [t] = i.useState(() => new Map);
                    t.clear();
                    let r = e;
                    for (; r;) {
                        let e = r.type;
                        u(e) && e !== s && !t.has(e) && t.set(e, i.use(o(e))), r = r.return
                    }
                    return t
                }();
                return i.useMemo(() => Array.from(e.keys()).reduce((t, r) => n => i.createElement(t, null, i.createElement(r.Provider, { ...n,
                    value: e.get(r)
                })), e => i.createElement(a, { ...e
                })), [e])
            }
        },
        6500: (e, t) => {
            "use strict";
            t.ConcurrentRoot = 1, t.ContinuousEventPriority = 8, t.DefaultEventPriority = 32, t.DiscreteEventPriority = 2
        },
        6576: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => a
            });
            var i = r(2115),
                n = r(3266),
                o = r(554);

            function s(e) {
                var t, r;
                let o = null == (t = null == e ? void 0 : e.attrs) ? void 0 : t.body;
                return i.createElement(n.A, {
                    blok: Array.isArray(o) ? o[0] : void 0,
                    key: null == (r = e.attrs) ? void 0 : r.id
                })
            }

            function a(e) {
                let t = {
                    renderFn: i.createElement,
                    textFn: e => i.createElement(i.Fragment, {
                        key: Math.random().toString(36).substring(2, 15)
                    }, e),
                    resolvers: {
                        [o.Fh.COMPONENT]: s,
                        ...e.resolvers
                    },
                    keyedResolvers: !0
                };
                return (0, o.AM)(t)
            }
        },
        6634: (e, t, r) => {
            "use strict";

            function i() {
                return function(e) {
                    function t(e, t) {
                        for (var r, i, n, o, s, a = /([MLQCZ])([^MLQCZ]*)/g; r = a.exec(e);) {
                            var l = r[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(e) {
                                return parseFloat(e)
                            });
                            switch (r[1]) {
                                case "M":
                                    o = i = l[0], s = n = l[1];
                                    break;
                                case "L":
                                    (l[0] !== o || l[1] !== s) && t("L", o, s, o = l[0], s = l[1]);
                                    break;
                                case "Q":
                                    t("Q", o, s, o = l[2], s = l[3], l[0], l[1]);
                                    break;
                                case "C":
                                    t("C", o, s, o = l[4], s = l[5], l[0], l[1], l[2], l[3]);
                                    break;
                                case "Z":
                                    (o !== i || s !== n) && t("L", o, s, i, n)
                            }
                        }
                    }

                    function r(e, r, i) {
                        void 0 === i && (i = 16);
                        var n = {
                            x: 0,
                            y: 0
                        };
                        t(e, function(e, t, o, s, a, l, c, u, h) {
                            switch (e) {
                                case "L":
                                    r(t, o, s, a);
                                    break;
                                case "Q":
                                    for (var d = t, p = o, f = 1; f < i; f++) ! function(e, t, r, i, n, o, s, a) {
                                        var l = 1 - s;
                                        a.x = l * l * e + 2 * l * s * r + s * s * n, a.y = l * l * t + 2 * l * s * i + s * s * o
                                    }(t, o, l, c, s, a, f / (i - 1), n), r(d, p, n.x, n.y), d = n.x, p = n.y;
                                    break;
                                case "C":
                                    for (var m = t, g = o, v = 1; v < i; v++) ! function(e, t, r, i, n, o, s, a, l, c) {
                                        var u = 1 - l;
                                        c.x = u * u * u * e + 3 * u * u * l * r + 3 * u * l * l * n + l * l * l * s, c.y = u * u * u * t + 3 * u * u * l * i + 3 * u * l * l * o + l * l * l * a
                                    }(t, o, l, c, u, h, s, a, v / (i - 1), n), r(m, g, n.x, n.y), m = n.x, g = n.y
                            }
                        })
                    }
                    var i = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",
                        n = new WeakMap,
                        o = {
                            premultipliedAlpha: !1,
                            preserveDrawingBuffer: !0,
                            antialias: !1,
                            depth: !1
                        };

                    function s(e, t) {
                        var r = e.getContext ? e.getContext("webgl", o) : e,
                            i = n.get(r);
                        if (!i) {
                            var s = "undefined" != typeof WebGL2RenderingContext && r instanceof WebGL2RenderingContext,
                                a = {},
                                l = {},
                                c = {},
                                u = -1,
                                h = [];

                            function d(e) {
                                var t = a[e];
                                if (!t && !(t = a[e] = r.getExtension(e))) throw Error(e + " not supported");
                                return t
                            }

                            function p(e, t) {
                                var i = r.createShader(t);
                                return r.shaderSource(i, e), r.compileShader(i), i
                            }

                            function f() {
                                a = {}, l = {}, c = {}, u = -1, h.length = 0
                            }
                            r.canvas.addEventListener("webglcontextlost", function(e) {
                                f(), e.preventDefault()
                            }, !1), n.set(r, i = {
                                gl: r,
                                isWebGL2: s,
                                getExtension: d,
                                withProgram: function(e, t, i, n) {
                                    if (!l[e]) {
                                        var o = {},
                                            a = {},
                                            c = r.createProgram();
                                        r.attachShader(c, p(t, r.VERTEX_SHADER)), r.attachShader(c, p(i, r.FRAGMENT_SHADER)), r.linkProgram(c), l[e] = {
                                            program: c,
                                            transaction: function(e) {
                                                r.useProgram(c), e({
                                                    setUniform: function(e, t) {
                                                        for (var i = [], n = arguments.length - 2; n-- > 0;) i[n] = arguments[n + 2];
                                                        var o = a[t] || (a[t] = r.getUniformLocation(c, t));
                                                        r["uniform" + e].apply(r, [o].concat(i))
                                                    },
                                                    setAttribute: function(e, t, i, n, a) {
                                                        var l = o[e];
                                                        l || (l = o[e] = {
                                                            buf: r.createBuffer(),
                                                            loc: r.getAttribLocation(c, e),
                                                            data: null
                                                        }), r.bindBuffer(r.ARRAY_BUFFER, l.buf), r.vertexAttribPointer(l.loc, t, r.FLOAT, !1, 0, 0), r.enableVertexAttribArray(l.loc), s ? r.vertexAttribDivisor(l.loc, n) : d("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(l.loc, n), a !== l.data && (r.bufferData(r.ARRAY_BUFFER, a, i), l.data = a)
                                                    }
                                                })
                                            }
                                        }
                                    }
                                    l[e].transaction(n)
                                },
                                withTexture: function(e, t) {
                                    u++;
                                    try {
                                        r.activeTexture(r.TEXTURE0 + u);
                                        var i = c[e];
                                        i || (i = c[e] = r.createTexture(), r.bindTexture(r.TEXTURE_2D, i), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST)), r.bindTexture(r.TEXTURE_2D, i), t(i, u)
                                    } finally {
                                        u--
                                    }
                                },
                                withTextureFramebuffer: function(e, t, i) {
                                    var n = r.createFramebuffer();
                                    h.push(n), r.bindFramebuffer(r.FRAMEBUFFER, n), r.activeTexture(r.TEXTURE0 + t), r.bindTexture(r.TEXTURE_2D, e), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e, 0);
                                    try {
                                        i(n)
                                    } finally {
                                        r.deleteFramebuffer(n), r.bindFramebuffer(r.FRAMEBUFFER, h[--h.length - 1] || null)
                                    }
                                },
                                handleContextLoss: f
                            })
                        }
                        t(i)
                    }

                    function a(e, t, r, n, o, a, l, c) {
                        void 0 === l && (l = 15), void 0 === c && (c = null), s(e, function(e) {
                            var s = e.gl,
                                u = e.withProgram;
                            (0, e.withTexture)("copy", function(e, h) {
                                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, o, a, 0, s.RGBA, s.UNSIGNED_BYTE, t), u("copy", i, "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", function(e) {
                                    var t = e.setUniform;
                                    (0, e.setAttribute)("aUV", 2, s.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), t("1i", "image", h), s.bindFramebuffer(s.FRAMEBUFFER, c || null), s.disable(s.BLEND), s.colorMask(8 & l, 4 & l, 2 & l, 1 & l), s.viewport(r, n, o, a), s.scissor(r, n, o, a), s.drawArrays(s.TRIANGLES, 0, 3)
                                })
                            })
                        })
                    }
                    var l = Object.freeze({
                        __proto__: null,
                        withWebGLContext: s,
                        renderImageData: a,
                        resizeWebGLCanvasWithoutClearing: function(e, t, r) {
                            var i = e.width,
                                n = e.height;
                            s(e, function(o) {
                                var s = o.gl,
                                    l = new Uint8Array(i * n * 4);
                                s.readPixels(0, 0, i, n, s.RGBA, s.UNSIGNED_BYTE, l), e.width = t, e.height = r, a(s, l, 0, 0, i, n)
                            })
                        }
                    });

                    function c(e, t, i, n, o, s) {
                        void 0 === s && (s = 1);
                        var a = new Uint8Array(e * t),
                            l = n[2] - n[0],
                            c = n[3] - n[1],
                            u = [];
                        r(i, function(e, t, r, i) {
                            u.push({
                                x1: e,
                                y1: t,
                                x2: r,
                                y2: i,
                                minX: Math.min(e, r),
                                minY: Math.min(t, i),
                                maxX: Math.max(e, r),
                                maxY: Math.max(t, i)
                            })
                        }), u.sort(function(e, t) {
                            return e.maxX - t.maxX
                        });
                        for (var h = 0; h < e; h++)
                            for (var d = 0; d < t; d++) {
                                var p = function(e, t) {
                                        for (var r = 1 / 0, i = 1 / 0, n = u.length; n--;) {
                                            var o = u[n];
                                            if (o.maxX + i <= e) break;
                                            if (e + i > o.minX && t - i < o.maxY && t + i > o.minY) {
                                                var s = function(e, t, r, i, n, o) {
                                                    var s = n - r,
                                                        a = o - i,
                                                        l = s * s + a * a,
                                                        c = l ? Math.max(0, Math.min(1, ((e - r) * s + (t - i) * a) / l)) : 0,
                                                        u = e - (r + c * s),
                                                        h = t - (i + c * a);
                                                    return u * u + h * h
                                                }(e, t, o.x1, o.y1, o.x2, o.y2);
                                                s < r && (i = Math.sqrt(r = s))
                                            }
                                        }
                                        return function(e, t) {
                                            for (var r = 0, i = u.length; i--;) {
                                                var n = u[i];
                                                if (n.maxX <= e) break;
                                                n.y1 > t != n.y2 > t && e < (n.x2 - n.x1) * (t - n.y1) / (n.y2 - n.y1) + n.x1 && (r += n.y1 < n.y2 ? 1 : -1)
                                            }
                                            return 0 !== r
                                        }(e, t) && (i = -i), i
                                    }(n[0] + l * (h + .5) / e, n[1] + c * (d + .5) / t),
                                    f = Math.pow(1 - Math.abs(p) / o, s) / 2;
                                p < 0 && (f = 1 - f), f = Math.max(0, Math.min(255, Math.round(255 * f))), a[d * e + h] = f
                            }
                        return a
                    }

                    function u(e, t, r, i, n, o, s, a, l, c) {
                        void 0 === o && (o = 1), void 0 === a && (a = 0), void 0 === l && (l = 0), void 0 === c && (c = 0), h(e, t, r, i, n, o, s, null, a, l, c)
                    }

                    function h(e, t, r, i, n, o, s, l, u, h, d) {
                        void 0 === o && (o = 1), void 0 === u && (u = 0), void 0 === h && (h = 0), void 0 === d && (d = 0);
                        for (var p = c(e, t, r, i, n, o), f = new Uint8Array(4 * p.length), m = 0; m < p.length; m++) f[4 * m + d] = p[m];
                        a(s, f, u, h, e, t, 1 << 3 - d, l)
                    }
                    var d = Object.freeze({
                            __proto__: null,
                            generate: c,
                            generateIntoCanvas: u,
                            generateIntoFramebuffer: h
                        }),
                        p = new Float32Array([0, 0, 2, 0, 0, 2]),
                        f = null,
                        m = !1,
                        g = {},
                        v = new WeakMap;

                    function y(e) {
                        if (!m && !A(e)) throw Error("WebGL generation not supported")
                    }

                    function b(e, t, r, i, n, o, a) {
                        if (void 0 === o && (o = 1), void 0 === a && (a = null), !a && !(a = f)) {
                            var l = "function" == typeof OffscreenCanvas ? new OffscreenCanvas(1, 1) : "undefined" != typeof document ? document.createElement("canvas") : null;
                            if (!l) throw Error("OffscreenCanvas or DOM canvas not supported");
                            a = f = l.getContext("webgl", {
                                depth: !1
                            })
                        }
                        y(a);
                        var c = new Uint8Array(e * t * 4);
                        s(a, function(s) {
                            var a = s.gl,
                                l = s.withTexture,
                                u = s.withTextureFramebuffer;
                            l("readable", function(s, l) {
                                a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, e, t, 0, a.RGBA, a.UNSIGNED_BYTE, null), u(s, l, function(s) {
                                    w(e, t, r, i, n, o, a, s, 0, 0, 0), a.readPixels(0, 0, e, t, a.RGBA, a.UNSIGNED_BYTE, c)
                                })
                            })
                        });
                        for (var u = new Uint8Array(e * t), h = 0, d = 0; h < c.length; h += 4) u[d++] = c[h];
                        return u
                    }

                    function x(e, t, r, i, n, o, s, a, l, c) {
                        void 0 === o && (o = 1), void 0 === a && (a = 0), void 0 === l && (l = 0), void 0 === c && (c = 0), w(e, t, r, i, n, o, s, null, a, l, c)
                    }

                    function w(e, t, n, o, a, l, c, u, h, d, f) {
                        void 0 === l && (l = 1), void 0 === h && (h = 0), void 0 === d && (d = 0), void 0 === f && (f = 0), y(c);
                        var m = [];
                        r(n, function(e, t, r, i) {
                            m.push(e, t, r, i)
                        }), m = new Float32Array(m), s(c, function(r) {
                            var n = r.gl,
                                s = r.isWebGL2,
                                c = r.getExtension,
                                g = r.withProgram,
                                v = r.withTexture,
                                y = r.withTextureFramebuffer,
                                b = r.handleContextLoss;
                            if (v("rawDistances", function(r, v) {
                                    (e !== r._lastWidth || t !== r._lastHeight) && n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, r._lastWidth = e, r._lastHeight = t, 0, n.RGBA, n.UNSIGNED_BYTE, null), g("main", "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", function(i) {
                                        var u = i.setAttribute,
                                            h = i.setUniform,
                                            d = !s && c("ANGLE_instanced_arrays"),
                                            f = !s && c("EXT_blend_minmax");
                                        u("aUV", 2, n.STATIC_DRAW, 0, p), u("aLineSegment", 4, n.DYNAMIC_DRAW, 1, m), h.apply(void 0, ["4f", "uGlyphBounds"].concat(o)), h("1f", "uMaxDistance", a), h("1f", "uExponent", l), y(r, v, function(r) {
                                            n.enable(n.BLEND), n.colorMask(!0, !0, !0, !0), n.viewport(0, 0, e, t), n.scissor(0, 0, e, t), n.blendFunc(n.ONE, n.ONE), n.blendEquationSeparate(n.FUNC_ADD, s ? n.MAX : f.MAX_EXT), n.clear(n.COLOR_BUFFER_BIT), s ? n.drawArraysInstanced(n.TRIANGLES, 0, 3, m.length / 4) : d.drawArraysInstancedANGLE(n.TRIANGLES, 0, 3, m.length / 4)
                                        })
                                    }), g("post", i, "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", function(r) {
                                        r.setAttribute("aUV", 2, n.STATIC_DRAW, 0, p), r.setUniform("1i", "tex", v), n.bindFramebuffer(n.FRAMEBUFFER, u), n.disable(n.BLEND), n.colorMask(0 === f, 1 === f, 2 === f, 3 === f), n.viewport(h, d, e, t), n.scissor(h, d, e, t), n.drawArrays(n.TRIANGLES, 0, 3)
                                    })
                                }), n.isContextLost()) throw b(), Error("webgl context lost")
                        })
                    }

                    function A(e) {
                        var t = e && e !== f ? e.canvas || e : g,
                            r = v.get(t);
                        if (void 0 === r) {
                            m = !0;
                            var i = null;
                            try {
                                var n = [97, 106, 97, 61, 99, 137, 118, 80, 80, 118, 137, 99, 61, 97, 106, 97],
                                    o = b(4, 4, "M8,8L16,8L24,24L16,24Z", [0, 0, 32, 32], 24, 1, e);
                                (r = o && n.length === o.length && o.every(function(e, t) {
                                    return e === n[t]
                                })) || (i = "bad trial run results", console.info(n, o))
                            } catch (e) {
                                r = !1, i = e.message
                            }
                            i && console.warn("WebGL SDF generation not supported:", i), m = !1, v.set(t, r)
                        }
                        return r
                    }
                    var E = Object.freeze({
                        __proto__: null,
                        generate: b,
                        generateIntoCanvas: x,
                        generateIntoFramebuffer: w,
                        isSupported: A
                    });
                    return e.forEachPathCommand = t, e.generate = function(e, t, r, i, n, o) {
                        void 0 === n && (n = Math.max(i[2] - i[0], i[3] - i[1]) / 2), void 0 === o && (o = 1);
                        try {
                            return b.apply(E, arguments)
                        } catch (e) {
                            return console.info("WebGL SDF generation failed, falling back to JS", e), c.apply(d, arguments)
                        }
                    }, e.generateIntoCanvas = function(e, t, r, i, n, o, s, a, l, c) {
                        void 0 === n && (n = Math.max(i[2] - i[0], i[3] - i[1]) / 2), void 0 === o && (o = 1), void 0 === a && (a = 0), void 0 === l && (l = 0), void 0 === c && (c = 0);
                        try {
                            return x.apply(E, arguments)
                        } catch (e) {
                            return console.info("WebGL SDF generation failed, falling back to JS", e), u.apply(d, arguments)
                        }
                    }, e.javascript = d, e.pathToLineSegments = r, e.webgl = E, e.webglUtils = l, Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e
                }({})
            }
            r.d(t, {
                A: () => i
            })
        },
        6654: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let i = r(2115);

            function n(e, t) {
                let r = (0, i.useRef)(null),
                    n = (0, i.useRef)(null);
                return (0, i.useCallback)(i => {
                    if (null === i) {
                        let e = r.current;
                        e && (r.current = null, e());
                        let t = n.current;
                        t && (n.current = null, t())
                    } else e && (r.current = o(e, i)), t && (n.current = o(t, i))
                }, [e, t])
            }

            function o(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let r = e(t);
                    return "function" == typeof r ? r : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6752: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let i = r(8229)._(r(2115)),
                n = r(5840),
                o = i.default.createContext(n.imageConfigDefault)
        },
        6766: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => n.a
            });
            var i = r(1469),
                n = r.n(i)
        },
        6874: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let i = r(8229),
                n = r(5155),
                o = i._(r(2115)),
                s = r(2757),
                a = r(5227),
                l = r(9818),
                c = r(6654),
                u = r(9991),
                h = r(5929);
            r(3230);
            let d = r(4930);

            function p(e) {
                return "string" == typeof e ? e : (0, s.formatUrl)(e)
            }
            let f = o.default.forwardRef(function(e, t) {
                let r, i;
                let {
                    href: s,
                    as: f,
                    children: m,
                    prefetch: g = null,
                    passHref: v,
                    replace: y,
                    shallow: b,
                    scroll: x,
                    onClick: w,
                    onMouseEnter: A,
                    onTouchStart: E,
                    legacyBehavior: S = !1,
                    ...T
                } = e;
                r = m, S && ("string" == typeof r || "number" == typeof r) && (r = (0, n.jsx)("a", {
                    children: r
                }));
                let _ = o.default.useContext(a.AppRouterContext),
                    k = !1 !== g,
                    C = null === g ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    {
                        href: R,
                        as: M
                    } = o.default.useMemo(() => {
                        let e = p(s);
                        return {
                            href: e,
                            as: f ? p(f) : e
                        }
                    }, [s, f]);
                S && (i = o.default.Children.only(r));
                let j = S ? i && "object" == typeof i && i.ref : t,
                    I = o.default.useCallback(e => (k && null !== _ && (0, d.mountLinkInstance)(e, R, _, C), () => {
                        (0, d.unmountLinkInstance)(e)
                    }), [k, R, _, C]),
                    O = {
                        ref: (0, c.useMergedRef)(I, j),
                        onClick(e) {
                            S || "function" != typeof w || w(e), S && i.props && "function" == typeof i.props.onClick && i.props.onClick(e), _ && !e.defaultPrevented && ! function(e, t, r, i, n, s, a) {
                                let {
                                    nodeName: l
                                } = e.currentTarget;
                                !("A" === l.toUpperCase() && function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e)) && (e.preventDefault(), o.default.startTransition(() => {
                                    let e = null == a || a;
                                    "beforePopState" in t ? t[n ? "replace" : "push"](r, i, {
                                        shallow: s,
                                        scroll: e
                                    }) : t[n ? "replace" : "push"](i || r, {
                                        scroll: e
                                    })
                                }))
                            }(e, _, R, M, y, b, x)
                        },
                        onMouseEnter(e) {
                            S || "function" != typeof A || A(e), S && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), _ && k && (0, d.onNavigationIntent)(e.currentTarget)
                        },
                        onTouchStart: function(e) {
                            S || "function" != typeof E || E(e), S && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), _ && k && (0, d.onNavigationIntent)(e.currentTarget)
                        }
                    };
                return (0, u.isAbsoluteUrl)(M) ? O.href = M : S && !v && ("a" !== i.type || "href" in i.props) || (O.href = (0, h.addBasePath)(M)), S ? o.default.cloneElement(i, O) : (0, n.jsx)("a", { ...T,
                    ...O,
                    children: r
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6892: (e, t) => {
            "use strict";

            function r(e, t) {
                var r = e.length;
                for (e.push(t); 0 < r;) {
                    var i = r - 1 >>> 1,
                        n = e[i];
                    if (0 < o(n, t)) e[i] = t, e[r] = n, r = i;
                    else break
                }
            }

            function i(e) {
                return 0 === e.length ? null : e[0]
            }

            function n(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    r = e.pop();
                if (r !== t) {
                    e[0] = r;
                    for (var i = 0, n = e.length, s = n >>> 1; i < s;) {
                        var a = 2 * (i + 1) - 1,
                            l = e[a],
                            c = a + 1,
                            u = e[c];
                        if (0 > o(l, r)) c < n && 0 > o(u, l) ? (e[i] = u, e[c] = r, i = c) : (e[i] = l, e[a] = r, i = a);
                        else if (c < n && 0 > o(u, r)) e[i] = u, e[c] = r, i = c;
                        else break
                    }
                }
                return t
            }

            function o(e, t) {
                var r = e.sortIndex - t.sortIndex;
                return 0 !== r ? r : e.id - t.id
            }
            if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
                var s, a = performance;
                t.unstable_now = function() {
                    return a.now()
                }
            } else {
                var l = Date,
                    c = l.now();
                t.unstable_now = function() {
                    return l.now() - c
                }
            }
            var u = [],
                h = [],
                d = 1,
                p = null,
                f = 3,
                m = !1,
                g = !1,
                v = !1,
                y = "function" == typeof setTimeout ? setTimeout : null,
                b = "function" == typeof clearTimeout ? clearTimeout : null,
                x = "undefined" != typeof setImmediate ? setImmediate : null;

            function w(e) {
                for (var t = i(h); null !== t;) {
                    if (null === t.callback) n(h);
                    else if (t.startTime <= e) n(h), t.sortIndex = t.expirationTime, r(u, t);
                    else break;
                    t = i(h)
                }
            }

            function A(e) {
                if (v = !1, w(e), !g) {
                    if (null !== i(u)) g = !0, j();
                    else {
                        var t = i(h);
                        null !== t && I(A, t.startTime - e)
                    }
                }
            }
            var E = !1,
                S = -1,
                T = 5,
                _ = -1;

            function k() {
                return !(t.unstable_now() - _ < T)
            }

            function C() {
                if (E) {
                    var e = t.unstable_now();
                    _ = e;
                    var r = !0;
                    try {
                        t: {
                            g = !1,
                            v && (v = !1, b(S), S = -1),
                            m = !0;
                            var o = f;
                            try {
                                r: {
                                    for (w(e), p = i(u); null !== p && !(p.expirationTime > e && k());) {
                                        var a = p.callback;
                                        if ("function" == typeof a) {
                                            p.callback = null, f = p.priorityLevel;
                                            var l = a(p.expirationTime <= e);
                                            if (e = t.unstable_now(), "function" == typeof l) {
                                                p.callback = l, w(e), r = !0;
                                                break r
                                            }
                                            p === i(u) && n(u), w(e)
                                        } else n(u);
                                        p = i(u)
                                    }
                                    if (null !== p) r = !0;
                                    else {
                                        var c = i(h);
                                        null !== c && I(A, c.startTime - e), r = !1
                                    }
                                }
                                break t
                            }
                            finally {
                                p = null, f = o, m = !1
                            }
                            r = void 0
                        }
                    }
                    finally {
                        r ? s() : E = !1
                    }
                }
            }
            if ("function" == typeof x) s = function() {
                x(C)
            };
            else if ("undefined" != typeof MessageChannel) {
                var R = new MessageChannel,
                    M = R.port2;
                R.port1.onmessage = C, s = function() {
                    M.postMessage(null)
                }
            } else s = function() {
                y(C, 0)
            };

            function j() {
                E || (E = !0, s())
            }

            function I(e, r) {
                S = y(function() {
                    e(t.unstable_now())
                }, r)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                g || m || (g = !0, j())
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return f
            }, t.unstable_getFirstCallbackNode = function() {
                return i(u)
            }, t.unstable_next = function(e) {
                switch (f) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = f
                }
                var r = f;
                f = t;
                try {
                    return e()
                } finally {
                    f = r
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var r = f;
                f = e;
                try {
                    return t()
                } finally {
                    f = r
                }
            }, t.unstable_scheduleCallback = function(e, n, o) {
                var s = t.unstable_now();
                switch (o = "object" == typeof o && null !== o && "number" == typeof(o = o.delay) && 0 < o ? s + o : s, e) {
                    case 1:
                        var a = -1;
                        break;
                    case 2:
                        a = 250;
                        break;
                    case 5:
                        a = 0x3fffffff;
                        break;
                    case 4:
                        a = 1e4;
                        break;
                    default:
                        a = 5e3
                }
                return a = o + a, e = {
                    id: d++,
                    callback: n,
                    priorityLevel: e,
                    startTime: o,
                    expirationTime: a,
                    sortIndex: -1
                }, o > s ? (e.sortIndex = o, r(h, e), null === i(u) && e === i(h) && (v ? (b(S), S = -1) : v = !0, I(A, o - s))) : (e.sortIndex = a, r(u, e), g || m || (g = !0, j())), e
            }, t.unstable_shouldYield = k, t.unstable_wrapCallback = function(e) {
                var t = f;
                return function() {
                    var r = f;
                    f = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        f = r
                    }
                }
            }
        },
        7544: (e, t) => {
            "use strict";

            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: i = !1
                } = void 0 === e ? {} : e;
                return t || r && i
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        7558: (e, t, r) => {
            "use strict";
            r.d(t, {
                Hl: () => d
            });
            var i = r(6059),
                n = r(2115),
                o = r(7431);

            function s(e, t) {
                let r;
                return (...i) => {
                    window.clearTimeout(r), r = window.setTimeout(() => e(...i), t)
                }
            }
            let a = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                l = (e, t) => a.every(r => e[r] === t[r]);
            var c = r(6354),
                u = r(5155);

            function h({
                ref: e,
                children: t,
                fallback: r,
                resize: a,
                style: c,
                gl: h,
                events: d = i.f,
                eventSource: p,
                eventPrefix: f,
                shadows: m,
                linear: g,
                flat: v,
                legacy: y,
                orthographic: b,
                frameloop: x,
                dpr: w,
                performance: A,
                raycaster: E,
                camera: S,
                scene: T,
                onPointerMissed: _,
                onCreated: k,
                ...C
            }) {
                n.useMemo(() => (0, i.e)(o), []);
                let R = (0, i.u)(),
                    [M, j] = function({
                        debounce: e,
                        scroll: t,
                        polyfill: r,
                        offsetSize: i
                    } = {
                        debounce: 0,
                        scroll: !1,
                        offsetSize: !1
                    }) {
                        var o, a, c;
                        let u = r || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                        if (!u) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                        let [h, d] = (0, n.useState)({
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0,
                            bottom: 0,
                            right: 0,
                            x: 0,
                            y: 0
                        }), p = (0, n.useRef)({
                            element: null,
                            scrollContainers: null,
                            resizeObserver: null,
                            lastBounds: h,
                            orientationHandler: null
                        }), f = e ? "number" == typeof e ? e : e.scroll : null, m = e ? "number" == typeof e ? e : e.resize : null, g = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => (g.current = !0, () => void(g.current = !1)));
                        let [v, y, b] = (0, n.useMemo)(() => {
                            let e = () => {
                                if (!p.current.element) return;
                                let {
                                    left: e,
                                    top: t,
                                    width: r,
                                    height: n,
                                    bottom: o,
                                    right: s,
                                    x: a,
                                    y: c
                                } = p.current.element.getBoundingClientRect(), u = {
                                    left: e,
                                    top: t,
                                    width: r,
                                    height: n,
                                    bottom: o,
                                    right: s,
                                    x: a,
                                    y: c
                                };
                                p.current.element instanceof HTMLElement && i && (u.height = p.current.element.offsetHeight, u.width = p.current.element.offsetWidth), Object.freeze(u), g.current && !l(p.current.lastBounds, u) && d(p.current.lastBounds = u)
                            };
                            return [e, m ? s(e, m) : e, f ? s(e, f) : e]
                        }, [d, i, f, m]);

                        function x() {
                            p.current.scrollContainers && (p.current.scrollContainers.forEach(e => e.removeEventListener("scroll", b, !0)), p.current.scrollContainers = null), p.current.resizeObserver && (p.current.resizeObserver.disconnect(), p.current.resizeObserver = null), p.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", p.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", p.current.orientationHandler))
                        }

                        function w() {
                            p.current.element && (p.current.resizeObserver = new u(b), p.current.resizeObserver.observe(p.current.element), t && p.current.scrollContainers && p.current.scrollContainers.forEach(e => e.addEventListener("scroll", b, {
                                capture: !0,
                                passive: !0
                            })), p.current.orientationHandler = () => {
                                b()
                            }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", p.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", p.current.orientationHandler))
                        }
                        return o = b, a = !!t, (0, n.useEffect)(() => {
                            if (a) return window.addEventListener("scroll", o, {
                                capture: !0,
                                passive: !0
                            }), () => void window.removeEventListener("scroll", o, !0)
                        }, [o, a]), c = y, (0, n.useEffect)(() => (window.addEventListener("resize", c), () => void window.removeEventListener("resize", c)), [c]), (0, n.useEffect)(() => {
                            x(), w()
                        }, [t, b, y]), (0, n.useEffect)(() => x, []), [e => {
                            e && e !== p.current.element && (x(), p.current.element = e, p.current.scrollContainers = function e(t) {
                                let r = [];
                                if (!t || t === document.body) return r;
                                let {
                                    overflow: i,
                                    overflowX: n,
                                    overflowY: o
                                } = window.getComputedStyle(t);
                                return [i, n, o].some(e => "auto" === e || "scroll" === e) && r.push(t), [...r, ...e(t.parentElement)]
                            }(e), w())
                        }, h, v]
                    }({
                        scroll: !0,
                        debounce: {
                            scroll: 50,
                            resize: 0
                        },
                        ...a
                    }),
                    I = n.useRef(null),
                    O = n.useRef(null);
                n.useImperativeHandle(e, () => I.current);
                let L = (0, i.a)(_),
                    [P, D] = n.useState(!1),
                    [N, B] = n.useState(!1);
                if (P) throw P;
                if (N) throw N;
                let F = n.useRef(null);
                (0, i.b)(() => {
                    let e = I.current;
                    j.width > 0 && j.height > 0 && e && (F.current || (F.current = (0, i.c)(e)), async function() {
                        await F.current.configure({
                            gl: h,
                            scene: T,
                            events: d,
                            shadows: m,
                            linear: g,
                            flat: v,
                            legacy: y,
                            orthographic: b,
                            frameloop: x,
                            dpr: w,
                            performance: A,
                            raycaster: E,
                            camera: S,
                            size: j,
                            onPointerMissed: (...e) => null == L.current ? void 0 : L.current(...e),
                            onCreated: e => {
                                null == e.events.connect || e.events.connect(p ? (0, i.i)(p) ? p.current : p : O.current), f && e.setEvents({
                                    compute: (e, t) => {
                                        let r = e[f + "X"],
                                            i = e[f + "Y"];
                                        t.pointer.set(r / t.size.width * 2 - 1, -(2 * (i / t.size.height)) + 1), t.raycaster.setFromCamera(t.pointer, t.camera)
                                    }
                                }), null == k || k(e)
                            }
                        }), F.current.render((0, u.jsx)(R, {
                            children: (0, u.jsx)(i.E, {
                                set: B,
                                children: (0, u.jsx)(n.Suspense, {
                                    fallback: (0, u.jsx)(i.B, {
                                        set: D
                                    }),
                                    children: null != t ? t : null
                                })
                            })
                        }))
                    }())
                }), n.useEffect(() => {
                    let e = I.current;
                    if (e) return () => (0, i.d)(e)
                }, []);
                let z = p ? "none" : "auto";
                return (0, u.jsx)("div", {
                    ref: O,
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: z,
                        ...c
                    },
                    ...C,
                    children: (0, u.jsx)("div", {
                        ref: M,
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        children: (0, u.jsx)("canvas", {
                            ref: I,
                            style: {
                                display: "block"
                            },
                            children: r
                        })
                    })
                })
            }

            function d(e) {
                return (0, u.jsx)(c.Af, {
                    children: (0, u.jsx)(h, { ...e
                    })
                })
            }
            r(1933), r(5220), r(2407)
        },
        8637: (e, t, r) => {
            e.exports = r(9399)()
        },
        8669: function(e) {
            e.exports = function() {
                "use strict";
                var e = document,
                    t = e.createTextNode.bind(e);

                function r(e, t, r) {
                    e.style.setProperty(t, r)
                }

                function i(e, t) {
                    return e.appendChild(t)
                }

                function n(t, r, n, o) {
                    var s = e.createElement("span");
                    return r && (s.className = r), n && (o || s.setAttribute("data-" + r, n), s.textContent = n), t && i(t, s) || s
                }

                function o(e, t) {
                    return e.getAttribute("data-" + t)
                }

                function s(t, r) {
                    return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (r || e).querySelectorAll(t)) : []
                }

                function a(e) {
                    for (var t = []; e--;) t[e] = [];
                    return t
                }

                function l(e, t) {
                    e && e.some(t)
                }

                function c(e) {
                    return function(t) {
                        return e[t]
                    }
                }
                var u = {};

                function h(e, t, r, i) {
                    return {
                        by: e,
                        depends: t,
                        key: r,
                        split: i
                    }
                }

                function d(e) {
                    u[e.by] = e
                }

                function p(e, r, o, a, c) {
                    e.normalize();
                    var u = [],
                        h = document.createDocumentFragment();
                    a && u.push(e.previousSibling);
                    var d = [];
                    return s(e.childNodes).some(function(e) {
                        if (e.tagName && !e.hasChildNodes()) {
                            d.push(e);
                            return
                        }
                        if (e.childNodes && e.childNodes.length) {
                            d.push(e), u.push.apply(u, p(e, r, o, a, c));
                            return
                        }
                        var i = e.wholeText || "",
                            s = i.trim();
                        s.length && (" " === i[0] && d.push(t(" ")), l("" === o && "function" == typeof Intl.Segmenter ? Array.from(new Intl.Segmenter().segment(s)).map(function(e) {
                            return e.segment
                        }) : s.split(o), function(e, t) {
                            t && c && d.push(n(h, "whitespace", " ", c));
                            var i = n(h, r, e);
                            u.push(i), d.push(i)
                        }), " " === i[i.length - 1] && d.push(t(" ")))
                    }), l(d, function(e) {
                        i(h, e)
                    }), e.innerHTML = "", i(e, h), u
                }
                var f = "words",
                    m = h(f, 0, "word", function(e) {
                        return p(e, "word", /\s+/, 0, 1)
                    }),
                    g = "chars",
                    v = h(g, [f], "char", function(e, t, r) {
                        var i = [];
                        return l(r[f], function(e, r) {
                            i.push.apply(i, p(e, "char", "", t.whitespace && r))
                        }), i
                    });

                function y(e) {
                    var t = (e = e || {}).key;
                    return s(e.target || "[data-splitting]").map(function(i) {
                        var n = i["\uD83C\uDF4C"];
                        if (!e.force && n) return n;
                        n = i["\uD83C\uDF4C"] = {
                            el: i
                        };
                        var s = e.by || o(i, "splitting");
                        s && "true" != s || (s = g);
                        var a = (function e(t, r, i) {
                                var n = i.indexOf(t);
                                if (-1 == n) {
                                    i.unshift(t);
                                    var o = u[t];
                                    if (!o) throw Error("plugin not loaded: " + t);
                                    l(o.depends, function(r) {
                                        e(r, t, i)
                                    })
                                } else {
                                    var s = i.indexOf(r);
                                    i.splice(n, 1), i.splice(s, 0, t)
                                }
                                return i
                            })(s, 0, []).map(c(u)),
                            h = function(e, t) {
                                for (var r in t) e[r] = t[r];
                                return e
                            }({}, e);
                        return l(a, function(e) {
                            if (e.split) {
                                var o, s, a = e.by,
                                    c = (t ? "-" + t : "") + e.key,
                                    u = e.split(i, h, n);
                                c && (s = (o = "--" + c) + "-index", l(u, function(e, t) {
                                    Array.isArray(e) ? l(e, function(e) {
                                        r(e, s, t)
                                    }) : r(e, s, t)
                                }), r(i, o + "-total", u.length)), n[a] = u, i.classList.add(a)
                            }
                        }), i.classList.add("splitting"), n
                    })
                }

                function b(e, t, r) {
                    var i = s(t.matching || e.children, e),
                        n = {};
                    return l(i, function(e) {
                        var t = Math.round(e[r]);
                        (n[t] || (n[t] = [])).push(e)
                    }), Object.keys(n).map(Number).sort(x).map(c(n))
                }

                function x(e, t) {
                    return e - t
                }
                y.html = function(e) {
                    var t = (e = e || {}).target = n();
                    return t.innerHTML = e.content, y(e), t.outerHTML
                }, y.add = d;
                var w = h("lines", [f], "line", function(e, t, r) {
                        return b(e, {
                            matching: r[f]
                        }, "offsetTop")
                    }),
                    A = h("items", 0, "item", function(e, t) {
                        return s(t.matching || e.children, e)
                    }),
                    E = h("rows", 0, "row", function(e, t) {
                        return b(e, t, "offsetTop")
                    }),
                    S = h("cols", 0, "col", function(e, t) {
                        return b(e, t, "offsetLeft")
                    }),
                    T = h("grid", ["rows", "cols"]),
                    _ = "layout",
                    k = h(_, 0, 0, function(e, t) {
                        var a = t.rows = +(t.rows || o(e, "rows") || 1),
                            l = t.columns = +(t.columns || o(e, "columns") || 1);
                        if (t.image = t.image || o(e, "image") || e.currentSrc || e.src, t.image) {
                            var c = s("img", e)[0];
                            t.image = c && (c.currentSrc || c.src)
                        }
                        t.image && r(e, "background-image", "url(" + t.image + ")");
                        for (var u = a * l, h = [], d = n(0, "cell-grid"); u--;) {
                            var p = n(d, "cell");
                            n(p, "cell-inner"), h.push(p)
                        }
                        return i(e, d), h
                    }),
                    C = h("cellRows", [_], "row", function(e, t, r) {
                        var i = t.rows,
                            n = a(i);
                        return l(r[_], function(e, t, r) {
                            n[Math.floor(t / (r.length / i))].push(e)
                        }), n
                    }),
                    R = h("cellColumns", [_], "col", function(e, t, r) {
                        var i = t.columns,
                            n = a(i);
                        return l(r[_], function(e, t) {
                            n[t % i].push(e)
                        }), n
                    }),
                    M = h("cells", ["cellRows", "cellColumns"], "cell", function(e, t, r) {
                        return r[_]
                    });
                return d(m), d(v), d(w), d(A), d(E), d(S), d(T), d(k), d(C), d(R), d(M), y
            }()
        },
        8706: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => a
            });
            var i = r(554),
                n = r(2115),
                o = r(1534);
            let s = () => !(typeof window > "u") && "u" > typeof window.storyblokRegisterEvent && window.location.search.includes("_storyblok"),
                a = e => {
                    let {
                        story: t = null,
                        bridgeOptions: r = {}
                    } = e;
                    if (!s()) return null;
                    let a = e => {
                            e && (0, n.startTransition)(() => {
                                (0, o.U)({
                                    story: e,
                                    pathToRevalidate: window.location.pathname
                                })
                            })
                        },
                        l = (null == t ? void 0 : t.id) ? ? 0;
                    return (0, n.useEffect)(() => {
                        (0, i.Kk)(l, e => a(e), r)
                    }, []), null
                }
        },
        8835: e => {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                r = "~";

            function i() {}

            function n(e, t, r) {
                this.fn = e, this.context = t, this.once = r || !1
            }

            function o(e, t, i, o, s) {
                if ("function" != typeof i) throw TypeError("The listener must be a function");
                var a = new n(i, o || e, s),
                    l = r ? r + t : t;
                return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], a] : e._events[l].push(a) : (e._events[l] = a, e._eventsCount++), e
            }

            function s(e, t) {
                0 == --e._eventsCount ? e._events = new i : delete e._events[t]
            }

            function a() {
                this._events = new i, this._eventsCount = 0
            }
            Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1)), a.prototype.eventNames = function() {
                var e, i, n = [];
                if (0 === this._eventsCount) return n;
                for (i in e = this._events) t.call(e, i) && n.push(r ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }, a.prototype.listeners = function(e) {
                var t = r ? r + e : e,
                    i = this._events[t];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var n = 0, o = i.length, s = Array(o); n < o; n++) s[n] = i[n].fn;
                return s
            }, a.prototype.listenerCount = function(e) {
                var t = r ? r + e : e,
                    i = this._events[t];
                return i ? i.fn ? 1 : i.length : 0
            }, a.prototype.emit = function(e, t, i, n, o, s) {
                var a = r ? r + e : e;
                if (!this._events[a]) return !1;
                var l, c, u = this._events[a],
                    h = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0), h) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, t), !0;
                        case 3:
                            return u.fn.call(u.context, t, i), !0;
                        case 4:
                            return u.fn.call(u.context, t, i, n), !0;
                        case 5:
                            return u.fn.call(u.context, t, i, n, o), !0;
                        case 6:
                            return u.fn.call(u.context, t, i, n, o, s), !0
                    }
                    for (c = 1, l = Array(h - 1); c < h; c++) l[c - 1] = arguments[c];
                    u.fn.apply(u.context, l)
                } else {
                    var d, p = u.length;
                    for (c = 0; c < p; c++) switch (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), h) {
                        case 1:
                            u[c].fn.call(u[c].context);
                            break;
                        case 2:
                            u[c].fn.call(u[c].context, t);
                            break;
                        case 3:
                            u[c].fn.call(u[c].context, t, i);
                            break;
                        case 4:
                            u[c].fn.call(u[c].context, t, i, n);
                            break;
                        default:
                            if (!l)
                                for (d = 1, l = Array(h - 1); d < h; d++) l[d - 1] = arguments[d];
                            u[c].fn.apply(u[c].context, l)
                    }
                }
                return !0
            }, a.prototype.on = function(e, t, r) {
                return o(this, e, t, r, !1)
            }, a.prototype.once = function(e, t, r) {
                return o(this, e, t, r, !0)
            }, a.prototype.removeListener = function(e, t, i, n) {
                var o = r ? r + e : e;
                if (!this._events[o]) return this;
                if (!t) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== t || n && !a.once || i && a.context !== i || s(this, o);
                else {
                    for (var l = 0, c = [], u = a.length; l < u; l++)(a[l].fn !== t || n && !a[l].once || i && a[l].context !== i) && c.push(a[l]);
                    c.length ? this._events[o] = 1 === c.length ? c[0] : c : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, e.exports = a
        },
        8859: (e, t) => {
            "use strict";

            function r(e) {
                let t = {};
                for (let [r, i] of e.entries()) {
                    let e = t[r];
                    void 0 === e ? t[r] = i : Array.isArray(e) ? e.push(i) : t[r] = [e, i]
                }
                return t
            }

            function i(e) {
                return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }

            function n(e) {
                let t = new URLSearchParams;
                for (let [r, n] of Object.entries(e))
                    if (Array.isArray(n))
                        for (let e of n) t.append(r, i(e));
                    else t.set(r, i(n));
                return t
            }

            function o(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                for (let t of r) {
                    for (let r of t.keys()) e.delete(r);
                    for (let [r, i] of t.entries()) e.append(r, i)
                }
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                assign: function() {
                    return o
                },
                searchParamsToUrlQuery: function() {
                    return r
                },
                urlQueryToSearchParams: function() {
                    return n
                }
            })
        },
        8883: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), r(3230);
            let i = r(5100),
                n = r(5840);

            function o(e) {
                return void 0 !== e.default
            }

            function s(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function a(e, t) {
                var r, a;
                let l, c, u, {
                        src: h,
                        sizes: d,
                        unoptimized: p = !1,
                        priority: f = !1,
                        loading: m,
                        className: g,
                        quality: v,
                        width: y,
                        height: b,
                        fill: x = !1,
                        style: w,
                        overrideSrc: A,
                        onLoad: E,
                        onLoadingComplete: S,
                        placeholder: T = "empty",
                        blurDataURL: _,
                        fetchPriority: k,
                        decoding: C = "async",
                        layout: R,
                        objectFit: M,
                        objectPosition: j,
                        lazyBoundary: I,
                        lazyRoot: O,
                        ...L
                    } = e,
                    {
                        imgConf: P,
                        showAltText: D,
                        blurComplete: N,
                        defaultLoader: B
                    } = t,
                    F = P || n.imageConfigDefault;
                if ("allSizes" in F) l = F;
                else {
                    let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
                        t = F.deviceSizes.sort((e, t) => e - t),
                        i = null == (r = F.qualities) ? void 0 : r.sort((e, t) => e - t);
                    l = { ...F,
                        allSizes: e,
                        deviceSizes: t,
                        qualities: i
                    }
                }
                if (void 0 === B) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
                let z = L.loader || B;
                delete L.loader, delete L.srcSet;
                let U = "__next_img_default" in z;
                if (U) {
                    if ("custom" === l.loader) throw Object.defineProperty(Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
                } else {
                    let e = z;
                    z = t => {
                        let {
                            config: r,
                            ...i
                        } = t;
                        return e(i)
                    }
                }
                if (R) {
                    "fill" === R && (x = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[R];
                    e && (w = { ...w,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[R];
                    t && !d && (d = t)
                }
                let H = "",
                    G = s(y),
                    W = s(b);
                if ((a = h) && "object" == typeof a && (o(a) || void 0 !== a.src)) {
                    let e = o(h) ? h.default : h;
                    if (!e.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (!e.height || !e.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                    if (c = e.blurWidth, u = e.blurHeight, _ = _ || e.blurDataURL, H = e.src, !x) {
                        if (G || W) {
                            if (G && !W) {
                                let t = G / e.width;
                                W = Math.round(e.height * t)
                            } else if (!G && W) {
                                let t = W / e.height;
                                G = Math.round(e.width * t)
                            }
                        } else G = e.width, W = e.height
                    }
                }
                let X = !f && ("lazy" === m || void 0 === m);
                (!(h = "string" == typeof h ? h : H) || h.startsWith("data:") || h.startsWith("blob:")) && (p = !0, X = !1), l.unoptimized && (p = !0), U && !l.dangerouslyAllowSVG && h.split("?", 1)[0].endsWith(".svg") && (p = !0);
                let Y = s(v),
                    q = Object.assign(x ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: M,
                        objectPosition: j
                    } : {}, D ? {} : {
                        color: "transparent"
                    }, w),
                    V = N || "empty" === T ? null : "blur" === T ? 'url("data:image/svg+xml;charset=utf-8,' + (0, i.getImageBlurSvg)({
                        widthInt: G,
                        heightInt: W,
                        blurWidth: c,
                        blurHeight: u,
                        blurDataURL: _ || "",
                        objectFit: q.objectFit
                    }) + '")' : 'url("' + T + '")',
                    $ = V ? {
                        backgroundSize: q.objectFit || "cover",
                        backgroundPosition: q.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: V
                    } : {},
                    K = function(e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: i,
                            width: n,
                            quality: o,
                            sizes: s,
                            loader: a
                        } = e;
                        if (i) return {
                            src: r,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: c
                        } = function(e, t, r) {
                            let {
                                deviceSizes: i,
                                allSizes: n
                            } = e;
                            if (r) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let i; i = e.exec(r); i) t.push(parseInt(i[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: n.filter(t => t >= i[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: n,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof t ? {
                                widths: i,
                                kind: "w"
                            } : {
                                widths: [...new Set([t, 2 * t].map(e => n.find(t => t >= e) || n[n.length - 1]))],
                                kind: "x"
                            }
                        }(t, n, s), u = l.length - 1;
                        return {
                            sizes: s || "w" !== c ? s : "100vw",
                            srcSet: l.map((e, i) => a({
                                config: t,
                                src: r,
                                quality: o,
                                width: e
                            }) + " " + ("w" === c ? e : i + 1) + c).join(", "),
                            src: a({
                                config: t,
                                src: r,
                                quality: o,
                                width: l[u]
                            })
                        }
                    }({
                        config: l,
                        src: h,
                        unoptimized: p,
                        width: G,
                        quality: Y,
                        sizes: d,
                        loader: z
                    });
                return {
                    props: { ...L,
                        loading: X ? "lazy" : m,
                        fetchPriority: k,
                        width: G,
                        height: W,
                        decoding: C,
                        className: g,
                        style: { ...q,
                            ...$
                        },
                        sizes: K.sizes,
                        srcSet: K.srcSet,
                        src: A || K.src
                    },
                    meta: {
                        unoptimized: p,
                        priority: f,
                        placeholder: T,
                        fill: x
                    }
                }
            }
        },
        8926: function(e, t, r) {
            var i, n, o;
            n = "undefined" != typeof window ? window : this, o = function(e, t) {
                "use strict";
                var r = e.jQuery,
                    i = e.console;

                function n(e, t) {
                    for (var r in t) e[r] = t[r];
                    return e
                }
                var o = Array.prototype.slice;

                function s(e, t, a) {
                    if (!(this instanceof s)) return new s(e, t, a);
                    var l, c = e;
                    if ("string" == typeof e && (c = document.querySelectorAll(e)), !c) {
                        i.error("Bad element for imagesLoaded " + (c || e));
                        return
                    }
                    this.elements = Array.isArray(l = c) ? l : "object" == typeof l && "number" == typeof l.length ? o.call(l) : [l], this.options = n({}, this.options), "function" == typeof t ? a = t : n(this.options, t), a && this.on("always", a), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(this.check.bind(this))
                }
                s.prototype = Object.create(t.prototype), s.prototype.options = {}, s.prototype.getImages = function() {
                    this.images = [], this.elements.forEach(this.addElementImages, this)
                }, s.prototype.addElementImages = function(e) {
                    "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                    var t = e.nodeType;
                    if (t && a[t]) {
                        for (var r = e.querySelectorAll("img"), i = 0; i < r.length; i++) {
                            var n = r[i];
                            this.addImage(n)
                        }
                        if ("string" == typeof this.options.background) {
                            var o = e.querySelectorAll(this.options.background);
                            for (i = 0; i < o.length; i++) {
                                var s = o[i];
                                this.addElementBackgroundImages(s)
                            }
                        }
                    }
                };
                var a = {
                    1: !0,
                    9: !0,
                    11: !0
                };

                function l(e) {
                    this.img = e
                }

                function c(e, t) {
                    this.url = e, this.element = t, this.img = new Image
                }
                return s.prototype.addElementBackgroundImages = function(e) {
                    var t = getComputedStyle(e);
                    if (t)
                        for (var r = /url\((['"])?(.*?)\1\)/gi, i = r.exec(t.backgroundImage); null !== i;) {
                            var n = i && i[2];
                            n && this.addBackground(n, e), i = r.exec(t.backgroundImage)
                        }
                }, s.prototype.addImage = function(e) {
                    var t = new l(e);
                    this.images.push(t)
                }, s.prototype.addBackground = function(e, t) {
                    var r = new c(e, t);
                    this.images.push(r)
                }, s.prototype.check = function() {
                    var e = this;
                    if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
                        this.complete();
                        return
                    }

                    function t(t, r, i) {
                        setTimeout(function() {
                            e.progress(t, r, i)
                        })
                    }
                    this.images.forEach(function(e) {
                        e.once("progress", t), e.check()
                    })
                }, s.prototype.progress = function(e, t, r) {
                    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + r, e, t)
                }, s.prototype.complete = function() {
                    var e = this.hasAnyBroken ? "fail" : "done";
                    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                        var t = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[t](this)
                    }
                }, l.prototype = Object.create(t.prototype), l.prototype.check = function() {
                    if (this.getIsImageComplete()) {
                        this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                        return
                    }
                    this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src
                }, l.prototype.getIsImageComplete = function() {
                    return this.img.complete && this.img.naturalWidth
                }, l.prototype.confirm = function(e, t) {
                    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
                }, l.prototype.handleEvent = function(e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e)
                }, l.prototype.onload = function() {
                    this.confirm(!0, "onload"), this.unbindEvents()
                }, l.prototype.onerror = function() {
                    this.confirm(!1, "onerror"), this.unbindEvents()
                }, l.prototype.unbindEvents = function() {
                    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, c.prototype = Object.create(l.prototype), c.prototype.check = function() {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                }, c.prototype.unbindEvents = function() {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, c.prototype.confirm = function(e, t) {
                    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
                }, s.makeJQueryPlugin = function(t) {
                    (t = t || e.jQuery) && ((r = t).fn.imagesLoaded = function(e, t) {
                        return new s(this, e, t).jqDeferred.promise(r(this))
                    })
                }, s.makeJQueryPlugin(), s
            }, void 0 !== (i = (function(e) {
                return o(n, e)
            }).apply(t, [r(1120)])) && (e.exports = i)
        },
        9033: (e, t, r) => {
            "use strict";
            e.exports = r(2436)
        },
        9300: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var i = {}.hasOwnProperty;

                function n() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        r && (e = o(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return n.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var r in e) i.call(e, r) && e[r] && (t = o(t, r));
                            return t
                        }(r)))
                    }
                    return e
                }

                function o(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (n.default = n, e.exports = n) : void 0 !== (r = (function() {
                    return n
                }).apply(t, [])) && (e.exports = r)
            }()
        },
        9311: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => o
            });
            var i = r(3264);

            function n(e, t) {
                if (t === i.RJ4) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
                if (t !== i.rYR && t !== i.O49) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e; {
                    let r = e.getIndex();
                    if (null === r) {
                        let t = [],
                            i = e.getAttribute("position");
                        if (void 0 === i) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                        for (let e = 0; e < i.count; e++) t.push(e);
                        e.setIndex(t), r = e.getIndex()
                    }
                    let n = r.count - 2,
                        o = [];
                    if (t === i.rYR)
                        for (let e = 1; e <= n; e++) o.push(r.getX(0)), o.push(r.getX(e)), o.push(r.getX(e + 1));
                    else
                        for (let e = 0; e < n; e++) e % 2 == 0 ? (o.push(r.getX(e)), o.push(r.getX(e + 1)), o.push(r.getX(e + 2))) : (o.push(r.getX(e + 2)), o.push(r.getX(e + 1)), o.push(r.getX(e)));
                    o.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                    let s = e.clone();
                    return s.setIndex(o), s.clearGroups(), s
                }
            }
            class o extends i.aHM {
                constructor(e) {
                    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
                        return new h(e)
                    }), this.register(function(e) {
                        return new d(e)
                    }), this.register(function(e) {
                        return new w(e)
                    }), this.register(function(e) {
                        return new A(e)
                    }), this.register(function(e) {
                        return new E(e)
                    }), this.register(function(e) {
                        return new f(e)
                    }), this.register(function(e) {
                        return new m(e)
                    }), this.register(function(e) {
                        return new g(e)
                    }), this.register(function(e) {
                        return new v(e)
                    }), this.register(function(e) {
                        return new u(e)
                    }), this.register(function(e) {
                        return new y(e)
                    }), this.register(function(e) {
                        return new p(e)
                    }), this.register(function(e) {
                        return new x(e)
                    }), this.register(function(e) {
                        return new b(e)
                    }), this.register(function(e) {
                        return new l(e)
                    }), this.register(function(e) {
                        return new S(e)
                    }), this.register(function(e) {
                        return new T(e)
                    })
                }
                load(e, t, r, n) {
                    let o;
                    let s = this;
                    if ("" !== this.resourcePath) o = this.resourcePath;
                    else if ("" !== this.path) {
                        let t = i.r6x.extractUrlBase(e);
                        o = i.r6x.resolveURL(t, this.path)
                    } else o = i.r6x.extractUrlBase(e);
                    this.manager.itemStart(e);
                    let a = function(t) {
                            n ? n(t) : console.error(t), s.manager.itemError(e), s.manager.itemEnd(e)
                        },
                        l = new i.Y9S(this.manager);
                    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(r) {
                        try {
                            s.parse(r, o, function(r) {
                                t(r), s.manager.itemEnd(e)
                            }, a)
                        } catch (e) {
                            a(e)
                        }
                    }, r, a)
                }
                setDRACOLoader(e) {
                    return this.dracoLoader = e, this
                }
                setKTX2Loader(e) {
                    return this.ktx2Loader = e, this
                }
                setMeshoptDecoder(e) {
                    return this.meshoptDecoder = e, this
                }
                register(e) {
                    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
                }
                unregister(e) {
                    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
                }
                parse(e, t, r, i) {
                    let n;
                    let o = {},
                        s = {},
                        l = new TextDecoder;
                    if ("string" == typeof e) n = JSON.parse(e);
                    else if (e instanceof ArrayBuffer) {
                        if (l.decode(new Uint8Array(e, 0, 4)) === _) {
                            try {
                                o[a.KHR_BINARY_GLTF] = new C(e)
                            } catch (e) {
                                i && i(e);
                                return
                            }
                            n = JSON.parse(o[a.KHR_BINARY_GLTF].content)
                        } else n = JSON.parse(l.decode(e))
                    } else n = e;
                    if (void 0 === n.asset || n.asset.version[0] < 2) {
                        i && i(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        return
                    }
                    let u = new $(n, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                    });
                    u.fileLoader.setRequestHeader(this.requestHeader);
                    for (let e = 0; e < this.pluginCallbacks.length; e++) {
                        let t = this.pluginCallbacks[e](u);
                        t.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), s[t.name] = t, o[t.name] = !0
                    }
                    if (n.extensionsUsed)
                        for (let e = 0; e < n.extensionsUsed.length; ++e) {
                            let t = n.extensionsUsed[e],
                                r = n.extensionsRequired || [];
                            switch (t) {
                                case a.KHR_MATERIALS_UNLIT:
                                    o[t] = new c;
                                    break;
                                case a.KHR_DRACO_MESH_COMPRESSION:
                                    o[t] = new R(n, this.dracoLoader);
                                    break;
                                case a.KHR_TEXTURE_TRANSFORM:
                                    o[t] = new M;
                                    break;
                                case a.KHR_MESH_QUANTIZATION:
                                    o[t] = new j;
                                    break;
                                default:
                                    r.indexOf(t) >= 0 && void 0 === s[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
                            }
                        }
                    u.setExtensions(o), u.setPlugins(s), u.parse(r, i)
                }
                parseAsync(e, t) {
                    let r = this;
                    return new Promise(function(i, n) {
                        r.parse(e, t, i, n)
                    })
                }
            }

            function s() {
                let e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, r) {
                        e[t] = r
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            let a = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
                KHR_MATERIALS_IOR: "KHR_materials_ior",
                KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
                KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
                KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
                KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
                KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_MATERIALS_VOLUME: "KHR_materials_volume",
                KHR_TEXTURE_BASISU: "KHR_texture_basisu",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
                EXT_MATERIALS_BUMP: "EXT_materials_bump",
                EXT_TEXTURE_WEBP: "EXT_texture_webp",
                EXT_TEXTURE_AVIF: "EXT_texture_avif",
                EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
                EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
            };
            class l {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_LIGHTS_PUNCTUAL, this.cache = {
                        refs: {},
                        uses: {}
                    }
                }
                _markDefs() {
                    let e = this.parser,
                        t = this.parser.json.nodes || [];
                    for (let r = 0, i = t.length; r < i; r++) {
                        let i = t[r];
                        i.extensions && i.extensions[this.name] && void 0 !== i.extensions[this.name].light && e._addNodeRef(this.cache, i.extensions[this.name].light)
                    }
                }
                _loadLight(e) {
                    let t;
                    let r = this.parser,
                        n = "light:" + e,
                        o = r.cache.get(n);
                    if (o) return o;
                    let s = r.json,
                        a = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e],
                        l = new i.Q1f(0xffffff);
                    void 0 !== a.color && l.setRGB(a.color[0], a.color[1], a.color[2], i.Zr2);
                    let c = void 0 !== a.range ? a.range : 0;
                    switch (a.type) {
                        case "directional":
                            (t = new i.ZyN(l)).target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        case "point":
                            (t = new i.HiM(l)).distance = c;
                            break;
                        case "spot":
                            (t = new i.nCl(l)).distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = void 0 !== a.spot.innerConeAngle ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = void 0 !== a.spot.outerConeAngle ? a.spot.outerConeAngle : Math.PI / 4, t.angle = a.spot.outerConeAngle, t.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        default:
                            throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type)
                    }
                    return t.position.set(0, 0, 0), X(t, a), void 0 !== a.intensity && (t.intensity = a.intensity), t.name = r.createUniqueName(a.name || "light_" + e), o = Promise.resolve(t), r.cache.add(n, o), o
                }
                getDependency(e, t) {
                    if ("light" === e) return this._loadLight(t)
                }
                createNodeAttachment(e) {
                    let t = this,
                        r = this.parser,
                        i = r.json.nodes[e],
                        n = (i.extensions && i.extensions[this.name] || {}).light;
                    return void 0 === n ? null : this._loadLight(n).then(function(e) {
                        return r._getNodeRef(t.cache, n, e)
                    })
                }
            }
            class c {
                constructor() {
                    this.name = a.KHR_MATERIALS_UNLIT
                }
                getMaterialType() {
                    return i.V9B
                }
                extendParams(e, t, r) {
                    let n = [];
                    e.color = new i.Q1f(1, 1, 1), e.opacity = 1;
                    let o = t.pbrMetallicRoughness;
                    if (o) {
                        if (Array.isArray(o.baseColorFactor)) {
                            let t = o.baseColorFactor;
                            e.color.setRGB(t[0], t[1], t[2], i.Zr2), e.opacity = t[3]
                        }
                        void 0 !== o.baseColorTexture && n.push(r.assignTexture(e, "map", o.baseColorTexture, i.er$))
                    }
                    return Promise.all(n)
                }
            }
            class u {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_EMISSIVE_STRENGTH
                }
                extendMaterialParams(e, t) {
                    let r = this.parser.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = r.extensions[this.name].emissiveStrength;
                    return void 0 !== i && (t.emissiveIntensity = i), Promise.resolve()
                }
            }
            class h {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_CLEARCOAT
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        n = r.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let o = [],
                        s = n.extensions[this.name];
                    if (void 0 !== s.clearcoatFactor && (t.clearcoat = s.clearcoatFactor), void 0 !== s.clearcoatTexture && o.push(r.assignTexture(t, "clearcoatMap", s.clearcoatTexture)), void 0 !== s.clearcoatRoughnessFactor && (t.clearcoatRoughness = s.clearcoatRoughnessFactor), void 0 !== s.clearcoatRoughnessTexture && o.push(r.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)), void 0 !== s.clearcoatNormalTexture && (o.push(r.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)), void 0 !== s.clearcoatNormalTexture.scale)) {
                        let e = s.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new i.I9Y(e, e)
                    }
                    return Promise.all(o)
                }
            }
            class d {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_DISPERSION
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = r.extensions[this.name];
                    return t.dispersion = void 0 !== i.dispersion ? i.dispersion : 0, Promise.resolve()
                }
            }
            class p {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_IRIDESCENCE
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        i = r.json.materials[e];
                    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        o = i.extensions[this.name];
                    return void 0 !== o.iridescenceFactor && (t.iridescence = o.iridescenceFactor), void 0 !== o.iridescenceTexture && n.push(r.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), void 0 !== o.iridescenceIor && (t.iridescenceIOR = o.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== o.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), void 0 !== o.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), void 0 !== o.iridescenceThicknessTexture && n.push(r.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(n)
                }
            }
            class f {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_SHEEN
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        n = r.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let o = [];
                    t.sheenColor = new i.Q1f(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
                    let s = n.extensions[this.name];
                    if (void 0 !== s.sheenColorFactor) {
                        let e = s.sheenColorFactor;
                        t.sheenColor.setRGB(e[0], e[1], e[2], i.Zr2)
                    }
                    return void 0 !== s.sheenRoughnessFactor && (t.sheenRoughness = s.sheenRoughnessFactor), void 0 !== s.sheenColorTexture && o.push(r.assignTexture(t, "sheenColorMap", s.sheenColorTexture, i.er$)), void 0 !== s.sheenRoughnessTexture && o.push(r.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)), Promise.all(o)
                }
            }
            class m {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_TRANSMISSION
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        i = r.json.materials[e];
                    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        o = i.extensions[this.name];
                    return void 0 !== o.transmissionFactor && (t.transmission = o.transmissionFactor), void 0 !== o.transmissionTexture && n.push(r.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(n)
                }
            }
            class g {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_VOLUME
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        n = r.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let o = [],
                        s = n.extensions[this.name];
                    t.thickness = void 0 !== s.thicknessFactor ? s.thicknessFactor : 0, void 0 !== s.thicknessTexture && o.push(r.assignTexture(t, "thicknessMap", s.thicknessTexture)), t.attenuationDistance = s.attenuationDistance || 1 / 0;
                    let a = s.attenuationColor || [1, 1, 1];
                    return t.attenuationColor = new i.Q1f().setRGB(a[0], a[1], a[2], i.Zr2), Promise.all(o)
                }
            }
            class v {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_IOR
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let i = r.extensions[this.name];
                    return t.ior = void 0 !== i.ior ? i.ior : 1.5, Promise.resolve()
                }
            }
            class y {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_SPECULAR
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        n = r.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let o = [],
                        s = n.extensions[this.name];
                    t.specularIntensity = void 0 !== s.specularFactor ? s.specularFactor : 1, void 0 !== s.specularTexture && o.push(r.assignTexture(t, "specularIntensityMap", s.specularTexture));
                    let a = s.specularColorFactor || [1, 1, 1];
                    return t.specularColor = new i.Q1f().setRGB(a[0], a[1], a[2], i.Zr2), void 0 !== s.specularColorTexture && o.push(r.assignTexture(t, "specularColorMap", s.specularColorTexture, i.er$)), Promise.all(o)
                }
            }
            class b {
                constructor(e) {
                    this.parser = e, this.name = a.EXT_MATERIALS_BUMP
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        i = r.json.materials[e];
                    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        o = i.extensions[this.name];
                    return t.bumpScale = void 0 !== o.bumpFactor ? o.bumpFactor : 1, void 0 !== o.bumpTexture && n.push(r.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(n)
                }
            }
            class x {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_ANISOTROPY
                }
                getMaterialType(e) {
                    let t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? i.uSd : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        i = r.json.materials[e];
                    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        o = i.extensions[this.name];
                    return void 0 !== o.anisotropyStrength && (t.anisotropy = o.anisotropyStrength), void 0 !== o.anisotropyRotation && (t.anisotropyRotation = o.anisotropyRotation), void 0 !== o.anisotropyTexture && n.push(r.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(n)
                }
            }
            class w {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_TEXTURE_BASISU
                }
                loadTexture(e) {
                    let t = this.parser,
                        r = t.json,
                        i = r.textures[e];
                    if (!i.extensions || !i.extensions[this.name]) return null;
                    let n = i.extensions[this.name],
                        o = t.options.ktx2Loader;
                    if (!o) {
                        if (!(r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)) return null;
                        throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")
                    }
                    return t.loadTextureImage(e, n.source, o)
                }
            }
            class A {
                constructor(e) {
                    this.parser = e, this.name = a.EXT_TEXTURE_WEBP, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        r = this.parser,
                        i = r.json,
                        n = i.textures[e];
                    if (!n.extensions || !n.extensions[t]) return null;
                    let o = n.extensions[t],
                        s = i.images[o.source],
                        a = r.textureLoader;
                    if (s.uri) {
                        let e = r.options.manager.getHandler(s.uri);
                        null !== e && (a = e)
                    }
                    return this.detectSupport().then(function(n) {
                        if (n) return r.loadTextureImage(e, o.source, a);
                        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return r.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class E {
                constructor(e) {
                    this.parser = e, this.name = a.EXT_TEXTURE_AVIF, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        r = this.parser,
                        i = r.json,
                        n = i.textures[e];
                    if (!n.extensions || !n.extensions[t]) return null;
                    let o = n.extensions[t],
                        s = i.images[o.source],
                        a = r.textureLoader;
                    if (s.uri) {
                        let e = r.options.manager.getHandler(s.uri);
                        null !== e && (a = e)
                    }
                    return this.detectSupport().then(function(n) {
                        if (n) return r.loadTextureImage(e, o.source, a);
                        if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
                        return r.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class S {
                constructor(e) {
                    this.name = a.EXT_MESHOPT_COMPRESSION, this.parser = e
                }
                loadBufferView(e) {
                    let t = this.parser.json,
                        r = t.bufferViews[e];
                    if (!r.extensions || !r.extensions[this.name]) return null; {
                        let e = r.extensions[this.name],
                            i = this.parser.getDependency("buffer", e.buffer),
                            n = this.parser.options.meshoptDecoder;
                        if (!n || !n.supported) {
                            if (!(t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)) return null;
                            throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")
                        }
                        return i.then(function(t) {
                            let r = e.byteOffset || 0,
                                i = e.byteLength || 0,
                                o = e.count,
                                s = e.byteStride,
                                a = new Uint8Array(t, r, i);
                            return n.decodeGltfBufferAsync ? n.decodeGltfBufferAsync(o, s, a, e.mode, e.filter).then(function(e) {
                                return e.buffer
                            }) : n.ready.then(function() {
                                let t = new ArrayBuffer(o * s);
                                return n.decodeGltfBuffer(new Uint8Array(t), o, s, a, e.mode, e.filter), t
                            })
                        })
                    }
                }
            }
            class T {
                constructor(e) {
                    this.name = a.EXT_MESH_GPU_INSTANCING, this.parser = e
                }
                createNodeMesh(e) {
                    let t = this.parser.json,
                        r = t.nodes[e];
                    if (!r.extensions || !r.extensions[this.name] || void 0 === r.mesh) return null;
                    for (let e of t.meshes[r.mesh].primitives)
                        if (e.mode !== P.TRIANGLES && e.mode !== P.TRIANGLE_STRIP && e.mode !== P.TRIANGLE_FAN && void 0 !== e.mode) return null;
                    let n = r.extensions[this.name].attributes,
                        o = [],
                        s = {};
                    for (let e in n) o.push(this.parser.getDependency("accessor", n[e]).then(t => (s[e] = t, s[e])));
                    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then(e => {
                        let t = e.pop(),
                            r = t.isGroup ? t.children : [t],
                            n = e[0].count,
                            o = [];
                        for (let e of r) {
                            let t = new i.kn4,
                                r = new i.Pq0,
                                a = new i.PTz,
                                l = new i.Pq0(1, 1, 1),
                                c = new i.ZLX(e.geometry, e.material, n);
                            for (let e = 0; e < n; e++) s.TRANSLATION && r.fromBufferAttribute(s.TRANSLATION, e), s.ROTATION && a.fromBufferAttribute(s.ROTATION, e), s.SCALE && l.fromBufferAttribute(s.SCALE, e), c.setMatrixAt(e, t.compose(r, a, l));
                            for (let t in s)
                                if ("_COLOR_0" === t) {
                                    let e = s[t];
                                    c.instanceColor = new i.uWO(e.array, e.itemSize, e.normalized)
                                } else "TRANSLATION" !== t && "ROTATION" !== t && "SCALE" !== t && e.geometry.setAttribute(t, s[t]);
                            i.B69.prototype.copy.call(c, e), this.parser.assignFinalMaterial(c), o.push(c)
                        }
                        return t.isGroup ? (t.clear(), t.add(...o), t) : o[0]
                    }))
                }
            }
            let _ = "glTF",
                k = {
                    JSON: 0x4e4f534a,
                    BIN: 5130562
                };
            class C {
                constructor(e) {
                    this.name = a.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    let t = new DataView(e, 0, 12),
                        r = new TextDecoder;
                    if (this.header = {
                            magic: r.decode(new Uint8Array(e.slice(0, 4))),
                            version: t.getUint32(4, !0),
                            length: t.getUint32(8, !0)
                        }, this.header.magic !== _) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
                    let i = this.header.length - 12,
                        n = new DataView(e, 12),
                        o = 0;
                    for (; o < i;) {
                        let t = n.getUint32(o, !0);
                        o += 4;
                        let i = n.getUint32(o, !0);
                        if (o += 4, i === k.JSON) {
                            let i = new Uint8Array(e, 12 + o, t);
                            this.content = r.decode(i)
                        } else if (i === k.BIN) {
                            let r = 12 + o;
                            this.body = e.slice(r, r + t)
                        }
                        o += t
                    }
                    if (null === this.content) throw Error("THREE.GLTFLoader: JSON content not found.")
                }
            }
            class R {
                constructor(e, t) {
                    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = a.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }
                decodePrimitive(e, t) {
                    let r = this.json,
                        n = this.dracoLoader,
                        o = e.extensions[this.name].bufferView,
                        s = e.extensions[this.name].attributes,
                        a = {},
                        l = {},
                        c = {};
                    for (let e in s) a[z[e] || e.toLowerCase()] = s[e];
                    for (let t in e.attributes) {
                        let i = z[t] || t.toLowerCase();
                        if (void 0 !== s[t]) {
                            let n = r.accessors[e.attributes[t]],
                                o = D[n.componentType];
                            c[i] = o.name, l[i] = !0 === n.normalized
                        }
                    }
                    return t.getDependency("bufferView", o).then(function(e) {
                        return new Promise(function(t, r) {
                            n.decodeDracoFile(e, function(e) {
                                for (let t in e.attributes) {
                                    let r = e.attributes[t],
                                        i = l[t];
                                    void 0 !== i && (r.normalized = i)
                                }
                                t(e)
                            }, a, c, i.Zr2, r)
                        })
                    })
                }
            }
            class M {
                constructor() {
                    this.name = a.KHR_TEXTURE_TRANSFORM
                }
                extendTexture(e, t) {
                    return (void 0 === t.texCoord || t.texCoord === e.channel) && void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.texCoord && (e.channel = t.texCoord), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
                }
            }
            class j {
                constructor() {
                    this.name = a.KHR_MESH_QUANTIZATION
                }
            }
            class I extends i.lGw {
                constructor(e, t, r, i) {
                    super(e, t, r, i)
                }
                copySampleValue_(e) {
                    let t = this.resultBuffer,
                        r = this.sampleValues,
                        i = this.valueSize,
                        n = e * i * 3 + i;
                    for (let e = 0; e !== i; e++) t[e] = r[n + e];
                    return t
                }
                interpolate_(e, t, r, i) {
                    let n = this.resultBuffer,
                        o = this.sampleValues,
                        s = this.valueSize,
                        a = 2 * s,
                        l = 3 * s,
                        c = i - t,
                        u = (r - t) / c,
                        h = u * u,
                        d = h * u,
                        p = e * l,
                        f = p - l,
                        m = -2 * d + 3 * h,
                        g = d - h,
                        v = 1 - m,
                        y = g - h + u;
                    for (let e = 0; e !== s; e++) {
                        let t = o[f + e + s],
                            r = o[f + e + a] * c,
                            i = o[p + e + s],
                            l = o[p + e] * c;
                        n[e] = v * t + y * r + m * i + g * l
                    }
                    return n
                }
            }
            let O = new i.PTz;
            class L extends I {
                interpolate_(e, t, r, i) {
                    let n = super.interpolate_(e, t, r, i);
                    return O.fromArray(n).normalize().toArray(n), n
                }
            }
            let P = {
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6
                },
                D = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                N = {
                    9728: i.hxR,
                    9729: i.k6q,
                    9984: i.pHI,
                    9985: i.kRr,
                    9986: i.Cfg,
                    9987: i.$_I
                },
                B = {
                    33071: i.ghU,
                    33648: i.kTW,
                    10497: i.GJx
                },
                F = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                z = {
                    POSITION: "position",
                    NORMAL: "normal",
                    TANGENT: "tangent",
                    TEXCOORD_0: "uv",
                    TEXCOORD_1: "uv1",
                    TEXCOORD_2: "uv2",
                    TEXCOORD_3: "uv3",
                    COLOR_0: "color",
                    WEIGHTS_0: "skinWeight",
                    JOINTS_0: "skinIndex"
                },
                U = {
                    scale: "scale",
                    translation: "position",
                    rotation: "quaternion",
                    weights: "morphTargetInfluences"
                },
                H = {
                    CUBICSPLINE: void 0,
                    LINEAR: i.PJ3,
                    STEP: i.ljd
                },
                G = {
                    OPAQUE: "OPAQUE",
                    MASK: "MASK",
                    BLEND: "BLEND"
                };

            function W(e, t, r) {
                for (let i in r.extensions) void 0 === e[i] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[i] = r.extensions[i])
            }

            function X(e, t) {
                void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }

            function Y(e) {
                let t = "",
                    r = Object.keys(e).sort();
                for (let i = 0, n = r.length; i < n; i++) t += r[i] + ":" + e[r[i]] + ";";
                return t
            }

            function q(e) {
                switch (e) {
                    case Int8Array:
                        return 1 / 127;
                    case Uint8Array:
                        return 1 / 255;
                    case Int16Array:
                        return 1 / 32767;
                    case Uint16Array:
                        return 1 / 65535;
                    default:
                        throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
                }
            }
            let V = new i.kn4;
            class $ {
                constructor(e = {}, t = {}) {
                    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new s, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                        refs: {},
                        uses: {}
                    }, this.cameraCache = {
                        refs: {},
                        uses: {}
                    }, this.lightCache = {
                        refs: {},
                        uses: {}
                    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
                    let r = !1,
                        n = -1,
                        o = !1,
                        a = -1;
                    if ("undefined" != typeof navigator) {
                        let e = navigator.userAgent;
                        r = !0 === /^((?!chrome|android).)*safari/i.test(e);
                        let t = e.match(/Version\/(\d+)/);
                        n = r && t ? parseInt(t[1], 10) : -1, a = (o = e.indexOf("Firefox") > -1) ? e.match(/Firefox\/([0-9]+)\./)[1] : -1
                    }
                    "undefined" == typeof createImageBitmap || r && n < 17 || o && a < 98 ? this.textureLoader = new i.Tap(this.options.manager) : this.textureLoader = new i.Kzg(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new i.Y9S(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }
                setExtensions(e) {
                    this.extensions = e
                }
                setPlugins(e) {
                    this.plugins = e
                }
                parse(e, t) {
                    let r = this,
                        i = this.json,
                        n = this.extensions;
                    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
                        return e._markDefs && e._markDefs()
                    }), Promise.all(this._invokeAll(function(e) {
                        return e.beforeRoot && e.beforeRoot()
                    })).then(function() {
                        return Promise.all([r.getDependencies("scene"), r.getDependencies("animation"), r.getDependencies("camera")])
                    }).then(function(t) {
                        let o = {
                            scene: t[0][i.scene || 0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: i.asset,
                            parser: r,
                            userData: {}
                        };
                        return W(n, o, i), X(o, i), Promise.all(r._invokeAll(function(e) {
                            return e.afterRoot && e.afterRoot(o)
                        })).then(function() {
                            for (let e of o.scenes) e.updateMatrixWorld();
                            e(o)
                        })
                    }).catch(t)
                }
                _markDefs() {
                    let e = this.json.nodes || [],
                        t = this.json.skins || [],
                        r = this.json.meshes || [];
                    for (let r = 0, i = t.length; r < i; r++) {
                        let i = t[r].joints;
                        for (let t = 0, r = i.length; t < r; t++) e[i[t]].isBone = !0
                    }
                    for (let t = 0, i = e.length; t < i; t++) {
                        let i = e[t];
                        void 0 !== i.mesh && (this._addNodeRef(this.meshCache, i.mesh), void 0 !== i.skin && (r[i.mesh].isSkinnedMesh = !0)), void 0 !== i.camera && this._addNodeRef(this.cameraCache, i.camera)
                    }
                }
                _addNodeRef(e, t) {
                    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
                }
                _getNodeRef(e, t, r) {
                    if (e.refs[t] <= 1) return r;
                    let i = r.clone(),
                        n = (e, t) => {
                            let r = this.associations.get(e);
                            for (let [i, o] of (null != r && this.associations.set(t, r), e.children.entries())) n(o, t.children[i])
                        };
                    return n(r, i), i.name += "_instance_" + e.uses[t]++, i
                }
                _invokeOne(e) {
                    let t = Object.values(this.plugins);
                    t.push(this);
                    for (let r = 0; r < t.length; r++) {
                        let i = e(t[r]);
                        if (i) return i
                    }
                    return null
                }
                _invokeAll(e) {
                    let t = Object.values(this.plugins);
                    t.unshift(this);
                    let r = [];
                    for (let i = 0; i < t.length; i++) {
                        let n = e(t[i]);
                        n && r.push(n)
                    }
                    return r
                }
                getDependency(e, t) {
                    let r = e + ":" + t,
                        i = this.cache.get(r);
                    if (!i) {
                        switch (e) {
                            case "scene":
                                i = this.loadScene(t);
                                break;
                            case "node":
                                i = this._invokeOne(function(e) {
                                    return e.loadNode && e.loadNode(t)
                                });
                                break;
                            case "mesh":
                                i = this._invokeOne(function(e) {
                                    return e.loadMesh && e.loadMesh(t)
                                });
                                break;
                            case "accessor":
                                i = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                i = this._invokeOne(function(e) {
                                    return e.loadBufferView && e.loadBufferView(t)
                                });
                                break;
                            case "buffer":
                                i = this.loadBuffer(t);
                                break;
                            case "material":
                                i = this._invokeOne(function(e) {
                                    return e.loadMaterial && e.loadMaterial(t)
                                });
                                break;
                            case "texture":
                                i = this._invokeOne(function(e) {
                                    return e.loadTexture && e.loadTexture(t)
                                });
                                break;
                            case "skin":
                                i = this.loadSkin(t);
                                break;
                            case "animation":
                                i = this._invokeOne(function(e) {
                                    return e.loadAnimation && e.loadAnimation(t)
                                });
                                break;
                            case "camera":
                                i = this.loadCamera(t);
                                break;
                            default:
                                if (!(i = this._invokeOne(function(r) {
                                        return r != this && r.getDependency && r.getDependency(e, t)
                                    }))) throw Error("Unknown type: " + e)
                        }
                        this.cache.add(r, i)
                    }
                    return i
                }
                getDependencies(e) {
                    let t = this.cache.get(e);
                    if (!t) {
                        let r = this;
                        t = Promise.all((this.json[e + ("mesh" === e ? "es" : "s")] || []).map(function(t, i) {
                            return r.getDependency(e, i)
                        })), this.cache.add(e, t)
                    }
                    return t
                }
                loadBuffer(e) {
                    let t = this.json.buffers[e],
                        r = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[a.KHR_BINARY_GLTF].body);
                    let n = this.options;
                    return new Promise(function(e, o) {
                        r.load(i.r6x.resolveURL(t.uri, n.path), e, void 0, function() {
                            o(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                        })
                    })
                }
                loadBufferView(e) {
                    let t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then(function(e) {
                        let r = t.byteLength || 0,
                            i = t.byteOffset || 0;
                        return e.slice(i, i + r)
                    })
                }
                loadAccessor(e) {
                    let t = this,
                        r = this.json,
                        n = this.json.accessors[e];
                    if (void 0 === n.bufferView && void 0 === n.sparse) {
                        let e = F[n.type],
                            t = D[n.componentType],
                            r = !0 === n.normalized,
                            o = new t(n.count * e);
                        return Promise.resolve(new i.THS(o, e, r))
                    }
                    let o = [];
                    return void 0 !== n.bufferView ? o.push(this.getDependency("bufferView", n.bufferView)) : o.push(null), void 0 !== n.sparse && (o.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(o).then(function(e) {
                        let o, s;
                        let a = e[0],
                            l = F[n.type],
                            c = D[n.componentType],
                            u = c.BYTES_PER_ELEMENT,
                            h = u * l,
                            d = n.byteOffset || 0,
                            p = void 0 !== n.bufferView ? r.bufferViews[n.bufferView].byteStride : void 0,
                            f = !0 === n.normalized;
                        if (p && p !== h) {
                            let e = Math.floor(d / p),
                                r = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + e + ":" + n.count,
                                h = t.cache.get(r);
                            h || (o = new c(a, e * p, n.count * p / u), h = new i.eB$(o, p / u), t.cache.add(r, h)), s = new i.eHs(h, l, d % p / u, f)
                        } else o = null === a ? new c(n.count * l) : new c(a, d, n.count * l), s = new i.THS(o, l, f);
                        if (void 0 !== n.sparse) {
                            let t = F.SCALAR,
                                r = D[n.sparse.indices.componentType],
                                o = n.sparse.indices.byteOffset || 0,
                                u = n.sparse.values.byteOffset || 0,
                                h = new r(e[1], o, n.sparse.count * t),
                                d = new c(e[2], u, n.sparse.count * l);
                            null !== a && (s = new i.THS(s.array.slice(), s.itemSize, s.normalized)), s.normalized = !1;
                            for (let e = 0, t = h.length; e < t; e++) {
                                let t = h[e];
                                if (s.setX(t, d[e * l]), l >= 2 && s.setY(t, d[e * l + 1]), l >= 3 && s.setZ(t, d[e * l + 2]), l >= 4 && s.setW(t, d[e * l + 3]), l >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                            s.normalized = f
                        }
                        return s
                    })
                }
                loadTexture(e) {
                    let t = this.json,
                        r = this.options,
                        i = t.textures[e].source,
                        n = t.images[i],
                        o = this.textureLoader;
                    if (n.uri) {
                        let e = r.manager.getHandler(n.uri);
                        null !== e && (o = e)
                    }
                    return this.loadTextureImage(e, i, o)
                }
                loadTextureImage(e, t, r) {
                    let n = this,
                        o = this.json,
                        s = o.textures[e],
                        a = o.images[t],
                        l = (a.uri || a.bufferView) + ":" + s.sampler;
                    if (this.textureCache[l]) return this.textureCache[l];
                    let c = this.loadImageSource(t, r).then(function(t) {
                        t.flipY = !1, t.name = s.name || a.name || "", "" === t.name && "string" == typeof a.uri && !1 === a.uri.startsWith("data:image/") && (t.name = a.uri);
                        let r = (o.samplers || {})[s.sampler] || {};
                        return t.magFilter = N[r.magFilter] || i.k6q, t.minFilter = N[r.minFilter] || i.$_I, t.wrapS = B[r.wrapS] || i.GJx, t.wrapT = B[r.wrapT] || i.GJx, t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== i.hxR && t.minFilter !== i.k6q, n.associations.set(t, {
                            textures: e
                        }), t
                    }).catch(function() {
                        return null
                    });
                    return this.textureCache[l] = c, c
                }
                loadImageSource(e, t) {
                    let r = this.json,
                        n = this.options;
                    if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then(e => e.clone());
                    let o = r.images[e],
                        s = self.URL || self.webkitURL,
                        a = o.uri || "",
                        l = !1;
                    if (void 0 !== o.bufferView) a = this.getDependency("bufferView", o.bufferView).then(function(e) {
                        l = !0;
                        let t = new Blob([e], {
                            type: o.mimeType
                        });
                        return a = s.createObjectURL(t)
                    });
                    else if (void 0 === o.uri) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    let c = Promise.resolve(a).then(function(e) {
                        return new Promise(function(r, o) {
                            let s = r;
                            !0 === t.isImageBitmapLoader && (s = function(e) {
                                let t = new i.gPd(e);
                                t.needsUpdate = !0, r(t)
                            }), t.load(i.r6x.resolveURL(e, n.path), s, void 0, o)
                        })
                    }).then(function(e) {
                        var t;
                        return !0 === l && s.revokeObjectURL(a), X(e, o), e.userData.mimeType = o.mimeType || ((t = o.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : t.search(/\.ktx2($|\?)/i) > 0 || 0 === t.search(/^data\:image\/ktx2/) ? "image/ktx2" : "image/png"), e
                    }).catch(function(e) {
                        throw console.error("THREE.GLTFLoader: Couldn't load texture", a), e
                    });
                    return this.sourceCache[e] = c, c
                }
                assignTexture(e, t, r, i) {
                    let n = this;
                    return this.getDependency("texture", r.index).then(function(o) {
                        if (!o) return null;
                        if (void 0 !== r.texCoord && r.texCoord > 0 && ((o = o.clone()).channel = r.texCoord), n.extensions[a.KHR_TEXTURE_TRANSFORM]) {
                            let e = void 0 !== r.extensions ? r.extensions[a.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (e) {
                                let t = n.associations.get(o);
                                o = n.extensions[a.KHR_TEXTURE_TRANSFORM].extendTexture(o, e), n.associations.set(o, t)
                            }
                        }
                        return void 0 !== i && (o.colorSpace = i), e[t] = o, o
                    })
                }
                assignFinalMaterial(e) {
                    let t = e.geometry,
                        r = e.material,
                        n = void 0 === t.attributes.tangent,
                        o = void 0 !== t.attributes.color,
                        s = void 0 === t.attributes.normal;
                    if (e.isPoints) {
                        let e = "PointsMaterial:" + r.uuid,
                            t = this.cache.get(e);
                        t || (t = new i.BH$, i.imn.prototype.copy.call(t, r), t.color.copy(r.color), t.map = r.map, t.sizeAttenuation = !1, this.cache.add(e, t)), r = t
                    } else if (e.isLine) {
                        let e = "LineBasicMaterial:" + r.uuid,
                            t = this.cache.get(e);
                        t || (t = new i.mrM, i.imn.prototype.copy.call(t, r), t.color.copy(r.color), t.map = r.map, this.cache.add(e, t)), r = t
                    }
                    if (n || o || s) {
                        let e = "ClonedMaterial:" + r.uuid + ":";
                        n && (e += "derivative-tangents:"), o && (e += "vertex-colors:"), s && (e += "flat-shading:");
                        let t = this.cache.get(e);
                        t || (t = r.clone(), o && (t.vertexColors = !0), s && (t.flatShading = !0), n && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(r))), r = t
                    }
                    e.material = r
                }
                getMaterialType() {
                    return i._4j
                }
                loadMaterial(e) {
                    let t;
                    let r = this,
                        n = this.json,
                        o = this.extensions,
                        s = n.materials[e],
                        l = {},
                        c = s.extensions || {},
                        u = [];
                    if (c[a.KHR_MATERIALS_UNLIT]) {
                        let e = o[a.KHR_MATERIALS_UNLIT];
                        t = e.getMaterialType(), u.push(e.extendParams(l, s, r))
                    } else {
                        let n = s.pbrMetallicRoughness || {};
                        if (l.color = new i.Q1f(1, 1, 1), l.opacity = 1, Array.isArray(n.baseColorFactor)) {
                            let e = n.baseColorFactor;
                            l.color.setRGB(e[0], e[1], e[2], i.Zr2), l.opacity = e[3]
                        }
                        void 0 !== n.baseColorTexture && u.push(r.assignTexture(l, "map", n.baseColorTexture, i.er$)), l.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1, l.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1, void 0 !== n.metallicRoughnessTexture && (u.push(r.assignTexture(l, "metalnessMap", n.metallicRoughnessTexture)), u.push(r.assignTexture(l, "roughnessMap", n.metallicRoughnessTexture))), t = this._invokeOne(function(t) {
                            return t.getMaterialType && t.getMaterialType(e)
                        }), u.push(Promise.all(this._invokeAll(function(t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, l)
                        })))
                    }!0 === s.doubleSided && (l.side = i.$EB);
                    let h = s.alphaMode || G.OPAQUE;
                    if (h === G.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, h === G.MASK && (l.alphaTest = void 0 !== s.alphaCutoff ? s.alphaCutoff : .5)), void 0 !== s.normalTexture && t !== i.V9B && (u.push(r.assignTexture(l, "normalMap", s.normalTexture)), l.normalScale = new i.I9Y(1, 1), void 0 !== s.normalTexture.scale)) {
                        let e = s.normalTexture.scale;
                        l.normalScale.set(e, e)
                    }
                    if (void 0 !== s.occlusionTexture && t !== i.V9B && (u.push(r.assignTexture(l, "aoMap", s.occlusionTexture)), void 0 !== s.occlusionTexture.strength && (l.aoMapIntensity = s.occlusionTexture.strength)), void 0 !== s.emissiveFactor && t !== i.V9B) {
                        let e = s.emissiveFactor;
                        l.emissive = new i.Q1f().setRGB(e[0], e[1], e[2], i.Zr2)
                    }
                    return void 0 !== s.emissiveTexture && t !== i.V9B && u.push(r.assignTexture(l, "emissiveMap", s.emissiveTexture, i.er$)), Promise.all(u).then(function() {
                        let i = new t(l);
                        return s.name && (i.name = s.name), X(i, s), r.associations.set(i, {
                            materials: e
                        }), s.extensions && W(o, i, s), i
                    })
                }
                createUniqueName(e) {
                    let t = i.Nwf.sanitizeNodeName(e || "");
                    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t)
                }
                loadGeometries(e) {
                    let t = this,
                        r = this.extensions,
                        n = this.primitiveCache,
                        o = [];
                    for (let s = 0, l = e.length; s < l; s++) {
                        let l = e[s],
                            c = function(e) {
                                let t;
                                let r = e.extensions && e.extensions[a.KHR_DRACO_MESH_COMPRESSION];
                                if (t = r ? "draco:" + r.bufferView + ":" + r.indices + ":" + Y(r.attributes) : e.indices + ":" + Y(e.attributes) + ":" + e.mode, void 0 !== e.targets)
                                    for (let r = 0, i = e.targets.length; r < i; r++) t += ":" + Y(e.targets[r]);
                                return t
                            }(l),
                            u = n[c];
                        if (u) o.push(u.promise);
                        else {
                            let e;
                            e = l.extensions && l.extensions[a.KHR_DRACO_MESH_COMPRESSION] ? function(e) {
                                return r[a.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(r) {
                                    return K(r, e, t)
                                })
                            }(l) : K(new i.LoY, l, t), n[c] = {
                                primitive: l,
                                promise: e
                            }, o.push(e)
                        }
                    }
                    return Promise.all(o)
                }
                loadMesh(e) {
                    let t = this,
                        r = this.json,
                        o = this.extensions,
                        s = r.meshes[e],
                        a = s.primitives,
                        l = [];
                    for (let e = 0, t = a.length; e < t; e++) {
                        var c;
                        let t = void 0 === a[e].material ? (void 0 === (c = this.cache).DefaultMaterial && (c.DefaultMaterial = new i._4j({
                            color: 0xffffff,
                            emissive: 0,
                            metalness: 1,
                            roughness: 1,
                            transparent: !1,
                            depthTest: !0,
                            side: i.hB5
                        })), c.DefaultMaterial) : this.getDependency("material", a[e].material);
                        l.push(t)
                    }
                    return l.push(t.loadGeometries(a)), Promise.all(l).then(function(r) {
                        let l = r.slice(0, r.length - 1),
                            c = r[r.length - 1],
                            u = [];
                        for (let r = 0, h = c.length; r < h; r++) {
                            let h;
                            let d = c[r],
                                p = a[r],
                                f = l[r];
                            if (p.mode === P.TRIANGLES || p.mode === P.TRIANGLE_STRIP || p.mode === P.TRIANGLE_FAN || void 0 === p.mode) !0 === (h = !0 === s.isSkinnedMesh ? new i.I46(d, f) : new i.eaF(d, f)).isSkinnedMesh && h.normalizeSkinWeights(), p.mode === P.TRIANGLE_STRIP ? h.geometry = n(h.geometry, i.O49) : p.mode === P.TRIANGLE_FAN && (h.geometry = n(h.geometry, i.rYR));
                            else if (p.mode === P.LINES) h = new i.DXC(d, f);
                            else if (p.mode === P.LINE_STRIP) h = new i.N1A(d, f);
                            else if (p.mode === P.LINE_LOOP) h = new i.FCc(d, f);
                            else if (p.mode === P.POINTS) h = new i.ONl(d, f);
                            else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
                            Object.keys(h.geometry.morphAttributes).length > 0 && function(e, t) {
                                if (e.updateMorphTargets(), void 0 !== t.weights)
                                    for (let r = 0, i = t.weights.length; r < i; r++) e.morphTargetInfluences[r] = t.weights[r];
                                if (t.extras && Array.isArray(t.extras.targetNames)) {
                                    let r = t.extras.targetNames;
                                    if (e.morphTargetInfluences.length === r.length) {
                                        e.morphTargetDictionary = {};
                                        for (let t = 0, i = r.length; t < i; t++) e.morphTargetDictionary[r[t]] = t
                                    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                                }
                            }(h, s), h.name = t.createUniqueName(s.name || "mesh_" + e), X(h, s), p.extensions && W(o, h, p), t.assignFinalMaterial(h), u.push(h)
                        }
                        for (let r = 0, i = u.length; r < i; r++) t.associations.set(u[r], {
                            meshes: e,
                            primitives: r
                        });
                        if (1 === u.length) return s.extensions && W(o, u[0], s), u[0];
                        let h = new i.YJl;
                        s.extensions && W(o, h, s), t.associations.set(h, {
                            meshes: e
                        });
                        for (let e = 0, t = u.length; e < t; e++) h.add(u[e]);
                        return h
                    })
                }
                loadCamera(e) {
                    let t;
                    let r = this.json.cameras[e],
                        n = r[r.type];
                    if (!n) {
                        console.warn("THREE.GLTFLoader: Missing camera parameters.");
                        return
                    }
                    return "perspective" === r.type ? t = new i.ubm(i.cj9.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === r.type && (t = new i.qUd(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), r.name && (t.name = this.createUniqueName(r.name)), X(t, r), Promise.resolve(t)
                }
                loadSkin(e) {
                    let t = this.json.skins[e],
                        r = [];
                    for (let e = 0, i = t.joints.length; e < i; e++) r.push(this._loadNodeShallow(t.joints[e]));
                    return void 0 !== t.inverseBindMatrices ? r.push(this.getDependency("accessor", t.inverseBindMatrices)) : r.push(null), Promise.all(r).then(function(e) {
                        let r = e.pop(),
                            n = [],
                            o = [];
                        for (let s = 0, a = e.length; s < a; s++) {
                            let a = e[s];
                            if (a) {
                                n.push(a);
                                let e = new i.kn4;
                                null !== r && e.fromArray(r.array, 16 * s), o.push(e)
                            } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[s])
                        }
                        return new i.EAD(n, o)
                    })
                }
                loadAnimation(e) {
                    let t = this.json,
                        r = this,
                        n = t.animations[e],
                        o = n.name ? n.name : "animation_" + e,
                        s = [],
                        a = [],
                        l = [],
                        c = [],
                        u = [];
                    for (let e = 0, t = n.channels.length; e < t; e++) {
                        let t = n.channels[e],
                            r = n.samplers[t.sampler],
                            i = t.target,
                            o = i.node,
                            h = void 0 !== n.parameters ? n.parameters[r.input] : r.input,
                            d = void 0 !== n.parameters ? n.parameters[r.output] : r.output;
                        void 0 !== i.node && (s.push(this.getDependency("node", o)), a.push(this.getDependency("accessor", h)), l.push(this.getDependency("accessor", d)), c.push(r), u.push(i))
                    }
                    return Promise.all([Promise.all(s), Promise.all(a), Promise.all(l), Promise.all(c), Promise.all(u)]).then(function(e) {
                        let t = e[0],
                            n = e[1],
                            s = e[2],
                            a = e[3],
                            l = e[4],
                            c = [];
                        for (let e = 0, i = t.length; e < i; e++) {
                            let i = t[e],
                                o = n[e],
                                u = s[e],
                                h = a[e],
                                d = l[e];
                            if (void 0 === i) continue;
                            i.updateMatrix && i.updateMatrix();
                            let p = r._createAnimationTracks(i, o, u, h, d);
                            if (p)
                                for (let e = 0; e < p.length; e++) c.push(p[e])
                        }
                        return new i.tz3(o, void 0, c)
                    })
                }
                createNodeMesh(e) {
                    let t = this.json,
                        r = this,
                        i = t.nodes[e];
                    return void 0 === i.mesh ? null : r.getDependency("mesh", i.mesh).then(function(e) {
                        let t = r._getNodeRef(r.meshCache, i.mesh, e);
                        return void 0 !== i.weights && t.traverse(function(e) {
                            if (e.isMesh)
                                for (let t = 0, r = i.weights.length; t < r; t++) e.morphTargetInfluences[t] = i.weights[t]
                        }), t
                    })
                }
                loadNode(e) {
                    let t = this.json.nodes[e],
                        r = this._loadNodeShallow(e),
                        i = [],
                        n = t.children || [];
                    for (let e = 0, t = n.length; e < t; e++) i.push(this.getDependency("node", n[e]));
                    let o = void 0 === t.skin ? Promise.resolve(null) : this.getDependency("skin", t.skin);
                    return Promise.all([r, Promise.all(i), o]).then(function(e) {
                        let t = e[0],
                            r = e[1],
                            i = e[2];
                        null !== i && t.traverse(function(e) {
                            e.isSkinnedMesh && e.bind(i, V)
                        });
                        for (let e = 0, i = r.length; e < i; e++) t.add(r[e]);
                        return t
                    })
                }
                _loadNodeShallow(e) {
                    let t = this.json,
                        r = this.extensions,
                        n = this;
                    if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
                    let o = t.nodes[e],
                        s = o.name ? n.createUniqueName(o.name) : "",
                        a = [],
                        l = n._invokeOne(function(t) {
                            return t.createNodeMesh && t.createNodeMesh(e)
                        });
                    return l && a.push(l), void 0 !== o.camera && a.push(n.getDependency("camera", o.camera).then(function(e) {
                        return n._getNodeRef(n.cameraCache, o.camera, e)
                    })), n._invokeAll(function(t) {
                        return t.createNodeAttachment && t.createNodeAttachment(e)
                    }).forEach(function(e) {
                        a.push(e)
                    }), this.nodeCache[e] = Promise.all(a).then(function(t) {
                        let a;
                        if ((a = !0 === o.isBone ? new i.$Kf : t.length > 1 ? new i.YJl : 1 === t.length ? t[0] : new i.B69) !== t[0])
                            for (let e = 0, r = t.length; e < r; e++) a.add(t[e]);
                        if (o.name && (a.userData.name = o.name, a.name = s), X(a, o), o.extensions && W(r, a, o), void 0 !== o.matrix) {
                            let e = new i.kn4;
                            e.fromArray(o.matrix), a.applyMatrix4(e)
                        } else void 0 !== o.translation && a.position.fromArray(o.translation), void 0 !== o.rotation && a.quaternion.fromArray(o.rotation), void 0 !== o.scale && a.scale.fromArray(o.scale);
                        return n.associations.has(a) || n.associations.set(a, {}), n.associations.get(a).nodes = e, a
                    }), this.nodeCache[e]
                }
                loadScene(e) {
                    let t = this.extensions,
                        r = this.json.scenes[e],
                        n = this,
                        o = new i.YJl;
                    r.name && (o.name = n.createUniqueName(r.name)), X(o, r), r.extensions && W(t, o, r);
                    let s = r.nodes || [],
                        a = [];
                    for (let e = 0, t = s.length; e < t; e++) a.push(n.getDependency("node", s[e]));
                    return Promise.all(a).then(function(e) {
                        for (let t = 0, r = e.length; t < r; t++) o.add(e[t]);
                        return n.associations = (e => {
                            let t = new Map;
                            for (let [e, r] of n.associations)(e instanceof i.imn || e instanceof i.gPd) && t.set(e, r);
                            return e.traverse(e => {
                                let r = n.associations.get(e);
                                null != r && t.set(e, r)
                            }), t
                        })(o), o
                    })
                }
                _createAnimationTracks(e, t, r, n, o) {
                    let s;
                    let a = [],
                        l = e.name ? e.name : e.uuid,
                        c = [];
                    switch (U[o.path] === U.weights ? e.traverse(function(e) {
                        e.morphTargetInfluences && c.push(e.name ? e.name : e.uuid)
                    }) : c.push(l), U[o.path]) {
                        case U.weights:
                            s = i.Hit;
                            break;
                        case U.rotation:
                            s = i.MBL;
                            break;
                        case U.translation:
                        case U.scale:
                            s = i.RiT;
                            break;
                        default:
                            s = 1 === r.itemSize ? i.Hit : i.RiT
                    }
                    let u = void 0 !== n.interpolation ? H[n.interpolation] : i.PJ3,
                        h = this._getArrayFromAccessor(r);
                    for (let e = 0, r = c.length; e < r; e++) {
                        let r = new s(c[e] + "." + U[o.path], t.array, h, u);
                        "CUBICSPLINE" === n.interpolation && this._createCubicSplineTrackInterpolant(r), a.push(r)
                    }
                    return a
                }
                _getArrayFromAccessor(e) {
                    let t = e.array;
                    if (e.normalized) {
                        let e = q(t.constructor),
                            r = new Float32Array(t.length);
                        for (let i = 0, n = t.length; i < n; i++) r[i] = t[i] * e;
                        t = r
                    }
                    return t
                }
                _createCubicSplineTrackInterpolant(e) {
                    e.createInterpolant = function(e) {
                        return new(this instanceof i.MBL ? L : I)(this.times, this.values, this.getValueSize() / 3, e)
                    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
                }
            }

            function K(e, t, r) {
                let n = t.attributes,
                    o = [];
                for (let t in n) {
                    let i = z[t] || t.toLowerCase();
                    i in e.attributes || o.push(function(t, i) {
                        return r.getDependency("accessor", t).then(function(t) {
                            e.setAttribute(i, t)
                        })
                    }(n[t], i))
                }
                if (void 0 !== t.indices && !e.index) {
                    let i = r.getDependency("accessor", t.indices).then(function(t) {
                        e.setIndex(t)
                    });
                    o.push(i)
                }
                return i.ppV.workingColorSpace !== i.Zr2 && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${i.ppV.workingColorSpace}" not supported.`), X(e, t), ! function(e, t, r) {
                    let n = t.attributes,
                        o = new i.NRn;
                    if (void 0 === n.POSITION) return; {
                        let e = r.json.accessors[n.POSITION],
                            t = e.min,
                            s = e.max;
                        if (void 0 !== t && void 0 !== s) {
                            if (o.set(new i.Pq0(t[0], t[1], t[2]), new i.Pq0(s[0], s[1], s[2])), e.normalized) {
                                let t = q(D[e.componentType]);
                                o.min.multiplyScalar(t), o.max.multiplyScalar(t)
                            }
                        } else {
                            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                            return
                        }
                    }
                    let s = t.targets;
                    if (void 0 !== s) {
                        let e = new i.Pq0,
                            t = new i.Pq0;
                        for (let i = 0, n = s.length; i < n; i++) {
                            let n = s[i];
                            if (void 0 !== n.POSITION) {
                                let i = r.json.accessors[n.POSITION],
                                    o = i.min,
                                    s = i.max;
                                if (void 0 !== o && void 0 !== s) {
                                    if (t.setX(Math.max(Math.abs(o[0]), Math.abs(s[0]))), t.setY(Math.max(Math.abs(o[1]), Math.abs(s[1]))), t.setZ(Math.max(Math.abs(o[2]), Math.abs(s[2]))), i.normalized) {
                                        let e = q(D[i.componentType]);
                                        t.multiplyScalar(e)
                                    }
                                    e.max(t)
                                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                            }
                        }
                        o.expandByVector(e)
                    }
                    e.boundingBox = o;
                    let a = new i.iyt;
                    o.getCenter(a.center), a.radius = o.min.distanceTo(o.max) / 2, e.boundingSphere = a
                }(e, t, r), Promise.all(o).then(function() {
                    return void 0 !== t.targets ? function(e, t, r) {
                        let i = !1,
                            n = !1,
                            o = !1;
                        for (let e = 0, r = t.length; e < r; e++) {
                            let r = t[e];
                            if (void 0 !== r.POSITION && (i = !0), void 0 !== r.NORMAL && (n = !0), void 0 !== r.COLOR_0 && (o = !0), i && n && o) break
                        }
                        if (!i && !n && !o) return Promise.resolve(e);
                        let s = [],
                            a = [],
                            l = [];
                        for (let c = 0, u = t.length; c < u; c++) {
                            let u = t[c];
                            if (i) {
                                let t = void 0 !== u.POSITION ? r.getDependency("accessor", u.POSITION) : e.attributes.position;
                                s.push(t)
                            }
                            if (n) {
                                let t = void 0 !== u.NORMAL ? r.getDependency("accessor", u.NORMAL) : e.attributes.normal;
                                a.push(t)
                            }
                            if (o) {
                                let t = void 0 !== u.COLOR_0 ? r.getDependency("accessor", u.COLOR_0) : e.attributes.color;
                                l.push(t)
                            }
                        }
                        return Promise.all([Promise.all(s), Promise.all(a), Promise.all(l)]).then(function(t) {
                            let r = t[0],
                                s = t[1],
                                a = t[2];
                            return i && (e.morphAttributes.position = r), n && (e.morphAttributes.normal = s), o && (e.morphAttributes.color = a), e.morphTargetsRelative = !0, e
                        })
                    }(e, t.targets, r) : e
                })
            }
        },
        9399: (e, t, r) => {
            "use strict";
            var i = r(2948);

            function n() {}

            function o() {}
            o.resetWarningCache = n, e.exports = function() {
                function e(e, t, r, n, o, s) {
                    if (s !== i) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: n
                };
                return r.PropTypes = r, r
            }
        },
        9829: (e, t, r) => {
            "use strict";
            r.d(t, {
                useStoryblokState: () => o
            });
            var i = r(2115),
                n = r(554);
            let o = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    [r, o] = (0, i.useState)(e),
                    s = (null == e ? void 0 : e.id) ? ? 0,
                    a = "u" > typeof window && "u" > typeof window.storyblokRegisterEvent;
                return (0, i.useEffect)(() => {
                    o(e), a && e && (0, n.Kk)(s, e => o(e), t)
                }, [e]), r
            }
        },
        9991: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                DecodeError: function() {
                    return f
                },
                MiddlewareNotFoundError: function() {
                    return y
                },
                MissingStaticPage: function() {
                    return v
                },
                NormalizeError: function() {
                    return m
                },
                PageNotFoundError: function() {
                    return g
                },
                SP: function() {
                    return d
                },
                ST: function() {
                    return p
                },
                WEB_VITALS: function() {
                    return r
                },
                execOnce: function() {
                    return i
                },
                getDisplayName: function() {
                    return l
                },
                getLocationOrigin: function() {
                    return s
                },
                getURL: function() {
                    return a
                },
                isAbsoluteUrl: function() {
                    return o
                },
                isResSent: function() {
                    return c
                },
                loadGetInitialProps: function() {
                    return h
                },
                normalizeRepeatedSlashes: function() {
                    return u
                },
                stringifyError: function() {
                    return b
                }
            });
            let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function i(e) {
                let t, r = !1;
                return function() {
                    for (var i = arguments.length, n = Array(i), o = 0; o < i; o++) n[o] = arguments[o];
                    return r || (r = !0, t = e(...n)), t
                }
            }
            let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                o = e => n.test(e);

            function s() {
                let {
                    protocol: e,
                    hostname: t,
                    port: r
                } = window.location;
                return e + "//" + t + (r ? ":" + r : "")
            }

            function a() {
                let {
                    href: e
                } = window.location, t = s();
                return e.substring(t.length)
            }

            function l(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function c(e) {
                return e.finished || e.headersSent
            }

            function u(e) {
                let t = e.split("?");
                return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }
            async function h(e, t) {
                let r = t.res || t.ctx && t.ctx.res;
                if (!e.getInitialProps) return t.ctx && t.Component ? {
                    pageProps: await h(t.Component, t.ctx)
                } : {};
                let i = await e.getInitialProps(t);
                if (r && c(r)) return i;
                if (!i) throw Object.defineProperty(Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + i + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
                return i
            }
            let d = "undefined" != typeof performance,
                p = d && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
            class f extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(e) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
                }
            }
            class v extends Error {
                constructor(e, t) {
                    super(), this.message = "Failed to load static file for page: " + e + " " + t
                }
            }
            class y extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function b(e) {
                return JSON.stringify({
                    message: e.message,
                    stack: e.stack
                })
            }
        }
    }
]);