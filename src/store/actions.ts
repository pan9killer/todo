import { ADD_TODO, REMOVE_TODO } from "./constants";

const aaa = [1, 2, 3];

export const addNewItem = (payload: any) => ({ type: ADD_TODO, payload });
export const removeSelectedItem = (payload: any) => ({
  type: REMOVE_TODO,
  payload,
});

export {};
