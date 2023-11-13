import { motion } from "framer-motion"
import type { Activity } from 'use-lanyard'

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-3 absolute top-full right-0 bg-background/50 shadow-lg backdrop-blur rounded-md mt-2 p-3 border border-secondary max-w-[256px]"
    >
      <strong className="text-sm leading-none">What am I doing?</strong>

      <div className="flex items-start gap-2">
        <div className="relative">
          <img
            src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.large_image}.png`}
            alt={activity.assets?.large_text}
            className="w-20 h-20 rounded-lg bg-secondary shadow-lg shrink-0"
          />
          <img
            src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.small_image}.png`}
            alt={activity.assets?.small_text}
            className="w-8 h-8 rounded-full absolute -bottom-2 -right-2 shadow-lg border border-secondary"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <strong className="text-sm truncate">{activity.name}</strong>
          <span className="text-xs text-text/80 truncate">{activity.state}</span>
          <span className="text-xs text-text/80 truncate" title={activity.details}>{activity.details}</span>
        </div>
      </div>
    </motion.div>
  )
}
