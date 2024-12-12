import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, active, onArchive, onDelete }) {
  return (
    <div className="note-app__body">
      <h2>{active ? 'Catatan aktif' : 'Catatan Diarsipkan'}</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            note={note}
            key={note.id}
            onArchive={onArchive}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
