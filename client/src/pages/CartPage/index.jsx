import React from 'react'
import CartContainer from '../../Components/CartContainer'
import OrderContainer from '../../Components/OrderContainer'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import sign from '../../media/moreSign.png'



export default function CartPage() {

  return (
    <div className={s.main_page}>
      <h1 className={s.title}>Shopping cart</h1>
      <Link to='/all_products'><div id={s.back_to_the_store}>
        <p>Back to the store</p>
        <img src={sign} alt='sign' />
      </div>
      </Link>
      <div className={s.cart_page}>
        <div><CartContainer /></div>
        <div><OrderContainer /></div>
      </div>
    </div>
  )
}
