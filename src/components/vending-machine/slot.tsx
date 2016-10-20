import React from 'react'
import { Item } from '../../services/config';
import ItemComponent from './Item';

interface Props {
    item?: Item,
    code: string;
}

export default (props: Props) => {
    function getItems() {
        const items = new Array<JSX.Element>();
        let stockCount = props.item ? props.item.stock : 0;
        while (stockCount--) {
            items.push(<ItemComponent key={stockCount} imageUrl={props.item.imageUrl} />);
        }
        return items;
    }

    return (
        <div className="slot">
            { getItems() }
            <div className="slot-label">{props.code}</div>
        </div>
    );
}
