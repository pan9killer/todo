import {
  ADD_TODO,
  REMOVE_TODO,
  //   TOGGLE_STATUS
} from "./constants";
import { IActions, IState } from "../interfaces/interfaces";

const initialState = {
  todoData: [
    "Добавить изображения",
    "Вызвать стэйт",
    "Исправить стили",
    "Проработать индексы",
  ],
};

export const reducer = (state = initialState, action: IActions): IState => {
  switch (action.type) {
    case ADD_TODO:
      return { todoData: [...state.todoData, action.payload] };
    // case TOGGLE_STATUS:
    //   return { ...state, todo: action.payload };
    case REMOVE_TODO:
      const index = state.todoData[Number(action.payload)];
      const newState = state.todoData.filter((todo) => index !== todo);
      return { todoData: [...newState] };
    default:
      return state;
  }
};
