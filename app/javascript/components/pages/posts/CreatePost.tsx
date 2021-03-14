import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/modal/Modal';
import styled from 'styled-components';
import FloatingButton from '../common/FloatingButton';
import ConfirmFooter from '../common/modal/ConfirmFooter';
import TextInput from '../common/TextInput';

export default function CreatePost({ getPosts, currentUser }) {
    const [bodyText, setBodyText] = useState('');
    const [postId, setPostId] = useState(null);

    const startCompose = () => {
        api.createPost('body', currentUser).then(d => setPostId(d.post.id));
    };

    const finishCompose = e => {
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
            <Modal
                showWhen={postId}
                close={cancelPost}
                title='New Post'
                footerElements={
                    <ConfirmFooter
                        confirmAction={finishCompose}
                        confirmText='Post'
                        confirmDisabled={bodyText.length === 0}
                        cancelAction={cancelPost}
                    />
                }
            >
                <div style={{ padding: 10, textAlign: 'center' }}>
                    <TextInput
                        style={{ display: 'block' }}
                        onChange={e => setBodyText(e.target.value)}
                    />
                    <input
                        style={{ display: 'block' }}
                        type='file'
                        id='file'
                        name='file'
                        onChange={() => api.uploadPostImage(postId)}
                    />
                </div>
            </Modal>
        </>
    );
}
