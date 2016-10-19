import React from 'react';
import Slot from './slot';
import { Item } from '../../services/config';

interface Props {
    items: Array<Item>;
    rows: number;
    columns: number;
}

export default class ProductsContainer extends React.Component<Props, {}> {

    private generateSlots(): Array<{ item: Item }> {
        return [
            { item: null },
            { item: null },
            { item: this.props.items[0] }
        ]
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
