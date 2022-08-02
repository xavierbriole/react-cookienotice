import React from 'react'

import styles from '../styles.module.css'

import clsx from '../helpers/classnames'

interface LinkProps {
  to?: string
  newTab?: boolean
  label?: string
}

const Link = ({ to, newTab, label }: LinkProps) => {
  if (to === undefined || newTab === undefined || label === undefined)
    return null

  return (
    <a
      href={to}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noreferrer' : undefined}
      className={clsx('react-cookienotice-link', styles.link)}
    >
      {label}
    </a>
  )
}

export default Link
