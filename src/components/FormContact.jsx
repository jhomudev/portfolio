import { Button, Input, Textarea } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import sendMail from '@/utils/sendMail'

const FormContact = () => {
  const {
    register, handleSubmit, formState: {
      errors
    }
  } = useForm()
  const handleSubmitForm = handleSubmit((data) => {
    const { formName, formMail, formMessage } = data
    // const formData = new FormData(form)
    const clientName = formName
    const message = formMail
    const clientMail = formMessage
    toast.promise(sendMail({ clientMail, clientName, message }), {
      loading: 'Enviando...',
      success: (_) => {
        return 'Correo enviado'
      },
      error: 'Ocurrio un error'
    })
  })

  return (
    <motion.form
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, easy: 'easyIn' }}
      onSubmit={handleSubmitForm}
      className='w-full sm:w-[500px] p-6 flex flex-col  gap-5 text-left border-mygold border-[1px] rounded-lg '
    >
      <Input
        isClearable
        isInvalid={errors.formName}
        errorMessage={errors.formName && 'El nombre es requerido'}
        color={errors.formName ? 'danger' : 'warning'}
        variant='underlined'
        label='Nombres'
        placeholder='Escribe tu nombre'
        {...register('formName', { required: true })}
      />
      <Input
        isClearable
        isInvalid={errors.formMail}
        errorMessage={errors.formMail && 'El correo es requerido'}
        inputMode='email'
        type='email'
        color={errors.formMail ? 'danger' : 'warning'}
        variant='underlined'
        label='Email'
        placeholder='Escribe tu email'
        {...register('formMail', { required: true })}
      />
      <Textarea
        isInvalid={errors.formMessage}
        errorMessage={errors.formMessage && 'El mensaje es requerido'}
        name='formMessage'
        color={errors.formMessage ? 'danger' : 'warning'}
        variant='underlined'
        label='Mensaje'
        placeholder='Dejame tu mensaje'
        {...register('formMessage', { required: true })}

      />
      <Button type='submit' className='w-min' variant='shadow' color='warning'>Enviar mensaje</Button>
    </motion.form>
  )
}
export default FormContact
