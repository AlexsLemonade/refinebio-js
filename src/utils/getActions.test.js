import defaultConfig from 'config'
import { getActions } from 'utils/getActions'

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

let exampleResource
beforeAll(() => {
  exampleResource = getActions(defaultConfig, 'example')
})

test('create request', async () => {
  const createRequest = await exampleResource.create({
    example: 'example'
  })

  const { method, headers } = createRequest.requestConfig

  expect(method).toBe('POST')
  expect(headers['content-type']).toBe('application/json')
  expect(createRequest.isOk).toBeTruthy()
  expect(createRequest.url).toBe(`${defaultConfig.path}example`) // check path
})

test('get request', async () => {
  const id = 1
  const getRequest = await exampleResource.get(id)
  const { method } = getRequest.requestConfig

  expect(method).toBe('GET')
  expect(getRequest.url).toBe(`${defaultConfig.path}example/${id}`)
})

test('filter request', async () => {
  const filterRequest = await exampleResource.filter({
    term: ['term1', 'term2']
  })
  const { method } = filterRequest.requestConfig

  expect(method).toBe('GET')
  expect(filterRequest.url).toBe(
    `${defaultConfig.path}example?term=term1&term=term2`
  )
})

test('update request', async () => {
  const id = 1
  const updateRequest = await exampleResource.update({ id, example: 'example' })
  const { method, headers } = updateRequest.requestConfig

  expect(method).toBe('PUT')
  expect(headers['content-type']).toBe('application/json')
  expect(updateRequest.url).toBe(`${defaultConfig.path}example/${id}`)
})

test('remove request', async () => {
  const id = 1
  const removeRequest = await exampleResource.delete(id)

  expect(removeRequest.requestConfig.method).toBe('DELETE')
  expect(removeRequest.url).toBe(`${defaultConfig.path}example/${id}`)
})
