export const mergeObject = (source, changes, clone = false) => {
  if (clone) {
    return { ...source, ...changes }
  }
  if (!changes) {
    return source
  }

  const modifiedSource = source

  Object.keys(changes).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(source, key)) {
      console.error(`${key} is an invalid key`)
    }

    modifiedSource[key] = changes[key]
  })

  return modifiedSource
}

export default mergeObject
