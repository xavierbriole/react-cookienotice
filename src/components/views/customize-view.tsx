import { useCallback, useState } from 'react'

import { err } from '../../helpers/debug'
import { formatMessage } from '../../intl/format'
import Button from '../button'
import Text from '../text'

interface CustomizeViewProps {
  customizeTitleLabel?: string
  services: string[]
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

  const renderServices = () => {
    if (services.length === 0) {
      err('You must provide at least one service.')
      return null
    }

    return services.map((service, index) => (
      <li key={index}>
        <input
          type='checkbox'
          id={service}
          name={service}
          checked={checkedServices.includes(service)}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={service}>{service}</label>
        <span>{service}</span>
      </li>
    ))
  }

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
