import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledUser = styled.div`
    display: flex;
    align-items: center;
    & .user-name {
        text-transform: capitalize;
        font-size: 18px;
        position: relative;
        font-weight: bold;
    }
`;

const StyledBadge = styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 100%;
    margin-right: 10px;
    position: relative;
    background-color: ${props => props.theme.accent};
    & > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    & > i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        color: ${props => props.theme.foregroundDark};
    }
`;

export default function User({ image, name }) {
    return (
        <StyledUser>
            <StyledBadge>
                {image ? <img src={image} /> : <i className='fas fa-user'></i>}
            </StyledBadge>
            <div className='user-name'>{name}</div>
        </StyledUser>
    );
}
