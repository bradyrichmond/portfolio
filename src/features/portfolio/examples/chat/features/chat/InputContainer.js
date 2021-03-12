import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { selectActiveRoom, sendUserMessage } from './chatSlice';
import { selectUsername } from '../login/loginSlice';

const InputContainer = () => {
    let [userMessage, setUserMessage] = useState('');
    const dispatch = useDispatch();

    const user = useSelector(selectUsername);
    const room = useSelector(selectActiveRoom);

    let sendMessage = (e) => {
        e.preventDefault()

        if (userMessage.length < 1) {
            return;
        }

        dispatch(sendUserMessage(user, userMessage, room));
        setUserMessage('');
    }

    return (
        <div className='chat-input-container'>
            <div className='text-field-container'>
                <form className='chat-form' noValidate autoComplete='off' onSubmit={sendMessage}>
                    <TextField id='user-message' placeholder='Type your message...' style={{width: '100%'}} variant='outlined' value={userMessage} onChange={(e) => setUserMessage(e.target.value)}/>
                </form>
            </div>
            <Button style={{color: '#4A90E2'}} onClick={sendMessage}>Send</Button>
        </div>
    )
}

export default InputContainer;