import { NextUIProvider } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import SectionContextProvider from './pages/HomePage/context/SectionContext'
import HireProvider from './pages/Hirepage/context/HireContext'

function Providers ({ children }) {
  const navigate = useNavigate()

  return (
    <NextUIProvider navigate={navigate}>
      <SectionContextProvider>
        <HireProvider>{children}</HireProvider>
      </SectionContextProvider>
    </NextUIProvider>
  )
}
export default Providers
