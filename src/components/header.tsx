import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useLanyardWS } from 'use-lanyard'
import { ActivityCard } from './activity-card'
import { useState } from 'react'

export function Header() {
  const location = useLocation()
  const [isHovering, setIsHovering] = useState(false)
  const discordInfo = useLanyardWS('548639204578426881')

  return (
    <div className="absolute z-50 top-8 inset-x-8 flex gap-6 items-center">
      <div className='z-50 relative grid grid-cols-3 gap-1.5 h-12 w-16 group before:content-[""] before:absolute before:w-20 before:h-20 before:bg-accent before:rounded-full before:blur-3xl before:-left-8 before:-top-8'>
        <div className="bg-accent rounded-full group-hover:bg-primary transition" />
        <div className="bg-accent rounded-full group-hover:bg-primary transition h-1/2" />
        <div className="bg-accent rounded-full group-hover:bg-primary transition" />
      </div>

      <AnimatePresence mode="wait">
        {location.pathname === '/projects' && (
          <motion.strong
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            className="-z-10 text-transparent bg-clip-text bg-gradient-to-r from-text/80 to-text to-40%"
          >
            Projects
          </motion.strong>
        )}
      </AnimatePresence>

      {discordInfo && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-auto flex flex-col items-center relative peer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="flex items-center gap-2">
              <div
                data-status={discordInfo.discord_status}
                className="w-2 h-2 rounded-full data-[status=online]:bg-green-500 data-[status=idle]:bg-yellow-500 data-[status=offline]:bg-zinc-500 data-[status=dnd]:bg-red-500 data-[status=online]:animate-pulse"
              />
              <strong>{discordInfo.discord_user.global_name}</strong>
            </div>
            <span className="text-text/70 text-xs">
              {discordInfo.discord_user.username}
            </span>
          </motion.div>

          {discordInfo.activities.length > 0 && (
            <AnimatePresence mode="wait">
              {isHovering && (
                <ActivityCard
                  spotify={discordInfo.spotify}
                  activities={discordInfo.activities}
                />
              )}
            </AnimatePresence>
          )}
        </>
      )}
    </div>
  )
}
