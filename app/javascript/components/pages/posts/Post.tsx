import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as api from '../../../apiRequests';
import User from './PostUserBadge';

const StyledPostContainer = styled.div`
    margin-bottom: 40px;
`;

const StyledPost = styled.div`
    width: ${props => (props.compact ? 200 : 500)}px;
    height: ${props => (props.compact ? 200 : 500)}px;
    position: relative;
    margin: 10px;
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

const StyledBody = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 20px;
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
    return compact ? (
        <StyledPost onClick={setPostFocus} compact={compact}>
            <img src={image} />
        </StyledPost>
    ) : (
        <StyledPostContainer>
            <User
                image={user.image_url}
                name={user.firstname + ' ' + user.lastname}
            />
            <StyledPost onClick={setPostFocus} compact={compact}>
                <img src={image} />
                <StyledBody>{body}</StyledBody>
            </StyledPost>
        </StyledPostContainer>
    );
}
