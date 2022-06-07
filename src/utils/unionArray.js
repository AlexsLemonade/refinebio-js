/*
@name unionArray
@description creates a union of two or more arrays. If a single array is passed, then it returns that array
@param {any[]} ...arrs - two or more arrays to be merged together
@return {array} a new array
*/
export const unionArray = (...arrs) =>
  arrs.length === 1 ? arrs[0] : [...new Set([...arrs].flat())]
export default unionArray
