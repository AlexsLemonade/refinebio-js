import { deepCopy } from 'utils/deepCopy'

/*
Overwrite the config with a new configuration setting
@param {Object} changes - A new configration setting
@param {Object} source - The current config object
@returns {Object} A shallow-merged and deep-copied updated config (TEMPORARY)
*/
export const mergeConfig = (source, changes) => ({
  ...deepCopy(source),
  ...deepCopy(changes)
})

export default mergeConfig
