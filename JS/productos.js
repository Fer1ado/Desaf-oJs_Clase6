



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

