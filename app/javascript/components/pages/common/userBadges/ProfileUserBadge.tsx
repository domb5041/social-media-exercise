import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import * as api from '../../../../apiRequests';

const StyledUser = styled.div`
    text-align: center;
    margin: 20px 0;
    & .user-name {
        text-transform: capitalize;
        font-size: 25px;
        position: relative;
        margin-top: 20px;
    }
`;

const StyledBadge = styled.div`
    width: 170px;
    height: 170px;
    overflow: hidden;
    border-radius: 100%;
    position: relative;
    display: inline-block;
    background-color: orange;
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
        font-size: 70px;
        color: white;
    }
    & .edit-image-button {
        position: absolute;
        bottom: 0;
        left: 50%;
        background-color: rgba(0, 0, 0, 0.4);
        border: none;
        transform: translateX(-50%);
        width: 100%;
        height: 40px;
        font-size: 20px;
        color: white;
        cursor: pointer;
        outline: none;
    }
`;

export default function User({ currentUser }) {
    const [editingImg, setEditingImg] = useState(false);
    const [editingName, setEditingName] = useState(false);
    const [firstnameText, setFirstnameText] = useState('');
    const [lastnameText, setLastnameText] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        api.getUser(currentUser).then(d => {
            setUser(d.user);
        });
    };

    const finishEditingImg = () => {
        api.uploadUserImage(currentUser).then(() => {
            getUser();
        });
        setEditingImg(false);
    };

    const startEditingName = () => {
        setEditingName(true);
        setFirstnameText(user.firstname);
        setLastnameText(user.lastname);
    };

    const finishEditingName = () => {
        api.editUser(currentUser, firstnameText, lastnameText).then(() => {
            getUser();
        });
        setEditingName(false);
        setFirstnameText('');
        setLastnameText('');
    };

    return (
        <>
            <StyledUser>
                <StyledBadge>
                    {user.image_url ? (
                        <img src={user.image_url} />
                    ) : (
                        <i className='fas fa-user'></i>
                    )}
                    <button
                        onClick={() => setEditingImg(true)}
                        className='edit-image-button'
                    >
                        <i className='fas fa-camera'></i>
                    </button>
                </StyledBadge>
                {editingName ? (
                    <div>
                        <input
                            type='text'
                            value={firstnameText}
                            onChange={e => setFirstnameText(e.target.value)}
                        />
                        <input
                            type='text'
                            value={lastnameText}
                            onChange={e => setLastnameText(e.target.value)}
                        />
                        <button onClick={() => setEditingName(false)}>
                            cancel
                        </button>
                        <button
                            onClick={finishEditingName}
                            disabled={
                                firstnameText === user.firstname &&
                                lastnameText === user.lastname
                            }
                        >
                            submit edit
                        </button>
                    </div>
                ) : (
                    <div className='user-name'>
                        {user.firstname + ' ' + user.lastname}
                        <button onClick={startEditingName}>edit user</button>
                    </div>
                )}
            </StyledUser>
            <Modal showWhen={editingImg} close={() => setEditingImg(false)}>
                <input
                    style={{ display: 'block' }}
                    type='file'
                    id='user-image-file'
                    name='file'
                />
                <button onClick={finishEditingImg}>Confirm</button>
            </Modal>
        </>
    );
}
