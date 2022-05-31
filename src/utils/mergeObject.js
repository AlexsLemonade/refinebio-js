import { makeDeepCopy } from 'utils/makeDeepCopy'

export const mergeObject = (source, changes) => {
  if (!Object.keys(changes).length === 0) {
    return source
  }

  return makeDeepCopy(source, changes)
}

export default mergeObject
