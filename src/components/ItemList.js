import Item from './Item.js';

const ItemList = ({data = []}) => {
    return (
        data.map(camiseta => <Item key={camiseta.id} info={camiseta}/>)
    );
}

export default ItemList;



