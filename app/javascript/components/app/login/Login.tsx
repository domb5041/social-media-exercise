import React, { useState, useEffect } from 'react';
import * as api from '../apiRequests';
import CreateUser from './CreateUser';
import LoginUserBadge from './LoginUserBadge';
import LoadingOverlay from '../common/LoadingOverlay';
import styled from 'styled-components';

const StyledUsers = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
        color: ${props => props.theme.foreground};
    }
`;

const StyledUserGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    justify-content: center;
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
            {users.length > 0 ? (
                <StyledUserGrid>
                    {users.map((user, i) => (
                        <LoginUserBadge
                            key={i}
                            image={user.image_url}
                            name={user.firstname + ' ' + user.lastname}
                            login={() => setCurrentUser(user.id)}
                            isLoggedIn={currentUser == user.id}
                            userId={user.id}
                            getUsers={getUsers}
                        />
                    ))}
                </StyledUserGrid>
            ) : (
                <h1>Please create a user and login.</h1>
            )}
        </StyledUsers>
    );
}
