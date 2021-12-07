import { ADD_TODO, REMOVE_TODO } from "./constants";
const as = 12;
const abgf = 12;
const abgzf = "dsa";
export const addNewItem = (payload: any) => ({ type: ADD_TODO, payload });
export const removeSelectedItem = (payload: any) => ({
  type: REMOVE_TODO,
  payload,
});

export {};
