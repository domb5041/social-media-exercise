import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        width: 400px;
        height: 300px;
        background-color: white;
        border: 1px solid black;
    }
`;

export default function Modal({ children, showWhen, close }) {
    return (
        showWhen && (
            <StyledModal>
                <div>
                    <button onClick={close}>close</button>
                    {children}
                </div>
            </StyledModal>
        )
    );
}
