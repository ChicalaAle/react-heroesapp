import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);    

    const [values, setValues] = useForm({
        searchText: q
    });

    const {searchText} = values;

    const heroesFilter = useMemo(() => getHeroesByName(searchText), [q]) ;

    const handleSearch = (e) => {
        e.preventDefault();
        
        history.push(`?q=${searchText}`);

    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>

                    <form onSubmit={handleSearch} >
                        <input type="text" placeholder="Find your hero" name="searchText" value={searchText} onChange={setValues} className="form-control" />
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">Search...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>

                {
                    (q.trim() === '') &&

                        <div className="alert alert-info">
                            Search a hero
                        </div>
                }

                {
                    (q.trim() !== '' && heroesFilter.length < 1) && 
                        <div className="alert alert-danger">
                            There's not a hero with "{q}"
                        </div>
                }
                   

                    {
                        heroesFilter.map( hero => (
                            <HeroCard
                            key={hero.id}
                            {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
