import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from './apiRequests';
import styled from 'styled-components';
import Navbar from './common/Navbar';
import Posts from './posts/Posts';
import { Route, Redirect } from 'react-router-dom';
import Login from './login/Login';
import Profile from './profile/Profile';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.base};
`;

export default function HelloWorld() {
    const masterUserId = 10;
    const [currentUser, setCurrentUser] = useState(masterUserId);

    return (
        <ApplicationLayout>
            <StyledApp>
                <Navbar currentUser={currentUser} />
                <Redirect exact from='/' to='/posts' />
                <Route path='/login'>
                    <Login
                        currentUser={currentUser}
                        setCurrentUser={u => setCurrentUser(u)}
                    />
                </Route>
                <Route path='/posts'>
                    <Posts currentUser={currentUser} />
                </Route>
                <Route path='/profile'>
                    <Profile currentUser={currentUser} />
                </Route>
            </StyledApp>
        </ApplicationLayout>
    );
}
