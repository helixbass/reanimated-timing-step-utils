import Animated from 'react-native-reanimated';
import { TimingSteps } from './types';
declare type TimingStepsPartial<TStepNames extends string> = TimingSteps<TStepNames>;
declare type TimingStepSpecValueUnresolved<TStepNames extends string> = number | ((steps: TimingStepsPartial<TStepNames>) => number);
declare type TimingStepSpecOpts<TStepNames extends string> = ({
    offset?: TimingStepSpecValueUnresolved<TStepNames>;
} | {
    start: TimingStepSpecValueUnresolved<TStepNames>;
}) & {
    easing?: Animated.EasingFunction;
};
declare type TimingStepSpec<TStepNames extends string> = [number, number] | [number] | [number, TimingStepSpecOpts<TStepNames>];
export declare const makeTimingSteps: <TStepNames extends string>(stepSpecs: Record<TStepNames, TimingStepSpec<TStepNames>>, { timeScale, }?: {
    timeScale?: number | undefined;
}) => TimingSteps<TStepNames>;
export {};
