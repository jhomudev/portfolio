import { Input } from '@nextui-org/react'
import { jobPositions } from '../../../utils/contants'
import CardJob from './CardJob'
import useHireContext from '../hooks/useHireContext'
import { motion } from 'framer-motion'

const ChooseHire = () => {
  const { setContact, contact, errorEmptyContact } = useHireContext()

  const handleChangeContact = (e) => setContact(e.target.value)

  const handleClearContact = () => setContact('')

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
      <h2 className='section-subtitle'>Puestos que más me interesan:</h2>
      <br />
      <Input
        onChange={handleChangeContact}
        onClear={handleClearContact}
        isClearable
        value={contact}
        className='w-[min(100%,300px)]'
        inputMode='email'
        placeholder='Dejame tu correo o numero telefónico'
        label='Contacto'
        color={`${errorEmptyContact ? 'danger' : 'default'}`}
      />
      <br />
      <motion.ul className='w-full flex flex-wrap items-center justify-center gap-5'>
        {
          jobPositions.map((job, id) => (
            <motion.li
              key={job.titleJob}
              variants={variants}
              custom={id}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='flex-[1_0_300px] max-w-[390px]'
            >
              <CardJob
                jobTitle={job.titleJob}
                types={job.types}
                modes={job.modes}
              />
            </motion.li>
          ))
          }
      </motion.ul>
    </>
  )
}
export default ChooseHire
