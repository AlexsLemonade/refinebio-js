/*
@name mapObject 
@description maps an object and transforms it using a callback function
@param {Object} obj - an object to be mapped
@param {func} callback - a function to be executed on each property
@return {Object}: a new transformed object
*/

export const mapObject = (obj, callback) => {
  const newObject = {}
  Object.entries(obj).forEach(([k, v]) => {
    newObject[k] = callback([k, v], obj)
  })
  return newObject
}

export default mapObject
