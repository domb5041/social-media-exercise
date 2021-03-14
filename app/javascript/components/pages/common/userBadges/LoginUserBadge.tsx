import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as api from '../../../../apiRequests';

const StyledUser = styled.div`
    text-align: center;
    margin: 20px 0;
    width: 200px;
    display: flex;
    height: 100px;
    align-items: center;
    & .user-name {
        text-transform: capitalize;
        font-size: 16px;
        position: relative;
    }
`;

const StyledBadge = styled.div`
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 100%;
    position: relative;
    display: inline-block;
    background-color: orange;
    margin-right: 10px;
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
        font-size: 30px;
        color: white;
    }
`;

export default function LoginUserBadge({
    image,
    name,
    login,
    deleteUser,
    isLoggedIn,
    userId,
}) {
    return (
        <>
            <StyledUser>
                <StyledBadge>
                    {image ? (
                        <img src={image} />
                    ) : (
                        <i className='fas fa-user'></i>
                    )}
                </StyledBadge>
                <div>
                    <div className='user-name'>{name}</div>
                    <button disabled={isLoggedIn} onClick={login}>
                        login
                    </button>
                    <button
                        disabled={isLoggedIn || userId == 10}
                        onClick={deleteUser}
                    >
                        delete
                    </button>
                </div>
            </StyledUser>
        </>
    );
}
