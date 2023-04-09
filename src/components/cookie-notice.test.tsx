import { act, render } from '@testing-library/react'
import { vi } from 'vitest'

import { getCookie, setCookie } from '../helpers/cookies'
import CookieNotice from './cookie-notice'

vi.mock('../helpers/cookies', () => ({
  setCookie: vi.fn(),
  getCookie: vi.fn(),
}))

describe('CookieNotice', () => {
  beforeEach(() => {
    vi.resetAllMocks()
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
        hideDeclineButton={false}
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
          hideDeclineButton={false}
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
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      expect(() => getByText('readMoreLabel')).toThrow()
    })
  })

  describe('should maybe hide decline button', () => {
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
          hideDeclineButton={true}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      expect(() => getByText('declineButtonLabel')).toThrow()
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
          readMoreLabel='readMoreLabel'
          readMoreLink='https://example.com'
          readMoreInNewTab={true}
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      expect(getByText('declineButtonLabel')).toBeInTheDocument()
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
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const acceptButton = getByText('acceptButtonLabel')

      act(() => {
        acceptButton.click()
      })

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
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const acceptButton = getByText('acceptButtonLabel')

      act(() => {
        acceptButton.click()
      })

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
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const acceptButton = getByText('acceptButtonLabel')

      act(() => {
        acceptButton.click()
      })

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith('cookieName', 'true', 1)
    })

    describe('should call onAcceptButtonClick', () => {
      it('successfully if passed', () => {
        const onAcceptButtonClick = vi.fn()

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
            hideDeclineButton={false}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const acceptButton = getByText('acceptButtonLabel')

        act(() => {
          acceptButton.click()
        })

        expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
      })

      it('with failure if not passed', () => {
        const onAcceptButtonClick = vi.fn()

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
            hideDeclineButton={false}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const acceptButton = getByText('acceptButtonLabel')

        act(() => {
          acceptButton.click()
        })

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
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const declineButton = getByText('declineButtonLabel')

      act(() => {
        declineButton.click()
      })

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
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const declineButton = getByText('declineButtonLabel')

      act(() => {
        declineButton.click()
      })

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
          hideDeclineButton={false}
          cookieExpiration={1}
          cookieName='cookieName'
        />,
      )

      const declineButton = getByText('declineButtonLabel')

      act(() => {
        declineButton.click()
      })

      expect(setCookie).toHaveBeenCalledTimes(1)
      expect(setCookie).toHaveBeenCalledWith('cookieName', 'true', 1)
    })

    describe('should call onDeclineButtonClick', () => {
      it('successfully if passed', () => {
        const onDeclineButtonClick = vi.fn()

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
            hideDeclineButton={false}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const declineButton = getByText('declineButtonLabel')

        act(() => {
          declineButton.click()
        })

        expect(onDeclineButtonClick).toHaveBeenCalledTimes(1)
      })

      it('with failure if not passed', () => {
        const onDeclineButtonClick = vi.fn()

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
            hideDeclineButton={false}
            cookieExpiration={1}
            cookieName='cookieName'
          />,
        )

        const declineButton = getByText('declineButtonLabel')

        act(() => {
          declineButton.click()
        })

        expect(onDeclineButtonClick).not.toBeCalled()
      })
    })
  })
})
