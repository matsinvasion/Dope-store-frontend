import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ALL_ITEMS_QUERY } from './items'; 
import gql from 'graphql-tag';

const DELETE_ITEM_MUTATION= gql`
     mutation DELETE_ITEM_MUTATION($id: ID!){
         deleteItem(id:$id){
             id
         }
     }
`;

class DeleteItem extends Component {
    state = {  }
    //apollo will give us access to the cache once update happens 
    //payload is data sent back by server after delete
    update = (cache,payload) =>{
        //manually update the cache on the client, so it matches the server
        //read the cache so as to get items we want/deleted one. we use query to READ and WRITE into the cache 
        const data = cache.readQuery({ query: ALL_ITEMS_QUERY});
        //filter out deleted item
        data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
        //put the items back!
        cache.writeQuery({ query: ALL_ITEMS_QUERY, data })
    }
    render() { 
        return ( 
        <Mutation mutation={DELETE_ITEM_MUTATION} variables={ {id:this.props.id}} update={this.update}>
            {(deleteItem,{error}) =>(
            <button onClick={() =>{if(confirm('Are you sure want to delete this item?')){ deleteItem()}}}>
                {this.props.children}
            </button>
            )}
       
        </Mutation>
      
         );
    }
}
 
export default DeleteItem;