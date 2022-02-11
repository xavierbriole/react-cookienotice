import React from 'react'

import styles from '../styles.module.css'

export interface TextProps {
  /**
   * The label for the text.
   * @default 'This website uses cookies to improve your browsing experience.'
   */
  cookieTextLabel: string
}

/**
 * The cookie banner text.
 *
 * @example
 * <Text
 *   cookieTextLabel='This website uses cookies to improve your browsing experience.'
 * />
 */
const Text = ({ cookieTextLabel }: TextProps) => (
  <div className={styles['react-cookienotice-text']}>
    <span>{cookieTextLabel}</span>
  </div>
)

export default Text
