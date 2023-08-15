/*
Checks if the argument is an accessor 
@param {Object} obj - A parent object
@param {string} key - A key to be tested
@returns {boolean} A boolean
*/
export const isAccessor = (obj, key) =>
  typeof Object.getOwnPropertyDescriptor(obj, key).get === 'function' ||
  typeof Object.getOwnPropertyDescriptor(obj, key).set === 'function'

/*
Checks if the argument is an array 
@param {any} - An item to be checked
@returns {boolean} A boolean
*/
export const isArray = (item) => Array.isArray(item)

/*
Checks if the argument is an object and not null
@param {any} - An item to be checked
@returns {boolean} A boolean
*/
export const isObject = (item) => typeof item === 'object' && item !== null

/*
Checks if the first and second arguments have the same datatype
@param {any} a - An item to be compared to
@param {any} b - An item to be compared to
@returns {boolean} A boolean
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
