import { useEffect, useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))

    const disminuir = () => {
        setCount(count - 1);
    }
    const aumentar = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <>
        <div className="counter">
            <button disabled={count <=1} onClick={disminuir}>-</button>
            <span>{count}</span>
            <button disabled={count >=stock} onClick={aumentar}>+</button>
        </div>
        <div className="counter">
            <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount;