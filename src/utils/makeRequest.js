import fetch from 'isomorphic-unfetch'
import { getAPIUrl } from 'utils/getAPIUrl'

const parseRequestResponse = async (response) => {
  try {
    return await response.json()
  } catch (e) {
    return {}
  }
}

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
  const xhrConfig = { headers, ...options }
  const APIUrl = getAPIUrl(config, url, query)

  // add authorization token to headers
  if (authorization) {
    xhrConfig.headers['api-key'] = authorization
  }

  try {
    const response = await fetch(APIUrl, xhrConfig)
    return {
      isOk: response.ok,
      status: response.status,
      response: await parseRequestResponse(response)
    }
  } catch (e) {
    return {
      isOk: false,
      status: e.status,
      error: e
    }
  }
}

export default makeRequest
