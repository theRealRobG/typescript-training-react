import React from 'react'

interface Props {
    imageUrl: string
}

export default (props: Props) => {
    return <div className="item" style={{backgroundImage: `url(${props.imageUrl})`}} />;
}
