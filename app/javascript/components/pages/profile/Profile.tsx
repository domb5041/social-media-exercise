import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/Modal';

export default function Profile({ currentUser }) {
    const [user, setUser] = useState('');
    const [editingImg, setEditingImg] = useState(false);

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

    return (
        <div>
            {user.firstname} {user.lastname}
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
