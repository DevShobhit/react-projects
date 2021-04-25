import React, { useState } from "react";

function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(props.description);

    function handleChange(e) {
        setNewDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newDescription);
        setEditing(false);
    }

    //task editing template
    const editingTemplate = (
        <form className="task-editing-form" onSubmit={handleSubmit}>
            <input
                id={props.id}
                className="task-edit-input"
                type="text"
                autoComplete="off"
                value={newDescription}
                onChange={handleChange}
            />

            <div className="">
                <button
                    className='task-cancel-btn'
                    onClick={() => setEditing(false)}
                >
                    Cancel
                </button>
                <button type="submit" className="task-update-btn">
                    Save
                </button>
            </div>
        </form>
    );

    //task view template
    const viewTemplate = (
        <div className="task-view">
            <div className="task-grp">
                <input
                    id={props.id}
                    type="checkbox"
                    className='task-checkbox'
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label htmlFor={props.id} className='task-check-label'>
                    <span className='task-check-btn'></span>

                </label>

                <label className="task-desc" htmlFor={props.id}>
                    {props.description}
                </label>
            </div>
            <div className="task-control">
                <button
                    type="button"
                    className="task-edit-btn"
                    onClick={() => setEditing(true)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="task-delete-btn"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
    return <li className="task-item">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo
