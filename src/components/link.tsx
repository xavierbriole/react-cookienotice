import * as React from 'react'
import styles from '../styles.module.css'
import { formatMessage } from '../intl/format'

interface Props {
  linkLabel?: string
  linkHref?: string
}

const Link = ({ linkLabel, linkHref }: Props) => {
  if (linkHref === undefined) {
    return null
  }

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
