import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 50px;
    background-color: ${props => (props.secondary ? 'silver' : 'magenta')};
    color: ${props => (props.secondary ? 'black' : 'white')};
    font-size: 16px;
    text-align: center;
    padding: 5px 14px;
    cursor: pointer;
    outline: none;
    transition: 0.2s;
    &:hover {
        transform: scale(1.07);
    }
`;

export default function Button({
    text,
    onClick,
    disabled,
    style,
    showWhen,
    secondary,
}) {
    return (
        showWhen && (
            <StyledButton
                secondary={secondary}
                style={style}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </StyledButton>
        )
    );
}

Button.defaultProps = {
    text: 'Button',
    onClick: null,
    disabled: false,
    style: {},
    showWhen: true,
    secondary: false,
};
