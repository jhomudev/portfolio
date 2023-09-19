import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react'
import { MY_ONLINE_CV_URL } from '../utils/contants'
import { myCv } from '../utils/media'

const ButtonCV = ({ className = '' }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className={className} variant='flat' color='warning'>Descargar CV</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='cv options download'>
        <DropdownItem key='online' as={Link} href={MY_ONLINE_CV_URL} target='_blank'>Ver CV Online</DropdownItem>
        <DropdownItem key='pdf' as={Link} href={myCv} target='_blank'>CV PDF</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
export default ButtonCV
