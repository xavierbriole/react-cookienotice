import React from 'react'

import styles from '../../styles.module.css'

import AcceptButton from './accept'
import ReadMoreButton from './read-more'

export interface ButtonsProps {
  /**
   * The label for the accept button.
   * @default 'Accept'
   */
  acceptButtonLabel: string
  /**
   * A callback function to be called when the accept button is clicked.
   */
  handleAcceptButtonClick: () => void
  /**
   * The label for the read more button.
   * @default 'Read more'
   */
  readMoreButtonLabel: string
  /**
   * The link for the read more button.
   * @default 'http://aboutcookies.org/'
   */
  readMoreButtonLink: string
  /**
   * Whether the read more button should open in a new tab.
   * @default true
   */
  readMoreButtonOpenInNewTab: boolean
}

/**
 * The accept & read more buttons.
 *
 * @example
 * <Buttons
 *   acceptButtonLabel='Accept'
 *   handleAcceptButtonClick={() => {}}
 *   readMoreButtonLabel='Read more'
 *   readMoreButtonLink='http://aboutcookies.org/'
 *   readMoreButtonOpenInNewTab={true}
 * />
 */
const Buttons = ({
  acceptButtonLabel,
  handleAcceptButtonClick,
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
}: ButtonsProps) => (
  <div className={styles['react-cookienotice-buttons-wrapper']}>
    <AcceptButton
      acceptButtonLabel={acceptButtonLabel}
      handleAcceptButtonClick={handleAcceptButtonClick}
    />
    <ReadMoreButton
      readMoreButtonLabel={readMoreButtonLabel}
      readMoreButtonLink={readMoreButtonLink}
      readMoreButtonOpenInNewTab={readMoreButtonOpenInNewTab}
    />
  </div>
)

export default Buttons
