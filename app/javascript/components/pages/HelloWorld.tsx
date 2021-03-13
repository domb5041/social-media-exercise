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
        api.getPosts().then(d => {
            setPosts(d.posts);
            setLoading(false);
        });
    };

    const convertDate = date => {
        return Date.parse(date);
    };

    return (
        <ApplicationLayout>
            <div className='container py-5'>
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
                {/* {composing && (
                    <form
                        id='uploadForm'
                        // onSubmit={e => {
                        //     e.preventDefault();
                        //     api.uploadPostImage(1);
                        // }}
                        role='form'
                        method='post'
                    >
                        <input
                            style={{ display: 'block' }}
                            type='text'
                            onChange={e => setBodyText(e.target.value)}
                        />
                        <input
                            style={{ display: 'block' }}
                            type='file'
                            id='file'
                            name='file'
                            onChange={() => api.uploadPostImage(composing)}
                        />
                        <button
                            style={{ display: 'block' }}
                            onClick={e => finishCompose(e)}
                        >
                            publish post
                        </button>
                    </form>
                )} */}
            </div>
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
                    close={() => {
                        setPostFocus(null);
                        getPosts();
                    }}
                />
            )}
        </ApplicationLayout>
    );
};

export default HelloWorld;
