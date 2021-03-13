import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';
import styled from 'styled-components';
import Modal from './Modal';

export default function Post({ post, close }) {
    // const [bodyText, setBodyText] = useState('');

    // const startEditing = () => {
    //     setEditing(postId);
    //     setBodyText(body);
    // };

    // const cancelEditing = () => {
    //     setEditing(null);
    //     setBodyText('');
    // };

    // const finishEditing = () => {
    //     api.editPost(postId, bodyText).then(() => {
    //         getPosts();
    //         setBodyText('');
    //         setEditing(null);
    //     });
    // };

    return (
        <Modal showWhen={post} close={close}>
            {post && (
                <>
                    <img src={post.image_url} style={{ width: 200 }} />
                    <div>{post.body}</div>
                </>
            )}
            {/* <button onClick={deletePost}>delete</button>
            {editMode ? (
                <button onClick={cancelEditing}>cancel</button>
            ) : (
                <button onClick={startEditing}>edit</button>
            )}
            {editMode && (
                <>
                    <input
                        type='text'
                        value={bodyText}
                        onChange={e => setBodyText(e.target.value)}
                    />
                    <button onClick={finishEditing}>submit edit</button>
                </>
            )} */}
        </Modal>
    );
}
