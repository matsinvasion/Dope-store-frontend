import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { styled } from 'styled-components';

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
const Center = styled.div`
text-align: center;
`;

class Items extends Component {
    state = {  }
    render() { 
        return ( 
            <Center>
                <p>Items!</p>
                <Query query={ALL_ITEMS_QUERY }>
                    {({data,error,loading})=>{
                        if(loading) return <p>...Loading</p>;
                    if(error) return <p> Error: {error.message}</p>;
                    return <p>i found {data.items.length}</p>

                    }}

                </Query>
            </Center>
         );
    }
}
 
export default Items;