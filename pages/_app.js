import React, { Component } from 'react';
import App, { container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

import Page from '../components/Page';

class MyApp extends Component {
    state = {  }
    render() { 
        //reference to current visited page
        const { Component, apollo } = this.props;
        return (  
            <container>
                <ApolloProvider client={apollo}>
                <Page>
                <Component />
                </Page>
                </ApolloProvider>
               
               
            </container>
        );
    }
}
 
export default withData(MyApp);