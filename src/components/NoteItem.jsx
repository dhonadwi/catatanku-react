import React from 'react';
import NoteItemBody from './NoteItemBody';
import ButtonDeleteNote from './ButtonDeleteNote';
import ButtonArchivedNote from './ButtonArchivedNote';
import ButtonActiveNote from './ButtonActiveNote';

function NoteItem({
  status,
  id,
  title,
  createdAt,
  body,
  onDelete,
  onArchived,
  onActive,
}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <ButtonDeleteNote id={id} onDelete={onDelete} />
      {!status ? (
        <ButtonArchivedNote id={id} onArchived={onArchived} />
      ) : (
        <ButtonActiveNote id={id} onActive={onActive} />
      )}
    </div>
  );
}

export default NoteItem;
