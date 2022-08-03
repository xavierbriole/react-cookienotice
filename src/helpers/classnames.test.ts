import classnames from './classnames'

describe('classnames', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('should compute classnames', () => {
    it('with null', () => {
      expect(classnames(null)).toBe('')
    })

    it('with no arguments', () => {
      expect(classnames()).toBe('')
    })

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
      expect(classnames(['foo', 'bar'], 'baz', ['qux', 'quux'])).toBe(
        'foo bar baz qux quux',
      )
    })

    it('with arrays and objects', () => {
      expect(classnames(['foo', 'bar'], { baz: true, qux: true })).toBe(
        'foo bar baz qux',
      )
      expect(classnames(['foo', 'bar'], { baz: true, qux: false })).toBe(
        'foo bar baz',
      )
      expect(classnames(['foo', 'bar'], { baz: true, qux: true }, 'quux')).toBe(
        'foo bar baz qux quux',
      )
    })

    it('with string and objects', () => {
      expect(classnames('foo', { bar: true, baz: true })).toBe('foo bar baz')
      expect(classnames('foo', { bar: true, baz: false })).toBe('foo bar')
      expect(classnames('foo', { bar: true, baz: true }, 'qux')).toBe(
        'foo bar baz qux',
      )
    })
  })
})