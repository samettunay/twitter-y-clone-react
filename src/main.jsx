import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './routes'
import { RouterProvider } from 'react-router-dom'
import './assets/css/tailwind.css'
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
)
