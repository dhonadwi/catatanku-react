import React from 'react';

export default function Button({ id, onClick, text }) {
  return (
    <button
      onClick={onClick}
      className={
        text === 'Pindahkan'
          ? 'note-item__archive-button'
          : 'note-item__delete-button'
      }
    >
      {text}
    </button>
  );
}
