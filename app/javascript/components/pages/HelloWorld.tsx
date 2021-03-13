import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from '../../apiRequests';
import Post from './Post';
import PostDetail from './PostDetail';
import LoadingOverlay from './LoadingOverlay';
import CreatePost from './CreatePost';
import CreateUser from './CreateUser';

const HelloWorld = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [postFocus, setPostFocus] = useState(null);

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

    const convertDate = date => {
        return Date.parse(date);
    };

    return (
        <ApplicationLayout>
            <i className='fab fa-facebook-f fa-3x mx-2'></i>
            <CreateUser getUsers={getUsers} />
            {/* <button onClick={() => api.deleteUser(11)}>delete user</button> */}
            <select onChange={e => setCurrentUser(e.target.value)}>
                {users.map((user, i) => (
                    <option key={i} value={user.id}>
                        {user.firstname + ' ' + user.lastname}
                    </option>
                ))}
            </select>
            <CreatePost getPosts={getPosts} currentUser={currentUser} />
            <LoadingOverlay showWhen={loading} />
            {!loading && (
                <div>
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
                </div>
            )}

            {postFocus && (
                <PostDetail
                    postId={postFocus}
                    close={() => setPostFocus(null)}
                    getPosts={getPosts}
                    currentUser={currentUser}
                />
            )}
        </ApplicationLayout>
    );
};

export default HelloWorld;
