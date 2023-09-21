import { projectCalcReactImage, projectCalcVanillaImage, projectCrudImage, projectEcomerceImage, projectMoviesImage, projectPazyBienImage, projectRadioImage, projectRepoImage, projectSysfacImage, projectTicTacToeImage, projectTodoListReactImage, projectTodoListTsImage, techCss, techHtml, techJs, techMysql, techPhp, techReact, techTypescript } from './media'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export const MY_GITHUB_PAGES_LINK = 'https://jhonancaleb.github.io'
export const MY_GITHUB_REPO_LINK = 'https://github.com/jhonancaleb'
export const MY_LINKEDIN_PROFILE_LINK = 'https://www.linkedin.com/in/jhonancalebmc'
export const MY_GITHUB_PROFILE_LINK = 'https://github.com/jhonancaleb'
export const MY_EMAIL_LINK = 'jhonanmc2003@gmail.com'
export const MY_ONLINE_CV_URL = 'https://jhonancaleb.github.io/'
export const MY_PHONE_NUMBER = '+51971541688'
export const MY_WHATSAPP_NUMBER = '+51993884118'
export const MY_EMAIL = 'jhonanmc2003@gmail.com'

// For home and hire page
export const networks = [
  {
    name: 'Github',
    link: MY_GITHUB_PROFILE_LINK,
    icon: faGithub,
    isMain: true
  },
  {
    name: 'Linkedin',
    link: MY_LINKEDIN_PROFILE_LINK,
    icon: faLinkedin,
    isMain: true
  },
  {
    name: 'Email',
    link: `mailto:${MY_EMAIL_LINK}`,
    icon: faEnvelope,
    isMain: true
  },
  {
    name: 'Whatsapp',
    link: `https://api.whatsapp.com/send?phone=${MY_WHATSAPP_NUMBER}&text=Hola.`,
    icon: faWhatsapp,
    isMain: false
  },
  {
    name: 'Teléfono',
    link: `tel:${MY_PHONE_NUMBER}`,
    icon: faPhone,
    isMain: false
  }
]

// For projects page
export const projects = [
  {
    id: 'crud-redux-toolkit',
    name: 'CRUD - React Redux Toolkit',
    category: 'Desarrollo Frontend',
    image: projectCrudImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/crud-react-toolkit/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/crud-react-toolkit`,
    techs: {
      descrip: 'React Js, Tailwind CSS, Next UI.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: ['Redux Toolkit', 'Tremor', 'React Router Dom', 'Sonner JS'],
      others: []
    },
    date: Date('2020-09-14')
  },
  {
    name: 'Sitio Web - Emisora radial',
    id: 'emisora-radial',
    category: 'Desarrollo Frontend',
    image: projectRadioImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/radio-bendicion/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/radio-bendicion`,
    techs: {
      descrip: 'React Js, Tailwind CSS, Next UI.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: ['Next UI'],
      others: []
    },
    date: '2023-09-03'
  },
  {
    id: 'movie-finder',
    name: 'Movie Finder',
    category: 'Desarrollo Frontend',
    image: projectMoviesImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/movie-api-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/movie-api-react`,
    techs: {
      descrip: 'React Js, Tailwind CSS.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: [],
      others: ['Rapid API', 'Vite Js']
    },
    date: '2023-08-13'
  },
  {
    id: 'ecomerce',
    name: 'Ecomerce Page',
    category: 'Desarrollo Frontend',
    image: projectEcomerceImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/movie-api-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/movie-api-react`,
    techs: {
      descrip: 'React Js, Tailwind CSS, Javascript.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: [],
      others: ['Vite Js']
    },
    date: '2023-08-18'
  },
  {
    id: 'calculator-react',
    name: 'Calculator React',
    category: 'Desarrollo Frontend',
    image: projectCalcReactImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/calculadora-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/calculadora-react`,
    techs: {
      descrip: 'React Js, Javascript, CSS.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js'],
      libraries: [],
      others: ['Vite Js']
    },
    date: '2023-07-16'
  },
  {
    id: 'calculator-vanilla',
    name: 'Calculator Vanilla JS',
    category: 'Desarrollo Frontend',
    image: projectCalcVanillaImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/calculadora/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/calculadora`,
    techs: {
      descrip: 'Javascript, HTML, CSS.',
      languages: ['HTML', 'CSS', 'Javascript'],
      frameworks: [],
      libraries: [],
      others: ['Vite Js']
    },
    date: '2023-02-05'
  },
  {
    id: 'to-do-list-react',
    name: 'To do List - React',
    category: 'Desarrollo Frontend',
    image: projectTodoListReactImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/movie-api-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/movie-api-react`,
    techs: {
      descrip: 'React Js, Tailwind CSS, Javascript.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React', 'Tailwind CSS'],
      libraries: [],
      others: ['Vite Js']
    },
    date: '2023-08-13'
  },
  {
    id: 'to-do-list-typescript',
    name: 'To do List - React - Typescript',
    category: 'Desarrollo Frontend',
    image: projectTodoListTsImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/todo-list-react-typescript/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/todo-list-react-typescript`,
    techs: {
      descrip: 'React Js, Typescript, Tailwind CSS.',
      languages: ['HTML / JSX', 'CSS', 'Typescript'],
      frameworks: ['React', 'Tailwind CSS'],
      libraries: [],
      others: ['Vite Js']
    },
    date: '2023-08-26'
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic Tac toe',
    category: 'Desarrollo Frontend',
    image: projectTicTacToeImage,
    linkPage: `${MY_GITHUB_PAGES_LINK}/tic-tac-toe-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/tic-tac-toe-react`,
    techs: {
      descrip: 'React Js, Javascript, CSS.',
      languages: ['HTML', 'Javascript', 'CSS'],
      frameworks: ['React'],
      libraries: [],
      others: ['Vite Js']
    },
    date: '2023-07-15'
  },
  {
    id: 'sysfac',
    name: 'Sistema de ventas e inventario',
    category: 'Desarrollo FullStack',
    image: projectSysfacImage,
    linkPage: null,
    linkGithub: `${MY_GITHUB_REPO_LINK}/sysfac`,
    techs: {
      descrip: 'PHP, MySql, Javascript, CSS, HTML.',
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: ['DomPdf', 'PhpSpreadsheet'],
      others: ['MySql', 'Laragon']
    },
    date: '2023-07-10'
  },
  {
    id: 'repoo',
    name: 'Repositorio Institucional y sistema de agilización de proyectos',
    category: 'Desarrollo FullStack',
    image: projectRepoImage,
    linkPage: null,
    linkGithub: `${MY_GITHUB_REPO_LINK}/repo_mvc`,
    techs: {
      descrip: 'PHP, MySql, Javascript, CSS, HTML.',
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: [],
      others: ['MySql', 'Laragon']
    },
    date: '2023-07-26'
  },
  {
    id: 'pazybien',
    name: 'Sitio web - Centro de Salud',
    category: 'Desarrollo FullStack',
    image: projectPazyBienImage,
    linkPage: null,
    linkGithub: 'https://github.com/peppo-su/pazybien',
    techs: {
      descrip: 'PHP, MySql, Javascript, CSS, HTML.',
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: [],
      others: ['MySql', 'Laragon']
    },
    date: '2022-10-29'
  }
]

export const sortProjects = projects.sort((a, b) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)
  return dateB - dateA
})

// Jobs positions in hire page
export const jobPositions = [
  {
    titleJob: 'Ingeniero de Software',
    types: [
      { id: crypto.randomUUID(), name: 'Remoto' },
      { id: crypto.randomUUID(), name: 'Híbrido' },
      { id: crypto.randomUUID(), name: 'En oficina' }
    ],
    modes: [
      { id: crypto.randomUUID(), name: 'Contrato' },
      { id: crypto.randomUUID(), name: 'Freelance' }
    ]
  },
  {
    titleJob: 'Front-end',
    types: [
      { id: crypto.randomUUID(), name: 'Remoto' },
      { id: crypto.randomUUID(), name: 'Híbrido' },
      { id: crypto.randomUUID(), name: 'En oficina' }
    ],
    modes: [
      { id: crypto.randomUUID(), name: 'Contrato' },
      { id: crypto.randomUUID(), name: 'Freelance' }
    ]
  },
  {
    titleJob: 'Diseñador UX/UI',
    types: [
      { id: crypto.randomUUID(), name: 'Remoto' },
      { id: crypto.randomUUID(), name: 'Híbrido' },
      { id: crypto.randomUUID(), name: 'En oficina' }
    ],
    modes: [
      { id: crypto.randomUUID(), name: 'Contrato' },
      { id: crypto.randomUUID(), name: 'Freelance' }
    ]
  }
]

export const techs = [
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
