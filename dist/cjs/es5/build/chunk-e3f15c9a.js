"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = function () { function t() { } return t.getMeta = function (t) { var e = document.querySelector('meta[property*="' + t + '"]'); if (e)
    return e.getAttribute("content"); }, t.parameterize = function (t) { return t.toLowerCase().replace(/[^a-z]/g, "-").replace(/-{2,}/g, "-"); }, t.getCookie = function (t) { var e = ("; " + document.cookie).split("; " + t + "="); if (2 == e.length)
    return e.pop().split(";").shift(); }, t; }(), Logger = function () { function t(t) { void 0 === t && (t = !1), this.debug = t; } return t.prototype.log = function (t, e) { void 0 === e && (e = ""), this.debug && console.log(t, e); }, t; }(), Config = function () { function t() { } return t.prototype.space_id = function () { return Utils.getMeta("cfl:space_id") || "lkrmxse64d8p"; }, t.prototype.env = function () { return Utils.getMeta("cfl:env") || "master"; }, t.prototype.token = function () { return Utils.getMeta("cfl:token") || "0f27aa9ad58b87224832b8baab321fcceb407e2b8e18aa06ac238d3e6f8d088c"; }, t.prototype.endpoint = function () { return "https://cdn.contentful.com/spaces/" + this.space_id() + "/environments/" + this.env(); }, t; }();
exports.a = Utils;
exports.b = Logger;
exports.c = Config;
