let producto = "remera de boca"

let precio = 25300

let cantidad = prompt("cantidad deseada a comprar")

let operacion = parseInt(cantidad)*precio

alert("Compra Realizada Exitosamente")
console.log(producto,precio,cantidad)
console.log(operacion)
alert("total:"+operacion)

function DescuentoDiezPorciento (precio, cantidad) {
    let  total = precio * cantidad;
    if (cantidad >= 5) {
        let descuento = total * 0.10;
        total -= descuento; 
    }

    return total;
}

let totalcondescuento = DescuentoDiezPorciento(precio, cantidad);

console.log("Total a Pagar: $" + totalcondescuento)
alert("Total A Pagar:$" + totalcondescuento);