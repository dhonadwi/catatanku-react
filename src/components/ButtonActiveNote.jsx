import React from 'react';

function ButtonActiveNote({ id, onActive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onActive(id)}>
      Pindahkan
    </button>
  );
}

export default ButtonActiveNote;
