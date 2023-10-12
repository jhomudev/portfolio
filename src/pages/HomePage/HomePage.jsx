import { useEffect } from 'react'
import useSectionContext from './hooks/useSectionContext'
import useSections from './hooks/useSections'
import scrollToSection from '@/utils/scrollToSection'
import NavbarBottom from '@/components/NavbarBottom'

const HomePage = () => {
  const { section, mainRef, aboutRef, proyectsRef, contactRef, servicesRef } = useSectionContext()
  const { AboutSection, ContactSection, MainSection, ProyectsSection, ServicesSection } = useSections()

  useEffect(() => {
    scrollToSection(section)
  }, [section])

  return (
    <>
      <MainSection refSection={mainRef} />
      <AboutSection refSection={aboutRef} />
      <ServicesSection refSection={servicesRef} />
      <ProyectsSection refSection={proyectsRef} />
      <ContactSection refSection={contactRef} />
      <NavbarBottom />
    </>
  )
}
export default HomePage
