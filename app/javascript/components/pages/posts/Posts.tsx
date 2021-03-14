import React, { useState, useEffect } from 'react';
import ApplicationLayout from '../../layouts/ApplicationLayout';
import * as api from '../../../apiRequests';
import Post from './Post';
import PostDetail from './PostDetail';
import LoadingOverlay from '../common/LoadingOverlay';
import CreatePost from './CreatePost';
import CreateUser from '../login/CreateUser';
import styled from 'styled-components';
import Navbar from '../common/Navbar';

const StyledPosts = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Posts({ currentUser }) {
    const [postFocus, setPostFocus] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const convertDate = date => {
        return Date.parse(date);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        setLoading(true);
        api.getPosts(100)
            .then(d => {
                setPosts(d.posts);
            })
            .then(() => setLoading(false));
    };

    return (
        <>
            <StyledPosts>
                <LoadingOverlay showWhen={loading} />
                <CreatePost getPosts={getPosts} currentUser={currentUser} />
                {!loading &&
                    posts
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
                                compact={false}
                            />
                        ))}
            </StyledPosts>

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
