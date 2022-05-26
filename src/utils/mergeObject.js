const makeDeepCopy = (...objs) => {
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

export const mergeObject = (source, changes) => {
  if (!Object.keys(changes).length === 0) {
    return source
  }

  return makeDeepCopy(source, changes)
}

export default mergeObject
