import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
export const Footer = () => {
    return (
        <>
            <footer className="main-footer bg-secondary">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col d-flex flex-column">
                            <Link to='/'><a className="navbar-brand"><img className='imglogoNavLego' src="/assets/LogoLego.png" alt="Logo LEGO" /></a> </Link>
                        </div>
                        <div className="col brandsFooter">

                            <i className="fa-brands fa-facebook" />

                            <i className="fa-brands fa-linkedin" />

                            <i className="fa-brands fa-instagram" />

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};