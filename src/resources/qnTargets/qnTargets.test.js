import Refinebio from 'index'

const api = Refinebio({ verbose: true })

let getRequest

beforeAll(async () => {
  getRequest = await api.qnTargets.get()
})

test('get all organisms with available QN Targets', async () => {
  expect(getRequest.isOk).toBeTruthy()
})

test('get a Quantile Normalization file for an organism', async () => {
  const { name } = getRequest.response[0]
  const getQnTarget = await api.qnTargets.get(name)

  expect(getQnTarget.isOk).toBeTruthy()
})
