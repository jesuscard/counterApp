import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de heroes', ()=>{
    
    test('Debe retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find( h => h.id === id)

        expect(heroe).toEqual(heroeData)

    })

    //Tarea
    //debe retornar un arreglo con los héroes de DC
    //toEqual
    test('Debe retornar undefined si no encuentra un héroe', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner)
        
        const heroesData = heroes.filter( h => h.owner === owner)

        expect(heroesDC).toEqual( heroesData )
        
    })

    //Debe retornar un arreglo con los héroes de Marvel
    //length = 2 //toBe
    
    test('Debe retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
       
        const heroesDC = getHeroesByOwner(owner)
        
        const heroesData = heroes.filter( h => h.owner === owner)
        
        expect(heroesDC).toEqual(heroesData)
        
    })
    

    test('Debe retornar un arreglo con los héroes de DC', () => {

        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner)
        
        expect(heroesMarvel.length).toBe( 2 )
        
    })
})