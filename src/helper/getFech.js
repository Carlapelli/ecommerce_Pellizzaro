let productos = [
    {id: 1, categoría: "Sticker", nombre: "Nice Boots", precio: 300, img:"../imagenes/stickers/botas.jpg"},
    {id: 2, categoría: "Sticker", nombre: "Your Cat", precio: 300, img:"../imagenes/stickers/dontCareCat.jpg"},
    {id: 3, categoría: "Sticker", nombre: "Spray some Love", precio: 300, img:"../imagenes/stickers/dontCareCat.jpg"},
    {id: 4, categoría: "Cuadro", nombre: "Wine, please", precio: 1000, img:"../imagenes/cuadros/chicaVino.jpg"},
    {id: 5, categoría: "Cuadro", nombre: "Get Free", precio: 1000, img:"../imagenes/cuadros/doYourThing.jpg"},
    {id: 6, categoría: "Cuadro", nombre: "Hot as Hell", precio: 1000, img:"../imagenes/cuadros/hot.jpg"}
]

export const getFetch = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve (productos)
        },2000)
    })
}

