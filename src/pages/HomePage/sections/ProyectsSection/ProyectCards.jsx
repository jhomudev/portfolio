import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardFooter, Image, Link, Tooltip } from '@nextui-org/react'
import { sortProjects } from '@/utils/constants'

function ProyectCards () {
  const proyectsFilter = sortProjects.slice(0, 3)
  const variants = {
    visible: {
      scale: [0.5, 1.1, 1],
      opacity: 1,
      transition: {
        easy: 'easyOut',
        duration: 0.5
      }
    },
    hidden: { scale: 0, opacity: 0 }
  }

  return (
    <>
      {
      proyectsFilter.map((proyect, i) => (
        <motion.article key={proyect.id} custom={i} variants={variants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none group'
          >
            <Image
              isZoomed
              alt='Woman listing to music'
              className='object-cover w-full h-full brightness-75 group-hover:brightness-90'
              src={proyect.image}
            />
            <CardFooter className='h-12 flex gap-3 items-center justify-end before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 -mt-9 relative before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <span className='text-medium text-white/80 mr-auto'>{proyect.name}</span>
              <Tooltip content='Proyecto en Github' size='sm'>
                <Link href={proyect.linkGithub} isDisabled={!proyect.linkGithub} target='_blank' rel='noreferrer' color='foreground'>
                  <FontAwesomeIcon icon={faGithub} size='1x' />
                </Link>
              </Tooltip>
              <Tooltip content='Ver en pestaña' size='sm'>
                <Link href={proyect.linkPage} isDisabled={!proyect.linkPage} target='_blank' rel='noreferrer' color='foreground'>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x' />
                </Link>
              </Tooltip>
            </CardFooter>
          </Card>
        </motion.article>
      ))
    }
    </>

  )
}
export default ProyectCards
