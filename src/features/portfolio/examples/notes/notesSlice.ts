import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../../../app/store';
import { API, Storage } from 'aws-amplify';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { Note } from './types'

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: []
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    updateNotes: (state, action: PayloadAction<Note[]>) => {
        state.notes = action.payload;
    }
  },
});

export const { updateNotes } = notesSlice.actions;

export const getNotes = (): AppThunk => async (dispatch) => {
    const apiData = await API.graphql({ query: listNotes });
    // @ts-ignore
    const notesFromAPI = apiData.data.listNotes.items;
    
    console.log(notesFromAPI)

    await Promise.all(notesFromAPI.map(async (note: Note) => {
        if (note.image) {
          const image = await Storage.get(note.image);
          note.image = image;
        }
        return note;
      }));
    await dispatch(updateNotes(notesFromAPI));
}

export const createNoteAsync = (formData: any): AppThunk => async (dispatch) => {
    console.log(formData);
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    dispatch(getNotes());
}

export const deleteNoteAsync = (id: string): AppThunk => async (dispatch) => {
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
    dispatch(getNotes());
}

export const selectNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;
