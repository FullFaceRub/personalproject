import React from 'react';

export default function Login(props) {

    return (
        <a href={process.env.REACT_APP_LOGIN + '?redirectto=' + props.url} className="navlinks mobchild">Login<div className="line"></div></a>
    )
}