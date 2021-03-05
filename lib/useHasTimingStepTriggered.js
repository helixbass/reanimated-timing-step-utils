"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasTimingStepTriggered = exports.getHasTimingStepTriggered = void 0;
var react_1 = require("react");
var react_native_reanimated_1 = require("react-native-reanimated");
/**
 * @worklet
 */
var getHasTimingStepTriggered = function (position, timingSteps, stepName, triggerProperty) {
    'worklet';
    var threshold = timingSteps[stepName][triggerProperty] / timingSteps.duration;
    return position.value >= threshold;
};
exports.getHasTimingStepTriggered = getHasTimingStepTriggered;
var useHasTimingStepTriggered = function (position, timingSteps, stepName, triggerProperty) {
    var _a = react_1.useState(false), hasTimingStepTriggered = _a[0], setHasTimingStepTriggered = _a[1];
    var hasTriggeredValue = react_native_reanimated_1.useSharedValue(false);
    react_native_reanimated_1.useDerivedValue(function () {
        'worklet';
        var hasTriggered = exports.getHasTimingStepTriggered(position, timingSteps, stepName, triggerProperty);
        if ((!hasTriggeredValue.value && !hasTriggered) ||
            (hasTriggeredValue.value && hasTriggered))
            return;
        var newValue = !hasTriggeredValue.value;
        react_native_reanimated_1.runOnJS(setHasTimingStepTriggered)(newValue);
        hasTriggeredValue.value = newValue;
    });
    return hasTimingStepTriggered;
};
exports.useHasTimingStepTriggered = useHasTimingStepTriggered;
