import { useParams, Link } from 'react-router-dom'
import { sortProjects } from '../../../utils/contants'
import { Button, Divider, Image, Link as LinkNUI } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import TechsChips from '../components/TechsChips'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectView = () => {
  const { project } = useParams()
  const projectData = sortProjects.find(proj => proj.id === project)
  const { image, date, name, techs, category, linkGithub, linkPage } = projectData

  return (
    <section className='w-auto'>
      <LinkNUI as={Link} to='/projects' className='flex items-center gap-2' color='foreground'><FontAwesomeIcon icon={faChevronLeft} />Volver a proyectos</LinkNUI>
      <br />
      <main className='flex flex-col gap-3'>
        <div>
          <h1 className='text-myaquamarine text-3xl font-semibold font-dosis uppercase'>{name}</h1>
          <span className='text-small text-mygold'>{category}</span>&nbsp;&nbsp;
          <span className='text-tiny text-mylight/50'>{new Date(date).toLocaleDateString()}</span>
        </div>
        <Divider />
        <Image src={image} className='w-[min(100%,700px)]' isBlurred />
        <Divider />
        <div className='flex gap-3 items-center my-2'>
          <Button isDisabled={!linkGithub} as={LinkNUI} href={linkGithub} target='_blank' variant='shadow' color='default' startContent={<FontAwesomeIcon icon={faGithub} />}> Github</Button>
          <Button isDisabled={!linkPage} as={LinkNUI} href={linkPage} target='_blank' variant='shadow' color='success' startContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}> Demo</Button>
        </div>
        <Divider />
        <TechsChips color='warning' title='Lenguajes' techs={techs.languages} />
        <TechsChips color='success' title='Frameworks' techs={techs.frameworks} />
        <TechsChips color='primary' title='Librerías' techs={techs.libraries} />
        <TechsChips color='danger' title='Otros' techs={techs.others} />
      </main>
    </section>
  )
}
export default ProjectView
