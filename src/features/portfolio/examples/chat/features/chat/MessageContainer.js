import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from '../login/loginSlice';
import { selectActiveMessages, getAndSetActiveMessages, selectActiveRoom } from './chatSlice';

const MessageContainer = () => {
    const dispatch = useDispatch();
    const messages = useSelector(selectActiveMessages);
    const activeUser = useSelector(selectUsername);
    const activeRoom = useSelector(selectActiveRoom);

    const scrollToMe = useRef(null);

    const scrollToBottom = () => {
        scrollToMe.current.scrollIntoView(false)
    }

    useEffect(() => {
        dispatch(getAndSetActiveMessages(activeRoom));
        scrollToBottom();
    }, [activeRoom, messages])

    let previousUser = '';

    return (
        <div className='chat-message-container'>
            {messages.length > 0 &&
                messages.map((message, index) => {
                    let showUsername = true;
                    if (index === 0) {
                        previousUser = '';
                    }

                    if (previousUser === message.name) {
                        showUsername = false;
                    }

                    previousUser = message.name;

                    return (
                        <Message sender={message.name} body={message.message} occupant={message.name === activeUser} showSender={showUsername} key={`${message.name}_${index}`}/>
                    )
                })
            }
            <div ref={scrollToMe} />
        </div>
    )
}

const Message = (props) => {
    return (
        <React.Fragment>
            {props.showSender && <div className='chat-message-sender'>{props.sender}</div>}
            <div className={`chat-message-item${props.occupant ? ' occupant' : ''}`}>
                <div className='chat-message'>
                    {props.body}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessageContainer;