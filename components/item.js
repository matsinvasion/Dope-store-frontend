import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

//create query, name them same thing as the variable
const ALL_ITEMS_QUERY=gql`
query ALL_ITEMS_QUERY{
    items{
        id
        title
        description
        image
        largeI  mage
    }
}
`;


class Items extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p>Items!</p>
            </div>
         );
    }
}
 
export default Items;