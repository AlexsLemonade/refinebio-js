import { mergeObject } from 'utils/mergeObject'

describe('Merge two objets', () => {
  const input = [
    [{ a: 'a' }],
    [
      {
        a: 'a1',
        b: [1, 2, 5],
        c: {
          d: [1, 2],
          e: [2, 3],
          f: [3, 4],
          g: [5, 6],
          h: [7, 8]
        }
      },
      {
        a: 'a2',
        b: [2, 3, 4],
        c: {
          d: [2, 3],
          e: [4, 5],
          f: [6, 7],
          g: [8, 9]
        }
      }
    ],
    [
      {
        data: {
          'E-ABC-1': ['SAMP1', 'SAMP2'],
          'E-ABC-2': ['SAMP1', 'SAMP2'],
          'E-ABC-3': ['SAMP1', 'SAMP2']
        },
        email: '',
        aggregate_by: 'ALL',
        scale_by: 'NONE',
        quantile_normalize: true,
        quant_sf_only: false,
        svd_algorithm: 'NONE'
      },
      {
        email: 'jonedoe@test.com',
        aggregate_by: 'EXPERIMENT',
        data: {
          'E-ABC-1': ['SAMP2', 'SAMP3', 'SAMP4'],
          'E-ABC-2': ['SAMP1', 'SAMP2'],
          'E-ABC-4': ['SAMP3', 'SAMP4']
        }
      }
    ]
  ]

  test('should return the first argument', () => {
    const output = mergeObject(input[0][0])
    expect(output).toBe(input[0][0])
  })

  test('should return a new merged object', () => {
    const outputOne = mergeObject(input[1][0], input[1][1])
    expect(outputOne.a).toBe('a2')
    expect(JSON.stringify(outputOne.b)).toBe(JSON.stringify([1, 2, 3, 4, 5]))
    expect(JSON.stringify(outputOne.c.d)).toBe(JSON.stringify([1, 2, 3]))

    const outputTwo = mergeObject(input[2][0], input[2][1])
    expect(outputTwo.email).toBe('jonedoe@test.com')
    expect(outputTwo.aggregate_by).toBe('EXPERIMENT')
    expect(outputTwo.scale_by).toBe('NONE')
    expect(JSON.stringify(outputTwo.data['E-ABC-1'])).toBe(
      JSON.stringify(['SAMP1', 'SAMP2', 'SAMP3', 'SAMP4'])
    )
    expect(JSON.stringify(outputTwo.data['E-ABC-3'])).toBe(
      JSON.stringify(['SAMP1', 'SAMP2'])
    )
    expect(outputTwo.data['E-ABC-3']).not.toBe(input[2][0].data['E-ABC-3'])
    expect(JSON.stringify(outputTwo.data['E-ABC-4'])).toBe(
      JSON.stringify(['SAMP3', 'SAMP4'])
    )
    expect(outputTwo.data['E-ABC-4']).not.toBe(input[2][1].data['E-ABC-4'])
  })
})
