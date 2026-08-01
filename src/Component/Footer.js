import React from 'react'
import SeparadorVertical from './Extras/SeparadorVertical'

const Footer = () => {
  return (
    <div className='footerComponent container'>
      <div className='mapsFooter'>
        <h3>Ubicación</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2321.1455342724043!2d-67.54670376490134!3d-39.05276530451332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a029e4d9f73fb%3A0xba87a349e9a340d!2sVicente%20L%C3%B3pez%20y%20Planes%2C%20R8332%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1776009877792!5m2!1ses!2sar"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className='textFooter'>
        <h3>Información</h3>
        <div>
          <span>Dirección: Vicente López y Planes 1524</span>
          <span>Teléfono: 298 4382355</span>
          <span>E-mail: info@paniceres.com.ar</span>
        </div>
      </div>


    </div>
  )
}

export default Footer

