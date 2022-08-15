import {useParams} from "react-router-dom"
import { useEffect, useState} from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {

    const [products, setProducts] = useState ({})
    const [loading, setLoading] =useState (true)

    const {id} = useParams()

    useEffect (()=>{
        const db = getFirestore() // gets data from Firestore
        const queryProduct = doc(db,"productos", id) //get the ID of the product
        getDoc(queryProduct) //provides info of the product from the firestore doc
        .then (resp => setProducts({id: resp.id, ...resp.data()}))
        .catch (err => console.log (err))
        .finally(()=> setLoading(false)) 
    }, [])

    return (
        <div className="itemDetailContainer">
            { loading ? 
            <Loading />
                    : 
            <ItemDetail product={products}/>
            }
        </div>
    )
}

export default ItemDetailContainer