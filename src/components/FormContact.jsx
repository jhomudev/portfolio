import { Button, Input, Textarea } from '@nextui-org/react'
import { toast } from 'sonner'
import sendMail from '../utils/sendMail'

const FormContact = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const clientName = formData.get('form_name')
    const message = formData.get('form_message')
    const clientMail = formData.get('form_mail')
    toast.promise(sendMail({ clientMail, clientName, message }), {
      loading: 'Enviando...',
      success: (_) => {
        return 'Correo enviado'
      },
      error: 'Ocurrio un error'
    })
  }

  return (
    <form onSubmit={handleSubmitForm} className='w-full sm:w-[500px] p-6 flex flex-col gap-5 border-mygold border-[1px] rounded-lg '>
      <Input name='form_name' color='warning' isClearable variant='underlined' label='Nombres' placeholder='Escribe tu nombre' />
      <Input name='form_mail' inputMode='email' type='email' color='warning' isClearable variant='underlined' label='Email' placeholder='Escribe tu email' />
      <Textarea name='form_message' color='warning' variant='underlined' label='Mensaje' placeholder='Dejame tu mensaje' />
      <Button type='submit' className='w-min' variant='shadow' color='warning'>Enviar mensaje</Button>
    </form>
  )
}
export default FormContact
