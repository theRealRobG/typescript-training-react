import React from 'react'

interface Props {
    imageUrl: string
}

export default (props: Props) => {
    return <img className="item" src={props.imageUrl} />;
}
