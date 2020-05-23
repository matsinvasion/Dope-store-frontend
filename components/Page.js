import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import { black } from '../.next/static/runtime/main';

const theme = {
    red:'#FF0000',
    black:'#393939',
    grey:'#3A3A3A',
    lightgrey:'#E1E1E1',
    maxWidth:'1000px',
    bs:'0 12px 24px 0 rgba(0,0,0,0.09)',
}

 class Page extends Component {
     state = {  }
     render() { 
         return ( 
             <div>
                 <p>Hey an the Page componet</p>
                 <Meta />
                 <Header />
                 {this.props.children}
             </div>
          );
     }
 }
  
 export default Page;