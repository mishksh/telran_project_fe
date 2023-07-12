import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import s from './index.module.css'


export default function CategoriesPage() {
  
  return (
    <div className={s.categories_cart_page}>
      <h1 className={s.title}>Categories</h1>
      <CategoriesContainer />
    </div>
  )
}
