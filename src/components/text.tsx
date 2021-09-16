import React from 'react'

import styles from '../styles.module.css'

interface TextProps {
  cookieTextLabel: string
}

const Text: React.FC<TextProps> = ({ cookieTextLabel }) => (
  <div className={styles['react-cookienotice-text']}>
    <span>{cookieTextLabel}</span>
  </div>
)

export default Text
