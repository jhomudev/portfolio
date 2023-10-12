import { Button, Link, Tooltip } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { networks as allNetworks } from '@/utils/constants'
import { motion } from 'framer-motion'

function MyNetworks ({ all }) {
  const networksInAll = allNetworks.filter(network => network.isMain)
  const networksMap = all ? allNetworks : networksInAll

  const variants = {
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        easy: 'easyIn'
      }
    }),
    hidden: { x: -50, opacity: 0 }
  }

  return (
    <motion.ul className='mt-4 flex gap-2 items-center'>
      {
        networksMap.map((network, id) => {
          return (
            <motion.li
              key={network.name}
              custom={id}
              initial='hidden'
              animate='visible'
              variants={variants}
            >
              <Tooltip content={network.name} color='foreground'>
                <Button
                  as={Link}
                  href={network.link}
                  target='_blank'
                  size='sm'
                  isIconOnly
                  variant='flat'
                  color='default'
                  className='capitalize'

                >
                  <FontAwesomeIcon icon={network.icon} />
                </Button>
              </Tooltip>
            </motion.li>
          )
        })
      }
    </motion.ul>
  )
}
export default MyNetworks
