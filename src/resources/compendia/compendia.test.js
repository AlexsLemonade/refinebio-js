import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.compendia.filter()
})

test('get all compendia results with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get a compendium result by ID', async () => {
  const { id } = filterRequest.response.results[0]
  const getCompendia = await api.compendia.get(id)

  expect(getCompendia.isOk).toBeTruthy()
})
