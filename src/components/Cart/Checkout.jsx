import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../Hooks/CartContext'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import db from '../../Firebase/Config'
import { Loader } from "../Loader/Loader";
import './Cart.css'

export const Checkout = () => {
    const { cart, getTotal, clearCart } = useContext(CartContext)

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
            updateStock()
        } catch (error) {
            console.log(error)
        }
    }

    /* creo la funcion para actualizar el stock una vez que realizo la compra */
    const updateStock = (item) => {
        cart.forEach(item => {
            console.log(item)
            const docRef = doc(db, 'productos', item.id)
            const updateStock = item.stock - item.quantity;
            updateDoc(docRef, {
                stock: updateStock
            })
        })
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
                    <h4 className="textCheckout">Por favor, complete sus datos:</h4>
                    <form onSubmit={handleSubmit} className="row g-1 needs-validation" noValidate>
                        <div className="col-md-7 position-relative">
                            <label htmlFor="validationTooltip01" className="form-label textCheckout">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="Nombre" placeholder="Nombre" value={Nombre}
                                onChange={handleInputChange} aria-label="Username" aria-describedby="addon-wrapping" />

                        </div>
                        <div className="col-md-7 position-relative">
                            <label htmlFor="validationTooltip02" className="form-label textCheckout">Telefono</label>
                            <input type="number" className="form-control" name="Telefono" placeholder="Telefono" value={Telefono}
                                onChange={handleInputChange} aria-label="Username" aria-describedby="addon-wrapping" />

                        </div>
                        <div className="col-md-7 position-relative">
                            <label htmlFor="validationTooltipUsername" className="form-label textCheckout">E-mail</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                <input type="email" className="form-control" name="Email" placeholder="Email" value={Email}
                                    onChange={handleInputChange} aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                        </div>
                        <div className="col-md-7 position-relative">
                            <input
                                type="submit"
                                value="Finalizar Compra"
                                className="btn btnCheckout"
                            />
                        </div>
                    </form>


                </div>)
            }

            <div>
                {
                    orderID && (

                        <div className="bodyCheckout">
                            <div className="card cardChechout" style={{ width: '30rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Compra Finalizada con Exito</h5>
                                    <p className="card-text">{`Su nº de órden es: ${orderID}`}</p>
                                    <Link to="/"><h5 className="card-link">Realizar otra compra</h5></Link>

                                </div>
                            </div>


                        </div>
                    )
                }
            </div>

        </>
    )
}

export default Checkout

