import React from 'react'
import image12 from '../../media/404.png'
import s from './index.module.css'


export default function NotFoundPage() {
  
  return (
    <div>
      <div className={s.picture_404}>
        <img src={image12} alt='pic404' />
      </div>
    </div>
  )
}
