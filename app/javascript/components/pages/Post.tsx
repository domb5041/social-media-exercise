import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';
import styled from 'styled-components';

const StyledPost = styled.div`
    border: 1px solid black;
    width: 200px;
    margin-bottom: 10px;
`;

export default function Post({
    image,
    body,
    editMode,
    deletePost,
    setEditing,
    postId,
    getPosts,
    setPostFocus,
}) {
    const [bodyText, setBodyText] = useState('');

    const startEditing = () => {
        setEditing(postId);
        setBodyText(body);
    };

    const cancelEditing = () => {
        setEditing(null);
        setBodyText('');
    };

    const finishEditing = () => {
        api.editPost(postId, bodyText).then(() => {
            getPosts();
            setBodyText('');
            setEditing(null);
        });
    };

    return (
        <StyledPost onClick={setPostFocus}>
            <img src={image} style={{ width: '100%' }} />
            <div>{body}</div>
            <button onClick={deletePost}>delete</button>
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
            )}
        </StyledPost>
    );
}
