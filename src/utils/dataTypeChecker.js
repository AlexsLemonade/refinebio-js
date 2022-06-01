export const isAccessor = (obj, prop) =>
  typeof Object.getOwnPropertyDescriptor(obj, prop).get === 'function' ||
  typeof Object.getOwnPropertyDescriptor(obj, prop).set === 'function'
export const isArray = (arr) => Array.isArray(arr)
export const isObject = (prop) => typeof prop === 'object'
