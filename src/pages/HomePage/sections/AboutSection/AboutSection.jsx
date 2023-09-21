import Techs from './Techs'
import { myProfilePhoto } from '../../../../utils/media'
import ButtonWorkWithMe from '../../../../components/ButtonWorkWithMe'
import { motion } from 'framer-motion'

function AboutSection ({ refSection }) {
  return (
    <section ref={refSection} className='container-block pt-[10vw] py-[10vh] flex flex-col md:flex-row gap-10 items-start justify-center overflow-x-hidden'>
      <motion.div
        className='block-1 w-full max-w-[400px] mx-auto'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <img className='w-full h-full object-fill' src={myProfilePhoto} alt='perfil Pohto Jhonan Muñoz' />
      </motion.div>
      <div className='block-2 flex flex-col gap-2 max-w-[600px]'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, duration: 3 }}
        >
          <h1 className='section-title'>Sobre mí</h1>
          <strong className='section-subtitle'>Ingeniero de Software, Desarrollador Frontend en busca de oportunidades laborales.</strong>
        </motion.div>
        <motion.p
          className='text-medium mt-3'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, easy: 'easyOut' }}
        >
          Apasionado desarrollador con una profunda fascinación por la tecnología y la creatividad.
          Mi viaje en el mundo digital se ha centrado en el aprendizaje y la experimentación.
          Mi enfoque radica en ofrecer soluciones que no solo cumplan con los objetivos,
          sino que también cautiven a los usuarios y hagan una diferencia significativa.
          Espero trabajar contigo para llevar tus proyectos al siguiente nivel.
        </motion.p>
        <Techs />
        <ButtonWorkWithMe className='mt-5 w-min' />
      </div>
    </section>
  )
}
export default AboutSection
