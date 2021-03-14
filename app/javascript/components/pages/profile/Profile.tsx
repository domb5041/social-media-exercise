import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';

export default function Profile() {
    return (
        <div>
            profile
            <button onClick={() => api.deleteUser(11)}>delete user</button>
        </div>
    );
}
