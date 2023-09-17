import { useEffect } from 'react'
import Header from './components/Header'
import scrollToSection from './utils/scrollToSection'
import useSectionContext from './hooks/useSectionContext'
import useSections from './hooks/useSections'
import NavbarBottom from './components/NavbarBottom'
import { Toaster } from 'sonner'
import Footer from './components/Footer'

function App () {
  const { section, homeRef, aboutRef, proyectsRef, contactRef, servicesRef } = useSectionContext()
  const { AboutSection, ContactSection, HomeSection, ProyectsSection, ServicesSection } = useSections()

  useEffect(() => {
    scrollToSection(section)
  }, [section])

  return (
    <>
      <div className='dark container-all min-h-screen font-nunito bg-gradient-to-r from-mydark to-mydarkblue'>
        <Header />
        <HomeSection refSection={homeRef} />
        <AboutSection refSection={aboutRef} />
        <ServicesSection refSection={servicesRef} />
        <ProyectsSection refSection={proyectsRef} />
        <ContactSection refSection={contactRef} />
        <Footer />
        <NavbarBottom />
        <Toaster richColors />
      </div>
    </>
  )
}

export default App
