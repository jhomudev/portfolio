import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const ButtonWorkWithMe = ({ className = '', onPress }) => {
  return (
    <Button onPress={onPress} as={Link} to='/hire' className={className} variant='shadow' color='danger'>Contrátame</Button>
  )
}
export default ButtonWorkWithMe
