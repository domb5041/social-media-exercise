import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/Modal';
import styled from 'styled-components';
import FloatingButton from '../common/FloatingButton';

export default function CreatePost({ getPosts, currentUser }) {
    const [bodyText, setBodyText] = useState('');
    const [postId, setPostId] = useState(null);

    const startCompose = () => {
        api.createPost('body', currentUser).then(d => setPostId(d.post.id));
    };

    const finishCompose = e => {
        e.preventDefault();
        api.publishPost(postId, bodyText).then(() => {
            setPostId(null);
            setBodyText('');
            getPosts();
        });
    };

    const cancelPost = () => {
        setPostId(null);
        api.deletePost(postId);
    };

    return (
        <>
            <FloatingButton onClick={startCompose} />
            <Modal showWhen={postId} close={cancelPost}>
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
                    onChange={() => api.uploadPostImage(postId)}
                />
                <button
                    style={{ display: 'block' }}
                    onClick={e => finishCompose(e)}
                >
                    publish post
                </button>
            </Modal>
        </>
    );
}
