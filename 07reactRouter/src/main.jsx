import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    element:<Layout/>
  },
  {
    path : "about",
    element:<About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}>

</RouterProvider>
  </React.StrictMode>,
)
