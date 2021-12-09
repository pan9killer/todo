import { IState } from "../interfaces/interfaces";

export const createTodoItem = (label: string): IState => {
  return {
    label: label,
    important: false,
    done: false,
    id: Date.now(),
  };
};
