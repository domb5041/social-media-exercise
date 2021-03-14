import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
`;

const StyledNavItem = styled(Link)`
    font-size: 20px;
    padding: 20px 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    color: black;
`;

export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledNavItem to='/login'>Login</StyledNavItem>
            <StyledNavItem to='/posts'>Posts</StyledNavItem>
            <StyledNavItem to='/profile'>Profile</StyledNavItem>
        </StyledNavbar>
    );
}
