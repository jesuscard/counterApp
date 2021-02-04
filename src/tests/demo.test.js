
describe('Preubas en el archivo demo.test.js',() =>{
    test('deben ser iguales los string', () => {

        //1 inicialiación
        const mensaje = 'Hola Mundo';

        //2. estimulo
        const mensaje2 = `Hola Mundo`;

        //3. Observación del comportamiento

        expect( mensaje ).toBe( mensaje2)
    })
})


