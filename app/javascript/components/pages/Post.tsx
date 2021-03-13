import React, { useState, useEffect } from 'react';
import * as api from '../../apiRequests';

export default function Post({
    image,
    body,
    editMode,
    deletePost,
    setEditing,
    postId,
    getPosts,
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
        <div
            style={{
                width: 200,
                border: '1px solid black',
                marginBottom: 10,
            }}
        >
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
        </div>
    );
}
