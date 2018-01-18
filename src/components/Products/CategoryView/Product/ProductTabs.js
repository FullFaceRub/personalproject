import React from 'react';

export function Features (props) {
    return (
        <div>
            <div>{props.features}</div>
        </div>
    )
}

export function Dimensions (props) {
    console.log(props);
    return (
        <div>
            <div>{props.dimensions}</div>
        </div>
    )
}

export function Reviews (props) {
    return (
        <div>
            <div>{props.reviews}</div>
        </div>
    )
}