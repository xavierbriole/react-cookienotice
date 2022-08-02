import React from 'react'

import styles from '../styles.module.css'

import clsx from '../helpers/classnames'

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
