import Animated from 'react-native-reanimated'

import {isFunction} from './utils/isFunction'
import {isNumber} from './utils/isNumber'
import {TimingStep, TimingSteps} from './types'

const makeTimingStep = ({
  start,
  duration,
  easing,
}: {
  start: number
  duration: number
  easing?: Animated.EasingFunction
}): TimingStep => ({
  start,
  duration,
  end: start + duration,
  easing,
})

// type TimingStepsPartial<TStepNames extends string> = {
//   duration: number
// } & Partial<Record<TStepNames, TimingStep>>
type TimingStepsPartial<TStepNames extends string> = TimingSteps<TStepNames>

type TimingStepSpecValueUnresolved<TStepNames extends string> =
  | number
  | ((steps: TimingStepsPartial<TStepNames>) => number)

type TimingStepSpecOpts<TStepNames extends string> = (
  | {
      offset?: TimingStepSpecValueUnresolved<TStepNames>
    }
  | {
      start: TimingStepSpecValueUnresolved<TStepNames>
    }
) & {
  easing?: Animated.EasingFunction
}

type TimingStepSpecOptsResolved = (
  | {
      offset?: number
    }
  | {
      start: number
    }
) & {
  easing?: Animated.EasingFunction
}

const isStartSpec = <TStepNames extends string>(
  spec: TimingStepSpecOpts<TStepNames>,
): spec is {start: TimingStepSpecValueUnresolved<TStepNames>} =>
  (spec as any).start != null

const isStartSpecResolved = (
  spec: TimingStepSpecOptsResolved,
): spec is {start: number} => (spec as any).start != null

type TimingStepSpec<TStepNames extends string> =
  | [number, number]
  | [number]
  | [number, TimingStepSpecOpts<TStepNames>]

const getResolvedTimingStepSpecOpts = <TStepNames extends string>(
  spec: TimingStepSpecOpts<TStepNames>,
  steps: TimingStepsPartial<TStepNames>,
): TimingStepSpecOptsResolved =>
  isStartSpec(spec)
    ? {
        ...spec,
        start: isFunction(spec.start) ? spec.start(steps) : spec.start,
      }
    : {
        ...spec,
        offset: isFunction(spec.offset) ? spec.offset(steps) : spec.offset,
      }

const extractStepSpec = <TStepNames extends string>(
  spec: TimingStepSpec<TStepNames>,
  {
    currentTotalDuration,
    timeScale,
    steps,
  }: {
    currentTotalDuration: number
    timeScale: number
    steps: TimingStepsPartial<TStepNames>
  },
) => {
  const [duration] = spec
  const durationScaled = duration * (1 / timeScale)
  const optsResolved: TimingStepSpecOptsResolved = isNumber(spec[1])
    ? {offset: spec[1]}
    : spec[1]
    ? getResolvedTimingStepSpecOpts(spec[1], steps)
    : {offset: 0}
  return {
    start: isStartSpecResolved(optsResolved)
      ? optsResolved.start
      : currentTotalDuration + (optsResolved.offset ?? 0),
    duration: durationScaled,
    easing: optsResolved.easing,
  }
}

export const makeTimingSteps = <TStepNames extends string>(
  stepSpecs: Record<TStepNames, TimingStepSpec<TStepNames>>,
  {
    timeScale = 1,
  }: {
    timeScale?: number
  } = {},
): TimingSteps<TStepNames> =>
  Object.keys(stepSpecs).reduce(
    (steps, stepName) => {
      const currentTotalDuration = steps.duration
      const {start, duration, easing} = extractStepSpec(
        stepSpecs[stepName as TStepNames],
        {currentTotalDuration, timeScale, steps},
      )
      return {
        ...steps,
        [stepName]: makeTimingStep({start, duration, easing}),
        duration: Math.max(start + duration, currentTotalDuration),
      }
    },
    {
      duration: 0,
    } as TimingStepsPartial<TStepNames>,
  ) as any
