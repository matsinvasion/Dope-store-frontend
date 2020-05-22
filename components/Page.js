import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

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