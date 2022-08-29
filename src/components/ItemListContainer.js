import ItemCount from './ItemCount.js';

const ItemListContainer = (props) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }
    return (
        <>
        <h4>{props.greeting}</h4>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;