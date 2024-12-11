import React from 'react';
import NoteList from './NoteList';

function NoteArchieved({ notes, onDelete, onActive }) {
  return (
    <div className="note-app__body">
      <h2>Arsip</h2>
      {/* <NoteList notes={notes} onDelete={onDelete} onActive={onActive} /> */}
      {notes.length > 0 ? (
        <NoteList notes={notes} onDelete={onDelete} onActive={onActive} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteArchieved;
