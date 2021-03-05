import Animated, { Extrapolate } from 'react-native-reanimated';
import { TimingSteps } from './types';
export declare const interpolateTimingStep: <TStepNames extends string>(timingValue: Animated.SharedValue<number>, timingSteps: TimingSteps<TStepNames>, stepName: TStepNames, { easing, outputRange, extrapolate, }: {
    outputRange: number[];
    easing?: Animated.EasingFunction | undefined;
    extrapolate?: Animated.Extrapolate | undefined;
}) => number;
