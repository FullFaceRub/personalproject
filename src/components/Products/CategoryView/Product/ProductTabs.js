import React from 'react';

export function Features (props) {
    return (
        <div className="tabDet">
            <div>{props.features}</div>
        </div>
    )
}

export function Dimensions (props) {
    return (
        <div className="tabDet">
            <div>{props.dimensions}</div>
        </div>
    )
}

export function Reviews (props) {
    return (
        <div className="tabDet">
            <div>{props.reviews}</div>
        </div>
    )
}