import React, { Component } from 'react';
import Items from '../components/items';
import { Query } from 'react-apollo';
const Home = () => {
    return ( 
        <div>
            <Items page={parseFloat(props.query.page) || 1} />
        </div>
     );
}
 
export default Home;