import React from 'react';

export default function Label(props) {

    var labelStyle = {
        fontSize: 8,
        backgroundColor: '#' + props.color,
        padding: 3,
        margin: '3px 6px 3px 6 px',
        color: 'white',
        font: 'bold',
        borderRadius: 2
    };

    return (
        <span style={labelStyle}>{props.name}</span>
    );
};