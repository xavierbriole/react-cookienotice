import { useCallback } from 'react'

import { formatMessage } from '../../intl/format'
import Button from '../button'
import Link from '../link'
import Text from '../text'

interface DefaultViewProps {
  titleLabel?: string
  descriptionLabel?: string
  readMoreLink?: string
  readMoreInNewTab?: boolean
  readMoreLabel?: string
  onAcceptAllButtonClick: (services?: string[]) => void
  acceptAllButtonLabel?: string
  onCustomizeButtonClick: () => void
  customizeButtonLabel?: string
  onDeclineAllButtonClick: () => void
  declineAllButtonLabel?: string
  services?: ServiceObject[]
}

const DefaultView = ({
  titleLabel,
  descriptionLabel,
  readMoreLink,
  readMoreInNewTab,
  readMoreLabel,
  onAcceptAllButtonClick,
  acceptAllButtonLabel,
  onCustomizeButtonClick,
  customizeButtonLabel,
  onDeclineAllButtonClick,
  declineAllButtonLabel,
  services,
}: DefaultViewProps) => {
  const handleAcceptAllButtonClick = useCallback(() => {
    onAcceptAllButtonClick(services?.map(({ code }) => code))
  }, [])

  return (
    <>
      <div className='react-cookienotice-body'>
        <Text className='react-cookienotice-title'>
          {formatMessage('text.title', titleLabel)}
        </Text>
        <Text className='react-cookienotice-description'>
          {formatMessage('text.description', descriptionLabel)}
        </Text>
        <Link
          to={readMoreLink}
          newTab={readMoreInNewTab}
          label={readMoreLabel}
        />
      </div>
      <div className='react-cookienotice-buttons'>
        <Button onClick={onDeclineAllButtonClick}>
          {formatMessage('button.declineAll', declineAllButtonLabel)}
        </Button>
        {services && services.length > 0 && (
          <Button onClick={onCustomizeButtonClick}>
            {formatMessage('button.customize', customizeButtonLabel)}
          </Button>
        )}
        <Button onClick={handleAcceptAllButtonClick}>
          {formatMessage('button.acceptAll', acceptAllButtonLabel)}
        </Button>
      </div>
    </>
  )
}

export default DefaultView
