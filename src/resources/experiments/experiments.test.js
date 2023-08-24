import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.experiments.get()
})

test('get an experiment by accession code', async () => {
  const { accession_code: accessionCode } = getRequest.response.results[0]
  const getExperiment = await api.experiments.get(accessionCode)

  expect(getExperiment.isOk).toBeTruthy()
})
