/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
/* eslint-disable */
if (
  typeof JSON_PIWIK !== "object" &&
  typeof window.JSON === "object" &&
  window.JSON.stringify &&
  window.JSON.parse
) {
  JSON_PIWIK = window.JSON;
} else {
  (function() {
    var a = {};
    /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
    (function() {
      var c = typeof define === "function" && define.amd;
      var e = { function: true, object: true };
      var h = e[typeof a] && a && !a.nodeType && a;
      var i = (e[typeof window] && window) || this,
        b =
          h &&
          e[typeof module] &&
          module &&
          !module.nodeType &&
          typeof global == "object" &&
          global;
      if (b && (b.global === b || b.window === b || b.self === b)) {
        i = b;
      }
      function j(ab, V) {
        ab || (ab = i.Object());
        V || (V = i.Object());
        var K = ab.Number || i.Number,
          R = ab.String || i.String,
          x = ab.Object || i.Object,
          S = ab.Date || i.Date,
          T = ab.SyntaxError || i.SyntaxError,
          aa = ab.TypeError || i.TypeError,
          J = ab.Math || i.Math,
          Y = ab.JSON || i.JSON;
        if (typeof Y == "object" && Y) {
          V.stringify = Y.stringify;
          V.parse = Y.parse;
        }
        var n = x.prototype,
          u = n.toString,
          r,
          m,
          L;
        var B = new S(-3509827334573292);
        try {
          B =
            B.getUTCFullYear() == -109252 &&
            B.getUTCMonth() === 0 &&
            B.getUTCDate() === 1 &&
            B.getUTCHours() == 10 &&
            B.getUTCMinutes() == 37 &&
            B.getUTCSeconds() == 6 &&
            B.getUTCMilliseconds() == 708;
        } catch (v) {}
        function o(ac) {
          if (o[ac] !== L) {
            return o[ac];
          }
          var ad;
          if (ac == "bug-string-char-index") {
            ad = "a"[0] != "a";
          } else {
            if (ac == "json") {
              ad = o("json-stringify") && o("json-parse");
            } else {
              var ak,
                ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
              if (ac == "json-stringify") {
                var ai = V.stringify,
                  aj = typeof ai == "function" && B;
                if (aj) {
                  (ak = function() {
                    return 1;
                  }).toJSON = ak;
                  try {
                    aj =
                      ai(0) === "0" &&
                      ai(new K()) === "0" &&
                      ai(new R()) == '""' &&
                      ai(u) === L &&
                      ai(L) === L &&
                      ai() === L &&
                      ai(ak) === "1" &&
                      ai([ak]) == "[1]" &&
                      ai([L]) == "[null]" &&
                      ai(null) == "null" &&
                      ai([L, u, null]) == "[null,null,null]" &&
                      ai({ a: [ak, true, false, null, "\x00\b\n\f\r\t"] }) ==
                        ah &&
                      ai(null, ak) === "1" &&
                      ai([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                      ai(new S(-8640000000000000)) ==
                        '"-271821-04-20T00:00:00.000Z"' &&
                      ai(new S(8640000000000000)) ==
                        '"+275760-09-13T00:00:00.000Z"' &&
                      ai(new S(-62198755200000)) ==
                        '"-000001-01-01T00:00:00.000Z"' &&
                      ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"';
                  } catch (ae) {
                    aj = false;
                  }
                }
                ad = aj;
              }
              if (ac == "json-parse") {
                var ag = V.parse;
                if (typeof ag == "function") {
                  try {
                    if (ag("0") === 0 && !ag(false)) {
                      ak = ag(ah);
                      var af = ak.a.length == 5 && ak.a[0] === 1;
                      if (af) {
                        try {
                          af = !ag('"\t"');
                        } catch (ae) {}
                        if (af) {
                          try {
                            af = ag("01") !== 1;
                          } catch (ae) {}
                        }
                        if (af) {
                          try {
                            af = ag("1.") !== 1;
                          } catch (ae) {}
                        }
                      }
                    }
                  } catch (ae) {
                    af = false;
                  }
                }
                ad = af;
              }
            }
          }
          return (o[ac] = !!ad);
        }
        if (!o("json")) {
          var U = "[object Function]",
            Q = "[object Date]",
            N = "[object Number]",
            O = "[object String]",
            E = "[object Array]",
            A = "[object Boolean]";
          var F = o("bug-string-char-index");
          if (!B) {
            var s = J.floor;
            var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            var D = function(ac, ad) {
              return (
                Z[ad] +
                365 * (ac - 1970) +
                s((ac - 1969 + (ad = +(ad > 1))) / 4) -
                s((ac - 1901 + ad) / 100) +
                s((ac - 1601 + ad) / 400)
              );
            };
          }
          if (!(r = n.hasOwnProperty)) {
            r = function(ae) {
              var ac = {},
                ad;
              if (
                ((ac.__proto__ = null), (ac.__proto__ = { toString: 1 }), ac)
                  .toString != u
              ) {
                r = function(ah) {
                  var ag = this.__proto__,
                    af = ah in ((this.__proto__ = null), this);
                  this.__proto__ = ag;
                  return af;
                };
              } else {
                ad = ac.constructor;
                r = function(ag) {
                  var af = (this.constructor || ad).prototype;
                  return ag in this && !(ag in af && this[ag] === af[ag]);
                };
              }
              ac = null;
              return r.call(this, ae);
            };
          }
          m = function(ae, ah) {
            var af = 0,
              ac,
              ad,
              ag;
            (ac = function() {
              this.valueOf = 0;
            }).prototype.valueOf = 0;
            ad = new ac();
            for (ag in ad) {
              if (r.call(ad, ag)) {
                af++;
              }
            }
            ac = ad = null;
            if (!af) {
              ad = [
                "valueOf",
                "toString",
                "toLocaleString",
                "propertyIsEnumerable",
                "isPrototypeOf",
                "hasOwnProperty",
                "constructor"
              ];
              m = function(aj, an) {
                var am = u.call(aj) == U,
                  al,
                  ak;
                var ai =
                  (!am &&
                    typeof aj.constructor != "function" &&
                    e[typeof aj.hasOwnProperty] &&
                    aj.hasOwnProperty) ||
                  r;
                for (al in aj) {
                  if (!(am && al == "prototype") && ai.call(aj, al)) {
                    an(al);
                  }
                }
                for (
                  ak = ad.length;
                  (al = ad[--ak]);
                  ai.call(aj, al) && an(al)
                ) {}
              };
            } else {
              if (af == 2) {
                m = function(aj, am) {
                  var ai = {},
                    al = u.call(aj) == U,
                    ak;
                  for (ak in aj) {
                    if (
                      !(al && ak == "prototype") &&
                      !r.call(ai, ak) &&
                      (ai[ak] = 1) &&
                      r.call(aj, ak)
                    ) {
                      am(ak);
                    }
                  }
                };
              } else {
                m = function(aj, am) {
                  var al = u.call(aj) == U,
                    ak,
                    ai;
                  for (ak in aj) {
                    if (
                      !(al && ak == "prototype") &&
                      r.call(aj, ak) &&
                      !(ai = ak === "constructor")
                    ) {
                      am(ak);
                    }
                  }
                  if (ai || r.call(aj, (ak = "constructor"))) {
                    am(ak);
                  }
                };
              }
            }
            return m(ae, ah);
          };
          if (!o("json-stringify")) {
            var q = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t"
            };
            var I = "000000";
            var t = function(ac, ad) {
              return (I + (ad || 0)).slice(-ac);
            };
            var z = "\\u00";
            var C = function(ai) {
              var ad = '"',
                ag = 0,
                ah = ai.length,
                ac = !F || ah > 10;
              var af = ac && (F ? ai.split("") : ai);
              for (; ag < ah; ag++) {
                var ae = ai.charCodeAt(ag);
                switch (ae) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    ad += q[ae];
                    break;
                  default:
                    if (ae < 32) {
                      ad += z + t(2, ae.toString(16));
                      break;
                    }
                    ad += ac ? af[ag] : ai.charAt(ag);
                }
              }
              return ad + '"';
            };
            var p = function(ai, aA, ag, al, ax, ac, aj) {
              var at,
                ae,
                ap,
                az,
                ay,
                ak,
                aw,
                au,
                aq,
                an,
                ar,
                ad,
                ah,
                af,
                av,
                ao;
              try {
                at = aA[ai];
              } catch (am) {}
              if (typeof at == "object" && at) {
                ae = u.call(at);
                if (ae == Q && !r.call(at, "toJSON")) {
                  if (at > -1 / 0 && at < 1 / 0) {
                    if (D) {
                      ay = s(at / 86400000);
                      for (
                        ap = s(ay / 365.2425) + 1970 - 1;
                        D(ap + 1, 0) <= ay;
                        ap++
                      ) {}
                      for (
                        az = s((ay - D(ap, 0)) / 30.42);
                        D(ap, az + 1) <= ay;
                        az++
                      ) {}
                      ay = 1 + ay - D(ap, az);
                      ak = (at % 86400000 + 86400000) % 86400000;
                      aw = s(ak / 3600000) % 24;
                      au = s(ak / 60000) % 60;
                      aq = s(ak / 1000) % 60;
                      an = ak % 1000;
                    } else {
                      ap = at.getUTCFullYear();
                      az = at.getUTCMonth();
                      ay = at.getUTCDate();
                      aw = at.getUTCHours();
                      au = at.getUTCMinutes();
                      aq = at.getUTCSeconds();
                      an = at.getUTCMilliseconds();
                    }
                    at =
                      (ap <= 0 || ap >= 10000
                        ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap)
                        : t(4, ap)) +
                      "-" +
                      t(2, az + 1) +
                      "-" +
                      t(2, ay) +
                      "T" +
                      t(2, aw) +
                      ":" +
                      t(2, au) +
                      ":" +
                      t(2, aq) +
                      "." +
                      t(3, an) +
                      "Z";
                  } else {
                    at = null;
                  }
                } else {
                  if (
                    typeof at.toJSON == "function" &&
                    ((ae != N && ae != O && ae != E) || r.call(at, "toJSON"))
                  ) {
                    at = at.toJSON(ai);
                  }
                }
              }
              if (ag) {
                at = ag.call(aA, ai, at);
              }
              if (at === null) {
                return "null";
              }
              ae = u.call(at);
              if (ae == A) {
                return "" + at;
              } else {
                if (ae == N) {
                  return at > -1 / 0 && at < 1 / 0 ? "" + at : "null";
                } else {
                  if (ae == O) {
                    return C("" + at);
                  }
                }
              }
              if (typeof at == "object") {
                for (af = aj.length; af--; ) {
                  if (aj[af] === at) {
                    throw aa();
                  }
                }
                aj.push(at);
                ar = [];
                av = ac;
                ac += ax;
                if (ae == E) {
                  for (ah = 0, af = at.length; ah < af; ah++) {
                    ad = p(ah, at, ag, al, ax, ac, aj);
                    ar.push(ad === L ? "null" : ad);
                  }
                  ao = ar.length
                    ? ax
                      ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]"
                      : "[" + ar.join(",") + "]"
                    : "[]";
                } else {
                  m(al || at, function(aC) {
                    var aB = p(aC, at, ag, al, ax, ac, aj);
                    if (aB !== L) {
                      ar.push(C(aC) + ":" + (ax ? " " : "") + aB);
                    }
                  });
                  ao = ar.length
                    ? ax
                      ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}"
                      : "{" + ar.join(",") + "}"
                    : "{}";
                }
                aj.pop();
                return ao;
              }
            };
            V.stringify = function(ac, ae, af) {
              var ad, al, aj, ai;
              if (e[typeof ae] && ae) {
                if ((ai = u.call(ae)) == U) {
                  al = ae;
                } else {
                  if (ai == E) {
                    aj = {};
                    for (
                      var ah = 0, ag = ae.length, ak;
                      ah < ag;
                      ak = ae[ah++],
                        ((ai = u.call(ak)), ai == O || ai == N) && (aj[ak] = 1)
                    ) {}
                  }
                }
              }
              if (af) {
                if ((ai = u.call(af)) == N) {
                  if ((af -= af % 1) > 0) {
                    for (
                      ad = "", af > 10 && (af = 10);
                      ad.length < af;
                      ad += " "
                    ) {}
                  }
                } else {
                  if (ai == O) {
                    ad = af.length <= 10 ? af : af.slice(0, 10);
                  }
                }
              }
              return p("", ((ak = {}), (ak[""] = ac), ak), al, aj, ad, "", []);
            };
          }
          if (!o("json-parse")) {
            var M = R.fromCharCode;
            var l = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "\t",
              110: "\n",
              102: "\f",
              114: "\r"
            };
            var G, X;
            var H = function() {
              G = X = null;
              throw T();
            };
            var y = function() {
              var ah = X,
                af = ah.length,
                ag,
                ae,
                ac,
                ai,
                ad;
              while (G < af) {
                ad = ah.charCodeAt(G);
                switch (ad) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    G++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    ag = F ? ah.charAt(G) : ah[G];
                    G++;
                    return ag;
                  case 34:
                    for (ag = "@", G++; G < af; ) {
                      ad = ah.charCodeAt(G);
                      if (ad < 32) {
                        H();
                      } else {
                        if (ad == 92) {
                          ad = ah.charCodeAt(++G);
                          switch (ad) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              ag += l[ad];
                              G++;
                              break;
                            case 117:
                              ae = ++G;
                              for (ac = G + 4; G < ac; G++) {
                                ad = ah.charCodeAt(G);
                                if (
                                  !(
                                    (ad >= 48 && ad <= 57) ||
                                    (ad >= 97 && ad <= 102) ||
                                    (ad >= 65 && ad <= 70)
                                  )
                                ) {
                                  H();
                                }
                              }
                              ag += M("0x" + ah.slice(ae, G));
                              break;
                            default:
                              H();
                          }
                        } else {
                          if (ad == 34) {
                            break;
                          }
                          ad = ah.charCodeAt(G);
                          ae = G;
                          while (ad >= 32 && ad != 92 && ad != 34) {
                            ad = ah.charCodeAt(++G);
                          }
                          ag += ah.slice(ae, G);
                        }
                      }
                    }
                    if (ah.charCodeAt(G) == 34) {
                      G++;
                      return ag;
                    }
                    H();
                  default:
                    ae = G;
                    if (ad == 45) {
                      ai = true;
                      ad = ah.charCodeAt(++G);
                    }
                    if (ad >= 48 && ad <= 57) {
                      if (
                        ad == 48 &&
                        ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)
                      ) {
                        H();
                      }
                      ai = false;
                      for (
                        ;
                        G < af &&
                        ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57);
                        G++
                      ) {}
                      if (ah.charCodeAt(G) == 46) {
                        ac = ++G;
                        for (
                          ;
                          ac < af &&
                          ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57);
                          ac++
                        ) {}
                        if (ac == G) {
                          H();
                        }
                        G = ac;
                      }
                      ad = ah.charCodeAt(G);
                      if (ad == 101 || ad == 69) {
                        ad = ah.charCodeAt(++G);
                        if (ad == 43 || ad == 45) {
                          G++;
                        }
                        for (
                          ac = G;
                          ac < af &&
                          ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57);
                          ac++
                        ) {}
                        if (ac == G) {
                          H();
                        }
                        G = ac;
                      }
                      return +ah.slice(ae, G);
                    }
                    if (ai) {
                      H();
                    }
                    if (ah.slice(G, G + 4) == "true") {
                      G += 4;
                      return true;
                    } else {
                      if (ah.slice(G, G + 5) == "false") {
                        G += 5;
                        return false;
                      } else {
                        if (ah.slice(G, G + 4) == "null") {
                          G += 4;
                          return null;
                        }
                      }
                    }
                    H();
                }
              }
              return "$";
            };
            var W = function(ad) {
              var ac, ae;
              if (ad == "$") {
                H();
              }
              if (typeof ad == "string") {
                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                  return ad.slice(1);
                }
                if (ad == "[") {
                  ac = [];
                  for (; ; ae || (ae = true)) {
                    ad = y();
                    if (ad == "]") {
                      break;
                    }
                    if (ae) {
                      if (ad == ",") {
                        ad = y();
                        if (ad == "]") {
                          H();
                        }
                      } else {
                        H();
                      }
                    }
                    if (ad == ",") {
                      H();
                    }
                    ac.push(W(ad));
                  }
                  return ac;
                } else {
                  if (ad == "{") {
                    ac = {};
                    for (; ; ae || (ae = true)) {
                      ad = y();
                      if (ad == "}") {
                        break;
                      }
                      if (ae) {
                        if (ad == ",") {
                          ad = y();
                          if (ad == "}") {
                            H();
                          }
                        } else {
                          H();
                        }
                      }
                      if (
                        ad == "," ||
                        typeof ad != "string" ||
                        (F ? ad.charAt(0) : ad[0]) != "@" ||
                        y() != ":"
                      ) {
                        H();
                      }
                      ac[ad.slice(1)] = W(y());
                    }
                    return ac;
                  }
                }
                H();
              }
              return ad;
            };
            var P = function(ae, ad, af) {
              var ac = w(ae, ad, af);
              if (ac === L) {
                delete ae[ad];
              } else {
                ae[ad] = ac;
              }
            };
            var w = function(af, ae, ag) {
              var ad = af[ae],
                ac;
              if (typeof ad == "object" && ad) {
                if (u.call(ad) == E) {
                  for (ac = ad.length; ac--; ) {
                    P(ad, ac, ag);
                  }
                } else {
                  m(ad, function(ah) {
                    P(ad, ah, ag);
                  });
                }
              }
              return ag.call(af, ae, ad);
            };
            V.parse = function(ae, af) {
              var ac, ad;
              G = 0;
              X = "" + ae;
              ac = W(y());
              if (y() != "$") {
                H();
              }
              G = X = null;
              return af && u.call(af) == U
                ? w(((ad = {}), (ad[""] = ac), ad), "", af)
                : ac;
            };
          }
        }
        V.runInContext = j;
        return V;
      }
      if (h && !c) {
        j(i, h);
      } else {
        var f = i.JSON,
          k = i.JSON3,
          d = false;
        var g = j(
          i,
          (i.JSON3 = {
            noConflict: function() {
              if (!d) {
                d = true;
                i.JSON = f;
                i.JSON3 = k;
                f = k = null;
              }
              return g;
            }
          })
        );
        i.JSON = { parse: g.parse, stringify: g.stringify };
      }
      if (c) {
        define(function() {
          return g;
        });
      }
    }.call(this));
    JSON_PIWIK = a;
  })();
}
if (typeof _paq !== "object") {
  _paq = [];
}
if (typeof window.Piwik !== "object") {
  window.Piwik = (function() {
    var q,
      b = {},
      w = {},
      E = document,
      h = navigator,
      U = screen,
      R = window,
      i =
        R.performance ||
        R.mozPerformance ||
        R.msPerformance ||
        R.webkitPerformance,
      s = R.encodeURIComponent,
      Q = R.decodeURIComponent,
      l = unescape,
      G = [],
      C,
      e,
      ab = [];
    function o(ai) {
      try {
        return Q(ai);
      } catch (aj) {
        return unescape(ai);
      }
    }
    function H(aj) {
      var ai = typeof aj;
      return ai !== "undefined";
    }
    function y(ai) {
      return typeof ai === "function";
    }
    function T(ai) {
      return typeof ai === "object";
    }
    function v(ai) {
      return typeof ai === "string" || ai instanceof String;
    }
    function z(aj) {
      if (!aj) {
        return true;
      }
      var ai;
      var ak = true;
      for (ai in aj) {
        if (Object.prototype.hasOwnProperty.call(aj, ai)) {
          ak = false;
        }
      }
      return ak;
    }
    function ae(ai) {
      var aj = typeof console;
      if (aj !== "undefined" && console && console.error) {
        console.error(ai);
      }
    }
    function aa() {
      var an, am, ap, aj, ai;
      for (an = 0; an < arguments.length; an += 1) {
        ai = null;
        if (arguments[an] && arguments[an].slice) {
          ai = arguments[an].slice();
        }
        aj = arguments[an];
        ap = aj.shift();
        var ao, ak;
        var al = v(ap) && ap.indexOf("::") > 0;
        if (al) {
          ao = ap.split("::");
          ak = ao[0];
          ap = ao[1];
          if ("object" === typeof e[ak] && "function" === typeof e[ak][ap]) {
            e[ak][ap].apply(e[ak], aj);
          } else {
            if (ai) {
              ab.push(ai);
            }
          }
        } else {
          for (am = 0; am < G.length; am++) {
            if (v(ap)) {
              ak = G[am];
              var aq = ap.indexOf(".") > 0;
              if (aq) {
                ao = ap.split(".");
                if (ak && "object" === typeof ak[ao[0]]) {
                  ak = ak[ao[0]];
                  ap = ao[1];
                } else {
                  if (ai) {
                    ab.push(ai);
                    break;
                  }
                }
              }
              if (ak[ap]) {
                ak[ap].apply(ak, aj);
              } else {
                var ar =
                  "The method '" +
                  ap +
                  '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript';
                ae(ar);
                if (!aq) {
                  throw new TypeError(ar);
                }
              }
              if (ap === "addTracker") {
                break;
              }
              if (ap === "setTrackerUrl" || ap === "setSiteId") {
                break;
              }
            } else {
              ap.apply(G[am], aj);
            }
          }
        }
      }
    }
    function ah(al, ak, aj, ai) {
      if (al.addEventListener) {
        al.addEventListener(ak, aj, ai);
        return true;
      }
      if (al.attachEvent) {
        return al.attachEvent("on" + ak, aj);
      }
      al["on" + ak] = aj;
    }
    function m(ai) {
      if (E.readyState === "complete") {
        ai();
      } else {
        if (R.addEventListener) {
          R.addEventListener("load", ai);
        } else {
          if (R.attachEvent) {
            R.attachEvent("onload", ai);
          }
        }
      }
    }
    function p(al) {
      var ai = false;
      if (E.attachEvent) {
        ai = E.readyState === "complete";
      } else {
        ai = E.readyState !== "loading";
      }
      if (ai) {
        al();
        return;
      }
      var ak;
      if (E.addEventListener) {
        ah(E, "DOMContentLoaded", function aj() {
          E.removeEventListener("DOMContentLoaded", aj, false);
          if (!ai) {
            ai = true;
            al();
          }
        });
      } else {
        if (E.attachEvent) {
          E.attachEvent("onreadystatechange", function aj() {
            if (E.readyState === "complete") {
              E.detachEvent("onreadystatechange", aj);
              if (!ai) {
                ai = true;
                al();
              }
            }
          });
          if (E.documentElement.doScroll && R === R.top) {
            (function aj() {
              if (!ai) {
                try {
                  E.documentElement.doScroll("left");
                } catch (am) {
                  setTimeout(aj, 0);
                  return;
                }
                ai = true;
                al();
              }
            })();
          }
        }
      }
      ah(
        R,
        "load",
        function() {
          if (!ai) {
            ai = true;
            al();
          }
        },
        false
      );
    }
    function X(aj, ao, ap) {
      if (!aj) {
        return "";
      }
      var ai = "",
        al,
        ak,
        am,
        an;
      for (al in b) {
        if (Object.prototype.hasOwnProperty.call(b, al)) {
          an = b[al] && "function" === typeof b[al][aj];
          if (an) {
            ak = b[al][aj];
            am = ak(ao || {}, ap);
            if (am) {
              ai += am;
            }
          }
        }
      }
      return ai;
    }
    function ac() {
      var ai;
      X("unload");
      if (q) {
        do {
          ai = new Date();
        } while (ai.getTimeAlias() < q);
      }
    }
    function n(ak, aj) {
      var ai = E.createElement("script");
      ai.type = "text/javascript";
      ai.src = ak;
      if (ai.readyState) {
        ai.onreadystatechange = function() {
          var al = this.readyState;
          if (al === "loaded" || al === "complete") {
            ai.onreadystatechange = null;
            aj();
          }
        };
      } else {
        ai.onload = aj;
      }
      E.getElementsByTagName("head")[0].appendChild(ai);
    }
    function I() {
      var ai = "";
      try {
        ai = R.top.document.referrer;
      } catch (ak) {
        if (R.parent) {
          try {
            ai = R.parent.document.referrer;
          } catch (aj) {
            ai = "";
          }
        }
      }
      if (ai === "") {
        ai = E.referrer;
      }
      return ai;
    }
    function r(ai) {
      var ak = new RegExp("^([a-z]+):"),
        aj = ak.exec(ai);
      return aj ? aj[1] : null;
    }
    function d(ai) {
      var ak = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
        aj = ak.exec(ai);
      return aj ? aj[1] : ai;
    }
    function ad(aj, ai) {
      aj = String(aj);
      return aj.lastIndexOf(ai, 0) === 0;
    }
    function P(aj, ai) {
      aj = String(aj);
      return aj.indexOf(ai, aj.length - ai.length) !== -1;
    }
    function x(aj, ai) {
      aj = String(aj);
      return aj.indexOf(ai) !== -1;
    }
    function g(aj, ai) {
      aj = String(aj);
      return aj.substr(0, aj.length - ai);
    }
    function D(al, ak, an) {
      al = String(al);
      if (!an) {
        an = "";
      }
      var ai = al.indexOf("#");
      var ao = al.length;
      if (ai === -1) {
        ai = ao;
      }
      var am = al.substr(0, ai);
      var aj = al.substr(ai, ao - ai);
      if (am.indexOf("?") === -1) {
        am += "?";
      } else {
        if (!P(am, "?")) {
          am += "&";
        }
      }
      return am + s(ak) + "=" + s(an) + aj;
    }
    function k(aj, ak) {
      aj = String(aj);
      if (
        aj.indexOf("?" + ak + "=") === -1 &&
        aj.indexOf("&" + ak + "=") === -1
      ) {
        return aj;
      }
      var al = aj.indexOf("?");
      if (al === -1) {
        return aj;
      }
      var ai = aj.substr(al + 1);
      var ap = aj.substr(0, al);
      if (ai) {
        var aq = "";
        var at = ai.indexOf("#");
        if (at !== -1) {
          aq = ai.substr(at + 1);
          ai = ai.substr(0, at);
        }
        var am;
        var ao = ai.split("&");
        var an = ao.length - 1;
        for (an; an >= 0; an--) {
          am = ao[an].split("=")[0];
          if (am === ak) {
            ao.splice(an, 1);
          }
        }
        var ar = ao.join("&");
        if (ar) {
          ap = ap + "?" + ar;
        }
        if (aq) {
          ap += "#" + aq;
        }
      }
      return ap;
    }
    function f(ak, aj) {
      var ai = "[\\?&#]" + aj + "=([^&#]*)";
      var am = new RegExp(ai);
      var al = am.exec(ak);
      return al ? Q(al[1]) : "";
    }
    function a(ai) {
      if (ai && String(ai) === ai) {
        return ai.replace(/^\s+|\s+$/g, "");
      }
      return ai;
    }
    function B(ai) {
      return unescape(s(ai));
    }
    function ag(ay) {
      var ak = function(aE, aD) {
          return (aE << aD) | (aE >>> (32 - aD));
        },
        az = function(aG) {
          var aE = "",
            aF,
            aD;
          for (aF = 7; aF >= 0; aF--) {
            aD = (aG >>> (aF * 4)) & 15;
            aE += aD.toString(16);
          }
          return aE;
        },
        an,
        aB,
        aA,
        aj = [],
        ar = 1732584193,
        ap = 4023233417,
        ao = 2562383102,
        am = 271733878,
        al = 3285377520,
        ax,
        aw,
        av,
        au,
        at,
        aC,
        ai,
        aq = [];
      ay = B(ay);
      ai = ay.length;
      for (aB = 0; aB < ai - 3; aB += 4) {
        aA =
          (ay.charCodeAt(aB) << 24) |
          (ay.charCodeAt(aB + 1) << 16) |
          (ay.charCodeAt(aB + 2) << 8) |
          ay.charCodeAt(aB + 3);
        aq.push(aA);
      }
      switch (ai & 3) {
        case 0:
          aB = 2147483648;
          break;
        case 1:
          aB = (ay.charCodeAt(ai - 1) << 24) | 8388608;
          break;
        case 2:
          aB =
            (ay.charCodeAt(ai - 2) << 24) |
            (ay.charCodeAt(ai - 1) << 16) |
            32768;
          break;
        case 3:
          aB =
            (ay.charCodeAt(ai - 3) << 24) |
            (ay.charCodeAt(ai - 2) << 16) |
            (ay.charCodeAt(ai - 1) << 8) |
            128;
          break;
      }
      aq.push(aB);
      while ((aq.length & 15) !== 14) {
        aq.push(0);
      }
      aq.push(ai >>> 29);
      aq.push((ai << 3) & 4294967295);
      for (an = 0; an < aq.length; an += 16) {
        for (aB = 0; aB < 16; aB++) {
          aj[aB] = aq[an + aB];
        }
        for (aB = 16; aB <= 79; aB++) {
          aj[aB] = ak(aj[aB - 3] ^ aj[aB - 8] ^ aj[aB - 14] ^ aj[aB - 16], 1);
        }
        ax = ar;
        aw = ap;
        av = ao;
        au = am;
        at = al;
        for (aB = 0; aB <= 19; aB++) {
          aC =
            (ak(ax, 5) + ((aw & av) | (~aw & au)) + at + aj[aB] + 1518500249) &
            4294967295;
          at = au;
          au = av;
          av = ak(aw, 30);
          aw = ax;
          ax = aC;
        }
        for (aB = 20; aB <= 39; aB++) {
          aC =
            (ak(ax, 5) + (aw ^ av ^ au) + at + aj[aB] + 1859775393) &
            4294967295;
          at = au;
          au = av;
          av = ak(aw, 30);
          aw = ax;
          ax = aC;
        }
        for (aB = 40; aB <= 59; aB++) {
          aC =
            (ak(ax, 5) +
              ((aw & av) | (aw & au) | (av & au)) +
              at +
              aj[aB] +
              2400959708) &
            4294967295;
          at = au;
          au = av;
          av = ak(aw, 30);
          aw = ax;
          ax = aC;
        }
        for (aB = 60; aB <= 79; aB++) {
          aC =
            (ak(ax, 5) + (aw ^ av ^ au) + at + aj[aB] + 3395469782) &
            4294967295;
          at = au;
          au = av;
          av = ak(aw, 30);
          aw = ax;
          ax = aC;
        }
        ar = (ar + ax) & 4294967295;
        ap = (ap + aw) & 4294967295;
        ao = (ao + av) & 4294967295;
        am = (am + au) & 4294967295;
        al = (al + at) & 4294967295;
      }
      aC = az(ar) + az(ap) + az(ao) + az(am) + az(al);
      return aC.toLowerCase();
    }
    function W(ak, ai, aj) {
      if (!ak) {
        ak = "";
      }
      if (!ai) {
        ai = "";
      }
      if (ak === "translate.googleusercontent.com") {
        if (aj === "") {
          aj = ai;
        }
        ai = f(ai, "u");
        ak = d(ai);
      } else {
        if (
          ak === "cc.bingj.com" ||
          ak === "webcache.googleusercontent.com" ||
          ak.slice(0, 5) === "74.6."
        ) {
          ai = E.links[0].href;
          ak = d(ai);
        }
      }
      return [ak, ai, aj];
    }
    function J(aj) {
      var ai = aj.length;
      if (aj.charAt(--ai) === ".") {
        aj = aj.slice(0, ai);
      }
      if (aj.slice(0, 2) === "*.") {
        aj = aj.slice(1);
      }
      if (aj.indexOf("/") !== -1) {
        aj = aj.substr(0, aj.indexOf("/"));
      }
      return aj;
    }
    function af(aj) {
      aj = aj && aj.text ? aj.text : aj;
      if (!v(aj)) {
        var ai = E.getElementsByTagName("title");
        if (ai && H(ai[0])) {
          aj = ai[0].text;
        }
      }
      return aj;
    }
    function N(ai) {
      if (!ai) {
        return [];
      }
      if (!H(ai.children) && H(ai.childNodes)) {
        return ai.children;
      }
      if (H(ai.children)) {
        return ai.children;
      }
      return [];
    }
    function S(aj, ai) {
      if (!aj || !ai) {
        return false;
      }
      if (aj.contains) {
        return aj.contains(ai);
      }
      if (aj === ai) {
        return true;
      }
      if (aj.compareDocumentPosition) {
        return !!(aj.compareDocumentPosition(ai) & 16);
      }
      return false;
    }
    function K(ak, al) {
      if (ak && ak.indexOf) {
        return ak.indexOf(al);
      }
      if (!H(ak) || ak === null) {
        return -1;
      }
      if (!ak.length) {
        return -1;
      }
      var ai = ak.length;
      if (ai === 0) {
        return -1;
      }
      var aj = 0;
      while (aj < ai) {
        if (ak[aj] === al) {
          return aj;
        }
        aj++;
      }
      return -1;
    }
    function j(ak) {
      if (!ak) {
        return false;
      }
      function ai(am, an) {
        if (R.getComputedStyle) {
          return E.defaultView.getComputedStyle(am, null)[an];
        }
        if (am.currentStyle) {
          return am.currentStyle[an];
        }
      }
      function al(am) {
        am = am.parentNode;
        while (am) {
          if (am === E) {
            return true;
          }
          am = am.parentNode;
        }
        return false;
      }
      function aj(ao, av, am, ar, ap, at, aq) {
        var an = ao.parentNode,
          au = 1;
        if (!al(ao)) {
          return false;
        }
        if (9 === an.nodeType) {
          return true;
        }
        if (
          "0" === ai(ao, "opacity") ||
          "none" === ai(ao, "display") ||
          "hidden" === ai(ao, "visibility")
        ) {
          return false;
        }
        if (!H(av) || !H(am) || !H(ar) || !H(ap) || !H(at) || !H(aq)) {
          av = ao.offsetTop;
          ap = ao.offsetLeft;
          ar = av + ao.offsetHeight;
          am = ap + ao.offsetWidth;
          at = ao.offsetWidth;
          aq = ao.offsetHeight;
        }
        if (
          ak === ao &&
          (0 === aq || 0 === at) &&
          "hidden" === ai(ao, "overflow")
        ) {
          return false;
        }
        if (an) {
          if (
            "hidden" === ai(an, "overflow") ||
            "scroll" === ai(an, "overflow")
          ) {
            if (
              ap + au > an.offsetWidth + an.scrollLeft ||
              ap + at - au < an.scrollLeft ||
              av + au > an.offsetHeight + an.scrollTop ||
              av + aq - au < an.scrollTop
            ) {
              return false;
            }
          }
          if (ao.offsetParent === an) {
            ap += an.offsetLeft;
            av += an.offsetTop;
          }
          return aj(an, av, am, ar, ap, at, aq);
        }
        return true;
      }
      return aj(ak);
    }
    var Z = {
      htmlCollectionToArray: function(ak) {
        var ai = [],
          aj;
        if (!ak || !ak.length) {
          return ai;
        }
        for (aj = 0; aj < ak.length; aj++) {
          ai.push(ak[aj]);
        }
        return ai;
      },
      find: function(ai) {
        if (!document.querySelectorAll || !ai) {
          return [];
        }
        var aj = document.querySelectorAll(ai);
        return this.htmlCollectionToArray(aj);
      },
      findMultiple: function(ak) {
        if (!ak || !ak.length) {
          return [];
        }
        var aj, al;
        var ai = [];
        for (aj = 0; aj < ak.length; aj++) {
          al = this.find(ak[aj]);
          ai = ai.concat(al);
        }
        ai = this.makeNodesUnique(ai);
        return ai;
      },
      findNodesByTagName: function(aj, ai) {
        if (!aj || !ai || !aj.getElementsByTagName) {
          return [];
        }
        var ak = aj.getElementsByTagName(ai);
        return this.htmlCollectionToArray(ak);
      },
      makeNodesUnique: function(ai) {
        var an = [].concat(ai);
        ai.sort(function(ap, ao) {
          if (ap === ao) {
            return 0;
          }
          var ar = K(an, ap);
          var aq = K(an, ao);
          if (ar === aq) {
            return 0;
          }
          return ar > aq ? -1 : 1;
        });
        if (ai.length <= 1) {
          return ai;
        }
        var aj = 0;
        var al = 0;
        var am = [];
        var ak;
        ak = ai[aj++];
        while (ak) {
          if (ak === ai[aj]) {
            al = am.push(aj);
          }
          ak = ai[aj++] || null;
        }
        while (al--) {
          ai.splice(am[al], 1);
        }
        return ai;
      },
      getAttributeValueFromNode: function(am, ak) {
        if (!this.hasNodeAttribute(am, ak)) {
          return;
        }
        if (am && am.getAttribute) {
          return am.getAttribute(ak);
        }
        if (!am || !am.attributes) {
          return;
        }
        var al = typeof am.attributes[ak];
        if ("undefined" === al) {
          return;
        }
        if (am.attributes[ak].value) {
          return am.attributes[ak].value;
        }
        if (am.attributes[ak].nodeValue) {
          return am.attributes[ak].nodeValue;
        }
        var aj;
        var ai = am.attributes;
        if (!ai) {
          return;
        }
        for (aj = 0; aj < ai.length; aj++) {
          if (ai[aj].nodeName === ak) {
            return ai[aj].nodeValue;
          }
        }
        return null;
      },
      hasNodeAttributeWithValue: function(aj, ai) {
        var ak = this.getAttributeValueFromNode(aj, ai);
        return !!ak;
      },
      hasNodeAttribute: function(ak, ai) {
        if (ak && ak.hasAttribute) {
          return ak.hasAttribute(ai);
        }
        if (ak && ak.attributes) {
          var aj = typeof ak.attributes[ai];
          return "undefined" !== aj;
        }
        return false;
      },
      hasNodeCssClass: function(ak, ai) {
        if (ak && ai && ak.className) {
          var aj =
            typeof ak.className === "string" ? ak.className.split(" ") : [];
          if (-1 !== K(aj, ai)) {
            return true;
          }
        }
        return false;
      },
      findNodesHavingAttribute: function(am, ak, ai) {
        if (!ai) {
          ai = [];
        }
        if (!am || !ak) {
          return ai;
        }
        var al = N(am);
        if (!al || !al.length) {
          return ai;
        }
        var aj, an;
        for (aj = 0; aj < al.length; aj++) {
          an = al[aj];
          if (this.hasNodeAttribute(an, ak)) {
            ai.push(an);
          }
          ai = this.findNodesHavingAttribute(an, ak, ai);
        }
        return ai;
      },
      findFirstNodeHavingAttribute: function(ak, aj) {
        if (!ak || !aj) {
          return;
        }
        if (this.hasNodeAttribute(ak, aj)) {
          return ak;
        }
        var ai = this.findNodesHavingAttribute(ak, aj);
        if (ai && ai.length) {
          return ai[0];
        }
      },
      findFirstNodeHavingAttributeWithValue: function(al, ak) {
        if (!al || !ak) {
          return;
        }
        if (this.hasNodeAttributeWithValue(al, ak)) {
          return al;
        }
        var ai = this.findNodesHavingAttribute(al, ak);
        if (!ai || !ai.length) {
          return;
        }
        var aj;
        for (aj = 0; aj < ai.length; aj++) {
          if (this.getAttributeValueFromNode(ai[aj], ak)) {
            return ai[aj];
          }
        }
      },
      findNodesHavingCssClass: function(am, al, ai) {
        if (!ai) {
          ai = [];
        }
        if (!am || !al) {
          return ai;
        }
        if (am.getElementsByClassName) {
          var an = am.getElementsByClassName(al);
          return this.htmlCollectionToArray(an);
        }
        var ak = N(am);
        if (!ak || !ak.length) {
          return [];
        }
        var aj, ao;
        for (aj = 0; aj < ak.length; aj++) {
          ao = ak[aj];
          if (this.hasNodeCssClass(ao, al)) {
            ai.push(ao);
          }
          ai = this.findNodesHavingCssClass(ao, al, ai);
        }
        return ai;
      },
      findFirstNodeHavingClass: function(ak, aj) {
        if (!ak || !aj) {
          return;
        }
        if (this.hasNodeCssClass(ak, aj)) {
          return ak;
        }
        var ai = this.findNodesHavingCssClass(ak, aj);
        if (ai && ai.length) {
          return ai[0];
        }
      },
      isLinkElement: function(aj) {
        if (!aj) {
          return false;
        }
        var ai = String(aj.nodeName).toLowerCase();
        var al = ["a", "area"];
        var ak = K(al, ai);
        return ak !== -1;
      },
      setAnyAttribute: function(aj, ai, ak) {
        if (!aj || !ai) {
          return;
        }
        if (aj.setAttribute) {
          aj.setAttribute(ai, ak);
        } else {
          aj[ai] = ak;
        }
      }
    };
    var u = {
      CONTENT_ATTR: "data-track-content",
      CONTENT_CLASS: "piwikTrackContent",
      CONTENT_NAME_ATTR: "data-content-name",
      CONTENT_PIECE_ATTR: "data-content-piece",
      CONTENT_PIECE_CLASS: "piwikContentPiece",
      CONTENT_TARGET_ATTR: "data-content-target",
      CONTENT_TARGET_CLASS: "piwikContentTarget",
      CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
      CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
      location: undefined,
      findContentNodes: function() {
        var aj = "." + this.CONTENT_CLASS;
        var ai = "[" + this.CONTENT_ATTR + "]";
        var ak = Z.findMultiple([aj, ai]);
        return ak;
      },
      findContentNodesWithinNode: function(al) {
        if (!al) {
          return [];
        }
        var aj = Z.findNodesHavingCssClass(al, this.CONTENT_CLASS);
        var ai = Z.findNodesHavingAttribute(al, this.CONTENT_ATTR);
        if (ai && ai.length) {
          var ak;
          for (ak = 0; ak < ai.length; ak++) {
            aj.push(ai[ak]);
          }
        }
        if (Z.hasNodeAttribute(al, this.CONTENT_ATTR)) {
          aj.push(al);
        } else {
          if (Z.hasNodeCssClass(al, this.CONTENT_CLASS)) {
            aj.push(al);
          }
        }
        aj = Z.makeNodesUnique(aj);
        return aj;
      },
      findParentContentNode: function(aj) {
        if (!aj) {
          return;
        }
        var ak = aj;
        var ai = 0;
        while (ak && ak !== E && ak.parentNode) {
          if (Z.hasNodeAttribute(ak, this.CONTENT_ATTR)) {
            return ak;
          }
          if (Z.hasNodeCssClass(ak, this.CONTENT_CLASS)) {
            return ak;
          }
          ak = ak.parentNode;
          if (ai > 1000) {
            break;
          }
          ai++;
        }
      },
      findPieceNode: function(aj) {
        var ai;
        ai = Z.findFirstNodeHavingAttribute(aj, this.CONTENT_PIECE_ATTR);
        if (!ai) {
          ai = Z.findFirstNodeHavingClass(aj, this.CONTENT_PIECE_CLASS);
        }
        if (ai) {
          return ai;
        }
        return aj;
      },
      findTargetNodeNoDefault: function(ai) {
        if (!ai) {
          return;
        }
        var aj = Z.findFirstNodeHavingAttributeWithValue(
          ai,
          this.CONTENT_TARGET_ATTR
        );
        if (aj) {
          return aj;
        }
        aj = Z.findFirstNodeHavingAttribute(ai, this.CONTENT_TARGET_ATTR);
        if (aj) {
          return aj;
        }
        aj = Z.findFirstNodeHavingClass(ai, this.CONTENT_TARGET_CLASS);
        if (aj) {
          return aj;
        }
      },
      findTargetNode: function(ai) {
        var aj = this.findTargetNodeNoDefault(ai);
        if (aj) {
          return aj;
        }
        return ai;
      },
      findContentName: function(aj) {
        if (!aj) {
          return;
        }
        var am = Z.findFirstNodeHavingAttributeWithValue(
          aj,
          this.CONTENT_NAME_ATTR
        );
        if (am) {
          return Z.getAttributeValueFromNode(am, this.CONTENT_NAME_ATTR);
        }
        var ai = this.findContentPiece(aj);
        if (ai) {
          return this.removeDomainIfIsInLink(ai);
        }
        if (Z.hasNodeAttributeWithValue(aj, "title")) {
          return Z.getAttributeValueFromNode(aj, "title");
        }
        var ak = this.findPieceNode(aj);
        if (Z.hasNodeAttributeWithValue(ak, "title")) {
          return Z.getAttributeValueFromNode(ak, "title");
        }
        var al = this.findTargetNode(aj);
        if (Z.hasNodeAttributeWithValue(al, "title")) {
          return Z.getAttributeValueFromNode(al, "title");
        }
      },
      findContentPiece: function(aj) {
        if (!aj) {
          return;
        }
        var al = Z.findFirstNodeHavingAttributeWithValue(
          aj,
          this.CONTENT_PIECE_ATTR
        );
        if (al) {
          return Z.getAttributeValueFromNode(al, this.CONTENT_PIECE_ATTR);
        }
        var ai = this.findPieceNode(aj);
        var ak = this.findMediaUrlInNode(ai);
        if (ak) {
          return this.toAbsoluteUrl(ak);
        }
      },
      findContentTarget: function(ak) {
        if (!ak) {
          return;
        }
        var al = this.findTargetNode(ak);
        if (Z.hasNodeAttributeWithValue(al, this.CONTENT_TARGET_ATTR)) {
          return Z.getAttributeValueFromNode(al, this.CONTENT_TARGET_ATTR);
        }
        var aj;
        if (Z.hasNodeAttributeWithValue(al, "href")) {
          aj = Z.getAttributeValueFromNode(al, "href");
          return this.toAbsoluteUrl(aj);
        }
        var ai = this.findPieceNode(ak);
        if (Z.hasNodeAttributeWithValue(ai, "href")) {
          aj = Z.getAttributeValueFromNode(ai, "href");
          return this.toAbsoluteUrl(aj);
        }
      },
      isSameDomain: function(ai) {
        if (!ai || !ai.indexOf) {
          return false;
        }
        if (0 === ai.indexOf(this.getLocation().origin)) {
          return true;
        }
        var aj = ai.indexOf(this.getLocation().host);
        if (8 >= aj && 0 <= aj) {
          return true;
        }
        return false;
      },
      removeDomainIfIsInLink: function(ak) {
        var aj = "^https?://[^/]+";
        var ai = "^.*//[^/]+";
        if (
          ak &&
          ak.search &&
          -1 !== ak.search(new RegExp(aj)) &&
          this.isSameDomain(ak)
        ) {
          ak = ak.replace(new RegExp(ai), "");
          if (!ak) {
            ak = "/";
          }
        }
        return ak;
      },
      findMediaUrlInNode: function(am) {
        if (!am) {
          return;
        }
        var ak = ["img", "embed", "video", "audio"];
        var ai = am.nodeName.toLowerCase();
        if (
          -1 !== K(ak, ai) &&
          Z.findFirstNodeHavingAttributeWithValue(am, "src")
        ) {
          var al = Z.findFirstNodeHavingAttributeWithValue(am, "src");
          return Z.getAttributeValueFromNode(al, "src");
        }
        if (ai === "object" && Z.hasNodeAttributeWithValue(am, "data")) {
          return Z.getAttributeValueFromNode(am, "data");
        }
        if (ai === "object") {
          var an = Z.findNodesByTagName(am, "param");
          if (an && an.length) {
            var aj;
            for (aj = 0; aj < an.length; aj++) {
              if (
                "movie" === Z.getAttributeValueFromNode(an[aj], "name") &&
                Z.hasNodeAttributeWithValue(an[aj], "value")
              ) {
                return Z.getAttributeValueFromNode(an[aj], "value");
              }
            }
          }
          var ao = Z.findNodesByTagName(am, "embed");
          if (ao && ao.length) {
            return this.findMediaUrlInNode(ao[0]);
          }
        }
      },
      trim: function(ai) {
        return a(ai);
      },
      isOrWasNodeInViewport: function(an) {
        if (!an || !an.getBoundingClientRect || an.nodeType !== 1) {
          return true;
        }
        var am = an.getBoundingClientRect();
        var al = E.documentElement || {};
        var ak = am.top < 0;
        if (ak && an.offsetTop) {
          ak = an.offsetTop + am.height > 0;
        }
        var aj = al.clientWidth;
        if (R.innerWidth && aj > R.innerWidth) {
          aj = R.innerWidth;
        }
        var ai = al.clientHeight;
        if (R.innerHeight && ai > R.innerHeight) {
          ai = R.innerHeight;
        }
        return (
          (am.bottom > 0 || ak) &&
          am.right > 0 &&
          am.left < aj &&
          (am.top < ai || ak)
        );
      },
      isNodeVisible: function(aj) {
        var ai = j(aj);
        var ak = this.isOrWasNodeInViewport(aj);
        return ai && ak;
      },
      buildInteractionRequestParams: function(ai, aj, ak, al) {
        var am = "";
        if (ai) {
          am += "c_i=" + s(ai);
        }
        if (aj) {
          if (am) {
            am += "&";
          }
          am += "c_n=" + s(aj);
        }
        if (ak) {
          if (am) {
            am += "&";
          }
          am += "c_p=" + s(ak);
        }
        if (al) {
          if (am) {
            am += "&";
          }
          am += "c_t=" + s(al);
        }
        return am;
      },
      buildImpressionRequestParams: function(ai, aj, ak) {
        var al = "c_n=" + s(ai) + "&c_p=" + s(aj);
        if (ak) {
          al += "&c_t=" + s(ak);
        }
        return al;
      },
      buildContentBlock: function(ak) {
        if (!ak) {
          return;
        }
        var ai = this.findContentName(ak);
        var aj = this.findContentPiece(ak);
        var al = this.findContentTarget(ak);
        ai = this.trim(ai);
        aj = this.trim(aj);
        al = this.trim(al);
        return {
          name: ai || "Unknown",
          piece: aj || "Unknown",
          target: al || ""
        };
      },
      collectContent: function(al) {
        if (!al || !al.length) {
          return [];
        }
        var ak = [];
        var ai, aj;
        for (ai = 0; ai < al.length; ai++) {
          aj = this.buildContentBlock(al[ai]);
          if (H(aj)) {
            ak.push(aj);
          }
        }
        return ak;
      },
      setLocation: function(ai) {
        this.location = ai;
      },
      getLocation: function() {
        var ai = this.location || R.location;
        if (!ai.origin) {
          ai.origin =
            ai.protocol + "//" + ai.hostname + (ai.port ? ":" + ai.port : "");
        }
        return ai;
      },
      toAbsoluteUrl: function(aj) {
        if ((!aj || String(aj) !== aj) && aj !== "") {
          return aj;
        }
        if ("" === aj) {
          return this.getLocation().href;
        }
        if (aj.search(/^\/\//) !== -1) {
          return this.getLocation().protocol + aj;
        }
        if (aj.search(/:\/\//) !== -1) {
          return aj;
        }
        if (0 === aj.indexOf("#")) {
          return this.getLocation().origin + this.getLocation().pathname + aj;
        }
        if (0 === aj.indexOf("?")) {
          return this.getLocation().origin + this.getLocation().pathname + aj;
        }
        if (0 === aj.search("^[a-zA-Z]{2,11}:")) {
          return aj;
        }
        if (aj.search(/^\//) !== -1) {
          return this.getLocation().origin + aj;
        }
        var ai = "(.*/)";
        var ak =
          this.getLocation().origin +
          this.getLocation().pathname.match(new RegExp(ai))[0];
        return ak + aj;
      },
      isUrlToCurrentDomain: function(aj) {
        var ak = this.toAbsoluteUrl(aj);
        if (!ak) {
          return false;
        }
        var ai = this.getLocation().origin;
        if (ai === ak) {
          return true;
        }
        if (0 === String(ak).indexOf(ai)) {
          if (":" === String(ak).substr(ai.length, 1)) {
            return false;
          }
          return true;
        }
        return false;
      },
      setHrefAttribute: function(aj, ai) {
        if (!aj || !ai) {
          return;
        }
        Z.setAnyAttribute(aj, "href", ai);
      },
      shouldIgnoreInteraction: function(ak) {
        var aj = Z.hasNodeAttribute(ak, this.CONTENT_IGNOREINTERACTION_ATTR);
        var ai = Z.hasNodeCssClass(ak, this.CONTENT_IGNOREINTERACTION_CLASS);
        return aj || ai;
      }
    };
    function M(aj, am) {
      if (am) {
        return am;
      }
      aj = u.toAbsoluteUrl(aj);
      if (x(aj, "?")) {
        var al = aj.indexOf("?");
        aj = aj.slice(0, al);
      }
      if (P(aj, "piwik.php")) {
        aj = g(aj, "piwik.php".length);
      } else {
        if (P(aj, ".php")) {
          var ai = aj.lastIndexOf("/");
          var ak = 1;
          aj = aj.slice(0, ai + ak);
        }
      }
      if (P(aj, "/js/")) {
        aj = g(aj, "js/".length);
      }
      return aj;
    }
    function L(ao) {
      var aq = "Piwik_Overlay";
      var aj = new RegExp(
        "index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$"
      );
      var ak = aj.exec(E.referrer);
      if (ak) {
        var am = ak[1];
        if (am !== String(ao)) {
          return false;
        }
        var an = ak[2],
          ai = ak[3],
          al = ak[4];
        if (!al) {
          al = "";
        } else {
          if (al.indexOf("&segment=") === 0) {
            al = al.substr("&segment=".length);
          }
        }
        R.name = aq + "###" + an + "###" + ai + "###" + al;
      }
      var ap = R.name.split("###");
      return ap.length === 4 && ap[0] === aq;
    }
    function V(aj, ap, al) {
      var ao = R.name.split("###"),
        an = ao[1],
        ai = ao[2],
        am = ao[3],
        ak = M(aj, ap);
      n(ak + "plugins/Overlay/client/client.js?v=1", function() {
        Piwik_Overlay_Client.initialize(ak, al, an, ai, am);
      });
    }
    function t() {
      var ak;
      try {
        ak = R.frameElement;
      } catch (aj) {
        return true;
      }
      if (H(ak)) {
        return ak && String(ak.nodeName).toLowerCase() === "iframe"
          ? true
          : false;
      }
      try {
        return R.self !== R.top;
      } catch (ai) {
        return true;
      }
    }
    function O(bZ, bU) {
      var bu = this,
        bP = W(E.domain, R.location.href, I()),
        cC = J(bP[0]),
        bz = o(bP[1]),
        bc = o(bP[2]),
        cA = false,
        b3 = "GET",
        cQ = b3,
        aA = "application/x-www-form-urlencoded; charset=UTF-8",
        cj = aA,
        aw = bZ || "",
        bt = "",
        cG = "",
        bR = bU || "",
        bm = "",
        bA = "",
        aW,
        a8 = "",
        cN = [
          "7z",
          "aac",
          "apk",
          "arc",
          "arj",
          "asf",
          "asx",
          "avi",
          "azw3",
          "bin",
          "csv",
          "deb",
          "dmg",
          "doc",
          "docx",
          "epub",
          "exe",
          "flv",
          "gif",
          "gz",
          "gzip",
          "hqx",
          "ibooks",
          "jar",
          "jpg",
          "jpeg",
          "js",
          "mobi",
          "mp2",
          "mp3",
          "mp4",
          "mpg",
          "mpeg",
          "mov",
          "movie",
          "msi",
          "msp",
          "odb",
          "odf",
          "odg",
          "ods",
          "odt",
          "ogg",
          "ogv",
          "pdf",
          "phps",
          "png",
          "ppt",
          "pptx",
          "qt",
          "qtm",
          "ra",
          "ram",
          "rar",
          "rpm",
          "sea",
          "sit",
          "tar",
          "tbz",
          "tbz2",
          "bz",
          "bz2",
          "tgz",
          "torrent",
          "txt",
          "wav",
          "wma",
          "wmv",
          "wpd",
          "xls",
          "xlsx",
          "xml",
          "z",
          "zip"
        ],
        ap = [cC],
        bn = [],
        bx = [],
        aZ = [],
        bv = 500,
        cs,
        aX,
        bD,
        bB,
        ai,
        cd = [
          "pk_campaign",
          "piwik_campaign",
          "utm_campaign",
          "utm_source",
          "utm_medium"
        ],
        bs = ["pk_kwd", "piwik_kwd", "utm_term"],
        a9 = "_pk_",
        ao = "pk_vid",
        aR = 180,
        cE,
        be,
        ba = false,
        cy,
        a4,
        bj,
        ct = 33955200000,
        ca = 1800000,
        cM = 15768000000,
        aU = true,
        b8 = 0,
        bC = false,
        aH = false,
        bW,
        bH = {},
        b7 = {},
        bb = {},
        bh = 200,
        cI = {},
        cO = {},
        bV = [],
        b0 = false,
        cm = false,
        aj = false,
        cP = false,
        cv = false,
        aF = false,
        a3 = t(),
        cF = null,
        bX,
        aI,
        bo,
        bS = ag,
        bd,
        aC,
        ce = 0,
        bi = ["id", "ses", "cvar", "ref"],
        aL = false;
      try {
        a8 = E.title;
      } catch (ck) {
        a8 = "";
      }
      function cT(c3, c1, c0, c2, cZ) {
        if (ba) {
          return;
        }
        var cY;
        if (c0) {
          cY = new Date();
          cY.setTime(cY.getTime() + c0);
        }
        E.cookie =
          c3 +
          "=" +
          s(c1) +
          (c0 ? ";expires=" + cY.toGMTString() : "") +
          ";path=" +
          (c2 || "/") +
          (cZ ? ";domain=" + cZ : "") +
          (aL ? ";secure" : "");
      }
      function cH(cY) {
        aL = !!cY;
      }
      function cb() {
        return aL;
      }
      function av(c0) {
        if (ba) {
          return 0;
        }
        var cY = new RegExp("(^|;)[ ]*" + c0 + "=([^;]*)"),
          cZ = cY.exec(E.cookie);
        return cZ ? Q(cZ[2]) : 0;
      }
      function bN(cY) {
        var cZ;
        cY = k(cY, ao);
        if (bB) {
          cZ = new RegExp("#.*");
          return cY.replace(cZ, "");
        }
        return cY;
      }
      function bG(c0, cY) {
        var c1 = r(cY),
          cZ;
        if (c1) {
          return cY;
        }
        if (cY.slice(0, 1) === "/") {
          return r(c0) + "://" + d(c0) + cY;
        }
        c0 = bN(c0);
        cZ = c0.indexOf("?");
        if (cZ >= 0) {
          c0 = c0.slice(0, cZ);
        }
        cZ = c0.lastIndexOf("/");
        if (cZ !== c0.length - 1) {
          c0 = c0.slice(0, cZ + 1);
        }
        return c0 + cY;
      }
      function cr(c0, cY) {
        var cZ;
        c0 = String(c0).toLowerCase();
        cY = String(cY).toLowerCase();
        if (c0 === cY) {
          return true;
        }
        if (cY.slice(0, 1) === ".") {
          if (c0 === cY.slice(1)) {
            return true;
          }
          cZ = c0.length - cY.length;
          if (cZ > 0 && c0.slice(cZ) === cY) {
            return true;
          }
        }
        return false;
      }
      function b6(cY) {
        var cZ = document.createElement("a");
        if (cY.indexOf("//") !== 0 && cY.indexOf("http") !== 0) {
          if (cY.indexOf("*") === 0) {
            cY = cY.substr(1);
          }
          if (cY.indexOf(".") === 0) {
            cY = cY.substr(1);
          }
          cY = "http://" + cY;
        }
        cZ.href = u.toAbsoluteUrl(cY);
        if (cZ.pathname) {
          return cZ.pathname;
        }
        return "";
      }
      function aV(cZ, cY) {
        if (!ad(cY, "/")) {
          cY = "/" + cY;
        }
        if (!ad(cZ, "/")) {
          cZ = "/" + cZ;
        }
        var c0 = cY === "/" || cY === "/*";
        if (c0) {
          return true;
        }
        if (cZ === cY) {
          return true;
        }
        cY = String(cY).toLowerCase();
        cZ = String(cZ).toLowerCase();
        if (P(cY, "*")) {
          cY = cY.slice(0, -1);
          c0 = !cY || cY === "/";
          if (c0) {
            return true;
          }
          if (cZ === cY) {
            return true;
          }
          return cZ.indexOf(cY) === 0;
        }
        if (!P(cZ, "/")) {
          cZ += "/";
        }
        if (!P(cY, "/")) {
          cY += "/";
        }
        return cZ.indexOf(cY) === 0;
      }
      function al(c2, c4) {
        var cZ, cY, c0, c1, c3;
        for (cZ = 0; cZ < ap.length; cZ++) {
          c1 = J(ap[cZ]);
          c3 = b6(ap[cZ]);
          if (cr(c2, c1) && aV(c4, c3)) {
            return true;
          }
        }
        return false;
      }
      function aN(c1) {
        var cZ, cY, c0;
        for (cZ = 0; cZ < ap.length; cZ++) {
          cY = J(ap[cZ].toLowerCase());
          if (c1 === cY) {
            return true;
          }
          if (cY.slice(0, 1) === ".") {
            if (c1 === cY.slice(1)) {
              return true;
            }
            c0 = c1.length - cY.length;
            if (c0 > 0 && c1.slice(c0) === cY) {
              return true;
            }
          }
        }
        return false;
      }
      function cc(cY, c0) {
        var cZ = new Image(1, 1);
        cZ.onload = function() {
          C = 0;
          if (typeof c0 === "function") {
            c0();
          }
        };
        cY = cY.replace("send_image=0", "send_image=1");
        cZ.src = aw + (aw.indexOf("?") < 0 ? "?" : "&") + cY;
      }
      function cL(cZ, c2, cY) {
        if (!H(cY) || null === cY) {
          cY = true;
        }
        try {
          var c1 = R.XMLHttpRequest
            ? new R.XMLHttpRequest()
            : R.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
          c1.open("POST", aw, true);
          c1.onreadystatechange = function() {
            if (
              this.readyState === 4 &&
              !(this.status >= 200 && this.status < 300) &&
              cY
            ) {
              cc(cZ, c2);
            } else {
              if (this.readyState === 4 && typeof c2 === "function") {
                c2();
              }
            }
          };
          c1.setRequestHeader("Content-Type", cj);
          c1.send(cZ);
        } catch (c0) {
          if (cY) {
            cc(cZ, c2);
          }
        }
      }
      function b1(cZ) {
        var cY = new Date();
        var c0 = cY.getTime() + cZ;
        if (!q || c0 > q) {
          q = c0;
        }
      }
      function b9(cY) {
        if (bX || !aX) {
          return;
        }
        bX = setTimeout(function cZ() {
          bX = null;
          if (!a3) {
            a3 = !E.hasFocus || E.hasFocus();
          }
          if (!a3) {
            b9(aX);
            return;
          }
          if (bD()) {
            return;
          }
          var c0 = new Date(),
            c1 = aX - (c0.getTime() - cF);
          c1 = Math.min(aX, c1);
          b9(c1);
        }, cY || aX);
      }
      function bw() {
        if (!bX) {
          return;
        }
        clearTimeout(bX);
        bX = null;
      }
      function a1() {
        a3 = true;
        if (bD()) {
          return;
        }
        b9();
      }
      function aq() {
        bw();
      }
      function cV() {
        if (aF || !aX) {
          return;
        }
        aF = true;
        ah(R, "focus", a1);
        ah(R, "blur", aq);
        b9();
      }
      function cn(c2) {
        var cZ = new Date();
        var cY = cZ.getTime();
        cF = cY;
        if (cm && cY < cm) {
          var c0 = cm - cY;
          setTimeout(c2, c0);
          b1(c0 + 50);
          cm += 50;
          return;
        }
        if (cm === false) {
          var c1 = 800;
          cm = cY + c1;
        }
        c2();
      }
      function br(cZ, cY, c0) {
        if (!cy && cZ) {
          cn(function() {
            if (cQ === "POST" || String(cZ).length > 2000) {
              cL(cZ, c0);
            } else {
              cc(cZ, c0);
            }
            b1(cY);
          });
        }
        if (!aF) {
          cV();
        } else {
          b9();
        }
      }
      function b5(cY) {
        if (cy) {
          return false;
        }
        return cY && cY.length;
      }
      function cU(c0, cY) {
        if (!b5(c0)) {
          return;
        }
        var cZ = '{"requests":["?' + c0.join('","?') + '"]}';
        cn(function() {
          cL(cZ, null, false);
          b1(cY);
        });
      }
      function aK(cY) {
        return a9 + cY + "." + bR + "." + bd;
      }
      function bQ() {
        if (ba) {
          return "0";
        }
        if (!H(h.cookieEnabled)) {
          var cY = aK("testcookie");
          cT(cY, "1");
          return av(cY) === "1" ? "1" : "0";
        }
        return h.cookieEnabled ? "1" : "0";
      }
      function a7() {
        bd = bS((cE || cC) + (be || "/")).slice(0, 4);
      }
      function bI() {
        var cZ = aK("cvar"),
          cY = av(cZ);
        if (cY.length) {
          cY = JSON_PIWIK.parse(cY);
          if (T(cY)) {
            return cY;
          }
        }
        return {};
      }
      function co() {
        if (aH === false) {
          aH = bI();
        }
      }
      function cz() {
        return bS(
          (h.userAgent || "") +
            (h.platform || "") +
            JSON_PIWIK.stringify(cO) +
            new Date().getTime() +
            Math.random()
        ).slice(0, 16);
      }
      function ar() {
        return bS(
          (h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(cO)
        ).slice(0, 6);
      }
      function a5() {
        return Math.floor(new Date().getTime() / 1000);
      }
      function aB() {
        var cZ = a5();
        var c0 = ar();
        var cY = String(cZ) + c0;
        return cY;
      }
      function cK(c0) {
        c0 = String(c0);
        var c3 = ar();
        var c1 = c3.length;
        var c2 = c0.substr(-1 * c1, c1);
        var cZ = parseInt(c0.substr(0, c0.length - c1), 10);
        if (cZ && c2 && c2 === c3) {
          var cY = a5();
          if (aR <= 0) {
            return true;
          }
          if (cY >= cZ && cY <= cZ + aR) {
            return true;
          }
        }
        return false;
      }
      function cW(cY) {
        if (!cv) {
          return "";
        }
        var c2 = f(cY, ao);
        if (!c2) {
          return "";
        }
        c2 = String(c2);
        var c0 = new RegExp("^[a-zA-Z0-9]+$");
        if (c2.length === 32 && c0.test(c2)) {
          var cZ = c2.substr(16, 32);
          if (cK(cZ)) {
            var c1 = c2.substr(0, 16);
            return c1;
          }
        }
        return "";
      }
      function cw() {
        if (!bA) {
          bA = cW(bz);
        }
        var c0 = new Date(),
          cY = Math.round(c0.getTime() / 1000),
          cZ = aK("id"),
          c3 = av(cZ),
          c2,
          c1;
        if (c3) {
          c2 = c3.split(".");
          c2.unshift("0");
          if (bA.length) {
            c2[1] = bA;
          }
          return c2;
        }
        if (bA.length) {
          c1 = bA;
        } else {
          if ("0" === bQ()) {
            c1 = "";
          } else {
            c1 = cz();
          }
        }
        c2 = ["1", c1, cY, 0, cY, "", ""];
        return c2;
      }
      function aP() {
        var c5 = cw(),
          c1 = c5[0],
          c2 = c5[1],
          cZ = c5[2],
          cY = c5[3],
          c3 = c5[4],
          c0 = c5[5];
        if (!H(c5[6])) {
          c5[6] = "";
        }
        var c4 = c5[6];
        return {
          newVisitor: c1,
          uuid: c2,
          createTs: cZ,
          visitCount: cY,
          currentVisitTs: c3,
          lastVisitTs: c0,
          lastEcommerceOrderTs: c4
        };
      }
      function az() {
        var c1 = new Date(),
          cZ = c1.getTime(),
          c2 = aP().createTs;
        var cY = parseInt(c2, 10);
        var c0 = cY * 1000 + ct - cZ;
        return c0;
      }
      function aD(cY) {
        if (!bR) {
          return;
        }
        var c0 = new Date(),
          cZ = Math.round(c0.getTime() / 1000);
        if (!H(cY)) {
          cY = aP();
        }
        var c1 =
          cY.uuid +
          "." +
          cY.createTs +
          "." +
          cY.visitCount +
          "." +
          cZ +
          "." +
          cY.lastVisitTs +
          "." +
          cY.lastEcommerceOrderTs;
        cT(aK("id"), c1, az(), be, cE);
      }
      function by() {
        var cY = av(aK("ref"));
        if (cY.length) {
          try {
            cY = JSON_PIWIK.parse(cY);
            if (T(cY)) {
              return cY;
            }
          } catch (cZ) {}
        }
        return ["", "", 0, ""];
      }
      function bJ(c0, cZ, cY) {
        cT(c0, "", -86400, cZ, cY);
      }
      function bk(cZ) {
        var cY = "testvalue";
        cT("test", cY, 10000, null, cZ);
        if (av("test") === cY) {
          bJ("test", null, cZ);
          return true;
        }
        return false;
      }
      function ax() {
        var cZ = ba;
        ba = false;
        var cY, c0;
        for (cY = 0; cY < bi.length; cY++) {
          c0 = aK(bi[cY]);
          if (0 !== av(c0)) {
            bJ(c0, be, cE);
          }
        }
        ba = cZ;
      }
      function bO(cY) {
        bR = cY;
        aD();
      }
      function cX(c2) {
        if (!c2 || !T(c2)) {
          return;
        }
        var c1 = [];
        var c0;
        for (c0 in c2) {
          if (Object.prototype.hasOwnProperty.call(c2, c0)) {
            c1.push(c0);
          }
        }
        var c3 = {};
        c1.sort();
        var cY = c1.length;
        var cZ;
        for (cZ = 0; cZ < cY; cZ++) {
          c3[c1[cZ]] = c2[c1[cZ]];
        }
        return c3;
      }
      function bY() {
        cT(aK("ses"), "*", ca, be, cE);
      }
      function a6() {
        var c1 = "";
        var cZ =
          "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var c0 = cZ.length;
        var cY;
        for (cY = 0; cY < 6; cY++) {
          c1 += cZ.charAt(Math.floor(Math.random() * c0));
        }
        return c1;
      }
      function cf(c0, dl, dm, c1) {
        var dk,
          cZ = new Date(),
          c8 = Math.round(cZ.getTime() / 1000),
          c5,
          dj,
          c2 = 1024,
          ds,
          c9,
          dh = aH,
          c3 = aK("ses"),
          df = aK("ref"),
          dc = aK("cvar"),
          dd = av(c3),
          di = by(),
          dp = aW || bz,
          c6,
          cY;
        if (ba) {
          ax();
        }
        if (cy) {
          return "";
        }
        var de = aP();
        if (!H(c1)) {
          c1 = "";
        }
        var db = E.characterSet || E.charset;
        if (!db || db.toLowerCase() === "utf-8") {
          db = null;
        }
        c6 = di[0];
        cY = di[1];
        c5 = di[2];
        dj = di[3];
        if (!dd) {
          var dn = ca / 1000;
          if (!de.lastVisitTs || c8 - de.lastVisitTs > dn) {
            de.visitCount++;
            de.lastVisitTs = de.currentVisitTs;
          }
          if (!bj || !c6.length) {
            for (dk in cd) {
              if (Object.prototype.hasOwnProperty.call(cd, dk)) {
                c6 = f(dp, cd[dk]);
                if (c6.length) {
                  break;
                }
              }
            }
            for (dk in bs) {
              if (Object.prototype.hasOwnProperty.call(bs, dk)) {
                cY = f(dp, bs[dk]);
                if (cY.length) {
                  break;
                }
              }
            }
          }
          ds = d(bc);
          c9 = dj.length ? d(dj) : "";
          if (ds.length && !aN(ds) && (!bj || !c9.length || aN(c9))) {
            dj = bc;
          }
          if (dj.length || c6.length) {
            c5 = c8;
            di = [c6, cY, c5, bN(dj.slice(0, c2))];
            cT(df, JSON_PIWIK.stringify(di), cM, be, cE);
          }
        }
        c0 +=
          "&idsite=" +
          bR +
          "&rec=1&r=" +
          String(Math.random()).slice(2, 8) +
          "&h=" +
          cZ.getHours() +
          "&m=" +
          cZ.getMinutes() +
          "&s=" +
          cZ.getSeconds() +
          "&url=" +
          s(bN(dp)) +
          (bc.length ? "&urlref=" + s(bN(bc)) : "") +
          (bm && bm.length ? "&uid=" + s(bm) : "") +
          "&_id=" +
          de.uuid +
          "&_idts=" +
          de.createTs +
          "&_idvc=" +
          de.visitCount +
          "&_idn=" +
          de.newVisitor +
          (c6.length ? "&_rcn=" + s(c6) : "") +
          (cY.length ? "&_rck=" + s(cY) : "") +
          "&_refts=" +
          c5 +
          "&_viewts=" +
          de.lastVisitTs +
          (String(de.lastEcommerceOrderTs).length
            ? "&_ects=" + de.lastEcommerceOrderTs
            : "") +
          (String(dj).length ? "&_ref=" + s(bN(dj.slice(0, c2))) : "") +
          (db ? "&cs=" + s(db) : "") +
          "&send_image=0";
        for (dk in cO) {
          if (Object.prototype.hasOwnProperty.call(cO, dk)) {
            c0 += "&" + dk + "=" + cO[dk];
          }
        }
        var dr = [];
        if (dl) {
          for (dk in dl) {
            if (
              Object.prototype.hasOwnProperty.call(dl, dk) &&
              /^dimension\d+$/.test(dk)
            ) {
              var c4 = dk.replace("dimension", "");
              dr.push(parseInt(c4, 10));
              dr.push(String(c4));
              c0 += "&" + dk + "=" + dl[dk];
              delete dl[dk];
            }
          }
        }
        if (dl && z(dl)) {
          dl = null;
        }
        for (dk in bb) {
          if (Object.prototype.hasOwnProperty.call(bb, dk)) {
            var da = -1 === K(dr, dk);
            if (da) {
              c0 += "&dimension" + dk + "=" + bb[dk];
            }
          }
        }
        if (dl) {
          c0 += "&data=" + s(JSON_PIWIK.stringify(dl));
        } else {
          if (ai) {
            c0 += "&data=" + s(JSON_PIWIK.stringify(ai));
          }
        }
        function c7(dt, du) {
          var dv = JSON_PIWIK.stringify(dt);
          if (dv.length > 2) {
            return "&" + du + "=" + s(dv);
          }
          return "";
        }
        var dq = cX(bH);
        var dg = cX(b7);
        c0 += c7(dq, "cvar");
        c0 += c7(dg, "e_cvar");
        if (aH) {
          c0 += c7(aH, "_cvar");
          for (dk in dh) {
            if (Object.prototype.hasOwnProperty.call(dh, dk)) {
              if (aH[dk][0] === "" || aH[dk][1] === "") {
                delete aH[dk];
              }
            }
          }
          if (bC) {
            cT(dc, JSON_PIWIK.stringify(aH), ca, be, cE);
          }
        }
        if (aU) {
          if (b8) {
            c0 += "&gt_ms=" + b8;
          } else {
            if (
              i &&
              i.timing &&
              i.timing.requestStart &&
              i.timing.responseEnd
            ) {
              c0 += "&gt_ms=" + (i.timing.responseEnd - i.timing.requestStart);
            }
          }
        }
        if (aC) {
          c0 += "&pv_id=" + aC;
        }
        de.lastEcommerceOrderTs =
          H(c1) && String(c1).length ? c1 : de.lastEcommerceOrderTs;
        aD(de);
        bY();
        c0 += X(dm, { tracker: bu, request: c0 });
        if (cG.length) {
          c0 += "&" + cG;
        }
        if (y(bW)) {
          c0 = bW(c0);
        }
        return c0;
      }
      bD = function aY() {
        var cY = new Date();
        if (cF + aX <= cY.getTime()) {
          var cZ = cf("ping=1", null, "ping");
          br(cZ, bv);
          return true;
        }
        return false;
      };
      function bf(c1, c0, c6, c2, cY, c9) {
        var c4 = "idgoal=0",
          c5,
          cZ = new Date(),
          c7 = [],
          c8,
          c3 = String(c1).length;
        if (c3) {
          c4 += "&ec_id=" + s(c1);
          c5 = Math.round(cZ.getTime() / 1000);
        }
        c4 += "&revenue=" + c0;
        if (String(c6).length) {
          c4 += "&ec_st=" + c6;
        }
        if (String(c2).length) {
          c4 += "&ec_tx=" + c2;
        }
        if (String(cY).length) {
          c4 += "&ec_sh=" + cY;
        }
        if (String(c9).length) {
          c4 += "&ec_dt=" + c9;
        }
        if (cI) {
          for (c8 in cI) {
            if (Object.prototype.hasOwnProperty.call(cI, c8)) {
              if (!H(cI[c8][1])) {
                cI[c8][1] = "";
              }
              if (!H(cI[c8][2])) {
                cI[c8][2] = "";
              }
              if (!H(cI[c8][3]) || String(cI[c8][3]).length === 0) {
                cI[c8][3] = 0;
              }
              if (!H(cI[c8][4]) || String(cI[c8][4]).length === 0) {
                cI[c8][4] = 1;
              }
              c7.push(cI[c8]);
            }
          }
          c4 += "&ec_items=" + s(JSON_PIWIK.stringify(c7));
        }
        c4 = cf(c4, ai, "ecommerce", c5);
        br(c4, bv);
        if (c3) {
          cI = {};
        }
      }
      function bK(cY, c2, c1, c0, cZ, c3) {
        if (String(cY).length && H(c2)) {
          bf(cY, c2, c1, c0, cZ, c3);
        }
      }
      function bg(cY) {
        if (H(cY)) {
          bf("", cY, "", "", "", "");
        }
      }
      function bL(cZ, c1, c0) {
        aC = a6();
        var cY = cf("action_name=" + s(af(cZ || a8)), c1, "log");
        br(cY, bv, c0);
      }
      function aS(c0, cZ) {
        var c1,
          cY = "(^| )(piwik[_-]" + cZ;
        if (c0) {
          for (c1 = 0; c1 < c0.length; c1++) {
            cY += "|" + c0[c1];
          }
        }
        cY += ")( |$)";
        return new RegExp(cY);
      }
      function aM(cY) {
        return aw && cY && 0 === String(cY).indexOf(aw);
      }
      function cg(c2, cY, c3, cZ) {
        if (aM(cY)) {
          return 0;
        }
        var c1 = aS(bx, "download"),
          c0 = aS(aZ, "link"),
          c4 = new RegExp("\\.(" + cN.join("|") + ")([?&#]|$)", "i");
        if (c0.test(c2)) {
          return "link";
        }
        if (cZ || c1.test(c2) || c4.test(cY)) {
          return "download";
        }
        if (c3) {
          return 0;
        }
        return "link";
      }
      function an(cZ) {
        var cY;
        cY = cZ.parentNode;
        while (cY !== null && H(cY)) {
          if (Z.isLinkElement(cZ)) {
            break;
          }
          cZ = cY;
          cY = cZ.parentNode;
        }
        return cZ;
      }
      function cS(c3) {
        c3 = an(c3);
        if (!Z.hasNodeAttribute(c3, "href")) {
          return;
        }
        if (!H(c3.href)) {
          return;
        }
        var c2 = Z.getAttributeValueFromNode(c3, "href");
        if (aM(c2)) {
          return;
        }
        var cZ = c3.pathname || b6(c3.href);
        var c4 = c3.hostname || d(c3.href);
        var c5 = c4.toLowerCase();
        var c0 = c3.href.replace(c4, c5);
        var c1 = new RegExp(
          "^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):",
          "i"
        );
        if (!c1.test(c0)) {
          var cY = cg(
            c3.className,
            c0,
            al(c5, cZ),
            Z.hasNodeAttribute(c3, "download")
          );
          if (cY) {
            return { type: cY, href: c0 };
          }
        }
      }
      function aG(cY, cZ, c0, c1) {
        var c2 = u.buildInteractionRequestParams(cY, cZ, c0, c1);
        if (!c2) {
          return;
        }
        return cf(c2, null, "contentInteraction");
      }
      function cu(c0, c1, c5, cY, cZ) {
        if (!H(c0)) {
          return;
        }
        if (aM(c0)) {
          return c0;
        }
        var c3 = u.toAbsoluteUrl(c0);
        var c2 = "redirecturl=" + s(c3) + "&";
        c2 += aG(c1, c5, cY, cZ || c0);
        var c4 = "&";
        if (aw.indexOf("?") < 0) {
          c4 = "?";
        }
        return aw + c4 + c2;
      }
      function a2(cY, cZ) {
        if (!cY || !cZ) {
          return false;
        }
        var c0 = u.findTargetNode(cY);
        if (u.shouldIgnoreInteraction(c0)) {
          return false;
        }
        c0 = u.findTargetNodeNoDefault(cY);
        if (c0 && !S(c0, cZ)) {
          return false;
        }
        return true;
      }
      function ch(c0, cZ, c2) {
        if (!c0) {
          return;
        }
        var cY = u.findParentContentNode(c0);
        if (!cY) {
          return;
        }
        if (!a2(cY, c0)) {
          return;
        }
        var c1 = u.buildContentBlock(cY);
        if (!c1) {
          return;
        }
        if (!c1.target && c2) {
          c1.target = c2;
        }
        return u.buildInteractionRequestParams(
          cZ,
          c1.name,
          c1.piece,
          c1.target
        );
      }
      function aO(cZ) {
        if (!bV || !bV.length) {
          return false;
        }
        var cY, c0;
        for (cY = 0; cY < bV.length; cY++) {
          c0 = bV[cY];
          if (
            c0 &&
            c0.name === cZ.name &&
            c0.piece === cZ.piece &&
            c0.target === cZ.target
          ) {
            return true;
          }
        }
        return false;
      }
      function bq(c1) {
        if (!c1) {
          return false;
        }
        var c4 = u.findTargetNode(c1);
        if (!c4 || u.shouldIgnoreInteraction(c4)) {
          return false;
        }
        var c5 = cS(c4);
        if (cP && c5 && c5.type) {
          return false;
        }
        if (Z.isLinkElement(c4) && Z.hasNodeAttributeWithValue(c4, "href")) {
          var cY = String(Z.getAttributeValueFromNode(c4, "href"));
          if (0 === cY.indexOf("#")) {
            return false;
          }
          if (aM(cY)) {
            return true;
          }
          if (!u.isUrlToCurrentDomain(cY)) {
            return false;
          }
          var c2 = u.buildContentBlock(c1);
          if (!c2) {
            return;
          }
          var c0 = c2.name;
          var c6 = c2.piece;
          var c3 = c2.target;
          if (
            !Z.hasNodeAttributeWithValue(c4, u.CONTENT_TARGET_ATTR) ||
            c4.wasContentTargetAttrReplaced
          ) {
            c4.wasContentTargetAttrReplaced = true;
            c3 = u.toAbsoluteUrl(cY);
            Z.setAnyAttribute(c4, u.CONTENT_TARGET_ATTR, c3);
          }
          var cZ = cu(cY, "click", c0, c6, c3);
          u.setHrefAttribute(c4, cZ);
          return true;
        }
        return false;
      }
      function aE(cZ) {
        if (!cZ || !cZ.length) {
          return;
        }
        var cY;
        for (cY = 0; cY < cZ.length; cY++) {
          bq(cZ[cY]);
        }
      }
      function aQ(cY) {
        return function(cZ) {
          if (!cY) {
            return;
          }
          var c2 = u.findParentContentNode(cY);
          var c3;
          if (cZ) {
            c3 = cZ.target || cZ.srcElement;
          }
          if (!c3) {
            c3 = cY;
          }
          if (!a2(c2, c3)) {
            return;
          }
          b1(bv);
          if (
            Z.isLinkElement(cY) &&
            Z.hasNodeAttributeWithValue(cY, "href") &&
            Z.hasNodeAttributeWithValue(cY, u.CONTENT_TARGET_ATTR)
          ) {
            var c0 = Z.getAttributeValueFromNode(cY, "href");
            if (!aM(c0) && cY.wasContentTargetAttrReplaced) {
              Z.setAnyAttribute(cY, u.CONTENT_TARGET_ATTR, "");
            }
          }
          var c7 = cS(cY);
          if (aj && c7 && c7.type) {
            return c7.type;
          }
          if (bq(c2)) {
            return "href";
          }
          var c4 = u.buildContentBlock(c2);
          if (!c4) {
            return;
          }
          var c1 = c4.name;
          var c8 = c4.piece;
          var c6 = c4.target;
          var c5 = aG("click", c1, c8, c6);
          br(c5, bv);
          return c5;
        };
      }
      function bM(c0) {
        if (!c0 || !c0.length) {
          return;
        }
        var cY, cZ;
        for (cY = 0; cY < c0.length; cY++) {
          cZ = u.findTargetNode(c0[cY]);
          if (cZ && !cZ.contentInteractionTrackingSetupDone) {
            cZ.contentInteractionTrackingSetupDone = true;
            ah(cZ, "click", aQ(cZ));
          }
        }
      }
      function bl(c0, c1) {
        if (!c0 || !c0.length) {
          return [];
        }
        var cY, cZ;
        for (cY = 0; cY < c0.length; cY++) {
          if (aO(c0[cY])) {
            c0.splice(cY, 1);
            cY--;
          } else {
            bV.push(c0[cY]);
          }
        }
        if (!c0 || !c0.length) {
          return [];
        }
        aE(c1);
        bM(c1);
        var c2 = [];
        for (cY = 0; cY < c0.length; cY++) {
          cZ = cf(
            u.buildImpressionRequestParams(
              c0[cY].name,
              c0[cY].piece,
              c0[cY].target
            ),
            undefined,
            "contentImpressions"
          );
          if (cZ) {
            c2.push(cZ);
          }
        }
        return c2;
      }
      function cl(cZ) {
        var cY = u.collectContent(cZ);
        return bl(cY, cZ);
      }
      function a0(cZ) {
        if (!cZ || !cZ.length) {
          return [];
        }
        var cY;
        for (cY = 0; cY < cZ.length; cY++) {
          if (!u.isNodeVisible(cZ[cY])) {
            cZ.splice(cY, 1);
            cY--;
          }
        }
        if (!cZ || !cZ.length) {
          return [];
        }
        return cl(cZ);
      }
      function ay(c0, cY, cZ) {
        var c1 = u.buildImpressionRequestParams(c0, cY, cZ);
        return cf(c1, null, "contentImpression");
      }
      function cR(c1, cZ) {
        if (!c1) {
          return;
        }
        var cY = u.findParentContentNode(c1);
        var c0 = u.buildContentBlock(cY);
        if (!c0) {
          return;
        }
        if (!cZ) {
          cZ = "Unknown";
        }
        return aG(cZ, c0.name, c0.piece, c0.target);
      }
      function cx(cZ, c1, cY, c0) {
        return (
          "e_c=" +
          s(cZ) +
          "&e_a=" +
          s(c1) +
          (H(cY) ? "&e_n=" + s(cY) : "") +
          (H(c0) ? "&e_v=" + s(c0) : "")
        );
      }
      function am(c0, c2, cY, c1, c4, c3) {
        if (a(String(c0)).length === 0 || a(String(c2)).length === 0) {
          ae(
            "Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces"
          );
          return false;
        }
        var cZ = cf(cx(c0, c2, cY, c1), c4, "event");
        br(cZ, bv, c3);
      }
      function bT(cY, c1, cZ, c2) {
        var c0 = cf(
          "search=" +
            s(cY) +
            (c1 ? "&search_cat=" + s(c1) : "") +
            (H(cZ) ? "&search_count=" + cZ : ""),
          c2,
          "sitesearch"
        );
        br(c0, bv);
      }
      function cB(cY, c1, c0) {
        var cZ = cf("idgoal=" + cY + (c1 ? "&revenue=" + c1 : ""), c0, "goal");
        br(cZ, bv);
      }
      function cJ(c1, cY, c5, c4, c0) {
        var c3 = cY + "=" + s(bN(c1));
        var cZ = ch(c0, "click", c1);
        if (cZ) {
          c3 += "&" + cZ;
        }
        var c2 = cf(c3, c5, "link");
        br(c2, bv, c4);
      }
      function bF(cZ, cY) {
        if (cZ !== "") {
          return cZ + cY.charAt(0).toUpperCase() + cY.slice(1);
        }
        return cY;
      }
      function b2(c3) {
        var c2,
          cY,
          c1 = ["", "webkit", "ms", "moz"],
          c0;
        if (!a4) {
          for (cY = 0; cY < c1.length; cY++) {
            c0 = c1[cY];
            if (Object.prototype.hasOwnProperty.call(E, bF(c0, "hidden"))) {
              if (E[bF(c0, "visibilityState")] === "prerender") {
                c2 = true;
              }
              break;
            }
          }
        }
        if (c2) {
          ah(E, c0 + "visibilitychange", function cZ() {
            E.removeEventListener(c0 + "visibilitychange", cZ, false);
            c3();
          });
          return;
        }
        c3();
      }
      function b4(cY) {
        if (!cY) {
          return;
        }
        if (!Z.hasNodeAttribute(cY, "href")) {
          return;
        }
        var cZ = Z.getAttributeValueFromNode(cY, "href");
        if (!cZ || aM(cZ)) {
          return;
        }
        cZ = k(cZ, ao);
        if (cZ.indexOf("?") > 0) {
          cZ += "&";
        } else {
          cZ += "?";
        }
        var c1 = aP().uuid;
        var c0 = aB();
        cZ = D(cZ, ao, c1 + c0);
        Z.setAnyAttribute(cY, "href", cZ);
      }
      function at(c1) {
        var c2 = Z.getAttributeValueFromNode(c1, "href");
        if (!c2) {
          return false;
        }
        c2 = String(c2);
        var cZ =
          c2.indexOf("//") === 0 ||
          c2.indexOf("http://") === 0 ||
          c2.indexOf("https://") === 0;
        if (!cZ) {
          return false;
        }
        var cY = c1.pathname || b6(c1.href);
        var c0 = (c1.hostname || d(c1.href)).toLowerCase();
        if (al(c0, cY)) {
          if (!cr(cC, J(c0))) {
            return true;
          }
          return false;
        }
        return false;
      }
      function cq(cY) {
        var cZ = cS(cY);
        if (cZ && cZ.type) {
          cZ.href = o(cZ.href);
          cJ(cZ.href, cZ.type, undefined, null, cY);
          return;
        }
        if (cv) {
          cY = an(cY);
          if (at(cY)) {
            b4(cY);
          }
        }
      }
      function ci() {
        return E.all && !E.addEventListener;
      }
      function cD(cY) {
        var c0 = cY.which;
        var cZ = typeof cY.button;
        if (!c0 && cZ !== "undefined") {
          if (ci()) {
            if (cY.button & 1) {
              c0 = 1;
            } else {
              if (cY.button & 2) {
                c0 = 3;
              } else {
                if (cY.button & 4) {
                  c0 = 2;
                }
              }
            }
          } else {
            if (cY.button === 0 || cY.button === "0") {
              c0 = 1;
            } else {
              if (cY.button & 1) {
                c0 = 2;
              } else {
                if (cY.button & 2) {
                  c0 = 3;
                }
              }
            }
          }
        }
        return c0;
      }
      function bE(cY) {
        switch (cD(cY)) {
          case 1:
            return "left";
          case 2:
            return "middle";
          case 3:
            return "right";
        }
      }
      function aT(cY) {
        return cY.target || cY.srcElement;
      }
      function au(cY) {
        return function(c1) {
          c1 = c1 || R.event;
          var c0 = bE(c1);
          var c2 = aT(c1);
          if (c1.type === "click") {
            var cZ = false;
            if (cY && c0 === "middle") {
              cZ = true;
            }
            if (c2 && !cZ) {
              cq(c2);
            }
          } else {
            if (c1.type === "mousedown") {
              if (c0 === "middle" && c2) {
                aI = c0;
                bo = c2;
              } else {
                aI = bo = null;
              }
            } else {
              if (c1.type === "mouseup") {
                if (c0 === aI && c2 === bo) {
                  cq(c2);
                }
                aI = bo = null;
              } else {
                if (c1.type === "contextmenu") {
                  cq(c2);
                }
              }
            }
          }
        };
      }
      function ak(c0, cZ) {
        var cY = typeof cZ;
        if (cY === "undefined") {
          cZ = true;
        }
        ah(c0, "click", au(cZ), false);
        if (cZ) {
          ah(c0, "mouseup", au(cZ), false);
          ah(c0, "mousedown", au(cZ), false);
          ah(c0, "contextmenu", au(cZ), false);
        }
      }
      function bp(c0, c2) {
        aj = true;
        var c1,
          cZ = aS(bn, "ignore"),
          c3 = E.links,
          cY = null,
          c4 = null;
        if (c3) {
          for (c1 = 0; c1 < c3.length; c1++) {
            cY = c3[c1];
            if (!cZ.test(cY.className)) {
              c4 = typeof cY.piwikTrackers;
              if ("undefined" === c4) {
                cY.piwikTrackers = [];
              }
              if (-1 === K(cY.piwikTrackers, c2)) {
                cY.piwikTrackers.push(c2);
                ak(cY, c0);
              }
            }
          }
        }
      }
      function aJ(cZ, c2, c3) {
        if (b0) {
          return true;
        }
        b0 = true;
        var c4 = false;
        var c1, c0;
        function cY() {
          c4 = true;
        }
        m(function() {
          function c5(c7) {
            setTimeout(function() {
              if (!b0) {
                return;
              }
              c4 = false;
              c3.trackVisibleContentImpressions();
              c5(c7);
            }, c7);
          }
          function c6(c7) {
            setTimeout(function() {
              if (!b0) {
                return;
              }
              if (c4) {
                c4 = false;
                c3.trackVisibleContentImpressions();
              }
              c6(c7);
            }, c7);
          }
          if (cZ) {
            c1 = ["scroll", "resize"];
            for (c0 = 0; c0 < c1.length; c0++) {
              if (E.addEventListener) {
                E.addEventListener(c1[c0], cY);
              } else {
                R.attachEvent("on" + c1[c0], cY);
              }
            }
            c6(100);
          }
          if (c2 && c2 > 0) {
            c2 = parseInt(c2, 10);
            c5(c2);
          }
        });
      }
      function cp() {
        var cZ,
          c1,
          c2 = {
            pdf: "application/pdf",
            qt: "video/quicktime",
            realp: "audio/x-pn-realaudio-plugin",
            wma: "application/x-mplayer2",
            dir: "application/x-director",
            fla: "application/x-shockwave-flash",
            java: "application/x-java-vm",
            gears: "application/x-googlegears",
            ag: "application/x-silverlight"
          };
        if (!new RegExp("MSIE").test(h.userAgent)) {
          if (h.mimeTypes && h.mimeTypes.length) {
            for (cZ in c2) {
              if (Object.prototype.hasOwnProperty.call(c2, cZ)) {
                c1 = h.mimeTypes[c2[cZ]];
                cO[cZ] = c1 && c1.enabledPlugin ? "1" : "0";
              }
            }
          }
          if (
            typeof navigator.javaEnabled !== "unknown" &&
            H(h.javaEnabled) &&
            h.javaEnabled()
          ) {
            cO.java = "1";
          }
          if (y(R.GearsFactory)) {
            cO.gears = "1";
          }
          cO.cookie = bQ();
        }
        var c0 = parseInt(U.width, 10);
        var cY = parseInt(U.height, 10);
        cO.res = parseInt(c0, 10) + "x" + parseInt(cY, 10);
      }
      cp();
      a7();
      aD();
      this.getVisitorId = function() {
        return aP().uuid;
      };
      this.getVisitorInfo = function() {
        return cw();
      };
      this.getAttributionInfo = function() {
        return by();
      };
      this.getAttributionCampaignName = function() {
        return by()[0];
      };
      this.getAttributionCampaignKeyword = function() {
        return by()[1];
      };
      this.getAttributionReferrerTimestamp = function() {
        return by()[2];
      };
      this.getAttributionReferrerUrl = function() {
        return by()[3];
      };
      this.setTrackerUrl = function(cY) {
        aw = cY;
      };
      this.getTrackerUrl = function() {
        return aw;
      };
      this.getPiwikUrl = function() {
        return M(this.getTrackerUrl(), bt);
      };
      this.addTracker = function(cY, c0) {
        if (!c0) {
          throw new Error("A siteId must be given to add a new tracker");
        }
        if (!H(cY) || null === cY) {
          cY = this.getTrackerUrl();
        }
        var cZ = new O(cY, c0);
        G.push(cZ);
        return cZ;
      };
      this.getSiteId = function() {
        return bR;
      };
      this.setSiteId = function(cY) {
        bO(cY);
      };
      this.setUserId = function(cY) {
        if (!H(cY) || !cY.length) {
          return;
        }
        bm = cY;
        bA = bS(bm).substr(0, 16);
      };
      this.getUserId = function() {
        return bm;
      };
      this.setCustomData = function(cY, cZ) {
        if (T(cY)) {
          ai = cY;
        } else {
          if (!ai) {
            ai = {};
          }
          ai[cY] = cZ;
        }
      };
      this.getCustomData = function() {
        return ai;
      };
      this.setCustomRequestProcessing = function(cY) {
        bW = cY;
      };
      this.appendToTrackingUrl = function(cY) {
        cG = cY;
      };
      this.getRequest = function(cY) {
        return cf(cY);
      };
      this.addPlugin = function(cY, cZ) {
        b[cY] = cZ;
      };
      this.setCustomDimension = function(cY, cZ) {
        cY = parseInt(cY, 10);
        if (cY > 0) {
          if (!H(cZ)) {
            cZ = "";
          }
          if (!v(cZ)) {
            cZ = String(cZ);
          }
          bb[cY] = cZ;
        }
      };
      this.getCustomDimension = function(cY) {
        cY = parseInt(cY, 10);
        if (cY > 0 && Object.prototype.hasOwnProperty.call(bb, cY)) {
          return bb[cY];
        }
      };
      this.deleteCustomDimension = function(cY) {
        cY = parseInt(cY, 10);
        if (cY > 0) {
          delete bb[cY];
        }
      };
      this.setCustomVariable = function(cZ, cY, c2, c0) {
        var c1;
        if (!H(c0)) {
          c0 = "visit";
        }
        if (!H(cY)) {
          return;
        }
        if (!H(c2)) {
          c2 = "";
        }
        if (cZ > 0) {
          cY = !v(cY) ? String(cY) : cY;
          c2 = !v(c2) ? String(c2) : c2;
          c1 = [cY.slice(0, bh), c2.slice(0, bh)];
          if (c0 === "visit" || c0 === 2) {
            co();
            aH[cZ] = c1;
          } else {
            if (c0 === "page" || c0 === 3) {
              bH[cZ] = c1;
            } else {
              if (c0 === "event") {
                b7[cZ] = c1;
              }
            }
          }
        }
      };
      this.getCustomVariable = function(cZ, c0) {
        var cY;
        if (!H(c0)) {
          c0 = "visit";
        }
        if (c0 === "page" || c0 === 3) {
          cY = bH[cZ];
        } else {
          if (c0 === "event") {
            cY = b7[cZ];
          } else {
            if (c0 === "visit" || c0 === 2) {
              co();
              cY = aH[cZ];
            }
          }
        }
        if (!H(cY) || (cY && cY[0] === "")) {
          return false;
        }
        return cY;
      };
      this.deleteCustomVariable = function(cY, cZ) {
        if (this.getCustomVariable(cY, cZ)) {
          this.setCustomVariable(cY, "", "", cZ);
        }
      };
      this.deleteCustomVariables = function(cY) {
        if (cY === "page" || cY === 3) {
          bH = {};
        } else {
          if (cY === "event") {
            b7 = {};
          } else {
            if (cY === "visit" || cY === 2) {
              aH = {};
            }
          }
        }
      };
      this.storeCustomVariablesInCookie = function() {
        bC = true;
      };
      this.setLinkTrackingTimer = function(cY) {
        bv = cY;
      };
      this.getLinkTrackingTimer = function() {
        return bv;
      };
      this.setDownloadExtensions = function(cY) {
        if (v(cY)) {
          cY = cY.split("|");
        }
        cN = cY;
      };
      this.addDownloadExtensions = function(cZ) {
        var cY;
        if (v(cZ)) {
          cZ = cZ.split("|");
        }
        for (cY = 0; cY < cZ.length; cY++) {
          cN.push(cZ[cY]);
        }
      };
      this.removeDownloadExtensions = function(c0) {
        var cZ,
          cY = [];
        if (v(c0)) {
          c0 = c0.split("|");
        }
        for (cZ = 0; cZ < cN.length; cZ++) {
          if (K(c0, cN[cZ]) === -1) {
            cY.push(cN[cZ]);
          }
        }
        cN = cY;
      };
      this.setDomains = function(cY) {
        ap = v(cY) ? [cY] : cY;
        var c2 = false,
          c0 = 0,
          cZ;
        for (c0; c0 < ap.length; c0++) {
          cZ = String(ap[c0]);
          if (cr(cC, J(cZ))) {
            c2 = true;
            break;
          }
          var c1 = b6(cZ);
          if (c1 && c1 !== "/" && c1 !== "/*") {
            c2 = true;
            break;
          }
        }
        if (!c2) {
          ap.push(cC);
        }
      };
      this.enableCrossDomainLinking = function() {
        cv = true;
      };
      this.disableCrossDomainLinking = function() {
        cv = false;
      };
      this.isCrossDomainLinkingEnabled = function() {
        return cv;
      };
      this.setCrossDomainLinkingTimeout = function(cY) {
        aR = cY;
      };
      this.setIgnoreClasses = function(cY) {
        bn = v(cY) ? [cY] : cY;
      };
      this.setRequestMethod = function(cY) {
        cQ = cY || b3;
      };
      this.setRequestContentType = function(cY) {
        cj = cY || aA;
      };
      this.setReferrerUrl = function(cY) {
        bc = cY;
      };
      this.setCustomUrl = function(cY) {
        aW = bG(bz, cY);
      };
      this.getCurrentUrl = function() {
        return aW || bz;
      };
      this.setDocumentTitle = function(cY) {
        a8 = cY;
      };
      this.setAPIUrl = function(cY) {
        bt = cY;
      };
      this.setDownloadClasses = function(cY) {
        bx = v(cY) ? [cY] : cY;
      };
      this.setLinkClasses = function(cY) {
        aZ = v(cY) ? [cY] : cY;
      };
      this.setCampaignNameKey = function(cY) {
        cd = v(cY) ? [cY] : cY;
      };
      this.setCampaignKeywordKey = function(cY) {
        bs = v(cY) ? [cY] : cY;
      };
      this.discardHashTag = function(cY) {
        bB = cY;
      };
      this.setCookieNamePrefix = function(cY) {
        a9 = cY;
        aH = bI();
      };
      this.setCookieDomain = function(cY) {
        var cZ = J(cY);
        if (bk(cZ)) {
          cE = cZ;
          a7();
        }
      };
      this.getCookieDomain = function() {
        return cE;
      };
      this.hasCookies = function() {
        return "1" === bQ();
      };
      this.setSessionCookie = function(c0, cZ, cY) {
        if (!c0) {
          throw new Error("Missing cookie name");
        }
        if (!H(cY)) {
          cY = ca;
        }
        bi.push(c0);
        cT(aK(c0), cZ, cY, be, cE);
      };
      this.getCookie = function(cZ) {
        var cY = av(aK(cZ));
        if (cY === 0) {
          return null;
        }
        return cY;
      };
      this.setCookiePath = function(cY) {
        be = cY;
        a7();
      };
      this.getCookiePath = function(cY) {
        return be;
      };
      this.setVisitorCookieTimeout = function(cY) {
        ct = cY * 1000;
      };
      this.setSessionCookieTimeout = function(cY) {
        ca = cY * 1000;
      };
      this.getSessionCookieTimeout = function() {
        return ca;
      };
      this.setReferralCookieTimeout = function(cY) {
        cM = cY * 1000;
      };
      this.setConversionAttributionFirstReferrer = function(cY) {
        bj = cY;
      };
      this.disableCookies = function() {
        ba = true;
        cO.cookie = "0";
        if (bR) {
          ax();
        }
      };
      this.deleteCookies = function() {
        ax();
      };
      this.setDoNotTrack = function(cZ) {
        var cY = h.doNotTrack || h.msDoNotTrack;
        cy = cZ && (cY === "yes" || cY === "1");
        if (cy) {
          this.disableCookies();
        }
      };
      this.addListener = function(cZ, cY) {
        ak(cZ, cY);
      };
      this.enableLinkTracking = function(cZ) {
        cP = true;
        var cY = this;
        b2(function() {
          p(function() {
            bp(cZ, cY);
          });
        });
      };
      this.enableJSErrorTracking = function() {
        if (cA) {
          return;
        }
        cA = true;
        var cY = R.onerror;
        R.onerror = function(c3, c1, c0, c2, cZ) {
          b2(function() {
            var c4 = "JavaScript Errors";
            var c5 = c1 + ":" + c0;
            if (c2) {
              c5 += ":" + c2;
            }
            am(c4, c5, c3);
          });
          if (cY) {
            return cY(c3, c1, c0, c2, cZ);
          }
          return false;
        };
      };
      this.disablePerformanceTracking = function() {
        aU = false;
      };
      this.setGenerationTimeMs = function(cY) {
        b8 = parseInt(cY, 10);
      };
      this.enableHeartBeatTimer = function(cY) {
        cY = Math.max(cY, 1);
        aX = (cY || 15) * 1000;
        if (cF !== null) {
          cV();
        }
      };
      this.disableHeartBeatTimer = function() {
        bw();
        if (aX || aF) {
          if (R.removeEventListener) {
            R.removeEventListener("focus", a1, true);
            R.removeEventListener("blur", aq, true);
          } else {
            if (R.detachEvent) {
              R.detachEvent("onfocus", a1);
              R.detachEvent("onblur", aq);
            }
          }
        }
        aX = null;
        aF = false;
      };
      this.killFrame = function() {
        if (R.location !== R.top.location) {
          R.top.location = R.location;
        }
      };
      this.redirectFile = function(cY) {
        if (R.location.protocol === "file:") {
          R.location = cY;
        }
      };
      this.setCountPreRendered = function(cY) {
        a4 = cY;
      };
      this.trackGoal = function(cY, c0, cZ) {
        b2(function() {
          cB(cY, c0, cZ);
        });
      };
      this.trackLink = function(cZ, cY, c1, c0) {
        b2(function() {
          cJ(cZ, cY, c1, c0);
        });
      };
      this.getNumTrackedPageViews = function() {
        return ce;
      };
      this.trackPageView = function(cY, c0, cZ) {
        bV = [];
        if (L(bR)) {
          b2(function() {
            V(aw, bt, bR);
          });
        } else {
          b2(function() {
            ce++;
            bL(cY, c0, cZ);
          });
        }
      };
      this.trackAllContentImpressions = function() {
        if (L(bR)) {
          return;
        }
        b2(function() {
          p(function() {
            var cY = u.findContentNodes();
            var cZ = cl(cY);
            cU(cZ, bv);
          });
        });
      };
      this.trackVisibleContentImpressions = function(cY, cZ) {
        if (L(bR)) {
          return;
        }
        if (!H(cY)) {
          cY = true;
        }
        if (!H(cZ)) {
          cZ = 750;
        }
        aJ(cY, cZ, this);
        b2(function() {
          m(function() {
            var c0 = u.findContentNodes();
            var c1 = a0(c0);
            cU(c1, bv);
          });
        });
      };
      this.trackContentImpression = function(c0, cY, cZ) {
        if (L(bR)) {
          return;
        }
        c0 = a(c0);
        cY = a(cY);
        cZ = a(cZ);
        if (!c0) {
          return;
        }
        cY = cY || "Unknown";
        b2(function() {
          var c1 = ay(c0, cY, cZ);
          br(c1, bv);
        });
      };
      this.trackContentImpressionsWithinNode = function(cY) {
        if (L(bR) || !cY) {
          return;
        }
        b2(function() {
          if (b0) {
            m(function() {
              var cZ = u.findContentNodesWithinNode(cY);
              var c0 = a0(cZ);
              cU(c0, bv);
            });
          } else {
            p(function() {
              var cZ = u.findContentNodesWithinNode(cY);
              var c0 = cl(cZ);
              cU(c0, bv);
            });
          }
        });
      };
      this.trackContentInteraction = function(c0, c1, cY, cZ) {
        if (L(bR)) {
          return;
        }
        c0 = a(c0);
        c1 = a(c1);
        cY = a(cY);
        cZ = a(cZ);
        if (!c0 || !c1) {
          return;
        }
        cY = cY || "Unknown";
        b2(function() {
          var c2 = aG(c0, c1, cY, cZ);
          br(c2, bv);
        });
      };
      this.trackContentInteractionNode = function(cZ, cY) {
        if (L(bR) || !cZ) {
          return;
        }
        b2(function() {
          var c0 = cR(cZ, cY);
          br(c0, bv);
        });
      };
      this.logAllContentBlocksOnPage = function() {
        var c0 = u.findContentNodes();
        var cY = u.collectContent(c0);
        var cZ = typeof console;
        if (cZ !== "undefined" && console && console.log) {
          console.log(cY);
        }
      };
      this.trackEvent = function(cZ, c1, cY, c0, c3, c2) {
        b2(function() {
          am(cZ, c1, cY, c0, c3, c2);
        });
      };
      this.trackSiteSearch = function(cY, c0, cZ, c1) {
        b2(function() {
          bT(cY, c0, cZ, c1);
        });
      };
      this.setEcommerceView = function(c1, cY, c0, cZ) {
        if (!H(c0) || !c0.length) {
          c0 = "";
        } else {
          if (c0 instanceof Array) {
            c0 = JSON_PIWIK.stringify(c0);
          }
        }
        bH[5] = ["_pkc", c0];
        if (H(cZ) && String(cZ).length) {
          bH[2] = ["_pkp", cZ];
        }
        if ((!H(c1) || !c1.length) && (!H(cY) || !cY.length)) {
          return;
        }
        if (H(c1) && c1.length) {
          bH[3] = ["_pks", c1];
        }
        if (!H(cY) || !cY.length) {
          cY = "";
        }
        bH[4] = ["_pkn", cY];
      };
      this.addEcommerceItem = function(c2, cY, c0, cZ, c1) {
        if (c2.length) {
          cI[c2] = [c2, cY, c0, cZ, c1];
        }
      };
      this.trackEcommerceOrder = function(cY, c2, c1, c0, cZ, c3) {
        bK(cY, c2, c1, c0, cZ, c3);
      };
      this.trackEcommerceCartUpdate = function(cY) {
        bg(cY);
      };
      this.trackRequest = function(cZ, c1, c0, cY) {
        b2(function() {
          var c2 = cf(cZ, c1, cY);
          br(c2, bv, c0);
        });
      };
      e.trigger("TrackerSetup", [this]);
    }
    function F() {
      return { push: aa };
    }
    function c(an, am) {
      var ao = {};
      var ak, al;
      for (ak = 0; ak < am.length; ak++) {
        var ai = am[ak];
        ao[ai] = 1;
        for (al = 0; al < an.length; al++) {
          if (an[al] && an[al][0]) {
            var aj = an[al][0];
            if (ai === aj) {
              aa(an[al]);
              delete an[al];
              if (ao[aj] > 1) {
                ae(
                  "The method " +
                    aj +
                    ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers'
                );
              }
              ao[aj]++;
            }
          }
        }
      }
      return an;
    }
    var A = [
      "addTracker",
      "disableCookies",
      "setTrackerUrl",
      "setAPIUrl",
      "enableCrossDomainLinking",
      "setCrossDomainLinkingTimeout",
      "setCookiePath",
      "setCookieDomain",
      "setDomains",
      "setUserId",
      "setSiteId",
      "enableLinkTracking",
      "setSecureCookie"
    ];
    function Y(ai, ak) {
      var aj = new O(ai, ak);
      G.push(aj);
      _paq = c(_paq, A);
      for (C = 0; C < _paq.length; C++) {
        if (_paq[C]) {
          aa(_paq[C]);
        }
      }
      _paq = new F();
      return aj;
    }
    ah(R, "beforeunload", ac, false);
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    e = {
      initialized: false,
      JSON: JSON_PIWIK,
      DOM: {
        addEventListener: function(al, ak, aj, ai) {
          var am = typeof ai;
          if (am === "undefined") {
            ai = false;
          }
          ah(al, ak, aj, ai);
        },
        onLoad: m,
        onReady: p,
        isNodeVisible: j,
        isOrWasNodeVisible: u.isNodeVisible
      },
      on: function(aj, ai) {
        if (!w[aj]) {
          w[aj] = [];
        }
        w[aj].push(ai);
      },
      off: function(ak, aj) {
        if (!w[ak]) {
          return;
        }
        var ai = 0;
        for (ai; ai < w[ak].length; ai++) {
          if (w[ak][ai] === aj) {
            w[ak].splice(ai, 1);
          }
        }
      },
      trigger: function(ak, al, aj) {
        if (!w[ak]) {
          return;
        }
        var ai = 0;
        for (ai; ai < w[ak].length; ai++) {
          w[ak][ai].apply(aj || R, al);
        }
      },
      addPlugin: function(ai, aj) {
        b[ai] = aj;
      },
      getTracker: function(ai, aj) {
        if (!H(aj)) {
          aj = this.getAsyncTracker().getSiteId();
        }
        if (!H(ai)) {
          ai = this.getAsyncTracker().getTrackerUrl();
        }
        return new O(ai, aj);
      },
      getAsyncTrackers: function() {
        return G;
      },
      addTracker: function(ai, aj) {
        if (!G.length) {
          Y(ai, aj);
        } else {
          G[0].addTracker(ai, aj);
        }
      },
      getAsyncTracker: function(aj, am) {
        var al;
        if (G && G.length && G[0]) {
          al = G[0];
        } else {
          return Y(aj, am);
        }
        if (!am && !aj) {
          return al;
        }
        if ((!H(am) || null === am) && al) {
          am = al.getSiteId();
        }
        if ((!H(aj) || null === aj) && al) {
          aj = al.getTrackerUrl();
        }
        var ak,
          ai = 0;
        for (ai; ai < G.length; ai++) {
          ak = G[ai];
          if (
            ak &&
            String(ak.getSiteId()) === String(am) &&
            ak.getTrackerUrl() === aj
          ) {
            return ak;
          }
        }
      },
      retryMissedPluginCalls: function() {
        var aj = ab;
        ab = [];
        var ai = 0;
        for (ai; ai < aj.length; ai++) {
          aa(aj[ai]);
        }
      }
    };
    if (typeof define === "function" && define.amd) {
      define("piwik", [], function() {
        return e;
      });
    }
    return e;
  })();
  /*!!! pluginTrackerHook */
}
(function() {
  function b() {
    if ("object" !== typeof _paq) {
      return false;
    }
    var c = typeof _paq.length;
    if ("undefined" === c) {
      return false;
    }
    return !!_paq.length;
  }
  if (
    window &&
    "object" === typeof window.piwikPluginAsyncInit &&
    window.piwikPluginAsyncInit.length
  ) {
    var a = 0;
    for (a; a < window.piwikPluginAsyncInit.length; a++) {
      if (typeof window.piwikPluginAsyncInit[a] === "function") {
        window.piwikPluginAsyncInit[a]();
      }
    }
  }
  if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit();
  }
  if (!window.Piwik.getAsyncTrackers().length) {
    if (b()) {
      window.Piwik.addTracker();
    } else {
      _paq = {
        push: function(c) {
          var d = typeof console;
          if (d !== "undefined" && console && console.error) {
            console.error(
              "_paq.push() was used but Piwik tracker was not initialized before the piwik.js file was loaded. Make sure to configure the tracker via _paq.push before loading piwik.js. Alternatively, you can create a tracker via Piwik.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.",
              c
            );
          }
        }
      };
    }
  }
  window.Piwik.trigger("PiwikInitialized", []);
  window.Piwik.initialized = true;
})();
(function() {
  var a = typeof AnalyticsTracker;
  if (a === "undefined") {
    AnalyticsTracker = window.Piwik;
  }
})();
if (typeof piwik_log !== "function") {
  piwik_log = function(b, f, d, g) {
    function a(h) {
      try {
        if (window["piwik_" + h]) {
          return window["piwik_" + h];
        }
      } catch (i) {}
      return;
    }
    var c,
      e = window.Piwik.getTracker(d, f);
    e.setDocumentTitle(b);
    e.setCustomData(g);
    c = a("tracker_pause");
    if (c) {
      e.setLinkTrackingTimer(c);
    }
    c = a("download_extensions");
    if (c) {
      e.setDownloadExtensions(c);
    }
    c = a("hosts_alias");
    if (c) {
      e.setDomains(c);
    }
    c = a("ignore_classes");
    if (c) {
      e.setIgnoreClasses(c);
    }
    e.trackPageView();
    if (a("install_tracker")) {
      piwik_track = function(i, k, j, h) {
        e.setSiteId(k);
        e.setTrackerUrl(j);
        e.trackLink(i, h);
      };
      e.enableLinkTracking();
    }
  };
  /*!! @license-end */
}