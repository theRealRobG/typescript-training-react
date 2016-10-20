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
        const rows = [];
        for (let rowIndex = 0; rowIndex < this.props.rows; rowIndex++) {
            const columns = [];
            for (let columnIndex = 0; columnIndex < this.props.columns; columnIndex++) {
                const code = this.getCodeForIndex(rowIndex) + this.getCodeForIndex(columnIndex);
                columns[columnIndex] = {
                    code,
                    item: this.getItemForPosition(code)
                }
            }
            rows[rowIndex] = columns;
        }
        return rows;
    }

    private getItemForPosition(code: string) {
        return this.props.items.find((item) => {
            return item.position === code;
        });
    }

    private getCodeForIndex(index: number) {
        return this.props.codes.length > index ? this.props.codes[index] : '';
    }

    render() {
        return (
            <div id="products-container" className="container">
                {this.getRowsOfSlots().map((columns, rowIndex) => {
                    return (
                        <div key={rowIndex} className="row">
                            {columns.map((column, columnIndex) => {
                                return <Slot key={columnIndex} item={column.item} code={column.code} />;
                            })}
                        </div>
                    )
                })}
            </div>
        );
    }
}
