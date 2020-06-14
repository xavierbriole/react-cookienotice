import {
  validateAcceptButtonLabel,
  validateReadMoreButtonLabel,
  validateReadMoreButtonLink,
  validateOpenInNewTab,
  validateCookieTextLabel,
  validateReverseButtons,
  validateBorderRadius,
  validateJustifyContent,
  validateMaxWidth,
} from '../Validator'

describe('validator', () => {
  describe('should validate acceptButtonLabel', () => {
    it('with override', () => {
      const result = validateAcceptButtonLabel('label')

      expect(result).toBe('label')
    })

    it('default return', () => {
      const result = validateAcceptButtonLabel(undefined)

      expect(result).toBe('Accept')
    })
  })

  describe('should validate readMoreButtonLabel', () => {
    it('with override', () => {
      const result = validateReadMoreButtonLabel('label')

      expect(result).toBe('label')
    })

    it('default return', () => {
      const result = validateReadMoreButtonLabel(undefined)

      expect(result).toBe('Read more')
    })
  })

  describe('should validate readMoreButtonLink', () => {
    describe('with override', () => {
      describe('parameter is a valid url', () => {
        it('http protocol', () => {
          const result = validateReadMoreButtonLink('http://test.com')

          expect(result).toBe('http://test.com')
        })

        it('https protocol', () => {
          const result = validateReadMoreButtonLink('https://test.com')

          expect(result).toBe('https://test.com')
        })
      })

      it('parameter is not a valid url', () => {
        expect(() => {
          validateReadMoreButtonLink('test.com')
        }).toThrow(
          '[react-cookienotice] readMoreButtonLink parameter should starts with "http://" or "https://"'
        )
      })
    })

    it('default return', () => {
      const result = validateReadMoreButtonLink(undefined)

      expect(result).toBe('http://aboutcookies.org/')
    })
  })

  describe('should validate openInNewTab', () => {
    it('with override', () => {
      const result = validateOpenInNewTab(false)

      expect(result).toBe(false)
    })

    it('default return', () => {
      const result = validateOpenInNewTab(undefined)

      expect(result).toBe(true)
    })
  })

  describe('should validate cookieTextLabel', () => {
    it('with override', () => {
      const result = validateCookieTextLabel('label')

      expect(result).toBe('label')
    })

    it('default return', () => {
      const result = validateCookieTextLabel(undefined)

      expect(result).toBe(
        'This website uses cookies to improve your browsing experience.'
      )
    })
  })

  describe('should validate reverseButtons', () => {
    it('with override', () => {
      const result = validateReverseButtons(true)

      expect(result).toBe(true)
    })

    it('default return', () => {
      const result = validateReverseButtons(undefined)

      expect(result).toBe(false)
    })
  })

  describe('should validate borderRadius', () => {
    it('with override', () => {
      const result = validateBorderRadius(20)

      expect(result).toBe(20)
    })

    it('default return', () => {
      const result = validateBorderRadius(undefined)

      expect(result).toBe(32)
    })
  })

  describe('should validate justifyContent', () => {
    describe('with override', () => {
      describe('parameter is an accepted value', () => {
        it('space-around', () => {
          const result = validateJustifyContent('space-around')

          expect(result).toBe('space-around')
        })

        it('space-between', () => {
          const result = validateJustifyContent('space-between')

          expect(result).toBe('space-between')
        })
      })

      it('parameter is not an accepted value', () => {
        expect(() => {
          validateJustifyContent('space-evenly')
        }).toThrow(
          '[react-cookienotice] Accepted values for justifyContent parameter: space-around or space-between'
        )
      })
    })

    it('default return', () => {
      const result = validateJustifyContent(undefined)

      expect(result).toBe('space-between')
    })
  })

  describe('should validate maxWidth', () => {
    describe('with override', () => {
      it('parameter is less than 400px', () => {
        const result = validateMaxWidth(300)

        expect(result).toBe(400)
      })

      it('parameter is 400px', () => {
        const result = validateMaxWidth(400)

        expect(result).toBe(400)
      })

      it('parameter is more than 400px', () => {
        const result = validateMaxWidth(500)

        expect(result).toBe(500)
      })
    })

    it('default return', () => {
      const result = validateMaxWidth(undefined)

      expect(result).toBe(1000)
    })
  })
})
