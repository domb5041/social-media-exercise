import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';
import styled from 'styled-components';
import Modal from './Modal';

export default function Post({ post, close, getPosts }) {
    const [editing, setEditing] = useState(false);
    const [bodyText, setBodyText] = useState('');

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
            getPosts();
            setBodyText('');
            setEditing(false);
        });
    };

    const deletePost = () => {
        close();
        api.deletePost(post.id).then(() => getPosts());
    };

    return (
        <Modal showWhen={post} close={close}>
            {post && (
                <>
                    <img src={post.image_url} style={{ width: 200 }} />
                    <div>{post.body}</div>
                </>
            )}
            <button onClick={deletePost}>delete</button>
            {editing ? (
                <>
                    <button onClick={cancelEditing}>cancel</button>
                    <input
                        type='text'
                        value={bodyText}
                        onChange={e => setBodyText(e.target.value)}
                    />
                    <button onClick={finishEditing}>submit edit</button>
                </>
            ) : (
                <button onClick={startEditing}>edit</button>
            )}
        </Modal>
    );
}
