import { deepCopy } from 'utils/deepCopy'

describe('Make a deeo copy of an object', () => {
  const input = {
    a: 'a',
    b: 'b',
    c: [1, 2, 3, 4, 5]
  }

  test('should return a deep copied object', () => {
    const output = deepCopy(input)
    expect(output).not.toBe(input)
    expect(output.c).not.toBe(input.c)
  })
})
