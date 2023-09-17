import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardFooter, Image, Link, Tooltip } from '@nextui-org/react'
import { projectCrudImage, projectMoviesImage, projectRadioImage } from '../../utils/media'
import { MY_GITHUB_PAGES_LINK, MY_GITHUB_REPO_LINK } from '../../utils/contants'

const mySomeProyects = [
  {
    name: 'CRUD - React Redux Toolkit',
    category: 'Desarrollo Frontend',
    image: projectCrudImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/crud-react-toolkit/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/crud-react-toolkit`
  },
  {
    name: 'Sitio Web - Emisora radial',
    category: 'Desarrollo Frontend',
    image: projectRadioImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/radio-bendicion/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/radio-bendicion`
  },
  {
    name: 'Movie Finder',
    category: 'Desarrollo Frontend',
    image: projectMoviesImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/movie-api-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/movie-api-react`
  }
]

function ProyectCards () {
  return (
    <>
      {
      mySomeProyects.map(proyect => (
        <Card
          key={proyect.name}
          isFooterBlurred
          radius='lg'
          className='border-none group'
        >
          <Image
            isZoomed
            alt='Woman listing to music'
            className='object-cover w-full h-full brightness-75 group-hover:brightness-90'
            src={proyect.image}
          />
          <CardFooter className='h-12 flex gap-3 items-center justify-end before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 -mt-9 relative before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
            <span className='text-medium text-white/80 mr-auto'>{proyect.name}</span>
            <Tooltip content='Proyecto en Github' size='sm'>
              <Link href={proyect.linkGithub} target='_blank' rel='noreferrer' color='foreground'>
                <FontAwesomeIcon icon={faGithub} size='1x' />
              </Link>
            </Tooltip>
            <Tooltip content='Ver en pestaña' size='sm'>
              <Link href={proyect.linkPage} target='_blank' rel='noreferrer' color='foreground'>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x' />
              </Link>
            </Tooltip>
          </CardFooter>
        </Card>
      ))
    }
    </>

  )
}
export default ProyectCards
