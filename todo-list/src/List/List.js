import React from 'react';
import './list.css';

function List(props) {
    return (
        <div>
            <br>Event:</br>
            <p>{props.event}</p>
            <br>Deadline:</br>
            <p>{props.deadline}</p>
        </div>
    )
}
export default List;