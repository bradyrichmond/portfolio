import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAndSetRooms, selectRooms, selectActiveRoom, setActiveRoom } from './chatSlice';

const RoomList = () => {
    const rooms = useSelector(selectRooms);
    const activeRoom = useSelector(selectActiveRoom)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAndSetRooms());
    }, [])

    const setRoomAsActive = (id) => {
        dispatch(setActiveRoom(id));
    }

    return (
        <div className='chat-room-list'>
            {rooms.length > 0 &&
                rooms.map((room) => {
                    return (<Room name={room.name} id={room.id} active={room.id === activeRoom} setActive={setRoomAsActive} newMessages={true} key={`${room.name}_${room.id}`}/>)
                })
            }
        </div>
    )
}

const Room = (props) => {
    return (
        <div className={`chat-room-item${props.active ? ' active' : ''}`} onClick={() => { props.setActive(props.id) }}>
            <div className='chat-room-item-name'>{props.name}</div>
        </div>
    )
}

export default RoomList;