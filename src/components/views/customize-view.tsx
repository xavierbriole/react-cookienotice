import { useCallback, useState } from 'react'

import { formatMessage } from '../../intl/format'
import Button from '../button'
import Text from '../text'
import ServiceItem from './service-item'

interface CustomizeViewProps {
  customizeTitleLabel?: string
  services: ServiceObject[]
  onAcceptButtonClick: (services: string[]) => void
  acceptButtonLabel?: string
  onBackButtonClick: () => void
  backButtonLabel?: string
  alwaysActiveLabel?: string
  customizeAcceptAllButtonLabel?: string
  onCustomizeAcceptAllButtonClick?: (services: string[]) => void
  customizeAcceptAllTimeout?: number
}

const CustomizeView = ({
  customizeTitleLabel,
  services,
  onAcceptButtonClick,
  acceptButtonLabel,
  onBackButtonClick,
  backButtonLabel,
  alwaysActiveLabel,
  customizeAcceptAllButtonLabel,
  onCustomizeAcceptAllButtonClick,
  customizeAcceptAllTimeout,
}: CustomizeViewProps) => {
  const [checkedServices, setCheckedServices] = useState<string[]>([])

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = event.target

      if (checkedServices.includes(name)) {
        setCheckedServices(
          checkedServices.filter((service) => service !== name),
        )
        return
      }

      setCheckedServices([...checkedServices, name])
    },
    [checkedServices],
  )

  const handleAcceptButtonClick = useCallback(() => {
    const alwaysActiveServices = services
      .filter(({ alwaysActive }) => alwaysActive)
      .map(({ code }) => code)

    onAcceptButtonClick([...checkedServices, ...alwaysActiveServices])
  }, [checkedServices, onAcceptButtonClick])

  const handleAcceptAllButtonClick = useCallback(() => {
    setCheckedServices(services.map(({ code }) => code))

    setTimeout(() => {
      onCustomizeAcceptAllButtonClick?.(services.map(({ code }) => code))
    }, customizeAcceptAllTimeout)
  }, [])

  return (
    <>
      <div className='react-cookienotice-body'>
        <Text className='react-cookienotice-title'>
          {formatMessage('text.customizeTitle', customizeTitleLabel)}
        </Text>
        <div className='react-cookienotice-services'>
          {services.map(({ name, description, code, alwaysActive }, index) => (
            <ServiceItem
              key={index}
              name={name}
              description={description}
              code={code}
              alwaysActive={alwaysActive}
              alwaysActiveLabel={alwaysActiveLabel}
              isChecked={checkedServices.includes(code)}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
      <div className='react-cookienotice-buttons'>
        <Button onClick={onBackButtonClick}>
          {formatMessage('button.back', backButtonLabel)}
        </Button>
        <Button onClick={handleAcceptAllButtonClick}>
          {formatMessage(
            'button.customizeAcceptAll',
            customizeAcceptAllButtonLabel,
          )}
        </Button>
        <Button onClick={handleAcceptButtonClick}>
          {formatMessage('button.accept', acceptButtonLabel)}
        </Button>
      </div>
    </>
  )
}

export default CustomizeView
