import { useState, createContext } from 'react'

export const HireContext = createContext()

const HireProvider = ({ children }) => {
  const [typeSelected, setTypeSelected] = useState('')
  const [modeSelected, setModeSelected] = useState('')
  const [jobPositionSelected, setJobPositionSelected] = useState('')
  const [contact, setContact] = useState('')
  const [errorEmptyContact, setErrorEmptyContact] = useState(null)

  const context = {
    errorEmptyContact,
    contact,
    typeSelected,
    modeSelected,
    jobPositionSelected,
    setErrorEmptyContact,
    setContact,
    setJobPositionSelected,
    setModeSelected,
    setTypeSelected
  }

  return (
    <HireContext.Provider value={context}>
      {children}
    </HireContext.Provider>
  )
}
export default HireProvider
