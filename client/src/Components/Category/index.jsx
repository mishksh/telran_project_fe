import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Category({ id, image, title }) {

  const categoryid = `/category/${id}`;

  return (
    <Link to={categoryid} className={s.link}>
      <div className={s.category_item}>
        <img src={`http://localhost:3333/${image}`} />
        <p>{title}</p>
      </div>
    </Link>
  )
}
