import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border-radius: 50px;
    border: 2px solid ${props => props.theme.border};
    background-color: ${props => props.theme.foregroundDark};
    color: ${props => props.theme.foreground};
    font-size: 16px;
    padding: 5px 14px;
    outline: none;
`;

export default function TextInput({
    type,
    onChange,
    value,
    style,
    placeholder,
}) {
    return (
        <StyledInput
            style={style}
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    );
}

TextInput.defaultProps = {
    type: 'text',
    onChange: null,
    value: null,
    style: {},
    placeholder: '',
};
