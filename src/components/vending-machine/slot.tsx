import React from 'react'
import { Item } from '../../services/config';

interface Props {
    item?: Item,
    code: string;
}

export default class Slot extends React.Component<Props, {}> {
    render() {
        return (
            <div className="slot">
                Slot containing {this.props.item ? this.props.item.name : 'nothing'}
            </div>
        );
    }
}
