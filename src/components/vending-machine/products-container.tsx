import React from 'react';
import Slot from './slot';
import { Item } from '../../services/config';

interface Props {
    items: Array<Item>;
    codes: Array<string>;
    rows: number;
    columns: number;
}

export default class ProductsContainer extends React.Component<Props, {}> {

    private generateSlots(): Array<{ item: Item }> {
        
        const rows = new Array<Array<Slot>>(this.props.rows);
        rows.forEach((columns, index) => {
            const rowCode = this.getCodeForIndex(index);
            columns = new Array<Slot>(this.props.columns);
            columns.forEach((column, index) => {
                const columnCode = this.getCodeForIndex(index);
                
            })
        });


        return [
            { item: null },
            { item: null },
            { item: this.props.items[0] }
        ]
    }

    private getCodeForIndex(index: number) {
        return this.props.codes.length > index ? this.props.codes[index] ? '';
    }

    render() {
        return (
            <div id="products-container" className="container">
                {this.generateSlots().map((slotInfo) => (
                    <Slot item={slotInfo.item} />
                ))}
            </div>
        );
    }
}
