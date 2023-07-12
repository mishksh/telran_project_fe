import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { getAllSaleProducts } from '../../async_actions/products_req';
import s from './index.module.css'


export default function RandomSales() {

    const dispatch = useDispatch();

    const products_state = useSelector(state => state.products);

    useEffect(() => { dispatch(getAllSaleProducts) }, []);
    
    const getRandomObjects = (array, count) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };
    
      const randomObjects = getRandomObjects(products_state, 3);

  return (
    <div className={s.products_container}>
        {randomObjects.map(el => <ProductItem key={el.id} {...el} />)}
    </div>
  )
}





