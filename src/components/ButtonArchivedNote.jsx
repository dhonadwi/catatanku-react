import React from 'react';

function ButtonArchivedNote({ id, onArchived }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchived(id)}
    >
      Arsipkan
    </button>
  );
}

export default ButtonArchivedNote;
