import notesReducer from "../redux/slice";
import { NoteStateType } from "../redux/type";

export type StateType = {
  notes: NoteStateType;
};

const rootReducers = {
  notes: notesReducer,
};

export default rootReducers;
