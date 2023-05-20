import { useCallback, useMemo, useState } from 'react'

import { getCookie, setCookie } from '../helpers/cookies'
import {
  validateArrayOfStrings,
  validateBoolean,
  validateCookieExpiration,
  validateCookieName,
  validateLabel,
  validateLink,
} from '../validator'
import CustomizeView from './views/customize-view'
import DefaultView from './views/default-view'

export interface CookieNoticeProps {
  /**
   * The label for the accept all cookies button.
   */
  acceptAllButtonLabel?: string
  /**
   * A callback function to be called when the accept all cookies button is clicked.
   */
  onAcceptAllButtonClick?: () => void
  /**
   * The label for the decline all cookies button.
   */
  declineAllButtonLabel?: string
  /**
   * A callback function to be called when the decline all cookies button is clicked.
   */
  onDeclineAllButtonClick?: () => void
  /**
   * The label for the customize cookies button.
   */
  customizeButtonLabel?: string
  /**
   * The title for the customize view.
   */
  customizeTitleLabel?: string
  /**
   * List of services to be customized.
   */
  services?: string[]
  /**
   * The label for the accept button.
   */
  acceptButtonLabel?: string
  /**
   * A callback function to be called when the accept cookies button is clicked. The first param returns the checked services.
   */
  onAcceptButtonClick?: (services: string[]) => void
  /**
   * The label for the back button.
   */
  backButtonLabel?: string
  /**
   * The title for the cookie banner.
   */
  titleLabel?: string
  /**
   * The description for the cookie banner.
   */
  descriptionLabel?: string
  /**
   * The label for the read more link.
   */
  readMoreLabel?: string
  /**
   * The link for the read more label.
   */
  readMoreLink?: string
  /**
   * Whether the read more link should open in a new tab.
   */
  readMoreInNewTab?: boolean
  /**
   * Days after cookie expires and user should reaccept cookies.
   */
  cookieExpiration?: number
  /**
   * The name of the cookie that saves the user consent.
   */
  cookieName?: string
}

/**
 * The cookie banner.
 *
 * @example
 * <CookieNotice
 *   acceptAllButtonLabel='acceptAllButtonLabel'
 *   onAcceptAllButtonClick={() => {}}
 *   declineAllButtonLabel='declineAllButtonLabel'
 *   onDeclineAllButtonClick={() => {}}
 *   customizeButtonLabel='customizeButtonLabel'
 *   customizeTitleLabel='customizeTitleLabel'
 *   services={['GOOGLE_ANALYTICS', 'HUBSPOT']}
 *   acceptButtonLabel='acceptButtonLabel'
 *   onAcceptButtonClick={(services: string[]) => {}}
 *   backButtonLabel='backButtonLabel'
 *   titleLabel='titleLabel'
 *   descriptionLabel='descriptionLabel'
 *   readMoreLabel='readMoreLabel'
 *   readMoreLink='readMoreLink'
 *   readMoreInNewTab={true}
 *   cookieExpiration={30}
 *   cookieName='cookieName'
 * />
 */
const CookieNotice = ({
  acceptAllButtonLabel,
  onAcceptAllButtonClick,
  declineAllButtonLabel,
  onDeclineAllButtonClick,
  customizeButtonLabel,
  customizeTitleLabel,
  services,
  acceptButtonLabel,
  onAcceptButtonClick,
  backButtonLabel,
  titleLabel,
  descriptionLabel,
  readMoreLabel,
  readMoreLink,
  readMoreInNewTab,
  cookieExpiration,
  cookieName,
}: CookieNoticeProps) => {
  const validAcceptAllButtonLabel = validateLabel(acceptAllButtonLabel)
  const validDeclineAllButtonLabel = validateLabel(declineAllButtonLabel)
  const validCustomizeButtonLabel = validateLabel(customizeButtonLabel)
  const validCustomizeTitleLabel = validateLabel(customizeTitleLabel)
  const validServices = validateArrayOfStrings(services)
  const validAcceptButtonLabel = validateLabel(acceptButtonLabel)
  const validBackButtonLabel = validateLabel(backButtonLabel)
  const validTitleLabel = validateLabel(titleLabel)
  const validDescriptionLabel = validateLabel(descriptionLabel)
  const validReadMoreLabel = validateLabel(readMoreLabel)
  const validReadMoreLink = validateLink(readMoreLink)
  const validReadMoreInNewTab = validateBoolean(readMoreInNewTab)
  const validCookieExpiration = validateCookieExpiration(cookieExpiration)
  const validCookieName = validateCookieName(cookieName)

  const shouldHideNotice = useMemo(
    () => getCookie(validCookieName) === 'true',
    [],
  )

  const [hideNotice, setHideNotice] = useState(shouldHideNotice)
  const [showCustomizeView, setShowCustomizeView] = useState(false)

  const handleAcceptButtonClick = useCallback((services: string[]) => {
    setHideNotice(true)
    setCookie(validCookieName, 'true', validCookieExpiration)
    onAcceptButtonClick?.(services)
  }, [])

  const handleBackButtonClick = useCallback(() => {
    setShowCustomizeView(false)
  }, [])

  const handleAcceptAllButtonClick = useCallback(() => {
    setHideNotice(true)
    setCookie(validCookieName, 'true', validCookieExpiration)
    onAcceptAllButtonClick?.()
  }, [])

  const handleCustomizeButtonClick = useCallback(() => {
    setShowCustomizeView(true)
  }, [])

  const handleDeclineAllButtonClick = useCallback(() => {
    setHideNotice(true)
    setCookie(validCookieName, 'true', validCookieExpiration)
    onDeclineAllButtonClick?.()
  }, [])

  if (hideNotice) return null

  const renderView = () => {
    if (showCustomizeView && validServices) {
      return (
        <CustomizeView
          customizeTitleLabel={validCustomizeTitleLabel}
          services={validServices}
          onAcceptButtonClick={handleAcceptButtonClick}
          acceptButtonLabel={validAcceptButtonLabel}
          onBackButtonClick={handleBackButtonClick}
          backButtonLabel={validBackButtonLabel}
        />
      )
    }

    return (
      <DefaultView
        titleLabel={validTitleLabel}
        descriptionLabel={validDescriptionLabel}
        readMoreLink={validReadMoreLink}
        readMoreInNewTab={validReadMoreInNewTab}
        readMoreLabel={validReadMoreLabel}
        onAcceptAllButtonClick={handleAcceptAllButtonClick}
        acceptAllButtonLabel={validAcceptAllButtonLabel}
        onCustomizeButtonClick={handleCustomizeButtonClick}
        customizeButtonLabel={validCustomizeButtonLabel}
        onDeclineAllButtonClick={handleDeclineAllButtonClick}
        declineAllButtonLabel={validDeclineAllButtonLabel}
        services={validServices}
      />
    )
  }

  return <div className='react-cookienotice-root'>{renderView()}</div>
}

export default CookieNotice
