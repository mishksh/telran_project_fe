import React from 'react'
import s from './index.module.css'
import { incrementAction, decrementAction, deleteCartAction } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'
import xxx from '../../media/xSign.png'


export default function Cart({ id, title, image, price, discont_price, count }) {

  let oldPrice;
  let newPrice;
  let sale;

  if (price !== undefined) {
    if (discont_price) {
      oldPrice = price;
      newPrice = discont_price;
      sale = Math.round(100 - (newPrice / oldPrice) * 100);
    } else {
      newPrice = price;
    }
  }

  const dispatch = useDispatch();

  return (
    <div className={s.cart_item}>
      <img className={s.xSign} src={xxx} alt='xSign' onClick={() => dispatch(deleteCartAction(id))} />
      <img className={s.image_item} src={`http://localhost:3333/${image}`} alt={title} />
      <div className={s.block}>
        <p id={s.title}>{title}</p>
        <div className={s.counter}>
          <div className={s.incr_decr} onClick={() => dispatch(decrementAction(id))}>-</div>
          <div>{count}</div>
          <div className={s.incr_decr} onClick={() => dispatch(incrementAction(id))}>+</div>
        </div>
      </div>
      <div className={s.prices}>
        <p className={s.discount}>{newPrice}<small id={s.currency}>$</small></p>
        <p id={oldPrice ? s.price : s.price2}>{oldPrice}$</p>
      </div>
    </div>
  )
}
