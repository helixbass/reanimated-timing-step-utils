import Animated from 'react-native-reanimated'

import {TimingSteps} from './types'
import {
  getHasTimingStepTriggered,
  useHasTimingStepTriggered,
} from './useHasTimingStepTriggered'

/**
 * @worklet
 */
export const getHasTimingStepFinished = <TTimingSteps extends TimingSteps<any>>(
  position: Animated.SharedValue<number>,
  timingSteps: TTimingSteps,
  stepName: keyof TTimingSteps,
): boolean => {
  'worklet'

  return getHasTimingStepTriggered(position, timingSteps, stepName, 'end')
}

export const useHasTimingStepFinished = <TTimingSteps extends TimingSteps<any>>(
  position: Animated.SharedValue<number>,
  timingSteps: TTimingSteps,
  stepName: keyof TTimingSteps,
): boolean => useHasTimingStepTriggered(position, timingSteps, stepName, 'end')
