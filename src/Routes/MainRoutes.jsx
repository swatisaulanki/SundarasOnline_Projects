import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { HomePage } from '../Pages/R/HomePage'
import AllPages from '../Components/ShopAll/AllPages'
import NewProducts from '../Pages/K/NewProducts'
import CartPage from '../Pages/S/CartPage'
import PaymentPage from '../Pages/S/PaymentPage'
import RequiredAuth from '../Components/Authentication/RequiredAuth'
import PaymentSuccess from '../Pages/A/PaymentSuccess'
import Signin from '../Components/Auth/signin'
import ProductDetails from '../Pages/K/ProductDetails'
import OrderComplete from '../Pages/A/OrderComplete'
import ShippingPage from '../Pages/S/ShippingPage'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/:id' element={<ProductDetails/>} />

        <Route path='/new_products' element={<NewProducts/>}/>
        <Route path='/new_products/:id' element={<ProductDetails/>}/>

        <Route path='/all_products' element={<AllPages/>}/>
        
        <Route path='/all_products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/cart/information' element={
            <RequiredAuth>
        <PaymentPage/>
            </RequiredAuth>
        }/>
        <Route path='/cart/information/shipping' element={
            <RequiredAuth>
        <ShippingPage/>
            </RequiredAuth>
        }/>
        <Route path='/cart/information/shipping/payment' element={
            <RequiredAuth>
        <PaymentSuccess/>
        {/* <PaymentMain/> */}
            </RequiredAuth>
        }/>
        <Route path='/cart/information/shipping/payment/order_successful' element={
            <RequiredAuth>
        <OrderComplete/>
            </RequiredAuth>
        }/>
    </Routes>
  )
}

export default MainRoutes
  