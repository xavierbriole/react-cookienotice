import React from 'react'

import styles from '../../styles.module.css'

export interface AcceptButtonProps {
  /**
   * The label for the button.
   * @default 'Accept'
   */
  acceptButtonLabel: string
  /**
   * A callback function to be called when the button is clicked.
   */
  handleAcceptButtonClick: () => void
}

/**
 * The accept button.
 *
 * @example
 * <AcceptButton
 *   acceptButtonLabel='Accept'
 *   handleAcceptButtonClick={() => {}}
 * />
 */
const AcceptButton = ({
  acceptButtonLabel,
  handleAcceptButtonClick,
}: AcceptButtonProps) => (
  <button
    className={styles['react-cookienotice-accept-button']}
    onClick={handleAcceptButtonClick}
  >
    <span>{acceptButtonLabel}</span>
  </button>
)

export default AcceptButton
