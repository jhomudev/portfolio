import Lottie from 'lottie-react'
import { lottieAnimationSend } from '../../../../utils/media'
import FormContact from '../../../../components/FormContact'

function ContactSection ({ refSection }) {
  return (
    <section ref={refSection} className='container-block min-h-screen flex flex-col lg:flex-row gap-10 items-center justify-center'>
      <div className='block-1 w-full sm:w-min flex items-center flex-row lg:flex-col'>
        <div>
          <h1 className='section-title'>Contáctame</h1>
          <span className='text-4xl font-dosis uppercase tracking-wider'>Y trabajemos <br /> juntos</span>
        </div>
        <Lottie className='w-[100px] sm:w-[200px] lg:w-[400px]' animationData={lottieAnimationSend} loop />
      </div>
      <div className='block-2 form w-full sm:w-auto'>
        <FormContact />
      </div>
    </section>
  )
}
export default ContactSection
