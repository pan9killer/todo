import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_IMPORTANT,
  TOGGLE_DONE,
  SEARCH_DATA,
} from "./constants";
import { IAdd, IToggleRemove, ISearch, IState } from "../interfaces/interfaces";

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

export const reducer = (
  state = initialState,
  action: IAdd | IToggleRemove | ISearch
): IState[] => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      return [...state, action.payload];

    case TOGGLE_IMPORTANT:
      // eslint-disable-next-line array-callback-return
      state.map((todo): void => {
        if (todo.id === action.payload) {
          todo.important = !todo.important;
        }
      });
      return [...state];

    case TOGGLE_DONE:
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.important = false;
          todo.done = !todo.done;
        }
        return true;
      });
      return [...state];

    case REMOVE_TODO:
      const newState = state.filter((todo) => action.payload !== todo.id);
      return [...newState];

    case SEARCH_DATA:
      console.log(action.payload);
      let newArr = state;
      if (action.payload !== "") {
        // eslint-disable-next-line array-callback-return
        newArr = newArr.filter((todo) => {
          todo.label.includes(action.payload);
          console.log(state);
        });

        console.log(newArr);
        console.log(state);
        return [...newArr];
      } else {
        return [...state];
      }

    default:
      return state;
  }
};
