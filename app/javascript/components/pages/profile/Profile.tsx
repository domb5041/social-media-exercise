import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/Modal';
import ProfileUserBadge from '../common/userBadges/ProfileUserBadge';

export default function Profile({ currentUser }) {
    return (
        <div>
            <ProfileUserBadge currentUser={currentUser} />
        </div>
    );
}
