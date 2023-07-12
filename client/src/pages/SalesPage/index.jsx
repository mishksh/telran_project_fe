import React from 'react'
import s from './index.module.css'
import SortFormByPrice from '../../Components/SortFormByPrice'
import SortFormSelect from '../../Components/SortFormBySelect'
import SalesContainer from '../../Components/SalesContainer'



export default function SalesPage() {

  return (
    <div className={s.sales_page}>
      <h1>Products with sale</h1>
        <div className={s.form}>
          <SortFormByPrice />
          <SortFormSelect />
        </div>
      <SalesContainer />
    </div>
  )
}
