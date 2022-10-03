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
                                        <Link to='/account'>
                                            <li className="nav-item">
                                                <a className="nav-link" >Mi cuenta</a>
                                            </li>
                                        </Link>
                                        <Link to='/'>
                                            <li className="nav-item">
                                                <a className="nav-link">Contacto</a>
                                            </li>
                                        </Link>
                                    </ul>
                                </nav>
                            </div>

                            <div className="col d-flex ">
                                <div className="col brandsFooter justify-content-end">
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