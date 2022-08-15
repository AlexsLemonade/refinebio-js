import { isArray } from './dataTypeChecker'

/*
@name sortArray
@description sorts an array
@param {array} arr - an array to be sorted
@param {boolean} asc - if it's true, then the output is in ascending order or else it's in descending order
@return {array} a new array
*/
export const sortArray = (arr, asc = true) => {
  if (!isArray(arr)) return undefined
  const sortedArr = arr.sort((a, b) => (asc ? a - b : b - a))
  return sortedArr
}

export default sortArray
