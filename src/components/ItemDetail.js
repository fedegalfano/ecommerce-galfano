import React from "react";

const ItemDetail = ({data}) => {
    return (
        <>
        <div className="camiseta">
            <img src={data.image} alt=""></img>
            <div>
            <h1>{data.title}</h1>
            </div>
            <div>
                <p>{data.description}</p>
            </div>
            <div>
                <h4>Precio: ${data.price}</h4>
            </div>
        </div>
        </>
    )
}

export default ItemDetail;