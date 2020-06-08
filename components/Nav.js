import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import  gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Signout from './Signout';
import CartCount from './CartCount';

//failing to place this here and importing it from cart.js causes error - passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert
//gql imports require extra pampering.
const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;
const Nav = () => (
  //problem is the mutation call.
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
      
      <NavStyles data-test="nav">
      
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />
          
            
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {(toggleCart) => (
                <button onClick={toggleCart}> 
                My Cart
                <CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>
                </button>
              )}
              
            </Mutation>
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>

        )}
      </NavStyles>
    )
    }}
  </User>
);
 
export default Nav;