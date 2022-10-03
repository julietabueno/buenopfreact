import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Contactate con Nosotros</li>
        <li className="list-group-item"><span class="material-symbols-outlined">
          mail
        </span> figuraslego@lego.com</li>
        <li className="list-group-item"><i className="fa-brands fa-linkedin" />@figuraslego</li>
        <li className="list-group-item"> <i className="fa-brands fa-twitter" />@figuraslego</li>
        <li className="list-group-item"> <i className="fa-brands fa-instagram" />@figuraslego</li>
        <li className="list-group-item"> <i className="fa-brands fa-whatsapp" />+ 54 11 5378 9097</li>
        
      </ul>
    </div>

  )
}




