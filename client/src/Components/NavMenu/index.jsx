import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import plant from '../../media/plant.png'
import basket from '../../media/basket.png'



export default function NavMenu() {

  return (
      <header className={s.header}>
          <div>
            <img src={plant} alt='logo' />
          </div>
          <Link className={s.catalog_btn} to='/categories'>Catalog
          </Link>
          <nav className={s.nav}>
            <Link to='/'>Main Page</Link>
            <Link to='/all_products'>All products</Link>
            <Link to='/sales'>Sales</Link>
          </nav>
          <Link to='/cart'><img src={basket} alt='cart' /></Link>
      </header>
  )
}
