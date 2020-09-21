

let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color
    this.modelo = modelo
    this.ubicacion = ubicacion
}

Bicicleta.prototype.toString = function () {

    return {
        'id':this.id,
        'color':this.color
    }
}
Bicicleta.allBicis = []
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById=function (biciID) {
    var abici = Bicicleta.allBicis.find(x=>x.id ==biciID);
    if(abici){
        return abici
    }else{
        throw new Error(`No existe una bicicleta con el id ${biciID}`)
    }
}

Bicicleta.removeById = function (aBiciId) {

    const index = Bicicleta.allBicis.findIndex((valorActual, index)=>{
        return Number(valorActual.id) === Number(aBiciId)
    })
    console.log(index)

    Bicicleta.allBicis.splice(index,1)


}

var bicia = new Bicicleta(1,'rojo','urbana',[-34.6012424,-58.3861497]);
var bicib = new Bicicleta(2,'blanca','urbana',[-34.596932,-58.3808287]);

Bicicleta.add(bicia);
Bicicleta.add(bicib);

module.exports = Bicicleta