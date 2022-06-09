import { isArray, isObject } from 'utils/dataTypeChecker'
import { makeDeepCopy } from 'utils/makeDeepCopy'
import { unionArray } from 'utils/unionArray'
import { sortArray } from 'utils/sortArray'

/*
@name mergeObject 
@description merges two objects and returns a new merged object 
 - If no second argument was passed, then it returns the first argument
 - If both objects have the same keys with the array datatyp, then it returns a union of those arrays
   e.g) {a: [1,2]}, {a: [2,3]} should be {a: [1,2,3]}
@param {object} base - a base object whose properties get overwriten by a change object if any
@param {object} override - an object which gets merged into a base object
@return {object} a new object or a base object if no second argument
*/
export const mergeObject = (base, override) => {
  if (!override) return base

  const keys = Object.keys(override)
  const newObj = makeDeepCopy(base)
  const overrideCopy = makeDeepCopy(override)

  keys.forEach((key) => {
    if (!isObject(overrideCopy[key])) {
      if (!newObj[key] || newObj[key] !== overrideCopy[key]) {
        newObj[key] = overrideCopy[key]
      }
    }

    if (isArray(newObj[key]) && isArray(overrideCopy[key])) {
      newObj[key] = sortArray(unionArray(newObj[key], overrideCopy[key]))
    } else if (isObject(newObj[key]) && isObject(overrideCopy[key])) {
      const newObjKeys = Object.keys(newObj[key])
      newObjKeys.forEach((newObjKey) => {
        if (
          isArray(newObj[key][newObjKey]) &&
          isArray(overrideCopy[key][newObjKey])
        ) {
          overrideCopy[key][newObjKey] = sortArray(
            unionArray(newObj[key][newObjKey], overrideCopy[key][newObjKey])
          )
        }

        newObj[key] = { ...newObj[key], ...overrideCopy[key] }
        mergeObject(newObj[key], overrideCopy[key])
      })
    }
  })

  return newObj
}

export default mergeObject
