// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/NavBar'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/MyOrders', element: <MyOrders /> },
    { path: '/SignIn', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar></Navbar>
    </BrowserRouter>
  )
}

export default App
