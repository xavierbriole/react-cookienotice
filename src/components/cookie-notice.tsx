import { useCallback, useMemo, useState } from 'react'

import { getCookieValue, setCookie } from '../helpers/cookies'
import {
  validateBoolean,
  validateCookieOptions,
  validateLink,
  validatePlacement,
  validateServices,
  validateString,
  validateTimeout,
} from '../validator'
import CustomizeView from './views/customize-view'
import DefaultView from './views/default-view'

export interface CookieNoticeProps {
  /**
   * The label for the accept all cookies button.
   */
  acceptAllButtonLabel?: string
  /**
   * A callback function to be called when the accept all cookies button is clicked. The first param returns the services if any.
   */
  onAcceptAllButtonClick?: (services?: string[]) => void
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
  services?: ServiceObject[]
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
   * The label for the always active services.
   */
  alwaysActiveLabel?: string
  /**
   * The label for the accept all button in the customize view.
   */
  customizeAcceptAllButtonLabel?: string
  /**
   * The timeout for the accept all button in the customize view.
   */
  customizeAcceptAllTimeout?: number
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
   * The placement of the cookie banner.
   */
  placement?: PlacementOptions
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
 *   onAcceptAllButtonClick={(services?: string[]) => {}}
 *   declineAllButtonLabel='declineAllButtonLabel'
 *   onDeclineAllButtonClick={() => {}}
 *   customizeButtonLabel='customizeButtonLabel'
 *   customizeTitleLabel='customizeTitleLabel'
 *   services={[{ name: 'serviceName', description: 'serviceDescription', code: 'serviceCode' }]}
 *   acceptButtonLabel='acceptButtonLabel'
 *   onAcceptButtonClick={(services: string[]) => {}}
 *   backButtonLabel='backButtonLabel'
 *   alwaysActiveLabel='alwaysActiveLabel'
 *   customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
 *   customizeAcceptAllTimeout={1000}
 *   titleLabel='titleLabel'
 *   descriptionLabel='descriptionLabel'
 *   readMoreLabel='readMoreLabel'
 *   readMoreLink='readMoreLink'
 *   readMoreInNewTab={true}
 *   placement={{ vertical: 'bottom', horizontal: 'left' }}
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
  alwaysActiveLabel,
  customizeAcceptAllButtonLabel,
  customizeAcceptAllTimeout,
  titleLabel,
  descriptionLabel,
  readMoreLabel,
  readMoreLink,
  readMoreInNewTab,
  placement,
  cookieOptions,
}: CookieNoticeProps) => {
  const validAcceptAllButtonLabel = validateString(acceptAllButtonLabel)
  const validDeclineAllButtonLabel = validateString(declineAllButtonLabel)
  const validCustomizeButtonLabel = validateString(customizeButtonLabel)
  const validCustomizeTitleLabel = validateString(customizeTitleLabel)
  const validServices = validateServices(services)
  const validAcceptButtonLabel = validateString(acceptButtonLabel)
  const validBackButtonLabel = validateString(backButtonLabel)
  const validAlwaysActiveLabel = validateString(alwaysActiveLabel)
  const validCustomizeAcceptAllButtonLabel = validateString(
    customizeAcceptAllButtonLabel,
  )
  const validCustomizeAcceptAllTimeout = validateTimeout(
    customizeAcceptAllTimeout,
  )
  const validTitleLabel = validateString(titleLabel)
  const validDescriptionLabel = validateString(descriptionLabel)
  const validReadMoreLabel = validateString(readMoreLabel)
  const validReadMoreLink = validateLink(readMoreLink)
  const validReadMoreInNewTab = validateBoolean(readMoreInNewTab)
  const validPlacement = validatePlacement(placement)
  const validCookieOptions = validateCookieOptions(cookieOptions)

  const shouldHideNotice = useMemo(
    () => getCookieValue(validCookieOptions.name) === validCookieOptions.value,
    [],
  )

  const [hideWithAnimation, setHideWithAnimation] = useState(false)
  const [showCustomizeView, setShowCustomizeView] = useState(false)

  const handleAcceptButtonClick = useCallback((services: string[]) => {
    setHideWithAnimation(true)
    setCookie(validCookieOptions)
    onAcceptButtonClick?.(services)
  }, [])

  const handleBackButtonClick = useCallback(() => {
    setShowCustomizeView(false)
  }, [])

  const handleAcceptAllButtonClick = useCallback((services?: string[]) => {
    setHideWithAnimation(true)
    setCookie(validCookieOptions)
    onAcceptAllButtonClick?.(services)
  }, [])

  const handleCustomizeButtonClick = useCallback(() => {
    setShowCustomizeView(true)
  }, [])

  const handleDeclineAllButtonClick = useCallback(() => {
    setHideWithAnimation(true)
    setCookie(validCookieOptions)
    onDeclineAllButtonClick?.()
  }, [])

  const handleCustomizeAcceptAllButtonClick = useCallback(
    (services: string[]) => {
      setHideWithAnimation(true)
      setCookie(validCookieOptions)
      onAcceptAllButtonClick?.(services)
    },
    [],
  )

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
          alwaysActiveLabel={validAlwaysActiveLabel}
          customizeAcceptAllButtonLabel={validCustomizeAcceptAllButtonLabel}
          onCustomizeAcceptAllButtonClick={handleCustomizeAcceptAllButtonClick}
          customizeAcceptAllTimeout={validCustomizeAcceptAllTimeout}
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
      className={`react-cookienotice-root${hideWithAnimation ? ' hide-with-animation' : ''}${shouldHideNotice ? ' hidden' : ''} ${validPlacement.vertical} ${validPlacement.horizontal}`}
    >
      {renderView()}
    </div>
  )
}

export default CookieNotice
