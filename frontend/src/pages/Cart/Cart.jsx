import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/storecontext'

const Cart = () => {

  const {cartItems,food_list,removeFromCart}= useContext(StoreContext);
  return (
    <div></div>
  )
}

export default Cart