import React from 'react'
import SaleItem from '../../components/SaleItem'
import MainCategories from '../../components/MainCategories'
import DiscountContainer from '../../components/DiscountContainer'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import RandomSale from '../../components/RandomSale'



export default function HomePage() {
  
  return (
    <div className={s.home_page}>
      <SaleItem />
      <div id={s.catalog}>
      <h1>Catalog</h1>
      <Link to='/categories' className={s.categories_btn}>All categories</Link>
      </div>
      <MainCategories />
      <DiscountContainer />
      <h2>Sale</h2>
      <RandomSale />
    </div>
  )
}
