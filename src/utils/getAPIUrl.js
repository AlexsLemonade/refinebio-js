export const getAPIUrl = ({ path, verbose }, endpoint = '') => {
  const url = new URL(endpoint, path)

  const apiUrl = url.href

  if (verbose) {
    // eslint-disable-next-line no-console
    console.log('Using API URL', apiUrl)
  }
  return apiUrl
}

export default getAPIUrl
