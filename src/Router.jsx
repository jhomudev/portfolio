import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ListProjects from './pages/ProjectsPage/components/ListProjects'
import ProjectView from './pages/ProjectsPage/sections/ProjectView'
import App from './App'
import HirePage from './pages/Hirepage/HirePage'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/hire',
        element: <HirePage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
        children: [
          {
            path: '',
            element: <ListProjects />
          },
          {
            path: ':project',
            element: <ProjectView />
          }
        ]
      }
    ]
  }
]

export const router = createBrowserRouter(routes, {
  basename: '/portfolio'
})
