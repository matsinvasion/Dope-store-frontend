import App, { container } from 'next/app';

import Page from '../components/Page';

class MyApp extends Component {
    state = {  }
    render() { 
        //reference to current visited page
        const { Component} = this.props;
        return (  
            <container>
                <Page>
                <Component />
 
                </Page>
               
            </container>
        );
    }
}
 
export default MyApp ;