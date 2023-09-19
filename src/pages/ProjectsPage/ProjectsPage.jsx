import { Outlet } from 'react-router-dom'
import InitSection from './sections/InitSection'

const ProjectsPage = () => {
  return (
    <div className='container-block min-h-screen pt-10'>
      <InitSection />
      <br />
      <Outlet />
      <br />
    </div>
  )
}
export default ProjectsPage
