import {
  ADD_TODO,
  REMOVE_TODO,
  //  TOGGLE_STATUS
} from "./constants";

export const addNewItem = (payload: string) => ({ type: ADD_TODO, payload });
// export const toggleItemStatus = (payload: object) => ({
//   type: TOGGLE_STATUS,
//   payload,
// });
export const removeSelectedItem = (payload: number) => ({
  type: REMOVE_TODO,
  payload,
});
