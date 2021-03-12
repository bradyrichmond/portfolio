import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsername, selectLoginTime } from '../login/loginSlice';

const UserInfo = () => {
    const username = useSelector(selectUsername);
    const loginTime = useSelector(selectLoginTime);
    let [loggedTime, setLoggedTime] = useState(0);

    const startLoginInterval = () => {
        const calculateLoginTime = () => {
            let elapsedTime = new Date(Date.now() - loginTime);
            let minutes = elapsedTime.getMinutes();
            let message = minutes;
            if (minutes < 4) {
                message = 'a few';
            }
            setLoggedTime(message);
        }

        setInterval(calculateLoginTime, 60000)
    }

    useEffect(() => {
        startLoginInterval()
    }, [])

    return (
        <div className='user-info-container'>
            <p className='user-info-name'>{username}</p>
            <p className='user-info-time'>Online for {loggedTime} Minutes</p>
        </div>
    )
}

export default UserInfo;