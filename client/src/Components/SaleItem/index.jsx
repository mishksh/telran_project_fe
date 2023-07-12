import React from 'react'
import s from './index.module.css'
import bush from '../../media/bush.png'
import { Link } from 'react-router-dom'

export default function SaleItem() {

  return (
    <div className={s.sale_block}>
      <div className={s.sale_style}>
        <p id={s.sale}>Sale</p>
        <p id={s.season}>New season</p>
        <Link to='sales'><div id={s.sale_btn}>Sale</div></Link>
      </div>
      <img src={bush} alt='bush' />
    </div>
  )
}
