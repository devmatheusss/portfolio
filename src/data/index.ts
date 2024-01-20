import Project1 from '../assets/project_1.jpg'
import Project2 from '../assets/project_2.jpg'

export interface ProjectType {
  id: number
  title: string
  description: string
  image_url: string
  repo_url: string
}

export const projects: ProjectType[] = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Lista de Compras',
    description:
      'Uma Lista de Compras feita com Next.js e Server Actions - #boraCodar 34',
    image_url: Project1,
    repo_url: 'https://github.com/MatheusMA678/boracodar-34',
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Ignite Todo List',
    description: 'Um Todo List feito durante o bootcamp da Rocketseat.',
    image_url: Project2,
    repo_url: 'https://github.com/MatheusMA678/ignite-todo-list',
  },
]
