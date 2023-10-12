import { motion } from 'framer-motion'
import ButtonCV from '@/components/ButtonCV'
import ButtonWorkWithMe from '@/components/ButtonWorkWithMe'

function ButtonsOptions () {
  const variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
  }

  return (
    <motion.div className='buttons mt-3 flex items-center gap-4'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
      >
        <ButtonWorkWithMe />
      </motion.div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
      >
        <ButtonCV />
      </motion.div>
    </motion.div>
  )
}
export default ButtonsOptions
