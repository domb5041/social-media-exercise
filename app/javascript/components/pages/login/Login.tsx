import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import CreateUser from '../login/CreateUser';

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

            <select
                value={currentUser}
                onChange={e => setCurrentUser(e.target.value)}
            >
                {users.map((user, i) => (
                    <option key={i} value={user.id}>
                        {user.firstname + ' ' + user.lastname}
                    </option>
                ))}
            </select>
        </div>
    );
}
