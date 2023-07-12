import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Category from '../Category';
import { getCategories } from '../../async_actions/categories_req';
import s from './index.module.css'

export default function MainCategories() {

  const dispatch = useDispatch();

  const categories_state = useSelector(state => state.categories);

  useEffect(() => { dispatch(getCategories) }, []);
  
  return (
    <div className={s.categories_container}> 
        {categories_state.slice(1).map(el=> <Category {...el} key={el.id}/>)}
    </div>
  )
}
