import { heroes, type Hero, Owner } from '../data/heroes.data';


const getHeroById = (id: number) : Hero|undefined => {
    const hero = heroes.find( hero => hero.id === id );

    //if ( !hero ) throw new Error(`Hero with id ${ id } not found`);

    return hero;
}

const batman = getHeroById(2);
console.log({ batman });

// const hero = getHeroById(100);
// console.log({ hero });

const getHeroesByOwner = ( owner: 'DC' | 'Marvel' ) : Hero[] => {
    return heroes.filter( hero => hero.owner === owner );
}

const heroesDC = getHeroesByOwner(Owner.DC);
console.log({ heroesDC });

const heroesMarvel = getHeroesByOwner(Owner.Marvel);
console.log({ heroesMarvel });