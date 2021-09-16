import React from 'react'

import styles from '../../styles.module.css'

interface AcceptButtonProps {
  acceptButtonLabel: string
  handleAcceptButtonClick: () => void
}

const AcceptButton: React.FC<AcceptButtonProps> = ({
  acceptButtonLabel,
  handleAcceptButtonClick,
}) => {
  return (
    <button
      className={styles['react-cookienotice-accept-button']}
      onClick={handleAcceptButtonClick}
    >
      <span>{acceptButtonLabel}</span>
    </button>
  )
}

export default AcceptButton
