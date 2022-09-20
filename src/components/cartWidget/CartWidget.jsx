import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../hooks/CartContext";


export const CartWidget = () => {

  const { getQuantity, cart } = useContext(CartContext);

  return (
    <>
      <li className={`nav-item ${cart.length === 0 ? "d-none" : "d-block"}`}>
        <Link className="navbar-brand carrito" to="../cart">
          <img src="/assets/carrito.png" className="carrito" alt="carrito" width="40px" />
          <span>{getQuantity()}</span>
        </Link>
        
      </li>
    </>
  );
};