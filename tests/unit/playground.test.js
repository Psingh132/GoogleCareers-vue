import { multiply } from '@/playground'

describe('basic math', () => {
  it('add two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  describe('multiply', () => {
    it('multiply two numbers', () => {
      expect(multiply(2, 3)).toBe(6)
    })
  })
})
