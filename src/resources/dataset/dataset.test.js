import Refinebio from 'index'

const api = Refinebio({ verbose: true })
let createRequest

beforeAll(async (email = false) => {
  const dataset = { data: {} }
  if (email) {
    dataset.email_address = email
  }
  createRequest = await api.dataset.create(dataset)
})

test('create dataset', () => {
  expect(createRequest.isOk).toBeTruthy()
})

test('get dataset', async () => {
  const { id } = createRequest.response
  const getDataset = await api.dataset.get(id)
  expect(getDataset.isOk).toBeTruthy()
})

test('update dataset', async () => {
  const { aggregate_by: aggregateBy } = createRequest.response
  const newAggreatedBy = 'ALL'
  const dataset = {
    ...createRequest.response,
    aggregate_by: newAggreatedBy
  }

  const updateDataset = await api.dataset.update(dataset)
  expect(aggregateBy).not.toBe(newAggreatedBy)
  expect(updateDataset.response.aggregate_by).toBe(newAggreatedBy)
  expect(updateDataset.isOk).toBeTruthy()
})
