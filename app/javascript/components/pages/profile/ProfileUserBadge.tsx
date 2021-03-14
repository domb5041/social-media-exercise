import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../common/modal/Modal';
import * as api from '../../../apiRequests';
import ConfirmFooter from '../common/modal/ConfirmFooter';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

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
                <div className='user-name'>
                    <div>{user.firstname + ' ' + user.lastname}</div>
                    <Button text='Change Name' onClick={startEditingName} />
                </div>
            </StyledUser>
            <Modal
                showWhen={editingImg}
                close={() => setEditingImg(false)}
                title='Update Profile Picture'
                footerElements={
                    <ConfirmFooter
                        confirmAction={finishEditingImg}
                        confirmText='Save'
                        confirmDisabled={false}
                        cancelAction={() => setEditingImg(false)}
                    />
                }
            >
                <input
                    style={{ display: 'block' }}
                    type='file'
                    id='user-image-file'
                    name='file'
                />
            </Modal>
            <Modal
                showWhen={editingName}
                close={() => setEditingName(false)}
                title='Change Name'
                footerElements={
                    <ConfirmFooter
                        confirmAction={finishEditingName}
                        confirmText='Save'
                        confirmDisabled={
                            (firstnameText === user.firstname &&
                                lastnameText === user.lastname) ||
                            firstnameText.length === 0 ||
                            lastnameText.length === 0
                        }
                        cancelAction={() => setEditingName(false)}
                    />
                }
            >
                <div style={{ padding: 10, textAlign: 'center' }}>
                    <TextInput
                        value={firstnameText}
                        onChange={e => setFirstnameText(e.target.value)}
                    />
                    <TextInput
                        value={lastnameText}
                        onChange={e => setLastnameText(e.target.value)}
                    />
                </div>
            </Modal>
        </>
    );
}
