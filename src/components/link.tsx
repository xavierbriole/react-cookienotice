import React from 'react'
import { formatMessage } from '../intl/format'
import styles from '../styles.module.css'

interface Props {
  linkLabel?: string
  linkHref?: string
}

const Link: React.FC<Props> = ({ linkLabel, linkHref }) => {
  if (linkHref === undefined) return null

  return (
    <a
      className={styles['react-cookienotice-link']}
      href={linkHref}
      target='_blank'
      rel='noreferrer'
    >
      {formatMessage('link.label', linkLabel)}
    </a>
  )
}

export default Link
