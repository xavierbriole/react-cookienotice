// @flow

import { setCookie, getCookie, deleteCookie } from './cookies'
import MockDate from 'mockdate'

describe('cookies', () => {
  describe('setCookie', () => {
    beforeEach(() => {
      MockDate.set(new Date('2020-06-25T05:54:01'))

      Object.defineProperty(window.document, 'cookie', {
        writable: true,
        value: '',
      })
    })

    it('should set cookie', () => {
      setCookie('key', 'value', 7, undefined)

      expect(window.document.cookie).toEqual(
        'key=value; expires=Thu, 02 Jul 2020 09:54:01 GMT; path=/'
      )
    })

    it('should set cookie with expiration', () => {
      setCookie('key', 'value', 1, undefined)

      expect(window.document.cookie).toEqual(
        'key=value; expires=Fri, 26 Jun 2020 09:54:01 GMT; path=/'
      )
    })

    it('should set cookie with path', () => {
      setCookie('key', 'value', 7, '/path')

      expect(window.document.cookie).toEqual(
        'key=value; expires=Thu, 02 Jul 2020 09:54:01 GMT; path=/path'
      )
    })

    it('should set cookie with expiration and path', () => {
      setCookie('key', 'value', 1, '/path')

      expect(window.document.cookie).toEqual(
        'key=value; expires=Fri, 26 Jun 2020 09:54:01 GMT; path=/path'
      )
    })
  })

  describe('getCookie', () => {
    it('should return null if the cookie key does not exist', () => {
      expect(getCookie('nokey')).toEqual(null)
    })

    it('should return cookie value', () => {
      window.document.cookie =
        'key=value; expires=Thu, 02 Jul 2020 09:24:48 GMT; path=/'

      expect(getCookie('key')).toEqual('value')
    })
  })

  describe('deleteCookie', () => {
    beforeEach(() => {
      Object.defineProperty(window.document, 'cookie', {
        writable: true,
        value: 'key=value; expires=Thu, 02 Jul 2020 09:54:01 GMT; path=/',
      })
    })

    it('should delete cookie', () => {
      deleteCookie('key', '/')

      expect(window.document.cookie).toEqual(
        'key=; expires=Wed, 24 Jun 2020 09:54:01 GMT; path=/'
      )
    })
  })
})
