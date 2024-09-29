import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div> Please Login </div>
    return (
        <div>
            <h1>{user.username}</h1>
            <h1>{user.password}</h1>
        </div>
    )
}

export default Profile
