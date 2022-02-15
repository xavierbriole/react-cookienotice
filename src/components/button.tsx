import React from 'react'

import styles from '../styles.module.css'

interface ButtonProps {
  label: string
  onClick?: () => void
}

const Button = ({ label, onClick }: ButtonProps) => (
  <button className={styles['react-cookienotice-button']} onClick={onClick}>
    {label}
  </button>
)

export default Button
