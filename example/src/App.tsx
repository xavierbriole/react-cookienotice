import React from 'react'

import { CookieNotice, GoogleAnalytics, Hubspot } from 'react-cookienotice'
import 'react-cookienotice/dist/index.css'

const App = () => {
  return (
    <React.Fragment>
      <CookieNotice
        // titleLabel='title'
        // descriptionText='description'
        // linkLabel='link'
        // linkHref='https://www.apple.com'
        // declineAllButtonLabel='declineAll'
        // customButtonLabel='custom'
        // acceptAllButtonLabel='acceptAll'
        // customizeLabel='customize'
        // confirmButtonLabel='confirm'
        onServicesConfirm={(enabledServices) => {
          console.log('onServicesConfirm', enabledServices)
        }}
      >
        <GoogleAnalytics />
        <Hubspot />
      </CookieNotice>
    </React.Fragment>
  )
}

export default App
