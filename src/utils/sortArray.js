import { isArray } from './dataTypeChecker'

/*
Sorts an array
@param {Array} arr - An array to be sorted
@param {boolean} asc - A flag that indicates that the array is sorted in ascending (default) or in descending order
@returns {Array} A new array
*/
export const sortArray = (arr, asc = true) => {
  if (!isArray(arr)) return undefined
  const sortedArr = arr.sort((a, b) => (asc ? a - b : b - a))
  return sortedArr
}

export default sortArray
