import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducers/cartReducer';
import { Link } from 'react-router-dom';


export default function ProductItem({ id, title, image, price, discont_price }) {

  const productid = `/product/${id}`;

  const dispatch = useDispatch();

  const addToCart = () => dispatch(addToCartAction({ id, image, title, price, discont_price }))

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
  return (
    <div>
      {typeof price == 'undefined' ? <div>Waiting</div> :
        <div className={s.product_item}>
          <Link to={productid}>
            <img src={`http://localhost:3333/${image}`} alt={title} />
            <div className={s.price_block}>
              <p id={s.discountPrice}>{newPrice}<small className={s.currency}>$</small></p>
              <p id={oldPrice ? s.price : s.priceNa}>{oldPrice}$</p>
              <p id={sale ? s.discountPr : s.discountPrNa}>-{sale}%</p>
            </div>
            <p>{title}</p>
          </Link>
          <button className={s.add_btn} onClick={addToCart}>Add to cart</button>
        </div>
      }
    </div>
  )
}
