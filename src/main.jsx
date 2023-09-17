import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import SectionContextProvider from './context/SectionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <SectionContextProvider>
      <App />
    </SectionContextProvider>
  </NextUIProvider>
)
