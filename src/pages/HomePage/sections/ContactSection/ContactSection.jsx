import Lottie from 'lottie-react'
import { lottieAnimationSend } from '../../../../utils/media'
import FormContact from '../../../../components/FormContact'
import { motion } from 'framer-motion'

function ContactSection ({ refSection }) {
  return (
    <section ref={refSection} className='container-block min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-center'>
      <div className='block-1 w-full sm:w-min flex items-center flex-row lg:flex-col'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, easy: 'easyIn' }}
        >
          <h1 className='section-title'>Contáctame</h1>
          <span className='text-4xl font-dosis uppercase tracking-wider'>Y trabajemos <br /> juntos</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Lottie className='w-[100px] sm:w-[200px] lg:w-[400px]' animationData={lottieAnimationSend} loop />
        </motion.div>
      </div>
      <div className='block-2 form w-full sm:w-auto'>
        <FormContact />
      </div>
    </section>
  )
}
export default ContactSection
