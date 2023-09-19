import { Button } from '@nextui-org/react'
import ProyectsContent from './ProyectCards'
import { Link } from 'react-router-dom'

function ProyectsSection ({ refSection }) {
  return (
    <section ref={refSection} className='container-block py-[10vh]'>
      <div className='grid gap-10 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))]'>
        <div className='flex flex-col gap-3'>
          <h1 className='section-title'>Proyectos recientes</h1>
          <p>Te invito a explorar algunos de los proyectos que he realizado.
            Cada uno de ellos es un testimonio de mi pasión por el diseño y la programación web y reflejan mi habilidad para transformar ideas en soluciones tecnológicas efectivas y atractivas.
          </p>
          <Button as={Link} to='/projects' variant='shadow' color='success' className='w-min mt-2'>Ver todos los proyectos</Button>
        </div>
        <ProyectsContent />
      </div>
    </section>
  )
}
export default ProyectsSection