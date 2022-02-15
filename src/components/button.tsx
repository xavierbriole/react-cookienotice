import React from 'react'

import styles from '../styles.module.css'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => (
  <button className={styles['react-cookienotice-button']} onClick={onClick}>
    {children}
  </button>
)

export default Button
