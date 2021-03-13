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
        min-height: 300px;
        background-color: white;
        padding: 10px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
        position: relative;
    }
`;

const StyledClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: silver;
    transition: 0.1s;
    &:hover {
        color: white;
        background-color: red;
    }
`;

export default function Modal({ children, showWhen, close }) {
    return (
        showWhen && (
            <StyledModal>
                <div>
                    <StyledClose onClick={close}>
                        <i className='fas fa-times' />
                    </StyledClose>
                    {children}
                </div>
            </StyledModal>
        )
    );
}
