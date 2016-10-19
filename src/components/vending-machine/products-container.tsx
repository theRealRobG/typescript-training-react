import React from 'react';

class Props {
    items: Array<any>;
    rows: number;
    columns: number;
}

export default class ProductsContainer extends React.Component<Props, {}> {
    render() {
        return (
            <div id="products-container">
                Products container<br />
                Columns: {this.props.columns}<br />
                Rows: {this.props.rows}<br />
                Items: <pre>{JSON.stringify(this.props.items, null, 2)}</pre><br />
            </div>
        );
    }
}
