import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../../layouts/ApplicationLayout';
import * as api from '../../../apiRequests';
import Post from './Post';
import PostDetail from './PostDetail';
import LoadingOverlay from '../LoadingOverlay';
import CreatePost from './CreatePost';
import CreateUser from '../CreateUser';
import styled from 'styled-components';
import Navbar from '../Navbar';

const StyledPosts = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Posts({ loading, getPosts, currentUser, posts }) {
    const [postFocus, setPostFocus] = useState(null);

    const convertDate = date => {
        return Date.parse(date);
    };

    return (
        <>
            {!loading && (
                <StyledPosts>
                    <CreatePost getPosts={getPosts} currentUser={currentUser} />
                    {posts
                        .filter(post => post.state === 'published')
                        .sort(
                            (a, b) =>
                                convertDate(b.created_at) -
                                convertDate(a.created_at)
                        )
                        .map((post, i) => (
                            <Post
                                key={i}
                                image={post.image_url}
                                body={post.body}
                                setPostFocus={() => setPostFocus(post.id)}
                                userId={post.user_id}
                            />
                        ))}
                </StyledPosts>
            )}

            {postFocus && (
                <PostDetail
                    postId={postFocus}
                    close={() => setPostFocus(null)}
                    getPosts={getPosts}
                    currentUser={currentUser}
                />
            )}
        </>
    );
}
