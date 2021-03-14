import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as api from '../../../apiRequests';

const StyledPost = styled.div`
    width: 500px;
    height: 500px;
    margin: 10px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
    & > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }
    &:hover {
        & > img {
            transform: scale(1.1);
        }
    }
`;

const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.6),
        transparent 20%,
        transparent 80%,
        rgba(0, 0, 0, 0.6)
    );
    color: white;
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
            <img src={image} />
            <StyledOverlay>
                <div>{userName}</div>
                <div>{body}</div>
            </StyledOverlay>
        </StyledPost>
    );
}
