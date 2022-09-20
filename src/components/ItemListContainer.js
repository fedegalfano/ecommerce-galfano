import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { firestoreFetch } from '../utils/firebaseConfig';

const ItemListContainer = (props) => { 
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect (() => {
        firestoreFetch(categoriaId)
        .then(result => setData(result))
    }, [data]);

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }
    return (
        <>
        <h4>{props.greeting}</h4>
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;