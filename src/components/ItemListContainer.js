import ItemCount from './ItemCount.js';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';

const remerasfutbol = [
    {
        id: 1,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/camiseta-de-rosario-central-under-armour-tercer-recambio-sponsor-700021360467427-1.jpg',
        title: "Camiseta Rosario Central",
        price: 9000
    },
    {
        id: 2,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-river-adidas-tercer-recambio-roja-100020gh4572001-1.jpg',
        title: "Camiseta River Plate",
        price: 14000
    },
    {
        id: 3,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-boca-adidas-oficial-azul-69851978-100020ga7545001-1.jpg',
        title: "Camiseta Boca Juniors",
        price: 18000
    }
];

const ItemListContainer = (props) => { 
    const [data, setData] = useState([]);

    useEffect (() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(remerasfutbol)
            }, 3000);
        });
        getData.then(res => setData(res))
    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }
    return (
        <>
        <h4>{props.greeting}</h4>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>

        </>
    )
}

export default ItemListContainer;