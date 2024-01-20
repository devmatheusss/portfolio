import { motion } from 'framer-motion'
import type { Activity, Spotify } from 'use-lanyard'

interface ActivityCardProps {
  activities: Activity[]
  spotify: Spotify | null
}

export function ActivityCard({
  activities: activitiesWSpotify,
  spotify,
}: ActivityCardProps) {
  const activities = activitiesWSpotify.filter(
    (activity) => activity.id !== 'spotify:1',
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-3 absolute top-full right-0 bg-background/50 shadow-lg backdrop-blur rounded-md mt-2 p-3 border border-secondary max-w-[256px]"
    >
      <strong className="text-sm leading-none">What am I doing?</strong>

      <section className="flex flex-col gap-3">
        {activities.map((activity) => {
          return (
            <div key={activity.id} className="flex items-start gap-2">
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
                <span className="text-xs text-text/80 truncate">
                  {activity.state}
                </span>
                <span
                  className="text-xs text-text/80 truncate"
                  title={activity.details}
                >
                  {activity.details}
                </span>
              </div>
            </div>
          )
        })}

        {spotify && (
          <>
            <div className="h-px w-full bg-secondary" />

            <div className="flex items-start gap-2">
              <div className="relative">
                <img
                  src={spotify.album_art_url!}
                  alt={spotify.song}
                  className="w-10 aspect-square object-cover rounded-lg border border-secondary shrink-0"
                />
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse absolute -top-0.5 -right-0.5" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <strong className="text-xs truncate">{spotify.song}</strong>
                <span className="text-text/80 text-[10px] truncate">
                  {spotify.artist}
                </span>
              </div>
            </div>
          </>
        )}
      </section>
    </motion.div>
  )
}
