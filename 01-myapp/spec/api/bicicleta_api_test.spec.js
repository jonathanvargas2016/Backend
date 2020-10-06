var Bicicleta = require('../../models/bicicleta');
var request = require('request')
var server = require('../../bin/www') // para ejecutar el servidor al momento del test

beforeEach(()=>{
    console.log('testeando…')
})

describe('Bicicleta API',()=>{
    describe('GET Bicicletas /',()=>{
        it('Status 200', function () {
            expect(Bicicleta.allBicis.length).toBe(0);

            var bicia = new Bicicleta(1,'rojo','urbana',[-0.282259, -78.558960]);
            Bicicleta.add(bicia)

            request.get('http://localhost:3000/api/bicicletas',function (error, response, body) {
                expect(response.statusCode).toBe(200);
            })//ejecutar un get

        });
    })

    describe('POST Bicicletas /create',()=>{
        it('STATUS 200', (done) =>{
            var headers = {'content-type':'application/json'}
            var bicia = {
                "id":1,
                "color":"rojo",
                "modelo":"urbana",
                "lat":"-0.282259",
                "lng":"-78.558960"
            }

            request.post({
                headers:headers,
                url:'http://localhost:3000/api/bicicletas/create',
                body:JSON.stringify(bicia)
            },function (error,response,body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(1).color).toBe('rojo');
                done();
            })
        });
    })
})

