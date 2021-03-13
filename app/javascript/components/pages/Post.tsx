import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.div`
    border: 1px solid black;
    width: 200px;
    margin-bottom: 10px;
`;

export default function Post({ image, body, setPostFocus }) {
    return (
        <StyledPost onClick={setPostFocus}>
            <img src={image} style={{ width: '100%' }} />
            <div>{body}</div>
        </StyledPost>
    );
}
