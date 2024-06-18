import { isArray } from 'utils/isArray'
import { isObject } from 'utils/isObject'
import { deepCopy } from 'utils/deepCopy'
import { unionArray } from 'utils/unionArray'

/*
Merges two objects and returns a new merged object 
 - If no second argument was passed, then it returns the first argument
 - If both objects have the same keys with the array datatyp, then it returns a union of those arrays
   e.g) {a: [1,2]}, {a: [2,3]} should be {a: [1,2,3]}
@param {Object} base - A base object whose properties get overwriten by a change object if any
@param {Object} override - An object which gets merged into a base object
@returns {Object} A new object or a base object if no second argument
*/
export const mergeDatasets = (base, override) => {
  if (!override) return base

  const keys = Object.keys(override)
  const newObj = deepCopy(base)
  const overrideCopy = deepCopy(override)

  keys.forEach((key) => {
    if (!isObject(overrideCopy[key])) {
      if (!newObj[key] || newObj[key] !== overrideCopy[key]) {
        newObj[key] = overrideCopy[key]
      }
    }

    if (isArray(newObj[key]) && isArray(overrideCopy[key])) {
      newObj[key] = unionArray(newObj[key], overrideCopy[key])
    } else if (isObject(newObj[key]) && isObject(overrideCopy[key])) {
      const newObjKeys = Object.keys(newObj[key])
      newObjKeys.forEach((newObjKey) => {
        if (
          isArray(newObj[key][newObjKey]) &&
          isArray(overrideCopy[key][newObjKey])
        ) {
          overrideCopy[key][newObjKey] = unionArray(
            newObj[key][newObjKey],
            overrideCopy[key][newObjKey]
          )
        }

        newObj[key] = { ...newObj[key], ...overrideCopy[key] }
        mergeDatasets(newObj[key], overrideCopy[key])
      })
    }
  })

  return newObj
}

export default mergeDatasets
