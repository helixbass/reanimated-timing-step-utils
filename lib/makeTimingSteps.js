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
exports.makeTimingSteps = void 0;
var isFunction_1 = require("./utils/isFunction");
var isNumber_1 = require("./utils/isNumber");
var makeTimingStep = function (_a) {
    var start = _a.start, duration = _a.duration, easing = _a.easing;
    return ({
        start: start,
        duration: duration,
        end: start + duration,
        easing: easing,
    });
};
var isStartSpec = function (spec) {
    return spec.start != null;
};
var isStartSpecResolved = function (spec) { return spec.start != null; };
var getResolvedTimingStepSpecOpts = function (spec, steps) {
    return isStartSpec(spec)
        ? __assign(__assign({}, spec), { start: isFunction_1.isFunction(spec.start) ? spec.start(steps) : spec.start }) : __assign(__assign({}, spec), { offset: isFunction_1.isFunction(spec.offset) ? spec.offset(steps) : spec.offset });
};
var extractStepSpec = function (spec, _a) {
    var _b;
    var currentTotalDuration = _a.currentTotalDuration, timeScale = _a.timeScale, steps = _a.steps;
    var duration = spec[0];
    var durationScaled = duration * (1 / timeScale);
    var optsResolved = isNumber_1.isNumber(spec[1])
        ? { offset: spec[1] }
        : spec[1]
            ? getResolvedTimingStepSpecOpts(spec[1], steps)
            : { offset: 0 };
    return {
        start: isStartSpecResolved(optsResolved)
            ? optsResolved.start
            : currentTotalDuration + ((_b = optsResolved.offset) !== null && _b !== void 0 ? _b : 0),
        duration: durationScaled,
        easing: optsResolved.easing,
    };
};
var makeTimingSteps = function (stepSpecs, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.timeScale, timeScale = _c === void 0 ? 1 : _c;
    return Object.keys(stepSpecs).reduce(function (steps, stepName) {
        var _a;
        var currentTotalDuration = steps.duration;
        var _b = extractStepSpec(stepSpecs[stepName], { currentTotalDuration: currentTotalDuration, timeScale: timeScale, steps: steps }), start = _b.start, duration = _b.duration, easing = _b.easing;
        return __assign(__assign({}, steps), (_a = {}, _a[stepName] = makeTimingStep({ start: start, duration: duration, easing: easing }), _a.duration = Math.max(start + duration, currentTotalDuration), _a));
    }, {
        duration: 0,
    });
};
exports.makeTimingSteps = makeTimingSteps;
