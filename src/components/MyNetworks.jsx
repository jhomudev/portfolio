import { Button, Link, Tooltip } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { networks as allNetworks } from '../utils/contants'

function MyNetworks ({ all }) {
  const networksInAll = allNetworks.filter(network => network.isMain)
  const networksMap = all ? allNetworks : networksInAll

  return (
    <div className='mt-4 flex gap-2 items-center'>
      {
        networksMap.map((network, id) => {
          return (
            <Tooltip key={network.name} color='foreground' content={network.name}>
              <Button as={Link} href={network.link} target='_blank' size='sm' isIconOnly variant='flat' color='default' className='capitalize'>
                <FontAwesomeIcon icon={network.icon} />
              </Button>
            </Tooltip>
          )
        })
      }
    </div>
  )
}
export default MyNetworks
