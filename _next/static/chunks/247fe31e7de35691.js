(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  88143,
  (e, t, s) => {
    'use strict';
    function r(e) {
      let { widthInt: t, heightInt: s, blurWidth: r, blurHeight: a, blurDataURL: l, objectFit: i } = e,
        n = r ? 40 * r : t,
        o = a ? 40 * a : s,
        c = n && o ? "viewBox='0 0 " + n + ' ' + o + "'" : '';
      return (
        "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
        c +
        "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
        (c ? 'none' : 'contain' === i ? 'xMidYMid' : 'cover' === i ? 'xMidYMid slice' : 'none') +
        "' style='filter: url(%23b);' href='" +
        l +
        "'/%3E%3C/svg%3E"
      );
    }
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'getImageBlurSvg', {
        enumerable: !0,
        get: function () {
          return r;
        }
      });
  },
  87690,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
      })(s, {
        VALID_LOADERS: function () {
          return r;
        },
        imageConfigDefault: function () {
          return a;
        }
      });
    let r = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
      a = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        loaderFile: '',
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 60,
        formats: ['image/webp'],
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: 'attachment',
        localPatterns: void 0,
        remotePatterns: [],
        qualities: void 0,
        unoptimized: !1
      };
  },
  8927,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'getImgProps', {
        enumerable: !0,
        get: function () {
          return o;
        }
      }),
      e.r(33525);
    let r = e.r(88143),
      a = e.r(87690),
      l = ['-moz-initial', 'fill', 'none', 'scale-down', void 0];
    function i(e) {
      return void 0 !== e.default;
    }
    function n(e) {
      return void 0 === e
        ? e
        : 'number' == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : 'string' == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function o(e, t) {
      var s, o;
      let c,
        d,
        m,
        {
          src: u,
          sizes: h,
          unoptimized: x = !1,
          priority: p = !1,
          loading: g,
          className: f,
          quality: b,
          width: v,
          height: j,
          fill: y = !1,
          style: w,
          overrideSrc: N,
          onLoad: k,
          onLoadingComplete: C,
          placeholder: S = 'empty',
          blurDataURL: M,
          fetchPriority: _,
          decoding: z = 'async',
          layout: P,
          objectFit: E,
          objectPosition: A,
          lazyBoundary: O,
          lazyRoot: R,
          ...I
        } = e,
        { imgConf: D, showAltText: T, blurComplete: U, defaultLoader: L } = t,
        F = D || a.imageConfigDefault;
      if ('allSizes' in F) c = F;
      else {
        let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
          t = F.deviceSizes.sort((e, t) => e - t),
          r = null == (s = F.qualities) ? void 0 : s.sort((e, t) => e - t);
        c = { ...F, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === L)
        throw Object.defineProperty(
          Error(
            'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E163', enumerable: !1, configurable: !0 }
        );
      let q = I.loader || L;
      delete I.loader, delete I.srcSet;
      let B = '__next_img_default' in q;
      if (B) {
        if ('custom' === c.loader)
          throw Object.defineProperty(
            Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E252', enumerable: !1, configurable: !0 }
          );
      } else {
        let e = q;
        q = (t) => {
          let { config: s, ...r } = t;
          return e(r);
        };
      }
      if (P) {
        'fill' === P && (y = !0);
        let e = { intrinsic: { maxWidth: '100%', height: 'auto' }, responsive: { width: '100%', height: 'auto' } }[P];
        e && (w = { ...w, ...e });
        let t = { responsive: '100vw', fill: '100vw' }[P];
        t && !h && (h = t);
      }
      let V = '',
        W = n(v),
        G = n(j);
      if ((o = u) && 'object' == typeof o && (i(o) || void 0 !== o.src)) {
        let e = i(u) ? u.default : u;
        if (!e.src)
          throw Object.defineProperty(
            Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                JSON.stringify(e)
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E460', enumerable: !1, configurable: !0 }
          );
        if (!e.height || !e.width)
          throw Object.defineProperty(
            Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                JSON.stringify(e)
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E48', enumerable: !1, configurable: !0 }
          );
        if (((d = e.blurWidth), (m = e.blurHeight), (M = M || e.blurDataURL), (V = e.src), !y))
          if (W || G) {
            if (W && !G) {
              let t = W / e.width;
              G = Math.round(e.height * t);
            } else if (!W && G) {
              let t = G / e.height;
              W = Math.round(e.width * t);
            }
          } else (W = e.width), (G = e.height);
      }
      let H = !p && ('lazy' === g || void 0 === g);
      (!(u = 'string' == typeof u ? u : V) || u.startsWith('data:') || u.startsWith('blob:')) && ((x = !0), (H = !1)),
        c.unoptimized && (x = !0),
        B && !c.dangerouslyAllowSVG && u.split('?', 1)[0].endsWith('.svg') && (x = !0);
      let J = n(b),
        Y = Object.assign(
          y
            ? {
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: E,
                objectPosition: A
              }
            : {},
          T ? {} : { color: 'transparent' },
          w
        ),
        X =
          U || 'empty' === S
            ? null
            : 'blur' === S
            ? 'url("data:image/svg+xml;charset=utf-8,' +
              (0, r.getImageBlurSvg)({
                widthInt: W,
                heightInt: G,
                blurWidth: d,
                blurHeight: m,
                blurDataURL: M || '',
                objectFit: Y.objectFit
              }) +
              '")'
            : 'url("' + S + '")',
        $ = l.includes(Y.objectFit) ? ('fill' === Y.objectFit ? '100% 100%' : 'cover') : Y.objectFit,
        K = X
          ? {
              backgroundSize: $,
              backgroundPosition: Y.objectPosition || '50% 50%',
              backgroundRepeat: 'no-repeat',
              backgroundImage: X
            }
          : {},
        Z = (function (e) {
          let { config: t, src: s, unoptimized: r, width: a, quality: l, sizes: i, loader: n } = e;
          if (r) return { src: s, srcSet: void 0, sizes: void 0 };
          let { widths: o, kind: c } = (function (e, t, s) {
              let { deviceSizes: r, allSizes: a } = e;
              if (s) {
                let e = /(^|\s)(1?\d?\d)vw/g,
                  t = [];
                for (let r; (r = e.exec(s)); ) t.push(parseInt(r[2]));
                if (t.length) {
                  let e = 0.01 * Math.min(...t);
                  return { widths: a.filter((t) => t >= r[0] * e), kind: 'w' };
                }
                return { widths: a, kind: 'w' };
              }
              return 'number' != typeof t
                ? { widths: r, kind: 'w' }
                : { widths: [...new Set([t, 2 * t].map((e) => a.find((t) => t >= e) || a[a.length - 1]))], kind: 'x' };
            })(t, a, i),
            d = o.length - 1;
          return {
            sizes: i || 'w' !== c ? i : '100vw',
            srcSet: o
              .map((e, r) => n({ config: t, src: s, quality: l, width: e }) + ' ' + ('w' === c ? e : r + 1) + c)
              .join(', '),
            src: n({ config: t, src: s, quality: l, width: o[d] })
          };
        })({ config: c, src: u, unoptimized: x, width: W, quality: J, sizes: h, loader: q });
      return {
        props: {
          ...I,
          loading: H ? 'lazy' : g,
          fetchPriority: _,
          width: W,
          height: G,
          decoding: z,
          className: f,
          style: { ...Y, ...K },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: N || Z.src
        },
        meta: { unoptimized: x, priority: p, placeholder: S, fill: y }
      };
    }
  },
  98879,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        }
      });
    let r = e.r(71645),
      a = 'undefined' == typeof window,
      l = a ? () => {} : r.useLayoutEffect,
      i = a ? () => {} : r.useEffect;
    function n(e) {
      let { headManager: t, reduceComponentsToState: s } = e;
      function n() {
        if (t && t.mountedInstances) {
          let a = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
          t.updateHead(s(a, e));
        }
      }
      if (a) {
        var o;
        null == t || null == (o = t.mountedInstances) || o.add(e.children), n();
      }
      return (
        l(() => {
          var s;
          return (
            null == t || null == (s = t.mountedInstances) || s.add(e.children),
            () => {
              var s;
              null == t || null == (s = t.mountedInstances) || s.delete(e.children);
            }
          );
        }),
        l(
          () => (
            t && (t._pendingUpdate = n),
            () => {
              t && (t._pendingUpdate = n);
            }
          )
        ),
        i(
          () => (
            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  58908,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'AmpStateContext', {
        enumerable: !0,
        get: function () {
          return r;
        }
      });
    let r = e.r(55682)._(e.r(71645)).default.createContext({});
  },
  15986,
  (e, t, s) => {
    'use strict';
    function r(e) {
      let { ampFirst: t = !1, hybrid: s = !1, hasQuery: r = !1 } = void 0 === e ? {} : e;
      return t || (s && r);
    }
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'isInAmpMode', {
        enumerable: !0,
        get: function () {
          return r;
        }
      });
  },
  25633,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
      })(s, {
        default: function () {
          return p;
        },
        defaultHead: function () {
          return m;
        }
      });
    let r = e.r(55682),
      a = e.r(90809),
      l = e.r(43476),
      i = a._(e.r(71645)),
      n = r._(e.r(98879)),
      o = e.r(58908),
      c = e.r(42732),
      d = e.r(15986);
    function m(e) {
      void 0 === e && (e = !1);
      let t = [(0, l.jsx)('meta', { charSet: 'utf-8' }, 'charset')];
      return e || t.push((0, l.jsx)('meta', { name: 'viewport', content: 'width=device-width' }, 'viewport')), t;
    }
    function u(e, t) {
      return 'string' == typeof t || 'number' == typeof t
        ? e
        : t.type === i.default.Fragment
        ? e.concat(
            i.default.Children.toArray(t.props.children).reduce(
              (e, t) => ('string' == typeof t || 'number' == typeof t ? e : e.concat(t)),
              []
            )
          )
        : e.concat(t);
    }
    e.r(33525);
    let h = ['name', 'httpEquiv', 'charSet', 'itemProp'];
    function x(e, t) {
      let { inAmpMode: s } = t;
      return e
        .reduce(u, [])
        .reverse()
        .concat(m(s).reverse())
        .filter(
          (function () {
            let e = new Set(),
              t = new Set(),
              s = new Set(),
              r = {};
            return (a) => {
              let l = !0,
                i = !1;
              if (a.key && 'number' != typeof a.key && a.key.indexOf('$') > 0) {
                i = !0;
                let t = a.key.slice(a.key.indexOf('$') + 1);
                e.has(t) ? (l = !1) : e.add(t);
              }
              switch (a.type) {
                case 'title':
                case 'base':
                  t.has(a.type) ? (l = !1) : t.add(a.type);
                  break;
                case 'meta':
                  for (let e = 0, t = h.length; e < t; e++) {
                    let t = h[e];
                    if (a.props.hasOwnProperty(t))
                      if ('charSet' === t) s.has(t) ? (l = !1) : s.add(t);
                      else {
                        let e = a.props[t],
                          s = r[t] || new Set();
                        ('name' !== t || !i) && s.has(e) ? (l = !1) : (s.add(e), (r[t] = s));
                      }
                  }
              }
              return l;
            };
          })()
        )
        .reverse()
        .map((e, t) => {
          let s = e.key || t;
          return i.default.cloneElement(e, { key: s });
        });
    }
    let p = function (e) {
      let { children: t } = e,
        s = (0, i.useContext)(o.AmpStateContext),
        r = (0, i.useContext)(c.HeadManagerContext);
      return (0, l.jsx)(n.default, {
        reduceComponentsToState: x,
        headManager: r,
        inAmpMode: (0, d.isInAmpMode)(s),
        children: t
      });
    };
    ('function' == typeof s.default || ('object' == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, '__esModule', { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  18556,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'ImageConfigContext', {
        enumerable: !0,
        get: function () {
          return l;
        }
      });
    let r = e.r(55682)._(e.r(71645)),
      a = e.r(87690),
      l = r.default.createContext(a.imageConfigDefault);
  },
  65856,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'RouterContext', {
        enumerable: !0,
        get: function () {
          return r;
        }
      });
    let r = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  1948,
  (e, t, s) => {
    'use strict';
    function r(e) {
      var t;
      let { config: s, src: r, width: a, quality: l } = e,
        i =
          l ||
          (null == (t = s.qualities) ? void 0 : t.reduce((e, t) => (Math.abs(t - 75) < Math.abs(e - 75) ? t : e))) ||
          75;
      return (
        s.path + '?url=' + encodeURIComponent(r) + '&w=' + a + '&q=' + i + (r.startsWith('/_next/static/media/'), '')
      );
    }
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'default', {
        enumerable: !0,
        get: function () {
          return a;
        }
      }),
      (r.__next_img_default = !0);
    let a = r;
  },
  18581,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'useMergedRef', {
        enumerable: !0,
        get: function () {
          return a;
        }
      });
    let r = e.r(71645);
    function a(e, t) {
      let s = (0, r.useRef)(null),
        a = (0, r.useRef)(null);
      return (0, r.useCallback)(
        (r) => {
          if (null === r) {
            let e = s.current;
            e && ((s.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else e && (s.current = l(e, r)), t && (a.current = l(t, r));
        },
        [e, t]
      );
    }
    function l(e, t) {
      if ('function' != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let s = e(t);
        return 'function' == typeof s ? s : () => e(null);
      }
    }
    ('function' == typeof s.default || ('object' == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, '__esModule', { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  5500,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'Image', {
        enumerable: !0,
        get: function () {
          return j;
        }
      });
    let r = e.r(55682),
      a = e.r(90809),
      l = e.r(43476),
      i = a._(e.r(71645)),
      n = r._(e.r(74080)),
      o = r._(e.r(25633)),
      c = e.r(8927),
      d = e.r(87690),
      m = e.r(18556);
    e.r(33525);
    let u = e.r(65856),
      h = r._(e.r(1948)),
      x = e.r(18581),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        dangerouslyAllowSVG: !1,
        unoptimized: !1
      };
    function g(e, t, s, r, a, l, i) {
      let n = null == e ? void 0 : e.src;
      e &&
        e['data-loaded-src'] !== n &&
        ((e['data-loaded-src'] = n),
        ('decode' in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (('empty' !== t && a(!0), null == s ? void 0 : s.current)) {
                let t = new Event('load');
                Object.defineProperty(t, 'target', { writable: !1, value: e });
                let r = !1,
                  a = !1;
                s.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => r,
                  isPropagationStopped: () => a,
                  persist: () => {},
                  preventDefault: () => {
                    (r = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (a = !0), t.stopPropagation();
                  }
                });
              }
              (null == r ? void 0 : r.current) && r.current(e);
            }
          }));
    }
    function f(e) {
      return i.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    'undefined' == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, i.forwardRef)((e, t) => {
      let {
          src: s,
          srcSet: r,
          sizes: a,
          height: n,
          width: o,
          decoding: c,
          className: d,
          style: m,
          fetchPriority: u,
          placeholder: h,
          loading: p,
          unoptimized: b,
          fill: v,
          onLoadRef: j,
          onLoadingCompleteRef: y,
          setBlurComplete: w,
          setShowAltText: N,
          sizesInput: k,
          onLoad: C,
          onError: S,
          ...M
        } = e,
        _ = (0, i.useCallback)(
          (e) => {
            e && (S && (e.src = e.src), e.complete && g(e, h, j, y, w, b, k));
          },
          [s, h, j, y, w, S, b, k]
        ),
        z = (0, x.useMergedRef)(t, _);
      return (0, l.jsx)('img', {
        ...M,
        ...f(u),
        loading: p,
        width: o,
        height: n,
        decoding: c,
        'data-nimg': v ? 'fill' : '1',
        className: d,
        style: m,
        sizes: a,
        srcSet: r,
        src: s,
        ref: z,
        onLoad: (e) => {
          g(e.currentTarget, h, j, y, w, b, k);
        },
        onError: (e) => {
          N(!0), 'empty' !== h && w(!0), S && S(e);
        }
      });
    });
    function v(e) {
      let { isAppRouter: t, imgAttributes: s } = e,
        r = {
          as: 'image',
          imageSrcSet: s.srcSet,
          imageSizes: s.sizes,
          crossOrigin: s.crossOrigin,
          referrerPolicy: s.referrerPolicy,
          ...f(s.fetchPriority)
        };
      return t && n.default.preload
        ? (n.default.preload(s.src, r), null)
        : (0, l.jsx)(o.default, {
            children: (0, l.jsx)(
              'link',
              { rel: 'preload', href: s.srcSet ? void 0 : s.src, ...r },
              '__nimg-' + s.src + s.srcSet + s.sizes
            )
          });
    }
    let j = (0, i.forwardRef)((e, t) => {
      let s = (0, i.useContext)(u.RouterContext),
        r = (0, i.useContext)(m.ImageConfigContext),
        a = (0, i.useMemo)(() => {
          var e;
          let t = p || r || d.imageConfigDefault,
            s = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
            a = t.deviceSizes.sort((e, t) => e - t),
            l = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
          return { ...t, allSizes: s, deviceSizes: a, qualities: l };
        }, [r]),
        { onLoad: n, onLoadingComplete: o } = e,
        x = (0, i.useRef)(n);
      (0, i.useEffect)(() => {
        x.current = n;
      }, [n]);
      let g = (0, i.useRef)(o);
      (0, i.useEffect)(() => {
        g.current = o;
      }, [o]);
      let [f, j] = (0, i.useState)(!1),
        [y, w] = (0, i.useState)(!1),
        { props: N, meta: k } = (0, c.getImgProps)(e, {
          defaultLoader: h.default,
          imgConf: a,
          blurComplete: f,
          showAltText: y
        });
      return (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)(b, {
            ...N,
            unoptimized: k.unoptimized,
            placeholder: k.placeholder,
            fill: k.fill,
            onLoadRef: x,
            onLoadingCompleteRef: g,
            setBlurComplete: j,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t
          }),
          k.priority ? (0, l.jsx)(v, { isAppRouter: !s, imgAttributes: N }) : null
        ]
      });
    });
    ('function' == typeof s.default || ('object' == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, '__esModule', { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  94909,
  (e, t, s) => {
    'use strict';
    Object.defineProperty(s, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
      })(s, {
        default: function () {
          return o;
        },
        getImageProps: function () {
          return n;
        }
      });
    let r = e.r(55682),
      a = e.r(8927),
      l = e.r(5500),
      i = r._(e.r(1948));
    function n(e) {
      let { props: t } = (0, a.getImgProps)(e, {
        defaultLoader: i.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !1
        }
      });
      for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e];
      return { props: t };
    }
    let o = l.Image;
  },
  57688,
  (e, t, s) => {
    t.exports = e.r(94909);
  },
  74647,
  (e) => {
    'use strict';
    e.s(['default', () => V], 74647);
    var t = e.i(43476),
      s = e.i(71645);
    e.i(57688);
    let r = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, s) => (s ? s.toUpperCase() : t.toLowerCase()));
        return t.charAt(0).toUpperCase() + t.slice(1);
      },
      a = function () {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return t
          .filter((e, t, s) => !!e && '' !== e.trim() && s.indexOf(e) === t)
          .join(' ')
          .trim();
      };
    var l = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
    let i = (0, s.forwardRef)((e, t) => {
        let {
          color: r = 'currentColor',
          size: i = 24,
          strokeWidth: n = 2,
          absoluteStrokeWidth: o,
          className: c = '',
          children: d,
          iconNode: m,
          ...u
        } = e;
        return (0, s.createElement)(
          'svg',
          {
            ref: t,
            ...l,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (24 * Number(n)) / Number(i) : n,
            className: a('lucide', c),
            ...(!d &&
              !((e) => {
                for (let t in e) if (t.startsWith('aria-') || 'role' === t || 'title' === t) return !0;
              })(u) && { 'aria-hidden': 'true' }),
            ...u
          },
          [
            ...m.map((e) => {
              let [t, r] = e;
              return (0, s.createElement)(t, r);
            }),
            ...(Array.isArray(d) ? d : [d])
          ]
        );
      }),
      n = (e, t) => {
        let l = (0, s.forwardRef)((l, n) => {
          let { className: o, ...c } = l;
          return (0, s.createElement)(i, {
            ref: n,
            iconNode: t,
            className: a(
              'lucide-'.concat(
                r(e)
                  .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                  .toLowerCase()
              ),
              'lucide-'.concat(e),
              o
            ),
            ...c
          });
        });
        return (l.displayName = r(e)), l;
      },
      o = n('chevron-down', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]),
      c = () => {
        let [e, r] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          r(!0);
        }, []);
        let a = () => {
          var e;
          null == (e = document.getElementById('about')) || e.scrollIntoView({ behavior: 'smooth' });
        };
        return (0, t.jsxs)('section', {
          id: 'home',
          className: 'relative min-h-screen flex items-center justify-center overflow-hidden',
          children: [
            (0, t.jsxs)('div', {
              className: 'absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-500 to-blue-800',
              children: [
                (0, t.jsx)('div', {
                  className: 'absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent animate-pulse'
                }),
                (0, t.jsx)('div', {
                  className: 'absolute inset-0',
                  children: [...Array(50)].map((e, s) =>
                    (0, t.jsx)(
                      'div',
                      {
                        className: 'absolute bg-white/20 rounded-full animate-float',
                        style: {
                          left: ''.concat(100 * Math.random(), '%'),
                          top: ''.concat(100 * Math.random(), '%'),
                          width: ''.concat(10 * Math.random() + 4, 'px'),
                          height: ''.concat(10 * Math.random() + 4, 'px'),
                          animationDelay: ''.concat(10 * Math.random(), 's'),
                          animationDuration: ''.concat(3 * Math.random() + 2, 's')
                        }
                      },
                      s
                    )
                  )
                })
              ]
            }),
            (0, t.jsxs)('div', {
              className: 'relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto',
              children: [
                (0, t.jsxs)('div', {
                  className: 'transition-all duration-1000 '.concat(
                    e ? 'opacity-100 transform-none' : ' transform translate-y-10'
                  ),
                  children: [
                    (0, t.jsx)('div', {
                      className: 'mb-8',
                      children: (0, t.jsx)('div', {
                        className:
                          'w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center mb-6',
                        children: (0, t.jsx)('div', {
                          className:
                            'w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold',
                          children: (0, t.jsx)('img', { src: '/arham.jpg', alt: 'Awais', className: 'rounded-full' })
                        })
                      })
                    }),
                    (0, t.jsx)('h1', {
                      className:
                        'text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent',
                      children: 'Arham Raza'
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-blue-100',
                      children: 'Full Stack Developer'
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-blue-50 leading-relaxed',
                      children: 'Crafting digital experiences with modern technologies and creative design solutions'
                    }),
                    (0, t.jsxs)('div', {
                      className: 'flex flex-col sm:flex-row gap-4 justify-center items-center',
                      children: [
                        (0, t.jsx)('button', {
                          onClick: a,
                          className:
                            'bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl',
                          children: 'Learn More'
                        }),
                        (0, t.jsx)('button', {
                          className:
                            'border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105',
                          children: 'View Projects'
                        })
                      ]
                    })
                  ]
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 '.concat(
                      e ? 'opacity-100 translate-y-0' : ' translate-y-5'
                    ),
                  children: (0, t.jsx)('button', {
                    onClick: a,
                    className: 'animate-bounce text-white/70 hover:text-white transition-colors duration-300',
                    children: (0, t.jsx)(o, { size: 32 })
                  })
                })
              ]
            })
          ]
        });
      },
      d = n('menu', [
        ['path', { d: 'M4 5h16', key: '1tepv9' }],
        ['path', { d: 'M4 12h16', key: '1lakjw' }],
        ['path', { d: 'M4 19h16', key: '1djgab' }]
      ]),
      m = n('x', [
        ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
        ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }]
      ]),
      u = n('download', [
        ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
        ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
        ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }]
      ]),
      h = (e) => {
        let { scrolled: s, isMenuOpen: r, setIsMenuOpen: a } = e,
          l = (e) => {
            let t = document.getElementById(e);
            t && (t.scrollIntoView({ behavior: 'smooth' }), a(!1));
          },
          i = () => {
            let e = document.createElement('a');
            (e.href = '/Awais_Mernstack_Resume.pdf'), (e.download = 'CV.pdf'), e.click();
          },
          n = [
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Education', id: 'education' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'projects' },
            { name: 'Services', id: 'services' },
            { name: 'Contact', id: 'contact' }
          ];
        return (0, t.jsxs)('nav', {
          className: 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 '.concat(
            s ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
          ),
          children: [
            (0, t.jsx)('div', {
              className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
              children: (0, t.jsxs)('div', {
                className: 'flex items-center justify-between h-16',
                children: [
                  (0, t.jsx)('div', {
                    className: 'flex-shrink-0',
                    children: (0, t.jsx)('h1', {
                      className: 'text-2xl font-bold transition-colors duration-300 '.concat(
                        s ? 'text-slate-800' : 'text-white'
                      ),
                      children: 'Portfolio'
                    })
                  }),
                  (0, t.jsx)('div', {
                    className: 'hidden md:block',
                    children: (0, t.jsxs)('div', {
                      className: 'ml-10 flex items-baseline space-x-4',
                      children: [
                        n.map((e) =>
                          (0, t.jsx)(
                            'button',
                            {
                              onClick: () => l(e.id),
                              className:
                                'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-blue-600/20 '.concat(
                                  s ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                                ),
                              children: e.name
                            },
                            e.name
                          )
                        ),
                        (0, t.jsxs)('button', {
                          onClick: i,
                          className:
                            'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors duration-300',
                          children: [(0, t.jsx)(u, { size: 16 }), 'CV']
                        })
                      ]
                    })
                  }),
                  (0, t.jsx)('div', {
                    className: 'md:hidden',
                    children: (0, t.jsx)('button', {
                      onClick: () => a(!r),
                      className: 'p-2 rounded-md transition-colors duration-300 '.concat(
                        s ? 'text-slate-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                      ),
                      children: r ? (0, t.jsx)(m, { size: 24 }) : (0, t.jsx)(d, { size: 24 })
                    })
                  })
                ]
              })
            }),
            (0, t.jsx)('div', {
              className: 'md:hidden transition-all duration-300 '.concat(
                r ? 'max-h-96 opacity-100' : 'max-h-0 ',
                ' overflow-hidden bg-white/95 backdrop-blur-md'
              ),
              children: (0, t.jsxs)('div', {
                className: 'px-2 pt-2 pb-3 space-y-1 sm:px-3',
                children: [
                  n.map((e) =>
                    (0, t.jsx)(
                      'button',
                      {
                        onClick: () => l(e.id),
                        className:
                          'block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300',
                        children: e.name
                      },
                      e.name
                    )
                  ),
                  (0, t.jsxs)('button', {
                    onClick: i,
                    className:
                      'w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 transition-colors duration-300',
                    children: [(0, t.jsx)(u, { size: 16 }), 'Download CV']
                  })
                ]
              })
            })
          ]
        });
      },
      x = n('user', [
        ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
        ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }]
      ]),
      p = n('code', [
        ['path', { d: 'm16 18 6-6-6-6', key: 'eg8j8' }],
        ['path', { d: 'm8 6-6 6 6 6', key: 'ppft3o' }]
      ]),
      g = n('heart', [
        [
          'path',
          {
            d: 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5',
            key: 'mvr1a0'
          }
        ]
      ]),
      f = () => {
        let [e, r] = (0, s.useState)(!1),
          a = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = a.current,
              t = new IntersectionObserver(
                (e) => {
                  let [t] = e;
                  t.isIntersecting && r(!0);
                },
                { threshold: 0.3 }
              );
            return (
              e && t.observe(e),
              () => {
                e && t.unobserve(e);
              }
            );
          }, []),
          (0, t.jsx)('section', {
            id: 'about',
            className: 'py-20 bg-gradient-to-br from-gray-50 to-blue-50',
            children: (0, t.jsx)('div', {
              className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
              children: (0, t.jsxs)('div', {
                ref: a,
                className: 'transition-all duration-1000 '.concat(
                  e ? 'opacity-100 transform-none' : ' transform translate-y-10'
                ),
                children: [
                  (0, t.jsxs)('div', {
                    className: 'text-center mb-16',
                    children: [
                      (0, t.jsxs)('h2', {
                        className: 'text-4xl sm:text-5xl font-bold text-slate-800 mb-4',
                        children: ['About ', (0, t.jsx)('span', { className: 'text-blue-600', children: 'Me' })]
                      }),
                      (0, t.jsx)('div', {
                        className: 'w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8'
                      }),
                      (0, t.jsx)('p', {
                        className: 'text-lg text-slate-600 max-w-2xl mx-auto',
                        children:
                          'Passionate developer with a keen eye for design and a love for creating meaningful digital experiences.'
                      })
                    ]
                  }),
                  (0, t.jsxs)('div', {
                    className: 'grid lg:grid-cols-2 gap-12 items-center',
                    children: [
                      (0, t.jsxs)('div', {
                        className: 'space-y-6',
                        children: [
                          (0, t.jsx)('p', {
                            className: 'text-lg text-slate-700 leading-relaxed',
                            children:
                              'Hello! I am a dedicated full-stack developer with over 1.5 years of experience in creating innovative web applications and user interfaces. My journey in tech started with a curiosity about how things work, and it has evolved into a passion for solving complex problems through code.'
                          }),
                          (0, t.jsx)('p', {
                            className: 'text-lg text-slate-700 leading-relaxed',
                            children:
                              'I specialize in modern web technologies and have a strong background in both front-end and back-end development. When I am not coding, you will find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.'
                          }),
                          (0, t.jsxs)('div', {
                            className: 'grid sm:grid-cols-2 gap-6 mt-8',
                            children: [
                              (0, t.jsxs)('div', {
                                className:
                                  'bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100',
                                children: [
                                  (0, t.jsxs)('div', {
                                    className: 'flex items-center gap-3 mb-3',
                                    children: [
                                      (0, t.jsx)('div', {
                                        className: 'p-2 bg-blue-100 rounded-lg',
                                        children: (0, t.jsx)(p, { className: 'text-blue-600', size: 24 })
                                      }),
                                      (0, t.jsx)('h3', {
                                        className: 'text-xl font-semibold text-slate-800',
                                        children: 'Clean Code'
                                      })
                                    ]
                                  }),
                                  (0, t.jsx)('p', {
                                    className: 'text-slate-600',
                                    children:
                                      'Writing maintainable, scalable, and well-documented code that stands the test of time.'
                                  })
                                ]
                              }),
                              (0, t.jsxs)('div', {
                                className:
                                  'bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100',
                                children: [
                                  (0, t.jsxs)('div', {
                                    className: 'flex items-center gap-3 mb-3',
                                    children: [
                                      (0, t.jsx)('div', {
                                        className: 'p-2 bg-blue-100 rounded-lg',
                                        children: (0, t.jsx)(g, { className: 'text-blue-600', size: 24 })
                                      }),
                                      (0, t.jsx)('h3', {
                                        className: 'text-xl font-semibold text-slate-800',
                                        children: 'User Focus'
                                      })
                                    ]
                                  }),
                                  (0, t.jsx)('p', {
                                    className: 'text-slate-600',
                                    children:
                                      'Creating intuitive and accessible experiences that delight users and meet business goals.'
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (0, t.jsx)('div', {
                        className: 'relative',
                        children: (0, t.jsx)('div', {
                          className:
                            'bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500',
                          children: (0, t.jsxs)('div', {
                            className: 'space-y-6',
                            children: [
                              (0, t.jsxs)('div', {
                                className: 'flex items-center gap-4',
                                children: [
                                  (0, t.jsx)('div', {
                                    className: 'p-3 bg-white/20 rounded-full',
                                    children: (0, t.jsx)(x, { className: 'text-white', size: 24 })
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('h3', {
                                        className: 'text-xl font-semibold',
                                        children: 'Personal Info'
                                      }),
                                      (0, t.jsx)('p', { className: 'text-blue-100', children: 'Get to know me better' })
                                    ]
                                  })
                                ]
                              }),
                              (0, t.jsxs)('div', {
                                className: 'grid grid-cols-2 gap-4',
                                children: [
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('p', {
                                        className: 'text-blue-200 text-sm font-medium',
                                        children: 'Age'
                                      }),
                                      (0, t.jsx)('p', { className: 'text-white font-semibold', children: '25' })
                                    ]
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('p', {
                                        className: 'text-blue-200 text-sm font-medium',
                                        children: 'Location'
                                      }),
                                      (0, t.jsx)('p', { className: 'text-white font-semibold', children: 'Faisalabad' })
                                    ]
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('p', {
                                        className: 'text-blue-200 text-sm font-medium',
                                        children: 'Experience'
                                      }),
                                      (0, t.jsx)('p', { className: 'text-white font-semibold', children: '1.5 Years' })
                                    ]
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('p', {
                                        className: 'text-blue-200 text-sm font-medium',
                                        children: 'Projects'
                                      }),
                                      (0, t.jsx)('p', {
                                        className: 'text-white font-semibold',
                                        children: '10+ Completed'
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, t.jsx)('button', {
                                className:
                                  'w-full bg-white text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300',
                                onClick: () => {
                                  let e = document.createElement('a');
                                  (e.href = '/Awais_Mernstack_Resume.pdf'), (e.download = 'CV.pdf'), e.click();
                                },
                                children: 'Download Resume'
                              })
                            ]
                          })
                        })
                      })
                    ]
                  })
                ]
              })
            })
          })
        );
      },
      b = n('graduation-cap', [
        [
          'path',
          {
            d: 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z',
            key: 'j76jl0'
          }
        ],
        ['path', { d: 'M22 10v6', key: '1lu8f3' }],
        ['path', { d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5', key: '1r8lef' }]
      ]),
      v = n('calendar', [
        ['path', { d: 'M8 2v4', key: '1cmpym' }],
        ['path', { d: 'M16 2v4', key: '4m81vk' }],
        ['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2', key: '1hopcy' }],
        ['path', { d: 'M3 10h18', key: '8toen8' }]
      ]),
      j = n('award', [
        [
          'path',
          {
            d: 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526',
            key: '1yiouv'
          }
        ],
        ['circle', { cx: '12', cy: '8', r: '6', key: '1vp47v' }]
      ]),
      y = () => {
        let [e, r] = (0, s.useState)(!1),
          a = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                let [t] = e;
                t.isIntersecting && r(!0);
              },
              { threshold: 0.3 }
            );
            return (
              a.current && e.observe(a.current),
              () => {
                a.current && e.unobserve(a.current);
              }
            );
          }, []),
          (0, t.jsx)('section', {
            id: 'education',
            className: 'py-20 bg-white',
            children: (0, t.jsx)('div', {
              className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
              children: (0, t.jsxs)('div', {
                ref: a,
                className: 'transition-all duration-1000 '.concat(
                  e ? 'opacity-100 transform-none' : ' transform translate-y-10'
                ),
                children: [
                  (0, t.jsxs)('div', {
                    className: 'text-center mb-16',
                    children: [
                      (0, t.jsxs)('h2', {
                        className: 'text-4xl sm:text-5xl font-bold text-slate-800 mb-4',
                        children: ['My ', (0, t.jsx)('span', { className: 'text-blue-600', children: 'Education' })]
                      }),
                      (0, t.jsx)('div', {
                        className: 'w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8'
                      }),
                      (0, t.jsx)('p', {
                        className: 'text-lg text-slate-600 max-w-2xl mx-auto',
                        children:
                          'A journey of continuous learning and academic excellence in computer science and software engineering.'
                      })
                    ]
                  }),
                  (0, t.jsxs)('div', {
                    className: 'relative',
                    children: [
                      (0, t.jsx)('div', {
                        className:
                          'absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400 hidden lg:block'
                      }),
                      (0, t.jsx)('div', {
                        className: 'space-y-12 lg:space-y-16',
                        children: [
                          {
                            degree: 'Bachelor of Software Engineering',
                            institution: 'University of Engineering and Technology, Lahore',
                            period: '2019 - 2023',
                            description:
                              'Comprehensive study of software development, algorithms, and computer systems.',
                            achievements: ['Magna Cum Laude', 'Programming Club President', 'Hackathon Winner']
                          },
                          {
                            degree: 'High School Education',
                            institution: 'Government College of Science, Faisalabad',
                            period: '2017 - 2019',
                            description:
                              'Intensive program covering modern web development technologies and best practices.',
                            achievements: ['300+ hours', '10 Projects', 'Community Contributor']
                          },
                          {
                            degree: 'Certified Full Stack Developer',
                            institution: 'FreeCodeCamp',
                            period: '2019',
                            description:
                              'Intensive program covering modern web development technologies and best practices.',
                            gpa: 'Certificate',
                            achievements: ['300+ hours', '10 Projects', 'Community Contributor']
                          }
                        ].map((e, s) =>
                          (0, t.jsxs)(
                            'div',
                            {
                              className: 'relative flex flex-col lg:flex-row items-center gap-8 '.concat(
                                s % 2 == 0 ? 'lg:flex-row-reverse' : ''
                              ),
                              children: [
                                (0, t.jsx)('div', {
                                  className:
                                    'absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block'
                                }),
                                (0, t.jsx)('div', {
                                  className: 'flex-1 '.concat(s % 2 == 0 ? 'lg:text-right' : 'lg:text-left'),
                                  children: (0, t.jsxs)('div', {
                                    className:
                                      'bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100',
                                    children: [
                                      (0, t.jsxs)('div', {
                                        className: 'flex items-center gap-3 mb-4',
                                        children: [
                                          (0, t.jsx)('div', {
                                            className: 'p-3 bg-blue-100 rounded-full',
                                            children: (0, t.jsx)(b, { className: 'text-blue-600', size: 24 })
                                          }),
                                          (0, t.jsxs)('div', {
                                            className: 'flex-1',
                                            children: [
                                              (0, t.jsx)('h3', {
                                                className: 'text-xl font-bold text-slate-800',
                                                children: e.degree
                                              }),
                                              (0, t.jsx)('p', {
                                                className: 'text-blue-600 font-semibold',
                                                children: e.institution
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      (0, t.jsxs)('div', {
                                        className: 'flex items-center gap-2 mb-4 text-slate-600',
                                        children: [
                                          (0, t.jsx)(v, { size: 16 }),
                                          (0, t.jsx)('span', { className: 'font-medium', children: e.period }),
                                          (0, t.jsx)('span', { className: 'mx-2', children: '•' }),
                                          (0, t.jsx)('span', { className: 'font-medium', children: e.gpa })
                                        ]
                                      }),
                                      (0, t.jsx)('p', {
                                        className: 'text-slate-700 mb-4 leading-relaxed',
                                        children: e.description
                                      }),
                                      (0, t.jsxs)('div', {
                                        className: 'space-y-2',
                                        children: [
                                          (0, t.jsxs)('div', {
                                            className: 'flex items-center gap-2 mb-2',
                                            children: [
                                              (0, t.jsx)(j, { size: 16, className: 'text-blue-600' }),
                                              (0, t.jsx)('span', {
                                                className: 'font-semibold text-slate-800',
                                                children: 'Key Achievements'
                                              })
                                            ]
                                          }),
                                          (0, t.jsx)('div', {
                                            className: 'flex flex-wrap gap-2',
                                            children: e.achievements.map((e, s) =>
                                              (0, t.jsx)(
                                                'span',
                                                {
                                                  className:
                                                    'bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium',
                                                  children: e
                                                },
                                                s
                                              )
                                            )
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                }),
                                (0, t.jsx)('div', { className: 'flex-1 hidden lg:block' })
                              ]
                            },
                            s
                          )
                        )
                      })
                    ]
                  })
                ]
              })
            })
          })
        );
      },
      w = n('palette', [
        [
          'path',
          {
            d: 'M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z',
            key: 'e79jfc'
          }
        ],
        ['circle', { cx: '13.5', cy: '6.5', r: '.5', fill: 'currentColor', key: '1okk4w' }],
        ['circle', { cx: '17.5', cy: '10.5', r: '.5', fill: 'currentColor', key: 'f64h9f' }],
        ['circle', { cx: '6.5', cy: '12.5', r: '.5', fill: 'currentColor', key: 'qy21gx' }],
        ['circle', { cx: '8.5', cy: '7.5', r: '.5', fill: 'currentColor', key: 'fotxhn' }]
      ]),
      N = n('server', [
        ['rect', { width: '20', height: '8', x: '2', y: '2', rx: '2', ry: '2', key: 'ngkwjq' }],
        ['rect', { width: '20', height: '8', x: '2', y: '14', rx: '2', ry: '2', key: 'iecqi9' }],
        ['line', { x1: '6', x2: '6.01', y1: '6', y2: '6', key: '16zg32' }],
        ['line', { x1: '6', x2: '6.01', y1: '18', y2: '18', key: 'nzw8ys' }]
      ]),
      k = n('smartphone', [
        ['rect', { width: '14', height: '20', x: '5', y: '2', rx: '2', ry: '2', key: '1yt0o3' }],
        ['path', { d: 'M12 18h.01', key: 'mhygvu' }]
      ]),
      C = n('database', [
        ['ellipse', { cx: '12', cy: '5', rx: '9', ry: '3', key: 'msslwz' }],
        ['path', { d: 'M3 5V19A9 3 0 0 0 21 19V5', key: '1wlel7' }],
        ['path', { d: 'M3 12A9 3 0 0 0 21 12', key: 'mv7ke4' }]
      ]),
      S = () => {
        let [e, r] = (0, s.useState)(!1),
          [a, l] = (0, s.useState)(new Set()),
          i = (0, s.useRef)(null),
          n = [
            { name: 'JavaScript', level: 90, icon: p, color: 'from-yellow-400 to-orange-500' },
            { name: 'React/Next.js', level: 85, icon: p, color: 'from-blue-400 to-blue-600' },
            { name: 'TypeScript', level: 85, icon: p, color: 'from-blue-600 to-indigo-600' },
            { name: 'Node.js', level: 80, icon: N, color: 'from-green-400 to-green-600' },
            { name: 'MongoDB', level: 82, icon: C, color: 'from-green-600 to-blue-600' },
            { name: 'TailwindCSS', level: 85, icon: w, color: 'from-pink-400 to-purple-600' },
            { name: 'Mobile Dev', level: 70, icon: k, color: 'from-purple-400 to-pink-600' }
          ];
        (0, s.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              let [t] = e;
              t.isIntersecting &&
                (r(!0),
                n.forEach((e, t) => {
                  setTimeout(() => {
                    l((e) => new Set([...e, t]));
                  }, 200 * t);
                }));
            },
            { threshold: 0.3 }
          );
          return (
            i.current && e.observe(i.current),
            () => {
              i.current && e.unobserve(i.current);
            }
          );
        }, []);
        let o = (e) => {
          let { percentage: s, isAnimated: r, color: a } = e,
            l = 2 * Math.PI * 60;
          return (0, t.jsxs)('div', {
            className: 'relative w-32 h-32',
            children: [
              (0, t.jsxs)('svg', {
                className: 'w-32 h-32 transform -rotate-90',
                viewBox: '0 0 144 144',
                children: [
                  (0, t.jsx)('circle', {
                    cx: '72',
                    cy: '72',
                    r: 60,
                    stroke: 'currentColor',
                    strokeWidth: '8',
                    fill: 'transparent',
                    className: 'text-gray-200'
                  }),
                  (0, t.jsx)('circle', {
                    cx: '72',
                    cy: '72',
                    r: 60,
                    stroke: 'url(#gradient)',
                    strokeWidth: '8',
                    fill: 'transparent',
                    strokeDasharray: l,
                    strokeDashoffset: l - (r ? (s / 100) * l : 0),
                    strokeLinecap: 'round',
                    className: 'transition-all duration-1000 ease-out'
                  }),
                  (0, t.jsx)('defs', {
                    children: (0, t.jsxs)('linearGradient', {
                      id: 'gradient',
                      x1: '0%',
                      y1: '0%',
                      x2: '100%',
                      y2: '100%',
                      children: [
                        (0, t.jsx)('stop', { offset: '0%', stopColor: '#3b82f6' }),
                        (0, t.jsx)('stop', { offset: '100%', stopColor: '#1d4ed8' })
                      ]
                    })
                  })
                ]
              }),
              (0, t.jsx)('div', {
                className: 'absolute inset-0 flex items-center justify-center',
                children: (0, t.jsxs)('span', {
                  className: 'text-2xl font-bold text-slate-800',
                  children: [r ? s : 0, '%']
                })
              })
            ]
          });
        };
        return (0, t.jsx)('section', {
          id: 'skills',
          className: 'py-20 bg-gradient-to-br from-gray-50 to-blue-50',
          children: (0, t.jsx)('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            children: (0, t.jsxs)('div', {
              ref: i,
              className: 'transition-all duration-1000 '.concat(
                e ? 'opacity-100 transform-none' : ' transform translate-y-10'
              ),
              children: [
                (0, t.jsxs)('div', {
                  className: 'text-center mb-16',
                  children: [
                    (0, t.jsxs)('h2', {
                      className: 'text-4xl sm:text-5xl font-bold text-slate-800 mb-4',
                      children: ['My ', (0, t.jsx)('span', { className: 'text-blue-600', children: 'Skills' })]
                    }),
                    (0, t.jsx)('div', {
                      className: 'w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8'
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-lg text-slate-600 max-w-2xl mx-auto',
                      children:
                        'A comprehensive toolkit of modern technologies and frameworks for creating exceptional digital experiences.'
                    })
                  ]
                }),
                (0, t.jsx)('div', {
                  className: 'grid grid-cols-2 md:grid-cols-4 gap-8 mb-16',
                  children: n.slice(0, 4).map((e, s) => {
                    let r = e.icon;
                    return (0, t.jsx)(
                      'div',
                      {
                        className: 'text-center',
                        children: (0, t.jsx)('div', {
                          className:
                            'bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100',
                          children: (0, t.jsxs)('div', {
                            className: 'flex flex-col items-center space-y-4',
                            children: [
                              (0, t.jsx)('div', {
                                className: 'p-3 bg-blue-100 rounded-full',
                                children: (0, t.jsx)(r, { className: 'text-blue-600', size: 24 })
                              }),
                              (0, t.jsx)(o, { percentage: e.level, isAnimated: a.has(s), color: e.color }),
                              (0, t.jsx)('h3', { className: 'font-semibold text-slate-800', children: e.name })
                            ]
                          })
                        })
                      },
                      s
                    );
                  })
                }),
                (0, t.jsx)('div', {
                  className: 'grid md:grid-cols-2 gap-8',
                  children: n.slice(4).map((e, s) => {
                    let r = s + 4,
                      l = e.icon;
                    return (0, t.jsxs)(
                      'div',
                      {
                        className:
                          'bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100',
                        children: [
                          (0, t.jsxs)('div', {
                            className: 'flex items-center gap-4 mb-4',
                            children: [
                              (0, t.jsx)('div', {
                                className: 'p-2 bg-blue-100 rounded-lg',
                                children: (0, t.jsx)(l, { className: 'text-blue-600', size: 20 })
                              }),
                              (0, t.jsxs)('div', {
                                className: 'flex-1',
                                children: [
                                  (0, t.jsx)('h3', { className: 'font-semibold text-slate-800', children: e.name }),
                                  (0, t.jsxs)('p', {
                                    className: 'text-sm text-slate-600',
                                    children: [e.level, '% Proficiency']
                                  })
                                ]
                              })
                            ]
                          }),
                          (0, t.jsx)('div', {
                            className: 'w-full bg-gray-200 rounded-full h-3 overflow-hidden',
                            children: (0, t.jsx)('div', {
                              className: 'h-3 bg-gradient-to-r '.concat(
                                e.color,
                                ' rounded-full transition-all duration-1000 ease-out'
                              ),
                              style: { width: a.has(r) ? ''.concat(e.level, '%') : '0%' }
                            })
                          })
                        ]
                      },
                      r
                    );
                  })
                }),
                (0, t.jsxs)('div', {
                  className: 'mt-16 text-center',
                  children: [
                    (0, t.jsx)('h3', {
                      className: 'text-2xl font-bold text-slate-800 mb-8',
                      children: 'Additional Technologies'
                    }),
                    (0, t.jsx)('div', {
                      className: 'flex flex-wrap justify-center gap-3',
                      children: [
                        'ReactJs',
                        'NextJS',
                        'NodeJS',
                        'MongoDB',
                        'Tailwind CSS',
                        'Bootstrap',
                        'Material UI',
                        'Redux',
                        'Redux Toolkit',
                        'Figma',
                        'Git',
                        'Jest',
                        'Vercel'
                      ].map((e, s) =>
                        (0, t.jsx)(
                          'span',
                          {
                            className:
                              'bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default',
                            children: e
                          },
                          s
                        )
                      )
                    })
                  ]
                })
              ]
            })
          })
        });
      },
      M = n('external-link', [
        ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
        ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
        ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', key: 'a6xqqp' }]
      ]),
      _ = n('github', [
        [
          'path',
          {
            d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            key: 'tonef'
          }
        ],
        ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }]
      ]),
      z = n('eye', [
        [
          'path',
          {
            d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
            key: '1nclc0'
          }
        ],
        ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }]
      ]),
      P = () => {
        let [e, r] = (0, s.useState)(!1),
          [a, l] = (0, s.useState)(null),
          [i, n] = (0, s.useState)('All'),
          o = (0, s.useRef)(null),
          c = [
            {
              title: 'E-Commerce Platform',
              description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
              image:
                'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800',
              technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Shadcn UI'],
              liveUrl: 'https://new.shopilam.com/',
              githubUrl: '#',
              category: 'Website',
              fullDescription:
                'A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment processing with Stripe, and an admin dashboard for inventory management.'
            },
            {
              title: 'Expense Management App',
              description: 'Real-time expense tracking and management application.',
              image:
                'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
              technologies: ['React', 'Tailwind CSS'],
              liveUrl: 'https://expense-tracker-next-gold.vercel.app/',
              githubUrl: '#',
              category: 'Website',
              fullDescription:
                'A real-time expense tracking and management application that allows users to monitor their expenses, categorize them.'
            },
            {
              title: 'Portfolio Website',
              description: 'Modern portfolio website with smooth animations and responsive design.',
              image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
              technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
              liveUrl: 'https://professional-portfolio.surge.sh/',
              githubUrl: '#',
              category: 'Website',
              fullDescription:
                'A beautifully crafted portfolio website showcasing projects and skills with smooth scroll animations, interactive elements, and a fully responsive design optimized for all devices.'
            },
            {
              title: 'Hotel Management System',
              description: 'Comprehensive hotel management system with booking and payment features.',
              image:
                'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800',
              technologies: ['React Native', 'TypeScript', 'Redux'],
              liveUrl: 'https://grouptravel-uat.lvinlife.com/login',
              githubUrl: '#',
              category: 'Website',
              fullDescription:
                'A comprehensive hotel management system with features like booking management, payment processing, and customer relationship management.'
            },
            {
              title: 'TradeLand',
              description: ' This is website for using in trading and investment',
              image:
                'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
              technologies: ['Next.js', 'Redux', 'Tailwind CSS'],
              liveUrl: 'https://tradeland.ai/',
              githubUrl: '#',
              category: 'AI/ML',
              fullDescription:
                'An innovative AI-powered trading investment tool that provides insights and analytics for traders, helping them make informed decisions based on market trends and data analysis.'
            },
            {
              title: 'Gasco Track Fleet Dashboard ',
              description: 'This is a dashboard for gasco truck fleet management system.',
              image:
                'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
              technologies: ['React', 'Redux', 'Node.js', 'Material UI'],
              liveUrl: 'https://gasco-truck-fleet.vercel.app/',
              githubUrl: '#',
              category: 'Dashboard',
              fullDescription:
                'A comprehensive analytics dashboard providing real-time business insights with interactive charts, customizable widgets, data filtering, and automated report generation capabilities.'
            }
          ],
          d = ['All', ...Array.from(new Set(c.map((e) => e.category)))],
          u = 'All' === i ? c : c.filter((e) => e.category === i);
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                let [t] = e;
                t.isIntersecting && r(!0);
              },
              { threshold: 0.3 }
            );
            return (
              o.current && e.observe(o.current),
              () => {
                o.current && e.unobserve(o.current);
              }
            );
          }, []),
          (0, t.jsxs)('section', {
            id: 'projects',
            className: 'py-20 bg-white',
            children: [
              (0, t.jsx)('div', {
                className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
                children: (0, t.jsxs)('div', {
                  ref: o,
                  className: 'transition-all duration-1000 '.concat(
                    e ? 'opacity-100 transform-none' : ' transform translate-y-10'
                  ),
                  children: [
                    (0, t.jsxs)('div', {
                      className: 'text-center mb-16',
                      children: [
                        (0, t.jsxs)('h2', {
                          className: 'text-4xl sm:text-5xl font-bold text-slate-800 mb-4',
                          children: ['My ', (0, t.jsx)('span', { className: 'text-blue-600', children: 'Projects' })]
                        }),
                        (0, t.jsx)('div', {
                          className: 'w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8'
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-lg text-slate-600 max-w-2xl mx-auto',
                          children:
                            'A showcase of my latest work and creative projects, demonstrating expertise across various technologies and domains.'
                        })
                      ]
                    }),
                    (0, t.jsx)('div', {
                      className: 'flex flex-wrap justify-center gap-4 mb-12',
                      children: d.map((e) =>
                        (0, t.jsx)(
                          'button',
                          {
                            onClick: () => n(e),
                            className: 'px-6 py-2 rounded-full transition-all duration-300 font-medium '.concat(
                              i === e
                                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                : 'bg-gray-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                            ),
                            children: e
                          },
                          e
                        )
                      )
                    }),
                    (0, t.jsx)('div', {
                      className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
                      children: u.map((e, s) =>
                        (0, t.jsxs)(
                          'div',
                          {
                            className:
                              'group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105',
                            children: [
                              (0, t.jsxs)('div', {
                                className: 'relative overflow-hidden',
                                children: [
                                  (0, t.jsx)('img', {
                                    src: e.image,
                                    alt: e.title,
                                    className:
                                      'w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110'
                                  }),
                                  (0, t.jsx)('div', {
                                    className:
                                      'absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent  group-hover:opacity-100 transition-opacity duration-500'
                                  }),
                                  (0, t.jsx)('div', {
                                    className:
                                      'absolute inset-0 flex items-center justify-center  group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0',
                                    children: (0, t.jsxs)('div', {
                                      className: 'flex gap-3',
                                      children: [
                                        (0, t.jsx)('button', {
                                          onClick: () => l(e),
                                          className:
                                            'p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110',
                                          children: (0, t.jsx)(z, { size: 20 })
                                        }),
                                        (0, t.jsx)('a', {
                                          href: e.liveUrl,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          className:
                                            'p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110',
                                          children: (0, t.jsx)(M, { size: 20 })
                                        }),
                                        (0, t.jsx)('a', {
                                          href: e.githubUrl,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          className:
                                            'p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110',
                                          children: (0, t.jsx)(_, { size: 20 })
                                        })
                                      ]
                                    })
                                  })
                                ]
                              }),
                              (0, t.jsxs)('div', {
                                className: 'p-6',
                                children: [
                                  (0, t.jsx)('div', {
                                    className: 'flex items-center gap-2 mb-2',
                                    children: (0, t.jsx)('span', {
                                      className:
                                        'bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full',
                                      children: e.category
                                    })
                                  }),
                                  (0, t.jsx)('h3', {
                                    className:
                                      'text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300',
                                    children: e.title
                                  }),
                                  (0, t.jsx)('p', {
                                    className: 'text-slate-600 mb-4 leading-relaxed',
                                    children: e.description
                                  }),
                                  (0, t.jsx)('div', {
                                    className: 'flex flex-wrap gap-2',
                                    children: e.technologies.map((e, s) =>
                                      (0, t.jsx)(
                                        'span',
                                        {
                                          className: 'bg-gray-100 text-slate-600 text-sm px-3 py-1 rounded-full',
                                          children: e
                                        },
                                        s
                                      )
                                    )
                                  })
                                ]
                              })
                            ]
                          },
                          s
                        )
                      )
                    })
                  ]
                })
              }),
              a &&
                (0, t.jsx)('div', {
                  className: 'fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50',
                  children: (0, t.jsxs)('div', {
                    className: 'bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto',
                    children: [
                      (0, t.jsxs)('div', {
                        className: 'relative',
                        children: [
                          (0, t.jsx)('img', { src: a.image, alt: a.title, className: 'w-full h-64 object-cover' }),
                          (0, t.jsx)('button', {
                            onClick: () => l(null),
                            className:
                              'absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 hover:bg-white hover:text-red-500 transition-all duration-300',
                            children: (0, t.jsx)(m, { size: 20 })
                          })
                        ]
                      }),
                      (0, t.jsxs)('div', {
                        className: 'p-8',
                        children: [
                          (0, t.jsx)('div', {
                            className: 'flex items-center gap-2 mb-4',
                            children: (0, t.jsx)('span', {
                              className: 'bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full',
                              children: a.category
                            })
                          }),
                          (0, t.jsx)('h3', { className: 'text-3xl font-bold text-slate-800 mb-4', children: a.title }),
                          (0, t.jsx)('p', {
                            className: 'text-slate-600 mb-6 leading-relaxed',
                            children: a.fullDescription
                          }),
                          (0, t.jsxs)('div', {
                            className: 'mb-6',
                            children: [
                              (0, t.jsx)('h4', {
                                className: 'font-semibold text-slate-800 mb-3',
                                children: 'Technologies Used:'
                              }),
                              (0, t.jsx)('div', {
                                className: 'flex flex-wrap gap-2',
                                children: a.technologies.map((e, s) =>
                                  (0, t.jsx)(
                                    'span',
                                    {
                                      className: 'bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-medium',
                                      children: e
                                    },
                                    s
                                  )
                                )
                              })
                            ]
                          }),
                          (0, t.jsxs)('div', {
                            className: 'flex gap-4',
                            children: [
                              (0, t.jsxs)('a', {
                                href: a.liveUrl,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className:
                                  'flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold',
                                children: [(0, t.jsx)(M, { size: 20 }), 'View Live']
                              }),
                              (0, t.jsxs)('a', {
                                href: a.githubUrl,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className:
                                  'flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full hover:bg-slate-900 transition-colors duration-300 font-semibold',
                                children: [(0, t.jsx)(_, { size: 20 }), 'View Code']
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                })
            ]
          })
        );
      },
      E = n('globe', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' }],
        ['path', { d: 'M2 12h20', key: '9i4pu4' }]
      ]),
      A = n('zap', [
        [
          'path',
          {
            d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
            key: '1xq2db'
          }
        ]
      ]),
      O = () => {
        let [e, r] = (0, s.useState)(!1),
          a = (0, s.useRef)(null),
          l = [
            {
              icon: p,
              title: 'Frontend Development',
              description: 'Modern, responsive web applications using React, Next.js, and cutting-edge technologies.',
              features: [
                'React/Next.js Development',
                'Responsive Design',
                'Performance Optimization',
                'SEO Implementation'
              ],
              color: 'from-blue-500 to-blue-700'
            },
            {
              icon: N,
              title: 'Backend Development',
              description: 'Scalable server-side solutions with robust APIs and database management.',
              features: ['RESTful APIs', 'Database Design', 'Authentication Systems', 'Cloud Integration'],
              color: 'from-green-500 to-green-700'
            },
            {
              icon: w,
              title: 'UI/UX Design',
              description: 'User-centered design solutions that combine aesthetics with functionality.',
              features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
              color: 'from-pink-500 to-pink-700'
            },
            {
              icon: E,
              title: 'Web Applications',
              description: 'Full-stack web applications with modern architecture and best practices.',
              features: [
                'Single Page Applications',
                'Progressive Web Apps',
                'Real-time Features',
                'Third-party Integrations'
              ],
              color: 'from-indigo-500 to-indigo-700'
            },
            {
              icon: A,
              title: 'Performance Optimization',
              description: 'Speed up your applications and improve user experience.',
              features: ['Code Optimization', 'Bundle Splitting', 'Caching Strategies', 'Performance Monitoring'],
              color: 'from-orange-500 to-orange-700'
            }
          ];
        return (
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                let [t] = e;
                t.isIntersecting && r(!0);
              },
              { threshold: 0.3 }
            );
            return (
              a.current && e.observe(a.current),
              () => {
                a.current && e.unobserve(a.current);
              }
            );
          }, []),
          (0, t.jsx)('section', {
            id: 'services',
            className: 'py-20 bg-gradient-to-br from-gray-50 to-blue-50',
            children: (0, t.jsx)('div', {
              className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
              children: (0, t.jsxs)('div', {
                ref: a,
                className: 'transition-all duration-1000 '.concat(
                  e ? 'opacity-100 transform-none' : ' transform translate-y-10'
                ),
                children: [
                  (0, t.jsxs)('div', {
                    className: 'text-center mb-16',
                    children: [
                      (0, t.jsxs)('h2', {
                        className: 'text-4xl sm:text-5xl font-bold text-slate-800 mb-4',
                        children: ['My ', (0, t.jsx)('span', { className: 'text-blue-600', children: 'Services' })]
                      }),
                      (0, t.jsx)('div', {
                        className: 'w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8'
                      }),
                      (0, t.jsx)('p', {
                        className: 'text-lg text-slate-600 max-w-2xl mx-auto',
                        children:
                          'Comprehensive digital solutions tailored to bring your ideas to life with cutting-edge technology and creative design.'
                      })
                    ]
                  }),
                  (0, t.jsx)('div', {
                    className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
                    children: l.map((e, s) => {
                      let r = e.icon;
                      return (0, t.jsxs)(
                        'div',
                        {
                          className:
                            'group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100 transform hover:scale-105 hover:-rotate-1',
                          children: [
                            (0, t.jsxs)('div', {
                              className: 'p-8',
                              children: [
                                (0, t.jsx)('div', {
                                  className: 'w-16 h-16 bg-gradient-to-r '.concat(
                                    e.color,
                                    ' rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'
                                  ),
                                  children: (0, t.jsx)(r, { className: 'text-white', size: 28 })
                                }),
                                (0, t.jsx)('h3', {
                                  className:
                                    'text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300',
                                  children: e.title
                                }),
                                (0, t.jsx)('p', {
                                  className: 'text-slate-600 mb-6 leading-relaxed',
                                  children: e.description
                                }),
                                (0, t.jsx)('div', {
                                  className: 'space-y-2',
                                  children: e.features.map((e, s) =>
                                    (0, t.jsxs)(
                                      'div',
                                      {
                                        className: 'flex items-center gap-3',
                                        children: [
                                          (0, t.jsx)('div', { className: 'w-2 h-2 bg-blue-400 rounded-full' }),
                                          (0, t.jsx)('span', { className: 'text-slate-600 text-sm', children: e })
                                        ]
                                      },
                                      s
                                    )
                                  )
                                }),
                                (0, t.jsx)('div', {
                                  className: 'mt-6',
                                  children: (0, t.jsx)('button', {
                                    className:
                                      'w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl',
                                    children: 'Learn More'
                                  })
                                })
                              ]
                            }),
                            (0, t.jsx)('div', {
                              className:
                                'absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-full  group-hover:opacity-100 transition-opacity duration-500'
                            }),
                            (0, t.jsx)('div', {
                              className:
                                'absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-50 to-transparent rounded-full  group-hover:opacity-100 transition-opacity duration-500'
                            })
                          ]
                        },
                        s
                      );
                    })
                  }),
                  (0, t.jsxs)('div', {
                    className:
                      'mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white',
                    children: [
                      (0, t.jsx)('h3', {
                        className: 'text-2xl font-bold mb-4',
                        children: 'Ready to Start Your Project?'
                      }),
                      (0, t.jsx)('p', {
                        className: 'text-blue-100 mb-6 max-w-2xl mx-auto',
                        children:
                          "Let's collaborate to bring your vision to life. I'm here to help you create something amazing."
                      }),
                      (0, t.jsxs)('div', {
                        className: 'flex flex-col sm:flex-row gap-4 justify-center',
                        children: [
                          (0, t.jsx)('button', {
                            className:
                              'bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105',
                            children: 'Get Started'
                          }),
                          (0, t.jsx)('button', {
                            className:
                              'border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105',
                            children: 'View Portfolio'
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          })
        );
      },
      R = n('mail', [
        ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
        ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }]
      ]),
      I = n('phone', [
        [
          'path',
          {
            d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384',
            key: '9njp5v'
          }
        ]
      ]),
      D = n('map-pin', [
        [
          'path',
          {
            d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
            key: '1r0f0z'
          }
        ],
        ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }]
      ]),
      T = n('send', [
        [
          'path',
          {
            d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
            key: '1ffxy3'
          }
        ],
        ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }]
      ]),
      U = n('linkedin', [
        [
          'path',
          { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z', key: 'c2jq9f' }
        ],
        ['rect', { width: '4', height: '12', x: '2', y: '9', key: 'mk3on5' }],
        ['circle', { cx: '4', cy: '4', r: '2', key: 'bt5ra8' }]
      ]),
      L = n('twitter', [
        [
          'path',
          {
            d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
            key: 'pff0z6'
          }
        ]
      ]),
      F = () => {
        let [e, r] = (0, s.useState)(!1),
          [a, l] = (0, s.useState)({ name: '', email: '', subject: '', message: '' }),
          [i, n] = (0, s.useState)(!1),
          [o, c] = (0, s.useState)('idle'),
          d = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              let [t] = e;
              t.isIntersecting && r(!0);
            },
            { threshold: 0.3 }
          );
          return (
            d.current && e.observe(d.current),
            () => {
              d.current && e.unobserve(d.current);
            }
          );
        }, []);
        let m = (e) => {
            let { name: t, value: s } = e.target;
            l((e) => ({ ...e, [t]: s }));
          },
          u = async (e) => {
            e.preventDefault(), n(!0);
            try {
              (
                await fetch('/api/sendEmail', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(a)
                })
              ).ok
                ? (c('success'), l({ name: '', email: '', subject: '', message: '' }))
                : c('error');
            } catch (e) {
              console.error('Submit error:', e), c('error');
            } finally {
              n(!1), setTimeout(() => c('idle'), 3e3);
            }
          },
          h = [
            { icon: _, label: 'GitHub', url: 'https://github.com/muhammadawais267', color: 'hover:text-gray-800' },
            {
              icon: U,
              label: 'LinkedIn',
              url: 'https://www.linkedin.com/in/muhammad-awais-250862194/',
              color: 'hover:text-blue-600'
            },
            { icon: L, label: 'Twitter', url: 'https://twitter.com', color: 'hover:text-blue-400' }
          ];
        return (0, t.jsx)('section', {
          id: 'contact',
          className: 'py-20 bg-white',
          children: (0, t.jsx)('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            children: (0, t.jsxs)('div', {
              ref: d,
              className: 'transition-all duration-1000 '.concat(
                e ? 'opacity-100 transform-none' : ' transform translate-y-10'
              ),
              children: [
                (0, t.jsxs)('div', {
                  className: 'text-center mb-16',
                  children: [
                    (0, t.jsxs)('h2', {
                      className: 'text-4xl sm:text-5xl font-bold text-slate-800 mb-4',
                      children: ['Get In ', (0, t.jsx)('span', { className: 'text-blue-600', children: 'Touch' })]
                    }),
                    (0, t.jsx)('div', {
                      className: 'w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8'
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-lg text-slate-600 max-w-2xl mx-auto',
                      children:
                        "Ready to bring your next project to life? Let's discuss your ideas and create something amazing together."
                    })
                  ]
                }),
                (0, t.jsxs)('div', {
                  className: 'grid lg:grid-cols-2 gap-12',
                  children: [
                    (0, t.jsxs)('div', {
                      className:
                        'bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100',
                      children: [
                        (0, t.jsx)('h3', {
                          className: 'text-2xl font-bold text-slate-800 mb-6',
                          children: 'Send Message'
                        }),
                        (0, t.jsxs)('form', {
                          onSubmit: u,
                          className: 'space-y-6',
                          children: [
                            (0, t.jsxs)('div', {
                              className: 'grid sm:grid-cols-2 gap-6',
                              children: [
                                (0, t.jsxs)('div', {
                                  children: [
                                    (0, t.jsx)('label', {
                                      htmlFor: 'name',
                                      className: 'block text-sm font-medium text-slate-700 mb-2',
                                      children: 'Your Name'
                                    }),
                                    (0, t.jsx)('input', {
                                      type: 'text',
                                      id: 'name',
                                      name: 'name',
                                      value: a.name,
                                      onChange: m,
                                      required: !0,
                                      className:
                                        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white',
                                      placeholder: 'John Doe'
                                    })
                                  ]
                                }),
                                (0, t.jsxs)('div', {
                                  children: [
                                    (0, t.jsx)('label', {
                                      htmlFor: 'email',
                                      className: 'block text-sm font-medium text-slate-700 mb-2',
                                      children: 'Email Address'
                                    }),
                                    (0, t.jsx)('input', {
                                      type: 'email',
                                      id: 'email',
                                      name: 'email',
                                      value: a.email,
                                      onChange: m,
                                      required: !0,
                                      className:
                                        'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white',
                                      placeholder: 'john@example.com'
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, t.jsxs)('div', {
                              children: [
                                (0, t.jsx)('label', {
                                  htmlFor: 'subject',
                                  className: 'block text-sm font-medium text-slate-700 mb-2',
                                  children: 'Subject'
                                }),
                                (0, t.jsx)('input', {
                                  type: 'text',
                                  id: 'subject',
                                  name: 'subject',
                                  value: a.subject,
                                  onChange: m,
                                  required: !0,
                                  className:
                                    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white',
                                  placeholder: 'Project Collaboration'
                                })
                              ]
                            }),
                            (0, t.jsxs)('div', {
                              children: [
                                (0, t.jsx)('label', {
                                  htmlFor: 'message',
                                  className: 'block text-sm font-medium text-slate-700 mb-2',
                                  children: 'Message'
                                }),
                                (0, t.jsx)('textarea', {
                                  id: 'message',
                                  name: 'message',
                                  value: a.message,
                                  onChange: m,
                                  rows: 6,
                                  required: !0,
                                  className:
                                    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white resize-none',
                                  placeholder: 'Tell me about your project...'
                                })
                              ]
                            }),
                            (0, t.jsx)('button', {
                              type: 'submit',
                              disabled: i,
                              className:
                                'w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2',
                              children: i
                                ? (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)('div', {
                                        className: 'animate-spin rounded-full h-5 w-5 border-b-2 border-white'
                                      }),
                                      'Sending...'
                                    ]
                                  })
                                : (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(T, { size: 20 }), 'Send Message'] })
                            }),
                            'success' === o &&
                              (0, t.jsx)('div', {
                                className: 'p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg',
                                children: 'Thank you! Your message has been sent successfully.'
                              }),
                            'error' === o &&
                              (0, t.jsx)('div', {
                                className: 'p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg',
                                children: 'Oops! Something went wrong. Please try again.'
                              })
                          ]
                        })
                      ]
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-8',
                      children: [
                        (0, t.jsxs)('div', {
                          children: [
                            (0, t.jsx)('h3', {
                              className: 'text-2xl font-bold text-slate-800 mb-6',
                              children: 'Contact Information'
                            }),
                            (0, t.jsx)('p', {
                              className: 'text-slate-600 mb-8 leading-relaxed',
                              children:
                                "I'm always open to discussing new opportunities, creative ideas, or potential partnerships. Feel free to reach out through any of the following channels."
                            })
                          ]
                        }),
                        (0, t.jsx)('div', {
                          className: 'space-y-4',
                          children: [
                            {
                              icon: R,
                              label: 'Email',
                              value: 'awais.cs777@gmail.com',
                              link: 'mailto:awais.cs777@gmail.com',
                              color: 'from-red-500 to-red-600'
                            },
                            {
                              icon: I,
                              label: 'Phone',
                              value: '+92 (302) 671-3662',
                              link: 'tel:+923026713662',
                              color: 'from-green-500 to-green-600'
                            },
                            {
                              icon: D,
                              label: 'Location',
                              value: 'Sehgal City Faisalabad, Pakistan',
                              link: '#',
                              color: 'from-blue-500 to-blue-600'
                            }
                          ].map((e, s) => {
                            let r = e.icon;
                            return (0, t.jsxs)(
                              'a',
                              {
                                href: e.link,
                                className:
                                  'flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105',
                                children: [
                                  (0, t.jsx)('div', {
                                    className: 'p-3 bg-gradient-to-r '.concat(
                                      e.color,
                                      ' rounded-lg text-white group-hover:scale-110 transition-transform duration-300'
                                    ),
                                    children: (0, t.jsx)(r, { size: 24 })
                                  }),
                                  (0, t.jsxs)('div', {
                                    children: [
                                      (0, t.jsx)('p', {
                                        className: 'text-sm font-medium text-slate-600',
                                        children: e.label
                                      }),
                                      (0, t.jsx)('p', {
                                        className:
                                          'text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300',
                                        children: e.value
                                      })
                                    ]
                                  })
                                ]
                              },
                              s
                            );
                          })
                        }),
                        (0, t.jsxs)('div', {
                          className: 'bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl text-white',
                          children: [
                            (0, t.jsx)('h4', { className: 'text-xl font-bold mb-6', children: 'Connect With Me' }),
                            (0, t.jsx)('div', {
                              className: 'grid grid-cols-2 gap-4',
                              children: h.map((e, s) => {
                                let r = e.icon;
                                return (0, t.jsxs)(
                                  'a',
                                  {
                                    href: e.url,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    className:
                                      'flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105',
                                    children: [
                                      (0, t.jsx)(r, { size: 20 }),
                                      (0, t.jsx)('span', { className: 'font-medium', children: e.label })
                                    ]
                                  },
                                  s
                                );
                              })
                            }),
                            (0, t.jsxs)('div', {
                              className: 'mt-6 p-4 bg-white/10 rounded-lg',
                              children: [
                                (0, t.jsx)('p', {
                                  className: 'text-sm text-gray-300 mb-2',
                                  children: 'Available for:'
                                }),
                                (0, t.jsxs)('div', {
                                  className: 'flex flex-wrap gap-2',
                                  children: [
                                    (0, t.jsx)('span', {
                                      className: 'bg-blue-600 px-3 py-1 rounded-full text-xs font-medium',
                                      children: 'Freelance'
                                    }),
                                    (0, t.jsx)('span', {
                                      className: 'bg-green-600 px-3 py-1 rounded-full text-xs font-medium',
                                      children: 'Consulting'
                                    }),
                                    (0, t.jsx)('span', {
                                      className: 'bg-purple-600 px-3 py-1 rounded-full text-xs font-medium',
                                      children: 'Collaboration'
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        });
      },
      q = n('arrow-up', [
        ['path', { d: 'm5 12 7-7 7 7', key: 'hav0vg' }],
        ['path', { d: 'M12 19V5', key: 'x0mq9r' }]
      ]),
      B = () => {
        let e = new Date().getFullYear();
        return (0, t.jsx)('footer', {
          className: 'bg-slate-900 text-white py-12',
          children: (0, t.jsxs)('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            children: [
              (0, t.jsxs)('div', {
                className: 'grid md:grid-cols-3 gap-8 mb-8',
                children: [
                  (0, t.jsxs)('div', {
                    children: [
                      (0, t.jsx)('h3', { className: 'text-2xl font-bold mb-4 text-blue-400', children: 'Portfolio' }),
                      (0, t.jsx)('p', {
                        className: 'text-gray-300 leading-relaxed',
                        children:
                          "Crafting digital experiences with passion and precision. Let's build something amazing together."
                      })
                    ]
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      (0, t.jsx)('h4', { className: 'text-lg font-semibold mb-4', children: 'Quick Links' }),
                      (0, t.jsx)('ul', {
                        className: 'space-y-2',
                        children: ['About', 'Skills', 'Projects', 'Services', 'Contact'].map((e) =>
                          (0, t.jsx)(
                            'li',
                            {
                              children: (0, t.jsx)('button', {
                                onClick: () => {
                                  let t = document.getElementById(e.toLowerCase());
                                  null == t || t.scrollIntoView({ behavior: 'smooth' });
                                },
                                className: 'text-gray-300 hover:text-blue-400 transition-colors duration-300',
                                children: e
                              })
                            },
                            e
                          )
                        )
                      })
                    ]
                  }),
                  (0, t.jsxs)('div', {
                    children: [
                      (0, t.jsx)('h4', { className: 'text-lg font-semibold mb-4', children: 'Services' }),
                      (0, t.jsxs)('ul', {
                        className: 'space-y-2 text-gray-300',
                        children: [
                          (0, t.jsx)('li', { children: 'Frontend Development' }),
                          (0, t.jsx)('li', { children: 'Backend Development' }),
                          (0, t.jsx)('li', { children: 'Mobile Apps' }),
                          (0, t.jsx)('li', { children: 'UI/UX Design' })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, t.jsxs)('div', {
                className: 'border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center',
                children: [
                  (0, t.jsxs)('p', {
                    className: 'text-gray-300 text-center sm:text-left mb-4 sm:mb-0',
                    children: [
                      '© ',
                      e,
                      ' Arham Raza. Made with',
                      ' ',
                      (0, t.jsx)(g, { size: 16, className: 'inline text-red-500 mx-1' }),
                      ' ',
                      'and lots of coffee.'
                    ]
                  }),
                  (0, t.jsx)('button', {
                    onClick: () => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    },
                    className:
                      'bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg',
                    children: (0, t.jsx)(q, { size: 20 })
                  })
                ]
              })
            ]
          })
        });
      };
    function V() {
      let [e, r] = (0, s.useState)(!1),
        [a, l] = (0, s.useState)(!1);
      return (
        (0, s.useEffect)(() => {
          let e = () => {
            l(window.scrollY > 50);
          };
          return window.addEventListener('scroll', e), () => window.removeEventListener('scroll', e);
        }, []),
        (0, t.jsxs)('div', {
          className: 'min-h-screen bg-white',
          children: [
            (0, t.jsx)(h, { scrolled: a, isMenuOpen: e, setIsMenuOpen: r }),
            (0, t.jsx)(c, {}),
            (0, t.jsx)(f, {}),
            (0, t.jsx)(y, {}),
            (0, t.jsx)(S, {}),
            (0, t.jsx)(P, {}),
            (0, t.jsx)(O, {}),
            (0, t.jsx)(F, {}),
            (0, t.jsx)(B, {})
          ]
        })
      );
    }
  }
]);
