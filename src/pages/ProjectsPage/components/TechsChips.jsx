import { Chip } from '@nextui-org/react'

const TechsChips = ({ title = '', techs = [], color }) => {
  const hasTechs = techs.length > 0
  return (
    <>
      <h3 className='section-subtitle'>{title}</h3>
      <div className='flex flex-wrap gap-3 items-center mb-3'>
        {
          hasTechs
            ? techs.map(tech => (<Chip key={tech} variant='dot' color={color}>{tech}</Chip>))
            : <Chip variant='bordered' radius='sm' color='default'>...</Chip>
        }
      </div>
    </>
  )
}
export default TechsChips
