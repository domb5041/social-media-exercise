import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from '../../apiRequests';
import Post from './posts/Post';
import PostDetail from './posts/PostDetail';
import LoadingOverlay from './LoadingOverlay';
import CreatePost from './posts/CreatePost';
import CreateUser from './CreateUser';
import styled from 'styled-components';
import Navbar from './Navbar';
import Posts from './posts/Posts';
import { Route } from 'react-router-dom';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
`;

const StyledPosts = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HelloWorld = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [users, setUsers] = useState([]);

    const [currentUser, setCurrentUser] = useState(10);

    useEffect(() => {
        getPosts();
        getUsers();
    }, []);

    const getUsers = () => {
        api.getUsers().then(d => {
            setUsers(d.users);
        });
    };

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
                    <div>
                        <CreateUser getUsers={getUsers} />
                        <button onClick={() => api.deleteUser(11)}>
                            delete user
                        </button>
                        <select onChange={e => setCurrentUser(e.target.value)}>
                            {users.map((user, i) => (
                                <option key={i} value={user.id}>
                                    {user.firstname + ' ' + user.lastname}
                                </option>
                            ))}
                        </select>
                    </div>
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
                    <div>profile</div>
                </Route>
            </StyledApp>
        </ApplicationLayout>
    );
};

export default HelloWorld;
