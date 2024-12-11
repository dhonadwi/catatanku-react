import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchived, onActive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          id={note.id}
          status={note.archived}
          onDelete={onDelete}
          onArchived={onArchived}
          onActive={onActive}
        />
      ))}
    </div>
  );
}

export default NoteList;
