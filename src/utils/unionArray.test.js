import { unionArray } from 'utils/unionArray'

describe('Make a union of arrays', () => {
  const input = [['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'e', 'f'], ['g']]

  test('should return a union of arrays', () => {
    const output = unionArray(...input)
    expect(JSON.stringify(output)).toBe(
      JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    )
  })
})
