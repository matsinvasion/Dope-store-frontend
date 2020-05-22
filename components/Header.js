import React, { Component } from 'react';
import Nav from './Nav';

const Header = () => {
    return ( 
        <div>
            <div className="bar">
                <a>dopeStore</a>
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