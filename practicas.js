
class Entrada{
    constructor(){
        this.nombre= prompt("ingrese el nombre del evento:\n 1.Vintage Culture \n 2.KAS:ST \n 3.Nick Warren \n 4.Nacho Bolognani \n 5. MARSH \n 6.Giorgia Angiuli & Layton Giordani")
        this.precio= parseInt(prompt("Ingrese el costo del producto:\n 1.$4350 \n 2.$4700 \n 3.$6000 \n 4.$1800 \n 5.$2700 \n 6.$4200"))
    }
}
const arrayDeEntradas= []
let seguirComprando= true
while(seguirComprando){
    let entradaSeleccionada= new Entrada()
    arrayDeEntradas.push(entradaSeleccionada)

    let finalizarCompra= parseInt(prompt("Ingrese 0 para seguir comprando, ingrese 1 para finalizar"))
    if(finalizarCompra === 1){
        seguirComprando= false
    }
}

function mostrarTotal(){
    let precioTotal= 0
    for (Entrada of arrayDeEntradas){
        precioTotal= precioTotal + Entrada.precio
    }
    return precioTotal
}

alert(mostrarTotal())

