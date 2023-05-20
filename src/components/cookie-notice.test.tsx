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
    const { asFragment } = render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={() => {}}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={() => {}}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={['service1', 'service2']}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        cookieExpiration={30}
        cookieName='cookieName'
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should handle accept all button click', () => {
    const onAcceptAllButtonClick = vi.fn()

    const { getByText } = render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={onAcceptAllButtonClick}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={() => {}}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={['service1', 'service2']}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        cookieExpiration={30}
        cookieName='cookieName'
      />,
    )

    act(() => {
      getByText('acceptAllButtonLabel').click()
    })

    expect(setCookie).toHaveBeenCalledTimes(1)
    expect(setCookie).toHaveBeenCalledWith('cookieName', 'true', 30)
    expect(onAcceptAllButtonClick).toHaveBeenCalledTimes(1)
  })

  it('should handle decline all button click', () => {
    const onDeclineAllButtonClick = vi.fn()

    const { getByText } = render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={() => {}}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={onDeclineAllButtonClick}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={['service1', 'service2']}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        cookieExpiration={30}
        cookieName='cookieName'
      />,
    )

    act(() => {
      getByText('declineAllButtonLabel').click()
    })

    expect(setCookie).toHaveBeenCalledTimes(1)
    expect(setCookie).toHaveBeenCalledWith('cookieName', 'true', 30)
    expect(onDeclineAllButtonClick).toHaveBeenCalledTimes(1)
  })

  it('should handle accept button click', () => {
    const onAcceptButtonClick = vi.fn()

    const { getByText, getByLabelText } = render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={() => {}}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={() => {}}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={['service1', 'service2']}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={onAcceptButtonClick}
        backButtonLabel='backButtonLabel'
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        cookieExpiration={30}
        cookieName='cookieName'
      />,
    )

    act(() => {
      getByText('customizeButtonLabel').click()
    })

    act(() => {
      getByLabelText('service1').click()
      getByLabelText('service2').click()
    })

    act(() => {
      getByText('acceptButtonLabel').click()
    })

    expect(setCookie).toHaveBeenCalledTimes(1)
    expect(setCookie).toHaveBeenCalledWith('cookieName', 'true', 30)
    expect(onAcceptButtonClick).toHaveBeenCalledTimes(1)
    expect(onAcceptButtonClick).toHaveBeenCalledWith(['service1', 'service2'])
  })

  it('should get cookie on mount', () => {
    render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={() => {}}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={() => {}}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={['service1', 'service2']}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        cookieExpiration={30}
        cookieName='cookieName'
      />,
    )

    expect(getCookie).toHaveBeenCalledTimes(1)
    expect(getCookie).toHaveBeenCalledWith('cookieName')
  })

  it('should switch views', () => {
    const { getByText, getByLabelText } = render(
      <CookieNotice
        acceptAllButtonLabel='acceptAllButtonLabel'
        onAcceptAllButtonClick={() => {}}
        declineAllButtonLabel='declineAllButtonLabel'
        onDeclineAllButtonClick={() => {}}
        customizeButtonLabel='customizeButtonLabel'
        customizeTitleLabel='customizeTitleLabel'
        services={['service1', 'service2']}
        acceptButtonLabel='acceptButtonLabel'
        onAcceptButtonClick={() => {}}
        backButtonLabel='backButtonLabel'
        titleLabel='titleLabel'
        descriptionLabel='descriptionLabel'
        readMoreLabel='readMoreLabel'
        readMoreLink='https://www.example.com'
        readMoreInNewTab={true}
        cookieExpiration={30}
        cookieName='cookieName'
      />,
    )

    expect(getByText('titleLabel')).toBeInTheDocument()
    expect(getByText('descriptionLabel')).toBeInTheDocument()
    expect(getByText('readMoreLabel')).toBeInTheDocument()
    expect(getByText('acceptAllButtonLabel')).toBeInTheDocument()
    expect(getByText('customizeButtonLabel')).toBeInTheDocument()
    expect(getByText('declineAllButtonLabel')).toBeInTheDocument()

    act(() => {
      getByText('customizeButtonLabel').click()
    })

    expect(getByText('customizeTitleLabel')).toBeInTheDocument()
    expect(getByLabelText('service1')).toBeInTheDocument()
    expect(getByLabelText('service2')).toBeInTheDocument()
    expect(getByText('acceptButtonLabel')).toBeInTheDocument()
    expect(getByText('backButtonLabel')).toBeInTheDocument()

    act(() => {
      getByText('backButtonLabel').click()
    })

    expect(getByText('titleLabel')).toBeInTheDocument()
    expect(getByText('descriptionLabel')).toBeInTheDocument()
    expect(getByText('readMoreLabel')).toBeInTheDocument()
    expect(getByText('acceptAllButtonLabel')).toBeInTheDocument()
    expect(getByText('customizeButtonLabel')).toBeInTheDocument()
    expect(getByText('declineAllButtonLabel')).toBeInTheDocument()
  })
})
