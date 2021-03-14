import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/Modal';
import styled from 'styled-components';

const StyledNewPost = styled.button`
    background-color: none;
    border: none;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    font-size: 30px;
    margin: 20px 0;
    cursor: pointer;
    border-radius: 100%;
    background-color: black;
    color: white;
    transition: 0.2s;
    outline: none;
    &:hover {
        transform: scale(1.1);
    }
`;

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
            <StyledNewPost onClick={startCompose}>
                <i className='fas fa-plus' />
            </StyledNewPost>
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
