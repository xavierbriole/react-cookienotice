import React, { Children, useState } from 'react'
import { formatMessage } from '../intl/format'
import Customize from './customize'
import styles from '../styles.module.css'

interface Props {
  declineAllButtonLabel?: string
  customButtonLabel?: string
  acceptAllButtonLabel?: string
  customizeLabel?: string
  confirmButtonLabel?: string
  onDeclineAllButtonClick?: () => void
  onAcceptAllButtonClick?: () => void
  onConfirmButtonClick?: () => void
}

const Buttons: React.FC<Props> = ({
  declineAllButtonLabel,
  customButtonLabel,
  acceptAllButtonLabel,
  customizeLabel,
  confirmButtonLabel,
  onDeclineAllButtonClick,
  onAcceptAllButtonClick,
  onConfirmButtonClick,
  children,
}) => {
  const [shouldDisplayCustomize, setShouldDisplayCustomize] = useState<boolean>(
    false
  )

  const shouldCustomize = Children.count(children) > 0

  const onCustomButtonClick = (): void => {
    setShouldDisplayCustomize(true)
  }

  return (
    <React.Fragment>
      <div
        className={
          styles[
            `react-cookienotice-buttons${
              shouldDisplayCustomize ? '-hidden' : ''
            }`
          ]
        }
      >
        <button onClick={onDeclineAllButtonClick}>
          {formatMessage(
            'buttons.declineAllButtonLabel',
            declineAllButtonLabel
          )}
        </button>
        {shouldCustomize && (
          <button onClick={onCustomButtonClick}>
            {formatMessage('buttons.customButtonLabel', customButtonLabel)}
          </button>
        )}
        <button onClick={onAcceptAllButtonClick}>
          {formatMessage('buttons.acceptAllButtonLabel', acceptAllButtonLabel)}
        </button>
      </div>
      <Customize
        customizeLabel={customizeLabel}
        confirmButtonLabel={confirmButtonLabel}
        onConfirmButtonClick={onConfirmButtonClick}
        shouldDisplay={shouldDisplayCustomize}
      >
        {children}
      </Customize>
    </React.Fragment>
  )
}

export default Buttons
