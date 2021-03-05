"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasTimingStepFinished = exports.getHasTimingStepFinished = void 0;
var useHasTimingStepTriggered_1 = require("./useHasTimingStepTriggered");
/**
 * @worklet
 */
var getHasTimingStepFinished = function (position, timingSteps, stepName) {
    'worklet';
    return useHasTimingStepTriggered_1.getHasTimingStepTriggered(position, timingSteps, stepName, 'end');
};
exports.getHasTimingStepFinished = getHasTimingStepFinished;
var useHasTimingStepFinished = function (position, timingSteps, stepName) { return useHasTimingStepTriggered_1.useHasTimingStepTriggered(position, timingSteps, stepName, 'end'); };
exports.useHasTimingStepFinished = useHasTimingStepFinished;
