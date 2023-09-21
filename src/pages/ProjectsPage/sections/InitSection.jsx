import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { lottieAnimationProject } from '../../../utils/media'

const InitSection = () => {
  return (
    <section className='flex flex-col sm:flex-row gap-5 items-center'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, easy: 'easyOut' }}
        className='flex flex-col gap-3'
      >
        <h1 className='section-title'>Mis proyectos</h1>
        <p className='text-medium'>Aquí comparto contigo mis proyectos más recientes que reflejan mi pasión por la innovación tecnológica. Estos proyectos representan mi dedicación en la creación de soluciones eficientes y atractivas para problemas del mundo real, utilizando mi experiencia en desarrollo web y habilidades de programación.</p>
      </motion.div>
      <motion.figure
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='w-52 sm:w-full min-w-[300px]'
      >
        <Lottie className='w-full' animationData={lottieAnimationProject} loop />
      </motion.figure>
    </section>
  )
}
export default InitSection
