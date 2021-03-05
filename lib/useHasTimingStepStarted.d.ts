import Animated from 'react-native-reanimated';
import { TimingSteps } from './types';
/**
 * @worklet
 */
export declare const getHasTimingStepStarted: <TTimingSteps extends TimingSteps<any>>(position: Animated.SharedValue<number>, timingSteps: TTimingSteps, stepName: keyof TTimingSteps) => boolean;
export declare const useHasTimingStepStarted: <TTimingSteps extends TimingSteps<any>>(position: Animated.SharedValue<number>, timingSteps: TTimingSteps, stepName: keyof TTimingSteps) => boolean;
