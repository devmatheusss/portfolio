import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Router } from './router'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Greeting />
//   },
//   {
//     path: '/projects',
//     element: <Projects />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Router />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
