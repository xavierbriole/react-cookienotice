import { useEffect, useRef, useState } from 'react'

import { formatMessage } from '../../intl/format'
import Text from '../text'

interface ServiceItemProps {
  name: string
  description: string
  code: string
  alwaysActive?: boolean
  alwaysActiveLabel?: string
  isChecked: boolean
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ServiceItem = ({
  name,
  description,
  code,
  alwaysActive,
  alwaysActiveLabel,
  isChecked,
  onCheckboxChange,
}: ServiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (contentRef.current instanceof HTMLDivElement) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`
        return
      }

      contentRef.current.style.maxHeight = '0'
    }
  }, [isOpen])

  return (
    <div className='react-cookienotice-service'>
      <div className='react-cookienotice-service-checkbox'>
        <input
          type='checkbox'
          id={code}
          name={code}
          checked={alwaysActive || isChecked}
          onChange={onCheckboxChange}
          disabled={alwaysActive}
        />
        <label htmlFor={code}>{code}</label>
      </div>
      <div className='react-cookienotice-service-info'>
        <button
          className={`react-cookienotice-service-info-title${isOpen ? ' open' : ''}`}
          onClick={handleButtonClick}
        >
          {name}
          {alwaysActive && (
            <Text className='react-cookienotice-service-info-title-always-active'>
              {formatMessage('text.alwaysActive', alwaysActiveLabel)}
            </Text>
          )}
        </button>
        <div
          ref={contentRef}
          className='react-cookienotice-service-info-content'
        >
          <p className='react-cookienotice-service-info-content-description'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
