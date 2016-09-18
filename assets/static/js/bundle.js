/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	// import "./jquery.countdown.min.js";
	// import "./jquery_cookie.js";
	// import "./script.js";
	
	// import "./prettyphoto.js";
	// import "./helper-plugins.js";
	$(window).load(function () {
	  $('.flexslider').flexslider({
	    animation: "slide"
	  });
	});
	// import "./init.js";
	// import "./home.js";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
	!function (a, b) {
	  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	}("undefined" != typeof window ? window : undefined, function (a, b) {
	  var c = [],
	      d = a.document,
	      e = c.slice,
	      f = c.concat,
	      g = c.push,
	      h = c.indexOf,
	      i = {},
	      j = i.toString,
	      k = i.hasOwnProperty,
	      l = {},
	      m = "2.2.4",
	      n = function n(a, b) {
	    return new n.fn.init(a, b);
	  },
	      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      p = /^-ms-/,
	      q = /-([\da-z])/gi,
	      r = function r(a, b) {
	    return b.toUpperCase();
	  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
	      return e.call(this);
	    }, get: function get(a) {
	      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
	    }, pushStack: function pushStack(a) {
	      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
	    }, each: function each(a) {
	      return n.each(this, a);
	    }, map: function map(a) {
	      return this.pushStack(n.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(e.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor();
	    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
	      if (null != (a = arguments[h])) for (b in a) {
	        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
	      }
	    }return g;
	  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === n.type(a);
	    }, isArray: Array.isArray, isWindow: function isWindow(a) {
	      return null != a && a === a.window;
	    }, isNumeric: function isNumeric(a) {
	      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
	    }, isPlainObject: function isPlainObject(a) {
	      var b;if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;for (b in a) {}return void 0 === b || k.call(a, b);
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) {
	        return !1;
	      }return !0;
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
	    }, globalEval: function globalEval(a) {
	      var b,
	          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
	    }, camelCase: function camelCase(a) {
	      return a.replace(p, "ms-").replace(q, r);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b) {
	      var c,
	          d = 0;if (s(a)) {
	        for (c = a.length; c > d; d++) {
	          if (b.call(a[d], d, a[d]) === !1) break;
	        }
	      } else for (d in a) {
	        if (b.call(a[d], d, a[d]) === !1) break;
	      }return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(o, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
	    }, inArray: function inArray(a, b, c) {
	      return null == b ? -1 : h.call(b, a, c);
	    }, merge: function merge(a, b) {
	      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
	        a[e++] = b[d];
	      }return a.length = e, a;
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
	        d = !b(a[f], f), d !== h && e.push(a[f]);
	      }return e;
	    }, map: function map(a, b, c) {
	      var d,
	          e,
	          g = 0,
	          h = [];if (s(a)) for (d = a.length; d > g; g++) {
	        e = b(a[g], g, c), null != e && h.push(e);
	      } else for (g in a) {
	        e = b(a[g], g, c), null != e && h.push(e);
	      }return f.apply([], h);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
	        return a.apply(b || this, d.concat(e.call(arguments)));
	      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
	    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
	    i["[object " + b + "]"] = b.toLowerCase();
	  });function s(a) {
	    var b = !!a && "length" in a && a.length,
	        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	  }var t = function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = ga(),
	        z = ga(),
	        A = ga(),
	        B = function B(a, b) {
	      return a === b && (l = !0), 0;
	    },
	        C = 1 << 31,
	        D = {}.hasOwnProperty,
	        E = [],
	        F = E.pop,
	        G = E.push,
	        H = E.push,
	        I = E.slice,
	        J = function J(a, b) {
	      for (var c = 0, d = a.length; d > c; c++) {
	        if (a[c] === b) return c;
	      }return -1;
	    },
	        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        L = "[\\x20\\t\\r\\n\\f]",
	        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
	        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
	        P = new RegExp(L + "+", "g"),
	        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
	        R = new RegExp("^" + L + "*," + L + "*"),
	        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
	        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
	        U = new RegExp(O),
	        V = new RegExp("^" + M + "$"),
	        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
	        X = /^(?:input|select|textarea|button)$/i,
	        Y = /^h\d$/i,
	        Z = /^[^{]+\{\s*\[native \w/,
	        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        _ = /[+~]/,
	        aa = /'|\\/g,
	        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
	        ca = function ca(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        da = function da() {
	      m();
	    };try {
	      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
	    } catch (ea) {
	      H = { apply: E.length ? function (a, b) {
	          G.apply(a, I.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
	        } };
	    }function fa(a, b, d, e) {
	      var f,
	          h,
	          j,
	          k,
	          l,
	          o,
	          r,
	          s,
	          w = b && b.ownerDocument,
	          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
	        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
	          if (9 === x) {
	            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
	          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
	        } else {
	          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
	        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
	          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
	            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
	              r[h] = l + " " + qa(r[h]);
	            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
	          }if (s) try {
	            return H.apply(d, w.querySelectorAll(s)), d;
	          } catch (y) {} finally {
	            k === u && b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(Q, "$1"), b, d, e);
	    }function ga() {
	      var a = [];function b(c, e) {
	        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
	      }return b;
	    }function ha(a) {
	      return a[u] = !0, a;
	    }function ia(a) {
	      var b = n.createElement("div");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function ja(a, b) {
	      var c = a.split("|"),
	          e = c.length;while (e--) {
	        d.attrHandle[c[e]] = b;
	      }
	    }function ka(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
	        if (c === b) return -1;
	      }return a ? 1 : -1;
	    }function la(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function ma(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function na(a) {
	      return ha(function (b) {
	        return b = +b, ha(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) {
	            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	          }
	        });
	      });
	    }function oa(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = fa.support = {}, f = fa.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
	    }, m = fa.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
	        return a.className = "i", !a.getAttribute("className");
	      }), c.getElementsByTagName = ia(function (a) {
	        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
	      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
	        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
	      }), c.getById ? (d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c ? [c] : [];
	        }
	      }, d.filter.ID = function (a) {
	        var b = a.replace(ba, ca);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }) : (delete d.find.ID, d.filter.ID = function (a) {
	        var b = a.replace(ba, ca);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) {
	            1 === c.nodeType && d.push(c);
	          }return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
	      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), ia(function (a) {
	        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
	        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) {
	          if (b === a) return !0;
	        }return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return l = !0, 0;var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            g = [a],
	            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
	          g.unshift(c);
	        }c = b;while (c = c.parentNode) {
	          h.unshift(c);
	        }while (g[d] === h[d]) {
	          d++;
	        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
	      }, n) : n;
	    }, fa.matches = function (a, b) {
	      return fa(a, null, null, b);
	    }, fa.matchesSelector = function (a, b) {
	      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return fa(b, n, null, [a]).length > 0;
	    }, fa.contains = function (a, b) {
	      return (a.ownerDocument || a) !== n && m(a), t(a, b);
	    }, fa.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, fa.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, fa.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
	        while (b = a[f++]) {
	          b === a[f] && (e = d.push(f));
	        }while (e--) {
	          a.splice(d[e], 1);
	        }
	      }return k = null, a;
	    }, e = fa.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
	            c += e(a);
	          }
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) {
	        c += e(b);
	      }return c;
	    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	        }, CHILD: function CHILD(a) {
	          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h,
	                t = !1;if (q) {
	              if (f) {
	                while (p) {
	                  m = b;while (m = m[p]) {
	                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
	                  }o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
	                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                  if (1 === m.nodeType && ++t && m === b) {
	                    k[a] = [w, n, t];break;
	                  }
	                }
	              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
	              }return t -= e, t === d || t % d === 0 && t / d >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) {
	              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
	            }
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ha(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) {
	              (f = g[h]) && (a[h] = !(b[h] = f));
	            }
	          }) : function (a, e, f) {
	            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
	          };
	        }), has: ha(function (a) {
	          return function (b) {
	            return fa(a, b).length > 0;
	          };
	        }), contains: ha(function (a) {
	          return a = a.replace(ba, ca), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          };
	        }), lang: ha(function (a) {
	          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
	            var c;do {
	              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
	            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          };
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: function enabled(a) {
	          return a.disabled === !1;
	        }, disabled: function disabled(a) {
	          return a.disabled === !0;
	        }, checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) {
	            if (a.nodeType < 6) return !1;
	          }return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return Y.test(a.nodeName);
	        }, input: function input(a) {
	          return X.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: na(function () {
	          return [0];
	        }), last: na(function (a, b) {
	          return [b - 1];
	        }), eq: na(function (a, b, c) {
	          return [0 > c ? c + b : c];
	        }), even: na(function (a, b) {
	          for (var c = 0; b > c; c += 2) {
	            a.push(c);
	          }return a;
	        }), odd: na(function (a, b) {
	          for (var c = 1; b > c; c += 2) {
	            a.push(c);
	          }return a;
	        }), lt: na(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; --d >= 0;) {
	            a.push(d);
	          }return a;
	        }), gt: na(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; ++d < b;) {
	            a.push(d);
	          }return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	      d.pseudos[b] = la(b);
	    }for (b in { submit: !0, reset: !0 }) {
	      d.pseudos[b] = ma(b);
	    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
	          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
	        }if (!c) break;
	      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
	    };function qa(a) {
	      for (var b = 0, c = a.length, d = ""; c > b; b++) {
	        d += a[b].value;
	      }return d;
	    }function ra(a, b, c) {
	      var d = b.dir,
	          e = c && "parentNode" === d,
	          f = x++;return b.first ? function (b, c, f) {
	        while (b = b[d]) {
	          if (1 === b.nodeType || e) return a(b, c, f);
	        }
	      } : function (b, c, g) {
	        var h,
	            i,
	            j,
	            k = [w, f];if (g) {
	          while (b = b[d]) {
	            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
	          }
	        } else while (b = b[d]) {
	          if (1 === b.nodeType || e) {
	            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
	          }
	        }
	      };
	    }function sa(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) {
	          if (!a[e](b, c, d)) return !1;
	        }return !0;
	      } : a[0];
	    }function ta(a, b, c) {
	      for (var d = 0, e = b.length; e > d; d++) {
	        fa(a, b[d], c);
	      }return c;
	    }function ua(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
	        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
	      }return g;
	    }function va(a, b, c, d, e, f) {
	      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : ua(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
	          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
	            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	          }
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) {
	                (l = r[k]) && j.push(q[k] = l);
	              }e(null, r = [], j, i);
	            }k = r.length;while (k--) {
	              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	            }
	          }
	        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
	      });
	    }function wa(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
	        return a === b;
	      }, h, !0), l = ra(function (a) {
	        return J(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
	      }]; f > i; i++) {
	        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
	          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
	            for (e = ++i; f > e; e++) {
	              if (d.relative[a[e].type]) break;
	            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
	          }m.push(c);
	        }
	      }return sa(m);
	    }function xa(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = function f(_f, g, h, i, k) {
	        var l,
	            o,
	            q,
	            r = 0,
	            s = "0",
	            t = _f && [],
	            u = [],
	            v = j,
	            x = _f || e && d.find.TAG("*", k),
	            y = w += null == v ? 1 : Math.random() || .1,
	            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
	          if (e && l) {
	            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
	              if (q(l, g || n, h)) {
	                i.push(l);break;
	              }
	            }k && (w = y);
	          }c && ((l = !q && l) && r--, _f && t.push(l));
	        }if (r += s, c && s !== r) {
	          o = 0;while (q = b[o++]) {
	            q(t, u, g, h);
	          }if (_f) {
	            if (r > 0) while (s--) {
	              t[s] || u[s] || (u[s] = F.call(i));
	            }u = ua(u);
	          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
	        }return k && (w = y, j = v), t;
	      };return c ? ha(f) : f;
	    }return h = fa.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) {
	          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
	        }f = A(a, xa(e, d)), f.selector = a;
	      }return f;
	    }, i = fa.select = function (a, b, e, f) {
	      var i,
	          j,
	          k,
	          l,
	          m,
	          n = "function" == typeof a && a,
	          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
	        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
	          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
	        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
	          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
	            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
	          }
	        }
	      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("div"));
	    }), ia(function (a) {
	      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	    }) || ja("type|href|height|width", function (a, b, c) {
	      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && ia(function (a) {
	      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	    }) || ja("value", function (a, b, c) {
	      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
	    }), ia(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || ja(K, function (a, b, c) {
	      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), fa;
	  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
	    var d = [],
	        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
	      if (1 === a.nodeType) {
	        if (e && n(a).is(c)) break;d.push(a);
	      }
	    }return d;
	  },
	      v = function v(a, b) {
	    for (var c = []; a; a = a.nextSibling) {
	      1 === a.nodeType && a !== b && c.push(a);
	    }return c;
	  },
	      w = n.expr.match.needsContext,
	      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
	      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
	    if (n.isFunction(b)) return n.grep(a, function (a, d) {
	      return !!b.call(a, d, a) !== c;
	    });if (b.nodeType) return n.grep(a, function (a) {
	      return a === b !== c;
	    });if ("string" == typeof b) {
	      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
	    }return n.grep(a, function (a) {
	      return h.call(b, a) > -1 !== c;
	    });
	  }n.filter = function (a, b, c) {
	    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
	      return 1 === a.nodeType;
	    }));
	  }, n.fn.extend({ find: function find(a) {
	      var b,
	          c = this.length,
	          d = [],
	          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
	        for (b = 0; c > b; b++) {
	          if (n.contains(e[b], this)) return !0;
	        }
	      }));for (b = 0; c > b; b++) {
	        n.find(a, e[b], d);
	      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
	    }, filter: function filter(a) {
	      return this.pushStack(z(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(z(this, a || [], !0));
	    }, is: function is(a) {
	      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
	    } });var A,
	      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	      C = n.fn.init = function (a, b, c) {
	    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
	      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
	        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
	          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
	        }return this;
	      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
	    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
	      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
	      var b = n(a, this),
	          c = b.length;return this.filter(function () {
	        for (var a = 0; c > a; a++) {
	          if (n.contains(this, b[a])) return !0;
	        }
	      });
	    }, closest: function closest(a, b) {
	      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
	        for (c = this[d]; c && c !== b; c = c.parentNode) {
	          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
	            f.push(c);break;
	          }
	        }
	      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function F(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	  }n.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return u(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return u(a, "parentNode", c);
	    }, next: function next(a) {
	      return F(a, "nextSibling");
	    }, prev: function prev(a) {
	      return F(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return u(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return u(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return u(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return u(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return v((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return v(a.firstChild);
	    }, contents: function contents(a) {
	      return a.contentDocument || n.merge([], a.childNodes);
	    } }, function (a, b) {
	    n.fn[a] = function (c, d) {
	      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
	    };
	  });var G = /\S+/g;function H(a) {
	    var b = {};return n.each(a.match(G) || [], function (a, c) {
	      b[c] = !0;
	    }), b;
	  }n.Callbacks = function (a) {
	    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f = [],
	        g = [],
	        h = -1,
	        i = function i() {
	      for (e = a.once, d = b = !0; g.length; h = -1) {
	        c = g.shift();while (++h < f.length) {
	          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
	        }
	      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
	    },
	        j = { add: function add() {
	        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
	          n.each(b, function (b, c) {
	            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
	          });
	        }(arguments), c && !b && i()), this;
	      }, remove: function remove() {
	        return n.each(arguments, function (a, b) {
	          var c;while ((c = n.inArray(b, f, c)) > -1) {
	            f.splice(c, 1), h >= c && h--;
	          }
	        }), this;
	      }, has: function has(a) {
	        return a ? n.inArray(a, f) > -1 : f.length > 0;
	      }, empty: function empty() {
	        return f && (f = []), this;
	      }, disable: function disable() {
	        return e = g = [], f = c = "", this;
	      }, disabled: function disabled() {
	        return !f;
	      }, lock: function lock() {
	        return e = g = [], c || (f = c = ""), this;
	      }, locked: function locked() {
	        return !!e;
	      }, fireWith: function fireWith(a, c) {
	        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
	      }, fire: function fire() {
	        return j.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!d;
	      } };return j;
	  }, n.extend({ Deferred: function Deferred(a) {
	      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
	          c = "pending",
	          d = { state: function state() {
	          return c;
	        }, always: function always() {
	          return e.done(arguments).fail(arguments), this;
	        }, then: function then() {
	          var a = arguments;return n.Deferred(function (c) {
	            n.each(b, function (b, f) {
	              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
	                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? n.extend(a, d) : d;
	        } },
	          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
	        var g = f[2],
	            h = f[3];d[f[1]] = g.add, h && g.add(function () {
	          c = h;
	        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
	          return e[f[0] + "With"](this === e ? d : this, arguments), this;
	        }, e[f[0] + "With"] = g.fireWith;
	      }), d.promise(e), a && a.call(e, e), e;
	    }, when: function when(a) {
	      var b = 0,
	          c = e.call(arguments),
	          d = c.length,
	          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
	          g = 1 === f ? a : n.Deferred(),
	          h = function h(a, b, c) {
	        return function (d) {
	          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
	        };
	      },
	          i,
	          j,
	          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
	        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
	      }return f || g.resolveWith(k, c), g.promise();
	    } });var I;n.fn.ready = function (a) {
	    return n.ready.promise().done(a), this;
	  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? n.readyWait++ : n.ready(!0);
	    }, ready: function ready(a) {
	      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
	    } });function J() {
	    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
	  }n.ready.promise = function (b) {
	    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
	  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === n.type(c)) {
	      e = !0;for (h in c) {
	        K(a, b, h, c[h], !0, f, g);
	      }
	    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
	      return j.call(n(a), c);
	    })), b)) for (; i > h; h++) {
	      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  },
	      L = function L(a) {
	    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	  };function M() {
	    this.expando = n.expando + M.uid++;
	  }M.uid = 1, M.prototype = { register: function register(a, b) {
	      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
	    }, cache: function cache(a) {
	      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
	    }, set: function set(a, b, c) {
	      var d,
	          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
	        e[d] = b[d];
	      }return e;
	    }, get: function get(a, b) {
	      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
	    }, access: function access(a, b, c) {
	      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
	    }, remove: function remove(a, b) {
	      var c,
	          d,
	          e,
	          f = a[this.expando];if (void 0 !== f) {
	        if (void 0 === b) this.register(a);else {
	          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
	            delete f[d[c]];
	          }
	        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
	      }
	    }, hasData: function hasData(a) {
	      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
	    } };var N = new M(),
	      O = new M(),
	      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      Q = /[A-Z]/g;function R(a, b, c) {
	    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
	      try {
	        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
	      } catch (e) {}O.set(a, b, c);
	    } else c = void 0;return c;
	  }n.extend({ hasData: function hasData(a) {
	      return O.hasData(a) || N.hasData(a);
	    }, data: function data(a, b, c) {
	      return O.access(a, b, c);
	    }, removeData: function removeData(a, b) {
	      O.remove(a, b);
	    }, _data: function _data(a, b, c) {
	      return N.access(a, b, c);
	    }, _removeData: function _removeData(a, b) {
	      N.remove(a, b);
	    } }), n.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
	          c = g.length;while (c--) {
	            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
	          }N.set(f, "hasDataAttrs", !0);
	        }return e;
	      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
	        O.set(this, a);
	      }) : K(this, function (b) {
	        var c, d;if (f && void 0 === b) {
	          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
	        } else d = n.camelCase(a), this.each(function () {
	          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
	        });
	      }, null, b, arguments.length > 1, null, !0);
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        O.remove(this, a);
	      });
	    } }), n.extend({ queue: function queue(a, b, c) {
	      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = n.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = n._queueHooks(a, b),
	          g = function g() {
	        n.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
	          N.remove(a, [b + "queue", c]);
	        }) });
	    } }), n.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
	      });
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        n.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = n.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
	        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
	      }return h(), e.promise(b);
	    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
	      U = ["Top", "Right", "Bottom", "Left"],
	      V = function V(a, b) {
	    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
	  };function W(a, b, c, d) {
	    var e,
	        f = 1,
	        g = 20,
	        h = d ? function () {
	      return d.cur();
	    } : function () {
	      return n.css(a, b, "");
	    },
	        i = h(),
	        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
	        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
	      j = j || k[3], c = c || [], k = +i || 1;do {
	        f = f || ".5", k /= f, n.style(a, b, k + j);
	      } while (f !== (f = h() / i) && 1 !== f && --g);
	    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	  }var X = /^(?:checkbox|radio)$/i,
	      Y = /<([\w:-]+)/,
	      Z = /^$|\/(?:java|ecma)script/i,
	      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
	    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	  }function aa(a, b) {
	    for (var c = 0, d = a.length; d > c; c++) {
	      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
	    }
	  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
	    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
	      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
	        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
	          g = g.lastChild;
	        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
	      } else m.push(b.createTextNode(f));
	    }l.textContent = "", o = 0;while (f = m[o++]) {
	      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
	        k = 0;while (f = g[k++]) {
	          Z.test(f.type || "") && c.push(f);
	        }
	      }
	    }return l;
	  }!function () {
	    var a = d.createDocumentFragment(),
	        b = a.appendChild(d.createElement("div")),
	        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	  }();var da = /^key/,
	      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
	    return !0;
	  }function ha() {
	    return !1;
	  }function ia() {
	    try {
	      return d.activeElement;
	    } catch (a) {}
	  }function ja(a, b, c, d, e, f) {
	    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
	      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
	        ja(a, h, c, d, b[h], f);
	      }return a;
	    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
	      return n().off(a), g.apply(this, arguments);
	    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
	      n.event.add(this, b, e, d, c);
	    });
	  }n.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = N.get(a);if (r) {
	        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
	          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
	        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
	          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
	        }
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
	        b = (b || "").match(G) || [""], j = b.length;while (j--) {
	          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
	            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
	              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
	            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
	          } else for (o in i) {
	            n.event.remove(a, o + b[j], c, d, !0);
	          }
	        }n.isEmptyObject(i) && N.remove(a, "handle events");
	      }
	    }, dispatch: function dispatch(a) {
	      a = n.event.fix(a);var b,
	          c,
	          d,
	          f,
	          g,
	          h = [],
	          i = e.call(arguments),
	          j = (N.get(this, "events") || {})[a.type] || [],
	          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
	        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
	          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
	            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
	          }
	        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g = [],
	          h = b.delegateCount,
	          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
	        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
	          for (d = [], c = 0; h > c; c++) {
	            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
	          }d.length && g.push({ elem: i, handlers: d });
	        }
	      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
	    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
	        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
	      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
	        var c,
	            e,
	            f,
	            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
	      } }, fix: function fix(a) {
	      if (a[n.expando]) return a;var b,
	          c,
	          e,
	          f = a.type,
	          g = a,
	          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
	        c = e[b], a[c] = g[c];
	      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
	        }, _default: function _default(a) {
	          return n.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } } }, n.removeEvent = function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c);
	  }, n.Event = function (a, b) {
	    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	      } };
	  }), n.fn.extend({ on: function on(a, b, c, d) {
	      return ja(this, a, b, c, d);
	    }, one: function one(a, b, c, d) {
	      return ja(this, a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
	        for (e in a) {
	          this.off(e, b, a[e]);
	        }return this;
	      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
	        n.event.remove(this, a, c, b);
	      });
	    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	      la = /<script|<style|<link/i,
	      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      na = /^true\/(.*)/,
	      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
	    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	  }function qa(a) {
	    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	  }function ra(a) {
	    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	  }function sa(a, b) {
	    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
	      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
	        delete g.handle, g.events = {};for (e in j) {
	          for (c = 0, d = j[e].length; d > c; c++) {
	            n.event.add(b, e, j[e][c]);
	          }
	        }
	      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
	    }
	  }function ta(a, b) {
	    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	  }function ua(a, b, c, d) {
	    b = f.apply([], b);var e,
	        g,
	        h,
	        i,
	        j,
	        k,
	        m = 0,
	        o = a.length,
	        p = o - 1,
	        q = b[0],
	        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
	      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
	    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
	      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
	        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
	      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
	        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
	      }
	    }return a;
	  }function va(a, b, c) {
	    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
	      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
	    }return a;
	  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
	      return a.replace(ka, "<$1></$2>");
	    }, clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = a.cloneNode(!0),
	          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
	        ta(f[d], g[d]);
	      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
	        sa(f[d], g[d]);
	      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
	    }, cleanData: function cleanData(a) {
	      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
	        if (L(c)) {
	          if (b = c[N.expando]) {
	            if (b.events) for (d in b.events) {
	              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
	            }c[N.expando] = void 0;
	          }c[O.expando] && (c[O.expando] = void 0);
	        }
	      }
	    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
	      return va(this, a, !0);
	    }, remove: function remove(a) {
	      return va(this, a);
	    }, text: function text(a) {
	      return K(this, function (a) {
	        return void 0 === a ? n.text(this) : this.empty().each(function () {
	          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
	        });
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return ua(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = pa(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return ua(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = pa(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return ua(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return ua(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) {
	        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
	      }return this;
	    }, clone: function clone(a, b) {
	      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
	        return n.clone(this, a, b);
	      });
	    }, html: function html(a) {
	      return K(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
	          a = n.htmlPrefilter(a);try {
	            for (; d > c; c++) {
	              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
	            }b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = [];return ua(this, arguments, function (b) {
	        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
	      }, a);
	    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    n.fn[a] = function (a) {
	      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
	        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
	      }return this.pushStack(d);
	    };
	  });var wa,
	      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
	    var c = n(b.createElement(a)).appendTo(b.body),
	        d = n.css(c[0], "display");return c.detach(), d;
	  }function za(a) {
	    var b = d,
	        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
	  }var Aa = /^margin/,
	      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
	      Ca = function Ca(b) {
	    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	  },
	      Da = function Da(a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) {
	      g[f] = a.style[f], a.style[f] = b[f];
	    }e = c.apply(a, d || []);for (f in b) {
	      a.style[f] = g[f];
	    }return e;
	  },
	      Ea = d.documentElement;!function () {
	    var b,
	        c,
	        e,
	        f,
	        g = d.createElement("div"),
	        h = d.createElement("div");if (h.style) {
	      (function () {
	        var i = function i() {
	          h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
	        };
	
	        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
	            return i(), b;
	          }, boxSizingReliable: function boxSizingReliable() {
	            return null == c && i(), c;
	          }, pixelMarginRight: function pixelMarginRight() {
	            return null == c && i(), e;
	          }, reliableMarginLeft: function reliableMarginLeft() {
	            return null == c && i(), f;
	          }, reliableMarginRight: function reliableMarginRight() {
	            var b,
	                c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
	          } });
	      })();
	    }
	  }();function Fa(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
	  }function Ga(a, b) {
	    return { get: function get() {
	        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }var Ha = /^(none|table(?!-c[ea]).+)/,
	      Ia = { position: "absolute", visibility: "hidden", display: "block" },
	      Ja = { letterSpacing: "0", fontWeight: "400" },
	      Ka = ["Webkit", "O", "Moz", "ms"],
	      La = d.createElement("div").style;function Ma(a) {
	    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
	        c = Ka.length;while (c--) {
	      if (a = Ka[c] + b, a in La) return a;
	    }
	  }function Na(a, b, c) {
	    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	  }function Oa(a, b, c, d, e) {
	    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
	      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
	    }return g;
	  }function Pa(a, b, c) {
	    var d = !0,
	        e = "width" === b ? a.offsetWidth : a.offsetHeight,
	        f = Ca(a),
	        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
	      if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
	    }return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
	  }function Qa(a, b) {
	    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
	      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
	    }for (g = 0; h > g; g++) {
	      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
	    }return a;
	  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = Fa(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = n.camelCase(b),
	            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
	    } }), n.each(["height", "width"], function (a, b) {
	    n.cssHooks[b] = { get: function get(a, c, d) {
	        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
	          return Pa(a, b, d);
	        }) : Pa(a, b, d) : void 0;
	      }, set: function set(a, c, d) {
	        var e,
	            f = d && Ca(a),
	            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
	      } };
	  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
	    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
	      return a.getBoundingClientRect().left;
	    })) + "px" : void 0;
	  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
	    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
	  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    n.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
	          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
	        }return e;
	      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
	  }), n.fn.extend({ css: function css(a, b) {
	      return K(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (n.isArray(b)) {
	          for (d = Ca(a), e = b.length; e > g; g++) {
	            f[b[g]] = n.css(a, b[g], !1, d);
	          }return f;
	        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
	      }, a, b, arguments.length > 1);
	    }, show: function show() {
	      return Qa(this, !0);
	    }, hide: function hide() {
	      return Qa(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        V(this) ? n(this).show() : n(this).hide();
	      });
	    } });function Ra(a, b, c, d, e) {
	    return new Ra.prototype.init(a, b, c, d, e);
	  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
	    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
	        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
	      }, set: function set(a) {
	        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
	      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, n.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return .5 - Math.cos(a * Math.PI) / 2;
	    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
	      Ta,
	      Ua = /^(?:toggle|show|hide)$/,
	      Va = /queueHooks$/;function Wa() {
	    return a.setTimeout(function () {
	      Sa = void 0;
	    }), Sa = n.now();
	  }function Xa(a, b) {
	    var c,
	        d = 0,
	        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
	      c = U[d], e["margin" + c] = e["padding" + c] = a;
	    }return b && (e.opacity = e.width = a), e;
	  }function Ya(a, b, c) {
	    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
	      if (d = e[f].call(c, b, a)) return d;
	    }
	  }function Za(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l = this,
	        m = {},
	        o = a.style,
	        p = a.nodeType && V(a),
	        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
	      h.unqueued || i();
	    }), h.unqueued++, l.always(function () {
	      l.always(function () {
	        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
	      });
	    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
	      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
	    }));for (d in b) {
	      if (e = b[d], Ua.exec(e)) {
	        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
	          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
	        }m[d] = q && q[d] || n.style(a, d);
	      } else j = void 0;
	    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
	      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
	        n(a).hide();
	      }), l.done(function () {
	        var b;N.remove(a, "fxshow");for (b in m) {
	          n.style(a, b, m[b]);
	        }
	      });for (d in m) {
	        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
	      }
	    }
	  }function $a(a, b) {
	    var c, d, e, f, g;for (c in a) {
	      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
	        f = g.expand(f), delete a[d];for (c in f) {
	          c in a || (a[c] = f[c], b[c] = e);
	        }
	      } else b[d] = e;
	    }
	  }function _a(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = _a.prefilters.length,
	        h = n.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = function i() {
	      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
	        j.tweens[g].run(f);
	      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
	    },
	        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
	          j.tweens[c].run(1);
	        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
	      } }),
	        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
	      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
	    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
	        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
	      }] }, tweener: function tweener(a, b) {
	      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
	        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
	      }
	    }, prefilters: [Za], prefilter: function prefilter(a, b) {
	      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
	    } }), n.speed = function (a, b, c) {
	    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
	      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
	    }, d;
	  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = n.isEmptyObject(a),
	          f = n.speed(b, c, d),
	          g = function g() {
	        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
	      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = n.timers,
	            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
	          g[e] && g[e].stop && Va.test(e) && d(g[e]);
	        }for (e = f.length; e--;) {
	          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
	        }!b && c || n.dequeue(this, a);
	      });
	    }, finish: function finish(a) {
	      return a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = N.get(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = n.timers,
	            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
	          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
	        }for (b = 0; g > b; b++) {
	          d[b] && d[b].finish && d[b].finish.call(this);
	        }delete c.finish;
	      });
	    } }), n.each(["toggle", "show", "hide"], function (a, b) {
	    var c = n.fn[b];n.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
	    };
	  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    n.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), n.timers = [], n.fx.tick = function () {
	    var a,
	        b = 0,
	        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
	      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
	    }c.length || n.fx.stop(), Sa = void 0;
	  }, n.fx.timer = function (a) {
	    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	  }, n.fx.interval = 13, n.fx.start = function () {
	    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
	  }, n.fx.stop = function () {
	    a.clearInterval(Ta), Ta = null;
	  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
	    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
	      var e = a.setTimeout(c, b);d.stop = function () {
	        a.clearTimeout(e);
	      };
	    });
	  }, function () {
	    var a = d.createElement("input"),
	        b = d.createElement("select"),
	        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
	  }();var ab,
	      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
	      return K(this, n.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        n.removeAttr(this, a);
	      });
	    } }), n.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
	            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
	          }
	        } } }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d,
	          e = 0,
	          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
	        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
	      }
	    } }), ab = { set: function set(a, b, c) {
	      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
	    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
	      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
	    };
	  });var cb = /^(?:input|select|textarea|button)$/i,
	      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
	      return K(this, n.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return this.each(function () {
	        delete this[n.propFix[a] || a];
	      });
	    } }), n.extend({ prop: function prop(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	    }, propHooks: { tabIndex: { get: function get(a) {
	          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
	        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
	    }, set: function set(a) {
	      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
	    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    n.propFix[this.toLowerCase()] = this;
	  });var eb = /[\t\r\n\f]/g;function fb(a) {
	    return a.getAttribute && a.getAttribute("class") || "";
	  }n.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (n.isFunction(a)) return this.each(function (b) {
	        n(this).addClass(a.call(this, b, fb(this)));
	      });if ("string" == typeof a && a) {
	        b = a.match(G) || [];while (c = this[i++]) {
	          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
	            g = 0;while (f = b[g++]) {
	              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
	            }h = n.trim(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (n.isFunction(a)) return this.each(function (b) {
	        n(this).removeClass(a.call(this, b, fb(this)));
	      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
	        b = a.match(G) || [];while (c = this[i++]) {
	          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
	            g = 0;while (f = b[g++]) {
	              while (d.indexOf(" " + f + " ") > -1) {
	                d = d.replace(" " + f + " ", " ");
	              }
	            }h = n.trim(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
	        n(this).toggleClass(a.call(this, c, fb(this), b), b);
	      }) : this.each(function () {
	        var b, d, e, f;if ("string" === c) {
	          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
	            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	          }
	        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
	      });
	    }, hasClass: function hasClass(a) {
	      var b,
	          c,
	          d = 0;b = " " + a + " ";while (c = this[d++]) {
	        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
	      }return !1;
	    } });var gb = /\r/g,
	      hb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
	          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
	            return null == a ? "" : a + "";
	          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
	      }
	    } }), n.extend({ valHooks: { option: { get: function get(a) {
	          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
	        } }, select: { get: function get(a) {
	          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
	            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
	              if (b = n(c).val(), f) return b;g.push(b);
	            }
	          }return g;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = n.makeArray(b),
	              g = e.length;while (g--) {
	            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
	          }return c || (a.selectedIndex = -1), f;
	        } } } }), n.each(["radio", "checkbox"], function () {
	    n.valHooks[this] = { set: function set(a, b) {
	        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
	      } }, l.checkOn || (n.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  });var ib = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
	      var g,
	          h,
	          i,
	          j,
	          l,
	          m,
	          o,
	          p = [e || d],
	          q = k.call(b, "type") ? b.type : b,
	          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
	        if (!f && !o.noBubble && !n.isWindow(e)) {
	          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
	            p.push(h), i = h;
	          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
	        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
	          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
	        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
	      }
	    }, simulate: function simulate(a, b, c) {
	      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b);
	    } }), n.fn.extend({ trigger: function trigger(a, b) {
	      return this.each(function () {
	        n.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
	    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
	    n.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), n.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      n.event.simulate(b, a.target, n.event.fix(a));
	    };n.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
	      } };
	  });var jb = a.location,
	      kb = n.now(),
	      lb = /\?/;n.parseJSON = function (a) {
	    return JSON.parse(a + "");
	  }, n.parseXML = function (b) {
	    var c;if (!b || "string" != typeof b) return null;try {
	      c = new a.DOMParser().parseFromString(b, "text/xml");
	    } catch (d) {
	      c = void 0;
	    }return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
	  };var mb = /#.*$/,
	      nb = /([?&])_=[^&]*/,
	      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      qb = /^(?:GET|HEAD)$/,
	      rb = /^\/\//,
	      sb = {},
	      tb = {},
	      ub = "*/".concat("*"),
	      vb = d.createElement("a");vb.href = jb.href;function wb(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
	        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	      }
	    };
	  }function xb(a, b, c, d) {
	    var e = {},
	        f = a === tb;function g(h) {
	      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i;
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function yb(a, b) {
	    var c,
	        d,
	        e = n.ajaxSettings.flatOptions || {};for (c in b) {
	      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
	    }return d && n.extend(!0, a, d), a;
	  }function zb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) {
	      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
	    }if (d) for (e in h) {
	      if (h[e] && h[e].test(d)) {
	        i.unshift(e);break;
	      }
	    }if (i[0] in c) f = i[0];else {
	      for (e in c) {
	        if (!i[0] || a.converters[e + " " + i[0]]) {
	          f = e;break;
	        }g || (g = e);
	      }f = f || g;
	    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	  }function Ab(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
	      j[g.toLowerCase()] = a.converters[g];
	    }f = k.shift();while (f) {
	      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
	          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
	            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	          }
	        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
	          b = g(b);
	        } catch (l) {
	          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	        }
	      }
	    }return { state: "success", data: b };
	  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
	    }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function ajax(b, c) {
	      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m = n.ajaxSetup({}, c),
	          o = m.context || m,
	          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
	          q = n.Deferred(),
	          r = n.Callbacks("once memory"),
	          s = m.statusCode || {},
	          t = {},
	          u = {},
	          v = 0,
	          w = "canceled",
	          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (2 === v) {
	            if (!h) {
	              h = {};while (b = ob.exec(g)) {
	                h[b[1].toLowerCase()] = b[2];
	              }
	            }b = h[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return 2 === v ? g : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
	        }, overrideMimeType: function overrideMimeType(a) {
	          return v || (m.mimeType = a), this;
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (2 > v) for (b in a) {
	            s[b] = [s[b], a[b]];
	          } else x.always(a[x.status]);return this;
	        }, abort: function abort(a) {
	          var b = a || w;return e && e.abort(b), z(0, b), this;
	        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
	        j = d.createElement("a");try {
	          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
	        } catch (y) {
	          m.crossDomain = !0;
	        }
	      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
	        x.setRequestHeader(l, m.headers[l]);
	      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
	        x[l](m[l]);
	      }if (e = xb(tb, m, c, x)) {
	        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
	          x.abort("timeout");
	        }, m.timeout));try {
	          v = 1, e.send(t, z);
	        } catch (y) {
	          if (!(2 > v)) throw y;z(-1, y);
	        }
	      } else z(-1, "No Transport");function z(b, c, d, h) {
	        var j,
	            l,
	            t,
	            u,
	            w,
	            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
	      }return x;
	    }, getJSON: function getJSON(a, b, c) {
	      return n.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return n.get(a, void 0, b, "script");
	    } }), n.each(["get", "post"], function (a, b) {
	    n[b] = function (a, c, d, e) {
	      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
	    };
	  }), n._evalUrl = function (a) {
	    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	  }, n.fn.extend({ wrapAll: function wrapAll(a) {
	      var b;return n.isFunction(a) ? this.each(function (b) {
	        n(this).wrapAll(a.call(this, b));
	      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	        var a = this;while (a.firstElementChild) {
	          a = a.firstElementChild;
	        }return a;
	      }).append(this)), this);
	    }, wrapInner: function wrapInner(a) {
	      return n.isFunction(a) ? this.each(function (b) {
	        n(this).wrapInner(a.call(this, b));
	      }) : this.each(function () {
	        var b = n(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = n.isFunction(a);return this.each(function (c) {
	        n(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
	      }).end();
	    } }), n.expr.filters.hidden = function (a) {
	    return !n.expr.filters.visible(a);
	  }, n.expr.filters.visible = function (a) {
	    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
	  };var Bb = /%20/g,
	      Cb = /\[\]$/,
	      Db = /\r?\n/g,
	      Eb = /^(?:submit|button|image|reset|file)$/i,
	      Fb = /^(?:input|select|textarea|keygen)/i;function Gb(a, b, c, d) {
	    var e;if (n.isArray(b)) n.each(b, function (b, e) {
	      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
	      Gb(a + "[" + e + "]", b[e], c, d);
	    }
	  }n.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
	    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) {
	      Gb(c, a[c], b, e);
	    }return d.join("&").replace(Bb, "+");
	  }, n.fn.extend({ serialize: function serialize() {
	      return n.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
	      }).map(function (a, b) {
	        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
	          return { name: b.name, value: a.replace(Db, "\r\n") };
	        }) : { name: b.name, value: c.replace(Db, "\r\n") };
	      }).get();
	    } }), n.ajaxSettings.xhr = function () {
	    try {
	      return new a.XMLHttpRequest();
	    } catch (b) {}
	  };var Hb = { 0: 200, 1223: 204 },
	      Ib = n.ajaxSettings.xhr();l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
	    var _c, d;return l.cors || Ib && !b.crossDomain ? { send: function send(e, f) {
	        var g,
	            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
	          h[g] = b.xhrFields[g];
	        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
	          h.setRequestHeader(g, e[g]);
	        }_c = function c(a) {
	          return function () {
	            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
	          };
	        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
	          4 === h.readyState && a.setTimeout(function () {
	            _c && d();
	          });
	        }, _c = _c("abort");try {
	          h.send(b.hasContent && b.data || null);
	        } catch (i) {
	          if (_c) throw i;
	        }
	      }, abort: function abort() {
	        _c && _c();
	      } } : void 0;
	  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
	        return n.globalEval(a), a;
	      } } }), n.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	  }), n.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b, _c2;return { send: function send(e, f) {
	          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
	            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
	          }), d.head.appendChild(b[0]);
	        }, abort: function abort() {
	          _c2 && _c2();
	        } };
	    }
	  });var Jb = [],
	      Kb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = Jb.pop() || n.expando + "_" + kb++;return this[a] = !0, a;
	    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return g || n.error(e + " was not called"), g[0];
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script") : void 0;
	  }), n.parseHTML = function (a, b, c) {
	    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
	        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
	  };var Lb = n.fn.load;n.fn.load = function (a, b, c) {
	    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
	      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
	    }).always(c && function (a, b) {
	      g.each(function () {
	        c.apply(this, f || [a.responseText, b, a]);
	      });
	    }), this;
	  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    n.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), n.expr.filters.animated = function (a) {
	    return n.grep(n.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };function Mb(a) {
	    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	  }n.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = n.css(a, "position"),
	          l = n(a),
	          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	    } }, n.fn.extend({ offset: function offset(a) {
	      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
	        n.offset.setOffset(this, a, b);
	      });var b,
	          c,
	          d = this[0],
	          e = { top: 0, left: 0 },
	          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = this[0],
	            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
	          a = a.offsetParent;
	        }return a || Ea;
	      });
	    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
	    var c = "pageYOffset" === b;n.fn[a] = function (d) {
	      return K(this, function (a, d, e) {
	        var f = Mb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
	      }, a, d, arguments.length);
	    };
	  }), n.each(["top", "left"], function (a, b) {
	    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
	      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
	    });
	  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
	    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      n.fn[d] = function (d, e) {
	        var f = arguments.length && (c || "boolean" != typeof d),
	            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
	          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
	        }, b, f ? d : void 0, f, null);
	      };
	    });
	  }), n.fn.extend({ bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    }, size: function size() {
	      return this.length;
	    } }), n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(3) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return n;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Nb = a.jQuery,
	      Ob = a.$;return n.noConflict = function (b) {
	    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
	  }, b || (a.jQuery = a.$ = n), n;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
	+function (a) {
	    "use strict";
	
	    function b() {
	        var a = document.createElement("bootstrap"),
	            b = {
	            WebkitTransition: "webkitTransitionEnd",
	            MozTransition: "transitionend",
	            OTransition: "oTransitionEnd otransitionend",
	            transition: "transitionend"
	        };
	        for (var c in b) {
	            if (void 0 !== a.style[c]) return {
	                end: b[c]
	            };
	        }return !1;
	    }
	    a.fn.emulateTransitionEnd = function (b) {
	        var c = !1,
	            d = this;
	        a(this).one("bsTransitionEnd", function () {
	            c = !0;
	        });
	        var e = function e() {
	            c || a(d).trigger(a.support.transition.end);
	        };
	        return setTimeout(e, b), this;
	    }, a(function () {
	        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
	            bindType: a.support.transition.end,
	            delegateType: a.support.transition.end,
	            handle: function handle(b) {
	                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
	            }
	        });
	    });
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var c = a(this),
	                e = c.data("bs.alert");
	            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
	        });
	    }
	    var c = '[data-dismiss="alert"]',
	        d = function d(b) {
	        a(b).on("click", c, this.close);
	    };
	    d.VERSION = "3.2.0", d.prototype.close = function (b) {
	        function c() {
	            f.detach().trigger("closed.bs.alert").remove();
	        }
	        var d = a(this),
	            e = d.attr("data-target");
	        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
	        var f = a(e);
	        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c());
	    };
	    var e = a.fn.alert;
	    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
	        return a.fn.alert = e, this;
	    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.button"),
	                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
	            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
	        });
	    }
	    var c = function c(b, d) {
	        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
	    };
	    c.VERSION = "3.2.0", c.DEFAULTS = {
	        loadingText: "loading..."
	    }, c.prototype.setState = function (b) {
	        var c = "disabled",
	            d = this.$element,
	            e = d.is("input") ? "val" : "html",
	            f = d.data();
	        b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function () {
	            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
	        }, this), 0);
	    }, c.prototype.toggle = function () {
	        var a = !0,
	            b = this.$element.closest('[data-toggle="buttons"]');
	        if (b.length) {
	            var c = this.$element.find("input");
	            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
	        }
	        a && this.$element.toggleClass("active");
	    };
	    var d = a.fn.button;
	    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
	        return a.fn.button = d, this;
	    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
	        var d = a(c.target);
	        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
	    });
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.carousel"),
	                f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
	                g = "string" == typeof b ? b : f.slide;
	            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
	        });
	    }
	    var c = function c(b, _c) {
	        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
	    };
	    c.VERSION = "3.2.0", c.DEFAULTS = {
	        interval: 5e3,
	        pause: "hover",
	        wrap: !0
	    }, c.prototype.keydown = function (a) {
	        switch (a.which) {
	            case 37:
	                this.prev();
	                break;
	            case 39:
	                this.next();
	                break;
	            default:
	                return;
	        }
	        a.preventDefault();
	    }, c.prototype.cycle = function (b) {
	        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
	    }, c.prototype.getItemIndex = function (a) {
	        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
	    }, c.prototype.to = function (b) {
	        var c = this,
	            d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
	        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
	            c.to(b);
	        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
	    }, c.prototype.pause = function (b) {
	        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
	    }, c.prototype.next = function () {
	        return this.sliding ? void 0 : this.slide("next");
	    }, c.prototype.prev = function () {
	        return this.sliding ? void 0 : this.slide("prev");
	    }, c.prototype.slide = function (b, c) {
	        var d = this.$element.find(".item.active"),
	            e = c || d[b](),
	            f = this.interval,
	            g = "next" == b ? "left" : "right",
	            h = "next" == b ? "first" : "last",
	            i = this;
	        if (!e.length) {
	            if (!this.options.wrap) return;
	            e = this.$element.find(".item")[h]();
	        }
	        if (e.hasClass("active")) return this.sliding = !1;
	        var j = e[0],
	            k = a.Event("slide.bs.carousel", {
	            relatedTarget: j,
	            direction: g
	        });
	        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
	            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
	                this.$indicators.find(".active").removeClass("active");
	                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
	                l && l.addClass("active");
	            }
	            var m = a.Event("slid.bs.carousel", {
	                relatedTarget: j,
	                direction: g
	            });
	            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function () {
	                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
	                    i.$element.trigger(m);
	                }, 0);
	            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this;
	        }
	    };
	    var d = a.fn.carousel;
	    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
	        return a.fn.carousel = d, this;
	    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (c) {
	        var d,
	            e = a(this),
	            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
	        if (f.hasClass("carousel")) {
	            var g = a.extend({}, f.data(), e.data()),
	                h = e.attr("data-slide-to");
	            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
	        }
	    }), a(window).on("load", function () {
	        a('[data-ride="carousel"]').each(function () {
	            var c = a(this);
	            b.call(c, c.data());
	        });
	    });
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.collapse"),
	                f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);
	            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]();
	        });
	    }
	    var c = function c(b, d) {
	        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
	    };
	    c.VERSION = "3.2.0", c.DEFAULTS = {
	        toggle: !0
	    }, c.prototype.dimension = function () {
	        var a = this.$element.hasClass("width");
	        return a ? "width" : "height";
	    }, c.prototype.show = function () {
	        if (!this.transitioning && !this.$element.hasClass("in")) {
	            var c = a.Event("show.bs.collapse");
	            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
	                var d = this.$parent && this.$parent.find("> .panel > .in");
	                if (d && d.length) {
	                    var e = d.data("bs.collapse");
	                    if (e && e.transitioning) return;
	                    b.call(d, "hide"), e || d.data("bs.collapse", null);
	                }
	                var f = this.dimension();
	                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
	                var g = function g() {
	                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
	                };
	                if (!a.support.transition) return g.call(this);
	                var h = a.camelCase(["scroll", f].join("-"));
	                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h]);
	            }
	        }
	    }, c.prototype.hide = function () {
	        if (!this.transitioning && this.$element.hasClass("in")) {
	            var b = a.Event("hide.bs.collapse");
	            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
	                var c = this.dimension();
	                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
	                var d = function d() {
	                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
	                };
	                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
	            }
	        }
	    }, c.prototype.toggle = function () {
	        this[this.$element.hasClass("in") ? "hide" : "show"]();
	    };
	    var d = a.fn.collapse;
	    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function () {
	        return a.fn.collapse = d, this;
	    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (c) {
	        var d,
	            e = a(this),
	            f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
	            g = a(f),
	            h = g.data("bs.collapse"),
	            i = h ? "toggle" : e.data(),
	            j = e.attr("data-parent"),
	            k = j && a(j);
	        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i);
	    });
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        b && 3 === b.which || (a(e).remove(), a(f).each(function () {
	            var d = c(a(this)),
	                e = {
	                relatedTarget: this
	            };
	            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
	        }));
	    }
	    function c(b) {
	        var c = b.attr("data-target");
	        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
	        var d = c && a(c);
	        return d && d.length ? d : b.parent();
	    }
	    function d(b) {
	        return this.each(function () {
	            var c = a(this),
	                d = c.data("bs.dropdown");
	            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
	        });
	    }
	    var e = ".dropdown-backdrop",
	        f = '[data-toggle="dropdown"]',
	        g = function g(b) {
	        a(b).on("click.bs.dropdown", this.toggle);
	    };
	    g.VERSION = "3.2.0", g.prototype.toggle = function (d) {
	        var e = a(this);
	        if (!e.is(".disabled, :disabled")) {
	            var f = c(e),
	                g = f.hasClass("open");
	            if (b(), !g) {
	                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
	                var h = {
	                    relatedTarget: this
	                };
	                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
	                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
	            }
	            return !1;
	        }
	    }, g.prototype.keydown = function (b) {
	        if (/(38|40|27)/.test(b.keyCode)) {
	            var d = a(this);
	            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
	                var e = c(d),
	                    g = e.hasClass("open");
	                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
	                var h = " li:not(.divider):visible a",
	                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
	                if (i.length) {
	                    var j = i.index(i.filter(":focus"));
	                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
	                }
	            }
	        }
	    };
	    var h = a.fn.dropdown;
	    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
	        return a.fn.dropdown = h, this;
	    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
	        a.stopPropagation();
	    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown);
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b, d) {
	        return this.each(function () {
	            var e = a(this),
	                f = e.data("bs.modal"),
	                g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);
	            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
	        });
	    }
	    var c = function c(b, _c2) {
	        this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
	            this.$element.trigger("loaded.bs.modal");
	        }, this));
	    };
	    c.VERSION = "3.2.0", c.DEFAULTS = {
	        backdrop: !0,
	        keyboard: !0,
	        show: !0
	    }, c.prototype.toggle = function (a) {
	        return this.isShown ? this.hide() : this.show(a);
	    }, c.prototype.show = function (b) {
	        var c = this,
	            d = a.Event("show.bs.modal", {
	            relatedTarget: b
	        });
	        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
	            var d = a.support.transition && c.$element.hasClass("fade");
	            c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
	            var e = a.Event("shown.bs.modal", {
	                relatedTarget: b
	            });
	            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
	                c.$element.trigger("focus").trigger(e);
	            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e);
	        }));
	    }, c.prototype.hide = function (b) {
	        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
	    }, c.prototype.enforceFocus = function () {
	        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
	            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
	        }, this));
	    }, c.prototype.escape = function () {
	        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
	            27 == a.which && this.hide();
	        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
	    }, c.prototype.hideModal = function () {
	        var a = this;
	        this.$element.hide(), this.backdrop(function () {
	            a.$element.trigger("hidden.bs.modal");
	        });
	    }, c.prototype.removeBackdrop = function () {
	        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	    }, c.prototype.backdrop = function (b) {
	        var c = this,
	            d = this.$element.hasClass("fade") ? "fade" : "";
	        if (this.isShown && this.options.backdrop) {
	            var e = a.support.transition && d;
	            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
	                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
	            }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
	            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b();
	        } else if (!this.isShown && this.$backdrop) {
	            this.$backdrop.removeClass("in");
	            var f = function f() {
	                c.removeBackdrop(), b && b();
	            };
	            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f();
	        } else b && b();
	    }, c.prototype.checkScrollbar = function () {
	        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
	    }, c.prototype.setScrollbar = function () {
	        var a = parseInt(this.$body.css("padding-right") || 0, 10);
	        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth);
	    }, c.prototype.resetScrollbar = function () {
	        this.$body.css("padding-right", "");
	    }, c.prototype.measureScrollbar = function () {
	        var a = document.createElement("div");
	        a.className = "modal-scrollbar-measure", this.$body.append(a);
	        var b = a.offsetWidth - a.clientWidth;
	        return this.$body[0].removeChild(a), b;
	    };
	    var d = a.fn.modal;
	    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
	        return a.fn.modal = d, this;
	    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
	        var d = a(this),
	            e = d.attr("href"),
	            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
	            g = f.data("bs.modal") ? "toggle" : a.extend({
	            remote: !/#/.test(e) && e
	        }, f.data(), d.data());
	        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
	            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
	                d.is(":visible") && d.trigger("focus");
	            });
	        }), b.call(f, g, this);
	    });
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.tooltip"),
	                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
	            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
	        });
	    }
	    var c = function c(a, b) {
	        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
	    };
	    c.VERSION = "3.2.0", c.DEFAULTS = {
	        animation: !0,
	        placement: "top",
	        selector: !1,
	        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	        trigger: "hover focus",
	        title: "",
	        delay: 0,
	        html: !1,
	        container: !1,
	        viewport: {
	            selector: "body",
	            padding: 0
	        }
	    }, c.prototype.init = function (b, c, d) {
	        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
	        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
	            var g = e[f];
	            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
	                var h = "hover" == g ? "mouseenter" : "focusin",
	                    i = "hover" == g ? "mouseleave" : "focusout";
	                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
	            }
	        }
	        this.options.selector ? this._options = a.extend({}, this.options, {
	            trigger: "manual",
	            selector: ""
	        }) : this.fixTitle();
	    }, c.prototype.getDefaults = function () {
	        return c.DEFAULTS;
	    }, c.prototype.getOptions = function (b) {
	        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
	            show: b.delay,
	            hide: b.delay
	        }), b;
	    }, c.prototype.getDelegateOptions = function () {
	        var b = {},
	            c = this.getDefaults();
	        return this._options && a.each(this._options, function (a, d) {
	            c[a] != d && (b[a] = d);
	        }), b;
	    }, c.prototype.enter = function (b) {
	        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
	        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
	            "in" == c.hoverState && c.show();
	        }, c.options.delay.show)) : c.show();
	    }, c.prototype.leave = function (b) {
	        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
	        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
	            "out" == c.hoverState && c.hide();
	        }, c.options.delay.hide)) : c.hide();
	    }, c.prototype.show = function () {
	        var b = a.Event("show.bs." + this.type);
	        if (this.hasContent() && this.enabled) {
	            this.$element.trigger(b);
	            var c = a.contains(document.documentElement, this.$element[0]);
	            if (b.isDefaultPrevented() || !c) return;
	            var d = this,
	                e = this.tip(),
	                f = this.getUID(this.type);
	            this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
	            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
	                h = /\s?auto?\s?/i,
	                i = h.test(g);
	            i && (g = g.replace(h, "") || "top"), e.detach().css({
	                top: 0,
	                left: 0,
	                display: "block"
	            }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
	            var j = this.getPosition(),
	                k = e[0].offsetWidth,
	                l = e[0].offsetHeight;
	            if (i) {
	                var m = g,
	                    n = this.$element.parent(),
	                    o = this.getPosition(n);
	                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g);
	            }
	            var p = this.getCalculatedOffset(g, j, k, l);
	            this.applyPlacement(p, g);
	            var q = function q() {
	                d.$element.trigger("shown.bs." + d.type), d.hoverState = null;
	            };
	            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q();
	        }
	    }, c.prototype.applyPlacement = function (b, c) {
	        var d = this.tip(),
	            e = d[0].offsetWidth,
	            f = d[0].offsetHeight,
	            g = parseInt(d.css("margin-top"), 10),
	            h = parseInt(d.css("margin-left"), 10);
	        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
	            using: function using(a) {
	                d.css({
	                    top: Math.round(a.top),
	                    left: Math.round(a.left)
	                });
	            }
	        }, b), 0), d.addClass("in");
	        var i = d[0].offsetWidth,
	            j = d[0].offsetHeight;
	        "top" == c && j != f && (b.top = b.top + f - j);
	        var k = this.getViewportAdjustedDelta(c, b, i, j);
	        k.left ? b.left += k.left : b.top += k.top;
	        var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
	            m = k.left ? "left" : "top",
	            n = k.left ? "offsetWidth" : "offsetHeight";
	        d.offset(b), this.replaceArrow(l, d[0][n], m);
	    }, c.prototype.replaceArrow = function (a, b, c) {
	        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
	    }, c.prototype.setContent = function () {
	        var a = this.tip(),
	            b = this.getTitle();
	        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
	    }, c.prototype.hide = function () {
	        function b() {
	            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
	        }
	        var c = this,
	            d = this.tip(),
	            e = a.Event("hide.bs." + this.type);
	        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this);
	    }, c.prototype.fixTitle = function () {
	        var a = this.$element;
	        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
	    }, c.prototype.hasContent = function () {
	        return this.getTitle();
	    }, c.prototype.getPosition = function (b) {
	        b = b || this.$element;
	        var c = b[0],
	            d = "BODY" == c.tagName;
	        return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
	            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
	            width: d ? a(window).width() : b.outerWidth(),
	            height: d ? a(window).height() : b.outerHeight()
	        }, d ? {
	            top: 0,
	            left: 0
	        } : b.offset());
	    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
	        return "bottom" == a ? {
	            top: b.top + b.height,
	            left: b.left + b.width / 2 - c / 2
	        } : "top" == a ? {
	            top: b.top - d,
	            left: b.left + b.width / 2 - c / 2
	        } : "left" == a ? {
	            top: b.top + b.height / 2 - d / 2,
	            left: b.left - c
	        } : {
	            top: b.top + b.height / 2 - d / 2,
	            left: b.left + b.width
	        };
	    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
	        var e = {
	            top: 0,
	            left: 0
	        };
	        if (!this.$viewport) return e;
	        var f = this.options.viewport && this.options.viewport.padding || 0,
	            g = this.getPosition(this.$viewport);
	        if (/right|left/.test(a)) {
	            var h = b.top - f - g.scroll,
	                i = b.top + f - g.scroll + d;
	            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
	        } else {
	            var j = b.left - f,
	                k = b.left + f + c;
	            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
	        }
	        return e;
	    }, c.prototype.getTitle = function () {
	        var a,
	            b = this.$element,
	            c = this.options;
	        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
	    }, c.prototype.getUID = function (a) {
	        do {
	            a += ~~(1e6 * Math.random());
	        } while (document.getElementById(a));return a;
	    }, c.prototype.tip = function () {
	        return this.$tip = this.$tip || a(this.options.template);
	    }, c.prototype.arrow = function () {
	        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	    }, c.prototype.validate = function () {
	        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
	    }, c.prototype.enable = function () {
	        this.enabled = !0;
	    }, c.prototype.disable = function () {
	        this.enabled = !1;
	    }, c.prototype.toggleEnabled = function () {
	        this.enabled = !this.enabled;
	    }, c.prototype.toggle = function (b) {
	        var c = this;
	        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
	    }, c.prototype.destroy = function () {
	        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
	    };
	    var d = a.fn.tooltip;
	    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
	        return a.fn.tooltip = d, this;
	    };
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.popover"),
	                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
	            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
	        });
	    }
	    var c = function c(a, b) {
	        this.init("popover", a, b);
	    };
	    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	    c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
	        placement: "right",
	        trigger: "click",
	        content: "",
	        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
	        return c.DEFAULTS;
	    }, c.prototype.setContent = function () {
	        var a = this.tip(),
	            b = this.getTitle(),
	            c = this.getContent();
	        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
	    }, c.prototype.hasContent = function () {
	        return this.getTitle() || this.getContent();
	    }, c.prototype.getContent = function () {
	        var a = this.$element,
	            b = this.options;
	        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
	    }, c.prototype.arrow = function () {
	        return this.$arrow = this.$arrow || this.tip().find(".arrow");
	    }, c.prototype.tip = function () {
	        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
	    };
	    var d = a.fn.popover;
	    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
	        return a.fn.popover = d, this;
	    };
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(c, d) {
	        var e = a.proxy(this.process, this);
	        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process();
	    }
	    function c(c) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.scrollspy"),
	                f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;
	            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
	        });
	    }
	    b.VERSION = "3.2.0", b.DEFAULTS = {
	        offset: 10
	    }, b.prototype.getScrollHeight = function () {
	        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	    }, b.prototype.refresh = function () {
	        var b = "offset",
	            c = 0;
	        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
	        var d = this;
	        this.$body.find(this.selector).map(function () {
	            var d = a(this),
	                e = d.data("target") || d.attr("href"),
	                f = /^#./.test(e) && a(e);
	            return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null;
	        }).sort(function (a, b) {
	            return a[0] - b[0];
	        }).each(function () {
	            d.offsets.push(this[0]), d.targets.push(this[1]);
	        });
	    }, b.prototype.process = function () {
	        var a,
	            b = this.$scrollElement.scrollTop() + this.options.offset,
	            c = this.getScrollHeight(),
	            d = this.options.offset + c - this.$scrollElement.height(),
	            e = this.offsets,
	            f = this.targets,
	            g = this.activeTarget;
	        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
	        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
	        for (a = e.length; a--;) {
	            g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
	        }
	    }, b.prototype.activate = function (b) {
	        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
	            d = a(c).parents("li").addClass("active");
	        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
	    };
	    var d = a.fn.scrollspy;
	    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
	        return a.fn.scrollspy = d, this;
	    }, a(window).on("load.bs.scrollspy.data-api", function () {
	        a('[data-spy="scroll"]').each(function () {
	            var b = a(this);
	            c.call(b, b.data());
	        });
	    });
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.tab");
	            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
	        });
	    }
	    var c = function c(b) {
	        this.element = a(b);
	    };
	    c.VERSION = "3.2.0", c.prototype.show = function () {
	        var b = this.element,
	            c = b.closest("ul:not(.dropdown-menu)"),
	            d = b.data("target");
	        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
	            var e = c.find(".active:last a")[0],
	                f = a.Event("show.bs.tab", {
	                relatedTarget: e
	            });
	            if (b.trigger(f), !f.isDefaultPrevented()) {
	                var g = a(d);
	                this.activate(b.closest("li"), c), this.activate(g, g.parent(), function () {
	                    b.trigger({
	                        type: "shown.bs.tab",
	                        relatedTarget: e
	                    });
	                });
	            }
	        }
	    }, c.prototype.activate = function (b, c, d) {
	        function e() {
	            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
	        }
	        var f = c.find("> .active"),
	            g = d && a.support.transition && f.hasClass("fade");
	        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in");
	    };
	    var d = a.fn.tab;
	    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
	        return a.fn.tab = d, this;
	    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (c) {
	        c.preventDefault(), b.call(a(this), "show");
	    });
	}(jQuery), +function (a) {
	    "use strict";
	
	    function b(b) {
	        return this.each(function () {
	            var d = a(this),
	                e = d.data("bs.affix"),
	                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;
	            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
	        });
	    }
	    var c = function c(b, d) {
	        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
	    };
	    c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
	        offset: 0,
	        target: window
	    }, c.prototype.getPinnedOffset = function () {
	        if (this.pinnedOffset) return this.pinnedOffset;
	        this.$element.removeClass(c.RESET).addClass("affix");
	        var a = this.$target.scrollTop(),
	            b = this.$element.offset();
	        return this.pinnedOffset = b.top - a;
	    }, c.prototype.checkPositionWithEventLoop = function () {
	        setTimeout(a.proxy(this.checkPosition, this), 1);
	    }, c.prototype.checkPosition = function () {
	        if (this.$element.is(":visible")) {
	            var b = a(document).height(),
	                d = this.$target.scrollTop(),
	                e = this.$element.offset(),
	                f = this.options.offset,
	                g = f.top,
	                h = f.bottom;
	            "object" != (typeof f === "undefined" ? "undefined" : _typeof(f)) && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
	            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
	            if (this.affixed !== i) {
	                null != this.unpin && this.$element.css("top", "");
	                var j = "affix" + (i ? "-" + i : ""),
	                    k = a.Event(j + ".bs.affix");
	                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
	                    top: b - this.$element.height() - h
	                }));
	            }
	        }
	    };
	    var d = a.fn.affix;
	    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
	        return a.fn.affix = d, this;
	    }, a(window).on("load", function () {
	        a('[data-spy="affix"]').each(function () {
	            var c = a(this),
	                d = c.data();
	            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
	        });
	    });
	}(jQuery);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	;(function ($) {
	    $.flexslider = function (el, options) {
	        var slider = $(el),
	            vars = $.extend({}, $.flexslider.defaults, options),
	            namespace = vars.namespace,
	            touch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
	            eventType = touch ? "touchend" : "click",
	            vertical = vars.direction === "vertical",
	            reverse = vars.reverse,
	            carousel = vars.itemWidth > 0,
	            fade = vars.animation === "fade",
	            asNav = vars.asNavFor !== "",
	            methods = {};
	        $.data(el, "flexslider", slider);
	        methods = {
	            init: function init() {
	                slider.animating = false;
	                slider.currentSlide = vars.startAt;
	                slider.animatingTo = slider.currentSlide;
	                slider.atEnd = slider.currentSlide === 0 || slider.currentSlide === slider.last;
	                slider.containerSelector = vars.selector.substr(0, vars.selector.search(' '));
	                slider.slides = $(vars.selector, slider);
	                slider.container = $(slider.containerSelector, slider);
	                slider.count = slider.slides.length;
	                slider.syncExists = $(vars.sync).length > 0;
	                if (vars.animation === "slide") vars.animation = "swing";
	                slider.prop = vertical ? "top" : "marginLeft";
	                slider.args = {};
	                slider.manualPause = false;
	                slider.transitions = !vars.video && !fade && vars.useCSS && function () {
	                    var obj = document.createElement('div'),
	                        props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
	                    for (var i in props) {
	                        if (obj.style[props[i]] !== undefined) {
	                            slider.pfx = props[i].replace('Perspective', '').toLowerCase();
	                            slider.prop = "-" + slider.pfx + "-transform";
	                            return true;
	                        }
	                    }
	                    return false;
	                }();
	                if (vars.controlsContainer !== "") slider.controlsContainer = $(vars.controlsContainer).length > 0 && $(vars.controlsContainer);
	                if (vars.manualControls !== "") slider.manualControls = $(vars.manualControls).length > 0 && $(vars.manualControls);
	                if (vars.randomize) {
	                    slider.slides.sort(function () {
	                        return Math.round(Math.random()) - 0.5;
	                    });
	                    slider.container.empty().append(slider.slides);
	                }
	                slider.doMath();
	                if (asNav) methods.asNav.setup();
	                slider.setup("init");
	                if (vars.controlNav) methods.controlNav.setup();
	                if (vars.directionNav) methods.directionNav.setup();
	                if (vars.keyboard && ($(slider.containerSelector).length === 1 || vars.multipleKeyboard)) {
	                    $(document).bind('keyup', function (event) {
	                        var keycode = event.keyCode;
	                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
	                            var target = keycode === 39 ? slider.getTarget('next') : keycode === 37 ? slider.getTarget('prev') : false;
	                            slider.flexAnimate(target, vars.pauseOnAction);
	                        }
	                    });
	                }
	                if (vars.mousewheel) {
	                    slider.bind('mousewheel', function (event, delta, deltaX, deltaY) {
	                        event.preventDefault();
	                        var target = delta < 0 ? slider.getTarget('next') : slider.getTarget('prev');
	                        slider.flexAnimate(target, vars.pauseOnAction);
	                    });
	                }
	                if (vars.pausePlay) methods.pausePlay.setup();
	                if (vars.slideshow) {
	                    if (vars.pauseOnHover) {
	                        slider.hover(function () {
	                            if (!slider.manualPlay && !slider.manualPause) slider.pause();
	                        }, function () {
	                            if (!slider.manualPause && !slider.manualPlay) slider.play();
	                        });
	                    }
	                    vars.initDelay > 0 ? setTimeout(slider.play, vars.initDelay) : slider.play();
	                }
	                if (touch && vars.touch) methods.touch();
	                if (!fade || fade && vars.smoothHeight) $(window).bind("resize focus", methods.resize);
	                setTimeout(function () {
	                    vars.start(slider);
	                }, 200);
	            },
	            asNav: {
	                setup: function setup() {
	                    slider.asNav = true;
	                    slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
	                    slider.currentItem = slider.currentSlide;
	                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
	                    slider.slides.click(function (e) {
	                        e.preventDefault();
	                        var $slide = $(this),
	                            target = $slide.index();
	                        if (!$(vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
	                            slider.direction = slider.currentItem < target ? "next" : "prev";
	                            slider.flexAnimate(target, vars.pauseOnAction, false, true, true);
	                        }
	                    });
	                }
	            },
	            controlNav: {
	                setup: function setup() {
	                    if (!slider.manualControls) {
	                        methods.controlNav.setupPaging();
	                    } else {
	                        methods.controlNav.setupManual();
	                    }
	                },
	                setupPaging: function setupPaging() {
	                    var type = vars.controlNav === "thumbnails" ? 'control-thumbs' : 'control-paging',
	                        j = 1,
	                        item;
	                    slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');
	                    if (slider.pagingCount > 1) {
	                        for (var i = 0; i < slider.pagingCount; i++) {
	                            item = vars.controlNav === "thumbnails" ? '<img src="' + slider.slides.eq(i).attr("data-thumb") + '"/>' : '<a>' + j + '</a>';
	                            slider.controlNavScaffold.append('<li>' + item + '</li>');
	                            j++;
	                        }
	                    }
	                    slider.controlsContainer ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
	                    methods.controlNav.set();
	                    methods.controlNav.active();
	                    slider.controlNavScaffold.delegate('a, img', eventType, function (event) {
	                        event.preventDefault();
	                        var $this = $(this),
	                            target = slider.controlNav.index($this);
	                        if (!$this.hasClass(namespace + 'active')) {
	                            slider.direction = target > slider.currentSlide ? "next" : "prev";
	                            slider.flexAnimate(target, vars.pauseOnAction);
	                        }
	                    });
	                    if (touch) {
	                        slider.controlNavScaffold.delegate('a', "click touchstart", function (event) {
	                            event.preventDefault();
	                        });
	                    }
	                },
	                setupManual: function setupManual() {
	                    slider.controlNav = slider.manualControls;
	                    methods.controlNav.active();
	                    slider.controlNav.live(eventType, function (event) {
	                        event.preventDefault();
	                        var $this = $(this),
	                            target = slider.controlNav.index($this);
	                        if (!$this.hasClass(namespace + 'active')) {
	                            target > slider.currentSlide ? slider.direction = "next" : slider.direction = "prev";
	                            slider.flexAnimate(target, vars.pauseOnAction);
	                        }
	                    });
	                    if (touch) {
	                        slider.controlNav.live("click touchstart", function (event) {
	                            event.preventDefault();
	                        });
	                    }
	                },
	                set: function set() {
	                    var selector = vars.controlNav === "thumbnails" ? 'img' : 'a';
	                    slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, slider.controlsContainer ? slider.controlsContainer : slider);
	                },
	                active: function active() {
	                    slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
	                },
	                update: function update(action, pos) {
	                    if (slider.pagingCount > 1 && action === "add") {
	                        slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
	                    } else if (slider.pagingCount === 1) {
	                        slider.controlNavScaffold.find('li').remove();
	                    } else {
	                        slider.controlNav.eq(pos).closest('li').remove();
	                    }
	                    methods.controlNav.set();
	                    slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length ? slider.update(pos, action) : methods.controlNav.active();
	                }
	            },
	            directionNav: {
	                setup: function setup() {
	                    var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + vars.nextText + '</a></li></ul>');
	                    if (slider.controlsContainer) {
	                        $(slider.controlsContainer).append(directionNavScaffold);
	                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
	                    } else {
	                        slider.append(directionNavScaffold);
	                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
	                    }
	                    methods.directionNav.update();
	                    slider.directionNav.bind(eventType, function (event) {
	                        event.preventDefault();
	                        var target = $(this).hasClass(namespace + 'next') ? slider.getTarget('next') : slider.getTarget('prev');
	                        slider.flexAnimate(target, vars.pauseOnAction);
	                    });
	                    if (touch) {
	                        slider.directionNav.bind("click touchstart", function (event) {
	                            event.preventDefault();
	                        });
	                    }
	                },
	                update: function update() {
	                    var disabledClass = namespace + 'disabled';
	                    if (slider.pagingCount === 1) {
	                        slider.directionNav.addClass(disabledClass);
	                    } else if (!vars.animationLoop) {
	                        if (slider.animatingTo === 0) {
	                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass);
	                        } else if (slider.animatingTo === slider.last) {
	                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass);
	                        } else {
	                            slider.directionNav.removeClass(disabledClass);
	                        }
	                    } else {
	                        slider.directionNav.removeClass(disabledClass);
	                    }
	                }
	            },
	            pausePlay: {
	                setup: function setup() {
	                    var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
	                    if (slider.controlsContainer) {
	                        slider.controlsContainer.append(pausePlayScaffold);
	                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
	                    } else {
	                        slider.append(pausePlayScaffold);
	                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
	                    }
	                    methods.pausePlay.update(vars.slideshow ? namespace + 'pause' : namespace + 'play');
	                    slider.pausePlay.bind(eventType, function (event) {
	                        event.preventDefault();
	                        if ($(this).hasClass(namespace + 'pause')) {
	                            slider.manualPause = true;
	                            slider.manualPlay = false;
	                            slider.pause();
	                        } else {
	                            slider.manualPause = false;
	                            slider.manualPlay = true;
	                            slider.play();
	                        }
	                    });
	                    if (touch) {
	                        slider.pausePlay.bind("click touchstart", function (event) {
	                            event.preventDefault();
	                        });
	                    }
	                },
	                update: function update(state) {
	                    state === "play" ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').text(vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').text(vars.pauseText);
	                }
	            },
	            touch: function touch() {
	                var startX,
	                    startY,
	                    offset,
	                    cwidth,
	                    dx,
	                    startT,
	                    scrolling = false;
	                el.addEventListener('touchstart', onTouchStart, false);
	                function onTouchStart(e) {
	                    if (slider.animating) {
	                        e.preventDefault();
	                    } else if (e.touches.length === 1) {
	                        slider.pause();
	                        cwidth = vertical ? slider.h : slider.w;
	                        startT = Number(new Date());
	                        offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
	                        startX = vertical ? e.touches[0].pageY : e.touches[0].pageX;
	                        startY = vertical ? e.touches[0].pageX : e.touches[0].pageY;
	                        el.addEventListener('touchmove', onTouchMove, false);
	                        el.addEventListener('touchend', onTouchEnd, false);
	                    }
	                }
	                function onTouchMove(e) {
	                    dx = vertical ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
	                    scrolling = vertical ? Math.abs(dx) < Math.abs(e.touches[0].pageX - startY) : Math.abs(dx) < Math.abs(e.touches[0].pageY - startY);
	                    if (!scrolling || Number(new Date()) - startT > 500) {
	                        e.preventDefault();
	                        if (!fade && slider.transitions) {
	                            if (!vars.animationLoop) {
	                                dx = dx / (slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0 ? Math.abs(dx) / cwidth + 2 : 1);
	                            }
	                            slider.setProps(offset + dx, "setTouch");
	                        }
	                    }
	                }
	                function onTouchEnd(e) {
	                    el.removeEventListener('touchmove', onTouchMove, false);
	                    if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
	                        var updateDx = reverse ? -dx : dx,
	                            target = updateDx > 0 ? slider.getTarget('next') : slider.getTarget('prev');
	                        if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
	                            slider.flexAnimate(target, vars.pauseOnAction);
	                        } else {
	                            if (!fade) slider.flexAnimate(slider.currentSlide, vars.pauseOnAction, true);
	                        }
	                    }
	                    el.removeEventListener('touchend', onTouchEnd, false);
	                    startX = null;
	                    startY = null;
	                    dx = null;
	                    offset = null;
	                }
	            },
	            resize: function resize() {
	                if (!slider.animating && slider.is(':visible')) {
	                    if (!carousel) slider.doMath();
	                    if (fade) {
	                        methods.smoothHeight();
	                    } else if (carousel) {
	                        slider.slides.width(slider.computedW);
	                        slider.update(slider.pagingCount);
	                        slider.setProps();
	                    } else if (vertical) {
	                        slider.viewport.height(slider.h);
	                        slider.setProps(slider.h, "setTotal");
	                    } else {
	                        if (vars.smoothHeight) methods.smoothHeight();
	                        slider.newSlides.width(slider.computedW);
	                        slider.setProps(slider.computedW, "setTotal");
	                    }
	                }
	            },
	            smoothHeight: function smoothHeight(dur) {
	                if (!vertical || fade) {
	                    var $obj = fade ? slider : slider.viewport;
	                    dur ? $obj.animate({
	                        "height": slider.slides.eq(slider.animatingTo).height()
	                    }, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
	                }
	            },
	            sync: function sync(action) {
	                var $obj = $(vars.sync).data("flexslider"),
	                    target = slider.animatingTo;
	                switch (action) {
	                    case "animate":
	                        $obj.flexAnimate(target, vars.pauseOnAction, false, true);
	                        break;
	                    case "play":
	                        if (!$obj.playing && !$obj.asNav) {
	                            $obj.play();
	                        }
	                        break;
	                    case "pause":
	                        $obj.pause();
	                        break;
	                }
	            }
	        };
	        slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
	            if (asNav && slider.pagingCount === 1) slider.direction = slider.currentItem < target ? "next" : "prev";
	            if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
	                if (asNav && withSync) {
	                    var master = $(vars.asNavFor).data('flexslider');
	                    slider.atEnd = target === 0 || target === slider.count - 1;
	                    master.flexAnimate(target, true, false, true, fromNav);
	                    slider.direction = slider.currentItem < target ? "next" : "prev";
	                    master.direction = slider.direction;
	                    if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
	                        slider.currentItem = target;
	                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
	                        target = Math.floor(target / slider.visible);
	                    } else {
	                        slider.currentItem = target;
	                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
	                        return false;
	                    }
	                }
	                slider.animating = true;
	                slider.animatingTo = target;
	                vars.before(slider);
	                if (pause) slider.pause();
	                if (slider.syncExists && !fromNav) methods.sync("animate");
	                if (vars.controlNav) methods.controlNav.active();
	                if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
	                slider.atEnd = target === 0 || target === slider.last;
	                if (vars.directionNav) methods.directionNav.update();
	                if (target === slider.last) {
	                    vars.end(slider);
	                    if (!vars.animationLoop) slider.pause();
	                }
	                if (!fade) {
	                    var dimension = vertical ? slider.slides.filter(':first').height() : slider.computedW,
	                        margin,
	                        slideString,
	                        calcNext;
	                    if (carousel) {
	                        margin = vars.itemWidth > slider.w ? vars.itemMargin * 2 : vars.itemMargin;
	                        calcNext = (slider.itemW + margin) * slider.move * slider.animatingTo;
	                        slideString = calcNext > slider.limit && slider.visible !== 1 ? slider.limit : calcNext;
	                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && vars.animationLoop && slider.direction !== "next") {
	                        slideString = reverse ? (slider.count + slider.cloneOffset) * dimension : 0;
	                    } else if (slider.currentSlide === slider.last && target === 0 && vars.animationLoop && slider.direction !== "prev") {
	                        slideString = reverse ? 0 : (slider.count + 1) * dimension;
	                    } else {
	                        slideString = reverse ? (slider.count - 1 - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
	                    }
	                    slider.setProps(slideString, "", vars.animationSpeed);
	                    if (slider.transitions) {
	                        if (!vars.animationLoop || !slider.atEnd) {
	                            slider.animating = false;
	                            slider.currentSlide = slider.animatingTo;
	                        }
	                        slider.container.unbind("webkitTransitionEnd transitionend");
	                        slider.container.bind("webkitTransitionEnd transitionend", function () {
	                            slider.wrapup(dimension);
	                        });
	                    } else {
	                        slider.container.animate(slider.args, vars.animationSpeed, vars.easing, function () {
	                            slider.wrapup(dimension);
	                        });
	                    }
	                } else {
	                    if (!touch) {
	                        slider.slides.eq(slider.currentSlide).fadeOut(vars.animationSpeed, vars.easing);
	                        slider.slides.eq(target).fadeIn(vars.animationSpeed, vars.easing, slider.wrapup);
	                    } else {
	                        slider.slides.eq(slider.currentSlide).css({
	                            "opacity": 0,
	                            "zIndex": 1
	                        });
	                        slider.slides.eq(target).css({
	                            "opacity": 1,
	                            "zIndex": 2
	                        });
	                        slider.slides.unbind("webkitTransitionEnd transitionend");
	                        slider.slides.eq(slider.currentSlide).bind("webkitTransitionEnd transitionend", function () {
	                            vars.after(slider);
	                        });
	                        slider.animating = false;
	                        slider.currentSlide = slider.animatingTo;
	                    }
	                }
	                if (vars.smoothHeight) methods.smoothHeight(vars.animationSpeed);
	            }
	        };
	        slider.wrapup = function (dimension) {
	            if (!fade && !carousel) {
	                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && vars.animationLoop) {
	                    slider.setProps(dimension, "jumpEnd");
	                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && vars.animationLoop) {
	                    slider.setProps(dimension, "jumpStart");
	                }
	            }
	            slider.animating = false;
	            slider.currentSlide = slider.animatingTo;
	            vars.after(slider);
	        };
	        slider.animateSlides = function () {
	            if (!slider.animating) slider.flexAnimate(slider.getTarget("next"));
	        };
	        slider.pause = function () {
	            clearInterval(slider.animatedSlides);
	            slider.playing = false;
	            if (vars.pausePlay) methods.pausePlay.update("play");
	            if (slider.syncExists) methods.sync("pause");
	        };
	        slider.play = function () {
	            slider.animatedSlides = setInterval(slider.animateSlides, vars.slideshowSpeed);
	            slider.playing = true;
	            if (vars.pausePlay) methods.pausePlay.update("pause");
	            if (slider.syncExists) methods.sync("play");
	        };
	        slider.canAdvance = function (target, fromNav) {
	            var last = asNav ? slider.pagingCount - 1 : slider.last;
	            return fromNav ? true : asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev" ? true : asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next" ? false : target === slider.currentSlide && !asNav ? false : vars.animationLoop ? true : slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next" ? false : slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next" ? false : true;
	        };
	        slider.getTarget = function (dir) {
	            slider.direction = dir;
	            if (dir === "next") {
	                return slider.currentSlide === slider.last ? 0 : slider.currentSlide + 1;
	            } else {
	                return slider.currentSlide === 0 ? slider.last : slider.currentSlide - 1;
	            }
	        };
	        slider.setProps = function (pos, special, dur) {
	            var target = function () {
	                var posCheck = pos ? pos : (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo,
	                    posCalc = function () {
	                    if (carousel) {
	                        return special === "setTouch" ? pos : reverse && slider.animatingTo === slider.last ? 0 : reverse ? slider.limit - (slider.itemW + vars.itemMargin) * slider.move * slider.animatingTo : slider.animatingTo === slider.last ? slider.limit : posCheck;
	                    } else {
	                        switch (special) {
	                            case "setTotal":
	                                return reverse ? (slider.count - 1 - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
	                            case "setTouch":
	                                return reverse ? pos : pos;
	                            case "jumpEnd":
	                                return reverse ? pos : slider.count * pos;
	                            case "jumpStart":
	                                return reverse ? slider.count * pos : pos;
	                            default:
	                                return pos;
	                        }
	                    }
	                }();
	                return posCalc * -1 + "px";
	            }();
	            if (slider.transitions) {
	                target = vertical ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
	                dur = dur !== undefined ? dur / 1000 + "s" : "0s";
	                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
	            }
	            slider.args[slider.prop] = target;
	            if (slider.transitions || dur === undefined) slider.container.css(slider.args);
	        };
	        slider.setup = function (type) {
	            if (!fade) {
	                var sliderOffset, arr;
	                if (type === "init") {
	                    slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
	                        "overflow": "hidden",
	                        "position": "relative"
	                    }).appendTo(slider).append(slider.container);
	                    slider.cloneCount = 0;
	                    slider.cloneOffset = 0;
	                    if (reverse) {
	                        arr = $.makeArray(slider.slides).reverse();
	                        slider.slides = $(arr);
	                        slider.container.empty().append(slider.slides);
	                    }
	                }
	                if (vars.animationLoop && !carousel) {
	                    slider.cloneCount = 2;
	                    slider.cloneOffset = 1;
	                    if (type !== "init") slider.container.find('.clone').remove();
	                    slider.container.append(slider.slides.first().clone().addClass('clone')).prepend(slider.slides.last().clone().addClass('clone'));
	                }
	                slider.newSlides = $(vars.selector, slider);
	                sliderOffset = reverse ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
	                if (vertical && !carousel) {
	                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
	                    setTimeout(function () {
	                        slider.newSlides.css({
	                            "display": "block"
	                        });
	                        slider.doMath();
	                        slider.viewport.height(slider.h);
	                        slider.setProps(sliderOffset * slider.h, "init");
	                    }, type === "init" ? 100 : 0);
	                } else {
	                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
	                    slider.setProps(sliderOffset * slider.computedW, "init");
	                    setTimeout(function () {
	                        slider.doMath();
	                        slider.newSlides.css({
	                            "width": slider.computedW,
	                            "float": "left",
	                            "display": "block"
	                        });
	                        if (vars.smoothHeight) methods.smoothHeight();
	                    }, type === "init" ? 100 : 0);
	                }
	            } else {
	                slider.slides.css({
	                    "width": "100%",
	                    "float": "left",
	                    "marginRight": "-100%",
	                    "position": "relative"
	                });
	                if (type === "init") {
	                    if (!touch) {
	                        slider.slides.eq(slider.currentSlide).fadeIn(vars.animationSpeed, vars.easing);
	                    } else {
	                        slider.slides.css({
	                            "opacity": 0,
	                            "display": "block",
	                            "webkitTransition": "opacity " + vars.animationSpeed / 1000 + "s ease",
	                            "zIndex": 1
	                        }).eq(slider.currentSlide).css({
	                            "opacity": 1,
	                            "zIndex": 2
	                        });
	                    }
	                }
	                if (vars.smoothHeight) methods.smoothHeight();
	            }
	            if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
	        };
	        slider.doMath = function () {
	            var slide = slider.slides.first(),
	                slideMargin = vars.itemMargin,
	                minItems = vars.minItems,
	                maxItems = vars.maxItems;
	            slider.w = slider.width();
	            slider.h = slide.height();
	            slider.boxPadding = slide.outerWidth() - slide.width();
	            if (carousel) {
	                slider.itemT = vars.itemWidth + slideMargin;
	                slider.minW = minItems ? minItems * slider.itemT : slider.w;
	                slider.maxW = maxItems ? maxItems * slider.itemT : slider.w;
	                slider.itemW = slider.minW > slider.w ? (slider.w - slideMargin * minItems) / minItems : slider.maxW < slider.w ? (slider.w - slideMargin * maxItems) / maxItems : vars.itemWidth > slider.w ? slider.w : vars.itemWidth;
	                slider.visible = Math.floor(slider.w / (slider.itemW + slideMargin));
	                slider.move = vars.move > 0 && vars.move < slider.visible ? vars.move : slider.visible;
	                slider.pagingCount = Math.ceil((slider.count - slider.visible) / slider.move + 1);
	                slider.last = slider.pagingCount - 1;
	                slider.limit = slider.pagingCount === 1 ? 0 : vars.itemWidth > slider.w ? (slider.itemW + slideMargin * 2) * slider.count - slider.w - slideMargin : (slider.itemW + slideMargin) * slider.count - slider.w - slideMargin;
	            } else {
	                slider.itemW = slider.w;
	                slider.pagingCount = slider.count;
	                slider.last = slider.count - 1;
	            }
	            slider.computedW = slider.itemW - slider.boxPadding;
	        };
	        slider.update = function (pos, action) {
	            slider.doMath();
	            if (!carousel) {
	                if (pos < slider.currentSlide) {
	                    slider.currentSlide += 1;
	                } else if (pos <= slider.currentSlide && pos !== 0) {
	                    slider.currentSlide -= 1;
	                }
	                slider.animatingTo = slider.currentSlide;
	            }
	            if (vars.controlNav && !slider.manualControls) {
	                if (action === "add" && !carousel || slider.pagingCount > slider.controlNav.length) {
	                    methods.controlNav.update("add");
	                } else if (action === "remove" && !carousel || slider.pagingCount < slider.controlNav.length) {
	                    if (carousel && slider.currentSlide > slider.last) {
	                        slider.currentSlide -= 1;
	                        slider.animatingTo -= 1;
	                    }
	                    methods.controlNav.update("remove", slider.last);
	                }
	            }
	            if (vars.directionNav) methods.directionNav.update();
	        };
	        slider.addSlide = function (obj, pos) {
	            var $obj = $(obj);
	            slider.count += 1;
	            slider.last = slider.count - 1;
	            if (vertical && reverse) {
	                pos !== undefined ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
	            } else {
	                pos !== undefined ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
	            }
	            slider.update(pos, "add");
	            slider.slides = $(vars.selector + ':not(.clone)', slider);
	            slider.setup();
	            vars.added(slider);
	        };
	        slider.removeSlide = function (obj) {
	            var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;
	            slider.count -= 1;
	            slider.last = slider.count - 1;
	            if (isNaN(obj)) {
	                $(obj, slider.slides).remove();
	            } else {
	                vertical && reverse ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
	            }
	            slider.doMath();
	            slider.update(pos, "remove");
	            slider.slides = $(vars.selector + ':not(.clone)', slider);
	            slider.setup();
	            vars.removed(slider);
	        };
	        methods.init();
	    };
	    $.flexslider.defaults = {
	        namespace: "flex-",
	        selector: ".slides > li",
	        animation: "fade",
	        easing: "swing",
	        direction: "horizontal",
	        reverse: false,
	        animationLoop: true,
	        smoothHeight: false,
	        startAt: 0,
	        slideshow: true,
	        slideshowSpeed: 7000,
	        animationSpeed: 600,
	        initDelay: 0,
	        randomize: false,
	        pauseOnAction: true,
	        pauseOnHover: false,
	        useCSS: true,
	        touch: true,
	        video: false,
	        controlNav: true,
	        directionNav: true,
	        prevText: "",
	        nextText: "",
	        keyboard: true,
	        multipleKeyboard: false,
	        mousewheel: false,
	        pausePlay: false,
	        pauseText: "Pause",
	        playText: "Play",
	        controlsContainer: "",
	        manualControls: "",
	        sync: "",
	        asNavFor: "",
	        itemWidth: 0,
	        itemMargin: 0,
	        minItems: 0,
	        maxItems: 0,
	        move: 0,
	        start: function start() {},
	        before: function before() {},
	        after: function after() {},
	        end: function end() {},
	        added: function added() {},
	        removed: function removed() {}
	    };
	    $.fn.flexslider = function (options) {
	        if (options === undefined) options = {};
	        if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
	            return this.each(function () {
	                var $this = $(this),
	                    selector = options.selector ? options.selector : ".slides > li",
	                    $slides = $this.find(selector);
	                if ($slides.length === 1) {
	                    $slides.fadeIn(400);
	                    if (options.start) options.start($this);
	                } else if ($this.data('flexslider') == undefined) {
	                    new $.flexslider(this, options);
	                }
	            });
	        } else {
	            var $slider = $(this).data('flexslider');
	            switch (options) {
	                case "play":
	                    $slider.play();
	                    break;
	                case "pause":
	                    $slider.pause();
	                    break;
	                case "next":
	                    $slider.flexAnimate($slider.getTarget("next"), true);
	                    break;
	                case "prev":
	                case "previous":
	                    $slider.flexAnimate($slider.getTarget("prev"), true);
	                    break;
	                default:
	                    if (typeof options === "number") $slider.flexAnimate(options, true);
	            }
	        }
	    };
	})(jQuery);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map