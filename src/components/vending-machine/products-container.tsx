import React from 'react';
import Slot from './slot';
import { Item } from '../../services/config';

interface Props {
    items: Array<Item>;
    codes: Array<string>;
    rows: number;
    columns: number;
}

interface SlotData {
    code: string;
    item: Item;
}

export default class ProductsContainer extends React.Component<Props, {}> {

    private generateSlots(): Array<Array<SlotData>> {
        
        const rows = new Array<Array<SlotData>>(this.props.rows);
        rows.forEach((columns, index) => {
            const rowCode = this.getCodeForIndex(index);
            columns = new Array<SlotData>(this.props.columns);
            columns.forEach((column, index) => {
                const columnCode = this.getCodeForIndex(index);
                column = {
                    code: rowCode + columnCode,
                    item: null
                };
            })
        });

       return rows;
    }

    private getCodeForIndex(index: number) {
        return this.props.codes.length > index ? this.props.codes[index] : '';
    }

    render() {
        return (
            <div id="products-container" className="container">
                {this.generateSlots().map((slotData) => (
                    <div />
                ))}
            </div>
        );
    }
}
