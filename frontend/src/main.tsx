import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Landing, Room } from './components/index.ts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App />}>
      <Route path='/' element={<Landing />} />
      <Route path='/room/:name' element={<Room />} />
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
