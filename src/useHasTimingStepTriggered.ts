import {useState} from 'react'
import Animated, {
  useSharedValue,
  useDerivedValue,
  runOnJS,
} from 'react-native-reanimated'

import {TimingSteps} from './types'

/**
 * @worklet
 */
export const getHasTimingStepTriggered = <
  TTimingSteps extends TimingSteps<any>
>(
  position: Animated.SharedValue<number>,
  timingSteps: TTimingSteps,
  stepName: keyof TTimingSteps,
  triggerProperty: 'start' | 'end',
): boolean => {
  'worklet'

  const threshold =
    timingSteps[stepName][triggerProperty] / timingSteps.duration
  return position.value >= threshold
}

export const useHasTimingStepTriggered = <
  TTimingSteps extends TimingSteps<any>
>(
  position: Animated.SharedValue<number>,
  timingSteps: TTimingSteps,
  stepName: keyof TTimingSteps,
  triggerProperty: 'start' | 'end',
): boolean => {
  const [hasTimingStepTriggered, setHasTimingStepTriggered] = useState(false)
  const hasTriggeredValue = useSharedValue(false)
  useDerivedValue(() => {
    'worklet'

    const hasTriggered = getHasTimingStepTriggered(
      position,
      timingSteps,
      stepName,
      triggerProperty,
    )

    if (
      (!hasTriggeredValue.value && !hasTriggered) ||
      (hasTriggeredValue.value && hasTriggered)
    )
      return

    const newValue = !hasTriggeredValue.value
    runOnJS(setHasTimingStepTriggered)(newValue)
    hasTriggeredValue.value = newValue
  })
  return hasTimingStepTriggered
}
