/* 
let productos = [
    {id: "1", categoria: "Sticker", nombre: "Nice Boots", precio: 300, img:"../../imagenProductos/stickers/botas.jpg", descripcion: "medida de 10x10.", stock: 15},
    {id: "2", categoria: "Sticker", nombre: "Your Cat", precio: 300, img:"../../imagenProductos/stickers/dontCareCat.jpg", descripcion: "medida de 10x15.", stock: 15},
    {id: "3", categoria: "Sticker", nombre: "Spray some Love", precio: 300, img:"../../imagenProductos/stickers/spray.jpg", descripcion: "medida de 10x10. Fondo transparente.", stock: 15},
    {id: "4", categoria: "Sticker", nombre: "Call Me", precio: 300, img:"../../imagenProductos/stickers/celu.jpg", descripcion: "medida de 10x15.", stock: 15},
    {id: "5", categoria: "Sticker", nombre: "You Rock!", precio: 300, img:"../../imagenProductos/stickers/rayo.jpg", descripcion: "medida de 10x15. Fondo transparente.", stock: 15},
    {id: "6", categoria: "Cuadro", nombre: "Wine, please", precio: 1000, img:"../../imagenProductos/cuadros/chicaVino.jpg", descripcion: "medida de 30x20. Marco negro de 1cm.", stock: 10},
    {id: "7", categoria: "Cuadro", nombre: "Get Free", precio: 1000, img:"../../imagenProductos/cuadros/doYourThing.jpg", descripcion: "medida de 30x20. Marco blanco de 1cm.", stock: 10},
    {id: "8", categoria: "Cuadro", nombre: "Hot as Hell", precio: 1000, img:"../../imagenProductos/cuadros/hot.jpg", descripcion: "medida de 30x20. Marco rosa de 1cm.", stock: 10},
    {id: "9", categoria: "Cuadro", nombre: "Say Yes!", precio: 1000, img:"../../imagenProductos/cuadros/love.jpg", descripcion: "medida de 50x35. Marco rosa de 1cm.", stock: 10},
    {id: "10", categoria: "Cuadro", nombre: "The Queen", precio: 1000, img:"../../imagenProductos/cuadros/tarot.jpg", descripcion: "medida de 30x20. Marco blanco de 1cm.", stock: 10}
]

export const getFetch = (id) => {

    return new Promise (( resolve, reject) =>{
            setTimeout (()=>{
                if (id){
                resolve (productos.find (producto => producto.id ===id))
                } else {
                resolve (productos)
                }
            },2000)
    })   
} */

