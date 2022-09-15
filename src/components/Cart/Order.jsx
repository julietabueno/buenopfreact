import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../hooks/CartContext";

export const Order = ({ getTotal }) => {

    const confirm = () => {
        Swal.fire("Muchas Gracias", `Compraste tus LEGO`, "success");
    };

    return (
        <div className="container-fluid">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        {" "}
                        <img
                            src="/assets/LogoLego.png"
                            className="img-fluid rounded-start"
                            alt={"logo"}
                            width="100px"
                        />
                    </div>
                    <div className="col-8 d-flex align-items-center justify-content-center">
                        <ul style={{ listStyle: "none" }}>
                            <li>
                                <input type="radio" value="Mercado Pago" id="Mercado Pago" />
                                <label htmlFor="Mercado Pago">
                                    Mercadopago - Tarjetas Online, PagoFacil, RapiPago
                                </label>
                            </li>
                            <li>
                                <input type="radio" value="Deposito" id="Deposito" />
                                <label htmlFor="Deposito">
                                    Depósito o transferencia bancaria
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <div className="card-body">
                            <p className="fs-4">Total:</p>
                            <p className="fs-3">u$s{getTotal()}</p>
                            <button onClick={confirm} className="btn btn-outline-primary">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


