import { Button, Link } from '@nextui-org/react'
import ProyectCards from './ProyectCards'
import { motion } from 'framer-motion'

function ProyectsSection ({ refSection }) {
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1, easy: 'easyOut'
      }
    },
    hidden: { y: -50, opacity: 0 }
  }
  return (
    <section ref={refSection} className='container-block py-[10vh] overflow-x-hidden'>
      <motion.div className='grid gap-10 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))]'>
        <div className='flex flex-col gap-3'>
          <motion.div variants={variants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
            <h1 className='section-title'>Proyectos recientes</h1>
            <p>Te invito a explorar algunos de los proyectos que he realizado.
              Cada uno de ellos es un testimonio de mi pasión por el diseño y la programación web y reflejan mi habilidad para transformar ideas en soluciones tecnológicas efectivas y atractivas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: [200, 0, 100, 0] }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Button as={Link} href='#/projects' variant='shadow' color='success' className='w-min mt-2'>Ver todos los proyectos</Button>
          </motion.div>
        </div>
        <ProyectCards />
      </motion.div>
    </section>
  )
}
export default ProyectsSection
