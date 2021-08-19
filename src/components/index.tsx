import * as React from 'react'
import styles from '../styles.module.css'
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

const CookieNotice = ({
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
}: Props) => {
  const firstUpdate = React.useRef(true)
  const [
    shouldDisplayCookieNotice,
    setShouldDisplayCookieNotice,
  ] = React.useState<boolean>(true)
  const [services, setServices] = React.useState<Array<ServiceState>>([])

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    onServicesConfirm(services)
  }, [services])

  const onDeclineAll = () => {
    const nextServices = services.map((service) => ({
      ...service,
      enabled: false,
    }))

    setServices(nextServices)
    setShouldDisplayCookieNotice(false)
  }

  const onAcceptAll = () => {
    const nextServices = services.map((service) => ({
      ...service,
      enabled: true,
    }))

    setServices(nextServices)
    setShouldDisplayCookieNotice(false)
  }

  const onConfirm = () => {
    setShouldDisplayCookieNotice(false)
  }

  if (!shouldDisplayCookieNotice) {
    return null
  }

  return (
    <div className={styles['react-cookienotice-root']}>
      <div className={styles['react-cookienotice-wrapper']}>
        <span className={styles['react-cookienotice-title']}>
          {formatMessage('cookieNotice.titleLabel', titleLabel)}
        </span>
        <span className={styles['react-cookienotice-description']}>
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
