import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import styled from 'styled-components';
import Modal from '../Modal';
import LoadingOverlay from '../LoadingOverlay';

export default function PostDetail({
    userId,
    body,
    postId,
    commentId,
    getPost,
    currentUser,
}) {
    const [userName, setUserName] = useState('');
    const [editing, setEditing] = useState(false);
    const [commentBody, setCommentBody] = useState('');

    useEffect(() => {
        getUserName(userId);
    }, [getPost]);

    const getUserName = userId => {
        api.getUser(userId).then(d => {
            setUserName(d.user.firstname + ' ' + d.user.lastname);
        });
    };

    const startEditing = () => {
        setEditing(true);
        setCommentBody(body);
    };

    const cancelEditing = () => {
        setEditing(false);
        setCommentBody('');
    };

    const finishEditing = () => {
        api.editComment(postId, commentId, commentBody).then(() => {
            setCommentBody('');
            setEditing(false);
            getPost();
        });
    };

    const deleteComment = () => {
        api.deleteComment(postId, commentId).then(() => {
            setCommentBody('');
            setEditing(false);
            getPost();
        });
    };

    return (
        <div>
            {editing ? (
                <>
                    <button onClick={cancelEditing}>cancel</button>
                    <input
                        type='text'
                        value={commentBody}
                        onChange={e => setCommentBody(e.target.value)}
                    />
                    <button onClick={finishEditing}>submit edit</button>
                    <button onClick={deleteComment}>delete</button>
                </>
            ) : (
                <div>
                    {body} by {userName}
                    {currentUser == userId && (
                        <button onClick={startEditing}>edit</button>
                    )}
                </div>
            )}
        </div>
    );
}
