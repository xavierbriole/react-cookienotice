import * as React from 'react'
import styles from '../../styles.module.css'
import Event from '../../helpers/event'

const Hubspot = () => {
  const [checked, setChecked] = React.useState<boolean>(false)

  const onInputChange = () => {
    setChecked(!checked)
  }

  React.useEffect(() => {
    Event.send({
      type: 'REACT_COOKIENOTICE_EVENT',
      service: 'HUBSPOT',
      enabled: checked
    })
  }, [checked])

  return (
    <React.Fragment>
      <label className={styles['react-cookienotice-switch']}>
        <input type='checkbox' onChange={onInputChange} checked={checked} />
        <span className={styles['react-cookienotice-slider']} />
      </label>
      <span className={styles['react-cookienotice-service-name']}>Hubspot</span>
    </React.Fragment>
  )
}

export default Hubspot
