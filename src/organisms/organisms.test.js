import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.organisms.get()
})

test('get all available organisms', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get an organism by its name', async () => {
  const { name } = createRequest.response.results[0]
  const getOrganism = await api.organisms.get(name)

  expect(getOrganism.isOk).toBeTruthy()
})
