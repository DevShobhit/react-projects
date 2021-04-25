import React, { useState } from "react";

function Form(props) {
    const [description, setDescription] = useState("");

    function handleChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(description);
        setDescription("");
    }
    return (
        <form onSubmit={handleSubmit} className='new-task-form'>
            <input
                type="text"
                id="new-task"
                className="new-task-input"
                description="text"
                autoComplete="off"
                value={description}
                onChange={handleChange}
            />
            <button type="submit" className="task-add-btn">
                Add
      </button>
        </form>
    );
}

export default Form;