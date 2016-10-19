import React from 'react';
import ProductsContainer from './vending-machine/products-container';
import Display from './vending-machine/display';
import Keyboard from './vending-machine/keyboard';
import { getConfig, Config } from '../services/config';

interface State {
    config: Config;
    i: number;
}


export default class VendingMachine extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = { i: 0, config: { items: [], columns: 0, rows: 0 } };
    }

    componentDidMount() {
        const config = getConfig();
        this.setState({ config, i: 0 });

        setInterval(() => {
            this.setState({ config, i: this.state.i + 1 });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>Hello Vending Machine!</h1>
                <div id="vending-machine" className="container">
                    <ProductsContainer
                        items={this.state.config.items}
                        rows={this.state.config.rows}
                        columns={this.state.config.columns}
                        />
                    <Display i={this.state.i} />
                    <Keyboard />
                </div>
            </div>
        );
    }
}
