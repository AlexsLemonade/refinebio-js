import { isArray } from 'utils/isArray'

describe("Check if it's an array", () => {
  test('shouild return true', () => {
    expect([]).toBeTruthy()
  })
  test('should return false', () => {
    const outputs = [
      isArray(null),
      isArray({}),
      isArray('a'),
      isArray(1),
      isArray(true),
      isArray(Symbol('a')),
      isArray(Symbol(() => {})),
      isArray(undefined)
    ]
    for (const output of outputs) {
      expect(output).toBeFalsy()
    }
  })
})
