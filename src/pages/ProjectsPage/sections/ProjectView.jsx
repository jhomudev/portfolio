import { Button, Divider, Image, Link } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import TechsChips from '../components/TechsChips'
import { sortProjects } from '@/utils/constants'

const ProjectView = () => {
  const { project } = useParams()
  const projectData = sortProjects.find(proj => proj.id === project)
  const { image, date, name, techs, category, linkGithub, linkPage } = projectData

  const variantsButtons = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    },
    hidden: { scale: 0, opacity: 0 }
  }

  return (
    <section className='w-auto'>
      <Link href='#/projects' className='flex items-center gap-2' color='foreground'><FontAwesomeIcon icon={faChevronLeft} />Volver a proyectos</Link>
      <br />
      <main className='flex flex-col gap-3'>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h1 className='text-myaquamarine text-3xl font-semibold font-dosis uppercase'>{name}</h1>
          <span className='text-small text-mygold'>{category}</span>&nbsp;&nbsp;
          <span className='text-tiny text-mylight/50'>{new Date(date).toLocaleDateString()}</span>
        </motion.div>
        <Divider />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, easy: 'easyIn' }}
        >
          <Image src={image} className='w-[min(100%,700px)]' isBlurred />
        </motion.div>
        <Divider />
        <div className='flex gap-3 items-center my-2'>
          <motion.div variants={variantsButtons} initial='hidden' whileInView='visible' viewport={{ once: true }}>
            <Button isDisabled={!linkGithub} as={Link} href={linkGithub} target='_blank' variant='shadow' color='default' startContent={<FontAwesomeIcon icon={faGithub} />}> Github</Button>
          </motion.div>
          <motion.div variants={variantsButtons} initial='hidden' whileInView='visible' viewport={{ once: true }}>
            <Button isDisabled={!linkPage} as={Link} href={linkPage} target='_blank' variant='shadow' color='success' startContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}> Demo</Button>
          </motion.div>
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
