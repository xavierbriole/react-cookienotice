import React, { Children } from 'react'
import { formatMessage } from '../intl/format'
import styles from '../styles.module.css'

interface Props {
  customizeLabel?: string
  confirmButtonLabel?: string
  onConfirmButtonClick?: () => void
  shouldDisplay: boolean
}

const Customize: React.FC<Props> = ({
  customizeLabel,
  confirmButtonLabel,
  onConfirmButtonClick,
  shouldDisplay,
  children,
}) => (
  <div
    className={
      styles[`react-cookienotice-customize${shouldDisplay ? '' : '-hidden'}`]
    }
  >
    <span className={styles['react-cookienotice-customize-label']}>
      {formatMessage('customize.label', customizeLabel)}
    </span>
    <div className={styles['react-cookienotice-services']}>
      {Children.map(children, (child) => (
        <div className={styles['react-cookienotice-service']}>{child}</div>
      ))}
    </div>
    <button onClick={onConfirmButtonClick}>
      {formatMessage('customize.confirmButtonLabel', confirmButtonLabel)}
    </button>
  </div>
)

export default Customize
