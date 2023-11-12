import { StateType } from "../utils/root-reducers";
import { useSelector } from "react-redux";

export const selectorNotes = () =>
  useSelector((state: StateType) => state.notes).data;

export const selectorIsLoading = () =>
  useSelector((state: StateType) => state.notes).isLoading;
