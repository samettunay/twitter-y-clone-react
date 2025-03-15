import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './routes'
import { RouterProvider } from 'react-router-dom'
import './assets/css/tailwind.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
