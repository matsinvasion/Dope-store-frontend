import App, { container } from 'next/app';

class MyApp extends Component {
    state = {  }
    render() { 
        //reference to current visited page
        const { Component} = this.props;
        return (  
            <container>
                <Component /> 
            </container>
        );
    }
}
 
export default MyApp ;