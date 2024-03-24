import { useCallback, useMemo, useState } from 'react'

import { CookieOptions, getCookie, setCookie } from '../helpers/cookies'
import {
  validateArrayOfStrings,
  validateBoolean,
  validateCookieOptions,
  validateLink,
  validatePosition,
  validateString,
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
   * The position of the cookie banner.
   */
  position?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' }
  /**
   * Cookie options.
   */
  cookieOptions?: CookieOptions
}

/**
 * The cookie banner.
 *
 * [See documentation](https://github.com/xavierbriole/react-cookienotice#props)
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
 *   position={{ vertical: 'bottom', horizontal: 'left' }}
 *   cookieOptions={{ name: 'hide-notice', value: 'true', expires: 30, secure: false, httpOnly: false, sameSite: 'lax' }}
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
  position,
  cookieOptions,
}: CookieNoticeProps) => {
  const validAcceptAllButtonLabel = validateString(acceptAllButtonLabel)
  const validDeclineAllButtonLabel = validateString(declineAllButtonLabel)
  const validCustomizeButtonLabel = validateString(customizeButtonLabel)
  const validCustomizeTitleLabel = validateString(customizeTitleLabel)
  const validServices = validateArrayOfStrings(services)
  const validAcceptButtonLabel = validateString(acceptButtonLabel)
  const validBackButtonLabel = validateString(backButtonLabel)
  const validTitleLabel = validateString(titleLabel)
  const validDescriptionLabel = validateString(descriptionLabel)
  const validReadMoreLabel = validateString(readMoreLabel)
  const validReadMoreLink = validateLink(readMoreLink)
  const validReadMoreInNewTab = validateBoolean(readMoreInNewTab)
  const validPosition = validatePosition(position)
  const validCookieOptions = validateCookieOptions(cookieOptions)

  const shouldHideNotice = useMemo(
    () => getCookie(validCookieOptions.name) === validCookieOptions.value,
    [],
  )

  const [hideNotice, setHideNotice] = useState(shouldHideNotice)
  const [showCustomizeView, setShowCustomizeView] = useState(false)

  const handleAcceptButtonClick = useCallback((services: string[]) => {
    setHideNotice(true)
    setCookie(validCookieOptions)
    onAcceptButtonClick?.(services)
  }, [])

  const handleBackButtonClick = useCallback(() => {
    setShowCustomizeView(false)
  }, [])

  const handleAcceptAllButtonClick = useCallback(() => {
    setHideNotice(true)
    setCookie(validCookieOptions)
    onAcceptAllButtonClick?.()
  }, [])

  const handleCustomizeButtonClick = useCallback(() => {
    setShowCustomizeView(true)
  }, [])

  const handleDeclineAllButtonClick = useCallback(() => {
    setHideNotice(true)
    setCookie(validCookieOptions)
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

  return (
    <div
      className={`react-cookienotice-root ${validPosition.vertical} ${validPosition.horizontal}`}
    >
      {renderView()}
    </div>
  )
}

export default CookieNotice
