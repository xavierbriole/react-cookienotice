import * as React from 'react'
import { formatMessage } from '../intl/format'
import styles from '../styles.module.css'

interface Props {
  customizeLabel?: string
  confirmButtonLabel?: string
  onConfirmButtonClick?: () => void
  shouldDisplay: boolean
  children: React.ReactNode
}

const Customize = ({
  customizeLabel,
  confirmButtonLabel,
  onConfirmButtonClick,
  shouldDisplay,
  children,
}: Props) => {
  return (
    <div
      className={
        styles[`react-cookienotice-customize${shouldDisplay ? '' : '-hidden'}`]
      }
    >
      <span className={styles['react-cookienotice-customize-label']}>
        {formatMessage('customize.label', customizeLabel)}
      </span>
      <div className={styles['react-cookienotice-services']}>
        {React.Children.map(children, (child) => (
          <div className={styles['react-cookienotice-service']}>{child}</div>
        ))}
      </div>
      <button onClick={onConfirmButtonClick}>
        {formatMessage('customize.confirmButtonLabel', confirmButtonLabel)}
      </button>
    </div>
  )
}

export default Customize
