import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let createRequest

beforeAll(async () => {
  createRequest = await api.qn_targets.get()
})

test('get all organisms with available QN Targets', async () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get a Quantile Normalization file for an organism', async () => {
  const { name } = createRequest.response[0]
  const getQnTarget = await api.qn_targets.get(name)

  expect(getQnTarget.isOk).toBeTruthy()
})
