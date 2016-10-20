import React from 'react';

interface Props {
    text: string;
}

export default class Display extends React.Component<Props, {}> {
    render() {
        return (
            <div id="display">
                {this.props.text}
            </div>
        );
    }
}
