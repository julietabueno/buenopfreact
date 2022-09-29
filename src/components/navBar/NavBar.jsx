import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to='/'><a className="navbar-brand"><img className='imglogoNavLego' src="/assets/LogoLego.png" alt="Logo LEGO" /></a> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle filtroNavbar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Filtrar por Marca
                </a>
                <ul className="dropdown-menu">
                  <Link to='/categoria/marvel'>
                    {<li className="nav-item">
                      <a className="nav-link linksNavbar">Marvel</a>
                    </li>}
                  </Link>
                  <Link to='/categoria/dc'>
                    {<li className="nav-item">
                      <a className="nav-link linksNavbar" >DC</a>
                    </li>}
                  </Link>
                  <Link to='/categoria/disney'>
                    {<li className="nav-item">
                      <a className="nav-link linksNavbar" >Disney</a>
                    </li>}
                  </Link>
                </ul>
                &lt;
              </li>
            </ul>
      
              <nav>
                <ul className="nav nav-fill">
                  <Link to='/account'>
                    <li className="nav-item">
                      <a className="nav-link navlink" href="#">Mi cuenta</a>
                    </li>
                  </Link>
                  <Link to='/contact'>
                    <li className="nav-item">
                      <a className="nav-link navlink">Contacto</a>
                    </li>
                  </Link>
                </ul>
              </nav>
              <CartWidget />
          
          </div>
        </div>
      </nav>
    </>
  )
}





