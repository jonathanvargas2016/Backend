var Bicicleta = require('../../models/bicicleta')

beforeEach(()=>{
    Bicicleta.allBicis = []
    expect(Bicicleta.allBicis.length).toBe(0);
})


describe('Bicicleta.allBicis',()=>{
    it('comienza vacia', function () {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
})


describe('Bicicleta.add',()=>{
    it('agregamos una', function () {
        expect(Bicicleta.allBicis.length).toBe(0);

        var bicia = new Bicicleta(1,'rojo','urbana',[-0.282259, -78.558960]);
        Bicicleta.add(bicia)

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(bicia);

    });
})


describe('Bicicleta.findById',()=>{
    it('debe devolver la bici con id 1', function () {

        expect(Bicicleta.allBicis.length).toBe(0);
        var bicia = new Bicicleta(1,'rojo','urbana',[-0.282259, -78.558960]);
        var bicib = new Bicicleta(2,'blanca','montana',[-0.282421, -78.559289]);

        Bicicleta.add(bicia)
        Bicicleta.add(bicib)

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(bicia.color)
        expect(targetBici.modelo).toBe(bicia.modelo)


    });
})
