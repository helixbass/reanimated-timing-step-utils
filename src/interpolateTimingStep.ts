import Animated, {interpolate, Extrapolate} from 'react-native-reanimated'

import {TimingSteps} from './types'

export const interpolateTimingStep = <TStepNames extends string>(
  timingValue: Animated.SharedValue<number>,
  timingSteps: TimingSteps<TStepNames>,
  stepName: TStepNames,
  {
    easing,
    outputRange,
    extrapolate = Extrapolate.CLAMP,
  }: {
    outputRange: number[]
    easing?: Animated.EasingFunction
    extrapolate?: Animated.Extrapolate
  },
): number => {
  'worklet'

  const {duration: totalDuration, [stepName]: timingStep} = timingSteps

  const inputRange = [
    timingStep.start / totalDuration,
    (timingStep.start + timingStep.duration) / totalDuration,
  ]
  const easingResolved = easing ?? timingStep.easing
  if (!easingResolved)
    return interpolate(timingValue.value, inputRange, outputRange, extrapolate)
  const normalizingInterpolation = interpolate(
    timingValue.value,
    inputRange,
    [0, 1],
    Extrapolate.CLAMP,
  )
  return interpolate(
    easingResolved(normalizingInterpolation),
    [0, 1],
    outputRange,
    Extrapolate.EXTEND,
  )
}
