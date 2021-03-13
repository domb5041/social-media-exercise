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
    background-color: rgba(0, 0, 0, 0.5);
    & > div {
        width: 400px;
        min-height: 300px;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
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
