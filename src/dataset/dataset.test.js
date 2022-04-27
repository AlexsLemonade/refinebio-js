import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('create dataset', async () => {
  const data = {
    data: { SRX3001077: ['SRS2351916'] },
    aggregate_by: 'ALL',
    scale_by: 'NONE',
    email_address: 'user@example.com',
    email_ccdl_ok: true,
    notify_me: true,
    start: true,
    quantile_normalize: true,
    quant_sf_only: true,
    svd_algorithm: 'NONE'
  }
  const createDataset = await api.dataset.create(data)

  expect(createDataset.isOk).toBeTruthy()
})

test('get dataset', async () => {
  const getDataset = await api.dataset.get('')
  expect(getDataset.isOk).toBeTruthy()
})

test('update dataset', async () => {
  const createToken = await api.token.create({ is_activated: true })
  const data = {
    data: {},
    aggregate_by: 'ALL',
    scale_by: 'NONE',
    email_address: 'user@example.com',
    email_ccdl_ok: true,
    notify_me: true,
    start: true,
    quantile_normalize: true,
    quant_sf_only: true,
    svd_algorithm: 'NONE'
  }

  const updateToken = await api.token.update(createToken.response.id, data)
  expect(updateToken.isOk).toBeTruthy()
})
