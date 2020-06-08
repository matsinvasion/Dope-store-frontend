import React, { Component } from 'react';
import Items from '../components/items';

const Home = (props) => {
    return ( 
        <div>
            <Items page={parseFloat(props.query.page) || 1} />
        </div>
     );
}
 
export default Home;