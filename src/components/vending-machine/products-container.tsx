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
                columns[columnIndex] = {
                    code: this.getCodeForIndex(rowIndex) + this.getCodeForIndex(columnIndex),
                    item: this.getItemForPosition([rowIndex, columnIndex])
                }
            }
            rows[rowIndex] = columns;
        }
        return rows;
    }
    
    private getItemForPosition(position: [number, number] ) {
        return this.props.items.find((item) => {
            return item.position[0] === position[0] && item.position[1] === position[1];
        });
    }

    private getCodeForIndex(index: number) {
        return this.props.codes.length > index ? this.props.codes[index] : '';
    }

    render() {
        return (
            <div id="products-container" className="container">
                {this.getRowsOfSlots().map((columns, rowIndex) => {return (
                    <div key={rowIndex} className="row">
                        {columns.map((column, columnIndex) => {
                            return <Slot key={columnIndex} item={column.item} code={column.code} />;
                        })}
                    </div>
                )})}
            </div>
        );
    }
}
