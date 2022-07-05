import { isAccessor, isArray, isObject } from 'utils/dataTypeChecker'

/*
@name deepCopy
@description performs a deep copy of an object and returns a new copied object
@param {object} source - a source object to be deep copied
@return {object} a new object
*/

export const deepCopy = (source) => {
  if (isArray(source)) return Object.values(source)

  const newObj = {}
  const keys = Object.keys(source)

  keys.forEach((key) => {
    if (isAccessor(source, key)) {
      const accessor = Object.getOwnPropertyDescriptor(source, key)
      Object.defineProperty(newObj, key, accessor)
    } else {
      newObj[key] = isObject(source[key]) ? deepCopy(source[key]) : source[key]
    }
  })

  return newObj
}

export default deepCopy
