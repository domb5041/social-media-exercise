import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from '../../apiRequests';
import Post from './Post';
import PostDetail from './PostDetail';
import LoadingOverlay from './LoadingOverlay';
import CreatePost from './CreatePost';

const HelloWorld = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [postFocus, setPostFocus] = useState(null);

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

    const convertDate = date => {
        return Date.parse(date);
    };

    return (
        <ApplicationLayout>
            {/* <button
                    onClick={() => {
                        api.getUsers().then(d => console.log(d));
                    }}
                >
                    get users
                </button>
                <button onClick={() => api.createUser('dom', 'butler')}>
                    create user
                </button>
                <button onClick={() => api.deleteUser(1)}>delete user</button> */}

            <CreatePost getPosts={getPosts} />
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
                            />
                        ))}
                </div>
            )}

            {postFocus && (
                <PostDetail
                    postId={postFocus}
                    close={() => setPostFocus(null)}
                    getPosts={getPosts}
                />
            )}
        </ApplicationLayout>
    );
};

export default HelloWorld;
