import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as api from '../../../apiRequests';
import User from '../common/userBadges/PostUserBadge';

const StyledPost = styled.div`
    width: ${props => (props.compact ? 200 : 500)}px;
    height: ${props => (props.compact ? 200 : 500)}px;
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

export default function Post({ image, body, setPostFocus, userId, compact }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        api.getUser(userId).then(d => {
            setUser(d.user);
        });
    };
    return (
        <StyledPost onClick={setPostFocus} compact={compact}>
            <img src={image} />
            {!compact && (
                <StyledOverlay>
                    <User
                        image={user.image_url}
                        name={user.firstname + ' ' + user.lastname}
                    />

                    <div>{body}</div>
                </StyledOverlay>
            )}
        </StyledPost>
    );
}
