import Refinebio from 'index'

const api = Refinebio()

test('update the config', () => {
  const modifiedConfig = api.updateConfig({
    path: `https://api.staging.refine.bio/v1/`,
    verbose: true
  })

  expect(modifiedConfig.path).toBe(`https://api.staging.refine.bio/v1/`)
  expect(modifiedConfig.verbose).toBe(true)
})
