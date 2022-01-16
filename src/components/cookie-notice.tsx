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

interface CookieNoticeProps {
  acceptButtonLabel?: string
  readMoreButtonLabel?: string
  readMoreButtonLink?: string
  readMoreButtonOpenInNewTab?: boolean
  cookieTextLabel?: string
  cookieExpiration?: number
  cookieName?: string
  onAcceptButtonClick?: () => void
}

const CookieNotice: React.FC<CookieNoticeProps> = ({
  acceptButtonLabel,
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
  cookieTextLabel,
  cookieExpiration,
  cookieName,
  onAcceptButtonClick,
}) => {
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
