import { Button } from '@nextui-org/react'
import ListServices from './ListServices'
import { servicesImg } from '../../../../utils/media'
import { Link } from 'react-router-dom'

function ServicesSection ({ refSection }) {
  return (
    <section ref={refSection} className='container-block py-[10vh]  min-h-screen flex flex-col md:flex-row gap-10 justify-center'>
      <div className='block-1 max-w-[600px] relative flex flex-col gap-2 flex-1'>
        <h1 className='section-title'>Mis servicios</h1>
        <strong className='section-subtitle'>Soy un desarrollador web con 3 años de capacitación y experiencia.</strong>
        <Button as={Link} to='/projects' className='w-min mt-5' variant='ghost' color='secondary'>Ver proyectos</Button>
        <div className='w-[min(100%,300px)] mx-auto'>
          <img className='w-full h-full object-fill opacity-80 bg-blend-saturation' src={servicesImg} alt='coding person' />
        </div>
      </div>
      <div className='block-2 max-w-[700px] flex-1'>
        <ListServices />
      </div>
    </section>
  )
}
export default ServicesSection
