import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../hooks/CartContext";


export const CartWidget = () => {

  const { getQuantity, cart } = useContext(CartContext);

  return (
    <>
      {
        <Link to={"/cart"} className="carrito" >
          <img src="/assets/carrito.png" alt="cart" width={32} height={32} />
          {
            getQuantity() > 0 && <button className="btn-cart">{getQuantity()}</button>
          }
        </Link>
        }
    </>
  );
};