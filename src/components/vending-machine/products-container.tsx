import React from 'react';
import Slot from './slot';

class Props {
    items: Array<any>;
    rows: number;
    columns: number;
}

export default class ProductsContainer extends React.Component<Props, {}> {
    render() {
        return (
            <div id="products-container" className="container">
                Products container<br />
                Columns: {this.props.columns}<br />
                Rows: {this.props.rows}<br />
                {this.props.items.map((item) => (
                    <Slot />
                ))}
            </div>
        );
    }
}
