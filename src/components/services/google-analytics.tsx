import React, { useEffect, useState } from 'react'
import Event from '../../helpers/event'
import styles from '../../styles.module.css'

const GoogleAnalytics: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false)

  const onInputChange = (): void => {
    setChecked(!checked)
  }

  useEffect(() => {
    Event.send({
      type: 'REACT_COOKIENOTICE_EVENT',
      service: 'GOOGLE_ANALYTICS',
      enabled: checked,
    })
  }, [checked])

  return (
    <React.Fragment>
      <label className={styles['react-cookienotice-switch']}>
        <input type='checkbox' onChange={onInputChange} checked={checked} />
        <span className={styles['react-cookienotice-slider']} />
      </label>
      <span className={styles['react-cookienotice-service-name']}>
        Google Analytics
      </span>
    </React.Fragment>
  )
}

export default GoogleAnalytics
