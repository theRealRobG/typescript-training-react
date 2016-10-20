import React from 'react';
import ProductsContainer from './vending-machine/products-container';
import Display from './vending-machine/display';
import Keyboard from './vending-machine/keyboard';
import { getConfig, Config } from '../services/config';

interface State {
    config: Config;
    textToDisplay: string;
}

export default class VendingMachine extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
            textToDisplay: '',
            config: { items: [], codes: [], columns: 0, rows: 0 }
        };
    }

    public componentDidMount() {
        const config = getConfig();
        this.setState(Object.assign(this.state, {config}));
    }

    private handleTextToDisplayChanged(textToDisplay: string) {
        this.setState(Object.assign(this.state, { textToDisplay }))
    }

    private onItemCodeEntered(slotCode: string) {
        let newState = Object.assign({}, this.state);

        const itemToModify = newState.config.items.find(item => item.position === slotCode && item.stock > 0);
        if (itemToModify) {
            itemToModify.stock--;
        }

        this.setState(newState);
    }

    public render() {
        return (
            <div id="vending-machine" className="container">
                <ProductsContainer
                    items={this.state.config.items}
                    codes={this.state.config.codes}
                    rows={this.state.config.rows}
                    columns={this.state.config.columns}
                    />
                <Display text={this.state.textToDisplay} />
                <Keyboard displayText={(text) => this.handleTextToDisplayChanged(text)} sequenceLenght={2} onSequenceFinished={(code) => { this.onItemCodeEntered(code) } } />
            </div>
        );
    }
}
