import React from 'react'
import './taskFilterBar.css'

function TaskFilterBar(props) {
    return (
        <button
            type="button"
            className="filter-btns"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            {props.name}
        </button>
    );

}

export default TaskFilterBar
