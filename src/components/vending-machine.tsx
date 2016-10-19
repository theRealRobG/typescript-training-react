import React from 'react';
import ProductsContainer from './vending-machine/products-container';
import Display from './vending-machine/display';
import Keyboard from './vending-machine/keyboard';
import { getConfig } from '../services/config';

export default class VendingMachine extends React.Component<{}, {}> {
    constructor() {
        super();
        this.state = { config: null };
    }

    componentDidMount() {
        const config = getConfig();
        this.setState({ config });
    }

    render() {
        return (
            <div>
                <h1>Hello Vending Machine!</h1>
                <div id="vending-machine" className="container">
                    <ProductsContainer items={[]} rows={4} columns={3} />
                    <Display />
                    <Keyboard />
                </div>
            </div>
        );
    }
}
