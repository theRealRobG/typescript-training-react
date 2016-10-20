import React from 'react'
import { Item } from '../../services/config';
import ItemComponent from './Item';

interface Props {
    item?: Item,
    code: string;
}

export default class Slot extends React.Component<Props, {}> {
    private getItems() {
        const items = new Array<JSX.Element>();
        let stockCount = this.props.item ? this.props.item.stock : 0;
        while (stockCount--) {
            items.push(<ItemComponent key={stockCount} imageUrl={this.props.item.imageUrl} />);
        }
        return items;
    }

    render() {
        return (
            <div className="slot">
                { this.getItems() }
                <div className="slot-label">{this.props.code}</div>
            </div>
        );
    }
}
