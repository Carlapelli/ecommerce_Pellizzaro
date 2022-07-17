
let productos = [
    {id: 1, categoria: "Sticker", nombre: "Nice Boots", precio: 300, img:"../../imagenProductos/stickers/botas.jpg"},
    {id: 2, categoria: "Sticker", nombre: "Your Cat", precio: 300, img:"../../imagenProductos/stickers/dontCareCat.jpg"},
    {id: 3, categoria: "Sticker", nombre: "Spray some Love", precio: 300, img:"../../imagenProductos/stickers/spray.jpg"},
    {id: 4, categoria: "Cuadro", nombre: "Wine, please", precio: 1000, img:"../../imagenProductos/cuadros/chicaVino.jpg"},
    {id: 5, categoria: "Cuadro", nombre: "Get Free", precio: 1000, img:"../../imagenProductos/cuadros/doYourThing.jpg"},
    {id: 6, categoria: "Cuadro", nombre: "Hot as Hell", precio: 1000, img:"../../imagenProductos/cuadros/hot.jpg"}
]

export const getFetch = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve (productos)
        },2000)
    })
}

