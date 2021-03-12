import React from 'react';
import ChatHeader from './ChatHeader';
import InputContainer from './InputContainer';
import MessageContainer from './MessageContainer';

const ChatContainer = () => {
    return (
        <div className='chat-messages-container'>
            <ChatHeader />
            <MessageContainer />
            <InputContainer />
        </div>
    )
}

export default ChatContainer;