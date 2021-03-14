import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import LoadingOverlay from './LoadingOverlay';

const modalSizes = {
    small: { width: '500px', height: '300px' },
    large: { width: '800px', height: '100%' },
};

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    padding: 10px;
    & .modal-panel {
        width: ${props => modalSizes[props.size].width};
        height: ${props => modalSizes[props.size].height};
        max-width: 100vw;
        max-height: 100vh;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
        position: relative;
        display: flex;
        flex-direction: column;
        transition: 0.2s;
    }
    &.modal-enter {
        opacity: 0;
        & .modal-panel {
            transform: scale(0.8);
        }
    }
    &.modal-enter-active {
        opacity: 1;
        transition: 0.2s;
        & .modal-panel {
            transform: scale(1);
        }
    }
    &.modal-exit {
        opacity: 1;
        & .modal-panel {
            transform: scale(1);
        }
    }
    &.modal-exit-active {
        opacity: 0;
        transition: 0.2s;
        & .modal-panel {
            transform: scale(0.8);
        }
    }
`;

const StyledHeader = styled.div`
    padding: 5px;
    & > h4 {
        flex: 1;
        margin: 0;
        font-size: 20px;
        margin-left: 5px;
    }
`;

const StyledClose = styled.button`
    border: none;
    background: none;
    font-size: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0;
    transition: 0.1s;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.4);
    outline: none;
    border-bottom-left-radius: 10px;
`;

const StyledBody = styled.div`
    flex: 1;
    overflow: auto;
`;

const StyledFooter = styled.div`
    border-top: 1px solid black;
    padding: 10px;
`;

export default function Modal({
    title,
    children,
    showWhen,
    close,
    size,
    loading,
    footerElements,
}) {
    return (
        <CSSTransition
            in={showWhen}
            unmountOnExit
            timeout={200}
            classNames='modal'
        >
            <StyledModal size={size}>
                <div className='modal-panel'>
                    <LoadingOverlay showWhen={loading} />
                    {title && (
                        <StyledHeader>
                            <h4>{title}</h4>
                        </StyledHeader>
                    )}
                    <StyledBody>{children}</StyledBody>
                    <StyledClose onClick={close}>
                        <i className='fas fa-times' />
                    </StyledClose>
                    {footerElements && (
                        <StyledFooter>{footerElements}</StyledFooter>
                    )}
                </div>
            </StyledModal>
        </CSSTransition>
    );
}

Modal.defaultProps = {
    size: 'small',
    loading: false,
};
