import Refinebio from 'index'
import { getResponse } from 'utils/getResponse'

const api = Refinebio({ verbose: true })
const mockData = { test: 'test' }
jest.mock('utils/getResponse', () => ({
  getResponse: jest.fn((config, APIUrl, xhrConfig) => {
    return {
      status: 200,
      response: Promise.resolve(mockData),
      APIUrl,
      xhrConfig
    }
  })
}))

// make sure we clear the call count between
beforeEach(() => {
  jest.clearAllMocks()
})

test('get all compendia results with filtering', async () => {
  const filterRequest = await api.compendia.filter()
  expect(getResponse).toBeCalledTimes(1)
  console.log(filterRequest)
})

test('get a compendium result by ID', async () => {
  const id = 109
  const getCompendia = await api.compendia.get(id)
  expect(getResponse).toBeCalledTimes(1)
  console.log(getCompendia)
})
