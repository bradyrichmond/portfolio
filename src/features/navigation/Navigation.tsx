import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillHome, AiFillLayout } from "react-icons/ai";

const Home = () => {
    return (
        <div className='navigation'>
            <nav>
                <Link to="/">
                    <span style={{flex: 1}}>
                        <AiFillHome style={{color: 'rgb(20, 33, 61)', marginRight: '1rem'}}/>
                    </span>
                    <span className='navText'>Home</span>
                </Link>
                <Link to="/notes">
                    <span style={{flex: 1}}>
                        <AiFillLayout style={{color: 'rgb(20, 33, 61)', marginRight: '1rem'}}/>
                    </span>
                    <span className='navText'>Portfolio</span>
                </Link>
                <a href="https://www.linkedin.com/in/bradyrichmond/">
                    <span style={{flex: 1}}>
                        <AiFillLinkedin style={{color: 'rgb(20, 33, 61)', marginRight: '1rem'}}/>
                    </span>
                    <span className='navText'>LinkedIn</span>
                </a>
            </nav>
        </div>
    )
};

export default Home;