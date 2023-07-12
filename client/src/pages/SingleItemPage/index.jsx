import React, {useEffect} from 'react'
import { addToCartAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../async_actions/products_req';
import { useSelector } from 'react-redux';
import s from './index.module.css'



export default function SingleItemPage() {

  const addToCart = () => dispatch(addToCartAction({id: +id, title, image, price, description, discont_price}))
  const dispatch = useDispatch();
  const {productId} = useParams();
  useEffect(()=>{
    dispatch(getSingleProduct(productId))
  }, [])
  const singleProduct_state = useSelector(state => state.singleProduct);
  const {id, title, image, price, description, discont_price} = singleProduct_state;
  const sale = Math.round((price - discont_price)/ price * 100);

  
  return (
    <div className={s.main}>  
     <p className={s.title}>{title}</p>
     <div className={s.single_item}>
      <img src={`http://localhost:3333/${image}`} alt={title}/>
      <div>
        <div className={s.prices}>
          <div>
            <p className={s.discount_price}>{discont_price}<small className={s.currency}>$</small></p>
          </div>
            <p id={s.price_style}>{price}$</p>
            <p id={s.sale_style}>-{sale}%</p>       
        </div>
            <div id={s.to_cart} onClick={addToCart}>To cart</div>
            <p id={s.description}>Description</p>
            <p id={s.description_full}>{description}</p>
            </div>
      </div>
    </div>
  )
}
