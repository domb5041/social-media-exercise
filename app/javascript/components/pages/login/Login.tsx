import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import CreateUser from '../login/CreateUser';
import LoginUserBadge from '../common/userBadges/LoginUserBadge';

export default function Login({ currentUser, setCurrentUser }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        api.getUsers().then(d => {
            setUsers(d.users);
        });
    };
    return (
        <div>
            <CreateUser getUsers={getUsers} />
            {users.map((user, i) => (
                <LoginUserBadge
                    key={i}
                    image={user.image_url}
                    name={user.firstname + ' ' + user.lastname}
                    login={() => setCurrentUser(user.id)}
                    deleteUser={() => api.deleteUser(user.id)}
                    isLoggedIn={currentUser == user.id}
                    userId={user.id}
                />
            ))}
        </div>
    );
}
