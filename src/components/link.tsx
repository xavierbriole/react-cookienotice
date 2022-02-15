import React from 'react'

import styles from '../styles.module.css'

interface LinkProps {
  to: string
  newTab?: boolean
  children: React.ReactNode
}

const Link = ({ to, newTab, children }: LinkProps) => (
  <a
    href={to}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noreferrer' : undefined}
    className={styles['react-cookienotice-link']}
  >
    {children}
  </a>
)

export default Link
