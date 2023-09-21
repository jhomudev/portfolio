import { Button, Card, CardBody, CardFooter, CardHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import useHireContext from '../hooks/useHireContext'
import { toast } from 'sonner'
import sendMail from '../../../utils/sendMail'

const CardJob = ({ jobTitle, types, modes, onPress }) => {
  const {
    setJobPositionSelected,
    jobPositionSelected,
    setModeSelected,
    setTypeSelected,
    contact,
    typeSelected,
    modeSelected,
    setErrorEmptyContact
  } = useHireContext()

  const handleSelectTypeHire = (type) => setTypeSelected(type)
  const handleSelectModeHire = (mode) => setModeSelected(mode)
  const handleSendMessageHire = () => {
    setJobPositionSelected(jobTitle)
    if (!typeSelected || !modeSelected) {
      toast.error('Seleccione el tipo y modo de trabajo')
      return
    }
    if (!contact) {
      setErrorEmptyContact('Asegurate de dejarme tu contacto')
      toast.error('Asegurate de dejarme tu contacto')
      return
    }

    setErrorEmptyContact(null)

    const clientMail = contact
    const clientName = 'Client choose Hire. No email, No name.'
    const message = `Trabajo de ${jobPositionSelected}. Tipo ${typeSelected}. Modo ${modeSelected}`

    toast.promise(sendMail({ clientMail, clientName, message }), {
      loading: 'Enviando...',
      success: (_) => {
        return 'Mensaje enviado'
      },
      error: 'Ocurrio un error'
    })
  }

  return (
    <Card onPress={onPress} className='p-5 text-left'>
      <CardHeader className='block text-3xl text-center font-dosis uppercase'>
        <strong>{jobTitle}</strong>
      </CardHeader>
      <CardBody className='flex flex-row gap-2'>
        <Table aria-label='table type' onSelectionChange={(key) => { handleSelectTypeHire(key.currentKey) }} className='flex-1' selectionMode='single'>
          <TableHeader>
            <TableColumn>TIPO</TableColumn>
          </TableHeader>
          <TableBody items={types}>
            {(item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Table aria-label='table mode' onSelectionChange={(key) => { handleSelectModeHire(key.currentKey) }} className='flex-1' selectionMode='single'>
          <TableHeader>
            <TableColumn>MODO</TableColumn>
          </TableHeader>
          <TableBody items={modes}>
            {(item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
      <CardFooter className='bg-mylight/10 justify-between'>
        <div>
          <p className='text-tiny'>Click para enviar mensaje.</p>
          <p className='text-tiny'>Te espero.</p>
        </div>
        <Button onPress={handleSendMessageHire} className='text-tiny' color='success' radius='full' size='sm'>
          Contratar
        </Button>
      </CardFooter>
    </Card>
  )
}
export default CardJob
