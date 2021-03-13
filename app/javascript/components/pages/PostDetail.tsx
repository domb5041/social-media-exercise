import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';
import styled from 'styled-components';
import Modal from './Modal';
import LoadingOverlay from './LoadingOverlay';

export default function PostDetail({ postId, close, getPosts, currentUser }) {
    const [editing, setEditing] = useState(false);
    const [bodyText, setBodyText] = useState('');
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        getPost();
    }, []);

    const getUserName = userId => {
        api.getUser(userId).then(d => {
            setUserName(d.user.firstname + ' ' + d.user.lastname);
        });
    };

    const getPost = () => {
        api.getPost(postId).then(d => {
            setPost(d.post);
            setLoading(false);
            getUserName(d.post.user_id);
        });
    };

    const startEditing = () => {
        setEditing(true);
        setBodyText(post.body);
    };

    const cancelEditing = () => {
        setEditing(false);
        setBodyText('');
    };

    const finishEditing = () => {
        api.editPost(post.id, bodyText).then(() => {
            setBodyText('');
            setEditing(false);
            getPost();
            getPosts();
        });
    };

    const deletePost = () => {
        close();
        api.deletePost(post.id).then(() => getPosts());
    };

    return (
        <>
            <LoadingOverlay showWhen={loading} />
            <Modal showWhen={post} close={close}>
                {!loading && (
                    <>
                        <img src={post.image_url} style={{ width: 200 }} />
                        <div>{post.body}</div>
                        <div>{userName}</div>

                        {editing ? (
                            <>
                                <button onClick={cancelEditing}>cancel</button>
                                <input
                                    type='text'
                                    value={bodyText}
                                    onChange={e => setBodyText(e.target.value)}
                                />
                                <button onClick={finishEditing}>
                                    submit edit
                                </button>
                            </>
                        ) : (
                            currentUser === post.user_id && (
                                <>
                                    <button onClick={startEditing}>edit</button>
                                    <button onClick={deletePost}>delete</button>
                                </>
                            )
                        )}
                    </>
                )}
            </Modal>
        </>
    );
}
