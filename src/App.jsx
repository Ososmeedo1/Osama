import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import All from './Components/All/All.jsx'
import Graphic from './Components/Graphic/Graphic.jsx'
import Web from './Components/Web/Web.jsx'
import Branding from './Components/Branding/Branding.jsx'


export default function App() {
  
  let routers = createBrowserRouter([
    {
      path: '' , element: <Layout/> , children : [
        {path: '/' , element: <Home/> , children: [
          {path: 'all' , element: <All/>},
          {path: 'graphic' , element: <Graphic/>},
          {path: 'web' , element: <Web/>},
          {path: 'branding' , element: <Branding/>},
        ]},
        
      ]
    }
  ])
  
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
