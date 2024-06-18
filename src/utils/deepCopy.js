import { isArray } from 'utils/isArray'
import { isObject } from 'utils/isObject'

/*
Performs a deep copy of an object and returns a new copied object
@param {Object} source - A source object to be deep copied
@returns {Object} A new object
*/

export const deepCopy = (source) => {
  if (isArray(source)) return Object.values(source)

  const newObj = {}
  const keys = Object.keys(source)

  keys.forEach((key) => {
    newObj[key] = isObject(source[key]) ? deepCopy(source[key]) : source[key]
  })

  return newObj
}

export default deepCopy
