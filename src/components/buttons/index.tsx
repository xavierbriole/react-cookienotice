import React from 'react'

import styles from '../../styles.module.css'

import AcceptButton from './accept'
import ReadMoreButton from './read-more'

interface ButtonsProps {
  acceptButtonLabel: string
  handleAcceptButtonClick: () => void
  readMoreButtonLabel: string
  readMoreButtonLink: string
  readMoreButtonOpenInNewTab: boolean
}

const Buttons: React.FC<ButtonsProps> = ({
  acceptButtonLabel,
  handleAcceptButtonClick,
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
}) => {
  return (
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
}

export default Buttons
