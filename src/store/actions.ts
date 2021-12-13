import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IMPORTANT,
  TOGGLE_DONE,
  UPDATE,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_DONE,
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
export const showAll = () => ({ type: SHOW_ALL });
export const showActive = () => ({
  type: SHOW_ACTIVE,
});
export const showDone = () => ({ type: SHOW_DONE });
