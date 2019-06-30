"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crds_components_core_js_1 = require("../crds-components.core.js");
var chunk_9d0e91ad_js_1 = require("./chunk-9d0e91ad.js");
var chunk_77ecfe7f_js_1 = require("./chunk-77ecfe7f.js");
var chunk_15914d3f_js_1 = require("./chunk-15914d3f.js");
var CrdsModal = function () { function e() { var e = this; this.isActive = !1, this.handleInnerClick = function (e) { e.stopPropagation(); }, this.closeModal = function () { e.isActive = !1, "function" == typeof e.onClose && e.onClose(); }; } return e.prototype.render = function () { return crds_components_core_js_1.h("div", { class: "modal " + (this.isActive ? "is-active" : ""), id: "subscribeModalForm", tabindex: "-1", onClick: this.closeModal }, crds_components_core_js_1.h("div", { class: "modal-content", onClick: this.handleInnerClick }, crds_components_core_js_1.h("div", { class: "modal-header" }, crds_components_core_js_1.h("button", { type: "button", class: "modal-close", onClick: this.closeModal })), crds_components_core_js_1.h("div", { class: "modal-body" }, this.title && crds_components_core_js_1.h("h3", { class: "modal-title" }, this.title), crds_components_core_js_1.h("slot", null)))); }, Object.defineProperty(e, "is", { get: function () { return "crds-modal"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { isActive: { type: Boolean, attr: "is-active", mutable: !0 }, onClose: { type: "Any", attr: "on-close" }, title: { type: String, attr: "title" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".modal.sc-crds-modal{background-color:rgba(0,0,0,.8);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;-webkit-transition:opacity .3s ease,visibility .3s ease;transition:opacity .3s ease,visibility .3s ease;visibility:hidden;will-change:opacity,visibility}.modal.is-active.sc-crds-modal{opacity:1;visibility:visible;z-index:11}.modal.is-active.sc-crds-modal   .modal-content.sc-crds-modal{-webkit-transform:translateY(0);transform:translateY(0)}.modal-content.sc-crds-modal{background:#fff;font-size:16px;margin:45px auto;max-width:600px;position:relative;-webkit-transform:translateY(-50px);transform:translateY(-50px);-webkit-transition:-webkit-transform .35s ease;transition:-webkit-transform .35s ease;transition:transform .35s ease;transition:transform .35s ease,-webkit-transform .35s ease;will-change:transform}.modal-body.sc-crds-modal{padding:40px}.modal-title.sc-crds-modal{font-family:acumin-pro-extra-condensed,sans-serif!important;font-weight:500!important;font-size:36px!important;margin:0;text-transform:uppercase}\@media screen and (min-width:480px){.modal-title.sc-crds-modal{font-size:52.2px!important}}input.sc-crds-modal{background-image:none;-webkit-box-shadow:none;box-shadow:none}input[type=text].sc-crds-modal{background-color:#f4f4f4;border:1px solid #f4f4f4;border-radius:0;color:#4d4d4d;display:block;font-size:16px;line-height:1.5;padding:8px 10px;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;width:100%}input.sc-crds-modal:focus{border-color:#8bceed;-webkit-box-shadow:inset 0 0 0 1px rgba(139,206,237,.5);box-shadow:inset 0 0 0 1px rgba(139,206,237,.5)}input[type=submit].sc-crds-modal{-webkit-appearance:button;-moz-appearance:button;appearance:button;background-color:#0095d9;border:1px solid #0095d9;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;line-height:1;margin-top:24px;padding:14px 20px 16px}input[type=submit].sc-crds-modal, label.sc-crds-modal{display:inline-block;margin-bottom:5px}label.sc-crds-modal{font-weight:700;max-width:100%}.modal-close.sc-crds-modal{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:hsla(0,0%,73.3%,.6);-o-border-image:none;border-image:none;border-radius:50%;border-style:none;color:#fff;cursor:pointer;height:25px;position:absolute;right:15px;top:15px;width:25px}.modal-close.sc-crds-modal:after{font-family:acumin-pro,helvetica,arial,sans-serif!important;font-weight:300!important;bottom:3px;content:\"x\";display:inline-block;font-size:16px;position:relative}.modal-close.sc-crds-modal:focus{outline:none}"; }, enumerable: !0, configurable: !0 }), e; }(), iframeResizer = chunk_77ecfe7f_js_1.a(function (e) { !function (t) { if ("undefined" != typeof window) {
    var n, r = 0, o = !1, i = !1, a = "message".length, s = "[iFrameSizer]", u = s.length, f = null, c = window.requestAnimationFrame, l = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 }, h = {}, d = null, p = { autoResize: !0, bodyBackground: null, bodyMargin: null, bodyMarginV1: 8, bodyPadding: null, checkOrigin: !0, inPageLinks: !1, enablePublicMethods: !0, heightCalculationMethod: "bodyOffset", id: "iFrameResizer", interval: 32, log: !1, maxHeight: 1 / 0, maxWidth: 1 / 0, minHeight: 0, minWidth: 0, resizeFrom: "parent", scrolling: !1, sizeHeight: !0, sizeWidth: !1, warningTimeout: 5e3, tolerance: 0, widthCalculationMethod: "scroll", onClosed: function () { }, onInit: function () { }, onMessage: function () { E("onMessage function not defined"); }, onResized: function () { }, onScroll: function () { return !0; } }, m = {};
    window.jQuery && ((n = window.jQuery).fn ? n.fn.iFrameResize || (n.fn.iFrameResize = function (e) { return this.filter("iframe").each(function (t, n) { L(n, e); }).end(); }) : B("", "Unable to bind to jQuery, it is not fully loaded.")), "function" == typeof t && t.amd ? t([], F) : e.exports = F(), window.iFrameResize = window.iFrameResize || F();
} function g() { return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; } function y(e, t, n) { e.addEventListener(t, n, !1); } function b(e, t, n) { e.removeEventListener(t, n, !1); } function w(e) { return h[e] ? h[e].log : o; } function v(e, t) { I("log", e, t, w(e)); } function B(e, t) { I("info", e, t, w(e)); } function E(e, t) { I("warn", e, t, !0); } function I(e, t, n, r) { !0 === r && "object" == typeof window.console && console[e](function (e) { return s + "[" + function (e) { var t = "Host page: " + e; return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t; }(e) + "]"; }(t), n); } function A(e) { function t() { n("Height"), n("Width"), x(function () { C(A), R(O), d("onResized", A); }, A, "init"); } function n(e) { var t = Number(h[O]["max" + e]), n = Number(h[O]["min" + e]), r = e.toLowerCase(), o = Number(A[r]); v(O, "Checking " + r + " is in range " + n + "-" + t), o < n && (o = n, v(O, "Set " + r + " to min value")), o > t && (o = t, v(O, "Set " + r + " to max value")), A[r] = "" + o; } function r(e) { return I.substr(I.indexOf(":") + a + e); } function o(e, t) { var n, r; n = function () { var n, r; U("Send Page Info", "pageInfo:" + (n = document.body.getBoundingClientRect(), r = A.iframe.getBoundingClientRect(), JSON.stringify({ iframeHeight: r.height, iframeWidth: r.width, clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0), clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), offsetTop: parseInt(r.top - n.top, 10), offsetLeft: parseInt(r.left - n.left, 10), scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, documentHeight: document.documentElement.clientHeight, documentWidth: document.documentElement.clientWidth, windowHeight: window.innerHeight, windowWidth: window.innerWidth })), e, t); }, m[r = t] || (m[r] = setTimeout(function () { m[r] = null, n(); }, 32)); } function i(e) { var t = e.getBoundingClientRect(); return k(O), { x: Math.floor(Number(t.left) + Number(f.x)), y: Math.floor(Number(t.top) + Number(f.y)) }; } function c(e) { var t = e ? i(A.iframe) : { x: 0, y: 0 }, n = { x: Number(A.width) + t.x, y: Number(A.height) + t.y }; v(O, "Reposition requested from iFrame (offset x:" + t.x + " y:" + t.y + ")"), window.top !== window.self ? window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y) : E(O, "Unable to scroll to requested position, window.parentIFrame not found") : (f = n, l(), v(O, "--")); } function l() { !1 !== d("onScroll", f) ? R(O) : P(); } function d(e, t) { return T(O, e, t); } var p, g, w, I = e.data, A = {}, O = null; "[iFrameResizerChild]Ready" === I ? function () { for (var e in h)
    U("iFrame requested init", j(e), document.getElementById(e), e); }() : s === ("" + I).substr(0, u) && I.substr(u).split(":")[0] in h ? (w = I.substr(u).split(":"), h[O = (A = { iframe: h[w[0]] && h[w[0]].iframe, id: w[0], height: w[1], width: w[2], type: w[3] }).id] && (h[O].loaded = !0), (g = A.type in { true: 1, false: 1, undefined: 1 }) && v(O, "Ignoring init message from meta parent page"), !g && function (e) { var t = !0; return h[e] || (t = !1, E(A.type + " No settings for " + e + ". Message was: " + I)), t; }(O) && (v(O, "Received: " + I), p = !0, null === A.iframe && (E(O, "IFrame (" + A.id + ") not found"), p = !1), p && function () { var t, n = e.origin, r = h[O] && h[O].checkOrigin; if (r && "" + n != "null" && !(r.constructor === Array ? function () { var e = 0, t = !1; for (v(O, "Checking connection is from allowed list of origins: " + r); e < r.length; e++)
    if (r[e] === n) {
        t = !0;
        break;
    } return t; }() : (v(O, "Checking connection is from: " + (t = h[O] && h[O].remoteHost)), n === t)))
    throw new Error("Unexpected message received from: " + n + " for " + A.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."); return !0; }() && function () { switch ((h[O] && h[O].firstRun && h[O] && (h[O].firstRun = !1), A.type)) {
    case "close":
        h[O].closeRequeston ? T(O, "onCloseRequest", h[O].iframe) : S(A.iframe);
        break;
    case "message":
        u = r(6), v(O, "onMessage passed: {iframe: " + A.iframe.id + ", message: " + u + "}"), d("onMessage", { iframe: A.iframe, message: JSON.parse(u) }), v(O, "--");
        break;
    case "scrollTo":
        c(!1);
        break;
    case "scrollToOffset":
        c(!0);
        break;
    case "pageInfo":
        o(h[O] && h[O].iframe, O), function () { function e(e, r) { function i() { h[n] ? o(h[n].iframe, n) : t(); } ["scroll", "resize"].forEach(function (t) { v(n, e + t + " listener for sendPageInfo"), r(window, t, i); }); } function t() { e("Remove ", b); } var n = O; e("Add ", y), h[n] && (h[n].stopPageInfo = t); }();
        break;
    case "pageInfoStop":
        h[O] && h[O].stopPageInfo && (h[O].stopPageInfo(), delete h[O].stopPageInfo);
        break;
    case "inPageLink":
        n = r(9).split("#")[1] || "", a = decodeURIComponent(n), (s = document.getElementById(a) || document.getElementsByName(a)[0]) ? (e = i(s), v(O, "Moving to in page link (#" + n + ") at x: " + e.x + " y: " + e.y), f = { x: e.x, y: e.y }, l(), v(O, "--")) : window.top !== window.self ? window.parentIFrame ? window.parentIFrame.moveToAnchor(n) : v(O, "In page link #" + n + " not found and window.parentIFrame not found") : v(O, "In page link #" + n + " not found");
        break;
    case "reset":
        M(A);
        break;
    case "init":
        t(), d("onInit", A.iframe);
        break;
    default: t();
} var e, n, a, s, u; }())) : B(O, "Ignored: " + I); } function T(e, t, n) { var r = null, o = null; if (h[e]) {
    if ("function" != typeof (r = h[e][t]))
        throw new TypeError(t + " on iFrame[" + e + "] is not a function");
    o = r(n);
} return o; } function O(e) { delete h[e.id]; } function S(e) { var t = e.id; v(t, "Removing iFrame: " + t); try {
    e.parentNode && e.parentNode.removeChild(e);
}
catch (e) {
    E(e);
} T(t, "onClosed", t), v(t, "--"), O(e); } function k(e) { null === f && v(e, "Get page position: " + (f = { x: window.pageXOffset !== t ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== t ? window.pageYOffset : document.documentElement.scrollTop }).x + "," + f.y); } function R(e) { null !== f && (window.scrollTo(f.x, f.y), v(e, "Set page position: " + f.x + "," + f.y), P()); } function P() { f = null; } function M(e) { v(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")), k(e.id), x(function () { C(e), U("reset", "reset", e.iframe, e.id); }, e, "reset"); } function C(e) { function t(t) { !function (t) { e.id ? (e.iframe.style[t] = e[t] + "px", v(e.id, "IFrame (" + n + ") " + t + " set to " + e[t] + "px")) : v("undefined", "messageData id not set"); }(t), function (t) { i || "0" !== e[t] || (i = !0, v(n, "Hidden iFrame detected, creating visibility listener"), function () { function e() { Object.keys(h).forEach(function (e) { !function (e) { function t(t) { return "0px" === (h[e] && h[e].iframe.style[t]); } h[e] && null !== h[e].iframe.offsetParent && (t("height") || t("width")) && U("Visibility change", "resize", h[e].iframe, e); }(h[e]); }); } var t, n = g(); n && (t = document.querySelector("body"), new n(function (t) { v("window", "Mutation observed: " + t[0].target + " " + t[0].type), N(e, 16); }).observe(t, { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 })); }()); }(t); } var n = e.iframe.id; h[n] && (h[n].sizeHeight && t("height"), h[n].sizeWidth && t("width")); } function x(e, t, n) { n !== t.type && c ? (v(t.id, "Requesting animation frame"), c(e)) : e(); } function U(e, t, n, r, o) { var i, a = !1; h[r = r || n.id] && (n && "contentWindow" in n && null !== n.contentWindow ? (v(r, "[" + e + "] Sending msg to iframe[" + r + "] (" + t + ") targetOrigin: " + (i = h[r] && h[r].targetOrigin)), n.contentWindow.postMessage(s + t, i)) : E(r, "[" + e + "] IFrame(" + r + ") not found"), o && h[r] && h[r].warningTimeout && (h[r].msgTimeout = setTimeout(function () { !h[r] || h[r].loaded || a || (a = !0, E(r, "IFrame has not responded within " + h[r].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.")); }, h[r].warningTimeout))); } function j(e) { return e + ":" + h[e].bodyMarginV1 + ":" + h[e].sizeWidth + ":" + h[e].log + ":" + h[e].interval + ":" + h[e].enablePublicMethods + ":" + h[e].autoResize + ":" + h[e].bodyMargin + ":" + h[e].heightCalculationMethod + ":" + h[e].bodyBackground + ":" + h[e].bodyPadding + ":" + h[e].tolerance + ":" + h[e].inPageLinks + ":" + h[e].resizeFrom + ":" + h[e].widthCalculationMethod; } function L(e, n) { function i(e) { var t = e.split("Callback"); if (2 === t.length) {
    var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
    this[n] = this[e], delete this[e], E(u, "Deprecated: '" + e + "' has been renamed '" + n + "'. The old method will be removed in the next major version.");
} } var a, s, u = function (t) { var i; return "" === t && (e.id = (i = n && n.id || p.id + r++, null !== document.getElementById(i) && (i += r++), t = i), o = (n || {}).log, v(t, "Added missing iframe ID: " + t + " (" + e.src + ")")), t; }(e.id); u in h && "iFrameResizer" in e ? E(u, "Ignored iFrame, already setup.") : (function (t) { var n; t = t || {}, h[u] = { firstRun: !0, iframe: e, remoteHost: e.src.split("/").slice(0, 3).join("/") }, function (e) { if ("object" != typeof e)
    throw new TypeError("Options is not an object"); }(t), Object.keys(t).forEach(i, t), function (e) { for (var t in p)
    Object.prototype.hasOwnProperty.call(p, t) && (h[u][t] = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : p[t]); }(t), h[u] && (h[u].targetOrigin = !0 === h[u].checkOrigin ? "" === (n = h[u].remoteHost) || "file://" === n ? "*" : n : "*"); }(n), function () { switch (v(u, "IFrame scrolling " + (h[u] && h[u].scrolling ? "enabled" : "disabled") + " for " + u), e.style.overflow = !1 === (h[u] && h[u].scrolling) ? "hidden" : "auto", h[u] && h[u].scrolling) {
    case "omit": break;
    case !0:
        e.scrolling = "yes";
        break;
    case !1:
        e.scrolling = "no";
        break;
    default: e.scrolling = h[u] ? h[u].scrolling : "no";
} }(), function () { function t(t) { 1 / 0 !== h[u][t] && 0 !== h[u][t] && (e.style[t] = h[u][t] + "px", v(u, "Set " + t + " = " + h[u][t] + "px")); } function n(e) { if (h[u]["min" + e] > h[u]["max" + e])
    throw new Error("Value for min" + e + " can not be greater than max" + e); } n("Height"), n("Width"), t("maxHeight"), t("minHeight"), t("maxWidth"), t("minWidth"); }(), "number" != typeof (h[u] && h[u].bodyMargin) && "0" !== (h[u] && h[u].bodyMargin) || (h[u].bodyMarginV1 = h[u].bodyMargin, h[u].bodyMargin = h[u].bodyMargin + "px"), a = j(u), (s = g()) && function (t) { e.parentNode && new t(function (t) { t.forEach(function (t) { Array.prototype.slice.call(t.removedNodes).forEach(function (t) { t === e && S(e); }); }); }).observe(e.parentNode, { childList: !0 }); }(s), y(e, "load", function () { U("iFrame.onload", a, e, t, !0), (!h[u] || !h[u].firstRun) && h[u] && h[u].heightCalculationMethod in l && M({ iframe: e, height: 0, width: 0, type: "init" }); }), U("init", a, e, t, !0), h[u] && (h[u].iframe.iFrameResizer = { close: S.bind(null, h[u].iframe), removeListeners: O.bind(null, h[u].iframe), resize: U.bind(null, "Window resize", "resize", h[u].iframe), moveToAnchor: function (e) { U("Move to anchor", "moveToAnchor:" + e, h[u].iframe, u); }, sendMessage: function (e) { U("Send Message", "message:" + (e = JSON.stringify(e)), h[u].iframe, u); } })); } function N(e, t) { null === d && (d = setTimeout(function () { d = null, e(); }, t)); } function _() { "hidden" !== document.visibilityState && (v("document", "Trigger event: Visiblity change"), N(function () { z("Tab Visable", "resize"); }, 16)); } function z(e, t) { Object.keys(h).forEach(function (n) { (function (e) { return h[e] && "parent" === h[e].resizeFrom && h[e].autoResize && !h[e].firstRun; })(n) && U(e, t, document.getElementById(n), n); }); } function F() { function e(e, t) { t && (function () { if (!t.tagName)
    throw new TypeError("Object is not a valid DOM element"); if ("IFRAME" !== t.tagName.toUpperCase())
    throw new TypeError("Expected <IFRAME> tag, found <" + t.tagName + ">"); }(), L(t, e), n.push(t)); } var n; return function () { var e, t = ["moz", "webkit", "o", "ms"]; for (e = 0; e < t.length && !c; e += 1)
    c = window[t[e] + "RequestAnimationFrame"]; c || v("setup", "RequestAnimationFrame not supported"); }(), y(window, "message", A), y(window, "resize", function () { v("window", "Trigger event: resize"), N(function () { z("Window resize", "resize"); }, 16); }), y(document, "visibilitychange", _), y(document, "-webkit-visibilitychange", _), function (r, o) { switch (n = [], function (e) { e && e.enablePublicMethods && E("enablePublicMethods option has been removed, public methods are now always available in the iFrame"); }(r), typeof o) {
    case "undefined":
    case "string":
        Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e.bind(t, r));
        break;
    case "object":
        e(r, o);
        break;
    default: throw new TypeError("Unexpected data type (" + typeof o + ")");
} return n; }; } }(); }), iframeResizer_contentWindow = chunk_77ecfe7f_js_1.a(function (e) { !function (t) { if ("undefined" != typeof window) {
    var n = !0, r = 10, o = "", i = 0, a = "", s = null, u = "", f = !1, c = { resize: 1, click: 1 }, l = 128, h = !0, d = 1, p = "bodyOffset", m = p, g = !0, y = "", b = {}, w = 32, v = null, B = !1, E = "[iFrameSizer]", I = E.length, A = "", T = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 }, O = "child", S = !0, k = window.parent, R = "*", P = 0, M = !1, C = null, x = 16, U = 1, j = "scroll", L = j, N = window, _ = function () { ue("onMessage function not defined"); }, z = function () { }, F = function () { }, W = { height: function () { return ue("Custom height calculation function not defined"), document.documentElement.offsetHeight; }, width: function () { return ue("Custom width calculation function not defined"), document.body.scrollWidth; } }, Y = {}, D = !1;
    try {
        var q = Object.create({}, { passive: { get: function () { D = !0; } } });
        window.addEventListener("test", ne, q), window.removeEventListener("test", ne, q);
    }
    catch (e) { }
    var H, $, V, X, J, G, K, Q = Date.now || function () { return (new Date).getTime(); }, Z = { bodyOffset: function () { return document.body.offsetHeight + ve("marginTop") + ve("marginBottom"); }, offset: function () { return Z.bodyOffset(); }, bodyScroll: function () { return document.body.scrollHeight; }, custom: function () { return W.height(); }, documentElementOffset: function () { return document.documentElement.offsetHeight; }, documentElementScroll: function () { return document.documentElement.scrollHeight; }, max: function () { return Math.max.apply(null, Ee(Z)); }, min: function () { return Math.min.apply(null, Ee(Z)); }, grow: function () { return Z.max(); }, lowestElement: function () { return Math.max(Z.bodyOffset() || Z.documentElementOffset(), Be("bottom", Ae())); }, taggedElement: function () { return Ie("bottom", "data-iframe-height"); } }, ee = { bodyScroll: function () { return document.body.scrollWidth; }, bodyOffset: function () { return document.body.offsetWidth; }, custom: function () { return W.width(); }, documentElementScroll: function () { return document.documentElement.scrollWidth; }, documentElementOffset: function () { return document.documentElement.offsetWidth; }, scroll: function () { return Math.max(ee.bodyScroll(), ee.documentElementScroll()); }, max: function () { return Math.max.apply(null, Ee(ee)); }, min: function () { return Math.min.apply(null, Ee(ee)); }, rightMostElement: function () { return Be("right", Ae()); }, taggedElement: function () { return Ie("right", "data-iframe-width"); } }, te = (H = Te, J = null, G = 0, K = function () { G = Q(), J = null, X = H.apply($, V), J || ($ = V = null); }, function () { var e = Q(); G || (G = e); var t = x - (e - G); return $ = this, V = arguments, t <= 0 || t > x ? (J && (clearTimeout(J), J = null), G = e, X = H.apply($, V), J || ($ = V = null)) : J || (J = setTimeout(K, t)), X; });
    re(window, "message", Me), re(window, "readystatechange", Ce), Ce();
} function ne() { } function re(e, t, n, r) { e.addEventListener(t, n, !!D && (r || {})); } function oe(e, t, n) { e.removeEventListener(t, n, !1); } function ie(e) { return e.charAt(0).toUpperCase() + e.slice(1); } function ae(e) { return E + "[" + A + "] " + e; } function se(e) { B && "object" == typeof window.console && console.log(ae(e)); } function ue(e) { "object" == typeof window.console && console.warn(ae(e)); } function fe() { var e, r; !function () { function e(e) { return "true" === e; } var r = y.substr(I).split(":"); A = r[0], i = t !== r[1] ? Number(r[1]) : i, f = t !== r[2] ? e(r[2]) : f, B = t !== r[3] ? e(r[3]) : B, w = t !== r[4] ? Number(r[4]) : w, n = t !== r[6] ? e(r[6]) : n, a = r[7], m = t !== r[8] ? r[8] : m, o = r[9], u = r[10], P = t !== r[11] ? Number(r[11]) : P, b.enable = t !== r[12] && e(r[12]), O = t !== r[13] ? r[13] : O, L = t !== r[14] ? r[14] : L; }(), se("Initialising iFrame (" + location.href + ")"), function () { function e(e, t) { return "function" == typeof e && (se("Setup custom " + t + "CalcMethod"), W[t] = e, e = "custom"), e; } var t; "iFrameResizer" in window && Object === window.iFrameResizer.constructor && (t = window.iFrameResizer, se("Reading data from page: " + JSON.stringify(t)), Object.keys(t).forEach(ce, t), _ = "onMessage" in t ? t.onMessage : _, z = "onReady" in t ? t.onReady : z, R = "targetOrigin" in t ? t.targetOrigin : R, L = "widthCalculationMethod" in t ? t.widthCalculationMethod : L, m = e(m = "heightCalculationMethod" in t ? t.heightCalculationMethod : m, "height"), L = e(L, "width")), se("TargetOrigin for parent set to: " + R); }(), t === a && (a = i + "px"), le("margin", (-1 !== (r = a).indexOf("-") && (ue("Negative CSS value ignored for margin"), r = ""), r)), le("background", o), le("padding", u), (e = document.createElement("div")).style.clear = "both", e.style.display = "block", e.style.height = "0", document.body.appendChild(e), me(), ge(), document.documentElement.style.height = "", document.body.style.height = "", se('HTML & body height set to "auto"'), se("Enable public methods"), N.parentIFrame = { autoResize: function (e) { return !0 === e && !1 === n ? (n = !0, ye()) : !1 === e && !0 === n && (n = !1, be()), n; }, close: function () { Pe(0, 0, "close"), se("Disable outgoing messages"), S = !1, se("Remove event listener: Message"), oe(window, "message", Me), !0 === n && be(); }, getId: function () { return A; }, getPageInfo: function (e) { "function" == typeof e ? (F = e, Pe(0, 0, "pageInfo")) : (F = function () { }, Pe(0, 0, "pageInfoStop")); }, moveToAnchor: function (e) { b.findTarget(e); }, reset: function () { Re("parentIFrame.reset"); }, scrollTo: function (e, t) { Pe(t, e, "scrollTo"); }, scrollToOffset: function (e, t) { Pe(t, e, "scrollToOffset"); }, sendMessage: function (e, t) { Pe(0, 0, "message", JSON.stringify(e), t); }, setHeightCalculationMethod: function (e) { m = e, me(); }, setWidthCalculationMethod: function (e) { L = e, ge(); }, setTargetOrigin: function (e) { se("Set targetOrigin: " + e), R = e; }, size: function (e, t) { Oe("size", "parentIFrame.size(" + ((e || "") + (t ? "," + t : "")) + ")", e, t); } }, ye(), b = function () { function e(e) { var n = e.split("#")[1] || e, r = decodeURIComponent(n), o = document.getElementById(r) || document.getElementsByName(r)[0]; t !== o ? function (e) { var r, o, i = (r = e.getBoundingClientRect(), o = { x: window.pageXOffset !== t ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== t ? window.pageYOffset : document.documentElement.scrollTop }, { x: parseInt(r.left, 10) + parseInt(o.x, 10), y: parseInt(r.top, 10) + parseInt(o.y, 10) }); se("Moving to in page link (#" + n + ") at x: " + i.x + " y: " + i.y), Pe(i.y, i.x, "scrollToOffset"); }(o) : (se("In page link (#" + n + ") not found in iFrame, so sending to parent"), Pe(0, 0, "inPageLink", "#" + n)); } function n() { "" !== location.hash && "#" !== location.hash && e(location.href); } return b.enable ? Array.prototype.forEach && document.querySelectorAll ? (se("Setting up location.hash handlers"), Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (t) { "#" !== t.getAttribute("href") && re(t, "click", function (t) { t.preventDefault(), e(this.getAttribute("href")); }); }), re(window, "hashchange", n), setTimeout(n, l)) : ue("In page linking not fully supported in this browser! (See README.md for IE8 workaround)") : se("In page linking not enabled"), { findTarget: e }; }(), Oe("init", "Init message from host page"), z(); } function ce(e) { var t = e.split("Callback"); if (2 === t.length) {
    var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
    this[n] = this[e], delete this[e], ue("Deprecated: '" + e + "' has been renamed '" + n + "'. The old method will be removed in the next major version.");
} } function le(e, n) { t !== n && "" !== n && "null" !== n && (document.body.style[e] = n, se("Body " + e + ' set to "' + n + '"')); } function he(e) { var t = { add: function (t) { function n() { Oe(e.eventName, e.eventType); } Y[t] = n, re(window, t, n, { passive: !0 }); }, remove: function (e) { var t = Y[e]; delete Y[e], oe(window, e, t); } }; e.eventNames && Array.prototype.map ? (e.eventName = e.eventNames[0], e.eventNames.map(t[e.method])) : t[e.method](e.eventName), se(ie(e.method) + " event listener: " + e.eventType); } function de(e) { he({ method: e, eventType: "Animation Start", eventNames: ["animationstart", "webkitAnimationStart"] }), he({ method: e, eventType: "Animation Iteration", eventNames: ["animationiteration", "webkitAnimationIteration"] }), he({ method: e, eventType: "Animation End", eventNames: ["animationend", "webkitAnimationEnd"] }), he({ method: e, eventType: "Input", eventName: "input" }), he({ method: e, eventType: "Mouse Up", eventName: "mouseup" }), he({ method: e, eventType: "Mouse Down", eventName: "mousedown" }), he({ method: e, eventType: "Orientation Change", eventName: "orientationchange" }), he({ method: e, eventType: "Print", eventName: ["afterprint", "beforeprint"] }), he({ method: e, eventType: "Ready State Change", eventName: "readystatechange" }), he({ method: e, eventType: "Touch Start", eventName: "touchstart" }), he({ method: e, eventType: "Touch End", eventName: "touchend" }), he({ method: e, eventType: "Touch Cancel", eventName: "touchcancel" }), he({ method: e, eventType: "Transition Start", eventNames: ["transitionstart", "webkitTransitionStart", "MSTransitionStart", "oTransitionStart", "otransitionstart"] }), he({ method: e, eventType: "Transition Iteration", eventNames: ["transitioniteration", "webkitTransitionIteration", "MSTransitionIteration", "oTransitionIteration", "otransitioniteration"] }), he({ method: e, eventType: "Transition End", eventNames: ["transitionend", "webkitTransitionEnd", "MSTransitionEnd", "oTransitionEnd", "otransitionend"] }), "child" === O && he({ method: e, eventType: "IFrame Resized", eventName: "resize" }); } function pe(e, t, n, r) { return t !== e && (e in n || (ue(e + " is not a valid option for " + r + "CalculationMethod."), e = t), se(r + ' calculation method set to "' + e + '"')), e; } function me() { m = pe(m, p, Z, "height"); } function ge() { L = pe(L, j, ee, "width"); } function ye() { !0 === n ? (de("add"), window.MutationObserver || window.WebKitMutationObserver ? 0 > w ? we() : s = function () { function e(e) { function t(e) { !1 === e.complete && (se("Attach listeners to " + e.src), e.addEventListener("load", o, !1), e.addEventListener("error", i, !1), s.push(e)); } "attributes" === e.type && "src" === e.attributeName ? t(e.target) : "childList" === e.type && Array.prototype.forEach.call(e.target.querySelectorAll("img"), t); } function n(e) { se("Remove listeners from " + e.src), e.removeEventListener("load", o, !1), e.removeEventListener("error", i, !1), function (e) { s.splice(s.indexOf(e), 1); }(e); } function r(e, r, o) { n(e.target), Oe(r, o + ": " + e.target.src, t, t); } function o(e) { r(e, "imageLoad", "Image loaded"); } function i(e) { r(e, "imageLoadFailed", "Image load failed"); } var a, s = [], u = window.MutationObserver || window.WebKitMutationObserver, f = (a = document.querySelector("body"), f = new u(function (t) { Oe("mutationObserver", "mutationObserver: " + t[0].target + " " + t[0].type), t.forEach(e); }), se("Create body MutationObserver"), f.observe(a, { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 }), f); return { disconnect: function () { "disconnect" in f && (se("Disconnect body MutationObserver"), f.disconnect(), s.forEach(n)); } }; }() : (se("MutationObserver not supported in this browser!"), we())) : se("Auto Resize disabled"); } function be() { de("remove"), null !== s && s.disconnect(), clearInterval(v); } function we() { 0 !== w && (se("setInterval: " + w + "ms"), v = setInterval(function () { Oe("interval", "setInterval: " + w); }, Math.abs(w))); } function ve(e, t) { var n = 0; return t = t || document.body, n = null !== (n = document.defaultView.getComputedStyle(t, null)) ? n[e] : 0, parseInt(n, r); } function Be(e, t) { for (var n = t.length, r = 0, o = 0, i = ie(e), a = Q(), s = 0; s < n; s++)
    (r = t[s].getBoundingClientRect()[e] + ve("margin" + i, t[s])) > o && (o = r); return a = Q() - a, se("Parsed " + n + " HTML elements"), se("Element position calculated in " + a + "ms"), function (e) { e > x / 2 && se("Event throttle increased to " + (x = 2 * e) + "ms"); }(a), o; } function Ee(e) { return [e.bodyOffset(), e.bodyScroll(), e.documentElementOffset(), e.documentElementScroll()]; } function Ie(e, t) { var n = document.querySelectorAll("[" + t + "]"); return 0 === n.length && (ue("No tagged elements (" + t + ") found on page"), document.querySelectorAll("body *")), Be(e, n); } function Ae() { return document.querySelectorAll("body *"); } function Te(e, n, r, o) { var i, a; !function () { function e(e, t) { return !(Math.abs(e - t) <= P); } return i = t !== r ? r : Z[m](), a = t !== o ? o : ee[L](), e(d, i) || f && e(U, a); }() && "init" !== e ? e in { init: 1, interval: 1, size: 1 } || !(m in T || f && L in T) ? e in { interval: 1 } || se("No change in size detected") : Re(n) : (Se(), Pe(d = i, U = a, e)); } function Oe(e, t, n, r) { M && e in c ? se("Trigger event cancelled: " + e) : (e in { reset: 1, resetPage: 1, init: 1 } || se("Trigger event: " + t), "init" === e ? Te(e, t, n, r) : te(e, t, n, r)); } function Se() { M || (M = !0, se("Trigger event lock on")), clearTimeout(C), C = setTimeout(function () { M = !1, se("Trigger event lock off"), se("--"); }, l); } function ke(e) { d = Z[m](), U = ee[L](), Pe(d, U, e); } function Re(e) { var t = m; m = p, se("Reset trigger event: " + e), Se(), ke("reset"), m = t; } function Pe(e, n, r, o, i) { var a; !0 === S && (t === i ? i = R : se("Message targetOrigin: " + i), se("Sending message to host page (" + (a = A + ":" + e + ":" + n + ":" + r + (t !== o ? ":" + o : "")) + ")"), k.postMessage(E + a, i)); } function Me(t) { var n, r = { init: function () { y = t.data, k = t.source, fe(), h = !1, setTimeout(function () { g = !1; }, l); }, reset: function () { g ? se("Page reset ignored by init") : (se("Page size reset by host page"), ke("resetPage")); }, resize: function () { Oe("resizeParent", "Parent window requested size check"); }, moveToAnchor: function () { b.findTarget(i()); }, inPageLink: function () { this.moveToAnchor(); }, pageInfo: function () { var e = i(); se("PageInfoFromParent called from parent: " + e), F(JSON.parse(e)), se(" --"); }, message: function () { var e = i(); se("onMessage called from parent: " + e), _(JSON.parse(e)), se(" --"); } }; function o() { return t.data.split("]")[1].split(":")[0]; } function i() { return t.data.substr(t.data.indexOf(":") + 1); } function a() { return t.data.split(":")[2] in { true: 1, false: 1 }; } E === ("" + t.data).substr(0, I) && (!1 === h ? (n = o()) in r ? r[n]() : !e.exports && "iFrameResize" in window || "jQuery" in window && "iFrameResize" in window.jQuery.prototype || a() || ue("Unexpected message (" + t.data + ")") : a() ? r.init() : se('Ignored message of type "' + o() + '". Received before initialization.')); } function Ce() { "loading" !== document.readyState && window.parent.postMessage("[iFrameResizerChild]Ready", "*"); } }(); }), iframeResizer$1 = iframeResizer, iframeResizerContentWindow = iframeResizer_contentWindow, js = { iframeResizer: iframeResizer$1, iframeResizerContentWindow: iframeResizerContentWindow }, iframeResizer$2 = js, CrdsSubscribe = function () { function e() { var e = this; this.modalIsShowing = !1, this.handleSubscribeClick = function () { e.modalIsShowing = !0; }, this.handleModalClose = function () { e.modalIsShowing = !1; }; } return e.prototype.componentDidUpdate = function () { iframeResizer$2.iframeResizer({}, this.frame); }, e.prototype.render = function () { var e = this; return crds_components_core_js_1.h(chunk_9d0e91ad_js_1.a, null, crds_components_core_js_1.h("div", { class: "subscribe-script" }), crds_components_core_js_1.h("button", { onClick: this.handleSubscribeClick, class: "subscribe-button" }, this.title), crds_components_core_js_1.h("crds-modal", { title: this.title, isActive: this.modalIsShowing, onClose: this.handleModalClose }, crds_components_core_js_1.h("iframe", { ref: function (t) { return e.frame = t; }, src: this.src, class: "subscribe-frame" }))); }, Object.defineProperty(e, "is", { get: function () { return "crds-subscribe"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { modalIsShowing: { state: !0 }, src: { type: String, attr: "src" }, title: { type: String, attr: "title" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".subscribe-button.sc-crds-subscribe{background-color:transparent;border:0;color:#0095d9;cursor:pointer;display:inline-block;font:inherit;font-weight:600;line-height:normal;margin:0;padding:11px 15px}.subscribe-button.sc-crds-subscribe:focus{border:0;outline:none}.subscribe-frame.sc-crds-subscribe{border:none;height:100%;width:100%}"; }, enumerable: !0, configurable: !0 }), e; }(), SnailTrail = function () { function e() { this.env = "prod", this.data = {}; } return e.prototype.componentWillLoad = function () { var e = this; (this.src || this.name && this.env) && chunk_15914d3f_js_1.a.get(this.src || "https://crds-data.netlify.com/snail-trails/" + this.name + "/" + this.env + ".json").then(function (t) { return e.data = t.data; }); }, e.prototype.listItem = function (e) { return e.subscribe && e.src ? crds_components_core_js_1.h("crds-subscribe", { src: e.src, title: e.title }) : e.href ? crds_components_core_js_1.h("snail-trail-link", { href: e.href, automationId: e["data-automation-id"] }, e.title) : crds_components_core_js_1.h("strong", null, e.title); }, e.prototype.list = function (e) { var t = this; return e.map(function (e) { return crds_components_core_js_1.h("li", null, t.listItem(e)); }); }, e.prototype.navSections = function () { var e = this; if (this.data.nav)
    return this.data.nav.map(function (t) { return crds_components_core_js_1.h("ul", null, e.list(t)); }); }, e.prototype.render = function () { if (this.data.nav || 0 != this.element.childElementCount)
    return crds_components_core_js_1.h(chunk_9d0e91ad_js_1.a, null, crds_components_core_js_1.h("nav", null, crds_components_core_js_1.h("div", null, this.element.childElementCount > 0 && crds_components_core_js_1.h("slot", null), 0 == this.element.childElementCount && crds_components_core_js_1.h(chunk_9d0e91ad_js_1.a, null, this.navSections())))); }, Object.defineProperty(e, "is", { get: function () { return "snail-trail"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { data: { state: !0 }, element: { elementRef: !0 }, env: { type: String, attr: "env" }, name: { type: String, attr: "name" }, src: { type: String, attr: "src" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return "nav.sc-snail-trail{font-family:acumin-pro,helvetica,arial,sans-serif!important;font-weight:300!important;background-color:#fff;-webkit-box-shadow:0 1px 6px 0 rgba(0,0,0,.14);box-shadow:0 1px 6px 0 rgba(0,0,0,.14);font-size:14px;padding-left:20px;position:relative}\@media (min-width:1170px){nav.sc-snail-trail{padding-left:0}}nav.sc-snail-trail > div.sc-snail-trail{display:-ms-flexbox;display:flex;-webkit-overflow-scrolling:touch;overflow-x:auto;overflow-y:hidden;position:relative;scrollbar-width:none;margin:0 auto;max-width:1170px}\@media (max-width:992px){nav.sc-snail-trail:after{background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),to(rgba(0,0,0,.8)));background:linear-gradient(90deg,hsla(0,0%,100%,0),rgba(0,0,0,.8));content:\"\";display:inline-block;height:100%;opacity:.3;position:absolute;right:0;top:0;width:20px}}strong.sc-snail-trail{color:#4d4d4d;display:inline-block;font-weight:600;margin-right:15px;padding:11px 0;text-transform:capitalize;white-space:nowrap}ul.sc-snail-trail{padding-left:0;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin-bottom:0;margin-top:0}ul.sc-snail-trail   li.sc-snail-trail{list-style:none}ul.sc-snail-trail:not(:last-of-type):after{border-right:1px solid #d8d8d8;content:\"\";height:calc(100% - 22px);width:1px}li.sc-snail-trail{display:inline-block;text-transform:capitalize;white-space:nowrap}"; }, enumerable: !0, configurable: !0 }), e; }(), maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode;
exports.CrdsModal = CrdsModal;
exports.CrdsSubscribe = CrdsSubscribe;
exports.SnailTrail = SnailTrail;
function error(e) { throw new RangeError(errors[e]); }
function map(e, t) { for (var n = e.length, r = []; n--;)
    r[n] = t(e[n]); return r; }
function mapDomain(e, t) { var n = e.split("@"), r = ""; return n.length > 1 && (r = n[0] + "@", e = n[1]), r + map((e = e.replace(regexSeparators, ".")).split("."), t).join("."); }
function ucs2decode(e) { for (var t, n, r = [], o = 0, i = e.length; o < i;)
    (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t); return r; }
function digitToBasic(e, t) { return e + 22 + 75 * (e < 26) - ((0 != t) << 5); }
function adapt(e, t, n) { var r = 0; for (e = n ? floor(e / damp) : e >> 1, e += floor(e / t); e > baseMinusTMin * tMax >> 1; r += base)
    e = floor(e / baseMinusTMin); return floor(r + (baseMinusTMin + 1) * e / (e + skew)); }
function encode(e) { var t, n, r, o, i, a, s, u, f, c, l, h, d, p, m, g = []; for (h = (e = ucs2decode(e)).length, t = initialN, n = 0, i = initialBias, a = 0; a < h; ++a)
    (l = e[a]) < 128 && g.push(stringFromCharCode(l)); for (r = o = g.length, o && g.push(delimiter); r < h;) {
    for (s = maxInt, a = 0; a < h; ++a)
        (l = e[a]) >= t && l < s && (s = l);
    for (s - t > floor((maxInt - n) / (d = r + 1)) && error("overflow"), n += (s - t) * d, t = s, a = 0; a < h; ++a)
        if ((l = e[a]) < t && ++n > maxInt && error("overflow"), l == t) {
            for (u = n, f = base; !(u < (c = f <= i ? tMin : f >= i + tMax ? tMax : f - i)); f += base)
                g.push(stringFromCharCode(digitToBasic(c + (m = u - c) % (p = base - c), 0))), u = floor(m / p);
            g.push(stringFromCharCode(digitToBasic(u, 0))), i = adapt(n, d, r == o), n = 0, ++r;
        }
    ++n, ++t;
} return g.join(""); }
function toASCII(e) { return mapDomain(e, function (e) { return regexNonASCII.test(e) ? "xn--" + encode(e) : e; }); }
var lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, inited = !1;
function init() { inited = !0; for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t)
    lookup[t] = e[t], revLookup[e.charCodeAt(t)] = t; revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63; }
function toByteArray(e) { var t, n, r, o, i, a; inited || init(); var s = e.length; if (s % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4"); a = new Arr(3 * s / 4 - (i = "=" === e[s - 2] ? 2 : "=" === e[s - 1] ? 1 : 0)), r = i > 0 ? s - 4 : s; var u = 0; for (t = 0, n = 0; t < r; t += 4, n += 3)
    o = revLookup[e.charCodeAt(t)] << 18 | revLookup[e.charCodeAt(t + 1)] << 12 | revLookup[e.charCodeAt(t + 2)] << 6 | revLookup[e.charCodeAt(t + 3)], a[u++] = o >> 16 & 255, a[u++] = o >> 8 & 255, a[u++] = 255 & o; return 2 === i ? (o = revLookup[e.charCodeAt(t)] << 2 | revLookup[e.charCodeAt(t + 1)] >> 4, a[u++] = 255 & o) : 1 === i && (o = revLookup[e.charCodeAt(t)] << 10 | revLookup[e.charCodeAt(t + 1)] << 4 | revLookup[e.charCodeAt(t + 2)] >> 2, a[u++] = o >> 8 & 255, a[u++] = 255 & o), a; }
function tripletToBase64(e) { return lookup[e >> 18 & 63] + lookup[e >> 12 & 63] + lookup[e >> 6 & 63] + lookup[63 & e]; }
function encodeChunk(e, t, n) { for (var r = [], o = t; o < n; o += 3)
    r.push(tripletToBase64((e[o] << 16) + (e[o + 1] << 8) + e[o + 2])); return r.join(""); }
function fromByteArray(e) { var t; inited || init(); for (var n = e.length, r = n % 3, o = "", i = [], a = 0, s = n - r; a < s; a += 16383)
    i.push(encodeChunk(e, a, a + 16383 > s ? s : a + 16383)); return 1 === r ? (o += lookup[(t = e[n - 1]) >> 2], o += lookup[t << 4 & 63], o += "==") : 2 === r && (o += lookup[(t = (e[n - 2] << 8) + e[n - 1]) >> 10], o += lookup[t >> 4 & 63], o += lookup[t << 2 & 63], o += "="), i.push(o), i.join(""); }
function read(e, t, n, r, o) { var i, a, s = 8 * o - r - 1, u = (1 << s) - 1, f = u >> 1, c = -7, l = n ? o - 1 : 0, h = n ? -1 : 1, d = e[t + l]; for (l += h, i = d & (1 << -c) - 1, d >>= -c, c += s; c > 0; i = 256 * i + e[t + l], l += h, c -= 8)
    ; for (a = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; a = 256 * a + e[t + l], l += h, c -= 8)
    ; if (0 === i)
    i = 1 - f;
else {
    if (i === u)
        return a ? NaN : 1 / 0 * (d ? -1 : 1);
    a += Math.pow(2, r), i -= f;
} return (d ? -1 : 1) * a * Math.pow(2, i - r); }
function write(e, t, n, r, o, i) { var a, s, u, f = 8 * i - o - 1, c = (1 << f) - 1, l = c >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : i - 1, p = r ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 && (a++, u /= 2), a + l >= c ? (s = 0, a = c) : a + l >= 1 ? (s = (t * u - 1) * Math.pow(2, o), a += l) : (s = t * Math.pow(2, l - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + d] = 255 & s, d += p, s /= 256, o -= 8)
    ; for (a = a << o | s, f += o; f > 0; e[n + d] = 255 & a, d += p, a /= 256, f -= 8)
    ; e[n + d - p] |= 128 * m; }
var toString = {}.toString, isArray = Array.isArray || function (e) { return "[object Array]" == toString.call(e); }, INSPECT_MAX_BYTES = 50;
function kMaxLength() { return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823; }
function createBuffer(e, t) { if (kMaxLength() < t)
    throw new RangeError("Invalid typed array length"); return Buffer.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Buffer.prototype : (null === e && (e = new Buffer(t)), e.length = t), e; }
function Buffer(e, t, n) { if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer))
    return new Buffer(e, t, n); if ("number" == typeof e) {
    if ("string" == typeof t)
        throw new Error("If encoding is specified then the first argument must be a string");
    return allocUnsafe(this, e);
} return from(this, e, t, n); }
function from(e, t, n, r) { if ("number" == typeof t)
    throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? fromArrayBuffer(e, t, n, r) : "string" == typeof t ? fromString(e, t, n) : fromObject(e, t); }
function assertSize(e) { if ("number" != typeof e)
    throw new TypeError('"size" argument must be a number'); if (e < 0)
    throw new RangeError('"size" argument must not be negative'); }
function alloc(e, t, n, r) { return assertSize(t), t <= 0 ? createBuffer(e, t) : void 0 !== n ? "string" == typeof r ? createBuffer(e, t).fill(n, r) : createBuffer(e, t).fill(n) : createBuffer(e, t); }
function allocUnsafe(e, t) { if (assertSize(t), e = createBuffer(e, t < 0 ? 0 : 0 | checked(t)), !Buffer.TYPED_ARRAY_SUPPORT)
    for (var n = 0; n < t; ++n)
        e[n] = 0; return e; }
function fromString(e, t, n) { if ("string" == typeof n && "" !== n || (n = "utf8"), !Buffer.isEncoding(n))
    throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | byteLength(t, n), o = (e = createBuffer(e, r)).write(t, n); return o !== r && (e = e.slice(0, o)), e; }
function fromArrayLike(e, t) { var n = t.length < 0 ? 0 : 0 | checked(t.length); e = createBuffer(e, n); for (var r = 0; r < n; r += 1)
    e[r] = 255 & t[r]; return e; }
function fromArrayBuffer(e, t, n, r) { if (n < 0 || t.byteLength < n)
    throw new RangeError("'offset' is out of bounds"); if (t.byteLength < n + (r || 0))
    throw new RangeError("'length' is out of bounds"); return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), Buffer.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Buffer.prototype : e = fromArrayLike(e, t), e; }
function fromObject(e, t) { if (internalIsBuffer(t)) {
    var n = 0 | checked(t.length);
    return 0 === (e = createBuffer(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
} if (t) {
    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t)
        return "number" != typeof t.length || isnan(t.length) ? createBuffer(e, 0) : fromArrayLike(e, t);
    if ("Buffer" === t.type && isArray(t.data))
        return fromArrayLike(e, t.data);
} throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."); }
function checked(e) { if (e >= kMaxLength())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes"); return 0 | e; }
function internalIsBuffer(e) { return !(null == e || !e._isBuffer); }
function byteLength(e, t) { if (internalIsBuffer(e))
    return e.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
    return e.byteLength; "string" != typeof e && (e = "" + e); var n = e.length; if (0 === n)
    return 0; for (var r = !1;;)
    switch (t) {
        case "ascii":
        case "latin1":
        case "binary": return n;
        case "utf8":
        case "utf-8":
        case void 0: return utf8ToBytes(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return 2 * n;
        case "hex": return n >>> 1;
        case "base64": return base64ToBytes(e).length;
        default:
            if (r)
                return utf8ToBytes(e).length;
            t = ("" + t).toLowerCase(), r = !0;
    } }
function slowToString(e, t, n) { var r = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length)
    return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
    return ""; if ((n >>>= 0) <= (t >>>= 0))
    return ""; for (e || (e = "utf8");;)
    switch (e) {
        case "hex": return hexSlice(this, t, n);
        case "utf8":
        case "utf-8": return utf8Slice(this, t, n);
        case "ascii": return asciiSlice(this, t, n);
        case "latin1":
        case "binary": return latin1Slice(this, t, n);
        case "base64": return base64Slice(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return utf16leSlice(this, t, n);
        default:
            if (r)
                throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), r = !0;
    } }
function swap(e, t, n) { var r = e[t]; e[t] = e[n], e[n] = r; }
function bidirectionalIndexOf(e, t, n, r, o) { if (0 === e.length)
    return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
    if (o)
        return -1;
    n = e.length - 1;
}
else if (n < 0) {
    if (!o)
        return -1;
    n = 0;
} if ("string" == typeof t && (t = Buffer.from(t, r)), internalIsBuffer(t))
    return 0 === t.length ? -1 : arrayIndexOf(e, t, n, r, o); if ("number" == typeof t)
    return t &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : arrayIndexOf(e, [t], n, r, o); throw new TypeError("val must be string, number or Buffer"); }
function arrayIndexOf(e, t, n, r, o) { var i, a = 1, s = e.length, u = t.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
    if (e.length < 2 || t.length < 2)
        return -1;
    a = 2, s /= 2, u /= 2, n /= 2;
} function f(e, t) { return 1 === a ? e[t] : e.readUInt16BE(t * a); } if (o) {
    var c = -1;
    for (i = n; i < s; i++)
        if (f(e, i) === f(t, -1 === c ? 0 : i - c)) {
            if (-1 === c && (c = i), i - c + 1 === u)
                return c * a;
        }
        else
            -1 !== c && (i -= i - c), c = -1;
}
else
    for (n + u > s && (n = s - u), i = n; i >= 0; i--) {
        for (var l = !0, h = 0; h < u; h++)
            if (f(e, i + h) !== f(t, h)) {
                l = !1;
                break;
            }
        if (l)
            return i;
    } return -1; }
function hexWrite(e, t, n, r) { n = Number(n) || 0; var o = e.length - n; r ? (r = Number(r)) > o && (r = o) : r = o; var i = t.length; if (i % 2 != 0)
    throw new TypeError("Invalid hex string"); r > i / 2 && (r = i / 2); for (var a = 0; a < r; ++a) {
    var s = parseInt(t.substr(2 * a, 2), 16);
    if (isNaN(s))
        return a;
    e[n + a] = s;
} return a; }
function utf8Write(e, t, n, r) { return blitBuffer(utf8ToBytes(t, e.length - n), e, n, r); }
function asciiWrite(e, t, n, r) { return blitBuffer(asciiToBytes(t), e, n, r); }
function latin1Write(e, t, n, r) { return asciiWrite(e, t, n, r); }
function base64Write(e, t, n, r) { return blitBuffer(base64ToBytes(t), e, n, r); }
function ucs2Write(e, t, n, r) { return blitBuffer(utf16leToBytes(t, e.length - n), e, n, r); }
function base64Slice(e, t, n) { return fromByteArray(0 === t && n === e.length ? e : e.slice(t, n)); }
function utf8Slice(e, t, n) { n = Math.min(e.length, n); for (var r = [], o = t; o < n;) {
    var i, a, s, u, f = e[o], c = null, l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
    if (o + l <= n)
        switch (l) {
            case 1:
                f < 128 && (c = f);
                break;
            case 2:
                128 == (192 & (i = e[o + 1])) && (u = (31 & f) << 6 | 63 & i) > 127 && (c = u);
                break;
            case 3:
                a = e[o + 2], 128 == (192 & (i = e[o + 1])) && 128 == (192 & a) && (u = (15 & f) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (c = u);
                break;
            case 4: a = e[o + 2], s = e[o + 3], 128 == (192 & (i = e[o + 1])) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & f) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (c = u);
        }
    null === c ? (c = 65533, l = 1) : c > 65535 && (r.push((c -= 65536) >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), o += l;
} return decodeCodePointsArray(r); }
Buffer.TYPED_ARRAY_SUPPORT = void 0 === chunk_15914d3f_js_1.b.TYPED_ARRAY_SUPPORT || chunk_15914d3f_js_1.b.TYPED_ARRAY_SUPPORT, Buffer.poolSize = 8192, Buffer._augment = function (e) { return e.__proto__ = Buffer.prototype, e; }, Buffer.from = function (e, t, n) { return from(null, e, t, n); }, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, Buffer.__proto__ = Uint8Array), Buffer.alloc = function (e, t, n) { return alloc(null, e, t, n); }, Buffer.allocUnsafe = function (e) { return allocUnsafe(null, e); }, Buffer.allocUnsafeSlow = function (e) { return allocUnsafe(null, e); }, Buffer.isBuffer = isBuffer, Buffer.compare = function (e, t) { if (!internalIsBuffer(e) || !internalIsBuffer(t))
    throw new TypeError("Arguments must be Buffers"); if (e === t)
    return 0; for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
    if (e[o] !== t[o]) {
        n = e[o], r = t[o];
        break;
    } return n < r ? -1 : r < n ? 1 : 0; }, Buffer.isEncoding = function (e) { switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le": return !0;
    default: return !1;
} }, Buffer.concat = function (e, t) { if (!isArray(e))
    throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length)
    return Buffer.alloc(0); var n; if (void 0 === t)
    for (t = 0, n = 0; n < e.length; ++n)
        t += e[n].length; var r = Buffer.allocUnsafe(t), o = 0; for (n = 0; n < e.length; ++n) {
    var i = e[n];
    if (!internalIsBuffer(i))
        throw new TypeError('"list" argument must be an Array of Buffers');
    i.copy(r, o), o += i.length;
} return r; }, Buffer.byteLength = byteLength, Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function () { var e = this.length; if (e % 2 != 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2)
    swap(this, t, t + 1); return this; }, Buffer.prototype.swap32 = function () { var e = this.length; if (e % 4 != 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4)
    swap(this, t, t + 3), swap(this, t + 1, t + 2); return this; }, Buffer.prototype.swap64 = function () { var e = this.length; if (e % 8 != 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8)
    swap(this, t, t + 7), swap(this, t + 1, t + 6), swap(this, t + 2, t + 5), swap(this, t + 3, t + 4); return this; }, Buffer.prototype.toString = function () { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? utf8Slice(this, 0, e) : slowToString.apply(this, arguments); }, Buffer.prototype.equals = function (e) { if (!internalIsBuffer(e))
    throw new TypeError("Argument must be a Buffer"); return this === e || 0 === Buffer.compare(this, e); }, Buffer.prototype.inspect = function () { var e = "", t = INSPECT_MAX_BYTES; return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"; }, Buffer.prototype.compare = function (e, t, n, r, o) { if (!internalIsBuffer(e))
    throw new TypeError("Argument must be a Buffer"); if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length)
    throw new RangeError("out of range index"); if (r >= o && t >= n)
    return 0; if (r >= o)
    return -1; if (t >= n)
    return 1; if (this === e)
    return 0; for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), u = this.slice(r, o), f = e.slice(t, n), c = 0; c < s; ++c)
    if (u[c] !== f[c]) {
        i = u[c], a = f[c];
        break;
    } return i < a ? -1 : a < i ? 1 : 0; }, Buffer.prototype.includes = function (e, t, n) { return -1 !== this.indexOf(e, t, n); }, Buffer.prototype.indexOf = function (e, t, n) { return bidirectionalIndexOf(this, e, t, n, !0); }, Buffer.prototype.lastIndexOf = function (e, t, n) { return bidirectionalIndexOf(this, e, t, n, !1); }, Buffer.prototype.write = function (e, t, n, r) { if (void 0 === t)
    r = "utf8", n = this.length, t = 0;
else if (void 0 === n && "string" == typeof t)
    r = t, n = this.length, t = 0;
else {
    if (!isFinite(t))
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
} var o = this.length - t; if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length)
    throw new RangeError("Attempt to write outside buffer bounds"); r || (r = "utf8"); for (var i = !1;;)
    switch (r) {
        case "hex": return hexWrite(this, e, t, n);
        case "utf8":
        case "utf-8": return utf8Write(this, e, t, n);
        case "ascii": return asciiWrite(this, e, t, n);
        case "latin1":
        case "binary": return latin1Write(this, e, t, n);
        case "base64": return base64Write(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return ucs2Write(this, e, t, n);
        default:
            if (i)
                throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(), i = !0;
    } }, Buffer.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; };
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(e) { var t = e.length; if (t <= MAX_ARGUMENTS_LENGTH)
    return String.fromCharCode.apply(String, e); for (var n = "", r = 0; r < t;)
    n += String.fromCharCode.apply(String, e.slice(r, r += MAX_ARGUMENTS_LENGTH)); return n; }
function asciiSlice(e, t, n) { var r = ""; n = Math.min(e.length, n); for (var o = t; o < n; ++o)
    r += String.fromCharCode(127 & e[o]); return r; }
function latin1Slice(e, t, n) { var r = ""; n = Math.min(e.length, n); for (var o = t; o < n; ++o)
    r += String.fromCharCode(e[o]); return r; }
function hexSlice(e, t, n) { var r = e.length; (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r); for (var o = "", i = t; i < n; ++i)
    o += toHex(e[i]); return o; }
function utf16leSlice(e, t, n) { for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
    o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o; }
function checkOffset(e, t, n) { if (e % 1 != 0 || e < 0)
    throw new RangeError("offset is not uint"); if (e + t > n)
    throw new RangeError("Trying to access beyond buffer length"); }
function checkInt(e, t, n, r, o, i) { if (!internalIsBuffer(e))
    throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > o || t < i)
    throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length)
    throw new RangeError("Index out of range"); }
function objectWriteUInt16(e, t, n, r) { t < 0 && (t = 65535 + t + 1); for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
    e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o); }
function objectWriteUInt32(e, t, n, r) { t < 0 && (t = 4294967295 + t + 1); for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
    e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255; }
function checkIEEE754(e, t, n, r, o, i) { if (n + r > e.length)
    throw new RangeError("Index out of range"); if (n < 0)
    throw new RangeError("Index out of range"); }
function writeFloat(e, t, n, r, o) { return o || checkIEEE754(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), write(e, t, n, r, 23, 4), n + 4; }
function writeDouble(e, t, n, r, o) { return o || checkIEEE754(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), write(e, t, n, r, 52, 8), n + 8; }
Buffer.prototype.slice = function (e, t) { var n, r = this.length; if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), Buffer.TYPED_ARRAY_SUPPORT)
    (n = this.subarray(e, t)).__proto__ = Buffer.prototype;
else {
    var o = t - e;
    n = new Buffer(o, void 0);
    for (var i = 0; i < o; ++i)
        n[i] = this[i + e];
} return n; }, Buffer.prototype.readUIntLE = function (e, t, n) { e |= 0, t |= 0, n || checkOffset(e, t, this.length); for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);)
    r += this[e + i] * o; return r; }, Buffer.prototype.readUIntBE = function (e, t, n) { e |= 0, t |= 0, n || checkOffset(e, t, this.length); for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);)
    r += this[e + --t] * o; return r; }, Buffer.prototype.readUInt8 = function (e, t) { return t || checkOffset(e, 1, this.length), this[e]; }, Buffer.prototype.readUInt16LE = function (e, t) { return t || checkOffset(e, 2, this.length), this[e] | this[e + 1] << 8; }, Buffer.prototype.readUInt16BE = function (e, t) { return t || checkOffset(e, 2, this.length), this[e] << 8 | this[e + 1]; }, Buffer.prototype.readUInt32LE = function (e, t) { return t || checkOffset(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]; }, Buffer.prototype.readUInt32BE = function (e, t) { return t || checkOffset(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]); }, Buffer.prototype.readIntLE = function (e, t, n) { e |= 0, t |= 0, n || checkOffset(e, t, this.length); for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);)
    r += this[e + i] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r; }, Buffer.prototype.readIntBE = function (e, t, n) { e |= 0, t |= 0, n || checkOffset(e, t, this.length); for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);)
    i += this[e + --r] * o; return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i; }, Buffer.prototype.readInt8 = function (e, t) { return t || checkOffset(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]; }, Buffer.prototype.readInt16LE = function (e, t) { t || checkOffset(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n; }, Buffer.prototype.readInt16BE = function (e, t) { t || checkOffset(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n; }, Buffer.prototype.readInt32LE = function (e, t) { return t || checkOffset(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24; }, Buffer.prototype.readInt32BE = function (e, t) { return t || checkOffset(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]; }, Buffer.prototype.readFloatLE = function (e, t) { return t || checkOffset(e, 4, this.length), read(this, e, !0, 23, 4); }, Buffer.prototype.readFloatBE = function (e, t) { return t || checkOffset(e, 4, this.length), read(this, e, !1, 23, 4); }, Buffer.prototype.readDoubleLE = function (e, t) { return t || checkOffset(e, 8, this.length), read(this, e, !0, 52, 8); }, Buffer.prototype.readDoubleBE = function (e, t) { return t || checkOffset(e, 8, this.length), read(this, e, !1, 52, 8); }, Buffer.prototype.writeUIntLE = function (e, t, n, r) { e = +e, t |= 0, n |= 0, r || checkInt(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var o = 1, i = 0; for (this[t] = 255 & e; ++i < n && (o *= 256);)
    this[t + i] = e / o & 255; return t + n; }, Buffer.prototype.writeUIntBE = function (e, t, n, r) { e = +e, t |= 0, n |= 0, r || checkInt(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var o = n - 1, i = 1; for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);)
    this[t + o] = e / i & 255; return t + n; }, Buffer.prototype.writeUInt8 = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 1, 255, 0), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1; }, Buffer.prototype.writeUInt16LE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2; }, Buffer.prototype.writeUInt16BE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2; }, Buffer.prototype.writeUInt32LE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : objectWriteUInt32(this, e, t, !0), t + 4; }, Buffer.prototype.writeUInt32BE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1), t + 4; }, Buffer.prototype.writeIntLE = function (e, t, n, r) { if (e = +e, t |= 0, !r) {
    var o = Math.pow(2, 8 * n - 1);
    checkInt(this, e, t, n, o - 1, -o);
} var i = 0, a = 1, s = 0; for (this[t] = 255 & e; ++i < n && (a *= 256);)
    e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255; return t + n; }, Buffer.prototype.writeIntBE = function (e, t, n, r) { if (e = +e, t |= 0, !r) {
    var o = Math.pow(2, 8 * n - 1);
    checkInt(this, e, t, n, o - 1, -o);
} var i = n - 1, a = 1, s = 0; for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);)
    e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255; return t + n; }, Buffer.prototype.writeInt8 = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 1, 127, -128), Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1; }, Buffer.prototype.writeInt16LE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0), t + 2; }, Buffer.prototype.writeInt16BE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1), t + 2; }, Buffer.prototype.writeInt32LE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 4, 2147483647, -2147483648), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : objectWriteUInt32(this, e, t, !0), t + 4; }, Buffer.prototype.writeInt32BE = function (e, t, n) { return e = +e, t |= 0, n || checkInt(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1), t + 4; }, Buffer.prototype.writeFloatLE = function (e, t, n) { return writeFloat(this, e, t, !0, n); }, Buffer.prototype.writeFloatBE = function (e, t, n) { return writeFloat(this, e, t, !1, n); }, Buffer.prototype.writeDoubleLE = function (e, t, n) { return writeDouble(this, e, t, !0, n); }, Buffer.prototype.writeDoubleBE = function (e, t, n) { return writeDouble(this, e, t, !1, n); }, Buffer.prototype.copy = function (e, t, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n)
    return 0; if (0 === e.length || 0 === this.length)
    return 0; if (t < 0)
    throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length)
    throw new RangeError("sourceStart out of bounds"); if (r < 0)
    throw new RangeError("sourceEnd out of bounds"); r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n); var o, i = r - n; if (this === e && n < t && t < r)
    for (o = i - 1; o >= 0; --o)
        e[o + t] = this[o + n];
else if (i < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
    for (o = 0; o < i; ++o)
        e[o + t] = this[o + n];
else
    Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t); return i; }, Buffer.prototype.fill = function (e, t, n, r) { if ("string" == typeof e) {
    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
        var o = e.charCodeAt(0);
        o < 256 && (e = o);
    }
    if (void 0 !== r && "string" != typeof r)
        throw new TypeError("encoding must be a string");
    if ("string" == typeof r && !Buffer.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
}
else
    "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < n)
    throw new RangeError("Out of range index"); if (n <= t)
    return this; var i; if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
    for (i = t; i < n; ++i)
        this[i] = e;
else {
    var a = internalIsBuffer(e) ? e : utf8ToBytes(new Buffer(e, r).toString()), s = a.length;
    for (i = 0; i < n - t; ++i)
        this[i + t] = a[i % s];
} return this; };
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
function base64clean(e) { if ((e = stringtrim(e).replace(INVALID_BASE64_RE, "")).length < 2)
    return ""; for (; e.length % 4 != 0;)
    e += "="; return e; }
function stringtrim(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ""); }
function toHex(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16); }
function utf8ToBytes(e, t) { var n; t = t || 1 / 0; for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
        if (!o) {
            if (n > 56319) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
            }
            if (a + 1 === r) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
            }
            o = n;
            continue;
        }
        if (n < 56320) {
            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
            continue;
        }
        n = 65536 + (o - 55296 << 10 | n - 56320);
    }
    else
        o && (t -= 3) > -1 && i.push(239, 191, 189);
    if (o = null, n < 128) {
        if ((t -= 1) < 0)
            break;
        i.push(n);
    }
    else if (n < 2048) {
        if ((t -= 2) < 0)
            break;
        i.push(n >> 6 | 192, 63 & n | 128);
    }
    else if (n < 65536) {
        if ((t -= 3) < 0)
            break;
        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
    }
    else {
        if (!(n < 1114112))
            throw new Error("Invalid code point");
        if ((t -= 4) < 0)
            break;
        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
    }
} return i; }
function asciiToBytes(e) { for (var t = [], n = 0; n < e.length; ++n)
    t.push(255 & e.charCodeAt(n)); return t; }
function utf16leToBytes(e, t) { for (var n, r, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i)
    r = (n = e.charCodeAt(i)) >> 8, o.push(n % 256), o.push(r); return o; }
function base64ToBytes(e) { return toByteArray(base64clean(e)); }
function blitBuffer(e, t, n, r) { for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
    t[o + n] = e[o]; return o; }
function isnan(e) { return e != e; }
function isBuffer(e) { return null != e && (!!e._isBuffer || isFastBuffer(e) || isSlowBuffer(e)); }
function isFastBuffer(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e); }
function isSlowBuffer(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && isFastBuffer(e.slice(0, 0)); }
function isNull(e) { return null === e; }
function isNullOrUndefined(e) { return null == e; }
function isString(e) { return "string" == typeof e; }
function isObject(e) { return "object" == typeof e && null !== e; }
function hasOwnProperty(e, t) { return Object.prototype.hasOwnProperty.call(e, t); }
var isArray$1 = Array.isArray || function (e) { return "[object Array]" === Object.prototype.toString.call(e); };
function stringifyPrimitive(e) { switch (typeof e) {
    case "string": return e;
    case "boolean": return e ? "true" : "false";
    case "number": return isFinite(e) ? e : "";
    default: return "";
} }
function stringify(e, t, n, r) { return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? map$1(objectKeys(e), function (r) { var o = encodeURIComponent(stringifyPrimitive(r)) + n; return isArray$1(e[r]) ? map$1(e[r], function (e) { return o + encodeURIComponent(stringifyPrimitive(e)); }).join(t) : o + encodeURIComponent(stringifyPrimitive(e[r])); }).join(t) : r ? encodeURIComponent(stringifyPrimitive(r)) + n + encodeURIComponent(stringifyPrimitive(e)) : ""; }
function map$1(e, t) { if (e.map)
    return e.map(t); for (var n = [], r = 0; r < e.length; r++)
    n.push(t(e[r], r)); return n; }
var objectKeys = Object.keys || function (e) { var t = []; for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.push(n); return t; };
function parse(e, t, n, r) { n = n || "="; var o = {}; if ("string" != typeof e || 0 === e.length)
    return o; var i = /\+/g; e = e.split(t = t || "&"); var a = 1e3; r && "number" == typeof r.maxKeys && (a = r.maxKeys); var s = e.length; a > 0 && s > a && (s = a); for (var u = 0; u < s; ++u) {
    var f, c, l, h, d = e[u].replace(i, "%20"), p = d.indexOf(n);
    p >= 0 ? (f = d.substr(0, p), c = d.substr(p + 1)) : (f = d, c = ""), l = decodeURIComponent(f), h = decodeURIComponent(c), hasOwnProperty(o, l) ? isArray$1(o[l]) ? o[l].push(h) : o[l] = [o[l], h] : o[l] = h;
} return o; }
function Url() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null; }
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "\t"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = { javascript: !0, "javascript:": !0 }, hostlessProtocol = { javascript: !0, "javascript:": !0 }, slashedProtocol = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 };
function urlParse(e, t, n) { if (e && isObject(e) && e instanceof Url)
    return e; var r = new Url; return r.parse(e, t, n), r; }
function parse$1(e, t, n, r) { if (!isString(t))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof t); var o = t.indexOf("?"), i = -1 !== o && o < t.indexOf("#") ? "?" : "#", a = t.split(i); a[0] = a[0].replace(/\\/g, "/"); var s = t = a.join(i); if (s = s.trim(), !r && 1 === t.split("#").length) {
    var u = simplePathPattern.exec(s);
    if (u)
        return e.path = s, e.href = s, e.pathname = u[1], u[2] ? (e.search = u[2], e.query = n ? parse(e.search.substr(1)) : e.search.substr(1)) : n && (e.search = "", e.query = {}), e;
} var f, c, l, h = protocolPattern.exec(s); if (h) {
    var d = (h = h[0]).toLowerCase();
    e.protocol = d, s = s.substr(h.length);
} if (r || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var p = "//" === s.substr(0, 2);
    !p || h && hostlessProtocol[h] || (s = s.substr(2), e.slashes = !0);
} if (!hostlessProtocol[h] && (p || h && !slashedProtocol[h])) {
    var m, g, y = -1;
    for (f = 0; f < hostEndingChars.length; f++)
        -1 !== (c = s.indexOf(hostEndingChars[f])) && (-1 === y || c < y) && (y = c);
    for (-1 !== (g = -1 === y ? s.lastIndexOf("@") : s.lastIndexOf("@", y)) && (m = s.slice(0, g), s = s.slice(g + 1), e.auth = decodeURIComponent(m)), y = -1, f = 0; f < nonHostChars.length; f++)
        -1 !== (c = s.indexOf(nonHostChars[f])) && (-1 === y || c < y) && (y = c);
    -1 === y && (y = s.length), e.host = s.slice(0, y), s = s.slice(y), parseHost(e), e.hostname = e.hostname || "";
    var b = "[" === e.hostname[0] && "]" === e.hostname[e.hostname.length - 1];
    if (!b) {
        var w = e.hostname.split(/\./);
        for (f = 0, l = w.length; f < l; f++) {
            var v = w[f];
            if (v && !v.match(hostnamePartPattern)) {
                for (var B = "", E = 0, I = v.length; E < I; E++)
                    v.charCodeAt(E) > 127 ? B += "x" : B += v[E];
                if (!B.match(hostnamePartPattern)) {
                    var A = w.slice(0, f), T = w.slice(f + 1), O = v.match(hostnamePartStart);
                    O && (A.push(O[1]), T.unshift(O[2])), T.length && (s = "/" + T.join(".") + s), e.hostname = A.join(".");
                    break;
                }
            }
        }
    }
    e.hostname = e.hostname.length > hostnameMaxLen ? "" : e.hostname.toLowerCase(), b || (e.hostname = toASCII(e.hostname)), e.host = (e.hostname || "") + (e.port ? ":" + e.port : ""), e.href += e.host, b && (e.hostname = e.hostname.substr(1, e.hostname.length - 2), "/" !== s[0] && (s = "/" + s));
} if (!unsafeProtocol[d])
    for (f = 0, l = autoEscape.length; f < l; f++) {
        var S = autoEscape[f];
        if (-1 !== s.indexOf(S)) {
            var k = encodeURIComponent(S);
            k === S && (k = escape(S)), s = s.split(S).join(k);
        }
    } var R = s.indexOf("#"); -1 !== R && (e.hash = s.substr(R), s = s.slice(0, R)); var P = s.indexOf("?"); return -1 !== P ? (e.search = s.substr(P), e.query = s.substr(P + 1), n && (e.query = parse(e.query)), s = s.slice(0, P)) : n && (e.search = "", e.query = {}), s && (e.pathname = s), slashedProtocol[d] && e.hostname && !e.pathname && (e.pathname = "/"), (e.pathname || e.search) && (e.path = (e.pathname || "") + (e.search || "")), e.href = format(e), e; }
function format(e) { var t = e.auth || ""; t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@"); var n = e.protocol || "", r = e.pathname || "", o = e.hash || "", i = !1, a = ""; e.host ? i = t + e.host : e.hostname && (i = t + (-1 === e.hostname.indexOf(":") ? e.hostname : "[" + this.hostname + "]"), e.port && (i += ":" + e.port)), e.query && isObject(e.query) && Object.keys(e.query).length && (a = stringify(e.query)); var s = e.search || a && "?" + a || ""; return n && ":" !== n.substr(-1) && (n += ":"), e.slashes || (!n || slashedProtocol[n]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), o && "#" !== o.charAt(0) && (o = "#" + o), s && "?" !== s.charAt(0) && (s = "?" + s), n + i + (r = r.replace(/[?#]/g, function (e) { return encodeURIComponent(e); })) + (s = s.replace("#", "%23")) + o; }
function parseHost(e) { var t = e.host, n = portPattern.exec(t); n && (":" !== (n = n[0]) && (e.port = n.substr(1)), t = t.substr(0, t.length - n.length)), t && (e.hostname = t); }
Url.prototype.parse = function (e, t, n) { return parse$1(this, e, t, n); }, Url.prototype.format = function () { return format(this); }, Url.prototype.resolve = function (e) { return this.resolveObject(urlParse(e, !1, !0)).format(); }, Url.prototype.resolveObject = function (e) { if (isString(e)) {
    var t = new Url;
    t.parse(e, !1, !0), e = t;
} for (var n, r = new Url, o = Object.keys(this), i = 0; i < o.length; i++) {
    var a = o[i];
    r[a] = this[a];
} if (r.hash = e.hash, "" === e.href)
    return r.href = r.format(), r; if (e.slashes && !e.protocol) {
    for (var s = Object.keys(e), u = 0; u < s.length; u++) {
        var f = s[u];
        "protocol" !== f && (r[f] = e[f]);
    }
    return slashedProtocol[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
} if (e.protocol && e.protocol !== r.protocol) {
    if (!slashedProtocol[e.protocol]) {
        for (var c = Object.keys(e), l = 0; l < c.length; l++) {
            var h = c[l];
            r[h] = e[h];
        }
        return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, e.host || hostlessProtocol[e.protocol])
        r.pathname = e.pathname;
    else {
        for (n = (e.pathname || "").split("/"); n.length && !(e.host = n.shift());)
            ;
        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== n[0] && n.unshift(""), n.length < 2 && n.unshift(""), r.pathname = n.join("/");
    }
    return r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, (r.pathname || r.search) && (r.path = (r.pathname || "") + (r.search || "")), r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
} var d, p = r.pathname && "/" === r.pathname.charAt(0), m = e.host || e.pathname && "/" === e.pathname.charAt(0), g = m || p || r.host && e.pathname, y = g, b = r.pathname && r.pathname.split("/") || [], w = r.protocol && !slashedProtocol[r.protocol]; if (n = e.pathname && e.pathname.split("/") || [], w && (r.hostname = "", r.port = null, r.host && ("" === b[0] ? b[0] = r.host : b.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === n[0] ? n[0] = e.host : n.unshift(e.host)), e.host = null), g = g && ("" === n[0] || "" === b[0])), m)
    r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, b = n;
else if (n.length)
    b || (b = []), b.pop(), b = b.concat(n), r.search = e.search, r.query = e.query;
else if (!isNullOrUndefined(e.search))
    return w && (r.hostname = r.host = b.shift(), (d = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = d.shift(), r.host = r.hostname = d.shift())), r.search = e.search, r.query = e.query, isNull(r.pathname) && isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r; if (!b.length)
    return r.pathname = null, r.path = r.search ? "/" + r.search : null, r.href = r.format(), r; for (var v = b.slice(-1)[0], B = (r.host || e.host || b.length > 1) && ("." === v || ".." === v) || "" === v, E = 0, I = b.length; I >= 0; I--)
    "." === (v = b[I]) ? b.splice(I, 1) : ".." === v ? (b.splice(I, 1), E++) : E && (b.splice(I, 1), E--); if (!g && !y)
    for (; E--; E)
        b.unshift(".."); !g || "" === b[0] || b[0] && "/" === b[0].charAt(0) || b.unshift(""), B && "/" !== b.join("/").substr(-1) && b.push(""); var A = "" === b[0] || b[0] && "/" === b[0].charAt(0); return w && (r.hostname = r.host = A ? "" : b.length ? b.shift() : "", (d = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = d.shift(), r.host = r.hostname = d.shift())), (g = g || r.host && b.length) && !A && b.unshift(""), b.length ? r.pathname = b.join("/") : (r.pathname = null, r.path = null), isNull(r.pathname) && isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r; }, Url.prototype.parseHost = function () { return parseHost(this); };
var SnailTrailLink = function () { function e() { this.href = "#"; } return e.prototype.componentWillLoad = function () { var e = urlParse(this.href), t = this.stripTrailingSlash(e.pathname), n = this.stripTrailingSlash(window.location.pathname); this.isActive = null == this.isActive ? t == n : this.isActive; }, e.prototype.stripTrailingSlash = function (e) { try {
    return e.replace(/^(.+?)\/*?$/, "$1");
}
catch (t) {
    return e;
} }, e.prototype.clicked = function () { this.element.parentNode.parentElement.querySelectorAll("snail-trail-link").forEach(function (e) { return e.isActive = !1; }), this.isActive = !0; }, e.prototype.render = function () { var e = { href: this.href, onClick: this.clicked.bind(this), class: this.isActive ? "active" : "" }; return crds_components_core_js_1.h("a", Object.assign({ "data-automation-id": this.automationId }, e), crds_components_core_js_1.h("slot", null)); }, Object.defineProperty(e, "is", { get: function () { return "snail-trail-link"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { automationId: { type: String, attr: "automation-id" }, element: { elementRef: !0 }, href: { type: String, attr: "href" }, isActive: { type: Boolean, attr: "is-active", mutable: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return "a.sc-snail-trail-link{color:#4d4d4d;display:block;font-weight:300;padding:11px 15px;position:relative;text-decoration:none}a.active.sc-snail-trail-link:before{border:10px solid transparent;border-bottom:0;border-top-color:#0095d9;content:\"\";left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\@media (hover){a.sc-snail-trail-link:hover:after{background-color:#0095d9;bottom:0;content:\"\";display:inline-block;height:2px;left:15px;position:absolute;width:calc(100% - 30px)}}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.SnailTrailLink = SnailTrailLink;
