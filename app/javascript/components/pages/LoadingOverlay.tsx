import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
`;

export default function Loading({ showWhen }) {
    return showWhen && <StyledLoading />;
}
