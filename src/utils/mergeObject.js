import { makeDeepCopy } from 'utils/makeDeepCopy'

/*
@name mergeObject 
@description merges two objects(if a second argument is passed) and returns a new merged object. If no second argument, then returns a first argument
@param {object} base - a base object whose properties get overwriten by a change object if any
@param {object} change - an object which gets merged into a base object
@return {object} - a new object or a base object if no change object was passed
*/
export const mergeObject = (base, change) => {
  if (!Object.keys(change).length === 0) {
    return base
  }
  // TODO: it should combine values instead of overwriting(e.g: base {a: [1,2]} and change { a: [2,3]} should produce { a: [1, 2, 3])
  const newObj = { ...makeDeepCopy(base), ...makeDeepCopy(change) }

  return newObj
}

export default mergeObject
