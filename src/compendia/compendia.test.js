import Refinebio from 'index'
import { getResponse } from 'utils/getResponse'

const api = Refinebio({ path: 'https://staging.api.refine.bio/v1/' })
const { path } = api.updateConfig()

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

test('get all compendia results with filtering', async () => {
  const filterRequest = await api.compendia.filter()
  expect(filterRequest.url).toEqual(`${path}compendia`)
  expect(getResponse).toBeCalledTimes(1)
})

test('get a compendium result by ID', async () => {
  const id = 109
  const getRequest = await api.compendia.get(id)
  expect(getRequest.url).toEqual(`${path}compendia/${id}`)
  expect(getResponse).toBeCalledTimes(1)
})
