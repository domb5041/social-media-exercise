import React, { useState, useEffect } from 'react';
import * as api from '../apiRequests';
import styled from 'styled-components';
import Modal from '../common/modal/Modal';
import ConfirmModal from '../common/modal/ConfirmModal';
import ConfirmFooter from '../common/modal/ConfirmFooter';
import LoadingOverlay from '../common/LoadingOverlay';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

const StyledComment = styled.div`
    margin-left: 50px;
    padding: 10px;
    border-top: 2px solid ${props => props.theme.border};
    & .comment-header {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & .user-name {
        font-weight: bold;
        text-transform: capitalize;
    }
    & .comment-body {
        margin-bottom: 10px;
    }
`;

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
    const [confirmDelete, setConfirmDelete] = useState(false);

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
        <>
            <StyledComment>
                <div className='comment-header'>
                    <span className='user-name'>{userName}</span>
                    <div>
                        <Button
                            text='Edit'
                            onClick={startEditing}
                            showWhen={currentUser == userId}
                            style={{ marginRight: 10 }}
                            secondary
                        />
                        <Button
                            text='Delete'
                            onClick={() => setConfirmDelete(true)}
                            showWhen={currentUser == userId}
                            secondary
                        />
                    </div>
                </div>
                <div className='comment-body'>{body}</div>
                <Modal
                    showWhen={editing}
                    close={cancelEditing}
                    title='Edit Comment'
                    footerElements={
                        <ConfirmFooter
                            confirmAction={finishEditing}
                            confirmText='Save'
                            confirmDisabled={commentBody === body}
                            cancelAction={cancelEditing}
                        />
                    }
                >
                    <TextInput
                        value={commentBody}
                        onChange={e => setCommentBody(e.target.value)}
                    />
                </Modal>
                <ConfirmModal
                    showWhen={confirmDelete}
                    close={() => setConfirmDelete(false)}
                    title='Delete Comment'
                    confirmAction={deleteComment}
                    confirmText='Delete'
                />
            </StyledComment>
        </>
    );
}
