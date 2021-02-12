import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import './App.css';

const initialFormState = { name: '', description: '' };

interface Note {
  name: string,
  description: string,
  id: string
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const apiData = await API.graphql({ query: listNotes });
    //@ts-ignore should have data type here
    setNotes(apiData.data.listNotes.items);
  }

  const createNote = async () => {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    //@ts-ignore
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  const deleteNote = async (n: Note) => {
    const newNotesArray = notes.filter(note => note.id !== n.id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id: n.id } } });
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
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
