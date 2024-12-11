import React from 'react';

class NoteHeader extends React.Component {
  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <input
          type="text"
          placeholder="title"
          value={this.props.titleParams} // Controlled input
          onChange={this.props.onParamChange}
        />
      </div>
    );
  }
}

export default NoteHeader;
