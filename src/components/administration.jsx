import React from 'react';
import { getConfig } from '../services/config';

class Administration extends React.Component {

    constructor() {
        super();
        this.state = { config: null };
    }

    componentDidMount() {
        const config = getConfig();
        this.setState({ config });
    }

    render() {
        return(
            <div>
                <h1>Welcome to Vending machine Administration section!</h1>
                <pre>{JSON.stringify(this.state.config, null, 2)}</pre>
            </div>
        );
    }
}

export default Administration;
