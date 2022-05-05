import fetch from 'isomorphic-unfetch'

const parseRequestResponse = async (response) => {
  try {
    return await response.json()
  } catch (e) {
    return {}
  }
}

export const getResponse = async (config, APIUrl, xhrConfig) => {
  console.log('called?')
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

export default getResponse
