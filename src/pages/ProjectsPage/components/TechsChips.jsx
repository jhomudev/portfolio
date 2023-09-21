import { motion } from 'framer-motion'
import { Chip } from '@nextui-org/react'

const TechsChips = ({ title = '', techs = [], color }) => {
  const hasTechs = techs.length > 0
  const variants = {
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: i * 0.2
      }
    }),
    hidden: { scale: 0, opacity: 0 }
  }

  return (
    <>
      <h3 className='section-subtitle'>{title}</h3>
      <motion.ul className='flex flex-wrap gap-3 items-center mb-3'>
        {
          hasTechs
            ? techs.map((tech, id) => (
              <motion.li
                key={tech}
                custom={id}
                variants={variants}
                initial='hidden'
                whileInView='visible'
              >
                <Chip variant='dot' color={color}>{tech}</Chip>
              </motion.li>
            ))
            : (
              <Chip
                custom={1} variants={variants} initial='hidden' whileInView='visible'
                variant='bordered' radius='sm' color='default'
              >
                ...
              </Chip>
              )
        }
      </motion.ul>
    </>
  )
}
export default TechsChips
