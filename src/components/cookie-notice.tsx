import { useCallback, useState } from 'react'

import { getCookie, setCookie } from '../helpers/cookies'
import { formatMessage } from '../intl/format'
import {
  validateBoolean,
  validateCookieExpiration,
  validateCookieName,
  validateLabel,
  validateLink,
} from '../validator'
import Button from './button'
import Link from './link'
import Text from './text'

export interface CookieNoticeProps {
  /**
   * The label for the accept button.
   */
  acceptButtonLabel?: string
  /**
   * A callback function to be called when the accept button is clicked.
   */
  onAcceptButtonClick?: () => void
  /**
   * The label for the decline button.
   */
  declineButtonLabel?: string
  /**
   * A callback function to be called when the decline button is clicked.
   */
  onDeclineButtonClick?: () => void
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
   * This will hide the decline button.
   */
  hideDeclineButton?: boolean
  /**
   * Days after cookie expires and user should reaccept cookies.
   */
  cookieExpiration?: number
  /**
   * The name of the cookie that saves the user consent.
   */
  cookieName?: string
  /**
   * @deprecated Use titleLabel instead.
   */
  cookieTextLabel?: string
  /**
   * @deprecated Use readMoreLabel instead.
   */
  readMoreButtonLabel?: string
  /**
   * @deprecated Use readMoreLink instead.
   */
  readMoreButtonLink?: string
  /**
   * @deprecated Use readMoreInNewTab instead.
   */
  readMoreButtonOpenInNewTab?: boolean
}

/**
 * The cookie banner.
 *
 * @example
 * <CookieNotice
 *   acceptButtonLabel='acceptButtonLabel'
 *   onAcceptButtonClick={() => {}}
 *   declineButtonLabel='declineButtonLabel'
 *   onDeclineButtonClick={() => {}}
 *   titleLabel='titleLabel'
 *   descriptionLabel='descriptionLabel'
 *   readMoreLabel='readMoreLabel'
 *   readMoreLink='readMoreLink'
 *   readMoreInNewTab={true}
 *   hideDeclineButton={false}
 *   cookieExpiration={30}
 *   cookieName='cookieName'
 * />
 */
const CookieNotice = ({
  acceptButtonLabel,
  onAcceptButtonClick,
  declineButtonLabel,
  onDeclineButtonClick,
  titleLabel,
  descriptionLabel,
  readMoreLabel,
  readMoreLink,
  readMoreInNewTab,
  hideDeclineButton,
  cookieExpiration,
  cookieName,
  cookieTextLabel,
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
}: CookieNoticeProps) => {
  const validAcceptButtonLabel = validateLabel(acceptButtonLabel)
  const validDeclineButtonLabel = validateLabel(declineButtonLabel)
  const validTitleLabel = validateLabel(titleLabel || cookieTextLabel)
  const validDescriptionLabel = validateLabel(descriptionLabel)
  const validReadMoreLabel = validateLabel(readMoreLabel || readMoreButtonLabel)
  const validReadMoreLink = validateLink(readMoreLink || readMoreButtonLink)
  const validReadMoreInNewTab = validateBoolean(
    readMoreInNewTab ?? readMoreButtonOpenInNewTab,
  )
  const validHideDeclineButton = validateBoolean(hideDeclineButton)
  const validCookieExpiration = validateCookieExpiration(cookieExpiration)
  const validCookieName = validateCookieName(cookieName)

  const shouldHideNotice = getCookie(validCookieName) === 'true'

  const [hideNotice, setHideNotice] = useState(shouldHideNotice)

  const handleAcceptButtonClick = useCallback(() => {
    setHideNotice(true)
    setCookie(validCookieName, 'true', validCookieExpiration)
    onAcceptButtonClick && onAcceptButtonClick()
  }, [])

  const handleDeclineButtonClick = useCallback(() => {
    setHideNotice(true)
    setCookie(validCookieName, 'true', validCookieExpiration)
    onDeclineButtonClick && onDeclineButtonClick()
  }, [])

  if (hideNotice) return null

  return (
    <div className='react-cookienotice-root'>
      <div className='react-cookienotice-body'>
        <Text className='react-cookienotice-title'>
          {formatMessage('text.title', validTitleLabel)}
        </Text>
        <Text className='react-cookienotice-description'>
          {formatMessage('text.description', validDescriptionLabel)}
        </Text>
        <Link
          to={validReadMoreLink}
          newTab={validReadMoreInNewTab}
          label={validReadMoreLabel}
        />
      </div>
      <div className='react-cookienotice-buttons'>
        <Button onClick={handleAcceptButtonClick}>
          {formatMessage('button.accept', validAcceptButtonLabel)}
        </Button>
        {!validHideDeclineButton && (
          <Button onClick={handleDeclineButtonClick}>
            {formatMessage('button.decline', validDeclineButtonLabel)}
          </Button>
        )}
      </div>
    </div>
  )
}

export default CookieNotice
