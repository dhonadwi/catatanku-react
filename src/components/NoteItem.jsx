import React from 'react';
import Button from './Button';
import showFormattedDate from '../utils';

export default function NoteItem({ note, onArchive, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <Button onClick={() => onArchive(note.id)} text={'Pindahkan'} />
      <Button onClick={() => onDelete(note.id)} text={'Delete'} />
    </div>
  );
}
