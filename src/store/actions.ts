import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IMPORTANT,
  TOGGLE_DONE,
  SEARCH_DATA,
} from "./constants";
import { IState } from "../interfaces/interfaces";

export const addNewItem = (payload: IState) => ({ type: ADD_TODO, payload });
export const toggleImportant = (payload: number) => ({
  type: TOGGLE_IMPORTANT,
  payload,
});
export const toggleDone = (payload: number) => ({
  type: TOGGLE_DONE,
  payload,
});
export const removeSelectedItem = (payload: number) => ({
  type: REMOVE_TODO,
  payload,
});
export const searchData = (payload: string) => ({
  type: SEARCH_DATA,
  payload,
});
