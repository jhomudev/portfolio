import { motion } from 'framer-motion'
import TypedPosition from './TypedPosition'
import ButtonsOptions from './ButtonsOptions'
import { myProfilePhoto } from '../../../../utils/media'
import MyNetworks from '../../../../components/MyNetworks'

function MainSection ({ refSection }) {
  return (
    <section ref={refSection} className='relative container-block min-h-[calc(100vh_-_4rem)] flex flex-col-reverse md:flex-row gap-10 items-center justify-center overflow-x-hidden'>
      <main className='block-1 flex flex-col gap-1 max-w-[600px]'>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, type: 'tween' }}
        >
          <strong className='text-5xl font-dosis font-bold'>JHONAN MUÑOZ</strong>
          <h2 className='text-xl font-semibold uppercase font-dosis'>Soy <TypedPosition /></h2>
        </motion.div>

        <motion.p
          initial={{ x: -90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className='text-medium mt-2'
        >
          Ingeniero de Software y Desarrollador Web apasionado.
          Explora mi portafolio para descubrir mi enfoque en la creación de experiencias digitales impactantes.
        </motion.p>
        <ButtonsOptions />
        <MyNetworks />
      </main>
      <motion.div
        className='block-2 grid place-items-center w-full max-w-[400px] overflow-hidden rounded-full'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, type: 'tween' }}
      >
        <motion.img
          src={myProfilePhoto}
          alt='photo perfil jhonan muñoz'
          className='relative z-10 w-full h-full object-fill'
        />
      </motion.div>
    </section>
  )
}
export default MainSection
