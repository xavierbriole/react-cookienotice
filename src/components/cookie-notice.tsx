import React, { useState, useEffect, useCallback } from 'react'

import styles from '../styles.module.css'

import Text from './text'
import Link from './link'
import Button from './button'

import { setCookie, getCookie } from '../helpers/cookies'
import { warn } from '../helpers/debug'
import { formatMessage } from '../intl/format'
import {
  validateLabel,
  validateLink,
  validateBoolean,
  validateCookieExpiration,
  validateCookieName,
} from '../validator'

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
   * The target for the read more link.
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
 *   acceptButtonLabel='acceptButtonLabel'
 *   onAcceptButtonClick={() => {}}
 *   declineButtonLabel='declineButtonLabel'
 *   onDeclineButtonClick={() => {}}
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
  acceptButtonLabel,
  onAcceptButtonClick,
  declineButtonLabel,
  onDeclineButtonClick,
  titleLabel,
  descriptionLabel,
  readMoreLabel,
  readMoreLink,
  readMoreInNewTab,
  cookieExpiration,
  cookieName,
}: CookieNoticeProps) => {
  const validReadMoreLabel = validateLabel(readMoreLabel)
  const validReadMoreLink = validateLink(readMoreLink)
  const validReadMoreInNewTab = validateBoolean(readMoreInNewTab)
  const validCookieExpiration = validateCookieExpiration(cookieExpiration)
  const validCookieName = validateCookieName(cookieName)

  const shouldHideNotice = getCookie(validCookieName) === 'true'

  const [hideNotice, setHideNotice] = useState(shouldHideNotice)

  useEffect(() => {
    warn(
      'BREAKING CHANGE: With version >= 4.0.0 you also need to import the css file (read: https://github.com/xavierbriole/react-cookienotice#usage)',
    )
  }, [])

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

  if (hideNotice) {
    return null
  }

  return (
    <div className={styles['react-cookienotice-root']}>
      <div className={styles['react-cookienotice-body']}>
        <Text className={styles['react-cookienotice-title']}>
          {formatMessage('text.title', validateLabel(titleLabel))}
        </Text>
        <Text className={styles['react-cookienotice-description']}>
          {formatMessage('text.description', validateLabel(descriptionLabel))}
        </Text>
        {validReadMoreLabel &&
          validReadMoreLink &&
          typeof validReadMoreInNewTab === 'boolean' && (
            <Link to={validReadMoreLink} newTab={validReadMoreInNewTab}>
              {validReadMoreLabel}
            </Link>
          )}
      </div>
      <div className={styles['react-cookienotice-buttons']}>
        <Button
          label={formatMessage(
            'button.accept',
            validateLabel(acceptButtonLabel),
          )}
          onClick={handleAcceptButtonClick}
        />
        <Button
          label={formatMessage(
            'button.decline',
            validateLabel(declineButtonLabel),
          )}
          onClick={handleDeclineButtonClick}
        />
      </div>
    </div>
  )
}

export default CookieNotice
