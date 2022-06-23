///PRINCIPIO DE CODIGO IMPLEMENTADO EN HTML DE ADMINISTRACION ///

function GeneradorAutomatico(){
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Base de Maceta", 45, 1200, "estas bases de maceta únicas son especiales para tu jardín", "../ASSETS/FOTOS_CATALOGO/item1-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "platos playos", 30, 2200, "Este juego de platos es el ideal para destacar tus comidas", "../ASSETS/FOTOS_CATALOGO/item10-min.JPG"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Platos de Postre", 80, 800, "Nuestros platos de postre son pequeños y versátiles", "../ASSETS/FOTOS_CATALOGO/item11-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Plato de Gres", 100, 1400, "Los platos de Gres son especiales por su dureza y esmaltado distintivo", "../ASSETS/FOTOS_CATALOGO/item12-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Plato de Gres", 25, 1500, "Los platos de Gres son especiales por su dureza y esmaltado distintivo", "../ASSETS/FOTOS_CATALOGO/item13-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Tazas de te chino", 24, 900, "Las tasas de te chinas tienen un trabajo especial de esmalte para bebidas calientes", "../ASSETS/FOTOS_CATALOGO/item2-min.JPG" ))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Cuencos de Terracota", 75, 1800, "Los cuencos de la tierra son los indicados para organizar tus cosas", "../ASSETS/FOTOS_CATALOGO/item4-min.jpg"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Cuencos de Rio", 35, 2000, "Los cuencos del rio estan especialmente preparados para líquidos fermentados", "../ASSETS/FOTOS_CATALOGO/item5-min.jpg"))
    piezasEnstock.push(new PiezasOfrecidas(crearID(), "Juego de mesa", 18, 3600, "los juegos de terracota vienen genial para el uso diario en la casa", "../ASSETS/FOTOS_CATALOGO/item9-min.JPG" ))
    
}

function crearID() {
    return parseInt(Math.random() * 1000)
}



let a;
function mostrarOcultar () {
    if(a===1){
        document.getElementById("formCargaProd").style.display="none"
        return a=0
    }
    else{
        document.getElementById("formCargaProd").style.display="inline"
        return a=1
    }
}


function cargarProducto(){
    let nombreProd = document.getElementById("form_name").value
    let precioProd = document.getElementById("form_price").value
    let stockProd = document.querySelector("#form_stock").value
    let imgProducto = "/ASSETS/FOTOS_CATALOGO/placeholder.png"
    let descriProd = document.getElementById("form_description").value
    piezasEnstock.push(new PiezasOfrecidas(crearID(), nombreProd, stockProd, precioProd,descriProd,imgProducto))
    let str = JSON.stringify(piezasEnstock)
            localStorage.setItem("stockDisponible", str)
            alert("producto agregado!")

}

registroEstable ()

function registroEstable (){
     let ejecutaUnaVez = localStorage.getItem("chequeo");
        if (ejecutaUnaVez!=="true"){
            localStorage.removeItem("chequeo")
            localStorage.setItem("chequeo", true)
            GeneradorAutomatico()
            let str = JSON.stringify(piezasEnstock)
            localStorage.setItem("stockDisponible", str)
        }
        if(ejecutaUnaVez==="true"){
            console.log("OK")
        }
    
    let registro = JSON.parse(localStorage.getItem("stockDisponible"))
    registro.forEach(item => {piezasEnstock.push(item)
    }); 
}

/// FIN DE CODIGO IMPLEMENTADO EN HTML DE ADMINISTRACION ///

// INICIO DE INICIO DE CODIGO IMPLEMENTADO EN HTML DE CATALOGO ///

mostrarCatalogo()

function mostrarCatalogo(){
    piezasEnstock.forEach(tarj =>{
        let div = document.createElement("div")
        div.className = "tarjeta"
        div.innerHTML = `<div class="card my-3 mx-2" style="width: 18rem;  box-shadow:3px 3px 20px rgba(0, 0, 0, 0.4);">
                            <img src="${tarj.imagen}" class="card-img-top" alt="..."/>
                                <div class="card-body d-flex flex-column align-items-center">
                                    <h5 class="card-title">${tarj.nombre}</h5>
                                    <p class="card-text text-center" style="height: 60px;"> ${tarj.descripcion} </p>
                                    <h6 class="card-title txtvioleta">$ ${tarj.importe}</h6>
                                    <p>stock: ${tarj.stock} unidades </p>
                                    <a id="btnAgr${tarj.id}" class="btn btn-primary text-white">Agregar al Carrito</a>
                                </div>
                        </div>`
        catalogo.appendChild(div)

let sumaCarro = document.getElementById(`btnAgr${tarj.id}`)
sumaCarro.addEventListener("click", ()=>{cargarCarro(tarj.id)}) //FALTA COMPLETAR EL AJUSTE DE STOCK
})
}

function cargarCarro(id){
    let agregarProducto = piezasEnstock.find(prod=> prod.id === id)
    carroVentas.push(agregarProducto)
        let str = JSON.stringify(carroVentas)
        localStorage.setItem("DatosVentas", str)
        console.log("Producto Agregado!") 
        actualizarNro()      
}

actualizarNro()

function actualizarNro(){
    let funcionaMierda = JSON.parse(localStorage.getItem("DatosVentas"));
        contador1.innerHTML = `${funcionaMierda.length}`
}


//FIN DE CODIGO IMPLEMENTADO EN HTML DE CATALOGO ///



//INICIO DE CODIGO IMPLEMENTADO EN HTML DE CARRO DE COMPRAS ///


function generarCarrito() {
    let carroVentas = JSON.parse(localStorage.getItem("DatosVentas"));
    contador1.innertext = carroVentas.lenght
carroVentas.forEach((tarj) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="card my-3 mx-2" style="width: 18rem;  box-shadow:3px 3px 20px rgba(0, 0, 0, 0.4);">
                        <img src="${tarj.imagen}" class="card-img-top" alt="..."/>
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title">${tarj.nombre}</h5>
                                    <p class="card-text text-center">${tarj.descripcion}</p>
                                <h6 class="card-title txtvioleta">$ ${tarj.importe}</h6>
                                    <p>Cantidad de unidades: (esto queda por implementar) </p>
                            <a class="btn btn-warning"><i class="fa-solid fa-trash-can"></i></a>
                            </div>
                    </div>`;
    carrito.appendChild(div);
    
});

}

//FIN DE CODIGO IMPLEMENTADO EN HTML DE CARRO DE COMPRAS ///


// INICIO CODIGO AL QUE LE FALTA IMPLEMENTACION HTML //
function buscarProducto (){
    let nom = prompt("ingrese parte del nombre de las piezas a buscar:")
    let resultado = piezasEnstock.filter(p => p.nombre.includes(nom.toUpperCase()))
    console.log("Encontramos los siguientes productos:")
    console.table(resultado)
}


function listarProductos(){
    for(let lista of piezasEnstock){
    console.table(lista)
}
}

function borrarProducto(){
    console.table(piezasEnstock)
    let cod = parseInt(prompt ("ingrese el ID del producto que desea borrar:"))
    let existe = piezasEnstock.some(p=> p.id === cod)

    if (existe){
        let index = piezasEnstock.findIndex((i)=>i.id === cod)
            piezasEnstock.splice(index,1)
            console.clear()
            console.table(piezasEnstock)
            console.warn("el producto con id " + cod + " ha sido borrado")
        
    } else {
        console.error("No se encontro el código ingresado")
    }
}

function listarVentas() {
    console.table(ventasRealizdas);
}


// FIN CODIGO AL QUE LE FALTA IMPLEMENTACION HTML //