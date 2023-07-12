import React from 'react'
import { useParams } from 'react-router-dom';
import { getCategories, getSingleCategory } from '../../async_actions/categories_req';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem'
import s from './index.module.css'
import SortFormByPriceCategory from '../SortFormByPriceCategory';
import SortFormByCheckBoxCategory from '../SortFormByCheckBoxCategory';
import SortFormBySelectCategory from '../SortFormBySelectCategory';



export default function ItemByCategoryContainer() {

  const { categoryId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCategory(categoryId))
  }, [])

  const singleCategory_state = useSelector(state => state.singleCategory);

  const categories_state = useSelector(state => state.categories);

  useEffect(() => { dispatch(getCategories) }, []);

  const category = categories_state.find(el => el.id === parseInt(categoryId));

  return (
      <div>
        {category && (
          <div>
            <h1 id={s.title}>{category.title}</h1>
          </div>
        )}

        <div className={s.block_form}>
          <SortFormByPriceCategory />
          <SortFormByCheckBoxCategory />
          <SortFormBySelectCategory />
        </div>
          <div className={s.by_category_container}>
            {
              singleCategory_state
                .filter(el => !el.hide_price && el.hide_sale)
                .map(el => <ProductItem key={el.id} {...el} />)
            }
          </div>
      </div>
  )
}
