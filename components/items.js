import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { perPage } from '../config';
import gql from 'graphql-tag';
import  styled from 'styled-components';
import Item from './item';
import Pagination from './Pagination';

//create query, name them same thing as the variable
const ALL_ITEMS_QUERY=gql`
query ALL_ITEMS_QUERY($skip: Int =0, $first: Int=${perPage}){
    items(first:$first, skip:$skip){
        id
        title
        description
        image
        largeImage
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
                <Pagination page={this.props.page}/>
                <p>Items!</p>
                <Query query={ALL_ITEMS_QUERY}  variables={{skip:this.props.page * perPage - perPage}}>
                    {({data,error,loading})=>{
                        if (loading) return <p>...Loading</p>;
                    if (error) return <p> Error: {error.message}</p>;
                    return <ItemsList>
                        {data.items.map(item =><Item item={item} key={item.id}>{item.title}</Item> )}
                    </ItemsList>

                    }}

                </Query>
                <Pagination page={this.props.page} />
               
            </Center>
         );
    }
}
 
export default Items;
export { ALL_ITEMS_QUERY  }