import Refinebio from 'index'
import { getResponse } from 'utils/getResponse'

// TEMPORARY staging API is currently not available, so commented out
// const api = Refinebio({ path: 'https://staging.api.refine.bio/v1/' })
const api = Refinebio({ verbose: true })

jest.mock('utils/getResponse', () => ({
  getResponse: jest.fn((config, url, requestConfig) => {
    return {
      isOk: true,
      status: 200,
      response: Promise.resolve({}),
      url,
      requestConfig
    }
  })
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('GET Request - get/filter actions)', () => {
  const url = 'https://api.refine.bio/v1/compendia/'

  test('get all compendia results with filtering', async () => {
    const filterRequest = await api.compendia.get()

    expect(filterRequest.url).toEqual(url)
    expect(getResponse).toBeCalledTimes(1)
  })

  test('get a compendium result by ID', async () => {
    const id = 109
    const getRequest = await api.compendia.get(id)

    expect(getRequest.url).toEqual(`${url}${id}`)
    expect(getResponse).toBeCalledTimes(1)
  })
})
