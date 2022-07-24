import Item from "../Item/Item"

const ItemList = ({productos}) => {

    return (
        <div className= "cardContainer">
        {productos?.map(producto =>
            <Item img={producto.img} id={producto.id} categoria={producto.categoria} nombre={producto.nombre} precio={producto.precio} key={producto.id}/>
            )}
        </div>
    )
    }

export default ItemList