import { urlSearchParamsFromKeys } from 'utils/urlSearchParamsFromKeys'

export const getAPIUrl = ({ path, verbose }, endpoint = '', query = {}) => {
  const url = new URL(endpoint, path)
  const search = urlSearchParamsFromKeys(query)
  url.search = search

  const apiUrl = url.href || url

  if (verbose) {
    // eslint-disable-next-line no-console
    console.log('Using API URL', apiUrl)
  }
  return apiUrl
}

export default getAPIUrl
