import React, { ChangeEvent, useEffect, useState } from 'react';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { Storage } from 'aws-amplify';

import { Note } from './types';
import { getNotes, deleteNoteAsync, createNoteAsync, selectNotes } from './notesSlice';
import '../../App.css';

const initialFormState = { name: '', description: '', image: '' };

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    await dispatch(getNotes());
  }

  const createNote = () => {
    if (!formData.name || !formData.description) return;
    dispatch(createNoteAsync(formData))
    setFormData(initialFormState);
  }

  const deleteNote = async (n: Note) => {
    dispatch(deleteNoteAsync(n.id));
  }

  const onChange = async (e?: ChangeEvent) => {
    //@ts-ignore
    if (!e.target.files[0]) return;

    //@ts-ignore
    const file: any = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(formData.image, file);
    fetchNotes();
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {notes && 
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              {
                note.image && <img src={note.image} style={{width: 400}} alt="note"/>
              }
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <div style={{width: '3rem', height: '3rem', borderRadius: '3rem', overflow: 'hidden'}}>
        <AmplifySignOut />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
