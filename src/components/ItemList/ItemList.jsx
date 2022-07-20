import Item from "../Item/Item"

const ItemList = ({productos}) => {

    return (
        <div className= "cardContainer">
        {productos?.map(producto =>
            <Item img={producto.img} key={producto.id} categoria={producto.categoria} nombre={producto.nombre} precio={producto.precio}/>
            )}
        </div>
    )
    }

export default ItemList