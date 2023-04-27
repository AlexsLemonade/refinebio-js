import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.experiments.filter()
})

test('get detailed information on experiments with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get an experiment by accession code', async () => {
  const { accession_code: accessionCode } = filterRequest.response.results[0]
  const getExperiment = await api.experiments.get(accessionCode)

  expect(getExperiment.isOk).toBeTruthy()
})
