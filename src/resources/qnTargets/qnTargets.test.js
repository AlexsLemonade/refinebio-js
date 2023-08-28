import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let filterRequest

beforeAll(async () => {
  filterRequest = await api.qnTargets.filter()
})

test('get all organisms with available QN Targets with filtering', async () => {
  expect(filterRequest.isOk).toBeTruthy()
})

test('get a Quantile Normalization file for an organism', async () => {
  const { name } = filterRequest.response[0]
  const getQnTarget = await api.qnTargets.get(name)

  expect(getQnTarget.isOk).toBeTruthy()
})
