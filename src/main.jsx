import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// set up a router
const router = createBrowserRouter([
  { path: "/",
    element: <App />
   },
  { path: "/test",
    element: <h1>test path</h1>
   },

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
