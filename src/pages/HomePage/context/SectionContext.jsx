import { useState, useRef, createContext } from 'react'

export const SectionContext = createContext()

const SectionContextProvider = ({ children }) => {
  const mainRef = useRef()
  const aboutRef = useRef()
  const servicesRef = useRef()
  const proyectsRef = useRef()
  const contactRef = useRef()

  const [section, setSection] = useState(mainRef)

  return (
    <SectionContext.Provider value={{
      mainRef,
      aboutRef,
      servicesRef,
      proyectsRef,
      contactRef,
      section,
      setSection
    }}
    >
      {children}
    </SectionContext.Provider>
  )
}
export default SectionContextProvider
