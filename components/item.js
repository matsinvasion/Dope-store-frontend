import React, { Component } from 'react';
import propTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import  styled  from 'styled-components';
import { Query } from 'react-apollo';
import formatMoney from '../libs/formatMoney';
import Link from 'next/link'; 
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';

class Item extends Component {
    static propTypes = {
        item: propTypes.shape({
            title:propTypes.object.isRequired
        })
    }
    state = {  }
    render() { 
        const { item } = this.props; 
        return ( 
            <ItemStyles>
                {item.image && <img src={item.image} alt={item.title}/>}
                <Title> 
                    <Link href={{
                        pathname:'/item',
                        query:{id: item.id},
                    }}>
                    <a>
                    {item.title}
                    </a>
                </Link> 
                </Title>
                <PriceTag>
                     {formatMoney(item.price)}
                </PriceTag>
                <p> {item.description}</p>

                <div className="buttonList">
                    <Link href={{
                        pathname:"update",
                        query:{id:item.id}
                    }}>
                    <a> Edit </a>
                    </Link>
                   <AddToCart id={item.id} />
                    <DeleteItem id={item.id}>Delete Item</DeleteItem>
                </div>
            </ItemStyles>
         );
    }
}
 
export default Item;