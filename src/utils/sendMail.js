// This service sendmail is Email Js
import emailjs from '@emailjs/browser'
const PUBLIC_KEY_EMAIL_JS = 'zb_KY6LIgeaicX5cr'
const sendMail = ({ clientName, message, clientMail }) => new Promise((resolve, reject) => {
  const params = { clientName, message, clientMail }
  emailjs.send('service_ivpldvl', 'template_c2smy24', params, PUBLIC_KEY_EMAIL_JS)
    .then(res => {
      console.log(res.text)
      resolve('Correo enviado')
    })
    .catch(error => {
      console.log(error)
      reject(new Error('Ocurrio un error al enviar el correo'))
    })
})

export default sendMail
