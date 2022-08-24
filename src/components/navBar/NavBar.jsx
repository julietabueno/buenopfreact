import React from 'react'
import { Form } from './Form';
import {CartWidget} from "../cartWidget/CartWidget"
export const NavBar = () => {
  return (
    <div id="" className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mi App de LEGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Precios</a>
              </li>
            </ul>
            <Form contBuscar="Productos" />
            <CartWidget />
          </div>

        </div>
      </nav>
    </div>
  )
}
