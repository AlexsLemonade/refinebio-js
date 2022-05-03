import Refinebio from 'index'

const api = Refinebio({ verbose: true })

test('get all the available "institution" information', async () => {
  const getInstitutions = await api.institutions.get()

  expect(getInstitutions.isOk).toBeTruthy()
})
