import React from 'react';

import CreateItem from '../components/CreateItems';
import PleaseSignIn from '../components/Pleasesignin';

const Sell = props => {
    return ( 
        <div>
            <PleaseSignIn>
            <CreateItem/>
            </PleaseSignIn>
          
        </div>
     );
}
 
export default Sell;
