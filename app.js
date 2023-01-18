
// constructor para crear productos .
function Product(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// creamos el stock de productos. 
var bombones = new Product(1, " BOMBONES (x10u) ", 4000, 10);
var botellitas = new Product(2, " BOTELLITAS (x10u) ", 4500, 10);
var tabletas = new Product(3, " TABLETAS", 2500, 10);
var edicionEspecial = new Product(1, " EDICION ESPECIAL (x10u) ", 4500, 10);

//creamos un array con os objetos 
const productosDisponibles = [
    bombones,
    botellitas,
    tabletas,
    edicionEspecial,
];

//funcion para mostar productos disponibles 
function nuestrosProductos(arrayproductos) {
    alert("Nuestros productos disponibles son: ");
    arrayproductos.forEach((product) => {
        alert(
            `El producto ${product.name} cuesta $${product.price} y hay disponibles   ${product.quantity}.`
        );
    });
}

nuestrosProductos(productosDisponibles);

//compra 
let cantidadProd = parseInt(
    prompt(
        "Ingrese la cantidad de productos totales que te gustaría adquirir "
    )
);

let productos;
let precioProductos = 0;
let productosFinales = "";

// armado del carrito con los productos y cantidades que compre el cliente
for (let i = 1; i <= cantidadProd; i++) {
    productos = parseInt(
        prompt(`
      Estos son los productos disponibles: 
      1 BOMBONES (x10u) 
      2 BOTELLITAS (x10u) 
      3 TABLETAS
      4 EDICIÓN ESPECIAL  (x10u) 

    Escoge la opcion del 1 al 4 correspondiente al producto que quieres, elige solo una opción. Puedes ir eligiendo el mismo producto pero de a uno por vez! ejemplo si quiero 2 tabletas debo elegir dos veces la opcion 3 `)
    );

    switch (productos) {
        case 1:
            precioProductos += bombones.price;
            nombreProd = "BOMBONES";
            alert(`Agregaste el producto ${nombreProd} a tu carrito,
        `);
            productosFinales += nombreProd + " - ";
            break;

        case 2:
            precioProductos += botellitas.price;
            nombreProd = "BOTELLITAS";
            alert(`Agregaste el producto ${nombreProd} a tu carrito,
        `);
            productosFinales +=  nombreProd + " - ";
            break;

        case 3:
            precioProductos += tabletas.price;
            nombreProd = "TABLETAS";
            alert(`Agregaste el producto ${nombreProd} a tu carrito,
        `);
            productosFinales +=  nombreProd + " - ";
            break;

        case 4:
            precioProductos += edicionEspecial.price;
            nombreProd = "EDICION ESPECIAL";
            alert(`Agregaste el producto ${nombreProd} a tu carrito,
        `);
            productosFinales +=  nombreProd + " :D ";
            break;

        default:
            alert("Elegí tu producto");
            break;
    }
}

// alerta con informacion final para el cliente 
alert("El costo total de tu compra es de " + "$" + precioProductos + " por los siguientes productos " + productosFinales);
