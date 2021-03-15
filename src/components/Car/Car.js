import React from 'react'

const Car = props => (
    <div>
        <h3>{props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onClick}> слик по мне </button>
    </div>
);

export default Car