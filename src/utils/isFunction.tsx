const {toString} = Object.prototype

export const isFunction = (value: unknown): value is (...args: any[]) => any =>
  toString.call(value) === '[object Function]'
