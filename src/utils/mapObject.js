/*
Maps an object and transforms it using a callback function
@param {Object} obj - An object to be mapped
@param {function([string, *], Object):*} callback - A function to be executed on each property
@returns {Object} A new transformed object
*/

export const mapObject = (obj, callback) => {
  const newObject = {}
  Object.entries(obj).forEach(([k, v]) => {
    newObject[k] = callback([k, v], obj)
  })
  return newObject
}

export default mapObject
