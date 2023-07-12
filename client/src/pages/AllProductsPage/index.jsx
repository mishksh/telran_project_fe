import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import s from './index.module.css'
import SortFormByPrice from '../../components/SortFormByPrice'
import SortFormByCheckBox from '../../components/SortFormByCheckBox'
import SortFormBySelect from '../../components/SortFormBySelect'



export default function AllProductsPage() {

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
