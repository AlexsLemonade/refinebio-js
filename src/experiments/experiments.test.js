import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.experiments.get()
})

test('get detailed information on experiments', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get experiment by accession code', async () => {
  const { accession_code } = createRequest.response.results[0]
  const getExperiment = await api.experiments.get(accession_code)

  expect(getExperiment.isOk).toBeTruthy()
})
