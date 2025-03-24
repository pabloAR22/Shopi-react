// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/NavBar'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'

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
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar></Navbar>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
