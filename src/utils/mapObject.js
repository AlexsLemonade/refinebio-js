/*
@name mapObject 
@description maps an object and passes an invoked callback as an argument to each method of that mapped object
@param {object} object - an object to be transformed
@param {func} callback - a function that is passed as an argument  
@return {object}: returns a transformed object
*/

export const mapObject = (object, callback) => {
  const newObject = {}
  Object.entries(object).forEach(([k, v]) => {
    newObject[k] = v(callback())
  })
  return newObject
}

export default mapObject
