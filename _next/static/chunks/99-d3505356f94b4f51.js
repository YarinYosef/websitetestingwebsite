(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [99], {
        12: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => x
            });
            var s = r(5155),
                n = r(2115),
                l = r(6766),
                i = r(2071),
                a = r.n(i),
                o = r(9300),
                c = r.n(o);
            let d = e => {
                let {
                    image: t,
                    active: r
                } = e;
                return (0, s.jsx)("div", {
                    className: c()(a().quoteItemImage, {
                        [a().visible]: r
                    }),
                    children: !!t && (0, s.jsx)(l.default, {
                        src: t.filename,
                        alt: "",
                        width: 800,
                        height: 800,
                        className: a().image
                    })
                })
            };
            var u = r(7746),
                h = r.n(u),
                m = r(5921),
                f = r(6341),
                _ = r(3264),
                p = r(3461);
            let x = e => {
                let {
                    blok: t
                } = e, [r, l] = (0, n.useState)(!1), i = (0, n.useRef)(null), {
                    scroll: a
                } = (0, n.useContext)(f.z), [o, u] = (0, n.useState)(!1), [x, g] = (0, n.useState)(!1), v = (0, n.useRef)(null), C = (0, n.useRef)([]), w = (0, n.useRef)(null), j = (0, n.useRef)(0), L = (0, n.useRef)(0), y = (0, n.useRef)(0), [b, M] = (0, n.useState)(null);
                return (0, n.useEffect)(() => {
                    M((0, p.A)().any)
                }, []), (0, n.useEffect)(() => {
                    let e = i.current;
                    if (!e) return;
                    let t = () => {
                        let r = _.cj9.lerp(L.current, y.current, .5);
                        e.x = (e.x + .75 + r) % e.slideableWidth, e.positionSlider(), w.current = requestAnimationFrame(t)
                    };
                    return x && !1 === b && (w.current = requestAnimationFrame(t)), () => {
                        cancelAnimationFrame(w.current)
                    }
                }, [x, b]), (0, n.useEffect)(() => {
                    let e = i.current;
                    if (!e) return;
                    let r = () => {
                        e.select(t.quotes.length), e.reposition()
                    };
                    return e.on("ready", r), () => {
                        e.off("ready", r)
                    }
                }, [r, t.quotes.length]), (0, n.useEffect)(() => {
                    let e = e => {
                        let t = v.current;
                        if (!t) return;
                        let r = window.innerHeight,
                            {
                                top: s,
                                height: n
                            } = t.getBoundingClientRect(),
                            l = (s + n / 2 - r / 2) / r;
                        g(l > -1 && l < 1);
                        let i = 0;
                        u(Math.min(Math.max(l < .5 ? l / .2 : 1.2 - (l - 1) / .2, 0), 1) > 0), t.style.setProperty("--y", l.toFixed(3));
                        let a = Math.abs(e.scroll - j.current);
                        j.current = e.scroll, L.current = +Math.min(a, 20)
                    };
                    return a && e(a), a ? .on("scroll", e), () => {
                        a ? .off("scroll", e)
                    }
                }, [a]), (0, s.jsx)("div", {
                    className: c()(h().client, {
                        [h().visible]: o
                    }),
                    ref: v,
                    children: (0, s.jsx)("div", {
                        className: h().fixed,
                        children: (0, s.jsx)("div", {
                            className: h().container,
                            children: (0, s.jsxs)(m.A, {
                                className: "flickity",
                                options: {
                                    pageDots: !1,
                                    prevNextButtons: !1,
                                    freeScroll: !0,
                                    wrapAround: !0
                                },
                                flickityRef: e => {
                                    l(!0), i.current = e
                                },
                                children: [
                                    [...t.quotes].reverse().map((e, t) => (0, s.jsx)("div", {
                                        ref: e => {
                                            C.current[t] = e
                                        },
                                        className: h().item,
                                        children: (0, n.createElement)(d, { ...e,
                                            active: !0,
                                            key: e._uid
                                        })
                                    }, t)), [...t.quotes].reverse().map((e, t) => (0, s.jsx)("div", {
                                        className: h().item,
                                        children: (0, n.createElement)(d, { ...e,
                                            active: !0,
                                            key: e._uid
                                        })
                                    }, t))
                                ]
                            })
                        })
                    })
                })
            }
        },
        28: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => _,
                CurtainContextProvider: () => p
            });
            var s = r(5155),
                n = r(9300),
                l = r.n(n),
                i = r(1861),
                a = r.n(i),
                o = r(2475),
                c = r(8664);
            let d = e => {
                let { ...t
                } = e;
                return (0, s.jsx)("svg", {
                    viewBox: "0 0 183 215",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...t,
                    children: (0, s.jsx)("path", {
                        d: "M75.0256 0.632233V76.5834L75.9592 74.9516L118.507 0.632233H160.239L128.519 106.366H97.1428L96.9192 107.313L181.799 149.752L139.519 213.303L75.9065 138.748L75.0256 137.717V191.752H1.48462L26.9075 107.009L27.1008 106.366H1.48462L33.2043 0.632233H75.0256Z",
                        stroke: "#F6FF0D"
                    })
                })
            };
            var u = r(3646);
            let h = e => {
                let {
                    open: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: l()(a().curtain),
                    children: [(0, s.jsx)(o.A, {
                        c: c.o.BLUE02,
                        d: .4 * !!t,
                        rotated: !0,
                        open: !t
                    }), (0, s.jsx)(o.A, {
                        c: c.o.BLUE02,
                        d: t ? .1 : .5,
                        open: !t
                    }), (0, s.jsx)(o.A, {
                        c: c.o.BLUE03,
                        d: .2 + .1,
                        rotated: !0,
                        open: !t
                    }), (0, s.jsx)(o.A, {
                        c: c.o.BLUE03,
                        d: .2 + .1,
                        open: !t
                    }), (0, s.jsx)(o.A, {
                        c: c.o.INK,
                        d: t ? .5 : .1,
                        rotated: !0,
                        open: !t
                    }), (0, s.jsx)(o.A, {
                        c: c.o.INK,
                        d: t ? .5 : .1,
                        open: !t
                    }), (0, s.jsxs)("div", {
                        className: l()(a().logo, {
                            [a().open]: t
                        }),
                        children: [(0, s.jsx)(u.A, {
                            className: a().logoLogo
                        }), (0, s.jsx)(d, {
                            className: a().logoOutline
                        }), (0, s.jsx)(d, {
                            className: a().logoOutline,
                            "data-index": "2"
                        }), (0, s.jsx)(d, {
                            className: a().logoOutline,
                            "data-index": "3"
                        })]
                    })]
                })
            };
            var m = r(5695),
                f = r(2115);
            let _ = (0, f.createContext)({
                    open: !1,
                    setOpen: () => {}
                }),
                p = e => {
                    let {
                        children: t
                    } = e, [r, n] = (0, f.useState)(!1), l = (0, m.usePathname)();
                    return (0, f.useEffect)(() => {
                        n(!1)
                    }, [l]), (0, s.jsxs)(_.Provider, {
                        value: {
                            open: r,
                            setOpen: n
                        },
                        children: [(0, s.jsx)(h, {
                            open: r
                        }), t]
                    })
                }
        },
        110: e => {
            e.exports = {
                divider: "divider_divider__UVJrV",
                client: "divider_client__5PI_j",
                fixed: "divider_fixed__oozTH",
                inner: "divider_inner__qqtuR"
            }
        },
        374: e => {
            e.exports = {
                newsletter: "newsletter_newsletter__6FBXt",
                inner: "newsletter_inner__q6jTS",
                button: "newsletter_button__f32ZU",
                visible: "newsletter_visible__97uKw"
            }
        },
        454: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => w
            });
            var s = r(5155),
                n = r(2115),
                l = r(9573),
                i = r(2880),
                a = r.n(i),
                o = r(1043),
                c = r.n(o),
                d = r(6341),
                u = r(9300),
                h = r.n(u),
                m = r(5753),
                f = r(991),
                _ = r.n(f);
            let p = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        className: t.className,
                        children: (0, s.jsx)("path", {
                            d: "M14.8072 0.755859H10.3085L13.6685 11.9532L7.30983 0.755859H2.8125L6.18583 11.9999L2.8125 23.2439H7.30983L13.6685 12.0465L10.3085 23.2439H14.8072L21.1912 11.9999L14.8072 0.755859Z",
                            fill: "currentColor"
                        })
                    })
                },
                x = e => {
                    let {
                        active: t,
                        index: r,
                        onClick: i,
                        title: a,
                        text: o,
                        visible: d,
                        isMobile: u
                    } = e, [m, f] = (0, n.useState)(0), x = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        let e = () => {
                            let e = x.current;
                            e && f(e.clientHeight)
                        };
                        return e(), window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), (0, s.jsxs)("div", {
                        className: h()(_().flywheelItem, {
                            [_().active]: t,
                            [_().visible]: d,
                            [_().isMobile]: u
                        }),
                        onClick: () => i(r),
                        children: [(0, s.jsxs)("div", {
                            className: _().title,
                            children: [(0, s.jsx)(p, {
                                className: _().icon
                            }), (0, s.jsx)(l.default, {
                                tag: "p",
                                visible: d,
                                className: h()(c().h4, _().headline),
                                children: a
                            })]
                        }), (0, s.jsx)("div", {
                            className: _().text,
                            style: {
                                height: t ? `${m}px` : 0
                            },
                            children: (0, s.jsx)("p", {
                                className: c().p,
                                ref: x,
                                children: o
                            })
                        })]
                    })
                };
            var g = r(4673),
                v = r(4460),
                C = r(6577);
            let w = e => {
                let t = (0, n.useRef)(null),
                    r = (0, n.useRef)(null),
                    [i, o] = (0, n.useState)(!1),
                    {
                        scroll: u
                    } = (0, n.useContext)(d.z),
                    [f, _] = (0, n.useState)(-1),
                    p = (0, v.N)(C.qp);
                return (0, n.useEffect)(() => {
                    let e = () => {
                        let e = t.current,
                            s = r.current;
                        if (!e || !s || !s.children) return;
                        let n = window.innerHeight,
                            l = -1,
                            i = Array.from(s.children);
                        if (i.forEach((e, t) => {
                                let {
                                    top: r,
                                    height: s
                                } = e.getBoundingClientRect();
                                r < n / 2 + s / 2 && r > n / 2 - s / 2 && (l = t)
                            }), -1 === l) {
                            let {
                                top: t
                            } = i[0].getBoundingClientRect();
                            t < 0 && e.getBoundingClientRect().bottom > n && (l = i.length - 1)
                        }
                        if (p) {
                            let {
                                top: t
                            } = e.getBoundingClientRect();
                            o(t < n)
                        } else _(l), o(-1 !== l)
                    };
                    return u ? .on("scroll", e), () => {
                        u ? .off("scroll", e)
                    }
                }, [u, p]), (0, s.jsxs)("div", {
                    className: h()(a().client, {
                        [a().visible]: i,
                        [a().isMobile]: p
                    }),
                    id: "flywheel",
                    ref: t,
                    children: [(0, s.jsx)("div", {
                        className: a().container,
                        children: (0, s.jsxs)("div", {
                            className: a().header,
                            children: [(0, s.jsx)(m.Ay, {
                                p: "tl",
                                className: a().headerCorner
                            }), (0, s.jsx)(l.default, {
                                tag: "h2",
                                className: h()(c().h2),
                                visible: i,
                                children: e.title
                            }), (0, s.jsx)("div", {
                                className: a().items,
                                children: e.items.map((e, t) => (0, n.createElement)(x, { ...e,
                                    active: p ? i : t === f,
                                    index: t,
                                    isMobile: p,
                                    key: t,
                                    onClick: e => _(f === e ? -1 : e),
                                    visible: i
                                }))
                            }), !!e.blogLink ? .cached_url && (0, s.jsx)(g.default, {
                                href: e.blogLink ? .cached_url,
                                className: h()(a().blogLink, c().link),
                                children: (0, s.jsx)(s.Fragment, {
                                    children: "read the announcement blog"
                                })
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: a().wrapper,
                        children: (0, s.jsx)("div", {
                            className: a().fakeItems,
                            id: "flywheelItems",
                            ref: r,
                            children: e.items.map((e, t) => (0, s.jsx)("div", {
                                className: a().fakeItem
                            }, t))
                        })
                    }), (0, s.jsx)("div", {
                        className: a().lower,
                        id: "flywheelWheel"
                    })]
                })
            }
        },
        642: e => {
            e.exports = {
                roadmap: "roadmap_roadmap__bK2Wa",
                container: "roadmap_container__tOwrb",
                header: "roadmap_header__QQQ5_",
                headerCross: "roadmap_headerCross__zJ66B",
                visible: "roadmap_visible__DOpgp",
                blockIntro: "roadmap_blockIntro__KXinU",
                blockItem: "roadmap_blockItem__kW_rU",
                blockOutro: "roadmap_blockOutro__45ZeJ",
                cross: "roadmap_cross__lEo0Z",
                roadmapItem: "roadmap_roadmapItem__TogBK",
                inner: "roadmap_inner__nYFJU",
                box: "roadmap_box__Py9Iv",
                head: "roadmap_head__pzmAM",
                headIcon: "roadmap_headIcon__dLI5x",
                headIconIcon: "roadmap_headIconIcon__me2Yd",
                headTitle: "roadmap_headTitle___tmZo",
                headTitleTitle: "roadmap_headTitleTitle__CNkWx",
                text: "roadmap_text__9ZNeV",
                textText: "roadmap_textText__JxWfy",
                timeline: "roadmap_timeline__398Hi",
                timelineLabel: "roadmap_timelineLabel__e1Bux",
                active: "roadmap_active__WYTDH"
            }
        },
        761: e => {
            e.exports = {
                corner: "corner_corner__e41Zg",
                tl: "corner_tl__aR2sf",
                tr: "corner_tr__2zwF0",
                bl: "corner_bl__Uks2t",
                br: "corner_br__N59X5"
            }
        },
        991: e => {
            e.exports = {
                flywheelItem: "flywheelItem_flywheelItem__DgRTw",
                visible: "flywheelItem_visible__Nzopx",
                title: "flywheelItem_title__BVbZo",
                icon: "flywheelItem_icon__cthZV",
                active: "flywheelItem_active__w2zgm",
                isMobile: "flywheelItem_isMobile___EWOE",
                headline: "flywheelItem_headline__Cux2C",
                text: "flywheelItem_text__OX3xG"
            }
        },
        1011: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => n
            });
            var s = r(5155);
            let n = e => {
                let { ...t
                } = e;
                return (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "69",
                    height: "67",
                    fill: "none",
                    viewBox: "0 0 69 67",
                    ...t,
                    children: (0, s.jsx)("path", {
                        fill: "currentColor",
                        d: "M68.963 33.384v-.202c-.117-8.824-3.658-17.126-9.948-23.346C52.695 3.587 44.326.116 35.402 0h-.878C25.6.116 17.202 3.616 10.911 9.836 4.591 16.085 1.08 24.358.963 33.182v.636c.117 8.824 3.657 17.126 9.948 23.346 6.32 6.249 14.689 9.75 23.613 9.836h.878c8.924-.116 17.292-3.616 23.612-9.836s9.861-14.522 9.949-23.346v-.434m-23.76-21.812c1.113.26 2.225.55 3.278.868h-3.014zM47.516 33.5c0 2.025-.058 4.021-.204 5.988l-10.066-5.033H43.8l3.19-10.617c.35 3.095.556 6.335.556 9.662zM32.798 21.176H36.6l-3.803 6.654v-6.654M22.703 34.455l-.322 1.099v-1.1h.351zm10.095 6.653 4.038 4.745h-4.038zm21.3-26.44c1.347 2.632 2.37 5.525 3.073 8.562-2.78-.897-5.91-1.62-9.392-2.14l2.428-8.072c1.346.492 2.634 1.013 3.892 1.65M41.606 12.44l-4.448 7.753c-.731 0-1.492-.03-2.223-.03h-2.136v-7.752H25.19c.117-.348.234-.724.351-1.07 6.057-1.216 12.699-1.216 18.756 0 .117.346.234.694.35 1.07h-3.042zm-17.205 0h-.38l-2.634 8.765c-3.189.52-6.115 1.186-8.72 2.025.732-3.066 1.756-5.93 3.073-8.563 2.75-1.36 5.735-2.401 8.924-3.095zm-3.336 9.807-3.657 12.208h4.155c0 1.157.03 2.314.088 3.442l-1.99 6.625c-2.633-.492-5.062-1.1-7.257-1.851a45.364 45.364 0 0 1 0-18.341c2.575-.868 5.472-1.563 8.632-2.083zm-1.667 23.2-1.99 6.597h6.262a36 36 0 0 0 .994 3.384c-3.189-.723-6.173-1.764-8.924-3.095a38.7 38.7 0 0 1-3.072-8.563c2.048.665 4.301 1.215 6.7 1.678zm5.09 6.625h8.31v-5.236h2.137c.731 0 1.843 0 2.75-.029l6.876 8.072c-.088.26-.175.52-.263.752-6.057 1.215-12.699 1.215-18.756 0a48 48 0 0 1-1.053-3.587zm29.407-7.348A76 76 0 0 0 57.2 43.8a38.7 38.7 0 0 1-3.072 8.563 39.3 39.3 0 0 1-7.051 2.632zm.82-1.243.146-.232-6.76-3.385c.147-2.053.235-4.136.235-6.248v-.232c0-3.905-.264-7.724-.732-11.34 3.658.55 6.964 1.302 9.86 2.285a45.4 45.4 0 0 1 0 18.342 37 37 0 0 1-2.72.81zm3.335-19.962c-.644-2.921-1.58-5.699-2.809-8.273a35 35 0 0 1 3.043 1.851c4.974 3.414 8.222 7.782 9.392 12.526-1.638-2.343-4.828-4.426-9.45-6.046zm.38-13.133c4.506 4.455 7.55 9.893 8.925 15.91-1.668-3.702-4.594-7.03-8.632-9.806a33 33 0 0 0-4.038-2.373 34 34 0 0 0-2.4-3.992c-2.808-3.992-6.173-6.885-9.918-8.534 6.086 1.36 11.557 4.34 16.063 8.824zm-6.788.144a31 31 0 0 1 1.873 3.009c-2.663-1.215-5.56-2.17-8.603-2.835 0-.03-.029-.087-.029-.116-1.668-4.629-3.804-7.84-6.232-9.43 4.915 1.098 9.48 4.367 13.02 9.372zM34.817.752h.234c3.482.087 6.642 3.53 8.953 9.778a47 47 0 0 0-9.07-.868c-3.073 0-6.145.29-9.07.868 2.31-6.248 5.47-9.691 8.953-9.778m-9.802 9.778-.059.174c-3.043.636-5.94 1.59-8.602 2.835a35 35 0 0 1 1.872-3.009c3.54-5.033 8.105-8.302 13.05-9.373-2.458 1.591-4.564 4.802-6.232 9.402zm-13.577-.144C15.944 5.93 21.445 2.922 27.53 1.562c-3.745 1.65-7.11 4.542-9.92 8.534a32 32 0 0 0-2.399 3.992c-1.404.724-2.78 1.505-4.037 2.373-4.038 2.777-6.964 6.104-8.632 9.807C3.918 20.25 6.96 14.84 11.438 10.357zm.146 6.711a35 35 0 0 1 3.043-1.851c-1.2 2.574-2.136 5.352-2.809 8.273l-.234.087c-4.594 1.62-7.783 3.674-9.421 6.046 1.17-4.744 4.447-9.112 9.392-12.526zm-.058 7.55c-.556 2.836-.82 5.758-.82 8.737v.232c0 2.98.264 5.901.82 8.736-6.291-2.285-9.773-5.41-9.832-8.852.059-3.443 3.57-6.567 9.832-8.852m.058 18.776.234.087c.644 2.921 1.58 5.699 2.81 8.273a35 35 0 0 1-3.044-1.851C6.61 46.518 3.362 42.15 2.192 37.405c1.638 2.344 4.828 4.427 9.422 6.047zm-.146 13.22c-4.506-4.455-7.55-9.893-8.895-15.91 1.668 3.702 4.594 7.03 8.632 9.806a33 33 0 0 0 4.037 2.372 34 34 0 0 0 2.4 3.993c2.809 3.992 6.174 6.885 9.919 8.534a32.74 32.74 0 0 1-16.093-8.824zm6.788-.173a31 31 0 0 1-1.872-3.009c2.662 1.215 5.559 2.17 8.602 2.835l.059.174c1.667 4.6 3.774 7.782 6.232 9.402-4.945-1.07-9.51-4.34-13.05-9.373zm16.825 9.778h-.234c-3.482-.087-6.672-3.53-8.954-9.778 2.926.578 5.998.868 9.07.868s6.145-.29 9.071-.868c-2.311 6.22-5.471 9.691-8.953 9.778m9.802-9.807c0-.03.029-.087.029-.116.234-.058.497-.116.732-.173l.38.434.41-.637c2.487-.636 4.857-1.446 7.08-2.459a35 35 0 0 1-1.872 3.009c-3.54 5.033-8.076 8.302-13.02 9.373 2.428-1.591 4.564-4.803 6.232-9.431zm13.576.202c-4.506 4.455-10.007 7.464-16.063 8.824 3.745-1.65 7.11-4.542 9.919-8.534a32 32 0 0 0 2.399-3.993c1.405-.723 2.78-1.504 4.038-2.372 4.038-2.777 6.964-6.104 8.632-9.807-1.376 6.017-4.39 11.456-8.925 15.911zm-.146-6.74a31 31 0 0 1-3.043 1.851c1.2-2.574 2.136-5.352 2.809-8.273l.175-.058c4.624-1.62 7.813-3.703 9.451-6.047-1.17 4.745-4.447 9.113-9.392 12.527m.059-7.55c.556-2.836.819-5.787.819-8.737v-.232c0-2.98-.264-5.901-.82-8.736 6.291 2.285 9.773 5.41 9.832 8.852-.059 3.443-3.54 6.567-9.831 8.852"
                    })
                })
            }
        },
        1031: e => {
            e.exports = {
                scrollIcon: "scrollIcon_scrollIcon__pUPPm",
                animateDown: "scrollIcon_animateDown__ohvwk",
                visible: "scrollIcon_visible__Ex_MN"
            }
        },
        1043: e => {
            e.exports = {
                h0: "typo_h0__w4bE2",
                h1: "typo_h1__sIORA",
                h2: "typo_h2__i9CAc",
                h3: "typo_h3__T8VrN",
                h4: "typo_h4__zlOR8",
                quote: "typo_quote__dRj8X",
                hFixed: "typo_hFixed__eQcwp",
                p: "typo_p__aZIKd",
                pSmall: "typo_pSmall__Gj6gw",
                pBig: "typo_pBig__XkcIk",
                pBigDiamond: "typo_pBigDiamond__45CQL",
                pHugeDiamond: "typo_pHugeDiamond__ZV53U",
                link: "typo_link__jt_zr"
            }
        },
        1053: e => {
            e.exports = {
                modalBG: "modalBG_modalBG__c7sOd"
            }
        },
        1286: e => {
            e.exports = {
                blogImage: "blogImage_blogImage__DFgQb"
            }
        },
        1296: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => x
            });
            var s = r(5155),
                n = r(2115),
                l = r(1531),
                i = r.n(l),
                a = r(6341),
                o = r(6577),
                c = r(4673),
                d = r(4460);
            let u = (e, t, r) => {
                let s = "number" == typeof e ? e : parseFloat(e);
                return `${t||""}${s.toLocaleString(void 0,{minimumFractionDigits:r||0,maximumFractionDigits:r||0})}`
            };
            var h = r(1011),
                m = r(9300),
                f = r.n(m),
                _ = r(8664);
            let p = e => {
                    let {
                        fill: t,
                        className: r
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "41",
                        height: "44",
                        viewBox: "0 0 41 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: r,
                        children: (0, s.jsx)("path", {
                            d: "M40.9128 23.4813C40.9128 23.2311 40.8877 23.0059 40.8377 22.7807C40.8377 22.7306 40.8126 22.6555 40.7876 22.5805V22.4804C40.2365 20.5536 38.1075 18.877 34.626 17.6509L34.4507 17.6008C34.4256 17.6008 34.4006 17.6008 34.3755 17.5758C34.3755 17.5758 34.3755 17.5758 34.3505 17.5758C33.574 17.3005 32.7224 17.0753 31.8207 16.8501C31.7456 16.7 31.6955 16.5498 31.6204 16.3997C31.6204 16.3747 31.5953 16.3246 31.5703 16.2996C31.5703 16.2746 31.5452 16.2496 31.5452 16.2245C30.894 14.8733 29.9923 13.4219 28.8903 11.9706C28.8903 11.9706 28.8652 11.9205 28.8402 11.9205C28.8402 11.9205 28.8652 11.8705 28.8903 11.8705C29.9673 10.4191 30.869 8.99278 31.5452 7.61649C31.5452 7.59147 31.5703 7.56645 31.5703 7.54142L31.6204 7.44132C33.023 4.51359 33.1232 2.23646 31.971 0.985294C31.971 0.985294 31.946 0.960267 31.9209 0.935244C31.8959 0.91022 31.8959 0.910225 31.8708 0.885202C30.6435 -0.265874 28.3392 -0.165782 25.4338 1.23553L25.3336 1.28558C25.3085 1.28558 25.2835 1.28557 25.2584 1.31059C23.9059 1.9612 22.4532 2.86205 21.0005 3.96307C21.0005 3.96307 20.9504 3.9881 20.9504 4.01312C20.9504 4.01312 20.9003 3.9881 20.9003 3.96307C19.4475 2.88707 18.0199 1.98623 16.6423 1.31059C16.6172 1.31059 16.5922 1.28558 16.5671 1.28558L16.467 1.23553C13.5365 -0.140759 11.2572 -0.265874 10.0299 0.885202C10.0299 0.885202 10.0048 0.91022 9.9798 0.935244C9.9798 0.935244 9.95475 0.96027 9.9297 0.985294C8.77754 2.23646 8.87773 4.51359 10.2804 7.44132L10.3305 7.54142C10.3305 7.56645 10.3305 7.59147 10.3555 7.61649C11.0067 8.96775 11.9084 10.4191 13.0105 11.8705C13.0105 11.8705 13.0355 11.9205 13.0606 11.9205C13.0606 11.9205 13.0355 11.9706 13.0105 11.9706C11.9335 13.4219 11.0318 14.8482 10.3555 16.2245C10.3555 16.2496 10.3305 16.2746 10.3305 16.2996L10.2804 16.3997C10.2052 16.5498 10.1301 16.7 10.08 16.8501C9.20334 17.0753 8.35174 17.3005 7.55024 17.5758C7.52519 17.5758 7.4751 17.6008 7.45005 17.6008L7.24968 17.6759C3.7932 18.902 1.66421 20.5786 1.11317 22.5054V22.6055H1.08813C1.08813 22.6555 1.06308 22.7306 1.03803 22.8057C0.987938 23.0309 0.962891 23.2811 0.962891 23.5063V23.7566C1.03803 29.0115 3.11693 33.9411 6.82388 37.6446C10.5308 41.348 15.4651 43.4249 20.7249 43.5C20.8001 43.5 20.9003 43.5 20.9754 43.5C21.0506 43.5 21.1507 43.5 21.2259 43.5C26.4607 43.4249 31.3949 41.348 35.1019 37.6446C38.8088 33.9411 40.8877 29.0115 40.9629 23.7566C40.9629 23.6815 40.9629 23.5814 40.9629 23.5063L40.9128 23.4813ZM13.5615 30.8382C13.8621 32.9652 14.3129 34.892 14.864 36.5936C12.9854 36.1682 11.2321 35.5426 9.62914 34.7418C8.82764 33.1403 8.20146 31.3637 7.77567 29.5119C9.47886 30.0625 11.4075 30.5129 13.5365 30.8382H13.5615ZM34.0249 29.5119C33.5991 31.3887 32.9729 33.1403 32.1714 34.7418C30.5684 35.5426 28.8151 36.1682 26.9366 36.5936C27.4876 34.892 27.9385 32.9652 28.239 30.8382C30.368 30.5379 32.2966 30.0875 33.9998 29.5119H34.0249ZM20.9253 43.0246H20.9003C18.8214 43.0246 16.9429 40.9476 15.5653 37.2192C17.2935 37.5445 19.0969 37.7196 20.9003 37.7196C22.7037 37.7196 24.507 37.5445 26.2353 37.2192C24.8577 40.9476 22.9792 43.0246 20.9253 43.0246ZM26.4106 36.7187C22.8539 37.4444 18.9466 37.4444 15.3899 36.7187C14.8139 35.0171 14.363 33.0653 14.0374 30.9133C16.2415 31.2135 18.5459 31.3637 20.9003 31.3637C23.2547 31.3637 25.5841 31.2135 27.7631 30.9133C27.4375 33.0653 26.9867 35.0171 26.4106 36.7187ZM27.8383 30.4378C25.6341 30.7381 23.3048 30.9133 20.9003 30.9133C18.4958 30.9133 16.1914 30.7631 13.9623 30.4378C13.6617 28.2608 13.5114 25.9586 13.4864 23.6064C14.363 23.4313 15.3398 23.106 16.3918 22.6055L16.492 22.5555C16.5171 22.5555 16.5421 22.5555 16.5671 22.5304C17.9197 21.8798 19.3724 20.979 20.8251 19.8779C20.8251 19.8779 20.8752 19.8529 20.8752 19.8279C20.8752 19.8279 20.9253 19.8529 20.9253 19.8779C22.378 20.954 23.8057 21.8548 25.1833 22.5304C25.2084 22.5304 25.2334 22.5555 25.2584 22.5555L25.3586 22.6055C26.4106 23.106 27.3874 23.4563 28.2641 23.6064C28.2641 25.9837 28.1138 28.2608 27.7882 30.4378H27.8383ZM7.17454 29.3118C7.19958 29.3118 7.24968 29.3118 7.27473 29.3368C7.65043 31.1134 8.22651 32.815 8.95287 34.3915C8.3267 34.0662 7.72557 33.6909 7.17454 33.2905C4.19395 31.2135 2.24029 28.536 1.58906 25.6333C2.54085 27.0597 4.44442 28.3108 7.17454 29.2867V29.3118ZM11.0819 37.2192C10.6811 36.6686 10.3305 36.0681 9.9798 35.4425C11.5578 36.1682 13.2359 36.7187 15.0393 37.1191V37.2192C16.0412 39.9467 17.2935 41.8485 18.7462 42.7994C15.8408 42.1488 13.1608 40.222 11.0819 37.2192ZM26.7362 37.1691C26.7362 37.1441 26.7362 37.1191 26.7613 37.094C28.5646 36.7187 30.2428 36.1432 31.8207 35.4175C31.4701 36.0431 31.1194 36.6436 30.7187 37.1941C28.6398 40.1719 25.9598 42.1237 23.0543 42.7743C24.482 41.8235 25.7343 39.9217 26.7112 37.1691H26.7362ZM34.626 33.3155C34.075 33.7159 33.4738 34.0662 32.8477 34.4165C33.574 32.8401 34.1251 31.1635 34.5258 29.3618C34.5509 29.3618 34.601 29.3618 34.626 29.3368C34.626 29.3368 34.6511 29.3368 34.6761 29.3368C37.3812 28.3609 39.2847 27.1097 40.2115 25.7084C39.5603 28.6111 37.6316 31.2886 34.626 33.3656V33.3155ZM40.4619 23.4813C40.4619 25.5583 38.4081 27.435 34.6511 28.8113C34.9767 27.0847 35.152 25.283 35.152 23.4813C35.152 21.6796 34.9767 19.8779 34.6511 18.1513C38.4081 19.5276 40.4619 21.4044 40.4619 23.4813ZM34.1251 17.9762C34.5008 19.7528 34.6761 21.6046 34.6761 23.4813C34.6761 25.3581 34.5008 27.1848 34.1251 28.9865C32.4219 29.562 30.4682 30.0124 28.3142 30.3377C28.6147 28.2107 28.765 25.9586 28.765 23.6315C30.0925 23.8066 31.1445 23.5564 31.8458 22.9058C31.8458 22.9058 31.8708 22.8808 31.8959 22.8557C31.8959 22.8557 31.9209 22.8307 31.946 22.8057C32.9729 21.7047 32.998 19.8029 32.0211 17.3506C32.7475 17.5508 33.4488 17.751 34.1251 17.9762ZM9.85456 22.8307C9.85456 22.8307 9.87961 22.8557 9.90466 22.8808C9.9297 22.9058 9.9297 22.9058 9.95475 22.9308C10.6561 23.6064 11.708 23.8316 13.0355 23.6565C13.0355 25.9586 13.1858 28.2107 13.4864 30.3627C11.3323 30.0374 9.37867 29.587 7.67548 29.0115C7.29977 27.2348 7.12444 25.3831 7.12444 23.5063C7.12444 21.6296 7.29977 19.8029 7.67548 18.0012C8.35174 17.776 9.05306 17.5758 9.77942 17.3756C8.80259 19.8279 8.82764 21.7547 9.85456 22.8307ZM6.6736 23.4813C6.6736 25.283 6.84893 27.0847 7.17454 28.8113C3.41749 27.435 1.36364 25.5583 1.36364 23.4813C1.36364 21.4044 3.41749 19.5276 7.17454 18.1513C6.84893 19.8779 6.6736 21.6796 6.6736 23.4813ZM6.92407 33.6909C7.67548 34.2164 8.47698 34.6918 9.30353 35.0922C9.72933 35.9179 10.2052 36.7187 10.7062 37.4694C12.3593 39.8466 14.338 41.5482 16.5421 42.5241C12.9604 41.7234 9.72933 39.9467 7.07435 37.2942C4.41937 34.6417 2.64104 31.4137 1.83953 27.8354C2.81637 30.0374 4.54461 32.0143 6.89902 33.6658L6.92407 33.6909ZM25.2835 42.5241C27.4876 41.5482 29.4663 39.8216 31.1194 37.4694C31.6454 36.7187 32.0963 35.943 32.5221 35.0922C33.3486 34.6668 34.1501 34.1913 34.9015 33.6909C37.281 32.0393 38.9842 30.0625 39.961 27.8604C39.1595 31.4387 37.3812 34.6668 34.7262 37.3192C32.0712 39.9717 28.8402 41.7484 25.2584 42.5491L25.2835 42.5241Z",
                            fill: t || _.o.RISO
                        })
                    })
                },
                x = e => {
                    let {
                        text: t,
                        link: r
                    } = e, l = (0, n.useRef)(null), m = (0, n.useRef)(null), _ = (0, n.useRef)(null), x = (0, n.useRef)(0), [g, v] = (0, n.useState)(!1), [C, w] = (0, n.useState)(-1), {
                        scroll: j
                    } = (0, n.useContext)(a.z), [L, y] = (0, n.useState)(1), [b, M] = (0, n.useState)(!1), N = (0, d.N)(o.qp);
                    (0, n.useEffect)(() => {
                        let e = l.current,
                            t = l.current,
                            r = () => {
                                if (!e || !t || !j) return;
                                let r = j.scroll,
                                    s = Math.min(r, e.clientHeight);
                                M(r !== e.clientHeight), t.style.setProperty("transform", `translateY(${s.toFixed(o.N2)}px)`)
                            };
                        return r(), j ? .on("scroll", r), () => {
                            j ? .off("scroll", r)
                        }
                    }, [j]), (0, n.useEffect)(() => {
                        v(!0)
                    }, []), (0, n.useEffect)(() => {
                        let e = () => {
                            let e = _.current;
                            if (!e || !e.children[0]) return;
                            let t = e.children[0].clientWidth;
                            y(3 * Math.ceil(window.outerWidth / t))
                        };
                        return g && e(), g && window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, [g]), (0, n.useEffect)(() => {
                        let e = () => {
                            let t = _.current;
                            if (!t || !t.children[0]) return !1;
                            let r = N ? -.04 : -.05,
                                s = t.children[0].clientWidth,
                                n = -s + performance.now() * r % s;
                            t.style.setProperty("transform", `translate3d(${n.toFixed(3)}px, 0, 0)`), b && (x.current = requestAnimationFrame(e))
                        };
                        return b && (x.current = requestAnimationFrame(e)), () => cancelAnimationFrame(x.current)
                    }, [b, N]), (0, n.useEffect)(() => {
                        (async () => {
                            try {
                                let [e] = await Promise.all([fetch("https://api.turtle.xyz/turtle/campaigns/katana")]), t = await e.json(), r = t ? .campaign ? .tvlUSD || 0;
                                w(Math.floor(r))
                            } catch (e) {
                                console.error("Failed to fetch TVL data:", e), w(0)
                            }
                        })()
                    }, []);
                    let E = t;
                    E = (E = E.replace("%icon-ticker%", '<span class="rotate icon" />')).replace("%icon-arrow%", " - ");
                    let k = () => (0, s.jsx)("div", {
                        className: i().elements,
                        children: (0, s.jsx)("div", {
                            className: i().moveEl,
                            ref: _,
                            children: L > 0 && Array.from({
                                length: L
                            }).map((e, t) => (0, s.jsx)(n.Fragment, {
                                children: (0, s.jsx)("div", {
                                    className: i().element,
                                    dangerouslySetInnerHTML: {
                                        __html: E
                                    }
                                })
                            }, t))
                        })
                    });
                    return (0, s.jsxs)("div", {
                        className: i().ticker,
                        ref: l,
                        children: [C > 0 && (0, s.jsxs)("div", {
                            className: i().tvl,
                            children: [(0, s.jsx)("div", {
                                className: i().left,
                                children: (0, s.jsx)(h.default, {
                                    className: i().tvlGlobe
                                })
                            }), (0, s.jsx)("div", {
                                className: f()(i().middle, i().tvlMiddle),
                                children: (0, s.jsxs)("div", {
                                    className: i().tvlInner,
                                    children: [(0, s.jsx)("small", {
                                        className: i().tvlInnerLabel,
                                        children: "productive tvl"
                                    }), (0, s.jsx)("span", {
                                        className: i().tvlInnerNumber,
                                        children: u(C, "$")
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: i().right,
                                children: (0, s.jsx)(p, {
                                    className: i().tvlHalfGlobe,
                                    fill: "#f6ff0d"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: i().inner,
                            ref: m,
                            children: [(0, s.jsx)("div", {
                                className: i().left,
                                children: (0, s.jsx)("img", {
                                    src: "/assets/images/icon-stripes.svg",
                                    alt: ""
                                })
                            }), (0, s.jsx)("div", {
                                className: i().middle
                            }), (0, s.jsx)("div", {
                                className: i().right,
                                children: (0, s.jsx)("img", {
                                    src: "/assets/images/icon-stripes.svg",
                                    alt: ""
                                })
                            }), r && "url" === r.linktype ? (0, s.jsx)("a", {
                                href: r.cached_url,
                                target: "_blank",
                                rel: "norefferer",
                                className: i().link,
                                children: k()
                            }) : r ? (0, s.jsx)(c.default, {
                                href: r.cached_url,
                                className: i().link,
                                children: k()
                            }) : k()]
                        })]
                    })
                }
        },
        1303: e => {
            e.exports = {
                featuresItem: "featuresItem_featuresItem__Fok9h",
                hasLink: "featuresItem_hasLink__zmugi",
                trans: "featuresItem_trans__6I4rm",
                inner: "featuresItem_inner___ojMy",
                graphic: "featuresItem_graphic__c7b1Y",
                graphicInner: "featuresItem_graphicInner__vxVpo",
                graphicImage: "featuresItem_graphicImage___bcg9",
                graphicVideo: "featuresItem_graphicVideo__XmypB",
                title: "featuresItem_title__LSPqu",
                icon: "featuresItem_icon__4fFFS",
                text: "featuresItem_text__jmTIW",
                link: "featuresItem_link__DpxTl"
            }
        },
        1385: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => g
            });
            var s = r(5155),
                n = r(9573),
                l = r(3846),
                i = r.n(l),
                a = r(1043),
                o = r.n(a),
                c = r(9300),
                d = r.n(c),
                u = r(1915),
                h = r(5753),
                m = r(4460),
                f = r(6577),
                _ = r(2115),
                p = r(6341),
                x = r(9029);
            let g = e => {
                let {
                    blok: t
                } = e, r = (0, m.N)(f.qp), [l, a] = (0, _.useState)(!1), [c, g] = (0, _.useState)(!1), v = (0, _.useRef)(null), {
                    scroll: C
                } = (0, _.useContext)(p.z);
                return (0, _.useEffect)(() => {
                    let e = () => {
                        let e = v.current;
                        if (!e) return;
                        let t = window.innerHeight;
                        if (r) {
                            let {
                                top: r,
                                bottom: s
                            } = e.getBoundingClientRect();
                            a(r < t && s > t), g(r < t && s > 1.5 * t)
                        } else {
                            let {
                                top: r,
                                bottom: s
                            } = e.getBoundingClientRect();
                            a(r < t && s > t), g(r < t && s > t)
                        }
                    };
                    return C ? .on("scroll", e), () => {
                        C ? .off("scroll", e)
                    }
                }, [C, r]), (0, s.jsxs)("div", {
                    className: d()(i().client, {
                        [i().visible]: l,
                        [i().contentVisible]: c,
                        [i().isMobile]: r
                    }),
                    ...(0, u.K1)(t),
                    ref: v,
                    children: [(0, s.jsxs)("div", {
                        className: i().container,
                        children: [(0, s.jsxs)("div", {
                            className: i().header,
                            children: [(0, s.jsx)(h.Ay, {
                                p: "tl",
                                className: i().headerCorner
                            }), (0, s.jsx)(n.default, {
                                className: d()(o().h2, i().title),
                                tag: "h2",
                                visible: l,
                                children: t.title
                            })]
                        }), (0, s.jsx)("div", {
                            className: i().content,
                            children: (0, s.jsx)(x.A, {
                                content: t.text,
                                normalCopy: !0,
                                noWrapper: !0
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: i().blocker,
                        id: "liquidity"
                    })]
                })
            }
        },
        1397: e => {
            e.exports = {
                loaderVisual: "loaderVisual_loaderVisual__GY_u4",
                complete: "loaderVisual_complete__GUTAz",
                bgLayer: "loaderVisual_bgLayer__O2XQp",
                fadeOut: "loaderVisual_fadeOut__dopb6",
                inner: "loaderVisual_inner__Ua22i",
                logo: "loaderVisual_logo__OPtMd",
                init: "loaderVisual_init__arotq",
                logoInner: "loaderVisual_logoInner__gK6ME",
                logoOutline: "loaderVisual_logoOutline__ypjYH"
            }
        },
        1442: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => C
            });
            var s = r(5155),
                n = r(3096),
                l = r(9573),
                i = r(4703),
                a = r.n(i),
                o = r(1043),
                c = r.n(o),
                d = r(5753),
                u = r(8664);
            let h = e => {
                let { ...t
                } = e, r = t.fill || u.o.RISO;
                return (0, s.jsx)("svg", {
                    width: "169",
                    height: "170",
                    viewBox: "0 0 169 170",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M106.171 106.363V0.572998H62.5511V106.363L0.331055 87.693V121.303L84.3611 169.013L168.391 121.303V87.693L106.171 106.363Z",
                        fill: r
                    })
                })
            };
            var m = r(1031),
                f = r.n(m),
                _ = r(2115),
                p = r(6341),
                x = r(9300),
                g = r.n(x);
            let v = () => {
                    let {
                        scroll: e
                    } = (0, _.useContext)(p.z), [t, r] = (0, _.useState)(!1);
                    return (0, _.useEffect)(() => {
                        let t = e => {
                            r(0 === e.scroll)
                        };
                        return e && t(e), e ? .on("scroll", t), () => {
                            e ? .off("scroll", t)
                        }
                    }, [e]), (0, s.jsx)("div", {
                        className: g()(f().scrollIcon, {
                            [f().visible]: t
                        }),
                        children: (0, s.jsx)(h, {
                            fill: u.o.SPARK_GREEN
                        })
                    })
                },
                C = e => {
                    let {
                        title: t
                    } = e, [r, i] = (0, n.Wx)();
                    return (0, s.jsxs)("div", {
                        className: a().visionHero,
                        ref: r,
                        children: [(0, s.jsxs)("div", {
                            className: a().inner,
                            children: [(0, s.jsx)(d.Ay, {
                                p: "tl"
                            }), (0, s.jsx)(l.default, {
                                visible: i,
                                tag: "h1",
                                className: c().h0,
                                children: t
                            }), (0, s.jsx)(d.Ay, {
                                p: "br"
                            })]
                        }), (0, s.jsx)(v, {})]
                    })
                }
        },
        1531: e => {
            e.exports = {
                ticker: "ticker_ticker__vuFMh",
                tvl: "ticker_tvl__GbaQO",
                tvlMiddle: "ticker_tvlMiddle__2QEar",
                tvlInner: "ticker_tvlInner__WBVKg",
                tvlInnerLabel: "ticker_tvlInnerLabel__AJD4g",
                tvlInnerNumber: "ticker_tvlInnerNumber__7VpZH",
                tvlGlobe: "ticker_tvlGlobe__k5EtS",
                tvlHalfGlobe: "ticker_tvlHalfGlobe__u0awU",
                inner: "ticker_inner__Mz5N7",
                left: "ticker_left__lnf_b",
                right: "ticker_right__BwOaC",
                middle: "ticker_middle__SM3G0",
                link: "ticker_link__gp2sv",
                elements: "ticker_elements__B6Q2g",
                moveEl: "ticker_moveEl__p9qba",
                element: "ticker_element__7aGH8",
                spin: "ticker_spin__xMPNJ"
            }
        },
        1534: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => n
            });
            var s = r(4477);
            let n = (0, s.createServerReference)("7f9bd26f42d3aff0a45ce05149c547eba723ec8e95", s.callServer, void 0, s.findSourceMapURL, "liveEditUpdateAction")
        },
        1609: e => {
            e.exports = {
                item: "quoteItem_item__Dzkwo",
                itemInner: "quoteItem_itemInner__6D4yi",
                headline: "quoteItem_headline__AILWO",
                author: "quoteItem_author__kb7ts",
                icon: "quoteItem_icon__Cggq8",
                visible: "quoteItem_visible__L9XAy"
            }
        },
        1769: e => {
            e.exports = {
                visionBlock: "visionBlock_visionBlock__V3t_G"
            }
        },
        1821: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => f
            });
            var s = r(5155),
                n = r(2115),
                l = r(9573),
                i = r(3194),
                a = r.n(i),
                o = r(1043),
                c = r.n(o),
                d = r(9300),
                u = r.n(d),
                h = r(7566),
                m = r(6341);
            let f = e => {
                let {
                    title: t,
                    buttons: r
                } = e, [i, o] = (0, n.useState)(!1), d = (0, n.useRef)(null), {
                    scroll: f
                } = (0, n.useContext)(m.z);
                return (0, n.useEffect)(() => {
                    let e = d.current,
                        t = () => {
                            if (!e) return;
                            let {
                                top: t
                            } = e.getBoundingClientRect(), r = t / window.innerHeight, s = Math.min(1, Math.max(0, r)).toFixed(3);
                            e.style.setProperty("--y", s), o(r <= .2)
                        };
                    return f ? .on("scroll", t), () => {
                        f ? .off("scroll", t)
                    }
                }, [f]), (0, s.jsx)("div", {
                    ref: d,
                    className: u()(a().inner, {
                        [a().visible]: i
                    }),
                    children: (0, s.jsxs)("div", {
                        className: a().fixed,
                        children: [!!t && (0, s.jsx)(l.default, {
                            tag: "p",
                            className: u()(c().h1, a().title),
                            visible: i,
                            children: t
                        }), (0, s.jsx)("div", {
                            className: a().buttons,
                            children: r.map((e, t) => (0, n.createElement)(h.default, { ...e,
                                key: t,
                                className: a().button
                            }))
                        })]
                    })
                })
            }
        },
        1861: e => {
            e.exports = {
                curtain: "curtain_curtain__vIbqS",
                bg: "curtain_bg__bfyKm",
                open: "curtain_open__NGpV8",
                logo: "curtain_logo__UOGqa",
                logoLogo: "curtain_logoLogo__yoVFY",
                logoOutline: "curtain_logoOutline__D25cl"
            }
        },
        2071: e => {
            e.exports = {
                quoteItemImage: "quoteItemImage_quoteItemImage__45XTb",
                image: "quoteItemImage_image__QxbGg"
            }
        },
        2154: e => {
            e.exports = {
                quotes: "quotes_quotes__7C7Xt",
                client: "quotes_client__eJhxU",
                visible: "quotes_visible__isRYo",
                fixed: "quotes_fixed__wg2Ay",
                container: "quotes_container__boJlZ",
                item: "quotes_item__PqAi0",
                dots: "quotes_dots__mJXiY",
                dotsItem: "quotes_dotsItem__i1_ZA",
                active: "quotes_active__rSrDg"
            }
        },
        2475: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var s = r(5155),
                n = r(9300),
                l = r.n(n),
                i = r(6799),
                a = r.n(i);
            let o = e => {
                let {
                    className: t,
                    c: r,
                    d: n,
                    rotated: i,
                    open: o
                } = e;
                return (0, s.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: r,
                    className: l()(t, a().curtainPlane, {
                        [a().rotated]: i,
                        [a().open]: o
                    }),
                    preserveAspectRatio: "none",
                    style: {
                        transitionDelay: n ? `${n}s` : void 0
                    },
                    children: [(0, s.jsxs)("defs", {
                        children: [(0, s.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [(0, s.jsx)("stop", {
                                offset: "3%",
                                stopColor: "#1f273c"
                            }), (0, s.jsx)("stop", {
                                offset: "46%",
                                stopColor: "#4887c7"
                            }), (0, s.jsx)("stop", {
                                offset: "72%",
                                stopColor: "#c9c5e6"
                            }), (0, s.jsx)("stop", {
                                offset: "85%",
                                stopColor: "#f9a67b"
                            }), (0, s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#f62604"
                            })]
                        }), (0, s.jsxs)("linearGradient", {
                            id: "gradientRot",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            gradientTransform: "rotate(180, 0.5, 0.5)",
                            children: [(0, s.jsx)("stop", {
                                offset: "3%",
                                stopColor: "#1f273c"
                            }), (0, s.jsx)("stop", {
                                offset: "46%",
                                stopColor: "#4887c7"
                            }), (0, s.jsx)("stop", {
                                offset: "72%",
                                stopColor: "#c9c5e6"
                            }), (0, s.jsx)("stop", {
                                offset: "85%",
                                stopColor: "#f9a67b"
                            }), (0, s.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#f62604"
                            })]
                        })]
                    }), (0, s.jsx)("g", {
                        children: (0, s.jsx)("path", {
                            d: "M 0 0 L 80 0 L 88 50 L 92 50 L 100 100 L 0 100 L 0 0"
                        })
                    })]
                })
            }
        },
        2880: e => {
            e.exports = {
                flywheel: "flywheel_flywheel__mOF3A",
                container: "flywheel_container__PkbZu",
                header: "flywheel_header__iH56d",
                headerCorner: "flywheel_headerCorner__BqtW0",
                visible: "flywheel_visible__OlZNd",
                blogLink: "flywheel_blogLink__bB1sr",
                items: "flywheel_items__hz90H",
                lower: "flywheel_lower__6vRp9",
                wrapper: "flywheel_wrapper__8W_KQ",
                fakeItems: "flywheel_fakeItems__ebSYi",
                isMobile: "flywheel_isMobile__NYzW8",
                fakeItem: "flywheel_fakeItem__V3J4b"
            }
        },
        2913: e => {
            e.exports = {
                animatedHeadline: "animatedHeadline_animatedHeadline__ltqag",
                space: "animatedHeadline_space__ztY4V",
                visible: "animatedHeadline_visible__G_1Pg",
                hidden: "animatedHeadline_hidden__Cpd2r"
            }
        },
        3166: e => {
            e.exports = {
                features: "features_features__T8EB8",
                client: "features_client__45PMb",
                container: "features_container__EzyzL",
                header: "features_header__kOD2G",
                headerCorner: "features_headerCorner__WxNKl",
                visible: "features_visible__cgex1",
                wrapper: "features_wrapper__OPh6j",
                labels: "features_labels__oZtVd",
                items: "features_items__h_7Os",
                itemsSlider: "features_itemsSlider__iuwnz"
            }
        },
        3194: e => {
            e.exports = {
                footerFrontpage: "footerFrontpage_footerFrontpage__xegYA",
                inner: "footerFrontpage_inner__dkMZJ",
                fixed: "footerFrontpage_fixed__QT_U6",
                scrollView: "footerFrontpage_scrollView__JBAdl",
                title: "footerFrontpage_title__drW1H",
                buttons: "footerFrontpage_buttons__q9RGG",
                button: "footerFrontpage_button__fcw_X",
                visible: "footerFrontpage_visible__aPV5G"
            }
        },
        3646: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var s = r(5155);
            let n = e => {
                let { ...t
                } = e;
                return (0, s.jsx)("svg", {
                    width: "36",
                    height: "42",
                    viewBox: "0 0 36 42",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...t,
                    children: (0, s.jsx)("path", {
                        d: "M14.8015 14.6354V0H6.34352L0 20.9476H5.07482L0 37.7058H14.8015V27.2688L27.4891 42L36 29.3266L19.0841 20.9476H14.8015H25.3739L31.7172 0H23.2593L14.8015 14.6354Z",
                        fill: "#F6FF0D"
                    })
                })
            }
        },
        3739: e => {
            e.exports = {
                button: "button_button__HOmVR",
                active: "button_active__T6A7v",
                important: "button_important__BKF_D",
                disabled: "button_disabled__cxo0R",
                inner: "button_inner__474Iv",
                smaller: "button_smaller__N3UrO",
                newsletter: "button_newsletter__Fd1wU",
                innerMain: "button_innerMain__UFMyL",
                input: "button_input__9bq1W",
                innerIcon: "button_innerIcon__Wnuf7",
                innerIconLink: "button_innerIconLink__8CkxC",
                icon: "button_icon__aQd72",
                iconRotate: "button_iconRotate__QseUA",
                innerLeft: "button_innerLeft__DI8SE",
                innerRight: "button_innerRight__Z_Ons",
                lineTop: "button_lineTop__OQLqg",
                lineBottom: "button_lineBottom__UG_4O",
                lineRight: "button_lineRight__sdQ9l",
                lineLeft: "button_lineLeft__Zxht6"
            }
        },
        3846: e => {
            e.exports = {
                liquidity: "liquidity_liquidity__9ZRR4",
                client: "liquidity_client__xk1sY",
                container: "liquidity_container__9AasV",
                header: "liquidity_header__HQoeI",
                headerCorner: "liquidity_headerCorner__u8YFi",
                visible: "liquidity_visible__vMAz_",
                content: "liquidity_content__vKSvz",
                contentVisible: "liquidity_contentVisible__aQQqy",
                blocker: "liquidity_blocker__wzOwp"
            }
        },
        4216: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => m
            });
            var s = r(5155),
                n = r(9573),
                l = r(1769),
                i = r.n(l),
                a = r(1043),
                o = r.n(a),
                c = r(9029),
                d = r(3096),
                u = r(5753),
                h = r(8664);
            let m = e => {
                let {
                    blok: t
                } = e, [r, l] = (0, d.Wx)();
                return (0, s.jsxs)("div", {
                    className: i().visionBlock,
                    ref: r,
                    children: [(0, s.jsx)(u.Ay, {
                        className: i().corner,
                        p: "tl",
                        c: h.o.SPARK_GREEN
                    }), (0, s.jsx)(n.default, {
                        visible: l,
                        tag: "h3",
                        className: o().h2,
                        children: t.title
                    }), (0, s.jsx)(c.A, {
                        content: t.text,
                        noWrapper: !0
                    })]
                })
            }
        },
        4406: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => R
            });
            var s = r(5155),
                n = r(2115),
                l = r(3166),
                i = r.n(l),
                a = r(1043),
                o = r.n(a),
                c = r(9573),
                d = r(9300),
                u = r.n(d),
                h = r(5753),
                m = r(1303),
                f = r.n(m),
                _ = r(1053),
                p = r.n(_),
                x = r(8664);
            let g = e => {
                let {
                    color: t
                } = e, [r, l] = (0, n.useState)(0), [i, a] = (0, n.useState)(0), o = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    let e = () => {
                        let e = o.current;
                        if (!e || !e.parentElement) return;
                        let t = e.parentElement;
                        a(t.clientWidth), l(t.clientHeight)
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                });
                let c = "M 0 0";
                return c += `L ${i/2} 4 L ${i/2} 0 L ${i} 0L ${i-4} ${.5*r} L ${i} ${.5*r} L ${i} ${r}L ${i/2} ${r} L  ${i/2} ${r-4} L 0 ${r}L 4 ${.5*r} L 0 ${.5*r} L 0 0`, (0, s.jsx)("svg", {
                    viewBox: `0 0 ${i} ${r}`,
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: t || x.o.INK,
                    className: p().modalBG,
                    ref: o,
                    children: (0, s.jsx)("path", {
                        d: c
                    })
                })
            };
            var v = r(6766),
                C = r(3096),
                w = r(4673);
            let j = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "181",
                        height: "180",
                        viewBox: "0 0 181 180",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: (0, s.jsx)("path", {
                            d: "M139.11 132.83L175.68 86.9799L148.7 76.5099L153.25 75.4699L140.22 18.2999L115.21 32.8499L117.24 28.6399L64.4098 3.17993L60.1898 31.8099L58.1698 27.5999L5.31982 53.0099L25.0698 74.1699L20.5198 73.1199L7.42982 130.28L36.2798 128.03L32.6298 130.94L69.1498 176.82L85.4498 152.77V157.54H144.09L135.46 129.91L139.11 132.83Z",
                            fill: "currentColor"
                        })
                    })
                },
                L = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "180",
                        height: "180",
                        viewBox: "0 0 180 180",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: (0, s.jsx)("path", {
                            d: "M174.28 81.09C171.61 73.4 164.29 52.28 161.71 44.82C158.8 44.94 152.49 45.21 149.54 45.33C150.49 42.52 152.5 36.56 153.44 33.79C145.99 28.5 129.43 16.75 122.14 11.57C119.86 13.35 114.97 17.16 112.66 18.96C111.82 16.14 110.04 10.22 109.21 7.44995H70.8202C69.9902 10.21 68.2102 16.16 67.3702 18.96C65.0502 17.15 60.1802 13.36 57.8902 11.57C50.6502 16.71 33.9802 28.54 26.5902 33.79C27.5202 36.55 29.5502 42.53 30.4902 45.33C27.5202 45.21 21.2402 44.94 18.3202 44.82L6.45023 79.05L5.74023 81.09C8.36023 82.98 15.3702 88.04 18.0802 89.99C15.3402 91.97 8.39023 96.99 5.74023 98.9L6.55023 101.23L18.3202 135.17C21.2302 135.05 27.5402 134.78 30.4902 134.65C29.5402 137.46 27.5302 143.42 26.5902 146.19C34.0402 151.48 50.6002 163.23 57.8902 168.41C60.1702 166.64 65.0602 162.82 67.3702 161.02C68.2202 163.84 69.9902 169.76 70.8202 172.53H109.21C110.04 169.76 111.82 163.82 112.66 161.01C114.98 162.82 119.85 166.62 122.14 168.4C129.38 163.26 146.05 151.43 153.44 146.18C152.51 143.42 150.48 137.43 149.54 134.64C152.51 134.77 158.79 135.03 161.71 135.16L162.42 133.12L174.29 98.89C171.67 97 164.66 91.94 161.95 89.98C164.69 88.01 171.64 82.98 174.29 81.08L174.28 81.09ZM106.21 89.83C103.5 98.86 100.23 109.75 97.5302 118.75H82.4702C79.7502 109.73 76.4802 98.78 73.7602 89.73C76.5702 80.92 79.6602 70.1199 82.3702 61.2599H97.6402C100.36 70.1199 103.42 80.91 106.25 89.72L106.22 89.83H106.21Z",
                            fill: "currentColor"
                        })
                    })
                },
                y = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "180",
                        height: "180",
                        viewBox: "0 0 180 180",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: (0, s.jsx)("path", {
                            d: "M176.99 89.3899L176.96 89.2899L176.53 87.9499L157.91 28.3499L157.17 25.9599L156.43 23.5699L154.04 22.8299L151.65 22.0899L92.0602 3.45992L90.6402 3.01992H90.6102C90.4202 2.94992 90.2102 2.91992 90.0102 2.91992H89.9802C89.7802 2.91992 89.5701 2.94992 89.3801 3.00992C89.3701 3.00992 89.3502 3.01992 89.3502 3.01992L87.9302 3.45992L28.3502 22.0799L25.9602 22.8199L23.5702 23.5599L22.8302 25.9499L22.0902 28.3399L3.47016 87.9499L3.04016 89.2899L3.01016 89.3899C2.94016 89.5899 2.91016 89.7999 2.91016 90.0099C2.91016 90.2499 2.95016 90.4999 3.04016 90.7099L3.47016 92.0499L22.0902 151.65L22.8302 154.04L23.5702 156.43L25.9602 157.17L28.3502 157.91L87.9402 176.53L89.3801 176.99C89.4701 177 89.5402 177.02 89.6202 177.03C89.7302 177.06 89.8602 177.07 89.9902 177.07C90.1202 177.07 90.2502 177.06 90.3602 177.03C90.4502 177.03 90.5302 177.02 90.6002 176.99L92.0402 176.53L151.63 157.91L154.02 157.17L156.41 156.43L157.15 154.04L157.89 151.65L176.51 92.0499L176.94 90.7099C177.03 90.4999 177.07 90.2499 177.07 90.0099C177.07 89.8099 177.04 89.5999 176.97 89.3899H176.99ZM123.27 47.4799L135.8 65.4899L114.45 92.3499L106.94 81.5599L123.26 47.4799H123.27ZM91.6802 38.0799L104.27 69.9999L91.1702 71.1099L69.8102 39.9299L91.6802 38.0799ZM56.7302 132.52L44.2002 114.51L65.5502 87.6499L73.0602 98.4399L56.7402 132.52H56.7302ZM36.5402 82.4499L45.8702 62.5899L79.8002 67.6499L74.2102 79.5499L36.5302 82.4599L36.5402 82.4499ZM88.3202 141.92L75.7302 110L88.8302 108.89L110.19 140.07L88.3202 141.92ZM134.12 117.41L100.19 112.35L105.78 100.45L143.46 97.5399L134.13 117.4L134.12 117.41Z",
                            fill: "currentColor"
                        })
                    })
                },
                b = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "181",
                        height: "180",
                        viewBox: "0 0 181 180",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: (0, s.jsx)("path", {
                            d: "M173.64 54.8999L125.6 6.85989L124.46 6.38989H56.5301L55.3901 6.85989L7.36014 54.8999L6.89014 56.0399V123.98L7.36014 125.12L55.4001 173.16L56.5401 173.63H124.48L125.62 173.16L173.66 125.12L174.13 123.98V56.0299L173.66 54.8899L173.64 54.8999ZM94.3201 152.34L112.99 119.46H89.0101C72.8601 119.35 59.7601 106.18 59.7601 89.9999H41.1201C41.1201 114.6 59.6801 134.94 83.5201 137.77L79.4101 151.46C50.2101 146.22 28.0401 120.71 28.0401 89.9999C28.0401 56.7799 53.9701 29.6399 86.6901 27.6599L68.0201 60.5399H92.0001C108.15 60.6499 121.25 73.8199 121.25 89.9999H139.89C139.89 65.3999 121.33 45.0599 97.4901 42.2299L101.6 28.5399C130.8 33.7799 152.97 59.2899 152.97 89.9999C152.97 123.22 127.04 150.36 94.3201 152.34Z",
                            fill: "currentColor"
                        })
                    })
                },
                M = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsxs)("svg", {
                        width: "180",
                        height: "180",
                        viewBox: "0 0 180 180",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: [(0, s.jsx)("path", {
                            d: "M61.2299 6.58009C61.0999 6.32009 60.85 6.15009 60.56 6.10009C60.27 6.06009 59.9799 6.15009 59.7799 6.36009L33.1699 32.9701L6.55995 59.5901C6.35995 59.7901 6.25995 60.0801 6.29995 60.3701C6.33995 60.6601 6.51995 60.9001 6.77995 61.0401L55.38 86.5001C55.51 86.5701 55.6599 86.6001 55.7999 86.6001C56.0399 86.6001 56.2699 86.5101 56.4399 86.3301L71.48 71.2901L86.52 56.2501C86.8 55.9701 86.87 55.5401 86.68 55.1901L61.2299 6.58009Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M71.49 108.71L56.45 93.67C56.17 93.39 55.74 93.32 55.39 93.51L6.78004 118.96C6.52004 119.09 6.35004 119.34 6.30004 119.63C6.26004 119.92 6.35004 120.21 6.56004 120.41L33.17 147.02L59.78 173.63C59.95 173.8 60.18 173.9 60.42 173.9C60.47 173.9 60.51 173.9 60.56 173.89C60.85 173.85 61.09 173.67 61.23 173.41L86.69 124.81C86.87 124.46 86.81 124.03 86.53 123.75L71.49 108.71Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M173.22 118.96L124.62 93.5C124.27 93.32 123.84 93.38 123.56 93.66L108.52 108.7L93.4801 123.74C93.2001 124.02 93.1301 124.45 93.3201 124.8L118.78 173.4C118.91 173.66 119.16 173.83 119.45 173.88C119.5 173.88 119.54 173.89 119.59 173.89C119.83 173.89 120.06 173.8 120.23 173.62L146.84 147.01L173.45 120.4C173.65 120.2 173.75 119.91 173.71 119.62C173.67 119.33 173.49 119.09 173.23 118.95L173.22 118.96Z",
                            fill: "currentColor"
                        }), (0, s.jsx)("path", {
                            d: "M108.51 71.29L123.55 86.33C123.72 86.5 123.96 86.6 124.19 86.6C124.33 86.6 124.48 86.57 124.61 86.5L173.21 61.04C173.47 60.91 173.64 60.66 173.69 60.37C173.73 60.08 173.64 59.79 173.43 59.59L146.82 32.98L120.21 6.37001C120.01 6.17001 119.72 6.07001 119.43 6.11001C119.14 6.15001 118.9 6.33001 118.76 6.59001L93.3001 55.19C93.1201 55.54 93.1801 55.97 93.4601 56.25L108.5 71.29H108.51Z",
                            fill: "currentColor"
                        })]
                    })
                },
                N = e => {
                    let {
                        title: t,
                        text: r,
                        video_key: l,
                        link: i,
                        id: a
                    } = e, [c, d] = (0, C.Wx)(), m = (0, n.useRef)(null), [_, p] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let e = m.current;
                        if (e && d) {
                            let t = e.play();
                            void 0 !== t && t.then(() => {
                                p(!1)
                            }).catch(() => {
                                p(!0)
                            })
                        } else e && e.pause()
                    }, [d]), (0, s.jsx)("div", {
                        className: u()(f().featuresItem, {
                            [f().hasLink]: !!i && !!i.cached_url
                        }),
                        ref: c,
                        children: (0, s.jsxs)("div", {
                            className: f().trans,
                            children: [(0, s.jsxs)("div", {
                                className: f().inner,
                                children: [(0, s.jsxs)("div", {
                                    className: f().graphic,
                                    children: [(0, s.jsx)(h.Ay, {
                                        s: h.ah.L,
                                        p: "tl",
                                        c: x.o.SPARK_GREEN
                                    }), (0, s.jsx)(h.Ay, {
                                        s: h.ah.L,
                                        p: "br",
                                        c: x.o.SPARK_GREEN
                                    }), (0, s.jsxs)("div", {
                                        className: f().graphicInner,
                                        style: {
                                            maskImage: "url(/assets/images/features-bg-graphic.svg)"
                                        },
                                        children: [!_ && (0, s.jsx)("video", {
                                            src: `/assets/videos/feature-${l}.mp4`,
                                            poster: `/assets/videos/feature-${l}.jpg`,
                                            muted: !0,
                                            loop: !0,
                                            className: f().graphicVideo,
                                            playsInline: !0,
                                            ref: m
                                        }), _ && (0, s.jsx)(v.default, {
                                            src: `/assets/videos/feature-${l}-fallback.jpg`,
                                            width: 660,
                                            height: 660,
                                            className: f().graphicImage,
                                            alt: t
                                        }), (0, s.jsx)("h3", {
                                            className: u()(f().title, o().h3),
                                            children: t
                                        })]
                                    }), "vaultbridge" === a ? (0, s.jsx)(L, {
                                        className: f().icon
                                    }) : "col" === a ? (0, s.jsx)(j, {
                                        className: f().icon
                                    }) : "coreApps" === a ? (0, s.jsx)(y, {
                                        className: f().icon
                                    }) : "ausd" === a ? (0, s.jsx)(b, {
                                        className: f().icon
                                    }) : (0, s.jsx)(M, {
                                        className: f().icon
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: f().text,
                                    children: (0, s.jsx)("p", {
                                        className: o().p,
                                        children: r
                                    })
                                })]
                            }), (0, s.jsx)(g, {}), (0, s.jsx)(h.Ay, {
                                s: h.ah.M,
                                p: "tl"
                            }), (0, s.jsx)(h.Ay, {
                                s: h.ah.M,
                                p: "tr"
                            }), (0, s.jsx)(h.Ay, {
                                s: h.ah.M,
                                p: "bl"
                            }), (0, s.jsx)(h.Ay, {
                                s: h.ah.M,
                                p: "br"
                            }), !!i && !!i.cached_url && (0, s.jsx)(w.default, {
                                href: i.cached_url,
                                className: f().link,
                                children: (0, s.jsx)(s.Fragment, {})
                            })]
                        })
                    })
                };
            var E = r(6341),
                k = r(6577);
            let R = e => {
                let {
                    title: t,
                    features: r
                } = e, [l, a] = (0, n.useState)(!1), {
                    scroll: d
                } = (0, n.useContext)(E.z), m = (0, n.useRef)(null), f = (0, n.useRef)(null), _ = (0, n.useRef)([]);
                return (0, n.useEffect)(() => {
                    f.current && (_.current = Array.from(f.current ? .children))
                }, []), (0, n.useEffect)(() => {
                    let e = () => {
                        let e = m.current,
                            t = f.current,
                            r = _.current;
                        if (!r || !e || !t) return;
                        let s = window.innerHeight,
                            n = window.innerWidth,
                            l = e.getBoundingClientRect(),
                            i = -(l.top - s),
                            o = i / l.height;
                        a(o > 0 && o < 1);
                        let c = t.getBoundingClientRect(),
                            d = l.width + c.width,
                            u = -c.width + d * o,
                            h = i - s / 2 - c.height / 2;
                        t.style.setProperty("transform", `translate(${u.toFixed(k.N2)}px, ${h.toFixed(k.N2)}px)`), r.forEach(e => {
                            let t = e.getBoundingClientRect(),
                                r = (t.left + t.width / 2 - n / 2) / (.5 * n),
                                s = .25 * Math.PI * (r = Math.max(-2, r = Math.min(2, r))),
                                l = (-(50 * r)).toFixed(2),
                                i = Math.cos(s - Math.PI / 2) * (.1 * t.width),
                                a = -500 + -500 * Math.sin(s - Math.PI / 2);
                            e.style.setProperty("transform", `translate3d(0, ${l}%, 0)`), e.style.setProperty("--rot", s.toFixed(2) + "rad"), e.style.setProperty("--z", a.toFixed(2) + "px"), e.style.setProperty("--x", i.toFixed(2) + "%"), e.style.setProperty("--per", Math.min(r).toFixed(3))
                        })
                    };
                    return d ? .on("scroll", e), () => {
                        d ? .off("scroll", e)
                    }
                }, [d]), (0, s.jsxs)("div", {
                    ref: m,
                    className: u()(i().client, {
                        [i().inView]: l,
                        [i().visible]: l
                    }),
                    id: "features",
                    children: [(0, s.jsx)("div", {
                        className: i().container,
                        children: (0, s.jsxs)("div", {
                            className: i().header,
                            children: [(0, s.jsx)(h.Ay, {
                                p: "tl",
                                className: i().headerCorner
                            }), (0, s.jsx)(c.default, {
                                tag: "h2",
                                className: u()(o().h2),
                                visible: l,
                                children: t
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: i().wrapper,
                        children: (0, s.jsx)("div", {
                            className: i().items,
                            children: (0, s.jsx)("div", {
                                className: i().itemsSlider,
                                ref: f,
                                children: r.map((e, t) => (0, n.createElement)(N, { ...e,
                                    key: t,
                                    index: t
                                }))
                            })
                        })
                    })]
                })
            }
        },
        4460: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => n
            });
            var s = r(2115);
            let n = e => {
                let [t, r] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    let t = window.matchMedia(e);
                    r(t.matches);
                    let s = e => {
                        r(e.matches)
                    };
                    return t.addEventListener("change", s), () => {
                        t.removeEventListener("change", s)
                    }
                }, [e]), t
            }
        },
        4673: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => a
            });
            var s = r(5155),
                n = r(28),
                l = r(5695),
                i = r(2115);
            let a = e => {
                let {
                    href: t,
                    children: r,
                    className: a
                } = e, {
                    setOpen: o
                } = (0, i.useContext)(n.k), c = (0, l.useRouter)(), d = (0, l.usePathname)(), u = () => {
                    o(!0), setTimeout(() => {
                        c.push(t)
                    }, 1500)
                };
                return (0, s.jsx)("a", {
                    href: t,
                    className: a,
                    onClick: e => {
                        e.preventDefault(), t !== d && u()
                    },
                    children: r
                })
            }
        },
        4703: e => {
            e.exports = {
                visionHero: "visionHero_visionHero__xs9_8",
                inner: "visionHero_inner__J5VwR",
                arrowDown: "visionHero_arrowDown__kS8VO",
                visible: "visionHero_visible__tenuq"
            }
        },
        5163: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => p
            });
            var s = r(5155),
                n = r(2115),
                l = r(110),
                i = r.n(l),
                a = r(9300),
                o = r.n(a),
                c = r(5963),
                d = r.n(c),
                u = r(4460),
                h = r(6577),
                m = r(6341);
            let f = e => {
                let {
                    format: t,
                    image: r,
                    index: l
                } = e, {
                    scroll: i
                } = (0, n.useContext)(m.z), a = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    let e = () => {
                        let e = a.current;
                        if (!e) return;
                        let {
                            top: t,
                            height: r
                        } = e.getBoundingClientRect(), s = (t + r) / (window.innerHeight + r);
                        s = Math.min(s = Math.max(s, 0), 1), e.style.setProperty("--y", s.toFixed(3))
                    };
                    return e(), i ? .on("scroll", e), () => {
                        i ? .off("scroll", e)
                    }
                }, [i, l]);
                let c = t.split("-")[0],
                    f = (0, u.N)(h.qp) ? "-mobile" : "",
                    _ = `/assets/images/divider-${t}${f}.svg`;
                return (0, s.jsxs)("div", {
                    className: o()(d().dividerElement, d()[c]),
                    style: {
                        maskImage: `url(${_})`
                    },
                    ref: a,
                    "data-index": l,
                    children: [(0, s.jsx)("img", {
                        src: `/assets/images/divider-${t}-stroke${f}.svg`,
                        alt: "",
                        className: d().stroke
                    }), !!r && (0, s.jsx)("img", {
                        src: r,
                        alt: "",
                        className: d().image
                    })]
                })
            };
            var _ = r(4036);
            let p = e => {
                let {
                    scroll: t
                } = (0, n.useContext)(m.z), r = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    let e = () => {
                        let e = r.current;
                        if (!e) return;
                        let {
                            top: t,
                            height: s
                        } = e.getBoundingClientRect(), n = t / s, l = Math.min(n, 2);
                        l = Math.max(n, 0);
                        let i = (0, _.AU)(l, 0, 2, 1);
                        e.style.setProperty("--y-in", `${i.toFixed(3)}`);
                        let a = n;
                        a = 1 - Math.abs(a = a >= -1 && a <= 1 ? Math.sin(n / 2 * Math.PI) : 1), e.style.setProperty("--div", `${a.toFixed(3)}`)
                    };
                    return e(), t ? .on("scroll", e), () => {
                        t ? .off("scroll", e)
                    }
                }, [t]), (0, s.jsx)("div", {
                    className: i().client,
                    ref: r,
                    children: (0, s.jsx)("div", {
                        className: i().inner,
                        children: e.items.map((e, t) => (0, s.jsx)(f, { ...e,
                            index: t
                        }, t))
                    })
                })
            }
        },
        5197: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => g
            });
            var s = r(5155),
                n = r(2115),
                l = r(9573),
                i = r(7106),
                a = r.n(i),
                o = r(1043),
                c = r.n(o),
                d = r(7566),
                u = r(3096),
                h = r(6341),
                m = r(9300),
                f = r.n(m),
                _ = r(1915),
                p = r(9009),
                x = r(7299);
            let g = e => {
                let {
                    blok: t
                } = e, {
                    ref: r,
                    inView: i
                } = (0, u.Wx)(), o = (0, n.useRef)(null), {
                    scroll: m
                } = (0, n.useContext)(h.z), {
                    loaderCurtainComplete: g
                } = (0, n.useContext)(x.v);
                return (0, n.useEffect)(() => {
                    let e = o.current,
                        t = () => {
                            if (!e) return;
                            let t = e.getBoundingClientRect(),
                                r = window.innerHeight,
                                s = Math.min(2, Math.max(0, (r - t.top) / r - 1)).toFixed(3);
                            e.style.setProperty("--y", s)
                        };
                    return t(), m ? .on("scroll", t), () => {
                        m ? .off("scroll", t)
                    }
                }, [m]), (0, s.jsxs)("div", { ...(0, _.K1)(t),
                    className: f()(a().inner, {
                        [a().visible]: i && g
                    }),
                    ref: o,
                    id: "heroFrontpage",
                    style: {
                        "--titleMaxMobile": t.titleMaxMobile
                    },
                    children: [(0, s.jsx)("div", {
                        className: a().scrollView,
                        ref: r
                    }), (0, s.jsx)("div", {
                        className: a().fixed,
                        children: (0, s.jsxs)("div", {
                            className: a().container,
                            children: [(0, s.jsx)(l.default, {
                                className: f()(c().h1, a().title),
                                tag: "h1",
                                visible: i && g,
                                children: t.title
                            }), !!t.text.length && (0, s.jsx)(p.default, {
                                className: f()(c().p, a().text),
                                visible: i && g,
                                children: t.text
                            }), t.button.map((e, t) => (0, n.createElement)(d.default, { ...e,
                                key: t,
                                className: a().button,
                                important: !0
                            }))]
                        })
                    })]
                })
            }
        },
        5753: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => d,
                ah: () => c
            });
            var s = r(5155),
                n = r(9300),
                l = r.n(n),
                i = r(761),
                a = r.n(i),
                o = r(8664),
                c = function(e) {
                    return e[e.S = 6] = "S", e[e.M = 9] = "M", e[e.L = 12] = "L", e
                }({});
            let d = e => {
                let {
                    s: t,
                    c: r,
                    p: n,
                    o: i,
                    className: c
                } = e, d = t || 12, u = r || o.o.RISO;
                return (0, s.jsxs)("svg", {
                    width: d,
                    height: d,
                    viewBox: `0 0 ${d} ${d}`,
                    xmlns: "http://www.w3.org/2000/svg",
                    className: l()(a().corner, a()[n], c),
                    style: {
                        opacity: i ? `${i}` : void 0
                    },
                    children: [(0, s.jsx)("line", {
                        x1: "0",
                        y1: "0",
                        x2: d,
                        y2: "0",
                        stroke: u,
                        strokeWidth: 2
                    }), (0, s.jsx)("line", {
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: d,
                        stroke: u,
                        strokeWidth: 2
                    })]
                })
            }
        },
        5963: e => {
            e.exports = {
                dividerElement: "dividerElement_dividerElement__gQnXW",
                medium: "dividerElement_medium__gDg5_",
                large: "dividerElement_large__eyTza",
                stroke: "dividerElement_stroke___nL9e",
                video: "dividerElement_video__8knVQ",
                image: "dividerElement_image__ZGdH6"
            }
        },
        6131: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => y
            });
            var s = r(5155),
                n = r(2115),
                l = r(9573),
                i = r(7566),
                a = r(374),
                o = r.n(a),
                c = r(1043),
                d = r.n(c),
                u = r(9300),
                h = r.n(u),
                m = r(6341),
                f = r(8813),
                _ = r.n(f);
            let p = ["/assets/stickers/arcade_katana.png", "/assets/stickers/flame_katana.png", "/assets/stickers/floppy_katana.png", "/assets/stickers/gameboy_katana.png", "/assets/stickers/goggles_katana.png", "/assets/stickers/headset_katana.png", "/assets/stickers/monitor_katana.png", "/assets/stickers/pager_katana.png", "/assets/stickers/tanto_sword_katana.png", "/assets/stickers/arcade_katana_red.png", "/assets/stickers/flame_katana_red.png", "/assets/stickers/floppy_katana_red.png", "/assets/stickers/gameboy_katana_red.png", "/assets/stickers/goggles_katana_red.png", "/assets/stickers/headset_katana_red.png", "/assets/stickers/monitor_katana_red.png", "/assets/stickers/pager_katana_red.png", "/assets/stickers/tanto_sword_katana_red.png"],
                x = e => {
                    let {
                        src: t,
                        x: r,
                        y: l,
                        onRemove: i
                    } = e, [a, o] = (0, n.useState)(), c = (0, n.useRef)(null), d = (0, n.useRef)(Math.random()), u = (0, n.useRef)(Math.random());
                    return (0, n.useEffect)(() => {
                        if (i) return c.current = setTimeout(i, 3e3), () => {
                            clearTimeout(c.current)
                        }
                    }, []), (0, n.useEffect)(() => {
                        o(!0)
                    }, []), (0, s.jsx)("div", {
                        className: h()(_().imageElement, {
                            [_().visible]: a
                        }),
                        style: {
                            left: `${r}%`,
                            top: `${l}%`,
                            "--rot1": `${15-30*d.current}deg`,
                            "--rot2": `${15-30*u.current}deg`
                        },
                        children: (0, s.jsx)("img", {
                            src: t,
                            alt: "",
                            className: _().image
                        })
                    })
                },
                g = e => {
                    let {
                        inView: t
                    } = e, r = (0, n.useRef)(null), l = (0, n.useRef)(null), [i, a] = (0, n.useState)([]), o = (0, n.useRef)([]), c = (0, n.useRef)(0), d = (0, n.useRef)(0), u = (0, n.useRef)(null), h = (0, n.useRef)(200);
                    (0, n.useEffect)(() => {
                        let e = u.current,
                            t = () => {
                                e && (h.current = e.children[0].clientWidth)
                            };
                        return t(), window.addEventListener("resize", t), () => {
                            window.removeEventListener("resize", t)
                        }
                    }, []);
                    let m = (0, n.useCallback)((e, t) => {
                            c.current = c.current + 1;
                            let r = d.current;
                            for (; r === d.current;) r = Math.floor(Math.random() * p.length);
                            d.current = r;
                            let s = [...o.current, {
                                src: p[r],
                                x: e,
                                y: t,
                                index: c.current
                            }];
                            o.current = s, a(s)
                        }, []),
                        f = () => {
                            let e = [...o.current];
                            e.shift(), o.current = e, a(e)
                        };
                    return (0, n.useEffect)(() => {
                        0 === i.length && (l.current = null)
                    }, [i]), (0, n.useEffect)(() => {
                        t && (l.current = null)
                    }, [t]), (0, n.useEffect)(() => {
                        let e = r.current,
                            s = .5 * h.current,
                            n = r => {
                                if (!e || !t || r.target instanceof HTMLInputElement) return;
                                let n = 0;
                                l.current ? n = Math.sqrt(Math.pow(r.clientX - l.current.x, 2) + Math.pow(r.clientY - l.current.y, 2)) : (l.current = {
                                    x: r.clientX,
                                    y: r.clientY
                                }, n = s), n >= s && (m(100 / e.clientWidth * r.clientX, 100 / e.clientHeight * (r.clientY - e.getBoundingClientRect().top)), l.current = {
                                    x: r.clientX,
                                    y: r.clientY
                                })
                            };
                        return document.addEventListener("mousemove", n), () => {
                            document.removeEventListener("mousemove", n)
                        }
                    }, [m, t]), (0, s.jsxs)("div", {
                        className: _().imageTrail,
                        ref: r,
                        children: [(0, s.jsx)("div", {
                            className: _().dummy,
                            ref: u,
                            children: (0, s.jsx)(x, {
                                src: p[0],
                                x: 50,
                                y: 50,
                                index: -1
                            }, "img-dummy")
                        }), i.map(e => (0, n.createElement)(x, { ...e,
                            key: `img${e.index}`,
                            onRemove: f
                        }))]
                    })
                };
            var v = r(3461),
                C = r(9324),
                w = r.n(C);
            let j = e => {
                    let {
                        src: t,
                        className: r
                    } = e, {
                        scroll: l
                    } = (0, n.useContext)(m.z), i = (0, n.useRef)(Math.round(10 * Math.random()) / 10), a = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        let e = a.current,
                            t = () => {
                                if (!e) return;
                                let t = (e.getBoundingClientRect().top - window.innerHeight / 2) / (window.innerHeight / 2);
                                t > -2 && t < 2 && e.style.setProperty("--delta", `${t.toFixed(3)}`)
                            };
                        return t(), l ? .on("scroll", t), () => {
                            l ? .on("scroll", t)
                        }
                    }, [l]), (0, s.jsx)("div", {
                        className: r,
                        style: {
                            transitionDelay: `${.5*i.current}s`
                        },
                        ref: a,
                        children: (0, s.jsx)("div", {
                            className: w().offset,
                            children: (0, s.jsx)("img", {
                                className: w().img,
                                src: t,
                                alt: ""
                            })
                        })
                    })
                },
                L = e => {
                    let {
                        visible: t
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: h()(w().newsletterMobileSticker, {
                            [w().visible]: t
                        }),
                        children: [(0, s.jsx)(j, {
                            src: "/assets/stickers/headset_katana.png",
                            className: w().topHeadset
                        }), (0, s.jsx)(j, {
                            src: "/assets/stickers/tanto_sword_katana_red.png",
                            className: w().topSword
                        }), (0, s.jsx)(j, {
                            src: "/assets/stickers/floppy_katana_red.png",
                            className: w().topFloppy
                        }), (0, s.jsx)(j, {
                            src: "/assets/stickers/flame_katana.png",
                            className: w().topFlame
                        }), (0, s.jsx)(j, {
                            src: "/assets/stickers/flame_katana_red.png",
                            className: w().topFlameRed
                        })]
                    })
                },
                y = e => {
                    let {
                        title: t,
                        button: r
                    } = e, {
                        scroll: a
                    } = (0, n.useContext)(m.z), [c, u] = (0, n.useState)(!1), f = (0, n.useRef)(null), [_, p] = (0, n.useState)(null);
                    return (0, n.useEffect)(() => {
                        let e = () => {
                            let e = f.current;
                            if (!e) return;
                            let t = window.innerHeight,
                                {
                                    top: r
                                } = e.getBoundingClientRect(),
                                s = (r - t / 2) / (t / 2);
                            e.style.setProperty("--y", s.toFixed(3)), u(s < 1 && s > -1)
                        };
                        return a ? .on("scroll", e), () => {
                            a ? .off("scroll", e)
                        }
                    }, [a]), (0, n.useEffect)(() => {
                        p(!(0, v.A)().any)
                    }, []), (0, s.jsx)("div", {
                        className: h()(o().newsletter, {
                            [o().visible]: c
                        }),
                        ref: f,
                        children: (0, s.jsxs)("div", {
                            className: o().inner,
                            children: [!0 === _ && (0, s.jsx)(g, {
                                inView: c
                            }), !1 === _ && (0, s.jsx)(L, {
                                visible: c
                            }), (0, s.jsx)(l.default, {
                                tag: "h2",
                                visible: c,
                                className: d().h2,
                                children: t
                            }), r.map((e, t) => (0, n.createElement)(i.default, { ...e,
                                key: t,
                                className: o().button,
                                newsletter: !0
                            }))]
                        })
                    })
                }
        },
        6341: (e, t, r) => {
            "use strict";
            r.d(t, {
                ScrollContextProvider: () => o,
                z: () => a
            });
            var s = r(5155),
                n = r(2810),
                l = r(5695),
                i = r(2115);
            let a = (0, i.createContext)({
                    scroll: null
                }),
                o = e => {
                    let {
                        children: t
                    } = e, [r, o] = (0, i.useState)(null), c = (0, i.useRef)(0), d = (0, l.usePathname)(), u = (0, i.useRef)(!1), h = (0, i.useRef)(!1);
                    return (0, i.useEffect)(() => {
                        if (!u.current) {
                            let e = new n.A({
                                smoothWheel: !0,
                                syncTouch: !0,
                                touchInertiaMultiplier: 10
                            });
                            e.scrollTo(0, {
                                immediate: !0
                            }), e.stop(), o(e), u.current = !0
                        }
                    }, []), (0, i.useEffect)(() => {
                        let e = t => {
                            r ? .raf(t), c.current = requestAnimationFrame(e)
                        };
                        return r && !h.current && (r.stop(), h.current = !0), c.current = requestAnimationFrame(e), () => {
                            cancelAnimationFrame(c.current)
                        }
                    }, [r]), (0, i.useEffect)(() => {
                        r ? .scrollTo(0, {
                            immediate: !0
                        })
                    }, [d, r]), (0, s.jsx)(a.Provider, {
                        value: {
                            scroll: r
                        },
                        children: t
                    })
                }
        },
        6577: (e, t, r) => {
            "use strict";
            r.d(t, {
                BT: () => l,
                N2: () => s,
                qp: () => n
            });
            let s = 3,
                n = "(max-width: 739px)",
                l = "cookies"
        },
        6799: e => {
            e.exports = {
                curtainPlane: "curtainPlane_curtainPlane__CmNVi",
                open: "curtainPlane_open__EF8yI",
                rotated: "curtainPlane_rotated__SDAfx"
            }
        },
        6925: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var s = r(5155);
            let n = e => {
                let { ...t
                } = e;
                return (0, s.jsx)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...t,
                    children: (0, s.jsx)("path", {
                        d: "M18.901 1.15302H22.581L14.541 10.343L24 22.846H16.594L10.794 15.262L4.156 22.846H0.474L9.074 13.016L0 1.15402H7.594L12.837 8.08602L18.901 1.15302ZM17.61 20.644H19.649L6.486 3.24002H4.298L17.61 20.644Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        6933: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => v
            });
            var s = r(5155),
                n = r(2115),
                l = r(3005),
                i = r(2154),
                a = r.n(i),
                o = r(9300),
                c = r.n(o),
                d = r(6341),
                u = r(6766),
                h = r(1609),
                m = r.n(h),
                f = r(1043),
                _ = r.n(f),
                p = r(9573),
                x = r(9009);
            let g = e => {
                    let {
                        visible: t,
                        icon: r,
                        text: n,
                        author: l
                    } = e;
                    return (0, s.jsx)("div", {
                        className: c()(m().item, {
                            [m().visible]: t
                        }),
                        children: (0, s.jsxs)("div", {
                            className: m().itemInner,
                            children: [!!r && !!r.filename && (0, s.jsx)(u.default, {
                                src: r.filename,
                                alt: "",
                                width: 160,
                                height: 160,
                                className: c()(m().icon, {
                                    [m().visible]: t
                                })
                            }), (0, s.jsx)(p.default, {
                                tag: "p",
                                className: c()(_().quote, m().headline),
                                visible: t,
                                children: `“${n}”`
                            }), !!l && (0, s.jsx)(x.default, {
                                className: m().author,
                                visible: t,
                                children: l
                            })]
                        })
                    })
                },
                v = e => {
                    let {
                        blok: t
                    } = e, [r, i] = (0, n.useState)(0), o = (0, n.useRef)([]), [u, h] = (0, n.useState)(0), m = (0, n.useRef)(null), {
                        scroll: f
                    } = (0, n.useContext)(d.z), [_, p] = (0, n.useState)(!1), x = (0, n.useRef)(null), v = (0, n.useRef)(0);
                    (0, n.useEffect)(() => {
                        let e = () => {
                            o.current && h(Math.max(...o.current.filter(e => null !== e).map(e => e.offsetHeight)))
                        };
                        return e(), window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), (0, n.useEffect)(() => {
                        let e = () => {
                            let e = m.current;
                            if (!e) return;
                            let t = window.innerHeight,
                                {
                                    top: r,
                                    height: s
                                } = e.getBoundingClientRect(),
                                n = (r + s / 2 - t / 2) / t,
                                l = 0;
                            p((l = Math.min(Math.max(l = n < .5 ? (n + .5) / .2 : 1 - (n - .8) / .2, 0), 1)) > 0), e.style.setProperty("--y", n.toFixed(3)), e.style.setProperty("opacity", l.toFixed(3))
                        };
                        return f && e(), f ? .on("scroll", e), () => {
                            f ? .off("scroll", e)
                        }
                    }, [f]), (0, n.useEffect)(() => {
                        let e = () => {
                            x.current = setTimeout(() => {
                                i((v.current + 1) % t.quotes.length), e()
                            }, 5e3)
                        };
                        _ ? e() : clearTimeout(x.current)
                    }, [_, t.quotes.length]), (0, n.useEffect)(() => {
                        v.current = r
                    }, [r]);
                    let C = e => {
                        i(e), clearTimeout(x.current)
                    };
                    return (0, s.jsx)("div", {
                        className: c()(a().client, {
                            [a().visible]: _
                        }),
                        ref: m,
                        children: (0, s.jsx)("div", {
                            className: a().fixed,
                            children: (0, s.jsx)(l.A, {
                                onSwipeLeft: () => i(r === t.quotes.length - 1 ? 0 : r + 1),
                                onSwipeRight: () => i(0 === r ? t.quotes.length - 1 : r - 1),
                                children: (0, s.jsxs)("div", {
                                    className: a().container,
                                    style: {
                                        height: `${u}px`
                                    },
                                    children: [t.quotes.map((e, t) => (0, s.jsx)("div", {
                                        ref: e => {
                                            o.current[t] = e
                                        },
                                        className: a().item,
                                        children: (0, n.createElement)(g, { ...e,
                                            visible: t === r,
                                            key: e._uid
                                        })
                                    }, t)), (0, s.jsx)("div", {
                                        className: a().dots,
                                        children: t.quotes.map((e, t) => (0, s.jsx)("div", {
                                            className: c()(a().dotsItem, {
                                                [a().active]: t === r
                                            }),
                                            onClick: () => C(t)
                                        }, t))
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        7106: e => {
            e.exports = {
                heroFrontpage: "heroFrontpage_heroFrontpage__jl6_0",
                fixed: "heroFrontpage_fixed__A59Hq",
                container: "heroFrontpage_container__i6CUj",
                mascot: "heroFrontpage_mascot__arofM",
                logo: "heroFrontpage_logo__Npiuo",
                visible: "heroFrontpage_visible__7sJ3l",
                inner: "heroFrontpage_inner__Xgmse",
                scrollView: "heroFrontpage_scrollView__Bml5h",
                title: "heroFrontpage_title__ceesP",
                text: "heroFrontpage_text__1_g_Y",
                button: "heroFrontpage_button__wEMqN"
            }
        },
        7299: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => L,
                LoaderContextProvider: () => y
            });
            var s = r(5155),
                n = r(9300),
                l = r.n(n),
                i = r(1397),
                a = r.n(i),
                o = r(2475),
                c = r(8664),
                d = r(2115);
            let u = e => {
                let {
                    progress: t,
                    complete: r
                } = e, n = (0, d.useRef)(null), i = (0, d.useRef)(null), [u, h] = (0, d.useState)(!1), m = (0, d.useRef)(0);
                return (0, d.useEffect)(() => {
                    let e = n.current;
                    e && t > m.current && (m.current = t, e.style.setProperty("--progress", t.toFixed(3)))
                }, [t]), (0, d.useEffect)(() => {
                    h(!0)
                }, []), (0, s.jsxs)("div", {
                    className: l()(a().loaderVisual, {
                        [a().complete]: r,
                        [a().init]: u
                    }),
                    ref: i,
                    children: [(0, s.jsx)(o.A, {
                        c: c.o.BLUE02,
                        d: .5,
                        rotated: !0,
                        open: r
                    }), (0, s.jsx)(o.A, {
                        c: c.o.BLUE02,
                        d: .5,
                        open: r
                    }), (0, s.jsx)(o.A, {
                        c: c.o.BLUE03,
                        d: .2 + .1,
                        rotated: !0,
                        open: r
                    }), (0, s.jsx)(o.A, {
                        c: c.o.BLUE03,
                        d: .2 + .1,
                        open: r
                    }), (0, s.jsx)(o.A, {
                        c: "url(#gradient)",
                        rotated: !0,
                        open: r,
                        d: .1
                    }), (0, s.jsx)(o.A, {
                        c: "url(#gradientRot)",
                        open: r,
                        d: .1
                    }), (0, s.jsxs)("div", {
                        className: a().logo,
                        ref: n,
                        children: [(0, s.jsx)("div", {
                            className: a().logoInner
                        }), (0, s.jsx)("div", {
                            className: a().logoOutline,
                            "data-index": "1"
                        }), (0, s.jsx)("div", {
                            className: a().logoOutline,
                            "data-index": "2"
                        }), (0, s.jsx)("div", {
                            className: a().logoOutline,
                            "data-index": "3"
                        })]
                    })]
                })
            };
            var h = r(3577),
                m = r.n(h),
                f = r(3264),
                _ = r(5286),
                p = r(9311),
                x = r(31);
            let g = {
                models: {},
                textures: {},
                hdri: {}
            };
            class v {
                constructor() {
                    this.assets = g
                }
                load(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
                        s = new f.KPJ(() => {
                            t(this.assets)
                        }, (e, t, s) => {
                            r(t, s)
                        }),
                        n = new _.Z;
                    if (n.setDecoderConfig({
                            type: "js"
                        }), n.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"), e.models) {
                        this.assets.models = {};
                        let t = new p.B(s);
                        t.setDRACOLoader(n), Object.keys(e.models).forEach(r => {
                            let s = e.models[r];
                            t.load(s, e => {
                                this.assets.models[r] = e
                            })
                        })
                    }
                    if (e.textures) {
                        let t = new f.Tap(s);
                        Object.keys(e.textures).forEach(r => {
                            let s = e.textures[r],
                                n = [];
                            s.forEach((e, r) => {
                                t.load(e, e => {
                                    n[r] = e
                                })
                            }), this.assets.textures[r] = n
                        })
                    }
                    if (e.hdri) {
                        let t = new x.Y(s);
                        Object.keys(e.hdri).forEach(r => {
                            let s = e.hdri[r];
                            t.load(s, e => {
                                e.mapping = f.wfO, e.needsUpdate = !0, e.mapping = f.wfO, this.assets.hdri[r] = e
                            })
                        })
                    }
                }
            }
            class C {
                constructor(e, t, r, s) {
                    this.fontsToLoad = e, this.assetsToLoad = t, this.onComplete = r, this.onProgress = s, this.assetsLoaded = !1, this.fontsLoaded = !1, this.load = () => {
                        this.startAssetloading(), this.startFontLoading()
                    }, this.segmentLoaded = () => {
                        this.assetsLoaded && this.fontsLoaded && (this.onComplete(this.assetLoader.assets), window.dispatchEvent(new Event("resize")))
                    }, this.startAssetloading = () => {
                        this.assetLoader.load(this.assetsToLoad, () => {
                            this.assetsLoaded = !0, this.segmentLoaded()
                        }, (e, t) => {
                            this.onProgress(e / t)
                        })
                    }, this.startFontLoading = () => {
                        let e = 0,
                            t = () => {
                                ++e === this.fontsToLoad.length && (this.fontsLoaded = !0, this.segmentLoaded())
                            };
                        this.fontsToLoad.forEach(e => {
                            new(m())(e).load().then(function() {
                                t()
                            }).catch(function() {
                                console.warn("font not loaded", e), t()
                            })
                        })
                    }, this.assetLoader = new v
                }
            }
            var w = r(6341),
                j = r(3160);
            let L = (0, d.createContext)({
                    assets: null,
                    complete: !1,
                    loaderCurtainComplete: !1,
                    gui: null,
                    dialogueDone: !1,
                    setDialogueDone: () => {}
                }),
                y = e => {
                    let {
                        children: t,
                        assetData: r,
                        fontData: n
                    } = e, {
                        scroll: l
                    } = (0, d.useContext)(w.z), [i, a] = (0, d.useState)(!1), [o, c] = (0, d.useState)(!1), [h, m] = (0, d.useState)(!1), [f, _] = (0, d.useState)(!1), [p, x] = (0, d.useState)(!1), [g, v] = (0, d.useState)(null), [y, b] = (0, d.useState)(0), [M, N] = (0, d.useState)(null), E = (0, d.useRef)(!1);
                    return (0, d.useEffect)(() => {
                        if (!E.current && l) {
                            new C(n, r, e => {
                                v(e), a(!0)
                            }, e => b(Math.round(100 * e) / 100)).load();
                            let e = new j.Ay;
                            e.hide(), N(e), E.current = !0
                        }
                    }, [r, n, l]), (0, d.useEffect)(() => {
                        setTimeout(() => {
                            c(!0)
                        }, 2e3)
                    }, []), (0, d.useEffect)(() => {
                        _(i && o)
                    }, [i, o]), (0, d.useEffect)(() => {
                        f && l ? .start()
                    }, [f, l]), (0, d.useEffect)(() => {
                        f && setTimeout(() => x(!0), 700)
                    }, [f]), (0, s.jsxs)(L.Provider, {
                        value: {
                            complete: f,
                            loaderCurtainComplete: p,
                            dialogueDone: h,
                            assets: g,
                            gui: M,
                            setDialogueDone: m
                        },
                        children: [(0, s.jsx)(u, {
                            progress: y,
                            complete: f
                        }), t]
                    })
                }
        },
        7460: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var s = r(5155);
            let n = e => {
                let { ...t
                } = e;
                return (0, s.jsx)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...t,
                    children: (0, s.jsx)("g", {
                        clipPath: "url(#clip0_1273_5814)",
                        children: (0, s.jsx)("path", {
                            d: "M20.3175 4.3605C18.7614 3.64587 17.1192 3.13612 15.432 2.844C15.4167 2.84142 15.401 2.84365 15.3871 2.85036C15.3731 2.85708 15.3615 2.86795 15.354 2.8815C15.1425 3.2565 14.9085 3.747 14.745 4.131C12.9264 3.85524 11.0766 3.85524 9.25801 4.131C9.0764 3.70288 8.87005 3.28567 8.64001 2.8815C8.63248 2.86795 8.62093 2.85708 8.60696 2.85036C8.593 2.84365 8.57729 2.84142 8.56201 2.844C6.87451 3.135 5.23201 3.645 3.67651 4.3605C3.66313 4.36547 3.65196 4.37504 3.64501 4.3875C0.534009 9.036 -0.319491 13.5705 0.0990092 18.048C0.102009 18.07 0.112509 18.0885 0.130509 18.1035C1.94246 19.4448 3.96866 20.4693 6.12301 21.1335C6.13822 21.1383 6.15457 21.1381 6.16967 21.133C6.18478 21.1279 6.19786 21.1181 6.20701 21.105C6.67001 20.475 7.07901 19.8105 7.43401 19.1115C7.44139 19.0971 7.44391 19.0807 7.44121 19.0648C7.43851 19.0488 7.43072 19.0342 7.41901 19.023L7.39201 19.0065C6.74605 18.7574 6.1202 18.4591 5.52001 18.114C5.50325 18.1045 5.49079 18.0889 5.48521 18.0705C5.47963 18.0521 5.48134 18.0322 5.49001 18.015L5.51251 17.9865C5.63951 17.8915 5.76351 17.794 5.88451 17.694C5.89511 17.6855 5.90783 17.68 5.9213 17.6781C5.93478 17.6763 5.9485 17.6781 5.96101 17.6835C9.88951 19.4775 14.142 19.4775 18.0225 17.6835C18.0354 17.6775 18.0497 17.6754 18.0638 17.6772C18.0779 17.6791 18.0911 17.6849 18.102 17.694C18.223 17.794 18.347 17.8915 18.474 17.9865C18.4846 17.9937 18.4931 18.0035 18.4988 18.015C18.5045 18.0264 18.5072 18.0391 18.5066 18.0519C18.506 18.0647 18.5021 18.0771 18.4954 18.088C18.4886 18.0988 18.4792 18.1078 18.468 18.114C17.8704 18.4645 17.2436 18.7626 16.5945 19.005C16.5842 19.0087 16.5748 19.0147 16.567 19.0225C16.5592 19.0303 16.5533 19.0397 16.5495 19.05C16.5459 19.06 16.5444 19.0706 16.5451 19.0812C16.5459 19.0918 16.5489 19.1022 16.554 19.1115C16.914 19.809 17.3265 20.475 17.7795 21.105C17.7887 21.1181 17.8017 21.1279 17.8168 21.133C17.832 21.1381 17.8483 21.1383 17.8635 21.1335C20.0221 20.473 22.0519 19.4482 23.865 18.1035C23.874 18.0971 23.8815 18.0889 23.887 18.0793C23.8924 18.0697 23.8957 18.059 23.8965 18.048C24.3975 12.8715 23.058 8.3745 20.3475 4.389C20.3452 4.38219 20.3412 4.37605 20.336 4.3711C20.3308 4.36614 20.3244 4.3625 20.3175 4.3605ZM8.02051 15.321C6.83701 15.321 5.86351 14.235 5.86351 12.903C5.86351 11.571 6.81901 10.4835 8.02051 10.4835C9.23101 10.4835 10.1955 11.5785 10.1775 12.903C10.1775 14.235 9.22201 15.321 8.02051 15.321ZM15.9945 15.321C14.8125 15.321 13.8375 14.235 13.8375 12.903C13.8375 11.571 14.793 10.4835 15.9945 10.4835C17.205 10.4835 18.171 11.5785 18.1515 12.903C18.1515 14.235 17.205 15.321 15.9945 15.321Z",
                            fill: "currentColor"
                        })
                    })
                })
            }
        },
        7566: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => v
            });
            var s = r(5155),
                n = r(6874),
                l = r.n(n),
                i = r(9300),
                a = r.n(i),
                o = r(3739),
                c = r.n(o),
                d = r(2115),
                u = r(4673),
                h = r(5753),
                m = r(8664);
            let f = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "26",
                        height: "26",
                        fill: "none",
                        viewBox: "0 0 26 26",
                        ...t,
                        children: (0, s.jsx)("path", {
                            fill: "currentColor",
                            d: "m.046 9.237 3.603 3.603H7.71a5.285 5.285 0 0 1 5.13-5.13V3.664L9.22.046l-.06.03V0H3.862v.076c-.016 0-.092-.03-.092-.03L.046 3.77l.03.061H0V9.13h.076c0 .015-.03.091-.03.091zM7.71 13.16H3.649L.046 16.765l.03.06H0v5.298h.076c0 .016-.03.092-.03.092l3.725 3.74.061-.03V26H9.13v-.076c.015 0 .091.03.091.03l3.619-3.618V18.29a5.285 5.285 0 0 1-5.13-5.13M25.927 3.848l.03-.062L22.232.061l-.06.03V.016h-5.299v.077a1 1 0 0 1-.091-.03L13.163 3.68v4.045a5.285 5.285 0 0 1 5.13 5.13h4.061l3.603-3.603-.03-.06h.076V3.892h-.076v-.045M25.957 16.764l-3.603-3.603h-4.06a5.286 5.286 0 0 1-5.13 5.13v4.045l3.618 3.619.06-.031V26h5.299v-.076c.015 0 .091.03.091.03l3.725-3.74-.03-.061h.076v-5.298h-.076c0-.015.03-.091.03-.091"
                        })
                    })
                },
                _ = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "31",
                        height: "27",
                        viewBox: "0 0 31 27",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: (0, s.jsx)("path", {
                            d: "M30.619 12.736L20.8735 10.5492L26.8293 7.11084C26.9322 7.0523 26.967 6.92096 26.9068 6.81969L23.0317 0.105913C22.9653 -0.0159261 22.7817 -0.0380785 22.69 0.0679369L15.954 7.38142C15.8164 7.21211 16.242 0.24041 15.7404 0.379654H7.98863C7.84939 0.376489 7.73863 0.525227 7.78452 0.65656L10.726 10.0714L4.88254 6.69786C4.77969 6.63931 4.64994 6.67412 4.59139 6.77539L0.714711 13.4892C0.262168 14.073 10.3653 15.7551 10.4602 15.9608L4.58032 19.3564C4.47747 19.415 4.44266 19.5463 4.50278 19.6476L8.37788 26.3613C8.68644 27.0101 15.1803 19.1222 15.4224 19.1238V25.9658C15.4224 26.0844 15.5173 26.1794 15.636 26.1794H23.3878C23.527 26.1825 23.6378 26.0338 23.5919 25.9025L20.6219 16.4006L26.5904 19.8469C26.6885 19.9055 26.8262 19.8691 26.8815 19.7694C26.7945 19.6048 31.3579 12.7312 30.619 12.7407V12.736ZM17.1503 14.3215C17.1424 14.4576 18.0554 14.8911 18.1408 14.9655H15.636C15.2483 14.9386 15.4825 15.9449 15.4224 16.1348L14.2135 14.0398C14.0426 13.6933 13.3179 14.3784 13.1233 14.4227C13.1217 14.3674 14.4746 12.2202 14.3227 12.2186C14.329 12.0809 13.4461 11.6663 13.359 11.5904H15.7404C16.1407 11.6236 15.886 10.4622 15.954 10.2707L17.1977 12.4243C17.3702 12.7866 18.2484 11.986 18.4478 11.9496C18.4588 11.9907 16.981 14.3452 17.1518 14.3199L17.1503 14.3215Z",
                            fill: "currentColor"
                        })
                    })
                };
            var p = r(7460),
                x = r(6925);
            let g = e => {
                    let { ...t
                    } = e;
                    return (0, s.jsx)("svg", {
                        width: "30",
                        height: "32",
                        viewBox: "0 0 30 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...t,
                        children: (0, s.jsx)("path", {
                            d: "M29.0915 16.8015L29.0712 16.7298C28.6719 15.3403 27.1388 14.1348 24.6248 13.2385L24.5052 13.198C24.4794 13.1888 24.4536 13.1796 24.4279 13.1704C23.1156 12.7213 21.6065 12.3717 19.928 12.1306L19.8747 12.1232H19.871C19.617 12.0864 19.3612 12.0551 19.1017 12.0238L18.2312 8.23992L24.0634 9.99016V6.22834L14.6571 0.887451L5.25254 6.2265V9.98832L11.048 8.24912L10.1757 12.0441C9.98241 12.068 9.78917 12.0938 9.59776 12.1195L9.52599 12.1287C7.86225 12.368 6.35127 12.7177 5.04089 13.1667C5.01328 13.1759 4.98752 13.1851 4.96727 13.1925L4.82556 13.2422C2.32627 14.1329 0.793206 15.3384 0.393835 16.7279L0.37359 16.7997C0.318378 17.0114 0.290771 17.2304 0.290771 17.4475C0.290771 17.5083 0.290771 17.569 0.290771 17.6297C0.290771 17.6316 0.290771 17.6334 0.290771 17.6371C0.340463 21.4228 1.8404 24.9822 4.51821 27.6582C7.19786 30.3378 10.7609 31.8396 14.5466 31.8856C14.6074 31.8856 14.6681 31.8875 14.7307 31.8875C14.7933 31.8875 14.8522 31.8875 14.9129 31.8856C14.9147 31.8856 14.9184 31.8856 14.9203 31.8856C18.7042 31.8359 22.2635 30.336 24.9413 27.6582C27.621 24.9785 29.1228 21.4155 29.1688 17.6297C29.1688 17.569 29.1706 17.5083 29.1706 17.4475C29.1706 17.2285 29.143 17.0114 29.0878 16.7997L29.0915 16.8015ZM24.2843 13.4704C24.5475 14.755 24.6818 16.0948 24.6818 17.4494C24.6818 18.8039 24.5475 20.1309 24.2825 21.4284C23.0475 21.848 21.6378 22.1792 20.0826 22.413C20.2464 21.2149 20.3476 19.9689 20.3881 18.6917L20.6495 18.769L20.4047 17.7015C20.4047 17.6169 20.4084 17.534 20.4084 17.4475C20.4084 15.7359 20.298 14.0667 20.0826 12.4839C21.6304 12.7158 23.0383 13.0453 24.2825 13.4685L24.2843 13.4704ZM20.0624 18.5941C20.0237 19.9266 19.917 21.2222 19.7458 22.4627C18.152 22.6835 16.468 22.7976 14.7325 22.7976C12.997 22.7976 11.3259 22.6854 9.71923 22.4627C9.54439 21.2038 9.43765 19.8898 9.40084 18.5389L14.6387 16.9745L20.0605 18.5941H20.0624ZM10.3781 26.9183C9.02907 26.6128 7.75735 26.1656 6.5942 25.5859C6.01631 24.4246 5.56909 23.1528 5.26174 21.8038C6.49114 22.2087 7.88618 22.5271 9.42661 22.7535C9.65114 24.2865 9.97137 25.6852 10.3763 26.9183H10.3781ZM9.76892 22.8013C11.3517 23.0166 13.0209 23.1271 14.7325 23.1271C16.4441 23.1271 18.1152 23.0166 19.6961 22.8013C19.4642 24.3509 19.1348 25.7625 18.7134 27.0011C16.1404 27.5293 13.3246 27.5275 10.7535 27.0011C10.3321 25.7644 10.0027 24.3528 9.77076 22.8013H9.76892ZM20.0366 22.7553C21.5697 22.5308 22.9684 22.2105 24.2015 21.8056C23.896 23.1547 23.4487 24.4246 22.8709 25.5877C21.7096 26.1674 20.4397 26.6128 19.087 26.9202C19.4919 25.6889 19.8102 24.2939 20.0366 22.7553ZM19.7458 12.4379C19.9133 13.6452 20.0182 14.9041 20.0605 16.1979L19.179 12.3643C19.3685 12.3882 19.5581 12.4121 19.7458 12.4379ZM9.71923 12.4379C9.84438 12.4214 9.96953 12.4048 10.0947 12.3901L9.45053 15.1875C9.50574 14.247 9.59408 13.3287 9.71739 12.4379H9.71923ZM5.18076 13.4704C6.41752 13.0508 7.82728 12.7195 9.3806 12.4876C9.18919 13.8918 9.08613 15.3642 9.06404 16.8733L8.62786 18.7708L9.07509 18.6383C9.11373 19.9358 9.2168 21.2001 9.38244 22.4148C7.8328 22.1829 6.4212 21.8517 5.1826 21.432C4.91942 20.1456 4.78323 18.8076 4.78323 17.4512C4.78323 16.0948 4.91758 14.7697 5.1826 13.4704H5.18076ZM4.82004 13.5974C4.5771 14.8452 4.45196 16.139 4.45196 17.4494C4.45196 18.7598 4.5771 20.0536 4.82004 21.3014C2.11279 20.3112 0.622047 18.9475 0.622047 17.4494C0.622047 15.9513 2.11279 14.5875 4.82004 13.5974ZM4.82556 21.6566C4.84949 21.6658 4.87341 21.6731 4.89734 21.6805C5.17524 22.9725 5.58197 24.1982 6.10833 25.33C5.66111 25.0871 5.23045 24.8221 4.82372 24.5405C2.66675 23.0424 1.26251 21.1063 0.796886 19.0156C1.48152 20.0499 2.85079 20.9517 4.8274 21.6566H4.82556ZM4.75378 27.4281C2.83975 25.5141 1.55146 23.1804 0.971726 20.602C1.67845 22.1884 2.91889 23.6221 4.63232 24.8129C5.16788 25.1846 5.74577 25.527 6.34759 25.8325C6.6531 26.4361 6.99541 27.014 7.36902 27.5496C8.55977 29.263 9.99345 30.5053 11.5817 31.212C9.00331 30.6323 6.66966 29.344 4.75378 27.4281ZM7.6414 27.3619C7.35982 26.957 7.0948 26.5245 6.85002 26.0754C7.98188 26.5999 9.2076 27.0067 10.5014 27.2864L10.5253 27.3582C11.2302 29.3348 12.132 30.7022 13.1737 31.3905C11.0793 30.9268 9.14134 29.5225 7.6414 27.3619ZM14.7454 31.5599C14.7454 31.5599 14.7307 31.5599 14.7233 31.5599C13.2289 31.5525 11.8688 30.0636 10.8824 27.3619C12.1302 27.6048 13.424 27.7299 14.7344 27.7299C16.0447 27.7299 17.3422 27.6048 18.5864 27.3619C17.5999 30.0618 16.2398 31.5507 14.7454 31.5599ZM18.9452 27.3398C18.9526 27.3214 18.9581 27.3048 18.9637 27.2864C20.2575 27.0067 21.4832 26.5999 22.615 26.0754C22.3703 26.5245 22.1052 26.9551 21.8237 27.3619C20.3256 29.5188 18.3894 30.9231 16.2987 31.3887C17.333 30.7041 18.2348 29.3311 18.9452 27.3416V27.3398ZM24.7113 27.4281C22.7972 29.3422 20.4636 30.6304 17.8852 31.2102C19.4716 30.5035 20.9053 29.263 22.096 27.5496C22.4678 27.014 22.8101 26.4361 23.1175 25.8343C23.7193 25.5288 24.2972 25.1865 24.8327 24.8147C26.5462 23.624 27.7885 22.1903 28.4952 20.6002C27.9154 23.1786 26.6272 25.5141 24.7113 27.4281ZM24.6432 24.5423C24.2383 24.8239 23.8076 25.0871 23.3586 25.3319C23.8831 24.2 24.2898 22.9743 24.5696 21.6823C24.5935 21.675 24.6174 21.6658 24.6413 21.6584C24.6505 21.6547 24.6616 21.651 24.6726 21.6474C26.6327 20.9443 27.9909 20.0462 28.6737 19.0174C28.2081 21.1081 26.8038 23.0442 24.6469 24.5423H24.6432ZM24.645 21.3014C24.888 20.0536 25.0131 18.7579 25.0131 17.4494C25.0131 16.1408 24.888 14.8452 24.645 13.5974C27.3523 14.5875 28.843 15.9513 28.843 17.4494C28.843 18.9475 27.3523 20.3112 24.645 21.3014Z",
                            fill: "currentColor"
                        })
                    })
                },
                v = e => {
                    let {
                        className: t,
                        text: r,
                        link: n,
                        onClick: i,
                        icon: o,
                        route: v,
                        important: C,
                        active: w,
                        disabled: j,
                        newsletter: L,
                        smaller: y
                    } = e, b = (0, d.useRef)(null), [M, N] = (0, d.useState)(""), E = () => (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                            className: c().inner,
                            children: [(0, s.jsx)(h.Ay, {
                                p: "tl",
                                c: C || w ? m.o.SPARK_GREEN : m.o.RISO,
                                className: c().innerLeft
                            }), (0, s.jsx)(h.Ay, {
                                p: "br",
                                c: C || w ? m.o.SPARK_GREEN : m.o.RISO,
                                className: c().innerRight
                            }), !!o && !L && (0, s.jsx)("span", {
                                className: c().innerIcon,
                                "data-visible": !!o,
                                children: "blog" === o ? (0, s.jsx)(f, {
                                    className: a()(c().icon, c().iconRotate)
                                }) : "discord" === o ? (0, s.jsx)(p.A, {
                                    className: c().icon
                                }) : "twitter" === o ? (0, s.jsx)(x.A, {
                                    className: c().icon
                                }) : "arrow" === o ? (0, s.jsx)(g, {
                                    className: c().icon
                                }) : (0, s.jsx)(_, {
                                    className: a()(c().icon, c().iconRotate)
                                })
                            }), !!o && L && (0, s.jsx)("a", {
                                className: a()(c().innerIcon, c().innerIconLink),
                                href: `${n?.cached_url.replace("%email%",M)}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, s.jsx)(g, {
                                    className: c().icon
                                })
                            }), L ? (0, s.jsx)("input", {
                                className: a()(c().innerMain, c().input),
                                type: "email",
                                placeholder: r,
                                ref: b,
                                id: "newsletter_email",
                                onChange: e => N(e.target.value)
                            }) : (0, s.jsx)("span", {
                                className: c().innerMain,
                                children: (0, s.jsx)("span", {
                                    children: r
                                })
                            }), (0, s.jsx)("div", {
                                className: c().lineTop
                            }), (0, s.jsx)("div", {
                                className: c().lineRight
                            }), (0, s.jsx)("div", {
                                className: c().lineBottom
                            }), (0, s.jsx)("div", {
                                className: c().lineLeft
                            })]
                        })
                    }), k = a()(c().button, t, {
                        [c().active]: w,
                        [c().important]: C,
                        [c().disabled]: j,
                        [c().newsletter]: L,
                        [c().smaller]: y
                    });
                    return L ? (0, s.jsx)("div", {
                        className: k,
                        children: E()
                    }) : v ? (0, s.jsx)(l(), {
                        className: k,
                        href: v,
                        rel: "norefferer",
                        children: E()
                    }) : n ? "url" === n.linktype ? (0, s.jsx)("a", {
                        className: k,
                        href: n.cached_url,
                        onClick: e => {
                            i && (e.preventDefault(), i())
                        },
                        target: n.cached_url.includes("#") ? "_self" : "_blank",
                        rel: "norefferer",
                        children: E()
                    }) : "clickLink" === n.linktype ? (0, s.jsx)("a", {
                        className: k,
                        href: n.cached_url,
                        onClick: e => {
                            i && (e.preventDefault(), i())
                        },
                        children: E()
                    }) : (0, s.jsx)(u.default, {
                        className: k,
                        href: `/${n.cached_url.replace("blog-home","blog")}`,
                        children: E()
                    }) : i ? (0, s.jsx)("button", {
                        className: k,
                        onClick: i,
                        children: E()
                    }) : null
                }
        },
        7746: e => {
            e.exports = {
                quoteSlider: "quoteSlider_quoteSlider__cW0hx",
                client: "quoteSlider_client__0ik9c",
                fixed: "quoteSlider_fixed__X__xE",
                container: "quoteSlider_container__QQDgT",
                dots: "quoteSlider_dots__yYJxN",
                dotsItem: "quoteSlider_dotsItem__6pHN4",
                active: "quoteSlider_active__0_Cj6"
            }
        },
        8177: e => {
            e.exports = {
                animatedParagraph: "animatedParagraph_animatedParagraph__Ae7F_",
                visible: "animatedParagraph_visible__EG_mZ"
            }
        },
        8610: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => $
            });
            var s = r(5155),
                n = r(2115);
            let l = {
                fov: 45
            };
            var i = r(7299),
                a = r(6341);
            let o = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                        s = void 0 !== r ? r : t.position.z;
                    return e < s ? e -= s : e += s, 2 * Math.tan(t.fov * Math.PI / 180 / 2) * Math.abs(e)
                },
                c = (e, t) => o(e, t) * t.aspect;
            var d = r(6059),
                u = r(3264),
                h = r(4036),
                m = r(8664),
                f = r(802),
                _ = r(1401);
            let p = `
  uniform float uThickness;

  varying vec3 vNormal;
    void main() {
        vec3 newPos = position + normal * uThickness;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);

        vNormal = normal;
    }
`,
                x = `
  
    uniform vec3 uColor;
    varying vec3 vNormal;

    void main() {
        vec3 color = vec3(1.0);
        color = uColor;
        gl_FragColor = vec4(color, 1.0);
    }
  
`,
                g = (0, _.b)({
                    uTime: 0,
                    uTexture: null,
                    uColor: new u.Q1f(0),
                    uThickness: .003
                }, p, x);
            (0, d.e)({
                OutlineMaterial: g
            });
            let v = e => {
                let {
                    camera: t,
                    z: r
                } = e, [s, l] = (0, n.useState)(0);
                return (0, n.useEffect)(() => {
                    let e = () => {
                        l(c(r, t))
                    };
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, r]), s
            };
            var C = r(6577),
                w = r(4460);
            let j = e => {
                    let {
                        camera: t,
                        z: r
                    } = e, [s, l] = (0, n.useState)(0);
                    return (0, n.useEffect)(() => {
                        let e = () => {
                            l(o(r, t))
                        };
                        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, [t, r]), s
                },
                L = {
                    thickness: .003,
                    wireframe: !1,
                    lineColor: 0,
                    lightIntensity: 4.5
                },
                y = [{
                    file: "predeposit",
                    color: "#12204B",
                    speed: 1.2
                }, {
                    file: "mainnet",
                    color: "#1443ac",
                    speed: .8
                }, {
                    file: "beyond",
                    color: "#419de7",
                    speed: 1
                }],
                b = () => {
                    let {
                        camera: e
                    } = (0, d.A)(), {
                        assets: t,
                        gui: r
                    } = (0, n.useContext)(i.v), {
                        scroll: l
                    } = (0, n.useContext)(a.z), [c, _] = (0, n.useState)(-1), p = (0, n.useRef)(null), x = (0, n.useRef)(null), b = (0, n.useRef)(null), M = (0, n.useRef)(null), N = (0, n.useRef)([]), E = (0, n.useRef)([]), k = (0, n.useRef)([]), R = (0, n.useRef)([]), I = (0, n.useRef)(0), S = (0, n.useRef)(null), H = (0, w.N)(C.qp), A = (0, n.useRef)(new u.I9Y(0, 0)), P = (0, n.useRef)(0), B = (0, n.useRef)(0), z = (0, n.useRef)(0), F = v({
                        z: 0,
                        camera: e
                    }), q = j({
                        z: 0,
                        camera: e
                    });
                    if ((0, n.useEffect)(() => {
                            p.current = document.getElementById("roadmap");
                            let e = document.getElementById("roadmapInner");
                            e && (x.current = Array.from(e.children)), t ? .textures.roadmapAlpha.forEach(e => {
                                e.wrapS = u.GJx, e.wrapT = u.GJx, e.flipY = !1, e.generateMipmaps = !1, e.needsUpdate = !0, e.colorSpace = u.er$
                            })
                        }, [t]), (0, n.useEffect)(() => {
                            let t = () => {
                                    I.current = o(0, e), r()
                                },
                                r = () => {
                                    let e = p.current,
                                        t = x.current,
                                        r = b.current,
                                        s = M.current,
                                        n = E.current,
                                        l = I.current,
                                        i = window.innerHeight;
                                    if (!e || !t || !r || !s || !n) return !1;
                                    let a = H ? .35 : .5;
                                    r.visible = !0;
                                    let o = e.getBoundingClientRect(),
                                        c = -(o.top - i),
                                        d = c / o.height,
                                        m = H ? .05 * q : 0;
                                    if (d < .5) {
                                        let e = c / (.75 * i);
                                        e = u.cj9.clamp(e, -.5, 1);
                                        let t = (0, h.cY)(e, 0, 1, 1);
                                        r.position.y = -l + t * l + m
                                    } else {
                                        let e = 1 - (c - o.height) / (.75 * i);
                                        e = u.cj9.clamp(e, -.5, 1);
                                        let t = (0, h.cY)(e, 0, 1, 1);
                                        r.position.y = l - t * l + m
                                    }
                                    r.position.x = H ? 0 : .2 * F;
                                    let f = 0;
                                    t.forEach((e, t) => {
                                        let {
                                            top: r,
                                            height: s
                                        } = e.getBoundingClientRect(), o = -(r - i) / s, c = 0, d = n[t + 1];
                                        if (o > 0 && o < 1) {
                                            _(t);
                                            let e = u.cj9.clamp((o - .5) / .5, 0, 1);
                                            c = (0, h.p_)(e, 0, 1, 1), f = t + (0, h.ME)(e, 0, 1, 1)
                                        } else o > 1 && (c = 1, f = t);
                                        d && (d.visible = c > 0, d.position.set(0, l + a * (t + 1) - l * c, 0))
                                    }), d > .7 && (f = 2), s.position.set(0, -(a / 2) * f, 0)
                                };
                            return t(), r(), l ? .on("scroll", r), window.addEventListener("resize", t), () => {
                                l ? .off("scroll", r), window.removeEventListener("resize", t)
                            }
                        }, [l, e, F, q, H]), (0, n.useEffect)(() => {
                            if (!r) return;
                            let e = r.addFolder("roadmap");
                            e.close(), e.addColor(L, "lineColor").onChange(e => {
                                R.current.forEach(t => {
                                    if (t && t.material && "uniforms" in t.material) {
                                        let r = t.material;
                                        r.uniforms.uColor.value.set(e), r.needsUpdate = !0
                                    }
                                })
                            }), e.add(L, "thickness", .001, .05, .001).onChange(e => {
                                R.current.forEach(t => {
                                    if (t && t.material && "uniforms" in t.material) {
                                        let r = t.material;
                                        r.uniforms.uThickness.value = e, r.needsUpdate = !0
                                    }
                                })
                            }), e.add(L, "wireframe").onChange(e => {
                                N.current.forEach(t => {
                                    t && t.material && "wireframe" in t.material && (t.material.wireframe = e)
                                })
                            })
                        }, [r]), (0, d.C)((e, t) => {
                            B.current -= .05, B.current = Math.max(B.current, 0), B.current = Math.min(B.current, 10), z.current = u.cj9.lerp(B.current, z.current, .01), E.current.forEach(e => {
                                e && (e.rotation.y += .2 * t + .02 * z.current)
                            }), N.current[3] && (N.current[3].rotation.y += +t), M.current ? .rotation.set(.12 * Math.PI, 0, H ? 0 : .02 * Math.PI), k.current.forEach(e => {
                                e && (e.material.alphaMap.offset.x -= 25e-5)
                            })
                        }), (0, n.useEffect)(() => {
                            k.current.forEach((e, t) => {
                                e && e.material && "opacity" in e.material && f.Ay.to(e.material, {
                                    opacity: +(t === c),
                                    duration: .6,
                                    ease: "power2.inOut"
                                })
                            })
                        }, [c]), (0, n.useEffect)(() => {
                            let e = e => {
                                let t = e.clientX / window.innerWidth * 2 - 1,
                                    r = A.current.x - t;
                                P.current = Math.abs(r), A.current.x = t, B.current += Math.abs(r)
                            };
                            return H || window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
                        }, [H, e, F]), !t) return null;
                    let G = H ? .8 : 1.1;
                    return (0, s.jsx)("group", {
                        ref: b,
                        visible: !1,
                        children: (0, s.jsx)("group", {
                            ref: M,
                            children: y.map((e, r) => {
                                let n = t.models[e.file].scene.children[0],
                                    l = t.models[e.file].scene.children[0];
                                return (0, s.jsxs)("group", {
                                    scale: G,
                                    position: H ? [0, .35 * r, -(.35 * r)] : [0, .5 * r, -(.5 * r)],
                                    ref: e => {
                                        E.current[r] = e
                                    },
                                    children: [(0, s.jsx)("mesh", {
                                        geometry: n.geometry,
                                        ref: e => {
                                            R.current[r] = e
                                        },
                                        visible: !0,
                                        children: (0, s.jsx)("outlineMaterial", {
                                            transparent: !0,
                                            lights: !1,
                                            ref: S,
                                            side: u.hsX
                                        }, g.key)
                                    }), (0, s.jsx)("mesh", {
                                        geometry: t.models[e.file].scene.children[0].geometry,
                                        ref: e => {
                                            N.current[r] = e
                                        },
                                        castShadow: !0,
                                        receiveShadow: !0,
                                        visible: !0,
                                        children: (0, s.jsx)("meshLambertMaterial", {
                                            color: e.color,
                                            flatShading: !0,
                                            transparent: !0
                                        })
                                    }), (0, s.jsx)("mesh", {
                                        geometry: l.geometry,
                                        ref: e => {
                                            k.current[r] = e
                                        },
                                        children: (0, s.jsx)("meshBasicMaterial", {
                                            side: u.hB5,
                                            alphaMap: t.textures.roadmapAlpha[r],
                                            color: m.o.SPARK_GREEN,
                                            transparent: !0,
                                            toneMapped: !1
                                        })
                                    })]
                                }, r)
                            })
                        })
                    })
                };
            var M = r(7558);
            let N = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
                E = `
  uniform float uProgress;
  uniform vec2 uGradient1;
  uniform vec2 uGradient2;
  uniform vec2 uGradient3;
  uniform vec2 uGradient4;
  uniform vec2 uGradientNext1;
  uniform vec2 uGradientNext2;
  uniform vec2 uGradientNext3;
  uniform vec2 uGradientNext4;

  varying vec2 vUv;

  vec3 hexToRgb(vec3 hex) {
    return hex / 255.0;
  }

  vec3 decodeHex(float hex) {
    float r = floor(hex / 65536.0);
    float g = floor(mod(hex / 256.0, 256.0));
    float b = mod(hex, 256.0);
    return vec3(r, g, b) / 255.0;
  }

  void main() {
    vec3 gradientColor1 = decodeHex(uGradient1.x);
    vec3 gradientColor2 = decodeHex(uGradient2.x);
    vec3 gradientColor3 = decodeHex(uGradient3.x);
    vec3 gradientColor4 = decodeHex(uGradient4.x);

    vec3 gradientColorNext1 = decodeHex(uGradientNext1.x);
    vec3 gradientColorNext2 = decodeHex(uGradientNext2.x);
    vec3 gradientColorNext3 = decodeHex(uGradientNext3.x);
    vec3 gradientColorNext4 = decodeHex(uGradientNext4.x);

    float step1 = uGradient1.y;
    float step2 = uGradient2.y;
    float step3 = uGradient3.y;
    float step4 = uGradient4.y;

    float stepNext1 = uGradientNext1.y;
    float stepNext2 = uGradientNext2.y;
    float stepNext3 = uGradientNext3.y;
    float stepNext4 = uGradientNext4.y;

    vec3 color = vec3(0.0);

    vec3 currentColor = vec3(0.0);
    vec3 nextColor = vec3(0.0);

   
    if (vUv.y < step2) {
        currentColor = mix(gradientColor1, gradientColor2, smoothstep(step1, step2, vUv.y));
    } else if (vUv.y < step3) {
        currentColor = mix(gradientColor2, gradientColor3, smoothstep(step2, step3, vUv.y));
    } else if (vUv.y < step4) {
        currentColor = mix(gradientColor3, gradientColor4, smoothstep(step3, step4, vUv.y));
    } else {
        currentColor = gradientColor4;
    }

    if (vUv.y < stepNext2) {
        nextColor = mix(gradientColorNext1, gradientColorNext2, smoothstep(stepNext1, stepNext2, vUv.y));
    } else if (vUv.y < stepNext3) {
        nextColor = mix(gradientColorNext2, gradientColorNext3, smoothstep(stepNext2, stepNext3, vUv.y));
    } else if (vUv.y < stepNext4) {
        nextColor = mix(gradientColorNext3, gradientColorNext4, smoothstep(stepNext3, stepNext4, vUv.y));
    } else {
        nextColor = gradientColorNext4;
    }

    color = mix(currentColor, nextColor, uProgress);

    gl_FragColor = vec4(color, 1.0);
}
  
`,
                k = (0, _.b)({
                    uTime: 0,
                    uRes: new u.I9Y,
                    uProgress: 0,
                    uGradient1: new u.I9Y,
                    uGradient2: new u.I9Y,
                    uGradient3: new u.I9Y,
                    uGradient4: new u.I9Y,
                    uGradientNext1: new u.I9Y,
                    uGradientNext2: new u.I9Y,
                    uGradientNext3: new u.I9Y,
                    uGradientNext4: new u.I9Y
                }, N, E);
            (0, d.e)({
                CustomMaterial: k
            });
            let R = () => {
                    let {
                        camera: e,
                        viewport: t
                    } = (0, d.A)(), r = (0, n.useRef)(null), [l, i] = (0, n.useState)({
                        width: 1,
                        height: 1
                    }), {
                        scroll: h
                    } = (0, n.useContext)(a.z), m = (0, n.useRef)(null), f = (0, n.useRef)([]), _ = (0, n.useRef)([]), p = (0, n.useRef)(null), x = (0, n.useCallback)(() => {
                        i({
                            width: 1.3 * c(-100, e),
                            height: 1.3 * o(-100, e)
                        }), r.current && (r.current.position.z = -100)
                    }, [e]);
                    return (0, n.useEffect)(() => (x(), window.addEventListener("resize", x), () => window.removeEventListener("resize", x)), [t.width, t.height, x]), (0, n.useEffect)(() => {
                        let e = document.getElementById("main");
                        e && (f.current = Array.from(e.children), _.current = f.current.map((e, t, r) => {
                            let s = e => e ? e.split("|").map(e => {
                                    let t = e.split(",");
                                    if (2 !== t.length) return null;
                                    let r = parseInt(t[0].trim(), 16),
                                        s = parseFloat(t[1].trim());
                                    return new u.I9Y(r, s)
                                }).filter(e => null !== e) : [],
                                n = s(e.getAttribute("data-color")),
                                l = s(r[t + 1] ? .getAttribute("data-color")) || n;
                            return {
                                current: n,
                                next: l
                            }
                        }))
                    }, []), (0, n.useEffect)(() => {
                        let e = () => {
                            let e = f.current,
                                t = _.current;
                            if (!e || !h || !t) return;
                            let r = -1,
                                s = 0;
                            if (e.forEach((e, t) => {
                                    let {
                                        top: n,
                                        height: l
                                    } = e.getBoundingClientRect(), i = -n / l;
                                    i >= 0 && i < 1 && (r = t, s = i)
                                }), -1 !== r && !(r > e.length - 2) && (m.current.uProgress = s, r >= 0 && r <= e.length - 2 && r !== p.current)) {
                                let e = t[r];
                                if (!e) return;
                                let s = e.current,
                                    n = e.next ? ? e.current;
                                m.current.uGradient1 = s[0], m.current.uGradient2 = s[1], m.current.uGradient3 = s[2], m.current.uGradient4 = s[3], m.current.uGradientNext1 = n[0], m.current.uGradientNext2 = n[1], m.current.uGradientNext3 = n[2], m.current.uGradientNext4 = n[3], p.current = r
                            }
                        };
                        return e(), h ? .on("scroll", e), () => h ? .off("scroll", e)
                    }, [h]), (0, s.jsxs)("mesh", {
                        ref: r,
                        position: [0, 0, -100],
                        children: [(0, s.jsx)("planeGeometry", {
                            args: [l.width, l.height]
                        }), (0, s.jsx)("customMaterial", {
                            ref: m
                        }, k.key)]
                    })
                },
                I = () => {
                    let e = (0, n.useRef)(null),
                        {
                            camera: t
                        } = (0, d.A)(),
                        {
                            assets: r
                        } = (0, n.useContext)(i.v),
                        l = (0, n.useRef)(o(-50, t)),
                        a = c(-50, t),
                        [h, m] = (0, n.useState)(l.current),
                        [f, _] = (0, n.useState)(a);
                    if ((0, n.useEffect)(() => {
                            let e = () => {
                                let e = document.querySelector(".header_client__wM5mR svg");
                                if (e) {
                                    let r = e.getBoundingClientRect(),
                                        s = o(-50, t);
                                    l.current = s;
                                    let n = s / window.innerHeight;
                                    m(r.height * n), _(r.width * n)
                                }
                            };
                            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                        }, [t]), (0, n.useEffect)(() => {
                            e.current && e.current.position.set(0, 0, -50)
                        }, []), (0, d.C)(() => {
                            let t = document.querySelector(".header_client__wM5mR svg");
                            if (e.current && t && l.current) {
                                let r = t.getBoundingClientRect(),
                                    s = r.top + r.height / 2,
                                    n = (window.innerHeight / 2 - s) * (l.current / window.innerHeight);
                                e.current.position.set(0, n, -50)
                            }
                        }), !r) return;
                    let p = r.textures.logo[0];
                    return (0, s.jsxs)("mesh", {
                        ref: e,
                        children: [(0, s.jsx)("planeGeometry", {
                            args: [f, h]
                        }), (0, s.jsx)("meshBasicMaterial", {
                            map: p ? ? null,
                            color: 0xffffff,
                            side: u.$EB,
                            transparent: !0
                        })]
                    })
                },
                S = () => {
                    let {
                        camera: e
                    } = (0, d.A)(), {
                        assets: t
                    } = (0, n.useContext)(i.v), {
                        scroll: r
                    } = (0, n.useContext)(a.z), l = (0, n.useRef)(null), c = (0, n.useRef)(null), h = (0, n.useRef)(null), m = (0, n.useRef)(null), f = (0, n.useRef)(0), _ = (0, n.useRef)(null);
                    if ((0, n.useEffect)(() => {
                            m.current = document.getElementById("features"), t ? .textures.sword.forEach(e => {
                                e.wrapS = u.GJx, e.wrapT = u.GJx, e.flipY = !1, e.generateMipmaps = !1, e.needsUpdate = !0, e.colorSpace = u.er$
                            })
                        }, [t]), (0, d.C)(() => {}), (0, n.useEffect)(() => {
                            let t = () => {
                                f.current = o(0, e)
                            };
                            return t(), window.addEventListener("resize", t), () => {
                                window.removeEventListener("resize", t)
                            }
                        }, [e]), (0, n.useEffect)(() => {
                            let e = () => {
                                    if (l.current) {
                                        let e = new u.NRn().setFromObject(l.current),
                                            t = new u.Pq0;
                                        e.getSize(t), _.current = t
                                    }
                                },
                                t = () => {
                                    let t = m.current,
                                        s = l.current,
                                        n = c.current,
                                        i = f.current;
                                    _.current || e();
                                    let a = _.current;
                                    if (!s || !r || !t || !i || !a || !n) return !1;
                                    s.visible = !0;
                                    let o = window.innerHeight,
                                        d = t.getBoundingClientRect(),
                                        u = -(d.top - o) / d.height - .5,
                                        h = -((i + a.y) * u);
                                    s.position.y = h, s.rotation.y = .005 * r.scroll, n.rotation.z = .03 * Math.PI + u * Math.PI * .03
                                };
                            return t(), r ? .on("scroll", t), window.addEventListener("resize", t), () => {
                                r ? .off("scroll", t), window.removeEventListener("resize", t)
                            }
                        }, [r]), (0, d.C)(e => {
                            let t = h.current;
                            t && (t.rotation.y = .1 * e.clock.elapsedTime)
                        }), !t) return null;
                    let p = t.models.sword.scene.children[0].geometry;
                    return (0, s.jsx)("group", {
                        children: (0, s.jsx)("group", {
                            ref: c,
                            children: (0, s.jsx)("group", {
                                ref: h,
                                children: (0, s.jsxs)("group", {
                                    ref: l,
                                    visible: !1,
                                    scale: 8,
                                    children: [(0, s.jsx)("mesh", {
                                        geometry: p,
                                        castShadow: !1,
                                        receiveShadow: !1,
                                        children: (0, s.jsx)("meshLambertMaterial", {
                                            map: t.textures.sword[0],
                                            transparent: !0
                                        })
                                    }), (0, s.jsx)("mesh", {
                                        geometry: p,
                                        children: (0, s.jsx)("outlineMaterial", {
                                            transparent: !0,
                                            lights: !1,
                                            side: u.hsX,
                                            uniforms: {
                                                uThickness: {
                                                    value: .003 / 8
                                                }
                                            }
                                        }, g.key)
                                    })]
                                })
                            })
                        })
                    })
                };
            var H = r(3461);
            let A = e => {
                    let {
                        children: t,
                        config: r,
                        parentPosition: l,
                        active: i,
                        blockMovement: a
                    } = e, o = (0, n.useRef)(new u.Pq0), h = (0, n.useRef)(new u.I9Y(0, 0)), m = (0, n.useRef)(null), {
                        camera: f
                    } = (0, d.A)(), [_, p] = (0, n.useState)(void 0);
                    return (0, n.useEffect)(() => {
                        p((0, H.A)().any)
                    }, []), (0, n.useEffect)(() => {
                        let e = e => {
                            let t = c(0, f),
                                r = window.innerWidth / t * l[0];
                            h.current.x = (e.clientX - r) / window.innerWidth * 2 - 1, h.current.y = -(2 * (e.clientY / window.innerHeight)) + 1
                        };
                        return _ || window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
                    }, [f, l, _]), (0, d.C)(() => {
                        let e = h.current,
                            t = m.current;
                        if (!e || !t || _ || !i) return null;
                        let s = e.x * r.factorX,
                            n = e.y * r.factorY,
                            l = e.x * r.factorZ;
                        o.current.x = u.cj9.lerp(o.current.x, s, r.easeX), o.current.y = u.cj9.lerp(o.current.y, n, r.easeY), o.current.z = u.cj9.lerp(o.current.z, l, r.easeZ), a || t.position.set(-o.current.x, o.current.y, 0), t.rotation.set(-o.current.y, -o.current.x, o.current.z)
                    }), (0, s.jsx)("group", {
                        ref: m,
                        children: t
                    })
                },
                P = [{
                    text: "",
                    color: m.o.BLUE04
                }, {
                    text: "",
                    color: m.o.BLUE03
                }, {
                    text: "",
                    color: m.o.BLUE02
                }],
                B = () => {
                    let {
                        viewport: e
                    } = (0, d.A)(), {
                        assets: t
                    } = (0, n.useContext)(i.v), {
                        scroll: r
                    } = (0, n.useContext)(a.z), l = (0, n.useRef)(null), o = (0, n.useRef)(null), c = (0, n.useRef)(null), f = (0, n.useRef)(null), _ = (0, n.useRef)([]), p = (0, n.useRef)([]), x = (0, n.useRef)(null), L = (0, n.useRef)(null), y = (0, n.useRef)(null), b = (0, w.N)(C.qp), [M, N] = (0, n.useState)(!1), {
                        camera: E
                    } = (0, d.A)(), k = j({
                        z: 0,
                        camera: E
                    }), R = v({
                        z: 0,
                        camera: E
                    });
                    if ((0, n.useEffect)(() => {
                            t && (t.textures.flywheelAlpha.forEach(e => {
                                e.wrapS = u.GJx, e.wrapT = u.GJx, e.flipY = !1, e.generateMipmaps = !1, e.colorSpace = u.er$, e.needsUpdate = !0
                            }), t.textures.flywheelAlphaTop.forEach(e => {
                                e.wrapS = u.GJx, e.wrapT = u.GJx, e.flipY = !1, e.generateMipmaps = !1, e.colorSpace = u.er$, e.needsUpdate = !0
                            }))
                        }, [t]), (0, d.C)(e => {
                            let t = l.current,
                                r = c.current;
                            t && r && p.current.forEach(t => {
                                let r = -.05 * e.clock.elapsedTime;
                                t && (t.material.alphaMap.offset.x = r)
                            })
                        }), (0, n.useEffect)(() => {
                            x.current = document.getElementById("flywheel"), L.current = document.getElementById("flywheelItems")
                        }, []), (0, n.useEffect)(() => {
                            let e = () => {
                                let e = l.current,
                                    t = o.current,
                                    s = f.current,
                                    n = x.current,
                                    i = L.current,
                                    a = y.current;
                                if (!t || !r || !n || !i || !e || !s || !a) return;
                                let c = window.innerHeight;
                                t.rotation.y = -.002 * r.scroll;
                                let d = n.getBoundingClientRect(),
                                    u = i.getBoundingClientRect(),
                                    m = -(d.top - c + 0 * c) / d.height,
                                    p = -(-d.top - d.height) / c;
                                e.visible = m > 0 && p > 0, p = Math.max(p = Math.min(p, 1), 0);
                                let g = (0, h.p2)(1 - p, 0, 1, 1);
                                e.position.y = .8 * k * g;
                                let v = 1 + .6 * g;
                                a.scale.set(v, v, v), a.rotation.set(0, Math.PI / 2 * g, -(.4 * Math.PI) * g), a.position.x = -(.2 * R) * g;
                                let C = -(u.top - c) / +u.height;
                                N(C > 1), _.current.forEach((e, t) => {
                                    if (!e) return;
                                    let r = 1.5 * C - .3 * t;
                                    r = Math.max(r = Math.min(r, 1), 0);
                                    let s = (0, h.cY)(r, 0, 1, 1);
                                    e.position.y = - +k + +k * s
                                });
                                let w = Math.min(+C, 1);
                                w = Math.max(w, 0);
                                let j = (0, h.cY)(w, 0, 1, 1);
                                s.position.y = 2 * k - 2 * k * j, s.rotation.z = 3 * Math.PI - 3 * Math.PI * j, s.rotation.x = 2 * Math.PI - 2 * Math.PI * j;
                                let b = (w - .4) / .6;
                                b = Math.max(b = Math.min(b, 1), 0);
                                let M = (0, h.rn)(b, 0, 1, 1);
                                e.rotation.x = .5 * Math.PI - .5 * Math.PI * (1 - M)
                            };
                            return e(), r ? .on("scroll", e), () => r ? .off("scroll", e)
                        }, [r, k, e, R, b]), (0, d.C)(e => {
                            c.current && (c.current.rotation.y = -.1 * e.clock.elapsedTime)
                        }), !t) return null;
                    let I = b ? 1 : 1.6;
                    return (0, s.jsx)("group", {
                        ref: l,
                        position: [b ? 0 : .2 * R, 0, 0],
                        visible: !1,
                        children: (0, s.jsx)(A, {
                            config: M ? {
                                factorX: .1,
                                factorY: 0,
                                factorZ: -.3,
                                easeX: .05,
                                easeY: .05,
                                easeZ: .05
                            } : {
                                factorX: .1,
                                factorY: 0,
                                factorZ: 0,
                                easeX: .05,
                                easeY: .05,
                                easeZ: .05
                            },
                            parentPosition: [b ? 0 : .2 * R, 0, 0],
                            active: !0,
                            blockMovement: !0,
                            children: (0, s.jsx)("group", {
                                rotation: [0, 0, 0],
                                children: (0, s.jsxs)("group", {
                                    ref: y,
                                    children: [(0, s.jsxs)("group", {
                                        scale: [I, I, I],
                                        rotation: [0, 0, 0],
                                        ref: f,
                                        children: [(0, s.jsx)("mesh", {
                                            geometry: t.models.wheelMain.scene.children[0].geometry,
                                            visible: !0,
                                            children: (0, s.jsx)("outlineMaterial", {
                                                transparent: !0,
                                                lights: !1,
                                                side: u.hsX,
                                                uniforms: {}
                                            }, g.key)
                                        }), (0, s.jsx)("mesh", {
                                            geometry: t.models.wheelMain.scene.children[0].geometry,
                                            castShadow: !1,
                                            receiveShadow: !1,
                                            children: (0, s.jsx)("meshLambertMaterial", {
                                                color: m.o.SPARK_GREEN,
                                                flatShading: !1,
                                                transparent: !0,
                                                toneMapped: !1
                                            })
                                        })]
                                    }), (0, s.jsx)("group", {
                                        ref: o,
                                        children: (0, s.jsx)("group", {
                                            ref: c,
                                            children: P.map((e, r) => (0, s.jsxs)("group", {
                                                scale: [I, I, I],
                                                rotation: [0, 2 * Math.PI / 3 * r, 0],
                                                ref: e => {
                                                    _.current[r] = e
                                                },
                                                children: [(0, s.jsx)("mesh", {
                                                    geometry: t.models.wheelSection.scene.children[2].geometry,
                                                    visible: !0,
                                                    receiveShadow: !1,
                                                    children: (0, s.jsx)("outlineMaterial", {
                                                        transparent: !0,
                                                        lights: !1,
                                                        side: u.hsX
                                                    }, g.key)
                                                }), (0, s.jsx)("mesh", {
                                                    geometry: t.models.wheelSection.scene.children[2].geometry,
                                                    castShadow: !1,
                                                    receiveShadow: !1,
                                                    visible: !0,
                                                    children: (0, s.jsx)("meshLambertMaterial", {
                                                        color: e.color,
                                                        flatShading: !1,
                                                        transparent: !0,
                                                        toneMapped: !1
                                                    })
                                                }), (0, s.jsx)("mesh", {
                                                    geometry: t.models.wheelSection.scene.children[0].geometry,
                                                    ref: e => {
                                                        p.current[r] = e
                                                    },
                                                    visible: !0,
                                                    receiveShadow: !1,
                                                    children: (0, s.jsx)("meshBasicMaterial", {
                                                        side: u.hB5,
                                                        alphaTest: .59,
                                                        alphaMap: t.textures.flywheelAlpha[r],
                                                        color: m.o.SPARK_GREEN,
                                                        transparent: !0,
                                                        toneMapped: !1
                                                    })
                                                }), (0, s.jsx)("mesh", {
                                                    geometry: t.models.wheelSection.scene.children[1].geometry,
                                                    visible: !0,
                                                    children: (0, s.jsx)("meshBasicMaterial", {
                                                        side: u.hB5,
                                                        alphaTest: .59,
                                                        alphaMap: t.textures.flywheelAlphaTop[r],
                                                        color: m.o.SPARK_GREEN,
                                                        transparent: !0,
                                                        toneMapped: !1
                                                    })
                                                })]
                                            }, r))
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                z = () => {
                    let e = (0, n.useRef)(new u.I9Y),
                        [t, r] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let t = t => {
                                e.current.x = t.clientX / window.innerWidth * 2 - 1, e.current.y = -(2 * (t.clientY / window.innerHeight)) + 1
                            },
                            s = () => {
                                r(!0)
                            },
                            n = () => {
                                r(!1)
                            };
                        return window.addEventListener("pointermove", t), window.addEventListener("pointerdown", s), window.addEventListener("pointerup", n), () => {
                            window.removeEventListener("pointermove", t), window.removeEventListener("pointerdown", s), window.removeEventListener("pointerup", n)
                        }
                    }, []), {
                        mouse: e.current,
                        isPressed: t
                    }
                },
                F = .2 * Math.PI,
                q = .25 * Math.PI,
                G = .25 * Math.PI,
                T = () => {
                    let {
                        assets: e
                    } = (0, n.useContext)(i.v), {
                        scroll: t
                    } = (0, n.useContext)(a.z), r = (0, n.useRef)(null), l = (0, n.useRef)(null), o = (0, w.N)(C.qp), {
                        loaderCurtainComplete: c
                    } = (0, n.useContext)(i.v), h = (0, n.useMemo)(() => new u.Pq0, []), {
                        mouse: _
                    } = z(), {
                        camera: p,
                        raycaster: x
                    } = (0, d.A)(), v = j({
                        z: -4,
                        camera: p
                    }), L = o ? .4 * v : .45 * v, y = (0, n.useMemo)(() => Array.from({
                        length: 10
                    }, (e, t) => {
                        let r = t / 10 * Math.PI * 2,
                            s = .82 + L * Math.cos(r),
                            n = -.8 + L * Math.sin(r);
                        return {
                            position: new u.Pq0(s, 1, n),
                            angle: r
                        }
                    }), [L]), b = (0, n.useRef)(Array.from({
                        length: y.length
                    }, () => new u.Pq0)), M = (0, n.useRef)(y.map(e => {
                        let {
                            position: t
                        } = e;
                        return t.clone()
                    })), N = (0, n.useRef)(Array.from({
                        length: y.length
                    }, () => 0));
                    if ((0, n.useEffect)(() => {
                            e ? .textures.flywheelAlpha.forEach(e => {
                                e.wrapS = u.GJx, e.wrapT = u.GJx, e.flipY = !1, e.generateMipmaps = !1, e.colorSpace = u.er$, e.needsUpdate = !0
                            })
                        }, [e]), (0, n.useEffect)(() => {
                            l.current = document.getElementById("heroFrontpage")
                        }, []), (0, n.useEffect)(() => {
                            let e = () => {
                                let e = r.current,
                                    s = l.current;
                                if (!t || !s || !e) return;
                                let n = window.innerHeight,
                                    i = s.getBoundingClientRect(),
                                    a = -(i.top - n + 0 * n) / i.height,
                                    c = u.cj9.mapLinear(t.scroll, 0, 5e3, 0, v),
                                    d = u.cj9.mapLinear(a, 1, 1.3, o ? G : F, q),
                                    h = u.cj9.mapLinear(a, 1, 1.3, .2 * Math.PI, 0),
                                    m = u.cj9.mapLinear(a, 1, 1.3, -.08 * Math.PI, 0);
                                e.position.y = c, e.rotation.x = o ? e.rotation.x : d, e.rotation.y = h, e.rotation.z = m, e.visible = a > 0 && a < 2
                            };
                            return e(), t ? .on("scroll", e), () => t ? .off("scroll", e)
                        }, [t, v, y]), (0, n.useEffect)(() => {
                            y.forEach((e, t) => {
                                let {
                                    position: r,
                                    angle: s
                                } = e, n = new u.Pq0(Math.cos(s), 0, Math.sin(s)).normalize();
                                M.current[t].copy(r).add(n.clone().multiplyScalar(10)), b.current[t].copy(n.multiplyScalar(1500))
                            })
                        }, [y, c]), (0, d.C)((e, s) => {
                            let n = r.current;
                            if (!n) return;
                            let l = e.clock.getElapsedTime();
                            if (x.setFromCamera(_, p), x.intersectObjects(n.children, !0).length, !t) return;
                            let i = t.scroll ? ? 0,
                                a = u.cj9.mapLinear(i, 0, 2500, 0, 2);
                            n.children.forEach((e, r) => {
                                let n = e.userData.isIcon;
                                N.current[r] = (N.current[r] + s * (1 + .5 * Math.sin(.8 * l))) % (2 * Math.PI), .3 > Math.abs(Math.atan2(Math.sin(N.current[r] - y[r].angle), Math.cos(N.current[r] - y[r].angle))) && f.Ay.to(e.rotation, {
                                    x: e.rotation.x + 2 * Math.PI,
                                    duration: 3,
                                    ease: "power2.inOut"
                                });
                                let i = r / y.length * Math.PI * 2 + .08 * l,
                                    o = new u.Pq0(.82 + L * Math.cos(i), .1, -.8 + L * Math.sin(i)).clone().sub(M.current[r]).multiplyScalar(50);
                                b.current[r].add(o.multiplyScalar(s)), h.set(Math.cos(i), 0, Math.sin(i)).multiplyScalar(15 * a * (n ? 1 : 3)), b.current[r].add(h), b.current[r].multiplyScalar(.8), t && (M.current[r].addScaledVector(b.current[r], s), e.position.copy(M.current[r]), n || (e.rotation.z = i, e.rotation.y = i))
                            })
                        }), !e) return null;
                    let E = e.models.coin.scene.children[0].geometry,
                        k = e.models.sushi.scene.children[0].geometry,
                        R = e.models.sushi.scene.children[0].material,
                        I = e.models.dart.scene.children[0].geometry,
                        S = e.models.dart.scene.children[0].material,
                        H = e.models.star.scene.children[0].geometry,
                        A = e.models.star.scene.children[0].material,
                        P = e.models.ausd.scene.children[0].geometry,
                        B = e.models.ausd.scene.children[0].material,
                        T = e.models.morph.scene.children[0].geometry,
                        Z = e.models.morph.scene.children[0].material,
                        V = new u.G_z({
                            transparent: !0,
                            opacity: 1,
                            color: m.o.SPARK_GREEN,
                            toneMapped: !1
                        }),
                        U = [{
                            geo: H,
                            mat: A
                        }, {
                            geo: k,
                            mat: R
                        }, {
                            geo: I,
                            mat: S
                        }, {
                            geo: P,
                            mat: B
                        }, {
                            geo: T,
                            mat: Z
                        }],
                        O = o ? .12 : .14;
                    return (0, s.jsx)("group", {
                        ref: r,
                        rotation: [o ? G : F, .2 * Math.PI, -.08 * Math.PI],
                        children: y.map((e, t) => (0, s.jsxs)("group", {
                            position: e.position,
                            userData: {
                                isIcon: t % 2 != 0
                            },
                            scale: [O, O, O],
                            rotation: t % 2 != 0 ? [.5 * Math.PI, -.25 * Math.PI, .25 * Math.PI] : [Math.PI, 0, .05 * Math.PI],
                            children: [(0, s.jsx)("mesh", {
                                geometry: t % 2 == 0 ? E : U[Math.floor(t / 2) % U.length].geo,
                                material: t % 2 == 0 ? V : U[Math.floor(t / 2) % U.length].mat,
                                scale: t % 2 != 0 ? [1.3, 1.3, 1.3] : void 0
                            }), (0, s.jsx)("mesh", {
                                geometry: t % 2 == 0 ? E : U[Math.floor(t / 2) % U.length].geo,
                                visible: !0,
                                scale: t % 2 != 0 ? [1.3, 1.3, 1.3] : void 0,
                                children: (0, s.jsx)("outlineMaterial", {
                                    transparent: !0,
                                    lights: !1,
                                    side: u.hsX
                                }, g.key)
                            })]
                        }, t))
                    })
                };
            var Z = r(6114);
            let V = [{
                    color: m.o.BLUE04
                }, {
                    color: m.o.BLUE03
                }, {
                    color: m.o.BLUE02
                }],
                U = Array(12).fill({}),
                O = () => {
                    let {
                        assets: e
                    } = (0, n.useContext)(i.v), {
                        camera: t
                    } = (0, d.A)(), {
                        scroll: r
                    } = (0, n.useContext)(a.z), l = (0, n.useRef)(null), o = (0, n.useRef)(null), c = (0, n.useRef)(null), h = (0, n.useRef)(null), _ = (0, n.useRef)(null), p = (0, w.N)(C.qp), x = (0, n.useRef)(0), [g, L] = (0, n.useState)(!1), [y, b] = (0, n.useState)(!1), M = (0, n.useRef)([]), N = (0, n.useRef)([]), E = j({
                        z: 0,
                        camera: t
                    }), k = v({
                        z: 0,
                        camera: t
                    });
                    if ((0, n.useEffect)(() => {
                            l.current = document.getElementById("liquidity")
                        }, []), (0, n.useEffect)(() => {
                            let e = o.current,
                                t = h.current;
                            e && t && (M.current.forEach(e => e.kill()), M.current = [], e.children.forEach((e, t) => {
                                let r = {
                                        value: +!y
                                    },
                                    s = e.children.map(e => e),
                                    n = f.Ay.to(r, {
                                        value: +!!y,
                                        duration: y ? .6 : .3,
                                        delay: y ? .05 * t : 0,
                                        ease: "cubic.easeInOut",
                                        onStart: () => {
                                            y && s.forEach(e => {
                                                e.visible = !0
                                            })
                                        },
                                        onComplete: () => {
                                            y || s.forEach(e => {
                                                e.visible = !1
                                            })
                                        },
                                        onUpdate: () => {
                                            s.forEach(e => e.material.opacity = r.value)
                                        }
                                    });
                                M.current.push(n)
                            }), t.children.forEach((e, t) => {
                                let r = {
                                        value: +!y
                                    },
                                    s = e.children.map(e => e),
                                    n = f.Ay.to(r, {
                                        value: +!!y,
                                        duration: y ? .6 : .3,
                                        delay: y ? .3 * t : 0,
                                        ease: "cubic.easeInOut",
                                        onStart: () => {
                                            y && s.forEach(e => {
                                                e.visible = !0
                                            })
                                        },
                                        onComplete: () => {
                                            y || s.forEach(e => {
                                                e.visible = !1, e.material.opacity = 0
                                            })
                                        },
                                        onUpdate: () => {
                                            s.forEach(e => {
                                                if (e.material.opacity = r.value, y) {
                                                    let t = 1 - (1 - r.value) * .5;
                                                    e.scale.set(t, t, t)
                                                }
                                            })
                                        }
                                    });
                                M.current.push(n)
                            }))
                        }, [y]), (0, n.useEffect)(() => {
                            let e = e => {
                                let t = l.current,
                                    r = _.current,
                                    s = o.current,
                                    n = c.current;
                                if (!r || !t || !n || !s) return;
                                let i = window.innerHeight,
                                    a = t.getBoundingClientRect(),
                                    d = -(a.top - i) / a.height;
                                if (b(d > 0 && d < 1), p && (r.position.y = -(.5 * E) + .4 * E * d), d > -1 && d < 2) {
                                    let t = Math.abs(e.scroll - x.current);
                                    n.rotation.z += .002 * t, x.current = e.scroll, r.rotation.y = .2 * Math.PI + .1 * Math.PI * (d - .5), r.rotation.z = -(.3 * Math.PI) * (d - .8), L(!0)
                                } else L(!1)
                            };
                            return r && e(r), r ? .on("scroll", e), () => {
                                r ? .off("scroll", e)
                            }
                        }, [r, E, e, p]), (0, d.C)(e => {
                            let t = o.current,
                                r = c.current;
                            t && r && g && (t.rotation.z = .4 * e.clock.elapsedTime, t.children.forEach((r, s) => {
                                let n = 2 * Math.PI / t.children.length * s;
                                r.rotation.x = -Math.PI / 2 + .6 * e.clock.elapsedTime - n, r.rotation.y = -n + .6 * e.clock.elapsedTime
                            }), N.current.forEach((t, r) => {
                                if (t && t.alphaMap) {
                                    let s = .2 * e.clock.elapsedTime * (r % 2 == 0 ? 1 : -1);
                                    t.alphaMap.offset.x = s
                                }
                            }))
                        }), (0, n.useEffect)(() => {
                            e && e ? .textures.liquidityAlphas.forEach(e => {
                                e.wrapS = u.GJx, e.wrapT = u.GJx, e.flipY = !0, e.generateMipmaps = !1, e.colorSpace = u.er$, e.needsUpdate = !0, e.repeat.set(-3, 1)
                            })
                        }, [e]), !e) return null;
                    let R = e.models.coin.scene.children[0].geometry,
                        I = e.models.liquidityRing.scene.children[0],
                        S = e.models.liquidityRingOL.scene.children[0],
                        H = p ? .6 : 1,
                        P = p ? 0 : .25 * k;
                    return (0, s.jsx)("group", {
                        ref: _,
                        position: [P, 0, 0],
                        scale: [H, H, H],
                        children: (0, s.jsxs)(A, {
                            config: {
                                factorX: .1,
                                factorY: .02,
                                factorZ: 0,
                                easeX: .1,
                                easeY: .1,
                                easeZ: 0
                            },
                            parentPosition: [P, 0, 0],
                            active: y,
                            children: [(0, s.jsx)("group", {
                                ref: c,
                                children: (0, s.jsx)("group", {
                                    ref: o,
                                    children: U.map((e, t) => {
                                        let r = 2 * Math.PI / U.length * t,
                                            n = -(1.3 * Math.cos(r)),
                                            l = 1.3 * Math.sin(r);
                                        return (0, s.jsx)("group", {
                                            position: [n, l, 0],
                                            scale: [.12, .12, .12],
                                            children: (0, s.jsx)("mesh", {
                                                geometry: R,
                                                visible: !1,
                                                children: (0, s.jsx)("meshLambertMaterial", {
                                                    color: m.o.SPARK_GREEN,
                                                    flatShading: !1,
                                                    transparent: !0
                                                })
                                            })
                                        }, t)
                                    })
                                })
                            }), (0, s.jsx)("group", {
                                ref: h,
                                children: V.map((t, r) => {
                                    let n = .18 * Math.PI * ((V.length - 1) / 2) - .18 * Math.PI * r,
                                        l = -(1.3 * Math.cos(n += .05 * Math.PI)),
                                        i = 1.3 * Math.sin(n);
                                    return (0, s.jsxs)("group", {
                                        scale: [.007, .007, .007],
                                        rotation: [.5 * Math.PI, -n, 0],
                                        position: [l, i, 0],
                                        children: [(0, s.jsx)("mesh", {
                                            geometry: I.geometry,
                                            visible: !1,
                                            children: (0, s.jsx)("meshLambertMaterial", {
                                                color: t.color,
                                                flatShading: !1,
                                                transparent: !0
                                            })
                                        }), (0, s.jsx)("mesh", {
                                            geometry: S.geometry,
                                            visible: !1,
                                            children: (0, s.jsx)("meshBasicMaterial", {
                                                side: u.hB5,
                                                alphaTest: .59,
                                                alphaMap: e.textures.liquidityAlphas[r],
                                                color: m.o.SPARK_GREEN,
                                                transparent: !0,
                                                toneMapped: !1,
                                                ref: e => N.current[r] = e
                                            })
                                        })]
                                    }, r)
                                })
                            })]
                        })
                    })
                },
                $ = () => {
                    let [e, t] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        let e = e => {
                            "d" === e.key && t(!1)
                        };
                        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                    }, []), (0, s.jsxs)(M.Hl, {
                        dpr: 2,
                        camera: {
                            fov: l.fov
                        },
                        className: "canvas",
                        shadows: !0,
                        onCreated: e => {
                            let {
                                gl: t
                            } = e;
                            t.shadowMap.enabled = !0, t.shadowMap.type = u.Wk7, t.outputColorSpace = u.er$, t.toneMapping = u.y_p
                        },
                        children: [e && (0, s.jsx)(Z.w, {}), (0, s.jsx)(R, {}), (0, s.jsx)(I, {}), (0, s.jsx)(b, {}), (0, s.jsx)(S, {}), (0, s.jsx)(O, {}), (0, s.jsx)(T, {}), (0, s.jsx)(B, {}), (0, s.jsx)("ambientLight", {
                            color: "#ffffff",
                            intensity: .66
                        }), (0, s.jsx)("directionalLight", {
                            color: "#ffffff",
                            intensity: 4.5,
                            position: [2, 0, 2],
                            castShadow: !0,
                            "shadow-mapSize-width": 2048,
                            "shadow-mapSize-height": 2048
                        })]
                    })
                }
        },
        8664: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => s
            });
            let s = {
                RISO: "#fcfcfc",
                INK: "#11162f",
                SPARK_GREEN: "#f6ff0d",
                ICE_BLUE: "#cbe9fa",
                BLUE01: "#cbe9fa",
                BLUE02: "#419de7",
                BLUE03: "#1443ac",
                BLUE04: "#12204B"
            }
        },
        8813: e => {
            e.exports = {
                imageTrail: "imageTrail_imageTrail__qtFu0",
                inViewContainer: "imageTrail_inViewContainer__naFul",
                imageElement: "imageTrail_imageElement__0fo89",
                animateIn: "imageTrail_animateIn__6OqUV",
                image: "imageTrail_image__ZRKMZ",
                animateOut: "imageTrail_animateOut__rb4Bg"
            }
        },
        8853: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => x
            });
            var s = r(5155),
                n = r(642),
                l = r.n(n),
                i = r(1043),
                a = r.n(i),
                o = r(2115),
                c = r(6341),
                d = r(9573),
                u = r(5753),
                h = r(9009),
                m = r(9300),
                f = r.n(m),
                _ = r(6766),
                p = r(8664);
            let x = e => {
                let {
                    items: t,
                    title: r
                } = e, [n, i] = (0, o.useState)(!1), [m, x] = (0, o.useState)(0), {
                    scroll: g
                } = (0, o.useContext)(c.z), v = (0, o.useRef)([]), [C, w] = (0, o.useState)(0), j = (0, o.useRef)(null), L = (0, o.useRef)(null), y = (0, o.useRef)([]);
                return (0, o.useEffect)(() => {
                    let e = () => {
                        let e = -1;
                        y.current.forEach((t, r) => {
                            if (t) {
                                let {
                                    top: s,
                                    bottom: n
                                } = t.getBoundingClientRect();
                                1 === r ? s < 1.5 * window.innerHeight && n > window.innerHeight && (e = r) : s < window.innerHeight && n > window.innerHeight && (e = r)
                            }
                        }), x(e), i(-1 !== e);
                        let t = L.current,
                            r = j.current,
                            s = window.innerHeight;
                        if (t && r) {
                            let {
                                top: e,
                                height: n
                            } = t.getBoundingClientRect(), l = -(e - s) / n;
                            l = Math.max(l = Math.min(l, 1), 0), r.style.setProperty("--progress", l.toFixed(3))
                        }
                    };
                    return g ? .on("scroll", e), () => {
                        g ? .off("scroll", e)
                    }
                }, [g]), (0, o.useEffect)(() => {
                    let e = () => {
                        let e = 0;
                        v.current.forEach(t => {
                            t && t.clientHeight > e && (e = t.clientHeight)
                        }), w(e)
                    };
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, []), (0, s.jsxs)("div", {
                    id: "roadmap",
                    className: f()(l().client, {
                        [l().visible]: n
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: l().container,
                        children: [(0, s.jsxs)("div", {
                            className: l().header,
                            children: [(0, s.jsx)(u.Ay, {
                                p: "tl",
                                className: l().headerCross
                            }), (0, s.jsx)(d.default, {
                                tag: "h2",
                                className: f()(a().h2),
                                visible: n,
                                children: r
                            })]
                        }), (0, s.jsx)("div", {
                            className: f()(l().roadmapItem, {
                                [l().visible]: m > 0
                            }),
                            children: (0, s.jsxs)("div", {
                                className: l().inner,
                                children: [(0, s.jsx)(u.Ay, {
                                    p: "tl",
                                    s: u.ah.L,
                                    c: p.o.RISO,
                                    className: l().cross
                                }), (0, s.jsx)(u.Ay, {
                                    p: "tr",
                                    s: u.ah.L,
                                    c: p.o.RISO,
                                    className: l().cross
                                }), (0, s.jsxs)("div", {
                                    className: l().head,
                                    children: [(0, s.jsxs)("div", {
                                        className: l().headIcon,
                                        children: [(0, s.jsx)(u.Ay, {
                                            p: "tl",
                                            s: u.ah.M
                                        }), (0, s.jsx)(u.Ay, {
                                            p: "tr",
                                            s: u.ah.M
                                        }), (0, s.jsx)(u.Ay, {
                                            p: "bl",
                                            s: u.ah.M
                                        }), (0, s.jsx)(u.Ay, {
                                            p: "br",
                                            s: u.ah.M
                                        }), t.map((e, t) => (0, s.jsx)(_.default, {
                                            width: 45,
                                            height: 45,
                                            src: `/assets/images/icon-${e.icon}-green.svg`,
                                            priority: !0,
                                            alt: e.icon,
                                            className: f()(l().headIconIcon, {
                                                [l().visible]: m === t + 1
                                            })
                                        }, t))]
                                    }), (0, s.jsx)("div", {
                                        className: l().headTitle,
                                        children: t.map((e, t) => (0, s.jsx)(d.default, {
                                            tag: "p",
                                            className: f()(a().h3, l().headTitleTitle),
                                            visible: m === t + 1,
                                            children: e.title
                                        }, t))
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: l().text,
                                    style: {
                                        height: `${C}px`
                                    },
                                    children: t.map((e, t) => (0, s.jsx)("div", {
                                        className: l().textText,
                                        ref: e => {
                                            v.current[t] = e
                                        },
                                        children: (0, s.jsx)(h.default, {
                                            visible: m === t + 1,
                                            className: f()(a().p),
                                            children: e.text
                                        })
                                    }, t))
                                }), (0, s.jsxs)("div", {
                                    className: f()(l().timeline, {
                                        [l().visible]: m >= 1 && m <= 3
                                    }),
                                    ref: j,
                                    children: [(0, s.jsx)("div", {
                                        className: f()(l().timelineLabel, {
                                            [l().active]: m >= 1
                                        }),
                                        "data-label": "may 2025"
                                    }), (0, s.jsx)("div", {
                                        className: f()(l().timelineLabel, {
                                            [l().active]: m >= 2
                                        }),
                                        "data-label": "summer 2025"
                                    }), (0, s.jsx)("div", {
                                        className: f()(l().timelineLabel, {
                                            [l().active]: m >= 3
                                        }),
                                        "data-label": "beyond"
                                    })]
                                })]
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: l().blockIntro
                    }), (0, s.jsx)("div", {
                        id: "roadmapInner",
                        ref: L,
                        children: t.map((e, t) => (0, s.jsx)("div", {
                            className: l().blockItem,
                            ref: e => {
                                y.current[t + 1] = e
                            }
                        }, t))
                    }), (0, s.jsx)("div", {
                        className: l().blockOutro
                    })]
                })
            }
        },
        9009: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => c
            });
            var s = r(5155),
                n = r(9300),
                l = r.n(n),
                i = r(8177),
                a = r.n(i),
                o = r(2115);
            let c = e => {
                let {
                    children: t,
                    className: n,
                    visible: i
                } = e, c = (0, o.useRef)(null), [d, u] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    let e = c.current;
                    e && document && (r(8669)({
                        target: e,
                        by: "lines"
                    }), u(!0))
                }, []), (0, s.jsx)("p", {
                    className: l()(a().animatedParagraph, n, {
                        [a().visible]: i && d
                    }),
                    ref: c,
                    "aria-label": t,
                    children: t
                })
            }
        },
        9029: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => m
            });
            var s = r(5155),
                n = r(2075),
                l = r(9145),
                i = r.n(l),
                a = r(9300),
                o = r.n(a),
                c = r(6766),
                d = r(1286),
                u = r.n(d);
            let h = e => {
                    let {
                        blok: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: u().blogImage,
                        children: (0, s.jsx)(c.default, {
                            src: t.image.filename,
                            alt: t.image.alt,
                            width: 1200,
                            height: 1200
                        })
                    })
                },
                m = e => {
                    let {
                        content: t,
                        className: r,
                        biggerP: l,
                        noWrapper: a,
                        normalCopy: c
                    } = e, {
                        render: d
                    } = (0, n.c4)({
                        resolvers: {
                            [n.Fh.COMPONENT]: e => e.attrs.body.map(e => {
                                if ("blogImage" === e.component) return (0, s.jsx)(h, {
                                    blok: e
                                }, e._uid)
                            })
                        }
                    }), u = d(t), m = (0, n.uh)(u);
                    return (0, s.jsx)("div", {
                        className: o()(i().richText, r, {
                            [i().pBigger]: l,
                            [i().wrapper]: !a,
                            [i().normalCopy]: c
                        }),
                        children: m
                    })
                }
        },
        9145: e => {
            e.exports = {
                richText: "richText_richText__mFRtU",
                normalCopy: "richText_normalCopy__ToLdJ",
                wrapper: "richText_wrapper__G3VZV",
                pBigger: "richText_pBigger__q1VHD"
            }
        },
        9324: e => {
            e.exports = {
                newsletterMobileSticker: "newsletterMobileSticker_newsletterMobileSticker__20iLd",
                image: "newsletterMobileSticker_image__lHAKZ",
                btmSword: "newsletterMobileSticker_btmSword__Uq_nW",
                btmArcade: "newsletterMobileSticker_btmArcade__tOe06",
                btmMonitor: "newsletterMobileSticker_btmMonitor__aCtHt",
                btmGameboy: "newsletterMobileSticker_btmGameboy__Fj1AT",
                btmFlameRed: "newsletterMobileSticker_btmFlameRed__noVo_",
                btmFlame: "newsletterMobileSticker_btmFlame__XYApw",
                topFlameRed: "newsletterMobileSticker_topFlameRed__h_pgA",
                topFlame: "newsletterMobileSticker_topFlame__FWhHZ",
                topFloppy: "newsletterMobileSticker_topFloppy__s_jKH",
                topSword: "newsletterMobileSticker_topSword__t9ksF",
                topHeadset: "newsletterMobileSticker_topHeadset__tDQu_",
                img: "newsletterMobileSticker_img__9_Oi9",
                offset: "newsletterMobileSticker_offset__G4wii"
            }
        },
        9573: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => o
            });
            var s = r(5155),
                n = r(9300),
                l = r.n(n);
            r(2115);
            var i = r(2913),
                a = r.n(i);
            let o = e => {
                let {
                    tag: t,
                    children: r,
                    className: n,
                    visible: i
                } = e, o = 0;
                return (0, s.jsx)(t || "h1", {
                    className: l()(a().animatedHeadline, {
                        [a().visible]: i
                    }, n),
                    "aria-label": r,
                    children: r.split("\n").map((e, t) => (0, s.jsx)("span", {
                        "aria-hidden": "true",
                        children: e.split(/(\s+)/).map((e, t) => (0, s.jsx)("span", {
                            "aria-hidden": "true",
                            "data-len": e.length,
                            children: e.split("").map((e, t) => (0, s.jsx)("i", {
                                style: {
                                    transitionDelay: `${(.5/r.length*o++).toFixed(3)}s`
                                },
                                children: e
                            }, t))
                        }, t))
                    }, t))
                })
            }
        }
    }
]);