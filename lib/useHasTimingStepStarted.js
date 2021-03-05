"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasTimingStepStarted = exports.getHasTimingStepStarted = void 0;
var useHasTimingStepTriggered_1 = require("./useHasTimingStepTriggered");
/**
 * @worklet
 */
var getHasTimingStepStarted = function (position, timingSteps, stepName) {
    'worklet';
    return useHasTimingStepTriggered_1.getHasTimingStepTriggered(position, timingSteps, stepName, 'start');
};
exports.getHasTimingStepStarted = getHasTimingStepStarted;
var useHasTimingStepStarted = function (position, timingSteps, stepName) {
    return useHasTimingStepTriggered_1.useHasTimingStepTriggered(position, timingSteps, stepName, 'start');
};
exports.useHasTimingStepStarted = useHasTimingStepStarted;
