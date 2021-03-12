import React from 'react';
import UserInfo from './UserInfo';
import RoomList from './RoomList';

const Navigation = () => {
    return (
        <div className='chat-navigation'>
            <UserInfo />
            <RoomList />
        </div>
    )
}

export default Navigation;