import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as api from '../../apiRequests';

const StyledPost = styled.div`
    border: 1px solid black;
    width: 200px;
    margin-bottom: 10px;
`;

export default function Post({ image, body, setPostFocus, userId }) {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        getUserName();
    }, []);

    const getUserName = () => {
        api.getUser(userId).then(d => {
            setUserName(d.user.firstname + ' ' + d.user.lastname);
        });
    };
    return (
        <StyledPost onClick={setPostFocus}>
            <img src={image} style={{ width: '100%' }} />
            <div>{body}</div>
            <div>{userName}</div>
        </StyledPost>
    );
}
