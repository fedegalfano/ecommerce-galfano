import React, {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';

const casaca = {id: 1, image: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/camiseta-de-rosario-central-under-armour-tercer-recambio-sponsor-700021360467427-1.jpg', title: "Camiseta Rosario Central", description: "La Camiseta alternativa Under Armour de Club Atlético Rosario Central, rinde homenaje a los caídos y los héroes veteranos de la Guerra de Malvinas.", price: 9000};

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(casaca);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
        <>
        <ItemDetail data={data}/>
        </>
    )
}

export default ItemDetailContainer;