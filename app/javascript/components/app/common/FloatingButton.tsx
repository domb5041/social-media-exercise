import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.foregroundDark};
    font-size: 25px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);
    outline: none;
    &:hover {
        transform: translateX(-50%) scale(1.1);
    }
`;

export default function Button({ icon, onClick }) {
    return (
        <StyledButton onClick={onClick}>
            <i className={icon} />
        </StyledButton>
    );
}

Button.defaultProps = {
    icon: 'fas fa-plus',
};
