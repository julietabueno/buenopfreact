import React from 'react'
import { Form } from './Form';
import { CartWidget } from "../cartWidget/CartWidget"
import "./NavBar.css"
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div id="" className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to='/'><a className="navbar-brand" href="#">Mi App de LEGO</a> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Link to='/categoria/marvel'>
                {<li className="nav-item">
                  <a className="nav-link" href="#">Marvel</a>
                </li>}
              </Link>
              <Link to='/categoria/dc'>
                {<li className="nav-item">
                  <a className="nav-link" href="#">DC</a>
                </li>}
              </Link>
            </ul>
            <Form contBuscar="Productos" />
            <CartWidget />
          </div>

        </div>
      </nav>
    </div>
  )
}
