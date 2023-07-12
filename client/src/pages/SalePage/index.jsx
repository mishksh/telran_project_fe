import React from 'react'
import s from './index.module.css'
import SortFormByPrice from '../../components/SortFormByPrice'
import SortFormSelect from '../../components/SortFormBySelect'
import SaleContainer from '../../components/SaleContainer'



export default function SalePage() {

  return (
    <div className={s.sale_page}>
      <h1>Products with sale</h1>
        <div className={s.form}>
          <SortFormByPrice />
          <SortFormSelect />
        </div>
      <SaleContainer />
    </div>
  )
}
