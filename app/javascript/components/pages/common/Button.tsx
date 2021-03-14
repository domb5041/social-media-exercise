import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    min-width: 30px;
    background-color: magenta;
    color: white;
    font-size: 16px;
    text-align: center;
`;

export default function Button({ text, icon, onClick, disabled }) {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {icon && <i className='fas fa-times' />}
            {text && text}
        </StyledButton>
    );
}
