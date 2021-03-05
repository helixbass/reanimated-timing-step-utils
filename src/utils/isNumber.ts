export const isNumber = (value: unknown): value is number =>
  Object.prototype.toString.call(value) === '[object Number]'
