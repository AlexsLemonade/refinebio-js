import { deepCopy } from 'utils/deepCopy'

/*
@name mergeConfig 
@description overwrite the config with a new configuration setting
@param {object} changes - a new configration setting
@param {object} source - the current config 
@return {object} (TEMP): returns a shallow-merged and deep-copied updated config 
*/

export const mergeConfig = (source, changes) => ({
  ...deepCopy(source),
  ...deepCopy(changes)
})

export default mergeConfig
