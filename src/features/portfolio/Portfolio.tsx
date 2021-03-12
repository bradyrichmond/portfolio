import React, { lazy } from 'react';
import { Route } from "react-router-dom";
import './portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <Route exact path="/portfolio">
                Portfolio landing
            </Route>
        </div>
    )
};

export default Portfolio;