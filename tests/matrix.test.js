const absoluteSumMatrix = require('../matrix')

describe('Name of the group', () => {
  describe.each([
    [
      [
        [1, 3, 4],
        [-2, -3, -5],
        [6, 2, 5]
      ],
      10
    ],
    [
      [
        [6, 21, 1],
        [4, -20, 1],
        [9, 8, -10]
      ],
      34
    ],
    [
      [
        [400, 200, 300],
        [120, -800, 213],
        [-344, 20, -900]
      ],
      2144
    ]
  ])('absoulteSumMatrix(matrix)', (input, expected) => {
    test(`returns ${expected}`, () => {
      expect(absoluteSumMatrix(input)).toBe(expected)
    })
  })
})


// Matrix ulala