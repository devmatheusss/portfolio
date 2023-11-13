import { motion } from 'framer-motion'
import { Project } from '../components/project'
import { projects } from '../data'

const container = {
  hidden: {
    // opacity: 0,
  },
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function Projects() {
  return (
    <motion.main
      // initial={{
      //   x: '100%',
      //   opacity: 0
      // }}
      animate={{
        x: 0,
        opacity: 1
      }}
      exit={{
        x: '100%',
        opacity: 0
      }}
      transition={{
        duration: 1,
        ease: [.55,.56,.38,.91]
      }}
      className="flex items-center h-screen"
    >
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className='min-h-[256px] w-full px-8 p-4 flex gap-8 overflow-x-auto'
      >
        {projects.map(project => {
          return <Project key={project.id} project={project} />
        })}
      </motion.section>
    </motion.main>
  )
}
