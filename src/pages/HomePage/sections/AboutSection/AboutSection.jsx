import Techs from './Techs'
import { myProfilePhoto } from '../../../../utils/media'
import ButtonWorkWithMe from '../../../../components/ButtonWorkWithMe'

function AboutSection ({ refSection }) {
  return (
    <section ref={refSection} className='container-block pt-[10vw] py-[10vh] flex flex-col md:flex-row gap-10 items-start justify-center'>
      <div className='block-1 w-full max-w-[400px] mx-auto'>
        <img className='w-full h-full object-fill' src={myProfilePhoto} alt='perfil Pohto Jhonan Muñoz' />
      </div>
      <div className='block-2 flex flex-col gap-2 max-w-[600px]'>
        <h1 className='section-title'>Sobre mí</h1>
        <strong className='section-subtitle'>Ingeniero de Software, Desarrollador Frontend en busca de oportunidades laborales.</strong>
        <p className='text-medium mt-3'>
          Apasionado desarrollador con una profunda fascinación por la tecnología y la creatividad.
          Mi viaje en el mundo digital se ha centrado en el aprendizaje y la experimentación.
          Mi enfoque radica en ofrecer soluciones que no solo cumplan con los objetivos,
          sino que también cautiven a los usuarios y hagan una diferencia significativa.
          Espero trabajar contigo para llevar tus proyectos al siguiente nivel.
        </p>
        <Techs />
        <ButtonWorkWithMe className='mt-5 w-min' />
      </div>
    </section>
  )
}
export default AboutSection
