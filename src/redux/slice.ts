import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { NoteStateType } from "./type";

const initialState: NoteStateType = {
  data: [],
  isLoading: false,
  error: false,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    requestGetNotes: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    onGetNotesSuccess: (state, action: PayloadAction<NoteType[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    onGetNotesFail: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    requestCreateNote: (state, _) => {
      state.isLoading = true;
      state.error = false;
    },
    onCreateNoteSuccess: (state) => {
      state.isLoading = false;
    },
    onCreateNoteFail: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    requestUpdateNote: (state, _) => {
      state.isLoading = true;
      state.error = false;
    },
    onUpdateNoteSuccess: (state) => {
      state.isLoading = false;
    },
    onUpdateNoteFail: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    requestDeleteNote: (state, _) => {
      state.isLoading = true;
      state.error = false;
    },
    onDeleteNoteSuccess: (state) => {
      state.isLoading = false;
    },
    onDeleteNoteFail: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const {
  requestGetNotes,
  onGetNotesSuccess,
  onGetNotesFail,
  requestCreateNote,
  onCreateNoteSuccess,
  onCreateNoteFail,
  requestUpdateNote,
  onUpdateNoteSuccess,
  onUpdateNoteFail,
  requestDeleteNote,
  onDeleteNoteSuccess,
  onDeleteNoteFail,
} = notesSlice.actions;

export default notesSlice.reducer;
