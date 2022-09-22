import React from "react";
import {addDoc, getFirestore, collection} from 'firebase/firestore';
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from './ItemCart';
import swal from 'sweetalert';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Nicolás',
            email: 'nicocampazzo@gmail.com',
            phone: '3413567364',
            adress: 'San Nicolás 1229'

        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
        alerta();
    }

    const alerta = () => {
        swal({
            title: "Felicitaciones",
            text: "Tu compra ha sido generada con éxito",
            icon: "success",
            button: "Aceptar",
        });
    }

    if (cart.length === 0) {
        return (
            <>
               <p>No hay elementos en el carrito</p>
               <Link to='/'>Hacer compras</Link>
            </>
        );
    }
    return (
        <>
           {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
           }
           <p>Total: ${totalPrice()}</p>
           <button onClick={handleClick}>Realizar compra</button>
        </>
    )
}

export default Cart;