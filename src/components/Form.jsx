import React, { useState } from 'react';

export default function Form({ onSubmit }) {
  const [limit, setLimit] = useState(20);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleLimit(event) {
    if (event.key === 'Backspace') {
      // Jika pengguna menghapus semua karakter, reset limit ke 20
      if (title.length === 1) {
        setLimit(20);
      } else {
        setLimit((prevLimit) => Math.min(20, prevLimit + 1));
      }
    } else {
      // Kurangi limit hanya jika masih ada sisa limit
      setLimit((prevLimit) => Math.max(0, prevLimit - 1));
    }
  }

  function handleTitle(event) {
    const value = event.target.value;

    // Jika limit > 0, tambahkan karakter baru
    if (limit > 0) {
      setTitle(value);
    } else {
      // Jika limit 0, cegah perubahan
      setTitle(value.substring(0, 20));
    }
  }

  function handleBody(event) {
    setBody(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddNoteHandler({ title, body });
  }

  function onAddNoteHandler({ title, body }) {
    if (!title || !body) return;
    const date = new Date();
    // this.setState((prevState) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: date.toISOString(),
      archived: false,
    };

    // return {
    //   notes: [...prevState.notes, newNote],
    //   originalNotes: [...prevState.notes, newNote],
    // };
    onSubmit(newNote);
    setBody('');
    setTitle('');
    setLimit(20);
  }

  return (
    <div className="note-app__body">
      <div className="note-input">
        <h1>Buat Catatan</h1>
        <p className="note-input__title__char-limit">Sisa Karakter : {limit}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onKeyDown={handleLimit}
            onChange={handleTitle}
            maxLength={20}
          />
          <textarea
            rows="10"
            cols="50"
            placeholder="body"
            value={body}
            onChange={handleBody}
            // onKeyDown={handleBody}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    </div>
  );
}
