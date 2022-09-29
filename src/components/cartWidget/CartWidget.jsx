import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Hooks/CartContext";


export const CartWidget = () => {

  const { getQuantity } = useContext(CartContext);

  return (
    <>
      {
        <Link to={"/cart"} className="carrito" >
          <button type="button" className="btn btn-wthite position-relative">
            <img className="btnCarrito" src="/assets/carrito.png" alt="cart" width={32} height={32} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {getQuantity()}
            </span>
          </button>

        </Link>
      }
    </>
  );
};