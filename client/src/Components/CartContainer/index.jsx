import React from 'react'
import { useSelector } from 'react-redux';
import Cart from '../Cart';


export default function CartContainer() {

  const cart_state = useSelector(state => state.cart)
  
    return (
      <div>
        {cart_state.map(el => <Cart key={el.id} {...el} />)}
      </div>
    )
  }

