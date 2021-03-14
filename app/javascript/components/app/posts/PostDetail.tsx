import React, { useState, useEffect } from 'react';
import * as api from '../apiRequests';
import styled from 'styled-components';
import Modal from '../common/modal/Modal';
import ConfirmModal from '../common/modal/ConfirmModal';
import Comment from './Comment';
import User from './PostUserBadge';
import ConfirmFooter from '../common/modal/ConfirmFooter';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

const StyledPostImg = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    background-color: silver;
    & > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

const StyledAuthorRow = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledPostRow = styled.div`
    padding: 10px 40px;
    margin-left: 20px;
    margin-bottom: 30px;
    font-size: 18px;
`;

const StyledCommentInput = styled.div`
    display: flex;
    & > input {
        flex: 1;
        margin-right: 5px;
    }
`;

export default function PostDetail({ postId, close, getPosts, currentUser }) {
    const [editing, setEditing] = useState(false);
    const [bodyText, setBodyText] = useState('');
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const [comments, setComments] = useState([]);
    const [commentBody, setCommentBody] = useState('');
    const [confirmDelete, setConfirmDelete] = useState(false);

    useEffect(() => {
        if (postId) getPost();
    }, [postId]);

    const getUser = userId => {
        api.getUser(userId).then(d => {
            setUser(d.user);
        });
    };

    const getPost = () => {
        api.getPost(postId).then(d => {
            setPost(d.post);
            setLoading(false);
            getUser(d.post.user_id);
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

    const footerElements = () => (
        <StyledCommentInput>
            <TextInput
                style={{ display: 'block' }}
                value={commentBody}
                onChange={e => setCommentBody(e.target.value)}
            />
            <Button
                text='Post Comment'
                disabled={!commentBody}
                onClick={createComment}
            />
        </StyledCommentInput>
    );

    return (
        <Modal
            size='large'
            showWhen={postId}
            close={close}
            loading={loading}
            footerElements={footerElements()}
            title='Post'
        >
            {!loading && (
                <>
                    <StyledPostImg>
                        <img src={post.image_url} />
                    </StyledPostImg>
                    <StyledAuthorRow>
                        <User
                            image={user.image_url}
                            name={user.firstname + ' ' + user.lastname}
                        />
                        <div>
                            <Button
                                text='Edit'
                                onClick={startEditing}
                                style={{ marginRight: 10 }}
                                showWhen={currentUser == post.user_id}
                                secondary
                            />
                            <Button
                                text='Delete'
                                onClick={() => setConfirmDelete(true)}
                                showWhen={currentUser == post.user_id}
                                secondary
                            />
                        </div>
                    </StyledAuthorRow>
                    <StyledPostRow>{post.body}</StyledPostRow>
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
                    <Modal
                        showWhen={editing}
                        close={cancelEditing}
                        title='Edit Post'
                        size='small'
                        footerElements={
                            <ConfirmFooter
                                cancelAction={cancelEditing}
                                confirmAction={finishEditing}
                                confirmDisabled={bodyText === post.body}
                            />
                        }
                    >
                        <input
                            type='text'
                            value={bodyText}
                            onChange={e => setBodyText(e.target.value)}
                        />
                    </Modal>
                    <ConfirmModal
                        showWhen={confirmDelete}
                        close={() => setConfirmDelete(false)}
                        title='Delete Post'
                        confirmAction={deletePost}
                        confirmText='Delete'
                    />
                </>
            )}
        </Modal>
    );
}
