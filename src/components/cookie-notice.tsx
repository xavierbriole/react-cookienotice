import React, { useState, useEffect, useCallback } from 'react'

import styles from '../styles.module.css'

import Icon from './icon'
import Text from './text'
import Buttons from './buttons'

import { setCookie, getCookie } from '../helpers/cookies'
import { warn } from '../helpers/debug'
import { formatMessage } from '../intl/format'
import {
  validateAcceptButtonLabel,
  validateReadMoreButtonLabel,
  validateReadMoreButtonLink,
  validateReadMoreButtonOpenInNewTab,
  validateCookieTextLabel,
  validateCookieExpiration,
  validateCookieName,
} from '../validator'

export interface CookieNoticeProps {
  /**
   * The label for the accept button.
   * @default 'Accept'
   */
  acceptButtonLabel?: string
  /**
   * A callback function to be called when the accept button is clicked.
   */
  onAcceptButtonClick?: () => void
  /**
   * The label for the read more button.
   * @default 'Read more'
   */
  readMoreButtonLabel?: string
  /**
   * The link for the read more button.
   * @default 'http://aboutcookies.org/'
   */
  readMoreButtonLink?: string
  /**
   * Whether the read more button should open in a new tab.
   * @default true
   */
  readMoreButtonOpenInNewTab?: boolean
  /**
   * The text for the cookie banner.
   * @default 'This website uses cookies to improve your browsing experience.'
   */
  cookieTextLabel?: string
  /**
   * Days after cookie expires and user should reaccept cookies.
   * @default 30
   */
  cookieExpiration?: number
  /**
   * The name of the cookie that saves the user consent.
   * @default 'allow-cookies'
   */
  cookieName?: string
}

/**
 * The cookie banner.
 *
 * @example
 * <CookieNotice
 *   acceptButtonLabel='Accept'
 *   onAcceptButtonClick={() => {}}
 *   readMoreButtonLabel='Read more'
 *   readMoreButtonLink='http://aboutcookies.org/'
 *   readMoreButtonOpenInNewTab={true}
 *   cookieTextLabel='This website uses cookies to improve your browsing experience.'
 *   cookieExpiration={30}
 *   cookieName='allow-cookies'
 * />
 */
const CookieNotice = ({
  acceptButtonLabel,
  onAcceptButtonClick,
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
  cookieTextLabel,
  cookieExpiration,
  cookieName,
}: CookieNoticeProps) => {
  const validCookieExpiration = validateCookieExpiration(cookieExpiration)
  const validCookieName = validateCookieName(cookieName)
  const userCookiesAllowed = getCookie(validCookieName) === 'true'

  const [cookiesAllowed, setCookiesAllowed] = useState(userCookiesAllowed)

  useEffect(() => {
    warn(
      'BREAKING CHANGE: With version >= 4.0.0 you also need to import the css file (read: https://github.com/xavierbriole/react-cookienotice#usage)',
    )
  }, [])

  const handleAcceptButtonClick = useCallback(() => {
    setCookiesAllowed(true)
    setCookie(validCookieName, 'true', validCookieExpiration)
    onAcceptButtonClick && onAcceptButtonClick()
  }, [])

  if (cookiesAllowed) {
    return null
  }

  return (
    <div className={styles['react-cookienotice-root']}>
      <div className={styles['react-cookienotice-stick-to-bottom']}>
        <div className={styles['react-cookienotice-wrapper']}>
          <Icon />
          <Text
            cookieTextLabel={formatMessage(
              'text.cookieTextLabel',
              validateCookieTextLabel(cookieTextLabel),
            )}
          />
          <Buttons
            acceptButtonLabel={formatMessage(
              'buttons.accept.acceptButtonLabel',
              validateAcceptButtonLabel(acceptButtonLabel),
            )}
            handleAcceptButtonClick={handleAcceptButtonClick}
            readMoreButtonLabel={formatMessage(
              'buttons.readMore.readMoreButtonLabel',
              validateReadMoreButtonLabel(readMoreButtonLabel),
            )}
            readMoreButtonLink={validateReadMoreButtonLink(readMoreButtonLink)}
            readMoreButtonOpenInNewTab={validateReadMoreButtonOpenInNewTab(
              readMoreButtonOpenInNewTab,
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default CookieNotice
