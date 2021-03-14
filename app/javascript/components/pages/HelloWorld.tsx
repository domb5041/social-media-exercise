import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from '../../apiRequests';
import Post from './Post';
import PostDetail from './PostDetail';
import LoadingOverlay from './LoadingOverlay';
import CreatePost from './CreatePost';
import CreateUser from './CreateUser';
import styled from 'styled-components';
import Navbar from './Navbar';
import Posts from './Posts';

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
    const [loading, setLoading] = useState(false);

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
                {/* <div>
                    <CreateUser getUsers={getUsers} />
                    <button onClick={() => api.deleteUser(11)}>delete user</button>
                    <select onChange={e => setCurrentUser(e.target.value)}>
                        {users.map((user, i) => (
                            <option key={i} value={user.id}>
                                {user.firstname + ' ' + user.lastname}
                            </option>
                        ))}
                    </select>
                </div> */}
                <Navbar />

                <Posts
                    loading={loading}
                    getPosts={getPosts}
                    currentUser={currentUser}
                    posts={posts}
                />
                {/* {!loading && (
                    <StyledPosts>
                        <CreatePost
                            getPosts={getPosts}
                            currentUser={currentUser}
                        />
                        {posts
                            .filter(post => post.state === 'published')
                            .sort(
                                (a, b) =>
                                    convertDate(b.created_at) -
                                    convertDate(a.created_at)
                            )
                            .map((post, i) => (
                                <Post
                                    key={i}
                                    image={post.image_url}
                                    body={post.body}
                                    setPostFocus={() => setPostFocus(post.id)}
                                    userId={post.user_id}
                                />
                            ))}
                    </StyledPosts>
                )}

                {postFocus && (
                    <PostDetail
                        postId={postFocus}
                        close={() => setPostFocus(null)}
                        getPosts={getPosts}
                        currentUser={currentUser}
                    />
                )} */}
            </StyledApp>
        </ApplicationLayout>
    );
};

export default HelloWorld;
