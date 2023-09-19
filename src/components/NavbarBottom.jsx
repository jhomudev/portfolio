import { faServicestack } from '@fortawesome/free-brands-svg-icons'
import { faDiagramProject, faHome, faUserAstronaut, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tab, Tabs } from '@nextui-org/react'
import useSectionContext from '../pages/HomePage/hooks/useSectionContext'

const NavbarBottom = () => {
  const { mainRef, aboutRef, servicesRef, proyectsRef, contactRef, setSection } = useSectionContext()

  const sections = [
    {
      name: 'Home',
      icon: faHome,
      elementRef: mainRef
    },
    {
      name: 'About me',
      icon: faUserAstronaut,
      elementRef: aboutRef
    },
    {
      name: 'Services',
      icon: faServicestack,
      elementRef: servicesRef
    },
    {
      name: 'Proyects',
      icon: faDiagramProject,
      elementRef: proyectsRef
    },
    {
      name: 'Contacts',
      icon: faComment,
      elementRef: contactRef
    }

  ]

  const handleChangeSection = nameSection => {
    const sectionObj = sections.find(section => section.name === nameSection)
    setSection(sectionObj.elementRef)
  }

  return (
    <div className='fixed z-20 w-full bottom-0 sm:bottom-10 grid place-items-center'>
      <div className='w-full sm:w-auto mx-auto'>
        <Tabs
          onSelectionChange={(key) => { handleChangeSection(key) }}
          items={sections}
          size='lg'
          variant='solid'
          color='danger'
          aria-label='Section Page'
          radius='full'
          fullWidth
        >
          {
            (item) => (
              <Tab
                key={item.name}
                title={<FontAwesomeIcon icon={item.icon} />}
                titleValue={item.name}
              />
            )
          }
        </Tabs>
      </div>
    </div>
  )
}
export default NavbarBottom
