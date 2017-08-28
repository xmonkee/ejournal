import React from 'react';

export function Container(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export function Row(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}

export function Column(props) {
    return (
        <div className="column">
            {props.children}
        </div>
    )
}
