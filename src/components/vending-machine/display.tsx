import React from 'react';

interface Props {
    text: string;
}

export default (props: Props) => {
    return (
        <div id="display">
            {props.text}
        </div>
    );
}
