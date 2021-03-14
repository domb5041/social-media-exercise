import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from '../../apiRequests';
import styled from 'styled-components';
import Navbar from './Navbar';
import Posts from './posts/Posts';
import { Route } from 'react-router-dom';
import Login from './login/Login';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
`;

const HelloWorld = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentUser, setCurrentUser] = useState(10);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        setLoading(true);
        api.getPosts(100).then(d => {
            setPosts(d.posts);
            setLoading(false);
            console.log(d);
        });
    };

    return (
        <ApplicationLayout>
            <StyledApp>
                <Navbar />
                <Route path='/login'>
                    <Login
                        currentUser={currentUser}
                        setCurrentUser={u => setCurrentUser(u)}
                    />
                </Route>
                <Route path='/posts'>
                    <Posts
                        loading={loading}
                        getPosts={getPosts}
                        currentUser={currentUser}
                        posts={posts}
                    />
                </Route>
                <Route path='/profile'>
                    <div>
                        profile
                        <button onClick={() => api.deleteUser(11)}>
                            delete user
                        </button>
                    </div>
                </Route>
            </StyledApp>
        </ApplicationLayout>
    );
};

export default HelloWorld;
