import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled,{ ThemeProvider,injectGlobal } from 'styled-components';

const theme = {
    red:'#FF0000',
    black:'#393939',
    grey:'#3A3A3A',
    lightgrey:'#E1E1E1',
    maxWidth:'1000px',
    bs:'0 12px 24px 0 rgba(0,0,0,0.09)',
}

const styledPage = styled.div`
 background:white;
 color:${props => props.theme.black}:`;


 const Inner = styled.div`
 max-width:${props => props.theme.maxwidth};
 margin:0 auto;
 padding:2rem`;

injectGlobal`
html{
    box-sizing:border-box;
    font-size:10px;
}
*,*:before,*:after{
    box-sizing:inherit;
}
body{
    padding:0;
    margin: 0;
    font-size:1.5rem;
    line-height:2;
    font-family: 'radnika_next';
}
a{
    text-decoration: none;
    color: ${theme.black};
}
`;
 class Page extends Component {
     state = {  }
     render() { 
         return ( 
             <ThemeProvider>
             <styledPage>
             <Meta />
             <Header />
                <Inner>{this.props.children}</Inner>
             </styledPage>
             </ThemeProvider>
          );
     }
 }
  
 export default Page;