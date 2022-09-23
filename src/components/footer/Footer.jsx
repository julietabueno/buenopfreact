import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
export const Footer = () => {
    return (
        <>
            <footer className="main-footer bg-secondary container-fluid d-flex flex-wrap justify-content-between py-4">
                <div className="container-fluid">
                    <div className="d-flexd-inline-flex justify-content-between align-items-center">
                        <div className="row ">
                            <div className="col d-flex align-items-center">
                                <nav>
                                    <ul className="nav nav-fill">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Colecciones</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Mi cuenta</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Contacto</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col d-flex align-items-center">
                                <Link to='/'><a className="navbar-brand"><img className='imglogoNavLego' src="/assets/LogoLego.png" alt="Logo LEGO" /></a> </Link>
                            </div>
                            <div className="col  d-flex align-items-center">
                                <div className="col brandsFooter">
                                    <i className="fa-brands fa-facebook" />
                                    <i className="fa-brands fa-linkedin" />
                                    <i className="fa-brands fa-instagram" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};