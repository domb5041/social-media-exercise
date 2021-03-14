import React, { useState, useEffect } from 'react';
import * as api from '../../../apiRequests';
import Modal from '../common/Modal';
import ProfileUserBadge from '../common/userBadges/ProfileUserBadge';
import Post from '../posts/Post';
import styled from 'styled-components';
import PostDetail from '../posts/PostDetail';
import LoadingOverlay from '../common/LoadingOverlay';

const StyledProfile = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const StyledPostGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    justify-content: center;
`;

export default function Profile({ currentUser }) {
    const [postFocus, setPostFocus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
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
                setPosts(d.posts.filter(post => post.user_id == currentUser));
            })
            .then(() => setLoading(false));
    };
    return (
        <>
            <StyledProfile>
                <LoadingOverlay showWhen={loading} />
                <ProfileUserBadge currentUser={currentUser} />
                {!loading && (
                    <StyledPostGrid>
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
                                    compact
                                />
                            ))}
                    </StyledPostGrid>
                )}
            </StyledProfile>
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
