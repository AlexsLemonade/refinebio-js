import { isAccessor, isArray, isObject } from 'utils/dataTypeChecker'

/*
@name makeDeepCopy
@description performs a deep copy of an object and returns a new copied object
@param {object} source - a source object to be deep copied
@return {object} - a new object
*/
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
