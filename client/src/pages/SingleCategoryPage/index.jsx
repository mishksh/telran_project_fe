import React from 'react'
import ItemByCategoryContainer from '../../components/ItemByCategoryContainer';
import s from './index.module.css'



export default function SingleCategoryPage() {

  return (
    <div className={s.single_category_page}>
      <ItemByCategoryContainer />
    </div>
  )
}
