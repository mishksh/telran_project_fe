import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { filterProductByPriceAction } from '../../store/reducers/productReducer';



export default function SortFormByPrice() {
  
  const dispatch = useDispatch();

  const filterPriceCategory = () => {

    const min = document.getElementsByName('min')[0].value || 0;
    const max = document.getElementsByName('max')[0].value || Infinity;

    dispatch(filterProductByPriceAction({ min_value: min, max_value: max }));
  }

  return (
    <form className={s.price_form}>
      <label htmlFor='price'>Price</label>
      <input type="text" name="min" placeholder="from" onChange={filterPriceCategory} />
      <input type="text" name="max" placeholder="to" onChange={filterPriceCategory} />
    </form>

  );
};

