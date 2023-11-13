import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useFetch } from 'usehooks-ts'

import { Greeting } from './pages/greeting'
import { Projects } from './pages/projects'

import { Header } from './components/header'

export function Router() {
  const location = useLocation()
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', e => handleWindowMouseMove(e))

    return () => {
      window.removeEventListener('mousemove', e => handleWindowMouseMove(e))
    }
  }, [])

  return (
    <>
      <div
        className='absolute h-24 w-24 bg-accent rounded-full -z-10 blur-3xl'
        style={{
          top: coords.y - 44,
          left: coords.x - 44
        }}
      ></div>
      <Header />
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Greeting />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
