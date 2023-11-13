import { ProjectType } from '../data'
import { motion } from 'framer-motion'

const item = {
  hidden: {
    opacity: 0,
    x: 100
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'ease',
      ease: [.55,.56,.38,.91]
    }
  }
}

export function Project({ project }: { project: ProjectType }) {
  return (
    <motion.a
      href={project.repo_url}
      target='_blank'
      whileHover={{
        scale: 1.025
      }}
      variants={item}
      className='flex flex-col gap-2 shrink-0 max-w-[24rem]'
    >
      <img src={project.image_url} alt="project" className='aspect-video w-full rounded-lg  ring ring-transparent hover:ring-primary transition' />
      <div className='flex flex-col overflow-hidden'>
        <strong className='text-lg'>{project.title}</strong>
        <p className='text-slate-300 text-xs truncate' title={project.description}>{project.description}</p>
      </div>
    </motion.a>
  )
}
