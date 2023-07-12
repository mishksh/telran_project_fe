import React from 'react'
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../async_actions/products_req';
import s from './index.module.css'



export default function ProductsContainer() {

  const dispatch = useDispatch();

  const products_state = useSelector(state => state.products);

  useEffect(() => { dispatch(getProducts) }, []);
  
  return (
    <div className={s.products_container}>
      {products_state
              .filter(el => !el.hide_price && el.hide_sale)
              .map(el => <ProductItem key={el.id} {...el} />)}
    </div>
  )
}
