import React, { Component } from 'react';
import Nav from './Nav';
import { Link } from 'next/link';
import { styled } from 'styled-components';

const Logo = styled.h1`
font-size:4rem;
margin-left:2rem;
position:relative;
z-index:2;
transform:skew(-7);
a{
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color:white;
    text-transform: uppercase;
    text-decoration:none;
}
@media (max-width: 1300px) {
    margin:0;
    text-align:center;
}
`;
const Header = () => {
    return ( 
        <div>
            <div className="bar">
                <h1>
                <Link>
                <a>
                dopeStore
                </a>
                </Link></h1>
                
                <Nav />
            </div>
            <div classname="sub-bar">
                 <p>Search</p>
            </div>
            <div>
                Cart
            </div>
        </div>
     );
}
 
export default Header;