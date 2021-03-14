import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/Modal';

export default function Profile({ currentUser }) {
    const [user, setUser] = useState('');
    const [editingImg, setEditingImg] = useState(false);
    const [editingName, setEditingName] = useState(false);
    const [firstnameText, setFirstnameText] = useState('');
    const [lastnameText, setLastnameText] = useState('');

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
        <div>
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
                <div>
                    {user.firstname} {user.lastname}{' '}
                    <button onClick={startEditingName}>edit name</button>
                </div>
            )}

            <img
                src={user.image_url}
                style={{ width: 100 }}
                onClick={() => setEditingImg(true)}
            />
            <button onClick={() => api.deleteUser(currentUser)}>
                delete user
            </button>
            <Modal showWhen={editingImg} close={() => setEditingImg(false)}>
                <input
                    style={{ display: 'block' }}
                    type='file'
                    id='user-image-file'
                    name='file'
                />
                <button onClick={finishEditingImg}>Confirm</button>
            </Modal>
        </div>
    );
}
