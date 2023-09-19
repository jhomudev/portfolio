import { Accordion, AccordionItem } from '@nextui-org/react'

const myServices = [
  {
    key: crypto.randomUUID(),
    title: 'Ingeniería de Software',
    description: 'Puedo crear soluciones de software a medida para impulsar tu negocio. Mi experiencia en ingeniería de software se dedica a convertir tus ideas en aplicaciones funcionales y eficientes, garantizando resultados excepcionales y un retorno de inversión sólido.'
  },
  {
    key: crypto.randomUUID(),
    title: 'UI/UX Design',
    description: 'Me dedico a mejorar la experiencia de usuario y el diseño de interfaces para tus productos y aplicaciones. Mi enfoque en el diseño UX/UI se centra en la creación de soluciones visuales atractivas y funcionales que maximizan la satisfacción del usuario y la eficiencia. Permíteme transformar tus ideas en experiencias digitales excepcionales.'
  },
  {
    key: crypto.randomUUID(),
    title: 'Desarrollo Frontend',
    description: 'Me especializo en el desarrollo frontend para dar vida a tus proyectos web con un diseño atractivo y una experiencia de usuario excepcional. Utilizo las últimas tecnologías y mejores prácticas para crear interfaces de usuario responsivas y dinámicas que cautivan a tus usuarios y reflejan la calidad de tu marca.'
  },
  {
    key: crypto.randomUUID(),
    title: 'Desarrollo Backend',
    description: 'Me enfoco en el desarrollo backend, donde la magia realmente sucede en una aplicación. Como alguien apasionado por aprender y crecer en el mundo del desarrollo de software, me comprometo a construir la sólida infraestructura que tus aplicaciones necesitan para funcionar de manera confiable y eficiente.'
  }
]

function ListServices () {
  return (
    <Accordion defaultExpandedKeys={myServices.map(service => service.key)} selectionMode='multiple' className='w-full'>
      {
        myServices.map(service => (
          <AccordionItem
            aria-expanded
            key={service.key}
            aria-label={service.title}
            title={<span className='uppercase font-dosis font-semibold text-myaquamarine'>{service.title}</span>}
          >
            {service.description}
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}
export default ListServices
