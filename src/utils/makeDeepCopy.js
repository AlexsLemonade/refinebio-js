export const makeDeepCopy = (...objs) => {
  const newObj = {}
  for (const obj of objs) {
    const keys = Object.keys(obj)
    keys.forEach((key) => {
      const descriptor = Object.getOwnPropertyDescriptor(obj, key)
      Object.defineProperty(newObj, key, descriptor)
    })
  }
  return newObj
}

export default makeDeepCopy
