import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    z-index: 1000;
`;

export default function Loading({ showWhen }) {
    return showWhen && <StyledLoading>Loading...</StyledLoading>;
}
