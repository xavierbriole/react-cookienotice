import React, { useEffect, useRef, useState } from 'react'
import { formatMessage } from '../intl/format'
import Link from './link'
import Buttons from './buttons'

interface ServiceEvent {
  service: string
  enabled: boolean
}

interface ServiceState {
  name: string
  enabled: boolean
}

interface Props {
  titleLabel?: string
  descriptionText?: string
  linkLabel?: string
  linkHref?: string
  declineAllButtonLabel?: string
  customButtonLabel?: string
  acceptAllButtonLabel?: string
  customizeLabel?: string
  confirmButtonLabel?: string
  onServicesConfirm: (enabledServices: Array<ServiceState>) => void
  children: React.ReactNode
}

const CookieNotice: React.FC<Props> = ({
  titleLabel,
  descriptionText,
  linkLabel,
  linkHref,
  declineAllButtonLabel,
  customButtonLabel,
  acceptAllButtonLabel,
  customizeLabel,
  confirmButtonLabel,
  onServicesConfirm,
  children,
}) => {
  const firstUpdate = useRef(true)
  const [
    shouldDisplayCookieNotice,
    setShouldDisplayCookieNotice,
  ] = useState<boolean>(true)
  const [services, setServices] = useState<Array<ServiceState>>([])

  useEffect(() => {
    const handleEvent = (event: MessageEvent) => {
      if (event.data.type === 'REACT_COOKIENOTICE_EVENT') {
        const eventData: ServiceEvent = event.data
        const nextServices: Array<ServiceState> = []

        nextServices.push({
          name: eventData.service,
          enabled: eventData.enabled,
        })

        setServices(nextServices)
      }
    }

    window.addEventListener('message', handleEvent)
    return () => window.removeEventListener('message', handleEvent)
  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    onServicesConfirm(services)
  }, [services])

  const onDeclineAll = (): void => {
    const nextServices = services.map((service) => ({
      ...service,
      enabled: false,
    }))

    setServices(nextServices)
    setShouldDisplayCookieNotice(false)
  }

  const onAcceptAll = (): void => {
    const nextServices = services.map((service) => ({
      ...service,
      enabled: true,
    }))

    setServices(nextServices)
    setShouldDisplayCookieNotice(false)
  }

  const onConfirm = (): void => {
    setShouldDisplayCookieNotice(false)
  }

  if (!shouldDisplayCookieNotice) {
    return null
  }

  return (
    <div className='react-cookienotice-root'>
      <div className='react-cookienotice-wrapper'>
        <span className='react-cookienotice-title'>
          {formatMessage('cookieNotice.titleLabel', titleLabel)}
        </span>
        <span className='react-cookienotice-description'>
          {formatMessage('cookieNotice.descriptionText', descriptionText)}
        </span>
        <Link linkHref={linkHref} linkLabel={linkLabel} />
      </div>
      <Buttons
        declineAllButtonLabel={declineAllButtonLabel}
        customButtonLabel={customButtonLabel}
        acceptAllButtonLabel={acceptAllButtonLabel}
        customizeLabel={customizeLabel}
        confirmButtonLabel={confirmButtonLabel}
        onDeclineAllButtonClick={onDeclineAll}
        onAcceptAllButtonClick={onAcceptAll}
        onConfirmButtonClick={onConfirm}
      >
        {children}
      </Buttons>
    </div>
  )
}

export default CookieNotice
