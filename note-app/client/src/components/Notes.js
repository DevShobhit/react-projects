import React, { useState } from "react";
import Note from './note'
import './notes.css'
const axios = require('axios')


//NotesEditor
function NotesForm(props) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  function handleDesChange(e) {
    setDescription(e.target.value);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addNote(title, description);
    setDescription("");
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className='note-add-form'>
      <label htmlFor="title" className='notes-title'>Title</label>
      <input
        type="text"
        id='title'
        className='notes-title-input'
        value={title}
        onChange={handleTitleChange}
      />

      <label htmlFor="new-note" className='notes-desc'>Description</label>
      <textarea
        type="text"
        id="new-note"
        className="notes-desc-input"
        autoComplete="off"
        value={description}
        onChange={handleDesChange}
      />

      <button type="submit" className="notes-add-btn">
        Add Note
    </button>
      <button type='reset' className='notes-clear-btn'>Clear</button>
    </form>
  );
}



//Notes
function Notes(props) {
  const [notes, setNotes] = useState(props.notes);

  //Adding Note
  function addNote(title, description) {
    const newNote = { description: description, title: title };
    if (description !== "") {
      axios({
        method: 'post',
        url: `http://localhost:3001/notes/`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("user")}`
        },
        data: {
          title: `${title}`,
          description: `${description}`
        }
      });
      setNotes([...notes, newNote]);
    }


  }

  //Editing Note
  function editNote(_id, newDescription, newTitle) {
    const editedNotesList = notes.map(note => {
      if (_id === note._id && newDescription) {
        return { ...note, description: newDescription, title: newTitle }
      }
      return note;
    });

    //axios request
    axios({
      method: 'patch',
      url: `http://localhost:3001/notes/${_id}`,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("user")}`
      },
      data: {
        title: `${newTitle}`,
        description: `${newDescription}`
      }
    })
    setNotes(editedNotesList);
  }

  //Delete Note
  function deleteNote(_id) {
    const remainingNotes = notes.filter(note => _id !== note._id);

    //axios request
    axios({
      method: 'delete',
      url: `http://localhost:3001/notes/${_id}`,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("user")}`
      }
    })

    setNotes(remainingNotes);
  }

  const notesList = notes.map(note => (
    <Note
      id={note._id}
      title={note.title}
      description={note.description}
      key={note._id}
      deleteNote={deleteNote}
      editNote={editNote}
    />
  ));

  return (
    <div className="notes-large-cont">
      <NotesForm addNote={addNote} />
      <div className="notes-list">
        {notesList}
      </div>
    </div>

  )

}

export default Notes;
