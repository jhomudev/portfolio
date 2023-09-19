import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardHeader, CardBody, Image, CardFooter, Button, Link as LinkNUI } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const CardProject = ({ id, image, name, techs, category, linkGithub, linkPage }) => {
  return (
    <Card className='py-4 pb-0'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny text-mygold uppercase font-bold'>{category}</p>
        <small className='text-default-500'>{techs.descrip}</small>
        <h4 className='text-myaquamarine font-bold text-large'>{name}</h4>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          isZoomed
          alt='Card background'
          className='w-full object-cover rounded-xl'
          src={image}
        />
      </CardBody>
      <CardFooter className='flex items-center gap-2'>
        <Button as={Link} to={id} variant='ghost' color='danger' className='mr-auto'>Detalles</Button>
        <Button as={LinkNUI} href={linkGithub} isDisabled={!linkGithub} target='_blank' variant='faded' color='default' size='sm' isIconOnly><FontAwesomeIcon icon={faGithub} /></Button>
        <Button as={LinkNUI} href={linkPage} isDisabled={!linkPage} target='_blank' variant='faded' color='default' size='sm' isIconOnly><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button>
      </CardFooter>
    </Card>
  )
}
export default CardProject
