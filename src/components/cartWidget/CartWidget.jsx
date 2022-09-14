import { Link } from "react-router-dom";
import { CartContext } from "../../hooks/CartContext";


export const CartWidget = () => {

  const {totalProducts, cart} = CartContext();

  return (
    <>
      <li className={`nav-item ${cart.length === 0 ? "d-none" : "d-block"}`}>
        <Link className="navbar-brand carrito" to="../cart">
          <img src="../../assets/carrito.png" alt="carrito" width="40px" />
        </Link>
        <span>{totalProducts()}</span>
      </li>
    </>
  );
};