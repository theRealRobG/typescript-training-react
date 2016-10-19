import React, { PropTypes } from 'react';
import { getConfig } from '../services/config';

class Config extends React.Component {
    constructor() {
        super();
        this.state = { config: null };
    }

    componentDidMount() {
        const config = getConfig();
        this.setState({ config });
    }

    render() {
        return <pre>{JSON.stringify(this.state.config, null, this.props.indent)}</pre>;
    }
}

Config.propTypes = {
    indent: React.PropTypes.number.isRequired
}

export default Config;
