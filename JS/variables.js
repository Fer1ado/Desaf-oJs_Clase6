
const catalogo = document.querySelector("#disProd")
const carrito = document.querySelector("#VentProd")
const Nprod = document.querySelector("#NProd")
const PrecioFinal = document.querySelector("#PrecioFinal")
const contador1 =  document.getElementById("contador1")
const contador2 =  document.getElementById("contador2")




class PiezasOfrecidas {
    constructor(id, nombre, stock, importe, descripcion, imagen) {
        this.id = id
        this.nombre = nombre.toUpperCase()
        this. stock = stock
        this.importe = importe
        this.descripcion = descripcion
        this.imagen = imagen
    }
}

class Venta{
    constructor(nom, dir, prod, cant, mail, id){
    this.nom = nom.toLowerCase()
    this.dir = dir.toLowerCase()
    this.prod = prod
    this.cant = cant
    this.mail = mail.toLowerCase()
    this.id = id
}
}



const ventasRealizdas= []

const piezasEnstock = []

const carroVentas = []

const stockActualizado = []




// SIMIL BASE DE DATOS PARA STOCK DE PRODUCTOS ///

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
        else{
            console.log("Registro estable actualizado")
        }
    
    let registro = JSON.parse(localStorage.getItem("stockDisponible"))
    registro.forEach(item => {piezasEnstock.push(item)
    }); 
}


function crearID() {
    return parseInt(Math.random() * 1000)
}

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










