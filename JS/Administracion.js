


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
    let imgProducto = "../ASSETS/FOTOS_CATALOGO/placeholder.png"
    let descriProd = document.getElementById("form_description").value
    piezasEnstock.push(new PiezasOfrecidas(crearID(), nombreProd, stockProd, precioProd,descriProd,imgProducto))
    let str = JSON.stringify(piezasEnstock)
            localStorage.setItem("stockDisponible", str)
            Swal.fire({
                title: "Producto Agregado!",
                icon: 'success',
                confirmButtonText: 'Continuar'
                })
}




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