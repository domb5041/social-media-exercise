import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../layouts/ApplicationLayout';
import * as api from '../../apiRequests';
import Post from './Post';
import PostDetail from './PostDetail';

const HelloWorld = () => {
    const [posts, setPosts] = useState([]);
    const [composing, setComposing] = useState(null);
    const [bodyText, setBodyText] = useState('');
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(null);

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

    const startCompose = () => {
        api.createPost('body', 10).then(d => setComposing(d.post.id));
    };

    const finishCompose = e => {
        e.preventDefault();
        api.publishPost(composing, bodyText).then(() => {
            setComposing(null);
            setBodyText('');
            getPosts();
        });
    };

    const convertDate = date => {
        return Date.parse(date);
    };

    const deletePost = id => {
        api.deletePost(id).then(() => getPosts());
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
                <button onClick={startCompose}>new post</button>
                {composing && (
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
                )}
            </div>
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
                                deletePost={() => deletePost(post.id)}
                                editMode={editing === post.id}
                                setEditing={id => setEditing(id)}
                                postId={post.id}
                                getPosts={getPosts}
                                setPostFocus={() => setPostFocus(post)}
                            />
                        ))}
                </div>
            )}
            <PostDetail post={postFocus} close={() => setPostFocus(null)} />
        </ApplicationLayout>
    );
};

export default HelloWorld;
