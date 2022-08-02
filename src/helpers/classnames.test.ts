import classnames from './classnames'

describe('classnames', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('should compute classnames', () => {
    it('with strings', () => {
      expect(classnames('foo', 'bar')).toBe('foo bar')
      expect(classnames('foo', 'bar', 'baz')).toBe('foo bar baz')
      expect(classnames('foo', 'bar', 'baz', 'qux')).toBe('foo bar baz qux')
    })

    it('with arrays', () => {
      expect(classnames(['foo', 'bar'])).toBe('foo bar')
      expect(classnames(['foo', 'bar', 'baz'])).toBe('foo bar baz')
      expect(classnames(['foo', 'bar', 'baz', 'qux'])).toBe('foo bar baz qux')
    })

    it('with objects', () => {
      expect(classnames({ foo: true, bar: true })).toBe('foo bar')
      expect(classnames({ foo: true, bar: true, baz: true })).toBe(
        'foo bar baz',
      )
      expect(classnames({ foo: true, bar: true, baz: true, qux: true })).toBe(
        'foo bar baz qux',
      )
      expect(classnames({ foo: true, bar: false, baz: true, qux: false })).toBe(
        'foo baz',
      )
    })

    it('with arrays and strings', () => {
      expect(classnames(['foo', 'bar'], 'baz', 'qux')).toBe('foo bar baz qux')
    })

    it('with arrays and objects', () => {
      expect(classnames(['foo', 'bar'], { baz: true, qux: true })).toBe(
        'foo bar baz qux',
      )
    })
  })
})
