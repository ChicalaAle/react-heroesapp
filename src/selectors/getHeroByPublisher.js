import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) =>{

    const valid_publishers = ['DC Comics', 'Marvel Comics'];

    if( !valid_publishers.includes( publisher ) ){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher );

}