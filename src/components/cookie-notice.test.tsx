import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import CookieNotice from './cookie-notice'

import { setCookie, getCookie } from '../helpers/cookies'

jest.mock('../helpers/cookies', () => ({
  setCookie: jest.fn(),
  getCookie: jest.fn(),
}))

describe('CookieNotice', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render', () => {
    const { container } = render(
      <CookieNotice
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        declineButtonLabel='declineButtonLabel'
        onDeclineButtonClick={() => {}}
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://example.com'
        readMoreInNewTab={true}
        cookieExpiration={1}
        cookieName='cookieName'
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  describe('should maybe display read more link', () => {
    it('successfully', () => {
      const { getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      expect(getByText('readMoreLabel')).toBeInTheDocument()
    })

    it('with failure', () => {
      const { getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      expect(() => getByText('readMoreLabel')).toThrow()
    })
  })

  describe('after accept button click', () => {
    it('should hide cookie notice', () => {
      const { container, getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const acceptButton = getByText('acceptButtonLabel')

      acceptButton.click()

      expect(container.firstChild).toBeNull()
    })

    it('should call getCookie 2 times (first before click & second after click)', () => {
      const { getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const acceptButton = getByText('acceptButtonLabel')

      acceptButton.click()

      expect(getCookie).toHaveBeenCalledTimes(2)
      expect(getCookie).toHaveBeenCalledWith('cookieName')
    })

    it('should call setCookie', () => {
      const { getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const acceptButton = getByText('acceptButtonLabel')

      acceptButton.click()

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith('cookieName', 'true', 1)
    })

    describe('should call onAcceptButtonClick', () => {
      it('successfully if passed', () => {
        const onAcceptButtonClick = jest.fn()

        const { getByText } = render(
          <CookieNotice
            acceptButtonLabel='acceptButtonLabel'
            onAcceptButtonClick={onAcceptButtonClick}
            declineButtonLabel='declineButtonLabel'
            onDeclineButtonClick={() => {}}
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            readMoreLabel='readMoreLabel'
            readMoreLink='https://example.com'
            readMoreInNewTab={true}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const acceptButton = getByText('acceptButtonLabel')

        acceptButton.click()

        expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      })

      it('with failure if not passed', () => {
        const onAcceptButtonClick = jest.fn()

        const { getByText } = render(
          <CookieNotice
            acceptButtonLabel='acceptButtonLabel'
            declineButtonLabel='declineButtonLabel'
            onDeclineButtonClick={() => {}}
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            readMoreLabel='readMoreLabel'
            readMoreLink='https://example.com'
            readMoreInNewTab={true}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const acceptButton = getByText('acceptButtonLabel')

        acceptButton.click()

        expect(onAcceptButtonClick).not.toBeCalled()
      })
    })
  })

  describe('after decline button click', () => {
    it('should hide cookie notice', () => {
      const { container, getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const declineButton = getByText('declineButtonLabel')

      declineButton.click()

      expect(container.firstChild).toBeNull()
    })

    it('should call getCookie 2 times (first before click & second after click)', () => {
      const { getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const declineButton = getByText('declineButtonLabel')

      declineButton.click()

      expect(getCookie).toHaveBeenCalledTimes(2)
      expect(getCookie).toHaveBeenCalledWith('cookieName')
    })

    it('should call setCookie', () => {
      const { getByText } = render(
        <CookieNotice
          acceptButtonLabel='acceptButtonLabel'
          onAcceptButtonClick={() => {}}
          declineButtonLabel='declineButtonLabel'
          onDeclineButtonClick={() => {}}
          titleLabel='titleLabel'
          descriptionLabel='descriptionLabel'
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const declineButton = getByText('declineButtonLabel')

      declineButton.click()

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith('cookieName', 'true', 1)
    })

    describe('should call onDeclineButtonClick', () => {
      it('successfully if passed', () => {
        const onDeclineButtonClick = jest.fn()

        const { getByText } = render(
          <CookieNotice
            acceptButtonLabel='acceptButtonLabel'
            onAcceptButtonClick={() => {}}
            declineButtonLabel='declineButtonLabel'
            onDeclineButtonClick={onDeclineButtonClick}
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            readMoreLabel='readMoreLabel'
            readMoreLink='https://example.com'
            readMoreInNewTab={true}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const declineButton = getByText('declineButtonLabel')

        declineButton.click()

        expect(onDeclineButtonClick).toHaveBeenCalledTimes(1)
      })

      it('with failure if not passed', () => {
        const onDeclineButtonClick = jest.fn()

        const { getByText } = render(
          <CookieNotice
            acceptButtonLabel='acceptButtonLabel'
            onAcceptButtonClick={() => {}}
            declineButtonLabel='declineButtonLabel'
            titleLabel='titleLabel'
            descriptionLabel='descriptionLabel'
            readMoreLabel='readMoreLabel'
            readMoreLink='https://example.com'
            readMoreInNewTab={true}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const declineButton = getByText('declineButtonLabel')

        declineButton.click()

        expect(onDeclineButtonClick).not.toBeCalled()
      })
    })
  })
})
