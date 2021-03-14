import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/modal/Modal';
import ConfirmFooter from '../common/modal/ConfirmFooter';
import FloatingButton from '../common/FloatingButton';

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
            <FloatingButton
                onClick={() => setCreatingUser(true)}
                icon='fas fa-user-plus'
            />
            <Modal
                title='Create User'
                showWhen={creatingUser}
                close={() => setCreatingUser(false)}
                footerElements={
                    <ConfirmFooter
                        confirmAction={finishCreation}
                        confirmText='Create User'
                        confirmDisabled={
                            newFirstname.length === 0 ||
                            newLastname.length === 0
                        }
                        cancelAction={() => setCreatingUser(false)}
                    />
                }
            >
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
            </Modal>
        </>
    );
}
