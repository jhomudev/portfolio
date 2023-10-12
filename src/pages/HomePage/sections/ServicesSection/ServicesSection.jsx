import { Button } from '@nextui-org/react'
import ListServices from './ListServices'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { servicesImg } from '@/utils/media'

function ServicesSection ({ refSection }) {
  return (
    <section ref={refSection} className='container-block py-[10vh]  min-h-screen flex flex-col md:flex-row gap-10 justify-center overflow-x-hidden'>
      <div className='block-1 max-w-[600px] relative flex flex-col gap-2 flex-1'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, easy: 'easyOut' }}
        >
          <h1 className='section-title'>Mis servicios</h1>
          <strong className='section-subtitle'>Soy un desarrollador web con 3 años de capacitación y experiencia.</strong>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Button as={Link} to='/projects' className='w-min mt-5' variant='ghost' color='secondary'>Ver proyectos</Button>
        </motion.div>
        <motion.div
          className='w-[min(100%,300px)] mx-auto'
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.img
            className='w-full h-full object-fill opacity-80 bg-blend-saturation'
            src={servicesImg}
            alt='coding person'
          />
        </motion.div>
      </div>
      <div className='block-2 max-w-[700px] flex-1'>
        <ListServices />
      </div>
    </section>
  )
}
export default ServicesSection
