import React, { createContext } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { NavBar } from './components/NavBar'
import { DeviceStore, UserStore } from './store'

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }}>
      <NavBar />
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
