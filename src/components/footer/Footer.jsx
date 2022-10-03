import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
export const Footer = () => {
    return (
        <>
            <footer className="main-footer footer  container-fluid d-flex flex-nowrap justify-content-evenly">
                <div className="container-fluid">
                    <div className="d-flexd-inline-flex justify-content-between align-items-center">
                        <div className="row ">
                            <div className="col d-flex navFooter justify-content-start">
                                <nav>
                                    <ul className="nav nav-fill">
                                        <Link to='/contact'>
                                            <li className="nav-item">
                                                <a className="nav-link">Contacto</a>
                                            </li>
                                        </Link>
                                    </ul>
                                </nav>
                            </div>

                            <div className="col d-flex ">
                                <div className="col brandsFooter justify-content-end">
                                    {/* Icono con Link de WhatsApp */}
                                    <a
                                        href="https://chat.whatsapp.com/"
                                        aria-label="WhatsApp oficial"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-whatsapp" />
                                    </a>
                                    {/* Icono con Link de linkedin */}
                                    <a
                                        href="https://www.linkedin.com/feed/?trk=nav_responsive_tab_home"
                                        aria-label="Linkedin oficial de la tienda"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin" />
                                    </a>

                                    {/* Icono con Link de twitter */}
                                    <a
                                        href="https://twitter.com/"
                                        aria-label="twitter oficial de la tienda"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-twitter" />
                                    </a>


                                    {/* Icono con Link de instagram */}
                                    <a
                                        href="https://www.instagram.com/"
                                        aria-label="Instagram oficial de la tienda"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-instagram" />
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};