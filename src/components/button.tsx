import React from 'react'
import clsx from '../helpers/classnames'
import styles from '../styles.module.css'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => (
  <button
    className={clsx('react-cookienotice-button', styles.button)}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
