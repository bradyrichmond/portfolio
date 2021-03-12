import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAndSetActiveRoomData, selectActiveRoom, selectActiveRoomName, selectActiveUsers } from './chatSlice';
import { selectUsername } from '../login/loginSlice';

const ChatHeader = () => {
    const dispatch = useDispatch();
    const roomName = useSelector(selectActiveRoomName);
    const loggedInUser = useSelector(selectUsername);
    const activeRoom = useSelector(selectActiveRoom);
    const activeUsers = useSelector(selectActiveUsers);

    useEffect(() => {
        dispatch(getAndSetActiveRoomData(activeRoom));
    }, [activeRoom, activeUsers])

    return (
        <div className='chat-header'>
            <p className='chat-room-name'>{roomName}</p>
            <div className='chat-room-occupants'>
                <span className='logged-occupant'>{loggedInUser}</span>
                {activeUsers && activeUsers.length > 0 && 
                    activeUsers.map((user) => {
                        if (user === loggedInUser) {
                            return;
                        }

                        return (<span key={`${user}_index`}>, {user}</span>);
                    })
                }
            </div>
        </div>
    )
}

export default ChatHeader;