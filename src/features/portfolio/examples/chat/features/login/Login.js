import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setLoginTime, setUsername } from './loginSlice';
import { setIsLoading } from '../shared/loadingSlice';

import './login.css'

const Login = () => {
    const [loginUsername, setLoginUsername] = useState('');
    const [navigating, setNavigating] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        if (loginUsername.length < 3) {
            setError(true);
            return;
        }

        setNavigating(true);
        dispatch(setIsLoading(true));
        dispatch(setUsername(loginUsername));
        dispatch(setLoginTime(Date.now()));
    }

    return (
        <div className='login-container'>
            {navigating && <Redirect to='/chat' />}
            <form className='login-form' noValidate autoComplete='off' style={{display: 'flex', flexDirection: 'column', minWidth: '30rem'}} onSubmit={login}>
                <TextField id='login-username' placeholder='Type your username...' variant='outlined' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)}/>
                {error && <span className='error'>Please enter at least 3 characters</span>}
                <Button variant='contained' style={{backgroundColor: '#FF1940', color: 'white', padding: '1rem', marginTop: '2rem'}} onClick={login}>Join the Doordash Chat</Button>
            </form>
        </div>
    )
} 

export default Login;