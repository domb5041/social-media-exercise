import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';
import styled from 'styled-components';
import Modal from './Modal';
import LoadingOverlay from './LoadingOverlay';

export default function PostDetail({ userId, body }) {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        getUserName(userId);
    }, []);

    const getUserName = userId => {
        api.getUser(userId).then(d => {
            setUserName(d.user.firstname + ' ' + d.user.lastname);
        });
    };

    return (
        <div>
            {body} by {userName}
        </div>
    );
}
