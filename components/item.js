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
                <Query query={ALL_ITEMS_QUERY }>
                    {({data,error,loading})=>{
                        if(loading) return <p>...Loading</p>;
                    if(errror) return <p> Error: {error.message}</p>;
                    return <p>i found {data.items.length}</p>

                    }}

                </Query>
            </div>
         );
    }
}
 
export default Items;