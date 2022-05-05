import { getAPIUrl } from 'utils/getAPIUrl'
import { getResponse } from 'utils/getResponse'

// browser/server safe request api with standard pre-parsed responses
export const makeRequest = async (
  config,
  url,
  {
    headers = { 'content-type': 'application/json' },
    authorization,
    ...options
  } = {},
  query = {}
) => {
  const APIUrl = getAPIUrl(config, url, query)
  const xhrConfig = { headers, ...options }

  // add authorization token to headers
  if (authorization) {
    xhrConfig.headers['api-key'] = authorization
  }

  return getResponse(config, APIUrl, xhrConfig)
}

export default makeRequest
