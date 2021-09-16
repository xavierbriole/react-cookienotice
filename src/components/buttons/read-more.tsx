/* eslint-disable react/jsx-no-target-blank */

import React from 'react'

import styles from '../../styles.module.css'

interface ReadMoreButtonProps {
  readMoreButtonLabel: string
  readMoreButtonLink: string
  readMoreButtonOpenInNewTab: boolean
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
}) => {
  return (
    <a
      className={styles['react-cookienotice-read-more-button']}
      href={readMoreButtonLink}
      target={readMoreButtonOpenInNewTab ? '_blank' : '_self'}
      rel={readMoreButtonOpenInNewTab ? 'noreferrer' : undefined}
    >
      {readMoreButtonLabel}
    </a>
  )
}

export default ReadMoreButton
