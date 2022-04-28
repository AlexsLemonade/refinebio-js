import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get stats on the health of the system', async () => {
  const getStatsOnHealth = await api.stats.get()

  expect(getStatsOnHealth.isOk).toBeTruthy()
})

test('get stats on a failure downloader list', async () => {
  const getFailureDownloader = await api.stats.get('downloader')

  expect(getFailureDownloader.isOk).toBeTruthy()
})

// 500 error - temporary comment out
// test('get stats on a failure processor list', async () => {
//   const getFailureProcessor = await api.stats.get('processor')

//   expect(getFailureProcessor.isOk).toBeTruthy()
// })
