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

    private getRowsOfSlots(): Array<Array<SlotData>> {

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
    
    private getItemForPosition(positon: [number, number] ) {
        return this.props.items.find((item) => {
            return item.position[0] === positon[0] && item.position[1] === item.position[1];
        })
    }

    private getCodeForIndex(index: number) {
        return this.props.codes.length > index ? this.props.codes[index] : '';
    }

    render() {
        return (
            <div id="products-container" className="container">
                {this.getRowsOfSlots().map((columns) => (
                    <div className="row">
                        {columns.map((column) => {
                            <Slot item={column.item} code={column.code} />
                        })};
                    </div>
                ))}
            </div>
        );
    }
}
