import React from 'react';

interface Props {
    i: number
}

export default class Display extends React.Component<Props, {}> {
    render() {
        return (
            <div id="display">
                Display { this.props.i}
            </div>
        );
    }
}
