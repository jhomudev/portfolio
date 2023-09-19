import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.jsx'
import SectionContextProvider from './pages/HomePage/context/SectionContext'
import HireProvider from './pages/Hirepage/context/HireContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <SectionContextProvider>
      <HireProvider>
        <RouterProvider router={router} />
      </HireProvider>
    </SectionContextProvider>
  </NextUIProvider>
)
