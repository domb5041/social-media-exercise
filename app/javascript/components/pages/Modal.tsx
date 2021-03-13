import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
        width: 500px;
        max-width: 90vw;
        min-height: 300px;
        max-height: 90vh;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
        position: relative;
        display: flex;
        flex-direction: column;
    }
`;

const StyledHeader = styled.div`
    text-align: right;
    width: 100%;
    padding: 5px;
`;

const StyledClose = styled.button`
    border: none;
    background: none;
    font-size: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.1s;
    &:hover {
        transform: scale(1.1);
    }
`;

const StyledBody = styled.div`
    flex: 1;
    overflow: auto;
`;

export default function Modal({ children, showWhen, close }) {
    return (
        showWhen && (
            <StyledModal>
                <div>
                    <StyledHeader>
                        <StyledClose onClick={close}>
                            <i className='fas fa-times' />
                        </StyledClose>
                    </StyledHeader>
                    <StyledBody>{children}</StyledBody>
                </div>
            </StyledModal>
        )
    );
}
