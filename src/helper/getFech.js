
let productos = [
    {id: 1, categoria: "Sticker", nombre: "Nice Boots", precio: 300, img:"../../imagenProductos/stickers/botas.jpg"},
    {id: 2, categoria: "Sticker", nombre: "Your Cat", precio: 300, img:"../../imagenProductos/stickers/dontCareCat.jpg"},
    {id: 3, categoria: "Sticker", nombre: "Spray some Love", precio: 300, img:"../../imagenProductos/stickers/spray.jpg"},
    {id: 4, categoria: "Sticker", nombre: "Call Me", precio: 300, img:"../../imagenProductos/stickers/celu.jpg"},
    {id: 5, categoria: "Sticker", nombre: "You Rock!", precio: 300, img:"../../imagenProductos/stickers/rayo.jpg"},
    {id: 6, categoria: "Cuadro", nombre: "Wine, please", precio: 1000, img:"../../imagenProductos/cuadros/chicaVino.jpg"},
    {id: 6, categoria: "Cuadro", nombre: "Get Free", precio: 1000, img:"../../imagenProductos/cuadros/doYourThing.jpg"},
    {id: 8, categoria: "Cuadro", nombre: "Hot as Hell", precio: 1000, img:"../../imagenProductos/cuadros/hot.jpg"},
    {id: 9, categoria: "Cuadro", nombre: "Say Yes!", precio: 1000, img:"../../imagenProductos/cuadros/love.jpg"},
    {id: 10, categoria: "Cuadro", nombre: "The Queen", precio: 1000, img:"../../imagenProductos/cuadros/tarot.jpg"}
]

export const getFetch = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve (productos)
        },2000)
    })
}

