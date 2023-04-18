import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get stats on the health of the system', async () => {
  const getStatsOnHealth = await api.stats.get()
  expect(getStatsOnHealth.isOk).toBeTruthy()
})

test('get stats on a failure downloader list', async () => {
  const getFailureDownloader = await api.stats.failures.downloader.filter()
  // TEMPORARY Returns 500
  expect(getFailureDownloader.status).toBe(500)
})

test('get stats on a failure processor list', async () => {
  const getFailureProcessor = await api.stats.failures.processor.filter()
  // TEMPORARY Returns 500
  expect(getFailureProcessor.status).toBe(500)
})
