import { myServices } from '@/utils/constants'
import { Accordion, AccordionItem } from '@nextui-org/react'

function ListServices () {
  return (
    <Accordion defaultExpandedKeys={myServices.map(service => service.key)} selectionMode='multiple' className='w-full'>
      {
        myServices.map((service) => (
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
