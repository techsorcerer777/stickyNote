import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./root-reducers";
import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
