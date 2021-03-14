import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import styled from 'styled-components';
import Modal from '../common/modal/Modal';
import ConfirmModal from '../common/modal/ConfirmModal';
import ConfirmFooter from '../common/modal/ConfirmFooter';
import LoadingOverlay from '../common/LoadingOverlay';

const StyledComment = styled.div`
    margin-left: 20px;
    padding: 10px;
    border-bottom: 1px solid silver;
    & .comment-header {
        margin-bottom: 10px;
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
                <div className='comment-header'>{userName}</div>
                <div className='comment-body'>{body}</div>
                <div className='comment-footer'>
                    {currentUser == userId && (
                        <>
                            <button onClick={startEditing}>edit comment</button>
                            <button onClick={() => setConfirmDelete(true)}>
                                delete comment
                            </button>
                        </>
                    )}
                </div>
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
                    <input
                        type='text'
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
