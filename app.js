// se crea el objeto del producto
function producto(imagen, titulo, precio, cantidad) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.precio = precio;
    this.cantidad = cantidad;
}


// se crean las variables a utilizar

let btnCarrito = document.querySelector(".container_icono_carrito");
let cerrado = true;
let productos = [];
let containerProductos = document.querySelector(".containerProductos");
let containerCarrito = document.querySelector(".containercarrito");
let vacio = document.querySelector(".vacio")
let carritoContenido = [];
let containerTotal = document.querySelector(".containerTotal")
const bodyStyle = document.querySelector("body");
let contadorCarrito = document.querySelector(".contadorCarrito")
let precioActualizado = 0

// estilos
containerTotal.style.display = "none";
bodyStyle.classList.add("transition-background");




// se crean funciones
function agregarProducto(a) {
    productos.push(a);
}

function crearProductoHTML(a){
    let containerProductos = document.querySelector(".containerProductos");
    containerProductos.innerHTML = ""


    let largoProductos = a.length;

for (let i = 0; i < largoProductos; i++) {
    
    let productoss = document.createElement("div")
    let imagen = document.createElement("div")
    let img = document.createElement("img")
    let titlo = document.createElement("h1")
    let precios = document.createElement("p")
    let btn = document.createElement("button")
        

    imagen.classList.add("imagen")
    btn.classList.add("comprar")
    btn.setAttribute("data-id", i)
    productoss.classList.add("productos")

    img.src = a[i].imagen
    titlo.textContent = a[i].titulo
    precios.textContent = "$" + a[i].precio
    btn.textContent = "Añadir al Carrito"


    imagen.appendChild(img)

    productoss.appendChild(imagen)
    productoss.appendChild(titlo)
    productoss.appendChild(precios)
    productoss.appendChild(btn)

    containerProductos.appendChild(productoss)



}





}




function crearProductoCarrito(a) {

    let elementos = document.createElement("div");
    let contenidoElemento = document.createElement("div");
    let img = document.createElement("img");
    let precio = document.createElement("p");
    let cantidad = document.createElement("p");

    elementos.classList.add("elementocarrito");
    contenidoElemento.classList.add("contenidoElemento");
    precio.classList.add("Precio");
    cantidad.classList.add("Cantidad");

    img.src = a.imagen;
    precio.textContent = "$" + a.precio;
    cantidad.textContent = "x" + a.cantidad;

    contenidoElemento.appendChild(img);
    contenidoElemento.appendChild(precio);
    contenidoElemento.appendChild(cantidad);


    elementos.appendChild(contenidoElemento);

    containerCarrito.appendChild(elementos);

    console.log("Producto agregado al carrito");





}


function actualizarAltura(){

    let alturaCarrito = containerCarrito.clientHeight
    console.log(alturaCarrito)
    let alturaTotal = 81
    alturaTotal += alturaCarrito

    containerTotal.style.top = alturaTotal + "px"
    console.log(alturaTotal)


}



function agregarListenersAComprar() {
    let btnComprar = document.querySelectorAll(".comprar");

    btnComprar.forEach(function (btnComprar) {
        btnComprar.addEventListener("click", function (event) {
            const indiceProducto = event.target.getAttribute("data-id");
            const producto = productos[indiceProducto];

            let estaEnCarrito = carritoContenido.some((item) => item.titulo === producto.titulo);

            if (estaEnCarrito) {
                containerCarrito.innerHTML = "";
                producto.cantidad += 1;
                producto.precio = producto.cantidad * producto.precio;

                for (let i = 0; i < carritoContenido.length; i++) {
                    crearProductoCarrito(carritoContenido[i]);
                }
            } else {
                vacio.style.display = "none";
                carritoContenido.push(producto);
                crearProductoCarrito(producto);
                actualizarAltura();
            }
        });
    });
}


function contadorC() {
    let contador = document.querySelector(".contadorCarrito");
    contador.style.display = "flex"

    let contadorValor = parseInt(contador.textContent, 10);
    contadorValor += 1;
    contador.textContent = contadorValor.toString();
}


function actualizarTotal(a){
    let detalles = document.querySelector(".detalles");
    let spanTotal = detalles.querySelector("span");

    precioActualizado += a;
    spanTotal.textContent = "$" + precioActualizado;
}














vacio.style.display = "block"

// se crean los productos

let carne = new producto("https://media.gq.com.mx/photos/620bcf7243f71a078a355280/16:9/w_2560%2Cc_limit/carnes-85650597.jpg", "carne", 1300, 1);
agregarProducto(carne);

let milanesa = new producto("https://arjosimarprod.vteximg.com.br/arquivos/ids/155753-1000-1000/milanesa-pollo-frita-kg-1-7113.jpg?v=637378633665430000", "milanesa", 800, 1)
agregarProducto(milanesa)

let milanesaPollo = new producto("https://tumilanesa.com.ar/wp-content/uploads/2023/04/milanesas-pollo.jpg","milanesa de pollo",700,1)
agregarProducto(milanesaPollo)

let milanesaBerenjena = new producto("https://www.recetasnestle.com.ar/sites/default/files/srh_recipes/d3bf498bbf36b70dc972378036b5ce48.jpg","milanesa de berenjena",4200,1)
agregarProducto(milanesaBerenjena)

let pollo = new producto("https://resizer.glanacion.com/resizer/v2/pollo-al-horno-con-55UMVDSNXFEOFBW7XKPSAA3ZPE.jpg?auth=5199f7af2e5c05249b7d40a8096af95b6fd63b7da205a8553aeba1b07baa2772&width=768&height=512&quality=70&smart=true","pollo",2000,1)
agregarProducto(pollo)


crearProductoHTML(productos)




let btnComprar = document.querySelectorAll(".comprar");


btnComprar.forEach(function (btnComprar) {
    btnComprar.addEventListener("click", function (event) {
        const indiceProducto = event.target.getAttribute("data-id");
        const producto = productos[indiceProducto];
        console.log(indiceProducto)

        let estaEnCarrito = carritoContenido.some((item) => item.titulo === producto.titulo);

        if (estaEnCarrito) {
            containerCarrito.innerHTML = ""
            producto.cantidad += 1
            producto.precio += producto.precio
            contadorC()
            actualizarTotal(producto.precio)
            



            for (let i = 0; i < carritoContenido.length; i++) {

                crearProductoCarrito(carritoContenido[i])



            }
        } else {
            vacio.style.display = "none"
            carritoContenido.push(producto);

            crearProductoCarrito(producto)
            actualizarAltura()
            contadorC()
            actualizarTotal(producto.precio)
            
            
        }
    });
});





btnCarrito.addEventListener("click", function () {

    if (cerrado) {
        containerCarrito.style.display = "flex";
        containerTotal.style.display = "flex"
        cerrado = false;
        bodyStyle.style.backgroundColor = "rgb(200, 200, 200)"
        actualizarAltura()
        
    } else {
        containerCarrito.style.display = "none";
        containerTotal.style.display = "none"
        bodyStyle.style.backgroundColor = "rgb(255, 255, 255)"
        cerrado = true;
        actualizarAltura()
    }
});

actualizarAltura()




