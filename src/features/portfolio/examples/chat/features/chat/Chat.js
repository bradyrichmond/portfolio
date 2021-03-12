import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setIsLoading } from '../shared/loadingSlice';
import { selectUsername } from '../login/loginSlice';
import './chat.css';
import Navigation from './Navigation';
import ChatContainer from './ChatContainer';

const Chat = () => {
    const dispatch = useDispatch();
    const username = useSelector(selectUsername);
    let [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (username === '') {
            setRedirect(true);
        } else {
            setTimeout(() => {
                dispatch(setIsLoading(false))
            }, 1000)
        }
    }, [])

    return (
        <div className='chat-container'>
            {redirect && <Redirect to='/' />}
            <Navigation />
            <ChatContainer />
        </div>
    )
} 

export default Chat;