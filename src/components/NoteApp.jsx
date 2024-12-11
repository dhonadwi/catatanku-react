import React from 'react';
import { getInitialData } from '../utils/';
import NoteActive from './NoteActive';
import NoteInput from './NoteInput';
import NoteHeader from './NoteHeader';
import NoteArchieved from './NoteArchieved';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      titleParams: '',
      originalNotes: [],
      limit: 50,
      title: '',
      body: '',
    };

    this.onParamChangeEventHandler = this.onParamChangeEventHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputan = event.key;
    const inputData = event.target.value;
    this.setState((prevState) => {
      if (inputData === '' && inputan === 'Backspace') {
        prevState.limit = 50;
      } else {
        if (inputan === 'Backspace' && prevState.limit < 50) {
          prevState.limit++;
        } else if (inputan !== 'Backspace' && prevState.limit > 0) {
          prevState.limit--;
        }
      }
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.onAddNoteHandler(this.state);
  }

  onParamChangeEventHandler(event) {
    const newTitle = event.target.value;

    this.setState({ titleParams: newTitle }, () => {
      const originalNotes = this.state.originalNotes;
      if (originalNotes.length === 0) {
        this.setState({ originalNotes: this.state.notes });
      }

      if (this.state.titleParams === '') {
        this.setState({ notes: originalNotes });
      } else {
        const filteredNotes = this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(newTitle.toLowerCase())
        );

        this.setState({ notes: filteredNotes });
      }
    });
  }

  onActiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    this.setState({ notes, originalNotes: notes });
  }

  onArchivedHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    this.setState({ notes, originalNotes: notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id != id);
    this.setState({ notes, originalNotes: notes });
  }

  onAddNoteHandler({ title, body }) {
    const date = new Date();
    this.setState((prevState) => {
      const newNote = {
        id: +new Date(),
        title,
        body,
        createdAt: date.toISOString(),
        archived: false,
      };

      return {
        notes: [...prevState.notes, newNote],
        originalNotes: [...prevState.notes, newNote],
      };
    });
  }

  render() {
    return (
      <>
        <NoteHeader
          titleParams={this.state.titleParams}
          onParamChange={this.onParamChangeEventHandler}
        />
        <div className="note-app__body">
          <NoteInput
            limit={this.state.limit}
            onTitleChange={this.onTitleChangeEventHandler}
            onBodyChange={this.onBodyChangeEventHandler}
            onSubmit={this.onSubmitEventHandler}
          />
          <NoteActive
            notes={this.state.notes.filter((note) => note.archived === false)}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
          />
          <NoteArchieved
            notes={this.state.notes.filter((note) => note.archived === true)}
            onDelete={this.onDeleteHandler}
            onActive={this.onActiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
