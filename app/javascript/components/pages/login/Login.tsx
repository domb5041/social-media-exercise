import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import CreateUser from '../login/CreateUser';
import LoginUserBadge from '../common/userBadges/LoginUserBadge';
import LoadingOverlay from '../common/LoadingOverlay';
import styled from 'styled-components';

const StyledUsers = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Login({ currentUser, setCurrentUser }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        setLoading(true);
        api.getUsers()
            .then(d => {
                setUsers(d.users);
            })
            .then(() => setLoading(false));
    };

    return (
        <StyledUsers>
            <LoadingOverlay showWhen={loading} />
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
        </StyledUsers>
    );
}
