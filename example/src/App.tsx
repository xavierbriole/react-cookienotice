import React from 'react'
import logo from './logo.svg'
import './index.css'

import CookieNotice from 'react-cookienotice'
import 'react-cookienotice/dist/index.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button
          className='App-button'
          onClick={() => {
            window.document.cookie = 'hide-notice='
            window.location.reload()
          }}
        >
          Clear & Reload
        </button>
      </header>
      <CookieNotice />
    </div>
  )
}

export default App
