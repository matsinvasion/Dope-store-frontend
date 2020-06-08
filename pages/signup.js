import React from 'react';

import Signup from '../components/Signup';
import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import Signin from '../components/Signin';

const Columns = styled.div`
display:grid; 
grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
grid-gap:20px; 
`;
const Signuppage = () => {
    return ( 
        <Columns>
            <Signup />
            <Signin />
            <RequestReset />
        </Columns>
     );
}
 
export default Signuppage;