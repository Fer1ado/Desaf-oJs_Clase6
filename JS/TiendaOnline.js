


mostrarCatalogo()

function mostrarCatalogo(){
    piezasEnstock.forEach(tarj =>{
        let div = document.createElement("div")
        div.className = "tarjeta"
        div.innerHTML = `<div class="card my-3 mx-2 rounded" style="width: 18rem;  box-shadow:3px 3px 20px rgba(0, 0, 0, 0.4);">
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
        actualizarNro()
        alert("Producto Agregado!")    
}


actualizarNro()

function actualizarNro(){
    let funcionaMierda = JSON.parse(localStorage.getItem("DatosVentas"));
    if(funcionaMierda===null) {
        contador1.innerText="0"
    }else{contador1.innerText = `${funcionaMierda?.length}`}
}



