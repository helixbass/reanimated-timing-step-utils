import Animated from 'react-native-reanimated';
export interface TimingStep {
    start: number;
    duration: number;
    end: number;
    easing?: Animated.EasingFunction;
}
export declare type TimingSteps<TStepNames extends string> = {
    duration: number;
} & Record<TStepNames, TimingStep>;
