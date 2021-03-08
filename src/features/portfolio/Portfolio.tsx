import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Notes from './examples/notes/Notes';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <Route exact path="/portfolio">
                Portfolio landing
            </Route>
            <Route path="/portfolio/notes">
                <Notes />
            </Route>
        </div>
    )
};

export default Portfolio;