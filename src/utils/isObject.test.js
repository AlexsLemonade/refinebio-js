import {isObject} from 'utils/isObject.js'

describe("Check if it's an object", () => {
  test('shouild return true', () => {
    const outputs = [isObject({}), isObject([])]
    for (const output of outputs) {
      expect(output).toBeTruthy()
    }
  })
  test('shouild return false', () => {
    const outputs = [
      isObject(null),
      isObject('a'),
      isObject(1),
      isObject(true),
      isObject(Symbol('a')),
      isObject(Symbol(() => {})),
      isObject(undefined)
    ]
    for (const output of outputs) {
      expect(output).toBeFalsy()
    }
  })
})
