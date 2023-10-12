import { motion } from 'framer-motion'
import CardProject from './CardProject'
import { projects } from '@/utils/constants'

const ListProjects = () => {
  const variants = {
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: i * 0.2
      }
    }),
    hidden: { scale: 0, opacity: 0 }
  }

  return (
    <motion.main className='projetcs box grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]'>
      {
        projects.map((project, i) => (
          <motion.article
            key={project.id}
            custom={i}
            variants={variants}
            initial='hidden'
            animate='visible'
          >
            <CardProject
              key={project.id}
              id={project.id}
              image={project.image}
              name={project.name}
              category={project.category}
              linkGithub={project.linkGithub}
              linkPage={project.linkPage}
              techs={project.techs}
            />
          </motion.article>
        ))
      }
    </motion.main>
  )
}

export default ListProjects
