import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.samples.get()
})

test('get detailed information on samples', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get sample details by its accession code', async () => {
  const { accession_code } = createRequest.response.results[0]
  const getSample = await api.samples.get(accession_code)

  expect(getSample.isOk).toBeTruthy()
})
