import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';
import styled from 'styled-components';
import Modal from './Modal';
import LoadingOverlay from './LoadingOverlay';
import Comment from './Comment';

export default function PostDetail({ postId, close, getPosts, currentUser }) {
    const [editing, setEditing] = useState(false);
    const [bodyText, setBodyText] = useState('');
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState('');
    const [comments, setComments] = useState([]);
    const [commentBody, setCommentBody] = useState('');

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
            getComments(d.post.id);
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

    const createComment = () => {
        api.createComment(post.id, currentUser, commentBody).then(() => {
            getComments(post.id);
            setCommentBody('');
        });
    };

    const getComments = postId => {
        api.getComments(postId).then(d => setComments(d.comments));
    };

    return (
        <>
            <LoadingOverlay showWhen={loading} />
            <Modal title={userName} showWhen={post} close={close}>
                {!loading && (
                    <>
                        <img src={post.image_url} style={{ width: '100%' }} />

                        {editing ? (
                            <>
                                <input
                                    type='text'
                                    value={bodyText}
                                    onChange={e => setBodyText(e.target.value)}
                                />
                                <button onClick={cancelEditing}>cancel</button>
                                <button
                                    onClick={finishEditing}
                                    disabled={bodyText === post.body}
                                >
                                    submit edit
                                </button>
                                <button onClick={deletePost}>delete</button>
                            </>
                        ) : (
                            <div>
                                {post.body}
                                {currentUser == post.user_id && (
                                    <>
                                        <button onClick={startEditing}>
                                            edit
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                        <input
                            style={{ display: 'block' }}
                            type='text'
                            value={commentBody}
                            onChange={e => setCommentBody(e.target.value)}
                        />
                        <button disabled={!commentBody} onClick={createComment}>
                            add comment
                        </button>
                        <div>
                            {comments.map((comment, i) => (
                                <Comment
                                    key={i}
                                    body={comment.body}
                                    userId={comment.user_id}
                                    postId={postId}
                                    commentId={comment.id}
                                    getPost={getPost}
                                    currentUser={currentUser}
                                />
                            ))}
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
}
