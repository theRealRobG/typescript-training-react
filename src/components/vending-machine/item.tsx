import React from 'react'

interface Props {
    imageUrl: string
}

export default class Item extends React.Component<Props, {}> {
    render() {
        return <img className="item" src={this.props.imageUrl} />;
    }
}
