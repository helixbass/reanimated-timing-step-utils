"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTiming = void 0;
var react_native_reanimated_1 = require("react-native-reanimated");
var withTiming = function (toValue, opts, callback) {
    if (opts === void 0) { opts = {}; }
    return react_native_reanimated_1.withTiming(toValue, __assign({ easing: react_native_reanimated_1.Easing.linear }, opts), callback);
};
exports.withTiming = withTiming;
