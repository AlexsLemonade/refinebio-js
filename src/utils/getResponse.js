import fetch from 'isomorphic-unfetch'

const parseRequestResponse = async (response) => {
  try {
    return await response.json()
  } catch (e) {
    return {}
  }
}

export const getResponse = async (config, url, requestConfig) => {
  try {
    const response = await fetch(url, requestConfig)
    return {
      isOk: response.ok,
      status: response.status,
      response: await parseRequestResponse(response),
      url,
      requestConfig
    }
  } catch (e) {
    return {
      isOk: false,
      status: e.status,
      error: e
    }
  }
}

export default getResponse
