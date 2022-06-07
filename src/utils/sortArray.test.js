import { sortArray } from 'utils/sortArray'

describe('Sort an array', () => {
  test('should return a sorted array', () => {
    const input = [1, 10, 2, 8, 7, 1]
    expect(JSON.stringify(sortArray(input))).toBe(
      JSON.stringify([1, 1, 2, 7, 8, 10])
    )
    expect(JSON.stringify(sortArray(input, false))).toBe(
      JSON.stringify([10, 8, 7, 2, 1, 1])
    )
  })
})
