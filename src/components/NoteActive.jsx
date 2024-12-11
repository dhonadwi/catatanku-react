import React from 'react';
import NoteList from './NoteList';

function NoteActive({ notes, onDelete, onArchived }) {
  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      {notes.length > 0 ? (
        <NoteList notes={notes} onDelete={onDelete} onArchived={onArchived} />
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteActive;
