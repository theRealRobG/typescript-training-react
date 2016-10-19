import React from 'react';
import ProductsContainer from './vending-machine/products-container';
import Display from './vending-machine/display';
import Keyboard from './vending-machine/keyboard';

export default class VendingMachine extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Hello Vending Machine!</h1>
                <div id="vending-machine" className="border red">
                    <ProductsContainer />
                    <Display />
                    <Keyboard />
                </div>
            </div>
        );
    }
}
