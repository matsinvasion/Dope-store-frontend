import React, { Component } from 'react';
import App, { container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

import Page from '../components/Page';

class MyApp extends Component {
    state = {  }
    static async getInitialProps({Component, ctx}){
        let pageProps = {};
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.query = ctx.query;
        return { pageProps  }
    }
    render() { 
        //reference to current visited page
        const { Component, apollo, pageProps } = this.props;
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