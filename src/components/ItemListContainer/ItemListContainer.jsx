import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"

const ItemListContainer = (greeting) => {

    const [products, setProducts] = useState ([])
    const [loading, setLoading] =useState (true)

    const {categoriaId} = useParams() 

    useEffect (()=>{
        if (categoriaId){
        const db = getFirestore()
        const queryCollection = collection (db, "productos")
        const queryFiltrada = query (queryCollection, where("categoria","==", categoriaId)) //where filtra, 3 parametros
        getDocs(queryFiltrada)
        .then (resp => setProducts(resp.docs.map(prod=>({id: prod.id, ...prod.data()}))))
        .catch (err => console.log (err))
        .finally(()=> setLoading(false)) 
    }else{
        const db= getFirestore()
        const queryCollection = collection(db, "productos") //llama a una coleccion, 2 parametros
        getDocs(queryCollection)
        .then (resp => setProducts(resp.docs.map(prod=>({id: prod.id, ...prod.data()}))))
        .catch (err => console.log (err))
        .finally(()=> setLoading(false)) 
    } 
    }, [categoriaId])

/*     useEffect (()=> {
        if (categoriaId) {
        getFetch ()
            .then (respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId)))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false)) 
        } else {
        getFetch ()
            .then (respuesta => setProductos(respuesta))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false)) 
        }        
    }, [categoriaId]) */

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