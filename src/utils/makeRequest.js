import { getAPIUrl } from 'utils/getAPIUrl'
import { getResponse } from 'utils/getResponse'

// browser/server safe request api with standard pre-parsed responses
export const makeRequest = async (
  config,
  url,
  {
    authorization,
    headers = { 'content-type': 'application/json' },
    ...options
  } = {},

  query = {}
) => {
  const APIUrl = getAPIUrl(config, url, query)
  const requestConfig = { headers, ...options }
  // add authorization token to headers
  if (authorization) {
    requestConfig.headers['api-key'] = authorization
  }

  return getResponse(config, APIUrl, requestConfig)
}

export default makeRequest
