import React from 'react'
import { Item } from '../../services/config';

interface Props {
    item: Item
}

export default class Slot extends React.Component<Props, {}> {
    render() {
        return (
            <div class="slot">
                Slot containing {this.props.item ? this.props.item.name : 'nothing'}
            </div>
        );
    }
}
