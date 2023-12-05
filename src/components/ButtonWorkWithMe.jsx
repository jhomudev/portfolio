import { Button, Link } from '@nextui-org/react'

const ButtonWorkWithMe = ({ className = '', onPress }) => {
  return (
    <Button onPress={onPress} as={Link} href='#/hire' className={className} variant='shadow' color='danger'>Contrátame</Button>
  )
}
export default ButtonWorkWithMe
