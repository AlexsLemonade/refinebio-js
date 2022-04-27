import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.compendia.get()
})

test('get all compendia results with filtering', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get a compendium result by ID', async () => {
  const { id } = createRequest.response.results[0]
  const getCompendia = await api.compendia.get(id)

  expect(getCompendia.isOk).toBeTruthy()
})
