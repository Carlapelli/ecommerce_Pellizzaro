import Item from "../Item/Item"

const ItemList = ({productos}) => {

    return (
        <div className= "cardContainer">
        {productos?.map(product =>
            <Item img={product.img} id={product.id} category={product.categoria} name={product.nombre} price={product.precio} key={product.id}/>
            )}
        </div>
    )
    }

export default ItemList