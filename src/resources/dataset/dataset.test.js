import Refinebio from 'index'

const api = Refinebio({ verbose: true })
let createDataset

beforeAll(async () => {
  const dataset = { data: {} }
  createDataset = await api.dataset.create(dataset)
})

test('create dataset', async () => {
  expect(createDataset.isOk).toBeTruthy()
})

test('get dataset', async () => {
  const getDataset = await api.dataset.get(createDataset.response.id)
  expect(getDataset.isOk).toBeTruthy()
})

test('update dataset', async () => {
  const dataset = {
    id: createDataset.response.id,
    data: { GSE116436: ['ALL'] }
  }

  const updateDataset = await api.dataset.update(dataset)
  expect(updateDataset.isOk).toBeTruthy()
})
