import { all, fork } from "redux-saga/effects";
import { watchNotes } from "../redux/saga";

const rootSaga = function* () {
  yield all([fork(watchNotes)]);
};

export default rootSaga;
