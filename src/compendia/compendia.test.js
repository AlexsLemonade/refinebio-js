import Refinebio from 'index'
import { getResponse } from 'utils/getResponse'

const api = Refinebio({ path: 'https://staging.api.refine.bio/v1/' })

jest.mock('utils/getResponse', () => ({
  getResponse: jest.fn((config, APIUrl, xhrConfig) => {
    return {
      isOk: true,
      status: 200,
      response: Promise.resolve({}),
      APIUrl,
      xhrConfig,
      path: config.path
    }
  })
}))

beforeEach(() => {
  jest.clearAllMocks()
})

test('get all compendia results with filtering', async () => {
  const filterRequest = await api.compendia.filter()
  expect(filterRequest.isOk).toBeTruthy()
  expect(filterRequest.APIUrl).toEqual(`${filterRequest.path}compendia`)
  expect(getResponse).toBeCalledTimes(1)
  console.log(filterRequest)
})

test('get a compendium result by ID', async () => {
  const id = 109
  const getRequest = await api.compendia.get(id)
  expect(getRequest.APIUrl).toEqual(`${getRequest.path}compendia/${id}`)
  expect(getResponse).toBeCalledTimes(1)
  console.log(getRequest)
})
