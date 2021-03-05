"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
var toString = Object.prototype.toString;
var isFunction = function (value) {
    return toString.call(value) === '[object Function]';
};
exports.isFunction = isFunction;
