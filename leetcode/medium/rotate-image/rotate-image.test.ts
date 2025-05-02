import { rotate } from './rotate-image'

describe('rotate', () => {
  it('rotates a 3x3 matrix', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
    rotate(input)
    expect(input).toEqual(expected)
  })

  it('rotates a 1x1 matrix', () => {
    const input = [[1]]
    const expected = [[1]]
    rotate(input)
    expect(input).toEqual(expected)
  })

  it('rotates a 2x2 matrix', () => {
    const input = [
      [1, 2],
      [3, 4]
    ]
    const expected = [
      [3, 1],
      [4, 2]
    ]
    rotate(input)
    expect(input).toEqual(expected)
  })
})