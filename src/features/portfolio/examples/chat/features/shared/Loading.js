import React from 'react';
import { LinearProgress } from '@material-ui/core';
import './loading.css';



const Loading = () => {
    return (
        <div className='loading-container'>
            <div className='loading-bar-container'>
                <LinearProgress />
            </div>
        </div>
    )
} 

export default Loading;