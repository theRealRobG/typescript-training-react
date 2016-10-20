import React from 'react'
import { Item } from '../../services/config';
import ItemComponent from './Item';

interface Props {
    item?: Item,
    code: string;
}

export default class Slot extends React.Component<Props, {}> {
    render() {
        const getImageUrlsForItems = (): Array<string> => {
            if (!this.props.item) {
                return [];
            }
            let imageUrls = new Array<string>();
            for (let i = 0; i < this.props.item.stock; i++) {
                imageUrls.push(this.props.item.imageUrl);
            }
            return imageUrls;
        }

        return (
            <div className="slot">
                { getImageUrlsForItems().map(imageUrl => <ItemComponent imageUrl={imageUrl} />) }
                <div className="slot-label">{this.props.code}</div>
            </div>
        );
    }
}
