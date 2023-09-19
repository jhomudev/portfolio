import { projects } from '../../../utils/contants'
import CardProject from './CardProject'

const ListProjects = () => {
  return (
    <main className='projetcs box grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]'>
      {
        projects.map(project => (
          <CardProject
            key={project.id}
            id={project.id}
            image={project.image}
            name={project.name}
            category={project.category}
            linkGithub={project.linkGithub}
            linkPage={project.linkPage}
            techs={project.techs}
          />
        ))
      }
    </main>
  )
}

export default ListProjects
