/*
@name isAccessor
@description checks if the argument is an accessor 
@param {object} obj - a parent object
@param {string} key - a key to be tested
@return {boolean}
*/
export const isAccessor = (obj, key) =>
  typeof Object.getOwnPropertyDescriptor(obj, key).get === 'function' ||
  typeof Object.getOwnPropertyDescriptor(obj, key).set === 'function'

/*
@name isArray
@description checks if the argument is an array 
@param {any} item
@return {boolean}
*/
export const isArray = (item) => Array.isArray(item)

/*
@name isObject
@description checks if the argument is an object and not null
@param {any} item
@return {boolean}
*/
export const isObject = (item) => typeof item === 'object' && item !== null

/*
@name isTypeMatch
@description checks if the first and second arguments have the same datatype
@param {any} a  
@param {any} b
@return {boolean}
*/
export const isTypeMatch = (a, b) => {
  switch (typeof a) {
    case 'string':
      return typeof b === 'string'
    case 'number':
      return typeof b === 'number'
    case 'bigint':
      return typeof b === 'bigint'
    case 'boolean':
      return typeof b === 'boolean'
    case 'function':
      return typeof b === 'function'
    case 'symbol':
      return typeof b === 'symbol'
    case 'object':
      if (a === null && b === null) return true
      if (isArray(a) && isArray(b)) return true
      return !!(isObject(a) && isObject(b) && !isArray(a) && !isArray(b))
    default:
      return undefined
  }
}
