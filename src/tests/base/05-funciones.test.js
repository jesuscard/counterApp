import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo} from '../../base/05-funciones'


describe('Pruebas en 05-funciones.js', ()=>{

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)


    })

    //getUsuarioActico debe comparar 2 objeto y que se le pase un nombre por parametro
    test('getUsuarioActico debe comparar 2 objeto y que se le pase un nombre por parametro', () => {

        const userTest = {
            uid: 'ABC567',
            username: 'Chubet1985'
        }
        const nombre = 'Chubet1985';
        const usuarioActivo = getUsuarioActivo(nombre)
        expect(usuarioActivo).toEqual(userTest)


    })
    
    
})