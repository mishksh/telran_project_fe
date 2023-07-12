import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../async_actions/categories_req';
import Category from '../Category';
import s from './index.module.css'

export default function CategoriesContainer() {
  
  const dispatch = useDispatch();

  const categories_state = useSelector(state => state.categories);

  useEffect(() => { dispatch(getCategories) }, []);

  return (
    <div className={s.categories_container}>
      {
        categories_state.map(el => <Category {...el} key={el.id} />)
      }
    </div>
  )
}
