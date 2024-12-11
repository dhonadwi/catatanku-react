import React from 'react';

class NoteInput extends React.Component {
  render() {
    return (
      <div className="note-input">
        <h1>Buat Catatan</h1>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {this.props.limit}
        </p>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="title"
            value={this.props.title}
            onKeyUp={this.props.onTitleChange}
          />
          <textarea
            rows="10"
            cols="50"
            placeholder="body"
            value={this.props.body}
            onChange={this.props.onBodyChange}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
