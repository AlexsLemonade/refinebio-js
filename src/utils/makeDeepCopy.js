/*
@param obj - a source object to be deep copied
Return valie: a new object
*/

// TODO: create a datatype check helper
const isObject = (prop) => typeof prop === 'object'
const isArray = (arr) => Array.isArray(arr)
const isAccessor = (obj, prop) =>
  typeof Object.getOwnPropertyDescriptor(obj, prop).get === 'function' ||
  typeof Object.getOwnPropertyDescriptor(obj, prop).set === 'function'

export const makeDeepCopy = (source) => {
  const newObj = {}

  if (isArray(source)) return Object.values(source)

  Object.keys(source).forEach((key) => {
    if (isAccessor(source, key)) {
      const accessor = Object.getOwnPropertyDescriptor(source, key)
      Object.defineProperty(newObj, key, accessor)
    } else {
      newObj[key] = isObject(source[key])
        ? makeDeepCopy(source[key])
        : source[key]
    }
  })

  return newObj
}

export default makeDeepCopy
