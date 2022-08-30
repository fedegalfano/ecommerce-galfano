const Item = ({info}) => {
    return (
        <>
        <a href="" className="camiseta">
            <img src={info.image} alt="rosariocentral"></img>
            <p>{info.title}</p>
        </a>
        </>
    );
}

export default Item;