import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillHome, AiFillLayout, AiOutlineDoubleLeft } from "react-icons/ai";
import './navigation.css';

const Home = () => {
    const [navCollapsed, setNavCollapsed] = useState(false);

    const collapseText = () => {
        setNavCollapsed(!navCollapsed);
    }

    return (
        <div className={`navigation${navCollapsed ? ' collapsed' : ''}`}>
            <div className={`collapse${navCollapsed ? ' collapsed' : ''}`} onClick={collapseText}>
                <AiOutlineDoubleLeft style={{color: 'rgb(20, 33, 61)', fontSize: '2rem'}}/>
            </div>
            <nav>
                <Link to="/">
                    <div className='nav-icon-container'>
                        <AiFillHome className='nav-icon'/>
                    </div>
                    <div className={`nav-text${navCollapsed ? ' collapsed' : ''}`}>Home</div>
                </Link>
                <Link to="/notes">
                    <div className='nav-icon-container'>
                        <AiFillLayout className='nav-icon'/>
                    </div>
                    <div className={`nav-text${navCollapsed ? ' collapsed' : ''}`}>Portfolio</div>
                </Link>
                <a href="https://www.linkedin.com/in/bradyrichmond/">
                    <div className='nav-icon-container'>
                        <AiFillLinkedin className='nav-icon'/>
                    </div>
                    <div className={`nav-text${navCollapsed ? ' collapsed' : ''}`}>LinkedIn</div>
                </a>
            </nav>
        </div>
    )
};

export default Home;