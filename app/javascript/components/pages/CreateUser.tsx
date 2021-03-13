import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';
import Modal from './Modal';

export default function CreateUser({ getUsers }) {
    const [creatingUser, setCreatingUser] = useState(false);
    const [newFirstname, setNewFirstname] = useState('');
    const [newLastname, setNewLastname] = useState('');

    const finishCreation = () => {
        // e.preventDefault();
        api.createUser(newFirstname, newLastname).then(() => {
            setCreatingUser(false);
            setNewFirstname('');
            setNewLastname('');
            getUsers();
        });
    };

    return (
        <>
            <button onClick={() => setCreatingUser(true)}>create user</button>
            <Modal showWhen={creatingUser} close={() => setCreatingUser(false)}>
                <input
                    style={{ display: 'block' }}
                    type='text'
                    onChange={e => setNewFirstname(e.target.value)}
                />
                <input
                    style={{ display: 'block' }}
                    type='text'
                    onChange={e => setNewLastname(e.target.value)}
                />
                <button onClick={finishCreation}>create user</button>
            </Modal>
        </>
    );
}
