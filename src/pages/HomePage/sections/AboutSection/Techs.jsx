import { Tooltip } from '@nextui-org/react'
import { techs } from '../../../../utils/contants'
import { motion } from 'framer-motion'

function Techs () {
  const variants = {
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        easy: 'easyIn',
        type: 'spring',
        stiffness: 100
      }
    }),
    hidden: { scale: 0, opacity: 0 }
  }

  return (
    <>
      <h4 className='text-myaquamarine text-lg'>Tecnologías que domino</h4>
      <motion.ul className='techs flex items-center gap-5 mt-3'>
        {
          techs.map((tec, id) => (
            <motion.li
              key={tec.name}
              custom={id}
              initial='hidden'
              whileInView='visible'
              variants={variants}
            >
              <Tooltip color='foreground' content={`${tec.name} - ${tec.level}`}>
                <img className='w-5 h-5' src={tec.img} alt={tec.img} />
              </Tooltip>
            </motion.li>
          ))
        }
      </motion.ul>
    </>
  )
}
export default Techs
