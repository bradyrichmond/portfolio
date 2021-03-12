import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { setError } from '../shared/errorSlice';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    rooms: [],
    activeRoom: 0,
    activeUsers: [],
    activeRoomName: '',
    activeMessages: []
  },
  reducers: {
    setRooms: (state, action) => {
        state.rooms = action.payload;
    },
    setActiveRoom: (state, action) => {
        state.activeRoom = action.payload;
    },
    setActiveRoomData: (state, action) => {
        state.activeUsers = action.payload.activeUsers;
        state.activeRoomName = action.payload.activeRoomName;
    },
    setActiveMessages: (state, action) => {
        state.activeMessages = action.payload
    }
  },
});

export const { setRooms, setActiveRoom, setActiveRoomData, setActiveMessages } = chatSlice.actions;

export const getAndSetRooms = () => async dispatch => {
    try {
        let response = await axios.get('http://localhost:8080/api/rooms');
        dispatch(setRooms(response.data));
    }
    catch {
        dispatch(setError(true));
    }
};

export const getAndSetActiveRoomData = (activeRoom) => async dispatch => {
    try {
        let response = await axios.get(`http://localhost:8080/api/rooms/${activeRoom}`);

        let data = {
            activeUsers: response.data.users,
            activeRoomName: response.data.name
        }

        dispatch(setActiveRoomData(data));
    }
    catch {
        dispatch(setError(true));
    }
};

export const getAndSetActiveMessages = (activeRoom) => async dispatch => {
    try {
        let response = await axios.get(`http://localhost:8080/api/rooms/${activeRoom}/messages`);

        dispatch(setActiveMessages(response.data));
    }
    catch {
        dispatch(setError(true));
    }
}

export const sendUserMessage = (name, message, activeRoom) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/api/rooms/${activeRoom}/messages`, { name, message });
        dispatch(getAndSetActiveMessages(activeRoom));
    }
    catch {
        dispatch(setError(true));
    }
}

export const selectRooms = state => state.chat.rooms;
export const selectActiveRoom = state => state.chat.activeRoom;
export const selectActiveUsers = state => state.chat.activeUsers;
export const selectActiveRoomName = state => state.chat.activeRoomName;
export const selectActiveMessages = state => state.chat.activeMessages;

export default chatSlice.reducer;