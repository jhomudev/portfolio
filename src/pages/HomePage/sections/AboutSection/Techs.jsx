import { Tooltip } from '@nextui-org/react'
import { techCss, techHtml, techJs, techMysql, techPhp, techReact, techTypescript } from '../../../../utils/media'

const techs = [
  {
    name: 'HTML',
    img: techHtml,
    level: 'Avanzado'
  },
  {
    name: 'CSS',
    img: techCss,
    level: 'Intermedio'
  },
  {
    name: 'JavaScript',
    img: techJs,
    level: 'Intermedio'
  },
  {
    name: 'Typescript',
    img: techTypescript,
    level: 'Intermedio'
  },
  {
    name: 'React JS',
    img: techReact,
    level: 'Intermedio'
  },
  {
    name: 'PHP',
    img: techPhp,
    level: 'Intermedio'
  },
  {
    name: 'MySql',
    img: techMysql,
    level: 'Intermedio'
  }
]
function Techs () {
  return (
    <>
      <h4 className='text-myaquamarine text-lg'>Tecnologías que domino</h4>
      <div className='techs flex items-center gap-5 mt-3'>
        {
          techs.map(tec => (
            <Tooltip key={tec.name} color='foreground' content={`${tec.name} - ${tec.level}`}>
              <img className='w-5 h-5 opacity-70' src={tec.img} alt={tec.img} />
            </Tooltip>
          ))
        }
      </div>
    </>
  )
}
export default Techs
