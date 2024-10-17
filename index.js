let producto = "Remera Alternativa"

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

const productos = ["Remera Titular", "Remera Suplente", "Remera Alternativa"];

for(let i = 0; i < productos.length ; i++) {
    console.log(`producto ${i+1} : ${productos[i]}`)
}

console.log("Se vendió el ultimo producto");
let productoEliminado = productos.pop();

for(let i = 0; i < productos.length ; i++){
    console.log(`producto ${i + 1} : ${productos[i]}`)
}
console.log(`El Producto Eliminado Fue: ${productoEliminado}`)
