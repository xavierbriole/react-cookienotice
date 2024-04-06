import { useCallback, useState } from 'react'

import { formatMessage } from '../../intl/format'
import Button from '../button'
import Text from '../text'

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

  const renderServices = () =>
    services.map(({ name, description, code, alwaysActive }) => (
      <li key={code} className='react-cookienotice-service'>
        <div className='react-cookienotice-service-checkbox'>
          <input
            type='checkbox'
            id={code}
            name={code}
            checked={alwaysActive || checkedServices.includes(code)}
            onChange={handleCheckboxChange}
            disabled={alwaysActive}
          />
          <label htmlFor={code}>{code}</label>
        </div>
        <div className='react-cookienotice-service-info'>
          <div className='react-cookienotice-service-info-name-wrapper'>
            <span className='react-cookienotice-service-info-name'>{name}</span>
            {alwaysActive && (
              <Text className='react-cookienotice-service-info-always-active'>
                {formatMessage('text.alwaysActive', alwaysActiveLabel)}
              </Text>
            )}
          </div>
          <span className='react-cookienotice-service-info-description'>
            {description}
          </span>
        </div>
      </li>
    ))

  return (
    <>
      <div className='react-cookienotice-body'>
        <Text className='react-cookienotice-title'>
          {formatMessage('text.customizeTitle', customizeTitleLabel)}
        </Text>
        <ul className='react-cookienotice-services'>{renderServices()}</ul>
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
