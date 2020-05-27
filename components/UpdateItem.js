import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../libs/formatMoney';
import Error from './ErrorMessage';

//the item being update
const SINGLE_ITEM_QUERY = gql`
query SINGLE_ITEM_QUERY($id: ID!){
     item(where: {id : $id}){
         id
         title
         description
         price
     }
}
`;
const UPDATE_ITEM_MUTATION = gql`
 mutation Update_ITEM_MUTATION(
     $id: ID!
     $title:String 
     $description:String 
     $price:Int
     )
     {
         updateItem(
             id:$id
             title: $title
             description: $description
             price: $price
         ){
             id
             title
             description
             price
         }
     }
 
`;

class UpdateItem extends Component {
    //state is blank for update
    state = { };
     handleChange = e =>{
         const {name, type, value} = e.target;
         const val = type ==='number' ? parseFloat(value) : value;
         //using computed properties
         this.setState({[name]:val}); 
     }
     updateItem = async (e, updateItemMutation) => {
         e.preventDefault();
         const res = await updateItemMutation({
             variables:{
                 id:this.props.id,
                 ...this.state
             }
         })
     }
  
    render() { 
        return ( 
            <Query query={SINGLE_ITEM_QUERY} variables={{id:this.props.id}}>
                
                {({data, loading})=> {
                    if(loading) return <p> ...Loading</p>
                if(!data.item) return <p>No items found for Id {this.props.id}</p>
                    //return the mutation nested inside query
                return (
                        <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                {(updateItem, { loading, error}) =>(
                    <Form onSubmit={e => this.updateItem(e,updateItem)}>
                        <Error error={error}/>
                    <fieldset disabled={loading} aria-busy={loading}>
                        <label htmlFor="title">
                            Title
                            <input type="text" id="title" name="title" placeholder="Title" required defaultValue={ data.item.title} onChange={this.handleChange}/>
                        </label>
                        <label htmlFor="price">
                            Price
                            <input type="number" id="price" name="price" placeholder="price" required defaultValue={ data.item.price} onChange={this.handleChange}/>
                        </label> 
                        <label htmlFor="description">
                            Description
                            <textarea type="text" id="description" name="description" placeholder="Enter a description" required defaultValue={ data.item.description} onChange={this.handleChange}/>
                        </label>
                        <button type="submit">
                            Sav{loading ? 'ing':'e'} Changes
                        </button>
                    </fieldset>
                </Form>

                )}

            </Mutation>
                    )
                }}

            </Query>
            
            
         );
    }
}
 
export default UpdateItem;
export {UPDATE_ITEM_MUTATION}