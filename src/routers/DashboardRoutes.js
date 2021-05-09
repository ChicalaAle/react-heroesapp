import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Redirect } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/NavBar';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (

        <>

        <Navbar />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>

    )
}
