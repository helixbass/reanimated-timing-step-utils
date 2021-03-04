import {withTiming as withTimingBase, Easing} from 'react-native-reanimated'

export const withTiming: typeof withTimingBase = (
  toValue,
  opts = {},
  callback,
) =>
  withTimingBase(
    toValue,
    {
      easing: Easing.linear,
      ...opts,
    },
    callback,
  )
