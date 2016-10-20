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
        let rows = new Array(this.props.rows);
        for (let i = 0; i < rows.length; i++) {
            let columns = new Array(this.props.columns);
            for (let j = 0; j < columns.length; j++) {
                columns[j] = {
                    code: this.getCodeForIndex(i) + this.getCodeForIndex(j),
                    item: this.getItemForPosition([i, j])
                }
            }
            rows[i] = columns;
        }
        return rows;
    }
    
    private getItemForPosition(positon: [number, number] ) {
        return this.props.items.find((item) => {
            return item.position[0] === positon[0] && item.position[1] === item.position[1];
        });
    }

    private getCodeForIndex(index: number) {
        return this.props.codes.length > index ? this.props.codes[index] : '';
    }

    render() {
        let rowsForSlots = this.getRowsOfSlots();
        return (
            <div id="products-container" className="container">
                {rowsForSlots.map((columns, index) => {return (
                    <div key={rowsForSlots[index][0].code[0]} className="row">
                        {columns.map((column) => {
                            return <Slot key={column.code[1]} item={column.item} code={column.code} />;
                        })}
                    </div>
                )})}
            </div>
        );
    }
}
