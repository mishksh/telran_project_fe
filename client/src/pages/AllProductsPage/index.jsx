import React from 'react'
import ProductsContainer from '../../Components/ProductsContainer'
import s from './index.module.css'
import SortFormByPrice from '../../Components/SortFormByPrice'
import SortFormBySelect from '../../Components/SortFormBySelect'
import SortFormByCheckBox from '../../Components/SortFormByCheckBox'



export default function AllItemsPage() {

  return (
    <div className={s.all_products}>
      <h1>All products</h1>
      <div className={s.form}>
        <SortFormByPrice />
        <SortFormByCheckBox />
        <SortFormBySelect />
      </div>
      <ProductsContainer />
    </div>
  )
}
