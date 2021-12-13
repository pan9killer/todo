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
import { IAction, ISearch, IState } from "../interfaces/interfaces";

const initialState: IState[] = [
  {
    label: "Добавить изображения",
    important: false,
    done: false,
    id: 0,
  },
  {
    label: "Исправить стили",
    important: false,
    done: false,
    id: 1,
  },
  {
    label: "Проработать индексы",
    important: false,
    done: false,
    id: 2,
  },
];

export const reducer = (state = initialState, action: IAction): IState[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_IMPORTANT:
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.important = !todo.important;
        }
        return true;
      });
      return [...state];

    case TOGGLE_DONE:
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.important = false;
          todo.done = !todo.done;
        }
        return true;
      });
      return [...state];

    case REMOVE_TODO:
      const newState = state.filter((todo) => action.payload.id !== todo.id);
      return [...newState];

    default:
      return state;
  }
};

const searchState: string = "";

export const searchReducer = (state = searchState, action: ISearch): string => {
  switch (action.type) {
    case UPDATE:
      return action.payload;

    default:
      return state;
  }
};

const statusState: "all" | "done" | "active" = "all";

export const statusReducer = (state = statusState, action: ISearch) => {
  switch (action.type) {
    case SHOW_ALL:
      return "all";

    case SHOW_ACTIVE:
      return "active";

    case SHOW_DONE:
      return "done";

    default:
      return state;
  }
};
