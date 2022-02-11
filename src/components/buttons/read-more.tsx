import React from 'react'

import styles from '../../styles.module.css'

export interface ReadMoreButtonProps {
  /**
   * The label for the button.
   * @default 'Read more'
   */
  readMoreButtonLabel: string
  /**
   * The link for the button.
   * @default 'http://aboutcookies.org/'
   */
  readMoreButtonLink: string
  /**
   * Whether the button should open in a new tab.
   * @default true
   */
  readMoreButtonOpenInNewTab: boolean
}

/**
 * The read more button.
 *
 * @example
 * <ReadMoreButton
 *   readMoreButtonLabel='Read more'
 *   readMoreButtonLink='http://aboutcookies.org/'
 *   readMoreButtonOpenInNewTab={true}
 * />
 */
const ReadMoreButton = ({
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
}: ReadMoreButtonProps) => (
  <a
    className={styles['react-cookienotice-read-more-button']}
    href={readMoreButtonLink}
    target={readMoreButtonOpenInNewTab ? '_blank' : '_self'}
    rel={readMoreButtonOpenInNewTab ? 'noreferrer' : undefined}
  >
    {readMoreButtonLabel}
  </a>
)

export default ReadMoreButton
