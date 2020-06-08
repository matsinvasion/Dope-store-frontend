import React, { Component } from 'react';
import Reset from '../components/Reset';

const reset = (props) => {
    return ( 
        <div>
            <p>Reset password {props.query.resetToken}</p>
            <Reset resetToken={props.query.resetToken} />
        </div>
     );
}
 
export default reset;