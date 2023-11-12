import { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeLatest, select } from "redux-saga/effects";

import {
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
} from "./slice";
import { getNotes, storeNotes } from "../utils/asyncStorage";

function* getNotesSaga() {
  try {
    const notes: NoteType[] = yield getNotes();
    yield put(onGetNotesSuccess(notes));
  } catch (error) {
    yield put(onGetNotesFail());
  }
}

function* createNoteSaga({ payload: note }: PayloadAction<NoteType>) {
  try {
    const notes: NoteType[] = yield select((state) => state.notes.data);
    yield storeNotes([note, ...notes]);
    yield put(requestGetNotes());
    yield put(onCreateNoteSuccess());
  } catch (error) {
    yield put(onCreateNoteFail());
  }
}

function* updateNoteSaga({ payload: note }: PayloadAction<NoteType>) {
  try {
    const notes: NoteType[] = yield select((state) => state.notes.data);
    const filteredNotes = notes.filter(({ id }) => id !== note.id);
    yield call(storeNotes, [note, ...filteredNotes]);
    yield put(requestGetNotes());
    yield put(onUpdateNoteSuccess());
  } catch (error) {
    yield put(onUpdateNoteFail());
  }
}

function* deleteNoteSaga({ payload: { id } }: PayloadAction<{ id: string }>) {
  try {
    const notes: NoteType[] = yield select((state) => state.notes.data);
    const filteredNotes = notes.filter((note) => id !== note.id);

    yield call(storeNotes, filteredNotes);
    yield put(requestGetNotes());
    yield put(onDeleteNoteSuccess());
  } catch (error) {
    yield put(onDeleteNoteFail());
  }
}

export function* watchNotes() {
  yield takeLatest(requestGetNotes.type, getNotesSaga);
  yield takeLatest(requestCreateNote.type, createNoteSaga);
  yield takeLatest(requestUpdateNote.type, updateNoteSaga);
  yield takeLatest(requestDeleteNote.type, deleteNoteSaga);
}
