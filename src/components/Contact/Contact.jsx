import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Contactate con Nosotros</li>
        <li className="list-group-item"> <a
                                        href="mailto:bueno.julieta.ok@gmail.com?Subject=Contacto%20Figuras%20Lego"
                                        aria-label="Contacto de Figuras LEGO"
                                        target="_blank"
                                      >
                                       <i className="fa-brands fa-envelope" />
                                      </a>figuraslego@lego.com</li>
        <li className="list-group-item"> <a
                                          href="https://www.linkedin.com/feed/?trk=nav_responsive_tab_home"
                                          aria-label="Linkedin oficial de la tienda"
                                          target="_blank"
                                      >
                                          <i className="fa-brands fa-linkedin" />
                                      </a>@figuraslego</li>
        <li className="list-group-item">  <a
                                          href="https://twitter.com/"
                                          aria-label="twitter oficial de la tienda"
                                          target="_blank"
                                      >
                                          <i className="fa-brands fa-twitter" />
                                      </a>@figuraslego</li>
        <li className="list-group-item"> <a
                                          href="https://www.instagram.com/"
                                          aria-label="Instagram oficial de la tienda"
                                          target="_blank"
                                          >
                                          <i className="fa-brands fa-instagram" /> 
                                          </a>@figuraslego</li>
        <li className="list-group-item">   <a
                                          href="https://chat.whatsapp.com/"
                                          aria-label="WhatsApp oficial"
                                          target="_blank"
                                        >
                                            <i className="fa-brands fa-whatsapp" />
                                        </a>+ 54 11 5378 9097</li>

      </ul>
    </div>

  )
}




