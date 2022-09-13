import React, {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

const camiseta = [
    {
        id: 1,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/camiseta-de-rosario-central-under-armour-tercer-recambio-sponsor-700021360467427-1.jpg',
        title: "Camiseta Rosario Central",
        price: 9000,
        category: 'argentina',
    },
    {
        id: 2,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-river-adidas-tercer-recambio-roja-100020gh4572001-1.jpg',
        title: "Camiseta River Plate",
        price: 14000,
        category: 'argentina'
    },
    {
        id: 3,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-boca-adidas-oficial-azul-69851978-100020ga7545001-1.jpg',
        title: "Camiseta Boca Juniors",
        price: 18000,
        category: 'argentina'
    },
    {
        id: 4,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-ajax-adidas-oficial-blanca-100020h58243001-1.jpg',
        title: "Camiseta Ajax",
        price: 17000,
        category: 'europa'
    },
    {
        id: 5,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-juventus-adidas-oficial-blanca-47902842-100020h38907001-1.jpg',
        title: "Camiseta Juventus",
        price: 17000,
        category: 'europa'
    },
    {
        id: 6,
        image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-manchester-city-puma-oficial-celeste-30096276-640020759202001-1.jpg',
        title: "Camiseta Manchester City",
        price: 16500,
        category: 'europa'
    }
];

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(camiseta);
            }, 2000);
        });
        getData.then(res => setData(res.find(argentina => argentina.id === parseInt(detalleId))));
    }, [detalleId])

    return (
        <>
        <ItemDetail data={data}/>
        </>
    )
}

export default ItemDetailContainer;