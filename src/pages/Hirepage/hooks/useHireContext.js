import { useContext } from 'react'
import { HireContext } from '../context/HireContext'

const useHireContext = () => {
  const {
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
  } = useContext(HireContext)

  return {
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
}
export default useHireContext
