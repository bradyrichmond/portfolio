import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Landing from '../landing/Landing';
import Navigation from '../navigation/Navigation';
import Portfolio from '../portfolio/Portfolio';
import './home.css';

const Home = () => {
    return (
        <div className='HomeApp'>
            <Router>
                <Navigation />
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <Landing />
                        </Route>
                        <Route path='/portfolio'>
                            <Portfolio />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Home;