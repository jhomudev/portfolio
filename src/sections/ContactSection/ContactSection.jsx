import { Button, Input, Textarea } from '@nextui-org/react'
import Lottie from 'lottie-react'
import { lottieAnimationSend } from '../../utils/media'
import sendMail from '../../utils/sendMail'
import { toast } from 'sonner'

function ContactSection ({ refSection }) {
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
    <section ref={refSection} className='container-block min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-center'>
      <div className='block-1 w-full sm:w-min flex items-center flex-row lg:flex-col'>
        <div>
          <h3 className='section-title'>Contáctame</h3>
          <span className='text-4xl font-dosis uppercase tracking-wider'>Y trabajemos <br /> juntos</span>
        </div>
        <Lottie className='w-[100px] sm:w-[200px] lg:w-[400px]' animationData={lottieAnimationSend} loop />
      </div>
      <div className='block-2 form w-full sm:w-auto'>
        <form onSubmit={handleSubmitForm} className='w-full sm:w-[500px] p-6 flex flex-col gap-5 border-mygold border-[1px] rounded-lg '>
          <Input name='form_name' color='warning' isClearable variant='underlined' label='Nombres' placeholder='Escribe tu nombre' />
          <Input name='form_mail' inputMode='email' type='email' color='warning' isClearable variant='underlined' label='Email' placeholder='Escribe tu email' />
          <Textarea name='form_message' color='warning' variant='underlined' label='Mensaje' placeholder='Dejame tu mensaje' />
          <Button type='submit' className='w-min' variant='shadow' color='warning'>Enviar mensaje</Button>
        </form>
      </div>
    </section>
  )
}
export default ContactSection
