import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from '../../apiRequests';

const HelloWorld = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        api.getPosts().then(d => {
            console.log(d);
            setPosts(d.posts);
        });
    }, []);

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
                <button onClick={() => api.createPost('this is a post', 10)}>
                    create post
                </button>
                <form
                    id='uploadForm'
                    onSubmit={e => {
                        e.preventDefault();
                        api.uploadPostImage(1);
                    }}
                    role='form'
                    method='post'
                >
                    <input type='file' id='file' name='file' />
                    <input type='submit' value='Upload' />
                </form>
            </div>
            <div>
                {posts.map((post, i) => (
                    <div key={i}>
                        <img src={post.image_url} style={{ width: 100 }} />
                        {post.body}
                    </div>
                ))}
            </div>
        </ApplicationLayout>
    );
};

export default HelloWorld;
