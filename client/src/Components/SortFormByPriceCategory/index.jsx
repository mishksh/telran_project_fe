import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { filterProductByPriceCategoryAction } from '../../store/reducers/singleCategoryReducer';



export default function SortFormByPriceCategory() {
  const dispatch = useDispatch();

  const filterPrice = () => {

    const min = document.getElementsByName('min')[0].value || 0;
    const max = document.getElementsByName('max')[0].value || Infinity;

    dispatch(filterProductByPriceCategoryAction({ min_value: min, max_value: max }));
  }


  return (
    <form className={s.price_form}>
      <label htmlFor='price'>Price</label>
      <input type="text" name="min" placeholder="from" onChange={filterPrice} />
      <input type="text" name="max" placeholder="to" onChange={filterPrice} />
    </form>
  );
};