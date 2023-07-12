import React from 'react'
import s from './index.module.css'
import whatsApp from '../../media/whatsApp.png'
import instagram from '../../media/instagram.png'



export default function Footer() {
  
  return (
    <footer className={s.footer}>
      <div className={s.contact}>
        <p className={s.contact_name}>Contact</p>
        <p className={s.phone}>+49 999 999 99 99</p>

        <div className={s.social_networks}>
          <figure>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram" width="44" height="44" />
            </a>
            <figcaption>Instagram</figcaption>
          </figure>
          <figure>
            <a href="https://www.whatsapp.com/">
              <img src={whatsApp} alt='whatsApp' width='44' height='44' />
            </a>
            <figcaption>WhatsApp</figcaption>
          </figure>
        </div>
      </div>

      <div className={s.address}>
        <p className={s.address_style}>Address</p>
        <a className={s.address_name} href='https://www.google.com/search?q=telranDE'>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
          <div>
            <p className={s.working_hours}>Working hours:</p>
            <p className={s.working_time}> 24 hours a day</p>
          </div>
      </div>
      <div className={s.map_container}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4102804109284!2d13.372526676378527!3d52.50791373712464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2zTGlua3N0cmHDn2UgMi84LiBFdGFnZSwgMTA3ODUgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2s!4v1688361901864!5m2!1sru!2s" >
          allowFullScreen
        </iframe>
      </div>
    </footer>
  )
}
