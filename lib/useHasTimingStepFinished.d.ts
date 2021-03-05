import Animated from 'react-native-reanimated';
import { TimingSteps } from './types';
/**
 * @worklet
 */
export declare const getHasTimingStepFinished: <TTimingSteps extends TimingSteps<any>>(position: Animated.SharedValue<number>, timingSteps: TTimingSteps, stepName: keyof TTimingSteps) => boolean;
export declare const useHasTimingStepFinished: <TTimingSteps extends TimingSteps<any>>(position: Animated.SharedValue<number>, timingSteps: TTimingSteps, stepName: keyof TTimingSteps) => boolean;
