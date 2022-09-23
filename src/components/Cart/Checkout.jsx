import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../hooks/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../firebase/config'
import { Loader } from "../Loader/Loader";
import Swal from "sweetalert2";
import './Cart.css'

export const Checkout = () => {
    const { cart, getTotal, clearCart, getQuantity } = useContext(CartContext)

    /* Agrego un modal para la confirmacion de compra */
    const confirm = () => {
        Swal.fire("Muchas Gracias", `Su compra ha sido realizada con éxito`, `Su nº de órden es: ${orderID}`, "success");
    };
    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()



    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

    const { Nombre, Email, Telefono } = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generateOrder = async (data) => {
        setLoad(true)
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderID(order.id)
            clearCart()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = cart.map(e => { return { id: e.id, title: e.nickname, price: e.price, amount: e.quantity } })
        const total = getTotal()
        const data = { buyer, items, dia, total }
        console.log("data", data)
        generateOrder(data)


    }


    return (
        <>


            {load ? <Loader />
                : (!orderID && <div>
                    <h4>Por favor, complete sus datos:</h4>

                    <form onSubmit={handleSubmit}>

                        <div className="row mb-3">
                            <label htmlFor="Nombre" className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    name="Nombre"
                                    placeholder="Nombre"
                                    value={Nombre}
                                    onChange={handleInputChange}
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    value={Email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Telefono</label>
                            <div className="col-sm-10">
                                <input type="number"
                                    name="Telefono"
                                    placeholder="Telefono"
                                    value={Telefono}
                                    onChange={handleInputChange}
                                    required />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success"
                        />
                    </form>


                </div>)
            }

            <div>
                {
                    orderID && (
                        <div>
                            <div className="card text-bg-dark">
                                <img src="https://firebasestorage.googleapis.com/v0/b/lego-app-e4d06.appspot.com/o/bgLego.jpeg?alt=media&token=bf7a9afe-907b-47ac-92e9-2737d7e61e35" className="card-img" alt="..." />
                                <div className="card-img-overlay cardFInal">
                                    <h5 className="card-title cardTitleH5">Compra Finalizada con Exito</h5>
                                    <p className="card-text cardtextH5">{`Su nº de órden es: ${orderID}`}</p>

                                </div>
                            </div>
                            <div className="linkOtraCompra">
                                <Link to="/"><h5 className="h5Compra">Realizar otra compra</h5></Link>
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default Checkout

