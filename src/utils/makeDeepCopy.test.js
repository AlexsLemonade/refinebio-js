import { makeDeepCopy } from 'utils/makeDeepCopy'
import { isAccessor } from './dataTypeChecker'

describe('Make a deeo copy of an object', () => {
  const input = {
    a: 'a',
    b: 'b',
    c: [1, 2, 3, 4, 5],
    get getA() {
      return this.a
    },
    set setA(v) {
      this.a = v
    }
  }

  test('should return a deep copied object', () => {
    const output = makeDeepCopy(input)
    expect(output).not.toBe(input)
    expect(output.c).not.toBe(input.c)
    expect(isAccessor(output, 'getA')).toBeTruthy()
    expect(isAccessor(output, 'setA')).toBeTruthy()
  })
})
