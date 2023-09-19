import { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'

const useSectionContext = () => {
  const { mainRef, aboutRef, servicesRef, proyectsRef, contactRef, section, setSection } = useContext(SectionContext)

  return { mainRef, aboutRef, servicesRef, proyectsRef, contactRef, section, setSection }
}
export default useSectionContext
