import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IMPORTANT,
  TOGGLE_DONE,
  UPDATE,
} from "./constants";
import { IState } from "../interfaces/interfaces";

export const addNewItem = (payload: IState) => ({ type: ADD_TODO, payload });
export const toggleImportant = (payload: IState) => ({
  type: TOGGLE_IMPORTANT,
  payload,
});
export const toggleDone = (payload: IState) => ({ type: TOGGLE_DONE, payload });
export const removeSelectedItem = (payload: IState) => ({
  type: REMOVE_TODO,
  payload,
});
export const searchData = (payload: string) => ({ type: UPDATE, payload });
