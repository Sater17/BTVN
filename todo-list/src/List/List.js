import React from 'react';
import './list.css';

function List(props) {
    return (
        <div className="list">
            <i>Event: </i>
            <span>{props.event}</span><br></br>
            <i>Deadline: </i>
            <span>{props.deadline}</span>
        </div>
    )
}
export default List;