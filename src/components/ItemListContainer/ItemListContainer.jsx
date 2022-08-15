import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"

const ItemListContainer = (greeting) => {

    const [products, setProducts] = useState ([])
    const [loading, setLoading] =useState (true)

    const {categoryId} = useParams() 

    useEffect (()=>{
        const db = getFirestore() //brings the data from Firestore
        const queryCollection = collection (db, "productos")
        //If the category is equals to the categoria object in data, it brings only those products
        const queryCollectionFiltered = categoryId ? query (queryCollection, where("categoria","==", categoryId)) : queryCollection
        getDocs(queryCollectionFiltered)
        .then (resp => setProducts(resp.docs.map(prod=>({id: prod.id, ...prod.data()}))))
        .catch (err => console.log (err))
        .finally(()=> setLoading(false)) 
    }, [categoryId])


    return (
        <div>
                <h2>{greeting.subtitle}</h2>

            { loading ? 
                    <Loading />
                    : 
                    <ItemList productos={products} />
                }
        </div>
    )
}

export default ItemListContainer