import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount.js';

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const onAdd = (quantity) => {
        setGoToCart(true);
    }
    return (
        <>
        <div className="camiseta">
            <img src={data.image} alt=""></img>
            <div>
            <h1>{data.title}</h1>
            </div>
            <div>
                <p>{data.description}</p>
                <h4>Precio: ${data.price}</h4>
                {
                    goToCart
                    ? <Link to='/cart'>Finalizar compra</Link>
                    : <ItemCount initial={3} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
        </>
    )
}

export default ItemDetail;