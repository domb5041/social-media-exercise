import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.textarea`
    border-radius: 10px;
    border: 2px solid ${props => props.theme.border};
    background-color: ${props => props.theme.foregroundDark};
    color: ${props => props.theme.foreground};
    font-size: 16px;
    padding: 14px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    resize: none;
    font-family: sans-serif;
`;

export default function TextArea({
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

TextArea.defaultProps = {
    type: 'text',
    onChange: null,
    value: null,
    style: {},
    placeholder: '',
};
