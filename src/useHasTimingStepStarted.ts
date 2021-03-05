import Animated from 'react-native-reanimated'

import {TimingSteps} from './types'
import {
  getHasTimingStepTriggered,
  useHasTimingStepTriggered,
} from './useHasTimingStepTriggered'

/**
 * @worklet
 */
export const getHasTimingStepStarted = <TTimingSteps extends TimingSteps<any>>(
  position: Animated.SharedValue<number>,
  timingSteps: TTimingSteps,
  stepName: keyof TTimingSteps,
): boolean => {
  'worklet'

  return getHasTimingStepTriggered(position, timingSteps, stepName, 'start')
}

export const useHasTimingStepStarted = <TTimingSteps extends TimingSteps<any>>(
  position: Animated.SharedValue<number>,
  timingSteps: TTimingSteps,
  stepName: keyof TTimingSteps,
): boolean =>
  useHasTimingStepTriggered(position, timingSteps, stepName, 'start')
