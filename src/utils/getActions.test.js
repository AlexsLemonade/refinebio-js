import Refinebio from 'index'
import { getActions } from 'utils/getActions'

let api
let apiConfig

beforeAll(() => {
  api = Refinebio()
  apiConfig = api.updateConfig()
  // define a fake resource  - 'example'
  const example = (config = apiConfig) => {
    const { create, get, filter, update, remove } = getActions(
      config,
      'example'
    )

    return { create, get, filter, update, remove }
  }
  // add this fake resource to the 'api' object
  api.example = example(apiConfig)
})

test('create request', async () => {
  const createRequest = await api.example.create({ example: 'example' })
  const { method, headers } = createRequest.requestConfig

  expect(method).toBe('POST') // check method
  expect(headers['content-type']).toBe('application/json') // check header content-type
  expect(createRequest.url).toBe(`${apiConfig.path}example`) // check path
})

test('get request', async () => {
  const id = 1
  const getRequest = await api.example.get(id)
  const { method } = getRequest.requestConfig

  expect(method).toBe('GET')
  expect(getRequest.url).toBe(`${apiConfig.path}example/${id}`)
})

test('filter request', async () => {
  const filterRequest = await api.example.filter({ term: ['term1', 'term2'] })
  const { method } = filterRequest.requestConfig

  expect(method).toBe('GET')
  expect(filterRequest.url).toBe(
    `${apiConfig.path}example?term=term1&term=term2`
  )
})

test('update request', async () => {
  const id = 1
  const updateRequest = await api.example.update({ id, example: 'example' })
  const { method, headers } = updateRequest.requestConfig

  expect(method).toBe('PUT')
  expect(headers['content-type']).toBe('application/json')
  expect(updateRequest.url).toBe(`${apiConfig.path}example/${id}`)
})

test('remove request', async () => {
  const id = 1
  const removeRequest = await api.example.remove(id)

  expect(removeRequest.requestConfig.method).toBe('DELETE')
  expect(removeRequest.url).toBe(`${apiConfig.path}example/${id}`)
})
