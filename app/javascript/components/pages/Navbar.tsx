import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
`;

const StyledNavItem = styled.div`
    font-size: 20px;
    padding: 20px 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledNavItem>Login</StyledNavItem>
            <StyledNavItem>Posts</StyledNavItem>
            <StyledNavItem>Profile</StyledNavItem>
        </StyledNavbar>
    );
}
