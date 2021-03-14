import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import * as api from '../apiRequests';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid silver;
`;

const StyledNavItem = styled(Link)`
    padding: 10px 40px;
    text-decoration: none;
    color: black;
    width: 70px;
    text-align: center;
    & .nav-label {
        font-size: 14px;
        font-weight: bold;
        text-transform: capitalize;
        color: ${props => (props.active ? 'magenta' : 'black')};
    }
    & .nav-icon {
        background-color: ${props => (props.active ? 'magenta' : 'black')};
        border-color: ${props => (props.active ? 'magenta' : 'black')};
        border-style: solid;
        border-width: 2px;
        width: 50px;
        height: 50px;
        color: white;
        margin-bottom: 5px;
        border-radius: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        overflow: hidden;
    }
    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export default function Navbar({ currentUser }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        getUser();
    }, [currentUser]);

    const getUser = () => {
        api.getUser(currentUser).then(d => {
            setUser(d.user);
        });
    };

    const getPath = () => {
        const location = useLocation();
        return location.pathname;
    };

    return (
        <StyledNavbar>
            <StyledNavItem to='/login' active={getPath() === '/login'}>
                <div className='nav-icon'>
                    <i className='fas fa-users'></i>
                </div>
                <div className='nav-label'>Login</div>
            </StyledNavItem>
            <StyledNavItem to='/posts' active={getPath() === '/posts'}>
                <div className='nav-icon'>
                    <i className='fas fa-images'></i>
                </div>
                <div className='nav-label'>Posts</div>
            </StyledNavItem>
            <StyledNavItem to='/profile' active={getPath() === '/profile'}>
                <div className='nav-icon'>
                    {user.image_url ? (
                        <img src={user.image_url} />
                    ) : (
                        <i className='fas fa-user'></i>
                    )}
                </div>
                <div className='nav-label'>{user.firstname}</div>
            </StyledNavItem>
        </StyledNavbar>
    );
}
