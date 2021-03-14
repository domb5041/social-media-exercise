import React, { useState, useEffect } from 'react';
import * as api from '../apiRequests';
import Modal from '../common/modal/Modal';
import ConfirmFooter from '../common/modal/ConfirmFooter';
import FloatingButton from '../common/FloatingButton';
import TextInput from '../common/TextInput';

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
                <div style={{ padding: 10, textAlign: 'center' }}>
                    <TextInput
                        style={{ marginRight: 10 }}
                        onChange={e => setNewFirstname(e.target.value)}
                        placeholder='First Name'
                    />
                    <TextInput
                        onChange={e => setNewLastname(e.target.value)}
                        placeholder='Last Name'
                    />
                </div>
            </Modal>
        </>
    );
}
