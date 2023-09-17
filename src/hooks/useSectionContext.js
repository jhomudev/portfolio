import { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'

const useSectionContext = () => {
  const { homeRef, aboutRef, servicesRef, proyectsRef, contactRef, section, setSection } = useContext(SectionContext)

  return { homeRef, aboutRef, servicesRef, proyectsRef, contactRef, section, setSection }
}
export default useSectionContext
