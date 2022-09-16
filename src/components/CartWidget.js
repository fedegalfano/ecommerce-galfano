import React from "react";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
        <div>
            <img src="/carrito-de-compras.png" width="30" height="30" alt="carrito"/>
            <span className="numero">{totalProducts() || ''}</span>
        </div>
        </>
    )
}

export default CartWidget;