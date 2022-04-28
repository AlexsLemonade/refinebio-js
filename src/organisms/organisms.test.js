import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.organisms.get()
})

test('get all available organisms with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get an organism by its name', async () => {
  const { name } = filterRequest.response.results[0]
  const getOrganism = await api.organisms.get(name)

  expect(getOrganism.isOk).toBeTruthy()
})
