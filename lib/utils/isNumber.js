"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
var isNumber = function (value) {
    return Object.prototype.toString.call(value) === '[object Number]';
};
exports.isNumber = isNumber;
