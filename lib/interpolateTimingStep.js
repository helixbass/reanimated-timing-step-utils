"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolateTimingStep = void 0;
var react_native_reanimated_1 = require("react-native-reanimated");
var interpolateTimingStep = function (timingValue, timingSteps, stepName, _a) {
    'worklet';
    var easing = _a.easing, outputRange = _a.outputRange, _b = _a.extrapolate, extrapolate = _b === void 0 ? react_native_reanimated_1.Extrapolate.CLAMP : _b;
    var _c = timingSteps, totalDuration = _c.duration, _d = stepName, timingStep = _c[_d];
    var inputRange = [
        timingStep.start / totalDuration,
        (timingStep.start + timingStep.duration) / totalDuration,
    ];
    var easingResolved = easing !== null && easing !== void 0 ? easing : timingStep.easing;
    if (!easingResolved)
        return react_native_reanimated_1.interpolate(timingValue.value, inputRange, outputRange, extrapolate);
    var normalizingInterpolation = react_native_reanimated_1.interpolate(timingValue.value, inputRange, [0, 1], react_native_reanimated_1.Extrapolate.CLAMP);
    return react_native_reanimated_1.interpolate(easingResolved(normalizingInterpolation), [0, 1], outputRange, react_native_reanimated_1.Extrapolate.EXTEND);
};
exports.interpolateTimingStep = interpolateTimingStep;
