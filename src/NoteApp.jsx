import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NoteList from './components/NoteList';

export default function NoteApp() {
  const STORAGE = 'NOTES';
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE)) || []
  );
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(notes));
  }, [notes]);

  function handleSearchTitle(event) {
    setSearchTitle(event.target.value);
  }

  function handlerNotes(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function onArchivedHandler(id) {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(newNotes);
  }

  function onDeleteHandler(id) {
    const answer = window.confirm('Apakah anda yakin?');
    if (!answer) return;
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  }
  const activeNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  const archivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  return (
    <>
      <Header value={searchTitle} onChange={handleSearchTitle} />
      <Form onSubmit={handlerNotes} />
      <NoteList
        notes={activeNotes}
        active={true}
        onArchive={onArchivedHandler}
        onDelete={onDeleteHandler}
      />
      <NoteList
        notes={archivedNotes}
        active={false}
        onArchive={onArchivedHandler}
        onDelete={onDeleteHandler}
      />
    </>
  );
}
