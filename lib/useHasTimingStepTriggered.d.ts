import Animated from 'react-native-reanimated';
import { TimingSteps } from './types';
/**
 * @worklet
 */
export declare const getHasTimingStepTriggered: <TTimingSteps extends TimingSteps<any>>(position: Animated.SharedValue<number>, timingSteps: TTimingSteps, stepName: keyof TTimingSteps, triggerProperty: 'start' | 'end') => boolean;
export declare const useHasTimingStepTriggered: <TTimingSteps extends TimingSteps<any>>(position: Animated.SharedValue<number>, timingSteps: TTimingSteps, stepName: keyof TTimingSteps, triggerProperty: 'start' | 'end') => boolean;
