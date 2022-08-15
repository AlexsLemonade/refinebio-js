import {
  isAccessor,
  isArray,
  isObject,
  isTypeMatch
} from 'utils/dataTypeChecker'

describe("Check if it's an accessor", () => {
  const input = {
    a: 'a',
    get getA() {
      return this.a
    },
    set setA(v) {
      this.a = v
    }
  }
  test('shouild return true', () => {
    const getter = isAccessor(input, 'getA')
    expect(getter).toBeTruthy()
    const setter = isAccessor(input, 'getA')
    expect(setter).toBeTruthy()
  })
  test('should return false', () => {
    const output = isAccessor(input, 'a')
    expect(output).toBeFalsy()
  })
})

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

describe('Check if the first and second arguments have the same datatype', () => {
  test('should return true', () => {
    const outputs = [
      isTypeMatch('a', 'b'),
      isTypeMatch(1, 2),
      isTypeMatch(1n, BigInt(Number.MAX_SAFE_INTEGER)),
      isTypeMatch(true, false),
      isTypeMatch(
        () => {},
        function a() {}
      ),
      isTypeMatch(Symbol('a'), Symbol('b')),
      isTypeMatch(null, null),
      isTypeMatch([], []),
      isTypeMatch({}, {})
    ]
    for (const output of outputs) {
      expect(output).toBeTruthy()
    }
  })
  test('should return false', () => {
    const outputs = [
      isTypeMatch('a', 1),
      isTypeMatch(1, true),
      isTypeMatch(1n, 1),
      isTypeMatch(true, ''),
      isTypeMatch(() => {}, false),
      isTypeMatch(Symbol('a'), 'a'),
      isTypeMatch(null, {}),
      isTypeMatch([], {}),
      isTypeMatch({}, null)
    ]
    for (const output of outputs) {
      expect(output).toBeFalsy()
    }
  })
})
