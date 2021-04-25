import './notes.css';
import { React, useState } from 'react';
import { BsPencil, BsTrash } from "react-icons/bs";

function Note(props) {
    const [isEditing, setEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(props.description);
    const [newTitle, setNewTitle] = useState(props.title)

    function handleDescChange(e) {
        setNewDescription(e.target.value);
    }

    function handleTitleChange(e) {
        setNewTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editNote(props.id, newDescription, newTitle);
        setEditing(false);
    }

    //Notes Editing Template
    const notesEditingTemplate = (
        <form
            action=""
            className='note-editing-form'
            onSubmit={handleSubmit}
        >

            <label htmlFor={props.id} className='note-label'>
                Title
            </label>
            <input
                id={props.id}
                className="note-title-input"
                type="text"
                value={newTitle}
                autoComplete={false}
                onChange={handleTitleChange}
            />

            <label htmlFor={props.id} className='note-label'>
                Description
            </label>
            <textarea
                id={props.id}
                type="text"
                className='note-desc-input'
                value={newDescription}
                onChange={handleDescChange}
            />

            <div className="update-control">
                <button
                    className='update-btn'
                    onClick={() => setEditing(false)}
                >
                    Cancel
                </button>

                <button type='submit' className='update-btn update-save-btn'>
                    Update
                </button>
            </div>
        </form>
    )

    //Notes View Template
    const notesViewTemplate = (
        <div className="note">
            <div className="note-date">{Date().slice(4, 15)}</div>
            <div className="note-title">{props.title}</div>
            <div className="note-content">
                {props.description}
            </div>

            <div className="note-bottom-bar">
                <div
                    className="note-edit-btn"
                    onClick={() => setEditing(true)}
                >
                    <BsPencil />
                </div>
                <div
                    className="note-delete-btn"
                    onClick={() => props.deleteNote(props.id)}
                >
                    <BsTrash />
                </div>
            </div>

        </div>
    );

    return (<div className='notes-cont'>
        { isEditing ? notesEditingTemplate : notesViewTemplate}
    </div>
    )
}

export default Note

















