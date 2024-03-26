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
}

const CustomizeView = ({
  customizeTitleLabel,
  services,
  onAcceptButtonClick,
  acceptButtonLabel,
  onBackButtonClick,
  backButtonLabel,
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
    onAcceptButtonClick(checkedServices)
  }, [checkedServices, onAcceptButtonClick])

  const renderServices = () =>
    services.map(({ name, description, code }) => (
      <li key={code} className='react-cookienotice-service'>
        <div className='react-cookienotice-service-checkbox'>
          <input
            type='checkbox'
            id={code}
            name={code}
            checked={checkedServices.includes(code)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={code}>{code}</label>
        </div>
        <div className='react-cookienotice-service-info'>
          <span className='react-cookienotice-service-info-name'>{name}</span>
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
        <Button onClick={handleAcceptButtonClick}>
          {formatMessage('button.accept', acceptButtonLabel)}
        </Button>
        <Button onClick={onBackButtonClick}>
          {formatMessage('button.back', backButtonLabel)}
        </Button>
      </div>
    </>
  )
}

export default CustomizeView
