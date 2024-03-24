import { vi } from 'vitest'

import { err } from '../helpers/debug'
import {
  validateArrayOfStrings,
  validateBoolean,
  validateCookieOptions,
  validateLink,
  validatePosition,
  validateString,
} from '.'

vi.mock('../helpers/debug', () => ({
  err: vi.fn(),
}))

describe('validator', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('should validate string', () => {
    it('with string', () => {
      expect(validateString('label')).toBe('label')
    })

    it('with no parameter', () => {
      expect(validateString(undefined)).toBeUndefined()
    })
  })

  describe('should validate array of strings', () => {
    describe('with array', () => {
      it('with valid array', () => {
        expect(validateArrayOfStrings(['string'])).toEqual(['string'])
      })

      describe('with invalid array', () => {
        it('with empty array', () => {
          validateArrayOfStrings([])
          expect(err).toHaveBeenCalledWith(
            'array should have at least one element',
          )
        })

        it('with array of non-string', () => {
          validateArrayOfStrings([1])
          expect(err).toHaveBeenCalledWith('array should contain only string')
        })
      })
    })

    it('with no parameter', () => {
      expect(validateArrayOfStrings(undefined)).toBeUndefined()
    })
  })

  describe('should validate link', () => {
    describe('with string', () => {
      it('with http://', () => {
        expect(validateLink('http://')).toBe('http://')
      })

      it('with https://', () => {
        expect(validateLink('https://')).toBe('https://')
      })

      it('with invalid url', () => {
        validateLink('invalid')

        expect(err).toHaveBeenCalledWith(
          'a link should start with "http://" or "https://"',
        )
      })
    })
  })

  describe('should validate boolean', () => {
    it('with boolean', () => {
      expect(validateBoolean(true)).toBe(true)
    })

    it('with no parameter', () => {
      expect(validateBoolean(undefined)).toBeUndefined()
    })
  })

  describe('should validate position', () => {
    describe('with object', () => {
      it('with valid object', () => {
        expect(
          validatePosition({ vertical: 'top', horizontal: 'right' }),
        ).toEqual({ vertical: 'top', horizontal: 'right' })
      })

      describe('with invalid object', () => {
        it('with invalid vertical', () => {
          validatePosition({ vertical: 'invalid', horizontal: 'left' })

          expect(err).toHaveBeenCalledWith(
            'position.vertical parameter should be "top" or "bottom"',
          )
        })

        it('with invalid horizontal', () => {
          validatePosition({ vertical: 'bottom', horizontal: 'invalid' })

          expect(err).toHaveBeenCalledWith(
            'position.horizontal parameter should be "left" or "right"',
          )
        })
      })
    })

    it('with no parameter', () => {
      expect(validatePosition(undefined)).toEqual({
        vertical: 'bottom',
        horizontal: 'left',
      })
    })
  })

  describe('should validate cookie options', () => {
    describe('with object', () => {
      it.each(['strict', 'lax', 'none'])(
        'with valid object and sameSite %s',
        (sameSite) => {
          expect(
            validateCookieOptions({
              name: 'hide-notice',
              value: 'true',
              expires: 30,
              secure: false,
              httpOnly: false,
              sameSite,
            }),
          ).toEqual({
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite,
          })
        },
      )

      describe('with invalid object', () => {
        it('with invalid name', () => {
          validateCookieOptions({
            name: 1,
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.name parameter should be a string',
          )
        })

        it('with invalid value', () => {
          validateCookieOptions({
            name: 'hide-notice',
            value: 1,
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.value parameter should be a string',
          )
        })

        it('with invalid expires', () => {
          validateCookieOptions({
            name: 'hide-notice',
            value: 'true',
            expires: 'invalid',
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.expires parameter should be a number',
          )
        })

        it('with invalid secure', () => {
          validateCookieOptions({
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: 'invalid',
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.secure parameter should be a boolean',
          )
        })

        it('with invalid httpOnly', () => {
          validateCookieOptions({
            name: 'hide-notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: 'invalid',
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.httpOnly parameter should be a boolean',
          )
        })

        it.each(['invalid', 1, true, null, undefined, ''])(
          'with invalid sameSite (%s)',
          (sameSite) => {
            validateCookieOptions({
              name: 'hide-notice',
              value: 'true',
              expires: 30,
              secure: false,
              httpOnly: false,
              sameSite,
            })

            expect(err).toHaveBeenCalledWith(
              'cookieOptions.sameSite parameter should be "strict", "lax" or "none"',
            )
          },
        )

        it('with whitespace in name', () => {
          validateCookieOptions({
            name: 'hide notice',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.name parameter should not contain whitespace',
          )
        })

        it('with empty name', () => {
          validateCookieOptions({
            name: '',
            value: 'true',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.name parameter should have at least one character',
          )
        })

        it('with whitespace in value', () => {
          validateCookieOptions({
            name: 'hide-notice',
            value: 'true ',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.value parameter should not contain whitespace',
          )
        })

        it('with empty value', () => {
          validateCookieOptions({
            name: 'hide-notice',
            value: '',
            expires: 30,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.value parameter should have at least one character',
          )
        })

        it.each([0, -1])('with expires %s', (expires) => {
          validateCookieOptions({
            name: 'hide-notice',
            value: 'true',
            expires,
            secure: false,
            httpOnly: false,
            sameSite: 'lax',
          })

          expect(err).toHaveBeenCalledWith(
            'cookieOptions.expires parameter should be more than 0 day',
          )
        })
      })
    })

    it('with no parameter', () => {
      expect(validateCookieOptions(undefined)).toEqual({
        name: 'hide-notice',
        value: 'true',
        expires: 30,
        secure: false,
        httpOnly: false,
        sameSite: 'lax',
      })
    })
  })
})
