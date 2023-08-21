import "./Card.css";
import React from 'react';

function Card(props) {
    const classes = 'card ' + props.className;
    //any value set on the class named prop is added to the string of class names
    return <div className={classes}>{props.children}</div>
}

export default Card;