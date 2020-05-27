import React from 'react';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { perPage } from '../config';


const PAGINATION_QUERY=gql`
query PAGINATION_QUERY {
    itemsConnection{
        aggregate{
            count
        }
    }
}
`;

const Pagination = () => {
    return ( 

        <Query query={PAGINATION_QUERY}>
            {({data,loading,error,}) =>{
                if (loading) return <p>Loadding ...</p>
                const count = data.itemsConnection.aggregate.count;
                const pages = Math.ceil(count /perPage);
                const page = props.page; 
                
                    return <PaginationStyles>
                        <Link prefetch href={{
                            pathname:"items",
                            query: {page:page-1}
                        }}>
                            <a className="prev" aria-disabled={page <= 1}> Prev</a>
                        </Link>
                        <p>
                            Page {props.page} of {pages} 
                        </p>
                    <p>{count} I tems Total</p>
                    <Link prefetch href={{
                            pathname:"items",
                            query: {page:page+ 1}
                        }}>
                            <a className="prev" aria-disabled={page >= pages}> Next</a>
                        </Link>
                </PaginationStyles>
                
            }}
            
        </Query>
       
     );
}
 
export default Pagination;

