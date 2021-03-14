import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as api from '../apiRequests';
import ConfirmModal from '../common/modal/ConfirmModal';
import Button from '../common/Button';

const StyledUser = styled.div`
    text-align: center;
    margin: 20px;
    width: 200px;
    align-items: center;
    border: 2px solid ${props => props.theme.border};
    color: ${props => props.theme.foreground};
    border-radius: 10px;
    padding: 20px 10px 10px 10px;
    position: relative;
    & .user-name {
        text-transform: capitalize;
        font-size: 20px;
        position: relative;
        margin: 15px 0;
    }
`;

const StyledBadge = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 100%;
    position: relative;
    display: inline-block;
    background-color: ${props => props.theme.secondary};
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
        font-size: 50px;
        color: ${props => props.theme.foregroundDark};
    }
`;

const StyledDeleteButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    width: 30px;
    height: 30px;
    color: ${props => props.theme.foreground};
`;

export default function LoginUserBadge({
    image,
    name,
    login,
    isLoggedIn,
    userId,
    getUsers,
}) {
    const [deleteUserModal, setDeleteUserModal] = useState(false);

    const deleteUser = () => {
        api.deleteUser(userId).then(() => getUsers());
        setDeleteUserModal(false);
    };

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
                    <Button
                        disabled={isLoggedIn}
                        onClick={login}
                        text='Login'
                    />
                    {!isLoggedIn && userId != 10 && (
                        <StyledDeleteButton
                            onClick={() => setDeleteUserModal(true)}
                        >
                            <i className='fas fa-times'></i>
                        </StyledDeleteButton>
                    )}
                </div>
                <ConfirmModal
                    showWhen={deleteUserModal}
                    close={() => setDeleteUserModal(false)}
                    title={'Delete user: ' + name}
                    confirmAction={deleteUser}
                    confirmText='Delete'
                    bodyText='You are about to delete this user. This action cannot be undone.'
                />
            </StyledUser>
        </>
    );
}
