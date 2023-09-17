import { Button, Link, Tooltip } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { MY_EMAIL_LINK, MY_GITHUB_PROFILE_LINK, MY_LINKEDIN_PROFILE_LINK } from '../../utils/contants'

const networks = [
  {
    name: 'Github',
    link: MY_GITHUB_PROFILE_LINK,
    icon: faGithub
  },
  {
    name: 'Linkedin',
    link: MY_LINKEDIN_PROFILE_LINK,
    icon: faLinkedin
  },
  {
    name: 'Email',
    link: `mailto:${MY_EMAIL_LINK}`,
    icon: faEnvelope
  }
]

function MyNetworks () {
  return (
    <div className='mt-4 flex gap-2 items-center'>
      {
        networks.map(network => (
          <Tooltip key={network.name} color='foreground' content={network.name}>
            <Button as={Link} href={network.link} target='_blank' isIconOnly variant='flat' color='default' className='capitalize'>
              <FontAwesomeIcon icon={network.icon} />
            </Button>
          </Tooltip>
        ))
      }
    </div>
  )
}
export default MyNetworks
