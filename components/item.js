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

const ItemsList = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 60px;
max-width:v${props => props.theme.maxWidth};
margin:auto;
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
                    return <ItemsList>
                        {data.items.map(item =><p>{item.title}</p> )}
                    </ItemsList>

                    }}

                </Query>
            </Center>
         );
    }
}
 
export default Items;