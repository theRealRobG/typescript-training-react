import React from 'react';
import Config from './config';

class Administration extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome to Vending machine Administration section!</h1>
                <Config indent={2}/>
            </div>
        );
    }
}

export default Administration;
