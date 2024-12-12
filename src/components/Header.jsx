import React from 'react';
export default function Header({ searchTitle, onChange }) {
  return (
    <div className="note-app__header">
      <h1>CatatanKu</h1>
      <input
        type="text"
        placeholder="title"
        value={searchTitle}
        onChange={onChange}
      />
    </div>
  );
}
