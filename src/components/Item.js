import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({info}) => {
    
    return (
        <Link to={`/detalle/${info.id}`} className="camiseta">
            <img src={info.image} alt="rosariocentral"/>
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;