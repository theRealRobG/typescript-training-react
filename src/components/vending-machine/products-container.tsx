import React from 'react';

class Props {
    items: Array<any>;
    rows: number;
    columns: number;
}

export default class ProductsContainer extends React.Component<Props, {}> {
    render() {
        return (
            <div id="product-container" className="container">
                Products container
            </div>
        );
    }
}
