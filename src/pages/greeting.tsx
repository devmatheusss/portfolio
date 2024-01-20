import { ChevronDownIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GreetingMessage } from '@/components/greeting-message'

export function Greeting() {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        y: '-100%',
        opacity: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.55, 0.56, 0.38, 0.91],
      }}
    >
      <section className="h-screen flex flex-col items-center justify-center gap-4">
        <GreetingMessage />

        <Link
          to={'/projects'}
          className="w-8 h-8 rounded-full hover:bg-secondary transition duration-500 flex items-center justify-center pt-0.5 group"
        >
          <ChevronDownIcon className="group-hover:text-primary" size={28} />
        </Link>
      </section>
    </motion.main>
  )
}
