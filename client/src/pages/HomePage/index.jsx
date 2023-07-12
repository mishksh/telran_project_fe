import React from 'react'
import SaleItem from '../../Components/SaleItem'
import DiscountContainer from '../../Components/DiscountContainer'
import MainCategories from '../../Components/MainCategories'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import RandomSales from '../../Components/RandomSales'



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
      <RandomSales />
    </div>
  )
}
